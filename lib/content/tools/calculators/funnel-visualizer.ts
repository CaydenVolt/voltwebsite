import type { Tool } from "../types";

/**
 * Solar sales funnel visualizer. Lets an installer plug in conversion rates
 * at each stage (contact, booked, sat, signed, installed) and see the
 * resulting monthly output and revenue, so the lever that moves the number
 * most becomes obvious.
 */
export const FUNNEL_VISUALIZER: Tool = {
  slug: "solar-sales-funnel-calculator",
  title: "Solar sales funnel calculator",
  metaTitle: "Solar Sales Funnel Calculator: Leads to Installs, Stage by Stage",
  metaDescription:
    "Model a US solar sales funnel end to end: leads, contact rate, book rate, sit rate, close rate, install rate. See which stage is the biggest lever on monthly revenue.",
  tagline: "Model your solar funnel end to end and see which stage moves the number most",
  audience: "Installer",
  intro:
    "Solar sales funnels have five stages that matter: leads received, leads contacted, appointments booked, appointments sat, deals signed. The install rate adds a sixth. This calculator takes your rate at each stage and shows the monthly output in installs and revenue, so the stage with the biggest marginal impact (and therefore the biggest fix) becomes obvious.",
  how: [
    {
      heading: "Multiply through the stages",
      text: "Leads x contact rate x book rate x sit rate x close rate x install rate = monthly installs. Each stage multiplies on the previous: fixing a 50 percent rate to 60 percent at any stage lifts the final number by the same proportion.",
    },
    {
      heading: "Find the stage with the lowest rate",
      text: "The stage with the lowest conversion rate is the lever that moves the final number most for the same unit of improvement. A 10 percent close rate going to 12 percent moves the number more than an 80 percent contact rate going to 82 percent, in absolute signed deals.",
    },
    {
      heading: "Set a benchmark against industry rates",
      text: "Benchmarks for US residential solar: contact rate 60 to 80 percent (above 80 is excellent); book rate 50 to 70 percent of contacted; sit rate 60 to 80 percent of booked; close rate 20 to 35 percent of sat; install rate 85 to 95 percent of signed. Rates below these ranges are the first place to improve.",
    },
    {
      heading: "Multiply installs by margin for revenue",
      text: "Monthly installs x average margin per signed deal = monthly gross profit from the funnel. Annualise by multiplying by 12.",
    },
  ],
  caveat:
    "Benchmarks are directional. Real rates vary by lead source (cold web vs referral), market (California NEM 3.0 cold leads sit lower; Texas referrals sit higher), season and sales team. Use the calculator with your own measured rates, not benchmarks, for a number that is actually yours. The point of the model is to spot the weakest stage, not to pin an exact revenue figure.",
  faq: [
    {
      q: "What is a typical solar sales funnel conversion rate?",
      a: "For US residential solar, typical rates are: contact 60 to 80 percent, book 50 to 70 percent of contacted, sit 60 to 80 percent of booked, close 20 to 35 percent of sat, install 85 to 95 percent of signed. End-to-end from lead to install, 3 to 8 percent is normal; above 10 percent is excellent and usually implies a strong referral or pre-qualified lead source.",
    },
    {
      q: "Which stage of the solar funnel should I fix first?",
      a: "The one with the lowest conversion rate. The absolute lift at the bottom of the funnel is largest for the same unit of improvement at the weakest stage. In practice, contact rate is the most commonly broken stage for operators without a missed-call text back and speed-to-lead automation; close rate is the most commonly broken for operators without a proposal tool.",
    },
    {
      q: "What is a good contact rate for solar leads?",
      a: "60 to 80 percent is normal, above 80 is excellent. Below 50 percent usually means slow first response (over 15 minutes), no missed-call text back, or weak after-hours coverage. Contact rate is the single biggest multiplier on funnel output; doubling it roughly doubles signed deals from the same ad spend.",
    },
    {
      q: "How do I measure solar funnel rates accurately?",
      a: "Measure in your CRM at each stage with consistent definitions. The common mistake is measuring close rate on sat appointments but reporting it as close rate on total leads (which makes the number look 3 to 5 times better than it is). Pick the denominator deliberately and keep it consistent across months and across reps.",
    },
  ],
  published: "2026-10-31",
  related: ["solar-close-rate-calculator", "solar-lead-cost-calculator"],
};
