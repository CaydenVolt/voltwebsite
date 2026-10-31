import type { State } from "../types";

export const OREGON: State = {
  slug: "oregon",
  name: "Oregon",
  abbr: "OR",
  title: "Solar in Oregon: market, incentives and net metering reality",
  metaTitle: "Solar Companies in Oregon: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Oregon solar: market size, PGE and Pacific Power net metering, Energy Trust of Oregon rebates, and running a solar company in OR.",
  answer:
    "Oregon is the nineteenth-largest US solar market with over 1,500 MW installed. The state has full retail net metering under PGE and Pacific Power plus Energy Trust of Oregon residential incentives, which stack with the federal tax credit to produce workable economics despite modest sun hours (around 3.8 to 4.3 peak sun hours per day).",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 1500,
    homesPoweredK: 220,
    percentOfElectricity: 5,
    jobs: 4100,
    averageCostPerWatt: 2.8,
    nationalRank: 19,
  },
  marketNotes:
    "Oregon's solar market has grown steadily on a mix of residential and utility-scale installations. The state's low electricity rates (compared to coastal neighbours) make solar economics tighter than in California or Hawaii, but the stacked incentives (ETO rebate + federal credit) keep payback workable. The Portland metro, Eugene and Bend are the strongest residential markets.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Oregon offers full retail net metering for residential solar systems under PGE and Pacific Power. Credits accrue monthly; annual excess is credited at avoided-cost rate. The programme has been stable since 2007 with periodic cap increases.",
  },
  averageRate: 0.12,
  rateNote:
    "Oregon residential rates average around $0.12 per kWh, lower than most coastal states due to abundant hydroelectric generation. Rates have risen roughly 20 percent since 2022 driven by rate cases and grid investment.",
  utilities: ["Portland General Electric (PGE)", "Pacific Power", "Various consumer-owned utilities and co-ops"],
  incentives: [
    {
      name: "Energy Trust of Oregon Residential Solar incentive",
      text: "Direct rebate for residential solar installations in PGE and Pacific Power territory, administered by Energy Trust of Oregon. Current rebate: around $0.20 to $0.40 per watt, capped per project. For a typical 7 kW system, rebate is $1,400 to $2,800.",
    },
    {
      name: "Oregon Solar + Storage Rebate (ODOE)",
      text: "Oregon Department of Energy rebate for residential solar paired with battery storage. Up to $5,000 for solar alone, up to $2,500 for storage. Income-qualified bonuses available. Programme funding is capped annually.",
    },
    {
      name: "Property-tax exemption",
      text: "Oregon exempts the added value of residential solar systems from property-tax assessment under ORS 307.175. Automatic.",
    },
    {
      name: "No state income tax credit",
      text: "Oregon's state solar tax credit was repealed after 2017. The main state-level benefits now are the ETO rebate, the ODOE rebate and the property-tax exemption, plus the 30 percent federal credit.",
    },
  ],
  permits:
    "Permit timelines in Oregon vary by jurisdiction. Portland, Multnomah County and Eugene commonly take 3 to 6 weeks for residential. Smaller jurisdictions can be faster. SolarAPP+ adoption is limited. Interconnection with PGE and Pacific Power typically runs 3 to 5 weeks post-install.",
  installerLandscape:
    "Running a solar company in Oregon means operating in a market with modest sun hours and lower electric rates than coastal peers, offset by strong rebate stacking. The installers who have grown fastest know the ETO and ODOE rebate processes well and build them into every proposal. Portland metro has moderate lead costs ($100 to $160 range); the rest of the state is cheaper. Winter installation seasonality is a factor; most installers see slower volume December through February.",
  faq: [
    {
      q: "Does Oregon have net metering?",
      a: "Yes, full retail net metering at PGE and Pacific Power. Credits accrue monthly; annual excess is credited at avoided-cost rate. The programme has been stable since 2007 with periodic cap increases.",
    },
    {
      q: "How much does solar cost in Oregon?",
      a: "Residential solar in Oregon averages around $2.80 per watt installed, meaning a typical 7 kW system costs about $19,500 gross. After the 30 percent federal credit, ETO rebate and (if available) the ODOE Solar + Storage rebate, net cost often drops to $9,000 to $12,000.",
    },
    {
      q: "Is solar worth it in Oregon?",
      a: "Yes, with the full incentive stack. Oregon's modest 3.8 to 4.3 peak sun hours per day make the pure electricity-savings maths tighter than California or Arizona, but the ETO rebate, ODOE rebate and federal tax credit together produce 8 to 11 year payback for most residential installations.",
    },
    {
      q: "Does Oregon have a state solar tax credit?",
      a: "No. Oregon's state solar tax credit was repealed after 2017. The state-level benefits now are the Energy Trust of Oregon rebate, the ODOE Solar + Storage rebate, and the property-tax exemption. The 30 percent federal Residential Clean Energy Credit still applies.",
    },
  ],
};
