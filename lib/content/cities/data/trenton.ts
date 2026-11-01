import type { City } from "../types";

export const TRENTON: City = {
  slug: "trenton",
  stateSlug: "new-jersey",
  name: "Trenton",
  title: "Solar in Trenton: PSE&G, SuSI SREC-II and capital region permits",
  metaTitle: "Solar Companies in Trenton NJ: PSE&G, SuSI, Permits",
  metaDescription:
    "Honest guide to solar in Trenton New Jersey: PSE&G retail net metering, SuSI SREC-II payments, City of Trenton permits, and running a solar company in Mercer County.",
  answer:
    "Trenton is served by PSE&G under retail-rate net metering plus 15 years of SuSI SREC-II payments. The combination with the federal tax credit makes Trenton solar economics among the strongest in the US. Permits run through the City of Trenton Division of Inspections.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 203,
    note: "Trenton gets around 4.3 peak sun hours per day with 203 sunny days per year, moderate for solar. Winter snow derating is modest (5 to 15 percent annual loss). Summer thunderstorms reduce afternoon production.",
  },
  market: {
    metroPopulationK: 390,
    averageCostPerWatt: 3.05,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "Public Service Electric & Gas (PSE&G), investor-owned, serves most of Mercer County including Trenton",
    "JCP&L (First Energy subsidiary) serves parts of surrounding counties",
  ],
  permits: {
    office: "City of Trenton Division of Inspections",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Trenton Division of Inspections typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Surrounding Mercer County jurisdictions (Hamilton, Ewing, Lawrence) run their own permits with 2 to 5 week typical timelines. PSE&G interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Trenton means working in the strong-economics NJ residential solar market. The best Trenton operators have templated SuSI registration workflows (SREC-II registration must happen within 180 days of permission to operate), handle PSE&G interconnection fluently, and understand the capital-region housing stock. Lead costs run $130 to $220 on Google search.",
  faq: [
    {
      q: "Does PSE&G have net metering in Trenton?",
      a: "Yes, retail-rate net metering for residential solar systems. PSE&G credits exports at retail monthly; annual true-up at year-end is either rolled over or paid at avoided cost.",
    },
    {
      q: "What is SuSI for Trenton?",
      a: "The Successor Solar Incentive (SuSI) pays residential installations approximately $85 per SREC-II for 15 years. A typical 7 kW Trenton system produces around 9 SREC-IIs per year, worth $750 to $800 annually.",
    },
    {
      q: "How long does a solar permit take in Trenton?",
      a: "City of Trenton Division of Inspections typically runs residential solar permits in 3 to 6 weeks. Surrounding Mercer County jurisdictions run 2 to 5 weeks typically. PSE&G interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Trenton?",
      a: "Trenton runs about $3.05 per watt installed for residential, meaning a 7 kW system typically costs around $21,400 gross. After the 30 percent federal tax credit and the 15-year SuSI SREC-II income stream (present value approximately $7,500 to $9,000), effective net cost is often $7,000 to $9,000.",
    },
    {
      q: "Is solar worth it in Trenton?",
      a: "Yes substantially. The combination of PSE&G retail net metering, 15 years of SuSI SREC-II payments, and the 30 percent federal tax credit makes residential solar payback typically 5 to 7 years for Trenton homes with suitable roofs.",
    },
  ],
};
