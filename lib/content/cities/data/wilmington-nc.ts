import type { City } from "../types";

export const WILMINGTON_NC: City = {
  slug: "wilmington-nc",
  stateSlug: "north-carolina",
  name: "Wilmington",
  title: "Solar in Wilmington NC: Duke Energy Progress and coastal climate",
  metaTitle: "Solar Companies in Wilmington NC: Duke Energy Progress, Permits",
  metaDescription:
    "Honest guide to solar in Wilmington North Carolina: Duke Energy Progress Residential Solar Choice, City of Wilmington permits, coastal hurricane exposure, salt air, and running a solar company in New Hanover County.",
  answer:
    "Wilmington NC is served by Duke Energy Progress under HB 589-era Residential Solar Choice. Coastal hurricane exposure requires proper structural attachment; salt air requires marine-grade stainless hardware. Permits run through the City of Wilmington Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 213,
    note: "Wilmington NC gets around 4.9 peak sun hours per day with 213 sunny days per year, strong for solar. Hurricane exposure is real; coastal North Carolina Building Code wind-load design runs 130 to 150 mph depending on specific location. Atlantic coastal salt air requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 300,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Progress (DEP), investor-owned, serves most of New Hanover County including Wilmington",
    "Brunswick Electric Membership Corporation serves parts of surrounding Brunswick County",
  ],
  permits: {
    office: "City of Wilmington Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Wilmington Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Coastal wind-load review adds engineering time for beachfront neighbourhoods. Duke Energy Progress interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Wilmington NC means handling coastal engineering (marine-grade hardware, hurricane wind-load design) and the Duke Energy Progress Residential Solar Choice rate. The best Wilmington operators spec marine-grade stainless racking for coastal zip codes and model winter cloud derating honestly. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Duke Energy Progress serve Wilmington NC?",
      a: "Yes. Duke Energy Progress (DEP) serves most of New Hanover County including Wilmington. This is the eastern-NC subsidiary, distinct from Duke Energy Carolinas which serves Charlotte and western NC.",
    },
    {
      q: "How long does a solar permit take in Wilmington NC?",
      a: "City of Wilmington Development Services typically runs residential solar permits in 3 to 5 weeks. Coastal wind-load review adds time for beachfront neighbourhoods. Duke Energy Progress interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Wilmington NC?",
      a: "Wilmington NC runs about $2.85 per watt installed for residential, slightly higher than inland NC because of coastal engineering, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. North Carolina has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Wilmington NC?",
      a: "Yes for Wilmington homes with suitable roofs. Payback typically runs 10 to 14 years with the federal tax credit. Marine-grade hardware adds 5 to 10 percent to install cost for beachfront neighbourhoods but is essential for 25-year warranty integrity.",
    },
  ],
};
