import type { City } from "../types";

export const EVANSVILLE: City = {
  slug: "evansville",
  stateSlug: "indiana",
  name: "Evansville",
  title: "Solar in Evansville: CenterPoint Energy Indiana and Vanderburgh County",
  metaTitle: "Solar Companies in Evansville: CenterPoint Energy, Permits",
  metaDescription:
    "Honest guide to solar in Evansville Indiana: CenterPoint Energy Indiana (formerly Vectren) EDG tariff, City of Evansville permits, Ohio River valley climate, and running a solar company in southwest Indiana.",
  answer:
    "Evansville is served by CenterPoint Energy Indiana (formerly Vectren, now part of CenterPoint Energy, same corporate parent as CenterPoint in Houston). Not the same as AES Indiana (Indianapolis) or Indiana Michigan Power (Fort Wayne/South Bend). Indiana's EDG tariff applies: exports credit at wholesale (~$0.03 to $0.04 per kWh).",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 196,
    note: "Evansville gets around 4.6 peak sun hours per day with 196 sunny days per year, moderate for solar. Ohio River valley climate; summer humidity is a factor. Tornado risk in spring. Winter snow derating is modest to substantial (10 to 15 percent annual loss).",
  },
  market: {
    metroPopulationK: 310,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "CenterPoint Energy Indiana (formerly Vectren), investor-owned, serves most of Vanderburgh County including Evansville",
    "Various electric cooperatives serve rural outlying areas",
  ],
  permits: {
    office: "City of Evansville Building Commission",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Evansville Building Commission typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. CenterPoint Energy Indiana interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Evansville means working under CenterPoint Energy Indiana (the former Vectren utility, now a CenterPoint subsidiary). The best Evansville operators have templated CenterPoint Indiana interconnection workflows (different from CenterPoint Houston's delivery role) and size systems to self-consumption under EDG. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Is Evansville on AES Indiana?",
      a: "No. Evansville is served by CenterPoint Energy Indiana (formerly Vectren), different utility from AES Indiana (Indianapolis) and Indiana Michigan Power (Fort Wayne/South Bend). All three operate under Indiana's EDG tariff.",
    },
    {
      q: "Does CenterPoint Energy Indiana have net metering?",
      a: "Not retail-rate for new customers. Indiana's 2017 EDG tariff applies: residential solar exports credit at a wholesale rate (approximately $0.03 to $0.04 per kWh). Pre-2018 customers are grandfathered.",
    },
    {
      q: "How long does a solar permit take in Evansville?",
      a: "City of Evansville Building Commission typically runs residential solar permits in 3 to 5 weeks. CenterPoint Energy Indiana interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Evansville?",
      a: "Evansville runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700.",
    },
    {
      q: "Is solar worth it in Evansville?",
      a: "For Evansville homes sized to self-consumption, yes: payback typically runs 11 to 14 years with the federal tax credit.",
    },
  ],
};
