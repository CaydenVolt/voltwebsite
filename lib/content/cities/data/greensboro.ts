import type { City } from "../types";

export const GREENSBORO: City = {
  slug: "greensboro",
  stateSlug: "north-carolina",
  name: "Greensboro",
  title: "Solar in Greensboro: Duke Energy and Piedmont Triad permits",
  metaTitle: "Solar Companies in Greensboro: Duke Energy, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Greensboro: Duke Energy Carolinas (not Progress) net metering, Guilford County permits, Piedmont Triad market dynamics, and running a solar company in Greensboro.",
  answer:
    "Greensboro is served by Duke Energy Carolinas (not Duke Energy Progress, which serves Raleigh/Durham), operating under HB 589-era Residential Solar Choice. The Piedmont Triad has lower installer density and lower lead costs than Charlotte or the Research Triangle, making it a quieter but still viable market.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.7,
    sunnyDays: 212,
    note: "Greensboro gets around 4.7 peak sun hours per day with 212 sunny days per year, moderate for solar. The Piedmont region has substantial deciduous tree canopy in many residential neighbourhoods; shade audits matter. Winter snow and ice are rare but do occur; freeze-thaw-appropriate racking is sensible spec.",
  },
  market: {
    metroPopulationK: 790,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Carolinas (DEC), investor-owned, serves most of Guilford County including Greensboro",
    "Energy United (electric cooperative) serves parts of surrounding Davie and Rockingham counties",
  ],
  permits: {
    office: "City of Greensboro Development Services, plus Guilford County Inspections",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Greensboro Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted as of 2026. Guilford County and surrounding counties run similar timelines. Duke Energy Carolinas interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Greensboro means working in a lower-competition Piedmont Triad market where regional specialisation (across High Point, Winston-Salem, Burlington) can be profitable. The best Greensboro operators handle both Duke Energy Carolinas interconnection (different from the Progress interconnection used in Raleigh/Durham) and the surrounding EMC co-op rules. Lead costs run $90 to $170, among the lowest in North Carolina.",
  faq: [
    {
      q: "What utility serves Greensboro?",
      a: "Greensboro is served by Duke Energy Carolinas (DEC), the same subsidiary that serves Charlotte. This is distinct from Duke Energy Progress (DEP), which serves Raleigh and Durham. The two subsidiaries have different retail rates and different TOU-rate windows under Residential Solar Choice.",
    },
    {
      q: "How long does a solar permit take in Greensboro?",
      a: "City of Greensboro Development Services typically runs residential solar permits in 2 to 4 weeks. Guilford County and surrounding counties run similar timelines. Duke Energy Carolinas interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Greensboro?",
      a: "Greensboro runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500.",
    },
    {
      q: "Is solar worth it in Greensboro?",
      a: "Yes for Greensboro homes with unshaded roofs. Payback typically runs 10 to 14 years with the federal tax credit under the Residential Solar Choice schedule, similar to Charlotte. Heavily shaded roofs common in older Piedmont neighbourhoods often fail to pencil out; honest shade audits before quoting save both parties time.",
    },
  ],
};
