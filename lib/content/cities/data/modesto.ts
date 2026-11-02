import type { City } from "../types";

export const MODESTO: City = {
  slug: "modesto",
  stateSlug: "california",
  name: "Modesto",
  title: "Solar in Modesto: MID municipal utility and Central Valley heat",
  metaTitle: "Solar Companies in Modesto: MID, Permits, Not NEM 3.0",
  metaDescription:
    "Honest guide to solar in Modesto: Modesto Irrigation District (MID) municipal utility NOT on CPUC NEM 3.0, City of Modesto permits, Central Valley heat, and running a solar company in Stanislaus County.",
  answer:
    "Modesto is served by the Modesto Irrigation District (MID), a public utility NOT under CPUC jurisdiction. MID operates its own net metering programme with close-to-retail export compensation (not NEM 3.0), making Modesto's solar economics meaningfully stronger than nearby PG&E-territory cities. Central Valley summer heat is extreme. Permits run through the City of Modesto Building Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 265,
    note: "Modesto gets around 5.6 peak sun hours per day with 265 sunny days per year, excellent for solar. Central Valley summer heat is extreme (rooftop temperatures regularly exceed 165F); panel temperature coefficients matter. Winter tule fog reduces January and February production.",
  },
  market: {
    metroPopulationK: 550,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Modesto Irrigation District (MID), public utility, serves most of Modesto (NOT on CPUC NEM 3.0)",
    "Pacific Gas & Electric (PG&E) serves parts of outlying Stanislaus County (on CPUC NEM 3.0)",
    "Turlock Irrigation District serves parts of surrounding areas including Turlock",
  ],
  permits: {
    office: "City of Modesto Building Division",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Modesto Building Division accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 2 to 4 weeks. MID interconnection post-install typically runs 3 to 5 weeks (faster than PG&E in surrounding areas).",
  },
  installerLandscape:
    "Running a solar company in Modesto means handling the MID-vs-PG&E boundary carefully: a home at one address can be on MID with near-retail NEM, while a home 2 miles away is on PG&E with NEM 3.0. The best Modesto operators verify utility by address up front. MID's own net metering programme makes Modesto one of the few Central Valley submarkets where solar-only can still work. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Is Modesto on NEM 3.0?",
      a: "Most of Modesto is served by Modesto Irrigation District (MID), a public utility NOT under CPUC jurisdiction. MID operates its own net metering programme with export compensation closer to retail than NEM 3.0. PG&E customers in surrounding Stanislaus County ARE on NEM 3.0.",
    },
    {
      q: "Does MID have net metering?",
      a: "Yes. Modesto Irrigation District operates a net metering programme for residential solar customers with export compensation closer to retail than NEM 3.0 is. Monthly credit rollover at retail rate; annual true-up at avoided cost. Substantially more favourable than PG&E's NEM 3.0 for solar-only systems.",
    },
    {
      q: "How long does a solar permit take in Modesto?",
      a: "With SolarAPP+ at the City of Modesto: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 2 to 4 weeks. MID interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Modesto?",
      a: "Modesto runs about $2.75 per watt installed for residential, below the California average, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500.",
    },
    {
      q: "Is solar worth it in Modesto?",
      a: "Yes, especially for MID customers. On MID's near-retail NEM, residential solar-only pays back in 7 to 10 years with the federal tax credit. PG&E customers in surrounding Stanislaus County see payback closer to 10 to 13 years for solar-only or 7 to 10 years for storage-attached NEM 3.0 systems.",
    },
  ],
};
