import type { State } from "../types";

export const NEW_MEXICO: State = {
  slug: "new-mexico",
  name: "New Mexico",
  abbr: "NM",
  title: "Solar in New Mexico: market, incentives and state tax credit",
  metaTitle: "Solar Companies in New Mexico: Market, Incentives, Net Metering",
  metaDescription:
    "Honest guide to New Mexico solar: market size, excellent sun hours, state solar market development tax credit, PNM and El Paso Electric net metering, and running a solar company in NM.",
  answer:
    "New Mexico is the twenty-second-largest US solar market with over 1,700 MW installed. The state has some of the strongest sun hours in the US (6+ peak sun hours per day in Albuquerque), retail net metering under PNM and El Paso Electric, and a 10 percent state solar tax credit capped at $6,000 that stacks on the federal 30 percent.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 1700,
    homesPoweredK: 310,
    percentOfElectricity: 11,
    jobs: 2900,
    averageCostPerWatt: 2.5,
    nationalRank: 22,
  },
  marketNotes:
    "New Mexico's solar market has grown steadily since the 2020 Energy Transition Act set a 100 percent carbon-free electricity target by 2045. Residential solar growth has been concentrated in Albuquerque, Santa Fe and Las Cruces. The state's combination of excellent sun hours and the 10 percent state tax credit (reinstated in 2020) produces strong per-household economics.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "New Mexico offers full retail net metering for residential solar systems at PNM and El Paso Electric. Credits accrue monthly; annual excess is credited at avoided-cost rate. The regime has been stable since 2007 with periodic cap increases.",
  },
  averageRate: 0.14,
  rateNote:
    "New Mexico residential rates average around $0.14 per kWh at PNM, slightly higher at El Paso Electric. Time-of-use rates are available on an opt-in basis. Rates have risen modestly in recent years.",
  utilities: ["PNM (Public Service Company of New Mexico)", "El Paso Electric (southern NM)", "Xcel Energy New Mexico (SPS)", "Various electric cooperatives"],
  incentives: [
    {
      name: "New Mexico Solar Market Development Tax Credit",
      text: "10 percent state income-tax credit on residential solar system cost, capped at $6,000. Non-refundable; carries forward up to 10 years. Reinstated in 2020 and extended; current programme runs through 2032. Applies in addition to the 30 percent federal credit.",
    },
    {
      name: "Property-tax exemption",
      text: "New Mexico exempts the added value of residential solar systems from property-tax assessment under NMSA 7-37-5.9. Automatic.",
    },
    {
      name: "Gross receipts tax deduction on solar equipment",
      text: "Residential solar equipment can be deducted from the gross receipts tax (New Mexico's sales tax equivalent) under NMSA 7-9-114. Applied at the installer level, so the installer passes the savings on to the customer in pricing.",
    },
    {
      name: "Sustainable Building Tax Credit",
      text: "Up to $6,500 state income-tax credit for new construction meeting high-performance building standards (which solar can contribute to). Applies to new builds, not retrofits.",
    },
  ],
  permits:
    "Permit timelines in New Mexico vary by jurisdiction. Albuquerque and Santa Fe commonly take 3 to 5 weeks for residential. SolarAPP+ adoption is limited. Interconnection with PNM typically runs 3 to 5 weeks post-install, El Paso Electric similar.",
  installerLandscape:
    "Running a solar company in New Mexico means operating in a market with excellent sun fundamentals and strong state policy support. The installers who have grown fastest build the state 10 percent tax credit into every proposal and have detailed knowledge of PNM vs El Paso Electric rate structures. Albuquerque has moderate lead costs ($100 to $150 range) and the rest of the state is cheaper and underserved.",
  faq: [
    {
      q: "Does New Mexico have net metering?",
      a: "Yes, full retail net metering at PNM and El Paso Electric for residential solar systems. Credits accrue monthly; year-end excess at avoided-cost rate. The regime has been stable since 2007.",
    },
    {
      q: "What is the New Mexico solar tax credit?",
      a: "10 percent of the installed system cost, capped at $6,000 per taxpayer. Non-refundable but carries forward up to 10 tax years. Reinstated in 2020 and extended through 2032. Combined with the 30 percent federal credit, total tax-based incentive on a typical $17,500 residential system can exceed $7,000.",
    },
    {
      q: "How much does solar cost in New Mexico?",
      a: "Residential solar in New Mexico averages around $2.50 per watt installed, meaning a typical 7 kW system costs about $17,500 gross. After the 30 percent federal credit and 10 percent state credit, net cost is around $10,500. New Mexico has among the lowest installed costs in the US.",
    },
    {
      q: "Is solar worth it in New Mexico?",
      a: "Yes, with some of the best fundamentals in the US. New Mexico's combination of 6+ peak sun hours per day, retail NEM, 10 percent state tax credit, 30 percent federal credit, and property tax exemption produces 5 to 8 year payback for most residential installations.",
    },
  ],
};
