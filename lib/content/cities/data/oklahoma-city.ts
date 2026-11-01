import type { City } from "../types";

export const OKLAHOMA_CITY: City = {
  slug: "oklahoma-city",
  stateSlug: "oklahoma",
  name: "Oklahoma City",
  title: "Solar in Oklahoma City: OG&E, hail reality and net billing",
  metaTitle: "Solar Companies in Oklahoma City: OG&E, Permits, Hail",
  metaDescription:
    "Honest guide to solar in Oklahoma City: OG&E non-retail net metering, City of Oklahoma City permits, hail and tornado considerations, and running a solar company in central Oklahoma.",
  answer:
    "Oklahoma City is served by OG&E under non-retail net metering: exports credit at avoided cost (approximately $0.03 per kWh), far below the retail rate of about $0.12. The economics work only with careful sizing to self-consumption plus the federal tax credit. Hail is a dominant climate consideration; Class 4 impact-rated panels are standard spec.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.1,
    sunnyDays: 234,
    note: "Oklahoma City gets around 5.1 peak sun hours per day with 234 sunny days per year, strong for solar. Hail is the dominant climate risk; central Oklahoma sees several significant hail events per year, with the March to June storm season being peak. UL 61730 Class 4 impact-rated panels are essential. Tornado-prone weather requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 1430,
    averageCostPerWatt: 2.7,
    leadCostUsd: { low: 80, high: 150 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Oklahoma Gas & Electric (OG&E), investor-owned, serves most of the Oklahoma City metro",
    "Various electric cooperatives (CKenergy, Caddo Electric Cooperative) serve rural outlying areas",
    "Edmond Electric and OG&E both serve parts of Edmond",
  ],
  permits: {
    office: "City of Oklahoma City Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Oklahoma City Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Surrounding Oklahoma and Cleveland county jurisdictions (Norman, Edmond, Moore) run their own permits with 2 to 4 week typical timelines. OG&E interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Oklahoma City means working in a market constrained by non-retail export compensation and dominated by hail risk. The best OKC operators spec UL 61730 Class 4 impact-rated panels as standard, size systems to self-consumption, and sell on long-term rate protection rather than fast payback. Lead costs run $80 to $150 on Google search.",
  faq: [
    {
      q: "Does OG&E have net metering?",
      a: "Not retail-rate. OG&E credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.12. The 2014 Oklahoma Corporation Commission order permits utilities to charge solar customers fixed grid-connection fees in addition to standard rates.",
    },
    {
      q: "How long does a solar permit take in Oklahoma City?",
      a: "City of Oklahoma City Development Services typically runs residential solar permits in 2 to 4 weeks. Surrounding cities (Norman, Edmond, Moore) run 2 to 4 weeks typically. OG&E interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Oklahoma City?",
      a: "Oklahoma City runs about $2.70 per watt installed for residential, meaning a 7 kW system typically costs around $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200. Hail-rated Class 4 panels are standard spec and included in that range.",
    },
    {
      q: "Is solar worth it in Oklahoma City?",
      a: "For OKC homes with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 11 to 15 years with the federal tax credit. The combination of non-retail export compensation and no state incentives stretches payback. Hail resilience with Class 4 panels is essential; cheap non-rated panels regularly fail.",
    },
  ],
};
