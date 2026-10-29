import type { State } from "../types";

export const NEW_JERSEY: State = {
  slug: "new-jersey",
  name: "New Jersey",
  abbr: "NJ",
  title: "Solar in New Jersey: market, incentives and SREC-II reality",
  metaTitle: "Solar Companies in New Jersey: SRECs, Incentives, Market",
  metaDescription:
    "Honest guide to New Jersey solar: market size, SREC-II / SuSI programme, net metering, major utilities, and what it is like to run a solar company in NJ.",
  answer:
    "New Jersey is the eighth-largest US solar market with over 5,000 MW installed and historically one of the strongest SREC markets in the country. The state transitioned from legacy SRECs to the Successor Solar Incentive (SuSI) programme in 2021: residential systems earn SREC-II certificates for 15 years at a fixed per-MWh price, stacking on top of full retail net metering and the federal tax credit.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 5100,
    homesPoweredK: 850,
    percentOfElectricity: 7,
    jobs: 7200,
    averageCostPerWatt: 2.9,
    nationalRank: 8,
  },
  marketNotes:
    "New Jersey's residential solar market is small by sun-state standards but has one of the strongest per-household economics in the country, thanks to the SREC-II incentive stacking with retail net metering, high electric rates and the federal tax credit. Growth stalled briefly during the 2021 SREC programme transition and has recovered since.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "New Jersey has full retail net metering. Residential solar customers are credited for exports at the same rate they pay for consumption, with monthly netting and annual true-up at the avoided-cost rate for any annual surplus. The regime has been stable since 2004.",
  },
  averageRate: 0.17,
  rateNote:
    "New Jersey residential rates average around $0.17 per kWh. Most major utilities use flat residential rates; time-of-use is available but uncommon. Rates have risen approximately 15 percent over the past three years.",
  utilities: ["PSE&G (Public Service Electric and Gas)", "JCP&L (Jersey Central Power & Light)", "Atlantic City Electric", "Rockland Electric"],
  incentives: [
    {
      name: "Successor Solar Incentive (SuSI / SREC-II)",
      text: "Residential solar systems earn one SREC-II per MWh produced for 15 years from installation. SREC-II trades at a fixed price (currently $85 per MWh in 2026 for residential projects under the Administratively Determined Incentive). A typical 7 kW residential system in NJ earns roughly $600 to $750 per year in SREC-II payments.",
    },
    {
      name: "Property-tax exemption",
      text: "New Jersey exempts 100 percent of the added value of a residential solar system from property-tax assessment under the Solar Energy System Exemption. Automatic; no application required.",
    },
    {
      name: "Sales-tax exemption",
      text: "Residential solar PV equipment is exempt from New Jersey's 6.625 percent sales tax. Applies at point of sale.",
    },
    {
      name: "Energy Storage Incentive (NJCEP)",
      text: "The NJ Clean Energy Program has a pilot energy-storage incentive that provides a direct cash payment per kWh of installed battery storage, paid at commissioning. Programme funding is capped and renews annually.",
    },
  ],
  permits:
    "Permit timelines in New Jersey vary by municipality. Larger towns in Monmouth, Ocean, and Middlesex counties commonly take 3 to 6 weeks for residential; some smaller jurisdictions are faster but require more inspector trips. SolarAPP+ adoption is limited. Interconnection with PSE&G and JCP&L typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in New Jersey means operating in a market with excellent per-household economics driven by the SREC-II stack, but with relatively modest sun hours (around 4.2 to 4.5 peak sun hours per day) that make system sizing precision important. The installers who have grown fastest tend to be ones who built the SREC-II payment projection cleanly into every proposal, so the customer sees it as cash flow rather than complexity. Cost per lead on Google Search is high ($150 to $250 in most of NJ) because the state's small physical footprint concentrates competition.",
  faq: [
    {
      q: "Does New Jersey have net metering?",
      a: "Yes, full retail net metering. Residential solar customers are credited for exports at the same rate they pay for consumption, with monthly netting and annual true-up at avoided-cost rate for any annual surplus.",
    },
    {
      q: "What is SREC-II in New Jersey?",
      a: "The Successor Solar Incentive (SuSI), introduced in 2021 to replace the legacy SREC market. Residential solar systems earn one SREC-II per MWh produced for 15 years from installation, sold back at a fixed Administratively Determined Incentive rate (currently $85 per MWh for residential projects in 2026). A typical 7 kW residential system earns roughly $600 to $750 per year in SREC-II payments.",
    },
    {
      q: "How much does solar cost in New Jersey?",
      a: "Residential solar in NJ averages around $2.90 per watt installed, meaning a typical 7 kW system costs about $20,000 gross. After the 30 percent federal tax credit, net cost is around $14,000. Factor in 15 years of SREC-II income (~$10,000 total) and net system cost drops to roughly $4,000 over the SREC-II earning period.",
    },
    {
      q: "Is solar worth it in New Jersey?",
      a: "Yes, strongly. New Jersey has some of the best per-household solar economics in the US because of the SREC-II stacking: retail net metering credits for exports, plus the SREC-II payment per MWh produced, plus the federal tax credit, plus state sales and property tax exemptions. Payback is typically 5 to 7 years with the full stack applied.",
    },
    {
      q: "How many solar companies are in New Jersey?",
      a: "Roughly 200 to 300 licensed solar contractors operate in New Jersey, with the strongest concentrations in Monmouth, Middlesex, Ocean and Bergen counties. The market has consolidated somewhat since the 2021 SREC-II transition; several national installers have significant NJ operations alongside local independents.",
    },
  ],
};
