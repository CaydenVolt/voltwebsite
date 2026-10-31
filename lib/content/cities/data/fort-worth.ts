import type { City } from "../types";

export const FORT_WORTH: City = {
  slug: "fort-worth",
  stateSlug: "texas",
  name: "Fort Worth",
  title: "Solar in Fort Worth: Oncor, REP buyback and faster permits than Dallas",
  metaTitle: "Solar Companies in Fort Worth: Oncor, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Fort Worth: Oncor delivery with deregulated REP buyback, City of Fort Worth permits (faster than Dallas), hail considerations, and running a solar company in Tarrant County.",
  answer:
    "Fort Worth sits in the ERCOT deregulated market with Oncor owning the wires. The economics mirror Dallas (customers must pick a solar-buyback REP for export credit), but the City of Fort Worth permit office is substantially faster than Dallas DSD, typically 2 to 4 weeks. Hail is the dominant climate risk; Class 4 impact rating panels are the practical spec.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "Fort Worth has essentially the same climate as Dallas: 5.2 peak sun hours per day, 232 sunny days per year. Hail is the dominant risk: North Texas sees several significant hail events per year with March to May as the peak storm season. UL 61730 Class 4 impact-rated panels (survives 2-inch hail at terminal velocity) are the practical standard for Tarrant County. Summer rooftop temperatures regularly exceed 160F.",
  },
  market: {
    metroPopulationK: 2550,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Oncor Electric Delivery (owns the wires, delivers electricity to most of Tarrant County)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU",
    "Bryan Texas Utilities, GVEC and other municipals/co-ops serve specific pockets",
  ],
  permits: {
    office: "City of Fort Worth Development Services Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Fort Worth Development Services typically runs residential solar permits in 2 to 4 weeks, faster than the City of Dallas DSD. SolarAPP+ is not accepted in Fort Worth as of 2026. Tarrant County unincorporated areas run through the county with similar timelines. Oncor interconnection post-install typically runs 2 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fort Worth means working in a market with the same technical dynamics as Dallas (deregulated REP buyback, hail-rated panels, Oncor interconnection) but faster permit turnaround through the city. This matters more than it sounds: a Fort Worth operator can run 25 to 35 percent more project volume per crew per quarter than a Dallas-city operator because of permit-queue differential alone. Lead costs run $110 to $200, among the lowest in Texas. The best Tarrant County operators focus on specific suburbs (Arlington, Keller, Southlake, Grapevine) because of relationship referrals; metrowide generalist approaches lose margin.",
  faq: [
    {
      q: "Does Fort Worth have net metering?",
      a: "Texas has no statewide net metering mandate. In Fort Worth (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. A handful do (Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU with its specific solar plan). Most REP plans credit exports at $0 or at a wholesale rate well below retail. Switching to a solar buyback REP after install is essential.",
    },
    {
      q: "Why are Fort Worth permits faster than Dallas?",
      a: "City of Fort Worth Development Services runs a smaller queue and has invested in solar-specific review workflows that handle most residential submissions in 2 to 4 weeks. City of Dallas DSD runs a larger queue and has a backlog that has not fully cleared since 2022, typically running 3 to 6 weeks for the same work. The practical consequence is that Fort Worth operators can turn more projects per crew per quarter than Dallas-city operators.",
    },
    {
      q: "How much does solar cost in Fort Worth?",
      a: "Fort Worth runs about $2.55 per watt installed for residential, essentially identical to Dallas, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500. Hail-rated Class 4 panels are standard spec and included in that range at reputable installers.",
    },
    {
      q: "What hail rating should solar panels have in Fort Worth?",
      a: "UL 61730 Class 4 impact rating is the practical standard for Tarrant County. Class 4 panels have been tested to survive 2-inch hail at terminal velocity, which covers nearly all North Texas hail events. Insurance carriers in North Texas increasingly require Class 4 panels for solar policy coverage; a non-rated or lower-class panel often leads to voided insurance claims.",
    },
    {
      q: "Is solar worth it in Fort Worth?",
      a: "Yes for Fort Worth homes with high electricity use. Payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP. The faster permit timeline than Dallas is an installer-side advantage rather than a homeowner-side one; the homeowner payback math is similar between the two cities.",
    },
  ],
};
