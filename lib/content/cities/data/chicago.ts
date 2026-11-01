import type { City } from "../types";

export const CHICAGO: City = {
  slug: "chicago",
  stateSlug: "illinois",
  name: "Chicago",
  title: "Solar in Chicago: ComEd, Illinois Shines SRECs and city permits",
  metaTitle: "Solar Companies in Chicago: ComEd, Illinois Shines, Permits",
  metaDescription:
    "Honest guide to solar in Chicago: ComEd net metering, Illinois Shines upfront REC-equivalent payment, Chicago Department of Buildings permits, lake-effect weather, and running a solar company in Chicagoland.",
  answer:
    "Chicago is served by ComEd under retail net metering plus Illinois Shines, which pays large upfront REC-equivalent payments at project completion (currently $0.08 to $0.11 per kWh for 15 years, often paid as a lump sum upfront by the installer). The combined stack makes Chicago solar economics competitive despite modest sun hours and significant winter weather. Permits run through Chicago Department of Buildings.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 189,
    note: "Chicago gets around 3.9 peak sun hours per day with 189 sunny days per year, among the lower in the US. Winter snow and lake-effect cloud cover from Lake Michigan reduce annual production by 15 to 25 percent for most residential installations. Steep south-facing roofs shed snow faster; low-angle urban-rowhouse installs retain snow longer.",
  },
  market: {
    metroPopulationK: 9420,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 120, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "Commonwealth Edison (ComEd), investor-owned (Exelon subsidiary), serves most of Chicagoland",
    "Ameren Illinois serves parts of outlying Chicagoland and most of Downstate Illinois",
    "Various municipal utilities (Naperville Electric Utility, Winnetka Municipal Light & Power) serve specific suburbs",
  ],
  permits: {
    office: "City of Chicago Department of Buildings",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Chicago Department of Buildings typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Suburban Cook, DuPage, Lake and Will counties run their own permits with 2 to 5 week typical timelines (most are faster than Chicago city). ComEd interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Chicago means working in a market where Illinois Shines does the economic heavy lifting (15 years of REC-equivalent payments, often paid upfront to the installer who passes the value through). The best Chicago operators have templated Illinois Shines registration workflows (the programme has block-rate capacity caps that fill over time; timing matters), fluent ComEd interconnection, and workflows for the common Chicago housing types (brick two-flat, Chicago bungalow, three-flat). Lead costs run $120 to $220 on Google search. Suburban Cook/DuPage/Lake county permits are substantially faster than city of Chicago.",
  faq: [
    {
      q: "Does ComEd have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 40 kW AC under Illinois Commerce Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward or paid at avoided cost.",
    },
    {
      q: "What is Illinois Shines?",
      a: "Illinois Shines (formally the Adjustable Block Program) pays residential solar installations an upfront equivalent of 15 years of REC payments at approximately $0.08 to $0.11 per kWh projected generation. Payments typically go to the installer, who passes the value through as a lower install cost or installer-financed system. The programme has block-rate capacity that fills over time; current block pricing changes as caps are hit.",
    },
    {
      q: "How long does a solar permit take in Chicago?",
      a: "City of Chicago Department of Buildings typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Suburban Cook, DuPage, Lake and Will counties run 2 to 5 weeks typically (most are faster than city of Chicago). ComEd interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Chicago?",
      a: "Chicago runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit and the Illinois Shines upfront REC pass-through (worth roughly $5,000 to $8,000 for a 7 kW system depending on current block pricing), effective net cost is often $7,000 to $10,000.",
    },
    {
      q: "Is solar worth it in Chicago?",
      a: "Yes substantially despite the modest sun hours. The combination of ComEd retail net metering, the 15-year Illinois Shines payment, and the 30 percent federal tax credit makes residential solar payback typically 7 to 10 years for Chicago homes with suitable roofs. Right-sized systems that match annual load pencil out best because ComEd pays only avoided cost for annual excess.",
    },
  ],
};
