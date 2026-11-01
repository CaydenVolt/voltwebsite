import type { City } from "../types";

export const JACKSON: City = {
  slug: "jackson",
  stateSlug: "mississippi",
  name: "Jackson",
  title: "Solar in Jackson: Entergy Mississippi and net billing reality",
  metaTitle: "Solar Companies in Jackson MS: Entergy MS, Permits",
  metaDescription:
    "Honest guide to solar in Jackson Mississippi: Entergy Mississippi non-retail net metering, City of Jackson permits, and running a solar company in central MS.",
  answer:
    "Jackson is served by Entergy Mississippi under non-retail net metering: exports credit at avoided cost (approximately $0.03 per kWh), far below the retail rate of about $0.13. The economics work only with careful sizing to self-consumption plus the federal tax credit. Permits run through the City of Jackson Department of Planning and Development.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 211,
    note: "Jackson gets around 4.8 peak sun hours per day with 211 sunny days per year, moderate-to-strong for solar. Summer thunderstorms reduce afternoon production. Tornado-prone weather in spring requires proper structural attachment. High humidity year-round; marine-grade stainless hardware is sensible for durability.",
  },
  market: {
    metroPopulationK: 580,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 80, high: 150 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Entergy Mississippi, investor-owned, serves most of central Mississippi including Jackson",
    "Various electric cooperatives (Southern Pine Electric, Central Electric Power Association) serve rural outlying areas",
  ],
  permits: {
    office: "City of Jackson Department of Planning and Development",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Jackson Department of Planning and Development typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Rankin and Madison counties run their own permits with 2 to 4 week typical timelines. Entergy Mississippi interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Jackson means working in a market constrained by non-retail export compensation. The best Jackson operators size systems to self-consumption rather than oversize for export, factor the monthly minimum charge into payback calculations, and sell on long-term rate protection rather than fast payback. Lead costs run $80 to $150 on Google search, among the lowest in the US because national installer competition is thin.",
  faq: [
    {
      q: "Does Entergy Mississippi have net metering?",
      a: "Not retail-rate. Entergy Mississippi credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.13. The 2024 PSC order raised the system size limit to 50 kW but did not change the compensation rate.",
    },
    {
      q: "How long does a solar permit take in Jackson?",
      a: "City of Jackson Department of Planning and Development typically runs residential solar permits in 3 to 5 weeks. Surrounding Rankin and Madison counties run 2 to 4 weeks typically. Entergy Mississippi interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Jackson?",
      a: "Jackson runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Mississippi has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Jackson?",
      a: "For Jackson homes with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 12 to 16 years with the federal tax credit. The combination of non-retail export compensation, low retail rates, and no state incentives stretches payback compared with retail-NEM Southeast peers.",
    },
  ],
};
