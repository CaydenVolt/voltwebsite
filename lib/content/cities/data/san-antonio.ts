import type { City } from "../types";

export const SAN_ANTONIO: City = {
  slug: "san-antonio",
  stateSlug: "texas",
  name: "San Antonio",
  title: "Solar in San Antonio: CPS Energy, Roofprint rebate, SolarAPP+",
  metaTitle: "Solar Companies in San Antonio: CPS Energy, Rebate, Permits",
  metaDescription:
    "Honest guide to solar in San Antonio: CPS Energy net metering and Roofprint rebate, City of San Antonio permits with SolarAPP+, and running a solar company in San Antonio.",
  answer:
    "San Antonio is served by CPS Energy, a municipal utility that offers retail-rate net metering and the Roofprint rebate for residential solar (currently $0.60 per watt DC up to $4,500, confirm current rate). This makes San Antonio's economics meaningfully stronger than Dallas or Houston, which operate under deregulated REP buyback plans with inconsistent export credit. City of San Antonio accepts SolarAPP+ for most residential permits.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 220,
    note: "San Antonio gets around 5.2 peak sun hours per day with 220 sunny days per year, strong for solar. Summer heat is intense (June through September rooftop temperatures regularly exceed 160F); panel temperature coefficients matter. Hail risk is moderate (lower than DFW but higher than Houston); Class 4 impact rating is sensible spec. Hurricane and tropical storm exposure is low compared with coastal Texas.",
  },
  market: {
    metroPopulationK: 2660,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "CPS Energy, municipal utility, serves the city of San Antonio and surrounding Bexar County",
    "Pedernales Electric Cooperative, Bluebonnet Electric Cooperative serve surrounding Hill Country areas",
    "GVEC (Guadalupe Valley Electric Cooperative) serves east and southeast of San Antonio",
  ],
  permits: {
    office: "City of San Antonio Development Services",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of San Antonio Development Services accepts SolarAPP+ for standard residential installations, approving most qualifying systems in a day or two. Non-SolarAPP+ permits run 1 to 3 weeks. Bexar County, surrounding cities (Schertz, Converse, Live Oak, Universal City) each have their own permit offices with 2 to 4 week typical timelines. CPS Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in San Antonio means working in a market where CPS Energy's retail-rate net metering and Roofprint rebate make the sales conversation substantially simpler than the Dallas or Houston REP-buyback situation. The best San Antonio operators lead with the Roofprint rebate (which stacks with the federal tax credit) and the fast SolarAPP+ permit path. Lead costs run $110 to $200, among the lowest in Texas because installer density is moderate and the national brands focus more on DFW and Houston. The surrounding co-op territories (PEC, Bluebonnet, GVEC) each have their own interconnection rules that differ from CPS; working across co-op boundaries requires familiarity with those specific tariffs.",
  faq: [
    {
      q: "Does CPS Energy have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC. CPS credits exports at the retail rate monthly; annual excess is paid out at CPS's avoided cost rate (around $0.03 per kWh). This is one of the few retail-NEM programmes in Texas and makes San Antonio solar economics stronger than Dallas or Houston.",
    },
    {
      q: "What is the CPS Energy Roofprint rebate?",
      a: "CPS Energy's Roofprint programme offers a residential solar rebate currently set at $0.60 per watt DC up to a maximum of $4,500 (as of 2025, confirm current rate with CPS before quoting). The rebate stacks with the 30 percent federal Residential Clean Energy Credit. Applications are submitted post-install through CPS's online portal.",
    },
    {
      q: "How long does a solar permit take in San Antonio?",
      a: "With SolarAPP+ at City of San Antonio Development Services: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Bexar County and surrounding cities run 2 to 4 weeks typically. CPS Energy interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in San Antonio?",
      a: "San Antonio runs about $2.55 per watt installed for residential, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit and the CPS Roofprint rebate (where applicable), net cost is approximately $8,000 to $10,500 for CPS customers; co-op customers see net cost closer to $12,500 without the rebate.",
    },
    {
      q: "Is solar worth it in San Antonio?",
      a: "Yes, especially for CPS Energy customers. The combination of CPS retail net metering, the Roofprint rebate, strong sun hours and the 30 percent federal tax credit makes residential solar payback typically 6 to 9 years for CPS customers. Co-op customers (PEC, Bluebonnet, GVEC) see longer payback, typically 9 to 12 years, because they lack the Roofprint rebate and some co-ops offer less favourable export compensation.",
    },
  ],
};
