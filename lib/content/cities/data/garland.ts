import type { City } from "../types";

export const GARLAND: City = {
  slug: "garland",
  stateSlug: "texas",
  name: "Garland",
  title: "Solar in Garland: Garland Power & Light municipal and DFW permits",
  metaTitle: "Solar Companies in Garland: GP&L, Permits",
  metaDescription:
    "Honest guide to solar in Garland Texas: Garland Power & Light (GP&L) municipal utility (NOT Oncor), City of Garland permits, DFW hail reality, and running a solar company in Dallas County.",
  answer:
    "Garland is unusual in the DFW metroplex: served by Garland Power & Light (GP&L), a municipal utility (NOT Oncor + REP buyback like the rest of DFW). GP&L operates its own net metering programme. Hail is a dominant climate factor. Permits run through the City of Garland Building Inspection Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "Garland has essentially the same climate as Dallas: 5.2 peak sun hours per day, 232 sunny days per year. Hail is the dominant risk; UL 61730 Class 4 impact-rated panels are the practical standard. Summer rooftop temperatures regularly exceed 160F.",
  },
  market: {
    metroPopulationK: 240,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Garland Power & Light (GP&L), municipal utility, serves all of Garland",
    "Oncor Electric Delivery serves surrounding DFW suburbs outside Garland (deregulated ERCOT territory with REP buyback)",
  ],
  permits: {
    office: "City of Garland Building Inspection Division",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Garland Building Inspection Division typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. GP&L interconnection post-install typically runs 3 to 5 weeks (faster than Oncor + REP coordination in surrounding DFW).",
  },
  installerLandscape:
    "Running a solar company in Garland means handling the GP&L-vs-Oncor boundary carefully: a home in Garland is on GP&L with municipal net metering, while a home 2 miles over in Richardson or Mesquite is on Oncor with deregulated ERCOT REP buyback. The best Garland operators verify utility by address up front and spec Class 4 hail-rated panels. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Is Garland served by Oncor?",
      a: "No. Garland is served by Garland Power & Light (GP&L), a municipal utility. This is unusual in DFW, where most cities are served by Oncor on the wires with deregulated ERCOT REP buyback. Confirming utility by address matters because the economics work very differently between GP&L (municipal NEM) and Oncor + REP (deregulated).",
    },
    {
      q: "Does GP&L have net metering?",
      a: "Yes. Garland Power & Light operates its own net metering programme for residential solar customers. Monthly credit rollover at retail rate; annual true-up at avoided cost. Substantially simpler than the Oncor + REP buyback dynamic in surrounding DFW cities.",
    },
    {
      q: "How long does a solar permit take in Garland?",
      a: "City of Garland Building Inspection Division typically runs residential solar permits in 2 to 4 weeks. GP&L interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Garland?",
      a: "Garland runs about $2.60 per watt installed for residential, essentially identical to Dallas, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700.",
    },
    {
      q: "Is solar worth it in Garland?",
      a: "Yes for Garland homes with high electricity use. GP&L's municipal net metering makes the sales math substantially simpler than the REP-buyback dynamic in surrounding DFW cities. Payback typically runs 8 to 11 years with the federal tax credit.",
    },
  ],
};
