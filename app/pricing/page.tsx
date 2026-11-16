import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { IndexedRow } from "@/components/ui/IndexedRow";
import { Reveal } from "@/components/ui/Reveal";
import { DitheredImage } from "@/components/ui/DitheredImage";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PaidAds } from "@/components/sections/PaidAds";
import { pad } from "@/lib/format";
import { SITE, bookingHref } from "@/lib/site";
import { getAddonServices, getPublicProducts, productHref } from "@/lib/content/products";
import {
  BASIC_PLAN,
  CORE_PLAN,
  HOSTING_FEE,
  LEADFLOW_PLAN,
  PLAN,
  PLANS,
  PRICING_ADDONS,
  PRICING_FAQ,
  REPLACES,
  currencySymbol,
  formatPrice,
  priceDigits,
  type Plan,
} from "@/lib/content/pricing";
import { JsonLd } from "@/components/seo/JsonLd";
import { absolute, faqSchema, planOfferSchema } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";

const TITLE = `Pricing: three plans from ${formatPrice(BASIC_PLAN)} a month, website included`;
const DESCRIPTION = `Three plans for US solar companies — Basic at ${formatPrice(BASIC_PLAN)} a month, Core at ${formatPrice(CORE_PLAN)}, Leadflow at ${formatPrice(LEADFLOW_PLAN)} plus budget and a per-appointment fee. Website build is included free on every plan. No contracts${
  PLAN.setupFee === null ? ", no setup fee" : ""
}.`;

export function generateMetadata(): Metadata {
  const url = `${SITE.url}/pricing`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url,
      siteName: SITE.name,
      type: "website",
    },
  };
}

/** The price as a typographic statement: symbol small, digits enormous, interval small, one baseline. */
function Price({ plan = PLAN, className = "" }: { plan?: Plan; className?: string }) {
  return (
    <p className={`flex items-baseline gap-2 font-display text-fg ${className}`}>
      <span className="text-display-md">{currencySymbol(plan)}</span>
      <span className="text-price">{priceDigits(plan)}</span>
      <span className="label pl-1 text-muted">/{plan.interval}</span>
    </p>
  );
}

/**
 * A single plan card on the pricing page. Shared shape across Basic, Core
 * and Lead Generation, with a few small variations:
 *
 *   - `highlighted` adds the accent border and the pinned "badge" label.
 *   - `bonuses` renders a second orange-headed list ("Free with Core, plus")
 *     under the primary products list, for Core and Lead Generation.
 *   - If the plan carries a `performanceFee` (Lead Generation), the fee and
 *     the client-budget line appear as bold sub-lines under the base price
 *     so the full cost structure is on the card rather than in the body.
 *
 * Products list renders as linked rows for plans whose products have their
 * own pages. A product without a `page` field (e.g. the short-form GBP
 * Optimization or On-Site SEO entries) renders as a plain line.
 */
type PlanProduct = { slug: string; name: string; page?: unknown };

function PlanCard({
  plan,
  products,
  bonuses,
  source,
  highlighted = false,
  badge,
}: {
  plan: Plan;
  products: readonly PlanProduct[];
  bonuses?: readonly PlanProduct[];
  source: string;
  highlighted?: boolean;
  badge?: string;
}) {
  const borderClass = highlighted ? "border-2 border-accent" : "border border-line";
  const basePriceLabel = plan.performanceFee ? "Base fee" : null;

  return (
    <div
      data-surface="ink"
      className={`relative flex flex-col ${borderClass} bg-ink px-6 py-10 text-bone sm:px-10 sm:py-12`}
    >
      {highlighted && badge ? (
        <span className="absolute -top-4 right-6 inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-body-sm font-semibold uppercase tracking-wider text-ink sm:right-10">
          {badge}
        </span>
      ) : null}

      <p className="label text-accent">{plan.name}</p>
      {basePriceLabel ? (
        <p className="label mt-3 text-muted">{basePriceLabel}</p>
      ) : null}
      <Price plan={plan} className={basePriceLabel ? "mt-1" : "mt-6"} />

      {/* "Website + hosting included" callout, pinned right under the price
          on every card so a skimmer sees it without reading the body. Accent
          border + check icon + accent label gives it the loudest badge
          treatment on the dark ink card without using the primary accent
          button colour, which stays reserved for the "Best offer" pin on
          Core. Previously called out "Hosting billed separately"; changed
          2026-11-16 at the owner's instruction — hosting is in the plan
          price, not a line item billed on top. */}
      <div className="mt-5 flex items-center gap-3 border border-accent bg-bone/5 px-4 py-3">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="size-5 shrink-0 fill-accent"
        >
          <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
        </svg>
        <p className="label text-accent">
          <span className="font-semibold">Website + hosting included.</span>{" "}
          <span className="text-bone-muted">Both in the plan price.</span>
        </p>
      </div>

      {plan.performanceFee ? (
        <ul className="mt-4 space-y-2 border-t border-line pt-4">
          {plan.clientBudgetRequired ? (
            <li className="label text-bone">
              <span className="text-accent">+</span>{" "}
              Your own lead budget, paid directly
            </li>
          ) : null}
          <li className="label text-bone">
            <span className="text-accent">+</span>{" "}
            {formatPrice({ ...plan, price: plan.performanceFee.amount })} per{" "}
            {plan.performanceFee.unit}
          </li>
        </ul>
      ) : null}

      {/* Leadflow-only highlight: appointments are not just leads-in-your-inbox,
          they land as actual booked slots on the client's calendar. This is the
          thing that lets a Leadflow client show up and run surveys instead of
          chasing enquiries, so it earns the loudest treatment under the price
          block. Accent-bordered badge with a calendar glyph, same visual
          weight as the website + hosting callout above. Rendered only when
          plan.id === "leadflow" so the Basic and Core cards stay clean. */}
      {plan.id === "leadflow" ? (
        <div className="mt-3 flex items-center gap-3 border border-accent bg-bone/5 px-4 py-3">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-5 shrink-0 fill-accent"
          >
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14zm0-12H5V6h14z" />
          </svg>
          <p className="label text-accent">
            <span className="font-semibold">Appointments booked</span>{" "}
            <span className="text-bone-muted">straight into your calendar.</span>
          </p>
        </div>
      ) : null}

      {plan.subheading ? (
        <p className="mt-5 text-body text-muted">{plan.subheading}</p>
      ) : null}

      <ul className="mt-8 border-t border-line">
        {products.map((product, i) => {
          /* Functional Website gets a "Free" pill next to its name on every
             plan card. The owner's instruction: signal explicitly, inside
             the products list, that the website row is at zero marginal
             cost — a reader who scans numerals rather than badges should
             still catch it. */
          const isFreeWebsite = product.slug === "functional-website";
          const row = (
            <div className="flex items-baseline gap-3 py-4 sm:gap-4">
              <span className="label shrink-0 text-accent">{pad(i + 1)}</span>
              <span className="font-display text-item">{product.name}</span>
              {isFreeWebsite ? (
                <span className="label inline-flex shrink-0 items-center rounded-full border border-accent px-2 py-0.5 text-accent">
                  Free
                </span>
              ) : null}
              {product.page ? (
                <span aria-hidden className="ml-auto shrink-0 text-body-sm">
                  &rarr;
                </span>
              ) : null}
            </div>
          );
          return (
            <li key={product.slug} className="border-b border-line">
              {product.page ? (
                <Link
                  href={productHref(product.slug)}
                  data-cursor="grow"
                  className="group block transition-colors duration-100 hover:text-bone-muted"
                >
                  {row}
                </Link>
              ) : (
                row
              )}
            </li>
          );
        })}
      </ul>

      {bonuses && bonuses.length > 0 ? (
        <>
          <p className="label mt-7 text-accent">
            {plan.id === "core" ? "Free with Core, plus" : "Free with the plan, plus"}
          </p>
          <ul className="mt-3 border-t border-line">
            {bonuses.map((b, i) => (
              <li key={b.slug} className="border-b border-line">
                <div className="flex items-baseline gap-4 py-4">
                  <span className="label shrink-0 text-accent">{pad(i + 1)}</span>
                  <span className="font-display text-item">{b.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
        {plan.terms.map((t) => (
          <li key={t} className="label text-muted">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-9">
        <Button
          href={bookingHref(source)}
          source={source}
          external
          className="w-full justify-center"
        >
          Book a 20-minute call
        </Button>
      </div>

      <p className="mt-5 text-body-sm text-muted">
        Pass-through phone and messaging billed on top at cost.
      </p>
    </div>
  );
}

export default function PricingPage() {
  const allPublic = getPublicProducts();
  const allAddons = getAddonServices();

  /**
   * Resolve a plan's `includes` and `bonusSlugs` to product objects, in the
   * declared order, drawing from both public and addon pools. A slug that is
   * not in either registry is filtered out silently; the pricing.ts module is
   * the source of truth for what should appear, and a mismatch there is the
   * canonical place to fix it.
   */
  function productsFor(slugs: readonly string[]) {
    return slugs
      .map((slug) => allPublic.find((p) => p.slug === slug) ?? allAddons.find((p) => p.slug === slug))
      .filter((p): p is NonNullable<typeof p> => p !== undefined);
  }

  const basicProducts = productsFor(BASIC_PLAN.includes);
  const coreProducts = productsFor(CORE_PLAN.includes);
  const coreBonuses = productsFor(CORE_PLAN.bonusSlugs ?? []);

  /**
   * The two add-ons rendered on the pricing page outside the three plans:
   * AI Lead Nurturing and the Facebook + Instagram AI Booking Bot. Resolved
   * from PRICING_ADDONS so adding a third add-on is a one-line change in
   * pricing.ts rather than another edit here.
   */
  const addons = PRICING_ADDONS
    .map((slug) => allAddons.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return (
    <main className="flex-1">
      <JsonLd data={[planOfferSchema(), faqSchema(PRICING_FAQ, absolute("/pricing"))]} />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      {/* 1. Hero: text left, dithered plate right, plate reaching down under the plan slab */}
      <Section aria-labelledby="pricing-h">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-6">
          <Reveal as="div" className="lg:col-span-6">
            <SectionLabel rule>Pricing</SectionLabel>
            <h1 id="pricing-h" className="mt-6 text-display-xl">
              Three plans. <span className="text-accent">Website free</span>{" "}
              on every one.
            </h1>
            <p className="mt-6 max-w-measure text-lead">
              For US solar companies. From {formatPrice(BASIC_PLAN)} a {BASIC_PLAN.interval}, no
              contracts
              {PLAN.setupFee === null ? ", no setup fee" : ""}. The website build and hosting are
              included at no extra charge on every plan. Pass-through phone and messaging are
              still billed on top at what the carriers charge.
            </p>
          </Reveal>
          <Reveal
            as="div"
            index={1}
            className="-mx-gutter lg:col-span-5 lg:col-start-8 lg:mx-0 lg:-mr-gutter"
          >
            <DitheredImage
              src="/plates/panels.webp"
              alt="Rows of solar panels under a clear sky"
              slant="left"
              className="aspect-strip lg:aspect-plate"
            />
          </Reveal>
        </div>
      </Section>

      {/* 2. The three plans side by side.

          Basic ($150): the storefront — website, on-site SEO, GBP optimization.
          Core ($297): the main offer, highlighted with "Best offer" badge.
          Lead Generation ($500 base + client budget + $100/appt): the
          performance-fee plan where Volt also delivers the leads.

          All three cards share the same ink treatment. Core carries the
          accent border and the "Best offer" badge because that is the plan
          the rest of the site points at. The website-is-free line on every
          card is intentional repetition: the user's instruction was to make
          that explicit on every tier. */}
      <Section id="plan" aria-labelledby="plan-h">
        <SectionLabel rule as="h2" id="plan-h">
          The plans
        </SectionLabel>
        <p className="mt-6 max-w-measure text-lead text-fg">
          <strong className="font-semibold text-accent">
            Website and hosting included free on all three plans.
          </strong>{" "}
          Not an extra line item, not quoted on the call — in the price.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PlanCard
            plan={BASIC_PLAN}
            products={basicProducts}
            source="pricing_plan_basic"
          />
          <PlanCard
            plan={CORE_PLAN}
            products={coreProducts}
            bonuses={coreBonuses}
            source="pricing_plan_core"
            highlighted
            badge="Best offer"
          />
          <PlanCard
            plan={LEADFLOW_PLAN}
            products={coreProducts}
            bonuses={coreBonuses}
            source="pricing_plan_leadflow"
          />
        </div>
      </Section>

      {/* 3. Paid ads: three channels in a swipeable carousel, LSA pre-selected,
          with the three commitment plans below. Separate line item, not in the
          monthly plan above. */}
      <PaidAds />

      {/* 4. Separate products: not in the plan, no plan numerals, priced on the call */}
      <Section id="separate-products" rule="top" aria-labelledby="addons-h">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <SectionLabel rule>Separate products</SectionLabel>
            <Reveal as="h2" id="addons-h" className="mt-6 text-display-md">
              Sold separately from the system.
            </Reveal>
            <Reveal as="p" index={1} className="mt-4 max-w-measure text-body text-muted">
              None of these are in the monthly price. They are their own products, bought on top of
              the plan when your numbers say you need them and not before. Each one is quoted per
              business, so ask on the call.
            </Reveal>
          </div>
          <Reveal as="ul" index={2} className="mt-10 border-t border-line lg:col-span-7 lg:col-start-6 lg:mt-0">
            {addons.map((a) => (
              <li key={a.slug} className="grid gap-y-3 border-b border-line py-6 lg:grid-cols-12 lg:gap-x-6">
                <div className="lg:col-span-5">
                  <h3 className="flex items-center gap-3 text-h3">
                    <ProductIcon slug={a.slug} className="size-5 text-muted" />
                    {a.name}
                  </h3>
                  <p className="label mt-2 text-muted">{a.description}</p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-body">{a.intro}</p>
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <p className="label text-muted">Separate product. Quoted per business on the call.</p>
                    {/* The four with their own page link out; the rest are a row here and nothing else. */}
                    {a.page && (
                      <Button href={productHref(a.slug)} source={`pricing_addon_${a.slug}`} variant="link">
                        See how it works
                      </Button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* 5. What this replaces: ink slab, honest ranges, one figure */}
      <Section id="replaces" variant="ink" aria-labelledby="replaces-h">
        <SectionLabel rule>What this replaces</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h2" id="replaces-h" className="text-display-md lg:col-span-7">
            What you are probably paying for already.
          </Reveal>
        </div>
        <div className="mt-12 grid gap-y-12 lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <Reveal as="div" className="lg:col-span-6">
            <p className="label text-muted">Separately, per month</p>
            <ul className="mt-3 border-t border-line">
              {REPLACES.map((r, i) => (
                <IndexedRow key={r.item} index={i + 1} detail={r.figure}>
                  {r.item}
                </IndexedRow>
              ))}
            </ul>
            <p className="mt-4 text-body-sm text-muted">
              Typical ranges from the companies we onboard. Yours will differ.
            </p>
          </Reveal>
          <Reveal as="div" index={1} className="lg:col-span-5 lg:col-start-8">
            <p className="label text-muted">With {SITE.name}, per month</p>
            <p className="mt-3 flex items-baseline gap-2 font-display text-fg">
              <span className="text-h3">{currencySymbol()}</span>
              <span className="text-display-xl">{priceDigits()}</span>
              <span className="label pl-1 text-muted">/{PLAN.interval}</span>
            </p>
            <p className="mt-6 max-w-measure text-lead">
              Same jobs done, one bill, and nobody on your payroll babysitting five logins.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 6. Pricing FAQ: the homepage accordion, different questions */}
      <FAQ id="pricing-faq" label="Pricing questions" heading="Straight answers on the fee." items={PRICING_FAQ} />

      {/* 7. Compare bridge: a visitor on the pricing page is usually also
          weighing another tool. Rather than let the question drop, point at
          the honest comparisons we already wrote. Low-key band, not a slab. */}
      <Section rule="top" aria-labelledby="compare-bridge-h" rhythm="sm">
        <SectionLabel rule>Compare</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h2" id="compare-bridge-h" className="text-h2 lg:col-span-7">
            Still weighing Volt against another tool?
          </Reveal>
          <Reveal as="div" index={1} className="mt-6 max-w-measure lg:col-span-5 lg:col-start-8 lg:mt-0">
            <p className="text-body text-muted">
              Honest side-by-side comparisons against HubSpot, Jobber, Housecall Pro,
              ServiceTitan, Enerflo, Scoop, Aurora, Podium, Birdeye and Scorpion.
              Who should pick which, feature matrices, real pricing.
            </p>
            <p className="mt-6">
              <Button href="/compare" source="pricing_compare_bridge" variant="link">
                See every comparison
              </Button>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 8. Final CTA, reused as is */}
      <FinalCTA />
    </main>
  );
}
