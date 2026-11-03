import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { Photo } from "@/components/ui/Photo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { TEAM } from "@/lib/content/about";
import { TESTIMONIALS } from "@/lib/content/testimonials";

/**
 * Video sales letter landing page. Three stacked video blocks — a message
 * from each co-founder and the current client testimonial — with the
 * Google review screenshot sitting under the testimonial as supporting
 * proof. Deliberately plain: this page exists so the videos can do the
 * work, not so a layout can.
 *
 * Not linked from the global nav. It is a page a prospect lands on from a
 * paid ad or a direct link, not something a visitor browses to on their
 * own, and the top-nav real estate is scarce.
 *
 * Video file paths (not yet uploaded):
 *   - public/vsl/mckeith.mp4 and optionally public/vsl/mckeith.jpg (poster)
 *   - public/vsl/cayden.mp4  and optionally public/vsl/cayden.jpg (poster)
 * When the files are dropped in, the <video> elements pick them up without
 * a code change. Until then the slots render as plain dark frames rather
 * than erroring, so the layout is reviewable.
 */
/**
 * Unlisted. The page is reachable only to someone who was handed the URL
 * directly; it is not in the global nav, not in the sitemap, blocked in
 * robots.txt, and the metadata below carries `noindex, nofollow` so that
 * search engines that honour the meta directive (Google, Bing, DuckDuckGo)
 * never add it to their indexes. Not a security boundary — anyone with the
 * link can open it — but every honest crawler leaves it alone.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Before our call",
    description:
      "Volt Agency: websites, AI and automated 5-star reviews for US solar businesses from $297 a month. Watch two short videos from the co-founders before the call.",
    path: "/video-vsl",
  }),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

/* Resolve the two founder portraits from the TEAM list rather than
   hard-coding filenames: a photo change in /about/ or a rename in the
   TEAM array propagates here with no extra edit. */
const cayden = TEAM.find((m) => m.name === "Cayden");
const mckeith = TEAM.find((m) => m.name === "McKeith");

export default function VideoVslPage() {
  const testimonial = TESTIMONIALS[0]; // The lai-yirong clip.

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "A message from the founders", path: "/video-vsl" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      {/* Header. Centered, wide enough that the sentence breaks on natural
          clauses rather than compressing into a narrow stack. Three stacked
          beats: the pitch, the price on its own line in accent, and the
          "watch these" directive with a down-arrow pointing at the first
          video. Pulling the price out of the sentence is the key move —
          dropping it inline with "for just" buried the number; standing it
          on its own line makes it the second thing a viewer sees. */}
      <Section as="header" aria-labelledby="vsl-h">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal as="h1" id="vsl-h" className="text-display-md sm:text-display-lg lg:text-display-xl">
            We help solar businesses and contractors get more jobs with
            Websites, AI, and Automated 5 Star reviews for just
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 font-display text-display-md text-accent sm:text-display-lg"
          >
            $297 a month
          </Reveal>
          <Reveal
            as="p"
            index={2}
            className="mt-10 label text-muted"
          >
            Watch these two videos before the call &darr;
          </Reveal>
        </div>
      </Section>

      {/* Co-Founder McKeith */}
      <FounderBlock
        name="McKeith"
        videoSrc="/vsl/mckeith.mp4"
        videoPoster="/vsl/mckeith.jpg"
        photo={mckeith}
      />

      {/* Co-Founder Cayden */}
      <FounderBlock
        name="Cayden"
        videoSrc="/vsl/cayden.mp4"
        videoPoster="/vsl/cayden.jpg"
        photo={cayden}
      />

      {/* Client proof: the testimonial video and the Google review
          screenshot, no section heading above them. Deliberately rendered
          in a narrower centered column (max-w-2xl) so the two blocks here
          read as supporting evidence rather than a third video on par with
          the two founder VSLs above. The page intentionally ends here — no
          FinalCTA, no site footer below (FooterGate hides the global Footer
          for /video-vsl). The booking link lives inside one of the founder
          videos, which is where it belongs on a VSL. */}
      {testimonial ? (
        <Section rule="top" aria-label="Client testimonial">
          <div className="mx-auto max-w-2xl">
            <Reveal as="div">
              <div className="relative aspect-video w-full overflow-hidden bg-ink">
                <video
                  src={testimonial.videoSrc}
                  poster={testimonial.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-contain"
                  aria-label={`Video testimonial from ${testimonial.name}`}
                />
              </div>

              <Stars count={testimonial.rating} className="mt-5 text-yellow-400" />
              <blockquote className="mt-3 text-body-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-3 font-display text-item">&ndash;{testimonial.name}</p>
            </Reveal>

            {/* The Google review screenshot. One hairline border, nothing else:
                the point is that it is a verbatim screenshot and the chrome of
                the page should not compete with it. */}
            <Reveal as="div" index={1} className="mt-10">
              <p className="label text-muted">Verified Google review</p>
              <div className="mt-3 border border-line bg-bone p-3 sm:p-4">
                <Image
                  src="/testimonials/rong-google-review.png"
                  alt="Five-star Google review from Rong: Had a great experience working with Volt for our company website. They are very responsive, and whenever we requested any changes, they got it done quickly. Easy to communicate with and very helpful throughout the process. The website turned out clean and professional, and they also helped us with SEO to improve our visibility on Google. Overall, really happy with their service. Highly recommended!"
                  width={1600}
                  height={520}
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}
    </main>
  );
}

/**
 * One founder block: eyebrow label, face icon beside the heading, then the
 * video slot underneath. The face sits as a 56px circle to the left of the
 * heading on every width (not just desktop) so the mobile layout still reads
 * as "message from this named person" rather than a disembodied header.
 */
function FounderBlock({
  name,
  videoSrc,
  videoPoster,
  photo,
}: {
  name: string;
  videoSrc: string;
  videoPoster: string;
  photo:
    | {
        src: string;
        alt: string;
        position: { x: number; y: number };
      }
    | undefined;
}) {
  return (
    <Section rule="top" aria-labelledby={`${name.toLowerCase()}-h`}>
      <SectionLabel rule>Co-Founder</SectionLabel>
      <Reveal as="div" className="mt-6 flex items-center gap-4 sm:gap-5">
        {photo ? (
          <Photo
            src={photo.src}
            alt={photo.alt}
            aspect="1 / 1"
            position={photo.position}
            sizes="72px"
            className="w-14 shrink-0 rounded-full border border-line sm:w-16"
          />
        ) : (
          <div
            aria-hidden
            style={{ aspectRatio: "1 / 1" }}
            className="w-14 shrink-0 rounded-full border border-line bg-bone-deep sm:w-16"
          />
        )}
        <h2 id={`${name.toLowerCase()}-h`} className="text-display-md">
          A message from Co-Founder {name}.
        </h2>
      </Reveal>

      <Reveal as="div" index={1} className="mt-8">
        <div className="relative aspect-video w-full overflow-hidden bg-ink">
          <video
            src={videoSrc}
            poster={videoPoster}
            controls
            preload="metadata"
            playsInline
            className="h-full w-full object-contain"
            aria-label={`A message from Co-Founder ${name}`}
          />
        </div>
      </Reveal>
    </Section>
  );
}
