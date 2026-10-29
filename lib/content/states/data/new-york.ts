import type { State } from "../types";

export const NEW_YORK: State = {
  slug: "new-york",
  name: "New York",
  abbr: "NY",
  title: "Solar in New York: market, incentives and VDER reality",
  metaTitle: "Solar Companies in New York: Market, Incentives, VDER",
  metaDescription:
    "Honest guide to New York solar: market size, VDER value stack, NY-Sun rebates, major utilities, and what it is like to run a solar company in NY.",
  answer:
    "New York is the seventh-largest US solar market with over 6,500 MW installed. The state replaced retail net metering with the Value of Distributed Energy Resources (VDER) tariff for commercial-scale projects, while residential customers still receive full retail net metering credits under Phase One VDER. The NY-Sun rebate programme provides an upfront incentive on top of the federal tax credit.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 6600,
    homesPoweredK: 1150,
    percentOfElectricity: 5,
    jobs: 15500,
    averageCostPerWatt: 2.9,
    nationalRank: 7,
  },
  marketNotes:
    "New York's solar market has been shaped by aggressive state climate policy (Climate Leadership and Community Protection Act, 2019 net-zero target by 2050) and the NY-Sun programme, which has delivered over $1 billion in solar rebates since 2014. Growth has been steady, with a strong mix of residential, commercial and community solar. Long Island, the Hudson Valley and Western NY have been the strongest residential markets.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Residential solar customers in New York still receive full retail net metering credits under Phase One VDER. Non-residential systems above 5 MW use the Value Stack, which credits exports based on energy value, capacity value, environmental value and demand reduction value components. The residential full retail credit has survived multiple reform attempts.",
  },
  averageRate: 0.21,
  rateNote:
    "New York residential rates average around $0.21 per kWh across the state, with wide variation: Con Edison (NYC) is often the highest in the US outside Hawaii at $0.30+, while upstate utilities like National Grid run closer to $0.17. Time-of-use rates are optional and increasingly common.",
  utilities: ["Con Edison", "National Grid (upstate)", "NYSEG", "RG&E", "PSEG Long Island", "Central Hudson", "Orange & Rockland"],
  incentives: [
    {
      name: "NY-Sun Residential Incentive",
      text: "NYSERDA's NY-Sun programme provides a per-watt upfront rebate for residential solar installations, applied directly by the installer. Rebate amount varies by region and declines as regional capacity is installed. Typical residential rebate: $200 to $500 for a 7 kW system in 2026.",
    },
    {
      name: "New York State Solar Energy System Equipment Credit",
      text: "25 percent state income-tax credit on residential solar system cost, capped at $5,000. Non-refundable; carries forward for up to 5 years. Applies in addition to the 30 percent federal credit, which combined can bring net cost well below 50 percent of gross.",
    },
    {
      name: "Property-tax exemption",
      text: "New York State's Real Property Tax Law Section 487 exempts the added assessed value of a residential solar system from property tax for 15 years. The exemption is at the option of each local government; most jurisdictions have opted in.",
    },
    {
      name: "Sales-tax exemption",
      text: "Residential solar PV equipment is exempt from New York State's 4 percent sales tax; local sales tax exemption varies by county (most counties have opted in).",
    },
    {
      name: "Energy Storage Rewards (Long Island only)",
      text: "PSEG Long Island offers a direct cash incentive for residential energy storage paired with new or existing solar, through the LI Energy Storage Rewards programme. Payment per kW of installed storage, capped per customer.",
    },
  ],
  permits:
    "Permit timelines in New York vary dramatically by jurisdiction. New York City uses the Department of Buildings for permits with timelines of 4 to 10 weeks (longer than most states); Long Island permits through local towns are typically 3 to 6 weeks. Upstate jurisdictions are generally faster. Interconnection timelines are often 4 to 8 weeks post-install, longer in Con Edison territory.",
  installerLandscape:
    "Running a solar company in New York means operating in a market with strong state policy support (NY-Sun rebates, state tax credit, property-tax exemption, sales-tax exemption) but also with the slowest permits and interconnection in the top 10 states. The installers who have scaled fastest are typically specialists in one geographic sub-market (NYC and Long Island are very different from Buffalo and Rochester) rather than statewide operators. Lead costs on Google Search are high in NYC metro ($180 to $300) and more reasonable upstate ($100 to $160).",
  faq: [
    {
      q: "Does New York have net metering?",
      a: "Yes for residential, under Phase One VDER. Residential solar customers receive full retail net metering credits for exports. Non-residential systems above 5 MW use the Value Stack, which credits exports based on multiple value components rather than a single retail rate.",
    },
    {
      q: "What is the NY-Sun rebate?",
      a: "NY-Sun is a NYSERDA-administered residential solar rebate programme that provides a per-watt upfront incentive, applied directly by the installer at the time of installation. Rebate amount varies by region and declines as regional capacity is installed. Typical rebate for a 7 kW residential system in 2026 is $200 to $500 depending on region.",
    },
    {
      q: "What is the New York state solar tax credit?",
      a: "25 percent of the installed system cost, capped at $5,000. Non-refundable but carries forward for up to 5 tax years. Combined with the 30 percent federal Residential Clean Energy Credit, total tax-based incentive on a $25,000 residential system can exceed $12,500.",
    },
    {
      q: "How much does solar cost in New York?",
      a: "Residential solar in New York averages around $2.90 per watt installed, among the higher in the US due to labour costs and permit complexity. A typical 7 kW system costs about $20,000 gross. After the NY-Sun rebate, 30 percent federal credit and 25 percent state credit, net cost is often under $9,000.",
    },
    {
      q: "How many solar companies are in New York?",
      a: "Roughly 400 to 500 licensed solar contractors operate in New York, concentrated in NYC metro, Long Island, Hudson Valley and the Western NY cities. The market is relatively fragmented: no single installer dominates statewide; most are regional specialists.",
    },
  ],
};
