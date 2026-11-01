import type { State } from "../types";

export const NORTH_DAKOTA: State = {
  slug: "north-dakota",
  name: "North Dakota",
  abbr: "ND",
  title: "Solar in North Dakota: market, Xcel Energy and prairie winter reality",
  metaTitle: "Solar Companies in North Dakota: Xcel, Otter Tail, Permits",
  metaDescription:
    "Honest guide to North Dakota solar: market size, Xcel Energy and Otter Tail Power net metering, severe winter climate, and running a solar company in ND.",
  answer:
    "North Dakota is the forty-ninth-largest US solar market with over 15 MW installed, the smallest residential solar market in the contiguous US. Residential operates under Xcel Energy, Otter Tail Power and Montana-Dakota Utilities net metering. Severe winter climate (polar air masses, extended snow cover) is the dominant production factor. The federal tax credit is the only meaningful incentive.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 15,
    homesPoweredK: 2,
    percentOfElectricity: 1,
    jobs: 50,
    averageCostPerWatt: 2.9,
    nationalRank: 49,
  },
  marketNotes:
    "North Dakota's residential solar market is very small. Fargo, Bismarck and Grand Forks dominate the modest market. Severe winter weather (temperatures regularly below -20F) and extended snow cover (December through March) are the dominant factors in production estimates.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "North Dakota offers net metering for residential solar systems at Xcel Energy, Otter Tail Power and Montana-Dakota Utilities under Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess credits typically paid at avoided cost. Rural co-op customers operate under separate tariffs.",
  },
  averageRate: 0.12,
  rateNote:
    "North Dakota residential rates average around $0.12 per kWh across the major utilities. Rates have risen modestly since 2022.",
  utilities: ["Xcel Energy (Northern States Power), investor-owned, serves most of eastern North Dakota including Fargo", "Otter Tail Power, investor-owned, serves parts of eastern ND and the Lakes Country", "Montana-Dakota Utilities (MDU Resources subsidiary), serves most of western ND including Bismarck", "Various electric cooperatives and the North Dakota Association of Rural Electric Cooperatives serve rural areas"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "North Dakota does not currently offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the only tax-based incentive.",
    },
    {
      name: "Property-tax exemption",
      text: "North Dakota exempts the value of residential renewable energy systems from property-tax assessment under NDCC 57-02-08(27). Automatic.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "North Dakota exempts certain renewable energy equipment from the state's 5 percent sales tax. Confirm with the ND Office of State Tax Commissioner whether specific residential solar equipment qualifies.",
    },
  ],
  permits:
    "Permit timelines in North Dakota vary by jurisdiction. Fargo, Bismarck, Grand Forks and Minot commonly take 2 to 4 weeks for residential. Rural counties can be faster. SolarAPP+ is not accepted. Interconnection with the local utility typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in North Dakota means working in the smallest residential solar market in the contiguous US. The best North Dakota operators are explicit about severe winter snow derating in sales conversations (annual production loss often 20 to 30 percent), handle utility-specific interconnection, and sell on energy independence rather than fast payback. Lead costs run $70 to $140 on Google search, among the lowest in the US because installer competition is minimal.",
  faq: [
    {
      q: "Does North Dakota have net metering?",
      a: "Yes, net metering for residential solar systems at Xcel Energy, Otter Tail Power and Montana-Dakota Utilities under Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost. Co-op territory customers operate under separate tariffs.",
    },
    {
      q: "How much snow derating affects North Dakota solar?",
      a: "North Dakota's severe winter weather (extended snow cover from November through March, polar air masses in January and February) typically reduces annual solar production by 20 to 30 percent compared with equivalent systems in Sun Belt states. South-facing panels at steep pitches shed snow faster; low-angle flat-roof installs retain snow much longer. Honest sales conversations model this derating.",
    },
    {
      q: "How much does solar cost in North Dakota?",
      a: "Residential solar in North Dakota averages around $2.90 per watt installed, meaning a typical 7 kW system costs about $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200. North Dakota has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in North Dakota?",
      a: "For North Dakota homes with very high electricity use and south-facing steep-pitch roofs, yes but with the longest payback in the contiguous US: typically 13 to 17 years with the federal tax credit. Low electric rates and severe winter weather stretch payback substantially. Many ND homeowners install solar for energy independence rather than payback optimisation.",
    },
  ],
};
