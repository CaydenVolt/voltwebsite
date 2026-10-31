import type { City } from "../types";

export const ATLANTA: City = {
  slug: "atlanta",
  stateSlug: "georgia",
  name: "Atlanta",
  title: "Solar in Atlanta: Georgia Power, GPC net billing and permits",
  metaTitle: "Solar Companies in Atlanta: Georgia Power, Permits, Export Credits",
  metaDescription:
    "Honest guide to solar in Atlanta: Georgia Power's monthly net billing (not retail NEM), City of Atlanta permits, Fulton and DeKalb counties, and running a solar company in metro Atlanta.",
  answer:
    "Atlanta solar is harder than it looks because Georgia Power does not offer retail-rate net metering. Residential solar exports are credited at Georgia Power's avoided cost rate (around $0.03 to $0.04 per kWh), far below the retail rate of about $0.12. The economics work only with careful sizing to self-consumption, time-of-use rate schedule selection, and attention to Georgia Power's monthly billing credits.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 217,
    note: "Atlanta gets around 4.9 peak sun hours per day with 217 sunny days per year, moderate-to-strong for solar. The dominant climate risk is tree canopy: metro Atlanta has substantial deciduous tree coverage in most residential neighbourhoods, and shade reduces annual yield by 15 to 40 percent on many quoted roofs. Honest shade audits before quoting matter critically here.",
  },
  market: {
    metroPopulationK: 6250,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Georgia Power (Southern Company subsidiary), investor-owned, serves most of metro Atlanta",
    "Georgia Electric Membership Corporation (co-ops) serves parts of surrounding counties: Walton EMC, Jackson EMC, Cobb EMC, GreyStone Power, Snapping Shoals EMC",
    "Various municipal utilities (Marietta Power, Acworth, others) serve specific suburbs",
  ],
  permits: {
    office: "City of Atlanta Office of Buildings, plus Fulton County, DeKalb County, Cobb County for suburban projects",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Atlanta Office of Buildings typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Fulton, DeKalb, Cobb, Gwinnett counties each run their own permit offices with 2 to 4 week typical timelines. Georgia Power interconnection post-install typically runs 4 to 6 weeks; the specific EMC co-op interconnection processes vary and sometimes take longer.",
  },
  installerLandscape:
    "Running a solar company in Atlanta means operating in a market where Georgia Power's non-retail export compensation forces careful system sizing: oversized systems that export heavily during midday effectively give power away at $0.03 per kWh. The best Atlanta operators size systems to annual self-consumption, pair installations with electric heat pump or EV charging additions that increase daytime load, and quote honestly about tree-canopy shade (which disqualifies a large fraction of quoted roofs). EMC co-op territory customers often see different interconnection timelines and sometimes better export compensation than Georgia Power. Lead costs run $110 to $200, lower than most Southeast markets.",
  faq: [
    {
      q: "Does Georgia Power have net metering?",
      a: "Not retail-rate net metering. Georgia Power uses a monthly billing arrangement that credits residential solar exports at the utility's avoided cost rate (currently around $0.03 to $0.04 per kWh), substantially below the retail rate of about $0.12 per kWh. The economics work when systems are sized to self-consumption rather than oversized for export. Pre-2019 customers on the earlier Monthly Net Metering tariff are grandfathered on more favourable terms.",
    },
    {
      q: "How does the Georgia Power time-of-use rate affect solar?",
      a: "Georgia Power offers residential customers an optional time-of-use rate (RSB-TOU) that charges higher rates during on-peak hours (typically 2pm to 7pm on summer weekdays) and lower rates off-peak. Solar customers often save more by moving to the TOU rate because their systems displace high-rate consumption during the on-peak window. The best Atlanta installers run a bill-impact analysis on both the standard residential rate and the TOU rate before recommending.",
    },
    {
      q: "How long does a solar permit take in Atlanta?",
      a: "City of Atlanta Office of Buildings typically runs residential solar permits in 3 to 5 weeks. Surrounding counties (Fulton, DeKalb, Cobb, Gwinnett) run 2 to 4 weeks typically. Georgia Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Atlanta?",
      a: "Atlanta runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Georgia has no state solar tax credit as of 2026, so the federal credit is the only tax-based incentive.",
    },
    {
      q: "Is solar worth it in Atlanta?",
      a: "Yes for Atlanta homes with unshaded roofs and sized correctly to self-consumption. Payback typically runs 10 to 14 years with the federal tax credit; longer than Southeast peers with retail NEM (Florida, South Carolina) because of Georgia Power's avoided-cost export compensation. Heavy tree shade and oversized systems make the economics much worse. Honest shade audits and self-consumption sizing are the practical differentiators between installers who get the math right and those who don't.",
    },
  ],
};
