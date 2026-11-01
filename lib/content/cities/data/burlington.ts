import type { City } from "../types";

export const BURLINGTON: City = {
  slug: "burlington",
  stateSlug: "vermont",
  name: "Burlington",
  title: "Solar in Burlington: BED, Green Mountain Power and Group Net Metering",
  metaTitle: "Solar Companies in Burlington VT: BED, GMP, Permits",
  metaDescription:
    "Honest guide to solar in Burlington Vermont: Burlington Electric Department municipal utility, Green Mountain Power for surrounding areas, Group Net Metering, and running a solar company in Chittenden County.",
  answer:
    "Burlington is served by Burlington Electric Department (BED), a municipal utility that has been running at 100 percent renewable since 2014 and operates its own net metering programme. Surrounding Chittenden County is served by Green Mountain Power. Both offer retail-rate NEM; GMP's Bring Your Own Device battery incentive is a notable differentiator for storage-attached installations outside BED territory.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 158,
    note: "Burlington gets around 4.1 peak sun hours per day with 158 sunny days per year, among the lower in the US. Winter snow derating is significant: Vermont's substantial snowfall reduces annual production by 15 to 25 percent for most residential installations. Lake Champlain weather adds variability. South-facing panels at steep pitches shed snow faster.",
  },
  market: {
    metroPopulationK: 220,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 110, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Burlington Electric Department (BED), municipal utility, serves the city of Burlington",
    "Green Mountain Power (GMP), investor-owned, serves surrounding Chittenden County",
    "Vermont Electric Cooperative serves parts of northern Chittenden",
  ],
  permits: {
    office: "City of Burlington Department of Permitting and Inspections",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Burlington Department of Permitting and Inspections typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Surrounding Chittenden County towns (South Burlington, Essex, Shelburne, Williston) run their own permits with 2 to 4 week typical timelines, often with a state-level Certificate of Public Good expedited process. BED or GMP interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Burlington means handling the BED vs GMP boundary (BED customers in the city of Burlington, GMP for surrounding Chittenden). GMP's Bring Your Own Device programme (upfront incentive for storage-attached installations) is a differentiator outside BED territory. The best Burlington operators handle both utility paths fluently and model winter snow derating honestly. Lead costs run $110 to $190 on Google search.",
  faq: [
    {
      q: "Does Burlington Electric Department have net metering?",
      a: "Yes. BED offers retail-rate net metering for residential solar systems. BED has been running at 100 percent renewable generation since 2014, and residential solar interconnection is well-supported. Credits accrue monthly; annual true-up at year-end.",
    },
    {
      q: "Does GMP serve Burlington?",
      a: "GMP serves the suburbs and surrounding Chittenden County, not the city of Burlington itself. The city of Burlington is served by BED. Confirming utility by address matters because GMP's Bring Your Own Device battery incentive applies only to GMP customers, not BED customers.",
    },
    {
      q: "How long does a solar permit take in Burlington?",
      a: "City of Burlington Department of Permitting and Inspections typically runs residential solar permits in 2 to 4 weeks. Surrounding Chittenden County towns run 2 to 4 weeks typically. BED or GMP interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Burlington?",
      a: "Burlington runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit, net cost is approximately $15,200. GMP customers who add storage can access the Bring Your Own Device incentive (up to $10,500 for a Powerwall-class battery as of 2025).",
    },
    {
      q: "Is solar worth it in Burlington?",
      a: "Yes for most Burlington homes with suitable roofs. The combination of retail-rate net metering, moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 8 to 12 years. Winter snow derating is significant; honest annual yield modelling matters.",
    },
  ],
};
