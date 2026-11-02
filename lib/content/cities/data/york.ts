import type { City } from "../types";

export const YORK: City = {
  slug: "york",
  stateSlug: "pennsylvania",
  name: "York",
  title: "Solar in York PA: Met-Ed FirstEnergy and south-central permits",
  metaTitle: "Solar Companies in York PA: Met-Ed, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in York Pennsylvania: Met-Ed (FirstEnergy subsidiary) net metering, PA SREC market, City of York permits, and running a solar company in York County.",
  answer:
    "York is served by Met-Ed (Metropolitan Edison, a FirstEnergy subsidiary), distinct from PPL Electric that serves most of central Pennsylvania. Met-Ed operates retail-rate net metering under PA PUC rules. PA SREC market applies. Permits run through the City of York Bureau of Permits, Planning and Zoning.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.4,
    sunnyDays: 200,
    note: "York gets around 4.4 peak sun hours per day with 200 sunny days per year, moderate for solar. Winter snow derating is modest. South-central Pennsylvania climate.",
  },
  market: {
    metroPopulationK: 460,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Met-Ed (Metropolitan Edison, FirstEnergy subsidiary), investor-owned, serves most of York County",
    "PPL Electric serves parts of outlying areas",
  ],
  permits: {
    office: "City of York Bureau of Permits, Planning and Zoning",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of York Bureau of Permits, Planning and Zoning typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Met-Ed interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in York means working under Met-Ed (FirstEnergy, different from PPL Electric that serves most of central PA). The best York operators understand Met-Ed interconnection paperwork (similar across FirstEnergy subsidiaries in PA and OH), handle PA SREC registration fluently. Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does Met-Ed serve York PA?",
      a: "Yes. Metropolitan Edison (Met-Ed), a FirstEnergy subsidiary, serves most of York County including the city of York. This is distinct from PPL Electric (serves Allentown, Scranton, Harrisburg) and PECO (serves Philadelphia).",
    },
    {
      q: "How long does a solar permit take in York PA?",
      a: "City of York Bureau of Permits, Planning and Zoning typically runs residential solar permits in 3 to 5 weeks. Met-Ed interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in York PA?",
      a: "York PA runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200. SREC income adds roughly $200 to $280 per year on top.",
    },
    {
      q: "Is solar worth it in York PA?",
      a: "Yes for York homes with suitable roofs. The combination of Met-Ed retail NEM, PA SREC income and the federal tax credit makes residential solar payback typically 10 to 13 years.",
    },
  ],
};
