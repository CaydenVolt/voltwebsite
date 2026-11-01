import type { State } from "../types";

export const NEW_HAMPSHIRE: State = {
  slug: "new-hampshire",
  name: "New Hampshire",
  abbr: "NH",
  title: "Solar in New Hampshire: market, Eversource NH and net metering",
  metaTitle: "Solar Companies in New Hampshire: Eversource, Unitil, Permits",
  metaDescription:
    "Honest guide to New Hampshire solar: market size, Eversource NH and Unitil net metering, Renewable Energy Rebate programme, winter snow derating, and running a solar company in NH.",
  answer:
    "New Hampshire is the thirty-fifth-largest US solar market with over 350 MW installed. Residential solar operates under retail net metering at Eversource NH, Unitil and Liberty Utilities, plus the state Renewable Energy Rebate programme ($0.20 per watt capped at $1,000 for solar). High retail electric rates (around $0.26 per kWh at Eversource NH) keep the economics workable despite modest sun hours and winter snow derating.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 350,
    homesPoweredK: 55,
    percentOfElectricity: 2,
    jobs: 950,
    averageCostPerWatt: 3.1,
    nationalRank: 35,
  },
  marketNotes:
    "New Hampshire's solar market has grown steadily under retail net metering and modest state incentives. The state is relatively small, so installer density is moderate. High electric rates do most of the economic lifting for solar; the state rebate adds a modest boost. Manchester, Nashua and the Seacoast dominate residential.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "New Hampshire offers retail-rate net metering for residential solar systems up to 100 kW AC under Public Utilities Commission rules. Eversource NH, Unitil and Liberty Utilities all participate. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward or credited at avoided cost (varies by utility).",
  },
  averageRate: 0.26,
  rateNote:
    "New Hampshire residential rates average around $0.26 per kWh at Eversource NH, among the higher in the US. Unitil and Liberty Utilities rates run similar. Rates have risen approximately 30 percent since 2022 driven by capacity market changes in ISO-NE.",
  utilities: ["Eversource New Hampshire, investor-owned, serves most of New Hampshire", "Unitil (Unitil Energy Systems), investor-owned, serves parts of eastern and southern NH", "Liberty Utilities (NH), serves parts of central NH including Manchester", "New Hampshire Electric Cooperative serves parts of rural NH"],
  incentives: [
    {
      name: "New Hampshire Renewable Energy Rebate",
      text: "The NH Renewable Energy Rebate pays residential solar installations $0.20 per watt DC capped at $1,000 (as of 2025, confirm current rate before quoting). Administered by the NH Public Utilities Commission's Office of Energy Innovation. Stacks with the 30 percent federal credit.",
    },
    {
      name: "No state income tax credit (no state income tax)",
      text: "New Hampshire has no state income tax, so a state income tax credit is not applicable. The 30 percent federal Residential Clean Energy Credit is the only tax-based incentive.",
    },
    {
      name: "Property-tax exemption (local option)",
      text: "Many NH municipalities offer local property-tax exemptions for residential solar under RSA 72:61-72:72. Not statewide automatic; check with the local assessor.",
    },
    {
      name: "Sales-tax exemption (no state sales tax)",
      text: "New Hampshire has no state sales tax, so solar equipment is already exempt from sales tax by default. No separate exemption needed.",
    },
  ],
  permits:
    "Permit timelines in New Hampshire vary by municipality. Manchester, Nashua, Concord and Portsmouth commonly take 3 to 5 weeks for residential. Smaller towns can be faster, often 1 to 3 weeks. SolarAPP+ is not accepted. Interconnection with Eversource NH, Unitil or Liberty typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in New Hampshire means working in a small but mature market where high electric rates do most of the sales work. The best NH operators have templated Renewable Energy Rebate workflows, understand the differences between Eversource NH, Unitil and Liberty Utilities interconnection processes, and model winter snow derating honestly. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does New Hampshire have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 100 kW AC at Eversource NH, Unitil and Liberty Utilities under Public Utilities Commission rules. Monthly credit rollover; annual true-up varies by utility.",
    },
    {
      q: "What is the NH Renewable Energy Rebate?",
      a: "The NH Renewable Energy Rebate pays residential solar installations $0.20 per watt DC capped at $1,000 (approximately $1,000 maximum rebate for a 5+ kW system). Administered by the NH Public Utilities Commission's Office of Energy Innovation. Stacks with the 30 percent federal credit.",
    },
    {
      q: "How much does solar cost in New Hampshire?",
      a: "Residential solar in New Hampshire averages around $3.10 per watt installed, meaning a typical 7 kW system costs about $21,700 gross. After the 30 percent federal tax credit and the NH Renewable Energy Rebate, net cost is approximately $14,200.",
    },
    {
      q: "Is solar worth it in New Hampshire?",
      a: "Yes for most NH homes with suitable roofs. The high retail electric rates (around $0.26 per kWh), retail-rate net metering, modest state rebate, and the 30 percent federal credit make residential solar payback typically 8 to 11 years with the federal tax credit. Winter snow derating stretches payback; honest annual yield modelling matters.",
    },
  ],
};
