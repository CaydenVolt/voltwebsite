import type { City } from "../types";

export const ROUND_ROCK: City = {
  slug: "round-rock",
  stateSlug: "texas",
  name: "Round Rock",
  title: "Solar in Round Rock: PEC cooperative and Williamson County permits",
  metaTitle: "Solar Companies in Round Rock: PEC, Oncor, Permits",
  metaDescription:
    "Honest guide to solar in Round Rock Texas: Pedernales Electric Cooperative (PEC) and Oncor service, Williamson County permits (faster than Austin), and running a solar company in north of Austin.",
  answer:
    "Round Rock is split between Pedernales Electric Cooperative (PEC) and Oncor service depending on specific address. PEC is a member-owned cooperative with its own net metering programme; Oncor customers operate under deregulated ERCOT with REP buyback. Round Rock permits run much faster than Austin DSD (typically 2 to 4 weeks vs 4 to 8).",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.1,
    sunnyDays: 228,
    note: "Round Rock has essentially the same climate as Austin: 5.1 peak sun hours per day, 228 sunny days per year. Summer heat is intense (June through September rooftop temperatures regularly exceed 160F). Hail is a secondary risk.",
  },
  market: {
    metroPopulationK: 145,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Pedernales Electric Cooperative (PEC), member-owned cooperative, serves parts of Round Rock and surrounding Williamson County",
    "Oncor Electric Delivery, delivers to parts of Round Rock in deregulated ERCOT territory",
    "Williamson County Rural Electric Cooperative also serves parts of outlying areas",
  ],
  permits: {
    office: "City of Round Rock Planning and Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Round Rock Planning and Development Services typically runs residential solar permits in 2 to 4 weeks, substantially faster than Austin DSD. SolarAPP+ is not accepted. PEC or Oncor interconnection post-install typically runs 3 to 5 weeks (PEC) or 2 to 5 weeks (Oncor + REP).",
  },
  installerLandscape:
    "Running a solar company in Round Rock means handling the PEC vs Oncor boundary carefully (two different interconnection paths with different rules). The best Round Rock operators verify utility by address up front and often prefer this market over Austin city because of the faster permits. Williamson County suburbs including Cedar Park and Georgetown share this dynamic. Lead costs run $110 to $200 on Google search.",
  faq: [
    {
      q: "What utility serves Round Rock?",
      a: "Round Rock is split between Pedernales Electric Cooperative (PEC) and Oncor (deregulated ERCOT territory with REP buyback). PEC is a member-owned cooperative with its own net metering programme; Oncor customers must enroll in a solar-buyback REP for export credit. Confirming utility by address matters for an accurate quote.",
    },
    {
      q: "How long does a solar permit take in Round Rock?",
      a: "City of Round Rock Planning and Development Services typically runs residential solar permits in 2 to 4 weeks, substantially faster than Austin DSD (4 to 8 weeks). This is a real operational advantage for installers working the Williamson County suburbs.",
    },
    {
      q: "How much does solar cost in Round Rock?",
      a: "Round Rock runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Round Rock?",
      a: "Yes for Round Rock homes with suitable roofs. PEC customers see payback around 8 to 11 years with the federal tax credit under PEC's net metering. Oncor+REP customers see similar payback with a solar buyback REP; without one, payback stretches to 13+ years.",
    },
  ],
};
