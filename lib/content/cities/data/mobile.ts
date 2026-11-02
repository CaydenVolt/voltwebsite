import type { City } from "../types";

export const MOBILE: City = {
  slug: "mobile",
  stateSlug: "alabama",
  name: "Mobile",
  title: "Solar in Mobile: Alabama Power coastal and hurricane engineering",
  metaTitle: "Solar Companies in Mobile: Alabama Power, Permits",
  metaDescription:
    "Honest guide to solar in Mobile Alabama: Alabama Power non-retail net metering plus backup charge, Gulf Coast hurricane engineering, City of Mobile permits, and running a solar company in Mobile County.",
  answer:
    "Mobile is served by Alabama Power under the state's non-retail export compensation plus the $5.42 per kW monthly backup charge. The Gulf Coast adds hurricane wind-load engineering requirements and salt-air corrosion considerations. Permits run through the City of Mobile Building Inspection Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 213,
    note: "Mobile gets around 4.8 peak sun hours per day with 213 sunny days per year, strong for solar. Hurricane and tropical storm exposure is severe; Mobile County Building Code wind-load design runs 140 to 150 mph. Gulf Coast salt air requires marine-grade stainless hardware for durability.",
  },
  market: {
    metroPopulationK: 430,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Alabama Power (Southern Company subsidiary), investor-owned, serves most of Mobile County",
    "Various electric cooperatives (Baldwin EMC, Clarke-Washington EMC) serve outlying parts of the metro",
  ],
  permits: {
    office: "City of Mobile Building Inspection Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Mobile Building Inspection Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Hurricane wind-load design review adds engineering time for coastal installations. Alabama Power interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Mobile means operating under Alabama Power's non-retail NEM + backup charge regime, plus Gulf Coast hurricane engineering. The best Mobile operators spec marine-grade stainless racking for coastal zip codes, size systems to self-consumption, and factor the backup charge honestly. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Alabama Power have net metering in Mobile?",
      a: "Not retail-rate. Alabama Power credits residential solar exports at avoided cost (approximately $0.03 per kWh) plus charges a monthly backup fee of $5.42 per kW of installed DC capacity. Same regime as Birmingham and the rest of Alabama Power's territory.",
    },
    {
      q: "How long does a solar permit take in Mobile?",
      a: "City of Mobile Building Inspection Division typically runs residential solar permits in 3 to 5 weeks. Hurricane wind-load review adds engineering time for coastal installations. Alabama Power interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Mobile?",
      a: "Mobile runs about $2.85 per watt installed for residential, slightly higher than Birmingham because of coastal engineering, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Alabama has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Mobile?",
      a: "For Mobile homes with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 12 to 16 years with the federal tax credit, factoring in the backup charge. Coastal engineering and marine-grade hardware are essential for 25-year warranty integrity.",
    },
  ],
};
