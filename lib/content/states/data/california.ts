import type { State } from "../types";

export const CALIFORNIA: State = {
  slug: "california",
  name: "California",
  abbr: "CA",
  title: "Solar in California: market, incentives and NEM 3.0 reality",
  metaTitle: "Solar Companies in California: Market, Incentives, NEM 3.0",
  metaDescription:
    "Honest guide to California solar: market size, NEM 3.0 export rates, SGIP battery rebates, major utilities and what it is actually like to run a solar company in CA.",
  answer:
    "California is the largest US solar market by a wide margin, with over 50,000 MW installed and more than 1 in 7 US residential solar systems on the ground here. NEM 3.0 has reshaped the economics: battery storage is now part of almost every new residential sale, and the payback math works best with a battery sized to shift evening use.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 50200,
    homesPoweredK: 15600,
    percentOfElectricity: 28,
    jobs: 78000,
    averageCostPerWatt: 3.3,
    nationalRank: 1,
  },
  marketNotes:
    "California installs more solar than any other state and is still growing on utility-scale solar. Residential, however, has slowed sharply since NEM 3.0 came in on April 2023: new interconnection applications are down roughly 60 percent from the pre-NEM-3.0 peak. The deals that still close are typically solar-plus-battery rather than solar-only.",
  netMetering: {
    status: "NEM 3.0 (net billing with export compensation)",
    explanation:
      "Under NEM 3.0 (official name: Net Billing Tariff), solar exports are credited at the utility's avoided-cost rate rather than the retail rate. Avoided-cost rates average around $0.05 to $0.08 per kWh exported, compared with retail rates often above $0.35 per kWh. The gap is the reason batteries have become a near-default: shifting self-consumption into peak hours captures more value than selling at avoided cost.",
  },
  averageRate: 0.32,
  rateNote:
    "California has the highest residential electric rates in the continental US, averaging around $0.32 per kWh and climbing. Most major utilities use time-of-use pricing, with peak rates in the late afternoon to early evening often exceeding $0.50 per kWh.",
  utilities: ["Pacific Gas and Electric (PG&E)", "Southern California Edison (SCE)", "San Diego Gas and Electric (SDG&E)"],
  incentives: [
    {
      name: "Self-Generation Incentive Program (SGIP)",
      text: "State rebate for residential battery storage, administered by the big three utilities. Equity Resilience tier can cover 85 to 100 percent of battery cost for qualifying low-income households in high-fire-risk areas; the general tier offers smaller rebates for everyone else.",
    },
    {
      name: "Property-tax exemption",
      text: "California excludes the added value of a solar system from property-tax reassessment under the Active Solar Energy System Exclusion. Runs through at least 2025 and has been renewed repeatedly.",
    },
    {
      name: "DAC-SASH (Single-Family Affordable Solar Homes)",
      text: "Direct install of solar for income-qualified households in disadvantaged communities, at no cost to the homeowner. Administered by GRID Alternatives.",
    },
    {
      name: "Virtual Power Plant programmes",
      text: "Multiple utilities and third parties (Tesla, Sunrun, Enphase) now pay residential battery owners to export during grid events. Typical compensation: $0.50 to $2.00 per kWh exported during called events, several events per year.",
    },
  ],
  permits: "California adopted SB 379 (Solar Access Act permit automation) in 2022, requiring most jurisdictions to offer automated instant permitting via SolarAPP+ for standard residential systems. In practice, SolarAPP+ coverage is strong in the Bay Area and uneven in parts of the Central Valley and Inland Empire. Interconnection timelines with PG&E and SCE commonly run 4 to 8 weeks post-install; SDG&E is usually faster.",
  installerLandscape:
    "Running a solar company in California means operating in the most competitive residential solar market in the country, with cost per lead on Google Search frequently above $200, extensive consumer awareness, and a sales motion that now has to lead with battery value rather than panel payback. The customers who still buy are better qualified than they were two years ago; the companies that have survived NEM 3.0 are the ones that moved fastest to a solar-plus-storage pitch and to tighter sales operations. Lead response time and follow-up discipline matter more than they did under NEM 2.0.",
  faq: [
    {
      q: "Is solar still worth it in California under NEM 3.0?",
      a: "Yes, with a battery. Solar-only payback under NEM 3.0 has stretched from 5 to 7 years (NEM 2.0) to 10 to 15 years in most PG&E and SCE territories. Solar paired with a right-sized battery (10 to 15 kWh), using the battery to shift evening use into peak hours, brings payback back into the 7 to 10 year range for most homes.",
    },
    {
      q: "How many solar companies are in California?",
      a: "The California Solar and Storage Association (CALSSA) estimates around 2,500 licensed solar contractors in the state. The top 20 companies install roughly 60 percent of residential volume; the rest is a long tail of smaller regional installers.",
    },
    {
      q: "What is the average cost of solar in California?",
      a: "Residential solar in California averages around $3.30 per watt installed before incentives, meaning a typical 7 kW system costs about $23,000 gross. After the 30 percent federal tax credit, net cost is around $16,000. Adding a 10 kWh battery adds roughly $12,000 to $15,000 before the ITC.",
    },
    {
      q: "Does California have a state solar tax credit?",
      a: "Not a direct state income tax credit on solar panels. California's main state-level incentive is the SGIP battery rebate and the property-tax exemption. The 30 percent federal Residential Clean Energy Credit still applies in full.",
    },
    {
      q: "What is SGIP and how do I qualify?",
      a: "SGIP (Self-Generation Incentive Program) is a California state rebate for residential battery storage, administered through PG&E, SCE and SDG&E. The Equity Resilience tier offers the largest rebates (up to 100 percent of battery cost) for income-qualified households in high-fire-risk areas. The general tier is open to all customers but offers much smaller rebates. Applications are limited by annual funding.",
    },
  ],
};
