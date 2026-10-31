import type { City } from "../types";

export const RALEIGH: City = {
  slug: "raleigh",
  stateSlug: "north-carolina",
  name: "Raleigh",
  title: "Solar in Raleigh: Duke Energy Progress and Triangle permits",
  metaTitle: "Solar Companies in Raleigh: Duke Energy Progress, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Raleigh: Duke Energy Progress net metering, Wake County permits, Triangle market dynamics, and running a solar company in Raleigh-Durham.",
  answer:
    "Raleigh is served by Duke Energy Progress (not Duke Energy Carolinas, which serves Charlotte). The two Duke subsidiaries have different rate structures: Progress uses a flat-rate NEM for residential solar under the pre-HB 589 grandfathering, with new customers on the Residential Solar Choice time-of-use rate. Wake County and City of Raleigh permits run 2 to 4 weeks typically.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 213,
    note: "Raleigh gets around 4.8 peak sun hours per day with 213 sunny days per year, moderate for solar. The Triangle has substantial deciduous tree canopy in many residential neighbourhoods, so honest shade audits before quoting are important. Winter snow is rare but ice storms occasionally damage improperly-mounted systems; freeze-thaw cycle appropriate racking matters.",
  },
  market: {
    metroPopulationK: 1500,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 100, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Progress (DEP), investor-owned, serves most of the Triangle including Raleigh, Cary, Apex, Wake Forest",
    "Wake Electric Membership Corporation (cooperative) serves rural parts of Wake County",
    "GreenCo Solutions aggregates several NC co-ops for solar",
  ],
  permits: {
    office: "City of Raleigh Development Services, plus Wake County Environmental Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Raleigh Development Services and Wake County Environmental Services each handle residential solar permits in 2 to 4 weeks typically. SolarAPP+ is not accepted in the Triangle as of 2026. Surrounding Triangle cities (Durham, Cary, Apex, Chapel Hill, Wake Forest) each have their own permit offices with 2 to 4 week typical timelines. Duke Energy Progress interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Raleigh means working in one of the Southeast's fastest-growing solar markets. Research Triangle Park's professional-services base means homeowners here research systems extensively before quoting, so honest sales conversations and technical explanations win more projects than sales-pressure tactics. The best Triangle operators fluently handle Duke Energy Progress interconnection (which differs from Duke Energy Carolinas in Charlotte), do tree-canopy audits as part of the first visit, and work both Wake and Durham counties with templated permit submissions. Lead costs run $100 to $190, lower than Charlotte because the Triangle is less competitive.",
  faq: [
    {
      q: "Does Duke Energy Progress have net metering?",
      a: "Yes, but not retail-rate 1-for-1 for new customers. New residential solar customers (post-2023) are on the Residential Solar Choice time-of-use rate: on-peak and off-peak differential pricing, with export credit at whichever rate applies during the export hour. Pre-2023 customers are grandfathered on the previous flat-rate NEM. The Residential Solar Choice rate structure materially affects system design for payback optimisation.",
    },
    {
      q: "What is the difference between Duke Energy Progress and Duke Energy Carolinas?",
      a: "Both are subsidiaries of Duke Energy Corporation but operate as separate utilities with separate rate structures. Duke Energy Carolinas serves Charlotte and western NC; Duke Energy Progress serves Raleigh and eastern NC. The two have different retail rates, different TOU hour windows under Residential Solar Choice, and different interconnection application portals. An installer who treats the two as interchangeable regularly misquotes payback.",
    },
    {
      q: "How long does a solar permit take in Raleigh?",
      a: "City of Raleigh Development Services and Wake County Environmental Services typically run residential solar permits in 2 to 4 weeks. Surrounding Triangle cities (Durham, Cary, Apex, Wake Forest) run 2 to 4 weeks typically. Duke Energy Progress interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Raleigh?",
      a: "Raleigh runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. North Carolina has no state solar tax credit, so the federal credit is the only tax-based incentive.",
    },
    {
      q: "Is solar worth it in Raleigh?",
      a: "Yes for most Raleigh homes with unshaded roofs. Payback typically runs 10 to 14 years with the federal tax credit under the Residential Solar Choice schedule, similar to Charlotte. Heavily shaded roofs common in older Triangle neighbourhoods often fail to pencil out; honest shade audits before quoting save both parties time.",
    },
  ],
};
