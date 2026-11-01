import type { City } from "../types";

export const ALBUQUERQUE: City = {
  slug: "albuquerque",
  stateSlug: "new-mexico",
  name: "Albuquerque",
  title: "Solar in Albuquerque: PNM, state tax credit and desert climate",
  metaTitle: "Solar Companies in Albuquerque: PNM, Tax Credit, Permits",
  metaDescription:
    "Honest guide to solar in Albuquerque: Public Service Company of New Mexico (PNM) net metering, 10 percent state solar tax credit, City of Albuquerque permits, and running a solar company in New Mexico.",
  answer:
    "Albuquerque is served by Public Service Company of New Mexico (PNM) under retail net metering. New Mexico's 10 percent state solar tax credit (capped at $6,000) stacks with the 30 percent federal credit. Excellent sun hours (over 5.9 per day) and the stacked incentives make Albuquerque among the stronger solar economies in the Southwest.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.9,
    sunnyDays: 278,
    note: "Albuquerque gets around 5.9 peak sun hours per day with 278 sunny days per year, excellent for solar. High-desert altitude (around 5,300 feet) delivers 10 to 15 percent higher per-panel output than sea-level sites. Summer heat is moderate compared to Phoenix or Las Vegas; monsoon-season afternoon thunderstorms reduce summer-afternoon production more than the sunny-days count suggests. Dust in dry seasons reduces output 5 to 10 percent between infrequent rain events.",
  },
  market: {
    metroPopulationK: 915,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Public Service Company of New Mexico (PNM), investor-owned, serves most of the Albuquerque metro",
    "El Paso Electric serves parts of southern New Mexico (not Albuquerque proper)",
    "Various rural electric cooperatives (Mora-San Miguel Electric Cooperative, Jemez Mountains Electric Cooperative) serve outlying areas",
  ],
  permits: {
    office: "City of Albuquerque Planning Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Albuquerque Planning Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Bernalillo County unincorporated areas run through the county with similar timelines. Rio Rancho, Los Lunas and other surrounding cities each have their own permit offices with 2 to 4 week typical timelines. PNM interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Albuquerque means working in a market with excellent sun hours, stacked tax credits and moderate installer competition. The best Albuquerque operators have templated New Mexico state solar tax credit workflows (10 percent capped at $6,000, applied against state income tax), fluent PNM interconnection, and spec equipment for the altitude and dust conditions. Lead costs run $100 to $180 on Google search, among the lowest in the US because national installer competition is thin here.",
  faq: [
    {
      q: "Does PNM have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 10 kW AC (larger systems under a modified export tariff). Credits accrue monthly at retail; annual true-up at year-end with excess credited at the utility's avoided cost rate.",
    },
    {
      q: "What is the New Mexico state solar tax credit?",
      a: "New Mexico offers a 10 percent state income tax credit on residential solar systems, capped at $6,000 per installation. The credit is non-refundable but carries forward for up to 10 years. Stacks with the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      q: "How long does a solar permit take in Albuquerque?",
      a: "City of Albuquerque Planning Department typically runs residential solar permits in 2 to 4 weeks. Bernalillo County, Rio Rancho and Los Lunas each run 2 to 4 weeks typically. PNM interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Albuquerque?",
      a: "Albuquerque runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit and the 10 percent NM state tax credit (capped $6,000), effective net cost is often $10,000 to $12,500.",
    },
    {
      q: "Is solar worth it in Albuquerque?",
      a: "Yes substantially. The combination of PNM retail net metering, excellent sun hours (over 5.9 per day with altitude boost), the 10 percent state tax credit, and the 30 percent federal credit makes residential solar payback typically 7 to 10 years. Among the stronger payback economies in the Southwest.",
    },
  ],
};
