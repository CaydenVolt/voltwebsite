import type { City } from "../types";

export const LOS_ANGELES: City = {
  slug: "los-angeles",
  stateSlug: "california",
  name: "Los Angeles",
  title: "Solar in Los Angeles: utilities, permits and NEM 3.0 reality",
  metaTitle: "Solar Companies in Los Angeles: Permits, LADWP, SCE, NEM 3.0",
  metaDescription:
    "Honest guide to solar in Los Angeles: LADWP vs SCE service areas, LADBS permits with SolarAPP+, NEM 3.0 export rates, and what running a solar company in LA actually looks like.",
  answer:
    "Los Angeles is the single largest residential solar market in the US, served by LADWP in the city itself and SCE in most of the surrounding county. Both operate under California's NEM 3.0 regime: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), which has shifted the math toward storage-attached systems. Permits run through LADBS and most unincorporated LA County jurisdictions, with SolarAPP+ accepted for standard residential installs.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 263,
    note: "LA's climate is excellent for solar: around 5.6 peak sun hours per day on an optimally-oriented rooftop, with 263 sunny days per year. Coastal marine layer in June and July slightly reduces summer-morning production. Heat derating is a real factor in inland neighbourhoods like San Fernando Valley (summer rooftop temps regularly exceed 150F); use panels with low temperature coefficients and allow for the derated output in sizing.",
  },
  market: {
    metroPopulationK: 13200,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 200, high: 350 },
    installerDensity: "Saturated",
  },
  utilities: [
    "LADWP (serves the city of Los Angeles)",
    "Southern California Edison (serves most of LA County outside city limits)",
    "Pasadena Water & Power (serves Pasadena)",
    "Glendale Water & Power (serves Glendale)",
    "Burbank Water & Power (serves Burbank)",
  ],
  permits: {
    office: "Los Angeles Department of Building and Safety (LADBS)",
    turnaroundWeeks: "1 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "LADBS accepts SolarAPP+ for standard residential installations, which drops permit turnaround to a day or two for qualifying systems. Non-SolarAPP+ permits typically run 1 to 4 weeks. Interconnection with LADWP has historically been slow (6 to 12 weeks post-install); SCE interconnection has been faster since the 2024 process reforms. Pasadena, Glendale and Burbank each have their own permit offices with their own timelines, generally 2 to 4 weeks.",
  },
  installerLandscape:
    "Running a solar company in Los Angeles means operating in the most saturated US solar market with the highest lead costs. Paid Google search leads for 'solar company near me' commonly run $200 to $350 in the LA DMA; LinkedIn Ads for commercial decision-makers run higher still. The companies that have scaled in LA under NEM 3.0 are the ones who sell storage-attached systems as the default rather than solar-only, who have in-house finance teams for lease and PPA products, and who have fast speed-to-lead (NEM 3.0 pencil-outs are more sensitive to how long a lead sits before being contacted). Lead-handling discipline matters more here than almost anywhere else because of what each lead costs.",
  faq: [
    {
      q: "Does LADWP have net metering?",
      a: "LADWP operates its own version of net metering under its NEM tariff, separate from the CPUC's NEM 3.0. Residential solar customers under LADWP's current programme receive full retail credit for exports on a monthly basis, with annual true-up. SCE customers in LA County operate under CPUC NEM 3.0 (export credits at the Avoided Cost Calculator rate, typically $0.05 to $0.08 per kWh), which is substantially less favourable than LADWP.",
    },
    {
      q: "How long does a solar permit take in Los Angeles?",
      a: "With SolarAPP+ at LADBS: often approved within a day for standard residential installations. Non-SolarAPP+ permits typically take 1 to 4 weeks. Outside the city of LA (unincorporated county or neighbouring cities like Pasadena, Glendale, Burbank), timelines run 2 to 4 weeks on average.",
    },
    {
      q: "How much does solar cost in Los Angeles?",
      a: "LA runs slightly higher than the California average: about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit, net cost is around $14,700. Add storage for NEM 3.0 payback and total gross cost often lands between $28,000 and $38,000 before incentives.",
    },
    {
      q: "Is solar still worth it in LA under NEM 3.0?",
      a: "For SCE customers (most of LA County): yes with storage, no without. A storage-attached NEM 3.0 system typically pays back in 7 to 11 years in LA because the stored energy offsets expensive on-peak retail electricity during 4pm to 9pm. A solar-only system under NEM 3.0 has payback stretching past 15 years. For LADWP customers (city of LA): the math is better because LADWP's NEM still credits exports closer to retail; solar-only can still pencil out.",
    },
    {
      q: "What is the biggest difference between LADWP and SCE for solar?",
      a: "The export credit regime. LADWP credits exports close to retail under its own NEM programme. SCE credits exports under CPUC NEM 3.0 at the Avoided Cost Calculator rate (around 25 to 30 percent of retail). The practical effect: a solar-only system often still works for LADWP customers; SCE customers almost always need storage to make the math work.",
    },
  ],
};
