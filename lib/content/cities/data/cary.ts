import type { City } from "../types";

export const CARY: City = {
  slug: "cary",
  stateSlug: "north-carolina",
  name: "Cary",
  title: "Solar in Cary: Duke Energy Progress and Wake County permits",
  metaTitle: "Solar Companies in Cary NC: Duke Energy Progress, Permits",
  metaDescription:
    "Honest guide to solar in Cary North Carolina: Duke Energy Progress Residential Solar Choice, Town of Cary permits, Research Triangle market, and running a solar company in Wake County.",
  answer:
    "Cary is served by Duke Energy Progress (same as Raleigh and Durham) under HB 589-era Residential Solar Choice. The Research Triangle's professional-services homeowner base is well-informed and research-oriented. Permits run through the Town of Cary Permitting Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 213,
    note: "Cary has essentially the same climate as Raleigh and Durham: 4.8 peak sun hours per day, 213 sunny days per year. Deciduous tree canopy is substantial in many Cary neighbourhoods; shade audits matter.",
  },
  market: {
    metroPopulationK: 185,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: ["Duke Energy Progress (DEP), investor-owned, serves most of Cary"],
  permits: {
    office: "Town of Cary Permitting Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Town of Cary Permitting Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. HOA aesthetic review applies in Cary's many master-planned communities, adding 2 to 6 weeks. Duke Energy Progress interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Cary means working in a Research Triangle submarket with educated homeowners and HOA-dense master-planned communities. The best Cary operators lead with technical depth, handle HOA aesthetic review as a known project step, and do honest tree-canopy audits. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Duke Energy Progress serve Cary?",
      a: "Yes. Duke Energy Progress (DEP) serves most of Cary. This is the same subsidiary that serves Raleigh and Durham, distinct from Duke Energy Carolinas which serves Charlotte.",
    },
    {
      q: "How long does a solar permit take in Cary?",
      a: "Town of Cary Permitting Services typically runs residential solar permits in 2 to 4 weeks. HOA aesthetic review adds 2 to 6 weeks in many Cary neighbourhoods. Duke Energy Progress interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Cary?",
      a: "Cary runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. North Carolina has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Cary?",
      a: "Yes for Cary homes with unshaded roofs. Payback typically runs 10 to 14 years with the federal tax credit under the Residential Solar Choice schedule. Heavily shaded roofs common in older Cary neighbourhoods often fail to pencil out.",
    },
  ],
};
