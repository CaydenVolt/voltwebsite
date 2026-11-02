import type { City } from "../types";

export const FRISCO: City = {
  slug: "frisco",
  stateSlug: "texas",
  name: "Frisco",
  title: "Solar in Frisco: Oncor, REP buyback and north DFW permits",
  metaTitle: "Solar Companies in Frisco: Oncor, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Frisco Texas: Oncor delivery with REP buyback, City of Frisco permits, master-planned HOA review, DFW hail reality, and running a solar company in Collin County.",
  answer:
    "Frisco is a fast-growing north DFW suburb served by Oncor on the wires with deregulated ERCOT REP choice for retail. Master-planned community HOAs dominate the housing stock; aesthetic review adds weeks. Permits run through the Frisco Development Services Department. Hail is the dominant climate risk.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "Frisco has essentially the same climate as Plano and Dallas: 5.2 peak sun hours per day, 232 sunny days per year. Hail is the dominant risk; Class 4 impact-rated panels are the practical standard. Summer heat affects panel output.",
  },
  market: {
    metroPopulationK: 230,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 115, high: 210 },
    installerDensity: "High",
  },
  utilities: [
    "Oncor Electric Delivery (owns the wires, delivers electricity to most of Frisco)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU",
  ],
  permits: {
    office: "Frisco Development Services Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Frisco Development Services Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Master-planned community HOAs (Starwood, Phillips Creek Ranch, others) require aesthetic review that adds 2 to 6 weeks on top of city permits. Oncor interconnection post-install typically runs 2 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Frisco means handling master-planned HOA aesthetic review as a known project step rather than a surprise. The best Frisco operators carry fluency in the common Frisco HOA guidelines (all-black panels, concealed conduit, specific array placement rules), have templated REP enrolment workflows, and spec Class 4 hail-rated panels. Lead costs run $115 to $210 on Google search.",
  faq: [
    {
      q: "Does Frisco Texas have net metering?",
      a: "Texas has no statewide net metering mandate. In Frisco (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. Switching to a solar buyback REP is essential.",
    },
    {
      q: "Do Frisco HOAs allow solar?",
      a: "Yes. Texas state law (Texas Property Code 202.010) prohibits HOAs from unreasonably restricting solar, but they can impose aesthetic conditions: all-black panels, concealed conduit, specific location restrictions. Most Frisco master-planned communities require architectural review approval, adding 2 to 6 weeks to project timelines.",
    },
    {
      q: "How long does a solar permit take in Frisco?",
      a: "Frisco Development Services Department typically runs residential solar permits in 2 to 4 weeks. HOA aesthetic review adds 2 to 6 weeks. Oncor interconnection post-install adds 2 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Frisco?",
      a: "Frisco runs about $2.60 per watt installed for residential, slightly higher than Plano due to HOA finish requirements, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700.",
    },
    {
      q: "Is solar worth it in Frisco?",
      a: "Yes for Frisco homes with high electricity use. Payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP. HOA compliance costs 5 to 10 percent more per project than non-HOA DFW installations.",
    },
  ],
};
