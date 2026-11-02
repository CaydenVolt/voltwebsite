import type { City } from "../types";

export const NEWPORT_NEWS: City = {
  slug: "newport-news",
  stateSlug: "virginia",
  name: "Newport News",
  title: "Solar in Newport News: Dominion Energy and Hampton Roads coastal",
  metaTitle: "Solar Companies in Newport News: Dominion Energy, Permits",
  metaDescription:
    "Honest guide to solar in Newport News Virginia: Dominion Energy VCEA net metering, City of Newport News permits, Hampton Roads coastal climate, hurricane engineering, and running a solar company in the Peninsula.",
  answer:
    "Newport News is served by Dominion Energy Virginia under VCEA-era retail net metering. The Hampton Roads Peninsula has real hurricane exposure and coastal salt-air corrosion requirements. Permits run through the City of Newport News Codes Compliance.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 207,
    note: "Newport News gets around 4.6 peak sun hours per day with 207 sunny days per year, moderate for solar. Hurricane and tropical storm exposure is real; Hampton Roads wind-load design runs 130 to 140 mph. Chesapeake Bay coastal salt air requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 180,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: ["Dominion Energy Virginia, investor-owned, serves most of Newport News"],
  permits: {
    office: "City of Newport News Codes Compliance",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Newport News Codes Compliance typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Hurricane wind-load review adds time for coastal installations. Dominion Energy interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Newport News means working under Dominion Energy in Hampton Roads. The best Newport News operators spec marine-grade stainless racking for coastal zip codes, handle Dominion interconnection fluently, and understand hurricane wind-load design. Lead costs run $100 to $180 on Google search. The Peninsula market is thinner than Virginia Beach-Norfolk-Chesapeake.",
  faq: [
    {
      q: "Does Dominion Energy serve Newport News?",
      a: "Yes. Dominion Energy Virginia serves most of Newport News under VCEA-era retail net metering, same programme as Richmond, Alexandria and Virginia Beach.",
    },
    {
      q: "How long does a solar permit take in Newport News?",
      a: "City of Newport News Codes Compliance typically runs residential solar permits in 3 to 5 weeks. Dominion Energy interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Newport News?",
      a: "Newport News runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Marine-grade hardware adds 5 to 10 percent for coastal zip codes.",
    },
    {
      q: "Is solar worth it in Newport News?",
      a: "Yes for Newport News homes with suitable roofs. The combination of Dominion Energy retail NEM, moderate sun hours and the federal tax credit makes residential solar payback typically 10 to 13 years.",
    },
  ],
};
