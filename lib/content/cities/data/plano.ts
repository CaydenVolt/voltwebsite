import type { City } from "../types";

export const PLANO: City = {
  slug: "plano",
  stateSlug: "texas",
  name: "Plano",
  title: "Solar in Plano: Oncor, REP buyback and Collin County permits",
  metaTitle: "Solar Companies in Plano: Oncor, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Plano Texas: Oncor delivery with deregulated REP buyback, City of Plano permits, DFW hail reality, and running a solar company in Collin County.",
  answer:
    "Plano is in the DFW metroplex served by Oncor on the wires with residents choosing their own Retail Electric Provider (REP) in deregulated ERCOT. A solar-buyback REP is essential for export credit. City of Plano permits run 2 to 4 weeks, faster than city of Dallas. Class 4 hail-rated panels are standard spec.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "Plano has essentially the same climate as Dallas: 5.2 peak sun hours per day, 232 sunny days per year. Hail is the dominant risk; UL 61730 Class 4 impact-rated panels are the practical standard for Collin County. Summer rooftop temperatures regularly exceed 160F.",
  },
  market: {
    metroPopulationK: 290,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "High",
  },
  utilities: [
    "Oncor Electric Delivery (owns the wires, delivers electricity to all of Plano)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU",
  ],
  permits: {
    office: "City of Plano Building Inspections Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Plano Building Inspections Department typically runs residential solar permits in 2 to 4 weeks, faster than city of Dallas. SolarAPP+ is not accepted. Oncor interconnection post-install typically runs 2 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Plano means working in an affluent Collin County DFW submarket with high customer research expectations. The best Plano operators have templated workflows for solar buyback REP enrolment, use Class 4 hail-rated panels as standard, and handle HOA aesthetic review in master-planned communities (common in Plano, Frisco, and the surrounding Legacy area). Lead costs run $110 to $200 on Google search.",
  faq: [
    {
      q: "Does Plano Texas have net metering?",
      a: "Texas has no statewide net metering mandate. In Plano (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. Switching to a solar buyback REP is essential.",
    },
    {
      q: "How long does a solar permit take in Plano?",
      a: "City of Plano Building Inspections Department typically runs residential solar permits in 2 to 4 weeks, faster than city of Dallas. Oncor interconnection post-install adds 2 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Plano?",
      a: "Plano runs about $2.55 per watt installed for residential, essentially identical to Dallas and Fort Worth, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500.",
    },
    {
      q: "Is solar worth it in Plano?",
      a: "Yes for Plano homes with high electricity use. Payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP. Class 4 hail-rated panels are essential.",
    },
  ],
};
