import type { State } from "../types";

export const IOWA: State = {
  slug: "iowa",
  name: "Iowa",
  abbr: "IA",
  title: "Solar in Iowa: market, MidAmerican Energy and net billing transition",
  metaTitle: "Solar Companies in Iowa: MidAmerican Energy, Alliant, Permits",
  metaDescription:
    "Honest guide to Iowa solar: market size, MidAmerican Energy and Alliant Energy net metering, Iowa Utilities Board rulings, and running a solar company in Iowa.",
  answer:
    "Iowa is the thirty-eighth-largest US solar market with over 350 MW installed. Residential solar operates under utility-level net metering regulated by the Iowa Utilities Board. MidAmerican Energy and Alliant Energy (Interstate Power & Light) both offer retail-rate NEM with monthly rollover; annual excess is paid at avoided cost. The 2020 state law phased out the full retail NEM for new customers after cumulative capacity milestones.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 350,
    homesPoweredK: 50,
    percentOfElectricity: 1,
    jobs: 1050,
    averageCostPerWatt: 2.75,
    nationalRank: 38,
  },
  marketNotes:
    "Iowa's solar market has grown steadily under the state's investor-owned utility net metering. Des Moines, Cedar Rapids and Iowa City metros dominate residential. The 2020 law phased out retail NEM for new customers once cumulative installed capacity reached specific thresholds at each utility; current new installations typically operate under slightly modified net billing with monthly rollover at retail but reduced true-up value.",
  netMetering: {
    status: "Partial net metering",
    explanation:
      "Iowa net metering under Iowa Utilities Board rules credits residential solar exports at retail during monthly periods with avoided-cost true-up at year-end. The 2020 Iowa Senate File 583 phased out the full retail NEM structure once cumulative installed solar capacity reached 5 percent of each utility's peak demand (reached at MidAmerican by 2024). Grandfathered customers keep prior terms; new installations operate under slightly modified billing.",
  },
  averageRate: 0.14,
  rateNote:
    "Iowa residential rates average around $0.14 per kWh at MidAmerican Energy and Alliant. Rates have risen approximately 15 percent since 2022.",
  utilities: ["MidAmerican Energy (Berkshire Hathaway Energy subsidiary), investor-owned, serves most of western and central Iowa including Des Moines", "Alliant Energy (Interstate Power & Light), investor-owned, serves most of eastern Iowa including Cedar Rapids and Iowa City", "Various electric cooperatives and municipal utilities (Cedar Falls Utilities, Muscatine Power & Water, others) serve specific cities"],
  incentives: [
    {
      name: "Iowa Solar Energy System Tax Credit (closed to new applications)",
      text: "Iowa's state solar tax credit was closed to new applications in 2022. Pre-2022 applicants may still be using carryforward credits. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive for new installations.",
    },
    {
      name: "Property-tax exemption",
      text: "Iowa exempts the added value of residential solar systems from property-tax assessment under Iowa Code 441.21(8). Automatic.",
    },
    {
      name: "Sales-tax exemption",
      text: "Iowa exempts residential solar PV equipment from the state's 6 percent sales tax under the renewable energy equipment exemption.",
    },
  ],
  permits:
    "Permit timelines in Iowa vary by jurisdiction. Des Moines, Cedar Rapids, Davenport and Iowa City commonly take 3 to 5 weeks for residential. Smaller cities and counties can be faster. SolarAPP+ is not accepted. Interconnection with MidAmerican or Alliant typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Iowa means working in a Midwest market where net metering has partially stepped down and the state tax credit closed in 2022. The best Iowa operators size systems to self-consumption, model winter snow derating honestly (annual production loss 10 to 20 percent), and handle utility-specific interconnection (MidAmerican vs Alliant differences). Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does Iowa have net metering?",
      a: "Partially. Iowa Utilities Board rules provide monthly rollover at retail with avoided-cost true-up at year-end. The 2020 Iowa Senate File 583 phased out full retail NEM once cumulative installed solar capacity reached 5 percent of each utility's peak demand (reached at MidAmerican by 2024). Pre-threshold customers are grandfathered.",
    },
    {
      q: "Did Iowa close its state solar tax credit?",
      a: "Yes, in 2022. New applications are no longer accepted. Pre-2022 applicants may still be using carryforward credits. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive for new installations.",
    },
    {
      q: "How much does solar cost in Iowa?",
      a: "Residential solar in Iowa averages around $2.75 per watt installed, meaning a typical 7 kW system costs about $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500.",
    },
    {
      q: "Is solar worth it in Iowa?",
      a: "Yes for most Iowa homes with suitable roofs. The combination of utility-level net metering, moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 10 to 13 years. Winter snow derating stretches payback compared with Sun Belt peers.",
    },
  ],
};
