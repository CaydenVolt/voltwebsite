import type { City } from "../types";

export const ANAHEIM: City = {
  slug: "anaheim",
  stateSlug: "california",
  name: "Anaheim",
  title: "Solar in Anaheim: APU municipal utility and Orange County permits",
  metaTitle: "Solar Companies in Anaheim: Anaheim Public Utilities, Permits",
  metaDescription:
    "Honest guide to solar in Anaheim: Anaheim Public Utilities (APU) municipal NEM (not CPUC NEM 3.0), City of Anaheim permits, and running a solar company in Orange County.",
  answer:
    "Anaheim is unusual in Orange County: served by Anaheim Public Utilities (APU), a municipal utility NOT under CPUC jurisdiction, so APU operates its own net metering programme with close-to-retail compensation (not NEM 3.0). Surrounding OC cities on SCE operate under NEM 3.0 instead. Permits run through the City of Anaheim Planning and Building Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 268,
    note: "Anaheim gets around 5.6 peak sun hours per day with 268 sunny days per year, strong for solar. Summer heat moderates with coastal breeze; panel temperature coefficients matter less than inland OC. Smog from LA basin and Santa Ana wind events are modest factors.",
  },
  market: {
    metroPopulationK: 350,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 170, high: 300 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Anaheim Public Utilities (APU), municipal utility, serves most of the city of Anaheim (NOT on CPUC NEM 3.0)",
    "Southern California Edison (SCE) serves parts of east Anaheim and surrounding OC cities (on CPUC NEM 3.0)",
  ],
  permits: {
    office: "City of Anaheim Planning and Building Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Anaheim Planning and Building Services accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 2 to 4 weeks. APU interconnection post-install typically runs 3 to 5 weeks (meaningfully faster than SCE in surrounding OC cities).",
  },
  installerLandscape:
    "Running a solar company in Anaheim means handling the APU-vs-SCE boundary carefully: a home at one address can be on APU with close-to-retail NEM, while a home 2 miles away is on SCE with NEM 3.0. The best Anaheim operators verify utility by address up front. APU's own net metering programme makes Anaheim one of the few OC submarkets where solar-only can still work. Lead costs run $170 to $300 on Google search.",
  faq: [
    {
      q: "Is Anaheim on NEM 3.0?",
      a: "Most of Anaheim is served by Anaheim Public Utilities (APU), a municipal utility NOT under CPUC jurisdiction. APU operates its own net metering programme with export compensation closer to retail than NEM 3.0. Parts of east Anaheim served by SCE ARE on CPUC NEM 3.0.",
    },
    {
      q: "Does APU have net metering?",
      a: "Yes. Anaheim Public Utilities operates a net metering programme for residential solar customers with export compensation closer to retail than NEM 3.0 is. Monthly credit rollover at retail rate; annual true-up at avoided cost. Substantially more favourable than SCE's NEM 3.0 for solar-only systems.",
    },
    {
      q: "How long does a solar permit take in Anaheim?",
      a: "With SolarAPP+ at the City of Anaheim: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 2 to 4 weeks. APU interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Anaheim?",
      a: "Anaheim runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500.",
    },
    {
      q: "Is solar worth it in Anaheim?",
      a: "Yes, especially for APU customers. On APU's near-retail NEM, residential solar-only pays back in 7 to 10 years with the federal tax credit. SCE customers in east Anaheim see payback closer to 10 to 13 years for solar-only or 7 to 10 years for storage-attached NEM 3.0 systems.",
    },
  ],
};
