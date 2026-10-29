import type { State } from "../types";

export const GEORGIA: State = {
  slug: "georgia",
  name: "Georgia",
  abbr: "GA",
  title: "Solar in Georgia: market, incentives and the net-metering reality",
  metaTitle: "Solar Companies in Georgia: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Georgia solar: market size, Georgia Power's limited net metering, the municipal and co-op landscape, and running a solar company in GA.",
  answer:
    "Georgia is the tenth-largest US solar market by installed capacity, dominated by utility-scale solar. Residential has lagged partly because Georgia Power's net-metering programme has been capped and credit rates have been less favourable than most states. Municipal utilities and EMCs (electric membership co-ops) often have better residential solar programmes than Georgia Power territory.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 7300,
    homesPoweredK: 850,
    percentOfElectricity: 7,
    jobs: 5200,
    averageCostPerWatt: 2.6,
    nationalRank: 10,
  },
  marketNotes:
    "Georgia's solar market has been built on utility-scale: Georgia Power is one of the largest utility solar developers in the Southeast. Residential has grown slowly, hampered by net-metering caps and modest state incentives. Growth has picked up in EMC territory (Cobb EMC, Jackson EMC, Walton EMC) where net-metering policies have been more favourable than Georgia Power's.",
  netMetering: {
    status: "Partial net metering",
    explanation:
      "Georgia Power's residential net-metering programme has been capped at a cumulative statewide level and the capacity is often fully subscribed. New Georgia Power residential solar customers who miss the cap are placed on a monthly net-billing arrangement with export credits at the utility's avoided-cost rate (around $0.03 to $0.04 per kWh), substantially lower than retail. Municipal utilities and EMCs set their own policies, several of which offer stronger residential terms.",
  },
  averageRate: 0.14,
  rateNote:
    "Georgia residential rates average around $0.14 per kWh at Georgia Power. Rates have risen approximately 15 percent since 2022. Most municipal utilities and EMCs are in a similar range. Time-of-use rates are available on an opt-in basis.",
  utilities: ["Georgia Power", "Various electric membership co-ops (Cobb EMC, Jackson EMC, Walton EMC, and others)", "Municipal utilities (Marietta Power, Macon-Bibb)"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Georgia does not currently have a state income-tax credit for residential solar. The main tax-based incentive is the 30 percent federal Residential Clean Energy Credit. A previous state credit expired in 2016 and has not been renewed.",
    },
    {
      name: "Sales-tax exemption on commercial solar equipment",
      text: "Georgia offers a sales-tax exemption on solar equipment for commercial installations but not for residential. Residential installations pay the standard state and local sales tax on equipment.",
    },
    {
      name: "Property-tax treatment varies by county",
      text: "Georgia does not have a statewide property-tax exemption for residential solar. Treatment varies by county: some counties exclude the added value of solar from assessment, others include it. Check with the local county tax assessor.",
    },
    {
      name: "Cobb EMC Smart Neighborhood programme",
      text: "Cobb EMC offers rebates and net-metering terms more favourable than Georgia Power for members installing residential solar. Several other EMCs in Georgia have similar member-benefit programmes; the specifics vary by co-op.",
    },
  ],
  permits:
    "Permit timelines in Georgia vary widely by jurisdiction. Metro Atlanta counties (Fulton, DeKalb, Cobb, Gwinnett) commonly take 3 to 6 weeks for residential; smaller counties are often faster. SolarAPP+ adoption is limited. Interconnection with Georgia Power typically runs 4 to 8 weeks post-install, longer than most states; EMC interconnection is often faster.",
  installerLandscape:
    "Running a solar company in Georgia means operating in a complex utility landscape where the net-metering economics depend heavily on which utility serves the customer. The installers who have grown fastest tend to specialise in EMC territory (where the economics are more favourable) rather than fighting Georgia Power's capped programme. Metro Atlanta has moderate lead costs ($100 to $160 range on Google Search); the rest of the state is cheaper and underserved. Growth drivers in the next three years are expected to be the federal tax credit certainty and the ongoing legislative conversation about state-level solar access reform.",
  faq: [
    {
      q: "Does Georgia have net metering?",
      a: "Yes, but with significant limitations. Georgia Power's residential net-metering programme has been capped at a cumulative statewide level and is often fully subscribed. Customers who miss the cap are placed on a monthly net-billing arrangement with export credits at the utility's avoided-cost rate (around $0.03 to $0.04 per kWh). Several electric membership co-ops offer better residential terms.",
    },
    {
      q: "How much does solar cost in Georgia?",
      a: "Residential solar in Georgia averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal tax credit, net cost is around $12,600. Georgia does not have a state solar tax credit, so the federal credit is the only tax-based incentive.",
    },
    {
      q: "Is solar worth it in Georgia?",
      a: "Yes, in most of the state, with payback typically 10 to 13 years for Georgia Power residential customers with the federal tax credit, and 8 to 11 years for EMC customers with more favourable net-metering terms. Longer than the Sun Belt leaders but still a positive-ROI investment over a 25-year system lifetime.",
    },
    {
      q: "Does Georgia have a state solar tax credit?",
      a: "No. Georgia's previous state solar tax credit expired in 2016 and has not been renewed. The only tax-based incentive currently is the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      q: "What is the difference between Georgia Power and EMC solar programmes?",
      a: "Georgia Power's residential net-metering programme has been capped at a cumulative statewide level, with customers above the cap placed on avoided-cost export credit. Electric membership co-ops (Cobb EMC, Jackson EMC, Walton EMC, and others) set their own net-metering policies, several of which are more favourable than Georgia Power's. For a Georgia homeowner considering solar, confirming which utility serves the address is one of the most important early steps.",
    },
  ],
};
