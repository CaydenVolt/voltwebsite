import type { City } from "../types";

export const HARRISBURG: City = {
  slug: "harrisburg",
  stateSlug: "pennsylvania",
  name: "Harrisburg",
  title: "Solar in Harrisburg: PPL Electric and Pennsylvania state capital",
  metaTitle: "Solar Companies in Harrisburg: PPL Electric, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Harrisburg Pennsylvania: PPL Electric Utilities net metering, PA SREC market, City of Harrisburg permits, and running a solar company in Dauphin County.",
  answer:
    "Harrisburg is served by PPL Electric Utilities (same utility as Allentown and Scranton), under Pennsylvania retail net metering plus AEPS SREC income. Permits run through the City of Harrisburg Department of Building and Housing.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 198,
    note: "Harrisburg gets around 4.3 peak sun hours per day with 198 sunny days per year, moderate for solar. Winter snow derating is modest to substantial (10 to 18 percent annual loss). Summer thunderstorms reduce afternoon production.",
  },
  market: {
    metroPopulationK: 580,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "PPL Electric Utilities, investor-owned, serves most of Dauphin County including Harrisburg",
    "Met-Ed (FirstEnergy subsidiary) serves parts of surrounding counties",
  ],
  permits: {
    office: "City of Harrisburg Department of Building and Housing",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Harrisburg Department of Building and Housing typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Dauphin and Cumberland county jurisdictions run 2 to 5 weeks typically. PPL Electric interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Harrisburg means working under PPL Electric (same utility as Allentown, Scranton). The best Harrisburg operators have templated PA SREC registration workflows, handle PPL interconnection fluently, and understand the state capital's historic district overlays. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does PPL Electric serve Harrisburg?",
      a: "Yes. PPL Electric Utilities serves most of Dauphin County including Harrisburg. Same utility that serves Allentown, Scranton and most of central PA.",
    },
    {
      q: "How long does a solar permit take in Harrisburg?",
      a: "City of Harrisburg Department of Building and Housing typically runs residential solar permits in 3 to 5 weeks. Surrounding Dauphin and Cumberland counties run 2 to 5 weeks typically. PPL Electric interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Harrisburg?",
      a: "Harrisburg runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. SREC income adds roughly $200 to $280 per year on top.",
    },
    {
      q: "Is solar worth it in Harrisburg?",
      a: "Yes for Harrisburg homes with unshaded roofs. The combination of PPL Electric retail NEM, PA SREC income and the federal tax credit makes residential solar payback typically 9 to 12 years.",
    },
  ],
};
