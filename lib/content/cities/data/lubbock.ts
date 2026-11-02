import type { City } from "../types";

export const LUBBOCK: City = {
  slug: "lubbock",
  stateSlug: "texas",
  name: "Lubbock",
  title: "Solar in Lubbock: LP&L municipal utility and West Texas climate",
  metaTitle: "Solar Companies in Lubbock: LP&L, Permits",
  metaDescription:
    "Honest guide to solar in Lubbock Texas: Lubbock Power & Light municipal utility (NOT ERCOT deregulated until 2024), City of Lubbock permits, high plains climate, and running a solar company in West Texas.",
  answer:
    "Lubbock is unusual in Texas: served by Lubbock Power & Light (LP&L), a municipal utility that joined ERCOT in 2024 (previously part of the Southwest Power Pool). Residential solar operates under LP&L's own net metering programme, which has been reshaped by the ERCOT transition. High plains altitude provides modest production boost; strong winds affect design.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.8,
    sunnyDays: 263,
    note: "Lubbock gets around 5.8 peak sun hours per day with 263 sunny days per year, excellent for solar. High plains altitude (around 3,200 feet) provides modest production boost. Sustained winds exceeding 30 mph are common; proper structural attachment and wind-rated racking matter. Spring hail is a secondary risk.",
  },
  market: {
    metroPopulationK: 320,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 80, high: 150 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Lubbock Power & Light (LP&L), municipal utility, serves most of Lubbock (joined ERCOT in 2024)",
    "South Plains Electric Cooperative serves parts of surrounding Lubbock County",
    "Various other co-ops serve outlying areas",
  ],
  permits: {
    office: "City of Lubbock Building Inspection Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Lubbock Building Inspection Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. LP&L interconnection post-install typically runs 3 to 6 weeks (still being refined after the 2024 ERCOT transition).",
  },
  installerLandscape:
    "Running a solar company in Lubbock means working under LP&L's evolving net metering structure (still being refined after the 2024 ERCOT transition). The best Lubbock operators handle LP&L interconnection fluently, spec wind-rated racking, and understand the differences between LP&L territory and the surrounding co-op territories. Lead costs run $80 to $150 on Google search.",
  faq: [
    {
      q: "Does LP&L have net metering?",
      a: "LP&L's net metering programme has been reshaped by the 2024 ERCOT transition. Current structure continues monthly credit at LP&L retail with annual true-up at avoided cost; specifics are evolving. Confirm current LP&L solar programme terms before quoting.",
    },
    {
      q: "How long does a solar permit take in Lubbock?",
      a: "City of Lubbock Building Inspection Department typically runs residential solar permits in 2 to 4 weeks. LP&L interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Lubbock?",
      a: "Lubbock runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700.",
    },
    {
      q: "Is solar worth it in Lubbock?",
      a: "Yes for Lubbock homes with high electricity use. Strong sun hours (5.8 peak sun hours per day) and altitude boost help the economics. Payback typically runs 9 to 13 years with the federal tax credit under LP&L's current programme structure.",
    },
  ],
};
