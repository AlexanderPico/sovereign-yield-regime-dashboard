#!/usr/bin/env python3
"""Weekly Gold Reset Watch: report only meaningful developments.

Reads the generated dashboard bundle, compares the gold-reset-watch lens against
the previously recorded state, and emits a digest. Exit code 0 means "nothing
meaningful changed, stay quiet"; exit code 10 means "meaningful development,
surface this".

A meaningful development is deliberately narrow, matching the lens policy:
  * the mechanism gate (gold certificate account) changes status
  * the central-question verdict changes
  * a hypothesis leg changes status
  * a signal crosses into or out of watch/alarm
  * an input goes stale, or the daily gold proxy runs degraded
  * a new alert string appears

Price drift inside an existing band is NOT meaningful and never fires.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[1]
BUNDLE_PATH = REPO_ROOT / 'dashboard-data.js'
STATE_PATH = REPO_ROOT / '.gold-watch-state.json'

ELEVATED = {'watch', 'alarm'}
DEGRADED_STATUSES = {'stale', 'missing'}


def load_bundle(path: Path) -> dict[str, Any]:
    text = path.read_text(encoding='utf-8')
    start = text.index('{')
    end = text.rindex('}') + 1
    return json.loads(text[start:end])


def bundle_timestamp(bundle: dict[str, Any]) -> str:
    """The builder writes `generated_at`; accept `as_of` for older bundles."""
    return bundle.get('generated_at') or bundle.get('as_of') or 'unknown'


def band_of(status: str) -> str:
    """Collapse a status into the band that matters for alerting."""
    if status in DEGRADED_STATUSES:
        return 'degraded'
    if status in ELEVATED:
        return status
    return 'ok'


def snapshot(watch: dict[str, Any]) -> dict[str, Any]:
    return {
        'mechanism_status': watch.get('mechanism_status', ''),
        'central_status': watch.get('central_status', ''),
        'central_answer': watch.get('central_answer', ''),
        'hypotheses': {
            item['key']: band_of(item.get('status', ''))
            for item in watch.get('hypotheses', [])
        },
        'signals': {
            item['key']: {
                'band': band_of(item.get('status', '')),
                'degraded': bool(item.get('degraded')),
            }
            for item in watch.get('signals', [])
        },
        'alerts': list(watch.get('alerts', [])),
    }


def diff_snapshots(previous: dict[str, Any] | None, current: dict[str, Any]) -> list[str]:
    """Return human-readable meaningful developments since the last run."""
    if previous is None:
        return ['First recorded run of the weekly gold watch: baseline established.']

    developments: list[str] = []

    if previous.get('mechanism_status') != current['mechanism_status']:
        developments.append(
            'MECHANISM GATE changed: '
            f"{previous.get('mechanism_status') or 'unknown'} -> {current['mechanism_status']}. "
            'Verify against the Fed H.4.1 release before drawing any conclusion.'
        )

    if previous.get('central_status') != current['central_status']:
        developments.append(
            'Central-question verdict changed: '
            f"{previous.get('central_status') or 'unknown'} -> {current['central_status']}."
        )

    prev_h = previous.get('hypotheses', {})
    for key, band in current['hypotheses'].items():
        if prev_h.get(key) != band:
            developments.append(
                f'Hypothesis {key}: {prev_h.get(key) or "unknown"} -> {band}.'
            )

    prev_s = previous.get('signals', {})
    for key, state in current['signals'].items():
        before = prev_s.get(key) or {}
        if before.get('band') != state['band']:
            developments.append(
                f'Signal {key}: {before.get("band") or "unknown"} -> {state["band"]}.'
            )
        if bool(before.get('degraded')) != state['degraded']:
            developments.append(
                f'Signal {key} data quality: '
                f'{"now degraded" if state["degraded"] else "recovered from degraded"}.'
            )

    new_alerts = [item for item in current['alerts'] if item not in set(previous.get('alerts', []))]
    developments.extend(f'New alert: {item}' for item in new_alerts)

    return developments


def render_report(
    bundle: dict[str, Any],
    watch: dict[str, Any],
    developments: list[str],
    meaningful: bool,
) -> str:
    lines: list[str] = []
    lines.append('# Weekly Gold Reset Watch')
    lines.append('')
    lines.append(f'As of: {bundle_timestamp(bundle)}')
    lines.append(f'Lens status: {watch.get("status", "unknown")}')
    lines.append(f'Mechanism gate: {watch.get("mechanism_status", "unknown")}')
    lines.append('')
    lines.append('## Mechanism (the only gate that can confirm a reset)')
    lines.append(watch.get('mechanism_state', ''))
    lines.append('')
    lines.append('## Central question')
    lines.append(watch.get('central_question', ''))
    lines.append(f'Current read ({watch.get("central_status", "unknown")}): {watch.get("central_answer", "")}')
    lines.append('')

    if meaningful:
        lines.append('## Meaningful developments this week')
        lines.extend(f'- {item}' for item in developments)
    else:
        lines.append('## Meaningful developments this week')
        lines.append('- None. No mechanism change and no threshold crossing; staying quiet by policy.')
    lines.append('')

    lines.append('## Signals')
    for item in watch.get('signals', []):
        tag = ' [degraded source]' if item.get('degraded') else ''
        lines.append(
            f'- {item.get("label")}: {item.get("value_label")} '
            f'({item.get("status")}, {item.get("latest_date")}){tag}'
        )
    lines.append('')

    lines.append('## Hypotheses')
    for item in watch.get('hypotheses', []):
        lines.append(f'- {item.get("label")} — {item.get("status")}')
    lines.append('')

    lines.append('## Manual checks (no data feed exists for these)')
    for item in watch.get('manual_checks', []):
        lines.append(f'- {item.get("label")}: {item.get("url")}')
    lines.append('')

    lines.append('## Guardrail')
    lines.append(watch.get('guardrail', ''))
    return '\n'.join(lines)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--bundle', type=Path, default=BUNDLE_PATH)
    parser.add_argument('--state', type=Path, default=STATE_PATH)
    parser.add_argument(
        '--no-save',
        action='store_true',
        help='Do not update the recorded state (dry run).',
    )
    parser.add_argument(
        '--always-print',
        action='store_true',
        help='Print the full report even when nothing meaningful changed.',
    )
    args = parser.parse_args(argv)

    bundle = load_bundle(args.bundle)
    watch = bundle.get('gold_reset_watch')
    if not watch:
        print('gold_reset_watch missing from bundle; rebuild dashboard-data.js first.', file=sys.stderr)
        return 2

    current = snapshot(watch)
    previous = None
    if args.state.exists():
        try:
            previous = json.loads(args.state.read_text(encoding='utf-8')).get('snapshot')
        except (ValueError, OSError):
            previous = None

    developments = diff_snapshots(previous, current)
    baseline_only = previous is None
    meaningful = bool(developments) and not baseline_only

    if meaningful or args.always_print or baseline_only:
        print(render_report(bundle, watch, developments, meaningful))

    if not args.no_save:
        args.state.write_text(
            json.dumps({'as_of': bundle_timestamp(bundle), 'snapshot': current}, indent=2) + '\n',
            encoding='utf-8',
        )

    return 10 if meaningful else 0


if __name__ == '__main__':
    raise SystemExit(main())
