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
  ADVANCED_PLAN,
  PLAN,
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

const TITLE = `Pricing: ${formatPrice()} a month, everything included`;
const DESCRIPTION = `${formatPrice()} a ${PLAN.interval} for the whole Volt system: website, missed-call text-back, automated follow-up, inbox, review funnel and on-site SEO. No contracts, no annual commitments${
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

export default function PricingPage() {
  const products = getPublicProducts();
  // The three addon products rolled into the Advanced plan. Resolved from
  // the registry so a rename of any slug flags here at build time rather
  // than silently showing nothing.
  const allAddons = getAddonServices();
  const advancedExtras = ADVANCED_PLAN.extraSlugs
    .map((slug) => allAddons.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);
  // Google Ads Management is covered properly by the Paid Ads block above
  // (Meta, LSA and Google Search as its own carousel with its own pricing),
  // so listing it again under Separate products would just be the same
  // product twice on one page. The three Advanced-plan extras are also
  // removed from the separate-products list below because they are now
  // included in a plan on this page. Filtered here, not in the shared
  // content, so /products still lists everything.
  const addons = allAddons.filter(
    (a) => a.slug !== "google-ads-management" && !ADVANCED_PLAN.extraSlugs.includes(a.slug),
  );

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
              {formatPrice()} a {PLAN.interval}. Everything in the system.
            </h1>
            <p className="mt-6 max-w-measure text-lead">
              For solar companies. No contracts, no annual commitments
              {PLAN.setupFee === null ? ", no setup fee" : ""}. All six core products are in the
              price. Phone numbers and messaging are billed on top, at what they cost.
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

      {/* 2. The two plans, side by side. Core at $297 is still the main offer
          everywhere else on the site; Advanced at $597 is only shown here,
          as the step-up for operators who want Volt to handle Advanced SEO,
          Google My Business Optimization and the referral programme in-house
          rather than buy them as separate addons.

          Both cards use the same ink treatment and the same width, with the
          plan name doing the differentiating. No "most popular" badge or
          "recommended" tag on either side; the visitor picks what fits. */}
      <Section id="plan" aria-labelledby="plan-h">
        <SectionLabel rule as="h2" id="plan-h">
          The plans
        </SectionLabel>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Core: the main offer. Six public products on one flat fee.
              Highlighted as "Best offer" because this is the plan every
              other surface of the site sends visitors to, and the price the
              reference comparison on this page benchmarks against. */}
          <div
            data-surface="ink"
            className="relative flex flex-col border-2 border-accent bg-ink px-6 py-10 text-bone sm:px-10 sm:py-12"
          >
            <span className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-accent px-3 py-1 label text-ink sm:right-10">
              Best offer
            </span>
            <p className="label text-accent">Core</p>
            <Price className="mt-6" />
            <p className="mt-5 text-body text-muted">
              Every product below, at the same price for every client. The same system whether you
              install twenty roofs a year or two hundred.
            </p>

            <ul className="mt-9 border-t border-line">
              {products.map((product, i) => (
                <li key={product.slug} className="border-b border-line">
                  <Link
                    href={productHref(product.slug)}
                    data-cursor="grow"
                    className="group flex items-baseline gap-4 py-4 transition-colors duration-100 hover:text-bone-muted"
                  >
                    <span className="label shrink-0 text-accent">{pad(i + 1)}</span>
                    <span className="font-display text-item">{product.name}</span>
                    <span aria-hidden className="ml-auto shrink-0 text-body-sm">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {PLAN.terms.map((t) => (
                <li key={t} className="label text-muted">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button
                href={bookingHref("pricing_plan_core")}
                source="pricing_plan_core"
                external
                className="w-full justify-center"
              >
                Book a 20-minute call
              </Button>
            </div>

            <p className="mt-5 text-body-sm text-muted">
              Phone numbers and messaging are billed on top, at what they cost.
            </p>
          </div>

          {/* Advanced: Core plus the three services we would otherwise sell
              as separate addons, rolled into the monthly fee. */}
          <div
            data-surface="ink"
            className="flex flex-col border border-line bg-ink px-6 py-10 text-bone sm:px-10 sm:py-12"
          >
            <p className="label text-accent">Advanced</p>
            <Price plan={ADVANCED_PLAN} className="mt-6" />
            <p className="mt-5 text-body text-muted">
              Everything in Core, plus three services we usually sell separately. For operators who
              want Volt handling the top-of-funnel work in-house rather than coordinating it with
              another vendor.
            </p>

            <p className="label mt-9 text-accent">Everything in Core, plus</p>
            <ul className="mt-3 border-t border-accent/60">
              {advancedExtras.map((a, i) => (
                <li key={a.slug} className="border-b border-accent/60">
                  <div className="flex items-baseline gap-4 py-4">
                    <span className="label shrink-0 text-accent">{pad(i + 1)}</span>
                    <span className="font-display text-item text-accent">{a.name}</span>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {ADVANCED_PLAN.terms.map((t) => (
                <li key={t} className="label text-muted">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button
                href={bookingHref("pricing_plan_advanced")}
                source="pricing_plan_advanced"
                external
                className="w-full justify-center"
              >
                Book a 20-minute call
              </Button>
            </div>

            <p className="mt-5 text-body-sm text-muted">
              Phone numbers and messaging are billed on top, at what they cost.
            </p>
          </div>
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
