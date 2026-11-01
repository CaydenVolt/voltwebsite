import type { City } from "../types";

export const WINSTON_SALEM: City = {
  slug: "winston-salem",
  stateSlug: "north-carolina",
  name: "Winston-Salem",
  title: "Solar in Winston-Salem: Duke Energy Carolinas and permits",
  metaTitle: "Solar Companies in Winston-Salem: Duke Energy, Permits",
  metaDescription:
    "Honest guide to solar in Winston-Salem: Duke Energy Carolinas Residential Solar Choice, Forsyth County permits, and running a solar company in the Triad.",
  answer:
    "Winston-Salem is served by Duke Energy Carolinas (same as Charlotte, not Duke Energy Progress) under HB 589-era Residential Solar Choice. The Piedmont Triad market has lower installer density than Charlotte or Raleigh. Permits run through the Winston-Salem Inspections Division.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.7,
    sunnyDays: 215,
    note: "Winston-Salem gets around 4.7 peak sun hours per day with 215 sunny days per year, moderate for solar. The Piedmont has substantial deciduous tree canopy in many residential neighbourhoods; shade audits matter.",
  },
  market: {
    metroPopulationK: 680,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Carolinas (DEC), investor-owned, serves most of Forsyth County including Winston-Salem",
    "Energy United (electric cooperative) serves parts of surrounding Davie and Yadkin counties",
  ],
  permits: {
    office: "Winston-Salem Inspections Division",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Winston-Salem Inspections Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Surrounding Forsyth County jurisdictions run similar timelines. Duke Energy Carolinas interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Winston-Salem means working in a Piedmont Triad market with lower competition than Charlotte or Raleigh. The best Winston-Salem operators handle Duke Energy Carolinas interconnection fluently, do tree-canopy audits as part of the first visit, and often cover Greensboro and High Point as well for regional efficiency. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does Duke Energy Carolinas serve Winston-Salem?",
      a: "Yes. Duke Energy Carolinas (DEC) serves most of Forsyth County including Winston-Salem. This is distinct from Duke Energy Progress which serves Raleigh and Durham.",
    },
    {
      q: "How long does a solar permit take in Winston-Salem?",
      a: "Winston-Salem Inspections Division typically runs residential solar permits in 2 to 4 weeks. Surrounding Forsyth County jurisdictions run similar timelines. Duke Energy Carolinas interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Winston-Salem?",
      a: "Winston-Salem runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. North Carolina has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Winston-Salem?",
      a: "Yes for Winston-Salem homes with unshaded roofs. Payback typically runs 10 to 14 years with the federal tax credit under the Residential Solar Choice schedule, similar to Charlotte and Greensboro. Heavily shaded roofs common in older Piedmont neighbourhoods often fail to pencil out.",
    },
  ],
};
