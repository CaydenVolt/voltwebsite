import type { Tool } from "../types";

/**
 * Solar sales commission calculator. Lets an installer owner model different
 * commission structures (flat %, tiered, bonus) against a given rep's
 * monthly performance to see take-home for the rep and gross profit after
 * commission for the business.
 */
export const SALES_COMMISSION: Tool = {
  slug: "solar-sales-commission-calculator",
  title: "Solar sales commission calculator",
  metaTitle: "Solar Sales Commission Calculator: Flat, Tiered, Bonus Models",
  metaDescription:
    "Model US solar sales commission structures: flat percentage, tiered, volume bonus. See rep take-home and business gross margin after commission at different performance levels.",
  tagline: "Model rep take-home and business gross margin for solar sales commission structures",
  audience: "Installer",
  intro:
    "Solar sales commission is the single biggest line item on most installer P&Ls after hardware and labour. The commission structure you pick drives rep behaviour as much as sales script and training do. This calculator takes a rep's monthly signed-deal count, average contract value and your commission structure, and shows take-home for the rep and gross margin after commission for the business.",
  how: [
    {
      heading: "Start with the rep's monthly signed-deal count and average contract value",
      text: "Both are observable from the CRM. Average contract value for US residential solar is typically $18,000 to $35,000 depending on system size, state and financing attachment.",
    },
    {
      heading: "Pick a commission structure",
      text: "Three common models: flat percentage of contract value (simplest; typically 4 to 8 percent of contract value), flat dollars per signed watt (typical range $0.15 to $0.45 per watt), or tiered with a bonus above a monthly deal threshold.",
    },
    {
      heading: "Compute rep take-home",
      text: "Signed deals x contract value x commission rate = monthly take-home. For a tiered model, apply the lower rate below the threshold and the higher rate above.",
    },
    {
      heading: "Compute gross margin after commission",
      text: "Monthly contract revenue x gross margin percentage minus commission paid = gross margin dollars the business keeps per rep. This is the number that pays for everything else: lead cost, overhead, owner profit.",
    },
  ],
  caveat:
    "Commission structure design is strategy, not maths. Flat percentage is simple and transparent but does not reward high performers extra; tiered structures reward volume but create end-of-month gaming at the tier threshold; per-watt structures align with system size but can under-reward sales reps who close small-system deals in high-rate states where small systems still produce strong margins. Pick the structure that matches what you want reps to actually do.",
  faq: [
    {
      q: "What is a typical solar sales commission rate?",
      a: "In the US, residential solar commission commonly runs 4 to 8 percent of contract value, or $0.15 to $0.45 per signed watt. Door-to-door commission is often higher ($0.40 to $0.80 per watt) because the acquisition cost is embedded in the commission; office-based or inbound-lead reps are usually lower.",
    },
    {
      q: "Should solar commission be flat or tiered?",
      a: "Flat is simpler and more transparent; tiered rewards high performance explicitly. The honest trade-off is that tiered structures tend to create end-of-month behaviour (reps pushing to clear the tier threshold with weaker deals), while flat structures tend to under-reward the top performers who could otherwise be your retention anchors. Mid-size installers often land on flat percentage with a quarterly or annual bonus layered on top.",
    },
    {
      q: "What is a reasonable gross margin after commission?",
      a: "For a residential solar installer, gross margin after sales commission typically lands 10 to 18 percent of contract value. Below 10 percent, the business runs thin after overhead. Above 18 percent, either the commission is low (and you risk losing reps) or the contract pricing is high (and the close rate suffers).",
    },
    {
      q: "Should solar commission be paid on contract value or margin?",
      a: "Almost always contract value. Paying on margin creates perverse incentives (reps negotiating against the home office on hardware spec to protect their commission) and makes the pay structure opaque to reps. Pay on contract value and manage margin at the pricing stage, not the commission stage.",
    },
  ],
  published: "2026-10-31",
  related: ["solar-close-rate-calculator", "solar-lead-cost-calculator"],
};
