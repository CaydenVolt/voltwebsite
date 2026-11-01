import type { City } from "../types";

export const ARLINGTON: City = {
  slug: "arlington",
  stateSlug: "texas",
  name: "Arlington",
  title: "Solar in Arlington: Oncor, REP buyback and Tarrant County permits",
  metaTitle: "Solar Companies in Arlington TX: Oncor, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Arlington Texas: Oncor delivery with deregulated REP buyback, City of Arlington permits, Tarrant County hail reality, and running a solar company in Arlington.",
  answer:
    "Arlington is in the DFW metroplex served by Oncor on the wires with residents choosing their own Retail Electric Provider (REP) in the deregulated ERCOT market. The economics mirror Dallas and Fort Worth: a solar-buyback REP is essential for export credit. City of Arlington Public Works permits run 2 to 4 weeks typically.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "Arlington has essentially the same climate as Dallas and Fort Worth: 5.2 peak sun hours per day, 232 sunny days per year. Hail is the dominant risk; UL 61730 Class 4 impact-rated panels are the practical standard for Tarrant County.",
  },
  market: {
    metroPopulationK: 395,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "High",
  },
  utilities: [
    "Oncor Electric Delivery (owns the wires, delivers electricity to all of Arlington)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU",
  ],
  permits: {
    office: "City of Arlington Public Works and Transportation (Building Inspection)",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Arlington typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Oncor interconnection post-install typically runs 2 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Arlington means working in a DFW metroplex submarket where the economics match Dallas and Fort Worth. The best Arlington operators have templated workflows for solar buyback REP enrolment, use Class 4 hail-rated panels as standard, and handle Oncor interconnection fluently. Lead costs run $110 to $200 on Google search, moderate for Texas. The AT&T Stadium and Globe Life Field districts create unique small-commercial opportunities alongside residential.",
  faq: [
    {
      q: "Does Arlington Texas have net metering?",
      a: "Texas has no statewide net metering mandate. In Arlington (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. A handful do (Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU with its specific solar plan). Switching to a solar buyback REP is essential.",
    },
    {
      q: "How long does a solar permit take in Arlington?",
      a: "City of Arlington Public Works typically runs residential solar permits in 2 to 4 weeks, faster than city of Dallas. Oncor interconnection post-install adds 2 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Arlington?",
      a: "Arlington runs about $2.55 per watt installed for residential, essentially identical to Dallas and Fort Worth, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500. Hail-rated Class 4 panels are standard spec.",
    },
    {
      q: "Is solar worth it in Arlington?",
      a: "Yes for Arlington homes with high electricity use. Payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP, similar to the rest of DFW. The dominant technical consideration remains Class 4 hail-rated panels; cheap non-rated panels regularly fail in North Texas hail events.",
    },
  ],
};
