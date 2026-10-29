import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import {
  comparisonHref,
  getComparisons,
  getComparisonsByCategory,
} from "@/lib/content/compare";
import { pad } from "@/lib/format";

export const metadata: Metadata = pageMetadata({
  title: "Volt Relay vs other tools: honest comparisons for US solar",
  description:
    "Side-by-side comparisons of Volt Relay against the tools US solar companies actually choose between. Who should pick which, feature matrices and real pricing.",
  path: "/compare",
});

export default function CompareIndexPage() {
  const comparisons = getComparisons();
  const byCategory = getComparisonsByCategory();
  const categoryOrder: string[] = Object.keys(byCategory);

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="compare-index-h">
        <SectionLabel rule>Compare</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="compare-index-h" className="text-display-xl lg:col-span-8">
            Volt Relay next to the other tools you are weighing.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Honest, structured comparisons for US solar companies. Who should
            pick which, the feature matrix, and the real pricing.
          </Reveal>
        </div>
      </Section>

      {categoryOrder.map((cat, ci) => (
        <Section key={cat} rule="top" aria-label={`${cat} tools`}>
          <SectionLabel rule>{cat}</SectionLabel>
          <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {byCategory[cat as keyof typeof byCategory]!.map((c, i) => (
              <Reveal key={c.slug} as="li" index={i}>
                <Link
                  href={comparisonHref(c.slug)}
                  data-cursor="grow"
                  className="group flex h-full flex-col rounded-control border border-line bg-surface p-6 transition-colors duration-100 hover:border-fg"
                >
                  <span className="label text-muted">
                    {pad(comparisons.indexOf(c) + 1)}
                  </span>
                  <h2 className="mt-4 text-h3 text-fg">
                    vs {c.competitor.name}
                  </h2>
                  <p className="mt-3 text-body-sm text-muted">
                    {c.competitor.tagline}
                  </p>
                  <p className="label mt-auto flex items-center gap-2 pt-6 text-accent">
                    Read comparison
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
          {/* Suppress the ci warning for Reveal keying */}
          <span hidden>{ci}</span>
        </Section>
      ))}

      <FinalCTA source="compare_index_cta" />
    </main>
  );
}
