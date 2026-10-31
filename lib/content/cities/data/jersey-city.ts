import type { City } from "../types";

export const JERSEY_CITY: City = {
  slug: "jersey-city",
  stateSlug: "new-jersey",
  name: "Jersey City",
  title: "Solar in Jersey City: PSE&G, SuSI SREC-II and Hudson County permits",
  metaTitle: "Solar Companies in Jersey City: PSE&G, SuSI SREC-II, Permits",
  metaDescription:
    "Honest guide to solar in Jersey City: PSE&G net metering, Successor Solar Incentive SREC-II payments, Hudson County permits, rowhouse engineering challenges, and running a solar company in JC.",
  answer:
    "Jersey City solar economics match Newark (PSE&G retail net metering, SuSI SREC-II payments, 30 percent federal credit) but the housing stock is dominated by brownstones and rowhouses with limited roof areas. Hudson County permits run 4 to 8 weeks typically. The condominium-dense neighbourhoods near the waterfront require condo-board approvals that add weeks to timelines.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 207,
    note: "Jersey City has essentially the same climate as Newark: 4.3 peak sun hours per day, 207 sunny days per year. Winter snow is a modest factor. Urban shading from neighbouring buildings is significant in dense neighbourhoods (Downtown, Journal Square, Heights); honest shade audits by neighbourhood matter.",
  },
  market: {
    metroPopulationK: 290,
    averageCostPerWatt: 3.15,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "High",
  },
  utilities: [
    "Public Service Electric & Gas (PSE&G), investor-owned, serves most of Hudson County including Jersey City",
    "Orange & Rockland (Con Edison subsidiary) serves parts of northeast NJ",
  ],
  permits: {
    office: "Jersey City Department of Housing, Economic Development and Commerce, plus Hudson County for some projects",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Jersey City Department of Housing, Economic Development and Commerce typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Multi-unit and condo buildings require additional structural review and condo-board approvals that run in parallel. PSE&G interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Jersey City means operating in a dense urban market where rowhouse rooftops, condo-dominated housing stock and tight building setbacks constrain system size per project. The best Jersey City operators have templated workflows for the common building types (brownstone, three-family, condo building) and relationships with the condominium associations that cover the waterfront developments. SuSI registration within 180 days of permission to operate matters as much as in Newark. Lead costs run $140 to $240 on Google search.",
  faq: [
    {
      q: "Does PSE&G serve Jersey City?",
      a: "Yes. PSE&G serves most of Hudson County including Jersey City. The utility operates retail-rate net metering for residential solar under New Jersey rules. Interconnection application runs through PSE&G's online solar portal.",
    },
    {
      q: "What is SuSI (Successor Solar Incentive)?",
      a: "SuSI is New Jersey's current residential solar incentive, which pays residential installations approximately $85 per SREC-II (one certificate per megawatt-hour of generation) for a 15-year contract term. A typical 5 kW system (realistic for Jersey City rowhouse roofs) produces around 6 to 7 SREC-IIs per year, worth $500 to $600 annually. The incentive stacks with the 30 percent federal tax credit.",
    },
    {
      q: "How long does a solar permit take in Jersey City?",
      a: "Jersey City Department of Housing, Economic Development and Commerce typically runs residential solar permits in 4 to 8 weeks. Multi-unit and condo buildings require condo-board approval, which can add weeks to months. PSE&G interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Jersey City?",
      a: "Jersey City runs about $3.15 per watt installed for residential, meaning a 5 kW system (typical for JC rowhouse roofs) costs around $15,750 gross. After the 30 percent federal tax credit and the 15-year SuSI SREC-II income stream, effective net cost is often $5,000 to $7,000.",
    },
    {
      q: "Is solar worth it in Jersey City?",
      a: "Yes substantially, especially for homes with unshaded roofs. The combination of PSE&G retail net metering, 15 years of SuSI SREC-II payments, and the 30 percent federal tax credit makes residential solar payback typically 5 to 7 years for Jersey City homes. Rowhouse-specific engineering (party-wall structural analysis) adds complexity that some installers underestimate.",
    },
  ],
};
