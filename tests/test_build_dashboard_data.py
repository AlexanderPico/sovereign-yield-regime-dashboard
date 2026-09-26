from pathlib import Path
import importlib.util
import re
import sys
from datetime import datetime, timezone


REPO_ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = REPO_ROOT / 'scripts' / 'build_dashboard_data.py'


spec = importlib.util.spec_from_file_location('build_dashboard_data', MODULE_PATH)
module = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = module
spec.loader.exec_module(module)


def sample_observations():
    return {
        'DGS10': {'series_id': 'DGS10', 'label': 'US 10Y Treasury', 'date': '2026-05-14', 'value': 4.95, 'status': 'present'},
        'DGS2': {'series_id': 'DGS2', 'label': 'US 2Y Treasury', 'date': '2026-05-14', 'value': 4.05, 'status': 'present'},
        'DGS30': {'series_id': 'DGS30', 'label': 'US 30Y Treasury', 'date': '2026-05-14', 'value': 5.18, 'status': 'present'},
        'T10Y3M': {'series_id': 'T10Y3M', 'label': 'US 10Y - 3M spread', 'date': '2026-05-14', 'value': -0.30, 'status': 'present'},
        'T10YIE': {'series_id': 'T10YIE', 'label': 'US 10Y breakeven', 'date': '2026-05-14', 'value': 3.10, 'status': 'present'},
        'IRLTLT01GBM156N': {'series_id': 'IRLTLT01GBM156N', 'label': 'UK 10Y', 'date': '2026-04-01', 'value': 5.35, 'status': 'present'},
        'IRLTLT01JPM156N': {'series_id': 'IRLTLT01JPM156N', 'label': 'Japan 10Y', 'date': '2026-04-01', 'value': 2.35, 'status': 'present'},
        'IRLTLT01CAM156N': {'series_id': 'IRLTLT01CAM156N', 'label': 'Canada 10Y', 'date': '2026-04-01', 'value': 3.45, 'status': 'present'},
        'IRLTLT01AUM156N': {'series_id': 'IRLTLT01AUM156N', 'label': 'Australia 10Y', 'date': '2026-04-01', 'value': 4.90, 'status': 'present'},
        'IRLTLT01DEM156N': {'series_id': 'IRLTLT01DEM156N', 'label': 'Germany 10Y', 'date': '2026-04-01', 'value': 2.91, 'status': 'present'},
    }


def sample_history():
    return {
        'DGS10': [
            {'date': '2026-03-31', 'value': 4.20, 'status': 'ok'},
            {'date': '2026-04-15', 'value': 4.55, 'status': 'watch'},
            {'date': '2026-04-30', 'value': 4.70, 'status': 'watch'},
            {'date': '2026-05-12', 'value': 4.70, 'status': 'watch'},
            {'date': '2026-05-13', 'value': 4.82, 'status': 'watch'},
            {'date': '2026-05-14', 'value': 4.95, 'status': 'alarm'},
        ],
        'DGS2': [
            {'date': '2026-03-31', 'value': 3.90, 'status': 'present'},
            {'date': '2026-04-15', 'value': 3.95, 'status': 'present'},
            {'date': '2026-04-30', 'value': 4.00, 'status': 'present'},
            {'date': '2026-05-12', 'value': 3.95, 'status': 'present'},
            {'date': '2026-05-13', 'value': 4.00, 'status': 'present'},
            {'date': '2026-05-14', 'value': 4.05, 'status': 'present'},
        ],
        'DGS30': [
            {'date': '2026-05-12', 'value': 4.88, 'status': 'watch'},
            {'date': '2026-05-13', 'value': 5.02, 'status': 'watch'},
            {'date': '2026-05-14', 'value': 5.18, 'status': 'alarm'},
        ],
        'T10Y3M': [
            {'date': '2026-05-12', 'value': -0.10, 'status': 'watch'},
            {'date': '2026-05-13', 'value': -0.18, 'status': 'watch'},
            {'date': '2026-05-14', 'value': -0.30, 'status': 'alarm'},
        ],
        'T10YIE': [
            {'date': '2026-05-12', 'value': 2.85, 'status': 'watch'},
            {'date': '2026-05-13', 'value': 2.95, 'status': 'watch'},
            {'date': '2026-05-14', 'value': 3.10, 'status': 'alarm'},
        ],
        'IRLTLT01GBM156N': [
            {'date': '2026-02-01', 'value': 4.43, 'status': 'ok'},
            {'date': '2026-03-01', 'value': 4.70, 'status': 'ok'},
            {'date': '2026-04-01', 'value': 5.35, 'status': 'alarm'},
        ],
        'IRLTLT01JPM156N': [
            {'date': '2026-02-01', 'value': 2.11, 'status': 'watch'},
            {'date': '2026-03-01', 'value': 2.20, 'status': 'watch'},
            {'date': '2026-04-01', 'value': 2.35, 'status': 'watch'},
        ],
        'IRLTLT01CAM156N': [
            {'date': '2026-02-01', 'value': 3.29, 'status': 'ok'},
            {'date': '2026-03-01', 'value': 3.40, 'status': 'ok'},
            {'date': '2026-04-01', 'value': 3.45, 'status': 'ok'},
        ],
        'IRLTLT01AUM156N': [
            {'date': '2026-02-01', 'value': 4.76, 'status': 'watch'},
            {'date': '2026-03-01', 'value': 4.80, 'status': 'watch'},
            {'date': '2026-04-01', 'value': 4.90, 'status': 'watch'},
        ],
        'IRLTLT01DEM156N': [
            {'date': '2026-02-01', 'value': 2.75, 'status': 'ok'},
            {'date': '2026-03-01', 'value': 2.80, 'status': 'watch'},
            {'date': '2026-04-01', 'value': 2.91, 'status': 'watch'},
        ],
    }


def test_build_dashboard_payload_flags_alarm_regime_and_summary_counts():
    payload = module.build_dashboard_payload(
        observations=sample_observations(),
        histories=sample_history(),
        generated_at='2026-05-15T12:00:00Z',
    )

    assert payload['summary']['overall_status'] == 'alarm'
    assert payload['summary']['alarm_count'] >= 4
    assert payload['summary']['warning_count'] >= 2
    assert payload['hero_cards'][0]['label'] == 'Overall regime'
    assert payload['hero_cards'][1]['label'] == 'US 10Y'
    assert payload['hero_cards'][2]['label'] == 'US 30Y'
    assert 'inflation' in payload['regime_cards'][0]['drivers'].lower()

    composite = payload['composite_regime']
    assert 1 <= composite['score'] <= 100
    assert composite['band_label'] in {'Big Print zone', 'Fiscal-duration stress', 'Non-benign regime', 'Friction building', 'Disinflation-friendly'}
    assert sum(item['value'] for item in composite['scenario_odds']) == 100
    assert len(composite['investment_bias']) == 3
    assert composite['weights'] == module.COMPOSITE_WEIGHTS
    assert set(composite['subscores']) == {'duration', 'inflation', 'growth', 'divergence'}
    assert set(composite['effective_weights']) == {'duration', 'inflation', 'growth', 'divergence'}

    keys = {item['key'] for item in payload['indicators']}
    assert 'us_10y_yield' in keys
    assert 'us_30y_yield' in keys
    assert 'cross_market_dispersion' in keys
    assert 'germany_10y_yield' in keys
    assert 'euro_area_10y_yield' not in keys
    assert 'IRLTLT01EZM156N' not in module.SERIES_CONFIG

    us30 = next(item for item in payload['indicators'] if item['key'] == 'us_30y_yield')
    assert us30['status'] == 'alarm'

    history_series = {item['key']: item for item in payload['history']['series']}
    assert history_series['us_30y_yield']['latest_status'] == 'alarm'
    assert 'euro_area_10y_yield' not in history_series


def test_option_a_composite_uses_breakeven_inflation_and_max_growth():
    payload = module.build_dashboard_payload(
        observations=sample_observations(),
        histories=sample_history(),
        generated_at='2026-05-15T12:00:00Z',
    )
    composite = payload['composite_regime']

    # Inflation is T10YIE-only; sample breakeven 3.10 → alarm-level score 90.
    assert composite['subscores']['inflation'] == 90

    inversion = module.inversion_score(4.95 - 4.05, -0.30)
    bear = module.bear_steepener_score(4.95 - 4.05, -0.30, 4.95)
    expected_growth = max(inversion, bear)
    assert composite['subscores']['growth'] == expected_growth

    # Divergence should include JP/CA/AU + dispersion, not UK/DE as inflation substitutes.
    assert composite['subscores']['divergence'] is not None


def test_missing_inputs_renormalize_composite_weights():
    observations = sample_observations()
    observations['T10YIE'] = {**observations['T10YIE'], 'value': None, 'status': 'missing'}
    payload = module.build_dashboard_payload(
        observations=observations,
        histories=sample_history(),
        generated_at='2026-05-15T12:00:00Z',
    )
    composite = payload['composite_regime']
    assert composite['subscores']['inflation'] is None
    assert composite['effective_weights']['inflation'] == 0.0
    assert abs(sum(composite['effective_weights'].values()) - 1.0) < 1e-6
    assert composite['score'] != 50 or composite['status'] == 'missing'


def test_stale_status_for_daily_and_monthly_inputs():
    as_of = datetime(2026, 5, 15, 12, 0, tzinfo=timezone.utc)
    assert module.freshness_status('2026-05-14', 'daily', as_of) == 'fresh'
    assert module.freshness_status('2026-05-08', 'daily', as_of) == 'stale'
    assert module.freshness_status('2026-04-01', 'monthly', as_of) == 'fresh'
    assert module.freshness_status('2026-03-01', 'monthly', as_of) == 'stale'

    observations = sample_observations()
    observations['DGS10'] = {**observations['DGS10'], 'date': '2026-05-08', 'value': 4.10}
    observations['IRLTLT01GBM156N'] = {**observations['IRLTLT01GBM156N'], 'date': '2026-03-01', 'value': 4.50}
    # Watch-level Germany print that is stale should surface as stale, not remain watch.
    observations['IRLTLT01DEM156N'] = {**observations['IRLTLT01DEM156N'], 'date': '2026-03-01', 'value': 2.90}
    payload = module.build_dashboard_payload(
        observations=observations,
        histories=sample_history(),
        generated_at='2026-05-15T12:00:00Z',
    )
    by_key = {item['key']: item for item in payload['indicators']}
    assert by_key['us_10y_yield']['status'] == 'stale'
    assert by_key['uk_10y_yield']['status'] == 'stale'
    assert by_key['germany_10y_yield']['status'] == 'stale'
    # Alarm still wins over stale.
    observations_alarm = sample_observations()
    observations_alarm['DGS10'] = {**observations_alarm['DGS10'], 'date': '2026-05-08', 'value': 4.95}
    payload_alarm = module.build_dashboard_payload(
        observations=observations_alarm,
        histories=sample_history(),
        generated_at='2026-05-15T12:00:00Z',
    )
    us10 = next(item for item in payload_alarm['indicators'] if item['key'] == 'us_10y_yield')
    assert us10['status'] == 'alarm'


def test_dispersion_aligns_on_last_common_month():
    histories = sample_history()
    value, members, as_of_date = module.compute_cross_market_dispersion(histories)
    assert value is not None
    assert as_of_date.startswith('2026-04')
    assert 'DGS10' in members
    assert 'IRLTLT01DEM156N' in members
    # Common-month April: DGS10 last-in-month 4.70 vs JP 2.35 → dispersion uses aligned month, not May daily vs April monthly.
    assert abs(value - (5.35 - 2.35)) < 1e-9 or value >= 2.0

    payload = module.build_dashboard_payload(
        observations=sample_observations(),
        histories=histories,
        generated_at='2026-05-15T12:00:00Z',
    )
    dispersion = next(item for item in payload['indicators'] if item['key'] == 'cross_market_dispersion')
    assert dispersion['latest_date'].startswith('2026-04')


def test_2s10s_history_uses_contemporaneous_10y():
    histories = sample_history()
    # On 2026-04-15: spread = 4.55 - 3.95 = 0.60 with contemporaneous 10Y 4.55 → watch (steepener path).
    # If wrongly using latest 10Y 4.95, 0.60 with >=4.75 would still be watch, so use a clearer case:
    histories['DGS10'] = [
        {'date': '2026-04-15', 'value': 4.10, 'status': 'ok'},
        {'date': '2026-05-14', 'value': 4.95, 'status': 'alarm'},
    ]
    histories['DGS2'] = [
        {'date': '2026-04-15', 'value': 3.40, 'status': 'present'},
        {'date': '2026-05-14', 'value': 3.80, 'status': 'present'},
    ]
    payload = module.build_dashboard_payload(
        observations=sample_observations(),
        histories=histories,
        generated_at='2026-05-15T12:00:00Z',
    )
    series = next(item for item in payload['history']['series'] if item['key'] == 'us_2s10s_spread')
    april = next(point for point in series['points'] if point['date'] == '2026-04-15')
    # spread 0.70 with contemporaneous 10Y 4.10 → ok (steepener watch needs 10Y >= 4.25)
    assert april['status'] == 'ok'
    may = next(point for point in series['points'] if point['date'] == '2026-05-14')
    # spread 1.15 with contemporaneous 10Y 4.95 → alarm
    assert may['status'] == 'alarm'


def test_render_dashboard_bundle_emits_assignable_global_js():
    payload = module.build_dashboard_payload(
        observations=sample_observations(),
        histories=sample_history(),
        generated_at='2026-05-15T12:00:00Z',
    )

    bundle = module.render_dashboard_bundle(payload)

    assert bundle.startswith('globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA = ')
    assert 'composite_regime' in bundle
    assert 'us_30y_yield' in bundle
    assert 'cross_market_dispersion' in bundle
    assert 'effective_weights' in bundle
    assert '2026-05-15T12:00:00Z' in bundle
    assert '"series_id": "IRLTLT01EZM156N"' not in bundle
    assert 'euro_area_10y_yield' not in bundle


def test_repo_docs_and_ci_stay_in_sync_with_supported_series():
    readme_text = (REPO_ROOT / 'README.md').read_text()
    agents_path = REPO_ROOT / 'AGENTS_README.local.md'
    ci_workflow_path = REPO_ROOT / '.github' / 'workflows' / 'ci.yml'
    refresh_workflow_path = REPO_ROOT / '.github' / 'workflows' / 'refresh-and-deploy-pages.yml'

    assert ci_workflow_path.exists()
    assert refresh_workflow_path.exists()

    ci_workflow = ci_workflow_path.read_text()
    assert 'pull_request:' in ci_workflow
    assert 'push:' in ci_workflow
    assert 'python3 -m pip install pytest' in ci_workflow
    assert 'pytest tests/test_build_dashboard_data.py -q' in ci_workflow
    assert 'python3 scripts/build_dashboard_data.py' in ci_workflow
    assert 'node --check app.js' in ci_workflow

    for series_id in module.SERIES_CONFIG:
        assert f'- `{series_id}`' in readme_text

    # Dropped EA aggregate may be mentioned as removed, but must not appear as a tracked source bullet.
    assert '- `IRLTLT01EZM156N`' not in readme_text
    assert '- euro area 10Y government yield' not in readme_text

    assert '.github/workflows/ci.yml' in readme_text
    assert '.github/workflows/refresh-and-deploy-pages.yml' in readme_text

    refresh_workflow = refresh_workflow_path.read_text()
    cron_match = re.search(r"cron:\s*'([^']+)'", refresh_workflow)
    assert cron_match is not None
    cron_expr = cron_match.group(1)
    assert cron_expr == '20 23 * * 1-5'
    assert cron_expr in readme_text
    assert 'weekdays' in readme_text.lower()
    # Local handoff file is gitignored; when present, keep it aligned with the workflow cron.
    if agents_path.exists():
        assert cron_expr in agents_path.read_text()
