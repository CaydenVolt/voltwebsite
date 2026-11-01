import type { City } from "../types";

export const PITTSBURGH: City = {
  slug: "pittsburgh",
  stateSlug: "pennsylvania",
  name: "Pittsburgh",
  title: "Solar in Pittsburgh: Duquesne Light, SRECs and Allegheny County permits",
  metaTitle: "Solar Companies in Pittsburgh: Duquesne Light, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Pittsburgh: Duquesne Light net metering, Pennsylvania SREC market, City of Pittsburgh permits, winter cloud cover, and running a solar company in Western Pennsylvania.",
  answer:
    "Pittsburgh is served by Duquesne Light (not PECO or FirstEnergy) under Pennsylvania retail net metering. Pennsylvania's AEPS SREC market applies, currently paying residential installations around $30 to $40 per SREC. Winter cloud cover from the Ohio Valley reduces annual production meaningfully. Permits run through the City of Pittsburgh Department of Permits, Licenses and Inspections.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 162,
    note: "Pittsburgh gets around 3.9 peak sun hours per day with 162 sunny days per year, among the lower in the US. Ohio Valley cloud cover reduces November through February production substantially. Winter snow adds 5 to 15 percent annual production loss. Honest annual yield modelling is essential; the strong summer production partially compensates for the heavy winter deficit.",
  },
  market: {
    metroPopulationK: 2320,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duquesne Light, investor-owned, serves Pittsburgh and most of Allegheny and Beaver counties",
    "West Penn Power (FirstEnergy subsidiary) serves parts of surrounding Western PA",
    "Penn Power (FirstEnergy subsidiary) serves parts of New Castle and northern Western PA",
  ],
  permits: {
    office: "City of Pittsburgh Department of Permits, Licenses and Inspections",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Pittsburgh Department of Permits, Licenses and Inspections typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Historic district overlays in neighbourhoods like the North Side, South Side and Lawrenceville add aesthetic review. Allegheny County and surrounding boroughs run their own permits with 2 to 6 week typical timelines. Duquesne Light interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Pittsburgh means working in a market with modest sun hours but reasonable economics from stacked incentives (retail NEM + SRECs + federal credit). The best Pittsburgh operators are explicit about winter cloud-cover production loss in sales conversations, have templated SREC registration workflows, and handle Duquesne Light interconnection fluently (which is well-run compared with some neighbouring utilities). The hilly topography and dense tree canopy in older Pittsburgh neighbourhoods make honest shade audits essential. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Duquesne Light have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 50 kW AC under Pennsylvania PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "What are Pennsylvania SRECs?",
      a: "Pennsylvania's Alternative Energy Portfolio Standards (AEPS) programme creates Solar Renewable Energy Credits (SRECs): one SREC per megawatt-hour of generation. Current PA SRECs trade at approximately $30 to $40 per SREC. A typical 7 kW Pittsburgh system producing 7,000 kWh annually earns 7 SRECs per year worth $210 to $280.",
    },
    {
      q: "How long does a solar permit take in Pittsburgh?",
      a: "City of Pittsburgh Department of Permits, Licenses and Inspections typically runs residential solar permits in 4 to 8 weeks. Historic district overlays add aesthetic review time. Surrounding boroughs and Allegheny County run 2 to 6 weeks typically. Duquesne Light interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Pittsburgh?",
      a: "Pittsburgh runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. SREC income adds roughly $200 to $280 per year on top.",
    },
    {
      q: "Is solar worth it in Pittsburgh?",
      a: "Yes for Pittsburgh homes with unshaded roofs. The combination of Duquesne Light retail NEM, PA SREC income and the federal tax credit makes residential solar payback typically 10 to 13 years. Modest sun hours and winter cloud cover stretch payback compared with Sun Belt peers; honest annual yield modelling matters.",
    },
  ],
};
