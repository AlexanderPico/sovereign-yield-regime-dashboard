# Sovereign Yield Regime Dashboard

A static, public-data-only sovereign-yield warning dashboard meant to work well as a generic GitHub Pages tool.

It borrows the strongest reusable parts of the Fleet Mission Control finance/Larry Lookout surface:
- dark local-first static shell
- explicit green/watch/alarm thresholding
- indicator cards with prescripted action text
- small-multiple history charts with native units
- generated JavaScript data bundle instead of fetched JSON

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
- euro area 10Y government yield
- Germany 10Y government yield
- cross-market 10Y dispersion across the tracked sovereign set

Each indicator maps to:
- a status: `ok`, `watch`, or `alarm`
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
- weekdays at `23:20 UTC`

That time is chosen to sit after the U.S. cash close and after typical same-day FRED daily-series updates, while still keeping the site fresh on a normal operator cadence.

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
- `IRLTLT01EZM156N`
- `IRLTLT01DEM156N`

## Automation

- `.github/workflows/ci.yml` runs the secret-free regression path on `push` and `pull_request`.
- `.github/workflows/refresh-and-deploy-pages.yml` remains the scheduled/manual Pages refresh path.

## Guardrails

- public-data only
- no personalized portfolio/account data
- no credentials or secrets required
- explicit decision-support framing, not investment advice

## Next useful expansions

- add a small sovereign-stress basket for selected EM issuers
- add a markdown export of the current regime snapshot for agent summarization
- add a second layer of cross-country spread indicators rather than only max-min dispersion
- consider a 5Y5Y inflation-expectations or term-premium proxy if a public, stable source improves signal quality without overcomplicating the surface
