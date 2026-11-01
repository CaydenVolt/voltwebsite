import type { State } from "../types";

export const MISSISSIPPI: State = {
  slug: "mississippi",
  name: "Mississippi",
  abbr: "MS",
  title: "Solar in Mississippi: market, Entergy MS and net billing reality",
  metaTitle: "Solar Companies in Mississippi: Entergy MS, MS Power, Permits",
  metaDescription:
    "Honest guide to Mississippi solar: market size, Entergy Mississippi and Mississippi Power non-retail NEM, state market dynamics, and running a solar company in MS.",
  answer:
    "Mississippi is the thirty-seventh-largest US solar market with over 370 MW installed, dominated by utility-scale. Residential has been constrained by Mississippi's non-retail net metering: exports credit at avoided cost (approximately $0.025 to $0.035 per kWh) at both Entergy Mississippi and Mississippi Power, far below the retail rate of about $0.13. The federal tax credit remains the primary driver.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 370,
    homesPoweredK: 50,
    percentOfElectricity: 1,
    jobs: 400,
    averageCostPerWatt: 2.8,
    nationalRank: 37,
  },
  marketNotes:
    "Mississippi's residential solar market has grown slowly compared with neighbouring states because of non-retail net metering across both major investor-owned utilities. Jackson metro and the Gulf Coast dominate residential; rural Mississippi is thin. The 2024 Public Service Commission order expanded the net metering size limit to 50 kW but kept the avoided-cost compensation rate.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Mississippi net metering under PSC rules credits residential solar exports at the utility's avoided cost rate (approximately $0.025 to $0.035 per kWh), substantially below the retail rate of about $0.13. Both Entergy Mississippi and Mississippi Power operate under this structure. The 2024 PSC order raised the system size limit to 50 kW but did not change the compensation rate. There is a monthly minimum charge for grid connection.",
  },
  averageRate: 0.13,
  rateNote:
    "Mississippi residential rates average around $0.13 per kWh at Entergy Mississippi and Mississippi Power, among the lower in the US.",
  utilities: ["Entergy Mississippi, investor-owned, serves most of central and western Mississippi including Jackson", "Mississippi Power (Southern Company subsidiary), serves southeastern Mississippi including the Gulf Coast", "Various electric cooperatives (Southern Pine Electric, Pearl River Valley Electric, others) serve rural areas", "Tennessee Valley Authority wholesale through distributor utilities (Tupelo Water & Light, others) in northern MS"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Mississippi does not offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "No state property-tax exemption",
      text: "Mississippi does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level.",
    },
    {
      name: "Entergy Mississippi Solar Energy Allowance (limited availability)",
      text: "Entergy Mississippi has offered a limited solar incentive programme in prior years; current structure varies. Confirm with Entergy MS before quoting.",
    },
  ],
  permits:
    "Permit timelines in Mississippi vary by jurisdiction. Jackson, Gulfport, Hattiesburg and Tupelo commonly take 3 to 5 weeks for residential. Rural counties can be faster. SolarAPP+ is not accepted. Interconnection with Entergy MS or Mississippi Power typically runs 4 to 8 weeks post-install.",
  installerLandscape:
    "Running a solar company in Mississippi means working in a market constrained by non-retail export compensation. The best Mississippi operators size systems to self-consumption rather than oversize for export, factor the monthly minimum charge into payback calculations, and sell on long-term rate protection rather than fast payback. Hurricane and tropical storm exposure on the Gulf Coast requires proper structural attachment. Lead costs run $80 to $150 on Google search, among the lowest in the US.",
  faq: [
    {
      q: "Does Mississippi have net metering?",
      a: "Not retail-rate. Mississippi credits residential solar exports at the utility's avoided cost rate (approximately $0.025 to $0.035 per kWh), substantially below the retail rate of about $0.13. The 2024 PSC order raised the system size limit to 50 kW but did not change the compensation rate.",
    },
    {
      q: "How much does solar cost in Mississippi?",
      a: "Residential solar in Mississippi averages around $2.80 per watt installed, meaning a typical 7 kW system costs about $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Mississippi has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Mississippi?",
      a: "For Mississippi homes with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 12 to 16 years with the federal tax credit. The combination of non-retail export compensation, low retail rates, and no state incentives stretches payback compared with retail-NEM Southeast peers.",
    },
    {
      q: "Why is Mississippi solar economics worse than neighbouring states?",
      a: "Mississippi's non-retail net metering regime is substantially less favourable than Louisiana's net billing (slightly higher avoided cost rate) or Alabama Power's structure (which also has a backup charge). Payback is longer in MS than in states like Georgia, Tennessee or Arkansas where either state incentives or utility structure makes residential solar more economically viable.",
    },
  ],
};
