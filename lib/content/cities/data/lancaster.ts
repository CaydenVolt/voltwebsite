import type { City } from "../types";

export const LANCASTER: City = {
  slug: "lancaster",
  stateSlug: "pennsylvania",
  name: "Lancaster",
  title: "Solar in Lancaster PA: PPL Electric and Lancaster County permits",
  metaTitle: "Solar Companies in Lancaster PA: PPL Electric, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Lancaster Pennsylvania: PPL Electric Utilities net metering, PA SREC market, City of Lancaster permits, and running a solar company in Lancaster County.",
  answer:
    "Lancaster is served by PPL Electric Utilities (same as Allentown, Scranton, Harrisburg), under Pennsylvania retail net metering plus AEPS SREC income. Permits run through the City of Lancaster Building Codes Enforcement.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.4,
    sunnyDays: 203,
    note: "Lancaster gets around 4.4 peak sun hours per day with 203 sunny days per year, moderate for solar. South-central Pennsylvania climate; winter snow derating is modest.",
  },
  market: {
    metroPopulationK: 560,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: ["PPL Electric Utilities, investor-owned, serves most of Lancaster County"],
  permits: {
    office: "City of Lancaster Building Codes Enforcement",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Lancaster Building Codes Enforcement typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. PPL Electric interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Lancaster means working under PPL Electric (same utility as Harrisburg, Allentown, Scranton). The best Lancaster operators handle PPL interconnection fluently and understand the Amish-country Lancaster County market dynamics. Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does PPL Electric serve Lancaster PA?",
      a: "Yes. PPL Electric Utilities serves most of Lancaster County including the city of Lancaster. Same utility that serves Harrisburg, Allentown and Scranton.",
    },
    {
      q: "How long does a solar permit take in Lancaster PA?",
      a: "City of Lancaster Building Codes Enforcement typically runs residential solar permits in 3 to 5 weeks. PPL Electric interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Lancaster PA?",
      a: "Lancaster runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200.",
    },
    {
      q: "Is solar worth it in Lancaster PA?",
      a: "Yes for Lancaster homes with suitable roofs. The combination of PPL retail NEM, PA SREC income and the federal tax credit makes residential solar payback typically 10 to 13 years.",
    },
  ],
};
