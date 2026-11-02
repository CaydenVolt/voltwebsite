import type { Tool } from "../types";

export const SHADE_IMPACT: Tool = {
  slug: "solar-shade-impact-calculator",
  title: "Solar shade impact calculator",
  metaTitle: "Solar Shade Impact Calculator: Annual Yield Loss From Tree Shade",
  metaDescription:
    "Estimate how much annual solar production you lose to tree shade or neighbouring buildings. Honest shade-to-yield modelling for US residential rooftops.",
  tagline: "How much production you lose to shade on each part of the array",
  audience: "Homeowner",
  intro:
    "Shade on a solar panel does not just reduce the shaded cell's output; it affects the whole string unless the inverter architecture isolates the loss. This calculator estimates annual yield loss based on the fraction of your array that is shaded, when during the day the shade falls, and whether you have string inverters, microinverters or DC optimisers.",
  how: [
    {
      heading: "Measure the shaded fraction",
      text: "Shade analysis tools (SunEye, Aurora, HelioScope) report the fraction of your array area that is shaded at each hour. For a quick estimate: look at your roof during the hours of 10am to 2pm in your climate's main production season and estimate what percentage of the array is in shadow.",
    },
    {
      heading: "Weight by production hours",
      text: "Shade from 11am to 3pm costs 2 to 3x more than shade at 7am or 6pm because midday hours produce most of the daily energy. Morning shade from an eastern tree is less costly than afternoon shade from a western tree.",
    },
    {
      heading: "Adjust for inverter architecture",
      text: "String inverters: one shaded panel can reduce the entire string's output. DC optimisers or microinverters: shade loss is isolated to the affected panel, so overall yield loss roughly matches the shaded fraction. For string systems, apply a 1.5x to 2x multiplier on the shade loss estimate.",
    },
    {
      heading: "Project annual yield loss",
      text: "Multiply the time-weighted shaded fraction by the inverter-architecture multiplier. Result is percentage annual yield reduction. For example: 20 percent midday shade on a string system = 20% * 1.5 = roughly 30 percent annual yield loss.",
    },
  ],
  caveat:
    "This is a planning estimate, not a shade analysis. A professional shade audit with SunEye, Aurora or HelioScope produces hour-by-hour data that is substantially more accurate. Deciduous trees that shade in summer but not winter have less impact than year-round shade from evergreens or buildings. Honest shade audits before quoting save both parties from year-one disappointment.",
  faq: [
    {
      q: "How much production does one shaded panel cost?",
      a: "On a string inverter system, a fully shaded panel can reduce the entire string output by 50 to 75 percent (not just the shaded panel). On DC-optimised or microinverter systems, the loss is isolated to the affected panel. The difference is why installers specify DC optimisers or microinverters for roofs with any shade exposure.",
    },
    {
      q: "What inverter architecture is best for shaded roofs?",
      a: "DC optimisers (SolarEdge, Tigo) or microinverters (Enphase, APsystems) are the practical choice for any roof with meaningful shade exposure. The hardware costs 5 to 15 percent more than string inverters but recovers the cost quickly through isolated shade loss.",
    },
    {
      q: "Is deciduous tree shade different from evergreen shade?",
      a: "Yes substantially. Deciduous trees (oaks, maples) drop leaves in autumn, so winter production is often unaffected while summer production takes a hit. Evergreen trees (pines, firs) shade year-round. Shade analysis software models both; a quick visual estimate should account for the leafy vs non-leafy seasons.",
    },
    {
      q: "Can shade analysis be done without climbing the roof?",
      a: "Yes. Modern shade analysis uses satellite imagery combined with LIDAR elevation data (Aurora, HelioScope) to model shade without a site visit. Older tools (SunEye) require a ladder visit. Most reputable installers use satellite-based analysis for the first-pass estimate and ladder shade audits only when the satellite data is ambiguous.",
    },
  ],
  published: "2026-11-02",
  related: ["solar-roi-calculator", "solar-system-size-calculator"],
};
