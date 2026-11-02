import type { City } from "../types";

export const SUGAR_LAND: City = {
  slug: "sugar-land",
  stateSlug: "texas",
  name: "Sugar Land",
  title: "Solar in Sugar Land: CenterPoint, REP buyback and master-planned HOAs",
  metaTitle: "Solar Companies in Sugar Land: CenterPoint, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Sugar Land Texas: CenterPoint delivery with REP buyback, City of Sugar Land permits, master-planned HOA review, and running a solar company in Fort Bend County.",
  answer:
    "Sugar Land is a Houston metro suburb served by CenterPoint on the wires with deregulated ERCOT REP choice for retail. A solar-buyback REP is essential. Master-planned community HOAs dominate the housing stock; aesthetic review adds weeks. Permits run through the City of Sugar Land Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 204,
    note: "Sugar Land has essentially the same climate as Houston: 4.9 peak sun hours per day, 204 sunny days per year. Hurricane and tropical storm exposure is real; Texas Building Code wind-load design in Fort Bend County runs 130 to 140 mph. Summer heat affects panel output; humidity requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 115,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 120, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "CenterPoint Energy (owns the wires, delivers electricity to all of Sugar Land)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, Reliant",
  ],
  permits: {
    office: "City of Sugar Land Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Sugar Land Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Master-planned community HOAs (Riverstone, Telfair, Greatwood, others) require aesthetic review that adds 2 to 6 weeks. CenterPoint interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Sugar Land means handling master-planned HOA aesthetic review as a known project step. The best Sugar Land operators carry fluency in the common HOA guidelines, have templated REP enrolment workflows, and spec hurricane-rated attachment hardware. The high-income Fort Bend County customer base closes storage-attached systems and premium equipment packages at higher rates than the Houston metro average. Lead costs run $120 to $220 on Google search.",
  faq: [
    {
      q: "Does Sugar Land Texas have net metering?",
      a: "Texas has no statewide net metering mandate. In Sugar Land (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. Switching to a solar buyback REP is essential.",
    },
    {
      q: "Do Sugar Land HOAs allow solar?",
      a: "Yes. Texas state law (Texas Property Code 202.010) prohibits HOAs from unreasonably restricting solar, but they can impose aesthetic conditions. Most Sugar Land master-planned communities require architectural review approval, adding 2 to 6 weeks.",
    },
    {
      q: "How long does a solar permit take in Sugar Land?",
      a: "City of Sugar Land Development Services typically runs residential solar permits in 2 to 4 weeks. HOA aesthetic review adds 2 to 6 weeks. CenterPoint interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Sugar Land?",
      a: "Sugar Land runs about $2.65 per watt installed for residential, slightly higher than central Houston because of HOA finish requirements, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Sugar Land?",
      a: "Yes for Sugar Land homes with high electricity use. Payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP, similar to the rest of Houston metro.",
    },
  ],
};
