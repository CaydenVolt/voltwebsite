import type { Tool } from "../types";

/**
 * Solar speed-to-lead calculator.
 *
 * Models the cost of slow response time against the operator's own lead
 * volume and deal margin. Uses the Harvard Business Review study (Oldroyd,
 * 2011) curve: contact probability drops roughly 10x between a 5-minute
 * response and a 30-minute response, with further decay thereafter. We
 * express this conservatively as a simple decay factor.
 */
export const SPEED_TO_LEAD: Tool = {
  slug: "solar-speed-to-lead-calculator",
  title: "Solar speed to lead calculator",
  metaTitle: "Solar Speed to Lead Calculator: Cost of a Slow Response",
  metaDescription:
    "What slow response time to inbound solar leads actually costs in signed deals and lost revenue per month. Honest numbers using your real lead volume and deal margin.",
  tagline: "The deals a slow response time is costing you every month",
  audience: "Installer",
  intro:
    "Harvard Business Review research shows the odds of a solar lead picking up fall by roughly 10x between a one-minute response and a thirty-minute response. This calculator uses your real monthly lead volume, deal margin and current response time to show what that gap actually costs: in deals, and in dollars.",
  how: [
    {
      heading: "Set the baseline contact rate at under 5 minutes",
      text: "The calculator uses 90 percent contact rate when response time is under 5 minutes. This is the ceiling: fastest-responders in benchmark studies hit roughly this.",
    },
    {
      heading: "Apply the decay curve to current response time",
      text: "Contact rate decays with response time. The calculator uses a smoothed curve roughly: 70 percent at 15 min, 50 percent at 30 min, 30 percent at 1 hr, 15 percent at 4 hrs, 5 percent at 24 hrs.",
    },
    {
      heading: "Multiply by close rate on contacted and deal margin",
      text: "Lost contacts x close rate on contacted x margin per signed deal = lost revenue. We assume the close rate on a late-contacted lead is the same as on an early one; in practice it is lower, so this calculator is conservative.",
    },
    {
      heading: "Scale to monthly volume",
      text: "The result is the monthly revenue the slow response time is costing you, holding every other input constant. Annualise it by multiplying by 12.",
    },
  ],
  caveat:
    "The decay curve is a benchmark. Real contact rates vary by channel: a web form behaves differently from a Facebook lead ad or a phone call. The number here is directional, not a quote. The lever it points at is reliable even where the exact dollar figure moves: faster first response wins meaningfully more deals from the same ad spend.",
  faq: [
    {
      q: "How fast should a solar company respond to a new lead?",
      a: "Under 5 minutes, every time, during business hours. The Harvard study found a 100x drop in qualification odds between a 5-minute response and a 30-minute response. For solar, where leads are shopping multiple installers in parallel, the first installer to make contact wins disproportionately often.",
    },
    {
      q: "What is a realistic speed to lead target?",
      a: "Under 60 seconds for an automated acknowledgement (text message, email receipt) and under 5 minutes for a human conversation during business hours. After hours, a text within 60 seconds that offers to book a time the next day is the honest answer; pretending someone is at the desk at 11pm costs trust.",
    },
    {
      q: "Why does speed matter more than script?",
      a: "Because a lead that never picks up has a close rate of zero regardless of what the script says. Doubling the contact rate roughly doubles revenue from the same ad spend. Improving the script by 10 percent improves revenue by about 10 percent on the leads already contacted; the script lever is multiplicative on the smaller number.",
    },
    {
      q: "Does missed-call text back actually help?",
      a: "Yes, materially. A missed-call text back fires inside seconds of a missed call, acknowledges the enquiry, and in many cases books a time or captures qualification data before the caller tries the next installer. For solar companies with any meaningful inbound phone volume, this one feature typically pays for itself in the first week.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-lead-cost-calculator", "solar-close-rate-calculator"],
};
