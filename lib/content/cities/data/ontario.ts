import type { City } from "../types";

export const ONTARIO: City = {
  slug: "ontario",
  stateSlug: "california",
  name: "Ontario",
  title: "Solar in Ontario: SCE, NEM 3.0 and Inland Empire permits",
  metaTitle: "Solar Companies in Ontario CA: SCE, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Ontario California: SCE NEM 3.0 export compensation, Ontario Municipal Utilities Company for some areas, City of Ontario permits, and running a solar company in San Bernardino County.",
  answer:
    "Ontario is served primarily by SCE under California NEM 3.0, with some areas served by Ontario Municipal Utilities Company (OMUC, water only; electric is SCE throughout). Storage attachment is essentially required for favourable NEM 3.0 payback. Permits run through the City of Ontario Building Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.7,
    sunnyDays: 275,
    note: "Ontario has essentially the same Inland Empire climate as Rancho Cucamonga: 5.7 peak sun hours per day, 275 sunny days per year. Summer heat is a real factor (July and August rooftop temperatures regularly exceed 165F). Santa Ana wind events in fall and winter.",
  },
  market: {
    metroPopulationK: 180,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 150, high: 260 },
    installerDensity: "High",
  },
  utilities: ["Southern California Edison (SCE), investor-owned, serves all of Ontario (on CPUC NEM 3.0)"],
  permits: {
    office: "City of Ontario Building Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Ontario Building Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. SCE interconnection post-install typically runs 4 to 8 weeks since the 2024 process reforms.",
  },
  installerLandscape:
    "Running a solar company in Ontario means working the Inland Empire SCE NEM 3.0 market. The best Ontario operators sell storage-attached systems as the default and handle SCE interconnection fluently. Lead costs run $150 to $260 on Google search; Inland Empire is less saturated than coastal LA County.",
  faq: [
    {
      q: "Does SCE serve Ontario California?",
      a: "Yes. SCE serves all of Ontario under California NEM 3.0. Ontario Municipal Utilities Company handles water and sewer only, not electricity.",
    },
    {
      q: "How long does a solar permit take in Ontario?",
      a: "City of Ontario Building Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. SCE interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Ontario?",
      a: "Ontario runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200. Add storage for NEM 3.0 payback.",
    },
    {
      q: "Is solar worth it in Ontario under NEM 3.0?",
      a: "Yes with storage, often not without. SCE's retail rates and strong Inland Empire sun hours make storage-attached systems pay back in 7 to 11 years. Solar-only pays back over 15 years.",
    },
  ],
};
