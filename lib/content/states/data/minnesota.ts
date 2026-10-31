import type { State } from "../types";

export const MINNESOTA: State = {
  slug: "minnesota",
  name: "Minnesota",
  abbr: "MN",
  title: "Solar in Minnesota: market, incentives and community solar leadership",
  metaTitle: "Solar Companies in Minnesota: Market, Community Solar, Incentives",
  metaDescription:
    "Honest guide to Minnesota solar: market size, Xcel Energy's community solar gardens programme, residential net metering, incentives and running a solar company in MN.",
  answer:
    "Minnesota is the thirteenth-largest US solar market with over 2,500 MW installed, and the national leader in community solar (community solar gardens programme). Residential solar has retail net metering, Xcel Energy's Solar Rewards production incentive, and property tax exemption; the result is per-household economics that work despite modest sun hours.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 2600,
    homesPoweredK: 340,
    percentOfElectricity: 4,
    jobs: 4300,
    averageCostPerWatt: 2.8,
    nationalRank: 13,
  },
  marketNotes:
    "Minnesota's solar story has been built on community solar gardens, the national leader since 2013 with over 900 MW of community solar operating. Residential is smaller but has grown steadily, concentrated in the Twin Cities metro. The state's climate policy (100 percent carbon-free electricity by 2040) has driven continued growth across all segments.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Minnesota has full retail net metering for residential solar systems up to 40 kW. Credits accrue monthly; excess at year-end is credited at avoided-cost rate. The regime has been stable since 1983 and is one of the longest-standing net-metering programmes in the US.",
  },
  averageRate: 0.14,
  rateNote:
    "Minnesota residential rates average around $0.14 per kWh at Xcel Energy. Time-of-use rates are available on an opt-in basis. Rates have risen modestly over the past three years.",
  utilities: ["Xcel Energy", "Minnesota Power", "Otter Tail Power", "Various municipal utilities and co-ops"],
  incentives: [
    {
      name: "Xcel Energy Solar*Rewards",
      text: "Production incentive for residential solar in Xcel Energy's Minnesota territory. Pays a per-kWh amount for 10 years, typically $0.03 to $0.08 per kWh depending on programme year and queue position. Current programme funding is limited; new applicants join a wait list in some years.",
    },
    {
      name: "Property-tax exemption",
      text: "Minnesota exempts the added value of a residential solar system from property-tax assessment. Automatic; no application required.",
    },
    {
      name: "Sales-tax exemption",
      text: "Residential solar PV equipment is exempt from Minnesota's 6.875 percent sales tax under Minnesota Statutes 297A.67.",
    },
    {
      name: "Community Solar Gardens",
      text: "Minnesota's community solar gardens programme (the national leader) lets residents subscribe to an off-site solar project for a monthly bill credit. Useful for renters, condo owners and homes with unsuitable roofs; typical savings 5 to 15 percent on the electric portion of the bill.",
    },
  ],
  permits:
    "Permit timelines in Minnesota vary by municipality. Minneapolis, St. Paul and the Twin Cities suburbs commonly take 3 to 6 weeks for residential. Rural counties can be faster or slower depending on inspector availability. SolarAPP+ adoption is limited. Interconnection with Xcel Energy typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Minnesota means operating in a market with strong policy support, moderate sun hours (around 4.3 peak sun hours per day), and the national community-solar leader as both competitor and complement. Installers who have grown fastest have knowledge of the Solar*Rewards programme queue, Twin Cities metro permit timelines, and the honest trade-off between rooftop solar and a community solar subscription for customers with unsuitable roofs. Lead costs on Google Search are moderate ($110 to $160 range).",
  faq: [
    {
      q: "Does Minnesota have net metering?",
      a: "Yes, full retail net metering for residential systems up to 40 kW. Credits accrue monthly; excess at year-end is credited at avoided-cost rate. Minnesota's net-metering programme is one of the longest-standing in the US (established 1983).",
    },
    {
      q: "What is Minnesota's community solar programme?",
      a: "Minnesota is the national leader in community solar: over 900 MW of community solar gardens operating under the Solar Gardens programme. Residents (and small businesses) can subscribe to a community project for a monthly bill credit, with no equipment installed at home. Useful for renters and homes with unsuitable roofs.",
    },
    {
      q: "How much does solar cost in Minnesota?",
      a: "Residential solar in Minnesota averages around $2.80 per watt installed, meaning a typical 7 kW system costs about $19,500 gross. After the 30 percent federal tax credit and (if available) the Xcel Solar*Rewards production incentive, net cost drops meaningfully over the 10-year incentive period.",
    },
    {
      q: "Is solar worth it in Minnesota?",
      a: "Yes for most homes with suitable south, east or west roof planes. Minnesota's combination of retail net metering, Solar*Rewards (where available), property and sales tax exemption, and the federal tax credit produces 8 to 11 year payback for most residential installations despite the modest 4.3 peak sun hours per day.",
    },
  ],
};
