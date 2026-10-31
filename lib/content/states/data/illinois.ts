import type { State } from "../types";

export const ILLINOIS: State = {
  slug: "illinois",
  name: "Illinois",
  abbr: "IL",
  title: "Solar in Illinois: market, Illinois Shines SREC programme and incentives",
  metaTitle: "Solar Companies in Illinois: Market, Illinois Shines, Incentives",
  metaDescription:
    "Honest guide to Illinois solar: market size, the Illinois Shines SREC programme, ComEd and Ameren net metering, and running a solar company in IL.",
  answer:
    "Illinois is the eighteenth-largest US solar market with over 2,000 MW installed. The state has one of the strongest residential solar economics in the Midwest thanks to the Illinois Shines programme (Adjustable Block Programme), which pays a 15-year SREC-equivalent incentive stacked on top of retail net metering and the federal tax credit.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 2000,
    homesPoweredK: 330,
    percentOfElectricity: 3,
    jobs: 5800,
    averageCostPerWatt: 2.8,
    nationalRank: 18,
  },
  marketNotes:
    "Illinois's solar market has grown rapidly since the 2016 Future Energy Jobs Act created the Adjustable Block Programme (Illinois Shines). Residential growth has been strongest in the Chicago metro, Springfield and the collar counties. The 2021 Climate and Equitable Jobs Act (CEJA) expanded the programme meaningfully.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Illinois offers full retail net metering for residential solar systems under ComEd and Ameren Illinois. Credits accrue monthly. The regime was recently restructured: as of 2024, residential customers are moved to a smart-inverter-rebate-plus-NEM structure, with the smart inverter rebate ($300 to $500) paid upfront and NEM continuing for exports.",
  },
  averageRate: 0.15,
  rateNote:
    "Illinois residential rates average around $0.15 per kWh. The state has deregulated supply, so homeowners can switch between competing electricity suppliers (price-to-compare rate from the default utility). ComEd and Ameren charge separately for delivery.",
  utilities: ["ComEd (northern Illinois including Chicago)", "Ameren Illinois (central and southern IL)", "MidAmerican Energy (Quad Cities)"],
  incentives: [
    {
      name: "Illinois Shines (Adjustable Block Programme)",
      text: "Residential solar systems receive a 15-year REC-equivalent incentive, paid upfront by an Approved Vendor (installer) and valued around $7,000 to $12,000 for a typical 7 kW system depending on block pricing and installer discount. Programme funding is capped and refills periodically.",
    },
    {
      name: "Smart Inverter Rebate",
      text: "ComEd and Ameren offer upfront rebates for smart-inverter installations: typically $300 to $500 for residential. Required for new installations as part of the 2024 NEM restructuring.",
    },
    {
      name: "Property-tax exemption",
      text: "Illinois exempts the added value of residential solar systems from property-tax assessment under 35 ILCS 200/10-605. Automatic.",
    },
    {
      name: "Sales-tax exemption",
      text: "Residential solar PV equipment is exempt from Illinois's 6.25 percent state sales tax under the renewable energy exemption.",
    },
    {
      name: "Illinois Solar for All",
      text: "Low-income solar programme funded under CEJA. Covers up to 100 percent of residential solar installation cost for qualifying households. Administered through Approved Vendors; applications are competitive.",
    },
  ],
  permits:
    "Permit timelines in Illinois vary by municipality. Chicago, Cook County and the collar counties commonly take 3 to 6 weeks for residential. Downstate jurisdictions can be faster. SolarAPP+ adoption is limited. Interconnection with ComEd typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Illinois means operating as an Approved Vendor in the Illinois Shines programme (which requires certification) and knowing the current block pricing and queue status in detail. The installers who have grown fastest are the ones who built Illinois Shines payment projections cleanly into every proposal and who have detailed knowledge of ComEd vs Ameren territory differences. Chicago metro has moderate lead costs ($120 to $180); downstate is cheaper and less saturated.",
  faq: [
    {
      q: "Does Illinois have net metering?",
      a: "Yes, with a 2024 restructure. Residential solar customers at ComEd and Ameren receive retail-rate net metering for exports plus an upfront smart-inverter rebate ($300 to $500). The regime continues to credit retail-rate for exports, with monthly netting.",
    },
    {
      q: "What is Illinois Shines?",
      a: "Illinois Shines is the state's primary solar incentive programme, created by the 2016 Future Energy Jobs Act and expanded by the 2021 CEJA. Residential solar systems receive a 15-year REC-equivalent incentive, paid upfront by an Approved Vendor (installer) and valued around $7,000 to $12,000 for a typical 7 kW system. Programme funding is capped and refills periodically.",
    },
    {
      q: "How much does solar cost in Illinois?",
      a: "Residential solar in Illinois averages around $2.80 per watt installed, meaning a typical 7 kW system costs about $19,500 gross. After the 30 percent federal credit and the Illinois Shines upfront incentive, net cost often drops to $4,000 to $8,000.",
    },
    {
      q: "Is solar worth it in Illinois?",
      a: "Yes, with some of the strongest stacked economics in the Midwest. The combination of retail NEM, Illinois Shines upfront incentive, federal tax credit and sales/property tax exemption produces 4 to 7 year payback for most residential installations with the full stack applied.",
    },
  ],
};
