import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { resolvePublicAsset } from "@/lib/assets";
import { PARTNERS, partnerMark } from "@/lib/content/partners";

/**
 * The same marks the homepage belt carries, standing still.
 *
 * On an ink slab, like the homepage section, and not by preference: the marks
 * in `public/partners/` were keyed to transparency against ink and OpenAI's
 * black mark was inverted to white, so on bone several of them would vanish.
 * The surface is part of the asset.
 *
 * A plain grid with hairlines, no belt and no drag. The homepage already has
 * the moving version; a page that lists them wants them still enough to read.
 */
export function PartnerGrid() {
  const partners = PARTNERS.map((p) => ({
    name: p.name,
    mark: resolvePublicAsset(partnerMark(p.file)),
  }));

  return (
    <Section variant="ink" aria-labelledby="stack-h">
      <SectionLabel rule>Under the hood</SectionLabel>
      <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
        <Reveal as="h2" id="stack-h" className="text-display-md lg:col-span-7">
          What the system runs on.
        </Reveal>
        <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead lg:col-span-4 lg:col-start-9 lg:mt-0">
          {partners.length} platforms, each doing the part it does best. You never log into any of
          them.
        </Reveal>
      </div>

      {/* Hairlines on every cell, so the grid reads as a ruled table rather than
          a tray of tiles. The edges are trimmed by the ring's own overflow. */}
      <Reveal as="div" index={2} className="mt-12 overflow-hidden lg:mt-16">
        <ul className="-mb-px -mr-px grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col items-center justify-center gap-4 border-b border-r border-line px-4 py-10"
            >
              <div className="flex h-14 items-center justify-center">
                {partner.mark ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={partner.mark}
                    alt=""
                    loading="lazy"
                    className="h-12 w-auto max-w-full object-contain lg:h-14"
                  />
                ) : (
                  /* A mark that was never saved falls back to the name in the
                     display face rather than leaving a hole in the grid. */
                  <span className="font-display text-h3 text-fg">{partner.name}</span>
                )}
              </div>
              <p className="text-center text-body-sm text-muted">{partner.name}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
