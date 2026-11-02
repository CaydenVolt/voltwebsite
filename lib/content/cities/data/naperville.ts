import type { City } from "../types";

export const NAPERVILLE: City = {
  slug: "naperville",
  stateSlug: "illinois",
  name: "Naperville",
  title: "Solar in Naperville: Naperville Electric Utility municipal and DuPage permits",
  metaTitle: "Solar Companies in Naperville: NEU, Permits",
  metaDescription:
    "Honest guide to solar in Naperville Illinois: Naperville Electric Utility (NEU) municipal utility (NOT ComEd), City of Naperville permits, and running a solar company in DuPage County.",
  answer:
    "Naperville is unusual in Chicagoland: served by Naperville Electric Utility (NEU), a municipal utility (NOT ComEd). NEU operates its own net metering programme. Because NEU is municipal, Illinois Shines (which pays through ComEd and Ameren Illinois) does NOT apply to Naperville customers. Permits run through the City of Naperville Transportation, Engineering and Development Business Group.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 189,
    note: "Naperville has essentially the same climate as Chicago: 4.1 peak sun hours per day, 189 sunny days per year. Winter snow derating is substantial (15 to 25 percent annual loss). Spring tornado risk requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 150,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 120, high: 210 },
    installerDensity: "High",
  },
  utilities: [
    "Naperville Electric Utility (NEU), municipal utility, serves all of Naperville",
    "Commonwealth Edison (ComEd, Exelon subsidiary) serves surrounding DuPage County outside Naperville",
  ],
  permits: {
    office: "City of Naperville Transportation, Engineering and Development Business Group (TED)",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Naperville TED typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. NEU interconnection post-install typically runs 3 to 5 weeks. Note that NEU customers are NOT eligible for Illinois Shines; the federal tax credit is the primary incentive.",
  },
  installerLandscape:
    "Running a solar company in Naperville means handling the NEU-vs-ComEd boundary carefully: a home in Naperville is on NEU with municipal NEM but no Illinois Shines access, while a home 2 miles over in Wheaton or Lisle is on ComEd with Illinois Shines upfront REC payments. The best Naperville operators are explicit about the Illinois Shines gap in sales conversations. Lead costs run $120 to $210 on Google search.",
  faq: [
    {
      q: "Is Naperville on ComEd?",
      a: "No. Naperville is served by Naperville Electric Utility (NEU), a municipal utility. ComEd serves surrounding DuPage County outside Naperville. The two have different economics: NEU has straightforward municipal NEM, while ComEd customers access Illinois Shines upfront REC payments worth $5,000-$8,000 for a typical 7 kW system.",
    },
    {
      q: "Does Illinois Shines apply to Naperville?",
      a: "No for NEU customers. Illinois Shines pays through ComEd and Ameren Illinois customers only; NEU municipal customers do not qualify. For Naperville residents, the 30 percent federal tax credit is the primary incentive. ComEd customers in surrounding DuPage do qualify for Illinois Shines.",
    },
    {
      q: "How long does a solar permit take in Naperville?",
      a: "City of Naperville TED typically runs residential solar permits in 2 to 4 weeks. NEU interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Naperville?",
      a: "Naperville runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,700. Without Illinois Shines access, net cost is higher than ComEd-territory Chicago.",
    },
    {
      q: "Is solar worth it in Naperville?",
      a: "For Naperville homes, yes but with longer payback than ComEd-territory Chicago customers who access Illinois Shines: typically 11 to 14 years with the federal tax credit under NEU municipal rates vs 7 to 10 years in ComEd territory.",
    },
  ],
};
