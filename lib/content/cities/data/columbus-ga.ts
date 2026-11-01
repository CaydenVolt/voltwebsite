import type { City } from "../types";

export const COLUMBUS_GA: City = {
  slug: "columbus-ga",
  stateSlug: "georgia",
  name: "Columbus",
  title: "Solar in Columbus GA: Georgia Power and Muscogee County permits",
  metaTitle: "Solar Companies in Columbus GA: Georgia Power, Permits",
  metaDescription:
    "Honest guide to solar in Columbus Georgia: Georgia Power non-retail net metering, Columbus Consolidated Government permits, and running a solar company near Fort Moore.",
  answer:
    "Columbus Georgia is served by Georgia Power under the utility's non-retail export compensation (avoided cost around $0.03 per kWh). The economics work only with careful sizing to self-consumption plus the federal tax credit. Columbus borders Alabama, so a few neighbouring addresses may fall under Alabama Power service instead. Permits run through Columbus Consolidated Government Inspections and Code Enforcement.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 221,
    note: "Columbus Georgia gets around 4.9 peak sun hours per day with 221 sunny days per year, strong for solar. Summer thunderstorms reduce afternoon production. Chattahoochee Valley climate is favourable overall. Pine pollen in spring reduces panel output temporarily.",
  },
  market: {
    metroPopulationK: 320,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Georgia Power (Southern Company subsidiary), investor-owned, serves most of Muscogee County including Columbus",
    "Various electric cooperatives serve outlying rural areas",
  ],
  permits: {
    office: "Columbus Consolidated Government Inspections and Code Enforcement",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Columbus Consolidated Government Inspections and Code Enforcement typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Georgia Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Columbus Georgia means working under Georgia Power's non-retail net metering. The best Columbus operators size systems to self-consumption, run honest load-match analyses, and verify utility by address at the Alabama state line (a few addresses may be on Alabama Power). Fort Moore (formerly Fort Benning) military-relocation turnover affects the housing market. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Georgia Power have net metering in Columbus GA?",
      a: "Not retail-rate. Georgia Power credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.12. The economics work when systems are sized to self-consumption.",
    },
    {
      q: "How long does a solar permit take in Columbus GA?",
      a: "Columbus Consolidated Government Inspections and Code Enforcement typically runs residential solar permits in 3 to 5 weeks. Georgia Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Columbus GA?",
      a: "Columbus Georgia runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Georgia has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Columbus GA?",
      a: "For Columbus homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM Southeast peers: typically 11 to 14 years with the federal tax credit. Right-sized systems that match annual load pencil out better than oversized ones under Georgia Power's avoided-cost export rate.",
    },
  ],
};
