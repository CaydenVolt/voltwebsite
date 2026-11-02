import type { City } from "../types";

export const PASADENA_CA: City = {
  slug: "pasadena-ca",
  stateSlug: "california",
  name: "Pasadena",
  title: "Solar in Pasadena: PWP municipal utility NOT on NEM 3.0",
  metaTitle: "Solar Companies in Pasadena CA: PWP, Permits",
  metaDescription:
    "Honest guide to solar in Pasadena California: Pasadena Water and Power (PWP) municipal utility NOT on CPUC NEM 3.0, City of Pasadena permits, and running a solar company in LA County.",
  answer:
    "Pasadena is served by Pasadena Water and Power (PWP), a municipal utility NOT under CPUC jurisdiction. PWP operates its own net metering programme with export compensation closer to retail than NEM 3.0, making Pasadena's solar economics meaningfully stronger than surrounding LA County on SCE. Permits run through the City of Pasadena Permit Center.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 263,
    note: "Pasadena has essentially the same climate as central Los Angeles: 5.6 peak sun hours per day, 263 sunny days per year. San Gabriel Valley summer heat is moderate but inland neighbourhoods see higher rooftop temperatures than coastal LA.",
  },
  market: {
    metroPopulationK: 140,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 180, high: 310 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Pasadena Water and Power (PWP), municipal utility, serves all of Pasadena (NOT on CPUC NEM 3.0)",
    "Southern California Edison (SCE) serves surrounding LA County outside Pasadena (on CPUC NEM 3.0)",
  ],
  permits: {
    office: "City of Pasadena Permit Center",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Pasadena Permit Center accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 2 to 4 weeks. Historic district review applies in some Pasadena neighbourhoods. PWP interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Pasadena means handling the PWP-vs-SCE boundary carefully across LA County. The best Pasadena operators verify utility by address up front and lead with PWP's near-retail net metering advantage over NEM 3.0 SCE neighbourhoods. Historic district aesthetic review in Old Pasadena and other historic neighbourhoods adds project burden. Lead costs run $180 to $310 on Google search.",
  faq: [
    {
      q: "Is Pasadena on NEM 3.0?",
      a: "No. Pasadena is served by Pasadena Water and Power (PWP), a municipal utility NOT under CPUC jurisdiction. PWP operates its own net metering programme with export compensation closer to retail than NEM 3.0. SCE customers in surrounding LA County ARE on NEM 3.0.",
    },
    {
      q: "Does PWP have net metering?",
      a: "Yes. Pasadena Water and Power operates its own net metering programme for residential solar customers. Monthly credit rollover at retail rate; annual true-up at avoided cost. Substantially more favourable than SCE's NEM 3.0 for solar-only systems.",
    },
    {
      q: "How long does a solar permit take in Pasadena?",
      a: "With SolarAPP+ at the City of Pasadena: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 2 to 4 weeks. Historic district review adds 2 to 6 weeks in designated areas. PWP interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Pasadena?",
      a: "Pasadena runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,700.",
    },
    {
      q: "Is solar worth it in Pasadena?",
      a: "Yes, especially for PWP customers. On PWP's near-retail NEM, residential solar-only pays back in 7 to 10 years with the federal tax credit. Pasadena is one of the few LA-area submarkets where solar-only pencils out without storage attachment.",
    },
  ],
};
