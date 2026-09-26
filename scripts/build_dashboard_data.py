#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
import math
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = REPO_ROOT / 'dashboard-data.js'
FRED_CSV_BASE_URL = 'https://fred.stlouisfed.org/graph/fredgraph.csv?id='
LOOKBACK_DAYS = 420
GLOBAL_NAME = 'SOVEREIGN_YIELD_DASHBOARD_DATA'

SERIES_CONFIG = {
    'DGS10': {'label': 'US 10Y Treasury yield', 'cadence': 'Daily market close', 'unit': '%', 'color': '#60a5fa', 'kind': 'daily'},
    'DGS2': {'label': 'US 2Y Treasury yield', 'cadence': 'Daily market close', 'unit': '%', 'color': '#2dd4bf', 'kind': 'daily'},
    'DGS30': {'label': 'US 30Y Treasury yield', 'cadence': 'Daily market close', 'unit': '%', 'color': '#c084fc', 'kind': 'daily'},
    'T10Y3M': {'label': 'US 10Y minus 3M spread', 'cadence': 'Daily market close', 'unit': 'pp', 'color': '#f59e0b', 'kind': 'daily'},
    'T10YIE': {'label': 'US 10Y breakeven inflation', 'cadence': 'Daily market close', 'unit': '%', 'color': '#f472b6', 'kind': 'daily'},
    'IRLTLT01GBM156N': {'label': 'UK 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#fb7185', 'kind': 'monthly'},
    'IRLTLT01JPM156N': {'label': 'Japan 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#38bdf8', 'kind': 'monthly'},
    'IRLTLT01CAM156N': {'label': 'Canada 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#34d399', 'kind': 'monthly'},
    'IRLTLT01AUM156N': {'label': 'Australia 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#a78bfa', 'kind': 'monthly'},
    'IRLTLT01DEM156N': {'label': 'Germany 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#84cc16', 'kind': 'monthly'},
}

DISPERSION_MEMBERS = [
    'DGS10',
    'IRLTLT01GBM156N',
    'IRLTLT01JPM156N',
    'IRLTLT01CAM156N',
    'IRLTLT01AUM156N',
    'IRLTLT01DEM156N',
]

COMPOSITE_WEIGHTS = {
    'duration': 0.30,
    'inflation': 0.25,
    'growth': 0.25,
    'divergence': 0.20,
}

DAILY_STALE_BUSINESS_DAYS = 3
MONTHLY_STALE_CALENDAR_DAYS = 45

STATUS_ORDER = {'missing': 0, 'ok': 1, 'watch': 2, 'stale': 2, 'alarm': 3}


@dataclass
class ThresholdBand:
    label: str
    status: str
    from_value: float | None
    to_value: float | None

    def as_dict(self) -> dict[str, Any]:
        return {
            'label': self.label,
            'status': self.status,
            'from': self.from_value,
            'to': self.to_value,
        }


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')


def parse_as_of(generated_at: str | None) -> datetime:
    if not generated_at:
        return datetime.now(timezone.utc)
    text = generated_at.strip()
    if text.endswith('Z'):
        text = text[:-1] + '+00:00'
    return datetime.fromisoformat(text).astimezone(timezone.utc)


def status_rank(value: str) -> int:
    return STATUS_ORDER.get(value or 'missing', 0)


def max_status(values: list[str]) -> str:
    if not values:
        return 'missing'
    return max(values, key=status_rank)


def format_value(value: float | None, unit: str) -> str:
    if value is None or not math.isfinite(value):
        return 'n/a'
    if unit == '%':
        return f'{value:.2f}%'
    if unit == 'pp':
        return f'{value * 100:.0f} bp'
    return f'{value:.2f}'


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def rounded_int(value: float, low: int = 1, high: int = 100) -> int:
    return int(round(clamp(value, low, high)))


def average_scores(scores: list[int | None]) -> int | None:
    present = [int(score) for score in scores if score is not None]
    if not present:
        return None
    return rounded_int(sum(present) / len(present))


def regime_score(value: float | None, watch: float, alarm: float, low_is_bad: bool = False) -> int | None:
    if value is None or not math.isfinite(value):
        return None
    value = float(value)
    if low_is_bad:
        if value <= alarm:
            return 90
        if value <= watch:
            span = max(watch - alarm, 1e-9)
            return rounded_int(60 + ((watch - value) / span) * 30)
        return rounded_int(18 + max(0.0, (watch - value)) * 12)
    if value >= alarm:
        return 90
    if value >= watch:
        span = max(alarm - watch, 1e-9)
        return rounded_int(60 + ((value - watch) / span) * 30)
    return rounded_int(18 + max(0.0, (value - watch + (watch * 0.35))) / max(watch * 0.35, 1e-9) * 18)


def composite_band(score: int) -> tuple[str, str]:
    # Retuned slightly after Option A (inflation = T10YIE-only; growth = max inversion/bear-steepener).
    if score >= 84:
        return 'Big Print zone', 'alarm'
    if score >= 64:
        return 'Fiscal-duration stress', 'alarm'
    if score >= 44:
        return 'Non-benign regime', 'watch'
    if score >= 24:
        return 'Friction building', 'watch'
    return 'Disinflation-friendly', 'ok'


def normalize_percentage_map(raw_values: dict[str, float]) -> dict[str, int]:
    cleaned = {key: max(0.0, float(value)) for key, value in raw_values.items()}
    total = sum(cleaned.values()) or 1.0
    scaled = {key: (value / total) * 100 for key, value in cleaned.items()}
    floors = {key: int(math.floor(value)) for key, value in scaled.items()}
    remainder = 100 - sum(floors.values())
    ranked = sorted(scaled, key=lambda key: scaled[key] - floors[key], reverse=True)
    for key in ranked[:remainder]:
        floors[key] += 1
    return floors


def business_days_old(observation: date, as_of_day: date) -> int:
    if as_of_day <= observation:
        return 0
    days = 0
    cursor = observation
    while cursor < as_of_day:
        cursor += timedelta(days=1)
        if cursor.weekday() < 5:
            days += 1
    return days


def freshness_status(latest_date: str, kind: str, as_of: datetime | None = None) -> str:
    if not latest_date:
        return 'missing'
    as_of = as_of or datetime.now(timezone.utc)
    try:
        observation = date.fromisoformat(latest_date[:10])
    except ValueError:
        return 'missing'
    as_of_day = as_of.astimezone(timezone.utc).date()
    if kind == 'daily':
        return 'stale' if business_days_old(observation, as_of_day) > DAILY_STALE_BUSINESS_DAYS else 'fresh'
    return 'stale' if (as_of_day - observation).days > MONTHLY_STALE_CALENDAR_DAYS else 'fresh'


def apply_freshness(value_status: str, latest_date: str, kind: str, as_of: datetime | None = None) -> str:
    if value_status == 'missing':
        return 'missing'
    fresh = freshness_status(latest_date, kind, as_of=as_of)
    if fresh == 'missing':
        return 'missing'
    if fresh == 'stale':
        # Stale is a real visible status for old prints. Alarm still wins for actionability.
        if value_status == 'alarm':
            return 'alarm'
        return 'stale'
    return value_status


def classify_2s10s_status(spread: float | None, dgs10_value: float | None) -> str:
    if spread is None or dgs10_value is None or not math.isfinite(spread) or not math.isfinite(dgs10_value):
        return 'missing'
    if spread <= -0.50 or (spread >= 1.00 and dgs10_value >= 4.75):
        return 'alarm'
    if spread <= 0.0 or (spread >= 0.50 and dgs10_value >= 4.25):
        return 'watch'
    return 'ok'


def classify_10y3m_status(spread: float | None, dgs10_value: float | None) -> str:
    if spread is None or not math.isfinite(spread):
        return 'missing'
    dgs10_value = float(dgs10_value) if dgs10_value is not None and math.isfinite(dgs10_value) else 0.0
    if spread <= -0.25 or (spread >= 1.25 and dgs10_value >= 4.75):
        return 'alarm'
    if spread <= 0.0 or (spread >= 1.00 and dgs10_value >= 4.50):
        return 'watch'
    return 'ok'


def inversion_score(curve_2s10s: float | None, t10y3m_value: float | None) -> int | None:
    return average_scores([
        regime_score(curve_2s10s, 0.0, -0.50, low_is_bad=True),
        regime_score(t10y3m_value, 0.0, -0.25, low_is_bad=True),
    ])


def bear_steepener_component(
    spread: float | None,
    dgs10_value: float | None,
    *,
    watch_spread: float,
    alarm_spread: float,
    watch_10y: float,
    alarm_10y: float,
) -> int | None:
    if spread is None or dgs10_value is None or not math.isfinite(spread) or not math.isfinite(dgs10_value):
        return None
    if spread >= alarm_spread and dgs10_value >= alarm_10y:
        return 90
    if spread >= watch_spread and dgs10_value >= watch_10y:
        spread_t = clamp((spread - watch_spread) / max(alarm_spread - watch_spread, 1e-9), 0.0, 1.0)
        rate_t = clamp((dgs10_value - watch_10y) / max(alarm_10y - watch_10y, 1e-9), 0.0, 1.0)
        return rounded_int(60 + 30 * min(spread_t, rate_t))
    if spread > 0 and dgs10_value >= watch_10y - 0.25:
        return rounded_int(22 + min(spread, alarm_spread) / max(alarm_spread, 1e-9) * 18)
    return 18


def bear_steepener_score(curve_2s10s: float | None, t10y3m_value: float | None, dgs10_value: float | None) -> int | None:
    parts = [
        bear_steepener_component(
            curve_2s10s,
            dgs10_value,
            watch_spread=0.50,
            alarm_spread=1.00,
            watch_10y=4.25,
            alarm_10y=4.75,
        ),
        bear_steepener_component(
            t10y3m_value,
            dgs10_value,
            watch_spread=1.00,
            alarm_spread=1.25,
            watch_10y=4.50,
            alarm_10y=4.75,
        ),
    ]
    present = [part for part in parts if part is not None]
    if not present:
        return None
    return max(present)


def growth_score_option_a(curve_2s10s: float | None, t10y3m_value: float | None, dgs10_value: float | None) -> int | None:
    inversion = inversion_score(curve_2s10s, t10y3m_value)
    bear = bear_steepener_score(curve_2s10s, t10y3m_value, dgs10_value)
    if inversion is None and bear is None:
        return None
    if inversion is None:
        return bear
    if bear is None:
        return inversion
    return max(inversion, bear)


def build_composite_regime(
    *,
    overall_status: str,
    duration_score: int | None,
    inflation_score: int | None,
    growth_score: int | None,
    divergence_score: int | None,
    us10_status: str,
    us30_status: str,
    breakeven_status: str,
    curve_2s10s_status: str,
    curve_10y3m_status: str,
    dispersion_status: str,
    input_statuses: list[str] | None = None,
) -> dict[str, Any]:
    raw_scores = {
        'duration': duration_score,
        'inflation': inflation_score,
        'growth': growth_score,
        'divergence': divergence_score,
    }
    available = {key: int(value) for key, value in raw_scores.items() if value is not None}
    nominal_weights = dict(COMPOSITE_WEIGHTS)
    if not available:
        score = 50
        effective_weights = {key: 0.0 for key in COMPOSITE_WEIGHTS}
        band_label, band_status = 'Unavailable', 'missing'
    else:
        weight_total = sum(COMPOSITE_WEIGHTS[key] for key in available) or 1.0
        effective_weights = {
            key: (COMPOSITE_WEIGHTS[key] / weight_total if key in available else 0.0)
            for key in COMPOSITE_WEIGHTS
        }
        score = rounded_int(sum(effective_weights[key] * available[key] for key in available))
        band_label, band_status = composite_band(score)

    duration_for_odds = available.get('duration', 50)
    inflation_for_odds = available.get('inflation', 50)
    growth_for_odds = available.get('growth', 50)
    divergence_for_odds = available.get('divergence', 50)

    raw_odds = {
        'recession': (growth_for_odds * 1.10) + max(0.0, 65 - inflation_for_odds) * 0.35 + max(0.0, 55 - duration_for_odds) * 0.25,
        'stagflation': (inflation_for_odds * 0.95) + (duration_for_odds * 0.45) + (divergence_for_odds * 0.30),
        'big_print': max(0.0, duration_for_odds - 40) * 0.55 + max(0.0, inflation_for_odds - 35) * 0.35 + (divergence_for_odds * 0.25) + (10 if score >= 75 else 0) + (8 if us30_status == 'alarm' else 0) + (6 if breakeven_status == 'alarm' else 0),
        'benign_disinflation': max(8.0, 150 - (score * 1.40) - (inflation_for_odds * 0.45) - (duration_for_odds * 0.20)),
    }
    scenario_odds = normalize_percentage_map(raw_odds)

    if score >= 84:
        interpretation = 'The dashboard is signaling a policy-instability setup: long-end sovereign yields, inflation pressure, and cross-market stress are aligned enough that orderly disinflation is no longer the base assumption.'
        expectation = 'Base case: volatile stagflation or funding-stress conditions with a rising chance that policymakers lean toward liquidity support, repression, or some other indirect rescue if long-end yields stay disorderly.'
        investment_bias = [
            'Favor liquidity, T-bills/cash, short-duration income, inflation-aware assets, and selective hard-asset or anti-fragile equity exposure.',
            'Avoid leaning on easy-cuts narratives, long nominal duration, or leverage-sensitive cyclicals as if sovereign financing conditions are calm.',
            'Keep dry powder above normal; if funding new risk, prefer trimming prior high-beta winners before touching safety-income buckets.',
        ]
        warning = 'This is not a crash forecast. It is a warning that policy-reaction risk itself is becoming investable.'
    elif score >= 64:
        interpretation = 'Sovereign yields are high enough, and broad enough across developed markets, that the dashboard is explicitly rejecting a benign macro read.'
        expectation = 'Base case: slower growth with sticky inflation pressure. Tail risk is not just recession; it is a stagflationary or fiscal-duration stress regime if the 30Y and breakevens stay elevated.'
        investment_bias = [
            'Favor cash/T-bills, short duration, selective real assets, and high-quality cash-generators over duration-dependent narratives.',
            'Be cautious on long-duration growth bought purely on lower-rate hopes and on long nominal bonds without a compelling entry reason.',
            'If adding risk, stagger entries and preserve dry powder; if trimming, source capital from prior high-beta winners first.',
        ]
        warning = 'If the 30Y and breakevens remain elevated together, read this meter as stagflation/fiscal-stress first, not as a clean recession trade.'
    elif score >= 44:
        interpretation = 'The dashboard is warning that sovereign-yield conditions are non-benign, but the signal mix is not yet a full policy-panic setup.'
        expectation = 'Base case: mixed regime. Growth scare and inflation persistence are both live possibilities, so one-factor narratives deserve less confidence.'
        investment_bias = [
            'Favor balanced posture: some liquidity, some defensives, and only selective duration if inflation pressure is easing.',
            'Avoid all-in positioning on either hard landing or soft landing without confirmation from both the curve and long-end yields.',
            'Keep new risk sized modestly until the dashboard either clears or escalates.',
        ]
        warning = 'This band can flip quickly: if long-end yields accelerate, the read shifts toward stagflation; if inflation pressure cools, the curve can reassert a recession-first signal.'
    elif score >= 24:
        interpretation = 'Friction is building, but the dashboard is not yet asserting a full sovereign-stress regime.'
        expectation = 'Base case: cautious normality. Macro review cadence should increase, but the data do not yet justify treating sovereign-yield stress as the dominant market driver.'
        investment_bias = [
            'Favor ordinary allocation discipline with a modest liquidity buffer.',
            'Avoid overreacting to one isolated indicator when the composite remains below the non-benign band.',
            'Use this as a watchlist regime rather than a forced-rotation regime.',
        ]
        warning = 'A few additional upgrades, especially in the 30Y or breakevens, can move this section into a more actionable warning state.'
    else:
        interpretation = 'The dashboard is not seeing strong evidence of sovereign-yield stress. Normal review cadence is still appropriate.'
        expectation = 'Base case: benign disinflation or at least a contained macro backdrop, subject to routine monitoring.'
        investment_bias = [
            'Favor normal allocation discipline and selective duration rather than a special sovereign-stress posture.',
            'Avoid turning one-off moves into regime calls without composite confirmation.',
            'No special dry-powder rule is implied by this dashboard state.',
        ]
        warning = 'Composite dashboard inference only; not a forecast guarantee.'

    drivers = []
    if us30_status == 'alarm':
        drivers.append('US 30Y is in alarm, pointing to long-end fiscal-duration stress.')
    if breakeven_status == 'alarm':
        drivers.append('10Y breakevens are in alarm, so nominal-yield pressure looks inflationary rather than purely growth-led.')
    if curve_2s10s_status == 'alarm' or curve_10y3m_status == 'alarm':
        drivers.append('Curve structure is still warning that recession or policy-error risk cannot be dismissed.')
    if dispersion_status in {'watch', 'alarm'}:
        drivers.append('Cross-market sovereign dispersion is elevated, so country-specific fiscal or policy stress is broadening the signal.')
    if us10_status == 'watch' and us30_status == 'watch':
        drivers.append('Both the US 10Y and 30Y are elevated, keeping duration assumptions under pressure even without full alarm.')
    if any(status == 'stale' for status in (input_statuses or [])):
        drivers.append('One or more composite inputs are stale, so the meter should be read with reduced confidence until fresher prints arrive.')
    if not drivers:
        drivers.append('The composite is being driven mostly by contained indicator readings rather than a concentrated alarm cluster.')

    meter_status = band_status if overall_status != 'missing' else 'missing'
    if meter_status != 'missing' and any(status == 'stale' for status in (input_statuses or [])):
        # Stale inputs reduce confidence: surface stale unless the band is already alarm.
        if meter_status in {'ok', 'watch'}:
            meter_status = 'stale'
    if not available:
        meter_status = 'missing'

    return {
        'score': score,
        'label': 'Sovereign Stress Meter',
        'band_label': band_label,
        'status': meter_status,
        'subscores': {
            'duration': duration_score,
            'inflation': inflation_score,
            'growth': growth_score,
            'divergence': divergence_score,
        },
        'weights': nominal_weights,
        'effective_weights': {key: round(value, 4) for key, value in effective_weights.items()},
        'scenario_odds': [
            {'key': 'recession', 'label': 'Recession', 'value': scenario_odds['recession']},
            {'key': 'stagflation', 'label': 'Stagflation', 'value': scenario_odds['stagflation']},
            {'key': 'big_print', 'label': 'Big Print / policy rescue', 'value': scenario_odds['big_print']},
            {'key': 'benign_disinflation', 'label': 'Benign disinflation', 'value': scenario_odds['benign_disinflation']},
        ],
        'drivers': drivers,
        'interpretation': interpretation,
        'expectation': expectation,
        'investment_bias': investment_bias,
        'warning': warning,
        'disclaimer': 'Composite dashboard inference, not a forecast guarantee or personalized investment advice.',
    }


def make_point(date_value: str, value: float | None, status: str = 'present', series_id: str | None = None) -> dict[str, Any]:
    return {
        'date': date_value,
        'value': value,
        'status': status,
        'series_id': series_id,
    }


def classify_banded(value: float | None, watch_low: float | None = None, alarm_low: float | None = None, watch_high: float | None = None, alarm_high: float | None = None) -> str:
    if value is None or not math.isfinite(value):
        return 'missing'
    if alarm_low is not None and value <= alarm_low:
        return 'alarm'
    if alarm_high is not None and value >= alarm_high:
        return 'alarm'
    if watch_low is not None and value <= watch_low:
        return 'watch'
    if watch_high is not None and value >= watch_high:
        return 'watch'
    return 'ok'


def build_bands(unit: str, ok_range: tuple[float | None, float | None], watch_ranges: list[tuple[float | None, float | None]], alarm_ranges: list[tuple[float | None, float | None]]) -> list[dict[str, Any]]:
    bands: list[ThresholdBand] = []
    for low, high in alarm_ranges:
        bands.append(ThresholdBand(f'Alarm {format_range(low, high, unit)}', 'alarm', low, high))
    for low, high in watch_ranges:
        bands.append(ThresholdBand(f'Watch {format_range(low, high, unit)}', 'watch', low, high))
    ok_low, ok_high = ok_range
    bands.append(ThresholdBand(f'OK {format_range(ok_low, ok_high, unit)}', 'ok', ok_low, ok_high))
    return [band.as_dict() for band in bands]


def format_range(low: float | None, high: float | None, unit: str) -> str:
    def fmt(v: float | None) -> str:
        if v is None:
            return '∞'
        if unit == 'pp':
            return f'{v * 100:.0f} bp'
        return f'{v:.2f}%'

    if low is None and high is None:
        return 'all values'
    if low is None:
        return f'< {fmt(high)}'
    if high is None:
        return f'≥ {fmt(low)}'
    return f'{fmt(low)} to {fmt(high)}'


def fetch_fred_series(series_id: str, lookback_days: int | None = None) -> list[dict[str, Any]]:
    url = f'{FRED_CSV_BASE_URL}{series_id}'
    if lookback_days:
        observation_start = (datetime.now(timezone.utc) - timedelta(days=lookback_days)).date().isoformat()
        url = f'{url}&cosd={observation_start}'

    body = ''
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(url, timeout=30) as response:
                body = response.read().decode('utf-8', 'ignore')
            break
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            last_error = exc
            if attempt < 2:
                time.sleep(0.5 * (2 ** attempt))
                continue
            raise RuntimeError(f'FRED fetch failed for series {series_id} after 3 attempts: {exc}') from exc
    if last_error is not None and not body:
        raise RuntimeError(f'FRED fetch failed for series {series_id} after 3 attempts: {last_error}')

    reader = csv.DictReader(body.splitlines())
    points: list[dict[str, Any]] = []
    for row in reader:
        raw = row.get(series_id) or ''
        if not raw or raw == '.':
            continue
        try:
            value = float(raw)
        except ValueError:
            continue
        points.append(make_point(row['observation_date'], value, 'present', series_id))
    return points


def latest_point(points: list[dict[str, Any]]) -> dict[str, Any]:
    return points[-1] if points else {'date': '', 'value': None, 'status': 'missing'}


def latest_observations_from_histories(histories: dict[str, list[dict[str, Any]]]) -> dict[str, dict[str, Any]]:
    observations: dict[str, dict[str, Any]] = {}
    for series_id, points in histories.items():
        latest = latest_point(points)
        config = SERIES_CONFIG[series_id]
        observations[series_id] = {
            'series_id': series_id,
            'label': config['label'],
            'date': latest.get('date', ''),
            'value': latest.get('value'),
            'status': 'present' if latest.get('value') is not None else 'missing',
        }
    return observations


def history_since(points: list[dict[str, Any]], start_date: str) -> list[dict[str, Any]]:
    filtered = [point for point in points if point['date'] >= start_date]
    return filtered or points[-60:]


def month_key(date_value: str) -> str:
    return date_value[:7]


def values_by_month(points: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    monthly: dict[str, dict[str, Any]] = {}
    for point in points:
        if point.get('value') is None:
            continue
        monthly[month_key(point['date'])] = point
    return monthly


def compute_cross_market_dispersion(
    histories: dict[str, list[dict[str, Any]]],
    member_ids: list[str] | None = None,
) -> tuple[float | None, list[str], str]:
    member_ids = member_ids or DISPERSION_MEMBERS
    monthly_maps = {series_id: values_by_month(histories.get(series_id, [])) for series_id in member_ids}
    all_months = set()
    for mapping in monthly_maps.values():
        all_months.update(mapping)

    def coverage(month: str) -> int:
        return sum(1 for series_id in member_ids if month in monthly_maps[series_id])

    full_months = [month for month in all_months if coverage(month) == len(member_ids)]
    if full_months:
        chosen = max(full_months)
    else:
        partial = [month for month in all_months if coverage(month) >= 2]
        if not partial:
            return None, [], ''
        chosen = max(partial)

    values: list[float] = []
    members: list[str] = []
    dates: list[str] = []
    for series_id in member_ids:
        point = monthly_maps[series_id].get(chosen)
        if not point:
            continue
        values.append(float(point['value']))
        members.append(series_id)
        dates.append(point['date'])
    if len(values) < 2:
        return None, members, max(dates) if dates else ''
    return max(values) - min(values), members, max(dates)


def indicator_dict(
    *,
    key: str,
    label: str,
    value: float | None,
    unit: str,
    status: str,
    latest_date: str,
    why: str,
    action: str,
    thresholds: str,
    source: str,
    cadence: str,
    bands: list[dict[str, Any]],
    components: list[dict[str, Any]],
) -> dict[str, Any]:
    return {
        'key': key,
        'label': label,
        'value': value,
        'value_label': format_value(value, unit),
        'unit': unit,
        'status': status,
        'latest_date': latest_date,
        'why': why,
        'action': action,
        'thresholds': thresholds,
        'source': source,
        'cadence': cadence,
        'bands': bands,
        'components': components,
    }


def build_history_series(key: str, label: str, unit: str, color: str, points: list[dict[str, Any]], bands: list[dict[str, Any]]) -> dict[str, Any]:
    return {
        'key': key,
        'label': label,
        'unit': unit,
        'color': color,
        'latest_status': points[-1].get('status', 'missing') if points else 'missing',
        'bands': bands,
        'points': [{'date': point['date'], 'value': point['value'], 'status': point.get('status', 'ok')} for point in points if point.get('value') is not None],
    }


def with_status(points: list[dict[str, Any]], status_fn) -> list[dict[str, Any]]:
    out = []
    for point in points:
        copy = dict(point)
        copy['status'] = status_fn(point.get('value'))
        out.append(copy)
    return out


def build_dashboard_payload(observations: dict[str, dict[str, Any]], histories: dict[str, list[dict[str, Any]]], generated_at: str | None = None) -> dict[str, Any]:
    generated_at = generated_at or utc_now_iso()
    as_of = parse_as_of(generated_at)
    dgs10 = observations['DGS10']
    dgs2 = observations['DGS2']
    dgs30 = observations['DGS30']
    t10y3m = observations['T10Y3M']
    t10yie = observations['T10YIE']
    uk10 = observations['IRLTLT01GBM156N']
    jp10 = observations['IRLTLT01JPM156N']
    ca10 = observations['IRLTLT01CAM156N']
    au10 = observations['IRLTLT01AUM156N']
    de10 = observations['IRLTLT01DEM156N']

    us10_status = apply_freshness(classify_banded(dgs10['value'], watch_high=4.25, alarm_high=4.75), dgs10['date'], 'daily', as_of)
    us30_status = apply_freshness(classify_banded(dgs30['value'], watch_high=4.75, alarm_high=5.10), dgs30['date'], 'daily', as_of)
    curve_2s10s = None if dgs10['value'] is None or dgs2['value'] is None else float(dgs10['value']) - float(dgs2['value'])
    curve_2s10s_date = max(dgs10['date'], dgs2['date']) if dgs10['date'] and dgs2['date'] else (dgs10['date'] or dgs2['date'])
    curve_2s10s_status = apply_freshness(classify_2s10s_status(curve_2s10s, dgs10['value']), curve_2s10s_date, 'daily', as_of)

    t10y3m_value = t10y3m['value']
    curve_10y3m_status = apply_freshness(classify_10y3m_status(t10y3m_value, dgs10['value']), t10y3m['date'], 'daily', as_of)

    breakeven_status = apply_freshness(classify_banded(t10yie['value'], watch_high=2.60, alarm_high=3.00), t10yie['date'], 'daily', as_of)
    uk10_status = apply_freshness(classify_banded(uk10['value'], watch_high=4.75, alarm_high=5.25), uk10['date'], 'monthly', as_of)
    jp10_status = apply_freshness(classify_banded(jp10['value'], watch_high=1.75, alarm_high=2.50), jp10['date'], 'monthly', as_of)
    ca10_status = apply_freshness(classify_banded(ca10['value'], watch_high=3.75, alarm_high=4.50), ca10['date'], 'monthly', as_of)
    au10_status = apply_freshness(classify_banded(au10['value'], watch_high=4.50, alarm_high=5.00), au10['date'], 'monthly', as_of)
    de10_status = apply_freshness(classify_banded(de10['value'], watch_high=2.75, alarm_high=3.25), de10['date'], 'monthly', as_of)

    dispersion_value, dispersion_members, dispersion_date = compute_cross_market_dispersion(histories)
    dispersion_status = apply_freshness(
        classify_banded(dispersion_value, watch_high=2.50, alarm_high=3.25),
        dispersion_date,
        'monthly',
        as_of,
    )

    dgs10_by_date = {point['date']: point.get('value') for point in histories['DGS10']}
    curve_2s10s_history = []
    for point in build_curve_history(histories['DGS10'], histories['DGS2']):
        copy = dict(point)
        copy['status'] = classify_2s10s_status(point.get('value'), dgs10_by_date.get(point['date']))
        curve_2s10s_history.append(copy)

    dispersion_history = with_status(
        build_dispersion_history(histories),
        lambda value: classify_banded(value, watch_high=2.50, alarm_high=3.25),
    )

    indicators = [
        indicator_dict(
            key='us_10y_yield',
            label='US 10Y Treasury yield',
            value=dgs10['value'],
            unit='%',
            status=us10_status,
            latest_date=dgs10['date'],
            why='High long-end U.S. rates tighten global duration conditions and raise the hurdle for risk assets, housing, and refinancing.',
            action='If red persists, assume duration is expensive: shorten review horizons, avoid assuming lower discount rates, and revisit rate-sensitive exposure.',
            thresholds='OK < 4.25%; watch 4.25–4.74%; alarm ≥ 4.75%.',
            source='FRED DGS10',
            cadence='Daily market close',
            bands=build_bands('%', (None, 4.25), [(4.25, 4.75)], [(4.75, None)]),
            components=[dgs10],
        ),
        indicator_dict(
            key='us_30y_yield',
            label='US 30Y Treasury yield',
            value=dgs30['value'],
            unit='%',
            status=us30_status,
            latest_date=dgs30['date'],
            why='The 30Y is a cleaner long-end fiscal-duration and term-premium stress gauge than the 10Y alone when bond vigilante pressure is building.',
            action='If red, treat long-duration discount-rate assumptions as fragile and review any thesis that depends on orderly long-end funding conditions.',
            thresholds='OK < 4.75%; watch 4.75–5.09%; alarm ≥ 5.10%.',
            source='FRED DGS30',
            cadence='Daily market close',
            bands=build_bands('%', (None, 4.75), [(4.75, 5.10)], [(5.10, None)]),
            components=[dgs30],
        ),
        indicator_dict(
            key='us_2s10s_spread',
            label='US 2Y/10Y spread',
            value=curve_2s10s,
            unit='pp',
            status=curve_2s10s_status,
            latest_date=curve_2s10s_date,
            why='A deep inversion points to recession or policy-error risk; a steep bear move with high long rates points to fiscal-duration stress.',
            action='If alarmed, review whether the macro setup is recessionary inversion or bear steepening before adding cyclical or long-duration exposure.',
            thresholds='Watch if spread ≤ 0 bp, or ≥ 50 bp with 10Y ≥ 4.25%; alarm if ≤ -50 bp, or ≥ 100 bp with 10Y ≥ 4.75%.',
            source='FRED DGS10 and DGS2',
            cadence='Daily market close',
            bands=build_bands('pp', (0.0, 0.50), [(None, 0.0), (0.50, 1.0)], [(None, -0.50), (1.0, None)]),
            components=[dgs10, dgs2],
        ),
        indicator_dict(
            key='us_10y_3m_spread',
            label='US 10Y/3M spread',
            value=t10y3m_value,
            unit='pp',
            status=curve_10y3m_status,
            latest_date=t10y3m['date'],
            why='This is a classic recession-warning lens, but a sharp positive steepener alongside high 10Y rates can also flag renewed inflation or funding stress.',
            action='If alarmed, assume the curve is sending a non-benign macro signal and review whether you are underweight growth scare or inflation repricing risk.',
            thresholds='Watch if spread ≤ 0 bp, or ≥ 100 bp with 10Y ≥ 4.50%; alarm if ≤ -25 bp, or ≥ 125 bp with 10Y ≥ 4.75%.',
            source='FRED T10Y3M',
            cadence='Daily market close',
            bands=build_bands('pp', (0.0, 1.0), [(None, 0.0), (1.0, 1.25)], [(None, -0.25), (1.25, None)]),
            components=[t10y3m],
        ),
        indicator_dict(
            key='us_10y_breakeven',
            label='US 10Y breakeven inflation',
            value=t10yie['value'],
            unit='%',
            status=breakeven_status,
            latest_date=t10yie['date'],
            why='Breakevens reflect market-implied inflation compensation; persistent rises strengthen the case that nominal-yield pressure is inflationary rather than just growth-led.',
            action='If red, treat nominal-rate spikes as inflation-confirming until disproven and be skeptical of easy cuts narratives.',
            thresholds='OK < 2.60%; watch 2.60–2.99%; alarm ≥ 3.00%.',
            source='FRED T10YIE',
            cadence='Daily market close',
            bands=build_bands('%', (None, 2.60), [(2.60, 3.00)], [(3.00, None)]),
            components=[t10yie],
        ),
        indicator_dict(
            key='uk_10y_yield',
            label='UK 10Y government yield',
            value=uk10['value'],
            unit='%',
            status=uk10_status,
            latest_date=uk10['date'],
            why='Gilts are a useful sovereign stress barometer for a large developed market with fiscal sensitivity and its own inflation path.',
            action='If red, assume global duration stress is broadening beyond the U.S. and avoid treating foreign sovereign markets as a calm offset by default.',
            thresholds='OK < 4.75%; watch 4.75–5.24%; alarm ≥ 5.25%.',
            source='FRED IRLTLT01GBM156N',
            cadence='Monthly OECD long-term rate',
            bands=build_bands('%', (None, 4.75), [(4.75, 5.25)], [(5.25, None)]),
            components=[uk10],
        ),
        indicator_dict(
            key='japan_10y_yield',
            label='Japan 10Y government yield',
            value=jp10['value'],
            unit='%',
            status=jp10_status,
            latest_date=jp10['date'],
            why='Japanese yields rising from a low base can tighten the global funding backdrop and weaken the assumption that Japan remains a pure anchor market.',
            action='If red, treat yen-funded or global-duration complacency as weaker than usual and review cross-market carry assumptions.',
            thresholds='OK < 1.75%; watch 1.75–2.49%; alarm ≥ 2.50%.',
            source='FRED IRLTLT01JPM156N',
            cadence='Monthly OECD long-term rate',
            bands=build_bands('%', (None, 1.75), [(1.75, 2.50)], [(2.50, None)]),
            components=[jp10],
        ),
        indicator_dict(
            key='canada_10y_yield',
            label='Canada 10Y government yield',
            value=ca10['value'],
            unit='%',
            status=ca10_status,
            latest_date=ca10['date'],
            why='Canada provides a commodity-linked developed-market cross-check on whether rate pressure is broad and not just idiosyncratic U.S. noise.',
            action='If red, assume North American sovereign pressure is synchronizing and lower your confidence that the U.S. move is isolated.',
            thresholds='OK < 3.75%; watch 3.75–4.49%; alarm ≥ 4.50%.',
            source='FRED IRLTLT01CAM156N',
            cadence='Monthly OECD long-term rate',
            bands=build_bands('%', (None, 3.75), [(3.75, 4.50)], [(4.50, None)]),
            components=[ca10],
        ),
        indicator_dict(
            key='australia_10y_yield',
            label='Australia 10Y government yield',
            value=au10['value'],
            unit='%',
            status=au10_status,
            latest_date=au10['date'],
            why='Australia is a useful DM reflation and China-exposure proxy; rising yields there often confirm a broader global rate pulse.',
            action='If red, assume the long-end selloff is global enough to matter for cross-market asset pricing, not just a U.S. macro narrative.',
            thresholds='OK < 4.50%; watch 4.50–4.99%; alarm ≥ 5.00%.',
            source='FRED IRLTLT01AUM156N',
            cadence='Monthly OECD long-term rate',
            bands=build_bands('%', (None, 4.50), [(4.50, 5.00)], [(5.00, None)]),
            components=[au10],
        ),
        indicator_dict(
            key='germany_10y_yield',
            label='Germany 10Y government yield',
            value=de10['value'],
            unit='%',
            status=de10_status,
            latest_date=de10['date'],
            why='Bund yields are the live European duration anchor after the euro-area OECD aggregate series stalled; a notable rise matters even when stress is not obvious in risk assets yet.',
            action='If red, assume the euro-area risk-free curve itself is repricing higher and stop treating European rates as a passive stabilizer.',
            thresholds='OK < 2.75%; watch 2.75–3.24%; alarm ≥ 3.25%.',
            source='FRED IRLTLT01DEM156N',
            cadence='Monthly OECD long-term rate',
            bands=build_bands('%', (None, 2.75), [(2.75, 3.25)], [(3.25, None)]),
            components=[de10],
        ),
        indicator_dict(
            key='cross_market_dispersion',
            label='Cross-market 10Y dispersion',
            value=dispersion_value,
            unit='pp',
            status=dispersion_status,
            latest_date=dispersion_date,
            why='A wide developed-market yield spread says sovereign markets are not moving as one block; policy, inflation, or fiscal stress is becoming more country-specific. Dispersion is aligned on the last common month across constituents.',
            action='If red, stop using a single “global rates” story. Review country-specific risk separately and raise the bar for cross-market analogies.',
            thresholds='OK < 250 bp; watch 250–324 bp; alarm ≥ 325 bp.',
            source='Derived from US, UK, Japan, Canada, Australia, and Germany 10Y yields (common-month aligned).',
            cadence='Common-month composite',
            bands=build_bands('pp', (None, 2.50), [(2.50, 3.25)], [(3.25, None)]),
            components=[observations[series_id] for series_id in dispersion_members if series_id in observations],
        ),
    ]

    indicator_statuses = [item['status'] for item in indicators]
    alarm_count = sum(1 for item in indicators if item['status'] == 'alarm')
    warning_count = sum(1 for item in indicators if item['status'] in {'watch', 'stale'})
    overall_status = max_status(indicator_statuses)

    duration_score = average_scores([
        regime_score(dgs10['value'], 4.25, 4.75),
        regime_score(dgs30['value'], 4.75, 5.10),
    ])
    # Option A: inflation = US breakevens only (room reserved for a future 5Y5Y companion).
    inflation_score = regime_score(t10yie['value'], 2.60, 3.00)
    growth_score = growth_score_option_a(curve_2s10s, t10y3m_value, dgs10['value'])
    divergence_score = average_scores([
        regime_score(dispersion_value, 2.50, 3.25),
        regime_score(jp10['value'], 1.75, 2.50),
        regime_score(ca10['value'], 3.75, 4.50),
        regime_score(au10['value'], 4.50, 5.00),
    ])

    inflation_pressure = max_status([us10_status, us30_status, breakeven_status])
    growth_warning = max_status([curve_2s10s_status, curve_10y3m_status])
    sovereign_stress = max_status([dispersion_status, jp10_status, ca10_status, au10_status, de10_status, uk10_status])
    composite_input_statuses = [
        us10_status,
        us30_status,
        breakeven_status,
        curve_2s10s_status,
        curve_10y3m_status,
        dispersion_status,
        jp10_status,
        ca10_status,
        au10_status,
    ]
    composite_regime = build_composite_regime(
        overall_status=overall_status,
        duration_score=duration_score,
        inflation_score=inflation_score,
        growth_score=growth_score,
        divergence_score=divergence_score,
        us10_status=us10_status,
        us30_status=us30_status,
        breakeven_status=breakeven_status,
        curve_2s10s_status=curve_2s10s_status,
        curve_10y3m_status=curve_10y3m_status,
        dispersion_status=dispersion_status,
        input_statuses=composite_input_statuses,
    )

    regime_cards = [
        {
            'label': 'Overall sovereign-yield regime',
            'status': overall_status,
            'headline': regime_headline(overall_status, alarm_count, warning_count),
            'drivers': 'Inflation pressure, curve shape, and cross-market divergence are combined into a transparent warning stack.',
            'implication': 'Use this as a review trigger, not a trading signal. Red means the dashboard is explicitly warning that duration and macro assumptions need review.',
        },
        {
            'label': 'Inflation and duration pressure',
            'status': inflation_pressure,
            'headline': regime_phrase('Inflation-pressure regime', inflation_pressure),
            'drivers': 'US 10Y level, US 30Y, and 10Y breakeven inflation are the primary inflation-and-duration composite under Option A.',
            'implication': 'Higher readings argue against easy disinflation narratives and against assuming lower discount rates are imminent.',
        },
        {
            'label': 'Curve and growth warning',
            'status': growth_warning,
            'headline': regime_phrase('Curve-warning regime', growth_warning),
            'drivers': 'US 2s10s and 10Y/3M spreads separate benign normalization from inversion or high-rate bear steepening.',
            'implication': 'Watch for recession risk on one side and non-benign steepening on the other; do not treat every steep curve as healthy growth.',
        },
        {
            'label': 'Cross-country sovereign divergence',
            'status': sovereign_stress,
            'headline': regime_phrase('Sovereign-divergence regime', sovereign_stress),
            'drivers': 'Common-month cross-market 10Y dispersion plus Japan, Canada, Australia, UK, and Germany stress proxies indicate whether sovereign markets are decoupling.',
            'implication': 'When this is elevated, country-specific fiscal/policy narratives matter more than one-size-fits-all global-rate stories.',
        },
    ]

    hero_cards = [
        {
            'label': 'Overall regime',
            'value': status_label(overall_status),
            'note': f'{alarm_count} alarm · {warning_count} watch',
            'status': overall_status,
        },
        {
            'label': 'US 10Y',
            'value': format_value(dgs10['value'], '%'),
            'note': 'Primary duration-pressure anchor',
            'status': us10_status,
        },
        {
            'label': 'US 30Y',
            'value': format_value(dgs30['value'], '%'),
            'note': 'Long-end fiscal and term-premium stress anchor',
            'status': us30_status,
        },
        {
            'label': '2s10s',
            'value': format_value(curve_2s10s, 'pp'),
            'note': 'Recession vs bear-steepener lens',
            'status': curve_2s10s_status,
        },
    ]

    start_date_candidates = []
    end_date_candidates = []
    for points in histories.values():
        if points:
            start_date_candidates.append(points[0]['date'])
            end_date_candidates.append(points[-1]['date'])
    start_date = min(start_date_candidates) if start_date_candidates else ''
    end_date = max(end_date_candidates) if end_date_candidates else ''

    history = {
        'start_date': start_date,
        'end_date': end_date,
        'series': [
            build_history_series('us_10y_yield', 'US 10Y Treasury yield', '%', SERIES_CONFIG['DGS10']['color'], histories['DGS10'], indicators[0]['bands']),
            build_history_series('us_30y_yield', 'US 30Y Treasury yield', '%', SERIES_CONFIG['DGS30']['color'], histories['DGS30'], indicators[1]['bands']),
            build_history_series('us_2s10s_spread', 'US 2Y/10Y spread', 'pp', '#f59e0b', curve_2s10s_history, indicators[2]['bands']),
            build_history_series('us_10y_3m_spread', 'US 10Y/3M spread', 'pp', SERIES_CONFIG['T10Y3M']['color'], histories['T10Y3M'], indicators[3]['bands']),
            build_history_series('us_10y_breakeven', 'US 10Y breakeven inflation', '%', SERIES_CONFIG['T10YIE']['color'], histories['T10YIE'], indicators[4]['bands']),
            build_history_series('uk_10y_yield', 'UK 10Y government yield', '%', SERIES_CONFIG['IRLTLT01GBM156N']['color'], histories['IRLTLT01GBM156N'], indicators[5]['bands']),
            build_history_series('japan_10y_yield', 'Japan 10Y government yield', '%', SERIES_CONFIG['IRLTLT01JPM156N']['color'], histories['IRLTLT01JPM156N'], indicators[6]['bands']),
            build_history_series('canada_10y_yield', 'Canada 10Y government yield', '%', SERIES_CONFIG['IRLTLT01CAM156N']['color'], histories['IRLTLT01CAM156N'], indicators[7]['bands']),
            build_history_series('australia_10y_yield', 'Australia 10Y government yield', '%', SERIES_CONFIG['IRLTLT01AUM156N']['color'], histories['IRLTLT01AUM156N'], indicators[8]['bands']),
            build_history_series('germany_10y_yield', 'Germany 10Y government yield', '%', SERIES_CONFIG['IRLTLT01DEM156N']['color'], histories['IRLTLT01DEM156N'], indicators[9]['bands']),
            build_history_series('cross_market_dispersion', 'Cross-market 10Y dispersion', 'pp', '#e879f9', dispersion_history, indicators[10]['bands']),
        ],
    }

    latest_dates = [item['latest_date'] for item in indicators if item['latest_date']]
    latest_observation = max(latest_dates) if latest_dates else ''

    return {
        'generated_at': generated_at,
        'title': 'Sovereign Yield Regime Dashboard',
        'summary': {
            'overall_status': overall_status,
            'alarm_count': alarm_count,
            'warning_count': warning_count,
            'indicator_count': len(indicators),
            'latest_observation': latest_observation,
        },
        'hero_cards': hero_cards,
        'composite_regime': composite_regime,
        'regime_cards': regime_cards,
        'indicators': indicators,
        'history': history,
        'threshold_policy': [
            'Green / OK: keep normal review cadence; no warning is being asserted by the rules.',
            'Amber / watch: add the signal to the next macro review; do not assume a benign backdrop.',
            'Red / alarm: the rule set is explicitly flagging a non-benign sovereign-yield condition that deserves immediate review.',
            'Gray / stale: daily prints older than 3 business days or monthly prints older than 45 calendar days are marked stale and reduce confidence in the composite.',
            'These are transparent dashboard warnings, not investment advice or a forecast guarantee.',
        ],
        'source_status': {
            key: observations[key]['status'] for key in observations
        },
        'tracked_sources': [
            {'series_id': series_id, 'label': config['label'], 'cadence': config['cadence']} for series_id, config in SERIES_CONFIG.items()
        ],
        'notes': [
            'This dashboard is deliberately public-data-only and generic. No personal accounts, balances, credentials, or broker exports are read.',
            'International 10Y series are monthly OECD/FRED feeds, so cross-country comparisons update more slowly than the U.S. daily series.',
            'Dispersion is computed on the last common month across constituents so daily U.S. prints are not max-min mixed against mismatched monthly dates.',
            'US 30Y was added alongside the 10Y because the extra duration can surface fiscal and term-premium stress earlier than a 10Y-only lens.',
            'Germany is the live euro-area duration anchor; the euro-area OECD aggregate (IRLTLT01EZM156N) was dropped after it stalled at 2026-01-01 on FRED.',
            'The composite stress meter follows Option A: inflation = T10YIE, growth = max(inversion, bear-steepener), divergence = dispersion + JP/CA/AU, with missing inputs excluded and weights renormalized.',
            'The value of the dashboard is in the explicit thresholds and action text, not in pretending bond-market interpretation is certain.',
        ],
    }


def build_curve_history(long_points: list[dict[str, Any]], short_points: list[dict[str, Any]]) -> list[dict[str, Any]]:
    short_by_date = {point['date']: point for point in short_points}
    out = []
    for long_point in long_points:
        short_point = short_by_date.get(long_point['date'])
        if not short_point:
            continue
        value = long_point['value'] - short_point['value']
        out.append(make_point(long_point['date'], value, 'present'))
    return out


def build_dispersion_history(histories: dict[str, list[dict[str, Any]]]) -> list[dict[str, Any]]:
    monthly_maps = {series_id: values_by_month(histories.get(series_id, [])) for series_id in DISPERSION_MEMBERS}
    all_months = set()
    for mapping in monthly_maps.values():
        all_months.update(mapping)
    out = []
    for month in sorted(all_months):
        values = []
        dates = []
        for series_id in DISPERSION_MEMBERS:
            point = monthly_maps[series_id].get(month)
            if not point:
                continue
            values.append(float(point['value']))
            dates.append(point['date'])
        if len(values) < 2:
            continue
        out.append(make_point(max(dates), max(values) - min(values), 'present'))
    return out


def regime_headline(status: str, alarm_count: int, warning_count: int) -> str:
    if status == 'alarm':
        return f'Escalated sovereign-yield warning stack: {alarm_count} alarm signals and {warning_count} watch signals are active.'
    if status == 'watch':
        return f'Caution regime: {warning_count} watch signals are active, but the dashboard is not in full alarm.'
    if status == 'stale':
        return f'Stale-data regime: {warning_count} watch/stale signals are active and fresher prints are needed before treating the stack as current.'
    return 'Contained regime: tracked sovereign-yield signals are within the dashboard’s normal review bands.'


def regime_phrase(label: str, status: str) -> str:
    if status == 'alarm':
        return f'{label} is in alarm.'
    if status == 'watch':
        return f'{label} is elevated.'
    if status == 'stale':
        return f'{label} is stale.'
    if status == 'ok':
        return f'{label} is contained.'
    return f'{label} is unavailable.'


def status_label(status: str) -> str:
    return {'ok': 'OK', 'watch': 'WATCH', 'alarm': 'ALARM', 'stale': 'STALE', 'missing': 'MISSING'}.get(status, str(status).upper())


def render_dashboard_bundle(payload: dict[str, Any]) -> str:
    return f'globalThis.{GLOBAL_NAME} = ' + json.dumps(payload, indent=2, sort_keys=False) + ';\n'


def build_live_payload(generated_at: str | None = None) -> dict[str, Any]:
    histories: dict[str, list[dict[str, Any]]] = {}
    for series_id in SERIES_CONFIG:
        histories[series_id] = fetch_fred_series(series_id, LOOKBACK_DAYS)

    histories['DGS10'] = with_status(histories['DGS10'], lambda value: classify_banded(value, watch_high=4.25, alarm_high=4.75))
    histories['DGS30'] = with_status(histories['DGS30'], lambda value: classify_banded(value, watch_high=4.75, alarm_high=5.10))
    histories['T10Y3M'] = with_status(histories['T10Y3M'], lambda value: classify_banded(value, watch_low=0.0, alarm_low=-0.25, watch_high=1.00, alarm_high=1.25))
    histories['T10YIE'] = with_status(histories['T10YIE'], lambda value: classify_banded(value, watch_high=2.60, alarm_high=3.00))
    histories['IRLTLT01GBM156N'] = with_status(histories['IRLTLT01GBM156N'], lambda value: classify_banded(value, watch_high=4.75, alarm_high=5.25))
    histories['IRLTLT01JPM156N'] = with_status(histories['IRLTLT01JPM156N'], lambda value: classify_banded(value, watch_high=1.75, alarm_high=2.50))
    histories['IRLTLT01CAM156N'] = with_status(histories['IRLTLT01CAM156N'], lambda value: classify_banded(value, watch_high=3.75, alarm_high=4.50))
    histories['IRLTLT01AUM156N'] = with_status(histories['IRLTLT01AUM156N'], lambda value: classify_banded(value, watch_high=4.50, alarm_high=5.00))
    histories['IRLTLT01DEM156N'] = with_status(histories['IRLTLT01DEM156N'], lambda value: classify_banded(value, watch_high=2.75, alarm_high=3.25))

    observations = latest_observations_from_histories(histories)
    histories = {series_id: history_since(points, start_cutoff(series_id)) for series_id, points in histories.items()}
    return build_dashboard_payload(observations=observations, histories=histories, generated_at=generated_at)


def start_cutoff(series_id: str) -> str:
    now = datetime.now(timezone.utc)
    if series_id in {'DGS10', 'DGS2', 'DGS30', 'T10Y3M', 'T10YIE'}:
        return (now - timedelta(days=LOOKBACK_DAYS)).date().isoformat()
    return (now - timedelta(days=900)).date().isoformat()


def main() -> None:
    payload = build_live_payload()
    bundle = render_dashboard_bundle(payload)
    OUTPUT_PATH.write_text(bundle)
    print(f'wrote {OUTPUT_PATH}')


if __name__ == '__main__':
    main()
