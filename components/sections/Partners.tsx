import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PartnersCarousel } from "@/components/sections/partners/PartnersCarousel";
import { resolvePublicAsset } from "@/lib/assets";
import { PARTNERS, partnerMark } from "@/lib/content/partners";

/**
 * What the system runs on, on an ink slab between Why Volt and the FAQ. The
 * marks are resolved here because reading `public/` is server work, so a mark
 * that was never saved falls back to the name in type rather than a gap.
 */
export function Partners({ tilt }: { tilt?: "left" | "right" }) {
  const partners = PARTNERS.map((p) => ({
    name: p.name,
    mark: resolvePublicAsset(partnerMark(p.file)),
  }));

  return (
    <Section id="partners" variant="ink" tilt={tilt} aria-labelledby="partners-h">
      {/* Centred: the belt under it runs the full width, so a left-set heading
          would hang off one end of it. */}
      <div className="text-center">
        <SectionLabel className="justify-center">Under the hood</SectionLabel>
        <Reveal as="h2" id="partners-h" className="mx-auto mt-6 text-display-md lg:w-9/12">
          Just so you know we&rsquo;re legit, we work with&hellip;
        </Reveal>
      </div>

      <Reveal as="div" index={2} className="mt-12 lg:mt-16">
        <PartnersCarousel partners={partners} />
      </Reveal>
    </Section>
  );
}
