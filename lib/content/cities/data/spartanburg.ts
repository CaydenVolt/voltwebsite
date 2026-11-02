import type { City } from "../types";

export const SPARTANBURG: City = {
  slug: "spartanburg",
  stateSlug: "south-carolina",
  name: "Spartanburg",
  title: "Solar in Spartanburg: Duke Energy Carolinas and Upstate SC",
  metaTitle: "Solar Companies in Spartanburg SC: Duke Energy, Permits",
  metaDescription:
    "Honest guide to solar in Spartanburg South Carolina: Duke Energy Carolinas net metering, 25 percent SC state tax credit, City of Spartanburg permits, and running a solar company in the Upstate.",
  answer:
    "Spartanburg is served by Duke Energy Carolinas (same as Charlotte NC and most of western NC/upstate SC), not Dominion Energy SC that serves Columbia. The 25 percent SC state tax credit still applies. Permits run through the City of Spartanburg Building Codes Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 221,
    note: "Spartanburg gets around 4.8 peak sun hours per day with 221 sunny days per year, strong for solar. Upstate SC foothills climate; mild winters and warm summers. Pine pollen in spring is a factor.",
  },
  market: {
    metroPopulationK: 350,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 95, high: 175 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Carolinas (DEC), investor-owned, serves most of Spartanburg County including Spartanburg",
    "Various electric cooperatives (Broad River Electric Cooperative) serve outlying areas",
  ],
  permits: {
    office: "City of Spartanburg Building Codes Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Spartanburg Building Codes Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Duke Energy Carolinas interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Spartanburg means working under Duke Energy Carolinas (same subsidiary that serves Charlotte NC) in Upstate SC. The best Spartanburg operators have templated SC tax credit workflows and understand the DEC Residential Solar Choice rate design. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Does Duke Energy Carolinas serve Spartanburg?",
      a: "Yes. Duke Energy Carolinas (DEC) serves most of Spartanburg County. This is distinct from Dominion Energy SC that serves Columbia and other parts of SC, and distinct from Duke Energy Progress that serves eastern NC.",
    },
    {
      q: "What is the South Carolina solar tax credit?",
      a: "South Carolina offers a 25 percent state income tax credit on residential solar installations, capped at $35,000 or 50 percent of state tax liability per year. Non-refundable; carries forward for up to 10 years. Stacks with the 30 percent federal credit.",
    },
    {
      q: "How long does a solar permit take in Spartanburg?",
      a: "City of Spartanburg Building Codes Services typically runs residential solar permits in 3 to 5 weeks. Duke Energy Carolinas interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Spartanburg?",
      a: "Spartanburg runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit and the 25 percent SC state credit, effective net cost is often $9,000 to $11,000.",
    },
    {
      q: "Is solar worth it in Spartanburg?",
      a: "Yes substantially. The combination of Duke Energy Carolinas net metering, the 25 percent SC state tax credit, and the federal credit makes residential solar payback typically 7 to 9 years. Among the strongest payback economies in the Southeast.",
    },
  ],
};
