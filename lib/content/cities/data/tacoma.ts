import type { City } from "../types";

export const TACOMA: City = {
  slug: "tacoma",
  stateSlug: "washington",
  name: "Tacoma",
  title: "Solar in Tacoma: Tacoma Power municipal and Pierce County permits",
  metaTitle: "Solar Companies in Tacoma: Tacoma Power, Permits",
  metaDescription:
    "Honest guide to solar in Tacoma Washington: Tacoma Power municipal utility, City of Tacoma permits, Puget Sound climate, and running a solar company in Pierce County.",
  answer:
    "Tacoma is served by Tacoma Power, a municipal utility (NOT Seattle City Light or PSE). Tacoma Power offers net metering for residential solar. Low retail rates (approximately $0.11 per kWh) and Puget Sound winter cloud cover stretch payback compared with other US markets. Permits run through the City of Tacoma Planning and Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 3.6,
    sunnyDays: 149,
    note: "Tacoma has essentially the same climate as Seattle: 3.6 peak sun hours per day, 149 sunny days per year. Pacific Northwest winter cloud cover from October through April reduces annual production meaningfully. Honest annual yield modelling matters.",
  },
  market: {
    metroPopulationK: 920,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 120, high: 210 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Tacoma Power, municipal utility, serves most of Tacoma",
    "Puget Sound Energy serves parts of surrounding Pierce County outside Tacoma Power territory",
    "Various smaller municipal utilities and cooperatives serve specific areas",
  ],
  permits: {
    office: "City of Tacoma Planning and Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Tacoma Planning and Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Pierce County jurisdictions run 3 to 5 weeks typically. Tacoma Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Tacoma means working under Tacoma Power municipal net metering (different from Seattle City Light or PSE). The best Tacoma operators handle Tacoma Power interconnection fluently and are explicit about Pacific Northwest winter cloud derating. Lead costs run $120 to $210 on Google search.",
  faq: [
    {
      q: "Does Tacoma Power have net metering?",
      a: "Yes. Tacoma Power operates net metering for residential solar systems up to 100 kW AC. Credits accrue monthly at retail; annual true-up at year-end with excess typically zeroed out.",
    },
    {
      q: "How long does a solar permit take in Tacoma?",
      a: "City of Tacoma Planning and Development Services typically runs residential solar permits in 3 to 5 weeks. Tacoma Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Tacoma?",
      a: "Tacoma runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit and the Washington state sales-tax exemption, effective net cost is approximately $14,700.",
    },
    {
      q: "Is solar worth it in Tacoma?",
      a: "The honest answer is yes but with longer payback than most US states: typically 12 to 18 years with the federal tax credit. The combination of modest sun hours, low electric rates and Puget Sound winter cloud cover stretches the math. Homeowners who buy solar in Tacoma are often motivated by energy independence alongside pure payback.",
    },
  ],
};
