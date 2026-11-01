import type { City } from "../types";

export const DETROIT: City = {
  slug: "detroit",
  stateSlug: "michigan",
  name: "Detroit",
  title: "Solar in Detroit: DTE Energy and Distributed Generation tariff",
  metaTitle: "Solar Companies in Detroit: DTE, DG Tariff, Permits",
  metaDescription:
    "Honest guide to solar in Detroit: DTE Energy's Distributed Generation tariff (replaced retail NEM in 2018), City of Detroit permits, and running a solar company in Southeast Michigan.",
  answer:
    "Detroit is served by DTE Energy under Michigan's Distributed Generation (DG) tariff, which replaced retail net metering in 2018. Residential solar exports credit at the DTE outflow rate (around $0.08 per kWh in 2026, below the inflow rate of about $0.19 per kWh), so system sizing precision and self-consumption matter more than they did under retail NEM. Permits run through City of Detroit Buildings, Safety Engineering and Environmental Department (BSEED).",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.0,
    sunnyDays: 185,
    note: "Detroit gets around 4.0 peak sun hours per day with 185 sunny days per year, moderate for solar. Winter snow is a real factor; snow accumulation on panels during December through February reduces annual production by 10 to 20 percent for most Detroit residential installations. Great Lakes-effect cloud cover reduces late-autumn and early-winter production more than most installers model.",
  },
  market: {
    metroPopulationK: 4320,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "DTE Energy, investor-owned, serves most of Southeast Michigan including Detroit",
    "Consumers Energy serves parts of outlying counties in the Detroit metro",
    "Various municipal utilities (Lansing BWL in Lansing, Wyandotte Municipal Services) serve specific pockets",
  ],
  permits: {
    office: "City of Detroit Buildings, Safety Engineering and Environmental Department (BSEED)",
    turnaroundWeeks: "4 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Detroit BSEED typically runs residential solar permits in 4 to 6 weeks. SolarAPP+ is not accepted. Surrounding Wayne, Oakland and Macomb county jurisdictions run their own permits with 3 to 5 week typical timelines. DTE Energy interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Detroit means operating under Michigan's DG tariff, where oversized systems that export heavily during midday effectively give power away at $0.08 per kWh. The best Detroit operators size systems to annual self-consumption, model winter snow derating honestly, and have templated DTE interconnection workflows. Multi-residential and investor-owned-property installations are a growing niche in Detroit as housing stock recovery continues. Lead costs run $90 to $170 on Google search, among the lowest in the US because installer competition is thin.",
  faq: [
    {
      q: "Does DTE Energy have net metering?",
      a: "Not retail-rate 1-for-1 for new customers. Michigan's 2018 Distributed Generation (DG) tariff replaced retail NEM. DTE residential solar customers see two separate rates: inflow (consumption) at around $0.19 per kWh and outflow (export) at around $0.08 per kWh. The 11 cent gap between inflow and outflow rates makes self-consumption sizing matter substantially more than under retail NEM. Pre-2018 customers are grandfathered on retail NEM.",
    },
    {
      q: "How long does a solar permit take in Detroit?",
      a: "City of Detroit BSEED typically runs residential solar permits in 4 to 6 weeks. Surrounding Wayne, Oakland and Macomb county jurisdictions run 3 to 5 weeks typically. DTE Energy interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Detroit?",
      a: "Detroit runs about $2.95 per watt installed for residential, higher than some Midwest peers because of the labour market, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. Michigan has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Detroit?",
      a: "For Detroit homes with high electricity use and south-facing roofs, yes: payback typically runs 10 to 14 years with the federal tax credit, longer than Sun Belt peers because of winter snow derating and the DG outflow/inflow rate gap. Right-sized systems that match annual consumption pencil out better than oversized ones.",
    },
  ],
};
