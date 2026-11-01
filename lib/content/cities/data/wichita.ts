import type { City } from "../types";

export const WICHITA: City = {
  slug: "wichita",
  stateSlug: "kansas",
  name: "Wichita",
  title: "Solar in Wichita: Evergy Kansas Central and permits",
  metaTitle: "Solar Companies in Wichita: Evergy Kansas, Permits",
  metaDescription:
    "Honest guide to solar in Wichita: Evergy Kansas Central net metering, City of Wichita permits, hail considerations, and running a solar company in Sedgwick County.",
  answer:
    "Wichita is served by Evergy Kansas Central (formerly Westar Energy) under Kansas's partial net metering: monthly rollover at retail with avoided-cost true-up at year-end. Severe weather risk (hail, tornadoes) dominates equipment selection. Permits run through the City of Wichita Office of Central Inspection.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.1,
    sunnyDays: 231,
    note: "Wichita gets around 5.1 peak sun hours per day with 231 sunny days per year, strong for solar. Hail is the dominant climate risk; central Kansas sees several significant hail events per year. UL 61730 Class 4 impact-rated panels are essential. Tornado-prone weather requires proper structural attachment. Summer heat is a factor but less extreme than Phoenix.",
  },
  market: {
    metroPopulationK: 650,
    averageCostPerWatt: 2.7,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Evergy Kansas Central (formerly Westar Energy), investor-owned, serves most of the Wichita metro",
    "Various electric cooperatives (Butler Rural Electric Cooperative, Sedgwick County Electric Cooperative) serve rural outlying areas",
  ],
  permits: {
    office: "City of Wichita Office of Central Inspection",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Wichita Office of Central Inspection typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Sedgwick County unincorporated and surrounding cities (Derby, Haysville, Andover) run their own permits with 2 to 4 week typical timelines. Evergy Kansas Central interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Wichita means working in a market with partial NEM, modest incentives and real severe weather risk. The best Wichita operators spec UL 61730 Class 4 impact-rated panels as standard, model summer heat and winter cloud derating honestly, and handle Evergy Kansas Central interconnection fluently. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Evergy Kansas have net metering?",
      a: "Partially. Kansas Corporation Commission rules provide monthly rollover at retail with avoided-cost true-up at year-end for residential solar systems up to 25 kW at Evergy Kansas Central. True-up value is lower than retail, so right-sizing to annual load matters.",
    },
    {
      q: "How long does a solar permit take in Wichita?",
      a: "City of Wichita Office of Central Inspection typically runs residential solar permits in 3 to 5 weeks. Surrounding Sedgwick County and nearby cities run 2 to 4 weeks typically. Evergy Kansas Central interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Wichita?",
      a: "Wichita runs about $2.70 per watt installed for residential, meaning a 7 kW system typically costs around $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200. Hail-rated Class 4 panels are standard spec and included in that range.",
    },
    {
      q: "Is solar worth it in Wichita?",
      a: "For Wichita homes with high electricity use and south-facing roofs sized to self-consumption, yes but with payback stretched by the partial net metering: typically 11 to 14 years with the federal tax credit. Hail resilience with Class 4 panels is essential; cheap non-rated panels regularly fail in Kansas hail events.",
    },
  ],
};
