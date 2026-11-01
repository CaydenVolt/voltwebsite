import type { State } from "../types";

export const SOUTH_DAKOTA: State = {
  slug: "south-dakota",
  name: "South Dakota",
  abbr: "SD",
  title: "Solar in South Dakota: market, Xcel Energy and permits",
  metaTitle: "Solar Companies in South Dakota: Xcel, Black Hills, Permits",
  metaDescription:
    "Honest guide to South Dakota solar: market size, Xcel Energy and Black Hills Energy net metering, state market dynamics, and running a solar company in SD.",
  answer:
    "South Dakota is the forty-eighth-largest US solar market with over 25 MW installed. Residential operates under Xcel Energy and Black Hills Energy net metering, with monthly rollover at retail. Winter weather is severe; honest annual yield modelling matters. The federal tax credit is the dominant incentive.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 25,
    homesPoweredK: 4,
    percentOfElectricity: 1,
    jobs: 70,
    averageCostPerWatt: 2.85,
    nationalRank: 48,
  },
  marketNotes:
    "South Dakota's residential solar market is very small. Sioux Falls and Rapid City metros dominate the modest market. Rural South Dakota is thin. Harsh winter weather (lake-effect from the Great Lakes to the east and continental cold air) reduces annual yield more than most installers model.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "South Dakota offers net metering for residential solar systems at Xcel Energy (Northern States Power) and Black Hills Energy under Public Utilities Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess credits typically paid at avoided cost. Co-op territory customers operate under separate tariffs.",
  },
  averageRate: 0.13,
  rateNote:
    "South Dakota residential rates average around $0.13 per kWh at Xcel Energy and Black Hills Energy. Rates have risen approximately 10 percent since 2022.",
  utilities: ["Xcel Energy (Northern States Power), investor-owned, serves most of eastern South Dakota including Sioux Falls", "Black Hills Energy, investor-owned, serves most of western South Dakota including Rapid City", "Montana-Dakota Utilities serves parts of northwestern SD", "Various electric cooperatives (East River Electric Power Cooperative distributor, Rushmore Electric Power Cooperative distributor) serve rural areas"],
  incentives: [
    {
      name: "No state solar tax credit (no state income tax)",
      text: "South Dakota has no state income tax, so a state income tax credit is not applicable. The 30 percent federal Residential Clean Energy Credit remains the only tax-based incentive.",
    },
    {
      name: "No state property-tax exemption",
      text: "South Dakota does not have a statewide property-tax exemption for residential solar.",
    },
    {
      name: "Sales-tax exemption on solar equipment (limited)",
      text: "South Dakota's broader renewable energy sales-tax exemption applies to certain renewable energy equipment; confirm with the SD Department of Revenue whether specific residential solar equipment qualifies.",
    },
  ],
  permits:
    "Permit timelines in South Dakota vary by jurisdiction. Sioux Falls, Rapid City and Aberdeen commonly take 2 to 4 weeks for residential. Rural counties can be faster. SolarAPP+ is not accepted. Interconnection with Xcel or Black Hills typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in South Dakota means working in a very small market with minimal installer competition. The best South Dakota operators handle both Xcel Energy and Black Hills Energy interconnection fluently, model harsh winter weather honestly, and understand the long-distance rural logistics. Lead costs run $75 to $140 on Google search, among the lowest in the US because installer density is extremely thin.",
  faq: [
    {
      q: "Does South Dakota have net metering?",
      a: "Yes, net metering for residential solar systems at Xcel Energy and Black Hills Energy under Public Utilities Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost. Co-op territory customers operate under separate tariffs that vary.",
    },
    {
      q: "How much does solar cost in South Dakota?",
      a: "Residential solar in South Dakota averages around $2.85 per watt installed, meaning a typical 7 kW system costs about $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. South Dakota has no state solar tax credit (no state income tax).",
    },
    {
      q: "Is solar worth it in South Dakota?",
      a: "For South Dakota homes with high electricity use and south-facing roofs, yes but with longer payback than retail-NEM states with higher electric rates: typically 12 to 15 years with the federal tax credit. Low electric rates and winter weather stretch payback. Many South Dakota homeowners install solar for energy independence alongside payback.",
    },
  ],
};
