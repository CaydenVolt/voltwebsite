import type { Tool } from "../types";

/**
 * Battery vs backup generator calculator. Homeowner-facing lead magnet.
 *
 * Compares 10-year total cost of ownership for a solar battery vs a natural
 * gas standby generator at a given backup use case. Captures the right
 * trade-offs: generators are cheaper upfront, batteries win on fuel cost
 * and maintenance over time.
 */
export const BATTERY_VS_GENERATOR: Tool = {
  slug: "solar-battery-vs-generator-calculator",
  title: "Battery vs backup generator calculator",
  metaTitle: "Solar Battery vs Generator: 10-Year Cost Comparison",
  metaDescription:
    "Honest 10-year total cost of ownership for a home solar battery vs a natural gas standby generator. Includes fuel, maintenance, warranties and the federal tax credit on batteries.",
  tagline: "10-year total cost of ownership for a home battery vs a backup generator",
  audience: "Homeowner",
  intro:
    "A home battery and a backup generator both solve the grid-down problem but have very different cost shapes. Generators are cheaper upfront; batteries win on fuel cost, maintenance and the 30 percent federal tax credit. This calculator takes your backup use case (outage days per year, daily usage during outage) and your local natural gas rate, and compares 10-year total cost of ownership for both.",
  how: [
    {
      heading: "Start with net upfront cost for each",
      text: "Battery: installed cost minus the 30 percent federal tax credit (around $8,000 to $14,000 net for a typical 10 to 13 kWh system). Generator: installed cost of a 20 to 24 kW natural gas standby unit (around $8,000 to $14,000 total; no federal tax credit).",
    },
    {
      heading: "Calculate annual fuel cost (generator)",
      text: "Outage days x daily kWh x conversion factor (0.6 kWh per cubic foot of natural gas for a standby generator) x natural gas rate. Generators burn fuel whenever they run; batteries do not.",
    },
    {
      heading: "Calculate annual maintenance cost (generator)",
      text: "Standby generators require annual oil and filter service (around $200 to $400 a year) plus periodic battery and spark plug replacement. Over 10 years, maintenance adds $2,500 to $4,000 to total cost.",
    },
    {
      heading: "Calculate annual electric savings (battery)",
      text: "Battery can arbitrage time-of-use rates (if your utility has them) and participate in demand-response programmes. For most US homes without TOU, this is small; in California, Hawaii and Massachusetts it is meaningful.",
    },
    {
      heading: "Sum 10-year total cost of ownership",
      text: "Net upfront + 10 years of fuel/maintenance (generator) OR net upfront minus 10 years of TOU savings (battery). The one with the lower 10-year number wins on cost alone; comfort and reliability trade-offs are separate.",
    },
  ],
  caveat:
    "This compares cost of ownership, not resilience. A standby generator runs continuously as long as fuel is available (useful for multi-day outages); a battery runs until it is discharged (useful for shorter outages or when paired with solar for recharge). The honest trade-off is often not cost but duration of outage you are planning for. For 1-to-3 day outages, battery usually wins; for 5+ day outages, generators usually win on resilience even when the cost is higher.",
  faq: [
    {
      q: "Is a solar battery or a generator better for home backup?",
      a: "It depends on outage duration and cost preference. For 1-to-3 day outages, a battery (especially paired with solar for daytime recharge) usually wins on cost and quiet operation. For 5+ day outages, a standby generator wins on resilience because it keeps running as long as fuel is available. For whole-home backup during long outages, the realistic answer is often both: generator for extended events, battery for daily use.",
    },
    {
      q: "How much does a home standby generator cost?",
      a: "A 20 to 24 kW natural gas standby generator (sized for whole-home backup on an average US home) costs $8,000 to $14,000 installed. Larger generators or propane-fuelled units can run $18,000+. Annual fuel and maintenance adds another $500 to $900 depending on outage frequency.",
    },
    {
      q: "How much does a home solar battery cost?",
      a: "A typical 10 to 13 kWh residential battery (Tesla Powerwall, Enphase IQ Battery, LG Chem RESU, Franklin WH) costs $12,000 to $18,000 installed. After the 30 percent federal Residential Clean Energy Credit, net cost is $8,400 to $12,600. The federal credit applies to standalone battery installations of 3 kWh or more.",
    },
    {
      q: "Does the federal tax credit apply to generators?",
      a: "No. The 30 percent federal Residential Clean Energy Credit applies to solar, solar batteries (storage of 3 kWh+), geothermal, and heat pumps. It does not apply to natural gas or propane standby generators.",
    },
  ],
  published: "2026-10-31",
  related: ["solar-battery-payback-calculator", "solar-roi-calculator"],
};
