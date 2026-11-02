import type { City } from "../types";

export const CHULA_VISTA: City = {
  slug: "chula-vista",
  stateSlug: "california",
  name: "Chula Vista",
  title: "Solar in Chula Vista: SDG&E, NEM 3.0 and South Bay permits",
  metaTitle: "Solar Companies in Chula Vista: SDG&E, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in Chula Vista: SDG&E NEM 3.0 export compensation, City of Chula Vista permits, Spanish-speaking homeowner market, and running a solar company in San Diego South Bay.",
  answer:
    "Chula Vista is served by SDG&E under California NEM 3.0 (export credits at Avoided Cost Calculator rate, around $0.05 to $0.08 per kWh). The South Bay has a substantial Spanish-speaking homeowner base served poorly by English-only installers. Permits run through the City of Chula Vista Development Services Department.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.4,
    sunnyDays: 265,
    note: "Chula Vista gets around 5.4 peak sun hours per day with 265 sunny days per year, strong for solar. Coastal South Bay climate has moderate temperatures and lower marine-layer impact than coastal San Diego. Summer heat is milder than inland El Cajon or Poway.",
  },
  market: {
    metroPopulationK: 280,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 170, high: 290 },
    installerDensity: "Saturated",
  },
  utilities: ["San Diego Gas & Electric (SDG&E), investor-owned, serves all of Chula Vista"],
  permits: {
    office: "City of Chula Vista Development Services Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Chula Vista Development Services Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. SDG&E interconnection post-install typically runs 2 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Chula Vista means serving a predominantly Spanish-speaking homeowner base. The best Chula Vista operators have bilingual sales and customer service, sell storage-attached systems as the NEM 3.0 default, and handle SDG&E interconnection fluently. Lead costs run $170 to $290 on Google search; the Spanish-speaking segment is often underserved by English-only competitors creating opportunity.",
  faq: [
    {
      q: "Does SDG&E have net metering in Chula Vista?",
      a: "Not retail-rate. SDG&E operates under California NEM 3.0: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), far below retail (which exceeds $0.40 per kWh on-peak). Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years.",
    },
    {
      q: "How long does a solar permit take in Chula Vista?",
      a: "City of Chula Vista Development Services Department typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. SDG&E interconnection post-install adds 2 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Chula Vista?",
      a: "Chula Vista runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. Add storage for NEM 3.0 payback.",
    },
    {
      q: "Is solar worth it in Chula Vista under NEM 3.0?",
      a: "Yes with storage. SDG&E's extremely high retail rates (among the highest in the US) make storage-attached NEM 3.0 systems pay back in 6 to 10 years. Solar-only without storage pays back closer to 10 to 13 years rather than the 6 to 8 that NEM 2.0 systems saw.",
    },
  ],
};
