import type { City } from "../types";

export const PORTLAND_ME: City = {
  slug: "portland-me",
  stateSlug: "maine",
  name: "Portland",
  title: "Solar in Portland Maine: CMP, Net Energy Billing and coastal climate",
  metaTitle: "Solar Companies in Portland Maine: CMP, NEB, Permits",
  metaDescription:
    "Honest guide to solar in Portland Maine: Central Maine Power Net Energy Billing, Portland permits, coastal climate factors, and running a solar company in southern Maine.",
  answer:
    "Portland Maine is served by Central Maine Power (CMP) under the Net Energy Billing (NEB) programme, which the 2024 restructuring reshaped. Residential exports now credit at approximately 70 to 85 percent of retail. Pair the credits with high Maine retail rates ($0.26 per kWh), modest state incentives, and the federal tax credit for workable economics despite winter snow derating.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 199,
    note: "Portland Maine gets around 4.1 peak sun hours per day with 199 sunny days per year, moderate for solar. Winter snow derating is substantial: annual production loss 15 to 25 percent for most residential installations. Coastal salt air requires marine-grade stainless hardware for installations within 1 mile of the Atlantic.",
  },
  market: {
    metroPopulationK: 540,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Central Maine Power (CMP, Avangrid subsidiary), investor-owned, serves most of southern Maine including Portland",
    "Various municipal utilities (Kennebunk Light & Power District, others) serve specific coastal cities",
  ],
  permits: {
    office: "City of Portland Permitting and Inspections",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Portland Permitting and Inspections typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Cumberland and York county towns run their own permits with 2 to 4 week typical timelines. CMP interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Portland Maine means working under the 2024 NEB structure, which stretched new-installation payback compared with pre-2024. The best Portland operators are explicit about the current NEB credit rate (70 to 85 percent of retail) in sales conversations, use marine-grade hardware for coastal installations, and model winter snow derating honestly. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does CMP have net metering in Portland Maine?",
      a: "Not retail-rate 1-for-1. CMP operates under Maine's Net Energy Billing (NEB) programme, which the 2024 restructuring reshaped: new residential installations receive credits at approximately 70 to 85 percent of retail. Pre-2024 customers are grandfathered on the earlier NEB rate for 20 years.",
    },
    {
      q: "How long does a solar permit take in Portland Maine?",
      a: "City of Portland Permitting and Inspections typically runs residential solar permits in 3 to 5 weeks. Surrounding Cumberland and York county towns run 2 to 4 weeks typically. CMP interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Portland Maine?",
      a: "Portland Maine runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,700. Maine has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Portland Maine?",
      a: "Yes for most Portland homes with suitable roofs. The combination of high retail rates (around $0.26 per kWh), NEB credits at 70 to 85 percent of retail, and the 30 percent federal credit makes residential solar payback typically 9 to 13 years. Winter snow derating stretches payback; honest annual yield modelling matters.",
    },
  ],
};
