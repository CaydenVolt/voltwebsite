import type { State } from "../types";

export const LOUISIANA: State = {
  slug: "louisiana",
  name: "Louisiana",
  abbr: "LA",
  title: "Solar in Louisiana: market, incentives and net billing reality",
  metaTitle: "Solar Companies in Louisiana: Market, Net Billing, Incentives",
  metaDescription:
    "Honest guide to Louisiana solar: market size, Entergy and Cleco net billing, the end of the state tax credit, and running a solar company in LA.",
  answer:
    "Louisiana is the twenty-third-largest US solar market with over 1,400 MW installed, dominated by utility-scale. Residential has been reshaped by the 2015 state tax credit sunset and the 2019 shift from retail net metering to a net billing structure. Payback is longer than in peer Sun Belt states; the main driver of residential solar remains the federal tax credit and rising utility rates.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 1400,
    homesPoweredK: 180,
    percentOfElectricity: 3,
    jobs: 1600,
    averageCostPerWatt: 2.6,
    nationalRank: 23,
  },
  marketNotes:
    "Louisiana's residential solar market peaked in 2015 (when the state tax credit was still in effect) and has grown more slowly since. The 2019 shift from retail net metering to net billing further slowed growth. The federal 30 percent tax credit remains the dominant incentive, and recent utility rate increases have improved the pure-electricity-savings case.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Louisiana replaced retail net metering with net billing in 2019. Residential solar exports under Entergy Louisiana and Cleco are credited at the utility's avoided-cost rate (typically $0.03 to $0.05 per kWh), lower than the retail rate. Grandfathered customers on the pre-2019 programme keep retail-rate net metering for 15 years from original installation.",
  },
  averageRate: 0.12,
  rateNote:
    "Louisiana residential rates average around $0.12 per kWh, among the lower in the US. Rates have risen approximately 25 percent since 2022 driven by Entergy rate cases and post-hurricane grid rebuild costs.",
  utilities: ["Entergy Louisiana", "Cleco", "Southwestern Electric Power Company (SWEPCO)", "Various rural electric cooperatives"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Louisiana's generous state solar tax credit (originally 50 percent, capped at $12,500) was fully phased out by 2015. No replacement credit has been enacted. The only tax-based incentive currently is the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Residential solar PV equipment is exempt from Louisiana's 4.45 percent state sales tax under the renewable energy equipment exemption. Local sales taxes may still apply.",
    },
    {
      name: "No statewide property-tax exemption",
      text: "Louisiana does not have a statewide property-tax exemption for residential solar. Treatment varies by parish; some include the added value in assessment, others do not. Check with the local parish tax assessor.",
    },
    {
      name: "Net metering grandfathering",
      text: "Residential customers who installed solar before the 2019 shift are grandfathered on retail-rate net metering for 15 years from their original installation date. New systems do not qualify.",
    },
  ],
  permits:
    "Permit timelines in Louisiana vary by parish. New Orleans, Baton Rouge and Lafayette commonly take 3 to 6 weeks for residential. Rural parishes can be faster or slower. SolarAPP+ adoption is minimal. Interconnection with Entergy and Cleco typically runs 4 to 8 weeks post-install.",
  installerLandscape:
    "Running a solar company in Louisiana means operating in a market that has shrunk since the mid-2010s and depends heavily on the federal tax credit for payback. The installers who remain tend to specialise in homes with high electric usage (electric heat pumps, pool pumps) where the pure-electricity-savings case still works despite net billing. Hurricane season affects both scheduling and demand for backup storage. Lead costs on Google Search are low ($70 to $120 range) because competition has thinned since 2015.",
  faq: [
    {
      q: "Does Louisiana have net metering?",
      a: "Not for new customers since 2019. Residential solar exports at Entergy Louisiana and Cleco are credited at the utility's avoided-cost rate (typically $0.03 to $0.05 per kWh), lower than the retail rate. Pre-2019 customers are grandfathered on retail NEM for 15 years from original installation.",
    },
    {
      q: "How much does solar cost in Louisiana?",
      a: "Residential solar in Louisiana averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal tax credit, net cost is around $12,600. Louisiana does not have a state solar tax credit.",
    },
    {
      q: "Is solar worth it in Louisiana?",
      a: "Yes for Louisiana homes with high electric usage, but payback is longer than peer Sun Belt states due to net billing and the absence of state incentives: typically 11 to 15 years for residential installations with the federal tax credit. Homes with electric heat pumps, pool pumps or large square footage see shorter payback.",
    },
    {
      q: "Does Louisiana still have a state solar tax credit?",
      a: "No. Louisiana's generous state tax credit (originally 50 percent, capped at $12,500) was fully phased out by 2015 and has not been replaced. The 30 percent federal Residential Clean Energy Credit remains the only tax-based incentive.",
    },
  ],
};
