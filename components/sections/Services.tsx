import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProductBlock, ruleBetween } from "@/components/sections/services/ProductBlock";
import { getProductPages } from "@/lib/content/products";

/** The six products in the monthly fee, in funnel order, one block each. */
export function Services() {
  const products = getProductPages();
  return (
    <div id="services">
      <Section rhythm="default" aria-labelledby="services-h" className="pb-0">
        <SectionLabel rule>Systems &amp; features</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h2" id="services-h" className="text-display-md lg:col-span-7">
            Six products. Built once. Working every day.
          </Reveal>
          <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead lg:col-span-4 lg:col-start-9 lg:mt-0">
            Every client gets all six, for one monthly fee. Nothing here is a bolt-on, and nothing
            needs you to run it.
          </Reveal>
        </div>
      </Section>

      {products.map((product, i) => (
        <ProductBlock
          key={product.slug}
          product={product}
          position={i + 1}
          ruleTop={ruleBetween(products, i)}
        />
      ))}
    </div>
  );
}
