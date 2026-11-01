import type { State } from "../types";

export const VERMONT: State = {
  slug: "vermont",
  name: "Vermont",
  abbr: "VT",
  title: "Solar in Vermont: market, Group Net Metering and winter reality",
  metaTitle: "Solar Companies in Vermont: GMP, VEC, Group Net Metering",
  metaDescription:
    "Honest guide to Vermont solar: market size, Green Mountain Power net metering with time-of-use, Vermont Group Net Metering for shared installations, winter snow derating, and running a solar company in VT.",
  answer:
    "Vermont is the thirty-first-largest US solar market with over 500 MW installed. Despite small population, Vermont has among the highest per-capita residential solar penetration in the US. Green Mountain Power dominates the market with retail-rate net metering plus storage-attached incentives. Vermont also pioneered Group Net Metering, which lets households share a single solar array across multiple accounts.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 500,
    homesPoweredK: 85,
    percentOfElectricity: 20,
    jobs: 1000,
    averageCostPerWatt: 3.1,
    nationalRank: 31,
  },
  marketNotes:
    "Vermont's residential solar market is mature despite small size. Green Mountain Power's progressive storage programmes (Bring Your Own Device battery incentive, Resilient Home programme) have made storage-attached installations a larger share of new work than most states. Group Net Metering supports community solar and multi-household arrays.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Vermont net metering under Public Utility Commission rules credits residential solar exports at retail rates with specific adjustments: a 'blended rate' that varies slightly from pure retail based on project size and location. Monthly credits accrue; annual true-up at bill year end. Group Net Metering permits a single solar installation to credit multiple customer accounts (community solar model).",
  },
  averageRate: 0.21,
  rateNote:
    "Vermont residential rates average around $0.21 per kWh at Green Mountain Power. Co-op territory rates (VEC, Washington Electric Co-op) run slightly higher. Rates have risen approximately 20 percent since 2022.",
  utilities: ["Green Mountain Power (GMP), investor-owned, serves most of Vermont including Burlington area", "Vermont Electric Cooperative (VEC), serves parts of northern Vermont", "Washington Electric Cooperative, serves parts of central Vermont", "Various municipal utilities (Burlington Electric Department, Hardwick Electric, Morrisville Water & Light) serve specific cities"],
  incentives: [
    {
      name: "Vermont Clean Energy Development Fund incentives",
      text: "The Clean Energy Development Fund provides periodic incentives for residential solar. Current programme structure varies; confirm with the Vermont Department of Public Service before quoting.",
    },
    {
      name: "Green Mountain Power Bring Your Own Device battery incentive",
      text: "GMP pays residential customers an upfront incentive (up to $10,500 for a Powerwall-class battery as of 2025) in exchange for allowing GMP to use the battery during grid stress events. The incentive makes storage-attached installations substantially more affordable; some installations are effectively cash-flow positive from day one.",
    },
    {
      name: "Group Net Metering",
      text: "Vermont permits a single solar installation to credit multiple customer accounts under the Group Net Metering rules. This supports community solar farms, multi-family housing, and shared arrays among neighbours. The programme is unique to Vermont and a few other states.",
    },
    {
      name: "Sales-tax exemption",
      text: "Vermont exempts residential solar PV equipment from the state's 6 percent sales tax under the renewable energy equipment exemption.",
    },
  ],
  permits:
    "Permit timelines in Vermont are generally fast. Most towns handle residential solar permits in 1 to 4 weeks via the state-level Certificate of Public Good process (expedited for systems under 150 kW). Burlington and Montpelier may take 3 to 5 weeks. SolarAPP+ is not accepted. Interconnection with GMP typically runs 3 to 5 weeks post-install.",
  installerLandscape:
    "Running a solar company in Vermont means working in a small but mature market with progressive utility programmes. The best Vermont operators have fluent GMP Bring Your Own Device workflows, understand the Group Net Metering option for multi-household projects, and model winter snow derating honestly (annual production loss typically 15 to 25 percent). Lead costs run $110 to $200 on Google search.",
  faq: [
    {
      q: "Does Vermont have net metering?",
      a: "Yes, under Public Utility Commission rules. Residential solar exports credit at a 'blended rate' close to retail with specific adjustments for project size and location. Monthly rollover; annual true-up. Group Net Metering permits a single installation to credit multiple customer accounts.",
    },
    {
      q: "What is Green Mountain Power's Bring Your Own Device programme?",
      a: "GMP's Bring Your Own Device (BYOD) programme pays residential customers an upfront incentive (up to $10,500 for a Powerwall-class battery as of 2025) in exchange for GMP's right to use the battery during grid stress events. The incentive makes storage-attached installations substantially more affordable and sometimes net-positive from day one.",
    },
    {
      q: "How much does solar cost in Vermont?",
      a: "Residential solar in Vermont averages around $3.10 per watt installed, meaning a typical 7 kW system costs about $21,700 gross. After the 30 percent federal tax credit and any applicable GMP BYOD battery incentive for storage-attached systems, net cost is approximately $11,000 to $15,000.",
    },
    {
      q: "Is solar worth it in Vermont?",
      a: "Yes for most Vermont homes with suitable roofs. The combination of retail-rate net metering, strong GMP storage programmes, and the federal tax credit makes residential solar payback typically 8 to 12 years for solar-only and faster for storage-attached under BYOD. Winter snow derating stretches payback; honest annual yield modelling matters.",
    },
  ],
};
