import type { City } from "../types";

export const BELLEVUE: City = {
  slug: "bellevue",
  stateSlug: "washington",
  name: "Bellevue",
  title: "Solar in Bellevue: Puget Sound Energy and East King County permits",
  metaTitle: "Solar Companies in Bellevue: PSE, Permits",
  metaDescription:
    "Honest guide to solar in Bellevue Washington: Puget Sound Energy retail net metering, City of Bellevue permits, Eastside tech-worker market, and running a solar company in King County.",
  answer:
    "Bellevue is served by Puget Sound Energy (PSE), not Seattle City Light. PSE offers retail-rate net metering under Washington UTC rules. The East King County tech-worker homeowner base is well-informed and research-oriented. Permits run through the City of Bellevue Development Services Department.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 3.7,
    sunnyDays: 155,
    note: "Bellevue has essentially the same climate as Seattle: 3.7 peak sun hours per day, 155 sunny days per year. Pacific Northwest winter cloud cover is substantial. Honest annual yield modelling is essential; summer production is strong but overall payback is longer than Sun Belt peers.",
  },
  market: {
    metroPopulationK: 155,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 150, high: 260 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Puget Sound Energy (PSE), investor-owned, serves most of King County outside Seattle including Bellevue",
    "Seattle City Light serves parts of west Bellevue",
    "Various smaller municipal utilities serve specific areas",
  ],
  permits: {
    office: "City of Bellevue Development Services Department",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Bellevue Development Services Department typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding East King County cities (Redmond, Kirkland, Issaquah, Sammamish) run 3 to 5 weeks typically. PSE interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Bellevue means working with the most technically-informed customer base in the Puget Sound region. Microsoft, Amazon and other tech-sector workers research systems extensively before quoting. The best Bellevue operators lead with technical depth, handle PSE interconnection fluently, and spec premium equipment for the premium customer base. Lead costs run $150 to $260 on Google search.",
  faq: [
    {
      q: "Does PSE have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 100 kW AC under Washington UTC rules. Credits accrue monthly at retail; annual true-up at year-end with excess typically zeroed out.",
    },
    {
      q: "How long does a solar permit take in Bellevue?",
      a: "City of Bellevue Development Services Department typically runs residential solar permits in 3 to 5 weeks. Surrounding East King County cities run 3 to 5 weeks typically. PSE interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Bellevue?",
      a: "Bellevue runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit and the Washington state sales-tax exemption, effective net cost is approximately $15,200.",
    },
    {
      q: "Is solar worth it in Bellevue?",
      a: "The honest answer is yes but with longer payback than most US states: typically 12 to 17 years with the federal tax credit. The combination of modest sun hours and low retail rates stretches the math. The tech-worker customer base often installs solar for energy independence and environmental alignment alongside payback.",
    },
  ],
};
