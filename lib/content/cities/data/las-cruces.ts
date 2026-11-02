import type { City } from "../types";

export const LAS_CRUCES: City = {
  slug: "las-cruces",
  stateSlug: "new-mexico",
  name: "Las Cruces",
  title: "Solar in Las Cruces: El Paso Electric and southern New Mexico",
  metaTitle: "Solar Companies in Las Cruces: El Paso Electric, Permits",
  metaDescription:
    "Honest guide to solar in Las Cruces New Mexico: El Paso Electric (EPE) QF export credit, City of Las Cruces permits, Chihuahuan Desert climate, and running a solar company in Doña Ana County.",
  answer:
    "Las Cruces is served by El Paso Electric (EPE), not PNM (which serves Albuquerque). EPE operates the same regulated QF export credit programme in southern NM as in El Paso Texas: credits at around $0.085 per kWh. The Chihuahuan Desert climate gives Las Cruces excellent sun hours. Permits run through the City of Las Cruces Community Development.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 6.3,
    sunnyDays: 294,
    note: "Las Cruces gets around 6.3 peak sun hours per day with 294 sunny days per year, among the highest in the US. Chihuahuan Desert climate with low humidity, high altitude (around 3,900 feet) and intense sun. Summer heat is extreme but moderated by low humidity.",
  },
  market: {
    metroPopulationK: 220,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 85, high: 155 },
    installerDensity: "Moderate",
  },
  utilities: [
    "El Paso Electric (EPE), investor-owned, serves most of Doña Ana County including Las Cruces",
    "Various rural electric cooperatives serve outlying areas",
  ],
  permits: {
    office: "City of Las Cruces Community Development",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Las Cruces Community Development typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. EPE interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Las Cruces means working under EPE (same as El Paso Texas, different from PNM in Albuquerque). The best Las Cruces operators have templated New Mexico state tax credit workflows (10 percent capped at $6,000), handle EPE interconnection fluently, and spec equipment for desert heat and dust. Lead costs run $85 to $155 on Google search.",
  faq: [
    {
      q: "Is Las Cruces on PNM?",
      a: "No. Las Cruces is served by El Paso Electric (EPE), the same utility that serves El Paso Texas across the state line. PNM serves Albuquerque and most of northern New Mexico but not Las Cruces.",
    },
    {
      q: "How does EPE's net metering work in Las Cruces?",
      a: "EPE operates a Qualifying Facility (QF) programme that credits residential solar exports at an avoided-energy-cost rate, currently around $0.085 per kWh. Below the retail rate of about $0.13 per kWh but better than some neighbouring states' avoided-cost programmes.",
    },
    {
      q: "How long does a solar permit take in Las Cruces?",
      a: "City of Las Cruces Community Development typically runs residential solar permits in 2 to 4 weeks. EPE interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Las Cruces?",
      a: "Las Cruces runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit and the 10 percent NM state tax credit (capped $6,000), effective net cost is often $9,500 to $12,500.",
    },
    {
      q: "Is solar worth it in Las Cruces?",
      a: "Yes substantially. The combination of excellent desert sun hours (over 6.3 per day), the NM state tax credit, and the federal credit makes residential solar payback typically 7 to 10 years, among the strongest payback economies in the Southwest.",
    },
  ],
};
