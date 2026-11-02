import type { City } from "../types";

export const PATERSON: City = {
  slug: "paterson",
  stateSlug: "new-jersey",
  name: "Paterson",
  title: "Solar in Paterson: PSE&G, SuSI SREC-II and Passaic County permits",
  metaTitle: "Solar Companies in Paterson: PSE&G, SuSI, Permits",
  metaDescription:
    "Honest guide to solar in Paterson New Jersey: PSE&G retail net metering, SuSI SREC-II payments, City of Paterson permits, and running a solar company in Passaic County.",
  answer:
    "Paterson is served by PSE&G under retail-rate net metering plus 15 years of SuSI SREC-II payments. Dense urban housing stock with rowhouses and multi-family dominates. Permits run through the City of Paterson Division of Building and Housing.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 205,
    note: "Paterson gets around 4.3 peak sun hours per day with 205 sunny days per year, moderate for solar. Winter snow derating is modest. Urban shading from neighbouring buildings in dense neighbourhoods matters more than most Paterson installers model.",
  },
  market: {
    metroPopulationK: 160,
    averageCostPerWatt: 3.05,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "Public Service Electric & Gas (PSE&G), investor-owned, serves most of Passaic County including Paterson",
    "Orange & Rockland (Con Edison subsidiary) serves parts of northeast NJ outside Paterson",
  ],
  permits: {
    office: "City of Paterson Division of Building and Housing",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Paterson Division of Building and Housing typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Multi-unit buildings require additional structural review. PSE&G interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Paterson means working in a dense urban market where rowhouse and multi-family rooftops dominate. The best Paterson operators have templated SuSI registration workflows (SREC-II registration must happen within 180 days of permission to operate), handle PSE&G interconnection fluently, and serve the city's substantial Hispanic and Arabic-speaking homeowner base. Lead costs run $130 to $220 on Google search.",
  faq: [
    {
      q: "Does PSE&G have net metering in Paterson?",
      a: "Yes, retail-rate net metering for residential solar systems. PSE&G credits exports at retail monthly; annual true-up at year-end.",
    },
    {
      q: "What is SuSI for Paterson?",
      a: "The Successor Solar Incentive (SuSI) pays residential installations approximately $85 per SREC-II for 15 years. A typical 7 kW system produces around 9 SREC-IIs per year, worth $750 to $800 annually.",
    },
    {
      q: "How long does a solar permit take in Paterson?",
      a: "City of Paterson Division of Building and Housing typically runs residential solar permits in 4 to 8 weeks. PSE&G interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Paterson?",
      a: "Paterson runs about $3.05 per watt installed for residential, meaning a 7 kW system typically costs around $21,400 gross. After the 30 percent federal tax credit and the 15-year SuSI SREC-II income stream, effective net cost is often $7,000 to $9,000.",
    },
    {
      q: "Is solar worth it in Paterson?",
      a: "Yes substantially. The combination of PSE&G retail net metering, 15 years of SuSI SREC-II payments, and the 30 percent federal credit makes residential solar payback typically 5 to 7 years for Paterson homes with suitable roofs.",
    },
  ],
};
