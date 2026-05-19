from pathlib import Path
import importlib.util
import sys


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
        'IRLTLT01GBM156N': {'series_id': 'IRLTLT01GBM156N', 'label': 'UK 10Y', 'date': '2026-03-01', 'value': 5.35, 'status': 'present'},
        'IRLTLT01JPM156N': {'series_id': 'IRLTLT01JPM156N', 'label': 'Japan 10Y', 'date': '2026-03-01', 'value': 2.35, 'status': 'present'},
        'IRLTLT01CAM156N': {'series_id': 'IRLTLT01CAM156N', 'label': 'Canada 10Y', 'date': '2026-03-01', 'value': 3.45, 'status': 'present'},
        'IRLTLT01AUM156N': {'series_id': 'IRLTLT01AUM156N', 'label': 'Australia 10Y', 'date': '2026-03-01', 'value': 4.90, 'status': 'present'},
        'IRLTLT01EZM156N': {'series_id': 'IRLTLT01EZM156N', 'label': 'Euro area 10Y', 'date': '2026-01-01', 'value': 3.22, 'status': 'present'},
        'IRLTLT01DEM156N': {'series_id': 'IRLTLT01DEM156N', 'label': 'Germany 10Y', 'date': '2026-03-01', 'value': 2.91, 'status': 'present'},
    }


def sample_history():
    return {
        'DGS10': [
            {'date': '2026-05-12', 'value': 4.70, 'status': 'watch'},
            {'date': '2026-05-13', 'value': 4.82, 'status': 'watch'},
            {'date': '2026-05-14', 'value': 4.95, 'status': 'alarm'},
        ],
        'DGS2': [
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
            {'date': '2026-01-01', 'value': 4.45, 'status': 'watch'},
            {'date': '2026-02-01', 'value': 4.43, 'status': 'watch'},
            {'date': '2026-03-01', 'value': 5.35, 'status': 'alarm'},
        ],
        'IRLTLT01JPM156N': [
            {'date': '2026-01-01', 'value': 2.24, 'status': 'watch'},
            {'date': '2026-02-01', 'value': 2.11, 'status': 'watch'},
            {'date': '2026-03-01', 'value': 2.35, 'status': 'watch'},
        ],
        'IRLTLT01CAM156N': [
            {'date': '2026-01-01', 'value': 3.39, 'status': 'present'},
            {'date': '2026-02-01', 'value': 3.29, 'status': 'present'},
            {'date': '2026-03-01', 'value': 3.45, 'status': 'present'},
        ],
        'IRLTLT01AUM156N': [
            {'date': '2026-01-01', 'value': 4.75, 'status': 'watch'},
            {'date': '2026-02-01', 'value': 4.76, 'status': 'watch'},
            {'date': '2026-03-01', 'value': 4.90, 'status': 'watch'},
        ],
        'IRLTLT01EZM156N': [
            {'date': '2025-11-01', 'value': 3.14, 'status': 'watch'},
            {'date': '2025-12-01', 'value': 3.24, 'status': 'watch'},
            {'date': '2026-01-01', 'value': 3.22, 'status': 'watch'},
        ],
        'IRLTLT01DEM156N': [
            {'date': '2026-01-01', 'value': 2.81, 'status': 'present'},
            {'date': '2026-02-01', 'value': 2.75, 'status': 'present'},
            {'date': '2026-03-01', 'value': 2.91, 'status': 'watch'},
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

    keys = {item['key'] for item in payload['indicators']}
    assert 'us_10y_yield' in keys
    assert 'us_30y_yield' in keys
    assert 'cross_market_dispersion' in keys
    assert 'euro_area_10y_yield' in keys
    assert 'germany_10y_yield' in keys

    us30 = next(item for item in payload['indicators'] if item['key'] == 'us_30y_yield')
    assert us30['status'] == 'alarm'

    history_series = {item['key']: item for item in payload['history']['series']}
    assert history_series['us_30y_yield']['latest_status'] == 'alarm'


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
    assert '2026-05-15T12:00:00Z' in bundle


def test_repo_docs_and_ci_stay_in_sync_with_supported_series():
    readme_text = (REPO_ROOT / 'README.md').read_text()
    ci_workflow_path = REPO_ROOT / '.github' / 'workflows' / 'ci.yml'

    assert ci_workflow_path.exists()

    ci_workflow = ci_workflow_path.read_text()
    assert 'pull_request:' in ci_workflow
    assert 'push:' in ci_workflow
    assert 'python3 -m pip install pytest' in ci_workflow
    assert 'pytest tests/test_build_dashboard_data.py -q' in ci_workflow
    assert 'python3 scripts/build_dashboard_data.py' in ci_workflow
    assert 'node --check app.js' in ci_workflow

    for series_id in module.SERIES_CONFIG:
        assert f'- `{series_id}`' in readme_text

    assert '.github/workflows/ci.yml' in readme_text
    assert '.github/workflows/refresh-and-deploy-pages.yml' in readme_text
