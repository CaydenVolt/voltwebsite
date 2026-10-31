import type { City } from "../types";

export const RENO: City = {
  slug: "reno",
  stateSlug: "nevada",
  name: "Reno",
  title: "Solar in Reno: NV Energy, high desert climate and Washoe permits",
  metaTitle: "Solar Companies in Reno: NV Energy, Permits, Washoe",
  metaDescription:
    "Honest guide to solar in Reno: NV Energy's tiered export credit, City of Reno and Washoe County permits, high desert climate factors, and running a solar company in Northern Nevada.",
  answer:
    "Reno is served by the same utility as Las Vegas (NV Energy) but has very different climate and permit dynamics. The high desert climate gives Reno fewer peak sun hours than southern Nevada (around 5.6 per day) but less heat derating. Winter snow is a real production factor. Washoe County permits accept SolarAPP+ for standard residential installations.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 252,
    note: "Reno gets around 5.6 peak sun hours per day with 252 sunny days per year, strong for solar. Winter snow is a real factor; the Sierra Nevada weather patterns bring significant snowfall to Reno-area roofs in January and February, which reduces annual production by 5 to 15 percent on most residential installations. Summer temperatures are moderate compared to Las Vegas, so panel heat derating is less severe.",
  },
  market: {
    metroPopulationK: 500,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "NV Energy (Sierra Pacific Power subsidiary in northern NV), investor-owned, serves all of the Reno-Sparks metro",
    "Plumas-Sierra Rural Electric Cooperative serves outlying areas",
  ],
  permits: {
    office: "City of Reno Permits, plus Washoe County Community Services for county residents",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "Washoe County Community Services accepts SolarAPP+ for standard residential installations. City of Reno Permits runs 2 to 4 weeks typically. Sparks and surrounding cities run their own permits with 2 to 4 week typical timelines. NV Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Reno means working in a smaller market than Las Vegas with less installer competition and lower lead costs. The practical differences from southern Nevada are the winter snow derating conversation (which Las Vegas installers do not need to have) and the moderate summer climate (less panel heat concern). The best Reno operators handle both the City of Reno and Washoe County permit paths fluently and model winter snow loss honestly. Lead costs run $110 to $200.",
  faq: [
    {
      q: "Does NV Energy serve Reno?",
      a: "Yes, through its northern Nevada subsidiary (Sierra Pacific Power). The utility operates under the same Nevada SB 358 tiered net metering programme that applies in Las Vegas. New installations as of 2026 are at Tier 5 or beyond: exports credit at approximately 75 percent of retail.",
    },
    {
      q: "How long does a solar permit take in Reno?",
      a: "Washoe County Community Services accepts SolarAPP+ for standard residential installations, often approving qualifying systems in a day or two. City of Reno Permits runs 2 to 4 weeks typically. NV Energy interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How does winter snow affect Reno solar?",
      a: "Snow accumulation on panels during January and February typically reduces annual production by 5 to 15 percent for Reno residential installations. South-facing panels at steeper pitches shed snow faster; low-angle flat installs retain snow longer. Honest sales conversations model winter snow loss into annual yield.",
    },
    {
      q: "How much does solar cost in Reno?",
      a: "Reno runs about $2.75 per watt installed for residential, slightly higher than Las Vegas, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500.",
    },
    {
      q: "Is solar worth it in Reno?",
      a: "Yes for most Reno homes with suitable roofs. Payback typically runs 10 to 13 years with the federal tax credit, slightly longer than Las Vegas because of winter snow production loss. Right-sized systems that match annual self-consumption pencil out better than oversized systems that export heavily during summer midday.",
    },
  ],
};
