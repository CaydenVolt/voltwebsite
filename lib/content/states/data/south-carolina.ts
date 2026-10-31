import type { State } from "../types";

export const SOUTH_CAROLINA: State = {
  slug: "south-carolina",
  name: "South Carolina",
  abbr: "SC",
  title: "Solar in South Carolina: market, incentives and SREC reality",
  metaTitle: "Solar Companies in South Carolina: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to South Carolina solar: market size, Duke/Dominion/Santee Cooper net metering, state tax credit, and running a solar company in SC.",
  answer:
    "South Carolina is the fourteenth-largest US solar market with over 2,400 MW installed. The state has one of the strongest residential solar economics in the Southeast thanks to retail net metering across the major utilities, a 25 percent state tax credit on top of the federal 30 percent, and some of the highest residential electric rates in the region.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 2400,
    homesPoweredK: 280,
    percentOfElectricity: 6,
    jobs: 3200,
    averageCostPerWatt: 2.6,
    nationalRank: 14,
  },
  marketNotes:
    "South Carolina's solar market has been shaped by the 2014 Distributed Energy Resource Program Act and subsequent 2019 Energy Freedom Act, both of which supported residential solar growth. The state has one of the highest per-household solar economics in the Southeast thanks to the stacked tax credits (30 percent federal + 25 percent state). Growth has been steady, concentrated in the Charleston, Columbia, Greenville and Myrtle Beach metros.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "South Carolina offers retail-rate net metering for residential solar customers at Duke Energy, Dominion Energy and Santee Cooper. Credits accrue monthly; annual excess is credited at avoided-cost rate. The programme caps have been raised multiple times to accommodate growth.",
  },
  averageRate: 0.14,
  rateNote:
    "South Carolina residential rates average around $0.14 per kWh. Rates have risen approximately 15 percent since 2022, driven by Duke Energy and Dominion Energy rate cases.",
  utilities: ["Duke Energy Carolinas", "Duke Energy Progress", "Dominion Energy South Carolina", "Santee Cooper"],
  incentives: [
    {
      name: "South Carolina Solar Tax Credit",
      text: "25 percent state income-tax credit on residential solar system cost, capped at $3,500 per year, with a lifetime cap of $35,000. Carries forward up to 10 years. Applies in addition to the 30 percent federal credit.",
    },
    {
      name: "Property-tax exemption",
      text: "South Carolina exempts the added value of residential solar systems from property-tax assessment. Automatic.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Residential solar PV equipment is exempt from South Carolina's 6 percent sales tax under the renewable energy equipment exemption.",
    },
  ],
  permits:
    "Permit timelines in South Carolina vary by county. Charleston, Columbia, Greenville and Myrtle Beach metros commonly take 2 to 5 weeks for residential. SolarAPP+ adoption is limited. Interconnection with Duke Energy and Dominion typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in South Carolina means operating in a market with some of the strongest per-household economics in the Southeast: retail NEM plus 25 percent state tax credit plus 30 percent federal plus sales and property tax exemption. The customers who sign are often doing so because the stacked incentives shorten payback below 6 years in many cases. Lead costs on Google Search are moderate ($90 to $140 range) and competition is building but less saturated than Florida or North Carolina.",
  faq: [
    {
      q: "Does South Carolina have net metering?",
      a: "Yes, full retail net metering at Duke Energy, Dominion Energy and Santee Cooper. Credits accrue monthly; annual excess is credited at avoided-cost rate. Programme caps have been raised multiple times under the Energy Freedom Act (2019).",
    },
    {
      q: "What is the South Carolina solar tax credit?",
      a: "25 percent of the installed system cost, capped at $3,500 per year and $35,000 lifetime. Carries forward up to 10 years. Combined with the 30 percent federal Residential Clean Energy Credit, total tax-based incentive on a typical $20,000 residential system can exceed $11,000.",
    },
    {
      q: "How much does solar cost in South Carolina?",
      a: "Residential solar in SC averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal credit and 25 percent state credit (capped at $3,500), net cost is around $9,500 to $11,000.",
    },
    {
      q: "Is solar worth it in South Carolina?",
      a: "Yes, with some of the strongest stacked economics in the Southeast. South Carolina's combination of retail NEM, 25 percent state tax credit, 30 percent federal credit, and sales and property tax exemption produces 5 to 8 year payback for most residential installations.",
    },
  ],
};
