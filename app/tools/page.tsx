import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { getTools, getToolsByAudience, toolHref } from "@/lib/content/tools";
import { pad } from "@/lib/format";

export const metadata: Metadata = pageMetadata({
  title: "Solar tools: calculators for US solar companies",
  description:
    "Free interactive calculators for US solar operators and homeowners: lead cost, close rate, speed to lead, Google Ads budget, review impact, solar ROI, battery payback, system size.",
  path: "/tools",
});

/**
 * /tools index.
 *
 * Grouped by audience (Installer / Homeowner) because the use cases are
 * fundamentally different: the installer tools are internal business
 * calculators; the homeowner tools can be embedded as lead magnets on the
 * installer's own site.
 */
export default function ToolsIndexPage() {
  const tools = getTools();
  const byAudience = getToolsByAudience();
  const order: string[] = Object.keys(byAudience);

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="tools-index-h">
        <SectionLabel rule>Tools</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="tools-index-h" className="text-display-xl lg:col-span-8">
            Calculators for US solar companies.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Honest numbers, your inputs, no sign-up. The ones that answer the
            questions a US solar operator (or a homeowner they are quoting)
            actually asks.
          </Reveal>
        </div>
      </Section>

      {order.map((aud) => (
        <Section key={aud} rule="top" aria-label={`${aud} tools`}>
          <SectionLabel rule>For {aud.toLowerCase()}s</SectionLabel>
          <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {byAudience[aud as keyof typeof byAudience]!.map((t, i) => (
              <Reveal key={t.slug} as="li" index={i}>
                <Link
                  href={toolHref(t.slug)}
                  data-cursor="grow"
                  className="group flex h-full flex-col rounded-control border border-line bg-surface p-6 transition-colors duration-100 hover:border-fg"
                >
                  <span className="label text-muted">
                    {pad(tools.indexOf(t) + 1)}
                  </span>
                  <h2 className="mt-4 text-h3 text-fg">{t.title}</h2>
                  <p className="mt-3 text-body-sm text-muted">{t.tagline}</p>
                  <p className="label mt-auto flex items-center gap-2 pt-6 text-accent">
                    Open calculator
                    <svg
                      aria-hidden
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    >
                      <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
                    </svg>
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Section>
      ))}

      <FinalCTA source="tools_index_cta" />
    </main>
  );
}
