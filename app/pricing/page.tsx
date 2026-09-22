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
import { pad } from "@/lib/format";
import { SITE, bookingHref } from "@/lib/site";
import { getAddonServices, getPublicProducts, productHref } from "@/lib/content/products";
import { PLAN, PRICING_FAQ, REPLACES, currencySymbol, formatPrice, priceDigits } from "@/lib/content/pricing";
import { JsonLd } from "@/components/seo/JsonLd";
import { absolute, faqSchema, planOfferSchema } from "@/lib/seo";

const TITLE = `Pricing: ${formatPrice()} a month, everything included`;
const DESCRIPTION = `${formatPrice()} a ${PLAN.interval} for the whole Volt system: website, missed-call text-back, automated follow-up, inbox, review funnel and on-site SEO. No contracts, no tiers${
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
function Price({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-baseline gap-2 font-display text-fg ${className}`}>
      <span className="text-display-md">{currencySymbol()}</span>
      <span className="text-price">{priceDigits()}</span>
      <span className="label pl-1 text-muted">/{PLAN.interval}</span>
    </p>
  );
}

export default function PricingPage() {
  const products = getPublicProducts();
  const addons = getAddonServices();

  return (
    <main className="flex-1">
      <JsonLd data={[planOfferSchema(), faqSchema(PRICING_FAQ, absolute("/pricing"))]} />
      <div aria-hidden className="h-nav-condensed" />

      {/* 1. Hero: text left, dithered plate right, plate reaching down under the plan slab */}
      <Section aria-labelledby="pricing-h">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-6">
          <Reveal as="div" className="lg:col-span-6">
            <SectionLabel rule>Pricing</SectionLabel>
            <h1 id="pricing-h" className="mt-6 text-display-xl">
              {formatPrice()} a {PLAN.interval}. Everything in the system.
            </h1>
            <p className="mt-6 max-w-measure text-lead">
              For solar companies. No contracts, no tiers{PLAN.setupFee === null ? ", no setup fee" : ""}.
              All six products are in the price. Phone numbers and messaging are billed on top, at
              what they cost.
            </p>
          </Reveal>
          <Reveal
            as="div"
            index={1}
            className="-mx-gutter lg:col-span-5 lg:col-start-8 lg:mx-0 lg:-mr-gutter"
          >
            <DitheredImage
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=70"
              alt="Rows of solar panels under a clear sky"
              slant="left"
              className="aspect-strip lg:aspect-plate"
            />
          </Reveal>
        </div>
      </Section>

      {/* 2. The plan, as a card. It used to be a full-bleed ink slab with the
          included products listed in a separate section below it. One card
          holding the price, what is in it, the terms and the button puts the
          whole decision in one place, which is the shape the reference uses
          and the reason it reads quickly.

          No "most popular" badge. There is one plan, so there is nothing for
          it to be more popular than, and a badge implying otherwise would be
          inventing a signal. */}
      <Section id="plan" aria-labelledby="plan-h">
        <div
          data-surface="ink"
          className="mx-auto w-full max-w-2xl border border-line bg-ink px-6 py-10 text-bone sm:px-10 sm:py-12"
        >
          <SectionLabel rule as="h2" id="plan-h">
            The plan
          </SectionLabel>
          <Price className="mt-8" />
          <p className="mt-5 text-body text-muted">
            Every product below, for every client, at the same price. The same system whether you
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
                  <span
                    aria-hidden
                    className="ml-auto shrink-0 translate-x-0 text-body-sm transition-transform duration-100 group-hover:translate-x-1"
                  >
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
              href={bookingHref("pricing_plan")}
              source="pricing_plan"
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
      </Section>

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

      {/* 7. Final CTA, reused as is */}
      <FinalCTA />
    </main>
  );
}
