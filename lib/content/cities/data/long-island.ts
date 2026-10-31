import type { City } from "../types";

export const LONG_ISLAND: City = {
  slug: "long-island",
  stateSlug: "new-york",
  name: "Long Island",
  title: "Solar on Long Island: PSEG Long Island, NY-Sun and Suffolk/Nassau permits",
  metaTitle: "Solar Companies on Long Island: PSEG LI, NY-Sun, Permits",
  metaDescription:
    "Honest guide to solar on Long Island: PSEG Long Island net metering, NY-Sun installer rebate, Nassau and Suffolk County permits, and running a solar company in Long Island.",
  answer:
    "Long Island solar is driven by PSEG Long Island (which operates the LIPA grid), NY-Sun installer rebates, and comparatively favourable permit regimes in Nassau and Suffolk counties. PSEG LI net metering credits exports close to retail. The Long Island property tax exemption for solar adds a meaningful incentive on top of the federal tax credit and NY State solar credit.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 221,
    note: "Long Island gets around 4.3 peak sun hours per day with 221 sunny days per year, moderate for solar. Winter snow is a real factor; 5 to 15 percent annual production loss attributable to winter snow is typical for Long Island residential installations. Coastal salt air requires marine-grade mounting hardware for installations near the water (north and south shores within 1 mile of the coast).",
  },
  market: {
    metroPopulationK: 2900,
    averageCostPerWatt: 3.3,
    leadCostUsd: { low: 150, high: 270 },
    installerDensity: "High",
  },
  utilities: [
    "PSEG Long Island (operator for Long Island Power Authority, LIPA), serves all of Nassau and Suffolk counties",
    "Freeport Electric (municipal) serves the Village of Freeport specifically",
  ],
  permits: {
    office: "Nassau and Suffolk County permit offices, plus individual town building departments",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Nassau and Suffolk County permit offices run residential solar permits in 4 to 8 weeks typically, but the actual permit is often issued by individual town building departments (Hempstead, North Hempstead, Oyster Bay, Babylon, Islip, Brookhaven, Smithtown, Huntington) with 4 to 10 week ranges. SolarAPP+ is not widely accepted. PSEG LI interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company on Long Island means working in a market where NY-Sun installer rebates and NY State solar credits do serious economic work. The sales conversation is about stacked incentives rather than pure electricity savings. The best Long Island operators have templated NY-Sun registration workflows (block pricing steps down as regional caps fill), fluent PSEG LI interconnection, and knowledge of the specific town permit office quirks. Lead costs run $150 to $270 on Google search. Coastal install knowledge (marine-grade stainless hardware, salt-corrosion-resistant conduit) is a differentiator for the shore-adjacent neighbourhoods.",
  faq: [
    {
      q: "Does PSEG Long Island have net metering?",
      a: "Yes. PSEG Long Island credits residential solar exports at retail rate monthly for systems up to 25 kW AC. Annual true-up at year-end: excess credits roll forward or are paid at avoided cost. Interconnection application runs through PSEG LI's online solar portal.",
    },
    {
      q: "What is the NY-Sun incentive on Long Island?",
      a: "NY-Sun pays installer-side rebates for residential solar across New York State. Long Island residential rates are set by the Long Island region block pricing (currently approximately $0.30 to $0.50 per watt as of 2026; confirm current block with NYSERDA before quoting). The rebate is paid to the installer and typically passed through to the homeowner as a lower install price.",
    },
    {
      q: "How long does a solar permit take on Long Island?",
      a: "Nassau and Suffolk County permits run 4 to 8 weeks typically; actual permits are often issued by individual town building departments with 4 to 10 week ranges. SolarAPP+ is not widely accepted on Long Island. PSEG LI interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost on Long Island?",
      a: "Long Island runs about $3.30 per watt installed for residential, higher than most of NY State because of the engineering and permit burden, meaning a 7 kW system typically costs around $23,100 gross. After the 30 percent federal tax credit, the NY-Sun installer rebate pass-through, the NY State solar credit (25 percent capped at $5,000), and the property tax exemption, effective net cost is often $10,000 to $14,000.",
    },
    {
      q: "Is solar worth it on Long Island?",
      a: "Yes, substantially. The combination of PSEG LI retail net metering, NY-Sun installer rebate, NY State 25 percent tax credit (capped $5,000), federal 30 percent credit, and the 15-year property tax exemption makes residential solar payback typically 6 to 9 years for Long Island homes with suitable roofs. The stacked incentives make Long Island one of the strongest solar economies in the US.",
    },
  ],
};
