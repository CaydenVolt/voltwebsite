import type { Comparison } from "../types";

export const MAILCHIMP: Comparison = {
  slug: "mailchimp",
  competitor: {
    name: "Mailchimp",
    tagline: "Email marketing and small-business marketing automation, popular with service businesses using free or low-cost tiers",
    category: "Generic CRM",
  },
  title: "Volt Relay vs Mailchimp for US solar companies",
  metaTitle: "Volt Relay vs Mailchimp: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Mailchimp for US solar: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "Mailchimp is the right pick for a solar operator whose only need is email marketing and basic contact management, and who will handle website, reviews, SEO and SMS elsewhere. Volt Relay is the right pick for an operator who wants the complete sales and marketing system (pipeline plus website plus text-back plus follow-up plus reviews plus SEO) built in on one flat monthly fee.",
  published: "2026-11-02",
  pickVolt: [
    "You want more than email marketing: a conversion website, missed-call text back, review funnel and on-site SEO.",
    "You want pipeline tracking shaped around solar deal flow, not generic email list management.",
    "You want one flat $297 a month instead of Mailchimp's per-contact tiered pricing plus the four or five tools you still need.",
    "You want SMS follow-up alongside email; Mailchimp SMS is a US-only add-on that scales with volume.",
  ],
  pickOther: [
    "You run multiple services beyond solar and your primary need is email marketing with a decent template editor.",
    "You have a small contact list (under 500) and want to use Mailchimp's free tier for basic email sends.",
    "You already have a working website, CRM, review tool and SMS stack and the only gap is email marketing.",
    "You want a mature content calendar and social-posting layer alongside email, which Mailchimp has added over the past three years.",
  ],
  matrix: [
    {
      group: "Email marketing",
      rows: [
        { feature: "Email templates", volt: "Solar-shaped templates included.", other: "Deep template library; strong WYSIWYG editor." },
        { feature: "Automation workflows", volt: "Solar sequences pre-built (lead response, follow-up, install, review).", other: "Customer Journey builder; horizontal, needs configuration for solar." },
        { feature: "Deliverability", volt: "Transactional + marketing on managed infrastructure.", other: "Strong deliverability on the paid tiers; free tier shares reputation with other free senders." },
      ],
    },
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in. Fires inside seconds.", other: "Not a Mailchimp feature. Needs a third-party SMS integration." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Mailchimp automation can send email on form submit; multi-channel speed-to-lead needs configuration." },
        { feature: "SMS follow-up", volt: "Built in as part of the stack.", other: "Mailchimp SMS is a US-only add-on priced per message volume." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "Not a Mailchimp feature. Needs a third-party review tool." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee.", other: "Mailchimp has a website builder (basic). Not a conversion-focused solar site." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local pages.", other: "Mailchimp's website builder handles basic SEO fields but not local-business schema or structured content for solar." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Mailchimp's CRM is contact-and-tag based, not pipeline-stage based. Not a sales CRM in the traditional sense." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-contact charge.", other: "Per-contact tiered. Free up to 500 contacts; Essentials from $13/mo, Standard from $20/mo, Premium from $350/mo. Prices scale rapidly as contact count grows." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "Mailchimp has a free tier for up to 500 contacts with limited sends. Paid tiers scale with contact count: Essentials $13/mo for 500, scaling to $100+/mo at 10,000. Standard $20/mo for 500, scaling to $150+/mo. Premium starts at $350/mo. For a growing solar operator with 5,000+ leads, Mailchimp Standard commonly lands at $75 to $150/mo, which is before adding website, review tool, SMS and SEO costs.",
    note: "Mailchimp publishes current pricing on mailchimp.com. Confirm live prices before deciding.",
  },
  solarFit:
    "Mailchimp is a legitimate email marketing tool, well-liked for its template editor, deliverability and horizontal small-business suite. The gap for a solar operator is that email is one piece of a solar sales system; the installer still needs a conversion website, pipeline tracking, missed-call text back, SMS follow-up, a review funnel and on-site SEO. Mailchimp has moved into some of these spaces (basic website builder, Customer Journey automation, SMS add-on) but none at the depth or integration a solar operator needs.",
  verdict:
    "Mailchimp is the right pick for a solar operator whose only need is email marketing and who has the other pieces working elsewhere, especially if the contact list is small enough for the free or Essentials tier. For most growing solar installers, Volt Relay delivers email alongside pipeline, website, text-back, SMS follow-up, reviews and SEO on one flat fee, usually at lower total monthly cost than Mailchimp plus the stack it depends on.",
  faq: [
    {
      q: "Is Mailchimp good for solar companies?",
      a: "Mailchimp is a solid horizontal email marketing tool with a strong template editor and decent deliverability on paid tiers. It is weak as a complete system for a solar installer because it is email-focused: no built-in missed-call text back, no sales pipeline tracking, no review funnel, no on-site SEO for a solar website. Solar operators using Mailchimp typically pair it with four or five other tools.",
    },
    {
      q: "Can Volt Relay replace Mailchimp for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the email follow-up alongside the pipeline, website, text-back, SMS and reviews on one monthly fee. Mailchimp is stronger at email-specific features (template editor, deep campaign analytics, A/B testing on sends); most solar operators do not need that depth once the end-to-end system is in one place.",
    },
    {
      q: "How much does Mailchimp cost for a solar company?",
      a: "Free up to 500 contacts; paid tiers scale with contact count. A solar operator with 5,000 leads typically lands at $75 to $150/mo on Mailchimp Standard. Adding the website, review tool, SMS and SEO brings the total stack cost to $500 to $1,500/mo. Volt Relay is flat $297/mo with those pieces included.",
    },
    {
      q: "Does Mailchimp do SMS?",
      a: "Yes, as a US-only add-on priced per message volume. Mailchimp SMS launched in 2023 and is still less mature than dedicated SMS platforms. For solar missed-call text back and SMS follow-up at scale, Mailchimp SMS works but requires configuration and ongoing volume pricing. Volt Relay includes SMS as part of the flat fee.",
    },
    {
      q: "Does Mailchimp include a solar website?",
      a: "No. Mailchimp has a basic website builder that works for a simple landing page but not for a solar-industry conversion website with trust signals, local SEO, lead-capture flows and schema markup. Pairing Mailchimp with a solar website agency adds $500 to $1,500 to the monthly stack cost.",
    },
  ],
};
