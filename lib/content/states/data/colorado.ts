import type { State } from "../types";

export const COLORADO: State = {
  slug: "colorado",
  name: "Colorado",
  abbr: "CO",
  title: "Solar in Colorado: market, incentives and net metering reality",
  metaTitle: "Solar Companies in Colorado: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Colorado solar: market size, Xcel Energy and Black Hills net metering, state tax rebate, and running a solar company in CO.",
  answer:
    "Colorado is the seventeenth-largest US solar market with over 2,100 MW installed. The state has full retail net metering under Xcel Energy and Black Hills, strong solar hours (over 5 peak sun hours per day), and a 2024 state Solar for Residential rebate programme that stacks on top of the 30 percent federal tax credit.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 2100,
    homesPoweredK: 365,
    percentOfElectricity: 5,
    jobs: 7500,
    averageCostPerWatt: 2.6,
    nationalRank: 17,
  },
  marketNotes:
    "Colorado has a mature residential solar market, concentrated in the Denver metro, Colorado Springs and Boulder. Growth has been consistent since Xcel Energy's Solar*Rewards programme established a strong installer base in the 2010s. The 2024 state rebate programme (Solar for Residential) adds a direct cash incentive that has lifted volume meaningfully.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Colorado offers full retail net metering for residential solar systems under both Xcel Energy and Black Hills Energy. Credits accrue monthly; annual excess is credited at avoided-cost rate. Programme caps have been raised repeatedly; current cap is 10 kW for Xcel residential (upgradable with written approval).",
  },
  averageRate: 0.14,
  rateNote:
    "Colorado residential rates average around $0.14 per kWh at Xcel Energy, slightly higher at Black Hills. Time-of-use rates are available on an opt-in basis at Xcel. Rates have risen roughly 20 percent since 2022.",
  utilities: ["Xcel Energy Colorado", "Black Hills Energy", "Various electric cooperatives (Holy Cross Energy, San Isabel Electric, La Plata Electric)"],
  incentives: [
    {
      name: "Colorado Solar for Residential rebate (2024)",
      text: "State-administered direct rebate for residential solar installations, launched in 2024 under the Colorado Energy Office. Rebate amount scales with household income; up to $8,000 for income-qualified households and smaller amounts for market-rate households. Programme funding is limited and renews annually.",
    },
    {
      name: "Property-tax exemption",
      text: "Colorado exempts the added value of residential solar systems from property-tax assessment under CRS 39-3-118.5. Automatic.",
    },
    {
      name: "Sales-tax exemption",
      text: "Residential solar equipment is exempt from Colorado's 2.9 percent state sales tax. Local sales taxes may still apply; check with the installer.",
    },
    {
      name: "Xcel Energy Solar*Rewards (closed to new residential)",
      text: "The Xcel Solar*Rewards production incentive is now closed to new residential customers but continues to pay out for existing enrollees. New customers rely on retail net metering plus the 2024 state rebate.",
    },
  ],
  permits:
    "Permit timelines in Colorado vary by jurisdiction. Denver, Boulder and the main Front Range cities commonly take 2 to 5 weeks for residential. SolarAPP+ adoption is growing but not universal. Interconnection with Xcel Energy typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Colorado means operating in a mature market with strong fundamentals (good sun, retail NEM, new state rebate) but intense Denver-metro competition. Lead costs on Google Search are moderate to high ($140 to $200 in Denver, lower elsewhere). The installers who have grown fastest know the Solar for Residential rebate programme well and have built it into every proposal; the ones who ignore it lose to competitors who make it visible to the customer.",
  faq: [
    {
      q: "Does Colorado have net metering?",
      a: "Yes, full retail net metering at Xcel Energy and Black Hills Energy for residential systems up to 10 kW (upgradable with written approval). Credits accrue monthly; year-end excess at avoided-cost rate. The regime has been stable with periodic cap increases.",
    },
    {
      q: "What is the Colorado solar rebate?",
      a: "The Colorado Solar for Residential rebate, launched in 2024 by the Colorado Energy Office, provides a direct cash rebate for residential solar installations. Rebate amount scales with household income: up to $8,000 for income-qualified households and smaller amounts for market-rate households. Programme funding is capped annually.",
    },
    {
      q: "How much does solar cost in Colorado?",
      a: "Residential solar in Colorado averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal credit and the Solar for Residential rebate (where applicable), net cost can drop to $8,000 to $12,000.",
    },
    {
      q: "Is solar worth it in Colorado?",
      a: "Yes for most Colorado homes with suitable roofs. The combination of 5+ peak sun hours per day, retail NEM, state rebate (where available) and the federal tax credit produces 6 to 9 year payback for most residential installations with the full incentive stack applied.",
    },
  ],
};
