import type { City } from "../types";

export const THE_WOODLANDS: City = {
  slug: "the-woodlands",
  stateSlug: "texas",
  name: "The Woodlands",
  title: "Solar in The Woodlands: Entergy Texas (not CenterPoint) and master-planned permits",
  metaTitle: "Solar Companies in The Woodlands: Entergy Texas, Permits",
  metaDescription:
    "Honest guide to solar in The Woodlands Texas: Entergy Texas delivery (NOT CenterPoint), Montgomery County permits, master-planned HOA review, and running a solar company north of Houston.",
  answer:
    "The Woodlands is unusual in the Houston metro: served by Entergy Texas, NOT CenterPoint Energy. Entergy Texas is a regulated utility (less flexibility on REP shopping than deregulated CenterPoint territory). The master-planned community is HOA-dense with strict aesthetic standards. Permits run through the Montgomery County Permits Department.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 204,
    note: "The Woodlands has essentially the same climate as Houston: 4.9 peak sun hours per day, 204 sunny days per year. Montgomery County wind-load design runs 130 to 140 mph. Dense pine canopy throughout The Woodlands significantly limits suitable rooftops and reduces annual yield more than most installers model.",
  },
  market: {
    metroPopulationK: 120,
    averageCostPerWatt: 2.7,
    leadCostUsd: { low: 125, high: 220 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Entergy Texas, investor-owned (regulated, not ERCOT deregulated), serves most of The Woodlands and Montgomery County",
    "Various electric cooperatives serve rural outlying Montgomery County areas",
  ],
  permits: {
    office: "Montgomery County Permits Department",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Montgomery County Permits Department typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. The Woodlands Township HOA requires strict architectural review that adds 3 to 8 weeks. Entergy Texas interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in The Woodlands means handling two distinct challenges: Entergy Texas service (different from Houston's CenterPoint and deregulated ERCOT), and the dense pine canopy that disqualifies many quoted roofs. The best Woodlands operators do rigorous tree-canopy audits before quoting, understand Entergy Texas's net metering programme (which differs from the REP-buyback dynamic in CenterPoint territory), and handle the strict HOA aesthetic requirements. Lead costs run $125 to $220 on Google search.",
  faq: [
    {
      q: "Is The Woodlands served by CenterPoint?",
      a: "No. The Woodlands is served by Entergy Texas, not CenterPoint Energy. Unlike most of the Houston metro, Entergy Texas is a regulated utility (not part of deregulated ERCOT with REP shopping). This is a meaningful difference that affects solar economics and interconnection.",
    },
    {
      q: "Does Entergy Texas have net metering?",
      a: "Entergy Texas offers a net metering programme for residential solar customers that credits exports monthly, with avoided-cost true-up. Rates and structure are set by the Texas PUC through Entergy's rate cases. Confirm current terms with Entergy Texas before quoting.",
    },
    {
      q: "How long does a solar permit take in The Woodlands?",
      a: "Montgomery County Permits Department typically runs residential solar permits in 3 to 5 weeks. The Woodlands Township HOA review adds 3 to 8 weeks. Entergy Texas interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in The Woodlands?",
      a: "The Woodlands runs about $2.70 per watt installed for residential, meaning a 7 kW system typically costs around $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200.",
    },
    {
      q: "Is solar worth it in The Woodlands?",
      a: "For homes with unshaded roofs (less common in The Woodlands because of the dense pine canopy), yes: payback typically runs 9 to 13 years with the federal tax credit under Entergy Texas net metering. Heavily shaded homes often fail to pencil out; honest shade audits are essential.",
    },
  ],
};
