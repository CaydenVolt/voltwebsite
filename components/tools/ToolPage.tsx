import Link from "next/link";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { absolute, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { bookingHref } from "@/lib/site";
import { toolHref, type Tool } from "@/lib/content/tools";

/**
 * The shared wrapper every /tools/<slug> page renders. It owns the hero,
 * intro, "how this is calculated" explainer, caveat, FAQ, breadcrumbs,
 * JSON-LD and FinalCTA. The one thing it does NOT own is the interactive
 * calculator itself: that is passed in as `calculator` so each tool's page
 * can hand in its own client component with its own inputs and outputs.
 */
export function ToolPage({ tool, calculator }: { tool: Tool; calculator: ReactNode }) {
  return (
    <main className="flex-1">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: tool.title, path: toolHref(tool.slug) },
          ]),
          faqSchema(tool.faq, absolute(toolHref(tool.slug))),
        ]}
      />

      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      {/* Header: breadcrumb, H1, direct answer, booking CTA */}
      <Section as="header" aria-labelledby="tool-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/tools" className="hover:text-fg">
            Tools
          </Link>
          <span aria-hidden>/</span>
          <span className="text-accent">{tool.title}</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="tool-h" className="text-display-md lg:col-span-8">
            {tool.title}
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            {tool.tagline}.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          {tool.intro}
        </Reveal>
      </Section>

      {/* The interactive calculator itself. Everything above is SSR'd so it
          ranks; the widget below hydrates on the client. */}
      <Section rule="top" aria-labelledby="calc-h">
        <SectionLabel rule>Calculator</SectionLabel>
        <h2 id="calc-h" className="sr-only">
          {tool.title}
        </h2>
        <div className="mt-6">{calculator}</div>
      </Section>

      {/* How this is calculated */}
      <Section rule="top" aria-labelledby="how-h">
        <SectionLabel rule>How this is calculated</SectionLabel>
        <h2 id="how-h" className="mt-6 text-h2">
          How the number is derived
        </h2>
        <ol className="mt-10 flex flex-col gap-10">
          {tool.how.map((step, i) => (
            <Reveal as="li" key={step.heading} index={i} className="lg:grid lg:grid-cols-12 lg:gap-x-6">
              <div className="label text-muted lg:col-span-2">Step {i + 1}</div>
              <div className="mt-2 lg:col-span-10 lg:mt-0">
                <h3 className="text-h3 text-fg">{step.heading}</h3>
                <p className="mt-3 max-w-measure text-body text-fg">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Caveat: a single-paragraph section explaining what the number is NOT */}
      <Section rule="top" aria-labelledby="caveat-h">
        <SectionLabel rule>What this is not</SectionLabel>
        <h2 id="caveat-h" className="sr-only">
          What this is not
        </h2>
        <Reveal as="p" className="mt-6 max-w-measure text-lead text-fg">
          {tool.caveat}
        </Reveal>
      </Section>

      {/* FAQ: rendered and schema-marked */}
      <Section rule="top" aria-labelledby="faq-h">
        <SectionLabel rule>Questions people ask</SectionLabel>
        <h2 id="faq-h" className="mt-6 text-h2">
          {tool.title}: FAQ
        </h2>
        <dl className="mt-8 flex flex-col gap-8">
          {tool.faq.map((f, i) => (
            <Reveal as="div" key={f.q} index={i} className="border-t border-line pt-6">
              <dt className="text-h3 text-fg">{f.q}</dt>
              <dd className="mt-3 max-w-measure text-body text-fg">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Secondary CTA before FinalCTA: ties the tool back to the system that
          would run the number for them automatically. */}
      <Section rule="top" aria-labelledby="apply-h" rhythm="sm">
        <SectionLabel rule>Next step</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h2" id="apply-h" className="text-h2 lg:col-span-7">
            See the number against your real pipeline.
          </Reveal>
          <Reveal as="div" index={1} className="mt-6 max-w-measure lg:col-span-5 lg:col-start-8 lg:mt-0">
            <p className="text-body text-muted">
              A calculator is a snapshot. Volt runs the real one against the
              leads landing in your pipeline, every day, with every channel
              feeding in automatically.
            </p>
            <p className="mt-6">
              <Button href={bookingHref(`tool_${tool.slug}_apply`)} source={`tool_${tool.slug}_apply`} external>
                Book a 20-minute call
              </Button>
            </p>
          </Reveal>
        </div>
      </Section>

      <FinalCTA source={`tool_${tool.slug}_cta`} />
    </main>
  );
}
