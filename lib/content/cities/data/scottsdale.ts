import type { City } from "../types";

export const SCOTTSDALE: City = {
  slug: "scottsdale",
  stateSlug: "arizona",
  name: "Scottsdale",
  title: "Solar in Scottsdale: SRP vs APS, HOA requirements and permits",
  metaTitle: "Solar Companies in Scottsdale: SRP, APS, HOA, Permits",
  metaDescription:
    "Honest guide to solar in Scottsdale: SRP vs APS service area split, Scottsdale HOA aesthetic reviews, City of Scottsdale permits, and running a solar company in Scottsdale.",
  answer:
    "Scottsdale is split between SRP (most of the city) and APS (parts of north Scottsdale), with the two utilities having materially different solar programmes. Scottsdale also has one of the most HOA-dense suburban markets in the Phoenix metro; aesthetic reviews can add 2 to 6 weeks to project timelines on top of city permits. The best operators handle both the utility difference and the HOA review as a known workflow rather than a surprise.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 6.5,
    sunnyDays: 299,
    note: "Scottsdale has essentially the same climate as Phoenix: 6.5 peak sun hours per day, 299 sunny days per year, extreme summer heat (June through September rooftop temperatures regularly exceed 170F). Panel temperature coefficients and racking airflow matter.",
  },
  market: {
    metroPopulationK: 250,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 160, high: 280 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Salt River Project (SRP), public utility, serves most of Scottsdale",
    "Arizona Public Service (APS), investor-owned, serves parts of north Scottsdale",
  ],
  permits: {
    office: "City of Scottsdale Planning and Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential, plus HOA review",
    solarApp: "Not accepted",
    note: "City of Scottsdale Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted in Scottsdale as of 2026. The practical schedule impact is HOA review, which applies in a substantial fraction of Scottsdale neighbourhoods; HOA aesthetic approval adds 2 to 6 weeks and requires conduit-concealment, specific panel-color choices (typically all-black), and sometimes array-footprint restrictions. SRP or APS interconnection post-install runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Scottsdale means handling two utilities (SRP for most, APS for parts of the north), one of the highest HOA densities in the Valley, and a premium customer base that expects both aesthetic finish quality and detailed sales education. The practical operational edge: speed in collecting HOA documentation up front (CC&Rs, aesthetic standards, HOA board contact) and relationships with the common Scottsdale master-planned community HOAs. Scottsdale homes typically have premium rooftops (tile, flat concrete, metal) that require specific mounting hardware; installer skill with each roof type is a differentiator. Lead costs run $160 to $280 on Google search, among the highest in Arizona.",
  faq: [
    {
      q: "Is Scottsdale on SRP or APS?",
      a: "Most of Scottsdale is on SRP (the Salt River Project public utility). Parts of north Scottsdale are on APS (Arizona Public Service). The two utilities have materially different solar programmes: SRP uses the Customer Generation plan with demand charges (storage attachment is usually necessary for favourable economics); APS uses the Resource Comparison Proxy export rate (solar-only can still work). Confirming which utility serves the specific property matters for an accurate quote.",
    },
    {
      q: "Do Scottsdale HOAs allow solar?",
      a: "Yes. Arizona state law (A.R.S. § 33-439) prohibits HOAs from unreasonably restricting solar installations, but HOAs can impose reasonable aesthetic conditions: all-black panels, concealed conduit, specific location restrictions. Nearly every HOA-governed Scottsdale neighbourhood requires architectural review approval before install begins, adding 2 to 6 weeks to the project timeline. Experienced installers include HOA submittal as a line item in their project workflow.",
    },
    {
      q: "How long does a solar permit take in Scottsdale?",
      a: "City of Scottsdale Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. HOA aesthetic review adds 2 to 6 weeks in a substantial fraction of Scottsdale neighbourhoods. SolarAPP+ is not accepted in Scottsdale. SRP or APS interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Scottsdale?",
      a: "Scottsdale runs about $2.75 per watt installed for residential, slightly higher than Phoenix because of the premium customer base, HOA finish requirements, and complex tile/metal rooftops. A 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Storage attachment (recommended for SRP customers) adds $12,000 to $18,000.",
    },
    {
      q: "Is solar worth it in Scottsdale?",
      a: "Yes for most Scottsdale homes with suitable roofs. Payback varies by utility: SRP customers see 7 to 10 years with storage (12 to 15 without), APS customers see 8 to 12 years for solar-only. HOA aesthetic compliance costs 5 to 10 percent more per project than non-HOA Phoenix installations.",
    },
  ],
};
