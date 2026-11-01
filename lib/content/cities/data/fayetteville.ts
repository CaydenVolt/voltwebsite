import type { City } from "../types";

export const FAYETTEVILLE: City = {
  slug: "fayetteville",
  stateSlug: "north-carolina",
  name: "Fayetteville",
  title: "Solar in Fayetteville NC: Duke Energy Progress and Cumberland County permits",
  metaTitle: "Solar Companies in Fayetteville NC: Duke Energy Progress, Permits",
  metaDescription:
    "Honest guide to solar in Fayetteville North Carolina: Duke Energy Progress Residential Solar Choice, Fayetteville Public Works Commission (PWC) municipal service, and running a solar company in Cumberland County.",
  answer:
    "Fayetteville is a split-utility market: Fayetteville Public Works Commission (PWC) serves the city as a municipal utility with its own net metering programme, while Duke Energy Progress serves most surrounding Cumberland County. Fort Liberty (formerly Fort Bragg) is a major military installation that shapes the housing market. Permits run through Fayetteville Development Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 215,
    note: "Fayetteville gets around 4.9 peak sun hours per day with 215 sunny days per year, strong for solar. Summer thunderstorms reduce afternoon production. Hurricane remnants occasionally reach inland NC. Pine pollen in spring reduces panel output temporarily.",
  },
  market: {
    metroPopulationK: 530,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Fayetteville Public Works Commission (PWC), municipal utility, serves the city of Fayetteville",
    "Duke Energy Progress, investor-owned, serves most of surrounding Cumberland County",
    "Various electric cooperatives serve rural outlying areas",
  ],
  permits: {
    office: "Fayetteville Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Fayetteville Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Cumberland County unincorporated runs through the county with 2 to 4 week typical timelines. PWC or Duke Energy Progress interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fayetteville means handling the PWC vs Duke Energy Progress split carefully: a home at one address can be on PWC with municipal NEM, while a home 2 miles away is on Duke Progress with Residential Solar Choice. The best Fayetteville operators verify utility by address up front. The Fort Liberty population brings high turnover and relocation-related solar questions. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "What utility serves Fayetteville NC?",
      a: "The city of Fayetteville is served by Fayetteville Public Works Commission (PWC), a municipal utility. Surrounding Cumberland County outside city limits is served by Duke Energy Progress. The two have different net metering rules; confirming utility by address matters for an accurate quote.",
    },
    {
      q: "How long does a solar permit take in Fayetteville?",
      a: "Fayetteville Development Services typically runs residential solar permits in 3 to 5 weeks. Cumberland County unincorporated runs 2 to 4 weeks typically. PWC or Duke Energy Progress interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Fayetteville NC?",
      a: "Fayetteville runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500.",
    },
    {
      q: "Is solar worth it in Fayetteville NC?",
      a: "Yes for Fayetteville homes with suitable roofs. Payback typically runs 10 to 14 years with the federal tax credit. The military-relocation turnover is a selling consideration (solar transfer to new owners matters); honest conversations about transferability help close deals.",
    },
  ],
};
