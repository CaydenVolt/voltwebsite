import type { City } from "../types";

export const FORT_COLLINS: City = {
  slug: "fort-collins",
  stateSlug: "colorado",
  name: "Fort Collins",
  title: "Solar in Fort Collins: Fort Collins Utilities municipal and permits",
  metaTitle: "Solar Companies in Fort Collins: Fort Collins Utilities, Permits",
  metaDescription:
    "Honest guide to solar in Fort Collins Colorado: Fort Collins Utilities municipal (NOT Xcel Energy), City permits, Front Range altitude, and running a solar company in Larimer County.",
  answer:
    "Fort Collins is served by Fort Collins Utilities, a municipal utility (NOT Xcel Energy that serves most of the Front Range). The muni operates its own net metering programme with distinct rates. The Colorado Solar for Residential rebate ($1,500 to $5,500) does apply here. Permits run through the City of Fort Collins Building Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.4,
    sunnyDays: 245,
    note: "Fort Collins gets around 5.4 peak sun hours per day with 245 sunny days per year, strong for solar. Front Range altitude (around 5,000 feet) provides modest production boost. Hail is a real risk during May to August; UL 61730 Class 4 panels are sensible spec.",
  },
  market: {
    metroPopulationK: 365,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 115, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Fort Collins Utilities, municipal utility, serves all of Fort Collins",
    "Poudre Valley Rural Electric Association serves parts of surrounding Larimer County outside Fort Collins",
    "Xcel Energy serves most of the Front Range outside Fort Collins (Denver, Boulder metro)",
  ],
  permits: {
    office: "City of Fort Collins Building Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Fort Collins Building Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Fort Collins Utilities interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fort Collins means working under Fort Collins Utilities municipal net metering (different from Xcel in Denver and Boulder). The best Fort Collins operators handle muni-utility interconnection fluently, understand the Colorado state rebate workflow, and spec hail-rated panels. Lead costs run $115 to $200 on Google search.",
  faq: [
    {
      q: "Is Fort Collins on Xcel Energy?",
      a: "No. Fort Collins is served by Fort Collins Utilities, a municipal utility. Xcel Energy serves most of the Colorado Front Range but not Fort Collins.",
    },
    {
      q: "Does Fort Collins Utilities have net metering?",
      a: "Yes. Fort Collins Utilities operates its own net metering programme for residential solar customers. Monthly credit rollover; annual true-up at avoided cost.",
    },
    {
      q: "Does the Colorado state rebate apply in Fort Collins?",
      a: "Yes. Colorado's Solar for Residential rebate ($1,500 to $5,500 based on income tier) applies to residential installations in Fort Collins. Confirm current amounts with the Colorado Energy Office before quoting.",
    },
    {
      q: "How long does a solar permit take in Fort Collins?",
      a: "City of Fort Collins Building Services typically runs residential solar permits in 2 to 4 weeks. Fort Collins Utilities interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Fort Collins?",
      a: "Fort Collins runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit and the state rebate (if income-qualified), effective net cost is often $8,500 to $12,500.",
    },
  ],
};
