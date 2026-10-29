import type { State } from "../types";

export const ARIZONA: State = {
  slug: "arizona",
  name: "Arizona",
  abbr: "AZ",
  title: "Solar in Arizona: market, incentives and net billing reality",
  metaTitle: "Solar Companies in Arizona: Market, Net Billing, Incentives",
  metaDescription:
    "Honest guide to Arizona solar: market size, net billing / export credits by utility, state tax credit, and what it is like to run a solar company in AZ.",
  answer:
    "Arizona is the fourth-largest US solar market by installed capacity, with over 7,000 MW and some of the strongest sun hours in the country. The state replaced retail net metering with net billing in 2017: solar exports are credited at an avoided-cost rate that varies by utility, which has shifted system sizing toward self-consumption plus battery storage.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 7400,
    homesPoweredK: 1100,
    percentOfElectricity: 11,
    jobs: 8500,
    averageCostPerWatt: 2.5,
    nationalRank: 4,
  },
  marketNotes:
    "Arizona has excellent solar fundamentals (over 6 peak sun hours per day in Phoenix, among the highest in the US) and a strong policy history under APS and SRP. Residential growth has slowed since the 2017 net-metering replacement, but the Arizona Corporation Commission has approved periodic increases to the avoided-cost export rate, which keeps the economics viable in most of the state.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Arizona replaced retail net metering in 2017 with net billing. Solar exports are credited at the utility's avoided-cost rate, which is reset periodically by the Arizona Corporation Commission. Current APS export rate is around $0.08 per kWh; current TEP is similar; SRP uses a slightly different mechanism (demand-based rate plus a plan credit). Rates have trended upward from the 2017 lows.",
  },
  averageRate: 0.14,
  rateNote:
    "Arizona residential rates average around $0.14 per kWh. APS uses time-of-use rates with peak premiums in late afternoon; SRP uses demand-based rates that penalise high short-term usage, which affects how a solar-plus-battery system should be configured.",
  utilities: ["Arizona Public Service (APS)", "Salt River Project (SRP)", "Tucson Electric Power (TEP)"],
  incentives: [
    {
      name: "Arizona Residential Solar Tax Credit",
      text: "Arizona offers a state income-tax credit of 25 percent of the system cost, capped at $1,000. Non-refundable; carries forward for 5 years if unused. Applies in addition to the 30 percent federal credit.",
    },
    {
      name: "Property-tax exemption",
      text: "Arizona exempts 100 percent of the added value of a residential solar system from property-tax assessment. Automatic; no application required beyond standard property-tax reporting.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Arizona exempts solar PV equipment from the state's transaction privilege tax (sales tax). Applies to panels, inverters, mounting hardware and batteries.",
    },
    {
      name: "SRP SolarPlus Battery Rebate",
      text: "Salt River Project customers can qualify for a battery rebate up to $1,800 (varies by programme year) for pairing storage with new or existing solar. Programme funding is limited each year.",
    },
  ],
  permits:
    "Permit timelines in Arizona vary by municipality. Phoenix, Scottsdale and Tempe commonly process residential solar permits in 2 to 4 weeks; Pima County (Tucson) is similar. SolarAPP+ is in limited use. Interconnection with APS and SRP typically runs 2 to 4 weeks post-install, which is faster than most states.",
  installerLandscape:
    "Running a solar company in Arizona means operating in a market with excellent sun economics but a complicated utility export compensation picture. The deals that work best are typically sized to maximise self-consumption, with battery storage increasingly standard for the larger-system customer. Phoenix is highly competitive (lead costs on Google Search commonly $150 to $220 for residential); Tucson is cheaper and underserved. The seasonal demand pattern is counter-intuitive: Arizona homeowners buy solar most heavily in April to June, when their summer-rate bills first arrive.",
  faq: [
    {
      q: "Does Arizona have net metering?",
      a: "Not in the retail-rate sense. Arizona replaced retail net metering with net billing in 2017: solar exports are credited at an avoided-cost rate (currently around $0.08 per kWh at APS, similar at TEP), which is lower than the retail rate for consumption. The gap makes self-consumption the primary value and favours systems sized to the home's daytime use rather than maximum export.",
    },
    {
      q: "How much is the Arizona state solar tax credit?",
      a: "25 percent of the installed system cost, capped at $1,000. Non-refundable but carries forward for up to 5 tax years if not fully used in the installation year. Applies in addition to the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      q: "How much does solar cost in Arizona?",
      a: "Residential solar in Arizona averages around $2.50 per watt installed, meaning a typical 7 kW system costs about $17,500 gross. After the 30 percent federal credit and the $1,000 Arizona credit, net cost is around $11,250. Arizona has some of the lowest installed costs in the US due to high installer density and lower labour costs than coastal states.",
    },
    {
      q: "Is solar worth it in Arizona?",
      a: "Yes, in most of the state. Even with the post-net-metering export rate, Arizona's combination of excellent sun hours and continuing rate increases produces 6 to 9 year payback for most residential installations with the federal tax credit, slightly longer in SRP territory due to the demand-rate structure.",
    },
    {
      q: "What is the difference between APS and SRP for solar?",
      a: "APS uses time-of-use rates with avoided-cost export compensation and operates in most of central Arizona outside Phoenix. SRP uses demand-based rates for residential solar customers and operates in Phoenix and the East Valley. The pricing structures are different enough that a system optimised for an APS customer may be sized differently for an SRP customer at the same consumption level.",
    },
  ],
};
