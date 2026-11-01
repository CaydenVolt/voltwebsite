import type { City } from "../types";

export const LITTLE_ROCK: City = {
  slug: "little-rock",
  stateSlug: "arkansas",
  name: "Little Rock",
  title: "Solar in Little Rock: Entergy Arkansas, Act 464 and city permits",
  metaTitle: "Solar Companies in Little Rock: Entergy AR, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Little Rock: Entergy Arkansas retail net metering under Act 464, City of Little Rock permits, and running a solar company in central Arkansas.",
  answer:
    "Little Rock is served by Entergy Arkansas under the 2019 Act 464 net metering protections: 1-for-1 retail NEM until cumulative installed solar reaches 15 percent of utility peak demand (threshold not yet reached as of 2026). The federal tax credit plus retail NEM make Little Rock economics reasonable. Permits run through the City of Little Rock Planning and Development.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 216,
    note: "Little Rock gets around 4.9 peak sun hours per day with 216 sunny days per year, moderate-to-strong for solar. Summer thunderstorms reduce afternoon production. Tornado-prone weather in April and May requires proper structural attachment. High humidity requires marine-grade stainless hardware for durability.",
  },
  market: {
    metroPopulationK: 760,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 80, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Entergy Arkansas, investor-owned, serves most of the Little Rock metro",
    "Various electric cooperatives (First Electric Cooperative, Petit Jean Electric Cooperative) serve rural outlying areas",
    "North Little Rock Electric serves North Little Rock (municipal)",
  ],
  permits: {
    office: "City of Little Rock Planning and Development",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Little Rock Planning and Development typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Pulaski and Saline county jurisdictions run their own permits with 2 to 4 week typical timelines. Entergy Arkansas interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Little Rock means working in a market with reasonable retail NEM protection through Act 464. The best Little Rock operators have templated workflows for Entergy Arkansas interconnection, model summer heat and winter cloud derating honestly, and spec hail-resistant panels where appropriate. Lead costs run $80 to $160 on Google search.",
  faq: [
    {
      q: "Does Entergy Arkansas have net metering?",
      a: "Yes, 1-for-1 retail net metering protected by Act 464 (2019) until cumulative installed solar capacity reaches 15 percent of utility peak demand. Threshold has not been reached as of 2026 so new installations continue to receive retail NEM. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "How long does a solar permit take in Little Rock?",
      a: "City of Little Rock Planning and Development typically runs residential solar permits in 3 to 5 weeks. Surrounding Pulaski and Saline counties run 2 to 4 weeks typically. Entergy Arkansas interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Little Rock?",
      a: "Little Rock runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. Arkansas has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Little Rock?",
      a: "Yes for most Little Rock homes with suitable roofs. The combination of retail-rate net metering (protected by Act 464), moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 9 to 12 years. The economics are better than Oklahoma or Mississippi because of the retail NEM protection.",
    },
  ],
};
