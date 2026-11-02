import type { City } from "../types";

export const ALBANY_GA: City = {
  slug: "albany-ga",
  stateSlug: "georgia",
  name: "Albany",
  title: "Solar in Albany GA: Georgia Power and Southwest Georgia permits",
  metaTitle: "Solar Companies in Albany GA: Georgia Power, Permits",
  metaDescription:
    "Honest guide to solar in Albany Georgia: Georgia Power non-retail net metering, Dougherty County permits, Southwest Georgia climate, and running a solar company in Albany.",
  answer:
    "Albany Georgia is served by Georgia Power under the state's non-retail NEM. Same economics as Atlanta, Savannah, Augusta: exports credit at avoided cost (around $0.03 per kWh). Self-consumption sizing is essential. Permits run through the City of Albany Code Enforcement.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 221,
    note: "Albany Georgia gets around 4.9 peak sun hours per day with 221 sunny days per year, strong for solar. Southwest Georgia climate; summer heat is intense. Hurricane remnants occasionally bring heavy rain and wind. Pine pollen in spring.",
  },
  market: {
    metroPopulationK: 150,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 80, high: 150 },
    installerDensity: "Low",
  },
  utilities: [
    "Georgia Power (Southern Company subsidiary), investor-owned, serves most of Dougherty County including Albany",
    "Various electric cooperatives (Mitchell EMC, Sumter EMC) serve surrounding counties",
  ],
  permits: {
    office: "City of Albany Code Enforcement",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Albany Code Enforcement typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Georgia Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Albany GA means working under Georgia Power's non-retail NEM in Southwest Georgia. The best Albany operators size systems to self-consumption, run honest load-match analyses, and spec equipment for the Southwest Georgia summer heat. Lead costs run $80 to $150 on Google search.",
  faq: [
    {
      q: "Does Georgia Power have net metering in Albany GA?",
      a: "Not retail-rate. Georgia Power credits residential solar exports at the utility's avoided cost rate (approximately $0.03 to $0.04 per kWh), substantially below the retail rate of about $0.12. The economics work when systems are sized to self-consumption.",
    },
    {
      q: "How long does a solar permit take in Albany GA?",
      a: "City of Albany Code Enforcement typically runs residential solar permits in 3 to 5 weeks. Georgia Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Albany GA?",
      a: "Albany GA runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Georgia has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Albany GA?",
      a: "For Albany homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM Southeast peers: typically 11 to 14 years with the federal tax credit. Right-sized systems match annual load better than oversized ones under Georgia Power's avoided-cost export rate.",
    },
  ],
};
