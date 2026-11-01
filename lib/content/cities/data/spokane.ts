import type { City } from "../types";

export const SPOKANE: City = {
  slug: "spokane",
  stateSlug: "washington",
  name: "Spokane",
  title: "Solar in Spokane: Avista Utilities and Inland Northwest climate",
  metaTitle: "Solar Companies in Spokane: Avista, Permits",
  metaDescription:
    "Honest guide to solar in Spokane Washington: Avista Utilities retail net metering, City of Spokane permits, sunnier Inland Northwest climate, and running a solar company in eastern Washington.",
  answer:
    "Spokane is served by Avista Utilities (not Seattle City Light or Puget Sound Energy) under retail-rate net metering. The Inland Northwest climate is substantially sunnier than Seattle, so the solar economics work meaningfully better than Puget Sound. Permits run through the City of Spokane Development Services Center.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 171,
    note: "Spokane gets around 4.5 peak sun hours per day with 171 sunny days per year, substantially better than Seattle (3.6 peak sun hours). Inland Northwest climate has colder winters but drier summers; panel heat derating is less severe than Phoenix. Winter snow derating is modest for most installations.",
  },
  market: {
    metroPopulationK: 580,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Avista Utilities, investor-owned, serves most of the Spokane metro and eastern Washington",
    "Modern Electric Water Company serves Millwood (municipal)",
    "Various electric cooperatives (Inland Power & Light, others) serve outlying rural areas",
  ],
  permits: {
    office: "City of Spokane Development Services Center",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Spokane Development Services Center typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Spokane County jurisdictions (Spokane Valley, Liberty Lake) run their own permits with 2 to 4 week typical timelines. Avista Utilities interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Spokane means working in a market where the Inland Northwest climate makes the economics meaningfully better than Puget Sound (sunnier summers, more reasonable annual yield). The best Spokane operators handle Avista Utilities interconnection fluently, model winter weather honestly (snow and extended cloud cover), and understand the state sales-tax exemption. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Avista have net metering?",
      a: "Yes, full retail net metering for residential solar systems up to 100 kW AC under Washington UTC rules. Credits accrue monthly at retail; annual true-up at year-end with excess typically zeroed out.",
    },
    {
      q: "Is solar better in Spokane than Seattle?",
      a: "Yes meaningfully. Spokane gets around 4.5 peak sun hours per day vs Seattle's 3.6. Annual yield for a Spokane 7 kW system runs around 8,000 to 9,000 kWh, compared with 6,500 to 7,500 kWh in Seattle. The Inland Northwest's sunnier summers more than compensate for the colder winters.",
    },
    {
      q: "How long does a solar permit take in Spokane?",
      a: "City of Spokane Development Services Center typically runs residential solar permits in 3 to 5 weeks. Surrounding Spokane County jurisdictions run 2 to 4 weeks typically. Avista Utilities interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Spokane?",
      a: "Spokane runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit and the Washington state sales-tax exemption, effective net cost is approximately $14,700. Washington has no state income tax credit for solar.",
    },
    {
      q: "Is solar worth it in Spokane?",
      a: "Yes for most Spokane homes with suitable roofs. The combination of Avista retail NEM, sunnier climate than Puget Sound, and the 30 percent federal credit makes residential solar payback typically 10 to 13 years, substantially better than Seattle. Still longer than Sun Belt peers because of Washington's low retail rates.",
    },
  ],
};
