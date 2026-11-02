import type { City } from "../types";

export const PINE_BLUFF: City = {
  slug: "pine-bluff",
  stateSlug: "arkansas",
  name: "Pine Bluff",
  title: "Solar in Pine Bluff: Entergy Arkansas and Act 464 net metering",
  metaTitle: "Solar Companies in Pine Bluff: Entergy AR, Permits",
  metaDescription:
    "Honest guide to solar in Pine Bluff Arkansas: Entergy Arkansas retail net metering under Act 464, City of Pine Bluff permits, and running a solar company in Jefferson County.",
  answer:
    "Pine Bluff is served by Entergy Arkansas under Act 464-protected 1-for-1 retail net metering. The Delta region's climate includes hot humid summers. Permits run through the City of Pine Bluff Code Enforcement.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 213,
    note: "Pine Bluff gets around 4.9 peak sun hours per day with 213 sunny days per year, strong for solar. Delta region summer heat is intense. High humidity requires marine-grade stainless hardware for durability. Tornado-prone weather in spring.",
  },
  market: {
    metroPopulationK: 85,
    averageCostPerWatt: 2.7,
    leadCostUsd: { low: 75, high: 140 },
    installerDensity: "Low",
  },
  utilities: [
    "Entergy Arkansas, investor-owned, serves most of Pine Bluff and Jefferson County",
    "Various electric cooperatives serve rural outlying areas",
  ],
  permits: {
    office: "City of Pine Bluff Code Enforcement",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Pine Bluff Code Enforcement typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Entergy Arkansas interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Pine Bluff means working the Arkansas Delta market with Entergy Arkansas. The best Pine Bluff operators handle Entergy interconnection fluently and spec equipment for Delta humidity. Lead costs run $75 to $140 on Google search, among the lowest in the US because installer density is thin.",
  faq: [
    {
      q: "Does Entergy Arkansas have net metering in Pine Bluff?",
      a: "Yes, 1-for-1 retail net metering protected by Act 464 (2019) until cumulative installed solar capacity reaches 15 percent of utility peak demand. Threshold has not been reached as of 2026.",
    },
    {
      q: "How long does a solar permit take in Pine Bluff?",
      a: "City of Pine Bluff Code Enforcement typically runs residential solar permits in 3 to 5 weeks. Entergy Arkansas interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Pine Bluff?",
      a: "Pine Bluff runs about $2.70 per watt installed for residential, meaning a 7 kW system typically costs around $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200. Arkansas has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Pine Bluff?",
      a: "Yes for Pine Bluff homes with suitable roofs. The combination of Act 464 retail NEM, moderate electric rates and the federal tax credit makes residential solar payback typically 10 to 13 years.",
    },
  ],
};
