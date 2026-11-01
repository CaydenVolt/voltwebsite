import type { City } from "../types";

export const HARTFORD: City = {
  slug: "hartford",
  stateSlug: "connecticut",
  name: "Hartford",
  title: "Solar in Hartford: Eversource CT, RRES tariff and city permits",
  metaTitle: "Solar Companies in Hartford: Eversource CT, RRES, Permits",
  metaDescription:
    "Honest guide to solar in Hartford: Eversource Connecticut's Residential Renewable Energy Solutions (RRES) tariff, City of Hartford permits, and running a solar company in central Connecticut.",
  answer:
    "Hartford is served by Eversource Connecticut under the RRES tariff that replaced retail net metering in 2022. Homeowners pick Buy-All (all generation sold at tariff rate, highest for storage-attached) or Netting (consume plus retail credit) at install. High retail rates (around $0.33 per kWh) keep the economics working across both options. Permits run through the Hartford Department of Development Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 198,
    note: "Hartford gets around 4.3 peak sun hours per day with 198 sunny days per year, moderate for solar. Winter snow derating typically reduces annual production by 10 to 20 percent. Summer thunderstorms reduce afternoon production more than the sunny-days count suggests.",
  },
  market: {
    metroPopulationK: 1200,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Eversource Energy, investor-owned, serves most of the Hartford metro",
    "Various municipal utilities (Norwich Public Utilities, Groton Utilities) serve specific cities outside the Hartford metro",
  ],
  permits: {
    office: "Hartford Department of Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Hartford Department of Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hartford County towns (West Hartford, Manchester, East Hartford, Glastonbury) run their own permits with 2 to 5 week typical timelines. Eversource interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Hartford means helping customers navigate the Buy-All vs Netting choice under RRES. Storage-attached Buy-All systems earn the highest tariff rate (around $0.30 per kWh for 20 years), while Netting works for homes with high summer electric use. The best Hartford operators run both pencil-outs before quoting. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Does Hartford have net metering?",
      a: "Not retail-rate for new customers since 2022. Hartford is served by Eversource CT under the Residential Renewable Energy Solutions (RRES) programme: customers choose Buy-All (all generation sold at a tariff rate, 20-year contract) or Netting (consume plus retail credit with annual avoided-cost true-up).",
    },
    {
      q: "What is the RRES tariff rate in Hartford?",
      a: "RRES tariff rates are set by PURA quarterly. Current rates are approximately $0.30 per kWh for storage-attached Buy-All (20-year contract), around $0.20 per kWh for solar-only Buy-All, and retail-rate credit under Netting. Confirm current rates with PURA before quoting.",
    },
    {
      q: "How long does a solar permit take in Hartford?",
      a: "Hartford Department of Development Services typically runs residential solar permits in 3 to 5 weeks. Surrounding Hartford County towns run 2 to 5 weeks typically. Eversource interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Hartford?",
      a: "Hartford runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit, net cost is approximately $15,200.",
    },
    {
      q: "Is solar worth it in Hartford?",
      a: "Yes for most Hartford homes with suitable roofs. The combination of high retail rates (around $0.33 per kWh), the RRES tariff (especially storage-attached Buy-All at $0.30 per kWh), and the federal tax credit makes residential solar payback typically 7 to 10 years.",
    },
  ],
};
