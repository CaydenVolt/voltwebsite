import type { City } from "../types";

export const MESQUITE: City = {
  slug: "mesquite",
  stateSlug: "texas",
  name: "Mesquite",
  title: "Solar in Mesquite: Oncor, REP buyback and east Dallas County permits",
  metaTitle: "Solar Companies in Mesquite: Oncor, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Mesquite Texas: Oncor delivery with REP buyback, City of Mesquite permits, east Dallas County suburb, DFW hail reality, and running a solar company in Mesquite.",
  answer:
    "Mesquite is an east Dallas County suburb served by Oncor on the wires with deregulated ERCOT REP choice. A solar-buyback REP is essential. Hail is the dominant climate factor; Class 4 panels are standard. Permits run through the City of Mesquite Building Inspection.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "Mesquite has essentially the same climate as Dallas and Garland: 5.2 peak sun hours per day, 232 sunny days per year. Hail is the dominant risk; UL 61730 Class 4 impact-rated panels are the practical standard.",
  },
  market: {
    metroPopulationK: 150,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 105, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Oncor Electric Delivery (owns the wires, delivers electricity to all of Mesquite)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU",
  ],
  permits: {
    office: "City of Mesquite Building Inspection",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Mesquite Building Inspection typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Oncor interconnection post-install typically runs 2 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Mesquite means working in a mid-size east Dallas County suburb with similar economics to Garland (except Mesquite is on Oncor, not GP&L municipal). The best Mesquite operators have templated solar buyback REP workflows and spec Class 4 hail-rated panels. Lead costs run $105 to $190 on Google search.",
  faq: [
    {
      q: "Does Mesquite Texas have net metering?",
      a: "Texas has no statewide net metering mandate. In Mesquite (deregulated ERCOT market), solar exports are credited only if your REP offers a solar buyback plan. Switching to a solar buyback REP is essential.",
    },
    {
      q: "Is Mesquite on Oncor or Garland Power & Light?",
      a: "Mesquite is on Oncor. The neighbouring city of Garland is on Garland Power & Light (GP&L) municipal utility; Mesquite is not. This matters because Oncor + REP economics differ from GP&L municipal.",
    },
    {
      q: "How long does a solar permit take in Mesquite?",
      a: "City of Mesquite Building Inspection typically runs residential solar permits in 2 to 4 weeks. Oncor interconnection post-install adds 2 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Mesquite?",
      a: "Mesquite runs about $2.55 per watt installed for residential, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500. Class 4 hail-rated panels are standard spec.",
    },
    {
      q: "Is solar worth it in Mesquite?",
      a: "Yes for Mesquite homes with high electricity use. Payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP.",
    },
  ],
};
