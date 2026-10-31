import type { City } from "../types";

export const SAN_JOSE: City = {
  slug: "san-jose",
  stateSlug: "california",
  name: "San Jose",
  title: "Solar in San Jose: PG&E, NEM 3.0 and Silicon Valley permits",
  metaTitle: "Solar Companies in San Jose: PG&E, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in San Jose: PG&E's NEM 3.0 export compensation, San Jose Building Department permits with SolarAPP+, San Jose Clean Energy CCA, and running a solar company in Silicon Valley.",
  answer:
    "San Jose runs under PG&E service and California NEM 3.0. The Silicon Valley residential market has high adoption rates and well-informed homeowners who research systems extensively before quoting. San Jose Clean Energy is the Community Choice Aggregator for most of the city, bundling with PG&E delivery. Permits run through San Jose Building Department with SolarAPP+ accepted.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 257,
    note: "San Jose gets around 5.3 peak sun hours per day with 257 sunny days per year, strong for solar. The microclimate is substantially better for solar than San Francisco (less marine-layer fog) and comparable to Southern California. Summer temperatures are moderate, so panel heat derating is less of a factor than in Sacramento or Phoenix.",
  },
  market: {
    metroPopulationK: 2000,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 200, high: 350 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Pacific Gas & Electric (PG&E), investor-owned, serves all of San Jose",
    "San Jose Clean Energy (SJCE), Community Choice Aggregator, bundles generation with PG&E delivery for most SJ residents",
    "Silicon Valley Clean Energy serves surrounding Santa Clara County cities (Cupertino, Mountain View, Sunnyvale)",
  ],
  permits: {
    office: "San Jose Building Department",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "San Jose Building Department accepts SolarAPP+ for standard residential installations, with same-day or next-day approval for qualifying systems. Non-SolarAPP+ permits run 1 to 3 weeks. Surrounding Silicon Valley cities (Cupertino, Mountain View, Sunnyvale, Santa Clara, Milpitas) each have their own permit offices with 2 to 4 week typical timelines; some accept SolarAPP+. PG&E interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in San Jose means working with the most technically-informed residential customer base in the US. Silicon Valley homeowners read spec sheets, compare inverter brands by MPPT efficiency, and ask questions about Tigo optimisers vs string vs microinverter architectures. The best San Jose operators lead with technical depth rather than sales pressure, and are fluent in both PG&E NEM 3.0 pencil-outs and the SJCE/SVCE CCA generation-rate differences from PG&E default. Lead costs run $200 to $350 on Google search, among the highest in California. The dual-income tech-household customer base closes storage-attached systems and premium equipment packages at higher rates than most CA metros.",
  faq: [
    {
      q: "Does PG&E have net metering in San Jose?",
      a: "Not retail-rate. PG&E operates under California NEM 3.0: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), substantially below retail rates (which can exceed $0.45 per kWh on-peak). Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years from original interconnection.",
    },
    {
      q: "What is San Jose Clean Energy?",
      a: "San Jose Clean Energy (SJCE) is the Community Choice Aggregator that provides the generation portion of electricity for most San Jose residences and businesses by default. PG&E still delivers the electricity and handles billing. SJCE offers two generation tiers (TotalGreen 100 percent renewable, GreenSource 45 percent renewable); the generation rate differs from PG&E default but does not change net metering treatment, which is governed by PG&E's NEM 3.0 schedule.",
    },
    {
      q: "How long does a solar permit take in San Jose?",
      a: "With SolarAPP+ at San Jose Building Department: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Surrounding Silicon Valley cities (Cupertino, Mountain View, Sunnyvale) run 2 to 4 weeks typically.",
    },
    {
      q: "How much does solar cost in San Jose?",
      a: "San Jose runs about $3.10 per watt installed for residential, among the highest in California, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit, net cost is approximately $15,200. Add storage for NEM 3.0 payback and total gross cost often lands between $32,000 and $42,000 before incentives.",
    },
    {
      q: "Is solar still worth it in San Jose under NEM 3.0?",
      a: "Yes with storage, no without, for most San Jose homes. PG&E's high retail rates make storage-attached NEM 3.0 systems pay back in 7 to 10 years in San Jose. Solar-only without storage pays back over 15 years because the NEM 3.0 export credit is too low to make exporting during midday worthwhile. The dual-income Silicon Valley customer base is more willing to pay upfront for storage than the Central Valley average.",
    },
  ],
};
