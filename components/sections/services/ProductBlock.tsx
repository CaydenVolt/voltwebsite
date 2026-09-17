import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IndexedRow } from "@/components/ui/IndexedRow";
import { Reveal } from "@/components/ui/Reveal";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { ProductMediaView } from "@/components/sections/services/Media";
import { ProductStats } from "@/components/sections/services/Stats";
import { pad } from "@/lib/format";
import { productHref, type ProductPage } from "@/lib/content/products";

/**
 * One product. Odd blocks: text left (5 cols), media right (6 cols, bleeding
 * off the right edge) with its figures beneath it. Even blocks mirror. Column
 * 7 stays empty as breathing room, as in the hero. Phones: media first, then
 * the figures, then the text, every time.
 *
 * The same block renders a product in the plan and a product sold separately.
 * The only differences are the eyebrow, where the plan numeral is replaced by
 * "Separate product", and the line under the benefits that says it is not in
 * the monthly fee. Both lists otherwise read as products of equal standing.
 */
export function ProductBlock({
  product,
  position,
  ruleTop,
}: {
  product: ProductPage;
  position: number;
  ruleTop: boolean;
}) {
  const flip = position % 2 === 0;
  /** A real screenshot or recording, rather than a fragment or a photo plate. */
  const real = product.media.kind === "shot" || product.media.kind === "clip";
  /* Phone-shaped media is capped at 448px, so a seven-column slot left it
     marooned with 317px of dead space between it and the copy. It gets four
     columns instead and the text takes the difference. */
  const portrait =
    (product.media.kind === "shot" || product.media.kind === "clip") && Boolean(product.media.portrait);
  const textSpan = portrait ? "lg:col-span-7" : "lg:col-span-5";
  const mediaSpan = portrait ? "lg:col-span-4" : "lg:col-span-7";
  const textStart = flip
    ? portrait
      ? "lg:col-start-6"
      : "lg:col-start-8"
    : "lg:col-start-1";
  const mediaStart = flip
    ? portrait
      ? "lg:col-start-2"
      : "lg:col-start-1"
    : portrait
      ? "lg:col-start-8"
      : "lg:col-start-6";
  const prefix = product.addon ? "separate" : "service";
  const id = `${prefix}-${position}`;

  return (
    <Section
      id={id}
      variant={product.slab ? "ink" : "bone"}
      rule={ruleTop ? "top" : "none"}
      as="article"
      aria-labelledby={`${id}-h`}
    >
      <div className="grid gap-y-8 lg:grid-cols-12 lg:items-center lg:gap-x-6">
        <Reveal
          as="div"
          className={`order-2 lg:order-none lg:row-start-1 ${textSpan} ${textStart}`}
        >
          <span className="label text-accent">
            {product.addon ? "Separate product" : pad(product.index ?? position)}
          </span>
          {/* The product's name leads: it is what the block is, and it is the
              block's accessible name. The promise sits under it, a step down. */}
          <h3 id={`${id}-h`} className="mt-5 flex items-center gap-3 text-display-md">
            <ProductIcon slug={product.slug} className="size-7 shrink-0 text-muted lg:size-8" />
            {product.name}
          </h3>
          {/* A step down from the name at every width: on phones the name bottoms
              out at 32px, so the promise drops to lead there to keep the gap.
              Held tight to the name because the two are one idea. */}
          <p className="mt-4 max-w-measure text-lead text-muted sm:text-h3">{product.headline}</p>
          {/* Then the spacing opens up. The column used to step down in near
              equal increments, which gave it no grouping and made it read as one
              undifferentiated wall of text. Pair, gap, paragraph, bigger gap,
              list, bigger gap again. */}
          <p className="mt-7 max-w-measure text-body text-muted">{product.intro}</p>
          {/* The benefits were a full-width ruled table: a top border plus a rule
              under every row. Four of those stacked read as a spreadsheet. The
              numerals stay, because the index is the house motif, but the rules
              go and the rows get air. */}
          <ul className="mt-10 space-y-2">
            {product.benefits.map((b, i) => (
              <IndexedRow key={b} index={i + 1} rule={false}>
                {b}
              </IndexedRow>
            ))}
          </ul>
          {product.addon && (
            <p className="label mt-8 text-muted">
              Not part of the system or the monthly fee. Quoted per business.
            </p>
          )}
          <div className="mt-10">
            <Button href={productHref(product.slug)} source={`${prefix}_${position}_how`} variant="link">
              See how it works
            </Button>
          </div>
        </Reveal>

        {/* Seven columns, so a recording is large enough to read. Fragments and
            photo plates still bleed off the page edge; a real interface does
            not, because the cropped-off part is content. */}
        <Reveal
          as="div"
          index={1}
          className={`order-1 lg:order-none lg:row-start-1 ${mediaSpan} ${mediaStart}`}
        >
          <div
            className={
              real
                ? ""
                : `-mx-gutter lg:mx-0 ${flip ? "lg:-ml-gutter" : "lg:-mr-gutter"}`
            }
          >
            <ProductMediaView media={product.media} flip={flip} />
          </div>
          {/* The figures sit under the media, which is what the space below it is for */}
          <ProductStats stats={product.stats} className="mt-8" />
        </Reveal>
      </div>
    </Section>
  );
}

/** Hairline between bone blocks only: a slab is its own hard edge on both sides. */
export function ruleBetween(products: ProductPage[], i: number): boolean {
  const product = products[i];
  const prev = products[i - 1];
  return !product.slab && !(prev && prev.slab);
}
