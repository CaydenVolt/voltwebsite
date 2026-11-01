import type { State } from "../types";

export const ARKANSAS: State = {
  slug: "arkansas",
  name: "Arkansas",
  abbr: "AR",
  title: "Solar in Arkansas: market, Entergy Arkansas and net metering",
  metaTitle: "Solar Companies in Arkansas: Entergy AR, SWEPCO, Permits",
  metaDescription:
    "Honest guide to Arkansas solar: market size, Entergy Arkansas net metering, SWEPCO service, state tax credits, and running a solar company in Arkansas.",
  answer:
    "Arkansas is the fortieth-largest US solar market with over 310 MW installed. Residential solar operates under Entergy Arkansas and SWEPCO retail net metering (currently 1-for-1 up to a 15 percent threshold under Act 464 of 2019). The federal tax credit plus retail NEM make Arkansas economics reasonable for self-consumption-sized systems. Permits vary by jurisdiction.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 310,
    homesPoweredK: 45,
    percentOfElectricity: 1,
    jobs: 750,
    averageCostPerWatt: 2.65,
    nationalRank: 40,
  },
  marketNotes:
    "Arkansas's residential solar market has grown steadily under the 2019 Act 464 net metering reforms, which protected 1-for-1 retail NEM until cumulative installed capacity reached 15 percent of each utility's peak demand. The threshold has not been reached as of 2026 at Entergy Arkansas. Little Rock metro dominates residential. The federal tax credit is the primary economic driver.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Arkansas Act 464 (2019) protects 1-for-1 retail net metering for residential solar systems until cumulative installed solar capacity reaches 15 percent of each utility's peak demand. Entergy Arkansas and SWEPCO both operate under this structure. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
  },
  averageRate: 0.12,
  rateNote:
    "Arkansas residential rates average around $0.12 per kWh at Entergy Arkansas and SWEPCO, among the lower in the US.",
  utilities: ["Entergy Arkansas, investor-owned, serves most of central and eastern Arkansas including Little Rock", "SWEPCO (Southwestern Electric Power Company, AEP subsidiary), serves most of western Arkansas including Texarkana and Fort Smith", "Various electric cooperatives (First Electric Cooperative, Ozarks Electric Cooperative, others) serve rural areas", "Municipal utilities (Jonesboro City Water & Light, Fayetteville Electric) serve specific cities"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Arkansas does not offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Arkansas does not currently offer a dedicated sales-tax exemption for residential solar equipment. The standard 6.5 percent state sales tax plus local additions applies.",
    },
    {
      name: "No state property-tax exemption",
      text: "Arkansas does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level.",
    },
  ],
  permits:
    "Permit timelines in Arkansas vary by jurisdiction. Little Rock, Fayetteville, Fort Smith and Jonesboro commonly take 3 to 5 weeks for residential. Rural counties can be faster. SolarAPP+ is not accepted. Interconnection with Entergy Arkansas or SWEPCO typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Arkansas means working in a growing market with reasonable retail NEM protection through Act 464. The best Arkansas operators have templated workflows for Entergy Arkansas and SWEPCO interconnection, understand the differences between the two utilities, and model summer heat and winter cloud derating honestly. Lead costs run $80 to $160 on Google search.",
  faq: [
    {
      q: "Does Arkansas have net metering?",
      a: "Yes, 1-for-1 retail net metering protected by Act 464 (2019) until cumulative installed solar capacity reaches 15 percent of each utility's peak demand. Entergy Arkansas and SWEPCO both operate under this structure. The threshold has not been reached as of 2026 at Entergy Arkansas, so new installations continue to receive retail NEM.",
    },
    {
      q: "How much does solar cost in Arkansas?",
      a: "Residential solar in Arkansas averages around $2.65 per watt installed, meaning a typical 7 kW system costs about $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. Arkansas has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Arkansas?",
      a: "Yes for most Arkansas homes with suitable roofs. The combination of retail-rate net metering (protected by Act 464), moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 9 to 12 years. The economics are better than Oklahoma or Mississippi because of the retail NEM protection.",
    },
  ],
};
