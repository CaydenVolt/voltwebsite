import type { Tool } from "../types";

/**
 * Solar close rate calculator.
 *
 * Takes the operator's monthly lead volume, close rate on contacted, average
 * deal margin and monthly fixed overhead, and returns the net profit the
 * business is actually making (or losing) each month. Also shows the
 * break-even close rate: the number below which the business is losing
 * money regardless of volume.
 */
export const CLOSE_RATE: Tool = {
  slug: "solar-close-rate-calculator",
  title: "Solar close rate calculator",
  metaTitle: "Solar Close Rate Calculator: What Rate Makes You Profitable",
  metaDescription:
    "Monthly net profit from your lead volume, close rate, deal margin and overhead. Plus the break-even close rate below which the business is losing money regardless of volume.",
  tagline: "What close rate your pipeline actually needs for the business to make money",
  audience: "Installer",
  intro:
    "A close rate is a vanity metric on its own. It becomes a business metric when paired with lead volume, deal margin and your fixed overhead. This calculator takes those four numbers and tells you two things: what monthly profit the current close rate actually produces, and what the break-even close rate is for the overhead you are already carrying.",
  how: [
    {
      heading: "Multiply leads by close rate to get signed deals",
      text: "Monthly leads x close rate (on contacted leads, as a decimal) = signed deals per month. This is the top of the business.",
    },
    {
      heading: "Multiply signed deals by average margin to get gross profit",
      text: "Signed deals x average margin per signed deal = monthly gross profit. Margin is contract value minus hardware, labour, permits, financing fees and sales commission.",
    },
    {
      heading: "Subtract fixed overhead for net profit",
      text: "Monthly gross profit minus monthly fixed overhead = net profit. Overhead includes rent, non-sales salaries, software, insurance and anything else that bills whether or not you close a deal.",
    },
    {
      heading: "Divide overhead by (leads x margin) for break-even close rate",
      text: "The lowest close rate the business can sustain at current lead volume. Below it, the business runs a loss and no amount of extra effort fixes the structural gap between overhead and lead quality.",
    },
  ],
  caveat:
    "Averages hide a lot. One large commercial deal in a month will pull the average margin up and distort the picture; a bad month with no signed deals will not change the overhead number. Use rolling three-month figures where you can, and run the calculator again when any input changes materially.",
  faq: [
    {
      q: "What is a good close rate for a solar company?",
      a: "On contacted leads: 15 to 25 percent is normal for a well-run residential operator, 25 to 35 percent is strong, above 35 percent usually means something unusual (referral-heavy, pre-qualified, or you are measuring only on sat appointments). On total leads received (including the uncontacted), roughly half those numbers.",
    },
    {
      q: "Why does break-even close rate matter?",
      a: "It tells you whether the problem is the sales process or the cost base. If your break-even is 15 percent and you are closing 22 percent, the business works and the fix is on the growth side. If your break-even is 25 percent and you are closing 18 percent, no amount of sales training closes a structural overhead gap: the fix is either higher lead volume, higher margin per deal, or lower overhead.",
    },
    {
      q: "Should I use contract value or margin in the calculation?",
      a: "Margin. Using contract value makes every solar company look wildly profitable and no bank or buyer will believe the numbers. Gross margin per signed deal is contract value minus hardware, labour, permits, financing fees and sales commission; a typical US residential installer sits in the 15 to 25 percent range.",
    },
    {
      q: "What counts as fixed overhead for this calculator?",
      a: "Any cost that bills whether or not you close a deal: rent, non-sales salaries, insurance, software subscriptions, phone, accounting, fixed marketing retainers. Variable costs that scale with signed deals (sales commission, financing fees, materials) belong inside the deal margin, not in overhead.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-lead-cost-calculator", "solar-speed-to-lead-calculator"],
};
