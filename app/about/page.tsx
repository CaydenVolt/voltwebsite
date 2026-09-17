import { readdirSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pad } from "@/lib/format";
import { SITE, bookingHref } from "@/lib/site";
import { CULTURE, MISSION, TEAM, TEAM_PHOTO } from "@/lib/content/about";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Volt: marketing for solar, minus the nonsense",
  description:
    "Volt builds affordable, no-nonsense systems for solar companies: the website, the follow-up, the inbox and the reviews, on one monthly subscription. Meet the team.",
  path: "/about",
});

/**
 * Resolves a photo by name prefix, so dropping `cayden.png` or `cayden.jpeg`
 * into public/about works without editing anything.
 *
 * Returns null when nothing has been saved yet, so the caller can render an
 * empty plate rather than pointing next/image at a file that does not exist,
 * which 400s and leaves a broken image in the layout.
 */
function photo(name: string): string | null {
  try {
    const file = readdirSync(path.join(process.cwd(), "public", "about")).find(
      (f) => f.toLowerCase().startsWith(name) && /\.(jpe?g|png|webp|avif)$/i.test(f),
    );
    return file ? `/about/${file}` : null;
  } catch {
    return null;
  }
}

/** The circle a portrait sits in, and what stands in for one that is missing. */
const PORTRAIT = "w-40 rounded-full border border-line sm:w-48 lg:w-56";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      {/* Clear the fixed bar, which is condensed and solid on every page without a hero */}
      <div aria-hidden className="h-nav-condensed" />

      {/* Mission: text left, the team photo as a landscape plate off the right edge */}
      <Section as="header" aria-labelledby="about-h">
        {/* Headline row 1, photo beside it spanning both rows as on the hero, the
            mission running under the headline so the two paragraphs stay together */}
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-start lg:gap-x-6">
          <Reveal as="div" className="order-1 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <SectionLabel rule>About us</SectionLabel>
            <h1 id="about-h" className="mt-6 text-display-xl">
              Marketing, minus the nonsense.
            </h1>
          </Reveal>

          <Reveal
            as="div"
            index={1}
            className="order-2 -mx-gutter lg:order-none lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:-mr-gutter"
          >
            {(() => {
              const src = photo("team");
              return src ? (
                <Photo
                  src={src}
                  alt={TEAM_PHOTO.alt}
                  aspect="16 / 9"
                  position={TEAM_PHOTO.position}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                  className="lg:plate-slant"
                />
              ) : (
                <div
                  role="img"
                  aria-label={TEAM_PHOTO.alt}
                  style={{ aspectRatio: "16 / 9" }}
                  className="bg-bone-deep lg:plate-slant"
                />
              );
            })()}
          </Reveal>

          <Reveal
            as="div"
            index={2}
            className="order-3 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-2"
          >
            <p className="max-w-measure text-lead">{MISSION[0]}</p>
            <p className="mt-4 max-w-measure text-body text-muted">{MISSION[1]}</p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Button href={bookingHref("about_page")} source="about_page" external>
                Book a 20-minute call
              </Button>
              <Button href="/our-process" source="about_process" variant="link">
                See how we work
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Culture: ink slab, the heading set large, four values numbered like the steps */}
      <Section variant="ink" aria-labelledby="culture-h">
        <SectionLabel rule>Our culture</SectionLabel>
        <Reveal as="h2" id="culture-h" className="mt-6 text-display-md lg:w-10/12">
          {CULTURE.heading}
        </Reveal>
        <div className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-6">
          {CULTURE.values.map((v, i) => (
            <Reveal key={v.name} as="div" index={i} className="border-t border-line pt-6">
              <span className="font-display text-display-md text-accent">{pad(i + 1)}</span>
              <h3 className="mt-4 text-h3">{v.name}</h3>
              <p className="mt-3 max-w-measure text-body text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The team: circular portraits, hairline ring, name and role beneath */}
      <Section id="team" aria-labelledby="team-h">
        <SectionLabel rule>The team</SectionLabel>
        <Reveal as="h2" id="team-h" className="mt-6 text-display-md lg:w-8/12">
          Meet your team at {SITE.name}.
        </Reveal>
        {/* Plain column count rather than explicit placement in a 12-col grid:
            the old version hardcoded a start column per member and only worked
            for exactly two of them. */}
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} as="li" index={i}>
              {(() => {
                const src = photo(member.name.toLowerCase());
                return src ? (
                  <Photo
                    src={src}
                    alt={member.alt}
                    aspect="1 / 1"
                    position={member.position}
                    sizes="(min-width: 1024px) 14rem, (min-width: 640px) 12rem, 10rem"
                    className={PORTRAIT}
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={member.alt}
                    style={{ aspectRatio: "1 / 1" }}
                    className={`bg-bone-deep ${PORTRAIT}`}
                  />
                );
              })()}
              <p className="mt-6 font-display text-h3 text-fg">{member.name}</p>
              <p className="label mt-2 text-muted">{member.role}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCTA />
    </main>
  );
}
