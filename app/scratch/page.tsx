import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { IndexedRow } from "@/components/ui/IndexedRow";
import { Reveal } from "@/components/ui/Reveal";
import { DitheredImage } from "@/components/ui/DitheredImage";
import { bookingHref } from "@/lib/site";
import { getPublicProducts } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "Scratch: shared primitives",
  robots: { index: false, follow: false },
};

const INDUSTRIES = [
  ["Residential install", "Rooftop, 5 to 15 kW"],
  ["Commercial install", "Flat roof and carport"],
  ["Solar + battery", "Storage-led offers"],
  ["Roofing + solar", "Re-roof and array in one job"],
  ["EPC", "Engineering, procurement, construction"],
  ["O&M", "Monitoring and service contracts"],
  ["Dealers and resellers", "Selling a manufacturer's system"],
  ["Lead-gen partners", "Appointment setters and brokers"],
] as const;

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=70",
    alt: "Rows of solar panels under a clear sky",
  },
  {
    src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=70",
    alt: "Solar array on open ground at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=70",
    alt: "Technician on a roof beside solar panels",
  },
] as const;

export default function Scratch() {
  return (
    <main>
      <h1 className="sr-only">Scratch: shared primitives</h1>

      {/* 0. Strip: Section rhythm=sm + rules, SectionLabel left and right */}
      <Section rhythm="sm" rule="bottom" aria-label="Scratch header">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel rule>Scratch. Shared primitives</SectionLabel>
          <SectionLabel align="right">Not linked from the site</SectionLabel>
        </div>
      </Section>

      {/* 1. Section bone + type + buttons */}
      <Section aria-labelledby="s-bone">
        <SectionLabel rule as="p">
          Section. Bone. Default rhythm
        </SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <h2 id="s-bone" className="text-display-md lg:col-span-7">
            Every primitive, printed on the same paper.
          </h2>
          <div className="mt-6 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="text-lead max-w-measure">
              Headline in the display face, lead in the body face, muted label above. Buttons below
              in the three variants the site uses.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button href={bookingHref("scratch_primary")} source="scratch_primary" external>
                Primary action
              </Button>
              <Button href="#s-ink" source="scratch_outline" variant="outline">
                Outline
              </Button>
              <Button href="#s-ink" source="scratch_link" variant="link">
                Text link
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Button href={bookingHref("scratch_primary_sm")} source="scratch_primary_sm" size="sm" external>
                Small primary
              </Button>
              <Button href="#s-ink" source="scratch_outline_sm" variant="outline" size="sm">
                Small outline
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Section ink slab: same primitives, tone tokens flipped */}
      <Section id="s-ink" variant="ink" aria-labelledby="s-ink-h">
        <SectionLabel rule>Section. Ink slab. Same components, no props changed</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <h2 id="s-ink-h" className="text-display-md lg:col-span-6">
            Ink is punctuation, not decoration.
          </h2>
          <div className="mt-6 lg:col-span-5 lg:col-start-8 lg:mt-0">
            <p className="text-lead max-w-measure">
              Muted text, hairlines and the text link all read their colour from the surface, so a
              slab costs one prop on the Section and nothing else.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button href={bookingHref("scratch_ink_primary")} source="scratch_ink_primary" external>
                Primary on ink
              </Button>
              <Button href="#s-rows" source="scratch_ink_outline" variant="outline">
                Outline on ink
              </Button>
              <Button href="#s-rows" source="scratch_ink_link" variant="link">
                Text link on ink
              </Button>
            </div>
            <ul className="mt-8 border-t border-line">
              <IndexedRow index={1} detail="20 min">
                Demo call
              </IndexedRow>
              <IndexedRow index={2} detail="7 to 10 days">
                We build your system
              </IndexedRow>
              <IndexedRow index={3} detail="25 min">
                Launch call
              </IndexedRow>
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. IndexedRow: static list with an accent header row */}
      <Section id="s-rows" aria-labelledby="s-rows-h">
        <SectionLabel rule as="p">
          IndexedRow. Static list, accent header, details
        </SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="s-rows-h" className="text-display-md">
              Hairlines and numerals, not cards.
            </h2>
          </div>
          <ul className="mt-6 border-t border-line lg:col-span-6 lg:col-start-7 lg:mt-0">
            <IndexedRow index={1} accent size="lg">
              Missed-call text-back
            </IndexedRow>
            <IndexedRow index={2} detail="Included">
              Every missed call gets a text in seconds
            </IndexedRow>
            <IndexedRow index={3} detail="Included">
              Works nights and weekends
            </IndexedRow>
            <IndexedRow index={4} detail="Included">
              Conversation lands in your inbox
            </IndexedRow>
            <IndexedRow index={5} detail="Add-on">
              Call recording and tracking numbers
            </IndexedRow>
          </ul>
        </div>
      </Section>

      {/* 4. Section bleed: dense grid with hairline dividers, interactive rows */}
      <Section variant="bleed" rule="both" aria-labelledby="s-grid-h">
        <div className="px-gutter pb-6">
          <SectionLabel rule as="p">
            Section. Bleed. Interactive IndexedRow grid, hover the rows
          </SectionLabel>
          <h2 id="s-grid-h" className="sr-only">
            Industries grid sample
          </h2>
        </div>
        <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(([name, line], i) => (
            <IndexedRow
              key={name}
              index={i + 1}
              interactive
              detail={line}
              className="px-gutter lg:px-6 lg:first:pl-gutter lg:last:pr-gutter"
            >
              {name}
            </IndexedRow>
          ))}
        </ul>
      </Section>

      {/* 5. Reveal: staggered scroll entrance */}
      <Section aria-labelledby="s-reveal-h">
        <SectionLabel rule as="p">
          Reveal. Rise 20px and fade, 70ms stagger, plays once at 20% visible
        </SectionLabel>
        <h2 id="s-reveal-h" className="mt-6 text-display-md lg:w-7/12">
          Scroll down. They arrive once and then stay put.
        </h2>
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {getPublicProducts().map((s, i) => (
            <Reveal key={s.slug} as="li" index={i} className="border-t border-line pt-4">
              <span className="label text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-h3">{s.name}</h3>
              <p className="mt-2 text-body text-muted">{s.description}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 6. DitheredImage */}
      <Section variant="ink" aria-labelledby="s-img-h">
        <SectionLabel rule as="p">
          DitheredImage. Canvas Bayer dither, ink on bone-deep plate
        </SectionLabel>
        <h2 id="s-img-h" className="mt-6 text-display-md lg:w-7/12">
          One treatment for every photograph.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <figure>
            <DitheredImage src={IMAGES[0].src} alt={IMAGES[0].alt} aspect="4 / 5" />
            <figcaption className="label mt-3 text-muted">3px cell, default</figcaption>
          </figure>
          <figure>
            <DitheredImage src={IMAGES[1].src} alt={IMAGES[1].alt} aspect="4 / 5" cell={4} slant />
            <figcaption className="label mt-3 text-muted">4px cell, slanted plate</figcaption>
          </figure>
          <figure>
            <DitheredImage src={IMAGES[2].src} alt={IMAGES[2].alt} aspect="4 / 5" cell={2} contrast={1.3} />
            <figcaption className="label mt-3 text-muted">2px cell, contrast 1.3</figcaption>
          </figure>
          <figure>
            <DitheredImage
              src="https://images.unsplash.com/this-photo-does-not-exist"
              alt="Placeholder plate shown when an image fails to load"
              aspect="4 / 5"
            />
            <figcaption className="label mt-3 text-muted">Failed load, flat plate fallback</figcaption>
          </figure>
        </div>
      </Section>
    </main>
  );
}
