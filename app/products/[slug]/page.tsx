import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { IndexedRow } from "@/components/ui/IndexedRow";
import { Reveal } from "@/components/ui/Reveal";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { ProductRow } from "@/components/products/ProductRow";
import { ProductMediaView } from "@/components/sections/services/Media";
import { ProductStats } from "@/components/sections/services/Stats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pad } from "@/lib/format";
import { bookingHref } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata, productSchema } from "@/lib/seo";
import {
  getAllPages,
  getPage,
  getProduct,
  getProductIndex,
  getPublicProducts,
  getRelated,
  productHref,
} from "@/lib/content/products";

/** The six in the plan and the four sold separately. Everything else, hidden included, is a 404. */
export function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getPage(slug);
  if (!product) return {};
  return pageMetadata({
    title: `${product.name}: ${product.description}`,
    description: product.intro,
    path: productHref(product.slug),
  });
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getPage(slug);
  if (!product) notFound();

  const total = getPublicProducts().length;
  const related = getRelated(product);
  const sibling = product.boundary ? getProduct(product.boundary.sibling) : undefined;

  return (
    <main className="flex-1">
      <JsonLd
        data={[
          productSchema(product),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: productHref(product.slug) },
          ]),
        ]}
      />
      <div aria-hidden className="h-nav-condensed" />

      {/* Header: text left, media plate right bleeding off the edge, as in the hero */}
      <Section as="header" aria-labelledby="product-h">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-6">
          <Reveal as="div" className="lg:col-span-6">
            <SectionLabel rule>
              {product.addon ? (
                "Separate product"
              ) : (
                <>
                  Systems &amp; features · {pad(product.index ?? 1)} of {pad(total)}
                </>
              )}
            </SectionLabel>
            <ProductIcon slug={product.slug} className="mt-8 size-8 text-muted" />
            <h1 id="product-h" className="mt-4 text-display-xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-measure text-lead">{product.headline}</p>
            <p className="mt-4 max-w-measure text-body text-muted">{product.intro}</p>
            {/* The plan boundary, stated on the page itself rather than only on /pricing */}
            <p className="label mt-6 border-t border-line pt-4 text-muted">
              {product.addon
                ? "Sold separately. Not part of the monthly system, quoted per business."
                : "In the monthly fee, with the other five products."}
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Button href={bookingHref(`product_${product.slug}`)} source={`product_${product.slug}`} external>
                Book a 20-minute call
              </Button>
              <Button
                href={product.addon ? "/pricing#separate-products" : "/pricing"}
                source={`product_${product.slug}_pricing`}
                variant="link"
              >
                {product.addon ? "How it is priced" : "See the price"}
              </Button>
            </div>
          </Reveal>
          <Reveal as="div" index={1} className="lg:col-span-5 lg:col-start-8">
            <div
              className={
                product.media.kind === "shot" || product.media.kind === "clip"
                  ? ""
                  : "-mx-gutter lg:mx-0 lg:-mr-gutter"
              }
            >
              <ProductMediaView media={product.media} />
            </div>
            <ProductStats stats={product.stats} className="mt-6 lg:mt-8" />
          </Reveal>
        </div>
      </Section>

      {/* What you get, plus the boundary sentence where two products touch */}
      <Section variant="deep" aria-labelledby="benefits-h">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <SectionLabel rule>What you get</SectionLabel>
            <Reveal as="h2" id="benefits-h" className="mt-6 text-display-md">
              What it does, plainly.
            </Reveal>
          </div>
          <div className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <Reveal as="ul" index={1} className="border-t border-line">
              {product.benefits.map((b, i) => (
                <IndexedRow key={b} index={i + 1} size="lg">
                  {b}
                </IndexedRow>
              ))}
            </Reveal>
            {product.boundary && sibling && (
              <Reveal as="div" index={2} className="mt-10 border-t border-line pt-5">
                <p className="label text-muted">Where it stops</p>
                <p className="mt-3 max-w-measure text-body">{product.boundary.text}</p>
                <div className="mt-4">
                  <Button href={productHref(sibling.slug)} source={`product_${product.slug}_sibling`} variant="link">
                    See {sibling.name}
                  </Button>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Section>

      {/* How it works: three steps on an ink slab */}
      <Section variant="ink" aria-labelledby="steps-h">
        <SectionLabel rule>How it works</SectionLabel>
        <Reveal as="h2" id="steps-h" className="mt-6 text-display-md lg:w-7/12">
          From sign-up to running.
        </Reveal>
        <div className="mt-12 grid gap-y-10 lg:mt-16 lg:grid-cols-3 lg:gap-x-6">
          {product.steps.map((step, i) => (
            <Reveal key={step.title} as="div" index={i} className="border-t border-line pt-6">
              <span className="font-display text-display-md text-accent">{pad(i + 1)}</span>
              <h3 className="mt-4 text-h3">{step.title}</h3>
              <p className="mt-3 max-w-measure text-body text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related products, always the ones in the plan */}
      {related.length > 0 && (
        <Section aria-labelledby="related-h">
          <SectionLabel rule>Pairs with</SectionLabel>
          <Reveal as="h2" id="related-h" className="mt-6 text-display-md lg:w-7/12">
            Works best alongside.
          </Reveal>
          <Reveal as="ul" index={1} className="mt-10 border-t border-line">
            {related.map((p) => (
              <ProductRow
                key={p.slug}
                slug={p.slug}
                index={getProductIndex(p)}
                name={p.name}
                description={p.description}
                href={productHref(p.slug)}
              />
            ))}
          </Reveal>
          <Reveal as="div" index={2} className="mt-8">
            <Button href="/products" source={`product_${product.slug}_all`} variant="link">
              All products
            </Button>
          </Reveal>
        </Section>
      )}

      <FinalCTA />
    </main>
  );
}
