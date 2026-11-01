import type { City } from "../types";

export const HONOLULU: City = {
  slug: "honolulu",
  stateSlug: "hawaii",
  name: "Honolulu",
  title: "Solar in Honolulu: HECO Smart Export and highest US electric rates",
  metaTitle: "Solar Companies in Honolulu: HECO, Smart Export, Permits",
  metaDescription:
    "Honest guide to solar in Honolulu: Hawaiian Electric Company (HECO) Smart Export and CGS Plus programmes, City and County of Honolulu permits, 35 percent state tax credit, and running a solar company on Oahu.",
  answer:
    "Honolulu solar economics are driven by three factors: the highest US electric rates (around $0.42 per kWh at HECO), the generous 35 percent Hawaii state tax credit (capped at $5,000), and the 30 percent federal credit. HECO's Smart Export is the practical default for new residential installations (storage-attached, exports credit during 4pm to 9am off-peak hours). Permits run through City and County of Honolulu Department of Planning and Permitting.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.4,
    sunnyDays: 271,
    note: "Honolulu gets around 5.4 peak sun hours per day with 271 sunny days per year, strong for solar. The tropical climate is favourable overall; trade winds reduce panel heat derating compared with hotter mainland cities. Afternoon showers reduce production less than the rain frequency suggests. Salt air near the coast requires marine-grade stainless hardware; most of Honolulu is within corrosion range.",
  },
  market: {
    metroPopulationK: 1000,
    averageCostPerWatt: 3.6,
    leadCostUsd: { low: 150, high: 260 },
    installerDensity: "High",
  },
  utilities: ["Hawaiian Electric Company (HECO), investor-owned, serves all of Oahu including Honolulu"],
  permits: {
    office: "City and County of Honolulu Department of Planning and Permitting",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City and County of Honolulu Department of Planning and Permitting typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. HECO interconnection post-install typically runs 4 to 12 weeks depending on circuit review requirements for the specific neighbourhood. Multi-family and condo buildings in Honolulu require association approval that runs in parallel.",
  },
  installerLandscape:
    "Running a solar company in Honolulu means operating in the most mature US residential solar market with the most complex regulatory structure. The best Honolulu operators are fluent in the Smart Export vs CGS Plus vs Self-Supply trade-offs, have in-house circuit availability research (CGS Plus enrolment depends on local circuit capacity), use marine-grade stainless hardware as standard for coastal zip codes, and specialise in Oahu's unique housing types (walk-up condos, high-rise condos with roof-share agreements). Shipping panels from mainland adds meaningful cost. Lead costs run $150 to $260 on Google search.",
  faq: [
    {
      q: "What is HECO's Smart Export?",
      a: "Smart Export is HECO's preferred programme for new residential solar: solar + battery storage with grid exports credited at a time-of-day rate during 4pm to 9am off-peak hours. Peak-hour (9am to 4pm) exports are not compensated. The practical effect: systems designed to self-consume during peak hours and export stored energy at off-peak times.",
    },
    {
      q: "How long does a solar permit take in Honolulu?",
      a: "City and County of Honolulu Department of Planning and Permitting typically runs residential solar permits in 4 to 8 weeks. HECO interconnection post-install adds 4 to 12 weeks depending on local circuit review. Condo and multi-family installations require association approval that runs in parallel.",
    },
    {
      q: "How much does solar cost in Honolulu?",
      a: "Honolulu runs about $3.60 per watt installed for residential, higher than mainland US because of shipping and labour costs, meaning a 7 kW system typically costs around $25,200 gross. After the 30 percent federal tax credit and the 35 percent Hawaii state credit (capped $5,000), net cost is approximately $12,500 to $14,500.",
    },
    {
      q: "Is solar worth it in Honolulu?",
      a: "Yes substantially. The combination of the highest US electric rates (over $0.42 per kWh at HECO), the 35 percent Hawaii state tax credit, and the 30 percent federal credit makes residential solar payback typically 5 to 8 years for Honolulu homes with suitable roofs. Among the strongest payback economies in the US despite the high install cost.",
    },
  ],
};
