import type { State } from "../types";

export const ALASKA: State = {
  slug: "alaska",
  name: "Alaska",
  abbr: "AK",
  title: "Solar in Alaska: market, Chugach Electric and extreme-latitude reality",
  metaTitle: "Solar Companies in Alaska: Chugach, Golden Valley, Permits",
  metaDescription:
    "Honest guide to Alaska solar: market size, Chugach Electric and Golden Valley Electric net metering, extreme latitude seasonality, and running a solar company in AK.",
  answer:
    "Alaska is the fiftieth-largest US solar market with over 30 MW installed. Residential operates under utility-specific net metering (Chugach Electric, Golden Valley Electric, Matanuska Electric, others). Extreme-latitude seasonality is the dominant factor: summer production is strong (18+ hour days in June) but winter production is minimal (3 to 5 hours of weak sun in December). The federal tax credit is the dominant incentive.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 30,
    homesPoweredK: 5,
    percentOfElectricity: 1,
    jobs: 90,
    averageCostPerWatt: 3.5,
    nationalRank: 50,
  },
  marketNotes:
    "Alaska's residential solar market is small but has grown surprisingly fast given the latitude: strong summer production (nearly 24-hour days in parts of the state) partially offsets minimal winter production. Anchorage and Fairbanks dominate the market. Rural Alaska has unique off-grid solar economics (fuel-cost displacement often makes solar highly economic despite the latitude).",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Alaska offers net metering at the utility level under Regulatory Commission of Alaska rules. Chugach Electric (Anchorage area), Golden Valley Electric (Fairbanks area), Matanuska Electric (Mat-Su) and other utilities each operate residential net metering with monthly rollover at retail. Annual true-up varies by utility. Rural off-grid installations operate outside net metering entirely.",
  },
  averageRate: 0.23,
  rateNote:
    "Alaska residential rates average around $0.23 per kWh (Chugach Electric), among the higher in the US due to shipping fuel costs. Rural Alaska rates can exceed $0.50 per kWh. High rates partially offset the challenging latitude for solar economics.",
  utilities: ["Chugach Electric Association, cooperative, serves most of the Anchorage metro", "Golden Valley Electric Association, cooperative, serves Fairbanks and the Interior", "Matanuska Electric Association, cooperative, serves Mat-Su Valley", "Various rural electric cooperatives (Alaska Village Electric Cooperative, Kodiak Electric Association, others) serve outlying communities"],
  incentives: [
    {
      name: "Alaska Residential Energy Rebate (closed)",
      text: "Alaska's state residential energy rebate programme closed to new applications in 2017. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive. (Alaska has no state income tax so a state tax credit is not applicable.)",
    },
    {
      name: "Rural off-grid incentives",
      text: "Rural off-grid solar in Alaska can qualify for USDA Rural Energy for America Program (REAP) grants and various Alaska-specific rural-energy programmes. For off-grid installations, fuel-cost displacement typically makes solar economically compelling despite the latitude.",
    },
    {
      name: "No state sales-tax (no state sales tax)",
      text: "Alaska has no statewide sales tax, so solar equipment is already not subject to state sales tax. Local municipalities may impose their own sales taxes.",
    },
  ],
  permits:
    "Permit timelines in Alaska vary dramatically by jurisdiction. Anchorage, Fairbanks and Mat-Su commonly take 3 to 6 weeks for residential. Rural borough and village permit processes can take longer or be very simple depending on jurisdiction. SolarAPP+ is not accepted. Utility interconnection post-install varies by utility, typically 4 to 10 weeks.",
  installerLandscape:
    "Running a solar company in Alaska means working in a unique US market where extreme-latitude seasonality dominates design and sales conversations. The best Alaska operators are explicit about winter production reality (minimal production from November through February), spec steep-pitch roof mounting for snow shedding, and often focus on off-grid or hybrid-generation installations where fuel displacement is the primary economic driver. Lead costs run $100 to $200 on Google search; installer density is low.",
  faq: [
    {
      q: "Can solar work in Alaska?",
      a: "Yes, but with unique seasonality. Summer production is strong (June days have 18 to 24 hours of daylight depending on latitude), while winter production is minimal (December days have 3 to 5 hours of weak low-angle sun in Anchorage, essentially zero at the highest latitudes). Annual yield for a south-facing Anchorage installation is around 60 to 70 percent of an equivalent Sun Belt installation. Honest annual yield modelling is essential.",
    },
    {
      q: "Does Alaska have net metering?",
      a: "Yes, at utility level. Chugach Electric, Golden Valley Electric, Matanuska Electric and other utilities each operate residential net metering with monthly rollover at retail. Annual true-up varies by utility. Rural off-grid installations operate outside net metering.",
    },
    {
      q: "How much does solar cost in Alaska?",
      a: "Residential solar in Alaska averages around $3.50 per watt installed, higher than mainland US because of shipping and labour costs, meaning a typical 7 kW system costs about $24,500 gross. After the 30 percent federal tax credit, net cost is approximately $17,200. Alaska has no state solar tax credit (no state income tax).",
    },
    {
      q: "Is solar worth it in Alaska?",
      a: "For urban Alaska homes with high electricity use (around $0.23 per kWh), payback typically runs 11 to 15 years with the federal tax credit, longer than Sun Belt peers because of the latitude. For rural off-grid homes displacing diesel generation, solar is often economically compelling in 5 to 8 years because of extremely high diesel-generated electricity costs ($0.50+ per kWh).",
    },
  ],
};
