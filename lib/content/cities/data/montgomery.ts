import type { City } from "../types";

export const MONTGOMERY: City = {
  slug: "montgomery",
  stateSlug: "alabama",
  name: "Montgomery",
  title: "Solar in Montgomery: Alabama Power and state capital permits",
  metaTitle: "Solar Companies in Montgomery AL: Alabama Power, Permits",
  metaDescription:
    "Honest guide to solar in Montgomery Alabama: Alabama Power non-retail net metering plus backup charge, City of Montgomery permits, state capital, and running a solar company in Montgomery County.",
  answer:
    "Montgomery is served by Alabama Power under the state's non-retail NEM plus the $5.42 per kW monthly backup charge. The economics work only with careful self-consumption sizing. Permits run through the City of Montgomery Buildings and Inspections.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 215,
    note: "Montgomery gets around 4.8 peak sun hours per day with 215 sunny days per year, strong for solar. Summer heat is a real factor. Tornado-prone weather in spring requires proper structural attachment. Pine pollen in spring reduces panel output temporarily.",
  },
  market: {
    metroPopulationK: 370,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 80, high: 150 },
    installerDensity: "Moderate",
  },
  utilities: ["Alabama Power (Southern Company subsidiary), investor-owned, serves most of Montgomery County"],
  permits: {
    office: "City of Montgomery Buildings and Inspections",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Montgomery Buildings and Inspections typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Alabama Power interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Montgomery means operating under Alabama Power's non-retail NEM + backup charge regime, same as Birmingham and Mobile. The best Montgomery operators size systems to self-consumption and factor the backup charge honestly in payback. Lead costs run $80 to $150 on Google search.",
  faq: [
    {
      q: "Does Alabama Power have net metering in Montgomery?",
      a: "Not retail-rate. Alabama Power credits residential solar exports at avoided cost (approximately $0.03 per kWh) plus charges a monthly backup fee of $5.42 per kW of installed DC capacity. Same regime as Birmingham, Mobile and all Alabama Power territory.",
    },
    {
      q: "How long does a solar permit take in Montgomery?",
      a: "City of Montgomery Buildings and Inspections typically runs residential solar permits in 3 to 5 weeks. Alabama Power interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Montgomery?",
      a: "Montgomery runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Alabama has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Montgomery?",
      a: "For Montgomery homes with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 12 to 16 years with the federal tax credit, factoring in the backup charge.",
    },
  ],
};
