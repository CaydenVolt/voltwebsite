import type { City } from "../types";

export const DULUTH: City = {
  slug: "duluth",
  stateSlug: "minnesota",
  name: "Duluth",
  title: "Solar in Duluth: Minnesota Power and Lake Superior winter",
  metaTitle: "Solar Companies in Duluth: Minnesota Power, Permits",
  metaDescription:
    "Honest guide to solar in Duluth Minnesota: Minnesota Power (NOT Xcel), City of Duluth permits, Lake Superior lake-effect winter, and running a solar company in northeastern Minnesota.",
  answer:
    "Duluth is served by Minnesota Power (an ALLETE subsidiary), NOT Xcel Energy. Minnesota Power operates its own net metering programme and is NOT part of Xcel's Solar*Rewards. Lake Superior lake-effect snow is severe. The federal tax credit is the primary incentive.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 183,
    note: "Duluth gets around 3.9 peak sun hours per day with 183 sunny days per year, among the lower in the US given the high latitude. Lake Superior lake-effect snow is severe; Duluth averages 85+ inches of snow annually. Annual production loss from winter snow typically runs 20 to 25 percent.",
  },
  market: {
    metroPopulationK: 290,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 95, high: 175 },
    installerDensity: "Low",
  },
  utilities: [
    "Minnesota Power (ALLETE subsidiary), investor-owned, serves most of northeastern Minnesota including Duluth",
    "Lake Country Power (electric cooperative) serves parts of outlying Carlton and St. Louis counties",
    "Various other co-ops serve rural areas",
  ],
  permits: {
    office: "City of Duluth Construction Services and Inspections",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Duluth Construction Services and Inspections typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Minnesota Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Duluth means working under Minnesota Power (different utility from Xcel in Minneapolis-St. Paul). The best Duluth operators are explicit about Lake Superior lake-effect snow derating in sales conversations, understand that Xcel Solar*Rewards does NOT apply to Minnesota Power customers, and spec steep-pitch roof mounting for snow shedding. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Is Duluth on Xcel Energy?",
      a: "No. Duluth is served by Minnesota Power, an ALLETE subsidiary. Xcel Energy serves Minneapolis and most of western/central Minnesota but not Duluth.",
    },
    {
      q: "Does Solar*Rewards apply to Duluth?",
      a: "No for Minnesota Power customers. Xcel's Solar*Rewards production incentive applies only to Xcel customers; Minnesota Power customers do not qualify. For Duluth residents, the 30 percent federal tax credit is the primary incentive. Minnesota Power has its own, smaller incentive programmes.",
    },
    {
      q: "How much lake-effect snow does Duluth get?",
      a: "Duluth averages 85+ inches of snow annually, driven by Lake Superior lake-effect weather. Annual solar production loss from winter snow typically runs 20 to 25 percent, among the worst in the US.",
    },
    {
      q: "How long does a solar permit take in Duluth?",
      a: "City of Duluth Construction Services and Inspections typically runs residential solar permits in 3 to 5 weeks. Minnesota Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Duluth?",
      a: "Duluth runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,700. Without Solar*Rewards access, net cost is higher than Xcel-territory Minneapolis.",
    },
    {
      q: "Is solar worth it in Duluth?",
      a: "For Duluth homes with unshaded steep-pitch roofs, yes but with longer payback than Minneapolis Xcel customers who get Solar*Rewards: typically 11 to 14 years with the federal tax credit. Lake-effect snow derating stretches payback meaningfully.",
    },
  ],
};
