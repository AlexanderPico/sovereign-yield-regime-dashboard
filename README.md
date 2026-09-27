# Sovereign Yield Regime Dashboard

A static, public-data-only sovereign-yield warning dashboard meant to work well as a generic GitHub Pages tool.

It borrows the strongest reusable parts of the Fleet Mission Control finance/Larry Lookout surface:
- dark local-first static shell
- explicit green/watch/alarm thresholding
- indicator cards with prescripted action text
- small-multiple history charts with native units
- generated JavaScript data bundle instead of fetched JSON
- a composite sovereign-stress meter that rolls the indicators into one regime read plus scenario odds and portfolio-bias text

The twist here is narrower and more generic: sovereign yields, curve shape, breakevens, and cross-country divergence only.

## What it tracks

Current indicators:
- US 10Y Treasury yield
- US 30Y Treasury yield
- US 2Y/10Y spread
- US 10Y/3M spread
- US 10Y breakeven inflation
- UK 10Y government yield
- Japan 10Y government yield
- Canada 10Y government yield
- Australia 10Y government yield
- Germany 10Y government yield
- cross-market 10Y dispersion across the tracked sovereign set

Plus a separate weekly **Gold Reset Watch** lens:
- gold certificate account deviation (the Treasury–Fed revaluation mechanism gate)
- gold price proxy, 3-month change (context only)
- broad dollar index, 3-month change (Hypothesis 1 leg)
- gold ETF volatility index (orderly reform vs disorderly crisis)
- Bitcoin, 3-month change (Hypothesis 2 adoption vs impairment leg)

Each indicator maps to:
- a status: `ok`, `watch`, `stale`, or `alarm`
- threshold text
- a short why-it-matters explanation
- a prescripted alarm-action review note

## Repo layout

- `index.html` — static page shell
- `styles.css` — dashboard styling
- `app.js` — client-side renderer
- `dashboard-data.js` — generated data bundle consumed by the page
- `scripts/build_dashboard_data.py` — pulls FRED CSV data and writes `dashboard-data.js`
- `tests/test_build_dashboard_data.py` — payload/bundle and repo-contract regression tests
- `.github/workflows/ci.yml` — push/PR validation for tests, data rebuild, and JS syntax
- `.github/workflows/refresh-and-deploy-pages.yml` — scheduled GitHub Pages refresh/deploy

## Local usage

Rebuild the dashboard data:

```bash
python3 scripts/build_dashboard_data.py
```

Run tests:

```bash
python3 -m pip install pytest
pytest tests/test_build_dashboard_data.py -q
```

Run the same local validation steps used by CI:

```bash
python3 -m pip install pytest
pytest tests/test_build_dashboard_data.py -q
python3 scripts/build_dashboard_data.py
node --check app.js
```

Open locally:
- open `index.html` directly, or
- serve it with a tiny static server:

```bash
python3 -m http.server 8000
```

Then visit `http://127.0.0.1:8000/`.

## GitHub Pages setup

The included workflow rebuilds the data and deploys the repo to GitHub Pages on:
- manual dispatch
- weekdays at `23:20 UTC` (`cron: '20 23 * * 1-5'`)

That weekday cadence is intentional for timeliness: it sits after the U.S. cash close and after typical same-day FRED daily-series updates. Sunday-only was too slow for the dashboard's warning use case.

Germany (`IRLTLT01DEM156N`) is the live euro-area duration anchor. The euro-area OECD aggregate (`IRLTLT01EZM156N`) was dropped after it stalled at 2026-01-01 on FRED.

Indicator statuses include `stale` when daily prints are older than 3 business days or monthly prints older than 45 calendar days. Cross-market dispersion is aligned on the last common month across constituents.

The composite Sovereign Stress Meter follows Option A: inflation = `T10YIE` (room left for a future 5Y5Y companion), growth = max(inversion, bear-steepener) using the same card thresholds, divergence = common-month dispersion + Japan/Canada/Australia, and missing inputs are excluded with weights renormalized rather than hardcoding 50.

To enable Pages in GitHub:
1. push the repo
2. in GitHub, open Settings → Pages
3. set Source to `GitHub Actions`
4. run the `refresh-and-deploy-pages` workflow once manually

## Data sources

All current data comes from public FRED CSV endpoints:
- `DGS10`
- `DGS2`
- `DGS30`
- `T10Y3M`
- `T10YIE`
- `IRLTLT01GBM156N`
- `IRLTLT01JPM156N`
- `IRLTLT01CAM156N`
- `IRLTLT01AUM156N`
- `IRLTLT01DEM156N`
- `WGCAL`
- `IQ12260`
- `DTWEXBGS`
- `GVZCLS`
- `CBBTCUSD`

## Automation

- `.github/workflows/ci.yml` runs the secret-free regression path on `push` and `pull_request`.
- `.github/workflows/refresh-and-deploy-pages.yml` remains the scheduled/manual Pages refresh path.

## Gold Reset Watch (weekly)

A separate panel that tests the gold-revaluation thesis instead of assuming it. It is deliberately
**excluded from the composite Sovereign Stress Meter** so an uncalibrated tail-risk lens cannot
distort the sovereign-yield score.

The design is mechanism-first:

1. **Mechanism gate.** The Treasury–Fed gold certificate account (`WGCAL`) is carried at the
   statutory $42.2222/oz book value, so it is nearly constant near $11.0bn. A step change beyond
   ±1.00% of its trailing median is the most direct public evidence that revaluation has actually
   been used. While this card is green, rising gold prices and reset commentary are **not**
   evidence of an impending reset.
2. **The central question.** Would revaluation create a one-time source of Treasury financing, or
   a durable change in the dollar's monetary backing? The panel answers this conservatively:
   unanswered until the mechanism moves, then "one-time financing" if the dollar holds firm and
   "durable change" only if the dollar depreciates alongside it.
3. **Two testable hypotheses**, each with an explicit counter-case:
   - *H1: revaluation drives monetary expansion and dollar depreciation.* Needs mechanism plus
     sustained broad-dollar weakness. A credible reform that restores dollar confidence would
     instead reduce monetary-hedge demand, so dollar strength is a real falsifier.
   - *H2: the crisis itself accelerates Bitcoin adoption.* Depends on crisis type. Elevated gold
     volatility with a deep Bitcoin drawdown is the impairment branch (forced liquidation,
     exchange failures, restricted access), not the adoption branch.
4. **Manual checks.** Legislative proposals and Treasury/Fed statements cannot be pulled from
   FRED, so the panel links them as explicit weekly checks rather than simulating them as data:
   Congress.gov legislation search, Treasury press releases, the Fed H.4.1 gold certificate line,
   and the FOMC calendar.

Every watch card states both what would confirm it and what would falsify it. Alerts fire only
when the mechanism moves, when a hypothesis leg crosses its threshold, or when an input goes
stale — price moves alone do not qualify. Weekly prints go stale after 14 calendar days.

Guardrail carried on the panel: international evidence suggests revaluation can provide financing
but cannot by itself solve persistent deficits.

## Guardrails

- public-data only
- no personalized portfolio/account data
- no credentials or secrets required
- explicit decision-support framing, not investment advice

## Next useful expansions

- add a small sovereign-stress basket for selected EM issuers
- add a markdown export of the current regime snapshot for agent summarization
- add a second layer of cross-country spread indicators rather than only max-min dispersion
- add an automated legislative-text scan for the Gold Reset Watch manual checks if a stable public API is available
- consider a 5Y5Y inflation-expectations or term-premium proxy if a public, stable source improves signal quality without overcomplicating the surface
