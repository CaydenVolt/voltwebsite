import type { City } from "../types";

export const AUSTIN: City = {
  slug: "austin",
  stateSlug: "texas",
  name: "Austin",
  title: "Solar in Austin: Austin Energy, Value of Solar, permits",
  metaTitle: "Solar Companies in Austin: Austin Energy, VOS, Permits",
  metaDescription:
    "Honest guide to solar in Austin: Austin Energy's Value of Solar tariff, Austin DSD permit timelines, City of Austin rebate, and running a solar company in Austin.",
  answer:
    "Austin is unusual in Texas: the city is served by Austin Energy, a municipal utility with retail-rate solar compensation under its Value of Solar (VOS) tariff. Austin Energy also runs a residential solar rebate (currently $2,500 for a standard system) on top of the 30 percent federal credit. The trade-off is permit speed: Austin Development Services Department runs 4 to 8 weeks for residential solar, slower than DFW or Houston.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.1,
    sunnyDays: 228,
    note: "Austin gets around 5.1 peak sun hours per day with 228 sunny days per year, excellent for solar. Summer heat is intense (June through September rooftop temperatures regularly exceed 160F); panel temperature coefficients matter. Hail is a secondary risk compared to DFW but still real; Class 4 impact rating is a sensible spec for Austin even if not universally required.",
  },
  market: {
    metroPopulationK: 2470,
    averageCostPerWatt: 2.7,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Austin Energy (municipal utility, serves city of Austin)",
    "Pedernales Electric Cooperative (serves Hays, Travis County outside Austin, parts of Williamson)",
    "Oncor Electric Delivery (serves most of Williamson County including Round Rock, Cedar Park, Georgetown)",
  ],
  permits: {
    office: "City of Austin Development Services Department",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Austin DSD typically runs residential solar permits in 4 to 8 weeks, slower than most Texas peers because of staffing and workload constraints that have persisted since 2022. SolarAPP+ is in pilot for select contractors as of 2026 but not broadly deployed. Williamson County jurisdictions (Round Rock, Cedar Park, Georgetown, Pflugerville) typically run 2 to 4 weeks, which is why some Austin installers prefer suburban projects. Austin Energy interconnection post-install typically runs 2 to 4 weeks.",
  },
  installerLandscape:
    "Running a solar company in Austin means working in a market where the Austin Energy VOS tariff makes the economics competitive but the permit backlog at Austin DSD creates real friction. The best Austin operators have templated permit submissions tuned to the city's reviewer preferences (which reduces revision cycles), workflows for scheduling around the long turnaround, and often prefer Williamson County and PEC-territory projects because the permitting there is 2 to 3 weeks faster. Austin Energy's rebate adds a cash incentive worth leading with in sales conversations. Lead costs run $140 to $240, moderate for Texas.",
  faq: [
    {
      q: "Does Austin have net metering?",
      a: "Not conventional net metering. Austin Energy uses its Value of Solar (VOS) tariff, which credits residential solar exports at a calculated rate that includes avoided fuel cost, avoided transmission cost and environmental value. The current VOS rate is around $0.097 per kWh (as of 2025); it is recalculated annually. The credit appears on the next monthly bill rather than net-metered against consumption, which is a structural difference most installers walk customers through up front.",
    },
    {
      q: "How long does a solar permit take in Austin?",
      a: "City of Austin DSD typically runs 4 to 8 weeks for residential solar permits, longer than most Texas cities. Williamson County jurisdictions (Round Rock, Cedar Park, Georgetown) are faster at 2 to 4 weeks. Austin Energy interconnection post-install typically runs 2 to 4 weeks.",
    },
    {
      q: "What is the Austin Energy solar rebate?",
      a: "Austin Energy offers a residential solar rebate currently set at $2,500 for a standard rooftop PV system (as of 2025, confirm current amount with Austin Energy before quoting). The rebate stacks with the 30 percent federal Residential Clean Energy Credit. Homeowners must complete a free Austin Energy solar education course before the rebate application is accepted.",
    },
    {
      q: "How much does solar cost in Austin?",
      a: "Austin runs about $2.70 per watt installed for residential, meaning a 7 kW system typically costs around $18,900 gross. After the 30 percent federal tax credit and the Austin Energy rebate (where applicable), net cost is approximately $10,700 to $12,500.",
    },
    {
      q: "Is solar worth it in Austin?",
      a: "Yes for most Austin homes. The combination of Austin Energy's VOS tariff, the state rebate, strong sun hours and rising retail rates makes residential solar payback typically 7 to 10 years with the federal tax credit. Suburban Williamson County and PEC-territory homes have slightly longer payback because they lack the Austin Energy rebate but faster permitting.",
    },
  ],
};
