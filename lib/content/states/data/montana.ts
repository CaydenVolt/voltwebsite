import type { State } from "../types";

export const MONTANA: State = {
  slug: "montana",
  name: "Montana",
  abbr: "MT",
  title: "Solar in Montana: market, NorthWestern Energy and net metering",
  metaTitle: "Solar Companies in Montana: NorthWestern, Permits",
  metaDescription:
    "Honest guide to Montana solar: market size, NorthWestern Energy net metering, co-op service in rural areas, winter snow reality, and running a solar company in MT.",
  answer:
    "Montana is the forty-fourth-largest US solar market with over 140 MW installed. Residential operates under NorthWestern Energy retail net metering (up to 50 kW AC) under Montana Public Service Commission rules. Winter snow derating is substantial. The federal tax credit remains the primary economic driver.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 140,
    homesPoweredK: 23,
    percentOfElectricity: 1,
    jobs: 300,
    averageCostPerWatt: 2.8,
    nationalRank: 44,
  },
  marketNotes:
    "Montana's residential solar market is small but growing. Billings, Missoula and Bozeman metros dominate residential. Co-op territory covers much of rural Montana with varied interconnection rules. The federal tax credit is the primary driver; retail electric rates are moderate.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Montana offers retail-rate net metering for residential solar systems up to 50 kW AC at NorthWestern Energy under Montana PSC rules. Credits accrue monthly at retail; annual true-up at year-end with excess credits typically zeroed out rather than paid out.",
  },
  averageRate: 0.13,
  rateNote:
    "Montana residential rates average around $0.13 per kWh at NorthWestern Energy. Rates have risen approximately 15 percent since 2022.",
  utilities: ["NorthWestern Energy, investor-owned, serves most of Montana", "Various electric cooperatives (Flathead Electric Cooperative, Yellowstone Valley Electric Cooperative, Beartooth Electric Cooperative, others) serve rural areas with their own tariffs"],
  incentives: [
    {
      name: "Montana Alternative Energy Systems Tax Credit",
      text: "Montana offers a state income tax credit of up to $500 per taxpayer ($1,000 for joint filers) for residential renewable energy systems. For most residential solar installations, the credit value is modest relative to the federal tax credit. Stacks with the 30 percent federal credit.",
    },
    {
      name: "Property-tax exemption",
      text: "Montana exempts up to $20,000 of the added value of residential renewable energy systems from property-tax assessment under MCA 15-6-224 for a 10-year period.",
    },
    {
      name: "No state sales-tax (no sales tax)",
      text: "Montana has no statewide sales tax, so solar equipment is already not subject to sales tax by default. No separate exemption needed.",
    },
  ],
  permits:
    "Permit timelines in Montana vary by jurisdiction. Billings, Missoula and Bozeman commonly take 2 to 5 weeks for residential. Rural counties and smaller cities can be faster. SolarAPP+ is not accepted. Interconnection with NorthWestern Energy typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Montana means working in a market where winter weather is the dominant climate factor. The best Montana operators are explicit about winter snow derating in sales conversations (annual production loss 15 to 25 percent), handle co-op territory interconnection differences (each co-op operates under its own tariff), and understand the long-driving-distance logistics of the state. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Montana have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 50 kW AC at NorthWestern Energy under Montana PSC rules. Co-op territory customers operate under cooperative-specific tariffs that vary.",
    },
    {
      q: "How much does solar cost in Montana?",
      a: "Residential solar in Montana averages around $2.80 per watt installed, meaning a typical 7 kW system costs about $19,600 gross. After the 30 percent federal tax credit and the modest Montana state tax credit, net cost is approximately $13,200.",
    },
    {
      q: "Is solar worth it in Montana?",
      a: "Yes for most Montana homes with suitable roofs. The combination of retail NEM at NorthWestern Energy, moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 11 to 14 years. Winter snow derating stretches payback; honest annual yield modelling matters.",
    },
  ],
};
