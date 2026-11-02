import type { City } from "../types";

export const ALEXANDRIA: City = {
  slug: "alexandria",
  stateSlug: "virginia",
  name: "Alexandria",
  title: "Solar in Alexandria: Dominion Energy and Northern Virginia permits",
  metaTitle: "Solar Companies in Alexandria VA: Dominion Energy, Permits",
  metaDescription:
    "Honest guide to solar in Alexandria Virginia: Dominion Energy VCEA net metering, City of Alexandria permits, Northern Virginia market, and running a solar company in NoVA.",
  answer:
    "Alexandria is served by Dominion Energy Virginia under the VCEA-era retail net metering programme. The Northern Virginia market has a well-informed homeowner base (federal workforce, tech-sector professionals). Permits run through the City of Alexandria Code Administration.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 203,
    note: "Alexandria gets around 4.6 peak sun hours per day with 203 sunny days per year, moderate for solar. Winter snow derating is modest. Hurricane remnants occasionally bring heavy rain and wind. Dense tree canopy in some older Alexandria neighbourhoods limits suitable rooftops.",
  },
  market: {
    metroPopulationK: 160,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "High",
  },
  utilities: ["Dominion Energy Virginia, investor-owned, serves all of Alexandria"],
  permits: {
    office: "City of Alexandria Code Administration",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Alexandria Code Administration typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Historic district overlay in Old Town Alexandria and other designated districts adds aesthetic review. Dominion Energy interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Alexandria means serving the well-informed NoVA customer base and handling historic district overlays in Old Town. The best Alexandria operators lead with technical depth, have templated workflows for Dominion Energy interconnection, and understand historic district aesthetic constraints. Lead costs run $130 to $220 on Google search.",
  faq: [
    {
      q: "Does Dominion Energy have net metering in Alexandria?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Virginia State Corporation Commission rules protected by the Virginia Clean Economy Act. Credits accrue monthly at retail; annual true-up at avoided cost.",
    },
    {
      q: "How long does a solar permit take in Alexandria?",
      a: "City of Alexandria Code Administration typically runs residential solar permits in 3 to 5 weeks. Historic district review in Old Town adds aesthetic review time. Dominion Energy interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Alexandria?",
      a: "Alexandria runs about $2.90 per watt installed for residential, slightly higher than Richmond because of NoVA labour costs, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200.",
    },
    {
      q: "Is solar worth it in Alexandria?",
      a: "Yes for Alexandria homes with suitable roofs. The combination of Dominion Energy retail NEM and the federal tax credit makes residential solar payback typically 9 to 12 years. Historic district compliance adds 5 to 10 percent to install cost in Old Town but does not change the underlying economics.",
    },
  ],
};
