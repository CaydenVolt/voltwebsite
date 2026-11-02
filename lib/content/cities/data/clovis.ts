import type { City } from "../types";

export const CLOVIS: City = {
  slug: "clovis",
  stateSlug: "california",
  name: "Clovis",
  title: "Solar in Clovis: PG&E, Central Valley heat and Fresno County permits",
  metaTitle: "Solar Companies in Clovis: PG&E, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Clovis California: PG&E NEM 3.0 export compensation, City of Clovis permits, Central Valley heat, and running a solar company in Fresno County.",
  answer:
    "Clovis is served by PG&E under California NEM 3.0, same as neighbouring Fresno. Central Valley summer heat is extreme. Permits run through the City of Clovis Planning and Development with SolarAPP+ accepted for standard residential.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 271,
    note: "Clovis has essentially the same climate as Fresno: 5.6 peak sun hours per day, 271 sunny days per year. Central Valley summer heat is extreme (rooftop temperatures regularly exceed 170F); panel temperature coefficients matter. Winter tule fog reduces January and February production.",
  },
  market: {
    metroPopulationK: 125,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 125, high: 220 },
    installerDensity: "Moderate",
  },
  utilities: ["Pacific Gas & Electric (PG&E), investor-owned, serves most of Clovis"],
  permits: {
    office: "City of Clovis Planning and Development",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Clovis Planning and Development accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. PG&E interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Clovis means working the same PG&E NEM 3.0 math as Fresno. The best Clovis operators spec panels with low temperature coefficients for the extreme summer heat and model winter tule fog derating honestly. Lead costs run $125 to $220 on Google search.",
  faq: [
    {
      q: "Does PG&E serve Clovis?",
      a: "Yes. PG&E serves most of Clovis under California NEM 3.0, same tariff as neighbouring Fresno.",
    },
    {
      q: "How long does a solar permit take in Clovis?",
      a: "With SolarAPP+ at the City of Clovis: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. PG&E interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Clovis?",
      a: "Clovis runs about $2.85 per watt installed for residential, essentially identical to Fresno, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Add storage for NEM 3.0 payback.",
    },
    {
      q: "Is solar worth it in Clovis under NEM 3.0?",
      a: "Yes with storage, often not without. PG&E's retail rates and the strong Central Valley sun hours make storage-attached systems pay back in 7 to 10 years. Solar-only without storage pays back over 15 years.",
    },
  ],
};
