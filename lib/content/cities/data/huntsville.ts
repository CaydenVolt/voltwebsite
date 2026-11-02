import type { City } from "../types";

export const HUNTSVILLE: City = {
  slug: "huntsville",
  stateSlug: "alabama",
  name: "Huntsville",
  title: "Solar in Huntsville: TVA via Huntsville Utilities, not Alabama Power",
  metaTitle: "Solar Companies in Huntsville AL: Huntsville Utilities, TVA, Permits",
  metaDescription:
    "Honest guide to solar in Huntsville Alabama: TVA via Huntsville Utilities (NOT Alabama Power), Green Flex programme, City of Huntsville permits, Rocket City tech market, and running a solar company in Madison County.",
  answer:
    "Huntsville is unusual in Alabama: served by Huntsville Utilities, a municipal TVA distributor, NOT Alabama Power. This matters because Alabama Power has the $5.42 per kW backup charge that Huntsville customers do NOT pay. TVA Green Flex applies. The Rocket City's NASA/tech workforce is well-informed on technical specs.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 206,
    note: "Huntsville gets around 4.6 peak sun hours per day with 206 sunny days per year, moderate for solar. Tennessee Valley climate; Cumberland Plateau ridges to the north and east. Pine pollen in spring, tornado risk, summer thunderstorms.",
  },
  market: {
    metroPopulationK: 500,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Huntsville Utilities, municipal TVA distributor, serves all of Huntsville",
    "Various electric cooperatives (Joe Wheeler Electric Membership Corporation, North Alabama Electric Cooperative) serve surrounding Madison County outside Huntsville",
  ],
  permits: {
    office: "City of Huntsville Building Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Huntsville Building Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. Huntsville Utilities interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Huntsville means working under Huntsville Utilities / TVA, NOT Alabama Power. The best Huntsville operators lead with this distinction (Alabama Power's backup charge does not apply) and handle TVA Green Flex registration. The Rocket City's tech workforce closes on technical specs. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Is Huntsville on Alabama Power?",
      a: "No. Huntsville is served by Huntsville Utilities, a municipal utility that distributes TVA wholesale power. This is a major distinction: Alabama Power's $5.42 per kW monthly backup charge does NOT apply in Huntsville, making solar economics substantially better than Birmingham, Montgomery or Mobile.",
    },
    {
      q: "Does Huntsville have TVA Green Flex?",
      a: "Yes. Huntsville Utilities, as a TVA distributor, follows the TVA Green Flex programme. Residential solar generation credits at approximately $0.03 to $0.05 per kWh for 20 years, below retail but better than Alabama Power's avoided-cost + backup-charge regime.",
    },
    {
      q: "How long does a solar permit take in Huntsville?",
      a: "City of Huntsville Building Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. Huntsville Utilities interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Huntsville?",
      a: "Huntsville runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Alabama has no state solar tax credit (no state income tax applicable).",
    },
    {
      q: "Is solar worth it in Huntsville?",
      a: "Yes for Huntsville homes with suitable roofs. The combination of TVA Green Flex, retail-rate consumption credit, and no Alabama Power backup charge makes residential solar payback typically 10 to 13 years, substantially faster than Alabama Power territory (12 to 16 years).",
    },
  ],
};
