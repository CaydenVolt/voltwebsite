import type { Tool } from "../types";

export const LEAD_TO_INSTALL: Tool = {
  slug: "solar-lead-to-install-conversion-calculator",
  title: "Lead-to-install conversion calculator",
  metaTitle: "Solar Lead-to-Install Conversion Calculator: Funnel Rate Benchmark",
  metaDescription:
    "Calculate your lead-to-install conversion rate and compare to US solar industry benchmarks. See how many leads you need to hit install targets.",
  tagline: "What percentage of leads turn into installs, and how many leads you need",
  audience: "Installer",
  intro:
    "The lead-to-install conversion rate is the single most important funnel metric for a solar sales operation. US residential solar industry averages run 3 to 8 percent (paid lead to signed contract) and 70 to 85 percent (signed contract to install). This calculator computes your current rates and shows how many leads you need to generate to hit a monthly install target.",
  how: [
    {
      heading: "Count leads",
      text: "Leads = inquiries from paid search, organic, referrals, door-knocking, canvassers. Only count qualified leads (home owner, suitable roof, meets utility criteria). Unqualified leads inflate the funnel and make your conversion math wrong.",
    },
    {
      heading: "Count signed contracts",
      text: "Signed = customer has signed the installation contract. Not 'quoted' or 'interested'. Contract-to-install cancellation runs 15 to 30 percent in US solar, so track cancellations separately from the signed count.",
    },
    {
      heading: "Count installs",
      text: "Installs = permission-to-operate (PTO) complete and system producing. Not 'installed but awaiting PTO'. US solar PTO delays run 2 to 8 weeks after physical install depending on utility.",
    },
    {
      heading: "Compute conversion rates and lead target",
      text: "Lead-to-contract rate = contracts / leads. Contract-to-install rate = installs / contracts. Overall lead-to-install rate = lead-to-contract * contract-to-install. Monthly lead target to hit install goal = (install goal / overall conversion rate).",
    },
  ],
  caveat:
    "Conversion rates vary dramatically by lead source. Door-knock leads typically convert at 5 to 10 percent. Paid search leads at 3 to 7 percent. Referral leads at 15 to 30 percent. SEO organic leads often convert highest because of search intent. Compute your conversion separately for each lead source; a blended average hides the sources that work and the ones that burn money.",
  faq: [
    {
      q: "What is a good lead-to-install conversion rate in solar?",
      a: "US residential solar averages 2 to 5 percent overall (lead to installed system). Top-performing operators hit 8 to 12 percent through tight lead qualification, fast speed-to-lead and strong follow-up discipline. Rates below 2 percent usually indicate a lead-quality or follow-up problem.",
    },
    {
      q: "What is the contract-to-install cancellation rate?",
      a: "US residential solar cancellation runs 15 to 30 percent of signed contracts. The main drivers are financing fall-through (lender declines), utility interconnection delays, buyer's remorse, and permit office rejections. Operators who verify financing pre-contract and prequalify roofs see lower cancellation.",
    },
    {
      q: "How many leads do I need per install?",
      a: "At the US industry average 3 percent overall conversion, you need about 33 leads per install. At a top-performer 8 percent, you need about 13. The practical difference: a 100-install-per-month operation needs 3,300 leads at industry average vs 1,300 at top performance, which changes marketing budget dramatically.",
    },
    {
      q: "How do I improve lead-to-install conversion?",
      a: "Three highest-impact changes: (1) speed-to-lead under 5 minutes (closes 5 to 10x better than 30+ minute response), (2) qualify roofs with satellite imagery before setting appointments (removes 20 to 40 percent of waste), (3) tight follow-up sequences on unresponded leads (recovers 15 to 25 percent of apparent dead leads).",
    },
  ],
  published: "2026-11-02",
  related: ["solar-close-rate-calculator", "solar-speed-to-lead-calculator", "solar-lead-cost-calculator"],
};
