"""Regressions for the weekly gold-watch change detector.

The contract under test is the alert policy: only mechanism changes, verdict
changes, hypothesis/signal band crossings, data-quality degradation, and new
alert strings count as meaningful. Price drift inside a band must stay silent.
"""

from __future__ import annotations

import importlib.util
import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = REPO_ROOT / 'scripts' / 'weekly_gold_watch.py'

_spec = importlib.util.spec_from_file_location('weekly_gold_watch', MODULE_PATH)
assert _spec and _spec.loader
watch_module = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(watch_module)


def make_watch(
    mechanism_status: str = 'ok',
    central_status: str = 'ok',
    signal_status: str = 'ok',
    degraded: bool = False,
    alerts: list[str] | None = None,
    value_label: str = '+5.0%',
) -> dict:
    return {
        'label': 'Gold Reset Watch',
        'status': mechanism_status,
        'mechanism_status': mechanism_status,
        'mechanism_state': 'state text',
        'central_question': 'question',
        'central_answer': 'answer',
        'central_status': central_status,
        'hypotheses': [
            {'key': 'h1_monetary_expansion', 'label': 'H1', 'status': 'ok'},
            {'key': 'h2_crisis_adoption', 'label': 'H2', 'status': signal_status},
        ],
        'signals': [
            {
                'key': 'gold_certificate_deviation',
                'label': 'cert',
                'status': mechanism_status,
                'value_label': '+0.0%',
                'latest_date': '2026-09-23',
                'degraded': False,
            },
            {
                'key': 'gold_price_proxy_change',
                'label': 'gold',
                'status': signal_status,
                'value_label': value_label,
                'latest_date': '2026-09-25',
                'degraded': degraded,
            },
        ],
        'manual_checks': [{'label': 'legislation', 'url': 'https://example.invalid'}],
        'alerts': alerts or [],
        'guardrail': 'guardrail text',
    }


def test_first_run_establishes_baseline_without_alerting(tmp_path: Path) -> None:
    developments = watch_module.diff_snapshots(None, watch_module.snapshot(make_watch()))
    assert len(developments) == 1
    assert 'baseline' in developments[0].lower()


def test_price_drift_inside_a_band_is_not_meaningful() -> None:
    before = watch_module.snapshot(make_watch(value_label='+5.0%'))
    after = watch_module.snapshot(make_watch(value_label='+9.4%'))
    assert watch_module.diff_snapshots(before, after) == []


def test_mechanism_gate_change_is_meaningful() -> None:
    before = watch_module.snapshot(make_watch(mechanism_status='ok'))
    after = watch_module.snapshot(make_watch(mechanism_status='alarm'))
    developments = watch_module.diff_snapshots(before, after)
    assert any('MECHANISM GATE' in item for item in developments)


def test_signal_band_crossing_is_meaningful() -> None:
    before = watch_module.snapshot(make_watch(signal_status='ok'))
    after = watch_module.snapshot(make_watch(signal_status='watch'))
    developments = watch_module.diff_snapshots(before, after)
    assert any('gold_price_proxy_change' in item for item in developments)
    assert any('h2_crisis_adoption' in item for item in developments)


def test_degraded_source_transition_is_meaningful() -> None:
    before = watch_module.snapshot(make_watch(degraded=False))
    after = watch_module.snapshot(make_watch(degraded=True))
    assert any('degraded' in item for item in watch_module.diff_snapshots(before, after))


def test_stale_input_is_treated_as_degraded_band() -> None:
    assert watch_module.band_of('stale') == 'degraded'
    assert watch_module.band_of('missing') == 'degraded'
    assert watch_module.band_of('ok') == 'ok'
    assert watch_module.band_of('alarm') == 'alarm'


def test_new_alert_string_is_meaningful() -> None:
    before = watch_module.snapshot(make_watch(alerts=[]))
    after = watch_module.snapshot(make_watch(alerts=['something happened']))
    assert any('New alert' in item for item in watch_module.diff_snapshots(before, after))


def test_repeated_alert_string_is_not_re_reported() -> None:
    before = watch_module.snapshot(make_watch(alerts=['same alert']))
    after = watch_module.snapshot(make_watch(alerts=['same alert']))
    assert watch_module.diff_snapshots(before, after) == []


def test_main_exits_quiet_when_nothing_changed(tmp_path: Path) -> None:
    bundle = tmp_path / 'dashboard-data.js'
    state = tmp_path / 'state.json'
    payload = {'as_of': '2026-09-27T00:00:00Z', 'gold_reset_watch': make_watch()}
    bundle.write_text(
        'globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA = ' + json.dumps(payload) + ';\n',
        encoding='utf-8',
    )

    first = watch_module.main(['--bundle', str(bundle), '--state', str(state)])
    assert first == 0
    assert state.exists()

    second = watch_module.main(['--bundle', str(bundle), '--state', str(state)])
    assert second == 0


def test_main_exits_10_on_mechanism_change(tmp_path: Path) -> None:
    bundle = tmp_path / 'dashboard-data.js'
    state = tmp_path / 'state.json'

    def write(watch: dict) -> None:
        bundle.write_text(
            'globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA = '
            + json.dumps({'as_of': '2026-09-27T00:00:00Z', 'gold_reset_watch': watch})
            + ';\n',
            encoding='utf-8',
        )

    write(make_watch(mechanism_status='ok'))
    assert watch_module.main(['--bundle', str(bundle), '--state', str(state)]) == 0

    write(make_watch(mechanism_status='alarm', central_status='watch'))
    assert watch_module.main(['--bundle', str(bundle), '--state', str(state)]) == 10


def test_real_bundle_shape_matches_watcher_expectations() -> None:
    """Guard the builder/watcher contract: key drift must fail here, not silently."""
    bundle = watch_module.load_bundle(REPO_ROOT / 'dashboard-data.js')
    assert watch_module.bundle_timestamp(bundle) != 'unknown'

    watch = bundle['gold_reset_watch']
    for field in ('status', 'mechanism_status', 'mechanism_state', 'central_question',
                  'central_answer', 'central_status', 'hypotheses', 'signals',
                  'manual_checks', 'alerts', 'guardrail'):
        assert field in watch, f'gold_reset_watch lost field {field}'

    snap = watch_module.snapshot(watch)
    assert snap['signals'], 'watcher found no signals in the real bundle'
    assert snap['hypotheses'], 'watcher found no hypotheses in the real bundle'

    for item in watch['signals']:
        for field in ('key', 'label', 'status', 'value_label', 'latest_date', 'degraded'):
            assert field in item, f'signal {item.get("key")} lost field {field}'


def test_missing_lens_fails_loudly(tmp_path: Path) -> None:
    bundle = tmp_path / 'dashboard-data.js'
    bundle.write_text('globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA = {"as_of": "x"};\n', encoding='utf-8')
    assert watch_module.main(['--bundle', str(bundle), '--state', str(tmp_path / 's.json')]) == 2
