import type { State } from "../types";

export const UTAH: State = {
  slug: "utah",
  name: "Utah",
  abbr: "UT",
  title: "Solar in Utah: market, incentives and net billing reality",
  metaTitle: "Solar Companies in Utah: Market, Net Billing, Incentives",
  metaDescription:
    "Honest guide to Utah solar: market size, Rocky Mountain Power's transition from net metering to the Net Billing Service Schedule, state tax credit, and running a solar company in UT.",
  answer:
    "Utah is the twenty-fifth-largest US solar market with over 1,900 MW installed. Residential has been reshaped by Rocky Mountain Power's 2017 shift from retail net metering to the Net Billing Service Schedule: solar exports are credited at an export credit rate (around $0.045 to $0.060 per kWh) rather than retail, which has made system sizing precision important and shifted the economics toward self-consumption.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 1900,
    homesPoweredK: 340,
    percentOfElectricity: 9,
    jobs: 7900,
    averageCostPerWatt: 2.6,
    nationalRank: 25,
  },
  marketNotes:
    "Utah's residential solar market grew rapidly in the mid-2010s under retail net metering before Rocky Mountain Power's 2017 shift to the Net Billing Service Schedule. Volume has stabilised since; residential sales now rely more heavily on the state tax credit, federal credit, and Utah's excellent sun hours (over 5.3 peak sun hours per day in Salt Lake City). Growth is concentrated in the Salt Lake, Provo and St. George metros.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Rocky Mountain Power replaced retail net metering with the Net Billing Service Schedule (schedule 136) in 2017 for new residential solar customers. Exports are credited at an export credit rate currently around $0.045 to $0.060 per kWh, which is lower than the retail rate of about $0.11. Grandfathered pre-2017 customers keep retail-rate net metering through 2035.",
  },
  averageRate: 0.11,
  rateNote:
    "Utah residential rates average around $0.11 per kWh at Rocky Mountain Power, among the lower in the US. Rates have risen approximately 15 percent since 2022.",
  utilities: ["Rocky Mountain Power (serves most of the state)", "Various municipal utilities (Logan, Murray, Bountiful) and co-ops"],
  incentives: [
    {
      name: "Utah Renewable Energy Systems Tax Credit",
      text: "25 percent state income-tax credit on residential solar system cost, capped at $400 (reduced from $1,600 in 2022; the cap steps down $400 each year and phases out entirely by 2026). Applies in addition to the 30 percent federal credit. Confirm the current cap on the Utah Office of Energy Development website before quoting.",
    },
    {
      name: "Property-tax exemption",
      text: "Utah exempts the added value of residential solar systems from property-tax assessment under Utah Code 59-2-108.5. Automatic.",
    },
    {
      name: "No sales-tax exemption",
      text: "Utah does not have a sales-tax exemption on residential solar equipment. The standard 4.85 percent state sales tax plus local additions applies.",
    },
    {
      name: "Net metering grandfathering",
      text: "Residential customers who installed solar before the 2017 shift are grandfathered on retail-rate net metering through 2035. New systems do not qualify.",
    },
  ],
  permits:
    "Permit timelines in Utah vary by jurisdiction. Salt Lake County, Utah County and Davis County commonly take 2 to 5 weeks for residential. SolarAPP+ adoption is growing; Salt Lake City uses it for standard residential installations. Interconnection with Rocky Mountain Power typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Utah means operating in a market reshaped by the Net Billing Service Schedule, where system sizing precision matters more than it did under retail NEM. The installers who have grown fastest are the ones who size systems closer to self-consumption rather than targeting 100 percent offset, and who pair solar with battery storage more often than peer states. Salt Lake metro has moderate lead costs ($100 to $150 range) and the rest of the state is cheaper.",
  faq: [
    {
      q: "Does Utah have net metering?",
      a: "Not in the retail-rate sense since 2017. Rocky Mountain Power's Net Billing Service Schedule (schedule 136) credits residential solar exports at around $0.045 to $0.060 per kWh, lower than the retail rate. Pre-2017 customers are grandfathered on retail NEM through 2035.",
    },
    {
      q: "What is the Utah state solar tax credit?",
      a: "25 percent of the installed system cost, capped at $400 as of 2025 (the cap steps down each year and phases out entirely by 2026 or 2027). Confirm the current cap on the Utah Office of Energy Development website before quoting a customer, as the number moves.",
    },
    {
      q: "How much does solar cost in Utah?",
      a: "Residential solar in Utah averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal tax credit and the (shrinking) state credit, net cost is around $12,000 to $12,500.",
    },
    {
      q: "Is solar worth it in Utah?",
      a: "Yes for most Utah homes with suitable roofs, but with longer payback than full-NEM Sun Belt peers like Arizona or Nevada due to the export credit rate: typically 9 to 13 years for residential installations with the federal tax credit. Pairing solar with battery storage, sized for self-consumption, shortens payback meaningfully under net billing.",
    },
  ],
};
