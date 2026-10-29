import type { State } from "../types";

export const MASSACHUSETTS: State = {
  slug: "massachusetts",
  name: "Massachusetts",
  abbr: "MA",
  title: "Solar in Massachusetts: market, SMART programme and incentives",
  metaTitle: "Solar Companies in Massachusetts: Market, SMART, Incentives",
  metaDescription:
    "Honest guide to Massachusetts solar: market size, the SMART production incentive, net metering, major utilities, and running a solar company in MA.",
  answer:
    "Massachusetts is the ninth-largest US solar market with over 4,500 MW installed and some of the strongest per-household solar economics in the country, driven by high electric rates and the SMART production incentive. The state has full retail net metering below system size thresholds, and the SMART programme pays a per-kWh incentive on top for 10 years.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 4600,
    homesPoweredK: 820,
    percentOfElectricity: 15,
    jobs: 10400,
    averageCostPerWatt: 3.0,
    nationalRank: 9,
  },
  marketNotes:
    "Massachusetts has one of the highest solar penetration rates per capita in the US despite modest sun hours (around 4.2 peak sun hours per day). The economics work because residential electric rates are among the highest in the mainland US, the SMART programme adds a per-kWh production incentive, and the state's SREC programme (closed to new entrants but still paying grandfathered customers) created a mature installer base.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Massachusetts has full retail net metering for residential solar systems up to 10 kW. Credits accrue monthly and can be banked indefinitely. For systems above 10 kW the credit rate is reduced slightly. Net metering caps have been raised repeatedly to accommodate growing solar; current policy keeps full retail credit intact for the residential segment.",
  },
  averageRate: 0.26,
  rateNote:
    "Massachusetts residential rates average around $0.26 per kWh, among the highest in the US outside Hawaii and California. Rates vary meaningfully by utility: Eversource and National Grid supply rates have both risen sharply since 2022, driven partly by natural gas supply volatility. Time-of-use rates are available but uncommon.",
  utilities: ["Eversource", "National Grid", "Unitil", "Municipal light plants (various)"],
  incentives: [
    {
      name: "SMART (Solar Massachusetts Renewable Target) Program",
      text: "Successor to the SREC-II programme. Residential solar systems receive a fixed per-kWh incentive for 10 years, paid directly to the system owner. Rate varies by utility territory and declines as capacity blocks fill, but currently around $0.03 to $0.06 per kWh for residential installations. For a typical 7 kW system producing 8,500 kWh/year, SMART income is roughly $300 to $500 per year.",
    },
    {
      name: "Massachusetts Residential Solar Tax Credit",
      text: "15 percent state income-tax credit on residential solar system cost, capped at $1,000. Non-refundable; carries forward for up to 3 years. Applies in addition to the 30 percent federal credit.",
    },
    {
      name: "Property-tax exemption",
      text: "Massachusetts exempts the added value of a residential solar system from property-tax assessment for 20 years under M.G.L. c. 59 Section 5 Clause 45. Automatic.",
    },
    {
      name: "Sales-tax exemption",
      text: "Residential solar PV equipment is exempt from Massachusetts's 6.25 percent sales tax. Applies at point of sale.",
    },
    {
      name: "ConnectedSolutions battery programme",
      text: "National Grid and Eversource both offer a residential battery incentive through the ConnectedSolutions programme. Customers receive a per-kW payment per summer season for enrolling the battery in utility-controlled dispatch during grid events. Payments typically $200 to $400 per kW per summer.",
    },
  ],
  permits:
    "Permit timelines in Massachusetts vary significantly by municipality. Boston metro commonly takes 3 to 6 weeks for residential; western Massachusetts and the Cape are typically faster. SolarAPP+ is used by a growing number of Massachusetts towns. Interconnection with Eversource and National Grid typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Massachusetts means operating in a market with excellent economics, moderate sun, and the most sophisticated residential customer base in the US (both utility rebates and third-party incentives have been running for over 15 years). The installers who do well have detailed knowledge of SMART block positioning, battery incentive stacking (ConnectedSolutions), and the small but meaningful differences between Eversource and National Grid territory. Lead costs on Google Search are moderate to high ($140 to $220) and competition is intense in Greater Boston; Western and Central MA are less saturated.",
  faq: [
    {
      q: "Does Massachusetts have net metering?",
      a: "Yes, full retail net metering for residential solar systems up to 10 kW, with slightly reduced credits for larger systems. Credits accrue monthly and can be banked indefinitely. Net metering caps have been raised repeatedly to accommodate growing solar.",
    },
    {
      q: "What is the SMART programme in Massachusetts?",
      a: "SMART (Solar Massachusetts Renewable Target) is the state's primary solar incentive programme, successor to the SREC-II market. Residential solar systems receive a fixed per-kWh production incentive for 10 years, paid directly to the system owner. Rate varies by utility territory and declines as capacity blocks fill. For a typical 7 kW system in 2026, SMART income is roughly $300 to $500 per year.",
    },
    {
      q: "How much does solar cost in Massachusetts?",
      a: "Residential solar in MA averages around $3.00 per watt installed, among the higher in the US due to labour costs. A typical 7 kW system costs about $21,000 gross. After the 30 percent federal credit and $1,000 state credit, net cost is around $13,700, with another $3,000 to $5,000 in SMART income over 10 years.",
    },
    {
      q: "Is solar worth it in Massachusetts?",
      a: "Yes, with the best stacked economics outside New Jersey. Massachusetts has retail net metering, state tax credit, SMART production incentive, sales and property tax exemption, and some of the highest electric rates in the US. Payback is typically 6 to 8 years with the full stack applied, even with modest sun hours.",
    },
    {
      q: "How many solar companies are in Massachusetts?",
      a: "Roughly 200 to 300 licensed solar contractors operate in Massachusetts, with the strongest concentrations in Greater Boston, the North Shore and the Pioneer Valley. The market is relatively consolidated: the top 10 companies install around 50 percent of residential volume.",
    },
  ],
};
