import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TESTIMONIALS } from "@/lib/content/testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";

export const metadata: Metadata = pageMetadata({
  title: "Testimonials: what our clients say",
  description:
    "Video testimonials from real Volt clients. Each one is a client speaking in their own words about the build, the work and the result.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const items = TESTIMONIALS;

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="testimonials-h">
        <SectionLabel rule>Testimonials</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal
            as="h1"
            id="testimonials-h"
            className="text-display-xl lg:col-span-7"
          >
            What our clients say.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Video testimonials from real Volt clients, in their own words. New
            ones slot in as they are filmed and the client has okayed them.
          </Reveal>
        </div>
      </Section>

      {/* Three to a row on lg, two on sm, one on phone. Empty today; the first
          card lands here once the exported MP4 and the client-confirmed quote
          are in. */}
      <Section rule="top" aria-label="Client testimonials">
        {items.length === 0 ? (
          <Reveal as="div" className="max-w-measure">
            <p className="text-lead text-muted">
              The first client testimonials are in edit. They will appear here
              as soon as the video exports and the client has confirmed the
              quote.
            </p>
          </Reveal>
        ) : (
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <Reveal key={t.slug} as="li" index={i}>
                <article className="flex h-full flex-col border border-line bg-bone p-5 sm:p-6">
                  {/* Landscape 16:9 frame, black background. A vertical phone
                      clip letterboxes on the sides, matching the way the
                      reference site renders them. */}
                  <div className="relative aspect-video w-full overflow-hidden bg-ink">
                    <video
                      src={t.videoSrc}
                      poster={t.poster}
                      controls
                      preload="metadata"
                      playsInline
                      className="h-full w-full object-contain"
                      aria-label={`Video testimonial from ${t.name}`}
                    />
                  </div>

                  <Stars count={t.rating} className="mt-6 text-yellow-400" />

                  <blockquote className="mt-4 text-body">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <p className="mt-auto pt-6 font-display text-item">
                    &ndash;{t.name}
                    {t.attribution && (
                      <span className="label ml-3 text-muted">
                        {t.attribution}
                      </span>
                    )}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        )}
      </Section>

      <FinalCTA />
    </main>
  );
}
