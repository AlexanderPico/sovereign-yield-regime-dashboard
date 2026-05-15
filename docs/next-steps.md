# Next steps

1. Create a small source manifest for the initial U.S. yield series and note freshness/update cadence.
2. Define the first regime taxonomy (`normal`, `flattening`, `inverted`, `re-steepening`, etc.) and write explicit threshold rules.
3. Pick the first implementation surface: notebook first, then optional local app.
4. Pull U.S. Treasury daily curve data and FRED spread series into a reproducible local script.
5. Compute 10Y-2Y, 10Y-3M, and rolling 1/20/60-day changes in one prototype artifact.
6. Draft a markdown `regime-card` schema with fields for label, evidence, contradictions, confidence, and data freshness.
7. Backfill a few known macro episodes (2000, 2008, 2020, 2022) to sanity-check whether the rules behave plausibly.
8. Decide which non-yield contextual indicators are mandatory for later phases and which are explicitly deferred.
9. Document licensing and retrieval risks for Treasury, FRED, ECB, BIS, and OECD sources before expanding beyond the U.S.
10. Only after the above, choose whether the first UI should be Streamlit, static markdown generation, or a minimal local web view.
