globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA = {
  "generated_at": "2026-09-26T16:48:53Z",
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
    "end_date": "2026-09-25",
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
      }
    ]
  },
  "threshold_policy": [
    "Green / OK: keep normal review cadence; no warning is being asserted by the rules.",
    "Amber / watch: add the signal to the next macro review; do not assume a benign backdrop.",
    "Red / alarm: the rule set is explicitly flagging a non-benign sovereign-yield condition that deserves immediate review.",
    "Gray / stale: daily prints older than 3 business days or monthly prints older than 45 calendar days are marked stale and reduce confidence in the composite.",
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
    "IRLTLT01DEM156N": "present"
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
    }
  ],
  "notes": [
    "This dashboard is deliberately public-data-only and generic. No personal accounts, balances, credentials, or broker exports are read.",
    "International 10Y series are monthly OECD/FRED feeds, so cross-country comparisons update more slowly than the U.S. daily series.",
    "Dispersion is computed on the last common month across constituents so daily U.S. prints are not max-min mixed against mismatched monthly dates.",
    "US 30Y was added alongside the 10Y because the extra duration can surface fiscal and term-premium stress earlier than a 10Y-only lens.",
    "Germany is the live euro-area duration anchor; the euro-area OECD aggregate (IRLTLT01EZM156N) was dropped after it stalled at 2026-01-01 on FRED.",
    "The composite stress meter follows Option A: inflation = T10YIE, growth = max(inversion, bear-steepener), divergence = dispersion + JP/CA/AU, with missing inputs excluded and weights renormalized.",
    "The value of the dashboard is in the explicit thresholds and action text, not in pretending bond-market interpretation is certain."
  ]
};
