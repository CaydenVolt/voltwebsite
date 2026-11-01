import type { City } from "../types";

export const OAKLAND: City = {
  slug: "oakland",
  stateSlug: "california",
  name: "Oakland",
  title: "Solar in Oakland: PG&E, East Bay Community Energy and NEM 3.0",
  metaTitle: "Solar Companies in Oakland: PG&E, EBCE, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Oakland: PG&E's NEM 3.0 export compensation, East Bay Community Energy CCA, Oakland Building & Housing permits, and running a solar company in the East Bay.",
  answer:
    "Oakland runs under PG&E service with East Bay Community Energy (EBCE) as the default Community Choice Aggregator for most residents. California NEM 3.0 export rules apply (export credits at the Avoided Cost Calculator rate), so storage attachment is essentially required for favourable payback. Permits run through Oakland Planning & Building Department.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 257,
    note: "Oakland gets around 5.3 peak sun hours per day with 257 sunny days per year, strong for solar. The East Bay microclimate is substantially drier and sunnier than San Francisco (less marine-layer fog), with foothill neighbourhoods (Montclair, Oakland Hills) seeing closer to 5.6 peak sun hours. Flat-roof Victorian housing stock in older neighbourhoods complicates mounting; honest shade analysis matters.",
  },
  market: {
    metroPopulationK: 440,
    averageCostPerWatt: 3.05,
    leadCostUsd: { low: 190, high: 330 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Pacific Gas & Electric (PG&E), investor-owned, serves all of Oakland",
    "East Bay Community Energy (EBCE), Community Choice Aggregator, bundles generation with PG&E delivery for most Oakland residents",
  ],
  permits: {
    office: "Oakland Planning & Building Department",
    turnaroundWeeks: "2 to 5 weeks for standard residential",
    solarApp: "Accepted",
    note: "Oakland Planning & Building Department accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 2 to 5 weeks. Historic district overlay (Oakland has substantial historic housing stock) adds aesthetic review for some neighbourhoods. PG&E interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Oakland means operating in a competitive Bay Area market with high lead costs ($190 to $330 on Google search) and the NEM 3.0 storage-first sales motion. The best Oakland operators understand EBCE's generation rates vs PG&E's default (which affects billing but not export compensation structure), handle Oakland's historic housing permits fluently, and sell storage-attached quotes as the default rather than solar-only. Lower installer density than San Francisco or San Jose but higher than Sacramento.",
  faq: [
    {
      q: "Does PG&E have net metering in Oakland?",
      a: "Not retail-rate. PG&E operates under California NEM 3.0: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), substantially below retail. Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years from original interconnection.",
    },
    {
      q: "What is East Bay Community Energy?",
      a: "East Bay Community Energy (EBCE) is the Community Choice Aggregator that provides the generation portion of electricity for most Alameda County residences by default, including Oakland. PG&E still delivers the electricity and handles billing. EBCE's generation rate differs from PG&E's default but does not change net metering treatment, which is governed by PG&E's NEM 3.0 schedule.",
    },
    {
      q: "How long does a solar permit take in Oakland?",
      a: "With SolarAPP+ at Oakland Planning & Building Department: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 2 to 5 weeks. Historic district overlay adds aesthetic review in some neighbourhoods. PG&E interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Oakland?",
      a: "Oakland runs about $3.05 per watt installed for residential, meaning a 7 kW system typically costs around $21,400 gross. After the 30 percent federal tax credit, net cost is approximately $15,000. Add storage for NEM 3.0 payback and total gross cost often lands between $31,000 and $40,000 before incentives.",
    },
    {
      q: "Is solar still worth it in Oakland under NEM 3.0?",
      a: "Yes with storage, no without. PG&E's high retail rates in the Bay Area make storage-attached NEM 3.0 systems pay back in 7 to 11 years for most Oakland homes. Solar-only without storage pays back over 15 years because the NEM 3.0 export credit is too low.",
    },
  ],
};
