import type { City } from "../types";

export const BAKERSFIELD: City = {
  slug: "bakersfield",
  stateSlug: "california",
  name: "Bakersfield",
  title: "Solar in Bakersfield: PG&E, Central Valley heat and NEM 3.0",
  metaTitle: "Solar Companies in Bakersfield: PG&E, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Bakersfield: PG&E NEM 3.0, extreme Central Valley summer heat, City of Bakersfield permits with SolarAPP+, and running a solar company in Kern County.",
  answer:
    "Bakersfield is served by PG&E under California NEM 3.0. Southern Central Valley summer heat is among the most extreme in the US (rooftop temperatures regularly exceed 175F); heat-tolerant equipment is essential. Permits run through the City of Bakersfield Building Department with SolarAPP+ accepted.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.7,
    sunnyDays: 273,
    note: "Bakersfield gets around 5.7 peak sun hours per day with 273 sunny days per year, excellent for solar. Summer heat is extreme: June through September rooftop temperatures regularly exceed 175F, which derates panel output 15 to 20 percent at peak hours if the equipment is wrong. Winter tule fog reduces January and February production. Dust from agricultural operations reduces output in dry seasons.",
  },
  market: {
    metroPopulationK: 920,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "Moderate",
  },
  utilities: ["Pacific Gas & Electric (PG&E), investor-owned, serves most of the Bakersfield metro"],
  permits: {
    office: "City of Bakersfield Building Department",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Bakersfield Building Department accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Kern County unincorporated runs with 2 to 4 week typical timelines. PG&E interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Bakersfield means working under extreme Central Valley heat that makes equipment selection a real differentiator. The best Bakersfield operators spec panels with -0.26 percent per C or better temperature coefficients, racking that promotes airflow underneath, and model summer heat derating honestly. Agricultural property solar is a growing niche. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Does PG&E have net metering in Bakersfield?",
      a: "Not retail-rate. PG&E operates under California NEM 3.0: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), substantially below retail. Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years.",
    },
    {
      q: "How does extreme heat affect Bakersfield solar?",
      a: "Summer rooftop temperatures in Bakersfield regularly exceed 175F, among the most extreme in the US. Panel output derates 15 to 20 percent at peak production hours if the temperature coefficient is poor. Panels with -0.26 percent per C or better coefficients, racking that promotes airflow, and oversized conductors all help maintain output.",
    },
    {
      q: "How much does solar cost in Bakersfield?",
      a: "Bakersfield runs about $2.80 per watt installed for residential, lower than coastal California, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Add storage for NEM 3.0 payback.",
    },
    {
      q: "Is solar worth it in Bakersfield under NEM 3.0?",
      a: "Yes with storage, often not without. PG&E's retail rates and the strong Central Valley sun hours make storage-attached systems pay back in 7 to 10 years. Solar-only without storage pays back over 15 years. Right-sizing matters more than in retail-NEM markets.",
    },
  ],
};
