import type { City } from "../types";

export const DURHAM: City = {
  slug: "durham",
  stateSlug: "north-carolina",
  name: "Durham",
  title: "Solar in Durham: Duke Energy Progress and Research Triangle permits",
  metaTitle: "Solar Companies in Durham: Duke Energy Progress, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Durham: Duke Energy Progress Residential Solar Choice, Durham County permits, Research Triangle market dynamics, and running a solar company in Durham.",
  answer:
    "Durham, like Raleigh, is served by Duke Energy Progress under North Carolina's HB 589-era Residential Solar Choice time-of-use rate. The city of Durham's inspections and permits office runs 2 to 4 weeks typically. The surrounding Research Triangle market is characterised by well-informed homeowners (Duke University, Research Triangle Park) who research installers extensively.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 213,
    note: "Durham has essentially the same climate as Raleigh: 4.8 peak sun hours per day, 213 sunny days per year. Deciduous tree canopy is substantial in many Durham residential neighbourhoods, so honest shade audits before quoting are important. The Research Triangle climate is otherwise favourable for solar (moderate summer temperatures, rare winter snow).",
  },
  market: {
    metroPopulationK: 650,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Progress (DEP), investor-owned, serves most of Durham County",
    "Piedmont Electric Membership Corporation serves parts of surrounding Orange and Chatham counties",
  ],
  permits: {
    office: "Durham City-County Inspections Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Durham City-County Inspections Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted as of 2026. Surrounding Orange and Chatham county permit offices run similar timelines. Duke Energy Progress interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Durham means working in a market where the Research Triangle's professional-services customer base demands honest technical conversations. Duke University faculty, RTP researchers and local tech-sector workers often arrive at the first quote already understanding TOU-rate math; sales pressure fails here more than almost anywhere else. The best Durham operators approach the market with technical depth, tree-canopy audits as part of the first visit, and fluent Duke Energy Progress interconnection. Lead costs run $100 to $180 on Google search, slightly lower than Raleigh.",
  faq: [
    {
      q: "What utility serves Durham?",
      a: "Durham is served by Duke Energy Progress (DEP), the same subsidiary that serves Raleigh and eastern NC. DEP is distinct from Duke Energy Carolinas (DEC), which serves Charlotte. New residential solar customers are on the Residential Solar Choice time-of-use rate under HB 589-era rules.",
    },
    {
      q: "How does Duke Energy Progress Residential Solar Choice work?",
      a: "Residential Solar Choice is a time-of-use rate with on-peak and off-peak differential pricing. On-peak hours are typically 6pm to 9pm weekdays in summer and 7am to 10am plus 6pm to 9pm in winter. Solar exports earn credit at the rate in effect during the export hour. Pre-2023 customers are grandfathered on the previous flat-rate NEM.",
    },
    {
      q: "How long does a solar permit take in Durham?",
      a: "Durham City-County Inspections Department typically runs residential solar permits in 2 to 4 weeks. Surrounding Orange and Chatham county offices run similar timelines. Duke Energy Progress interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Durham?",
      a: "Durham runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. North Carolina has no state solar tax credit, so the federal credit is the only tax-based incentive.",
    },
    {
      q: "Is solar worth it in Durham?",
      a: "Yes for Durham homes with unshaded roofs. Payback typically runs 10 to 14 years with the federal tax credit under the Residential Solar Choice schedule, similar to Raleigh and Charlotte. Heavily shaded roofs common in older Durham neighbourhoods often fail to pencil out; honest shade audits before quoting save both parties time.",
    },
  ],
};
