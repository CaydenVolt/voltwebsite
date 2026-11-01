import type { City } from "../types";

export const BILLINGS: City = {
  slug: "billings",
  stateSlug: "montana",
  name: "Billings",
  title: "Solar in Billings: NorthWestern Energy and winter reality",
  metaTitle: "Solar Companies in Billings: NorthWestern Energy, Permits",
  metaDescription:
    "Honest guide to solar in Billings Montana: NorthWestern Energy retail net metering, City of Billings permits, winter weather, and running a solar company in Yellowstone County.",
  answer:
    "Billings is served by NorthWestern Energy under retail-rate net metering for residential solar systems up to 50 kW AC. Winter snow derating is significant. The federal tax credit plus the modest Montana state tax credit are the primary incentives. Permits run through the City of Billings Building Division.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 194,
    note: "Billings gets around 4.9 peak sun hours per day with 194 sunny days per year, strong for solar in the Northern Plains. Winter snow derating typically reduces annual production by 15 to 20 percent. Summer heat is less extreme than Phoenix; panel temperature coefficients matter but are less critical. Spring and summer hail is a secondary risk.",
  },
  market: {
    metroPopulationK: 190,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Low",
  },
  utilities: [
    "NorthWestern Energy, investor-owned, serves most of the Billings metro",
    "Yellowstone Valley Electric Cooperative serves parts of surrounding Yellowstone County",
  ],
  permits: {
    office: "City of Billings Building Division",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Billings Building Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Yellowstone County unincorporated areas run through the county with 2 to 4 week typical timelines. NorthWestern Energy interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Billings means working in a small Northern Plains market with modest installer competition. The best Billings operators are explicit about winter snow derating in sales conversations, handle NorthWestern Energy interconnection fluently, and understand the long-distance rural logistics of Montana. Lead costs run $85 to $160 on Google search, low because installer density is thin.",
  faq: [
    {
      q: "Does NorthWestern Energy have net metering in Billings?",
      a: "Yes, retail-rate net metering for residential solar systems up to 50 kW AC under Montana PSC rules. Credits accrue monthly at retail; annual true-up at year-end with excess typically zeroed out.",
    },
    {
      q: "How long does a solar permit take in Billings?",
      a: "City of Billings Building Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Yellowstone County unincorporated runs similar timelines. NorthWestern Energy interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Billings?",
      a: "Billings runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit and the modest Montana state tax credit, net cost is approximately $13,200.",
    },
    {
      q: "Is solar worth it in Billings?",
      a: "Yes for most Billings homes with suitable roofs. The combination of NorthWestern Energy retail NEM, moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 11 to 14 years. Winter snow derating stretches payback; honest annual yield modelling matters.",
    },
  ],
};
