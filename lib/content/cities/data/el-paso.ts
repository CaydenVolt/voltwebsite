import type { City } from "../types";

export const EL_PASO: City = {
  slug: "el-paso",
  stateSlug: "texas",
  name: "El Paso",
  title: "Solar in El Paso: EPE buyback and West Texas desert climate",
  metaTitle: "Solar Companies in El Paso: El Paso Electric, Permits",
  metaDescription:
    "Honest guide to solar in El Paso: El Paso Electric (not deregulated ERCOT), the EPE residential solar buyback programme, City of El Paso permits, and running a solar company in Far West Texas.",
  answer:
    "El Paso is unusual for Texas: it is NOT in the ERCOT deregulated market. El Paso Electric (EPE) is a regulated vertically-integrated utility that operates its own net metering and residential solar buyback programme. The export credit sits around $0.085 per kWh under current EPE tariffs, meaningfully below the retail rate of about $0.13 but still better than most Texas REP plans.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 6.4,
    sunnyDays: 302,
    note: "El Paso gets around 6.4 peak sun hours per day with 302 sunny days per year, among the highest in the US. Summer heat is extreme (June through August rooftop temperatures regularly exceed 170F); panel temperature coefficients and racking that promotes airflow matter. Dust accumulation during dry months (October to June) reduces output 5 to 15 percent between infrequent rain events.",
  },
  market: {
    metroPopulationK: 870,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "El Paso Electric (EPE), investor-owned vertically-integrated utility (regulated, NOT in ERCOT deregulated market)",
    "Rio Grande Electric Cooperative serves parts of outlying rural areas",
  ],
  permits: {
    office: "City of El Paso Development Services (One-Stop Shop)",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of El Paso Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted as of 2026. El Paso County unincorporated areas run through the county with similar timelines. EPE interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in El Paso means working in a market where EPE's regulated utility structure differs from the rest of Texas: no REP shopping, no complicated buyback-plan comparison, just one utility and its net metering tariff. The best El Paso operators treat the market more like a Southwest market than a Texas market (closer to Phoenix or Albuquerque in practice than Dallas or Houston). Lead costs run $90 to $170, among the lowest in Texas because national installer competition is thin here. The Spanish-speaking homeowner market is substantial; English-only installers consistently underperform bilingual ones in El Paso.",
  faq: [
    {
      q: "Is El Paso in ERCOT?",
      a: "No. El Paso is in the WECC (Western Electricity Coordinating Council) grid, not ERCOT. El Paso Electric is a traditional vertically-integrated regulated utility, meaning El Paso residents do NOT shop REPs the way Dallas or Houston residents do. There is one utility and one tariff schedule for solar interconnection.",
    },
    {
      q: "Does El Paso Electric have net metering?",
      a: "EPE operates a Qualifying Facility (QF) programme that credits residential solar exports at an avoided-energy-cost rate, currently around $0.085 per kWh (confirm with EPE before quoting; the rate is set in rate cases). This is below the retail rate of about $0.13 per kWh but better than most Texas REP buyback plans. Credits accrue monthly; annual true-up at avoided cost.",
    },
    {
      q: "How long does a solar permit take in El Paso?",
      a: "City of El Paso Development Services typically runs residential solar permits in 2 to 4 weeks. El Paso County unincorporated areas run similar timelines. EPE interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in El Paso?",
      a: "El Paso runs about $2.55 per watt installed for residential, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500. El Paso installer prices run competitive because of lower labour costs than the Texas average.",
    },
    {
      q: "Is solar worth it in El Paso?",
      a: "Yes for most El Paso homes with suitable roofs. The combination of excellent sun hours (over 6.4 per day), the EPE QF export credit, and the 30 percent federal tax credit makes residential solar payback typically 8 to 11 years with the federal tax credit. The relatively low retail electric rates in El Paso stretch payback compared to Phoenix or San Diego, but the excellent sun hours offset this partially.",
    },
  ],
};
