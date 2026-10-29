import type { Tool } from "../types";

/**
 * Solar battery payback calculator. Homeowner-facing.
 *
 * Batteries pay back differently to solar panels. Solar saves money by not
 * buying electricity; batteries save money by (1) time-of-use arbitrage,
 * buying cheap and discharging during expensive peak hours, (2) backup
 * value during outages, (3) in some states, participation in demand-
 * response programmes.
 */
export const BATTERY_PAYBACK: Tool = {
  slug: "solar-battery-payback-calculator",
  title: "Solar battery payback calculator",
  metaTitle: "Solar Battery Payback Calculator: Is Storage Worth It",
  metaDescription:
    "Honest payback years for a home solar battery based on cost, capacity, electric rate, time-of-use peak premium and outage frequency. US residential storage.",
  tagline: "Payback years and 15-year value for a home solar battery",
  audience: "Homeowner",
  intro:
    "A home battery pays back through three things: time-of-use arbitrage (charging at low rates and discharging at peak), backup value during outages, and the 30 percent federal tax credit on battery storage. This calculator takes the net battery cost, your electric rate, the time-of-use peak premium you can capture, and the number of outage days per year, and returns the payback year and 15-year value.",
  how: [
    {
      heading: "Start from net battery cost",
      text: "Installed battery price minus the 30 percent federal tax credit minus any state rebate. For a typical US residential battery (10 to 13 kWh usable), net cost after the ITC is around $8,000 to $14,000.",
    },
    {
      heading: "Compute annual arbitrage savings",
      text: "Daily cycled kWh x days per year x (peak rate minus off-peak rate). A 10 kWh battery cycled once daily on a 15-cent arbitrage spread saves roughly 10 x 365 x $0.15 = $547 per year in time-of-use savings.",
    },
    {
      heading: "Add backup value during outages",
      text: "Outage days per year x daily electric usage x retail rate = backup value. Hard to monetise precisely (food in a fridge, medical equipment, a working home office) but a reasonable proxy is the retail cost of the electricity the battery supplied.",
    },
    {
      heading: "Compound rate increases over 15 years",
      text: "Both the arbitrage spread and the backup value scale with utility rate increases. Batteries are warranted for 10 years and typically retain 70 to 80 percent capacity at the end of the warranty.",
    },
  ],
  caveat:
    "Battery payback is highly state-specific. In California (with NEM 3.0), Hawaii and Massachusetts, batteries can pay back inside 7 to 10 years because the time-of-use spread is wide and net metering has tightened. In most other US states, batteries are a backup-value purchase first and an arbitrage purchase second: the pure financial case is weaker, and the right question is 'what is backup worth to me?' not 'does it pay back fastest?'",
  faq: [
    {
      q: "Is a solar battery worth it in 2026?",
      a: "In high-rate, high-time-of-use-spread states (California, Hawaii, Massachusetts, New York, New Jersey), yes: the arbitrage case alone pays back in roughly 7 to 10 years with the federal tax credit. In most other US states, batteries are primarily a backup purchase: the financial case alone is weaker, but the resilience value during grid outages is real.",
    },
    {
      q: "How long do solar batteries last?",
      a: "Most residential lithium batteries sold in the US (Tesla Powerwall, Enphase IQ Battery, LG, Franklin WH) are warranted for 10 years with 70 to 80 percent capacity retention at the end of warranty. Real-world lifespan is often 12 to 15 years before cycle degradation makes replacement sensible.",
    },
    {
      q: "Does the federal tax credit apply to batteries?",
      a: "Yes, as of the Inflation Reduction Act. The 30 percent federal Residential Clean Energy Credit applies to standalone battery storage of 3 kWh or more, with or without solar panels. The credit runs through 2032 at the full 30 percent rate.",
    },
    {
      q: "How many solar batteries do I need?",
      a: "For whole-home backup during an outage, usually 2 to 3 batteries for an average US home (20 to 40 kWh of total storage). For time-of-use arbitrage only, 1 battery (10 to 13 kWh) is enough to cycle a meaningful portion of daily evening use at peak rates. The honest answer depends on which problem you are solving.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-roi-calculator", "solar-system-size-calculator"],
};
