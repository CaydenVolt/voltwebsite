import type { City } from "../types";

export const LAS_VEGAS: City = {
  slug: "las-vegas",
  stateSlug: "nevada",
  name: "Las Vegas",
  title: "Solar in Las Vegas: NV Energy tariff tiers and desert climate",
  metaTitle: "Solar Companies in Las Vegas: NV Energy, Permits, Export Credits",
  metaDescription:
    "Honest guide to solar in Las Vegas: NV Energy's tiered export credit by install date, City of Las Vegas and Clark County permits, Mojave Desert climate, and running a solar company in Las Vegas.",
  answer:
    "Las Vegas has excellent solar potential (over 6.0 peak sun hours per day) but operates under NV Energy's tiered export credit system that steps down for each new tranche of installed solar statewide. Current new residential installations are at Tier 5 or beyond, with exports credited at roughly 75 percent of retail. Permits run through City of Las Vegas or Clark County depending on specific location; most of the valley is unincorporated Clark County.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 6.4,
    sunnyDays: 294,
    note: "Las Vegas gets around 6.4 peak sun hours per day with 294 sunny days per year, excellent for solar. Summer heat is extreme (June through September rooftop temperatures regularly exceed 170F); panel temperature coefficients and racking airflow matter. Dust accumulation in the dry Mojave reduces output 5 to 15 percent between infrequent rain events; semi-annual cleaning contracts are common.",
  },
  market: {
    metroPopulationK: 2370,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "High",
  },
  utilities: [
    "NV Energy (Nevada Energy Corporation, formerly Nevada Power), investor-owned, serves all of the Las Vegas metro",
    "Overton Power District No. 5 serves Moapa Valley north of Las Vegas",
  ],
  permits: {
    office: "City of Las Vegas Development Services for city residents; Clark County Building Department for most unincorporated valley residents",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "Clark County Building Department accepts SolarAPP+ for standard residential installations, approving most qualifying systems in a day or two. City of Las Vegas, Henderson, North Las Vegas, Boulder City each have their own permit offices with 2 to 4 week typical timelines (not all accept SolarAPP+). NV Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Las Vegas means working in a market where NV Energy's tiered net metering has stepped down the export credit over time, so quoting payback honestly against the current tier matters. The best Las Vegas operators have fluent SolarAPP+ workflows for Clark County projects, understand the city-vs-county permit split for different valley addresses, and spec equipment for Mojave heat and dust. Lead costs run $140 to $240, moderate for a saturated-adjacent market. Henderson and North Las Vegas suburbs each have their own permitting quirks worth knowing.",
  faq: [
    {
      q: "Does NV Energy have net metering?",
      a: "Yes, but tiered. Nevada's SB 358-era net metering programme creates tiers that step down the export credit as cumulative statewide installed solar grows. Current new installations (as of 2026) are at Tier 5 or beyond: exports credit at approximately 75 percent of the retail rate (down from 95 percent at Tier 1 and 100 percent pre-2015). Pre-2015 customers are grandfathered on retail NEM for 20 years from original interconnection.",
    },
    {
      q: "How long does a solar permit take in Las Vegas?",
      a: "Clark County Building Department (which permits most of the valley including unincorporated Las Vegas) accepts SolarAPP+ and often approves standard residential installations within a day or two. City of Las Vegas, Henderson and North Las Vegas each have their own permit offices with 2 to 4 week typical timelines. NV Energy interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Las Vegas?",
      a: "Las Vegas runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Las Vegas?",
      a: "Yes for most Las Vegas homes with suitable roofs. The combination of excellent sun hours, moderate retail rates (around $0.13 per kWh at NV Energy), and the current Tier 5 export credit makes residential solar payback typically 9 to 12 years with the federal tax credit. Storage attachment (which some homeowners add for backup against outages) does not meaningfully shorten payback at current NV Energy rates.",
    },
    {
      q: "How does Mojave dust affect solar in Las Vegas?",
      a: "Dust accumulation in the dry Mojave climate reduces panel output 5 to 15 percent between significant rain events. The dry seasons (spring and fall) see less natural cleaning than summer monsoon-season rains. Many Las Vegas homeowners add semi-annual cleaning contracts (around $150 to $300 per visit) to maintain production targets; honest installer quotes model the dust impact rather than assuming clean-panel output year-round.",
    },
  ],
};
