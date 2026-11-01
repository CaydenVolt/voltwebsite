import type { City } from "../types";

export const DENVER: City = {
  slug: "denver",
  stateSlug: "colorado",
  name: "Denver",
  title: "Solar in Denver: Xcel Energy, state rebate and high altitude climate",
  metaTitle: "Solar Companies in Denver: Xcel Energy, Rebate, Permits",
  metaDescription:
    "Honest guide to solar in Denver: Xcel Energy Colorado net metering, state Solar for Residential rebate (2024), City of Denver permits, high altitude climate factors, and running a solar company in Front Range.",
  answer:
    "Denver is served by Xcel Energy Colorado under full retail net metering. Colorado's 2024 Solar for Residential rebate ($1,500 to $5,500 per installation depending on income) stacks with the 30 percent federal credit. Front Range altitude (around 5,280 feet) delivers 15 to 20 percent higher per-panel output than sea-level sites because of reduced atmospheric attenuation. Permits run through City and County of Denver Community Planning and Development.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.5,
    sunnyDays: 245,
    note: "Denver gets around 5.5 peak sun hours per day with 245 sunny days per year, strong for solar. Front Range altitude at 5,280 feet delivers 15 to 20 percent higher per-panel output than sea-level sites due to reduced atmospheric attenuation and lower ambient temperatures (improves panel efficiency). Hail is a real risk during the May to August storm season; UL 61730 Class 4 impact-rated panels are sensible spec. Winter snow is a modest factor; Front Range snow is dry and sheds quickly from south-facing panels.",
  },
  market: {
    metroPopulationK: 3000,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "High",
  },
  utilities: [
    "Xcel Energy Colorado, investor-owned, serves most of the Denver metro",
    "United Power (cooperative) serves parts of northern suburbs including Thornton, Brighton",
    "Intermountain Rural Electric Association (IREA) serves parts of southern suburbs",
    "Various municipal utilities (Fort Collins Utilities, Longmont Power & Communications) serve specific Front Range cities north of Denver",
  ],
  permits: {
    office: "City and County of Denver Community Planning and Development",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City and County of Denver Community Planning and Development typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors as of 2026. Surrounding Jefferson, Arapahoe, Adams and Douglas county jurisdictions run their own permits with 2 to 4 week typical timelines. Xcel Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Denver means working in a market with strong fundamentals (retail NEM, state rebate, altitude-boosted production) and competitive but not saturated installer density. The best Denver operators have templated workflows for Colorado's income-tiered Solar for Residential rebate (which requires income documentation at application), understand the hail-rated panel differentiation that matters on the Front Range, and spec Class 4 impact-rated panels as standard. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Does Xcel Energy Colorado have net metering?",
      a: "Yes. Xcel Energy Colorado offers full retail net metering for residential solar systems up to 120 percent of annual load under Colorado PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at Xcel's avoided cost rate.",
    },
    {
      q: "What is the Colorado Solar for Residential rebate?",
      a: "Colorado's Solar for Residential programme (established 2024) pays rebates of $1,500 to $5,500 per residential installation based on household income tier. The rebate stacks with the 30 percent federal Residential Clean Energy Credit. Applications require income documentation; experienced Colorado installers have templated workflows for the income-tier verification. Confirm current rebate amounts with the Colorado Energy Office before quoting.",
    },
    {
      q: "How long does a solar permit take in Denver?",
      a: "City and County of Denver Community Planning and Development typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. Surrounding Front Range counties run 2 to 4 weeks typically. Xcel Energy interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Denver?",
      a: "Denver runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit and the Colorado Solar for Residential rebate (if income-qualified), effective net cost is often $8,500 to $12,500.",
    },
    {
      q: "Is solar worth it in Denver?",
      a: "Yes for most Denver homes with suitable roofs. The combination of Xcel retail NEM, the state rebate (where income-qualified), altitude-boosted production, and the federal tax credit makes residential solar payback typically 7 to 10 years. Hail resilience with Class 4 panels is essential; cheap non-rated panels regularly fail in Front Range hail events.",
    },
  ],
};
