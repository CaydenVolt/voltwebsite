import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WORKS } from "@/lib/content/our-work";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";

export const metadata: Metadata = pageMetadata({
  title: "Our work: real client builds",
  description:
    "Case studies from real Volt builds. Each one is a client site, live or recently launched, with the brief, the mechanism and the result where there is one to show.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our work", path: "/our-work" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="work-h">
        <SectionLabel rule>Our work</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="work-h" className="text-display-xl lg:col-span-7">
            Real client builds.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Each one is a live Volt build, with the brief the client arrived
            with and the mechanism we shipped. New case studies slot in as they
            go live.
          </Reveal>
        </div>
      </Section>

      {/* Three to a row on lg, two on sm, one on phone. Only two case studies
          are populated today, so the third slot on the first row is naturally
          empty and the grid grows into it as more builds ship.

          Cards are static for now, not links. Detail pages land once the
          per-build video walkthroughs and case study copy are ready. */}
      <Section rule="top" aria-label="Case studies">
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((work, i) => (
            <Reveal key={work.slug} as="li" index={i}>
              <div className="relative aspect-[3/2] overflow-hidden border border-line bg-bone-deep">
                <Image
                  src={work.image}
                  alt={`${work.name}: ${work.tagline}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <h2 className="text-h3">{work.name}</h2>
                <p className="label mt-2 text-muted">{work.tagline}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCTA />
    </main>
  );
}
