import type { City } from "../types";

export const COLORADO_SPRINGS: City = {
  slug: "colorado-springs",
  stateSlug: "colorado",
  name: "Colorado Springs",
  title: "Solar in Colorado Springs: Colorado Springs Utilities municipal",
  metaTitle: "Solar Companies in Colorado Springs: CSU, Permits",
  metaDescription:
    "Honest guide to solar in Colorado Springs: Colorado Springs Utilities (CSU) municipal utility NOT Xcel Energy, City permits, Front Range altitude, and running a solar company in El Paso County.",
  answer:
    "Colorado Springs is served by Colorado Springs Utilities (CSU), a four-service municipal utility (electric, gas, water, wastewater) NOT Xcel Energy. CSU operates its own net metering programme. The Colorado Solar for Residential rebate applies here same as Xcel territory. Permits run through the City of Colorado Springs Pikes Peak Regional Building Department.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.5,
    sunnyDays: 243,
    note: "Colorado Springs gets around 5.5 peak sun hours per day with 243 sunny days per year, strong for solar. High altitude (around 6,000 feet, higher than Denver) delivers modest production boost. Hail is a real risk during May to August; Class 4 panels are standard.",
  },
  market: {
    metroPopulationK: 760,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 115, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Colorado Springs Utilities (CSU), municipal utility, serves all of Colorado Springs",
    "Mountain View Electric Association serves parts of surrounding El Paso County outside Colorado Springs",
  ],
  permits: {
    office: "Pikes Peak Regional Building Department (serves City of Colorado Springs)",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Pikes Peak Regional Building Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. CSU interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Colorado Springs means working under CSU municipal net metering (different from Xcel in Denver). The best Colorado Springs operators handle CSU interconnection fluently, understand the state rebate workflow, and spec hail-rated panels for Front Range hail events. Lead costs run $115 to $200 on Google search.",
  faq: [
    {
      q: "Is Colorado Springs on Xcel Energy?",
      a: "No. Colorado Springs is served by Colorado Springs Utilities (CSU), a four-service municipal utility. Xcel Energy serves most of the Front Range Denver metro but not Colorado Springs.",
    },
    {
      q: "Does CSU have net metering?",
      a: "Yes. Colorado Springs Utilities operates its own net metering programme for residential solar customers. Monthly credit rollover; annual true-up at avoided cost.",
    },
    {
      q: "Does the Colorado state rebate apply in Colorado Springs?",
      a: "Yes. Colorado's Solar for Residential rebate ($1,500 to $5,500 based on income tier) applies to residential installations in Colorado Springs. The rebate is administered by the Colorado Energy Office.",
    },
    {
      q: "How long does a solar permit take in Colorado Springs?",
      a: "Pikes Peak Regional Building Department typically runs residential solar permits in 2 to 4 weeks. CSU interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Colorado Springs?",
      a: "Colorado Springs runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit and the state rebate (if income-qualified), effective net cost is often $8,500 to $12,500.",
    },
  ],
};
