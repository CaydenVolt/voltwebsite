import type { City } from "../types";

export const ST_LOUIS: City = {
  slug: "st-louis",
  stateSlug: "missouri",
  name: "St. Louis",
  title: "Solar in St. Louis: Ameren Missouri rebate and retail NEM",
  metaTitle: "Solar Companies in St. Louis: Ameren Missouri, Rebate, Permits",
  metaDescription:
    "Honest guide to solar in St. Louis: Ameren Missouri's $0.25 per watt residential rebate, retail-rate net metering, City of St. Louis permits, and running a solar company in eastern Missouri.",
  answer:
    "St. Louis is served by Ameren Missouri under retail-rate net metering plus the utility's $0.25 per watt residential solar rebate (capped at $5,000). Together with the 30 percent federal tax credit, the stacked incentives make St. Louis solar economics competitive. Permits run through the St. Louis Building Division.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 198,
    note: "St. Louis gets around 4.6 peak sun hours per day with 198 sunny days per year, moderate for solar. Winter snow derating is modest (5 to 15 percent annual loss). Summer heat is a factor but less extreme than Phoenix or Fresno. Tornado-prone weather in spring requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 2800,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 95, high: 175 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Ameren Missouri, investor-owned, serves most of the St. Louis metro",
    "Various electric cooperatives (Cuivre River Electric Cooperative) serve rural outlying areas",
    "Municipal utilities serve smaller cities (Columbia Water & Light, Rolla Municipal Utilities)",
  ],
  permits: {
    office: "St. Louis Building Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "In pilot",
    note: "St. Louis Building Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is in pilot for select contractors. Surrounding St. Louis County and St. Charles County jurisdictions run their own permits with 2 to 4 week typical timelines. Ameren Missouri interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in St. Louis means working in a growing eastern Missouri market with strong economics from the Ameren rebate. The best St. Louis operators have templated Ameren rebate workflows (post-install application, paid within 60 days), handle Ameren Missouri interconnection fluently, and model winter snow derating honestly. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Does Ameren Missouri have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 100 kW AC under Missouri PSC rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost or rolled forward.",
    },
    {
      q: "What is the Ameren Missouri solar rebate?",
      a: "Ameren Missouri pays $0.25 per watt DC installed, capped at $5,000 per installation. For a typical 7 kW system this is $1,750. The rebate is paid post-install after approval and stacks with the 30 percent federal tax credit. Only available for Ameren Missouri customers.",
    },
    {
      q: "How long does a solar permit take in St. Louis?",
      a: "St. Louis Building Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is in pilot. Surrounding counties run 2 to 4 weeks typically. Ameren Missouri interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in St. Louis?",
      a: "St. Louis runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit and the Ameren rebate, net cost is approximately $11,750.",
    },
    {
      q: "Is solar worth it in St. Louis?",
      a: "Yes for most St. Louis homes with suitable roofs. The combination of Ameren retail NEM, the $0.25 per watt rebate, and the 30 percent federal credit makes residential solar payback typically 9 to 13 years with the federal tax credit. Winter snow derating stretches payback slightly; honest annual yield modelling matters.",
    },
  ],
};
