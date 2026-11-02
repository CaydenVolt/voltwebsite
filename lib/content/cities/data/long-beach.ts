import type { City } from "../types";

export const LONG_BEACH: City = {
  slug: "long-beach",
  stateSlug: "california",
  name: "Long Beach",
  title: "Solar in Long Beach: SCE, NEM 3.0 and coastal climate",
  metaTitle: "Solar Companies in Long Beach: SCE, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Long Beach: Southern California Edison NEM 3.0, City of Long Beach permits with SolarAPP+, coastal salt-air considerations, and running a solar company in LA County.",
  answer:
    "Long Beach is served by Southern California Edison under NEM 3.0 (export credits at the Avoided Cost Calculator rate, around $0.05 to $0.08 per kWh). Coastal salt air requires marine-grade stainless hardware for installations within 2 miles of the Pacific. Storage attachment is essentially required for favourable NEM 3.0 payback. Permits run through the City of Long Beach Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.5,
    sunnyDays: 263,
    note: "Long Beach gets around 5.5 peak sun hours per day with 263 sunny days per year, strong for solar. Marine layer in May and June reduces morning production in coastal neighbourhoods. Pacific coastal salt air requires marine-grade stainless hardware. Summer temperatures are moderate (coastal breeze cools rooftops).",
  },
  market: {
    metroPopulationK: 460,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 180, high: 320 },
    installerDensity: "Saturated",
  },
  utilities: ["Southern California Edison (SCE), investor-owned, serves all of Long Beach"],
  permits: {
    office: "City of Long Beach Development Services",
    turnaroundWeeks: "1 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Long Beach Development Services accepts SolarAPP+ for standard residential installations. Non-SolarAPP+ permits run 1 to 4 weeks. SCE interconnection post-install typically runs 4 to 8 weeks since the 2024 process reforms.",
  },
  installerLandscape:
    "Running a solar company in Long Beach means operating in the saturated LA County market under NEM 3.0. The best Long Beach operators sell storage-attached systems as the default, spec marine-grade stainless racking for coastal zip codes, and handle SCE interconnection fluently. Lead costs run $180 to $320 on Google search.",
  faq: [
    {
      q: "Does SCE have net metering in Long Beach?",
      a: "Not retail-rate. SCE operates under California NEM 3.0: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), substantially below retail. Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years.",
    },
    {
      q: "How long does a solar permit take in Long Beach?",
      a: "With SolarAPP+ at the City of Long Beach: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 1 to 4 weeks. SCE interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Long Beach?",
      a: "Long Beach runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,700. Add storage for NEM 3.0 payback.",
    },
    {
      q: "Is solar worth it in Long Beach under NEM 3.0?",
      a: "Yes with storage, no without. SCE's retail rates in LA County make storage-attached NEM 3.0 systems pay back in 7 to 11 years in Long Beach. Solar-only without storage pays back over 15 years.",
    },
  ],
};
