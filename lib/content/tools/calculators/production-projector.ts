import type { Tool } from "../types";

export const PRODUCTION_PROJECTOR: Tool = {
  slug: "solar-25-year-production-calculator",
  title: "25-year solar production projector",
  metaTitle: "25-Year Solar Production Calculator: Panel Degradation Over Time",
  metaDescription:
    "Project 25-year solar production accounting for annual panel degradation. See year-by-year output decline so you can model lifetime energy honestly.",
  tagline: "Year-by-year solar production from install through year 25",
  audience: "Homeowner",
  intro:
    "Solar panels do not produce the same amount every year. Standard crystalline silicon panels degrade at approximately 0.5 percent per year, meaning year-25 production is around 88 percent of year-one production. This calculator projects year-by-year output and cumulative production for your system size at your location's annual yield per kW.",
  how: [
    {
      heading: "Start from year-one production",
      text: "Year-one output = system size (kW DC) x annual yield per kW. US residential annual yields range from around 1,000 kWh per kW (Seattle) to 1,700 kWh per kW (Phoenix). A typical 7 kW system in a Sun Belt metro produces around 11,000 to 11,500 kWh in year one.",
    },
    {
      heading: "Apply annual degradation",
      text: "Most Tier-1 crystalline silicon panels carry a 25-year production warranty of 85 to 92 percent of year-one output at year 25, implying 0.3 to 0.6 percent annual degradation. Premium panels (SunPower Maxeon, LG) warrant higher. First-year degradation is sometimes higher (around 2 percent) due to the Staebler-Wronski effect; this calculator uses the simpler linear 0.5 percent per year model.",
    },
    {
      heading: "Compound over 25 years",
      text: "Year N output = year-one output * (1 - 0.005)^(N - 1). Cumulative 25-year production is the sum of each year's output. For a 7 kW Phoenix system with 11,500 kWh year-one production, cumulative 25-year output lands around 265,000 kWh.",
    },
    {
      heading: "Compare against warranty",
      text: "If your calculated year-25 production is below your panel's warranty threshold (typically 85 to 92 percent of year-one), the manufacturer owes you a replacement or compensation. Keep year-end production records as evidence.",
    },
  ],
  caveat:
    "Real degradation varies by panel brand, climate stress (extreme heat accelerates degradation) and installation quality. The 0.5 percent linear model is a reasonable average for Tier-1 panels in moderate climates. Panels in Phoenix or Las Vegas degrade faster than panels in Seattle because of heat stress. Treat the output as a planning estimate, not a performance guarantee.",
  faq: [
    {
      q: "How much do solar panels degrade over time?",
      a: "Standard Tier-1 crystalline silicon panels degrade at approximately 0.5 percent per year on average. Year-25 production is typically 85 to 92 percent of year-one output. Premium panels (SunPower, LG) degrade slightly slower. First-year degradation is sometimes higher (around 2 percent) due to the Staebler-Wronski effect in some silicon cells.",
    },
    {
      q: "What is the panel production warranty?",
      a: "Most Tier-1 residential panels carry a 25-year production warranty guaranteeing output at a specified percentage of year-one (typically 85 to 92 percent) at year 25. If actual production falls below the warranty curve, the manufacturer owes replacement or compensation. Keep annual production records as evidence.",
    },
    {
      q: "Do panels still produce after 25 years?",
      a: "Yes, but output declines further. Many 30-year-old solar installations still produce 70 to 80 percent of year-one output. The 25-year warranty number is not a cliff; it is a conservative guarantee. Panels installed in the early 2000s are still operational in many US residential installations.",
    },
    {
      q: "Does climate affect degradation?",
      a: "Yes. Panels in extreme heat (Phoenix, Las Vegas) degrade faster than panels in moderate climates (Seattle, Boston) because of thermal stress. The difference is modest (0.1 to 0.2 percentage points per year) but compounds over 25 years. Choosing panels with low temperature coefficients helps.",
    },
  ],
  published: "2026-11-02",
  related: ["solar-roi-calculator", "solar-system-size-calculator"],
};
