import type { City } from "../types";

export const RIVERSIDE: City = {
  slug: "riverside",
  stateSlug: "california",
  name: "Riverside",
  title: "Solar in Riverside: Riverside Public Utilities, SCE and Inland Empire climate",
  metaTitle: "Solar Companies in Riverside: RPU, SCE, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Riverside: Riverside Public Utilities net metering (not on CPUC NEM 3.0), SCE for parts of the metro, City of Riverside permits, Inland Empire heat, and running a solar company in Riverside.",
  answer:
    "Riverside has a split utility picture: Riverside Public Utilities (RPU) serves most of the city as a municipal utility NOT under CPUC jurisdiction, so RPU has its own net metering programme (close to retail compensation) rather than NEM 3.0. Southern California Edison (SCE) serves surrounding areas and operates under CPUC NEM 3.0. Which side of the utility boundary a home sits on changes the math substantially.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.7,
    sunnyDays: 275,
    note: "Riverside gets around 5.7 peak sun hours per day with 275 sunny days per year, excellent for solar. Inland Empire summer heat is a factor (July and August rooftop temperatures regularly exceed 160F) but less extreme than Phoenix or Fresno. Santa Ana wind events in fall and winter put structural loads on roof-mount systems; proper attachment matters.",
  },
  market: {
    metroPopulationK: 2470,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 150, high: 260 },
    installerDensity: "High",
  },
  utilities: [
    "Riverside Public Utilities (RPU), municipal utility, serves most of the city of Riverside (NOT on CPUC NEM 3.0)",
    "Southern California Edison (SCE), investor-owned, serves surrounding Riverside County and parts of west Riverside outside RPU territory (on CPUC NEM 3.0)",
    "Various smaller municipals (Banning Electric Utility, Colton Electric Utility, Moreno Valley) serve specific areas",
  ],
  permits: {
    office: "City of Riverside Community and Economic Development, Building and Safety Division",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Riverside Building and Safety Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. Surrounding Riverside County jurisdictions (Corona, Moreno Valley, Perris, Hemet) each have their own permit offices with 2 to 4 week typical timelines. RPU or SCE interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Riverside means handling the municipal-utility-vs-SCE boundary carefully: a home at one address can be on RPU with retail-rate NEM, while a home 2 miles away can be on SCE with NEM 3.0. The best Riverside operators verify the utility by address up front and quote accurately for whichever regime applies. RPU's own net metering programme makes Riverside one of the few LA-area submarkets where solar-only can still work. Lead costs run $150 to $260 on Google search.",
  faq: [
    {
      q: "Is Riverside on NEM 3.0?",
      a: "It depends. Most of the city of Riverside is served by Riverside Public Utilities (RPU), a municipal utility NOT under CPUC jurisdiction. RPU operates its own net metering programme with export compensation close to retail. Surrounding areas served by SCE ARE on CPUC NEM 3.0 (export credits at the Avoided Cost Calculator rate). Confirming the utility by address matters for an accurate quote.",
    },
    {
      q: "Does RPU have net metering?",
      a: "Yes. Riverside Public Utilities operates a net metering programme for residential solar customers with export compensation closer to retail than NEM 3.0 is. Monthly credits accrue at retail rate; annual true-up at year-end at avoided cost. The programme is substantially more favourable than SCE's NEM 3.0 for solar-only systems.",
    },
    {
      q: "How long does a solar permit take in Riverside?",
      a: "City of Riverside Building and Safety Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. Surrounding Riverside County jurisdictions run 2 to 4 weeks typically. RPU or SCE interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Riverside?",
      a: "Riverside runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200.",
    },
    {
      q: "Is solar worth it in Riverside?",
      a: "Yes, especially for RPU customers. On RPU's near-retail net metering, residential solar-only pays back in 7 to 10 years with the federal tax credit. SCE customers (NEM 3.0 territory) see payback closer to 10 to 13 years for solar-only or 7 to 10 years for storage-attached. Riverside's strong Inland Empire sun hours improve the math across both utilities.",
    },
  ],
};
