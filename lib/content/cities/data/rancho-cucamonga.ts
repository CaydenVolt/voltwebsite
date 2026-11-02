import type { City } from "../types";

export const RANCHO_CUCAMONGA: City = {
  slug: "rancho-cucamonga",
  stateSlug: "california",
  name: "Rancho Cucamonga",
  title: "Solar in Rancho Cucamonga: SCE, RCMU municipal and Inland Empire",
  metaTitle: "Solar Companies in Rancho Cucamonga: SCE, RCMU, Permits",
  metaDescription:
    "Honest guide to solar in Rancho Cucamonga: SCE NEM 3.0 across most of the city, Rancho Cucamonga Municipal Utility for the small Victoria Gardens area, City permits, and running a solar company in San Bernardino County.",
  answer:
    "Rancho Cucamonga is served primarily by SCE under California NEM 3.0, with a small corner of the Victoria Gardens area served by Rancho Cucamonga Municipal Utility (RCMU). SCE customers see standard NEM 3.0 export compensation (around $0.05 to $0.08 per kWh); RCMU customers see more favourable municipal NEM. Permits run through the City of Rancho Cucamonga Building and Safety Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.7,
    sunnyDays: 275,
    note: "Rancho Cucamonga gets around 5.7 peak sun hours per day with 275 sunny days per year, excellent for solar. Inland Empire summer heat is a real factor (July and August rooftop temperatures regularly exceed 165F). Santa Ana wind events in fall and winter put structural loads on roof-mount systems.",
  },
  market: {
    metroPopulationK: 180,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 150, high: 260 },
    installerDensity: "High",
  },
  utilities: [
    "Southern California Edison (SCE), investor-owned, serves most of Rancho Cucamonga (on CPUC NEM 3.0)",
    "Rancho Cucamonga Municipal Utility (RCMU), municipal utility, serves the small Victoria Gardens / Resort area (NOT on CPUC NEM 3.0)",
  ],
  permits: {
    office: "City of Rancho Cucamonga Building and Safety Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Rancho Cucamonga Building and Safety Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. SCE or RCMU interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Rancho Cucamonga means handling the SCE-vs-RCMU boundary within the city, though RCMU territory is small. Most homes are on SCE with NEM 3.0, so storage attachment is the default. The best Rancho Cucamonga operators sell storage-attached systems and handle SCE interconnection fluently. Lead costs run $150 to $260 on Google search.",
  faq: [
    {
      q: "What utility serves Rancho Cucamonga?",
      a: "Most of Rancho Cucamonga is served by Southern California Edison (SCE) under CPUC NEM 3.0. A small part of the Victoria Gardens / Resort area is served by Rancho Cucamonga Municipal Utility (RCMU), a municipal utility NOT under CPUC jurisdiction. RCMU customers see substantially better solar economics than SCE customers because of near-retail NEM.",
    },
    {
      q: "How long does a solar permit take in Rancho Cucamonga?",
      a: "City of Rancho Cucamonga Building and Safety Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. SCE or RCMU interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Rancho Cucamonga?",
      a: "Rancho Cucamonga runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200.",
    },
    {
      q: "Is solar worth it in Rancho Cucamonga under NEM 3.0?",
      a: "For SCE customers (most of the city): yes with storage, often not without. Storage-attached NEM 3.0 systems typically pay back in 7 to 11 years. For RCMU customers (small part of the city): yes without storage; municipal NEM pencils out closer to 7 to 10 years.",
    },
  ],
};
