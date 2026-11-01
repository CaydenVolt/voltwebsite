import type { City } from "../types";

export const DES_MOINES: City = {
  slug: "des-moines",
  stateSlug: "iowa",
  name: "Des Moines",
  title: "Solar in Des Moines: MidAmerican Energy and net metering transition",
  metaTitle: "Solar Companies in Des Moines: MidAmerican, Permits",
  metaDescription:
    "Honest guide to solar in Des Moines: MidAmerican Energy net metering after SF583 threshold, City of Des Moines permits, and running a solar company in central Iowa.",
  answer:
    "Des Moines is served by MidAmerican Energy under Iowa's post-SF583 net metering. The 2020 state law phased out full retail NEM once MidAmerican's cumulative installed solar reached 5 percent of peak demand (reached by 2024). New installations now operate under modified billing with monthly rollover at retail but reduced true-up value. Permits run through the City of Des Moines Building Department.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 203,
    note: "Des Moines gets around 4.6 peak sun hours per day with 203 sunny days per year, moderate for solar. Winter snow derating is substantial (10 to 20 percent annual loss). Summer thunderstorms reduce afternoon production. Tornado-prone weather in spring requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 740,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "MidAmerican Energy (Berkshire Hathaway Energy subsidiary), investor-owned, serves most of the Des Moines metro",
    "Various electric cooperatives (Central Iowa Power Cooperative, Grinnell Electric Cooperative) serve rural outlying areas",
  ],
  permits: {
    office: "City of Des Moines Building Department",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Des Moines Building Department typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Polk, Dallas and Warren county jurisdictions run their own permits with 2 to 4 week typical timelines. MidAmerican Energy interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Des Moines means working under Iowa's post-SF583 net metering where new installations receive partial-NEM treatment. The best Des Moines operators size systems to self-consumption, model winter snow derating honestly, and have templated MidAmerican Energy interconnection workflows. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does MidAmerican Energy have net metering in Des Moines?",
      a: "Partially. The 2020 Iowa SF583 phased out full retail NEM once MidAmerican's cumulative installed solar reached 5 percent of peak demand (reached by 2024). New residential installations now operate under modified billing with monthly rollover at retail but reduced true-up value. Pre-threshold customers are grandfathered.",
    },
    {
      q: "How long does a solar permit take in Des Moines?",
      a: "City of Des Moines Building Department typically runs residential solar permits in 3 to 5 weeks. Surrounding counties run 2 to 4 weeks typically. MidAmerican Energy interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Des Moines?",
      a: "Des Moines runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Iowa's state solar tax credit was closed to new applications in 2022.",
    },
    {
      q: "Is solar worth it in Des Moines?",
      a: "Yes for most Des Moines homes with suitable roofs. The combination of partial net metering, moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 10 to 13 years. Winter snow derating stretches payback compared with Sun Belt peers.",
    },
  ],
};
