import type { City } from "../types";

export const INDIANAPOLIS: City = {
  slug: "indianapolis",
  stateSlug: "indiana",
  name: "Indianapolis",
  title: "Solar in Indianapolis: AES Indiana, EDG tariff and Marion County permits",
  metaTitle: "Solar Companies in Indianapolis: AES Indiana, EDG, Permits",
  metaDescription:
    "Honest guide to solar in Indianapolis: AES Indiana's Excess Distributed Generation (EDG) tariff that replaced retail NEM, City of Indianapolis permits, and running a solar company in Central Indiana.",
  answer:
    "Indianapolis is served by AES Indiana (formerly Indianapolis Power & Light) under Indiana's post-NEM Excess Distributed Generation (EDG) tariff. Residential exports credit at a wholesale rate (around $0.03 to $0.04 per kWh) rather than retail, so system sizing precision and self-consumption drive the economics. The federal tax credit remains the primary incentive. Permits run through the City of Indianapolis Business and Neighborhood Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 196,
    note: "Indianapolis gets around 4.6 peak sun hours per day with 196 sunny days per year, moderate for solar. Winter snow is a real factor; snow accumulation reduces annual production by 10 to 15 percent for most residential installations. Summer thunderstorm cloud cover reduces afternoon production more than the sunny-days count suggests.",
  },
  market: {
    metroPopulationK: 2110,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "AES Indiana (formerly Indianapolis Power & Light), investor-owned, serves most of Marion County and parts of surrounding counties",
    "Duke Energy Indiana serves parts of outlying counties in the Indianapolis metro",
    "Indianapolis Power EMC (serves specific rural pockets)",
  ],
  permits: {
    office: "City of Indianapolis Department of Business and Neighborhood Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Indianapolis Department of Business and Neighborhood Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hamilton, Hendricks, Johnson and Boone counties run their own permits with 2 to 4 week typical timelines. AES Indiana interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Indianapolis means working under Indiana's EDG tariff, where exported electricity earns only wholesale rates. The sales conversation hinges on self-consumption rather than export: systems sized to the home's annual load pencil out, oversized systems do not. The best Indianapolis operators run honest load-match analyses before quoting, pair installations with electric heat pump or EV charging additions that increase daytime consumption, and have templated AES Indiana interconnection workflows. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does AES Indiana have net metering?",
      a: "Not retail-rate for new customers. Indiana's net metering programme was phased out in 2017 and replaced by the Excess Distributed Generation (EDG) tariff. AES Indiana EDG credits residential solar exports at a wholesale rate (approximately 1.25x the utility's standard wholesale rate, currently around $0.03 to $0.04 per kWh), substantially below retail (which runs around $0.15 per kWh). Pre-2018 customers are grandfathered on retail NEM through 2047.",
    },
    {
      q: "How long does a solar permit take in Indianapolis?",
      a: "City of Indianapolis Department of Business and Neighborhood Services typically runs residential solar permits in 3 to 5 weeks. Surrounding counties (Hamilton, Hendricks, Johnson, Boone) run 2 to 4 weeks typically. AES Indiana interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Indianapolis?",
      a: "Indianapolis runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Indiana has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Indianapolis?",
      a: "For Indianapolis homes sized to self-consumption, yes: payback typically runs 10 to 14 years with the federal tax credit. Oversized systems that export heavily under the EDG tariff pay back much more slowly because exports earn only wholesale rates. Honest load-match analysis before quoting is essential; this is a market where right-sizing beats cheap bigger systems.",
    },
  ],
};
