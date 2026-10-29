import type { Tool } from "../types";

/**
 * Solar lead cost calculator.
 *
 * Answers the question every US solar operator buying leads or running ads
 * asks: "what should I actually be willing to pay for a lead?" The maths is
 * straightforward (margin per deal x close rate x contact rate = breakeven
 * cost per lead) and the value is in doing it with the operator's own
 * numbers so the figure is theirs, not a benchmark.
 */
export const LEAD_COST: Tool = {
  slug: "solar-lead-cost-calculator",
  title: "Solar lead cost calculator",
  metaTitle: "Solar Lead Cost Calculator: What a Solar Lead Is Worth",
  metaDescription:
    "What a US solar installer can afford to pay per lead based on average deal margin, close rate and contact rate. Honest break-even and target cost per lead.",
  tagline: "What you can afford to pay per solar lead, based on your real close rate and margin",
  audience: "Installer",
  intro:
    "A solar lead is worth whatever your margin per signed deal is, multiplied by the fraction of leads that close. This calculator takes your average deal margin, close rate and contact rate and gives you two numbers: the absolute break-even cost per lead, and a target cost per lead that leaves room for everything else the business pays for.",
  how: [
    {
      heading: "Start with the margin you make on one signed deal",
      text: "Not revenue. The gross margin: contract value minus panels, inverters, racking, labour, permits, financing fees and sales commission. For most US residential solar installers this is roughly 15 to 25 percent of contract value.",
    },
    {
      heading: "Apply the close rate on leads that contact",
      text: "Of the leads you successfully contact (not every lead that comes in), what percentage sign? For a well-run operator this is typically 15 to 30 percent of contacted leads, lower for cold web form leads, higher for referrals.",
    },
    {
      heading: "Apply the contact rate",
      text: "Of the leads that come in, what percentage do you actually get on the phone? Below 50 percent is common and solvable. Above 80 percent is excellent. Speed to lead is the single biggest driver here.",
    },
    {
      heading: "Multiply through for break-even",
      text: "Margin per deal x close rate on contacted x contact rate = the maximum you can pay per lead and still break even on gross margin. Everything above that is losing money per deal; everything below that is contribution to overhead.",
    },
    {
      heading: "Set a target cost per lead",
      text: "The target is the break-even multiplied by the fraction of margin you want to keep after lead cost. The calculator uses 50 percent as a default: half the margin stays, half goes to lead cost. Tighten or loosen that slider for your own operation.",
    },
  ],
  caveat:
    "The output is a planning number, not a quote. Real lead costs vary by channel (Google Search is cheaper than Facebook; LSAs are different again), by season, and by competition in your metro. Use this to set a ceiling you refuse to pay above, and use real channel reporting to see which sources sit under it.",
  faq: [
    {
      q: "How much should a solar company pay per lead?",
      a: "The honest answer is: whatever leaves margin after you close them. For a residential solar installer with 20 percent gross margin on a $25,000 contract, a 20 percent close rate on contacted leads, and a 70 percent contact rate, the break-even is around $700 per lead. The target to actually make money is usually half that, around $350. Use the calculator above with your own numbers for a figure that is actually yours.",
    },
    {
      q: "What is a good close rate for solar leads?",
      a: "On leads that you successfully contact, 15 to 25 percent is normal, 25 to 35 percent is strong, and above 35 percent usually means you are either very good or you are measuring against a filtered subset. On total leads received (including the uncontacted), halve those numbers.",
    },
    {
      q: "Why does contact rate matter so much?",
      a: "A lead you never speak to has a close rate of zero. Doubling your contact rate roughly doubles the revenue you get from the same ad spend, which is why speed to lead and missed-call text back carry more weight than almost any other single lever.",
    },
    {
      q: "Is this different for commercial solar leads?",
      a: "Yes, meaningfully. Commercial deals have longer cycles, higher margins per deal, lower close rates and much larger lead values. The maths is the same, but the inputs are different: a commercial lead is often worth 10 to 50 times a residential one, with a much smaller close rate.",
    },
    {
      q: "Should I include my sales commission in the margin?",
      a: "Yes. Any variable cost that scales with signed deals belongs in the margin figure, because paying extra per lead and paying extra per sale are economically the same thing. Fixed overhead (office, salaries that are not deal-tied) stays out.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-close-rate-calculator", "solar-google-ads-budget-calculator"],
};
