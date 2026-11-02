import type { City } from "../types";

export const CORPUS_CHRISTI: City = {
  slug: "corpus-christi",
  stateSlug: "texas",
  name: "Corpus Christi",
  title: "Solar in Corpus Christi: AEP Texas and Gulf Coast hurricane engineering",
  metaTitle: "Solar Companies in Corpus Christi: AEP Texas, REP, Permits",
  metaDescription:
    "Honest guide to solar in Corpus Christi: AEP Texas delivery with REP buyback, City of Corpus Christi permits, hurricane engineering, salt air, and running a solar company on the Texas Gulf Coast.",
  answer:
    "Corpus Christi is served by AEP Texas on the wires with deregulated ERCOT REP choice for retail. A solar-buyback REP is essential for export credit. Gulf Coast hurricane exposure requires proper structural attachment; coastal salt air requires marine-grade stainless hardware for installations within 2 miles of the water.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.0,
    sunnyDays: 220,
    note: "Corpus Christi gets around 5.0 peak sun hours per day with 220 sunny days per year, strong for solar. Hurricane and tropical storm exposure is real; Texas Building Code wind-load design in Nueces County runs 140 to 150 mph. Gulf Coast salt air requires marine-grade stainless hardware for durability.",
  },
  market: {
    metroPopulationK: 420,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "AEP Texas (American Electric Power subsidiary), delivers electricity to most of South Texas including Corpus Christi",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy",
    "Nueces Electric Cooperative serves parts of surrounding Nueces County",
  ],
  permits: {
    office: "City of Corpus Christi Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Corpus Christi Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Hurricane wind-load design review (140 to 150 mph) adds engineering review time. AEP Texas interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Corpus Christi means handling hurricane engineering and coastal corrosion as a standard part of every project. The best Corpus Christi operators spec marine-grade stainless racking, hurricane-rated attachment hardware, and handle AEP Texas interconnection fluently. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Corpus Christi have net metering?",
      a: "Texas has no statewide net metering mandate. In Corpus Christi (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. Switching to a solar buyback REP is essential.",
    },
    {
      q: "How long does a solar permit take in Corpus Christi?",
      a: "City of Corpus Christi Development Services typically runs residential solar permits in 3 to 5 weeks, longer than inland Texas because of hurricane wind-load review. AEP Texas interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Corpus Christi?",
      a: "Corpus Christi runs about $2.65 per watt installed for residential, slightly higher than inland Texas because of coastal engineering, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Corpus Christi?",
      a: "Yes for Corpus Christi homes with high electricity use. Payback typically runs 9 to 13 years with the federal tax credit and a solar buyback REP. Hurricane resilience is a common secondary driver that homeowners add battery storage for.",
    },
  ],
};
