import type { City } from "../types";

export const SAVANNAH: City = {
  slug: "savannah",
  stateSlug: "georgia",
  name: "Savannah",
  title: "Solar in Savannah: Georgia Power, coastal climate and Chatham County permits",
  metaTitle: "Solar Companies in Savannah: Georgia Power, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Savannah: Georgia Power's monthly net billing, Chatham County permits, coastal salt-air considerations, hurricane exposure, and running a solar company in Savannah.",
  answer:
    "Savannah shares Atlanta's Georgia Power net billing challenges (avoided-cost export credit, not retail) but adds a coastal climate burden: salt-air corrosion requires marine-grade mounting hardware, and Atlantic hurricane exposure means proper structural attachment is essential. Chatham County permits run 3 to 5 weeks typically.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.0,
    sunnyDays: 215,
    note: "Savannah gets around 5.0 peak sun hours per day with 215 sunny days per year, strong for solar. Hurricane and tropical storm exposure is real; Chatham County uses Florida-equivalent wind-load design (typically 140 to 150 mph in the coastal area). Salt-air corrosion from the Atlantic requires marine-grade stainless hardware for installations within 2 miles of the coast; standard galvanised steel racking degrades meaningfully faster in Savannah than in inland Georgia.",
  },
  market: {
    metroPopulationK: 420,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Georgia Power (Southern Company subsidiary), investor-owned, serves most of Chatham County including Savannah",
    "Canoochee EMC serves parts of surrounding Bryan and Effingham counties",
    "Coastal Electric Cooperative serves parts of Liberty and McIntosh counties",
  ],
  permits: {
    office: "City of Savannah Development Services, plus Chatham County Building Safety and Regulatory Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Savannah Development Services and Chatham County Building Safety typically run residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Hurricane wind-load design review adds engineering review time for coastal installations. Georgia Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Savannah means working in a market with Georgia Power's non-retail export compensation (same challenge as Atlanta) plus coastal climate factors. The best Savannah operators spec marine-grade stainless racking as standard for installations within 2 miles of the coast, model hurricane wind-load design properly, and size systems to annual self-consumption rather than oversized for export. Chatham County's historic districts (Savannah Historic District) have strict aesthetic review that adds weeks to project timelines. Lead costs run $100 to $180, among the lowest in Georgia.",
  faq: [
    {
      q: "Does Georgia Power have net metering in Savannah?",
      a: "Not retail-rate. Georgia Power credits residential solar exports at the utility's avoided cost rate (currently around $0.03 to $0.04 per kWh), substantially below the retail rate of about $0.12 per kWh. The economics work when systems are sized to self-consumption rather than oversized for export. Pre-2019 customers on the earlier Monthly Net Metering tariff are grandfathered.",
    },
    {
      q: "How does salt air affect Savannah solar?",
      a: "Coastal salt air causes meaningful corrosion of galvanised steel racking and non-stainless hardware. Installations within 2 miles of the Atlantic coast should use marine-grade stainless steel racking (316L stainless or better) rather than the standard galvanised products used inland. The upfront cost premium is 5 to 10 percent; the long-term reliability difference is substantial, especially for 25-year system warranty.",
    },
    {
      q: "How long does a solar permit take in Savannah?",
      a: "City of Savannah Development Services and Chatham County Building Safety typically run residential solar permits in 3 to 5 weeks. Historic District installations add aesthetic review time. Georgia Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Savannah?",
      a: "Savannah runs about $2.90 per watt installed for residential, slightly higher than Atlanta because of marine-grade hardware and coastal engineering, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200.",
    },
    {
      q: "Is solar worth it in Savannah?",
      a: "Yes for Savannah homes with unshaded roofs and sized to self-consumption. Payback typically runs 11 to 15 years with the federal tax credit; longer than Southeast peers with retail NEM because of Georgia Power's avoided-cost export compensation. Hurricane resilience is a common secondary driver that homeowners add battery storage for.",
    },
  ],
};
