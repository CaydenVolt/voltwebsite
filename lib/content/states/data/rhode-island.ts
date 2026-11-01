import type { State } from "../types";

export const RHODE_ISLAND: State = {
  slug: "rhode-island",
  name: "Rhode Island",
  abbr: "RI",
  title: "Solar in Rhode Island: market, Renewable Energy Growth and NEM",
  metaTitle: "Solar Companies in Rhode Island: RI Energy, REG, Permits",
  metaDescription:
    "Honest guide to Rhode Island solar: market size, Rhode Island Energy net metering, Renewable Energy Growth (REG) performance-based incentive, and running a solar company in RI.",
  answer:
    "Rhode Island is the thirty-sixth-largest US solar market with over 460 MW installed, substantial for the smallest state. Residential solar operates under Rhode Island Energy retail net metering plus the Renewable Energy Growth (REG) programme, which pays per-kWh for 15 years. The combination of high retail rates (around $0.30 per kWh), REG payments, and the federal tax credit makes residential payback among the fastest in the Northeast.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 460,
    homesPoweredK: 70,
    percentOfElectricity: 7,
    jobs: 1900,
    averageCostPerWatt: 3.1,
    nationalRank: 36,
  },
  marketNotes:
    "Rhode Island's solar market has grown steadily under stacked incentives. The REG programme pays block-rate performance incentives that step down as programme capacity fills; current block rates still favour new residential installations. Providence metro dominates residential; small size means the state market is saturated at the installer level despite modest total MW.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Rhode Island offers retail-rate net metering for residential solar systems up to 25 kW AC at Rhode Island Energy (formerly National Grid Rhode Island) under PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward or paid at avoided cost.",
  },
  averageRate: 0.3,
  rateNote:
    "Rhode Island residential rates average around $0.30 per kWh at Rhode Island Energy, among the highest in the US. Rates have risen approximately 30 percent since 2022 driven by capacity market changes in ISO-NE.",
  utilities: ["Rhode Island Energy (PPL subsidiary, formerly National Grid Rhode Island), investor-owned, serves all of RI", "Pascoag Utility District serves Pascoag (municipal)", "Block Island Power Company serves Block Island"],
  incentives: [
    {
      name: "Renewable Energy Growth (REG) programme",
      text: "RI's REG programme pays residential solar installations a per-kWh performance incentive for 15 years at block-rate pricing (currently approximately $0.28 to $0.36 per kWh depending on current block availability; confirm with the RI Office of Energy Resources before quoting). Block rates step down as programme caps fill. For a typical 7 kW system producing 8,000 kWh annually, REG payments add $2,200 to $2,900 per year.",
    },
    {
      name: "Rhode Island personal income tax credit for solar",
      text: "Rhode Island currently offers no state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive. (Prior credits phased out.)",
    },
    {
      name: "Sales-tax exemption",
      text: "Rhode Island exempts residential solar PV equipment from the state's 7 percent sales tax under the renewable energy equipment exemption.",
    },
    {
      name: "Property-tax exemption",
      text: "Rhode Island exempts the added value of residential solar systems from property-tax assessment under R.I. Gen. Laws 44-3-21. Automatic.",
    },
  ],
  permits:
    "Permit timelines in Rhode Island vary by municipality. Providence, Warwick, Cranston and Pawtucket commonly take 3 to 5 weeks for residential. Smaller towns can be faster. SolarAPP+ is not accepted. Interconnection with Rhode Island Energy typically runs 3 to 5 weeks post-install.",
  installerLandscape:
    "Running a solar company in Rhode Island means working in a small, mature market where REG payments do most of the economic lifting. The best RI operators have templated REG registration workflows (block pricing fills over time; timing matters), fluent Rhode Island Energy interconnection, and understand the differences between the city of Providence and surrounding towns' permit processes. Lead costs run $130 to $220 on Google search.",
  faq: [
    {
      q: "Does Rhode Island have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC at Rhode Island Energy under PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "What is the RI Renewable Energy Growth programme?",
      a: "REG pays residential solar installations a per-kWh performance incentive for 15 years at block-rate pricing (currently approximately $0.28 to $0.36 per kWh depending on current block). The incentive stacks with the 30 percent federal tax credit and retail NEM. For a typical 7 kW system, REG adds $2,200 to $2,900 per year.",
    },
    {
      q: "How much does solar cost in Rhode Island?",
      a: "Residential solar in Rhode Island averages around $3.10 per watt installed, meaning a typical 7 kW system costs about $21,700 gross. After the 30 percent federal tax credit and the 15-year REG income stream (present value approximately $18,000 to $24,000 for a 7 kW system), effective net cost is often net-positive from day one depending on current block pricing.",
    },
    {
      q: "Is solar worth it in Rhode Island?",
      a: "Yes substantially. The combination of Rhode Island Energy retail NEM, 15 years of REG performance incentives, and the 30 percent federal credit makes residential solar payback typically 4 to 7 years for RI homes with suitable roofs. Among the strongest payback economies in the US.",
    },
  ],
};
