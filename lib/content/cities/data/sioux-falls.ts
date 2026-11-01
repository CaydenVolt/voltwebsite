import type { City } from "../types";

export const SIOUX_FALLS: City = {
  slug: "sioux-falls",
  stateSlug: "south-dakota",
  name: "Sioux Falls",
  title: "Solar in Sioux Falls: Xcel Energy and prairie winter reality",
  metaTitle: "Solar Companies in Sioux Falls: Xcel Energy, Permits",
  metaDescription:
    "Honest guide to solar in Sioux Falls South Dakota: Xcel Energy net metering, City of Sioux Falls permits, severe winter climate, and running a solar company in Minnehaha County.",
  answer:
    "Sioux Falls is served by Xcel Energy (Northern States Power) under retail-rate net metering. Harsh winter climate and extended snow cover are the dominant production factors. The federal tax credit is the dominant incentive. Permits run through the City of Sioux Falls Planning and Development Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 212,
    note: "Sioux Falls gets around 4.6 peak sun hours per day with 212 sunny days per year, moderate for solar given the latitude. Winter snow derating is substantial (15 to 25 percent annual loss). Summer thunderstorms reduce afternoon production. Tornado-prone weather requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 290,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 75, high: 140 },
    installerDensity: "Low",
  },
  utilities: [
    "Xcel Energy (Northern States Power), investor-owned, serves most of Sioux Falls",
    "Sioux Valley Energy (electric cooperative) serves parts of surrounding Minnehaha County",
  ],
  permits: {
    office: "City of Sioux Falls Planning and Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Sioux Falls Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Minnehaha County unincorporated runs through the county with 2 to 4 week typical timelines. Xcel Energy interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Sioux Falls means working in a small market with minimal installer competition. The best Sioux Falls operators handle Xcel Energy interconnection fluently, are explicit about winter snow derating, and often focus on homes with high electricity use (electric heat pumps) where the pure-electricity-savings case still works. Lead costs run $75 to $140 on Google search.",
  faq: [
    {
      q: "Does Xcel Energy have net metering in Sioux Falls?",
      a: "Yes, retail-rate net metering for residential solar systems under Public Utilities Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost.",
    },
    {
      q: "How long does a solar permit take in Sioux Falls?",
      a: "City of Sioux Falls Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Xcel Energy interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Sioux Falls?",
      a: "Sioux Falls runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. South Dakota has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Sioux Falls?",
      a: "For Sioux Falls homes with high electricity use and south-facing roofs, yes but with longer payback than retail-NEM states with higher electric rates: typically 12 to 15 years with the federal tax credit. Low electric rates and winter weather stretch payback. Many homeowners install for energy independence alongside payback.",
    },
  ],
};
