import { SITE } from "@/lib/site";
import { BASIC_PLAN, CORE_PLAN, LEADFLOW_PLAN, PLAN, formatPrice } from "@/lib/content/pricing";
import { getAddonServices, getPublicProducts, productHref } from "@/lib/content/products";
import { CATEGORIES, getPillar, postHref } from "@/lib/content/blog";

/**
 * /llms.txt. Served as text/plain so an answer engine fetching the URL sees
 * the content directly, not a shell of HTML.
 *
 * The format follows llmstxt.org: an H1 for the entity, a one-line summary,
 * a short blurb, then grouped bullets of links. The lists are derived from
 * the same content the pages render, so a product renamed, a cluster pillar
 * reassigned or a plan price change updates this file in one build.
 *
 * `force-static` lets the adapter prerender it to a flat text asset; the
 * route holds no per-request state.
 */
export const dynamic = "force-static";

const abs = (path: string) => `${SITE.url}${path}`;
const line = (label: string, url: string) => `- [${label}](${url})`;

export function GET(): Response {
  const publicProducts = getPublicProducts();
  const addons = getAddonServices();

  const productLines = [
    ...publicProducts.map((p) => line(p.name, abs(productHref(p.slug)))),
    ...addons.map((p) => line(`${p.name} (add-on)`, abs(productHref(p.slug)))),
  ];

  const pillarLines = CATEGORIES.map((c) => {
    const pillar = getPillar(c.id);
    return pillar ? line(`${c.name}: ${pillar.title}`, abs(postHref(pillar.slug))) : null;
  }).filter((s): s is string => Boolean(s));

  const keyPageLines = [
    line("Pricing", abs("/pricing")),
    line("About", abs("/about")),
    line("Our process", abs("/our-process")),
    line("Contact", abs("/contact")),
  ];

  const body = [
    `# ${SITE.name} Agency`,
    "",
    "> Solar-industry marketing and sales system agency serving US installers.",
    "",
    `${SITE.name} builds and runs the sales system for US residential solar companies on three monthly plans. Basic at ${formatPrice(BASIC_PLAN)} a month covers the website, on-site SEO and Google Business Profile optimization. Core at ${formatPrice(CORE_PLAN)} a month adds the review funnel, missed-call text-back and automated lead follow-up, with free lead reactivation and a referrals programme bundled in. Leadflow at ${formatPrice(LEADFLOW_PLAN)} a month is Core plus leads delivered to the inbox, on top of the client's own lead budget and a $${LEADFLOW_PLAN.performanceFee?.amount ?? 100} fee per booked appointment. The website build is included at no extra charge on every plan; hosting is billed separately at cost. ${PLAN.setupFee === null ? "No setup fee" : `${formatPrice({ ...PLAN, price: PLAN.setupFee! })} setup fee`}, 30-day money-back on the standard monthly plan. A Quarterly Prepay Plan (three months upfront, bundled with a one-off free Google Business Profile optimization) is offered on sales calls and has a different refund rule, set out in section 7 of the terms. Add-ons sold on top of the plans are the Facebook and Instagram AI Booking Bot and AI Lead Nurturing. Paid-ads services (Google LSAs, Meta Ads, Google Search Ads) are quoted on the sales call for clients who want a specific channel run for them.`,
    "",
    "## Products",
    "",
    ...productLines,
    "",
    "## Pillars",
    "",
    ...pillarLines,
    "",
    "## Pricing & About",
    "",
    ...keyPageLines,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Edge/browser cache sympathetic default. The content changes with the
      // content modules, which is a redeploy, so a short cache is safe.
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
