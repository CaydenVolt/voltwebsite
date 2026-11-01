import type { City } from "../types";

export const NASHVILLE: City = {
  slug: "nashville",
  stateSlug: "tennessee",
  name: "Nashville",
  title: "Solar in Nashville: NES, TVA Green Flex and city permits",
  metaTitle: "Solar Companies in Nashville: NES, TVA Green Flex, Permits",
  metaDescription:
    "Honest guide to solar in Nashville: Nashville Electric Service (NES) TVA distributor, Green Flex credits, Metro Nashville permits, and running a solar company in Davidson County.",
  answer:
    "Nashville is served by Nashville Electric Service (NES), a TVA distributor utility, under the TVA Green Flex programme that replaced Green Power Providers in 2019. Residential solar exports credit at approximately $0.03 to $0.05 per kWh for 20 years, below retail. The economics work only with sizing to self-consumption plus the federal tax credit. Permits run through Metro Nashville Codes.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 207,
    note: "Nashville gets around 4.6 peak sun hours per day with 207 sunny days per year, moderate for solar. Summer thunderstorms reduce afternoon production. Humidity year-round; marine-grade stainless hardware extends system life. Tornado-prone weather in spring requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 2010,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Nashville Electric Service (NES), TVA distributor, serves all of Davidson County",
    "Middle Tennessee Electric serves parts of surrounding counties (Williamson, Rutherford, Wilson)",
    "Various rural electric cooperatives serve outlying counties",
  ],
  permits: {
    office: "Metro Nashville Department of Codes and Building Safety",
    turnaroundWeeks: "2 to 5 weeks for standard residential",
    solarApp: "In pilot",
    note: "Metro Nashville Department of Codes and Building Safety typically runs residential solar permits in 2 to 5 weeks. SolarAPP+ is in pilot for select contractors. Surrounding Williamson, Rutherford and Wilson county jurisdictions run their own permits with 2 to 4 week typical timelines. NES interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Nashville means working under TVA Green Flex, where exports earn only partial retail. The best Nashville operators size systems to self-consumption, understand NES-specific interconnection paperwork vs surrounding TVA distributors, and sell on long-term rate protection rather than fast payback. Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does NES have net metering?",
      a: "Not retail-rate 1-for-1. Nashville Electric Service follows the TVA Green Flex programme that replaced Green Power Providers in 2019. Residential solar generation credits at approximately $0.03 to $0.05 per kWh for 20 years, below the retail rate of about $0.11.",
    },
    {
      q: "How long does a solar permit take in Nashville?",
      a: "Metro Nashville Department of Codes and Building Safety typically runs residential solar permits in 2 to 5 weeks. SolarAPP+ is in pilot. Surrounding counties run 2 to 4 weeks typically. NES interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Nashville?",
      a: "Nashville runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Tennessee has no state solar tax credit (no state income tax).",
    },
    {
      q: "Is solar worth it in Nashville?",
      a: "For Nashville homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. The Green Flex compensation is substantially less favourable than pre-2019 Green Power Providers.",
    },
  ],
};
