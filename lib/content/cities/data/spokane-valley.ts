import type { City } from "../types";

export const SPOKANE_VALLEY: City = {
  slug: "spokane-valley",
  stateSlug: "washington",
  name: "Spokane Valley",
  title: "Solar in Spokane Valley: Avista and Inland Northwest climate",
  metaTitle: "Solar Companies in Spokane Valley: Avista, Permits",
  metaDescription:
    "Honest guide to solar in Spokane Valley Washington: Avista Utilities retail net metering, City of Spokane Valley permits, Inland Northwest climate, and running a solar company in eastern Washington.",
  answer:
    "Spokane Valley is served by Avista Utilities under full retail net metering, same as the city of Spokane. The Inland Northwest climate is substantially better for solar than Puget Sound (sunnier summers). Permits run through the City of Spokane Valley Permit Center with slightly faster turnaround than the city of Spokane.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 173,
    note: "Spokane Valley has essentially the same climate as Spokane: 4.6 peak sun hours per day, 173 sunny days per year. The Inland Northwest is substantially sunnier than Puget Sound. Winter snow derating is modest.",
  },
  market: {
    metroPopulationK: 110,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Avista Utilities, investor-owned, serves most of Spokane Valley",
    "Modern Electric Water Company serves parts of Millwood (adjacent to Spokane Valley)",
    "Various electric cooperatives serve outlying rural areas",
  ],
  permits: {
    office: "City of Spokane Valley Permit Center",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Spokane Valley Permit Center typically runs residential solar permits in 2 to 4 weeks, slightly faster than City of Spokane. SolarAPP+ is not accepted. Avista Utilities interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Spokane Valley means working in a smaller market than Spokane proper with similar Avista economics. The best Spokane Valley operators handle Avista interconnection fluently and understand Washington's state sales-tax exemption. Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does Avista serve Spokane Valley?",
      a: "Yes. Avista Utilities serves most of Spokane Valley under full retail net metering, same tariff structure as Spokane proper. Modern Electric Water Company serves adjacent Millwood (municipal).",
    },
    {
      q: "How long does a solar permit take in Spokane Valley?",
      a: "City of Spokane Valley Permit Center typically runs residential solar permits in 2 to 4 weeks, slightly faster than City of Spokane. Avista Utilities interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Spokane Valley?",
      a: "Spokane Valley runs about $2.95 per watt installed for residential, essentially identical to Spokane, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit and the Washington state sales-tax exemption, effective net cost is approximately $14,500.",
    },
    {
      q: "Is solar worth it in Spokane Valley?",
      a: "Yes for most Spokane Valley homes with suitable roofs. Same economics as Spokane: payback typically runs 10 to 13 years with the federal tax credit, substantially better than Seattle because of sunnier Inland Northwest climate.",
    },
  ],
};
