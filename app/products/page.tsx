import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductRow } from "@/components/products/ProductRow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getAddonServices, getFeaturedAddons, getPublicProducts, productHref } from "@/lib/content/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Volt products: six in the system, four sold separately",
  description:
    "The six products in the monthly fee: website, missed-call text-back, automated lead follow-up, one inbox, review funnel and on-site SEO. Plus AI Lead Nurturing, Automatic Customer Returns, Automatic Referrals and Google Ads Management, sold separately.",
  path: "/products",
});

export default function ProductsPage() {
  const products = getPublicProducts();
  const separate = getFeaturedAddons();
  /** The two sold separately that have no page of their own. */
  const listedOnPricing = getAddonServices().filter((a) => !a.page);

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      {/* Clear the fixed bar, which is condensed and solid on every page without a hero */}
      <div aria-hidden className="h-nav-condensed" />

      <Section aria-labelledby="products-h">
        <SectionLabel rule>Systems &amp; features</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="products-h" className="text-display-xl lg:col-span-8">
            Six products. One subscription.
          </Reveal>
          <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead lg:col-span-4 lg:col-start-9 lg:mt-0">
            In the order a lead moves through them: capture, respond, organise, reputation, get
            found. Every client gets all six.
          </Reveal>
        </div>
        <Reveal as="ul" index={2} className="mt-12 border-t border-line lg:mt-16">
          {products.map((p, i) => (
            <ProductRow
              key={p.slug}
              slug={p.slug}
              index={i + 1}
              name={p.name}
              description={p.description}
              href={productHref(p.slug)}
            />
          ))}
        </Reveal>
      </Section>

      {/* Sold separately: no numerals, because the numerals mean "in the fee" */}
      <Section id="separate-products" rule="top" aria-labelledby="separate-h">
        <SectionLabel rule>Separate products</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h2" id="separate-h" className="text-display-md lg:col-span-7">
            Four more, sold outside the system.
          </Reveal>
          <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead lg:col-span-4 lg:col-start-9 lg:mt-0">
            Not part of the system and not in the monthly fee. Each one is its own product, quoted
            per business, added when your numbers say you need it.
          </Reveal>
        </div>
        <Reveal as="ul" index={2} className="mt-12 border-t border-line lg:mt-16">
          {separate.map((a) => (
            <ProductRow key={a.slug} slug={a.slug} name={a.name} description={a.description} href={productHref(a.slug)} />
          ))}
        </Reveal>
        <Reveal as="div" index={3} className="mt-8">
          <p className="max-w-measure text-body text-muted">
            {listedOnPricing.map((a) => a.name).join(" and ")} are sold separately too. They are
            listed with their prices on the pricing page.
          </p>
          <div className="mt-4">
            <Button href="/pricing#separate-products" source="products_separate_pricing" variant="link">
              See how separate products are priced
            </Button>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />
    </main>
  );
}
