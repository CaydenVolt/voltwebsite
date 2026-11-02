import type { City } from "../types";

export const NEW_HAVEN: City = {
  slug: "new-haven",
  stateSlug: "connecticut",
  name: "New Haven",
  title: "Solar in New Haven: United Illuminating, RRES and city permits",
  metaTitle: "Solar Companies in New Haven: UI, RRES, Permits",
  metaDescription:
    "Honest guide to solar in New Haven Connecticut: United Illuminating (UI) RRES tariff, City of New Haven permits, Yale medical hub market, and running a solar company in New Haven County.",
  answer:
    "New Haven is served by United Illuminating (UI, Avangrid subsidiary), NOT Eversource. UI operates under the same Connecticut Residential Renewable Energy Solutions (RRES) programme as Eversource: homeowners pick Buy-All or Netting at install. Permits run through the City of New Haven Office of Building Inspection and Enforcement.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 198,
    note: "New Haven gets around 4.3 peak sun hours per day with 198 sunny days per year, moderate for solar. Winter snow derating is modest to substantial (10 to 18 percent annual loss). Long Island Sound coastal climate.",
  },
  market: {
    metroPopulationK: 860,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 125, high: 220 },
    installerDensity: "Moderate",
  },
  utilities: [
    "United Illuminating (UI, Avangrid subsidiary), investor-owned, serves most of New Haven County including New Haven",
    "Eversource serves parts of outlying areas and most of the rest of CT",
  ],
  permits: {
    office: "City of New Haven Office of Building Inspection and Enforcement",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of New Haven Office of Building Inspection and Enforcement typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding New Haven County jurisdictions run 2 to 5 weeks typically. UI interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in New Haven means working under UI (different utility from Eversource that serves the rest of CT) and handling the RRES Buy-All vs Netting choice. The best New Haven operators run both pencil-outs before quoting and understand the specific UI interconnection paperwork. Lead costs run $125 to $220 on Google search.",
  faq: [
    {
      q: "Does Eversource serve New Haven?",
      a: "No. New Haven is served by United Illuminating (UI), an Avangrid subsidiary distinct from Eversource. UI operates under the same CT RRES programme (Buy-All or Netting tariff options) but with its own interconnection paperwork and timelines.",
    },
    {
      q: "What is RRES for New Haven?",
      a: "The Connecticut Residential Renewable Energy Solutions programme replaced retail NEM in 2022 at UI and Eversource. Customers choose Buy-All (all generation sold at tariff rate ~$0.30/kWh for storage-attached) or Netting (consume plus retail credit) at installation.",
    },
    {
      q: "How long does a solar permit take in New Haven?",
      a: "City of New Haven Office of Building Inspection and Enforcement typically runs residential solar permits in 3 to 5 weeks. UI interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in New Haven?",
      a: "New Haven runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit, net cost is approximately $15,200.",
    },
    {
      q: "Is solar worth it in New Haven?",
      a: "Yes for most New Haven homes with suitable roofs. The combination of high retail rates (around $0.33 per kWh), the RRES tariff, and the federal tax credit makes residential solar payback typically 7 to 10 years.",
    },
  ],
};
