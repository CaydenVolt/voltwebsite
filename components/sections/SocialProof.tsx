import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stars } from "@/components/ui/Stars";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

/**
 * Low strip directly under the hero: one label, three review sources.
 * Rating numerals are the only accent in the section.
 */
export function SocialProof() {
  return (
    <Section rhythm="none" rule="both" className="py-6" aria-label="Review ratings">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Reveal as="div">
          <SectionLabel rule>Trusted by solar teams across {SITE.region}</SectionLabel>
        </Reveal>
        {/* Phones: three compact columns, label over rating. Wider: one inline row. */}
        <ul className="grid grid-cols-3 gap-4 sm:flex sm:gap-10">
          {SITE.reviews.map((r, i) => (
            <Reveal
              key={r.source}
              as="li"
              index={i + 1}
              className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3"
            >
              <span className="label text-muted">{r.source}</span>
              <span className="flex items-baseline gap-3">
                <span className="font-display text-item text-accent">{r.rating}</span>
                <Stars className="text-body" />
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
