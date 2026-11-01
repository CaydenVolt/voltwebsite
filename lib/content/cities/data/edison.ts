import type { City } from "../types";

export const EDISON: City = {
  slug: "edison",
  stateSlug: "new-jersey",
  name: "Edison",
  title: "Solar in Edison: PSE&G, SuSI SREC-II and Middlesex County permits",
  metaTitle: "Solar Companies in Edison NJ: PSE&G, SuSI, Permits",
  metaDescription:
    "Honest guide to solar in Edison New Jersey: PSE&G retail net metering, SuSI SREC-II payments, Edison Township permits, and running a solar company in central NJ.",
  answer:
    "Edison Township is served by PSE&G under retail-rate net metering plus 15 years of SuSI SREC-II payments. The suburban Middlesex County housing stock supports larger-than-urban rooftops. Permits run through Edison Township Building Department.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.4,
    sunnyDays: 205,
    note: "Edison gets around 4.4 peak sun hours per day with 205 sunny days per year, moderate for solar. Winter snow derating is modest. Summer thunderstorms reduce afternoon production.",
  },
  market: {
    metroPopulationK: 105,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "Public Service Electric & Gas (PSE&G), investor-owned, serves all of Edison",
    "Various surrounding utilities serve adjacent townships (JCP&L in parts of Monmouth County)",
  ],
  permits: {
    office: "Edison Township Building Department",
    turnaroundWeeks: "2 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Edison Township Building Department typically runs residential solar permits in 2 to 5 weeks. SolarAPP+ is not accepted. Surrounding Middlesex County townships (Woodbridge, Piscataway, East Brunswick) run their own permits with 2 to 5 week typical timelines. PSE&G interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Edison means working in a suburban NJ market with larger rooftops than Newark or Jersey City. The best Edison operators have templated SuSI registration workflows and handle PSE&G interconnection fluently. Lead costs run $130 to $220 on Google search. Middlesex County has substantial installer density but less saturation than Essex or Hudson counties.",
  faq: [
    {
      q: "Does PSE&G have net metering in Edison?",
      a: "Yes, retail-rate net metering for residential solar systems. PSE&G credits exports at retail monthly; annual true-up at year-end is either rolled over or paid at avoided cost.",
    },
    {
      q: "What is SuSI for Edison?",
      a: "The Successor Solar Incentive (SuSI) pays residential installations approximately $85 per SREC-II for 15 years. A typical 7 kW Edison system produces around 9 SREC-IIs per year, worth $750 to $800 annually.",
    },
    {
      q: "How long does a solar permit take in Edison?",
      a: "Edison Township Building Department typically runs residential solar permits in 2 to 5 weeks. Surrounding Middlesex County townships run 2 to 5 weeks typically. PSE&G interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Edison?",
      a: "Edison runs about $3.00 per watt installed for residential, slightly lower than urban Trenton or Newark because of simpler installations, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit and the 15-year SuSI SREC-II income stream, effective net cost is often $7,000 to $9,000.",
    },
    {
      q: "Is solar worth it in Edison?",
      a: "Yes substantially. The combination of PSE&G retail net metering, 15 years of SuSI SREC-II payments, and the 30 percent federal credit makes residential solar payback typically 5 to 7 years for Edison homes with suitable roofs.",
    },
  ],
};
