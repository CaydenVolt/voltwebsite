import type { City } from "../types";

export const TOPEKA: City = {
  slug: "topeka",
  stateSlug: "kansas",
  name: "Topeka",
  title: "Solar in Topeka: Evergy Kansas Central and state capital permits",
  metaTitle: "Solar Companies in Topeka: Evergy, Permits",
  metaDescription:
    "Honest guide to solar in Topeka Kansas: Evergy Kansas Central partial net metering, City of Topeka permits, Great Plains climate, and running a solar company in the state capital.",
  answer:
    "Topeka is served by Evergy Kansas Central (formerly Westar Energy) under Kansas's partial net metering with avoided-cost true-up. Hail and tornadoes are real climate factors; Class 4 panels are standard. Permits run through the City of Topeka Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 215,
    note: "Topeka gets around 4.9 peak sun hours per day with 215 sunny days per year, strong for solar. Great Plains climate; hail is a real risk during May to August; Class 4 panels are the practical standard. Tornado risk requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 230,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 85, high: 155 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Evergy Kansas Central (formerly Westar Energy), investor-owned, serves most of Shawnee County including Topeka",
    "Kaw Valley Electric Cooperative serves parts of surrounding areas",
  ],
  permits: {
    office: "City of Topeka Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Topeka Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Evergy Kansas Central interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Topeka means working under Evergy Kansas Central (same utility as Wichita, Kansas City KS metro Evergy Metro). The best Topeka operators spec Class 4 hail-rated panels as standard, handle Evergy interconnection fluently, and size systems to self-consumption under partial NEM. Lead costs run $85 to $155 on Google search.",
  faq: [
    {
      q: "Does Evergy serve Topeka?",
      a: "Yes. Evergy Kansas Central (formerly Westar Energy) serves most of Shawnee County including Topeka. Same utility as Wichita area and most of eastern Kansas.",
    },
    {
      q: "Does Kansas have net metering?",
      a: "Partially. Kansas Corporation Commission rules provide monthly rollover at retail with avoided-cost true-up at year-end. True-up value is lower than retail, so right-sizing to annual load matters more than in retail-NEM states.",
    },
    {
      q: "How long does a solar permit take in Topeka?",
      a: "City of Topeka Development Services typically runs residential solar permits in 3 to 5 weeks. Evergy Kansas Central interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Topeka?",
      a: "Topeka runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Hail-rated Class 4 panels are standard spec.",
    },
    {
      q: "Is solar worth it in Topeka?",
      a: "For Topeka homes with high electricity use and south-facing roofs sized to self-consumption, yes but with payback stretched by the partial net metering: typically 11 to 14 years with the federal tax credit. Hail resilience is essential.",
    },
  ],
};
