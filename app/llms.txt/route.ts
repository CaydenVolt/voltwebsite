import { SITE } from "@/lib/site";
import { PLAN, formatPrice } from "@/lib/content/pricing";
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
    `${SITE.name} builds and runs the complete sales system for US residential solar companies on one monthly subscription: ${formatPrice()} a month, six products included, ${
      PLAN.setupFee === null ? "no setup fee" : `a ${PLAN.setupFee} setup fee`
    }, 30-day money-back. Add-ons such as Google Ads management, advanced SEO, AI lead nurturing and database reactivation are priced separately on top of the plan.`,
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
