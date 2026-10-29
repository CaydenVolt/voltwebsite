import type { Tool } from "../types";

/**
 * Solar ROI (payback) calculator. Homeowner-facing. Installers can embed it
 * on their own sites as a lead magnet.
 *
 * Models payback years and 25-year savings based on system cost (after the
 * 30 percent federal tax credit if applied), current monthly electric bill,
 * expected annual utility rate increase, and system production. Keeps the
 * assumptions explicit so the output is honest, not a sales number.
 */
export const SOLAR_ROI: Tool = {
  slug: "solar-roi-calculator",
  title: "Solar ROI calculator",
  metaTitle: "Solar ROI Calculator: Payback Years and 25-Year Savings",
  metaDescription:
    "Honest solar payback years and 25-year savings based on your system cost, monthly electric bill, expected rate increase and system production. US residential.",
  tagline: "Payback years and 25-year savings for a US residential solar system",
  audience: "Homeowner",
  intro:
    "A solar system pays back when the money you no longer send to the utility exceeds what you paid for the panels. This calculator takes your system cost (after the 30 percent federal tax credit if you qualify), your current monthly electric bill, the rate increase your utility is on track for, and the system's expected production, and returns the payback year and the 25-year net savings.",
  how: [
    {
      heading: "Start from net system cost",
      text: "Gross cost minus the 30 percent federal solar investment tax credit (if you qualify) minus any state rebates. For a typical US residential installation, net cost after the ITC is around $15,000 to $25,000 for a 6 to 10 kW system.",
    },
    {
      heading: "Estimate annual utility savings",
      text: "Current monthly bill x 12 x system offset percentage = annual savings in year one. Most residential systems are sized to offset 80 to 100 percent of annual electric use.",
    },
    {
      heading: "Compound utility rate increases over 25 years",
      text: "Electric rates in most US metros have risen 2 to 5 percent per year over the last decade. The savings in year 25 are substantially higher than in year 1 for exactly this reason.",
    },
    {
      heading: "Find the payback year",
      text: "The year in which cumulative savings cross net system cost. For most residential installations with the ITC, this is 7 to 11 years.",
    },
    {
      heading: "Sum savings through year 25",
      text: "Panels are warranted to produce for 25 years, usually at no less than 85 percent of year-one output. The 25-year sum of savings minus the net system cost is the honest ROI number.",
    },
  ],
  caveat:
    "Every input is an estimate. Real utility rates can jump sharply (as several US markets have in the past three years) or stay flat. System production depends on roof pitch, shading, and local sun hours; a quote with a specific production estimate for your address is more reliable than this calculator. Treat the output as a planning number, not a quote.",
  faq: [
    {
      q: "How long does solar take to pay back?",
      a: "For a typical US residential installation with the 30 percent federal tax credit, payback is usually 7 to 11 years. In high-rate states like California, Hawaii, Massachusetts and New York, payback can be as short as 5 to 7 years. In low-rate states like Louisiana, Wyoming or Washington, payback can be 12 to 15 years without a strong net-metering programme.",
    },
    {
      q: "Is solar still worth it in 2026?",
      a: "In most US states, yes. The federal 30 percent tax credit runs through 2032 at full value, utility rates have risen faster than inflation in most metros, and system costs have fallen enough that even without state incentives the payback is in the 8 to 12 year range for most homes with good sun exposure.",
    },
    {
      q: "What is the 30 percent federal solar tax credit?",
      a: "The federal Residential Clean Energy Credit, extended by the Inflation Reduction Act, lets homeowners claim 30 percent of the cost of a solar system against federal income tax. It applies through 2032, drops to 26 percent in 2033 and 22 percent in 2034, then expires. There is no cap on the credit size.",
    },
    {
      q: "Does solar increase home value?",
      a: "Yes, meaningfully. Zillow and Berkeley Lab research puts the home-value lift at roughly 4 to 5 percent for an owned (not leased) solar system in most US metros. A leased system is harder to transfer and can slow a sale; an owned one is treated as a capital improvement by most buyers and appraisers.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-system-size-calculator", "solar-battery-payback-calculator"],
};
