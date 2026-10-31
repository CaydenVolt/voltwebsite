import type { Tool } from "../types";

/**
 * Solar follow-up ROI calculator. Compares the deals a well-run follow-up
 * sequence closes against a baseline of "touch once and move on" that is
 * still common at smaller installers.
 */
export const FOLLOW_UP_ROI: Tool = {
  slug: "solar-follow-up-roi-calculator",
  title: "Follow-up ROI calculator for solar",
  metaTitle: "Solar Follow-Up ROI Calculator: Deals Won by Nurturing Cold Leads",
  metaDescription:
    "The extra deals and revenue a multi-touch solar follow-up sequence wins vs. a single first touch. Honest numbers using your real cold-lead volume and close rate.",
  tagline: "The extra deals you win by nurturing the leads who went quiet",
  audience: "Installer",
  intro:
    "Most residential solar leads do not sign on the first conversation. Research from NAR and others shows 60 to 80 percent of eventual signed deals come from the second contact onwards; roughly half of all leads sign between the fifth and twelfth touch. This calculator shows the extra signed deals a proper follow-up sequence captures against a one-and-done baseline.",
  how: [
    {
      heading: "Start with monthly leads that went cold on first contact",
      text: "A cold lead for this purpose is a lead that was reached once (phone, text, email) but did not book an appointment or sign. Most installers see 50 to 70 percent of total leads fall into this bucket after first contact.",
    },
    {
      heading: "Apply the single-touch baseline close rate",
      text: "For solar operators doing one first touch and no systematic follow-up, roughly 5 to 10 percent of cold leads self-recover (call back on their own, respond to a drip email). The calculator uses 7 percent as the single-touch baseline.",
    },
    {
      heading: "Apply the multi-touch sequence close rate",
      text: "A well-configured solar follow-up sequence (text + email, 6 to 10 touches over 90 days) typically converts 15 to 25 percent of cold leads into booked appointments. The calculator uses 20 percent as the sequence close rate.",
    },
    {
      heading: "Multiply by close rate on booked appointments and deal margin",
      text: "Additional booked appointments x close rate on appointments x margin per signed deal = the monthly revenue the follow-up sequence recovers. Annualise by multiplying by 12.",
    },
  ],
  caveat:
    "The uplift from 7 percent to 20 percent cold-lead recovery is a benchmark, not a guarantee. Real sequence performance depends on content quality (solar-shaped vs generic), timing (90-day window captures almost all solar deals), and channel mix (text outperforms email at the top of the sequence). The exact dollar figure moves; the lever is reliable.",
  faq: [
    {
      q: "How many times should a solar company follow up with a lead?",
      a: "Six to twelve touches over a 90-day window is the honest answer for residential solar. Most lead vendors and sales benchmarks (Sales Insights Lab, Harvard Business Review) show roughly half of closed-won deals come between the fifth and twelfth touch. Below six touches, you leave money on the table; above twelve, diminishing returns set in.",
    },
    {
      q: "Should solar follow-up be email, text or phone?",
      a: "All three, in the right order. Text at the first and second touch (highest open rate), phone at the third and fourth touch (highest conversion to appointment), email in between (lowest cost per touch, best for carrying content and setting up the next call). The sequence should rotate channel rather than hammering one.",
    },
    {
      q: "How long should a solar follow-up sequence run?",
      a: "90 days is the honest window for residential solar. Most leads who are going to sign in a given cycle will sign within 90 days of first contact. Beyond that, leads should move to a quarterly re-engagement cadence rather than being dropped entirely, since many solar prospects research for 6 to 18 months before signing.",
    },
    {
      q: "What should a solar follow-up sequence contain?",
      a: "The first touch confirms the enquiry and books time. Touches two to five answer the questions a solar prospect actually asks (payback, financing options, panel quality, warranty, local references). Touches six to twelve layer in trust (recent install photos, reviews, utility rate increases) and new reasons to re-engage (seasonal incentive deadlines, tax credit timing).",
    },
  ],
  published: "2026-10-31",
  related: ["solar-speed-to-lead-calculator", "solar-close-rate-calculator"],
};
