import type { City } from "../types";

export const CINCINNATI: City = {
  slug: "cincinnati",
  stateSlug: "ohio",
  name: "Cincinnati",
  title: "Solar in Cincinnati: Duke Energy Ohio and Hamilton County permits",
  metaTitle: "Solar Companies in Cincinnati: Duke Energy Ohio, Permits",
  metaDescription:
    "Honest guide to solar in Cincinnati: Duke Energy Ohio retail net metering, City of Cincinnati permits, modest Ohio SREC market, and running a solar company in Southwest Ohio.",
  answer:
    "Cincinnati is served by Duke Energy Ohio (distinct from Duke Energy Carolinas and Duke Energy Progress), under Ohio's retail net metering. The modest Ohio SREC market adds small income on top of retail NEM and the federal tax credit. Permits run through City of Cincinnati Department of Buildings and Inspections.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 174,
    note: "Cincinnati gets around 4.3 peak sun hours per day with 174 sunny days per year, moderate for solar. Winter snow and Ohio Valley cloud cover reduce annual production by 10 to 20 percent. Summer thunderstorms reduce afternoon production. Honest annual yield modelling matters.",
  },
  market: {
    metroPopulationK: 2260,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Ohio, investor-owned (Duke Energy Corporation subsidiary distinct from Duke Energy Carolinas and Duke Energy Progress), serves most of Southwest Ohio including Cincinnati",
    "Dayton Power & Light (AES Ohio) serves parts of Dayton and nearby areas",
    "Various municipal utilities (Hamilton Municipal Electric, others) serve specific cities",
  ],
  permits: {
    office: "City of Cincinnati Department of Buildings and Inspections",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Cincinnati Department of Buildings and Inspections typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hamilton, Butler, Clermont and Warren county jurisdictions run their own permits with 2 to 4 week typical timelines. Duke Energy Ohio interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Cincinnati means working in a growing Southwest Ohio market with lower lead costs than most US metros. Duke Energy Ohio's retail NEM makes the sales conversation straightforward; the thin Ohio SREC market is a minor add-on. The best Cincinnati operators have templated Duke Energy Ohio interconnection workflows (different from Duke Carolinas and Duke Progress even though same corporate parent) and model winter snow derating honestly. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Duke Energy Ohio have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Public Utilities Commission of Ohio rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost.",
    },
    {
      q: "What is the difference between Duke Energy Ohio and Duke Energy Carolinas?",
      a: "Both are subsidiaries of Duke Energy Corporation but operate as separate utilities with separate rate structures and separate interconnection portals. Duke Energy Ohio serves Southwest Ohio (Cincinnati metro); Duke Energy Carolinas serves Charlotte NC and western NC; Duke Energy Progress serves Raleigh NC and eastern NC. An installer who treats them as interchangeable regularly misquotes.",
    },
    {
      q: "How long does a solar permit take in Cincinnati?",
      a: "City of Cincinnati Department of Buildings and Inspections typically runs residential solar permits in 3 to 5 weeks. Surrounding Hamilton, Butler, Clermont and Warren counties run 2 to 4 weeks typically. Duke Energy Ohio interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Cincinnati?",
      a: "Cincinnati runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Ohio has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Cincinnati?",
      a: "Yes for Cincinnati homes with suitable roofs. The combination of Duke Energy Ohio retail NEM and the federal tax credit makes residential solar payback typically 10 to 13 years. Modest sun hours and winter cloud cover stretch payback compared with Sun Belt peers.",
    },
  ],
};
