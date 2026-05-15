#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
import math
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = REPO_ROOT / 'dashboard-data.js'
FRED_CSV_BASE_URL = 'https://fred.stlouisfed.org/graph/fredgraph.csv?id='
LOOKBACK_DAYS = 420
GLOBAL_NAME = 'SOVEREIGN_YIELD_DASHBOARD_DATA'

SERIES_CONFIG = {
    'DGS10': {'label': 'US 10Y Treasury yield', 'cadence': 'Daily market close', 'unit': '%', 'color': '#60a5fa'},
    'DGS2': {'label': 'US 2Y Treasury yield', 'cadence': 'Daily market close', 'unit': '%', 'color': '#2dd4bf'},
    'T10Y3M': {'label': 'US 10Y minus 3M spread', 'cadence': 'Daily market close', 'unit': 'pp', 'color': '#f59e0b'},
    'T10YIE': {'label': 'US 10Y breakeven inflation', 'cadence': 'Daily market close', 'unit': '%', 'color': '#f472b6'},
    'IRLTLT01GBM156N': {'label': 'UK 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#fb7185'},
    'IRLTLT01JPM156N': {'label': 'Japan 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#38bdf8'},
    'IRLTLT01CAM156N': {'label': 'Canada 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#34d399'},
    'IRLTLT01AUM156N': {'label': 'Australia 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#a78bfa'},
    'IRLTLT01EZM156N': {'label': 'Euro area 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#06b6d4'},
    'IRLTLT01DEM156N': {'label': 'Germany 10Y government yield', 'cadence': 'Monthly', 'unit': '%', 'color': '#84cc16'},
}

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


def make_point(date: str, value: float | None, status: str = 'present', series_id: str | None = None) -> dict[str, Any]:
    return {
        'date': date,
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
    with urllib.request.urlopen(url, timeout=30) as response:
        body = response.read().decode('utf-8', 'ignore')
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


def compute_cross_market_dispersion(observations: dict[str, dict[str, Any]]) -> tuple[float | None, list[str]]:
    values = []
    members = []
    for series_id in ['DGS10', 'IRLTLT01GBM156N', 'IRLTLT01JPM156N', 'IRLTLT01CAM156N', 'IRLTLT01AUM156N', 'IRLTLT01EZM156N', 'IRLTLT01DEM156N']:
        value = observations.get(series_id, {}).get('value')
        if value is None:
            continue
        values.append(float(value))
        members.append(series_id)
    if len(values) < 2:
        return None, members
    return max(values) - min(values), members


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
    dgs10 = observations['DGS10']
    dgs2 = observations['DGS2']
    t10y3m = observations['T10Y3M']
    t10yie = observations['T10YIE']
    uk10 = observations['IRLTLT01GBM156N']
    jp10 = observations['IRLTLT01JPM156N']
    ca10 = observations['IRLTLT01CAM156N']
    au10 = observations['IRLTLT01AUM156N']
    ez10 = observations['IRLTLT01EZM156N']
    de10 = observations['IRLTLT01DEM156N']

    us10_status = classify_banded(dgs10['value'], watch_high=4.25, alarm_high=4.75)
    curve_2s10s = None if dgs10['value'] is None or dgs2['value'] is None else float(dgs10['value']) - float(dgs2['value'])
    curve_2s10s_status = 'ok'
    if curve_2s10s is None:
        curve_2s10s_status = 'missing'
    elif curve_2s10s <= -0.50 or (curve_2s10s >= 1.00 and (dgs10['value'] or 0) >= 4.75):
        curve_2s10s_status = 'alarm'
    elif curve_2s10s <= 0.0 or (curve_2s10s >= 0.50 and (dgs10['value'] or 0) >= 4.25):
        curve_2s10s_status = 'watch'

    curve_10y3m_status = 'ok'
    t10y3m_value = t10y3m['value']
    if t10y3m_value is None:
        curve_10y3m_status = 'missing'
    elif t10y3m_value <= -0.25 or (t10y3m_value >= 1.25 and (dgs10['value'] or 0) >= 4.75):
        curve_10y3m_status = 'alarm'
    elif t10y3m_value <= 0.0 or (t10y3m_value >= 1.00 and (dgs10['value'] or 0) >= 4.50):
        curve_10y3m_status = 'watch'

    breakeven_status = classify_banded(t10yie['value'], watch_high=2.60, alarm_high=3.00)
    uk10_status = classify_banded(uk10['value'], watch_high=4.75, alarm_high=5.25)
    jp10_status = classify_banded(jp10['value'], watch_high=1.75, alarm_high=2.50)
    ca10_status = classify_banded(ca10['value'], watch_high=3.75, alarm_high=4.50)
    au10_status = classify_banded(au10['value'], watch_high=4.50, alarm_high=5.00)
    ez10_status = classify_banded(ez10['value'], watch_high=3.25, alarm_high=3.75)
    de10_status = classify_banded(de10['value'], watch_high=2.75, alarm_high=3.25)

    dispersion_value, dispersion_members = compute_cross_market_dispersion(observations)
    dispersion_status = classify_banded(dispersion_value, watch_high=2.50, alarm_high=3.25)

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
            key='us_2s10s_spread',
            label='US 2Y/10Y spread',
            value=curve_2s10s,
            unit='pp',
            status=curve_2s10s_status,
            latest_date=max(dgs10['date'], dgs2['date']),
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
            key='euro_area_10y_yield',
            label='Euro area 10Y government yield',
            value=ez10['value'],
            unit='%',
            status=ez10_status,
            latest_date=ez10['date'],
            why='The euro area long rate is a broad policy-and-growth cross-check that helps distinguish purely Anglo inflation pressure from wider developed-market duration repricing.',
            action='If red, assume European long-end conditions are joining the warning stack and raise the bar for any benign global disinflation story.',
            thresholds='OK < 3.25%; watch 3.25–3.74%; alarm ≥ 3.75%.',
            source='FRED IRLTLT01EZM156N',
            cadence='Monthly OECD long-term rate',
            bands=build_bands('%', (None, 3.25), [(3.25, 3.75)], [(3.75, None)]),
            components=[ez10],
        ),
        indicator_dict(
            key='germany_10y_yield',
            label='Germany 10Y government yield',
            value=de10['value'],
            unit='%',
            status=de10_status,
            latest_date=de10['date'],
            why='Bund yields are a clean European duration anchor; a notable rise matters even when stress is not obvious in risk assets yet.',
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
            latest_date=max(value['date'] for key, value in observations.items() if key in dispersion_members),
            why='A wide developed-market yield spread says sovereign markets are not moving as one block; policy, inflation, or fiscal stress is becoming more country-specific.',
            action='If red, stop using a single “global rates” story. Review country-specific risk separately and raise the bar for cross-market analogies.',
            thresholds='OK < 250 bp; watch 250–324 bp; alarm ≥ 325 bp.',
            source='Derived from US, UK, Japan, Canada, Australia, euro area, and Germany 10Y yields.',
            cadence='Mixed daily/monthly composite',
            bands=build_bands('pp', (None, 2.50), [(2.50, 3.25)], [(3.25, None)]),
            components=[observations[s] for s in dispersion_members],
        ),
    ]

    indicator_statuses = [item['status'] for item in indicators]
    alarm_count = sum(1 for item in indicators if item['status'] == 'alarm')
    warning_count = sum(1 for item in indicators if item['status'] in {'watch', 'stale'})
    overall_status = max_status(indicator_statuses)

    inflation_pressure = max_status([us10_status, breakeven_status, uk10_status, au10_status, ez10_status, de10_status])
    growth_warning = max_status([curve_2s10s_status, curve_10y3m_status])
    sovereign_stress = max_status([dispersion_status, uk10_status, jp10_status, ez10_status, de10_status])

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
            'drivers': 'US 10Y level, breakeven inflation, UK 10Y, Australia 10Y, euro area 10Y, and Germany 10Y act as the main inflation-and-duration composite.',
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
            'drivers': 'Cross-market 10Y dispersion plus UK, Japan, euro area, and Germany stress proxies indicate whether sovereign markets are decoupling.',
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
            'label': '2s10s',
            'value': format_value(curve_2s10s, 'pp'),
            'note': 'Recession vs bear-steepener lens',
            'status': curve_2s10s_status,
        },
        {
            'label': 'Dispersion',
            'value': format_value(dispersion_value, 'pp'),
            'note': 'Max minus min 10Y across tracked sovereigns including euro area and Germany',
            'status': dispersion_status,
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
            build_history_series('us_2s10s_spread', 'US 2Y/10Y spread', 'pp', '#f59e0b', build_curve_history(histories['DGS10'], histories['DGS2']), indicators[1]['bands']),
            build_history_series('us_10y_3m_spread', 'US 10Y/3M spread', 'pp', SERIES_CONFIG['T10Y3M']['color'], histories['T10Y3M'], indicators[2]['bands']),
            build_history_series('us_10y_breakeven', 'US 10Y breakeven inflation', '%', SERIES_CONFIG['T10YIE']['color'], histories['T10YIE'], indicators[3]['bands']),
            build_history_series('uk_10y_yield', 'UK 10Y government yield', '%', SERIES_CONFIG['IRLTLT01GBM156N']['color'], histories['IRLTLT01GBM156N'], indicators[4]['bands']),
            build_history_series('japan_10y_yield', 'Japan 10Y government yield', '%', SERIES_CONFIG['IRLTLT01JPM156N']['color'], histories['IRLTLT01JPM156N'], indicators[5]['bands']),
            build_history_series('canada_10y_yield', 'Canada 10Y government yield', '%', SERIES_CONFIG['IRLTLT01CAM156N']['color'], histories['IRLTLT01CAM156N'], indicators[6]['bands']),
            build_history_series('australia_10y_yield', 'Australia 10Y government yield', '%', SERIES_CONFIG['IRLTLT01AUM156N']['color'], histories['IRLTLT01AUM156N'], indicators[7]['bands']),
            build_history_series('euro_area_10y_yield', 'Euro area 10Y government yield', '%', SERIES_CONFIG['IRLTLT01EZM156N']['color'], histories['IRLTLT01EZM156N'], indicators[8]['bands']),
            build_history_series('germany_10y_yield', 'Germany 10Y government yield', '%', SERIES_CONFIG['IRLTLT01DEM156N']['color'], histories['IRLTLT01DEM156N'], indicators[9]['bands']),
            build_history_series('cross_market_dispersion', 'Cross-market 10Y dispersion', 'pp', '#e879f9', build_dispersion_history(histories), indicators[10]['bands']),
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
        'regime_cards': regime_cards,
        'indicators': indicators,
        'history': history,
        'threshold_policy': [
            'Green / OK: keep normal review cadence; no warning is being asserted by the rules.',
            'Amber / watch: add the signal to the next macro review; do not assume a benign backdrop.',
            'Red / alarm: the rule set is explicitly flagging a non-benign sovereign-yield condition that deserves immediate review.',
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
            'Euro area and Germany were added as generic European rate anchors so the dashboard is not overfit to Anglo/Japan/commodity-country moves alone.',
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
    member_ids = ['DGS10', 'IRLTLT01GBM156N', 'IRLTLT01JPM156N', 'IRLTLT01CAM156N', 'IRLTLT01AUM156N', 'IRLTLT01EZM156N', 'IRLTLT01DEM156N']
    values_by_date: dict[str, list[float]] = {}
    for series_id in member_ids:
        for point in histories[series_id]:
            values_by_date.setdefault(point['date'], []).append(point['value'])
    out = []
    for date in sorted(values_by_date):
        values = values_by_date[date]
        if len(values) < 2:
            continue
        out.append(make_point(date, max(values) - min(values), 'present'))
    return out


def regime_headline(status: str, alarm_count: int, warning_count: int) -> str:
    if status == 'alarm':
        return f'Escalated sovereign-yield warning stack: {alarm_count} alarm signals and {warning_count} watch signals are active.'
    if status == 'watch':
        return f'Caution regime: {warning_count} watch signals are active, but the dashboard is not in full alarm.'
    return 'Contained regime: tracked sovereign-yield signals are within the dashboard’s normal review bands.'


def regime_phrase(label: str, status: str) -> str:
    if status == 'alarm':
        return f'{label} is in alarm.'
    if status == 'watch':
        return f'{label} is elevated.'
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
    histories['T10Y3M'] = with_status(histories['T10Y3M'], lambda value: classify_banded(value, watch_low=0.0, alarm_low=-0.25, watch_high=1.00, alarm_high=1.25))
    histories['T10YIE'] = with_status(histories['T10YIE'], lambda value: classify_banded(value, watch_high=2.60, alarm_high=3.00))
    histories['IRLTLT01GBM156N'] = with_status(histories['IRLTLT01GBM156N'], lambda value: classify_banded(value, watch_high=4.75, alarm_high=5.25))
    histories['IRLTLT01JPM156N'] = with_status(histories['IRLTLT01JPM156N'], lambda value: classify_banded(value, watch_high=1.75, alarm_high=2.50))
    histories['IRLTLT01CAM156N'] = with_status(histories['IRLTLT01CAM156N'], lambda value: classify_banded(value, watch_high=3.75, alarm_high=4.50))
    histories['IRLTLT01AUM156N'] = with_status(histories['IRLTLT01AUM156N'], lambda value: classify_banded(value, watch_high=4.50, alarm_high=5.00))
    histories['IRLTLT01EZM156N'] = with_status(histories['IRLTLT01EZM156N'], lambda value: classify_banded(value, watch_high=3.25, alarm_high=3.75))
    histories['IRLTLT01DEM156N'] = with_status(histories['IRLTLT01DEM156N'], lambda value: classify_banded(value, watch_high=2.75, alarm_high=3.25))

    observations = latest_observations_from_histories(histories)
    histories = {series_id: history_since(points, start_cutoff(series_id)) for series_id, points in histories.items()}
    return build_dashboard_payload(observations=observations, histories=histories, generated_at=generated_at)


def start_cutoff(series_id: str) -> str:
    now = datetime.now(timezone.utc)
    if series_id in {'DGS10', 'DGS2', 'T10Y3M', 'T10YIE'}:
        return (now - timedelta(days=LOOKBACK_DAYS)).date().isoformat()
    return (now - timedelta(days=900)).date().isoformat()


def main() -> None:
    payload = build_live_payload()
    bundle = render_dashboard_bundle(payload)
    OUTPUT_PATH.write_text(bundle)
    print(f'wrote {OUTPUT_PATH}')


if __name__ == '__main__':
    main()
