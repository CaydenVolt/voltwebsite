import type { City } from "../types";

export const SOUTH_BEND: City = {
  slug: "south-bend",
  stateSlug: "indiana",
  name: "South Bend",
  title: "Solar in South Bend: Indiana Michigan Power and St. Joseph County",
  metaTitle: "Solar Companies in South Bend: I&M, Permits",
  metaDescription:
    "Honest guide to solar in South Bend Indiana: Indiana Michigan Power EDG tariff, City of South Bend permits, Lake Michigan-effect weather, and running a solar company in St. Joseph County.",
  answer:
    "South Bend is served by Indiana Michigan Power (same AEP subsidiary as Fort Wayne). Indiana's EDG tariff applies: exports credit at wholesale (~$0.03 to $0.04 per kWh). Lake Michigan-effect snow reduces annual yield meaningfully. Permits run through the City of South Bend Building Department.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.0,
    sunnyDays: 182,
    note: "South Bend gets around 4.0 peak sun hours per day with 182 sunny days per year, moderate-to-low for solar. Lake Michigan-effect snow in winter reduces annual production by 15 to 20 percent. Dense tree canopy in many South Bend neighbourhoods.",
  },
  market: {
    metroPopulationK: 320,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Indiana Michigan Power (I&M, AEP subsidiary), investor-owned, serves most of St. Joseph County including South Bend",
    "Various rural electric cooperatives serve outlying areas",
  ],
  permits: {
    office: "City of South Bend Building Department",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of South Bend Building Department typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Indiana Michigan Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in South Bend means working under I&M in a Lake Michigan-effect-snow market. The best South Bend operators are explicit about winter snow derating, size systems to self-consumption under EDG tariff, and do honest shade audits for the dense tree canopy. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does Indiana Michigan Power serve South Bend?",
      a: "Yes. Indiana Michigan Power (I&M, AEP subsidiary) serves most of St. Joseph County including South Bend. Same utility as Fort Wayne.",
    },
    {
      q: "Does South Bend have net metering?",
      a: "Not retail-rate 1-for-1 for new customers. Indiana's 2017 EDG tariff applies: residential solar exports credit at a wholesale rate (approximately $0.03 to $0.04 per kWh). Pre-2018 customers are grandfathered on retail NEM through 2047.",
    },
    {
      q: "How long does a solar permit take in South Bend?",
      a: "City of South Bend Building Department typically runs residential solar permits in 3 to 5 weeks. Indiana Michigan Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in South Bend?",
      a: "South Bend runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700.",
    },
    {
      q: "Is solar worth it in South Bend?",
      a: "For South Bend homes sized to self-consumption with unshaded roofs, yes: payback typically runs 11 to 14 years with the federal tax credit. Lake Michigan-effect winter weather stretches payback compared with central or southern Indiana.",
    },
  ],
};
