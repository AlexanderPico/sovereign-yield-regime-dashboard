---
title: Sovereign Yield Regime Dashboard
created: 2026-04-21
updated: 2026-04-26
type: project-brief
tags: [macro, bonds, yields, inflation, dashboard, project-idea]
sources:
  - /Users/aimee/Obsidian/AgentVault/_sources/notes/2026-04-10__0001__4917a61ddf06.md
source_urls:
  - https://en.wikipedia.org/wiki/Yield_curve
  - https://en.wikipedia.org/wiki/Government_bond
  - https://en.wikipedia.org/wiki/Inflation
  - https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve
  - https://fred.stlouisfed.org/series/T10Y2Y
  - https://fred.stlouisfed.org/categories/115
  - https://www.newyorkfed.org/research/capital_markets/ycfaq.html
  - https://www.ecb.europa.eu/stats/financial_markets_and_interest_rates/euro_area_yield_curves/html/index.en.html
  - https://www.bis.org/statistics/full_data_sets.htm
  - https://data.oecd.org/interest/long-term-interest-rates.htm
  - https://www.worldgovernmentbonds.com/
  - https://github.com/Bek-alt/fixed-income-dashboard
  - https://github.com/Agusbmoreno03/Yield-curve-macro-dashboard
  - https://github.com/krisxr06/yield-curve-inflation-dashboard
  - https://github.com/MwansaNgandu/sa-sovereign-desk
  - https://www.sciencedirect.com/science/article/pii/S0304405X06002208
  - https://www.sciencedirect.com/science/article/pii/S0304393202002768
  - https://www.newyorkfed.org/research/staff_reports/sr340.html
---

# Sovereign Yield Regime Dashboard

## Thesis
The useful idea in the seed note is to treat sovereign bond yields not just as market data, but as regime signals. A dashboard that tracks government bond rates across countries could help an operator distinguish inflationary, deflationary, tightening, easing, and stress-transition environments before they are obvious in headline narratives.

## Seed idea
The raw note proposes a financial dashboard centered on treasury bond rates internationally, with the goal of anticipating deflation/inflation dynamics and likely monetary-policy reactions. The core insight is that yields are not only prices. They are compressed signals about duration, inflation expectations, sovereign risk, liquidity conditions, and central-bank posture.

## Why it matters
Most macro dashboards over-index on backward-looking headline indicators. Bond curves can be more useful because they move continuously and can be compared across maturities and across countries.

A strong dashboard here could help answer questions like:
- are markets pricing disinflation, reflation, or policy panic?
- is a country experiencing ordinary easing, sovereign stress, or funding deterioration?
- are different countries moving together, or are their curves decoupling?
- is the relevant signal in level, slope, inversion, real yield, or cross-country spread?

That makes the project more about regime classification than about raw charting.

## What exists already
The public conceptual building blocks are straightforward:
- yield curves summarize the relationship between yields and maturity for comparable debt securities
- government bonds encode not only time value of money but also inflation, credit, liquidity, and policy expectations
- inflation is the downstream macro phenomenon many operators are trying to infer or hedge against, but bond markets often price transitions before lagging macro summaries stabilize

What is usually missing is a compact operator-facing synthesis layer that turns these ingredients into a coherent cross-country dashboard with explicit regime interpretation.

## Proposed system shape
A useful first version would likely have five layers:
- country universe: select a small comparable set of sovereign issuers
- curve layer: track 2Y, 5Y, 10Y, 30Y and key spreads like 10Y-2Y
- regime layer: label curve states such as normal, steepening, flattening, inverted, stress-widening, or reflationary repricing
- cross-country layer: compare level, slope, and spread divergence across sovereign markets
- narrative layer: produce brief machine-generated interpretations and scenario notes

The key design choice is to treat the dashboard as an interpretation engine, not just a chart panel.

## Research questions / unknowns
Important open questions:
- which countries matter most for the first version: G7 only, DM plus EM, or theme-based baskets?
- should the system emphasize nominal yields, inflation-linked proxies, or both?
- what regime taxonomy is actually predictive rather than just descriptive?
- how much weight should be given to curve slope versus outright yield level versus country spreads?
- what data cadence is most useful: intraday, daily close, or weekly macro snapshot?

## Build path
A practical build sequence would be:
1. start with a small country set and stable data feeds
2. compute basic curve features and cross-country differentials
3. define a regime taxonomy with explicit thresholds and narrative templates
4. backtest whether the regime labels line up with later policy or inflation moves
5. add alerting, commentary, and a compact operator view

## Relationship to the current corpus
This is a project brief rather than part of the main agent-systems concept cluster. It remains useful in the live article layer because it captures an Alex-originated build direction and expands the corpus beyond agent-infrastructure topics. For the broader map of the article layer, start with [[index]].

## Source basis
### Raw seed note
- /Users/aimee/Obsidian/AgentVault/_sources/notes/2026-04-10__0001__4917a61ddf06.md

### External context used to flesh out the brief
- Yield curve overview
- Government bond overview
- Inflation overview

### Original source URLs
- https://en.wikipedia.org/wiki/Yield_curve
- https://en.wikipedia.org/wiki/Government_bond
- https://en.wikipedia.org/wiki/Inflation

## 2026-04-26 research expansion

### Current thesis
The strongest version of this project is a **regime-classification and explanation layer on top of reliable sovereign-yield data**, not another chart-only macro dashboard. The first useful artifact should convert yield levels, curve slopes, term-premium proxies, inflation-linker proxies, and cross-country spreads into auditable labels such as `ordinary easing`, `bear steepening`, `growth scare`, `reflation repricing`, `safe-haven rally`, or `sovereign stress widening`.

The project remains feasible because the first prototype can use public daily data and transparent rules. Its novelty is moderate rather than high: yield-curve dashboards, recession models, and term-structure research are mature. Alex's differentiated angle would need to be the operator-facing synthesis layer: a compact, citation-backed regime narrative that explains *why* a curve move matters and what would falsify the label.

### Problem / opportunity
Raw sovereign-yield panels are abundant, but they often leave the operator to solve three hard problems manually:
- disentangle whether a rate move reflects growth expectations, inflation expectations, term premia, liquidity, central-bank path, or sovereign-credit stress;
- compare countries whose curves have different policy regimes, issuance conventions, and data availability;
- turn moving market data into stable, reviewable regime claims rather than vibes-driven commentary.

A useful dashboard can therefore be built as a small research assistant: compute the features, attach a conservative regime label, show the evidence that drove the label, and keep a dated explanation trail.

### Related work and prior art
Prior art is strong enough to rule out a broad novelty claim:
- **Central-bank and institutional data portals already publish core yield series.** U.S. Treasury daily rates, FRED yield spreads, ECB euro-area yield curves, OECD long-term rates, and BIS downloadable datasets cover many of the raw inputs a prototype needs.
- **Macro-finance literature already treats the yield curve as a leading indicator.** The New York Fed's yield-curve FAQ and Estrella/Mishkin-style recession-probability work are direct prior art for U.S. recession signaling.
- **Term-structure modeling is mature.** Dynamic Nelson-Siegel and affine term-structure models are established baselines for summarizing level, slope, curvature, expected-rate, and term-premium components.
- **Public and hobbyist dashboards already exist.** GitHub search surfaced multiple Streamlit/Power BI macro dashboards that ingest FRED, Treasury, or country-specific sovereign data. Most are low-star prototypes, but they show that a basic charting app is not novel.
- **Commercial macro terminals and market-data products already do richer versions of this for professionals.** The project should not compete with Bloomberg/Refinitiv-style breadth; it should compete on transparent, local, inspectable interpretation.

### Similar codebases / tools
- **Bek-alt/fixed-income-dashboard** — Python/Streamlit U.S. Treasury yield-curve analytics dashboard using FRED-style data; relevant as a minimal implementation reference. Accessed 2026-04-26: https://github.com/Bek-alt/fixed-income-dashboard
- **Agusbmoreno03/Yield-curve-macro-dashboard** — U.S. and Argentina yield-curve/macro dashboard in Python/Power BI; relevant for cross-country but still prototype-level. Accessed 2026-04-26: https://github.com/Agusbmoreno03/Yield-curve-macro-dashboard
- **krisxr06/yield-curve-inflation-dashboard** — historical FRED-based classification of yield-curve and inflation regimes; relevant because it is close to the desired regime-labeling layer, though still small/low-star. Accessed 2026-04-26: https://github.com/krisxr06/yield-curve-inflation-dashboard
- **MwansaNgandu/sa-sovereign-desk** — single-file South Africa sovereign macro dashboard including FX, commodities, SAGB yields, CDS, and fiscal context; useful reminder that sovereign-stress interpretation often needs non-yield variables. Accessed 2026-04-26: https://github.com/MwansaNgandu/sa-sovereign-desk
- **OpenBB / pandas-datareader / FRED APIs** are likely practical plumbing candidates for an implementation, but this pass did not inspect their code deeply. They should be evaluated in a later build pass.

### Relevant literature and methods
- **New York Fed, “The Yield Curve as a Leading Indicator”** — institutional explanation of yield-curve recession-probability logic; directly relevant for baseline U.S. signal design. Accessed 2026-04-26: https://www.newyorkfed.org/research/capital_markets/ycfaq.html
- **Diebold and Li, “Forecasting the term structure of government bond yields”** — standard Dynamic Nelson-Siegel approach for level/slope/curvature forecasting; relevant as a model baseline. Accessed 2026-04-26: https://www.sciencedirect.com/science/article/pii/S0304405X06002208
- **Ang and Piazzesi, “A no-arbitrage vector autoregression of term structure dynamics with macroeconomic and latent variables”** — important macro-finance link between yields and macro factors; relevant for moving beyond simple slope heuristics. Accessed 2026-04-26: https://www.sciencedirect.com/science/article/pii/S0304393202002768
- **Adrian, Crump, and Moench, “Pricing the Term Structure with Linear Regressions” / ACM term premia** — relevant for separating expected-rate path from term-premium moves where data are available. Accessed 2026-04-26: https://www.newyorkfed.org/research/staff_reports/sr340.html
- **arXiv and Semantic Scholar availability note:** during this autonomous run, arXiv API and Semantic Scholar searches returned HTTP 429 rate limits. The literature notes above therefore lean on known institutional and publisher pages rather than a fresh citation-count sweep; a future pass should retry scholarly discovery.

### Feasibility assessment
A useful prototype is technically feasible with public sources and conservative scope:
1. start with U.S., euro area, U.K., Japan, Canada, Australia, and a small EM/stress watchlist only if data quality is acceptable;
2. ingest daily nominal yields and spreads from U.S. Treasury/FRED, ECB, OECD, BIS, and selected country sources;
3. compute level, slope, curvature, rolling changes, cross-country spreads, and real-yield/breakeven proxies where available;
4. classify regimes with transparent rules before attempting ML;
5. generate a narrative card that states the label, evidence, uncertainty, and what would change the label.

Operational blockers are data licensing, inconsistent maturities across countries, lagged or revised macro data, and the danger of overclaiming predictiveness. The dashboard should present itself as a decision-support and research tool, not as investment advice.

### Novelty and differentiation
What prior art already does well:
- provides raw yield data and yield-curve charts;
- models U.S. recession probabilities from curve slope;
- decomposes term structure with established factor models;
- offers professional macro dashboards for paying users.

What remains differentiated for Alex's version:
- an open, inspectable, operator-owned regime taxonomy;
- cross-country narrative cards that separate level/slope/curve-shape evidence from broader macro interpretation;
- a provenance trail that records which data source and rule produced each label;
- integration with the broader AgentVault/Hermes workflow so a local agent can summarize regime changes and flag contradictions without needing a proprietary terminal.

### Risks / failure modes
- **False precision:** a curve inversion or steepening is not a complete macro forecast by itself.
- **Data comparability:** country maturities, calendars, central-bank regimes, and inflation-linked markets are not uniform.
- **Licensing/API fragility:** some attractive sources are paid, scraped, or rate-limited.
- **Narrative overfitting:** labels can become story-shaped after the fact unless thresholds and falsification criteria are explicit.
- **Investment-advice boundary:** outputs should remain explanatory and research-oriented.

### Open questions
- Which initial country set maximizes insight without creating data-quality debt?
- Should the first taxonomy be rule-based only, or should it include a small supervised backtest against historical recession/inflation-policy regimes?
- What is the minimum useful real-yield proxy for countries without robust inflation-linked curve access?
- How should the system distinguish a benign bull steepener from sovereign-credit stress steepening?
- Which external variables are mandatory for interpretation: FX, CDS, inflation swaps/breakevens, central-bank policy rates, fiscal balance, commodity exposure?

### Future research directions
- Retry arXiv/Semantic Scholar/OpenAlex discovery for term-structure regime classification, international yield-curve forecasting, and sovereign-stress early-warning literature.
- Compare public data feeds for coverage, latency, licensing, and machine-readability.
- Build a small historical panel for U.S., euro area, U.K., Japan, and Canada and test whether simple rule labels align with known macro episodes.
- Prototype one “regime card” per country with evidence bullets, contradictory indicators, and a confidence level.
- Evaluate whether [[agent-discovery-and-trusted-resource-networks]] could supply machine-readable source manifests for yield data providers.

### Implementation sketch / experiment ideas
- **Week 1 prototype:** Python notebook or Streamlit app that downloads U.S. Treasury/FRED series, computes 10Y-2Y and 10Y-3M slopes, rolling 1/20/60-day changes, and labels four simple regimes.
- **Week 2 expansion:** add ECB euro-area curve data and OECD/BIS long-rate data; normalize maturities and document gaps.
- **Regime-card experiment:** generate a Markdown card for each country with `label`, `evidence`, `contradictions`, `data freshness`, and `next indicators to watch`.
- **Backtest sanity check:** evaluate whether labels would have changed before obvious regime shifts in 2000, 2008, 2020, 2022, and 2024-2025.

### Citations / sources
- **U.S. Department of the Treasury — Daily Treasury Rates**. https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve — accessed 2026-04-26. Relevance: authoritative U.S. nominal yield-curve source for prototype ingestion.
- **FRED — 10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity (T10Y2Y)**. https://fred.stlouisfed.org/series/T10Y2Y — accessed 2026-04-26; automated HTML access was unavailable in this run, but the public series is a standard spread input. Relevance: canonical U.S. curve-slope series.
- **FRED — Interest Rates category**. https://fred.stlouisfed.org/categories/115 — accessed 2026-04-26; automated HTML access was unavailable in this run. Relevance: public data catalog for rates and yield spreads.
- **Federal Reserve Bank of New York — The Yield Curve as a Leading Indicator**. https://www.newyorkfed.org/research/capital_markets/ycfaq.html — accessed 2026-04-26. Relevance: institutional prior art for recession-probability interpretation.
- **ECB — Euro area yield curves**. https://www.ecb.europa.eu/stats/financial_markets_and_interest_rates/euro_area_yield_curves/html/index.en.html — accessed 2026-04-26. Relevance: euro-area curve source and methodology surface.
- **BIS Data Portal — Bulk downloads**. https://www.bis.org/statistics/full_data_sets.htm — accessed 2026-04-26. Relevance: institutional source for international financial statistics and downloadable datasets.
- **OECD Data — Long-term interest rates**. https://data.oecd.org/interest/long-term-interest-rates.htm — accessed 2026-04-26. Relevance: cross-country long-rate context; should be validated for API/download use.
- **World Government Bonds**. https://www.worldgovernmentbonds.com/ — accessed 2026-04-26. Relevance: public comparative yield snapshot; useful as a human-readable cross-check, not necessarily a primary data feed.
- **Bek-alt/fixed-income-dashboard**. https://github.com/Bek-alt/fixed-income-dashboard — accessed 2026-04-26. Relevance: lightweight Streamlit/Python prior-art dashboard.
- **Agusbmoreno03/Yield-curve-macro-dashboard**. https://github.com/Agusbmoreno03/Yield-curve-macro-dashboard — accessed 2026-04-26. Relevance: cross-country dashboard example including U.S. and Argentina.
- **krisxr06/yield-curve-inflation-dashboard**. https://github.com/krisxr06/yield-curve-inflation-dashboard — accessed 2026-04-26. Relevance: close prior art for rule/classification framing.
- **MwansaNgandu/sa-sovereign-desk**. https://github.com/MwansaNgandu/sa-sovereign-desk — accessed 2026-04-26. Relevance: sovereign dashboard that includes non-yield stress context.
- **Diebold & Li — Forecasting the term structure of government bond yields**. https://www.sciencedirect.com/science/article/pii/S0304405X06002208 — accessed 2026-04-26. Relevance: standard term-structure forecasting baseline.
- **Ang & Piazzesi — A no-arbitrage vector autoregression of term structure dynamics with macroeconomic and latent variables**. https://www.sciencedirect.com/science/article/pii/S0304393202002768 — accessed 2026-04-26. Relevance: macro-finance baseline connecting yields and macro variables.
- **Adrian, Crump & Moench — Pricing the Term Structure with Linear Regressions**. https://www.newyorkfed.org/research/staff_reports/sr340.html — accessed 2026-04-26. Relevance: term-premium decomposition prior art.

### Weak-source notes
- GitHub results were available but mostly low-star prototypes, which is evidence that the exact open-source dashboard niche is not dominated by one canonical repo.
- arXiv and Semantic Scholar were rate-limited with HTTP 429 during this run, so the scholarly review should be treated as incomplete.
- FRED pages were not retrievable through the cron network path, but the named public series and category remain high-confidence data sources to validate in a build pass.

## Nightly research log
### 2026-04-26
- Selected this project as the least-developed remaining top-level stub: it had no prior dated nightly research log, latest update 2026-04-21, and evidence score 2 in the 2026-04-25 overview.
- Added a concrete regime-classification thesis, prior-art challenge, GitHub examples, institutional data sources, literature baselines, feasibility path, novelty/differentiation, risk list, open questions, and implementation experiments.
- Strengthened the feasibility claim: a transparent public-data prototype is realistic.
- Weakened the novelty claim: charting yield curves and using curve slope as a macro signal are mature; differentiation must come from transparent cross-country regime explanation and provenance.
- Marked arXiv/Semantic Scholar as weak for this run due to rate limits rather than pretending the literature sweep was complete.

