import type { City } from "../types";

export const EUGENE: City = {
  slug: "eugene",
  stateSlug: "oregon",
  name: "Eugene",
  title: "Solar in Eugene: EWEB municipal and Willamette Valley climate",
  metaTitle: "Solar Companies in Eugene: EWEB, Permits",
  metaDescription:
    "Honest guide to solar in Eugene Oregon: Eugene Water & Electric Board (EWEB) municipal utility, City of Eugene permits, Willamette Valley climate, and running a solar company in Lane County.",
  answer:
    "Eugene is served by Eugene Water & Electric Board (EWEB), a municipal utility (NOT Portland General Electric or Pacific Power). EWEB offers net metering under its own rules. Energy Trust of Oregon does NOT apply to EWEB customers (ETO is funded by PGE and Pacific Power bills). Permits run through the City of Eugene Permit and Information Center.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.0,
    sunnyDays: 155,
    note: "Eugene gets around 4.0 peak sun hours per day with 155 sunny days per year, among the lower in the US. Willamette Valley winter cloud cover is substantial; November through February production is 60 to 70 percent lower than summer. Honest annual yield modelling is essential.",
  },
  market: {
    metroPopulationK: 390,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 115, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Eugene Water & Electric Board (EWEB), municipal utility, serves most of Eugene",
    "Pacific Power (PacifiCorp subsidiary) serves parts of surrounding Lane County outside EWEB",
    "Emerald People's Utility District serves parts of surrounding areas",
  ],
  permits: {
    office: "City of Eugene Permit and Information Center",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Eugene Permit and Information Center typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Surrounding Lane County unincorporated runs 2 to 4 weeks typically. EWEB interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Eugene means working under EWEB municipal net metering, where Energy Trust of Oregon does NOT apply (ETO funds come from PGE and Pacific Power bills). The best Eugene operators are explicit about the ETO gap in sales conversations, handle EWEB interconnection fluently, and model heavy winter cloud derating honestly. Lead costs run $115 to $200 on Google search.",
  faq: [
    {
      q: "Does EWEB have net metering?",
      a: "Yes, EWEB operates its own net metering programme for residential solar customers. Credits accrue monthly at retail; annual true-up at year-end. EWEB is a municipal utility distinct from PGE and Pacific Power.",
    },
    {
      q: "Does Energy Trust of Oregon apply in Eugene?",
      a: "No for EWEB customers. ETO is funded by a public purpose charge on PGE and Pacific Power bills; EWEB customers do not pay into or benefit from ETO. For EWEB residents, the 30 percent federal tax credit is the primary incentive. ODOE Residential Solar + Storage rebate may still apply.",
    },
    {
      q: "How long does a solar permit take in Eugene?",
      a: "City of Eugene Permit and Information Center typically runs residential solar permits in 2 to 4 weeks. EWEB interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Eugene?",
      a: "Eugene runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. Without ETO rebate access, the net cost is higher than PGE-territory Portland.",
    },
    {
      q: "Is solar worth it in Eugene?",
      a: "For Eugene homes with suitable roofs, yes but with longer payback than PGE-territory Portland because ETO does not apply: typically 11 to 14 years with the federal tax credit under EWEB. Honest Willamette Valley cloud derating conversations matter.",
    },
  ],
};
