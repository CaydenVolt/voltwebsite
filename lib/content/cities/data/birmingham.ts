import type { City } from "../types";

export const BIRMINGHAM: City = {
  slug: "birmingham",
  stateSlug: "alabama",
  name: "Birmingham",
  title: "Solar in Birmingham: Alabama Power net billing and the backup charge",
  metaTitle: "Solar Companies in Birmingham AL: Alabama Power, Permits",
  metaDescription:
    "Honest guide to solar in Birmingham Alabama: Alabama Power's monthly net billing and backup charge on solar accounts, City of Birmingham permits, and running a solar company in central Alabama.",
  answer:
    "Birmingham is served by Alabama Power under the utility's non-retail export compensation regime: solar exports credit at avoided cost (around $0.03 per kWh), far below the retail rate of about $0.14. Alabama Power also charges a monthly backup fee of $5.42 per kW of installed solar DC capacity. The economics work only with careful sizing to self-consumption and the federal tax credit.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 211,
    note: "Birmingham gets around 4.8 peak sun hours per day with 211 sunny days per year, moderate-to-strong for solar. Summer thunderstorms reduce afternoon production. Pine pollen in spring temporarily reduces panel output; occasional cleaning may be worth modelling. Tornado-prone weather in April and May requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 1120,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: ["Alabama Power (Southern Company subsidiary), investor-owned, serves most of the Birmingham metro"],
  permits: {
    office: "City of Birmingham Planning, Engineering and Permits",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Birmingham Planning, Engineering and Permits typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Jefferson County and surrounding counties (Shelby, St. Clair) run their own permits with 2 to 4 week typical timelines. Alabama Power interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Birmingham means working in a market constrained by Alabama Power's non-retail export compensation and backup charge. The best Birmingham operators size systems to self-consumption rather than oversize for export, factor the backup charge into payback calculations ($5.42 per kW per month is around $420 per year for a 7 kW system), and sell on long-term rate protection rather than fast payback. Lead costs run $85 to $160 on Google search, among the lowest in the US.",
  faq: [
    {
      q: "Does Alabama Power have net metering in Birmingham?",
      a: "Not retail-rate. Alabama Power credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.14. The utility also charges a monthly backup fee of $5.42 per kW of installed solar DC capacity (around $35 per month for a 7 kW system).",
    },
    {
      q: "What is the Alabama Power backup charge?",
      a: "Alabama Power charges net-metered residential solar customers a monthly backup charge of $5.42 per kW of installed solar DC capacity. For a 7 kW system this is around $35 per month or $420 per year, which stacks against solar savings. This charge is unique to Alabama Power among major US utilities and materially extends solar payback.",
    },
    {
      q: "How long does a solar permit take in Birmingham?",
      a: "City of Birmingham Planning, Engineering and Permits typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding counties run 2 to 4 weeks typically. Alabama Power interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Birmingham?",
      a: "Birmingham runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Alabama has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Birmingham?",
      a: "For Alabama Power customers with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 12 to 16 years with the federal tax credit, factoring in the backup charge. Birmingham homes with pool pumps, electric heat pumps and large square footage see shorter payback because the fixed backup charge is proportionally smaller against their usage.",
    },
  ],
};
