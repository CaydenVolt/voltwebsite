import type { City } from "../types";

export const HILO: City = {
  slug: "hilo",
  stateSlug: "hawaii",
  name: "Hilo",
  title: "Solar in Hilo: HELCO Big Island and wet-side climate",
  metaTitle: "Solar Companies in Hilo: HELCO, Permits",
  metaDescription:
    "Honest guide to solar in Hilo Hawaii: HELCO (Hawaii Electric Light Company) Smart Export, Hawaii County permits, Big Island wet-side climate, and running a solar company on the Big Island.",
  answer:
    "Hilo is served by HELCO (Hawaii Electric Light Company, a HECO subsidiary), the Big Island's utility. HELCO runs the same Smart Export / CGS Plus / Self-Supply programme choices as HECO on Oahu but with different circuit constraints. The Hilo wet-side climate reduces annual yield meaningfully compared with the sunny Kona side.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 170,
    note: "Hilo is on the wet (windward) side of the Big Island and gets around 4.5 peak sun hours per day with 170 sunny days per year, substantially less than Oahu or the Big Island's sunny Kona side (west side, which averages 5.8 peak sun hours). Rainfall exceeds 125 inches per year, among the wettest US cities.",
  },
  market: {
    metroPopulationK: 45,
    averageCostPerWatt: 3.7,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "Low",
  },
  utilities: ["Hawaii Electric Light Company (HELCO, HECO subsidiary), investor-owned, serves all of the Big Island"],
  permits: {
    office: "Hawaii County Department of Public Works",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Hawaii County Department of Public Works typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. HELCO interconnection post-install typically runs 4 to 10 weeks depending on local circuit review.",
  },
  installerLandscape:
    "Running a solar company in Hilo means working the wet-side Big Island market with HELCO (same corporate parent as HECO, different programme caps and circuit availability). The best Hilo operators are explicit about the wet-side vs Kona-side production difference in sales conversations, handle HELCO interconnection fluently, and spec marine-grade stainless hardware for coastal zip codes. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Is Hilo on HECO?",
      a: "Hilo is served by HELCO (Hawaii Electric Light Company), a HECO subsidiary. HELCO is the Big Island utility, distinct from HECO (Oahu) and MECO (Maui County). All three operate under the same NEM Successor Tariff (Smart Export / CGS Plus / Self-Supply) framework.",
    },
    {
      q: "How much does Hilo rain affect solar?",
      a: "Hilo averages over 125 inches of rainfall per year, among the wettest US cities. Annual solar yield in Hilo is around 60 to 70 percent of equivalent systems on the Big Island's sunny Kona side. Honest annual yield modelling by location (wet vs dry side) is essential.",
    },
    {
      q: "How long does a solar permit take in Hilo?",
      a: "Hawaii County Department of Public Works typically runs residential solar permits in 3 to 6 weeks. HELCO interconnection post-install adds 4 to 10 weeks depending on circuit review.",
    },
    {
      q: "How much does solar cost in Hilo?",
      a: "Hilo runs about $3.70 per watt installed for residential, slightly higher than Honolulu because of Big Island logistics costs, meaning a 7 kW system typically costs around $25,900 gross. After the 30 percent federal tax credit and the 35 percent HI state credit (capped $5,000), net cost is approximately $13,100 to $15,100.",
    },
    {
      q: "Is solar worth it in Hilo?",
      a: "Yes for Hilo homes with suitable roofs. The combination of extremely high HELCO electric rates (over $0.44 per kWh), the generous state tax credit, and the federal credit makes residential solar payback typically 6 to 9 years despite the wet-side yield reduction. Among the strongest payback economies in the US.",
    },
  ],
};
