import type { City } from "../types";

export const FRESNO: City = {
  slug: "fresno",
  stateSlug: "california",
  name: "Fresno",
  title: "Solar in Fresno: PG&E, Central Valley heat and NEM 3.0",
  metaTitle: "Solar Companies in Fresno: PG&E, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Fresno: PG&E's NEM 3.0 export compensation, Central Valley summer heat derating, City of Fresno permits with SolarAPP+, and running a solar company in the Central Valley.",
  answer:
    "Fresno is served by PG&E under California NEM 3.0. Central Valley summer heat is extreme (June through September rooftop temperatures regularly exceed 170F), which materially derates panel output and makes heat-tolerant equipment essential. Permits run through City of Fresno Development and Resource Management with SolarAPP+ accepted.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 272,
    note: "Fresno gets around 5.6 peak sun hours per day with 272 sunny days per year, excellent for solar. The dominant climate factor is extreme summer heat: June through September rooftop temperatures regularly exceed 170F, derating panel output 15 to 20 percent at peak hours if the panel temperature coefficient is poor. Winter tule fog reduces January and February production more than most installers model. Dust from agricultural operations reduces panel output in dry seasons.",
  },
  market: {
    metroPopulationK: 1010,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Pacific Gas & Electric (PG&E), investor-owned, serves most of Fresno and Clovis",
    "San Joaquin Valley Power Authority (SJVPA, Community Choice Aggregator) bundles generation with PG&E delivery for a growing fraction of Fresno-area residents",
  ],
  permits: {
    office: "City of Fresno Development and Resource Management Department",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Fresno Development and Resource Management accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Fresno County unincorporated areas and surrounding cities (Clovis, Sanger, Reedley) run their own permits with 2 to 4 week typical timelines. PG&E interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fresno means working in a market where extreme summer heat makes panel temperature coefficients a real sales differentiator. The best Fresno operators spec panels with -0.26 percent per C or better temperature coefficients, racking that promotes airflow underneath, and model summer heat derating honestly in production estimates. Lead costs run $140 to $240 on Google search. Agricultural property solar is a growing niche that requires different sizing math than residential (irrigation pump load patterns, net metering size limits).",
  faq: [
    {
      q: "Does PG&E have net metering in Fresno?",
      a: "Not retail-rate. PG&E operates under California NEM 3.0: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), substantially below retail. Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years from original interconnection.",
    },
    {
      q: "How does Central Valley heat affect solar in Fresno?",
      a: "Summer rooftop temperatures in Fresno regularly exceed 170F, which derates panel output 15 to 20 percent at peak production hours. Panels with poor temperature coefficients lose meaningfully more output. Equipment selection matters: panels with -0.26 percent per C or better coefficients, racking that promotes airflow underneath the array, and oversized conductors to limit resistance heating all help. Honest annual yield modelling must account for the derating.",
    },
    {
      q: "How long does a solar permit take in Fresno?",
      a: "With SolarAPP+ at City of Fresno Development and Resource Management: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Fresno County and surrounding cities run 2 to 4 weeks typically. PG&E interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Fresno?",
      a: "Fresno runs about $2.85 per watt installed for residential, lower than coastal California, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Add storage for NEM 3.0 payback.",
    },
    {
      q: "Is solar worth it in Fresno under NEM 3.0?",
      a: "Yes with storage, often not without. PG&E's retail rates and the strong Central Valley sun hours together make storage-attached systems pay back in 7 to 10 years in Fresno. Solar-only without storage pays back over 15 years because NEM 3.0 export compensation is too low. Right-sizing matters more here than in retail-NEM markets.",
    },
  ],
};
