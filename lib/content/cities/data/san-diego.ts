import type { City } from "../types";

export const SAN_DIEGO: City = {
  slug: "san-diego",
  stateSlug: "california",
  name: "San Diego",
  title: "Solar in San Diego: SDG&E, NEM 3.0 and permit timelines",
  metaTitle: "Solar Companies in San Diego: SDG&E, Permits, NEM 3.0",
  metaDescription:
    "Honest guide to solar in San Diego: SDG&E's high residential rates, NEM 3.0 export compensation, San Diego Development Services permit timelines, and running a solar company in SD.",
  answer:
    "San Diego has some of the highest residential electric rates in the US (SDG&E averages around $0.44 per kWh on-peak), which keeps the solar math working under NEM 3.0 better than most of California. SDG&E is the sole investor-owned utility for the metro, and nearly all residential customers are on time-of-use rate schedules. Permits run through San Diego Development Services with SolarAPP+ accepted for standard residential.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.5,
    sunnyDays: 266,
    note: "San Diego's climate is excellent for solar: 5.5 peak sun hours per day and 266 sunny days per year. Coastal marine layer in May and June (locally called 'May Grey' and 'June Gloom') reduces morning production in coastal zip codes but has little impact inland (El Cajon, Poway, Escondido). Lower summer temperatures than LA mean less panel heat derating in coastal installations.",
  },
  market: {
    metroPopulationK: 3300,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 180, high: 320 },
    installerDensity: "Saturated",
  },
  utilities: [
    "San Diego Gas & Electric (SDG&E), investor-owned, serves the entire metro",
    "San Diego Community Power (CCA, bundles with SDG&E delivery)",
    "Clean Energy Alliance (CCA for North County coastal cities)",
  ],
  permits: {
    office: "San Diego Development Services Department",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of San Diego Development Services accepts SolarAPP+ for standard residential installations, with same-day or next-day approval for qualifying systems. Non-SolarAPP+ permits run 1 to 3 weeks typically. Neighbouring jurisdictions (Chula Vista, Oceanside, Carlsbad, El Cajon, Poway) each have their own permit offices; most run 2 to 4 weeks. SDG&E interconnection post-install typically runs 2 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in San Diego means working in a market where the high retail electricity rate (around $0.44 per kWh on-peak at SDG&E) does most of the selling for you. The headline challenge is NEM 3.0's export compensation; the counter is the on-peak rate, which makes storage-attached systems pencil out faster than almost anywhere else. Lead costs run $180 to $320 for Google search, lower than LA because fewer multi-state installers push ads here, but installer density is still saturated. The operators who do best are those who sell storage as the default and move fast on leads before competitors can quote.",
  faq: [
    {
      q: "Does SDG&E have net metering?",
      a: "Not retail-rate net metering. SDG&E operates under California's NEM 3.0 regime: solar exports are credited at the Avoided Cost Calculator rate, typically $0.05 to $0.08 per kWh, far below retail rates (which exceed $0.40 per kWh on-peak). Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years from original interconnection.",
    },
    {
      q: "How long does a solar permit take in San Diego?",
      a: "With SolarAPP+ at the city of San Diego Development Services: same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Neighbouring jurisdictions (Chula Vista, Oceanside, Carlsbad) typically run 2 to 4 weeks.",
    },
    {
      q: "How much does solar cost in San Diego?",
      a: "San Diego runs around $2.95 per watt installed for residential, meaning a 7 kW system typically costs about $20,600 gross. After the 30 percent federal tax credit, net cost is around $14,400. Add 10 kWh of battery storage for NEM 3.0 payback and total gross cost usually lands between $27,000 and $34,000 before incentives.",
    },
    {
      q: "Is solar worth it in San Diego under NEM 3.0?",
      a: "Yes, with storage. SDG&E's extremely high retail rates (among the highest in the US) make storage-attached NEM 3.0 systems pay back in 6 to 10 years for most residential customers. The stored energy offsets expensive on-peak and super-peak electricity during 4pm to 9pm. Solar-only without storage still works but with payback closer to 10 to 13 years rather than the 6 to 8 that NEM 2.0 systems saw.",
    },
    {
      q: "What is the typical SDG&E on-peak electric rate?",
      a: "SDG&E's TOU-DR1 schedule charges around $0.44 per kWh during on-peak hours (4pm to 9pm weekdays) in summer, dropping to about $0.37 off-peak and $0.33 overnight. Winter rates run slightly lower. These are among the highest residential electric rates in the US, which is why solar economics still work in San Diego despite NEM 3.0.",
    },
  ],
};
