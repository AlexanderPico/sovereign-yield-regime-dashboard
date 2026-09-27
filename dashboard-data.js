globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA = {
  "generated_at": "2026-09-27T17:15:18Z",
  "title": "Sovereign Yield Regime Dashboard",
  "summary": {
    "overall_status": "alarm",
    "alarm_count": 4,
    "warning_count": 3,
    "indicator_count": 11,
    "latest_observation": "2026-09-25"
  },
  "hero_cards": [
    {
      "label": "Overall regime",
      "value": "ALARM",
      "note": "4 alarm \u00b7 3 watch",
      "status": "alarm"
    },
    {
      "label": "US 10Y",
      "value": "5.18%",
      "note": "Primary duration-pressure anchor",
      "status": "alarm"
    },
    {
      "label": "US 30Y",
      "value": "5.47%",
      "note": "Long-end fiscal and term-premium stress anchor",
      "status": "alarm"
    },
    {
      "label": "2s10s",
      "value": "31 bp",
      "note": "Recession vs bear-steepener lens",
      "status": "ok"
    }
  ],
  "composite_regime": {
    "score": 56,
    "label": "Sovereign Stress Meter",
    "band_label": "Non-benign regime",
    "status": "stale",
    "subscores": {
      "duration": 90,
      "inflation": 31,
      "growth": 35,
      "divergence": 60
    },
    "weights": {
      "duration": 0.3,
      "inflation": 0.25,
      "growth": 0.25,
      "divergence": 0.2
    },
    "effective_weights": {
      "duration": 0.3,
      "inflation": 0.25,
      "growth": 0.25,
      "divergence": 0.2
    },
    "scenario_odds": [
      {
        "key": "recession",
        "label": "Recession",
        "value": 22
      },
      {
        "key": "stagflation",
        "label": "Stagflation",
        "value": 39
      },
      {
        "key": "big_print",
        "label": "Big Print / policy rescue",
        "value": 22
      },
      {
        "key": "benign_disinflation",
        "label": "Benign disinflation",
        "value": 17
      }
    ],
    "drivers": [
      "US 30Y is in alarm, pointing to long-end fiscal-duration stress.",
      "One or more composite inputs are stale, so the meter should be read with reduced confidence until fresher prints arrive."
    ],
    "interpretation": "The dashboard is warning that sovereign-yield conditions are non-benign, but the signal mix is not yet a full policy-panic setup.",
    "expectation": "Base case: mixed regime. Growth scare and inflation persistence are both live possibilities, so one-factor narratives deserve less confidence.",
    "investment_bias": [
      "Favor balanced posture: some liquidity, some defensives, and only selective duration if inflation pressure is easing.",
      "Avoid all-in positioning on either hard landing or soft landing without confirmation from both the curve and long-end yields.",
      "Keep new risk sized modestly until the dashboard either clears or escalates."
    ],
    "warning": "This band can flip quickly: if long-end yields accelerate, the read shifts toward stagflation; if inflation pressure cools, the curve can reassert a recession-first signal.",
    "disclaimer": "Composite dashboard inference, not a forecast guarantee or personalized investment advice."
  },
  "regime_cards": [
    {
      "label": "Overall sovereign-yield regime",
      "status": "alarm",
      "headline": "Escalated sovereign-yield warning stack: 4 alarm signals and 3 watch signals are active.",
      "drivers": "Inflation pressure, curve shape, and cross-market divergence are combined into a transparent warning stack.",
      "implication": "Use this as a review trigger, not a trading signal. Red means the dashboard is explicitly warning that duration and macro assumptions need review."
    },
    {
      "label": "Inflation and duration pressure",
      "status": "alarm",
      "headline": "Inflation-pressure regime is in alarm.",
      "drivers": "US 10Y level, US 30Y, and 10Y breakeven inflation are the primary inflation-and-duration composite under Option A.",
      "implication": "Higher readings argue against easy disinflation narratives and against assuming lower discount rates are imminent."
    },
    {
      "label": "Curve and growth warning",
      "status": "ok",
      "headline": "Curve-warning regime is contained.",
      "drivers": "US 2s10s and 10Y/3M spreads separate benign normalization from inversion or high-rate bear steepening.",
      "implication": "Watch for recession risk on one side and non-benign steepening on the other; do not treat every steep curve as healthy growth."
    },
    {
      "label": "Cross-country sovereign divergence",
      "status": "alarm",
      "headline": "Sovereign-divergence regime is in alarm.",
      "drivers": "Common-month cross-market 10Y dispersion plus Japan, Canada, Australia, UK, and Germany stress proxies indicate whether sovereign markets are decoupling.",
      "implication": "When this is elevated, country-specific fiscal/policy narratives matter more than one-size-fits-all global-rate stories."
    }
  ],
  "gold_reset_watch": {
    "label": "Gold Reset Watch",
    "cadence": "Weekly review; alerts only on meaningful developments.",
    "status": "ok",
    "mechanism_status": "ok",
    "mechanism_state": "No mechanical change: the gold certificate account is still sitting at its statutory book value. Rising gold prices and reset commentary are not evidence of a reset while this holds.",
    "central_question": "Would revaluation create a one-time source of Treasury financing, or would it mark a durable change in the dollar\u2019s monetary backing?",
    "central_answer": "Unanswered, and correctly so. Neither reading is supported until the mechanism itself changes.",
    "central_status": "ok",
    "hypotheses": [
      {
        "key": "h1_monetary_expansion",
        "label": "Hypothesis 1: revaluation drives monetary expansion and dollar depreciation",
        "status": "ok",
        "test": "Requires a mechanism change plus sustained broad-dollar depreciation. Bitcoin and other scarce non-sovereign assets benefit only in that branch.",
        "counter_case": "A credible gold-backed reform that restores confidence in the dollar would instead reduce monetary-hedge demand, so dollar strength after a reset is a genuine falsifier, not a paradox.",
        "signals": [
          "gold_certificate_deviation",
          "dollar_index_change",
          "bitcoin_3m_change"
        ]
      },
      {
        "key": "h2_crisis_adoption",
        "label": "Hypothesis 2: the crisis itself accelerates Bitcoin adoption",
        "status": "ok",
        "test": "Depends on the crisis type. Capital controls or bank distrust favor self-custody; liquidity crises, exchange failures, network restrictions, or forced institutional liquidation impair access and price instead.",
        "counter_case": "Elevated gold volatility together with a deep Bitcoin drawdown is the impairment branch, which is the opposite of the adoption thesis.",
        "signals": [
          "gold_volatility",
          "bitcoin_3m_change"
        ]
      }
    ],
    "signals": [
      {
        "key": "gold_certificate_deviation",
        "label": "Gold certificate account deviation",
        "value": 0.0,
        "value_label": "+0.0%",
        "unit": "pct_change",
        "status": "ok",
        "latest_date": "2026-09-23",
        "hypothesis": "Mechanism",
        "why": "The Treasury\u2013Fed gold certificate account is carried at the statutory $42.2222/oz book value, so it barely moves. A step change is the most direct public evidence that the revaluation mechanism itself has been used.",
        "thresholds": "OK < \u00b10.25% vs trailing median; watch \u00b10.25\u20130.99%; alarm \u2265 \u00b11.00%.",
        "confirms": "A sustained step up is the mechanical signature of revaluation or new certificate issuance against existing gold.",
        "falsifies": "A flat account means no revaluation has occurred, no matter how far gold prices or commentary have run.",
        "source": "FRED WGCAL",
        "cadence": "Weekly Wednesday level"
      },
      {
        "key": "gold_price_proxy_change",
        "label": "Gold price proxy, 3-month change",
        "value": -12.024957458876928,
        "value_label": "-12.0%",
        "unit": "pct_change",
        "status": "ok",
        "latest_date": "2026-08-01",
        "hypothesis": "Context",
        "why": "A public FRED-based gold repricing proxy. Rising gold alone is explicitly NOT evidence of an impending reset; it only sets the backdrop against which mechanism evidence should be read.",
        "thresholds": "OK < +10% over 3 months; watch +10\u201319.9%; alarm \u2265 +20%.",
        "confirms": "A large repricing widens the gap between market value and book value, raising the fiscal attractiveness of a revaluation.",
        "falsifies": "Nothing on its own. Treat this card as context, never as a reset signal.",
        "source": "FRED IQ12260",
        "cadence": "Monthly index (lags markets)"
      },
      {
        "key": "dollar_index_change",
        "label": "Broad dollar index, 3-month change",
        "value": -0.7329989916591728,
        "value_label": "-0.7%",
        "unit": "pct_change",
        "status": "ok",
        "latest_date": "2026-09-18",
        "hypothesis": "Hypothesis 1",
        "why": "Hypothesis 1 requires monetary expansion and dollar depreciation. Without dollar weakness, the revaluation story is closer to an accounting and financing operation than a change in monetary backing.",
        "thresholds": "OK better than -3% over 3 months; watch -3 to -5.9%; alarm \u2264 -6%.",
        "confirms": "Sustained depreciation alongside a mechanism change supports the durable-regime-change reading and the scarce-asset allocation case.",
        "falsifies": "A firm or strengthening dollar after a credible gold-backed reform argues the reset restored confidence, which would reduce rather than increase monetary-hedge demand.",
        "source": "FRED DTWEXBGS",
        "cadence": "Daily market close"
      },
      {
        "key": "gold_volatility",
        "label": "Gold ETF volatility index",
        "value": 23.59,
        "value_label": "23.59",
        "unit": "level",
        "status": "ok",
        "latest_date": "2026-09-22",
        "hypothesis": "Hypothesis 2",
        "why": "Distinguishes an orderly monetary reform from a disorderly crisis. Hypothesis 2 hinges on which of the two occurs, because a severe liquidity crisis can impair access to scarce assets instead of rewarding them.",
        "thresholds": "OK < 28; watch 28\u201337.9; alarm \u2265 38.",
        "confirms": "High gold volatility points to crisis dynamics, where forced liquidation and exchange or banking stress dominate the adoption story.",
        "falsifies": "Calm gold volatility during a mechanism change favors the orderly-reform reading of Hypothesis 2.",
        "source": "FRED GVZCLS",
        "cadence": "Daily market close"
      },
      {
        "key": "bitcoin_3m_change",
        "label": "Bitcoin, 3-month change",
        "value": 42.06089067925727,
        "value_label": "+42.1%",
        "unit": "pct_change",
        "status": "ok",
        "latest_date": "2026-09-26",
        "hypothesis": "Hypothesis 2",
        "why": "Tests the accessibility leg directly. Bitcoin rising with a weaker dollar fits the non-sovereign-hedge path; Bitcoin falling hard while gold volatility is elevated fits the impairment path of forced liquidation and restricted access.",
        "thresholds": "OK better than -25% over 3 months; watch -25 to -39.9%; alarm \u2264 -40%.",
        "confirms": "A deep drawdown alongside elevated gold volatility is evidence for impairment, not for crisis-driven adoption.",
        "falsifies": "Bitcoin strength during dollar depreciation supports the scarce-asset reallocation reading of Hypothesis 1.",
        "source": "FRED CBBTCUSD",
        "cadence": "Daily"
      }
    ],
    "manual_checks": [
      {
        "label": "Gold-revaluation legislation",
        "what": "Search Congress.gov for bills touching the statutory gold price (31 U.S.C. \u00a75116\u20135117), gold certificates, or Treasury gold revaluation.",
        "url": "https://www.congress.gov/quick-search/legislation?q=gold+certificate+revaluation",
        "why": "Actual legislative text is the precondition the analysis asks for before reading rising gold prices as an impending reset."
      },
      {
        "label": "Treasury statements and financing plans",
        "what": "Check Treasury press releases and quarterly refunding statements for any reference to gold valuation or gold certificate issuance.",
        "url": "https://home.treasury.gov/news/press-releases",
        "why": "A financing operation would surface in refunding and debt-management language, not in market prices."
      },
      {
        "label": "Fed H.4.1 gold certificate line",
        "what": "Reconcile the WGCAL card against the H.4.1 factors-affecting-reserve-balances release before acting on any deviation.",
        "url": "https://www.federalreserve.gov/releases/h41/",
        "why": "The Treasury\u2013Fed gold-certificate mechanism is the actual plumbing; the FRED series is a convenience view of it."
      },
      {
        "label": "FOMC and Fed official statements",
        "what": "Scan FOMC statements, minutes, and testimony for discussion of gold backing, certificate revaluation, or balance-sheet treatment of gold.",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
        "why": "A durable change in monetary backing would require explicit Fed accommodation, not just Treasury action."
      }
    ],
    "alerts": [],
    "alert_rule": "Alert only when the mechanism moves, when a hypothesis leg crosses its threshold, or when an input goes stale. Price moves alone do not qualify.",
    "guardrail": "International evidence suggests revaluation can provide financing but cannot by itself solve persistent deficits. Gold price strength and instability are not evidence of an impending reset; mechanism and statement evidence are.",
    "excluded_from_composite": true
  },
  "indicators": [
    {
      "key": "us_10y_yield",
      "label": "US 10Y Treasury yield",
      "value": 5.18,
      "value_label": "5.18%",
      "unit": "%",
      "status": "alarm",
      "latest_date": "2026-09-24",
      "why": "High long-end U.S. rates tighten global duration conditions and raise the hurdle for risk assets, housing, and refinancing.",
      "action": "If red persists, assume duration is expensive: shorten review horizons, avoid assuming lower discount rates, and revisit rate-sensitive exposure.",
      "thresholds": "OK < 4.25%; watch 4.25\u20134.74%; alarm \u2265 4.75%.",
      "source": "FRED DGS10",
      "cadence": "Daily market close",
      "bands": [
        {
          "label": "Alarm \u2265 4.75%",
          "status": "alarm",
          "from": 4.75,
          "to": null
        },
        {
          "label": "Watch 4.25% to 4.75%",
          "status": "watch",
          "from": 4.25,
          "to": 4.75
        },
        {
          "label": "OK < 4.25%",
          "status": "ok",
          "from": null,
          "to": 4.25
        }
      ],
      "components": [
        {
          "series_id": "DGS10",
          "label": "US 10Y Treasury yield",
          "date": "2026-09-24",
          "value": 5.18,
          "status": "present"
        }
      ]
    },
    {
      "key": "us_30y_yield",
      "label": "US 30Y Treasury yield",
      "value": 5.47,
      "value_label": "5.47%",
      "unit": "%",
      "status": "alarm",
      "latest_date": "2026-09-24",
      "why": "The 30Y is a cleaner long-end fiscal-duration and term-premium stress gauge than the 10Y alone when bond vigilante pressure is building.",
      "action": "If red, treat long-duration discount-rate assumptions as fragile and review any thesis that depends on orderly long-end funding conditions.",
      "thresholds": "OK < 4.75%; watch 4.75\u20135.09%; alarm \u2265 5.10%.",
      "source": "FRED DGS30",
      "cadence": "Daily market close",
      "bands": [
        {
          "label": "Alarm \u2265 5.10%",
          "status": "alarm",
          "from": 5.1,
          "to": null
        },
        {
          "label": "Watch 4.75% to 5.10%",
          "status": "watch",
          "from": 4.75,
          "to": 5.1
        },
        {
          "label": "OK < 4.75%",
          "status": "ok",
          "from": null,
          "to": 4.75
        }
      ],
      "components": [
        {
          "series_id": "DGS30",
          "label": "US 30Y Treasury yield",
          "date": "2026-09-24",
          "value": 5.47,
          "status": "present"
        }
      ]
    },
    {
      "key": "us_2s10s_spread",
      "label": "US 2Y/10Y spread",
      "value": 0.3099999999999996,
      "value_label": "31 bp",
      "unit": "pp",
      "status": "ok",
      "latest_date": "2026-09-24",
      "why": "A deep inversion points to recession or policy-error risk; a steep bear move with high long rates points to fiscal-duration stress.",
      "action": "If alarmed, review whether the macro setup is recessionary inversion or bear steepening before adding cyclical or long-duration exposure.",
      "thresholds": "Watch if spread \u2264 0 bp, or \u2265 50 bp with 10Y \u2265 4.25%; alarm if \u2264 -50 bp, or \u2265 100 bp with 10Y \u2265 4.75%.",
      "source": "FRED DGS10 and DGS2",
      "cadence": "Daily market close",
      "bands": [
        {
          "label": "Alarm < -50 bp",
          "status": "alarm",
          "from": null,
          "to": -0.5
        },
        {
          "label": "Alarm \u2265 100 bp",
          "status": "alarm",
          "from": 1.0,
          "to": null
        },
        {
          "label": "Watch < 0 bp",
          "status": "watch",
          "from": null,
          "to": 0.0
        },
        {
          "label": "Watch 50 bp to 100 bp",
          "status": "watch",
          "from": 0.5,
          "to": 1.0
        },
        {
          "label": "OK 0 bp to 50 bp",
          "status": "ok",
          "from": 0.0,
          "to": 0.5
        }
      ],
      "components": [
        {
          "series_id": "DGS10",
          "label": "US 10Y Treasury yield",
          "date": "2026-09-24",
          "value": 5.18,
          "status": "present"
        },
        {
          "series_id": "DGS2",
          "label": "US 2Y Treasury yield",
          "date": "2026-09-24",
          "value": 4.87,
          "status": "present"
        }
      ]
    },
    {
      "key": "us_10y_3m_spread",
      "label": "US 10Y/3M spread",
      "value": 0.93,
      "value_label": "93 bp",
      "unit": "pp",
      "status": "ok",
      "latest_date": "2026-09-25",
      "why": "This is a classic recession-warning lens, but a sharp positive steepener alongside high 10Y rates can also flag renewed inflation or funding stress.",
      "action": "If alarmed, assume the curve is sending a non-benign macro signal and review whether you are underweight growth scare or inflation repricing risk.",
      "thresholds": "Watch if spread \u2264 0 bp, or \u2265 100 bp with 10Y \u2265 4.50%; alarm if \u2264 -25 bp, or \u2265 125 bp with 10Y \u2265 4.75%.",
      "source": "FRED T10Y3M",
      "cadence": "Daily market close",
      "bands": [
        {
          "label": "Alarm < -25 bp",
          "status": "alarm",
          "from": null,
          "to": -0.25
        },
        {
          "label": "Alarm \u2265 125 bp",
          "status": "alarm",
          "from": 1.25,
          "to": null
        },
        {
          "label": "Watch < 0 bp",
          "status": "watch",
          "from": null,
          "to": 0.0
        },
        {
          "label": "Watch 100 bp to 125 bp",
          "status": "watch",
          "from": 1.0,
          "to": 1.25
        },
        {
          "label": "OK 0 bp to 100 bp",
          "status": "ok",
          "from": 0.0,
          "to": 1.0
        }
      ],
      "components": [
        {
          "series_id": "T10Y3M",
          "label": "US 10Y minus 3M spread",
          "date": "2026-09-25",
          "value": 0.93,
          "status": "present"
        }
      ]
    },
    {
      "key": "us_10y_breakeven",
      "label": "US 10Y breakeven inflation",
      "value": 2.34,
      "value_label": "2.34%",
      "unit": "%",
      "status": "ok",
      "latest_date": "2026-09-25",
      "why": "Breakevens reflect market-implied inflation compensation; persistent rises strengthen the case that nominal-yield pressure is inflationary rather than just growth-led.",
      "action": "If red, treat nominal-rate spikes as inflation-confirming until disproven and be skeptical of easy cuts narratives.",
      "thresholds": "OK < 2.60%; watch 2.60\u20132.99%; alarm \u2265 3.00%.",
      "source": "FRED T10YIE",
      "cadence": "Daily market close",
      "bands": [
        {
          "label": "Alarm \u2265 3.00%",
          "status": "alarm",
          "from": 3.0,
          "to": null
        },
        {
          "label": "Watch 2.60% to 3.00%",
          "status": "watch",
          "from": 2.6,
          "to": 3.0
        },
        {
          "label": "OK < 2.60%",
          "status": "ok",
          "from": null,
          "to": 2.6
        }
      ],
      "components": [
        {
          "series_id": "T10YIE",
          "label": "US 10Y breakeven inflation",
          "date": "2026-09-25",
          "value": 2.34,
          "status": "present"
        }
      ]
    },
    {
      "key": "uk_10y_yield",
      "label": "UK 10Y government yield",
      "value": 4.9886,
      "value_label": "4.99%",
      "unit": "%",
      "status": "stale",
      "latest_date": "2026-08-01",
      "why": "Gilts are a useful sovereign stress barometer for a large developed market with fiscal sensitivity and its own inflation path.",
      "action": "If red, assume global duration stress is broadening beyond the U.S. and avoid treating foreign sovereign markets as a calm offset by default.",
      "thresholds": "OK < 4.75%; watch 4.75\u20135.24%; alarm \u2265 5.25%.",
      "source": "FRED IRLTLT01GBM156N",
      "cadence": "Monthly OECD long-term rate",
      "bands": [
        {
          "label": "Alarm \u2265 5.25%",
          "status": "alarm",
          "from": 5.25,
          "to": null
        },
        {
          "label": "Watch 4.75% to 5.25%",
          "status": "watch",
          "from": 4.75,
          "to": 5.25
        },
        {
          "label": "OK < 4.75%",
          "status": "ok",
          "from": null,
          "to": 4.75
        }
      ],
      "components": [
        {
          "series_id": "IRLTLT01GBM156N",
          "label": "UK 10Y government yield",
          "date": "2026-08-01",
          "value": 4.9886,
          "status": "present"
        }
      ]
    },
    {
      "key": "japan_10y_yield",
      "label": "Japan 10Y government yield",
      "value": 2.94,
      "value_label": "2.94%",
      "unit": "%",
      "status": "alarm",
      "latest_date": "2026-08-01",
      "why": "Japanese yields rising from a low base can tighten the global funding backdrop and weaken the assumption that Japan remains a pure anchor market.",
      "action": "If red, treat yen-funded or global-duration complacency as weaker than usual and review cross-market carry assumptions.",
      "thresholds": "OK < 1.75%; watch 1.75\u20132.49%; alarm \u2265 2.50%.",
      "source": "FRED IRLTLT01JPM156N",
      "cadence": "Monthly OECD long-term rate",
      "bands": [
        {
          "label": "Alarm \u2265 2.50%",
          "status": "alarm",
          "from": 2.5,
          "to": null
        },
        {
          "label": "Watch 1.75% to 2.50%",
          "status": "watch",
          "from": 1.75,
          "to": 2.5
        },
        {
          "label": "OK < 1.75%",
          "status": "ok",
          "from": null,
          "to": 1.75
        }
      ],
      "components": [
        {
          "series_id": "IRLTLT01JPM156N",
          "label": "Japan 10Y government yield",
          "date": "2026-08-01",
          "value": 2.94,
          "status": "present"
        }
      ]
    },
    {
      "key": "canada_10y_yield",
      "label": "Canada 10Y government yield",
      "value": 3.675,
      "value_label": "3.67%",
      "unit": "%",
      "status": "stale",
      "latest_date": "2026-08-01",
      "why": "Canada provides a commodity-linked developed-market cross-check on whether rate pressure is broad and not just idiosyncratic U.S. noise.",
      "action": "If red, assume North American sovereign pressure is synchronizing and lower your confidence that the U.S. move is isolated.",
      "thresholds": "OK < 3.75%; watch 3.75\u20134.49%; alarm \u2265 4.50%.",
      "source": "FRED IRLTLT01CAM156N",
      "cadence": "Monthly OECD long-term rate",
      "bands": [
        {
          "label": "Alarm \u2265 4.50%",
          "status": "alarm",
          "from": 4.5,
          "to": null
        },
        {
          "label": "Watch 3.75% to 4.50%",
          "status": "watch",
          "from": 3.75,
          "to": 4.5
        },
        {
          "label": "OK < 3.75%",
          "status": "ok",
          "from": null,
          "to": 3.75
        }
      ],
      "components": [
        {
          "series_id": "IRLTLT01CAM156N",
          "label": "Canada 10Y government yield",
          "date": "2026-08-01",
          "value": 3.675,
          "status": "present"
        }
      ]
    },
    {
      "key": "australia_10y_yield",
      "label": "Australia 10Y government yield",
      "value": 5.015,
      "value_label": "5.01%",
      "unit": "%",
      "status": "alarm",
      "latest_date": "2026-08-01",
      "why": "Australia is a useful DM reflation and China-exposure proxy; rising yields there often confirm a broader global rate pulse.",
      "action": "If red, assume the long-end selloff is global enough to matter for cross-market asset pricing, not just a U.S. macro narrative.",
      "thresholds": "OK < 4.50%; watch 4.50\u20134.99%; alarm \u2265 5.00%.",
      "source": "FRED IRLTLT01AUM156N",
      "cadence": "Monthly OECD long-term rate",
      "bands": [
        {
          "label": "Alarm \u2265 5.00%",
          "status": "alarm",
          "from": 5.0,
          "to": null
        },
        {
          "label": "Watch 4.50% to 5.00%",
          "status": "watch",
          "from": 4.5,
          "to": 5.0
        },
        {
          "label": "OK < 4.50%",
          "status": "ok",
          "from": null,
          "to": 4.5
        }
      ],
      "components": [
        {
          "series_id": "IRLTLT01AUM156N",
          "label": "Australia 10Y government yield",
          "date": "2026-08-01",
          "value": 5.015,
          "status": "present"
        }
      ]
    },
    {
      "key": "germany_10y_yield",
      "label": "Germany 10Y government yield",
      "value": 3.18,
      "value_label": "3.18%",
      "unit": "%",
      "status": "stale",
      "latest_date": "2026-08-01",
      "why": "Bund yields are the live European duration anchor after the euro-area OECD aggregate series stalled; a notable rise matters even when stress is not obvious in risk assets yet.",
      "action": "If red, assume the euro-area risk-free curve itself is repricing higher and stop treating European rates as a passive stabilizer.",
      "thresholds": "OK < 2.75%; watch 2.75\u20133.24%; alarm \u2265 3.25%.",
      "source": "FRED IRLTLT01DEM156N",
      "cadence": "Monthly OECD long-term rate",
      "bands": [
        {
          "label": "Alarm \u2265 3.25%",
          "status": "alarm",
          "from": 3.25,
          "to": null
        },
        {
          "label": "Watch 2.75% to 3.25%",
          "status": "watch",
          "from": 2.75,
          "to": 3.25
        },
        {
          "label": "OK < 2.75%",
          "status": "ok",
          "from": null,
          "to": 2.75
        }
      ],
      "components": [
        {
          "series_id": "IRLTLT01DEM156N",
          "label": "Germany 10Y government yield",
          "date": "2026-08-01",
          "value": 3.18,
          "status": "present"
        }
      ]
    },
    {
      "key": "cross_market_dispersion",
      "label": "Cross-market 10Y dispersion",
      "value": 2.0749999999999997,
      "value_label": "207 bp",
      "unit": "pp",
      "status": "ok",
      "latest_date": "2026-08-31",
      "why": "A wide developed-market yield spread says sovereign markets are not moving as one block; policy, inflation, or fiscal stress is becoming more country-specific. Dispersion is aligned on the last common month across constituents.",
      "action": "If red, stop using a single \u201cglobal rates\u201d story. Review country-specific risk separately and raise the bar for cross-market analogies.",
      "thresholds": "OK < 250 bp; watch 250\u2013324 bp; alarm \u2265 325 bp.",
      "source": "Derived from US, UK, Japan, Canada, Australia, and Germany 10Y yields (common-month aligned).",
      "cadence": "Common-month composite",
      "bands": [
        {
          "label": "Alarm \u2265 325 bp",
          "status": "alarm",
          "from": 3.25,
          "to": null
        },
        {
          "label": "Watch 250 bp to 325 bp",
          "status": "watch",
          "from": 2.5,
          "to": 3.25
        },
        {
          "label": "OK < 250 bp",
          "status": "ok",
          "from": null,
          "to": 2.5
        }
      ],
      "components": [
        {
          "series_id": "DGS10",
          "label": "US 10Y Treasury yield",
          "date": "2026-09-24",
          "value": 5.18,
          "status": "present"
        },
        {
          "series_id": "IRLTLT01GBM156N",
          "label": "UK 10Y government yield",
          "date": "2026-08-01",
          "value": 4.9886,
          "status": "present"
        },
        {
          "series_id": "IRLTLT01JPM156N",
          "label": "Japan 10Y government yield",
          "date": "2026-08-01",
          "value": 2.94,
          "status": "present"
        },
        {
          "series_id": "IRLTLT01CAM156N",
          "label": "Canada 10Y government yield",
          "date": "2026-08-01",
          "value": 3.675,
          "status": "present"
        },
        {
          "series_id": "IRLTLT01AUM156N",
          "label": "Australia 10Y government yield",
          "date": "2026-08-01",
          "value": 5.015,
          "status": "present"
        },
        {
          "series_id": "IRLTLT01DEM156N",
          "label": "Germany 10Y government yield",
          "date": "2026-08-01",
          "value": 3.18,
          "status": "present"
        }
      ]
    }
  ],
  "history": {
    "start_date": "2025-08-01",
    "end_date": "2026-09-26",
    "series": [
      {
        "key": "us_10y_yield",
        "label": "US 10Y Treasury yield",
        "unit": "%",
        "color": "#60a5fa",
        "latest_status": "alarm",
        "bands": [
          {
            "label": "Alarm \u2265 4.75%",
            "status": "alarm",
            "from": 4.75,
            "to": null
          },
          {
            "label": "Watch 4.25% to 4.75%",
            "status": "watch",
            "from": 4.25,
            "to": 4.75
          },
          {
            "label": "OK < 4.25%",
            "status": "ok",
            "from": null,
            "to": 4.25
          }
        ],
        "points": [
          {
            "date": "2025-08-04",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2025-08-05",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2025-08-06",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2025-08-07",
            "value": 4.23,
            "status": "ok"
          },
          {
            "date": "2025-08-08",
            "value": 4.27,
            "status": "watch"
          },
          {
            "date": "2025-08-11",
            "value": 4.27,
            "status": "watch"
          },
          {
            "date": "2025-08-12",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2025-08-13",
            "value": 4.24,
            "status": "ok"
          },
          {
            "date": "2025-08-14",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2025-08-15",
            "value": 4.33,
            "status": "watch"
          },
          {
            "date": "2025-08-18",
            "value": 4.34,
            "status": "watch"
          },
          {
            "date": "2025-08-19",
            "value": 4.3,
            "status": "watch"
          },
          {
            "date": "2025-08-20",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2025-08-21",
            "value": 4.33,
            "status": "watch"
          },
          {
            "date": "2025-08-22",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2025-08-25",
            "value": 4.28,
            "status": "watch"
          },
          {
            "date": "2025-08-26",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2025-08-27",
            "value": 4.24,
            "status": "ok"
          },
          {
            "date": "2025-08-28",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2025-08-29",
            "value": 4.23,
            "status": "ok"
          },
          {
            "date": "2025-09-02",
            "value": 4.28,
            "status": "watch"
          },
          {
            "date": "2025-09-03",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2025-09-04",
            "value": 4.17,
            "status": "ok"
          },
          {
            "date": "2025-09-05",
            "value": 4.1,
            "status": "ok"
          },
          {
            "date": "2025-09-08",
            "value": 4.05,
            "status": "ok"
          },
          {
            "date": "2025-09-09",
            "value": 4.08,
            "status": "ok"
          },
          {
            "date": "2025-09-10",
            "value": 4.04,
            "status": "ok"
          },
          {
            "date": "2025-09-11",
            "value": 4.01,
            "status": "ok"
          },
          {
            "date": "2025-09-12",
            "value": 4.06,
            "status": "ok"
          },
          {
            "date": "2025-09-15",
            "value": 4.05,
            "status": "ok"
          },
          {
            "date": "2025-09-16",
            "value": 4.04,
            "status": "ok"
          },
          {
            "date": "2025-09-17",
            "value": 4.06,
            "status": "ok"
          },
          {
            "date": "2025-09-18",
            "value": 4.11,
            "status": "ok"
          },
          {
            "date": "2025-09-19",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-09-22",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2025-09-23",
            "value": 4.12,
            "status": "ok"
          },
          {
            "date": "2025-09-24",
            "value": 4.16,
            "status": "ok"
          },
          {
            "date": "2025-09-25",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2025-09-26",
            "value": 4.2,
            "status": "ok"
          },
          {
            "date": "2025-09-29",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2025-09-30",
            "value": 4.16,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 4.12,
            "status": "ok"
          },
          {
            "date": "2025-10-02",
            "value": 4.1,
            "status": "ok"
          },
          {
            "date": "2025-10-03",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2025-10-06",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2025-10-07",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-10-08",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2025-10-09",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-10-10",
            "value": 4.05,
            "status": "ok"
          },
          {
            "date": "2025-10-14",
            "value": 4.03,
            "status": "ok"
          },
          {
            "date": "2025-10-15",
            "value": 4.05,
            "status": "ok"
          },
          {
            "date": "2025-10-16",
            "value": 3.99,
            "status": "ok"
          },
          {
            "date": "2025-10-17",
            "value": 4.02,
            "status": "ok"
          },
          {
            "date": "2025-10-20",
            "value": 4.0,
            "status": "ok"
          },
          {
            "date": "2025-10-21",
            "value": 3.98,
            "status": "ok"
          },
          {
            "date": "2025-10-22",
            "value": 3.97,
            "status": "ok"
          },
          {
            "date": "2025-10-23",
            "value": 4.01,
            "status": "ok"
          },
          {
            "date": "2025-10-24",
            "value": 4.02,
            "status": "ok"
          },
          {
            "date": "2025-10-27",
            "value": 4.01,
            "status": "ok"
          },
          {
            "date": "2025-10-28",
            "value": 3.99,
            "status": "ok"
          },
          {
            "date": "2025-10-29",
            "value": 4.08,
            "status": "ok"
          },
          {
            "date": "2025-10-30",
            "value": 4.11,
            "status": "ok"
          },
          {
            "date": "2025-10-31",
            "value": 4.11,
            "status": "ok"
          },
          {
            "date": "2025-11-03",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2025-11-04",
            "value": 4.1,
            "status": "ok"
          },
          {
            "date": "2025-11-05",
            "value": 4.17,
            "status": "ok"
          },
          {
            "date": "2025-11-06",
            "value": 4.11,
            "status": "ok"
          },
          {
            "date": "2025-11-07",
            "value": 4.11,
            "status": "ok"
          },
          {
            "date": "2025-11-10",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2025-11-12",
            "value": 4.08,
            "status": "ok"
          },
          {
            "date": "2025-11-13",
            "value": 4.11,
            "status": "ok"
          },
          {
            "date": "2025-11-14",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-11-17",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2025-11-18",
            "value": 4.12,
            "status": "ok"
          },
          {
            "date": "2025-11-19",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2025-11-20",
            "value": 4.1,
            "status": "ok"
          },
          {
            "date": "2025-11-21",
            "value": 4.06,
            "status": "ok"
          },
          {
            "date": "2025-11-24",
            "value": 4.04,
            "status": "ok"
          },
          {
            "date": "2025-11-25",
            "value": 4.01,
            "status": "ok"
          },
          {
            "date": "2025-11-26",
            "value": 4.0,
            "status": "ok"
          },
          {
            "date": "2025-11-28",
            "value": 4.02,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 4.09,
            "status": "ok"
          },
          {
            "date": "2025-12-02",
            "value": 4.09,
            "status": "ok"
          },
          {
            "date": "2025-12-03",
            "value": 4.06,
            "status": "ok"
          },
          {
            "date": "2025-12-04",
            "value": 4.11,
            "status": "ok"
          },
          {
            "date": "2025-12-05",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-12-08",
            "value": 4.17,
            "status": "ok"
          },
          {
            "date": "2025-12-09",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2025-12-10",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2025-12-11",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-12-12",
            "value": 4.19,
            "status": "ok"
          },
          {
            "date": "2025-12-15",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2025-12-16",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2025-12-17",
            "value": 4.16,
            "status": "ok"
          },
          {
            "date": "2025-12-18",
            "value": 4.12,
            "status": "ok"
          },
          {
            "date": "2025-12-19",
            "value": 4.16,
            "status": "ok"
          },
          {
            "date": "2025-12-22",
            "value": 4.17,
            "status": "ok"
          },
          {
            "date": "2025-12-23",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2025-12-24",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2025-12-26",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-12-29",
            "value": 4.12,
            "status": "ok"
          },
          {
            "date": "2025-12-30",
            "value": 4.14,
            "status": "ok"
          },
          {
            "date": "2025-12-31",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2026-01-02",
            "value": 4.19,
            "status": "ok"
          },
          {
            "date": "2026-01-05",
            "value": 4.17,
            "status": "ok"
          },
          {
            "date": "2026-01-06",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2026-01-07",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2026-01-08",
            "value": 4.19,
            "status": "ok"
          },
          {
            "date": "2026-01-09",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2026-01-12",
            "value": 4.19,
            "status": "ok"
          },
          {
            "date": "2026-01-13",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2026-01-14",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2026-01-15",
            "value": 4.17,
            "status": "ok"
          },
          {
            "date": "2026-01-16",
            "value": 4.24,
            "status": "ok"
          },
          {
            "date": "2026-01-20",
            "value": 4.3,
            "status": "watch"
          },
          {
            "date": "2026-01-21",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-01-22",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-01-23",
            "value": 4.24,
            "status": "ok"
          },
          {
            "date": "2026-01-26",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2026-01-27",
            "value": 4.24,
            "status": "ok"
          },
          {
            "date": "2026-01-28",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-01-29",
            "value": 4.24,
            "status": "ok"
          },
          {
            "date": "2026-01-30",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-02-02",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2026-02-03",
            "value": 4.28,
            "status": "watch"
          },
          {
            "date": "2026-02-04",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2026-02-05",
            "value": 4.21,
            "status": "ok"
          },
          {
            "date": "2026-02-06",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2026-02-09",
            "value": 4.22,
            "status": "ok"
          },
          {
            "date": "2026-02-10",
            "value": 4.16,
            "status": "ok"
          },
          {
            "date": "2026-02-11",
            "value": 4.18,
            "status": "ok"
          },
          {
            "date": "2026-02-12",
            "value": 4.09,
            "status": "ok"
          },
          {
            "date": "2026-02-13",
            "value": 4.04,
            "status": "ok"
          },
          {
            "date": "2026-02-17",
            "value": 4.05,
            "status": "ok"
          },
          {
            "date": "2026-02-18",
            "value": 4.09,
            "status": "ok"
          },
          {
            "date": "2026-02-19",
            "value": 4.08,
            "status": "ok"
          },
          {
            "date": "2026-02-20",
            "value": 4.08,
            "status": "ok"
          },
          {
            "date": "2026-02-23",
            "value": 4.03,
            "status": "ok"
          },
          {
            "date": "2026-02-24",
            "value": 4.04,
            "status": "ok"
          },
          {
            "date": "2026-02-25",
            "value": 4.05,
            "status": "ok"
          },
          {
            "date": "2026-02-26",
            "value": 4.02,
            "status": "ok"
          },
          {
            "date": "2026-02-27",
            "value": 3.97,
            "status": "ok"
          },
          {
            "date": "2026-03-02",
            "value": 4.05,
            "status": "ok"
          },
          {
            "date": "2026-03-03",
            "value": 4.06,
            "status": "ok"
          },
          {
            "date": "2026-03-04",
            "value": 4.09,
            "status": "ok"
          },
          {
            "date": "2026-03-05",
            "value": 4.13,
            "status": "ok"
          },
          {
            "date": "2026-03-06",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2026-03-09",
            "value": 4.12,
            "status": "ok"
          },
          {
            "date": "2026-03-10",
            "value": 4.15,
            "status": "ok"
          },
          {
            "date": "2026-03-11",
            "value": 4.21,
            "status": "ok"
          },
          {
            "date": "2026-03-12",
            "value": 4.27,
            "status": "watch"
          },
          {
            "date": "2026-03-13",
            "value": 4.28,
            "status": "watch"
          },
          {
            "date": "2026-03-16",
            "value": 4.23,
            "status": "ok"
          },
          {
            "date": "2026-03-17",
            "value": 4.2,
            "status": "ok"
          },
          {
            "date": "2026-03-18",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-03-19",
            "value": 4.25,
            "status": "watch"
          },
          {
            "date": "2026-03-20",
            "value": 4.39,
            "status": "watch"
          },
          {
            "date": "2026-03-23",
            "value": 4.34,
            "status": "watch"
          },
          {
            "date": "2026-03-24",
            "value": 4.39,
            "status": "watch"
          },
          {
            "date": "2026-03-25",
            "value": 4.33,
            "status": "watch"
          },
          {
            "date": "2026-03-26",
            "value": 4.42,
            "status": "watch"
          },
          {
            "date": "2026-03-27",
            "value": 4.44,
            "status": "watch"
          },
          {
            "date": "2026-03-30",
            "value": 4.35,
            "status": "watch"
          },
          {
            "date": "2026-03-31",
            "value": 4.3,
            "status": "watch"
          },
          {
            "date": "2026-04-01",
            "value": 4.33,
            "status": "watch"
          },
          {
            "date": "2026-04-02",
            "value": 4.31,
            "status": "watch"
          },
          {
            "date": "2026-04-03",
            "value": 4.35,
            "status": "watch"
          },
          {
            "date": "2026-04-06",
            "value": 4.34,
            "status": "watch"
          },
          {
            "date": "2026-04-07",
            "value": 4.33,
            "status": "watch"
          },
          {
            "date": "2026-04-08",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2026-04-09",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2026-04-10",
            "value": 4.31,
            "status": "watch"
          },
          {
            "date": "2026-04-13",
            "value": 4.3,
            "status": "watch"
          },
          {
            "date": "2026-04-14",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-04-15",
            "value": 4.29,
            "status": "watch"
          },
          {
            "date": "2026-04-16",
            "value": 4.32,
            "status": "watch"
          },
          {
            "date": "2026-04-17",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-04-20",
            "value": 4.26,
            "status": "watch"
          },
          {
            "date": "2026-04-21",
            "value": 4.3,
            "status": "watch"
          },
          {
            "date": "2026-04-22",
            "value": 4.3,
            "status": "watch"
          },
          {
            "date": "2026-04-23",
            "value": 4.34,
            "status": "watch"
          },
          {
            "date": "2026-04-24",
            "value": 4.31,
            "status": "watch"
          },
          {
            "date": "2026-04-27",
            "value": 4.35,
            "status": "watch"
          },
          {
            "date": "2026-04-28",
            "value": 4.36,
            "status": "watch"
          },
          {
            "date": "2026-04-29",
            "value": 4.42,
            "status": "watch"
          },
          {
            "date": "2026-04-30",
            "value": 4.4,
            "status": "watch"
          },
          {
            "date": "2026-05-01",
            "value": 4.39,
            "status": "watch"
          },
          {
            "date": "2026-05-04",
            "value": 4.45,
            "status": "watch"
          },
          {
            "date": "2026-05-05",
            "value": 4.43,
            "status": "watch"
          },
          {
            "date": "2026-05-06",
            "value": 4.36,
            "status": "watch"
          },
          {
            "date": "2026-05-07",
            "value": 4.41,
            "status": "watch"
          },
          {
            "date": "2026-05-08",
            "value": 4.38,
            "status": "watch"
          },
          {
            "date": "2026-05-11",
            "value": 4.42,
            "status": "watch"
          },
          {
            "date": "2026-05-12",
            "value": 4.46,
            "status": "watch"
          },
          {
            "date": "2026-05-13",
            "value": 4.46,
            "status": "watch"
          },
          {
            "date": "2026-05-14",
            "value": 4.47,
            "status": "watch"
          },
          {
            "date": "2026-05-15",
            "value": 4.59,
            "status": "watch"
          },
          {
            "date": "2026-05-18",
            "value": 4.61,
            "status": "watch"
          },
          {
            "date": "2026-05-19",
            "value": 4.67,
            "status": "watch"
          },
          {
            "date": "2026-05-20",
            "value": 4.57,
            "status": "watch"
          },
          {
            "date": "2026-05-21",
            "value": 4.57,
            "status": "watch"
          },
          {
            "date": "2026-05-22",
            "value": 4.56,
            "status": "watch"
          },
          {
            "date": "2026-05-26",
            "value": 4.5,
            "status": "watch"
          },
          {
            "date": "2026-05-27",
            "value": 4.48,
            "status": "watch"
          },
          {
            "date": "2026-05-28",
            "value": 4.45,
            "status": "watch"
          },
          {
            "date": "2026-05-29",
            "value": 4.45,
            "status": "watch"
          },
          {
            "date": "2026-06-01",
            "value": 4.47,
            "status": "watch"
          },
          {
            "date": "2026-06-02",
            "value": 4.46,
            "status": "watch"
          },
          {
            "date": "2026-06-03",
            "value": 4.49,
            "status": "watch"
          },
          {
            "date": "2026-06-04",
            "value": 4.47,
            "status": "watch"
          },
          {
            "date": "2026-06-05",
            "value": 4.55,
            "status": "watch"
          },
          {
            "date": "2026-06-08",
            "value": 4.56,
            "status": "watch"
          },
          {
            "date": "2026-06-09",
            "value": 4.53,
            "status": "watch"
          },
          {
            "date": "2026-06-10",
            "value": 4.55,
            "status": "watch"
          },
          {
            "date": "2026-06-11",
            "value": 4.45,
            "status": "watch"
          },
          {
            "date": "2026-06-12",
            "value": 4.48,
            "status": "watch"
          },
          {
            "date": "2026-06-15",
            "value": 4.47,
            "status": "watch"
          },
          {
            "date": "2026-06-16",
            "value": 4.43,
            "status": "watch"
          },
          {
            "date": "2026-06-17",
            "value": 4.49,
            "status": "watch"
          },
          {
            "date": "2026-06-18",
            "value": 4.46,
            "status": "watch"
          },
          {
            "date": "2026-06-22",
            "value": 4.51,
            "status": "watch"
          },
          {
            "date": "2026-06-23",
            "value": 4.5,
            "status": "watch"
          },
          {
            "date": "2026-06-24",
            "value": 4.41,
            "status": "watch"
          },
          {
            "date": "2026-06-25",
            "value": 4.4,
            "status": "watch"
          },
          {
            "date": "2026-06-26",
            "value": 4.38,
            "status": "watch"
          },
          {
            "date": "2026-06-29",
            "value": 4.38,
            "status": "watch"
          },
          {
            "date": "2026-06-30",
            "value": 4.44,
            "status": "watch"
          },
          {
            "date": "2026-07-01",
            "value": 4.48,
            "status": "watch"
          },
          {
            "date": "2026-07-02",
            "value": 4.49,
            "status": "watch"
          },
          {
            "date": "2026-07-06",
            "value": 4.48,
            "status": "watch"
          },
          {
            "date": "2026-07-07",
            "value": 4.55,
            "status": "watch"
          },
          {
            "date": "2026-07-08",
            "value": 4.56,
            "status": "watch"
          },
          {
            "date": "2026-07-09",
            "value": 4.54,
            "status": "watch"
          },
          {
            "date": "2026-07-10",
            "value": 4.56,
            "status": "watch"
          },
          {
            "date": "2026-07-13",
            "value": 4.62,
            "status": "watch"
          },
          {
            "date": "2026-07-14",
            "value": 4.58,
            "status": "watch"
          },
          {
            "date": "2026-07-15",
            "value": 4.55,
            "status": "watch"
          },
          {
            "date": "2026-07-16",
            "value": 4.57,
            "status": "watch"
          },
          {
            "date": "2026-07-17",
            "value": 4.55,
            "status": "watch"
          },
          {
            "date": "2026-07-20",
            "value": 4.6,
            "status": "watch"
          },
          {
            "date": "2026-07-21",
            "value": 4.63,
            "status": "watch"
          },
          {
            "date": "2026-07-22",
            "value": 4.67,
            "status": "watch"
          },
          {
            "date": "2026-07-23",
            "value": 4.71,
            "status": "watch"
          },
          {
            "date": "2026-07-24",
            "value": 4.69,
            "status": "watch"
          },
          {
            "date": "2026-07-27",
            "value": 4.65,
            "status": "watch"
          },
          {
            "date": "2026-07-28",
            "value": 4.61,
            "status": "watch"
          },
          {
            "date": "2026-07-29",
            "value": 4.67,
            "status": "watch"
          },
          {
            "date": "2026-07-30",
            "value": 4.68,
            "status": "watch"
          },
          {
            "date": "2026-07-31",
            "value": 4.75,
            "status": "alarm"
          },
          {
            "date": "2026-08-03",
            "value": 4.7,
            "status": "watch"
          },
          {
            "date": "2026-08-04",
            "value": 4.63,
            "status": "watch"
          },
          {
            "date": "2026-08-05",
            "value": 4.63,
            "status": "watch"
          },
          {
            "date": "2026-08-06",
            "value": 4.69,
            "status": "watch"
          },
          {
            "date": "2026-08-07",
            "value": 4.65,
            "status": "watch"
          },
          {
            "date": "2026-08-10",
            "value": 4.72,
            "status": "watch"
          },
          {
            "date": "2026-08-11",
            "value": 4.7,
            "status": "watch"
          },
          {
            "date": "2026-08-12",
            "value": 4.68,
            "status": "watch"
          },
          {
            "date": "2026-08-13",
            "value": 4.63,
            "status": "watch"
          },
          {
            "date": "2026-08-14",
            "value": 4.68,
            "status": "watch"
          },
          {
            "date": "2026-08-17",
            "value": 4.72,
            "status": "watch"
          },
          {
            "date": "2026-08-18",
            "value": 4.71,
            "status": "watch"
          },
          {
            "date": "2026-08-19",
            "value": 4.65,
            "status": "watch"
          },
          {
            "date": "2026-08-20",
            "value": 4.69,
            "status": "watch"
          },
          {
            "date": "2026-08-21",
            "value": 4.74,
            "status": "watch"
          },
          {
            "date": "2026-08-24",
            "value": 4.7,
            "status": "watch"
          },
          {
            "date": "2026-08-25",
            "value": 4.64,
            "status": "watch"
          },
          {
            "date": "2026-08-26",
            "value": 4.66,
            "status": "watch"
          },
          {
            "date": "2026-08-27",
            "value": 4.67,
            "status": "watch"
          },
          {
            "date": "2026-08-28",
            "value": 4.73,
            "status": "watch"
          },
          {
            "date": "2026-08-31",
            "value": 4.75,
            "status": "alarm"
          },
          {
            "date": "2026-09-01",
            "value": 4.79,
            "status": "alarm"
          },
          {
            "date": "2026-09-02",
            "value": 4.79,
            "status": "alarm"
          },
          {
            "date": "2026-09-03",
            "value": 4.77,
            "status": "alarm"
          },
          {
            "date": "2026-09-04",
            "value": 4.78,
            "status": "alarm"
          },
          {
            "date": "2026-09-08",
            "value": 4.8,
            "status": "alarm"
          },
          {
            "date": "2026-09-09",
            "value": 4.83,
            "status": "alarm"
          },
          {
            "date": "2026-09-10",
            "value": 4.95,
            "status": "alarm"
          },
          {
            "date": "2026-09-11",
            "value": 4.96,
            "status": "alarm"
          },
          {
            "date": "2026-09-14",
            "value": 4.97,
            "status": "alarm"
          },
          {
            "date": "2026-09-15",
            "value": 5.0,
            "status": "alarm"
          },
          {
            "date": "2026-09-16",
            "value": 5.01,
            "status": "alarm"
          },
          {
            "date": "2026-09-17",
            "value": 4.94,
            "status": "alarm"
          },
          {
            "date": "2026-09-18",
            "value": 5.01,
            "status": "alarm"
          },
          {
            "date": "2026-09-21",
            "value": 4.96,
            "status": "alarm"
          },
          {
            "date": "2026-09-22",
            "value": 4.96,
            "status": "alarm"
          },
          {
            "date": "2026-09-23",
            "value": 5.11,
            "status": "alarm"
          },
          {
            "date": "2026-09-24",
            "value": 5.18,
            "status": "alarm"
          }
        ]
      },
      {
        "key": "us_30y_yield",
        "label": "US 30Y Treasury yield",
        "unit": "%",
        "color": "#c084fc",
        "latest_status": "alarm",
        "bands": [
          {
            "label": "Alarm \u2265 5.10%",
            "status": "alarm",
            "from": 5.1,
            "to": null
          },
          {
            "label": "Watch 4.75% to 5.10%",
            "status": "watch",
            "from": 4.75,
            "to": 5.1
          },
          {
            "label": "OK < 4.75%",
            "status": "ok",
            "from": null,
            "to": 4.75
          }
        ],
        "points": [
          {
            "date": "2025-08-04",
            "value": 4.8,
            "status": "watch"
          },
          {
            "date": "2025-08-05",
            "value": 4.78,
            "status": "watch"
          },
          {
            "date": "2025-08-06",
            "value": 4.81,
            "status": "watch"
          },
          {
            "date": "2025-08-07",
            "value": 4.81,
            "status": "watch"
          },
          {
            "date": "2025-08-08",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2025-08-11",
            "value": 4.84,
            "status": "watch"
          },
          {
            "date": "2025-08-12",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2025-08-13",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2025-08-14",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2025-08-15",
            "value": 4.92,
            "status": "watch"
          },
          {
            "date": "2025-08-18",
            "value": 4.94,
            "status": "watch"
          },
          {
            "date": "2025-08-19",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2025-08-20",
            "value": 4.89,
            "status": "watch"
          },
          {
            "date": "2025-08-21",
            "value": 4.92,
            "status": "watch"
          },
          {
            "date": "2025-08-22",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2025-08-25",
            "value": 4.89,
            "status": "watch"
          },
          {
            "date": "2025-08-26",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2025-08-27",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2025-08-28",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2025-08-29",
            "value": 4.92,
            "status": "watch"
          },
          {
            "date": "2025-09-02",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2025-09-03",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2025-09-04",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2025-09-05",
            "value": 4.78,
            "status": "watch"
          },
          {
            "date": "2025-09-08",
            "value": 4.69,
            "status": "ok"
          },
          {
            "date": "2025-09-09",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2025-09-10",
            "value": 4.69,
            "status": "ok"
          },
          {
            "date": "2025-09-11",
            "value": 4.65,
            "status": "ok"
          },
          {
            "date": "2025-09-12",
            "value": 4.68,
            "status": "ok"
          },
          {
            "date": "2025-09-15",
            "value": 4.66,
            "status": "ok"
          },
          {
            "date": "2025-09-16",
            "value": 4.65,
            "status": "ok"
          },
          {
            "date": "2025-09-17",
            "value": 4.66,
            "status": "ok"
          },
          {
            "date": "2025-09-18",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2025-09-19",
            "value": 4.75,
            "status": "watch"
          },
          {
            "date": "2025-09-22",
            "value": 4.77,
            "status": "watch"
          },
          {
            "date": "2025-09-23",
            "value": 4.73,
            "status": "ok"
          },
          {
            "date": "2025-09-24",
            "value": 4.76,
            "status": "watch"
          },
          {
            "date": "2025-09-25",
            "value": 4.75,
            "status": "watch"
          },
          {
            "date": "2025-09-26",
            "value": 4.77,
            "status": "watch"
          },
          {
            "date": "2025-09-29",
            "value": 4.71,
            "status": "ok"
          },
          {
            "date": "2025-09-30",
            "value": 4.73,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2025-10-02",
            "value": 4.69,
            "status": "ok"
          },
          {
            "date": "2025-10-03",
            "value": 4.71,
            "status": "ok"
          },
          {
            "date": "2025-10-06",
            "value": 4.76,
            "status": "watch"
          },
          {
            "date": "2025-10-07",
            "value": 4.73,
            "status": "ok"
          },
          {
            "date": "2025-10-08",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2025-10-09",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2025-10-10",
            "value": 4.63,
            "status": "ok"
          },
          {
            "date": "2025-10-14",
            "value": 4.62,
            "status": "ok"
          },
          {
            "date": "2025-10-15",
            "value": 4.64,
            "status": "ok"
          },
          {
            "date": "2025-10-16",
            "value": 4.58,
            "status": "ok"
          },
          {
            "date": "2025-10-17",
            "value": 4.6,
            "status": "ok"
          },
          {
            "date": "2025-10-20",
            "value": 4.58,
            "status": "ok"
          },
          {
            "date": "2025-10-21",
            "value": 4.55,
            "status": "ok"
          },
          {
            "date": "2025-10-22",
            "value": 4.54,
            "status": "ok"
          },
          {
            "date": "2025-10-23",
            "value": 4.58,
            "status": "ok"
          },
          {
            "date": "2025-10-24",
            "value": 4.59,
            "status": "ok"
          },
          {
            "date": "2025-10-27",
            "value": 4.57,
            "status": "ok"
          },
          {
            "date": "2025-10-28",
            "value": 4.55,
            "status": "ok"
          },
          {
            "date": "2025-10-29",
            "value": 4.61,
            "status": "ok"
          },
          {
            "date": "2025-10-30",
            "value": 4.65,
            "status": "ok"
          },
          {
            "date": "2025-10-31",
            "value": 4.67,
            "status": "ok"
          },
          {
            "date": "2025-11-03",
            "value": 4.69,
            "status": "ok"
          },
          {
            "date": "2025-11-04",
            "value": 4.67,
            "status": "ok"
          },
          {
            "date": "2025-11-05",
            "value": 4.74,
            "status": "ok"
          },
          {
            "date": "2025-11-06",
            "value": 4.69,
            "status": "ok"
          },
          {
            "date": "2025-11-07",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2025-11-10",
            "value": 4.71,
            "status": "ok"
          },
          {
            "date": "2025-11-12",
            "value": 4.67,
            "status": "ok"
          },
          {
            "date": "2025-11-13",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2025-11-14",
            "value": 4.74,
            "status": "ok"
          },
          {
            "date": "2025-11-17",
            "value": 4.73,
            "status": "ok"
          },
          {
            "date": "2025-11-18",
            "value": 4.74,
            "status": "ok"
          },
          {
            "date": "2025-11-19",
            "value": 4.75,
            "status": "watch"
          },
          {
            "date": "2025-11-20",
            "value": 4.73,
            "status": "ok"
          },
          {
            "date": "2025-11-21",
            "value": 4.71,
            "status": "ok"
          },
          {
            "date": "2025-11-24",
            "value": 4.68,
            "status": "ok"
          },
          {
            "date": "2025-11-25",
            "value": 4.67,
            "status": "ok"
          },
          {
            "date": "2025-11-26",
            "value": 4.64,
            "status": "ok"
          },
          {
            "date": "2025-11-28",
            "value": 4.67,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 4.74,
            "status": "ok"
          },
          {
            "date": "2025-12-02",
            "value": 4.74,
            "status": "ok"
          },
          {
            "date": "2025-12-03",
            "value": 4.73,
            "status": "ok"
          },
          {
            "date": "2025-12-04",
            "value": 4.76,
            "status": "watch"
          },
          {
            "date": "2025-12-05",
            "value": 4.79,
            "status": "watch"
          },
          {
            "date": "2025-12-08",
            "value": 4.81,
            "status": "watch"
          },
          {
            "date": "2025-12-09",
            "value": 4.8,
            "status": "watch"
          },
          {
            "date": "2025-12-10",
            "value": 4.78,
            "status": "watch"
          },
          {
            "date": "2025-12-11",
            "value": 4.79,
            "status": "watch"
          },
          {
            "date": "2025-12-12",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2025-12-15",
            "value": 4.84,
            "status": "watch"
          },
          {
            "date": "2025-12-16",
            "value": 4.82,
            "status": "watch"
          },
          {
            "date": "2025-12-17",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2025-12-18",
            "value": 4.8,
            "status": "watch"
          },
          {
            "date": "2025-12-19",
            "value": 4.82,
            "status": "watch"
          },
          {
            "date": "2025-12-22",
            "value": 4.84,
            "status": "watch"
          },
          {
            "date": "2025-12-23",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2025-12-24",
            "value": 4.79,
            "status": "watch"
          },
          {
            "date": "2025-12-26",
            "value": 4.81,
            "status": "watch"
          },
          {
            "date": "2025-12-29",
            "value": 4.8,
            "status": "watch"
          },
          {
            "date": "2025-12-30",
            "value": 4.81,
            "status": "watch"
          },
          {
            "date": "2025-12-31",
            "value": 4.84,
            "status": "watch"
          },
          {
            "date": "2026-01-02",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2026-01-05",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-01-06",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2026-01-07",
            "value": 4.82,
            "status": "watch"
          },
          {
            "date": "2026-01-08",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-01-09",
            "value": 4.82,
            "status": "watch"
          },
          {
            "date": "2026-01-12",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2026-01-13",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2026-01-14",
            "value": 4.79,
            "status": "watch"
          },
          {
            "date": "2026-01-15",
            "value": 4.79,
            "status": "watch"
          },
          {
            "date": "2026-01-16",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2026-01-20",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-01-21",
            "value": 4.87,
            "status": "watch"
          },
          {
            "date": "2026-01-22",
            "value": 4.84,
            "status": "watch"
          },
          {
            "date": "2026-01-23",
            "value": 4.82,
            "status": "watch"
          },
          {
            "date": "2026-01-26",
            "value": 4.8,
            "status": "watch"
          },
          {
            "date": "2026-01-27",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2026-01-28",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-01-29",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-01-30",
            "value": 4.87,
            "status": "watch"
          },
          {
            "date": "2026-02-02",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-02-03",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-02-04",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-02-05",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-02-06",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-02-09",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-02-10",
            "value": 4.78,
            "status": "watch"
          },
          {
            "date": "2026-02-11",
            "value": 4.82,
            "status": "watch"
          },
          {
            "date": "2026-02-12",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2026-02-13",
            "value": 4.69,
            "status": "ok"
          },
          {
            "date": "2026-02-17",
            "value": 4.68,
            "status": "ok"
          },
          {
            "date": "2026-02-18",
            "value": 4.71,
            "status": "ok"
          },
          {
            "date": "2026-02-19",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2026-02-20",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2026-02-23",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2026-02-24",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2026-02-25",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2026-02-26",
            "value": 4.67,
            "status": "ok"
          },
          {
            "date": "2026-02-27",
            "value": 4.64,
            "status": "ok"
          },
          {
            "date": "2026-03-02",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2026-03-03",
            "value": 4.7,
            "status": "ok"
          },
          {
            "date": "2026-03-04",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2026-03-05",
            "value": 4.74,
            "status": "ok"
          },
          {
            "date": "2026-03-06",
            "value": 4.77,
            "status": "watch"
          },
          {
            "date": "2026-03-09",
            "value": 4.72,
            "status": "ok"
          },
          {
            "date": "2026-03-10",
            "value": 4.78,
            "status": "watch"
          },
          {
            "date": "2026-03-11",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2026-03-12",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2026-03-13",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-03-16",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2026-03-17",
            "value": 4.85,
            "status": "watch"
          },
          {
            "date": "2026-03-18",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2026-03-19",
            "value": 4.83,
            "status": "watch"
          },
          {
            "date": "2026-03-20",
            "value": 4.96,
            "status": "watch"
          },
          {
            "date": "2026-03-23",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-03-24",
            "value": 4.94,
            "status": "watch"
          },
          {
            "date": "2026-03-25",
            "value": 4.89,
            "status": "watch"
          },
          {
            "date": "2026-03-26",
            "value": 4.93,
            "status": "watch"
          },
          {
            "date": "2026-03-27",
            "value": 4.98,
            "status": "watch"
          },
          {
            "date": "2026-03-30",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-03-31",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2026-04-01",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-04-02",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2026-04-03",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-04-06",
            "value": 4.89,
            "status": "watch"
          },
          {
            "date": "2026-04-07",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-04-08",
            "value": 4.89,
            "status": "watch"
          },
          {
            "date": "2026-04-09",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-04-10",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-04-13",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-04-14",
            "value": 4.87,
            "status": "watch"
          },
          {
            "date": "2026-04-15",
            "value": 4.89,
            "status": "watch"
          },
          {
            "date": "2026-04-16",
            "value": 4.93,
            "status": "watch"
          },
          {
            "date": "2026-04-17",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2026-04-20",
            "value": 4.88,
            "status": "watch"
          },
          {
            "date": "2026-04-21",
            "value": 4.89,
            "status": "watch"
          },
          {
            "date": "2026-04-22",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-04-23",
            "value": 4.92,
            "status": "watch"
          },
          {
            "date": "2026-04-24",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-04-27",
            "value": 4.94,
            "status": "watch"
          },
          {
            "date": "2026-04-28",
            "value": 4.94,
            "status": "watch"
          },
          {
            "date": "2026-04-29",
            "value": 4.98,
            "status": "watch"
          },
          {
            "date": "2026-04-30",
            "value": 4.98,
            "status": "watch"
          },
          {
            "date": "2026-05-01",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2026-05-04",
            "value": 5.02,
            "status": "watch"
          },
          {
            "date": "2026-05-05",
            "value": 4.98,
            "status": "watch"
          },
          {
            "date": "2026-05-06",
            "value": 4.94,
            "status": "watch"
          },
          {
            "date": "2026-05-07",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2026-05-08",
            "value": 4.95,
            "status": "watch"
          },
          {
            "date": "2026-05-11",
            "value": 4.98,
            "status": "watch"
          },
          {
            "date": "2026-05-12",
            "value": 5.03,
            "status": "watch"
          },
          {
            "date": "2026-05-13",
            "value": 5.03,
            "status": "watch"
          },
          {
            "date": "2026-05-14",
            "value": 5.02,
            "status": "watch"
          },
          {
            "date": "2026-05-15",
            "value": 5.12,
            "status": "alarm"
          },
          {
            "date": "2026-05-18",
            "value": 5.14,
            "status": "alarm"
          },
          {
            "date": "2026-05-19",
            "value": 5.18,
            "status": "alarm"
          },
          {
            "date": "2026-05-20",
            "value": 5.11,
            "status": "alarm"
          },
          {
            "date": "2026-05-21",
            "value": 5.1,
            "status": "alarm"
          },
          {
            "date": "2026-05-22",
            "value": 5.07,
            "status": "watch"
          },
          {
            "date": "2026-05-26",
            "value": 5.03,
            "status": "watch"
          },
          {
            "date": "2026-05-27",
            "value": 5.01,
            "status": "watch"
          },
          {
            "date": "2026-05-28",
            "value": 4.98,
            "status": "watch"
          },
          {
            "date": "2026-05-29",
            "value": 4.99,
            "status": "watch"
          },
          {
            "date": "2026-06-01",
            "value": 4.99,
            "status": "watch"
          },
          {
            "date": "2026-06-02",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2026-06-03",
            "value": 4.99,
            "status": "watch"
          },
          {
            "date": "2026-06-04",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2026-06-05",
            "value": 5.01,
            "status": "watch"
          },
          {
            "date": "2026-06-08",
            "value": 5.03,
            "status": "watch"
          },
          {
            "date": "2026-06-09",
            "value": 5.01,
            "status": "watch"
          },
          {
            "date": "2026-06-10",
            "value": 5.03,
            "status": "watch"
          },
          {
            "date": "2026-06-11",
            "value": 4.95,
            "status": "watch"
          },
          {
            "date": "2026-06-12",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2026-06-15",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2026-06-16",
            "value": 4.93,
            "status": "watch"
          },
          {
            "date": "2026-06-17",
            "value": 4.93,
            "status": "watch"
          },
          {
            "date": "2026-06-18",
            "value": 4.9,
            "status": "watch"
          },
          {
            "date": "2026-06-22",
            "value": 4.95,
            "status": "watch"
          },
          {
            "date": "2026-06-23",
            "value": 4.94,
            "status": "watch"
          },
          {
            "date": "2026-06-24",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2026-06-25",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2026-06-26",
            "value": 4.87,
            "status": "watch"
          },
          {
            "date": "2026-06-29",
            "value": 4.86,
            "status": "watch"
          },
          {
            "date": "2026-06-30",
            "value": 4.91,
            "status": "watch"
          },
          {
            "date": "2026-07-01",
            "value": 4.97,
            "status": "watch"
          },
          {
            "date": "2026-07-02",
            "value": 4.98,
            "status": "watch"
          },
          {
            "date": "2026-07-06",
            "value": 4.99,
            "status": "watch"
          },
          {
            "date": "2026-07-07",
            "value": 5.05,
            "status": "watch"
          },
          {
            "date": "2026-07-08",
            "value": 5.06,
            "status": "watch"
          },
          {
            "date": "2026-07-09",
            "value": 5.05,
            "status": "watch"
          },
          {
            "date": "2026-07-10",
            "value": 5.06,
            "status": "watch"
          },
          {
            "date": "2026-07-13",
            "value": 5.1,
            "status": "alarm"
          },
          {
            "date": "2026-07-14",
            "value": 5.08,
            "status": "watch"
          },
          {
            "date": "2026-07-15",
            "value": 5.08,
            "status": "watch"
          },
          {
            "date": "2026-07-16",
            "value": 5.09,
            "status": "watch"
          },
          {
            "date": "2026-07-17",
            "value": 5.06,
            "status": "watch"
          },
          {
            "date": "2026-07-20",
            "value": 5.11,
            "status": "alarm"
          },
          {
            "date": "2026-07-21",
            "value": 5.13,
            "status": "alarm"
          },
          {
            "date": "2026-07-22",
            "value": 5.15,
            "status": "alarm"
          },
          {
            "date": "2026-07-23",
            "value": 5.17,
            "status": "alarm"
          },
          {
            "date": "2026-07-24",
            "value": 5.16,
            "status": "alarm"
          },
          {
            "date": "2026-07-27",
            "value": 5.12,
            "status": "alarm"
          },
          {
            "date": "2026-07-28",
            "value": 5.09,
            "status": "watch"
          },
          {
            "date": "2026-07-29",
            "value": 5.2,
            "status": "alarm"
          },
          {
            "date": "2026-07-30",
            "value": 5.21,
            "status": "alarm"
          },
          {
            "date": "2026-07-31",
            "value": 5.27,
            "status": "alarm"
          },
          {
            "date": "2026-08-03",
            "value": 5.23,
            "status": "alarm"
          },
          {
            "date": "2026-08-04",
            "value": 5.18,
            "status": "alarm"
          },
          {
            "date": "2026-08-05",
            "value": 5.17,
            "status": "alarm"
          },
          {
            "date": "2026-08-06",
            "value": 5.22,
            "status": "alarm"
          },
          {
            "date": "2026-08-07",
            "value": 5.19,
            "status": "alarm"
          },
          {
            "date": "2026-08-10",
            "value": 5.25,
            "status": "alarm"
          },
          {
            "date": "2026-08-11",
            "value": 5.24,
            "status": "alarm"
          },
          {
            "date": "2026-08-12",
            "value": 5.24,
            "status": "alarm"
          },
          {
            "date": "2026-08-13",
            "value": 5.21,
            "status": "alarm"
          },
          {
            "date": "2026-08-14",
            "value": 5.25,
            "status": "alarm"
          },
          {
            "date": "2026-08-17",
            "value": 5.31,
            "status": "alarm"
          },
          {
            "date": "2026-08-18",
            "value": 5.28,
            "status": "alarm"
          },
          {
            "date": "2026-08-19",
            "value": 5.19,
            "status": "alarm"
          },
          {
            "date": "2026-08-20",
            "value": 5.23,
            "status": "alarm"
          },
          {
            "date": "2026-08-21",
            "value": 5.27,
            "status": "alarm"
          },
          {
            "date": "2026-08-24",
            "value": 5.23,
            "status": "alarm"
          },
          {
            "date": "2026-08-25",
            "value": 5.17,
            "status": "alarm"
          },
          {
            "date": "2026-08-26",
            "value": 5.18,
            "status": "alarm"
          },
          {
            "date": "2026-08-27",
            "value": 5.19,
            "status": "alarm"
          },
          {
            "date": "2026-08-28",
            "value": 5.22,
            "status": "alarm"
          },
          {
            "date": "2026-08-31",
            "value": 5.25,
            "status": "alarm"
          },
          {
            "date": "2026-09-01",
            "value": 5.27,
            "status": "alarm"
          },
          {
            "date": "2026-09-02",
            "value": 5.27,
            "status": "alarm"
          },
          {
            "date": "2026-09-03",
            "value": 5.25,
            "status": "alarm"
          },
          {
            "date": "2026-09-04",
            "value": 5.24,
            "status": "alarm"
          },
          {
            "date": "2026-09-08",
            "value": 5.25,
            "status": "alarm"
          },
          {
            "date": "2026-09-09",
            "value": 5.28,
            "status": "alarm"
          },
          {
            "date": "2026-09-10",
            "value": 5.37,
            "status": "alarm"
          },
          {
            "date": "2026-09-11",
            "value": 5.35,
            "status": "alarm"
          },
          {
            "date": "2026-09-14",
            "value": 5.34,
            "status": "alarm"
          },
          {
            "date": "2026-09-15",
            "value": 5.36,
            "status": "alarm"
          },
          {
            "date": "2026-09-16",
            "value": 5.35,
            "status": "alarm"
          },
          {
            "date": "2026-09-17",
            "value": 5.29,
            "status": "alarm"
          },
          {
            "date": "2026-09-18",
            "value": 5.34,
            "status": "alarm"
          },
          {
            "date": "2026-09-21",
            "value": 5.29,
            "status": "alarm"
          },
          {
            "date": "2026-09-22",
            "value": 5.29,
            "status": "alarm"
          },
          {
            "date": "2026-09-23",
            "value": 5.4,
            "status": "alarm"
          },
          {
            "date": "2026-09-24",
            "value": 5.47,
            "status": "alarm"
          }
        ]
      },
      {
        "key": "us_2s10s_spread",
        "label": "US 2Y/10Y spread",
        "unit": "pp",
        "color": "#f59e0b",
        "latest_status": "ok",
        "bands": [
          {
            "label": "Alarm < -50 bp",
            "status": "alarm",
            "from": null,
            "to": -0.5
          },
          {
            "label": "Alarm \u2265 100 bp",
            "status": "alarm",
            "from": 1.0,
            "to": null
          },
          {
            "label": "Watch < 0 bp",
            "status": "watch",
            "from": null,
            "to": 0.0
          },
          {
            "label": "Watch 50 bp to 100 bp",
            "status": "watch",
            "from": 0.5,
            "to": 1.0
          },
          {
            "label": "OK 0 bp to 50 bp",
            "status": "ok",
            "from": 0.0,
            "to": 0.5
          }
        ],
        "points": [
          {
            "date": "2025-08-04",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-08-05",
            "value": 0.49999999999999956,
            "status": "ok"
          },
          {
            "date": "2025-08-06",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-08-07",
            "value": 0.5100000000000002,
            "status": "ok"
          },
          {
            "date": "2025-08-08",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2025-08-11",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2025-08-12",
            "value": 0.5699999999999998,
            "status": "watch"
          },
          {
            "date": "2025-08-13",
            "value": 0.5700000000000003,
            "status": "ok"
          },
          {
            "date": "2025-08-14",
            "value": 0.5499999999999998,
            "status": "watch"
          },
          {
            "date": "2025-08-15",
            "value": 0.5800000000000001,
            "status": "watch"
          },
          {
            "date": "2025-08-18",
            "value": 0.5699999999999998,
            "status": "watch"
          },
          {
            "date": "2025-08-19",
            "value": 0.5499999999999998,
            "status": "watch"
          },
          {
            "date": "2025-08-20",
            "value": 0.5499999999999998,
            "status": "watch"
          },
          {
            "date": "2025-08-21",
            "value": 0.54,
            "status": "watch"
          },
          {
            "date": "2025-08-22",
            "value": 0.5799999999999996,
            "status": "watch"
          },
          {
            "date": "2025-08-25",
            "value": 0.5500000000000003,
            "status": "watch"
          },
          {
            "date": "2025-08-26",
            "value": 0.6499999999999999,
            "status": "watch"
          },
          {
            "date": "2025-08-27",
            "value": 0.6500000000000004,
            "status": "ok"
          },
          {
            "date": "2025-08-28",
            "value": 0.5999999999999996,
            "status": "ok"
          },
          {
            "date": "2025-08-29",
            "value": 0.6400000000000006,
            "status": "ok"
          },
          {
            "date": "2025-09-02",
            "value": 0.6200000000000001,
            "status": "watch"
          },
          {
            "date": "2025-09-03",
            "value": 0.6099999999999999,
            "status": "ok"
          },
          {
            "date": "2025-09-04",
            "value": 0.5800000000000001,
            "status": "ok"
          },
          {
            "date": "2025-09-05",
            "value": 0.5899999999999999,
            "status": "ok"
          },
          {
            "date": "2025-09-08",
            "value": 0.5599999999999996,
            "status": "ok"
          },
          {
            "date": "2025-09-09",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2025-09-10",
            "value": 0.5,
            "status": "ok"
          },
          {
            "date": "2025-09-11",
            "value": 0.48999999999999977,
            "status": "ok"
          },
          {
            "date": "2025-09-12",
            "value": 0.49999999999999956,
            "status": "ok"
          },
          {
            "date": "2025-09-15",
            "value": 0.5099999999999998,
            "status": "ok"
          },
          {
            "date": "2025-09-16",
            "value": 0.5300000000000002,
            "status": "ok"
          },
          {
            "date": "2025-09-17",
            "value": 0.5399999999999996,
            "status": "ok"
          },
          {
            "date": "2025-09-18",
            "value": 0.5400000000000005,
            "status": "ok"
          },
          {
            "date": "2025-09-19",
            "value": 0.5699999999999998,
            "status": "ok"
          },
          {
            "date": "2025-09-22",
            "value": 0.5400000000000005,
            "status": "ok"
          },
          {
            "date": "2025-09-23",
            "value": 0.5900000000000003,
            "status": "ok"
          },
          {
            "date": "2025-09-24",
            "value": 0.5900000000000003,
            "status": "ok"
          },
          {
            "date": "2025-09-25",
            "value": 0.5399999999999996,
            "status": "ok"
          },
          {
            "date": "2025-09-26",
            "value": 0.5700000000000003,
            "status": "ok"
          },
          {
            "date": "2025-09-29",
            "value": 0.5200000000000005,
            "status": "ok"
          },
          {
            "date": "2025-09-30",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 0.5700000000000003,
            "status": "ok"
          },
          {
            "date": "2025-10-02",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-03",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-06",
            "value": 0.5799999999999996,
            "status": "ok"
          },
          {
            "date": "2025-10-07",
            "value": 0.5699999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-08",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-09",
            "value": 0.5399999999999996,
            "status": "ok"
          },
          {
            "date": "2025-10-10",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-14",
            "value": 0.5500000000000003,
            "status": "ok"
          },
          {
            "date": "2025-10-15",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-16",
            "value": 0.5800000000000001,
            "status": "ok"
          },
          {
            "date": "2025-10-17",
            "value": 0.5599999999999996,
            "status": "ok"
          },
          {
            "date": "2025-10-20",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2025-10-21",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-22",
            "value": 0.52,
            "status": "ok"
          },
          {
            "date": "2025-10-23",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-24",
            "value": 0.5399999999999996,
            "status": "ok"
          },
          {
            "date": "2025-10-27",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-10-28",
            "value": 0.52,
            "status": "ok"
          },
          {
            "date": "2025-10-29",
            "value": 0.4900000000000002,
            "status": "ok"
          },
          {
            "date": "2025-10-30",
            "value": 0.5000000000000004,
            "status": "ok"
          },
          {
            "date": "2025-10-31",
            "value": 0.5100000000000002,
            "status": "ok"
          },
          {
            "date": "2025-11-03",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-11-04",
            "value": 0.5199999999999996,
            "status": "ok"
          },
          {
            "date": "2025-11-05",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2025-11-06",
            "value": 0.5400000000000005,
            "status": "ok"
          },
          {
            "date": "2025-11-07",
            "value": 0.5600000000000005,
            "status": "ok"
          },
          {
            "date": "2025-11-10",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-11-12",
            "value": 0.52,
            "status": "ok"
          },
          {
            "date": "2025-11-13",
            "value": 0.5300000000000002,
            "status": "ok"
          },
          {
            "date": "2025-11-14",
            "value": 0.5199999999999996,
            "status": "ok"
          },
          {
            "date": "2025-11-17",
            "value": 0.5299999999999998,
            "status": "ok"
          },
          {
            "date": "2025-11-18",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2025-11-19",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-11-20",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-11-21",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-11-24",
            "value": 0.5800000000000001,
            "status": "ok"
          },
          {
            "date": "2025-11-25",
            "value": 0.5799999999999996,
            "status": "ok"
          },
          {
            "date": "2025-11-26",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-11-28",
            "value": 0.5499999999999994,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2025-12-02",
            "value": 0.5800000000000001,
            "status": "ok"
          },
          {
            "date": "2025-12-03",
            "value": 0.5699999999999994,
            "status": "ok"
          },
          {
            "date": "2025-12-04",
            "value": 0.5900000000000003,
            "status": "ok"
          },
          {
            "date": "2025-12-05",
            "value": 0.5799999999999996,
            "status": "ok"
          },
          {
            "date": "2025-12-08",
            "value": 0.6000000000000001,
            "status": "ok"
          },
          {
            "date": "2025-12-09",
            "value": 0.5699999999999998,
            "status": "ok"
          },
          {
            "date": "2025-12-10",
            "value": 0.5899999999999999,
            "status": "ok"
          },
          {
            "date": "2025-12-11",
            "value": 0.6199999999999997,
            "status": "ok"
          },
          {
            "date": "2025-12-12",
            "value": 0.6700000000000004,
            "status": "ok"
          },
          {
            "date": "2025-12-15",
            "value": 0.6699999999999999,
            "status": "ok"
          },
          {
            "date": "2025-12-16",
            "value": 0.6700000000000004,
            "status": "ok"
          },
          {
            "date": "2025-12-17",
            "value": 0.6699999999999999,
            "status": "ok"
          },
          {
            "date": "2025-12-18",
            "value": 0.6600000000000001,
            "status": "ok"
          },
          {
            "date": "2025-12-19",
            "value": 0.6800000000000002,
            "status": "ok"
          },
          {
            "date": "2025-12-22",
            "value": 0.73,
            "status": "ok"
          },
          {
            "date": "2025-12-23",
            "value": 0.6999999999999997,
            "status": "ok"
          },
          {
            "date": "2025-12-24",
            "value": 0.6800000000000002,
            "status": "ok"
          },
          {
            "date": "2025-12-26",
            "value": 0.6799999999999997,
            "status": "ok"
          },
          {
            "date": "2025-12-29",
            "value": 0.6699999999999999,
            "status": "ok"
          },
          {
            "date": "2025-12-30",
            "value": 0.6899999999999995,
            "status": "ok"
          },
          {
            "date": "2025-12-31",
            "value": 0.7099999999999995,
            "status": "ok"
          },
          {
            "date": "2026-01-02",
            "value": 0.7200000000000002,
            "status": "ok"
          },
          {
            "date": "2026-01-05",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-01-06",
            "value": 0.7099999999999995,
            "status": "ok"
          },
          {
            "date": "2026-01-07",
            "value": 0.6800000000000002,
            "status": "ok"
          },
          {
            "date": "2026-01-08",
            "value": 0.7000000000000002,
            "status": "ok"
          },
          {
            "date": "2026-01-09",
            "value": 0.6399999999999997,
            "status": "ok"
          },
          {
            "date": "2026-01-12",
            "value": 0.6500000000000004,
            "status": "ok"
          },
          {
            "date": "2026-01-13",
            "value": 0.6499999999999999,
            "status": "ok"
          },
          {
            "date": "2026-01-14",
            "value": 0.6400000000000006,
            "status": "ok"
          },
          {
            "date": "2026-01-15",
            "value": 0.6099999999999999,
            "status": "ok"
          },
          {
            "date": "2026-01-16",
            "value": 0.6500000000000004,
            "status": "ok"
          },
          {
            "date": "2026-01-20",
            "value": 0.6999999999999997,
            "status": "watch"
          },
          {
            "date": "2026-01-21",
            "value": 0.6599999999999997,
            "status": "watch"
          },
          {
            "date": "2026-01-22",
            "value": 0.6499999999999999,
            "status": "watch"
          },
          {
            "date": "2026-01-23",
            "value": 0.6400000000000001,
            "status": "ok"
          },
          {
            "date": "2026-01-26",
            "value": 0.6599999999999997,
            "status": "ok"
          },
          {
            "date": "2026-01-27",
            "value": 0.7100000000000004,
            "status": "ok"
          },
          {
            "date": "2026-01-28",
            "value": 0.6999999999999997,
            "status": "watch"
          },
          {
            "date": "2026-01-29",
            "value": 0.7100000000000004,
            "status": "ok"
          },
          {
            "date": "2026-01-30",
            "value": 0.7399999999999998,
            "status": "watch"
          },
          {
            "date": "2026-02-02",
            "value": 0.7200000000000002,
            "status": "watch"
          },
          {
            "date": "2026-02-03",
            "value": 0.7100000000000004,
            "status": "watch"
          },
          {
            "date": "2026-02-04",
            "value": 0.7200000000000002,
            "status": "watch"
          },
          {
            "date": "2026-02-05",
            "value": 0.7399999999999998,
            "status": "ok"
          },
          {
            "date": "2026-02-06",
            "value": 0.7199999999999998,
            "status": "ok"
          },
          {
            "date": "2026-02-09",
            "value": 0.7399999999999998,
            "status": "ok"
          },
          {
            "date": "2026-02-10",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-02-11",
            "value": 0.6599999999999997,
            "status": "ok"
          },
          {
            "date": "2026-02-12",
            "value": 0.6199999999999997,
            "status": "ok"
          },
          {
            "date": "2026-02-13",
            "value": 0.6400000000000001,
            "status": "ok"
          },
          {
            "date": "2026-02-17",
            "value": 0.6199999999999997,
            "status": "ok"
          },
          {
            "date": "2026-02-18",
            "value": 0.6199999999999997,
            "status": "ok"
          },
          {
            "date": "2026-02-19",
            "value": 0.6099999999999999,
            "status": "ok"
          },
          {
            "date": "2026-02-20",
            "value": 0.6000000000000001,
            "status": "ok"
          },
          {
            "date": "2026-02-23",
            "value": 0.6000000000000001,
            "status": "ok"
          },
          {
            "date": "2026-02-24",
            "value": 0.6099999999999999,
            "status": "ok"
          },
          {
            "date": "2026-02-25",
            "value": 0.5999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-02-26",
            "value": 0.5999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-02-27",
            "value": 0.5900000000000003,
            "status": "ok"
          },
          {
            "date": "2026-03-02",
            "value": 0.5799999999999996,
            "status": "ok"
          },
          {
            "date": "2026-03-03",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2026-03-04",
            "value": 0.5499999999999998,
            "status": "ok"
          },
          {
            "date": "2026-03-05",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-03-06",
            "value": 0.5900000000000003,
            "status": "ok"
          },
          {
            "date": "2026-03-09",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-03-10",
            "value": 0.5800000000000005,
            "status": "ok"
          },
          {
            "date": "2026-03-11",
            "value": 0.5699999999999998,
            "status": "ok"
          },
          {
            "date": "2026-03-12",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-03-13",
            "value": 0.5500000000000003,
            "status": "watch"
          },
          {
            "date": "2026-03-16",
            "value": 0.5500000000000003,
            "status": "ok"
          },
          {
            "date": "2026-03-17",
            "value": 0.52,
            "status": "ok"
          },
          {
            "date": "2026-03-18",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-03-19",
            "value": 0.45999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-03-20",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-03-23",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-03-24",
            "value": 0.48999999999999977,
            "status": "ok"
          },
          {
            "date": "2026-03-25",
            "value": 0.4900000000000002,
            "status": "ok"
          },
          {
            "date": "2026-03-26",
            "value": 0.45999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-03-27",
            "value": 0.5600000000000005,
            "status": "watch"
          },
          {
            "date": "2026-03-30",
            "value": 0.5299999999999998,
            "status": "watch"
          },
          {
            "date": "2026-03-31",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-04-01",
            "value": 0.52,
            "status": "watch"
          },
          {
            "date": "2026-04-02",
            "value": 0.5199999999999996,
            "status": "watch"
          },
          {
            "date": "2026-04-03",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-04-06",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-04-07",
            "value": 0.52,
            "status": "watch"
          },
          {
            "date": "2026-04-08",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-04-09",
            "value": 0.5100000000000002,
            "status": "watch"
          },
          {
            "date": "2026-04-10",
            "value": 0.49999999999999956,
            "status": "ok"
          },
          {
            "date": "2026-04-13",
            "value": 0.52,
            "status": "watch"
          },
          {
            "date": "2026-04-14",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-04-15",
            "value": 0.5300000000000002,
            "status": "watch"
          },
          {
            "date": "2026-04-16",
            "value": 0.5400000000000005,
            "status": "watch"
          },
          {
            "date": "2026-04-17",
            "value": 0.5499999999999998,
            "status": "watch"
          },
          {
            "date": "2026-04-20",
            "value": 0.5399999999999996,
            "status": "watch"
          },
          {
            "date": "2026-04-21",
            "value": 0.52,
            "status": "watch"
          },
          {
            "date": "2026-04-22",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-04-23",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-04-24",
            "value": 0.5299999999999998,
            "status": "watch"
          },
          {
            "date": "2026-04-27",
            "value": 0.5699999999999998,
            "status": "watch"
          },
          {
            "date": "2026-04-28",
            "value": 0.5200000000000005,
            "status": "watch"
          },
          {
            "date": "2026-04-29",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-04-30",
            "value": 0.5200000000000005,
            "status": "watch"
          },
          {
            "date": "2026-05-01",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-05-04",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-05-05",
            "value": 0.49999999999999956,
            "status": "ok"
          },
          {
            "date": "2026-05-06",
            "value": 0.4900000000000002,
            "status": "ok"
          },
          {
            "date": "2026-05-07",
            "value": 0.4900000000000002,
            "status": "ok"
          },
          {
            "date": "2026-05-08",
            "value": 0.48,
            "status": "ok"
          },
          {
            "date": "2026-05-11",
            "value": 0.46999999999999975,
            "status": "ok"
          },
          {
            "date": "2026-05-12",
            "value": 0.45999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-05-13",
            "value": 0.48,
            "status": "ok"
          },
          {
            "date": "2026-05-14",
            "value": 0.46999999999999975,
            "status": "ok"
          },
          {
            "date": "2026-05-15",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-05-18",
            "value": 0.54,
            "status": "watch"
          },
          {
            "date": "2026-05-19",
            "value": 0.54,
            "status": "watch"
          },
          {
            "date": "2026-05-20",
            "value": 0.5300000000000002,
            "status": "watch"
          },
          {
            "date": "2026-05-21",
            "value": 0.4900000000000002,
            "status": "ok"
          },
          {
            "date": "2026-05-22",
            "value": 0.4299999999999997,
            "status": "ok"
          },
          {
            "date": "2026-05-26",
            "value": 0.4900000000000002,
            "status": "ok"
          },
          {
            "date": "2026-05-27",
            "value": 0.4800000000000004,
            "status": "ok"
          },
          {
            "date": "2026-05-28",
            "value": 0.45999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-05-29",
            "value": 0.4700000000000002,
            "status": "ok"
          },
          {
            "date": "2026-06-01",
            "value": 0.41999999999999993,
            "status": "ok"
          },
          {
            "date": "2026-06-02",
            "value": 0.41000000000000014,
            "status": "ok"
          },
          {
            "date": "2026-06-03",
            "value": 0.41000000000000014,
            "status": "ok"
          },
          {
            "date": "2026-06-04",
            "value": 0.41999999999999993,
            "status": "ok"
          },
          {
            "date": "2026-06-05",
            "value": 0.3799999999999999,
            "status": "ok"
          },
          {
            "date": "2026-06-08",
            "value": 0.40999999999999925,
            "status": "ok"
          },
          {
            "date": "2026-06-09",
            "value": 0.40000000000000036,
            "status": "ok"
          },
          {
            "date": "2026-06-10",
            "value": 0.41999999999999993,
            "status": "ok"
          },
          {
            "date": "2026-06-11",
            "value": 0.40000000000000036,
            "status": "ok"
          },
          {
            "date": "2026-06-12",
            "value": 0.39000000000000057,
            "status": "ok"
          },
          {
            "date": "2026-06-15",
            "value": 0.39999999999999947,
            "status": "ok"
          },
          {
            "date": "2026-06-16",
            "value": 0.3799999999999999,
            "status": "ok"
          },
          {
            "date": "2026-06-17",
            "value": 0.29000000000000004,
            "status": "ok"
          },
          {
            "date": "2026-06-18",
            "value": 0.2699999999999996,
            "status": "ok"
          },
          {
            "date": "2026-06-22",
            "value": 0.2699999999999996,
            "status": "ok"
          },
          {
            "date": "2026-06-23",
            "value": 0.33999999999999986,
            "status": "ok"
          },
          {
            "date": "2026-06-24",
            "value": 0.2999999999999998,
            "status": "ok"
          },
          {
            "date": "2026-06-25",
            "value": 0.3100000000000005,
            "status": "ok"
          },
          {
            "date": "2026-06-26",
            "value": 0.3099999999999996,
            "status": "ok"
          },
          {
            "date": "2026-06-29",
            "value": 0.28000000000000025,
            "status": "ok"
          },
          {
            "date": "2026-06-30",
            "value": 0.3000000000000007,
            "status": "ok"
          },
          {
            "date": "2026-07-01",
            "value": 0.3100000000000005,
            "status": "ok"
          },
          {
            "date": "2026-07-02",
            "value": 0.35000000000000053,
            "status": "ok"
          },
          {
            "date": "2026-07-06",
            "value": 0.35000000000000053,
            "status": "ok"
          },
          {
            "date": "2026-07-07",
            "value": 0.35999999999999943,
            "status": "ok"
          },
          {
            "date": "2026-07-08",
            "value": 0.34999999999999964,
            "status": "ok"
          },
          {
            "date": "2026-07-09",
            "value": 0.3799999999999999,
            "status": "ok"
          },
          {
            "date": "2026-07-10",
            "value": 0.34999999999999964,
            "status": "ok"
          },
          {
            "date": "2026-07-13",
            "value": 0.3600000000000003,
            "status": "ok"
          },
          {
            "date": "2026-07-14",
            "value": 0.40000000000000036,
            "status": "ok"
          },
          {
            "date": "2026-07-15",
            "value": 0.41999999999999993,
            "status": "ok"
          },
          {
            "date": "2026-07-16",
            "value": 0.41000000000000014,
            "status": "ok"
          },
          {
            "date": "2026-07-17",
            "value": 0.3700000000000001,
            "status": "ok"
          },
          {
            "date": "2026-07-20",
            "value": 0.3899999999999997,
            "status": "ok"
          },
          {
            "date": "2026-07-21",
            "value": 0.3700000000000001,
            "status": "ok"
          },
          {
            "date": "2026-07-22",
            "value": 0.3600000000000003,
            "status": "ok"
          },
          {
            "date": "2026-07-23",
            "value": 0.33999999999999986,
            "status": "ok"
          },
          {
            "date": "2026-07-24",
            "value": 0.3600000000000003,
            "status": "ok"
          },
          {
            "date": "2026-07-27",
            "value": 0.34000000000000075,
            "status": "ok"
          },
          {
            "date": "2026-07-28",
            "value": 0.35000000000000053,
            "status": "ok"
          },
          {
            "date": "2026-07-29",
            "value": 0.4500000000000002,
            "status": "ok"
          },
          {
            "date": "2026-07-30",
            "value": 0.4499999999999993,
            "status": "ok"
          },
          {
            "date": "2026-07-31",
            "value": 0.46999999999999975,
            "status": "ok"
          },
          {
            "date": "2026-08-03",
            "value": 0.4500000000000002,
            "status": "ok"
          },
          {
            "date": "2026-08-04",
            "value": 0.4299999999999997,
            "status": "ok"
          },
          {
            "date": "2026-08-05",
            "value": 0.4500000000000002,
            "status": "ok"
          },
          {
            "date": "2026-08-06",
            "value": 0.4400000000000004,
            "status": "ok"
          },
          {
            "date": "2026-08-07",
            "value": 0.45999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-08-10",
            "value": 0.46999999999999975,
            "status": "ok"
          },
          {
            "date": "2026-08-11",
            "value": 0.4800000000000004,
            "status": "ok"
          },
          {
            "date": "2026-08-12",
            "value": 0.47999999999999954,
            "status": "ok"
          },
          {
            "date": "2026-08-13",
            "value": 0.47999999999999954,
            "status": "ok"
          },
          {
            "date": "2026-08-14",
            "value": 0.5099999999999998,
            "status": "watch"
          },
          {
            "date": "2026-08-17",
            "value": 0.5299999999999994,
            "status": "watch"
          },
          {
            "date": "2026-08-18",
            "value": 0.5199999999999996,
            "status": "watch"
          },
          {
            "date": "2026-08-19",
            "value": 0.45999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-08-20",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-08-21",
            "value": 0.5,
            "status": "watch"
          },
          {
            "date": "2026-08-24",
            "value": 0.45999999999999996,
            "status": "ok"
          },
          {
            "date": "2026-08-25",
            "value": 0.46999999999999975,
            "status": "ok"
          },
          {
            "date": "2026-08-26",
            "value": 0.46999999999999975,
            "status": "ok"
          },
          {
            "date": "2026-08-27",
            "value": 0.46999999999999975,
            "status": "ok"
          },
          {
            "date": "2026-08-28",
            "value": 0.39000000000000057,
            "status": "ok"
          },
          {
            "date": "2026-08-31",
            "value": 0.41000000000000014,
            "status": "ok"
          },
          {
            "date": "2026-09-01",
            "value": 0.40000000000000036,
            "status": "ok"
          },
          {
            "date": "2026-09-02",
            "value": 0.40000000000000036,
            "status": "ok"
          },
          {
            "date": "2026-09-03",
            "value": 0.4299999999999997,
            "status": "ok"
          },
          {
            "date": "2026-09-04",
            "value": 0.41000000000000014,
            "status": "ok"
          },
          {
            "date": "2026-09-08",
            "value": 0.41000000000000014,
            "status": "ok"
          },
          {
            "date": "2026-09-09",
            "value": 0.40000000000000036,
            "status": "ok"
          },
          {
            "date": "2026-09-10",
            "value": 0.39000000000000057,
            "status": "ok"
          },
          {
            "date": "2026-09-11",
            "value": 0.33000000000000007,
            "status": "ok"
          },
          {
            "date": "2026-09-14",
            "value": 0.3199999999999994,
            "status": "ok"
          },
          {
            "date": "2026-09-15",
            "value": 0.33000000000000007,
            "status": "ok"
          },
          {
            "date": "2026-09-16",
            "value": 0.2699999999999996,
            "status": "ok"
          },
          {
            "date": "2026-09-17",
            "value": 0.27000000000000046,
            "status": "ok"
          },
          {
            "date": "2026-09-18",
            "value": 0.25,
            "status": "ok"
          },
          {
            "date": "2026-09-21",
            "value": 0.20000000000000018,
            "status": "ok"
          },
          {
            "date": "2026-09-22",
            "value": 0.25,
            "status": "ok"
          },
          {
            "date": "2026-09-23",
            "value": 0.2600000000000007,
            "status": "ok"
          },
          {
            "date": "2026-09-24",
            "value": 0.3099999999999996,
            "status": "ok"
          }
        ]
      },
      {
        "key": "us_10y_3m_spread",
        "label": "US 10Y/3M spread",
        "unit": "pp",
        "color": "#f59e0b",
        "latest_status": "ok",
        "bands": [
          {
            "label": "Alarm < -25 bp",
            "status": "alarm",
            "from": null,
            "to": -0.25
          },
          {
            "label": "Alarm \u2265 125 bp",
            "status": "alarm",
            "from": 1.25,
            "to": null
          },
          {
            "label": "Watch < 0 bp",
            "status": "watch",
            "from": null,
            "to": 0.0
          },
          {
            "label": "Watch 100 bp to 125 bp",
            "status": "watch",
            "from": 1.0,
            "to": 1.25
          },
          {
            "label": "OK 0 bp to 100 bp",
            "status": "ok",
            "from": 0.0,
            "to": 1.0
          }
        ],
        "points": [
          {
            "date": "2025-08-04",
            "value": -0.13,
            "status": "watch"
          },
          {
            "date": "2025-08-05",
            "value": -0.12,
            "status": "watch"
          },
          {
            "date": "2025-08-06",
            "value": -0.1,
            "status": "watch"
          },
          {
            "date": "2025-08-07",
            "value": -0.09,
            "status": "watch"
          },
          {
            "date": "2025-08-08",
            "value": -0.05,
            "status": "watch"
          },
          {
            "date": "2025-08-11",
            "value": -0.07,
            "status": "watch"
          },
          {
            "date": "2025-08-12",
            "value": -0.04,
            "status": "watch"
          },
          {
            "date": "2025-08-13",
            "value": -0.05,
            "status": "watch"
          },
          {
            "date": "2025-08-14",
            "value": -0.01,
            "status": "watch"
          },
          {
            "date": "2025-08-15",
            "value": 0.03,
            "status": "ok"
          },
          {
            "date": "2025-08-18",
            "value": 0.01,
            "status": "ok"
          },
          {
            "date": "2025-08-19",
            "value": 0.0,
            "status": "watch"
          },
          {
            "date": "2025-08-20",
            "value": -0.01,
            "status": "watch"
          },
          {
            "date": "2025-08-21",
            "value": 0.01,
            "status": "ok"
          },
          {
            "date": "2025-08-22",
            "value": -0.01,
            "status": "watch"
          },
          {
            "date": "2025-08-25",
            "value": -0.01,
            "status": "watch"
          },
          {
            "date": "2025-08-26",
            "value": -0.02,
            "status": "watch"
          },
          {
            "date": "2025-08-27",
            "value": -0.02,
            "status": "watch"
          },
          {
            "date": "2025-08-28",
            "value": -0.04,
            "status": "watch"
          },
          {
            "date": "2025-08-29",
            "value": 0.0,
            "status": "watch"
          },
          {
            "date": "2025-09-02",
            "value": 0.08,
            "status": "ok"
          },
          {
            "date": "2025-09-03",
            "value": 0.04,
            "status": "ok"
          },
          {
            "date": "2025-09-04",
            "value": 0.01,
            "status": "ok"
          },
          {
            "date": "2025-09-05",
            "value": 0.03,
            "status": "ok"
          },
          {
            "date": "2025-09-08",
            "value": -0.05,
            "status": "watch"
          },
          {
            "date": "2025-09-09",
            "value": -0.02,
            "status": "watch"
          },
          {
            "date": "2025-09-10",
            "value": -0.05,
            "status": "watch"
          },
          {
            "date": "2025-09-11",
            "value": -0.07,
            "status": "watch"
          },
          {
            "date": "2025-09-12",
            "value": -0.02,
            "status": "watch"
          },
          {
            "date": "2025-09-15",
            "value": -0.01,
            "status": "watch"
          },
          {
            "date": "2025-09-16",
            "value": 0.0,
            "status": "watch"
          },
          {
            "date": "2025-09-17",
            "value": 0.04,
            "status": "ok"
          },
          {
            "date": "2025-09-18",
            "value": 0.08,
            "status": "ok"
          },
          {
            "date": "2025-09-19",
            "value": 0.11,
            "status": "ok"
          },
          {
            "date": "2025-09-22",
            "value": 0.15,
            "status": "ok"
          },
          {
            "date": "2025-09-23",
            "value": 0.12,
            "status": "ok"
          },
          {
            "date": "2025-09-24",
            "value": 0.14,
            "status": "ok"
          },
          {
            "date": "2025-09-25",
            "value": 0.14,
            "status": "ok"
          },
          {
            "date": "2025-09-26",
            "value": 0.18,
            "status": "ok"
          },
          {
            "date": "2025-09-29",
            "value": 0.11,
            "status": "ok"
          },
          {
            "date": "2025-09-30",
            "value": 0.14,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 0.11,
            "status": "ok"
          },
          {
            "date": "2025-10-02",
            "value": 0.08,
            "status": "ok"
          },
          {
            "date": "2025-10-03",
            "value": 0.1,
            "status": "ok"
          },
          {
            "date": "2025-10-06",
            "value": 0.16,
            "status": "ok"
          },
          {
            "date": "2025-10-07",
            "value": 0.13,
            "status": "ok"
          },
          {
            "date": "2025-10-08",
            "value": 0.12,
            "status": "ok"
          },
          {
            "date": "2025-10-09",
            "value": 0.11,
            "status": "ok"
          },
          {
            "date": "2025-10-10",
            "value": 0.03,
            "status": "ok"
          },
          {
            "date": "2025-10-14",
            "value": 0.01,
            "status": "ok"
          },
          {
            "date": "2025-10-15",
            "value": 0.02,
            "status": "ok"
          },
          {
            "date": "2025-10-16",
            "value": -0.03,
            "status": "watch"
          },
          {
            "date": "2025-10-17",
            "value": 0.02,
            "status": "ok"
          },
          {
            "date": "2025-10-20",
            "value": 0.03,
            "status": "ok"
          },
          {
            "date": "2025-10-21",
            "value": 0.02,
            "status": "ok"
          },
          {
            "date": "2025-10-22",
            "value": 0.01,
            "status": "ok"
          },
          {
            "date": "2025-10-23",
            "value": 0.06,
            "status": "ok"
          },
          {
            "date": "2025-10-24",
            "value": 0.09,
            "status": "ok"
          },
          {
            "date": "2025-10-27",
            "value": 0.12,
            "status": "ok"
          },
          {
            "date": "2025-10-28",
            "value": 0.1,
            "status": "ok"
          },
          {
            "date": "2025-10-29",
            "value": 0.15,
            "status": "ok"
          },
          {
            "date": "2025-10-30",
            "value": 0.19,
            "status": "ok"
          },
          {
            "date": "2025-10-31",
            "value": 0.22,
            "status": "ok"
          },
          {
            "date": "2025-11-03",
            "value": 0.15,
            "status": "ok"
          },
          {
            "date": "2025-11-04",
            "value": 0.14,
            "status": "ok"
          },
          {
            "date": "2025-11-05",
            "value": 0.21,
            "status": "ok"
          },
          {
            "date": "2025-11-06",
            "value": 0.18,
            "status": "ok"
          },
          {
            "date": "2025-11-07",
            "value": 0.19,
            "status": "ok"
          },
          {
            "date": "2025-11-10",
            "value": 0.18,
            "status": "ok"
          },
          {
            "date": "2025-11-12",
            "value": 0.13,
            "status": "ok"
          },
          {
            "date": "2025-11-13",
            "value": 0.15,
            "status": "ok"
          },
          {
            "date": "2025-11-14",
            "value": 0.19,
            "status": "ok"
          },
          {
            "date": "2025-11-17",
            "value": 0.16,
            "status": "ok"
          },
          {
            "date": "2025-11-18",
            "value": 0.18,
            "status": "ok"
          },
          {
            "date": "2025-11-19",
            "value": 0.18,
            "status": "ok"
          },
          {
            "date": "2025-11-20",
            "value": 0.16,
            "status": "ok"
          },
          {
            "date": "2025-11-21",
            "value": 0.16,
            "status": "ok"
          },
          {
            "date": "2025-11-24",
            "value": 0.13,
            "status": "ok"
          },
          {
            "date": "2025-11-25",
            "value": 0.11,
            "status": "ok"
          },
          {
            "date": "2025-11-26",
            "value": 0.08,
            "status": "ok"
          },
          {
            "date": "2025-11-28",
            "value": 0.14,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 0.28,
            "status": "ok"
          },
          {
            "date": "2025-12-02",
            "value": 0.32,
            "status": "ok"
          },
          {
            "date": "2025-12-03",
            "value": 0.34,
            "status": "ok"
          },
          {
            "date": "2025-12-04",
            "value": 0.4,
            "status": "ok"
          },
          {
            "date": "2025-12-05",
            "value": 0.43,
            "status": "ok"
          },
          {
            "date": "2025-12-08",
            "value": 0.44,
            "status": "ok"
          },
          {
            "date": "2025-12-09",
            "value": 0.45,
            "status": "ok"
          },
          {
            "date": "2025-12-10",
            "value": 0.44,
            "status": "ok"
          },
          {
            "date": "2025-12-11",
            "value": 0.48,
            "status": "ok"
          },
          {
            "date": "2025-12-12",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2025-12-15",
            "value": 0.53,
            "status": "ok"
          },
          {
            "date": "2025-12-16",
            "value": 0.51,
            "status": "ok"
          },
          {
            "date": "2025-12-17",
            "value": 0.52,
            "status": "ok"
          },
          {
            "date": "2025-12-18",
            "value": 0.5,
            "status": "ok"
          },
          {
            "date": "2025-12-19",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2025-12-22",
            "value": 0.53,
            "status": "ok"
          },
          {
            "date": "2025-12-23",
            "value": 0.53,
            "status": "ok"
          },
          {
            "date": "2025-12-24",
            "value": 0.46,
            "status": "ok"
          },
          {
            "date": "2025-12-26",
            "value": 0.5,
            "status": "ok"
          },
          {
            "date": "2025-12-29",
            "value": 0.44,
            "status": "ok"
          },
          {
            "date": "2025-12-30",
            "value": 0.49,
            "status": "ok"
          },
          {
            "date": "2025-12-31",
            "value": 0.51,
            "status": "ok"
          },
          {
            "date": "2026-01-02",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2026-01-05",
            "value": 0.53,
            "status": "ok"
          },
          {
            "date": "2026-01-06",
            "value": 0.55,
            "status": "ok"
          },
          {
            "date": "2026-01-07",
            "value": 0.53,
            "status": "ok"
          },
          {
            "date": "2026-01-08",
            "value": 0.57,
            "status": "ok"
          },
          {
            "date": "2026-01-09",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-01-12",
            "value": 0.52,
            "status": "ok"
          },
          {
            "date": "2026-01-13",
            "value": 0.51,
            "status": "ok"
          },
          {
            "date": "2026-01-14",
            "value": 0.48,
            "status": "ok"
          },
          {
            "date": "2026-01-15",
            "value": 0.49,
            "status": "ok"
          },
          {
            "date": "2026-01-16",
            "value": 0.57,
            "status": "ok"
          },
          {
            "date": "2026-01-20",
            "value": 0.6,
            "status": "ok"
          },
          {
            "date": "2026-01-21",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-01-22",
            "value": 0.55,
            "status": "ok"
          },
          {
            "date": "2026-01-23",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2026-01-26",
            "value": 0.55,
            "status": "ok"
          },
          {
            "date": "2026-01-27",
            "value": 0.57,
            "status": "ok"
          },
          {
            "date": "2026-01-28",
            "value": 0.58,
            "status": "ok"
          },
          {
            "date": "2026-01-29",
            "value": 0.57,
            "status": "ok"
          },
          {
            "date": "2026-01-30",
            "value": 0.59,
            "status": "ok"
          },
          {
            "date": "2026-02-02",
            "value": 0.6,
            "status": "ok"
          },
          {
            "date": "2026-02-03",
            "value": 0.59,
            "status": "ok"
          },
          {
            "date": "2026-02-04",
            "value": 0.6,
            "status": "ok"
          },
          {
            "date": "2026-02-05",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2026-02-06",
            "value": 0.54,
            "status": "ok"
          },
          {
            "date": "2026-02-09",
            "value": 0.53,
            "status": "ok"
          },
          {
            "date": "2026-02-10",
            "value": 0.47,
            "status": "ok"
          },
          {
            "date": "2026-02-11",
            "value": 0.48,
            "status": "ok"
          },
          {
            "date": "2026-02-12",
            "value": 0.39,
            "status": "ok"
          },
          {
            "date": "2026-02-13",
            "value": 0.36,
            "status": "ok"
          },
          {
            "date": "2026-02-17",
            "value": 0.36,
            "status": "ok"
          },
          {
            "date": "2026-02-18",
            "value": 0.39,
            "status": "ok"
          },
          {
            "date": "2026-02-19",
            "value": 0.39,
            "status": "ok"
          },
          {
            "date": "2026-02-20",
            "value": 0.39,
            "status": "ok"
          },
          {
            "date": "2026-02-23",
            "value": 0.34,
            "status": "ok"
          },
          {
            "date": "2026-02-24",
            "value": 0.35,
            "status": "ok"
          },
          {
            "date": "2026-02-25",
            "value": 0.36,
            "status": "ok"
          },
          {
            "date": "2026-02-26",
            "value": 0.34,
            "status": "ok"
          },
          {
            "date": "2026-02-27",
            "value": 0.3,
            "status": "ok"
          },
          {
            "date": "2026-03-02",
            "value": 0.33,
            "status": "ok"
          },
          {
            "date": "2026-03-03",
            "value": 0.35,
            "status": "ok"
          },
          {
            "date": "2026-03-04",
            "value": 0.38,
            "status": "ok"
          },
          {
            "date": "2026-03-05",
            "value": 0.43,
            "status": "ok"
          },
          {
            "date": "2026-03-06",
            "value": 0.46,
            "status": "ok"
          },
          {
            "date": "2026-03-09",
            "value": 0.41,
            "status": "ok"
          },
          {
            "date": "2026-03-10",
            "value": 0.44,
            "status": "ok"
          },
          {
            "date": "2026-03-11",
            "value": 0.5,
            "status": "ok"
          },
          {
            "date": "2026-03-12",
            "value": 0.55,
            "status": "ok"
          },
          {
            "date": "2026-03-13",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-03-16",
            "value": 0.51,
            "status": "ok"
          },
          {
            "date": "2026-03-17",
            "value": 0.48,
            "status": "ok"
          },
          {
            "date": "2026-03-18",
            "value": 0.53,
            "status": "ok"
          },
          {
            "date": "2026-03-19",
            "value": 0.52,
            "status": "ok"
          },
          {
            "date": "2026-03-20",
            "value": 0.65,
            "status": "ok"
          },
          {
            "date": "2026-03-23",
            "value": 0.6,
            "status": "ok"
          },
          {
            "date": "2026-03-24",
            "value": 0.65,
            "status": "ok"
          },
          {
            "date": "2026-03-25",
            "value": 0.6,
            "status": "ok"
          },
          {
            "date": "2026-03-26",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-03-27",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-03-30",
            "value": 0.64,
            "status": "ok"
          },
          {
            "date": "2026-03-31",
            "value": 0.6,
            "status": "ok"
          },
          {
            "date": "2026-04-01",
            "value": 0.63,
            "status": "ok"
          },
          {
            "date": "2026-04-02",
            "value": 0.61,
            "status": "ok"
          },
          {
            "date": "2026-04-03",
            "value": 0.64,
            "status": "ok"
          },
          {
            "date": "2026-04-06",
            "value": 0.62,
            "status": "ok"
          },
          {
            "date": "2026-04-07",
            "value": 0.62,
            "status": "ok"
          },
          {
            "date": "2026-04-08",
            "value": 0.6,
            "status": "ok"
          },
          {
            "date": "2026-04-09",
            "value": 0.61,
            "status": "ok"
          },
          {
            "date": "2026-04-10",
            "value": 0.62,
            "status": "ok"
          },
          {
            "date": "2026-04-13",
            "value": 0.59,
            "status": "ok"
          },
          {
            "date": "2026-04-14",
            "value": 0.55,
            "status": "ok"
          },
          {
            "date": "2026-04-15",
            "value": 0.58,
            "status": "ok"
          },
          {
            "date": "2026-04-16",
            "value": 0.62,
            "status": "ok"
          },
          {
            "date": "2026-04-17",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-04-20",
            "value": 0.55,
            "status": "ok"
          },
          {
            "date": "2026-04-21",
            "value": 0.61,
            "status": "ok"
          },
          {
            "date": "2026-04-22",
            "value": 0.61,
            "status": "ok"
          },
          {
            "date": "2026-04-23",
            "value": 0.65,
            "status": "ok"
          },
          {
            "date": "2026-04-24",
            "value": 0.62,
            "status": "ok"
          },
          {
            "date": "2026-04-27",
            "value": 0.67,
            "status": "ok"
          },
          {
            "date": "2026-04-28",
            "value": 0.68,
            "status": "ok"
          },
          {
            "date": "2026-04-29",
            "value": 0.74,
            "status": "ok"
          },
          {
            "date": "2026-04-30",
            "value": 0.72,
            "status": "ok"
          },
          {
            "date": "2026-05-01",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-05-04",
            "value": 0.75,
            "status": "ok"
          },
          {
            "date": "2026-05-05",
            "value": 0.74,
            "status": "ok"
          },
          {
            "date": "2026-05-06",
            "value": 0.67,
            "status": "ok"
          },
          {
            "date": "2026-05-07",
            "value": 0.72,
            "status": "ok"
          },
          {
            "date": "2026-05-08",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-05-11",
            "value": 0.72,
            "status": "ok"
          },
          {
            "date": "2026-05-12",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-05-13",
            "value": 0.77,
            "status": "ok"
          },
          {
            "date": "2026-05-14",
            "value": 0.78,
            "status": "ok"
          },
          {
            "date": "2026-05-15",
            "value": 0.9,
            "status": "ok"
          },
          {
            "date": "2026-05-18",
            "value": 0.93,
            "status": "ok"
          },
          {
            "date": "2026-05-19",
            "value": 1.0,
            "status": "watch"
          },
          {
            "date": "2026-05-20",
            "value": 0.92,
            "status": "ok"
          },
          {
            "date": "2026-05-21",
            "value": 0.89,
            "status": "ok"
          },
          {
            "date": "2026-05-22",
            "value": 0.88,
            "status": "ok"
          },
          {
            "date": "2026-05-26",
            "value": 0.82,
            "status": "ok"
          },
          {
            "date": "2026-05-27",
            "value": 0.8,
            "status": "ok"
          },
          {
            "date": "2026-05-28",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-05-29",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-06-01",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-06-02",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-06-03",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-06-04",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-06-05",
            "value": 0.77,
            "status": "ok"
          },
          {
            "date": "2026-06-08",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-06-09",
            "value": 0.74,
            "status": "ok"
          },
          {
            "date": "2026-06-10",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-06-11",
            "value": 0.67,
            "status": "ok"
          },
          {
            "date": "2026-06-12",
            "value": 0.7,
            "status": "ok"
          },
          {
            "date": "2026-06-15",
            "value": 0.68,
            "status": "ok"
          },
          {
            "date": "2026-06-16",
            "value": 0.64,
            "status": "ok"
          },
          {
            "date": "2026-06-17",
            "value": 0.66,
            "status": "ok"
          },
          {
            "date": "2026-06-18",
            "value": 0.63,
            "status": "ok"
          },
          {
            "date": "2026-06-22",
            "value": 0.66,
            "status": "ok"
          },
          {
            "date": "2026-06-23",
            "value": 0.65,
            "status": "ok"
          },
          {
            "date": "2026-06-24",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-06-25",
            "value": 0.56,
            "status": "ok"
          },
          {
            "date": "2026-06-26",
            "value": 0.55,
            "status": "ok"
          },
          {
            "date": "2026-06-29",
            "value": 0.51,
            "status": "ok"
          },
          {
            "date": "2026-06-30",
            "value": 0.57,
            "status": "ok"
          },
          {
            "date": "2026-07-01",
            "value": 0.63,
            "status": "ok"
          },
          {
            "date": "2026-07-02",
            "value": 0.67,
            "status": "ok"
          },
          {
            "date": "2026-07-06",
            "value": 0.61,
            "status": "ok"
          },
          {
            "date": "2026-07-07",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-07-08",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-07-09",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-07-10",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-07-13",
            "value": 0.73,
            "status": "ok"
          },
          {
            "date": "2026-07-14",
            "value": 0.74,
            "status": "ok"
          },
          {
            "date": "2026-07-15",
            "value": 0.72,
            "status": "ok"
          },
          {
            "date": "2026-07-16",
            "value": 0.73,
            "status": "ok"
          },
          {
            "date": "2026-07-17",
            "value": 0.7,
            "status": "ok"
          },
          {
            "date": "2026-07-20",
            "value": 0.74,
            "status": "ok"
          },
          {
            "date": "2026-07-21",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-07-22",
            "value": 0.78,
            "status": "ok"
          },
          {
            "date": "2026-07-23",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-07-24",
            "value": 0.73,
            "status": "ok"
          },
          {
            "date": "2026-07-27",
            "value": 0.69,
            "status": "ok"
          },
          {
            "date": "2026-07-28",
            "value": 0.71,
            "status": "ok"
          },
          {
            "date": "2026-07-29",
            "value": 0.84,
            "status": "ok"
          },
          {
            "date": "2026-07-30",
            "value": 0.86,
            "status": "ok"
          },
          {
            "date": "2026-07-31",
            "value": 0.92,
            "status": "ok"
          },
          {
            "date": "2026-08-03",
            "value": 0.79,
            "status": "ok"
          },
          {
            "date": "2026-08-04",
            "value": 0.74,
            "status": "ok"
          },
          {
            "date": "2026-08-05",
            "value": 0.74,
            "status": "ok"
          },
          {
            "date": "2026-08-06",
            "value": 0.79,
            "status": "ok"
          },
          {
            "date": "2026-08-07",
            "value": 0.78,
            "status": "ok"
          },
          {
            "date": "2026-08-10",
            "value": 0.83,
            "status": "ok"
          },
          {
            "date": "2026-08-11",
            "value": 0.81,
            "status": "ok"
          },
          {
            "date": "2026-08-12",
            "value": 0.81,
            "status": "ok"
          },
          {
            "date": "2026-08-13",
            "value": 0.76,
            "status": "ok"
          },
          {
            "date": "2026-08-14",
            "value": 0.82,
            "status": "ok"
          },
          {
            "date": "2026-08-17",
            "value": 0.85,
            "status": "ok"
          },
          {
            "date": "2026-08-18",
            "value": 0.85,
            "status": "ok"
          },
          {
            "date": "2026-08-19",
            "value": 0.79,
            "status": "ok"
          },
          {
            "date": "2026-08-20",
            "value": 0.82,
            "status": "ok"
          },
          {
            "date": "2026-08-21",
            "value": 0.86,
            "status": "ok"
          },
          {
            "date": "2026-08-24",
            "value": 0.83,
            "status": "ok"
          },
          {
            "date": "2026-08-25",
            "value": 0.78,
            "status": "ok"
          },
          {
            "date": "2026-08-26",
            "value": 0.81,
            "status": "ok"
          },
          {
            "date": "2026-08-27",
            "value": 0.83,
            "status": "ok"
          },
          {
            "date": "2026-08-28",
            "value": 0.83,
            "status": "ok"
          },
          {
            "date": "2026-08-31",
            "value": 0.84,
            "status": "ok"
          },
          {
            "date": "2026-09-01",
            "value": 0.87,
            "status": "ok"
          },
          {
            "date": "2026-09-02",
            "value": 0.87,
            "status": "ok"
          },
          {
            "date": "2026-09-03",
            "value": 0.88,
            "status": "ok"
          },
          {
            "date": "2026-09-04",
            "value": 0.87,
            "status": "ok"
          },
          {
            "date": "2026-09-08",
            "value": 0.86,
            "status": "ok"
          },
          {
            "date": "2026-09-09",
            "value": 0.88,
            "status": "ok"
          },
          {
            "date": "2026-09-10",
            "value": 0.95,
            "status": "ok"
          },
          {
            "date": "2026-09-11",
            "value": 0.89,
            "status": "ok"
          },
          {
            "date": "2026-09-14",
            "value": 0.86,
            "status": "ok"
          },
          {
            "date": "2026-09-15",
            "value": 0.89,
            "status": "ok"
          },
          {
            "date": "2026-09-16",
            "value": 0.87,
            "status": "ok"
          },
          {
            "date": "2026-09-17",
            "value": 0.82,
            "status": "ok"
          },
          {
            "date": "2026-09-18",
            "value": 0.87,
            "status": "ok"
          },
          {
            "date": "2026-09-21",
            "value": 0.79,
            "status": "ok"
          },
          {
            "date": "2026-09-22",
            "value": 0.8,
            "status": "ok"
          },
          {
            "date": "2026-09-23",
            "value": 0.92,
            "status": "ok"
          },
          {
            "date": "2026-09-24",
            "value": 0.94,
            "status": "ok"
          },
          {
            "date": "2026-09-25",
            "value": 0.93,
            "status": "ok"
          }
        ]
      },
      {
        "key": "us_10y_breakeven",
        "label": "US 10Y breakeven inflation",
        "unit": "%",
        "color": "#f472b6",
        "latest_status": "ok",
        "bands": [
          {
            "label": "Alarm \u2265 3.00%",
            "status": "alarm",
            "from": 3.0,
            "to": null
          },
          {
            "label": "Watch 2.60% to 3.00%",
            "status": "watch",
            "from": 2.6,
            "to": 3.0
          },
          {
            "label": "OK < 2.60%",
            "status": "ok",
            "from": null,
            "to": 2.6
          }
        ],
        "points": [
          {
            "date": "2025-08-04",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2025-08-05",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2025-08-06",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2025-08-07",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-08-08",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2025-08-11",
            "value": 2.4,
            "status": "ok"
          },
          {
            "date": "2025-08-12",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-08-13",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2025-08-14",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2025-08-15",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-08-18",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-08-19",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-08-20",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-08-21",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2025-08-22",
            "value": 2.41,
            "status": "ok"
          },
          {
            "date": "2025-08-25",
            "value": 2.41,
            "status": "ok"
          },
          {
            "date": "2025-08-26",
            "value": 2.42,
            "status": "ok"
          },
          {
            "date": "2025-08-27",
            "value": 2.43,
            "status": "ok"
          },
          {
            "date": "2025-08-28",
            "value": 2.41,
            "status": "ok"
          },
          {
            "date": "2025-08-29",
            "value": 2.41,
            "status": "ok"
          },
          {
            "date": "2025-09-02",
            "value": 2.41,
            "status": "ok"
          },
          {
            "date": "2025-09-03",
            "value": 2.4,
            "status": "ok"
          },
          {
            "date": "2025-09-04",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-09-05",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2025-09-08",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-09-09",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2025-09-10",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-09-11",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2025-09-12",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2025-09-15",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2025-09-16",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2025-09-17",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-09-18",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-09-19",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2025-09-22",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2025-09-23",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2025-09-24",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-09-25",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-09-26",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2025-09-29",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-09-30",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-10-02",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2025-10-03",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2025-10-06",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2025-10-07",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-10-08",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2025-10-09",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2025-10-10",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2025-10-14",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2025-10-15",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2025-10-16",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-10-17",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2025-10-20",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2025-10-21",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-10-22",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2025-10-23",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2025-10-24",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2025-10-27",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-10-28",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-10-29",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2025-10-30",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2025-10-31",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2025-11-03",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2025-11-04",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2025-11-05",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2025-11-06",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-11-07",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-11-10",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2025-11-12",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2025-11-13",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-11-14",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-11-17",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2025-11-18",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2025-11-19",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2025-11-20",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-11-21",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-11-24",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2025-11-25",
            "value": 2.22,
            "status": "ok"
          },
          {
            "date": "2025-11-26",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2025-11-28",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-02",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-03",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-04",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2025-12-05",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2025-12-08",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2025-12-09",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2025-12-10",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2025-12-11",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2025-12-12",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2025-12-15",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2025-12-16",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2025-12-17",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-18",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-19",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-22",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2025-12-23",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-24",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-26",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2025-12-29",
            "value": 2.22,
            "status": "ok"
          },
          {
            "date": "2025-12-30",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2025-12-31",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-01-02",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-01-05",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-01-06",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-01-07",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-01-08",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-01-09",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-01-12",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-01-13",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2026-01-14",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-01-15",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-01-16",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-01-20",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-01-21",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-01-22",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-01-23",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-01-26",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-01-27",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-01-28",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-01-29",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-01-30",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-02-02",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-02-03",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-02-04",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-02-05",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-02-06",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-02-09",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-02-10",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-02-11",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-02-12",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-02-13",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-02-17",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-02-18",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-02-19",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-02-20",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-02-23",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-02-24",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-02-25",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-02-26",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-02-27",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-03-02",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-03-03",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-03-04",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-03-05",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-03-06",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-03-09",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-03-10",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-03-11",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-03-12",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-03-13",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-03-16",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-03-17",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2026-03-18",
            "value": 2.4,
            "status": "ok"
          },
          {
            "date": "2026-03-19",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2026-03-20",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-03-23",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-03-24",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-03-25",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-03-26",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-03-27",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-03-30",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-03-31",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2026-04-01",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-04-02",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-04-03",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-04-06",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-04-07",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2026-04-08",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-04-09",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-04-10",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-04-13",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-04-14",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2026-04-15",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2026-04-16",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2026-04-17",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-04-20",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-04-21",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-04-22",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-04-23",
            "value": 2.42,
            "status": "ok"
          },
          {
            "date": "2026-04-24",
            "value": 2.42,
            "status": "ok"
          },
          {
            "date": "2026-04-27",
            "value": 2.44,
            "status": "ok"
          },
          {
            "date": "2026-04-28",
            "value": 2.44,
            "status": "ok"
          },
          {
            "date": "2026-04-29",
            "value": 2.46,
            "status": "ok"
          },
          {
            "date": "2026-04-30",
            "value": 2.46,
            "status": "ok"
          },
          {
            "date": "2026-05-01",
            "value": 2.48,
            "status": "ok"
          },
          {
            "date": "2026-05-04",
            "value": 2.5,
            "status": "ok"
          },
          {
            "date": "2026-05-05",
            "value": 2.47,
            "status": "ok"
          },
          {
            "date": "2026-05-06",
            "value": 2.42,
            "status": "ok"
          },
          {
            "date": "2026-05-07",
            "value": 2.45,
            "status": "ok"
          },
          {
            "date": "2026-05-08",
            "value": 2.45,
            "status": "ok"
          },
          {
            "date": "2026-05-11",
            "value": 2.47,
            "status": "ok"
          },
          {
            "date": "2026-05-12",
            "value": 2.47,
            "status": "ok"
          },
          {
            "date": "2026-05-13",
            "value": 2.47,
            "status": "ok"
          },
          {
            "date": "2026-05-14",
            "value": 2.47,
            "status": "ok"
          },
          {
            "date": "2026-05-15",
            "value": 2.49,
            "status": "ok"
          },
          {
            "date": "2026-05-18",
            "value": 2.48,
            "status": "ok"
          },
          {
            "date": "2026-05-19",
            "value": 2.49,
            "status": "ok"
          },
          {
            "date": "2026-05-20",
            "value": 2.44,
            "status": "ok"
          },
          {
            "date": "2026-05-21",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2026-05-22",
            "value": 2.4,
            "status": "ok"
          },
          {
            "date": "2026-05-26",
            "value": 2.4,
            "status": "ok"
          },
          {
            "date": "2026-05-27",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2026-05-28",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2026-05-29",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-06-01",
            "value": 2.4,
            "status": "ok"
          },
          {
            "date": "2026-06-02",
            "value": 2.39,
            "status": "ok"
          },
          {
            "date": "2026-06-03",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-06-04",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-06-05",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-06-08",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-06-09",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-06-10",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-06-11",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-06-12",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-06-15",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-06-16",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-06-17",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-06-18",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-06-22",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2026-06-23",
            "value": 2.21,
            "status": "ok"
          },
          {
            "date": "2026-06-24",
            "value": 2.18,
            "status": "ok"
          },
          {
            "date": "2026-06-25",
            "value": 2.21,
            "status": "ok"
          },
          {
            "date": "2026-06-26",
            "value": 2.2,
            "status": "ok"
          },
          {
            "date": "2026-06-29",
            "value": 2.22,
            "status": "ok"
          },
          {
            "date": "2026-06-30",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2026-07-01",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2026-07-02",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2026-07-06",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2026-07-07",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-07-08",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-07-09",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2026-07-10",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2026-07-13",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-07-14",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-07-15",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2026-07-16",
            "value": 2.22,
            "status": "ok"
          },
          {
            "date": "2026-07-17",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2026-07-20",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-07-21",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-07-22",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-07-23",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-07-24",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-07-27",
            "value": 2.21,
            "status": "ok"
          },
          {
            "date": "2026-07-28",
            "value": 2.2,
            "status": "ok"
          },
          {
            "date": "2026-07-29",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-07-30",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-07-31",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-08-03",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-08-04",
            "value": 2.23,
            "status": "ok"
          },
          {
            "date": "2026-08-05",
            "value": 2.22,
            "status": "ok"
          },
          {
            "date": "2026-08-06",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-08-07",
            "value": 2.25,
            "status": "ok"
          },
          {
            "date": "2026-08-10",
            "value": 2.29,
            "status": "ok"
          },
          {
            "date": "2026-08-11",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-08-12",
            "value": 2.26,
            "status": "ok"
          },
          {
            "date": "2026-08-13",
            "value": 2.24,
            "status": "ok"
          },
          {
            "date": "2026-08-14",
            "value": 2.27,
            "status": "ok"
          },
          {
            "date": "2026-08-17",
            "value": 2.28,
            "status": "ok"
          },
          {
            "date": "2026-08-18",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2026-08-19",
            "value": 2.3,
            "status": "ok"
          },
          {
            "date": "2026-08-20",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-08-21",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-08-24",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-08-25",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-08-26",
            "value": 2.32,
            "status": "ok"
          },
          {
            "date": "2026-08-27",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-08-28",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-08-31",
            "value": 2.31,
            "status": "ok"
          },
          {
            "date": "2026-09-01",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-09-02",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-09-03",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-09-04",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-09-08",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2026-09-09",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2026-09-10",
            "value": 2.4,
            "status": "ok"
          },
          {
            "date": "2026-09-11",
            "value": 2.36,
            "status": "ok"
          },
          {
            "date": "2026-09-14",
            "value": 2.37,
            "status": "ok"
          },
          {
            "date": "2026-09-15",
            "value": 2.38,
            "status": "ok"
          },
          {
            "date": "2026-09-16",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-09-17",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-09-18",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-09-21",
            "value": 2.34,
            "status": "ok"
          },
          {
            "date": "2026-09-22",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-09-23",
            "value": 2.35,
            "status": "ok"
          },
          {
            "date": "2026-09-24",
            "value": 2.33,
            "status": "ok"
          },
          {
            "date": "2026-09-25",
            "value": 2.34,
            "status": "ok"
          }
        ]
      },
      {
        "key": "uk_10y_yield",
        "label": "UK 10Y government yield",
        "unit": "%",
        "color": "#fb7185",
        "latest_status": "watch",
        "bands": [
          {
            "label": "Alarm \u2265 5.25%",
            "status": "alarm",
            "from": 5.25,
            "to": null
          },
          {
            "label": "Watch 4.75% to 5.25%",
            "status": "watch",
            "from": 4.75,
            "to": 5.25
          },
          {
            "label": "OK < 4.75%",
            "status": "ok",
            "from": null,
            "to": 4.75
          }
        ],
        "points": [
          {
            "date": "2025-08-01",
            "value": 4.6369,
            "status": "ok"
          },
          {
            "date": "2025-09-01",
            "value": 4.6885,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 4.5721,
            "status": "ok"
          },
          {
            "date": "2025-11-01",
            "value": 4.4985,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 4.4826,
            "status": "ok"
          },
          {
            "date": "2026-01-01",
            "value": 4.451,
            "status": "ok"
          },
          {
            "date": "2026-02-01",
            "value": 4.4324,
            "status": "ok"
          },
          {
            "date": "2026-03-01",
            "value": 4.7007,
            "status": "ok"
          },
          {
            "date": "2026-04-01",
            "value": 4.8207,
            "status": "watch"
          },
          {
            "date": "2026-05-01",
            "value": 4.9416,
            "status": "watch"
          },
          {
            "date": "2026-06-01",
            "value": 4.796,
            "status": "watch"
          },
          {
            "date": "2026-07-01",
            "value": 4.9318,
            "status": "watch"
          },
          {
            "date": "2026-08-01",
            "value": 4.9886,
            "status": "watch"
          }
        ]
      },
      {
        "key": "japan_10y_yield",
        "label": "Japan 10Y government yield",
        "unit": "%",
        "color": "#38bdf8",
        "latest_status": "alarm",
        "bands": [
          {
            "label": "Alarm \u2265 2.50%",
            "status": "alarm",
            "from": 2.5,
            "to": null
          },
          {
            "label": "Watch 1.75% to 2.50%",
            "status": "watch",
            "from": 1.75,
            "to": 2.5
          },
          {
            "label": "OK < 1.75%",
            "status": "ok",
            "from": null,
            "to": 1.75
          }
        ],
        "points": [
          {
            "date": "2025-08-01",
            "value": 1.6,
            "status": "ok"
          },
          {
            "date": "2025-09-01",
            "value": 1.645,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 1.655,
            "status": "ok"
          },
          {
            "date": "2025-11-01",
            "value": 1.805,
            "status": "watch"
          },
          {
            "date": "2025-12-01",
            "value": 2.06,
            "status": "watch"
          },
          {
            "date": "2026-01-01",
            "value": 2.24,
            "status": "watch"
          },
          {
            "date": "2026-02-01",
            "value": 2.11,
            "status": "watch"
          },
          {
            "date": "2026-03-01",
            "value": 2.345,
            "status": "watch"
          },
          {
            "date": "2026-04-01",
            "value": 2.515,
            "status": "alarm"
          },
          {
            "date": "2026-05-01",
            "value": 2.65,
            "status": "alarm"
          },
          {
            "date": "2026-06-01",
            "value": 2.67,
            "status": "alarm"
          },
          {
            "date": "2026-07-01",
            "value": 2.79,
            "status": "alarm"
          },
          {
            "date": "2026-08-01",
            "value": 2.94,
            "status": "alarm"
          }
        ]
      },
      {
        "key": "canada_10y_yield",
        "label": "Canada 10Y government yield",
        "unit": "%",
        "color": "#34d399",
        "latest_status": "ok",
        "bands": [
          {
            "label": "Alarm \u2265 4.50%",
            "status": "alarm",
            "from": 4.5,
            "to": null
          },
          {
            "label": "Watch 3.75% to 4.50%",
            "status": "watch",
            "from": 3.75,
            "to": 4.5
          },
          {
            "label": "OK < 3.75%",
            "status": "ok",
            "from": null,
            "to": 3.75
          }
        ],
        "points": [
          {
            "date": "2025-08-01",
            "value": 3.4225,
            "status": "ok"
          },
          {
            "date": "2025-09-01",
            "value": 3.2245,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 3.12818181818182,
            "status": "ok"
          },
          {
            "date": "2025-11-01",
            "value": 3.17421052631579,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 3.38761904761905,
            "status": "ok"
          },
          {
            "date": "2026-01-01",
            "value": 3.40238095238095,
            "status": "ok"
          },
          {
            "date": "2026-02-01",
            "value": 3.28842105263158,
            "status": "ok"
          },
          {
            "date": "2026-03-01",
            "value": 3.44090909090909,
            "status": "ok"
          },
          {
            "date": "2026-04-01",
            "value": 3.51833333333333,
            "status": "ok"
          },
          {
            "date": "2026-05-01",
            "value": 3.5415,
            "status": "ok"
          },
          {
            "date": "2026-06-01",
            "value": 3.38833333333333,
            "status": "ok"
          },
          {
            "date": "2026-07-01",
            "value": 3.54727272727273,
            "status": "ok"
          },
          {
            "date": "2026-08-01",
            "value": 3.675,
            "status": "ok"
          }
        ]
      },
      {
        "key": "australia_10y_yield",
        "label": "Australia 10Y government yield",
        "unit": "%",
        "color": "#a78bfa",
        "latest_status": "alarm",
        "bands": [
          {
            "label": "Alarm \u2265 5.00%",
            "status": "alarm",
            "from": 5.0,
            "to": null
          },
          {
            "label": "Watch 4.50% to 5.00%",
            "status": "watch",
            "from": 4.5,
            "to": 5.0
          },
          {
            "label": "OK < 4.50%",
            "status": "ok",
            "from": null,
            "to": 4.5
          }
        ],
        "points": [
          {
            "date": "2025-08-01",
            "value": 4.275,
            "status": "ok"
          },
          {
            "date": "2025-09-01",
            "value": 4.298,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 4.234,
            "status": "ok"
          },
          {
            "date": "2025-11-01",
            "value": 4.416,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 4.719,
            "status": "watch"
          },
          {
            "date": "2026-01-01",
            "value": 4.75,
            "status": "watch"
          },
          {
            "date": "2026-02-01",
            "value": 4.758,
            "status": "watch"
          },
          {
            "date": "2026-03-01",
            "value": 4.926,
            "status": "watch"
          },
          {
            "date": "2026-04-01",
            "value": 4.969,
            "status": "watch"
          },
          {
            "date": "2026-05-01",
            "value": 4.982,
            "status": "watch"
          },
          {
            "date": "2026-06-01",
            "value": 4.831,
            "status": "watch"
          },
          {
            "date": "2026-07-01",
            "value": 4.919,
            "status": "watch"
          },
          {
            "date": "2026-08-01",
            "value": 5.015,
            "status": "alarm"
          }
        ]
      },
      {
        "key": "germany_10y_yield",
        "label": "Germany 10Y government yield",
        "unit": "%",
        "color": "#84cc16",
        "latest_status": "watch",
        "bands": [
          {
            "label": "Alarm \u2265 3.25%",
            "status": "alarm",
            "from": 3.25,
            "to": null
          },
          {
            "label": "Watch 2.75% to 3.25%",
            "status": "watch",
            "from": 2.75,
            "to": 3.25
          },
          {
            "label": "OK < 2.75%",
            "status": "ok",
            "from": null,
            "to": 2.75
          }
        ],
        "points": [
          {
            "date": "2025-08-01",
            "value": 2.6733333333,
            "status": "ok"
          },
          {
            "date": "2025-09-01",
            "value": 2.6931818182,
            "status": "ok"
          },
          {
            "date": "2025-10-01",
            "value": 2.617826087,
            "status": "ok"
          },
          {
            "date": "2025-11-01",
            "value": 2.6575,
            "status": "ok"
          },
          {
            "date": "2025-12-01",
            "value": 2.8142105263,
            "status": "watch"
          },
          {
            "date": "2026-01-01",
            "value": 2.8066666667,
            "status": "watch"
          },
          {
            "date": "2026-02-01",
            "value": 2.745,
            "status": "ok"
          },
          {
            "date": "2026-03-01",
            "value": 2.91,
            "status": "watch"
          },
          {
            "date": "2026-04-01",
            "value": 3.001,
            "status": "watch"
          },
          {
            "date": "2026-05-01",
            "value": 3.0465,
            "status": "watch"
          },
          {
            "date": "2026-06-01",
            "value": 2.96409090909091,
            "status": "watch"
          },
          {
            "date": "2026-07-01",
            "value": 3.0704347826087,
            "status": "watch"
          },
          {
            "date": "2026-08-01",
            "value": 3.18,
            "status": "watch"
          }
        ]
      },
      {
        "key": "cross_market_dispersion",
        "label": "Cross-market 10Y dispersion",
        "unit": "pp",
        "color": "#e879f9",
        "latest_status": "ok",
        "bands": [
          {
            "label": "Alarm \u2265 325 bp",
            "status": "alarm",
            "from": 3.25,
            "to": null
          },
          {
            "label": "Watch 250 bp to 325 bp",
            "status": "watch",
            "from": 2.5,
            "to": 3.25
          },
          {
            "label": "OK < 250 bp",
            "status": "ok",
            "from": null,
            "to": 2.5
          }
        ],
        "points": [
          {
            "date": "2025-08-29",
            "value": 3.0368999999999997,
            "status": "watch"
          },
          {
            "date": "2025-09-30",
            "value": 3.0435000000000003,
            "status": "watch"
          },
          {
            "date": "2025-10-31",
            "value": 2.9170999999999996,
            "status": "watch"
          },
          {
            "date": "2025-11-28",
            "value": 2.6935000000000002,
            "status": "watch"
          },
          {
            "date": "2025-12-31",
            "value": 2.6590000000000003,
            "status": "watch"
          },
          {
            "date": "2026-01-30",
            "value": 2.51,
            "status": "watch"
          },
          {
            "date": "2026-02-27",
            "value": 2.648,
            "status": "watch"
          },
          {
            "date": "2026-03-31",
            "value": 2.581,
            "status": "watch"
          },
          {
            "date": "2026-04-30",
            "value": 2.454,
            "status": "ok"
          },
          {
            "date": "2026-05-29",
            "value": 2.3320000000000003,
            "status": "ok"
          },
          {
            "date": "2026-06-30",
            "value": 2.1610000000000005,
            "status": "ok"
          },
          {
            "date": "2026-07-31",
            "value": 2.1418,
            "status": "ok"
          },
          {
            "date": "2026-08-31",
            "value": 2.0749999999999997,
            "status": "ok"
          }
        ]
      },
      {
        "key": "gold_certificate_level",
        "label": "Fed gold certificate account",
        "unit": "usd_mn",
        "color": "#fbbf24",
        "latest_status": "present",
        "bands": [],
        "points": [
          {
            "date": "2025-08-06",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-08-13",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-08-20",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-08-27",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-09-03",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-09-10",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-09-17",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-09-24",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-10-01",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-10-08",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-10-15",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-10-22",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-10-29",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-11-05",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-11-12",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-11-19",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-11-26",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-12-03",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-12-10",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-12-17",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-12-24",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2025-12-31",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-01-07",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-01-14",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-01-21",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-01-28",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-02-04",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-02-11",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-02-18",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-02-25",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-03-04",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-03-11",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-03-18",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-03-25",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-04-01",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-04-08",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-04-15",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-04-22",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-04-29",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-05-06",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-05-13",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-05-20",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-05-27",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-06-03",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-06-10",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-06-17",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-06-24",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-07-01",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-07-08",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-07-15",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-07-22",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-07-29",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-08-05",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-08-12",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-08-19",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-08-26",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-09-02",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-09-09",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-09-16",
            "value": 11037.0,
            "status": "present"
          },
          {
            "date": "2026-09-23",
            "value": 11037.0,
            "status": "present"
          }
        ]
      },
      {
        "key": "gold_price_proxy",
        "label": "Nonmonetary gold export price index",
        "unit": "index",
        "color": "#facc15",
        "latest_status": "present",
        "bands": [],
        "points": [
          {
            "date": "2025-09-01",
            "value": 135.7,
            "status": "present"
          },
          {
            "date": "2025-10-01",
            "value": 156.4,
            "status": "present"
          },
          {
            "date": "2025-11-01",
            "value": 155.7,
            "status": "present"
          },
          {
            "date": "2025-12-01",
            "value": 161.0,
            "status": "present"
          },
          {
            "date": "2026-01-01",
            "value": 171.6,
            "status": "present"
          },
          {
            "date": "2026-02-01",
            "value": 186.6,
            "status": "present"
          },
          {
            "date": "2026-03-01",
            "value": 182.6,
            "status": "present"
          },
          {
            "date": "2026-04-01",
            "value": 178.4,
            "status": "present"
          },
          {
            "date": "2026-05-01",
            "value": 176.3,
            "status": "present"
          },
          {
            "date": "2026-06-01",
            "value": 168.5,
            "status": "present"
          },
          {
            "date": "2026-07-01",
            "value": 155.4,
            "status": "present"
          },
          {
            "date": "2026-08-01",
            "value": 155.1,
            "status": "present"
          }
        ]
      },
      {
        "key": "dollar_index",
        "label": "Nominal broad U.S. dollar index",
        "unit": "index",
        "color": "#22d3ee",
        "latest_status": "present",
        "bands": [],
        "points": [
          {
            "date": "2025-08-04",
            "value": 120.9859,
            "status": "present"
          },
          {
            "date": "2025-08-05",
            "value": 120.9082,
            "status": "present"
          },
          {
            "date": "2025-08-06",
            "value": 120.5082,
            "status": "present"
          },
          {
            "date": "2025-08-07",
            "value": 120.5043,
            "status": "present"
          },
          {
            "date": "2025-08-08",
            "value": 120.3329,
            "status": "present"
          },
          {
            "date": "2025-08-11",
            "value": 120.6892,
            "status": "present"
          },
          {
            "date": "2025-08-12",
            "value": 120.2736,
            "status": "present"
          },
          {
            "date": "2025-08-13",
            "value": 120.13,
            "status": "present"
          },
          {
            "date": "2025-08-14",
            "value": 120.6446,
            "status": "present"
          },
          {
            "date": "2025-08-15",
            "value": 120.3377,
            "status": "present"
          },
          {
            "date": "2025-08-18",
            "value": 120.5622,
            "status": "present"
          },
          {
            "date": "2025-08-19",
            "value": 120.7224,
            "status": "present"
          },
          {
            "date": "2025-08-20",
            "value": 120.7757,
            "status": "present"
          },
          {
            "date": "2025-08-21",
            "value": 121.0843,
            "status": "present"
          },
          {
            "date": "2025-08-22",
            "value": 120.2774,
            "status": "present"
          },
          {
            "date": "2025-08-25",
            "value": 120.4214,
            "status": "present"
          },
          {
            "date": "2025-08-26",
            "value": 120.5274,
            "status": "present"
          },
          {
            "date": "2025-08-27",
            "value": 120.7274,
            "status": "present"
          },
          {
            "date": "2025-08-28",
            "value": 120.2595,
            "status": "present"
          },
          {
            "date": "2025-08-29",
            "value": 120.2082,
            "status": "present"
          },
          {
            "date": "2025-09-02",
            "value": 120.6837,
            "status": "present"
          },
          {
            "date": "2025-09-03",
            "value": 120.5052,
            "status": "present"
          },
          {
            "date": "2025-09-04",
            "value": 120.7629,
            "status": "present"
          },
          {
            "date": "2025-09-05",
            "value": 120.1282,
            "status": "present"
          },
          {
            "date": "2025-09-08",
            "value": 120.0971,
            "status": "present"
          },
          {
            "date": "2025-09-09",
            "value": 120.1569,
            "status": "present"
          },
          {
            "date": "2025-09-10",
            "value": 120.1223,
            "status": "present"
          },
          {
            "date": "2025-09-11",
            "value": 119.9534,
            "status": "present"
          },
          {
            "date": "2025-09-12",
            "value": 120.0611,
            "status": "present"
          },
          {
            "date": "2025-09-15",
            "value": 119.5644,
            "status": "present"
          },
          {
            "date": "2025-09-16",
            "value": 119.1348,
            "status": "present"
          },
          {
            "date": "2025-09-17",
            "value": 119.1582,
            "status": "present"
          },
          {
            "date": "2025-09-18",
            "value": 119.6616,
            "status": "present"
          },
          {
            "date": "2025-09-19",
            "value": 119.7858,
            "status": "present"
          },
          {
            "date": "2025-09-22",
            "value": 119.8152,
            "status": "present"
          },
          {
            "date": "2025-09-23",
            "value": 119.6202,
            "status": "present"
          },
          {
            "date": "2025-09-24",
            "value": 120.1707,
            "status": "present"
          },
          {
            "date": "2025-09-25",
            "value": 120.5419,
            "status": "present"
          },
          {
            "date": "2025-09-26",
            "value": 120.4349,
            "status": "present"
          },
          {
            "date": "2025-09-29",
            "value": 120.115,
            "status": "present"
          },
          {
            "date": "2025-09-30",
            "value": 120.1368,
            "status": "present"
          },
          {
            "date": "2025-10-01",
            "value": 120.1502,
            "status": "present"
          },
          {
            "date": "2025-10-02",
            "value": 120.4296,
            "status": "present"
          },
          {
            "date": "2025-10-03",
            "value": 120.0881,
            "status": "present"
          },
          {
            "date": "2025-10-06",
            "value": 120.2722,
            "status": "present"
          },
          {
            "date": "2025-10-07",
            "value": 120.4884,
            "status": "present"
          },
          {
            "date": "2025-10-08",
            "value": 120.7766,
            "status": "present"
          },
          {
            "date": "2025-10-09",
            "value": 121.0902,
            "status": "present"
          },
          {
            "date": "2025-10-10",
            "value": 121.1163,
            "status": "present"
          },
          {
            "date": "2025-10-14",
            "value": 121.1822,
            "status": "present"
          },
          {
            "date": "2025-10-15",
            "value": 120.8642,
            "status": "present"
          },
          {
            "date": "2025-10-16",
            "value": 120.6698,
            "status": "present"
          },
          {
            "date": "2025-10-17",
            "value": 120.7028,
            "status": "present"
          },
          {
            "date": "2025-10-20",
            "value": 120.6209,
            "status": "present"
          },
          {
            "date": "2025-10-21",
            "value": 120.8895,
            "status": "present"
          },
          {
            "date": "2025-10-22",
            "value": 120.8958,
            "status": "present"
          },
          {
            "date": "2025-10-23",
            "value": 120.9531,
            "status": "present"
          },
          {
            "date": "2025-10-24",
            "value": 120.9345,
            "status": "present"
          },
          {
            "date": "2025-10-27",
            "value": 120.7988,
            "status": "present"
          },
          {
            "date": "2025-10-28",
            "value": 120.6361,
            "status": "present"
          },
          {
            "date": "2025-10-29",
            "value": 120.5312,
            "status": "present"
          },
          {
            "date": "2025-10-30",
            "value": 121.2832,
            "status": "present"
          },
          {
            "date": "2025-10-31",
            "value": 121.3859,
            "status": "present"
          },
          {
            "date": "2025-11-03",
            "value": 121.4512,
            "status": "present"
          },
          {
            "date": "2025-11-04",
            "value": 121.8271,
            "status": "present"
          },
          {
            "date": "2025-11-05",
            "value": 121.8482,
            "status": "present"
          },
          {
            "date": "2025-11-06",
            "value": 121.6948,
            "status": "present"
          },
          {
            "date": "2025-11-07",
            "value": 121.388,
            "status": "present"
          },
          {
            "date": "2025-11-10",
            "value": 121.2984,
            "status": "present"
          },
          {
            "date": "2025-11-12",
            "value": 121.0458,
            "status": "present"
          },
          {
            "date": "2025-11-13",
            "value": 120.7725,
            "status": "present"
          },
          {
            "date": "2025-11-14",
            "value": 120.9666,
            "status": "present"
          },
          {
            "date": "2025-11-17",
            "value": 121.1146,
            "status": "present"
          },
          {
            "date": "2025-11-18",
            "value": 121.2127,
            "status": "present"
          },
          {
            "date": "2025-11-19",
            "value": 121.4978,
            "status": "present"
          },
          {
            "date": "2025-11-20",
            "value": 121.6889,
            "status": "present"
          },
          {
            "date": "2025-11-21",
            "value": 121.8653,
            "status": "present"
          },
          {
            "date": "2025-11-24",
            "value": 121.9171,
            "status": "present"
          },
          {
            "date": "2025-11-25",
            "value": 121.6335,
            "status": "present"
          },
          {
            "date": "2025-11-26",
            "value": 121.2437,
            "status": "present"
          },
          {
            "date": "2025-11-28",
            "value": 121.0527,
            "status": "present"
          },
          {
            "date": "2025-12-01",
            "value": 120.9862,
            "status": "present"
          },
          {
            "date": "2025-12-02",
            "value": 121.1467,
            "status": "present"
          },
          {
            "date": "2025-12-03",
            "value": 120.7336,
            "status": "present"
          },
          {
            "date": "2025-12-04",
            "value": 120.6766,
            "status": "present"
          },
          {
            "date": "2025-12-05",
            "value": 120.6863,
            "status": "present"
          },
          {
            "date": "2025-12-08",
            "value": 120.776,
            "status": "present"
          },
          {
            "date": "2025-12-09",
            "value": 120.6832,
            "status": "present"
          },
          {
            "date": "2025-12-10",
            "value": 120.6752,
            "status": "present"
          },
          {
            "date": "2025-12-11",
            "value": 119.98,
            "status": "present"
          },
          {
            "date": "2025-12-12",
            "value": 120.1442,
            "status": "present"
          },
          {
            "date": "2025-12-15",
            "value": 119.9561,
            "status": "present"
          },
          {
            "date": "2025-12-16",
            "value": 119.8902,
            "status": "present"
          },
          {
            "date": "2025-12-17",
            "value": 120.155,
            "status": "present"
          },
          {
            "date": "2025-12-18",
            "value": 120.0528,
            "status": "present"
          },
          {
            "date": "2025-12-19",
            "value": 120.1652,
            "status": "present"
          },
          {
            "date": "2025-12-22",
            "value": 119.9912,
            "status": "present"
          },
          {
            "date": "2025-12-23",
            "value": 119.7057,
            "status": "present"
          },
          {
            "date": "2025-12-24",
            "value": 119.4372,
            "status": "present"
          },
          {
            "date": "2025-12-26",
            "value": 119.4723,
            "status": "present"
          },
          {
            "date": "2025-12-29",
            "value": 119.5899,
            "status": "present"
          },
          {
            "date": "2025-12-30",
            "value": 119.4939,
            "status": "present"
          },
          {
            "date": "2025-12-31",
            "value": 119.7456,
            "status": "present"
          },
          {
            "date": "2026-01-02",
            "value": 119.6059,
            "status": "present"
          },
          {
            "date": "2026-01-05",
            "value": 119.6192,
            "status": "present"
          },
          {
            "date": "2026-01-06",
            "value": 119.7807,
            "status": "present"
          },
          {
            "date": "2026-01-07",
            "value": 119.8719,
            "status": "present"
          },
          {
            "date": "2026-01-08",
            "value": 120.0904,
            "status": "present"
          },
          {
            "date": "2026-01-09",
            "value": 120.2215,
            "status": "present"
          },
          {
            "date": "2026-01-12",
            "value": 119.9958,
            "status": "present"
          },
          {
            "date": "2026-01-13",
            "value": 120.1401,
            "status": "present"
          },
          {
            "date": "2026-01-14",
            "value": 119.9537,
            "status": "present"
          },
          {
            "date": "2026-01-15",
            "value": 119.9951,
            "status": "present"
          },
          {
            "date": "2026-01-16",
            "value": 120.0838,
            "status": "present"
          },
          {
            "date": "2026-01-20",
            "value": 119.4455,
            "status": "present"
          },
          {
            "date": "2026-01-21",
            "value": 119.3431,
            "status": "present"
          },
          {
            "date": "2026-01-22",
            "value": 119.1962,
            "status": "present"
          },
          {
            "date": "2026-01-23",
            "value": 118.8976,
            "status": "present"
          },
          {
            "date": "2026-01-26",
            "value": 118.0525,
            "status": "present"
          },
          {
            "date": "2026-01-27",
            "value": 117.4523,
            "status": "present"
          },
          {
            "date": "2026-01-28",
            "value": 117.5117,
            "status": "present"
          },
          {
            "date": "2026-01-29",
            "value": 117.4396,
            "status": "present"
          },
          {
            "date": "2026-01-30",
            "value": 117.8996,
            "status": "present"
          },
          {
            "date": "2026-02-02",
            "value": 118.3609,
            "status": "present"
          },
          {
            "date": "2026-02-03",
            "value": 117.9764,
            "status": "present"
          },
          {
            "date": "2026-02-04",
            "value": 118.2602,
            "status": "present"
          },
          {
            "date": "2026-02-05",
            "value": 118.5034,
            "status": "present"
          },
          {
            "date": "2026-02-06",
            "value": 118.2407,
            "status": "present"
          },
          {
            "date": "2026-02-09",
            "value": 117.6392,
            "status": "present"
          },
          {
            "date": "2026-02-10",
            "value": 117.5216,
            "status": "present"
          },
          {
            "date": "2026-02-11",
            "value": 117.4601,
            "status": "present"
          },
          {
            "date": "2026-02-12",
            "value": 117.5376,
            "status": "present"
          },
          {
            "date": "2026-02-13",
            "value": 117.5258,
            "status": "present"
          },
          {
            "date": "2026-02-17",
            "value": 117.7375,
            "status": "present"
          },
          {
            "date": "2026-02-18",
            "value": 117.8426,
            "status": "present"
          },
          {
            "date": "2026-02-19",
            "value": 118.2354,
            "status": "present"
          },
          {
            "date": "2026-02-20",
            "value": 117.9917,
            "status": "present"
          },
          {
            "date": "2026-02-23",
            "value": 117.9395,
            "status": "present"
          },
          {
            "date": "2026-02-24",
            "value": 117.9463,
            "status": "present"
          },
          {
            "date": "2026-02-25",
            "value": 117.769,
            "status": "present"
          },
          {
            "date": "2026-02-26",
            "value": 117.9042,
            "status": "present"
          },
          {
            "date": "2026-02-27",
            "value": 117.8223,
            "status": "present"
          },
          {
            "date": "2026-03-02",
            "value": 118.667,
            "status": "present"
          },
          {
            "date": "2026-03-03",
            "value": 119.4341,
            "status": "present"
          },
          {
            "date": "2026-03-04",
            "value": 119.0705,
            "status": "present"
          },
          {
            "date": "2026-03-05",
            "value": 119.5683,
            "status": "present"
          },
          {
            "date": "2026-03-06",
            "value": 119.491,
            "status": "present"
          },
          {
            "date": "2026-03-09",
            "value": 119.5151,
            "status": "present"
          },
          {
            "date": "2026-03-10",
            "value": 118.7255,
            "status": "present"
          },
          {
            "date": "2026-03-11",
            "value": 119.2885,
            "status": "present"
          },
          {
            "date": "2026-03-12",
            "value": 119.8227,
            "status": "present"
          },
          {
            "date": "2026-03-13",
            "value": 120.5518,
            "status": "present"
          },
          {
            "date": "2026-03-16",
            "value": 120.097,
            "status": "present"
          },
          {
            "date": "2026-03-17",
            "value": 119.8328,
            "status": "present"
          },
          {
            "date": "2026-03-18",
            "value": 119.9276,
            "status": "present"
          },
          {
            "date": "2026-03-19",
            "value": 120.1802,
            "status": "present"
          },
          {
            "date": "2026-03-20",
            "value": 120.2757,
            "status": "present"
          },
          {
            "date": "2026-03-23",
            "value": 119.9371,
            "status": "present"
          },
          {
            "date": "2026-03-24",
            "value": 120.1295,
            "status": "present"
          },
          {
            "date": "2026-03-25",
            "value": 120.1282,
            "status": "present"
          },
          {
            "date": "2026-03-26",
            "value": 120.389,
            "status": "present"
          },
          {
            "date": "2026-03-27",
            "value": 120.8851,
            "status": "present"
          },
          {
            "date": "2026-03-30",
            "value": 121.2851,
            "status": "present"
          },
          {
            "date": "2026-03-31",
            "value": 121.035,
            "status": "present"
          },
          {
            "date": "2026-04-01",
            "value": 120.1198,
            "status": "present"
          },
          {
            "date": "2026-04-02",
            "value": 120.503,
            "status": "present"
          },
          {
            "date": "2026-04-03",
            "value": 120.6565,
            "status": "present"
          },
          {
            "date": "2026-04-06",
            "value": 120.4302,
            "status": "present"
          },
          {
            "date": "2026-04-07",
            "value": 120.32,
            "status": "present"
          },
          {
            "date": "2026-04-08",
            "value": 119.0596,
            "status": "present"
          },
          {
            "date": "2026-04-09",
            "value": 118.8998,
            "status": "present"
          },
          {
            "date": "2026-04-10",
            "value": 118.8552,
            "status": "present"
          },
          {
            "date": "2026-04-13",
            "value": 118.9916,
            "status": "present"
          },
          {
            "date": "2026-04-14",
            "value": 118.3581,
            "status": "present"
          },
          {
            "date": "2026-04-15",
            "value": 118.3623,
            "status": "present"
          },
          {
            "date": "2026-04-16",
            "value": 118.3616,
            "status": "present"
          },
          {
            "date": "2026-04-17",
            "value": 118.0795,
            "status": "present"
          },
          {
            "date": "2026-04-20",
            "value": 118.2374,
            "status": "present"
          },
          {
            "date": "2026-04-21",
            "value": 118.4331,
            "status": "present"
          },
          {
            "date": "2026-04-22",
            "value": 118.6004,
            "status": "present"
          },
          {
            "date": "2026-04-23",
            "value": 118.7155,
            "status": "present"
          },
          {
            "date": "2026-04-24",
            "value": 118.7294,
            "status": "present"
          },
          {
            "date": "2026-04-27",
            "value": 118.5458,
            "status": "present"
          },
          {
            "date": "2026-04-28",
            "value": 118.7717,
            "status": "present"
          },
          {
            "date": "2026-04-29",
            "value": 119.0975,
            "status": "present"
          },
          {
            "date": "2026-04-30",
            "value": 118.671,
            "status": "present"
          },
          {
            "date": "2026-05-01",
            "value": 118.3926,
            "status": "present"
          },
          {
            "date": "2026-05-04",
            "value": 118.8264,
            "status": "present"
          },
          {
            "date": "2026-05-05",
            "value": 118.6207,
            "status": "present"
          },
          {
            "date": "2026-05-06",
            "value": 118.0982,
            "status": "present"
          },
          {
            "date": "2026-05-07",
            "value": 118.0116,
            "status": "present"
          },
          {
            "date": "2026-05-08",
            "value": 118.0392,
            "status": "present"
          },
          {
            "date": "2026-05-11",
            "value": 118.0562,
            "status": "present"
          },
          {
            "date": "2026-05-12",
            "value": 118.5238,
            "status": "present"
          },
          {
            "date": "2026-05-13",
            "value": 118.4737,
            "status": "present"
          },
          {
            "date": "2026-05-14",
            "value": 118.6696,
            "status": "present"
          },
          {
            "date": "2026-05-15",
            "value": 119.2825,
            "status": "present"
          },
          {
            "date": "2026-05-18",
            "value": 119.0574,
            "status": "present"
          },
          {
            "date": "2026-05-19",
            "value": 119.451,
            "status": "present"
          },
          {
            "date": "2026-05-20",
            "value": 119.1624,
            "status": "present"
          },
          {
            "date": "2026-05-21",
            "value": 119.369,
            "status": "present"
          },
          {
            "date": "2026-05-22",
            "value": 119.2868,
            "status": "present"
          },
          {
            "date": "2026-05-26",
            "value": 119.1696,
            "status": "present"
          },
          {
            "date": "2026-05-27",
            "value": 119.1829,
            "status": "present"
          },
          {
            "date": "2026-05-28",
            "value": 119.0318,
            "status": "present"
          },
          {
            "date": "2026-05-29",
            "value": 118.8783,
            "status": "present"
          },
          {
            "date": "2026-06-01",
            "value": 119.1653,
            "status": "present"
          },
          {
            "date": "2026-06-02",
            "value": 119.0359,
            "status": "present"
          },
          {
            "date": "2026-06-03",
            "value": 119.3848,
            "status": "present"
          },
          {
            "date": "2026-06-04",
            "value": 119.3615,
            "status": "present"
          },
          {
            "date": "2026-06-05",
            "value": 120.0831,
            "status": "present"
          },
          {
            "date": "2026-06-08",
            "value": 120.034,
            "status": "present"
          },
          {
            "date": "2026-06-09",
            "value": 119.9617,
            "status": "present"
          },
          {
            "date": "2026-06-10",
            "value": 119.9134,
            "status": "present"
          },
          {
            "date": "2026-06-11",
            "value": 120.1174,
            "status": "present"
          },
          {
            "date": "2026-06-12",
            "value": 119.5073,
            "status": "present"
          },
          {
            "date": "2026-06-15",
            "value": 119.3158,
            "status": "present"
          },
          {
            "date": "2026-06-16",
            "value": 119.256,
            "status": "present"
          },
          {
            "date": "2026-06-17",
            "value": 119.3871,
            "status": "present"
          },
          {
            "date": "2026-06-18",
            "value": 120.3958,
            "status": "present"
          },
          {
            "date": "2026-06-22",
            "value": 120.5463,
            "status": "present"
          },
          {
            "date": "2026-06-23",
            "value": 121.0552,
            "status": "present"
          },
          {
            "date": "2026-06-24",
            "value": 121.412,
            "status": "present"
          },
          {
            "date": "2026-06-25",
            "value": 121.0559,
            "status": "present"
          },
          {
            "date": "2026-06-26",
            "value": 120.8866,
            "status": "present"
          },
          {
            "date": "2026-06-29",
            "value": 120.9525,
            "status": "present"
          },
          {
            "date": "2026-06-30",
            "value": 120.9248,
            "status": "present"
          },
          {
            "date": "2026-07-01",
            "value": 121.1455,
            "status": "present"
          },
          {
            "date": "2026-07-02",
            "value": 120.6902,
            "status": "present"
          },
          {
            "date": "2026-07-06",
            "value": 120.835,
            "status": "present"
          },
          {
            "date": "2026-07-07",
            "value": 120.8145,
            "status": "present"
          },
          {
            "date": "2026-07-08",
            "value": 121.1307,
            "status": "present"
          },
          {
            "date": "2026-07-09",
            "value": 120.753,
            "status": "present"
          },
          {
            "date": "2026-07-10",
            "value": 120.5046,
            "status": "present"
          },
          {
            "date": "2026-07-13",
            "value": 120.7413,
            "status": "present"
          },
          {
            "date": "2026-07-14",
            "value": 120.4728,
            "status": "present"
          },
          {
            "date": "2026-07-15",
            "value": 120.3088,
            "status": "present"
          },
          {
            "date": "2026-07-16",
            "value": 120.331,
            "status": "present"
          },
          {
            "date": "2026-07-17",
            "value": 120.5315,
            "status": "present"
          },
          {
            "date": "2026-07-20",
            "value": 120.5401,
            "status": "present"
          },
          {
            "date": "2026-07-21",
            "value": 120.5779,
            "status": "present"
          },
          {
            "date": "2026-07-22",
            "value": 120.5736,
            "status": "present"
          },
          {
            "date": "2026-07-23",
            "value": 120.9075,
            "status": "present"
          },
          {
            "date": "2026-07-24",
            "value": 120.7105,
            "status": "present"
          },
          {
            "date": "2026-07-27",
            "value": 120.7739,
            "status": "present"
          },
          {
            "date": "2026-07-28",
            "value": 120.6247,
            "status": "present"
          },
          {
            "date": "2026-07-29",
            "value": 120.7892,
            "status": "present"
          },
          {
            "date": "2026-07-30",
            "value": 119.6753,
            "status": "present"
          },
          {
            "date": "2026-07-31",
            "value": 119.7034,
            "status": "present"
          },
          {
            "date": "2026-08-03",
            "value": 119.6951,
            "status": "present"
          },
          {
            "date": "2026-08-04",
            "value": 119.5977,
            "status": "present"
          },
          {
            "date": "2026-08-05",
            "value": 119.3881,
            "status": "present"
          },
          {
            "date": "2026-08-06",
            "value": 119.5113,
            "status": "present"
          },
          {
            "date": "2026-08-07",
            "value": 119.0649,
            "status": "present"
          },
          {
            "date": "2026-08-10",
            "value": 119.1187,
            "status": "present"
          },
          {
            "date": "2026-08-11",
            "value": 119.179,
            "status": "present"
          },
          {
            "date": "2026-08-12",
            "value": 119.1179,
            "status": "present"
          },
          {
            "date": "2026-08-13",
            "value": 119.1848,
            "status": "present"
          },
          {
            "date": "2026-08-14",
            "value": 118.9028,
            "status": "present"
          },
          {
            "date": "2026-08-17",
            "value": 118.814,
            "status": "present"
          },
          {
            "date": "2026-08-18",
            "value": 118.9831,
            "status": "present"
          },
          {
            "date": "2026-08-19",
            "value": 118.3328,
            "status": "present"
          },
          {
            "date": "2026-08-20",
            "value": 118.2548,
            "status": "present"
          },
          {
            "date": "2026-08-21",
            "value": 118.0628,
            "status": "present"
          },
          {
            "date": "2026-08-24",
            "value": 118.3195,
            "status": "present"
          },
          {
            "date": "2026-08-25",
            "value": 118.2283,
            "status": "present"
          },
          {
            "date": "2026-08-26",
            "value": 118.4461,
            "status": "present"
          },
          {
            "date": "2026-08-27",
            "value": 118.3583,
            "status": "present"
          },
          {
            "date": "2026-08-28",
            "value": 118.7479,
            "status": "present"
          },
          {
            "date": "2026-08-31",
            "value": 118.5679,
            "status": "present"
          },
          {
            "date": "2026-09-01",
            "value": 118.6568,
            "status": "present"
          },
          {
            "date": "2026-09-02",
            "value": 118.5296,
            "status": "present"
          },
          {
            "date": "2026-09-03",
            "value": 118.127,
            "status": "present"
          },
          {
            "date": "2026-09-04",
            "value": 118.0732,
            "status": "present"
          },
          {
            "date": "2026-09-08",
            "value": 117.9127,
            "status": "present"
          },
          {
            "date": "2026-09-09",
            "value": 117.8834,
            "status": "present"
          },
          {
            "date": "2026-09-10",
            "value": 118.0787,
            "status": "present"
          },
          {
            "date": "2026-09-11",
            "value": 118.2126,
            "status": "present"
          },
          {
            "date": "2026-09-14",
            "value": 118.6923,
            "status": "present"
          },
          {
            "date": "2026-09-15",
            "value": 118.8822,
            "status": "present"
          },
          {
            "date": "2026-09-16",
            "value": 118.9206,
            "status": "present"
          },
          {
            "date": "2026-09-17",
            "value": 119.3489,
            "status": "present"
          },
          {
            "date": "2026-09-18",
            "value": 119.5133,
            "status": "present"
          }
        ]
      },
      {
        "key": "gold_volatility",
        "label": "CBOE gold ETF volatility index",
        "unit": "level",
        "color": "#fb923c",
        "latest_status": "present",
        "bands": [],
        "points": [
          {
            "date": "2025-08-04",
            "value": 17.07,
            "status": "present"
          },
          {
            "date": "2025-08-05",
            "value": 16.68,
            "status": "present"
          },
          {
            "date": "2025-08-06",
            "value": 16.42,
            "status": "present"
          },
          {
            "date": "2025-08-07",
            "value": 16.95,
            "status": "present"
          },
          {
            "date": "2025-08-08",
            "value": 16.36,
            "status": "present"
          },
          {
            "date": "2025-08-11",
            "value": 16.94,
            "status": "present"
          },
          {
            "date": "2025-08-12",
            "value": 16.35,
            "status": "present"
          },
          {
            "date": "2025-08-13",
            "value": 15.95,
            "status": "present"
          },
          {
            "date": "2025-08-14",
            "value": 15.33,
            "status": "present"
          },
          {
            "date": "2025-08-15",
            "value": 15.22,
            "status": "present"
          },
          {
            "date": "2025-08-18",
            "value": 14.9,
            "status": "present"
          },
          {
            "date": "2025-08-19",
            "value": 14.82,
            "status": "present"
          },
          {
            "date": "2025-08-20",
            "value": 15.4,
            "status": "present"
          },
          {
            "date": "2025-08-21",
            "value": 15.44,
            "status": "present"
          },
          {
            "date": "2025-08-22",
            "value": 15.15,
            "status": "present"
          },
          {
            "date": "2025-08-25",
            "value": 15.09,
            "status": "present"
          },
          {
            "date": "2025-08-26",
            "value": 15.88,
            "status": "present"
          },
          {
            "date": "2025-08-27",
            "value": 15.9,
            "status": "present"
          },
          {
            "date": "2025-08-28",
            "value": 16.34,
            "status": "present"
          },
          {
            "date": "2025-08-29",
            "value": 17.39,
            "status": "present"
          },
          {
            "date": "2025-09-02",
            "value": 19.81,
            "status": "present"
          },
          {
            "date": "2025-09-03",
            "value": 19.53,
            "status": "present"
          },
          {
            "date": "2025-09-04",
            "value": 18.33,
            "status": "present"
          },
          {
            "date": "2025-09-05",
            "value": 18.3,
            "status": "present"
          },
          {
            "date": "2025-09-08",
            "value": 19.09,
            "status": "present"
          },
          {
            "date": "2025-09-09",
            "value": 17.99,
            "status": "present"
          },
          {
            "date": "2025-09-10",
            "value": 17.37,
            "status": "present"
          },
          {
            "date": "2025-09-11",
            "value": 16.48,
            "status": "present"
          },
          {
            "date": "2025-09-12",
            "value": 16.38,
            "status": "present"
          },
          {
            "date": "2025-09-15",
            "value": 17.9,
            "status": "present"
          },
          {
            "date": "2025-09-16",
            "value": 18.37,
            "status": "present"
          },
          {
            "date": "2025-09-17",
            "value": 17.41,
            "status": "present"
          },
          {
            "date": "2025-09-18",
            "value": 16.45,
            "status": "present"
          },
          {
            "date": "2025-09-19",
            "value": 16.76,
            "status": "present"
          },
          {
            "date": "2025-09-22",
            "value": 18.43,
            "status": "present"
          },
          {
            "date": "2025-09-23",
            "value": 19.06,
            "status": "present"
          },
          {
            "date": "2025-09-24",
            "value": 18.3,
            "status": "present"
          },
          {
            "date": "2025-09-25",
            "value": 19.07,
            "status": "present"
          },
          {
            "date": "2025-09-26",
            "value": 18.59,
            "status": "present"
          },
          {
            "date": "2025-09-29",
            "value": 19.19,
            "status": "present"
          },
          {
            "date": "2025-09-30",
            "value": 19.95,
            "status": "present"
          },
          {
            "date": "2025-10-01",
            "value": 19.05,
            "status": "present"
          },
          {
            "date": "2025-10-02",
            "value": 18.05,
            "status": "present"
          },
          {
            "date": "2025-10-03",
            "value": 17.66,
            "status": "present"
          },
          {
            "date": "2025-10-06",
            "value": 19.51,
            "status": "present"
          },
          {
            "date": "2025-10-07",
            "value": 19.94,
            "status": "present"
          },
          {
            "date": "2025-10-08",
            "value": 21.81,
            "status": "present"
          },
          {
            "date": "2025-10-09",
            "value": 21.85,
            "status": "present"
          },
          {
            "date": "2025-10-10",
            "value": 23.78,
            "status": "present"
          },
          {
            "date": "2025-10-13",
            "value": 24.53,
            "status": "present"
          },
          {
            "date": "2025-10-14",
            "value": 26.11,
            "status": "present"
          },
          {
            "date": "2025-10-15",
            "value": 27.12,
            "status": "present"
          },
          {
            "date": "2025-10-16",
            "value": 32.78,
            "status": "present"
          },
          {
            "date": "2025-10-17",
            "value": 31.2,
            "status": "present"
          },
          {
            "date": "2025-10-20",
            "value": 31.43,
            "status": "present"
          },
          {
            "date": "2025-10-21",
            "value": 29.82,
            "status": "present"
          },
          {
            "date": "2025-10-22",
            "value": 27.19,
            "status": "present"
          },
          {
            "date": "2025-10-23",
            "value": 26.68,
            "status": "present"
          },
          {
            "date": "2025-10-24",
            "value": 24.75,
            "status": "present"
          },
          {
            "date": "2025-10-27",
            "value": 23.94,
            "status": "present"
          },
          {
            "date": "2025-10-28",
            "value": 24.03,
            "status": "present"
          },
          {
            "date": "2025-10-29",
            "value": 24.7,
            "status": "present"
          },
          {
            "date": "2025-10-30",
            "value": 24.82,
            "status": "present"
          },
          {
            "date": "2025-10-31",
            "value": 22.66,
            "status": "present"
          },
          {
            "date": "2025-11-03",
            "value": 21.38,
            "status": "present"
          },
          {
            "date": "2025-11-04",
            "value": 21.43,
            "status": "present"
          },
          {
            "date": "2025-11-05",
            "value": 20.15,
            "status": "present"
          },
          {
            "date": "2025-11-06",
            "value": 20.13,
            "status": "present"
          },
          {
            "date": "2025-11-07",
            "value": 20.36,
            "status": "present"
          },
          {
            "date": "2025-11-10",
            "value": 23.34,
            "status": "present"
          },
          {
            "date": "2025-11-11",
            "value": 23.33,
            "status": "present"
          },
          {
            "date": "2025-11-12",
            "value": 25.82,
            "status": "present"
          },
          {
            "date": "2025-11-13",
            "value": 24.82,
            "status": "present"
          },
          {
            "date": "2025-11-14",
            "value": 24.13,
            "status": "present"
          },
          {
            "date": "2025-11-17",
            "value": 24.07,
            "status": "present"
          },
          {
            "date": "2025-11-18",
            "value": 23.9,
            "status": "present"
          },
          {
            "date": "2025-11-19",
            "value": 23.89,
            "status": "present"
          },
          {
            "date": "2025-11-20",
            "value": 22.93,
            "status": "present"
          },
          {
            "date": "2025-11-21",
            "value": 21.93,
            "status": "present"
          },
          {
            "date": "2025-11-24",
            "value": 22.55,
            "status": "present"
          },
          {
            "date": "2025-11-25",
            "value": 22.4,
            "status": "present"
          },
          {
            "date": "2025-11-26",
            "value": 21.95,
            "status": "present"
          },
          {
            "date": "2025-11-28",
            "value": 22.87,
            "status": "present"
          },
          {
            "date": "2025-12-01",
            "value": 23.34,
            "status": "present"
          },
          {
            "date": "2025-12-02",
            "value": 22.49,
            "status": "present"
          },
          {
            "date": "2025-12-03",
            "value": 21.96,
            "status": "present"
          },
          {
            "date": "2025-12-04",
            "value": 20.57,
            "status": "present"
          },
          {
            "date": "2025-12-05",
            "value": 19.92,
            "status": "present"
          },
          {
            "date": "2025-12-08",
            "value": 19.58,
            "status": "present"
          },
          {
            "date": "2025-12-09",
            "value": 20.35,
            "status": "present"
          },
          {
            "date": "2025-12-10",
            "value": 20.2,
            "status": "present"
          },
          {
            "date": "2025-12-11",
            "value": 20.97,
            "status": "present"
          },
          {
            "date": "2025-12-12",
            "value": 21.46,
            "status": "present"
          },
          {
            "date": "2025-12-15",
            "value": 21.2,
            "status": "present"
          },
          {
            "date": "2025-12-16",
            "value": 20.18,
            "status": "present"
          },
          {
            "date": "2025-12-17",
            "value": 21.22,
            "status": "present"
          },
          {
            "date": "2025-12-18",
            "value": 21.31,
            "status": "present"
          },
          {
            "date": "2025-12-19",
            "value": 20.72,
            "status": "present"
          },
          {
            "date": "2025-12-22",
            "value": 23.8,
            "status": "present"
          },
          {
            "date": "2025-12-23",
            "value": 24.53,
            "status": "present"
          },
          {
            "date": "2025-12-24",
            "value": 23.81,
            "status": "present"
          },
          {
            "date": "2025-12-26",
            "value": 25.78,
            "status": "present"
          },
          {
            "date": "2025-12-29",
            "value": 25.71,
            "status": "present"
          },
          {
            "date": "2025-12-30",
            "value": 24.83,
            "status": "present"
          },
          {
            "date": "2025-12-31",
            "value": 23.92,
            "status": "present"
          },
          {
            "date": "2026-01-02",
            "value": 23.8,
            "status": "present"
          },
          {
            "date": "2026-01-05",
            "value": 24.25,
            "status": "present"
          },
          {
            "date": "2026-01-06",
            "value": 24.82,
            "status": "present"
          },
          {
            "date": "2026-01-07",
            "value": 24.13,
            "status": "present"
          },
          {
            "date": "2026-01-08",
            "value": 24.07,
            "status": "present"
          },
          {
            "date": "2026-01-09",
            "value": 23.43,
            "status": "present"
          },
          {
            "date": "2026-01-12",
            "value": 25.03,
            "status": "present"
          },
          {
            "date": "2026-01-13",
            "value": 23.76,
            "status": "present"
          },
          {
            "date": "2026-01-14",
            "value": 23.57,
            "status": "present"
          },
          {
            "date": "2026-01-15",
            "value": 22.06,
            "status": "present"
          },
          {
            "date": "2026-01-16",
            "value": 22.23,
            "status": "present"
          },
          {
            "date": "2026-01-20",
            "value": 24.79,
            "status": "present"
          },
          {
            "date": "2026-01-21",
            "value": 26.27,
            "status": "present"
          },
          {
            "date": "2026-01-22",
            "value": 28.11,
            "status": "present"
          },
          {
            "date": "2026-01-23",
            "value": 30.01,
            "status": "present"
          },
          {
            "date": "2026-01-26",
            "value": 32.7,
            "status": "present"
          },
          {
            "date": "2026-01-27",
            "value": 33.13,
            "status": "present"
          },
          {
            "date": "2026-01-28",
            "value": 39.67,
            "status": "present"
          },
          {
            "date": "2026-01-29",
            "value": 46.02,
            "status": "present"
          },
          {
            "date": "2026-01-30",
            "value": 44.08,
            "status": "present"
          },
          {
            "date": "2026-02-02",
            "value": 37.38,
            "status": "present"
          },
          {
            "date": "2026-02-03",
            "value": 41.04,
            "status": "present"
          },
          {
            "date": "2026-02-04",
            "value": 36.93,
            "status": "present"
          },
          {
            "date": "2026-02-05",
            "value": 35.53,
            "status": "present"
          },
          {
            "date": "2026-02-06",
            "value": 33.96,
            "status": "present"
          },
          {
            "date": "2026-02-09",
            "value": 32.84,
            "status": "present"
          },
          {
            "date": "2026-02-10",
            "value": 28.86,
            "status": "present"
          },
          {
            "date": "2026-02-11",
            "value": 29.38,
            "status": "present"
          },
          {
            "date": "2026-02-12",
            "value": 30.23,
            "status": "present"
          },
          {
            "date": "2026-02-13",
            "value": 30.84,
            "status": "present"
          },
          {
            "date": "2026-02-17",
            "value": 33.24,
            "status": "present"
          },
          {
            "date": "2026-02-18",
            "value": 33.75,
            "status": "present"
          },
          {
            "date": "2026-02-19",
            "value": 33.56,
            "status": "present"
          },
          {
            "date": "2026-02-20",
            "value": 36.44,
            "status": "present"
          },
          {
            "date": "2026-02-23",
            "value": 38.46,
            "status": "present"
          },
          {
            "date": "2026-02-24",
            "value": 37.55,
            "status": "present"
          },
          {
            "date": "2026-02-25",
            "value": 34.96,
            "status": "present"
          },
          {
            "date": "2026-02-26",
            "value": 33.07,
            "status": "present"
          },
          {
            "date": "2026-02-27",
            "value": 33.23,
            "status": "present"
          },
          {
            "date": "2026-03-02",
            "value": 34.83,
            "status": "present"
          },
          {
            "date": "2026-03-03",
            "value": 38.77,
            "status": "present"
          },
          {
            "date": "2026-03-04",
            "value": 36.48,
            "status": "present"
          },
          {
            "date": "2026-03-05",
            "value": 35.31,
            "status": "present"
          },
          {
            "date": "2026-03-06",
            "value": 34.26,
            "status": "present"
          },
          {
            "date": "2026-03-09",
            "value": 33.52,
            "status": "present"
          },
          {
            "date": "2026-03-10",
            "value": 32.11,
            "status": "present"
          },
          {
            "date": "2026-03-11",
            "value": 30.68,
            "status": "present"
          },
          {
            "date": "2026-03-12",
            "value": 31.09,
            "status": "present"
          },
          {
            "date": "2026-03-13",
            "value": 32.31,
            "status": "present"
          },
          {
            "date": "2026-03-16",
            "value": 30.56,
            "status": "present"
          },
          {
            "date": "2026-03-17",
            "value": 27.98,
            "status": "present"
          },
          {
            "date": "2026-03-18",
            "value": 29.42,
            "status": "present"
          },
          {
            "date": "2026-03-19",
            "value": 31.05,
            "status": "present"
          },
          {
            "date": "2026-03-20",
            "value": 35.25,
            "status": "present"
          },
          {
            "date": "2026-03-23",
            "value": 43.36,
            "status": "present"
          },
          {
            "date": "2026-03-24",
            "value": 41.9,
            "status": "present"
          },
          {
            "date": "2026-03-25",
            "value": 38.65,
            "status": "present"
          },
          {
            "date": "2026-03-26",
            "value": 45.07,
            "status": "present"
          },
          {
            "date": "2026-03-27",
            "value": 45.51,
            "status": "present"
          },
          {
            "date": "2026-03-30",
            "value": 42.71,
            "status": "present"
          },
          {
            "date": "2026-03-31",
            "value": 38.89,
            "status": "present"
          },
          {
            "date": "2026-04-01",
            "value": 36.11,
            "status": "present"
          },
          {
            "date": "2026-04-02",
            "value": 37.85,
            "status": "present"
          },
          {
            "date": "2026-04-06",
            "value": 37.04,
            "status": "present"
          },
          {
            "date": "2026-04-07",
            "value": 37.43,
            "status": "present"
          },
          {
            "date": "2026-04-08",
            "value": 34.21,
            "status": "present"
          },
          {
            "date": "2026-04-09",
            "value": 31.66,
            "status": "present"
          },
          {
            "date": "2026-04-10",
            "value": 30.46,
            "status": "present"
          },
          {
            "date": "2026-04-13",
            "value": 30.0,
            "status": "present"
          },
          {
            "date": "2026-04-14",
            "value": 31.04,
            "status": "present"
          },
          {
            "date": "2026-04-15",
            "value": 29.97,
            "status": "present"
          },
          {
            "date": "2026-04-16",
            "value": 28.65,
            "status": "present"
          },
          {
            "date": "2026-04-17",
            "value": 28.95,
            "status": "present"
          },
          {
            "date": "2026-04-20",
            "value": 28.46,
            "status": "present"
          },
          {
            "date": "2026-04-21",
            "value": 29.31,
            "status": "present"
          },
          {
            "date": "2026-04-22",
            "value": 27.09,
            "status": "present"
          },
          {
            "date": "2026-04-23",
            "value": 27.87,
            "status": "present"
          },
          {
            "date": "2026-04-24",
            "value": 25.88,
            "status": "present"
          },
          {
            "date": "2026-04-27",
            "value": 25.37,
            "status": "present"
          },
          {
            "date": "2026-04-28",
            "value": 26.19,
            "status": "present"
          },
          {
            "date": "2026-04-29",
            "value": 27.77,
            "status": "present"
          },
          {
            "date": "2026-04-30",
            "value": 26.64,
            "status": "present"
          },
          {
            "date": "2026-05-01",
            "value": 26.43,
            "status": "present"
          },
          {
            "date": "2026-05-04",
            "value": 27.92,
            "status": "present"
          },
          {
            "date": "2026-05-05",
            "value": 26.61,
            "status": "present"
          },
          {
            "date": "2026-05-06",
            "value": 26.34,
            "status": "present"
          },
          {
            "date": "2026-05-07",
            "value": 27.03,
            "status": "present"
          },
          {
            "date": "2026-05-08",
            "value": 26.48,
            "status": "present"
          },
          {
            "date": "2026-05-11",
            "value": 27.48,
            "status": "present"
          },
          {
            "date": "2026-05-12",
            "value": 27.16,
            "status": "present"
          },
          {
            "date": "2026-05-13",
            "value": 26.56,
            "status": "present"
          },
          {
            "date": "2026-05-14",
            "value": 25.79,
            "status": "present"
          },
          {
            "date": "2026-05-15",
            "value": 26.34,
            "status": "present"
          },
          {
            "date": "2026-05-18",
            "value": 26.2,
            "status": "present"
          },
          {
            "date": "2026-05-19",
            "value": 26.63,
            "status": "present"
          },
          {
            "date": "2026-05-20",
            "value": 25.17,
            "status": "present"
          },
          {
            "date": "2026-05-21",
            "value": 24.59,
            "status": "present"
          },
          {
            "date": "2026-05-22",
            "value": 23.86,
            "status": "present"
          },
          {
            "date": "2026-05-26",
            "value": 24.27,
            "status": "present"
          },
          {
            "date": "2026-05-27",
            "value": 24.47,
            "status": "present"
          },
          {
            "date": "2026-05-28",
            "value": 24.83,
            "status": "present"
          },
          {
            "date": "2026-05-29",
            "value": 24.91,
            "status": "present"
          },
          {
            "date": "2026-06-01",
            "value": 25.64,
            "status": "present"
          },
          {
            "date": "2026-06-02",
            "value": 24.44,
            "status": "present"
          },
          {
            "date": "2026-06-03",
            "value": 24.49,
            "status": "present"
          },
          {
            "date": "2026-06-04",
            "value": 23.87,
            "status": "present"
          },
          {
            "date": "2026-06-05",
            "value": 28.89,
            "status": "present"
          },
          {
            "date": "2026-06-08",
            "value": 27.17,
            "status": "present"
          },
          {
            "date": "2026-06-09",
            "value": 28.04,
            "status": "present"
          },
          {
            "date": "2026-06-10",
            "value": 32.18,
            "status": "present"
          },
          {
            "date": "2026-06-11",
            "value": 28.33,
            "status": "present"
          },
          {
            "date": "2026-06-12",
            "value": 26.85,
            "status": "present"
          },
          {
            "date": "2026-06-15",
            "value": 26.47,
            "status": "present"
          },
          {
            "date": "2026-06-16",
            "value": 25.18,
            "status": "present"
          },
          {
            "date": "2026-06-17",
            "value": 28.45,
            "status": "present"
          },
          {
            "date": "2026-06-18",
            "value": 27.9,
            "status": "present"
          },
          {
            "date": "2026-06-22",
            "value": 26.15,
            "status": "present"
          },
          {
            "date": "2026-06-23",
            "value": 27.41,
            "status": "present"
          },
          {
            "date": "2026-06-24",
            "value": 31.6,
            "status": "present"
          },
          {
            "date": "2026-06-25",
            "value": 29.58,
            "status": "present"
          },
          {
            "date": "2026-06-26",
            "value": 27.18,
            "status": "present"
          },
          {
            "date": "2026-06-29",
            "value": 27.7,
            "status": "present"
          },
          {
            "date": "2026-06-30",
            "value": 27.2,
            "status": "present"
          },
          {
            "date": "2026-07-01",
            "value": 27.12,
            "status": "present"
          },
          {
            "date": "2026-07-02",
            "value": 26.0,
            "status": "present"
          },
          {
            "date": "2026-07-06",
            "value": 25.33,
            "status": "present"
          },
          {
            "date": "2026-07-07",
            "value": 26.21,
            "status": "present"
          },
          {
            "date": "2026-07-08",
            "value": 27.6,
            "status": "present"
          },
          {
            "date": "2026-07-09",
            "value": 25.33,
            "status": "present"
          },
          {
            "date": "2026-07-10",
            "value": 23.95,
            "status": "present"
          },
          {
            "date": "2026-07-13",
            "value": 26.93,
            "status": "present"
          },
          {
            "date": "2026-07-14",
            "value": 25.02,
            "status": "present"
          },
          {
            "date": "2026-07-15",
            "value": 24.88,
            "status": "present"
          },
          {
            "date": "2026-07-16",
            "value": 26.65,
            "status": "present"
          },
          {
            "date": "2026-07-17",
            "value": 25.6,
            "status": "present"
          },
          {
            "date": "2026-07-20",
            "value": 25.37,
            "status": "present"
          },
          {
            "date": "2026-07-21",
            "value": 23.94,
            "status": "present"
          },
          {
            "date": "2026-07-22",
            "value": 24.02,
            "status": "present"
          },
          {
            "date": "2026-07-23",
            "value": 25.14,
            "status": "present"
          },
          {
            "date": "2026-07-24",
            "value": 24.33,
            "status": "present"
          },
          {
            "date": "2026-07-27",
            "value": 24.13,
            "status": "present"
          },
          {
            "date": "2026-07-28",
            "value": 24.62,
            "status": "present"
          },
          {
            "date": "2026-07-29",
            "value": 24.64,
            "status": "present"
          },
          {
            "date": "2026-07-30",
            "value": 24.48,
            "status": "present"
          },
          {
            "date": "2026-07-31",
            "value": 23.31,
            "status": "present"
          },
          {
            "date": "2026-08-03",
            "value": 23.65,
            "status": "present"
          },
          {
            "date": "2026-08-04",
            "value": 23.5,
            "status": "present"
          },
          {
            "date": "2026-08-05",
            "value": 25.59,
            "status": "present"
          },
          {
            "date": "2026-08-06",
            "value": 24.86,
            "status": "present"
          },
          {
            "date": "2026-08-07",
            "value": 25.64,
            "status": "present"
          },
          {
            "date": "2026-08-10",
            "value": 27.9,
            "status": "present"
          },
          {
            "date": "2026-08-11",
            "value": 25.99,
            "status": "present"
          },
          {
            "date": "2026-08-12",
            "value": 25.58,
            "status": "present"
          },
          {
            "date": "2026-08-13",
            "value": 23.87,
            "status": "present"
          },
          {
            "date": "2026-08-14",
            "value": 23.92,
            "status": "present"
          },
          {
            "date": "2026-08-17",
            "value": 25.12,
            "status": "present"
          },
          {
            "date": "2026-08-18",
            "value": 23.98,
            "status": "present"
          },
          {
            "date": "2026-08-19",
            "value": 26.68,
            "status": "present"
          },
          {
            "date": "2026-08-20",
            "value": 27.28,
            "status": "present"
          },
          {
            "date": "2026-08-21",
            "value": 27.29,
            "status": "present"
          },
          {
            "date": "2026-08-24",
            "value": 28.28,
            "status": "present"
          },
          {
            "date": "2026-08-25",
            "value": 27.69,
            "status": "present"
          },
          {
            "date": "2026-08-26",
            "value": 26.96,
            "status": "present"
          },
          {
            "date": "2026-08-27",
            "value": 26.8,
            "status": "present"
          },
          {
            "date": "2026-08-28",
            "value": 25.17,
            "status": "present"
          },
          {
            "date": "2026-08-31",
            "value": 24.4,
            "status": "present"
          },
          {
            "date": "2026-09-01",
            "value": 25.43,
            "status": "present"
          },
          {
            "date": "2026-09-02",
            "value": 26.14,
            "status": "present"
          },
          {
            "date": "2026-09-03",
            "value": 27.18,
            "status": "present"
          },
          {
            "date": "2026-09-04",
            "value": 26.63,
            "status": "present"
          },
          {
            "date": "2026-09-08",
            "value": 27.26,
            "status": "present"
          },
          {
            "date": "2026-09-09",
            "value": 27.79,
            "status": "present"
          },
          {
            "date": "2026-09-10",
            "value": 28.48,
            "status": "present"
          },
          {
            "date": "2026-09-11",
            "value": 25.68,
            "status": "present"
          },
          {
            "date": "2026-09-14",
            "value": 26.54,
            "status": "present"
          },
          {
            "date": "2026-09-15",
            "value": 26.9,
            "status": "present"
          },
          {
            "date": "2026-09-16",
            "value": 26.55,
            "status": "present"
          },
          {
            "date": "2026-09-17",
            "value": 24.98,
            "status": "present"
          },
          {
            "date": "2026-09-18",
            "value": 23.31,
            "status": "present"
          },
          {
            "date": "2026-09-21",
            "value": 23.38,
            "status": "present"
          },
          {
            "date": "2026-09-22",
            "value": 23.59,
            "status": "present"
          }
        ]
      },
      {
        "key": "bitcoin_usd",
        "label": "Bitcoin (Coinbase USD)",
        "unit": "usd",
        "color": "#f97316",
        "latest_status": "present",
        "bands": [],
        "points": [
          {
            "date": "2025-08-03",
            "value": 115051.85,
            "status": "present"
          },
          {
            "date": "2025-08-04",
            "value": 114112.95,
            "status": "present"
          },
          {
            "date": "2025-08-05",
            "value": 115028.83,
            "status": "present"
          },
          {
            "date": "2025-08-06",
            "value": 117515.49,
            "status": "present"
          },
          {
            "date": "2025-08-07",
            "value": 116683.79,
            "status": "present"
          },
          {
            "date": "2025-08-08",
            "value": 116492.51,
            "status": "present"
          },
          {
            "date": "2025-08-09",
            "value": 119309.37,
            "status": "present"
          },
          {
            "date": "2025-08-10",
            "value": 118701.84,
            "status": "present"
          },
          {
            "date": "2025-08-11",
            "value": 120113.18,
            "status": "present"
          },
          {
            "date": "2025-08-12",
            "value": 123365.63,
            "status": "present"
          },
          {
            "date": "2025-08-13",
            "value": 118389.79,
            "status": "present"
          },
          {
            "date": "2025-08-14",
            "value": 117436.96,
            "status": "present"
          },
          {
            "date": "2025-08-15",
            "value": 117455.68,
            "status": "present"
          },
          {
            "date": "2025-08-16",
            "value": 117488.6,
            "status": "present"
          },
          {
            "date": "2025-08-17",
            "value": 116286.76,
            "status": "present"
          },
          {
            "date": "2025-08-18",
            "value": 112856.19,
            "status": "present"
          },
          {
            "date": "2025-08-19",
            "value": 114276.0,
            "status": "present"
          },
          {
            "date": "2025-08-20",
            "value": 112480.3,
            "status": "present"
          },
          {
            "date": "2025-08-21",
            "value": 116908.68,
            "status": "present"
          },
          {
            "date": "2025-08-22",
            "value": 115383.87,
            "status": "present"
          },
          {
            "date": "2025-08-23",
            "value": 113478.0,
            "status": "present"
          },
          {
            "date": "2025-08-24",
            "value": 110127.74,
            "status": "present"
          },
          {
            "date": "2025-08-25",
            "value": 111788.01,
            "status": "present"
          },
          {
            "date": "2025-08-26",
            "value": 111253.21,
            "status": "present"
          },
          {
            "date": "2025-08-27",
            "value": 112574.85,
            "status": "present"
          },
          {
            "date": "2025-08-28",
            "value": 108378.32,
            "status": "present"
          },
          {
            "date": "2025-08-29",
            "value": 108827.93,
            "status": "present"
          },
          {
            "date": "2025-08-30",
            "value": 108247.95,
            "status": "present"
          },
          {
            "date": "2025-08-31",
            "value": 109240.55,
            "status": "present"
          },
          {
            "date": "2025-09-01",
            "value": 111247.94,
            "status": "present"
          },
          {
            "date": "2025-09-02",
            "value": 111756.41,
            "status": "present"
          },
          {
            "date": "2025-09-03",
            "value": 110720.79,
            "status": "present"
          },
          {
            "date": "2025-09-04",
            "value": 110670.02,
            "status": "present"
          },
          {
            "date": "2025-09-05",
            "value": 110212.6,
            "status": "present"
          },
          {
            "date": "2025-09-06",
            "value": 111129.61,
            "status": "present"
          },
          {
            "date": "2025-09-07",
            "value": 112072.57,
            "status": "present"
          },
          {
            "date": "2025-09-08",
            "value": 111549.32,
            "status": "present"
          },
          {
            "date": "2025-09-09",
            "value": 113983.97,
            "status": "present"
          },
          {
            "date": "2025-09-10",
            "value": 115540.0,
            "status": "present"
          },
          {
            "date": "2025-09-11",
            "value": 116106.03,
            "status": "present"
          },
          {
            "date": "2025-09-12",
            "value": 115968.35,
            "status": "present"
          },
          {
            "date": "2025-09-13",
            "value": 115314.13,
            "status": "present"
          },
          {
            "date": "2025-09-14",
            "value": 115381.08,
            "status": "present"
          },
          {
            "date": "2025-09-15",
            "value": 116832.56,
            "status": "present"
          },
          {
            "date": "2025-09-16",
            "value": 116484.4,
            "status": "present"
          },
          {
            "date": "2025-09-17",
            "value": 117117.99,
            "status": "present"
          },
          {
            "date": "2025-09-18",
            "value": 115690.55,
            "status": "present"
          },
          {
            "date": "2025-09-19",
            "value": 115752.4,
            "status": "present"
          },
          {
            "date": "2025-09-20",
            "value": 115282.27,
            "status": "present"
          },
          {
            "date": "2025-09-21",
            "value": 112736.59,
            "status": "present"
          },
          {
            "date": "2025-09-22",
            "value": 112017.21,
            "status": "present"
          },
          {
            "date": "2025-09-23",
            "value": 113348.17,
            "status": "present"
          },
          {
            "date": "2025-09-24",
            "value": 109035.72,
            "status": "present"
          },
          {
            "date": "2025-09-25",
            "value": 109697.29,
            "status": "present"
          },
          {
            "date": "2025-09-26",
            "value": 109681.16,
            "status": "present"
          },
          {
            "date": "2025-09-27",
            "value": 112197.67,
            "status": "present"
          },
          {
            "date": "2025-09-28",
            "value": 114365.07,
            "status": "present"
          },
          {
            "date": "2025-09-29",
            "value": 114067.71,
            "status": "present"
          },
          {
            "date": "2025-09-30",
            "value": 118659.97,
            "status": "present"
          },
          {
            "date": "2025-10-01",
            "value": 120621.32,
            "status": "present"
          },
          {
            "date": "2025-10-02",
            "value": 122318.4,
            "status": "present"
          },
          {
            "date": "2025-10-03",
            "value": 122458.56,
            "status": "present"
          },
          {
            "date": "2025-10-04",
            "value": 123520.79,
            "status": "present"
          },
          {
            "date": "2025-10-05",
            "value": 124720.09,
            "status": "present"
          },
          {
            "date": "2025-10-06",
            "value": 121393.95,
            "status": "present"
          },
          {
            "date": "2025-10-07",
            "value": 123343.25,
            "status": "present"
          },
          {
            "date": "2025-10-08",
            "value": 121714.51,
            "status": "present"
          },
          {
            "date": "2025-10-09",
            "value": 112980.28,
            "status": "present"
          },
          {
            "date": "2025-10-10",
            "value": 110768.89,
            "status": "present"
          },
          {
            "date": "2025-10-11",
            "value": 115067.98,
            "status": "present"
          },
          {
            "date": "2025-10-12",
            "value": 115274.03,
            "status": "present"
          },
          {
            "date": "2025-10-13",
            "value": 113068.0,
            "status": "present"
          },
          {
            "date": "2025-10-14",
            "value": 110804.12,
            "status": "present"
          },
          {
            "date": "2025-10-15",
            "value": 108198.0,
            "status": "present"
          },
          {
            "date": "2025-10-16",
            "value": 106463.3,
            "status": "present"
          },
          {
            "date": "2025-10-17",
            "value": 107208.91,
            "status": "present"
          },
          {
            "date": "2025-10-18",
            "value": 108676.78,
            "status": "present"
          },
          {
            "date": "2025-10-19",
            "value": 110568.06,
            "status": "present"
          },
          {
            "date": "2025-10-20",
            "value": 108362.27,
            "status": "present"
          },
          {
            "date": "2025-10-21",
            "value": 107585.98,
            "status": "present"
          },
          {
            "date": "2025-10-22",
            "value": 110116.03,
            "status": "present"
          },
          {
            "date": "2025-10-23",
            "value": 111042.13,
            "status": "present"
          },
          {
            "date": "2025-10-24",
            "value": 111666.21,
            "status": "present"
          },
          {
            "date": "2025-10-25",
            "value": 114548.09,
            "status": "present"
          },
          {
            "date": "2025-10-26",
            "value": 114087.06,
            "status": "present"
          },
          {
            "date": "2025-10-27",
            "value": 112906.75,
            "status": "present"
          },
          {
            "date": "2025-10-28",
            "value": 110032.13,
            "status": "present"
          },
          {
            "date": "2025-10-29",
            "value": 108308.18,
            "status": "present"
          },
          {
            "date": "2025-10-30",
            "value": 109555.27,
            "status": "present"
          },
          {
            "date": "2025-10-31",
            "value": 110052.25,
            "status": "present"
          },
          {
            "date": "2025-11-01",
            "value": 110536.01,
            "status": "present"
          },
          {
            "date": "2025-11-02",
            "value": 106557.98,
            "status": "present"
          },
          {
            "date": "2025-11-03",
            "value": 101468.15,
            "status": "present"
          },
          {
            "date": "2025-11-04",
            "value": 100291.85,
            "status": "present"
          },
          {
            "date": "2025-11-05",
            "value": 103472.0,
            "status": "present"
          },
          {
            "date": "2025-11-06",
            "value": 101447.93,
            "status": "present"
          },
          {
            "date": "2025-11-07",
            "value": 102882.15,
            "status": "present"
          },
          {
            "date": "2025-11-08",
            "value": 101838.43,
            "status": "present"
          },
          {
            "date": "2025-11-09",
            "value": 106496.49,
            "status": "present"
          },
          {
            "date": "2025-11-10",
            "value": 106071.01,
            "status": "present"
          },
          {
            "date": "2025-11-11",
            "value": 102734.93,
            "status": "present"
          },
          {
            "date": "2025-11-12",
            "value": 101945.44,
            "status": "present"
          },
          {
            "date": "2025-11-13",
            "value": 98906.39,
            "status": "present"
          },
          {
            "date": "2025-11-14",
            "value": 94829.23,
            "status": "present"
          },
          {
            "date": "2025-11-15",
            "value": 95095.36,
            "status": "present"
          },
          {
            "date": "2025-11-16",
            "value": 95197.96,
            "status": "present"
          },
          {
            "date": "2025-11-17",
            "value": 91855.7,
            "status": "present"
          },
          {
            "date": "2025-11-18",
            "value": 92184.51,
            "status": "present"
          },
          {
            "date": "2025-11-19",
            "value": 91783.66,
            "status": "present"
          },
          {
            "date": "2025-11-20",
            "value": 87214.0,
            "status": "present"
          },
          {
            "date": "2025-11-21",
            "value": 84826.0,
            "status": "present"
          },
          {
            "date": "2025-11-22",
            "value": 85133.92,
            "status": "present"
          },
          {
            "date": "2025-11-23",
            "value": 86499.25,
            "status": "present"
          },
          {
            "date": "2025-11-24",
            "value": 87981.12,
            "status": "present"
          },
          {
            "date": "2025-11-25",
            "value": 87366.12,
            "status": "present"
          },
          {
            "date": "2025-11-26",
            "value": 90635.53,
            "status": "present"
          },
          {
            "date": "2025-11-27",
            "value": 91094.0,
            "status": "present"
          },
          {
            "date": "2025-11-28",
            "value": 90919.78,
            "status": "present"
          },
          {
            "date": "2025-11-29",
            "value": 90946.75,
            "status": "present"
          },
          {
            "date": "2025-11-30",
            "value": 87446.89,
            "status": "present"
          },
          {
            "date": "2025-12-01",
            "value": 86628.25,
            "status": "present"
          },
          {
            "date": "2025-12-02",
            "value": 91532.75,
            "status": "present"
          },
          {
            "date": "2025-12-03",
            "value": 93150.03,
            "status": "present"
          },
          {
            "date": "2025-12-04",
            "value": 92353.31,
            "status": "present"
          },
          {
            "date": "2025-12-05",
            "value": 89347.18,
            "status": "present"
          },
          {
            "date": "2025-12-06",
            "value": 89480.46,
            "status": "present"
          },
          {
            "date": "2025-12-07",
            "value": 90435.42,
            "status": "present"
          },
          {
            "date": "2025-12-08",
            "value": 90338.37,
            "status": "present"
          },
          {
            "date": "2025-12-09",
            "value": 92243.57,
            "status": "present"
          },
          {
            "date": "2025-12-10",
            "value": 91194.97,
            "status": "present"
          },
          {
            "date": "2025-12-11",
            "value": 91784.59,
            "status": "present"
          },
          {
            "date": "2025-12-12",
            "value": 90350.0,
            "status": "present"
          },
          {
            "date": "2025-12-13",
            "value": 90326.01,
            "status": "present"
          },
          {
            "date": "2025-12-14",
            "value": 88460.01,
            "status": "present"
          },
          {
            "date": "2025-12-15",
            "value": 85950.0,
            "status": "present"
          },
          {
            "date": "2025-12-16",
            "value": 87599.87,
            "status": "present"
          },
          {
            "date": "2025-12-17",
            "value": 86064.34,
            "status": "present"
          },
          {
            "date": "2025-12-18",
            "value": 85352.25,
            "status": "present"
          },
          {
            "date": "2025-12-19",
            "value": 88016.09,
            "status": "present"
          },
          {
            "date": "2025-12-20",
            "value": 88322.39,
            "status": "present"
          },
          {
            "date": "2025-12-21",
            "value": 88716.0,
            "status": "present"
          },
          {
            "date": "2025-12-22",
            "value": 88837.97,
            "status": "present"
          },
          {
            "date": "2025-12-23",
            "value": 87594.74,
            "status": "present"
          },
          {
            "date": "2025-12-24",
            "value": 87516.0,
            "status": "present"
          },
          {
            "date": "2025-12-25",
            "value": 87159.35,
            "status": "present"
          },
          {
            "date": "2025-12-26",
            "value": 87280.65,
            "status": "present"
          },
          {
            "date": "2025-12-27",
            "value": 87844.66,
            "status": "present"
          },
          {
            "date": "2025-12-28",
            "value": 88029.48,
            "status": "present"
          },
          {
            "date": "2025-12-29",
            "value": 87055.23,
            "status": "present"
          },
          {
            "date": "2025-12-30",
            "value": 88185.26,
            "status": "present"
          },
          {
            "date": "2025-12-31",
            "value": 87696.0,
            "status": "present"
          },
          {
            "date": "2026-01-01",
            "value": 88642.88,
            "status": "present"
          },
          {
            "date": "2026-01-02",
            "value": 90112.01,
            "status": "present"
          },
          {
            "date": "2026-01-03",
            "value": 91351.98,
            "status": "present"
          },
          {
            "date": "2026-01-04",
            "value": 92392.38,
            "status": "present"
          },
          {
            "date": "2026-01-05",
            "value": 93891.94,
            "status": "present"
          },
          {
            "date": "2026-01-06",
            "value": 92771.99,
            "status": "present"
          },
          {
            "date": "2026-01-07",
            "value": 91377.92,
            "status": "present"
          },
          {
            "date": "2026-01-08",
            "value": 91246.53,
            "status": "present"
          },
          {
            "date": "2026-01-09",
            "value": 90476.01,
            "status": "present"
          },
          {
            "date": "2026-01-10",
            "value": 90509.91,
            "status": "present"
          },
          {
            "date": "2026-01-11",
            "value": 91538.05,
            "status": "present"
          },
          {
            "date": "2026-01-12",
            "value": 91293.98,
            "status": "present"
          },
          {
            "date": "2026-01-13",
            "value": 95222.7,
            "status": "present"
          },
          {
            "date": "2026-01-14",
            "value": 96852.91,
            "status": "present"
          },
          {
            "date": "2026-01-15",
            "value": 95569.99,
            "status": "present"
          },
          {
            "date": "2026-01-16",
            "value": 95467.76,
            "status": "present"
          },
          {
            "date": "2026-01-17",
            "value": 95015.57,
            "status": "present"
          },
          {
            "date": "2026-01-18",
            "value": 92624.74,
            "status": "present"
          },
          {
            "date": "2026-01-19",
            "value": 92572.21,
            "status": "present"
          },
          {
            "date": "2026-01-20",
            "value": 88916.02,
            "status": "present"
          },
          {
            "date": "2026-01-21",
            "value": 89936.47,
            "status": "present"
          },
          {
            "date": "2026-01-22",
            "value": 89522.33,
            "status": "present"
          },
          {
            "date": "2026-01-23",
            "value": 89365.99,
            "status": "present"
          },
          {
            "date": "2026-01-24",
            "value": 89155.13,
            "status": "present"
          },
          {
            "date": "2026-01-25",
            "value": 86978.89,
            "status": "present"
          },
          {
            "date": "2026-01-26",
            "value": 88136.48,
            "status": "present"
          },
          {
            "date": "2026-01-27",
            "value": 89296.0,
            "status": "present"
          },
          {
            "date": "2026-01-28",
            "value": 88963.96,
            "status": "present"
          },
          {
            "date": "2026-01-29",
            "value": 83943.96,
            "status": "present"
          },
          {
            "date": "2026-01-30",
            "value": 83986.02,
            "status": "present"
          },
          {
            "date": "2026-01-31",
            "value": 78727.3,
            "status": "present"
          },
          {
            "date": "2026-02-01",
            "value": 77831.33,
            "status": "present"
          },
          {
            "date": "2026-02-02",
            "value": 78938.16,
            "status": "present"
          },
          {
            "date": "2026-02-03",
            "value": 76313.98,
            "status": "present"
          },
          {
            "date": "2026-02-04",
            "value": 72853.79,
            "status": "present"
          },
          {
            "date": "2026-02-05",
            "value": 63845.99,
            "status": "present"
          },
          {
            "date": "2026-02-06",
            "value": 69936.2,
            "status": "present"
          },
          {
            "date": "2026-02-07",
            "value": 69199.99,
            "status": "present"
          },
          {
            "date": "2026-02-08",
            "value": 70477.92,
            "status": "present"
          },
          {
            "date": "2026-02-09",
            "value": 69986.8,
            "status": "present"
          },
          {
            "date": "2026-02-10",
            "value": 69219.0,
            "status": "present"
          },
          {
            "date": "2026-02-11",
            "value": 67479.13,
            "status": "present"
          },
          {
            "date": "2026-02-12",
            "value": 66001.99,
            "status": "present"
          },
          {
            "date": "2026-02-13",
            "value": 68970.18,
            "status": "present"
          },
          {
            "date": "2026-02-14",
            "value": 69801.43,
            "status": "present"
          },
          {
            "date": "2026-02-15",
            "value": 68913.72,
            "status": "present"
          },
          {
            "date": "2026-02-16",
            "value": 68810.28,
            "status": "present"
          },
          {
            "date": "2026-02-17",
            "value": 67191.37,
            "status": "present"
          },
          {
            "date": "2026-02-18",
            "value": 66533.36,
            "status": "present"
          },
          {
            "date": "2026-02-19",
            "value": 67214.29,
            "status": "present"
          },
          {
            "date": "2026-02-20",
            "value": 67885.32,
            "status": "present"
          },
          {
            "date": "2026-02-21",
            "value": 67969.48,
            "status": "present"
          },
          {
            "date": "2026-02-22",
            "value": 66238.9,
            "status": "present"
          },
          {
            "date": "2026-02-23",
            "value": 64743.99,
            "status": "present"
          },
          {
            "date": "2026-02-24",
            "value": 64290.01,
            "status": "present"
          },
          {
            "date": "2026-02-25",
            "value": 68448.27,
            "status": "present"
          },
          {
            "date": "2026-02-26",
            "value": 67068.86,
            "status": "present"
          },
          {
            "date": "2026-02-27",
            "value": 65950.0,
            "status": "present"
          },
          {
            "date": "2026-02-28",
            "value": 66680.36,
            "status": "present"
          },
          {
            "date": "2026-03-01",
            "value": 66474.29,
            "status": "present"
          },
          {
            "date": "2026-03-02",
            "value": 69016.92,
            "status": "present"
          },
          {
            "date": "2026-03-03",
            "value": 68222.81,
            "status": "present"
          },
          {
            "date": "2026-03-04",
            "value": 72776.66,
            "status": "present"
          },
          {
            "date": "2026-03-05",
            "value": 70955.49,
            "status": "present"
          },
          {
            "date": "2026-03-06",
            "value": 68350.0,
            "status": "present"
          },
          {
            "date": "2026-03-07",
            "value": 67193.87,
            "status": "present"
          },
          {
            "date": "2026-03-08",
            "value": 66055.14,
            "status": "present"
          },
          {
            "date": "2026-03-09",
            "value": 68480.54,
            "status": "present"
          },
          {
            "date": "2026-03-10",
            "value": 69847.95,
            "status": "present"
          },
          {
            "date": "2026-03-11",
            "value": 70210.72,
            "status": "present"
          },
          {
            "date": "2026-03-12",
            "value": 70500.54,
            "status": "present"
          },
          {
            "date": "2026-03-13",
            "value": 70838.78,
            "status": "present"
          },
          {
            "date": "2026-03-14",
            "value": 71118.53,
            "status": "present"
          },
          {
            "date": "2026-03-15",
            "value": 72953.27,
            "status": "present"
          },
          {
            "date": "2026-03-16",
            "value": 74758.54,
            "status": "present"
          },
          {
            "date": "2026-03-17",
            "value": 73845.35,
            "status": "present"
          },
          {
            "date": "2026-03-18",
            "value": 71204.95,
            "status": "present"
          },
          {
            "date": "2026-03-19",
            "value": 69858.95,
            "status": "present"
          },
          {
            "date": "2026-03-20",
            "value": 70560.99,
            "status": "present"
          },
          {
            "date": "2026-03-21",
            "value": 68398.68,
            "status": "present"
          },
          {
            "date": "2026-03-22",
            "value": 67977.71,
            "status": "present"
          },
          {
            "date": "2026-03-23",
            "value": 70906.0,
            "status": "present"
          },
          {
            "date": "2026-03-24",
            "value": 70555.44,
            "status": "present"
          },
          {
            "date": "2026-03-25",
            "value": 71277.56,
            "status": "present"
          },
          {
            "date": "2026-03-26",
            "value": 68762.2,
            "status": "present"
          },
          {
            "date": "2026-03-27",
            "value": 66390.02,
            "status": "present"
          },
          {
            "date": "2026-03-28",
            "value": 66392.04,
            "status": "present"
          },
          {
            "date": "2026-03-29",
            "value": 65862.79,
            "status": "present"
          },
          {
            "date": "2026-03-30",
            "value": 66683.77,
            "status": "present"
          },
          {
            "date": "2026-03-31",
            "value": 68133.96,
            "status": "present"
          },
          {
            "date": "2026-04-01",
            "value": 68100.65,
            "status": "present"
          },
          {
            "date": "2026-04-02",
            "value": 66959.99,
            "status": "present"
          },
          {
            "date": "2026-04-03",
            "value": 66911.51,
            "status": "present"
          },
          {
            "date": "2026-04-04",
            "value": 67284.16,
            "status": "present"
          },
          {
            "date": "2026-04-05",
            "value": 69279.05,
            "status": "present"
          },
          {
            "date": "2026-04-06",
            "value": 68909.06,
            "status": "present"
          },
          {
            "date": "2026-04-07",
            "value": 71872.04,
            "status": "present"
          },
          {
            "date": "2026-04-08",
            "value": 71015.98,
            "status": "present"
          },
          {
            "date": "2026-04-09",
            "value": 71798.73,
            "status": "present"
          },
          {
            "date": "2026-04-10",
            "value": 72905.26,
            "status": "present"
          },
          {
            "date": "2026-04-11",
            "value": 72997.99,
            "status": "present"
          },
          {
            "date": "2026-04-12",
            "value": 70661.26,
            "status": "present"
          },
          {
            "date": "2026-04-13",
            "value": 74505.1,
            "status": "present"
          },
          {
            "date": "2026-04-14",
            "value": 74386.01,
            "status": "present"
          },
          {
            "date": "2026-04-15",
            "value": 74725.02,
            "status": "present"
          },
          {
            "date": "2026-04-16",
            "value": 75124.72,
            "status": "present"
          },
          {
            "date": "2026-04-17",
            "value": 75736.82,
            "status": "present"
          },
          {
            "date": "2026-04-18",
            "value": 73823.14,
            "status": "present"
          },
          {
            "date": "2026-04-19",
            "value": 74201.44,
            "status": "present"
          },
          {
            "date": "2026-04-20",
            "value": 75854.66,
            "status": "present"
          },
          {
            "date": "2026-04-21",
            "value": 76434.02,
            "status": "present"
          },
          {
            "date": "2026-04-22",
            "value": 78416.36,
            "status": "present"
          },
          {
            "date": "2026-04-23",
            "value": 78281.09,
            "status": "present"
          },
          {
            "date": "2026-04-24",
            "value": 77490.01,
            "status": "present"
          },
          {
            "date": "2026-04-25",
            "value": 77650.51,
            "status": "present"
          },
          {
            "date": "2026-04-26",
            "value": 78818.4,
            "status": "present"
          },
          {
            "date": "2026-04-27",
            "value": 77302.47,
            "status": "present"
          },
          {
            "date": "2026-04-28",
            "value": 76361.99,
            "status": "present"
          },
          {
            "date": "2026-04-29",
            "value": 75794.4,
            "status": "present"
          },
          {
            "date": "2026-04-30",
            "value": 76442.08,
            "status": "present"
          },
          {
            "date": "2026-05-01",
            "value": 78285.16,
            "status": "present"
          },
          {
            "date": "2026-05-02",
            "value": 78705.06,
            "status": "present"
          },
          {
            "date": "2026-05-03",
            "value": 78496.31,
            "status": "present"
          },
          {
            "date": "2026-05-04",
            "value": 79926.19,
            "status": "present"
          },
          {
            "date": "2026-05-05",
            "value": 81028.26,
            "status": "present"
          },
          {
            "date": "2026-05-06",
            "value": 81476.51,
            "status": "present"
          },
          {
            "date": "2026-05-07",
            "value": 80047.2,
            "status": "present"
          },
          {
            "date": "2026-05-08",
            "value": 80150.27,
            "status": "present"
          },
          {
            "date": "2026-05-09",
            "value": 80645.62,
            "status": "present"
          },
          {
            "date": "2026-05-10",
            "value": 82103.78,
            "status": "present"
          },
          {
            "date": "2026-05-11",
            "value": 81734.25,
            "status": "present"
          },
          {
            "date": "2026-05-12",
            "value": 80414.77,
            "status": "present"
          },
          {
            "date": "2026-05-13",
            "value": 79371.63,
            "status": "present"
          },
          {
            "date": "2026-05-14",
            "value": 79142.38,
            "status": "present"
          },
          {
            "date": "2026-05-15",
            "value": 79026.0,
            "status": "present"
          },
          {
            "date": "2026-05-16",
            "value": 78183.58,
            "status": "present"
          },
          {
            "date": "2026-05-17",
            "value": 77269.08,
            "status": "present"
          },
          {
            "date": "2026-05-18",
            "value": 76952.14,
            "status": "present"
          },
          {
            "date": "2026-05-19",
            "value": 76799.23,
            "status": "present"
          },
          {
            "date": "2026-05-20",
            "value": 77494.61,
            "status": "present"
          },
          {
            "date": "2026-05-21",
            "value": 77451.06,
            "status": "present"
          },
          {
            "date": "2026-05-22",
            "value": 75478.44,
            "status": "present"
          },
          {
            "date": "2026-05-23",
            "value": 76627.99,
            "status": "present"
          },
          {
            "date": "2026-05-24",
            "value": 77078.18,
            "status": "present"
          },
          {
            "date": "2026-05-25",
            "value": 77196.83,
            "status": "present"
          },
          {
            "date": "2026-05-26",
            "value": 75834.53,
            "status": "present"
          },
          {
            "date": "2026-05-27",
            "value": 74422.7,
            "status": "present"
          },
          {
            "date": "2026-05-28",
            "value": 74025.1,
            "status": "present"
          },
          {
            "date": "2026-05-29",
            "value": 73897.41,
            "status": "present"
          },
          {
            "date": "2026-05-30",
            "value": 73758.31,
            "status": "present"
          },
          {
            "date": "2026-05-31",
            "value": 73688.35,
            "status": "present"
          },
          {
            "date": "2026-06-01",
            "value": 71263.63,
            "status": "present"
          },
          {
            "date": "2026-06-02",
            "value": 66661.02,
            "status": "present"
          },
          {
            "date": "2026-06-03",
            "value": 64257.19,
            "status": "present"
          },
          {
            "date": "2026-06-04",
            "value": 63742.66,
            "status": "present"
          },
          {
            "date": "2026-06-05",
            "value": 61272.32,
            "status": "present"
          },
          {
            "date": "2026-06-06",
            "value": 60881.64,
            "status": "present"
          },
          {
            "date": "2026-06-07",
            "value": 63216.78,
            "status": "present"
          },
          {
            "date": "2026-06-08",
            "value": 63049.86,
            "status": "present"
          },
          {
            "date": "2026-06-09",
            "value": 61751.94,
            "status": "present"
          },
          {
            "date": "2026-06-10",
            "value": 61570.02,
            "status": "present"
          },
          {
            "date": "2026-06-11",
            "value": 63482.72,
            "status": "present"
          },
          {
            "date": "2026-06-12",
            "value": 63554.96,
            "status": "present"
          },
          {
            "date": "2026-06-13",
            "value": 64374.02,
            "status": "present"
          },
          {
            "date": "2026-06-14",
            "value": 65605.04,
            "status": "present"
          },
          {
            "date": "2026-06-15",
            "value": 66231.94,
            "status": "present"
          },
          {
            "date": "2026-06-16",
            "value": 65679.13,
            "status": "present"
          },
          {
            "date": "2026-06-17",
            "value": 64529.96,
            "status": "present"
          },
          {
            "date": "2026-06-18",
            "value": 62852.71,
            "status": "present"
          },
          {
            "date": "2026-06-19",
            "value": 63522.76,
            "status": "present"
          },
          {
            "date": "2026-06-20",
            "value": 64180.0,
            "status": "present"
          },
          {
            "date": "2026-06-21",
            "value": 63321.17,
            "status": "present"
          },
          {
            "date": "2026-06-22",
            "value": 63932.91,
            "status": "present"
          },
          {
            "date": "2026-06-23",
            "value": 62689.99,
            "status": "present"
          },
          {
            "date": "2026-06-24",
            "value": 60950.0,
            "status": "present"
          },
          {
            "date": "2026-06-25",
            "value": 59778.75,
            "status": "present"
          },
          {
            "date": "2026-06-26",
            "value": 59995.84,
            "status": "present"
          },
          {
            "date": "2026-06-27",
            "value": 59964.66,
            "status": "present"
          },
          {
            "date": "2026-06-28",
            "value": 59367.05,
            "status": "present"
          },
          {
            "date": "2026-06-29",
            "value": 60128.09,
            "status": "present"
          },
          {
            "date": "2026-06-30",
            "value": 58585.96,
            "status": "present"
          },
          {
            "date": "2026-07-01",
            "value": 59881.98,
            "status": "present"
          },
          {
            "date": "2026-07-02",
            "value": 61422.31,
            "status": "present"
          },
          {
            "date": "2026-07-03",
            "value": 62537.99,
            "status": "present"
          },
          {
            "date": "2026-07-04",
            "value": 63027.09,
            "status": "present"
          },
          {
            "date": "2026-07-05",
            "value": 63577.07,
            "status": "present"
          },
          {
            "date": "2026-07-06",
            "value": 63980.01,
            "status": "present"
          },
          {
            "date": "2026-07-07",
            "value": 63367.99,
            "status": "present"
          },
          {
            "date": "2026-07-08",
            "value": 62168.43,
            "status": "present"
          },
          {
            "date": "2026-07-09",
            "value": 63156.18,
            "status": "present"
          },
          {
            "date": "2026-07-10",
            "value": 64057.01,
            "status": "present"
          },
          {
            "date": "2026-07-11",
            "value": 63831.03,
            "status": "present"
          },
          {
            "date": "2026-07-12",
            "value": 63809.21,
            "status": "present"
          },
          {
            "date": "2026-07-13",
            "value": 62233.29,
            "status": "present"
          },
          {
            "date": "2026-07-14",
            "value": 64967.74,
            "status": "present"
          },
          {
            "date": "2026-07-15",
            "value": 64755.57,
            "status": "present"
          },
          {
            "date": "2026-07-16",
            "value": 63746.78,
            "status": "present"
          },
          {
            "date": "2026-07-17",
            "value": 63900.18,
            "status": "present"
          },
          {
            "date": "2026-07-18",
            "value": 64793.76,
            "status": "present"
          },
          {
            "date": "2026-07-19",
            "value": 64571.18,
            "status": "present"
          },
          {
            "date": "2026-07-20",
            "value": 65151.3,
            "status": "present"
          },
          {
            "date": "2026-07-21",
            "value": 66553.73,
            "status": "present"
          },
          {
            "date": "2026-07-22",
            "value": 66063.67,
            "status": "present"
          },
          {
            "date": "2026-07-23",
            "value": 65000.99,
            "status": "present"
          },
          {
            "date": "2026-07-24",
            "value": 64108.38,
            "status": "present"
          },
          {
            "date": "2026-07-25",
            "value": 64319.9,
            "status": "present"
          },
          {
            "date": "2026-07-26",
            "value": 65243.31,
            "status": "present"
          },
          {
            "date": "2026-07-27",
            "value": 63692.68,
            "status": "present"
          },
          {
            "date": "2026-07-28",
            "value": 63945.6,
            "status": "present"
          },
          {
            "date": "2026-07-29",
            "value": 63896.15,
            "status": "present"
          },
          {
            "date": "2026-07-30",
            "value": 64817.71,
            "status": "present"
          },
          {
            "date": "2026-07-31",
            "value": 62886.64,
            "status": "present"
          },
          {
            "date": "2026-08-01",
            "value": 62835.0,
            "status": "present"
          },
          {
            "date": "2026-08-02",
            "value": 63443.93,
            "status": "present"
          },
          {
            "date": "2026-08-03",
            "value": 63503.04,
            "status": "present"
          },
          {
            "date": "2026-08-04",
            "value": 64023.39,
            "status": "present"
          },
          {
            "date": "2026-08-05",
            "value": 64555.45,
            "status": "present"
          },
          {
            "date": "2026-08-06",
            "value": 64291.84,
            "status": "present"
          },
          {
            "date": "2026-08-07",
            "value": 64877.34,
            "status": "present"
          },
          {
            "date": "2026-08-08",
            "value": 64910.12,
            "status": "present"
          },
          {
            "date": "2026-08-09",
            "value": 64855.5,
            "status": "present"
          },
          {
            "date": "2026-08-10",
            "value": 63876.26,
            "status": "present"
          },
          {
            "date": "2026-08-11",
            "value": 63528.48,
            "status": "present"
          },
          {
            "date": "2026-08-12",
            "value": 63402.49,
            "status": "present"
          },
          {
            "date": "2026-08-13",
            "value": 63387.81,
            "status": "present"
          },
          {
            "date": "2026-08-14",
            "value": 62968.43,
            "status": "present"
          },
          {
            "date": "2026-08-15",
            "value": 62999.01,
            "status": "present"
          },
          {
            "date": "2026-08-16",
            "value": 62859.47,
            "status": "present"
          },
          {
            "date": "2026-08-17",
            "value": 64423.92,
            "status": "present"
          },
          {
            "date": "2026-08-18",
            "value": 64625.4,
            "status": "present"
          },
          {
            "date": "2026-08-19",
            "value": 69487.6,
            "status": "present"
          },
          {
            "date": "2026-08-20",
            "value": 73086.97,
            "status": "present"
          },
          {
            "date": "2026-08-21",
            "value": 78126.63,
            "status": "present"
          },
          {
            "date": "2026-08-22",
            "value": 77117.73,
            "status": "present"
          },
          {
            "date": "2026-08-23",
            "value": 77637.69,
            "status": "present"
          },
          {
            "date": "2026-08-24",
            "value": 78981.39,
            "status": "present"
          },
          {
            "date": "2026-08-25",
            "value": 78510.95,
            "status": "present"
          },
          {
            "date": "2026-08-26",
            "value": 78961.93,
            "status": "present"
          },
          {
            "date": "2026-08-27",
            "value": 80209.61,
            "status": "present"
          },
          {
            "date": "2026-08-28",
            "value": 77838.65,
            "status": "present"
          },
          {
            "date": "2026-08-29",
            "value": 78215.0,
            "status": "present"
          },
          {
            "date": "2026-08-30",
            "value": 77757.98,
            "status": "present"
          },
          {
            "date": "2026-08-31",
            "value": 78603.02,
            "status": "present"
          },
          {
            "date": "2026-09-01",
            "value": 77392.65,
            "status": "present"
          },
          {
            "date": "2026-09-02",
            "value": 77330.23,
            "status": "present"
          },
          {
            "date": "2026-09-03",
            "value": 81129.19,
            "status": "present"
          },
          {
            "date": "2026-09-04",
            "value": 79658.55,
            "status": "present"
          },
          {
            "date": "2026-09-05",
            "value": 79879.24,
            "status": "present"
          },
          {
            "date": "2026-09-06",
            "value": 80309.06,
            "status": "present"
          },
          {
            "date": "2026-09-07",
            "value": 79067.23,
            "status": "present"
          },
          {
            "date": "2026-09-08",
            "value": 78548.91,
            "status": "present"
          },
          {
            "date": "2026-09-09",
            "value": 78303.59,
            "status": "present"
          },
          {
            "date": "2026-09-10",
            "value": 76664.89,
            "status": "present"
          },
          {
            "date": "2026-09-11",
            "value": 77276.5,
            "status": "present"
          },
          {
            "date": "2026-09-12",
            "value": 77270.73,
            "status": "present"
          },
          {
            "date": "2026-09-13",
            "value": 76804.92,
            "status": "present"
          },
          {
            "date": "2026-09-14",
            "value": 78200.38,
            "status": "present"
          },
          {
            "date": "2026-09-15",
            "value": 75656.09,
            "status": "present"
          },
          {
            "date": "2026-09-16",
            "value": 76208.64,
            "status": "present"
          },
          {
            "date": "2026-09-17",
            "value": 76366.4,
            "status": "present"
          },
          {
            "date": "2026-09-18",
            "value": 80844.0,
            "status": "present"
          },
          {
            "date": "2026-09-19",
            "value": 81186.0,
            "status": "present"
          },
          {
            "date": "2026-09-20",
            "value": 81253.37,
            "status": "present"
          },
          {
            "date": "2026-09-21",
            "value": 86396.74,
            "status": "present"
          },
          {
            "date": "2026-09-22",
            "value": 86249.98,
            "status": "present"
          },
          {
            "date": "2026-09-23",
            "value": 84452.97,
            "status": "present"
          },
          {
            "date": "2026-09-24",
            "value": 84470.76,
            "status": "present"
          },
          {
            "date": "2026-09-25",
            "value": 84048.07,
            "status": "present"
          },
          {
            "date": "2026-09-26",
            "value": 84337.36,
            "status": "present"
          }
        ]
      }
    ]
  },
  "threshold_policy": [
    "Green / OK: keep normal review cadence; no warning is being asserted by the rules.",
    "Amber / watch: add the signal to the next macro review; do not assume a benign backdrop.",
    "Red / alarm: the rule set is explicitly flagging a non-benign sovereign-yield condition that deserves immediate review.",
    "Gold Reset Watch cards are a separate lens with their own thresholds and are deliberately excluded from the sovereign composite score.",
    "Gray / stale: daily prints older than 3 business days or monthly prints older than 45 calendar days are marked stale and reduce confidence in the composite. Weekly prints go stale after 14 calendar days.",
    "These are transparent dashboard warnings, not investment advice or a forecast guarantee."
  ],
  "source_status": {
    "DGS10": "present",
    "DGS2": "present",
    "DGS30": "present",
    "T10Y3M": "present",
    "T10YIE": "present",
    "IRLTLT01GBM156N": "present",
    "IRLTLT01JPM156N": "present",
    "IRLTLT01CAM156N": "present",
    "IRLTLT01AUM156N": "present",
    "IRLTLT01DEM156N": "present",
    "WGCAL": "present",
    "IQ12260": "present",
    "DTWEXBGS": "present",
    "GVZCLS": "present",
    "CBBTCUSD": "present"
  },
  "tracked_sources": [
    {
      "series_id": "DGS10",
      "label": "US 10Y Treasury yield",
      "cadence": "Daily market close"
    },
    {
      "series_id": "DGS2",
      "label": "US 2Y Treasury yield",
      "cadence": "Daily market close"
    },
    {
      "series_id": "DGS30",
      "label": "US 30Y Treasury yield",
      "cadence": "Daily market close"
    },
    {
      "series_id": "T10Y3M",
      "label": "US 10Y minus 3M spread",
      "cadence": "Daily market close"
    },
    {
      "series_id": "T10YIE",
      "label": "US 10Y breakeven inflation",
      "cadence": "Daily market close"
    },
    {
      "series_id": "IRLTLT01GBM156N",
      "label": "UK 10Y government yield",
      "cadence": "Monthly"
    },
    {
      "series_id": "IRLTLT01JPM156N",
      "label": "Japan 10Y government yield",
      "cadence": "Monthly"
    },
    {
      "series_id": "IRLTLT01CAM156N",
      "label": "Canada 10Y government yield",
      "cadence": "Monthly"
    },
    {
      "series_id": "IRLTLT01AUM156N",
      "label": "Australia 10Y government yield",
      "cadence": "Monthly"
    },
    {
      "series_id": "IRLTLT01DEM156N",
      "label": "Germany 10Y government yield",
      "cadence": "Monthly"
    },
    {
      "series_id": "WGCAL",
      "label": "Fed gold certificate account",
      "cadence": "Weekly Wednesday level"
    },
    {
      "series_id": "IQ12260",
      "label": "Nonmonetary gold export price index",
      "cadence": "Monthly"
    },
    {
      "series_id": "DTWEXBGS",
      "label": "Nominal broad U.S. dollar index",
      "cadence": "Daily market close"
    },
    {
      "series_id": "GVZCLS",
      "label": "CBOE gold ETF volatility index",
      "cadence": "Daily market close"
    },
    {
      "series_id": "CBBTCUSD",
      "label": "Bitcoin (Coinbase USD)",
      "cadence": "Daily"
    }
  ],
  "notes": [
    "This dashboard is deliberately public-data-only and generic. No personal accounts, balances, credentials, or broker exports are read.",
    "International 10Y series are monthly OECD/FRED feeds, so cross-country comparisons update more slowly than the U.S. daily series.",
    "Dispersion is computed on the last common month across constituents so daily U.S. prints are not max-min mixed against mismatched monthly dates.",
    "US 30Y was added alongside the 10Y because the extra duration can surface fiscal and term-premium stress earlier than a 10Y-only lens.",
    "Germany is the live euro-area duration anchor; the euro-area OECD aggregate (IRLTLT01EZM156N) was dropped after it stalled at 2026-01-01 on FRED.",
    "The composite stress meter follows Option A: inflation = T10YIE, growth = max(inversion, bear-steepener), divergence = dispersion + JP/CA/AU, with missing inputs excluded and weights renormalized.",
    "Gold Reset Watch answers a narrower question: whether the Treasury\u2013Fed gold-certificate mechanism has actually changed, not whether gold prices are rising. The mechanism card (WGCAL) is the gate; the dollar, gold-volatility, and Bitcoin cards only interpret the regime that follows.",
    "Legislative proposals and Treasury/Fed statements cannot be pulled from FRED, so they are listed as explicit weekly manual checks with direct links rather than simulated as data.",
    "Gold Reset Watch thresholds are intentionally excluded from the composite stress meter so an uncalibrated tail-risk lens cannot distort the sovereign-yield score.",
    "The value of the dashboard is in the explicit thresholds and action text, not in pretending bond-market interpretation is certain."
  ]
};
