import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/products/ProductCard";
import { getAddonPages, productHref } from "@/lib/content/products";

/**
 * The four products sold outside the monthly system, kept deliberately short
 * on the homepage: a heading, a line saying they are separate, and four cells
 * in a hairline grid. The full case for each one is on its own page, which is
 * where a cell sends you. The homepage sells the system; this only has to say
 * these exist and are extra.
 */
export function SeparateProducts() {
  const products = getAddonPages();
  return (
    <Section id="separate-products" rule="top" aria-labelledby="separate-h">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-6">
          <SectionLabel rule>Separate products</SectionLabel>
          <Reveal as="h2" id="separate-h" className="mt-6 text-display-md">
            Four more, sold separately.
          </Reveal>
        </div>
        <Reveal as="p" index={1} className="mt-6 max-w-measure text-body text-muted lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-end">
          Not part of the system and not in the monthly fee. Each one is its own product, quoted per
          business, added when your numbers say you need it.
        </Reveal>
      </div>

      {/* One-pixel gaps on the line colour: the grid draws its own hairlines */}
      <Reveal
        as="ul"
        index={2}
        className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
      >
        {products.map((p) => (
          <ProductCard
            key={p.slug}
            slug={p.slug}
            name={p.name}
            description={p.description}
            href={productHref(p.slug)}
          />
        ))}
      </Reveal>

      <Reveal as="div" index={3} className="mt-8">
        <Button href="/products#separate-products" source="home_separate_all" variant="link">
          See all products
        </Button>
      </Reveal>
    </Section>
  );
}
