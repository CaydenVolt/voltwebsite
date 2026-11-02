import type { City } from "../types";

export const MCKINNEY: City = {
  slug: "mckinney",
  stateSlug: "texas",
  name: "McKinney",
  title: "Solar in McKinney: Oncor, REP buyback and Collin County permits",
  metaTitle: "Solar Companies in McKinney: Oncor, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in McKinney Texas: Oncor delivery with REP buyback, City of McKinney permits, master-planned HOAs, DFW hail reality, and running a solar company in Collin County.",
  answer:
    "McKinney is a fast-growing Collin County suburb north of Dallas, served by Oncor on the wires with deregulated ERCOT REP choice for retail. A solar-buyback REP is essential for export credit. HOA-dense master-planned communities dominate. Permits run through the City of McKinney Building Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "McKinney has essentially the same climate as Dallas and Plano: 5.2 peak sun hours per day, 232 sunny days per year. Hail is the dominant risk; UL 61730 Class 4 impact-rated panels are the practical standard for Collin County.",
  },
  market: {
    metroPopulationK: 200,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 115, high: 210 },
    installerDensity: "High",
  },
  utilities: [
    "Oncor Electric Delivery (owns the wires, delivers electricity to most of McKinney)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU",
  ],
  permits: {
    office: "City of McKinney Building Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of McKinney Building Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Master-planned community HOAs (Craig Ranch, Stonebridge Ranch, Trinity Falls, others) require aesthetic review that adds 2 to 6 weeks. Oncor interconnection post-install typically runs 2 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in McKinney means handling master-planned HOA aesthetic review in one of the fastest-growing Collin County suburbs. The best McKinney operators have templated workflows for solar buyback REP enrolment, carry Class 4 hail-rated panels as standard, and handle common master-planned community HOA requirements fluently. Lead costs run $115 to $210 on Google search.",
  faq: [
    {
      q: "Does McKinney have net metering?",
      a: "Texas has no statewide net metering mandate. In McKinney (deregulated ERCOT market), solar exports are credited only if your REP offers a solar buyback plan. Switching to a solar buyback REP is essential.",
    },
    {
      q: "Do McKinney HOAs allow solar?",
      a: "Yes. Texas state law (Texas Property Code 202.010) prohibits HOAs from unreasonably restricting solar, but they can impose aesthetic conditions. Most McKinney master-planned communities require architectural review approval, adding 2 to 6 weeks.",
    },
    {
      q: "How long does a solar permit take in McKinney?",
      a: "City of McKinney Building Services typically runs residential solar permits in 2 to 4 weeks. HOA aesthetic review adds 2 to 6 weeks. Oncor interconnection post-install adds 2 to 5 weeks.",
    },
    {
      q: "How much does solar cost in McKinney?",
      a: "McKinney runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700. Class 4 hail-rated panels are standard spec.",
    },
    {
      q: "Is solar worth it in McKinney?",
      a: "Yes for McKinney homes with high electricity use. Payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP, similar to the rest of Collin County.",
    },
  ],
};
