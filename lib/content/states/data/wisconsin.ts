import type { State } from "../types";

export const WISCONSIN: State = {
  slug: "wisconsin",
  name: "Wisconsin",
  abbr: "WI",
  title: "Solar in Wisconsin: market, Focus on Energy and winter reality",
  metaTitle: "Solar Companies in Wisconsin: We Energies, Focus on Energy, Permits",
  metaDescription:
    "Honest guide to Wisconsin solar: market size, We Energies and WPS net metering, Focus on Energy residential rebate, and running a solar company in Wisconsin.",
  answer:
    "Wisconsin is the thirtieth-largest US solar market with over 870 MW installed. Residential solar operates under utility-specific net metering (varies by utility, generally close to retail), the Focus on Energy residential rebate ($500 one-time plus performance-based incentives), and the federal tax credit. Winter snow derating is significant; honest annual yield modelling matters.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 870,
    homesPoweredK: 125,
    percentOfElectricity: 2,
    jobs: 1700,
    averageCostPerWatt: 2.95,
    nationalRank: 30,
  },
  marketNotes:
    "Wisconsin's solar market has grown steadily under Focus on Energy incentives and investor-owned utility net metering programmes. Milwaukee and Madison metros dominate residential. The three major investor-owned utilities (We Energies, WPS, MGE) each operate their own net metering programmes with slightly different rules; co-op territory customers see further variation.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Wisconsin net metering operates at the utility level under Public Service Commission oversight. We Energies, WPS and MGE each offer net metering for residential systems with monthly rollover at retail rate and annual true-up at avoided cost (varies by utility). System size caps vary (We Energies 20 kW, MGE 25 kW, WPS 20 kW). Electric cooperatives operate their own tariffs with varying terms.",
  },
  averageRate: 0.17,
  rateNote:
    "Wisconsin residential rates average around $0.17 per kWh across the major investor-owned utilities. We Energies rates are slightly higher than WPS and MGE. Rates have risen approximately 15 percent since 2022.",
  utilities: ["We Energies (WEC Energy Group subsidiary), investor-owned, serves most of southeastern Wisconsin including Milwaukee", "Wisconsin Public Service (WPS, WEC Energy Group subsidiary), serves northeastern Wisconsin including Green Bay", "Madison Gas & Electric (MGE), investor-owned, serves Dane County including Madison", "Alliant Energy (Wisconsin Power & Light subsidiary), serves parts of southern and western Wisconsin", "Various electric cooperatives (Riverland Energy Cooperative, others) serve rural areas"],
  incentives: [
    {
      name: "Focus on Energy residential solar rebate",
      text: "Focus on Energy (Wisconsin's statewide energy-efficiency programme) offers residential solar installations a $500 one-time rebate for standard installations, plus performance-based rebates for larger or storage-attached systems. Confirm current programme structure with Focus on Energy before quoting.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Wisconsin exempts residential solar PV equipment and installation labour from the state's 5 percent sales tax under the renewable energy equipment exemption.",
    },
    {
      name: "No state income tax credit",
      text: "Wisconsin does not currently offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "Property-tax exemption",
      text: "Wisconsin exempts the added value of residential solar systems from property-tax assessment under Wis. Stat. 70.111(18). Automatic.",
    },
  ],
  permits:
    "Permit timelines in Wisconsin vary by municipality. Milwaukee, Madison, Green Bay and Waukesha commonly take 3 to 5 weeks for residential. Smaller cities can be faster. SolarAPP+ is in pilot in Madison but not broadly deployed. Interconnection with We Energies, WPS or MGE typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Wisconsin means working in a growing Upper Midwest market with modest incentives and real winter weather. The best Wisconsin operators are explicit about winter snow derating in sales conversations (annual production loss typically 15 to 25 percent for most residential installations), have templated Focus on Energy registration workflows, and handle utility-specific interconnection fluently. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Wisconsin have net metering?",
      a: "Yes, at utility level under Public Service Commission oversight. We Energies, WPS and MGE each offer net metering for residential systems with monthly rollover at retail rate and annual true-up at avoided cost. System size caps vary by utility. Electric cooperatives operate their own tariffs.",
    },
    {
      q: "What is Focus on Energy?",
      a: "Focus on Energy is Wisconsin's statewide energy-efficiency and renewable energy programme funded by a public purpose charge on utility bills. For residential solar, Focus on Energy pays a $500 one-time rebate for standard installations plus performance-based rebates for larger or storage-attached systems.",
    },
    {
      q: "How much does solar cost in Wisconsin?",
      a: "Residential solar in Wisconsin averages around $2.95 per watt installed, meaning a typical 7 kW system costs about $20,700 gross. After the 30 percent federal tax credit and the Focus on Energy rebate, net cost is approximately $14,000.",
    },
    {
      q: "Is solar worth it in Wisconsin?",
      a: "Yes for most Wisconsin homes with suitable roofs. The combination of retail-rate net metering, moderate electric rates, Focus on Energy rebate, and the 30 percent federal credit makes residential solar payback typically 10 to 13 years. Winter snow derating stretches payback compared with Sun Belt peers; honest annual yield modelling matters.",
    },
  ],
};
