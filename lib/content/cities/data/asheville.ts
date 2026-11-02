import type { City } from "../types";

export const ASHEVILLE: City = {
  slug: "asheville",
  stateSlug: "north-carolina",
  name: "Asheville",
  title: "Solar in Asheville: Duke Progress and Appalachian mountain climate",
  metaTitle: "Solar Companies in Asheville: Duke Energy Progress, Permits",
  metaDescription:
    "Honest guide to solar in Asheville North Carolina: Duke Energy Progress Residential Solar Choice, Buncombe County permits, Appalachian mountain climate, and running a solar company in western NC.",
  answer:
    "Asheville is served by Duke Energy Progress under HB 589-era Residential Solar Choice. The Appalachian mountain climate brings real winter weather and ridge-shadow production losses. Tree canopy is substantial. Permits run through the City of Asheville Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.4,
    sunnyDays: 198,
    note: "Asheville gets around 4.4 peak sun hours per day with 198 sunny days per year, moderate for solar. Appalachian ridge shadows from surrounding mountains reduce yield for homes on east or west slopes. Dense tree canopy in many Asheville neighbourhoods limits suitable rooftops. Winter snow derating is modest.",
  },
  market: {
    metroPopulationK: 470,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Progress (DEP), investor-owned, serves most of Buncombe County including Asheville",
    "Rutherford Electric Membership Corporation serves parts of surrounding areas",
  ],
  permits: {
    office: "City of Asheville Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Asheville Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Historic district overlay in some older Asheville neighbourhoods adds aesthetic review. Duke Energy Progress interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Asheville means working the western NC mountain market with Duke Progress. The best Asheville operators do honest ridge-shadow and tree-canopy audits as part of the first visit (many quoted roofs do not pencil out), handle Duke Progress interconnection fluently, and understand historic district aesthetic constraints. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Duke Energy Progress serve Asheville?",
      a: "Yes. Duke Energy Progress (DEP) serves most of Buncombe County including Asheville under the HB 589-era Residential Solar Choice time-of-use rate.",
    },
    {
      q: "How does mountain climate affect Asheville solar?",
      a: "Appalachian ridge shadows from surrounding mountains reduce annual yield for homes on east or west slopes. Dense tree canopy throughout many Asheville neighbourhoods further limits suitable rooftops. Honest site audits are essential; satellite shade analysis before quoting saves both parties time.",
    },
    {
      q: "How long does a solar permit take in Asheville?",
      a: "City of Asheville Development Services typically runs residential solar permits in 3 to 5 weeks. Duke Energy Progress interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Asheville?",
      a: "Asheville runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000.",
    },
    {
      q: "Is solar worth it in Asheville?",
      a: "Yes for Asheville homes with unshaded roofs and no ridge shadow. Payback typically runs 11 to 14 years with the federal tax credit, slightly longer than Charlotte or Raleigh because of mountain ridge shadows and tree canopy. Heavily shaded homes often fail to pencil out.",
    },
  ],
};
