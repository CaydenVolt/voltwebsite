import type { State } from "../types";

export const VIRGINIA: State = {
  slug: "virginia",
  name: "Virginia",
  abbr: "VA",
  title: "Solar in Virginia: market, incentives and the VCEA growth story",
  metaTitle: "Solar Companies in Virginia: Market, Incentives, Net Metering",
  metaDescription:
    "Honest guide to Virginia solar: market size, VCEA-driven growth, net metering, Dominion Energy and APCo policies, and running a solar company in VA.",
  answer:
    "Virginia is the eleventh-largest US solar market with over 6,000 MW installed, growing fast under the 2020 Virginia Clean Economy Act (VCEA). Residential has retail net metering under both Dominion Energy and Appalachian Power, with programme caps that have been raised multiple times to accommodate growing demand.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 6200,
    homesPoweredK: 720,
    percentOfElectricity: 5,
    jobs: 4600,
    averageCostPerWatt: 2.7,
    nationalRank: 11,
  },
  marketNotes:
    "Virginia's growth has accelerated since the 2020 Virginia Clean Economy Act set a 100 percent clean electricity target for Dominion by 2045 and APCo by 2050. Residential installations have more than tripled since 2020 across the main metros (Richmond, Northern Virginia, Hampton Roads). Utility-scale solar still dominates by megawatts installed but residential is the fastest-growing segment.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Virginia offers full retail net metering for residential solar customers at both Dominion Energy and Appalachian Power. Credits accrue monthly; annual excess is credited at avoided-cost rate. Programme caps have been raised multiple times under VCEA (currently 6 percent of previous year peak demand at Dominion, higher at APCo); residential customers below the cap are safely on retail net metering.",
  },
  averageRate: 0.13,
  rateNote:
    "Virginia residential rates average around $0.13 per kWh at Dominion Energy; APCo territory is slightly higher. Dominion time-of-use rates are available on an opt-in basis. Rates have risen roughly 15 percent since 2022.",
  utilities: ["Dominion Energy Virginia", "Appalachian Power (APCo)", "Rappahannock Electric Cooperative", "Northern Virginia Electric Cooperative (NOVEC)"],
  incentives: [
    {
      name: "Virginia Solar for All (DMME)",
      text: "State-administered programme providing solar installations to low-income households at no cost to the homeowner, funded through the federal Solar for All grant programme ($156 million awarded to Virginia). Scope and eligibility updated annually.",
    },
    {
      name: "Property-tax exemption",
      text: "Virginia offers a property-tax exemption on residential solar systems at the option of each locality. Most Northern Virginia counties and Richmond-area jurisdictions have opted in; some rural counties have not. Check with the local commissioner of the revenue.",
    },
    {
      name: "Shared Solar programme (Dominion)",
      text: "Virginia's community solar programme lets Dominion customers subscribe to shared solar projects for a monthly bill credit, no equipment installed on-site. Useful for renters and homes with unsuitable roofs; typical savings 10 to 15 percent on the electric portion of the bill.",
    },
    {
      name: "Sales-tax holiday for solar equipment",
      text: "Virginia offers a one-weekend-per-year sales-tax holiday (usually August) that includes certain Energy Star-rated solar equipment. Narrow in scope; most installations do not benefit meaningfully.",
    },
  ],
  permits:
    "Permit timelines in Virginia vary by county. Fairfax, Loudoun, Arlington and Richmond commonly take 3 to 5 weeks for residential; Hampton Roads is similar. Smaller counties can be faster. SolarAPP+ adoption is limited. Interconnection with Dominion Energy typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Virginia means operating in a growing market with supportive statewide policy (VCEA) and stable utility relationships. Northern Virginia has moderate lead costs ($120 to $180 range on Google Search) and competition is building; Richmond and Hampton Roads are cheaper and less saturated. The Shared Solar programme adds a competing option for customers with unsuitable roofs; installers who sell shared solar as an add-on rather than a competitor often do better than those who ignore it.",
  faq: [
    {
      q: "Does Virginia have net metering?",
      a: "Yes, full retail net metering at Dominion Energy and Appalachian Power. Residential solar customers are credited for exports at the same rate they pay for consumption, with monthly netting and annual true-up at avoided-cost rate for any excess. Programme caps have been raised multiple times under VCEA.",
    },
    {
      q: "How much does solar cost in Virginia?",
      a: "Residential solar in Virginia averages around $2.70 per watt installed, meaning a typical 7 kW system costs about $19,000 gross. After the 30 percent federal tax credit, net cost is around $13,300. Virginia costs are competitive with other Southern states; higher than Arizona and Texas, lower than New England.",
    },
    {
      q: "Is solar worth it in Virginia?",
      a: "Yes, in most of the state. Virginia's combination of full retail net metering, moderate utility rates and the 30 percent federal tax credit produces 8 to 11 year payback for most residential installations. Dominion territory is the strongest; APCo and co-op territory can be slightly longer.",
    },
    {
      q: "What is the Virginia Clean Economy Act (VCEA)?",
      a: "A 2020 state law that sets a 100 percent clean electricity target for Dominion Energy by 2045 and Appalachian Power by 2050. The act raised the state's net-metering cap multiple times, created the Shared Solar programme, and established a renewable portfolio standard. The result has been one of the fastest growth rates in US residential solar since 2020.",
    },
  ],
};
