import type { City } from "../types";

export const FONTANA: City = {
  slug: "fontana",
  stateSlug: "california",
  name: "Fontana",
  title: "Solar in Fontana: SCE, NEM 3.0 and Inland Empire permits",
  metaTitle: "Solar Companies in Fontana: SCE, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Fontana California: SCE NEM 3.0 export compensation, City of Fontana permits, Inland Empire climate, and running a solar company in San Bernardino County.",
  answer:
    "Fontana is served by SCE under California NEM 3.0, same as Ontario and Rancho Cucamonga. Storage attachment is essentially required for favourable payback. Permits run through the City of Fontana Building and Safety Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.7,
    sunnyDays: 275,
    note: "Fontana has essentially the same Inland Empire climate as neighbouring Ontario and Rancho Cucamonga: 5.7 peak sun hours per day, 275 sunny days per year. Summer heat and Santa Ana wind events are the main factors.",
  },
  market: {
    metroPopulationK: 210,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 145, high: 250 },
    installerDensity: "High",
  },
  utilities: ["Southern California Edison (SCE), investor-owned, serves all of Fontana (on CPUC NEM 3.0)"],
  permits: {
    office: "City of Fontana Building and Safety Division",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Fontana Building and Safety Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. SCE interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fontana means working the same Inland Empire SCE NEM 3.0 market as Ontario and Rancho Cucamonga. The best Fontana operators sell storage-attached systems as the default and handle SCE interconnection fluently. Lead costs run $145 to $250 on Google search.",
  faq: [
    {
      q: "Does SCE serve Fontana?",
      a: "Yes. SCE serves all of Fontana under California NEM 3.0.",
    },
    {
      q: "How long does a solar permit take in Fontana?",
      a: "City of Fontana Building and Safety Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. SCE interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Fontana?",
      a: "Fontana runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200. Add storage for NEM 3.0 payback.",
    },
    {
      q: "Is solar worth it in Fontana under NEM 3.0?",
      a: "Yes with storage, often not without. SCE's retail rates and strong Inland Empire sun hours make storage-attached systems pay back in 7 to 11 years. Solar-only pays back over 15 years.",
    },
  ],
};
