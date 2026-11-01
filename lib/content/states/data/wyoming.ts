import type { State } from "../types";

export const WYOMING: State = {
  slug: "wyoming",
  name: "Wyoming",
  abbr: "WY",
  title: "Solar in Wyoming: market, Rocky Mountain Power and permits",
  metaTitle: "Solar Companies in Wyoming: Rocky Mountain Power, Permits",
  metaDescription:
    "Honest guide to Wyoming solar: market size, Rocky Mountain Power and Black Hills Energy net metering, state market dynamics, and running a solar company in WY.",
  answer:
    "Wyoming is the forty-seventh-largest US solar market with over 100 MW installed. Residential operates under Rocky Mountain Power and Black Hills Energy net metering with monthly rollover at retail. High altitude provides modest production boost; cold winters affect panel output. The federal tax credit is the dominant incentive. Permits vary by county.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 100,
    homesPoweredK: 15,
    percentOfElectricity: 1,
    jobs: 200,
    averageCostPerWatt: 2.85,
    nationalRank: 47,
  },
  marketNotes:
    "Wyoming's residential solar market is small but growing. Cheyenne, Casper and Laramie dominate the modest market. Rural Wyoming is thin. High-altitude climate (most of the state above 4,000 feet) provides modest production boost from reduced atmospheric attenuation.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Wyoming offers retail-rate net metering for residential solar systems up to 25 kW AC at Rocky Mountain Power and Black Hills Energy under Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess credits paid at avoided cost.",
  },
  averageRate: 0.12,
  rateNote:
    "Wyoming residential rates average around $0.12 per kWh at Rocky Mountain Power and Black Hills Energy, among the lower in the US. Rates have risen approximately 10 percent since 2022.",
  utilities: ["Rocky Mountain Power (PacifiCorp subsidiary), investor-owned, serves most of western Wyoming", "Black Hills Energy, investor-owned, serves most of eastern Wyoming including Cheyenne", "Various electric cooperatives (High West Energy, Carbon Power & Light, others) serve rural areas"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Wyoming does not offer a state income tax credit for residential solar. Wyoming has no state income tax, so a state credit would not be applicable. The 30 percent federal Residential Clean Energy Credit remains the only tax-based incentive.",
    },
    {
      name: "No state property-tax exemption",
      text: "Wyoming does not have a statewide property-tax exemption for residential solar.",
    },
    {
      name: "No state sales-tax exemption",
      text: "Wyoming does not currently offer a sales-tax exemption for residential solar equipment. The standard 4 percent state sales tax plus local additions applies.",
    },
  ],
  permits:
    "Permit timelines in Wyoming vary by jurisdiction. Cheyenne, Casper, Laramie and Gillette commonly take 2 to 4 weeks for residential. Rural counties can be faster. SolarAPP+ is not accepted. Interconnection with Rocky Mountain Power or Black Hills Energy typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Wyoming means working in a small market with limited installer competition. The best Wyoming operators handle both Rocky Mountain Power and Black Hills Energy interconnection fluently, understand the long-distance rural logistics of the state, and model winter cold-weather effects (snow derating, high-wind events) honestly. Lead costs run $80 to $150 on Google search, low because installer density is thin.",
  faq: [
    {
      q: "Does Wyoming have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC at Rocky Mountain Power and Black Hills Energy under Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost.",
    },
    {
      q: "How much does solar cost in Wyoming?",
      a: "Residential solar in Wyoming averages around $2.85 per watt installed, meaning a typical 7 kW system costs about $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Wyoming has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Wyoming?",
      a: "For Wyoming homes with high electricity use and south-facing roofs, yes but with longer payback than retail-NEM states with higher electric rates: typically 12 to 15 years with the federal tax credit. Low electric rates (around $0.12 per kWh) stretch payback. Many Wyoming homeowners install solar for energy independence alongside payback.",
    },
  ],
};
