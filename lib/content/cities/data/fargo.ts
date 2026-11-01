import type { City } from "../types";

export const FARGO: City = {
  slug: "fargo",
  stateSlug: "north-dakota",
  name: "Fargo",
  title: "Solar in Fargo: Xcel Energy and polar winter reality",
  metaTitle: "Solar Companies in Fargo: Xcel Energy, Permits",
  metaDescription:
    "Honest guide to solar in Fargo North Dakota: Xcel Energy net metering, City of Fargo permits, severe polar winter climate, and running a solar company in Cass County.",
  answer:
    "Fargo is served by Xcel Energy (Northern States Power) under retail-rate net metering. Severe polar winter climate is the dominant factor: temperatures regularly fall below -20F and extended snow cover reduces annual yield 20 to 30 percent. The federal tax credit is essentially the only meaningful incentive. Permits run through the City of Fargo Inspections Department.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 207,
    note: "Fargo gets around 4.5 peak sun hours per day with 207 sunny days per year, moderate for the latitude. Winter snow derating is severe (20 to 30 percent annual loss) because of extended snow cover from November through March and extremely low winter temperatures. Steep-pitch south-facing panels shed snow faster.",
  },
  market: {
    metroPopulationK: 250,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 70, high: 140 },
    installerDensity: "Low",
  },
  utilities: [
    "Xcel Energy (Northern States Power), investor-owned, serves all of Fargo and most of Cass County",
    "Various rural electric cooperatives serve outlying rural areas",
  ],
  permits: {
    office: "City of Fargo Inspections Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Fargo Inspections Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Cass County unincorporated runs through the county with 2 to 4 week typical timelines. Xcel Energy interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fargo means working in one of the smallest and most climate-challenged residential solar markets in the contiguous US. The best Fargo operators are explicit about severe winter production loss, spec steep-pitch roof mounting for snow shedding, and sell on energy independence rather than fast payback. Lead costs run $70 to $140 on Google search, among the lowest in the US because installer competition is minimal.",
  faq: [
    {
      q: "Can solar work in Fargo?",
      a: "Yes, but with substantial winter production loss. Fargo's extended snow cover (November through March) and extremely low winter temperatures reduce annual yield by 20 to 30 percent compared with equivalent Sun Belt systems. Steep-pitch south-facing installations perform better than low-angle flat mounts.",
    },
    {
      q: "Does Xcel Energy have net metering in Fargo?",
      a: "Yes, retail-rate net metering for residential solar systems under Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost.",
    },
    {
      q: "How much does solar cost in Fargo?",
      a: "Fargo runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200. North Dakota has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Fargo?",
      a: "For Fargo homes with very high electricity use and south-facing steep-pitch roofs, yes but with the longest payback in the contiguous US: typically 13 to 17 years with the federal tax credit. Low electric rates and severe winter weather stretch payback. Most Fargo homeowners install solar for energy independence rather than payback optimisation.",
    },
  ],
};
