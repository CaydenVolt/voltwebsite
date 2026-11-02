import type { City } from "../types";

export const SPRINGFIELD_IL: City = {
  slug: "springfield-il",
  stateSlug: "illinois",
  name: "Springfield",
  title: "Solar in Springfield IL: CWLP municipal and Illinois Shines",
  metaTitle: "Solar Companies in Springfield IL: CWLP, Permits",
  metaDescription:
    "Honest guide to solar in Springfield Illinois: City Water Light & Power (CWLP) municipal utility, Illinois Shines (if applicable), state capital permits, and running a solar company in Sangamon County.",
  answer:
    "Springfield IL is served by City Water Light & Power (CWLP), a municipal utility (NOT ComEd or Ameren). CWLP has its own net metering programme. Because CWLP is municipal, Illinois Shines (which pays through ComEd/Ameren) does not apply to Springfield customers; the federal tax credit is the primary incentive. Permits run through the City of Springfield Building and Zoning.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 191,
    note: "Springfield IL gets around 4.5 peak sun hours per day with 191 sunny days per year, moderate for solar. Winter snow and cloud cover reduce production by 10 to 20 percent annually. Spring and summer tornado risk requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 210,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "City Water Light & Power (CWLP), municipal utility, serves most of Springfield IL",
    "Ameren Illinois serves parts of surrounding Sangamon County",
    "Various electric cooperatives serve outlying areas",
  ],
  permits: {
    office: "City of Springfield Building and Zoning",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Springfield Building and Zoning typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. CWLP interconnection post-install typically runs 4 to 6 weeks. Note that CWLP solar customers are NOT eligible for Illinois Shines (which pays through ComEd and Ameren); the federal tax credit is the primary incentive for CWLP customers.",
  },
  installerLandscape:
    "Running a solar company in Springfield IL means working under CWLP's own municipal net metering, where Illinois Shines does not apply. The best Springfield operators are explicit about the incentive difference compared with Chicago area (Illinois Shines-eligible) in sales conversations, handle CWLP interconnection fluently, and model winter weather honestly. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does CWLP have net metering?",
      a: "Yes, CWLP operates its own net metering programme for residential solar customers in Springfield. Credits accrue monthly at retail; annual true-up at avoided cost. CWLP is a municipal utility distinct from ComEd and Ameren Illinois.",
    },
    {
      q: "Does Illinois Shines apply to Springfield?",
      a: "No for CWLP customers. Illinois Shines pays through ComEd and Ameren Illinois customers only; CWLP municipal utility customers do not qualify. For CWLP residents, the 30 percent federal tax credit is the primary incentive. Ameren Illinois customers in surrounding Sangamon County do qualify for Illinois Shines.",
    },
    {
      q: "How long does a solar permit take in Springfield IL?",
      a: "City of Springfield Building and Zoning typically runs residential solar permits in 3 to 5 weeks. CWLP interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Springfield IL?",
      a: "Springfield IL runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000.",
    },
    {
      q: "Is solar worth it in Springfield IL?",
      a: "For Springfield homes with suitable roofs, yes but with longer payback than Chicago-area ComEd customers who get Illinois Shines: typically 11 to 14 years with the federal tax credit under CWLP municipal rates. Honest comparison with Chicago-area incentives matters in sales conversations.",
    },
  ],
};
