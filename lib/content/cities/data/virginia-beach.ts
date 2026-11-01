import type { City } from "../types";

export const VIRGINIA_BEACH: City = {
  slug: "virginia-beach",
  stateSlug: "virginia",
  name: "Virginia Beach",
  title: "Solar in Virginia Beach: Dominion Energy and coastal climate",
  metaTitle: "Solar Companies in Virginia Beach: Dominion, Permits, Coastal",
  metaDescription:
    "Honest guide to solar in Virginia Beach: Dominion Energy Virginia net metering, City of Virginia Beach permits, coastal climate factors, and running a solar company in Hampton Roads.",
  answer:
    "Virginia Beach is served by Dominion Energy Virginia under the VCEA-era net metering programme (close-to-retail compensation). Coastal climate factors require marine-grade stainless hardware for installations within 2 miles of the Atlantic. Hurricane exposure is real. Permits run through the City of Virginia Beach Planning Department.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.7,
    sunnyDays: 212,
    note: "Virginia Beach gets around 4.7 peak sun hours per day with 212 sunny days per year, moderate for solar. Hurricane and tropical storm exposure is real; Virginia Building Code wind-load design in the Hampton Roads area runs 130 to 140 mph. Coastal salt air requires marine-grade stainless hardware for beachfront installations.",
  },
  market: {
    metroPopulationK: 1770,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Dominion Energy Virginia, investor-owned, serves most of the Hampton Roads metro",
    "Virginia Natural Gas serves natural gas (not electricity)",
    "Northern Neck Electric Cooperative, Prince George Electric Cooperative serve parts of surrounding areas",
  ],
  permits: {
    office: "City of Virginia Beach Planning Department",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Virginia Beach Planning Department typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hampton Roads cities (Norfolk, Chesapeake, Portsmouth, Suffolk) each have their own permit offices with 2 to 5 week typical timelines. Dominion Energy interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Virginia Beach means handling coastal engineering (marine-grade hardware, hurricane wind-load design) and the Hampton Roads multi-city permit landscape (Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk each run their own permits). The best Virginia Beach operators spec marine-grade stainless racking for coastal zip codes and handle Dominion Energy interconnection fluently. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Dominion Energy have net metering in Virginia Beach?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Virginia State Corporation Commission rules protected by the Virginia Clean Economy Act. Credits accrue monthly at retail; annual true-up at the end of the billing year with excess credit paid at avoided cost.",
    },
    {
      q: "How long does a solar permit take in Virginia Beach?",
      a: "City of Virginia Beach Planning Department typically runs residential solar permits in 3 to 5 weeks. Surrounding Hampton Roads cities (Norfolk, Chesapeake, Portsmouth, Suffolk) each run 2 to 5 weeks typically. Dominion Energy interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Virginia Beach?",
      a: "Virginia Beach runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Virginia has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Virginia Beach?",
      a: "Yes for Virginia Beach homes with suitable roofs. The combination of Dominion Energy retail NEM, moderate sun hours, and the 30 percent federal tax credit makes residential solar payback typically 9 to 12 years. Coastal engineering adds 5 to 10 percent to install cost for beachfront neighbourhoods but is essential for 25-year warranty integrity.",
    },
  ],
};
