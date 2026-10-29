import type { State } from "../types";

export const NEVADA: State = {
  slug: "nevada",
  name: "Nevada",
  abbr: "NV",
  title: "Solar in Nevada: market, incentives and net metering reality",
  metaTitle: "Solar Companies in Nevada: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Nevada solar: market size, NV Energy's tiered net metering, state incentives, and what it is like to run a solar company in NV.",
  answer:
    "Nevada is the sixth-largest US solar market, with over 6,500 MW installed and some of the best sun hours in the country. The state has a tiered net-metering structure under NV Energy: export credits decline as cumulative installed capacity grows, but current-tier credits are still competitive for new residential installations.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 6700,
    homesPoweredK: 1050,
    percentOfElectricity: 22,
    jobs: 7500,
    averageCostPerWatt: 2.4,
    nationalRank: 6,
  },
  marketNotes:
    "Nevada swung dramatically on solar policy in the mid-2010s: a 2015 Public Utilities Commission decision to effectively kill retail net metering nearly ended residential solar sales in the state (SolarCity and Vivint left Nevada entirely). The policy was reversed by AB 405 in 2017, bringing back a tiered net-metering structure. Volume has since recovered strongly, with Las Vegas and Reno as the two main metros.",
  netMetering: {
    status: "Partial net metering",
    explanation:
      "Nevada's AB 405 established a tiered net-metering structure for new NV Energy residential solar customers. Tier 1 (first 80 MW statewide) credited exports at 95 percent of retail; subsequent tiers step down to 88, 81 and 75 percent. All earlier tiers have filled; new customers are typically on the 75 percent credit tier (still substantially better than avoided cost). Grandfathered customers on earlier tiers keep their original rate for 20 years.",
  },
  averageRate: 0.12,
  rateNote:
    "Nevada residential rates average around $0.12 per kWh at NV Energy. Time-of-use rates are available but not default. Rates have been stable in recent years compared to California or Hawaii.",
  utilities: ["NV Energy (Nevada Power in southern NV, Sierra Pacific in northern NV)", "Valley Electric Association (co-op)"],
  incentives: [
    {
      name: "Property-tax abatement for renewable energy",
      text: "Nevada offers partial property-tax abatements for renewable energy facilities under the Renewable Energy Tax Abatement programme. More commonly used for utility-scale and commercial projects than residential; residential installations qualify but the paperwork is often not worth the credit.",
    },
    {
      name: "NV Energy Solar Rights Program",
      text: "NV Energy supports residential solar installation through streamlined interconnection and online application processes. No direct rebate but reduced soft costs through faster turnaround times than most US utilities.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Nevada exempts solar PV equipment and labour from state sales tax under the Renewable Energy Systems Property Tax Exemption. Applies at point of sale.",
    },
  ],
  permits:
    "Permit timelines in Nevada are generally fast by US standards. Clark County (Las Vegas) uses SolarAPP+ for standard residential systems, which can issue permits in days rather than weeks. Washoe County (Reno) is slightly slower but still typically under 3 weeks. Interconnection with NV Energy is usually 2 to 4 weeks post-install.",
  installerLandscape:
    "Running a solar company in Nevada means operating in a recovered-and-growing market with excellent sun economics (over 6 peak sun hours per day in Las Vegas) and a utility that is comparatively easy to work with on interconnection. The market is still thinner than Arizona or Texas: fewer installers chasing the same leads, which has kept lead costs moderate ($100 to $160 range for most residential). Las Vegas's seasonal demand pattern follows summer bills; most installers see a sharp uptick in April through July.",
  faq: [
    {
      q: "Does Nevada have net metering?",
      a: "Yes, in a tiered form. Nevada's AB 405 (2017) established a tiered net-metering structure for new NV Energy residential solar customers: Tier 1 credited exports at 95 percent of retail, with subsequent tiers stepping down. All earlier tiers have filled; new customers are typically on the 75 percent credit tier, still substantially better than avoided-cost rates in other states.",
    },
    {
      q: "How much does solar cost in Nevada?",
      a: "Residential solar in Nevada averages around $2.40 per watt installed, meaning a typical 7 kW system costs about $17,000 gross. After the 30 percent federal tax credit, net cost is around $11,900. Nevada has some of the lowest installed costs in the US due to high installer density, lower labour costs than coastal states and favourable permit automation.",
    },
    {
      q: "Is solar worth it in Nevada?",
      a: "Yes, in both Las Vegas and Reno. Nevada's combination of 6+ peak sun hours per day, 75-percent-of-retail export credit, and sales-tax exemption produces 7 to 9 year payback for most residential installations with the federal tax credit. The economics are better than Arizona for a comparable system because the net-metering credit is higher.",
    },
    {
      q: "Does Nevada have a state solar tax credit?",
      a: "No state income tax credit (Nevada has no state income tax). The main state-level benefit is the sales-tax exemption on equipment and labour. The 30 percent federal Residential Clean Energy Credit still applies in full.",
    },
    {
      q: "How many solar companies are in Nevada?",
      a: "Roughly 100 to 150 licensed solar contractors operate in Nevada, with most concentrated in Las Vegas and Reno. The market has grown steadily since the 2017 net-metering restoration; several national installers (Sunrun, Freedom Forever, Palmetto) have significant Nevada operations alongside local independent installers.",
    },
  ],
};
