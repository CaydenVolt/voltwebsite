import type { City } from "../types";

export const SACRAMENTO: City = {
  slug: "sacramento",
  stateSlug: "california",
  name: "Sacramento",
  title: "Solar in Sacramento: SMUD, NEM Successor Tariff and Central Valley heat",
  metaTitle: "Solar Companies in Sacramento: SMUD, SST, Permits",
  metaDescription:
    "Honest guide to solar in Sacramento: SMUD's Net Energy Metering Successor Tariff (not NEM 3.0), City of Sacramento permits with SolarAPP+, Central Valley heat derating, and running a solar company in Sacramento.",
  answer:
    "Sacramento is one of California's most interesting solar markets because it is served by SMUD (Sacramento Municipal Utility District), a public utility that is NOT under CPUC jurisdiction and therefore not on NEM 3.0. SMUD operates its own Net Energy Metering Successor Tariff with export compensation closer to retail than NEM 3.0, which keeps solar-only payback shorter than most of California. Permits run through City of Sacramento with SolarAPP+ accepted.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.4,
    sunnyDays: 269,
    note: "Sacramento gets around 5.4 peak sun hours per day with 269 sunny days per year, excellent for solar. The dominant climate factor is Central Valley summer heat: June through September rooftop temperatures regularly exceed 165F, so panel temperature coefficients and ventilation under the array matter. Winter tule fog reduces January and February production more than most installers model.",
  },
  market: {
    metroPopulationK: 2420,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 150, high: 260 },
    installerDensity: "High",
  },
  utilities: [
    "SMUD (Sacramento Municipal Utility District), public utility, serves Sacramento County",
    "PG&E serves surrounding counties outside Sacramento (Yolo, parts of Placer and El Dorado)",
    "Roseville Electric (serves Roseville in Placer County)",
  ],
  permits: {
    office: "City of Sacramento Community Development Department",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Sacramento accepts SolarAPP+ for standard residential installations, which drops permit turnaround to a day or two for qualifying systems. Non-SolarAPP+ permits run 1 to 3 weeks. Sacramento County, Roseville, Elk Grove, Folsom, and surrounding jurisdictions each have their own permit offices with 2 to 4 week typical timelines. SMUD interconnection post-install is typically 3 to 5 weeks, faster than the CPUC-regulated California utilities.",
  },
  installerLandscape:
    "Running a solar company in Sacramento means working in a market where SMUD's non-CPUC net metering keeps solar-only payback shorter than almost anywhere else in California. This is the practical sales advantage over LA, SF or San Diego installers: a Sacramento homeowner on SMUD can still see 7 to 9 year payback on a solar-only install, while NEM 3.0 markets require storage attachment to pencil out. The operators who do best in Sacramento have a clear SMUD vs PG&E conversation for prospects in the border zip codes (Yolo County, El Dorado County), fluent SolarAPP+ workflows, and systems designed for the summer-heat derating that matters here. Lead costs run $150 to $260 on Google search.",
  faq: [
    {
      q: "Is Sacramento on NEM 3.0?",
      a: "No. SMUD, the public utility serving most of Sacramento, is NOT under CPUC jurisdiction and therefore not on NEM 3.0. SMUD operates its own Net Energy Metering Successor Tariff (SST), which compensates solar exports closer to retail than NEM 3.0 does. PG&E customers in surrounding counties (Yolo, parts of Placer, El Dorado outside SMUD territory) ARE on NEM 3.0.",
    },
    {
      q: "How does SMUD's net metering work?",
      a: "SMUD's Net Energy Metering Successor Tariff credits residential solar exports monthly at a rate derived from avoided cost plus some grid-value adders; the effective rate is substantially higher than PG&E's NEM 3.0 export compensation. Annual true-up occurs at a bill credit rate (not cash payout). SMUD solar customers also pay a modest grid participation charge based on inverter capacity.",
    },
    {
      q: "How long does a solar permit take in Sacramento?",
      a: "With SolarAPP+ at the City of Sacramento: often approved within a day for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Suburban jurisdictions (Sacramento County, Roseville, Elk Grove, Folsom) run 2 to 4 weeks typically. SMUD interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Sacramento?",
      a: "Sacramento runs about $2.80 per watt installed for residential, below the California average, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Sacramento's lower cost per watt reflects both lower labour cost than coastal CA and fewer HVHZ-equivalent engineering burdens.",
    },
    {
      q: "Is solar worth it in Sacramento?",
      a: "Yes, more so than most of California. On SMUD, residential solar-only pays back in 7 to 9 years with the federal tax credit, which is faster than NEM 3.0 markets. PG&E customers in surrounding counties see payback closer to 10 to 13 years for solar-only or 7 to 10 years for storage-attached under NEM 3.0.",
    },
  ],
};
