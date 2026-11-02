import type { City } from "../types";

export const SCRANTON: City = {
  slug: "scranton",
  stateSlug: "pennsylvania",
  name: "Scranton",
  title: "Solar in Scranton: PPL Electric Utilities and Lackawanna County permits",
  metaTitle: "Solar Companies in Scranton: PPL Electric, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Scranton Pennsylvania: PPL Electric Utilities net metering, PA SREC market, City of Scranton permits, and running a solar company in NEPA.",
  answer:
    "Scranton is served by PPL Electric Utilities under Pennsylvania retail net metering plus AEPS SREC income. The Northeastern Pennsylvania (NEPA) winter is harsher than Allentown or Philadelphia. Permits run through the City of Scranton Department of Licensing, Inspections and Permits.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.0,
    sunnyDays: 168,
    note: "Scranton gets around 4.0 peak sun hours per day with 168 sunny days per year, moderate-to-low for solar. Winter snow derating is substantial (15 to 20 percent annual loss) because of NEPA's extended cold season and modest cloud cover from the Pocono mountains.",
  },
  market: {
    metroPopulationK: 560,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "PPL Electric Utilities, investor-owned, serves most of NEPA including Scranton",
    "Various electric cooperatives (Claverack Rural Electric Cooperative) serve outlying rural areas",
  ],
  permits: {
    office: "City of Scranton Department of Licensing, Inspections and Permits",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Scranton Department of Licensing, Inspections and Permits typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Lackawanna and Luzerne counties run 2 to 5 weeks typically. PPL Electric interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Scranton means working the NEPA market with PPL Electric. The best Scranton operators are explicit about winter snow derating in sales conversations, have templated PA SREC workflows, and handle PPL interconnection fluently. Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does PPL Electric serve Scranton?",
      a: "Yes. PPL Electric Utilities serves most of Northeastern Pennsylvania including Scranton under Pennsylvania PUC net metering rules.",
    },
    {
      q: "How long does a solar permit take in Scranton?",
      a: "City of Scranton Department of Licensing, Inspections and Permits typically runs residential solar permits in 3 to 5 weeks. PPL Electric interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Scranton?",
      a: "Scranton runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500.",
    },
    {
      q: "Is solar worth it in Scranton?",
      a: "Yes for Scranton homes with unshaded roofs. The combination of PPL retail NEM, PA SREC income, and the federal tax credit makes residential solar payback typically 10 to 13 years. Winter snow derating stretches payback compared with warmer PA metros.",
    },
  ],
};
