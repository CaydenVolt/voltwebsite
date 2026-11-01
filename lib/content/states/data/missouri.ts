import type { State } from "../types";

export const MISSOURI: State = {
  slug: "missouri",
  name: "Missouri",
  abbr: "MO",
  title: "Solar in Missouri: market, Ameren Missouri rebate and net metering",
  metaTitle: "Solar Companies in Missouri: Ameren MO, Rebate, Permits",
  metaDescription:
    "Honest guide to Missouri solar: market size, Ameren Missouri's $0.25 per watt residential rebate, Evergy and Ameren net metering, and running a solar company in Missouri.",
  answer:
    "Missouri is the thirty-fourth-largest US solar market with over 760 MW installed. Residential solar operates under utility-level net metering plus Ameren Missouri's residential solar rebate ($0.25 per watt DC capped at $5,000). Evergy Missouri offers monthly rollover NEM. The federal tax credit plus the Ameren rebate (where applicable) make the economics competitive. Permits run through local municipalities.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 760,
    homesPoweredK: 110,
    percentOfElectricity: 1,
    jobs: 2800,
    averageCostPerWatt: 2.75,
    nationalRank: 34,
  },
  marketNotes:
    "Missouri's solar market has grown steadily under Ameren Missouri's rebate programme and utility net metering. St. Louis metro and Kansas City metro dominate residential. The Ameren rebate is the largest incentive after the federal tax credit for central and eastern Missouri; western Missouri (Evergy territory) relies on the federal credit alone.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Missouri net metering operates at the utility level under Missouri PSC oversight. Ameren Missouri and Evergy both offer retail-rate net metering for residential solar systems up to 100 kW AC. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost or rolled forward depending on utility.",
  },
  averageRate: 0.13,
  rateNote:
    "Missouri residential rates average around $0.13 per kWh across the major investor-owned utilities, among the lower in the US. Rates have risen approximately 10 percent since 2022.",
  utilities: ["Ameren Missouri, investor-owned, serves most of central and eastern Missouri including St. Louis", "Evergy (formerly Kansas City Power & Light and Westar Energy), investor-owned, serves most of western Missouri including Kansas City", "Various electric cooperatives (Cuivre River Electric Cooperative, Three Rivers Electric Cooperative, others) serve rural areas"],
  incentives: [
    {
      name: "Ameren Missouri residential solar rebate",
      text: "Ameren Missouri offers a residential solar rebate of $0.25 per watt DC capped at $5,000 per installation (as of 2025, confirm current rate before quoting). Only available for Ameren Missouri customers; Evergy customers do not receive this rebate.",
    },
    {
      name: "Property-tax exemption",
      text: "Missouri exempts the added value of residential solar systems from property-tax assessment under Mo. Rev. Stat. 137.100(10). Automatic.",
    },
    {
      name: "No state income tax credit",
      text: "Missouri does not currently offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
  ],
  permits:
    "Permit timelines in Missouri vary by jurisdiction. St. Louis, Kansas City, Springfield and Columbia commonly take 3 to 5 weeks for residential. SolarAPP+ is in pilot in St. Louis but not broadly deployed. Smaller cities and county offices can be faster. Interconnection with Ameren Missouri or Evergy typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Missouri means handling the Ameren vs Evergy split carefully: Ameren customers get the $0.25 per watt rebate, Evergy customers do not. The best Missouri operators quote accurately for both utility territories, have templated Ameren rebate workflows (post-install application, typically paid within 60 days), and model winter snow and summer heat derating honestly. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Does Missouri have net metering?",
      a: "Yes, at utility level under Missouri PSC oversight. Ameren Missouri and Evergy both offer retail-rate net metering for residential solar systems up to 100 kW AC. Monthly credit rollover with annual true-up.",
    },
    {
      q: "What is the Ameren Missouri solar rebate?",
      a: "Ameren Missouri's residential solar rebate pays $0.25 per watt DC installed, capped at $5,000 per installation. For a typical 7 kW system this is $1,750 (not reaching the cap). The rebate is paid post-install after approval and stacks with the 30 percent federal tax credit. Only available for Ameren Missouri customers.",
    },
    {
      q: "How much does solar cost in Missouri?",
      a: "Residential solar in Missouri averages around $2.75 per watt installed, meaning a typical 7 kW system costs about $19,300 gross. After the 30 percent federal tax credit and the Ameren rebate (if applicable), net cost is approximately $11,750 for Ameren customers or $13,500 for Evergy customers.",
    },
    {
      q: "Is solar worth it in Missouri?",
      a: "Yes for most Missouri homes with suitable roofs. The combination of utility retail NEM, Ameren rebate (where applicable), and the 30 percent federal credit makes residential solar payback typically 9 to 13 years for Ameren customers and 11 to 14 years for Evergy customers. Honest annual yield modelling for Midwest winter weather matters.",
    },
  ],
};
