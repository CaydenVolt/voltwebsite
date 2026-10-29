import type { Tool } from "../types";

/**
 * Solar system size calculator. Homeowner-facing.
 *
 * Converts monthly electric usage into a recommended system size in kW,
 * panel count, and required roof area. Uses peak sun hours by region as the
 * key input: the number varies from about 3 in Alaska to over 6 in the US
 * Southwest, and it is the single biggest driver of how many kW it takes
 * to cover a given usage.
 */
export const SYSTEM_SIZE: Tool = {
  slug: "solar-system-size-calculator",
  title: "Solar system size calculator",
  metaTitle: "Solar System Size Calculator: What Size System You Need",
  metaDescription:
    "How many kW, how many panels, and how much roof area a US home needs based on monthly electric usage and local sun hours. Honest sizing with explicit assumptions.",
  tagline: "Required system kW, panel count and roof area for your electric usage",
  audience: "Homeowner",
  intro:
    "Solar system size is a chain: your monthly kWh usage, your local peak sun hours, and the standard efficiency losses (inverter, wiring, shading, soiling) determine the kW of panels you need. This calculator takes your usage and your region, applies honest assumptions, and returns the system size, panel count and roof area required.",
  how: [
    {
      heading: "Convert monthly usage to annual kWh",
      text: "Monthly kWh x 12. Most US homes use 800 to 1,400 kWh per month depending on size, climate and electric heating. Your utility bill shows this directly.",
    },
    {
      heading: "Divide by annual production per kW",
      text: "Peak sun hours per day x 365 x system efficiency = annual kWh produced per kW of panels. For the US, this ranges from about 1,100 kWh per kW per year in the Pacific Northwest to 1,700+ kWh per kW per year in the Southwest.",
    },
    {
      heading: "Compute panel count",
      text: "Modern residential panels are 400 to 450 watts each. System kW / 0.4 (or 0.45) = panel count. A 7 kW system is 16 to 18 panels.",
    },
    {
      heading: "Compute roof area",
      text: "Each panel is roughly 20 square feet. Panel count x 20 = required roof area. Add 15 to 25 percent for setbacks, obstructions, and spacing.",
    },
  ],
  caveat:
    "This is a planning number. A real installer quote accounts for roof pitch, azimuth, shading (trees, chimneys, dormers), structural capacity and local permit limits. Two homes on the same street with the same electric bill can need different-sized systems because one has a south-facing roof and the other has an east-west split. Use this calculator to sanity-check a quote, not to replace one.",
  faq: [
    {
      q: "What size solar system do I need?",
      a: "For an average US home using 900 to 1,200 kWh per month, a 7 to 10 kW system (16 to 24 panels) typically covers 90 to 100 percent of annual electric use. The specific size depends on your region's peak sun hours: a 7 kW system in Arizona produces as much as a 10 kW system in Oregon.",
    },
    {
      q: "How many solar panels do I need?",
      a: "For an average US home, 16 to 24 panels is typical. Modern residential panels are 400 to 450 watts each, so a 7 kW system needs about 16 to 18 panels and a 10 kW system needs about 22 to 25 panels. The panel count scales linearly with system size.",
    },
    {
      q: "How much roof space do I need for solar?",
      a: "About 20 square feet per panel. A typical 7 kW residential system needs roughly 320 to 400 square feet of unshaded, structurally sound roof. Setbacks required by local code (usually 18 inches from the roof edge for fire access) and obstructions reduce usable area; most homes with a dedicated south, east or west roof plane have enough.",
    },
    {
      q: "Should I oversize my solar system?",
      a: "In most US states with full net metering, sizing to 100 percent of annual usage is the right target: oversizing produces excess that gets credited at retail or near-retail. In states with capped export (California NEM 3.0, Hawaii), oversizing beyond self-consumption plus battery capacity usually produces electricity that is credited at wholesale rates and does not pay for itself.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-roi-calculator", "solar-battery-payback-calculator"],
};
