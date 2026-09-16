import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { bookingHref } from "@/lib/site";
import { PROCESS } from "@/lib/content/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our process: two calls and about ten days",
  description:
    "What working with Volt looks like: a 20-minute demo call, 7 to 10 days while we build your system, and a launch call. Then it runs.",
  path: "/our-process",
});

export default function OurProcessPage() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our process", path: "/our-process" },
        ])}
      />
      {/* Clear the fixed bar, which is condensed and solid on every page without a hero */}
      <div aria-hidden className="h-nav-condensed" />

      <Section as="header" aria-labelledby="process-h">
        <SectionLabel rule>Our process</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="process-h" className="text-display-xl lg:col-span-7">
            What working with us looks like.
          </Reveal>
          <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead lg:col-span-4 lg:col-start-9 lg:mt-0">
            {PROCESS.length} steps, two of them calls. About ten days from the first conversation to
            a system that is answering your leads.
          </Reveal>
        </div>

        <ProcessTimeline />
      </Section>

      {/* Stone's page ends the timeline on an invitation; this is ours, on paper before the slab */}
      <Section rule="top" rhythm="sm" aria-labelledby="talk-h">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <Reveal as="div" className="lg:col-span-7">
            <h2 id="talk-h" className="text-display-md">
              Want to talk it through?
            </h2>
            <p className="mt-5 max-w-measure text-body text-muted">
              Twenty minutes, no pitch deck. We look at how leads reach you today and tell you
              whether the system is worth it for your company yet.
            </p>
          </Reveal>
          <Reveal
            as="div"
            index={1}
            className="mt-8 flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            <Button href={bookingHref("process_page")} source="process_page" external>
              Book a 20-minute call
            </Button>
            <Button href="/products" source="process_products" variant="link">
              See what you get
            </Button>
          </Reveal>
        </div>
      </Section>

      <FinalCTA />
    </main>
  );
}
