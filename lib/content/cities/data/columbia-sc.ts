import type { City } from "../types";

export const COLUMBIA_SC: City = {
  slug: "columbia-sc",
  stateSlug: "south-carolina",
  name: "Columbia",
  title: "Solar in Columbia SC: Dominion Energy SC and state capital permits",
  metaTitle: "Solar Companies in Columbia SC: Dominion Energy, Permits",
  metaDescription:
    "Honest guide to solar in Columbia South Carolina: Dominion Energy South Carolina retail net metering, 25 percent SC state tax credit, City of Columbia permits, and running a solar company in Richland County.",
  answer:
    "Columbia is served by Dominion Energy South Carolina under retail-rate net metering. South Carolina's 25 percent state solar tax credit (capped $35,000) stacks with the federal 30 percent credit. Permits run through the City of Columbia Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 220,
    note: "Columbia gets around 4.9 peak sun hours per day with 220 sunny days per year, strong for solar. Midlands SC climate; summer heat is intense. Pine pollen in spring reduces panel output temporarily. Hurricane remnants occasionally reach inland.",
  },
  market: {
    metroPopulationK: 850,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 95, high: 175 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Dominion Energy South Carolina, investor-owned, serves most of Richland County including Columbia",
    "Various electric cooperatives (Mid-Carolina Electric Cooperative, Fairfield Electric Cooperative) serve rural outlying areas",
  ],
  permits: {
    office: "City of Columbia Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Columbia Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Dominion Energy SC interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Columbia means working under Dominion Energy SC with the state's 25 percent tax credit (capped $35,000, 10-year carryforward). The best Columbia operators have templated SC tax credit workflows and handle Dominion SC interconnection fluently. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Does Dominion Energy serve Columbia SC?",
      a: "Yes. Dominion Energy South Carolina serves most of Richland County including Columbia. This is distinct from Dominion Energy Virginia that serves Richmond, Alexandria and Hampton Roads.",
    },
    {
      q: "What is the South Carolina solar tax credit?",
      a: "South Carolina offers a 25 percent state income tax credit on residential solar installations, capped at $35,000 or 50 percent of state tax liability per year. Non-refundable; carries forward for up to 10 years. Stacks with the 30 percent federal credit.",
    },
    {
      q: "How long does a solar permit take in Columbia SC?",
      a: "City of Columbia Development Services typically runs residential solar permits in 3 to 5 weeks. Dominion Energy SC interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Columbia SC?",
      a: "Columbia runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit and the 25 percent SC state credit, effective net cost is often $9,000 to $11,000.",
    },
    {
      q: "Is solar worth it in Columbia SC?",
      a: "Yes substantially. The combination of Dominion SC retail NEM, the 25 percent SC state tax credit, and the federal credit makes residential solar payback typically 6 to 8 years for Columbia homes with suitable roofs.",
    },
  ],
};
