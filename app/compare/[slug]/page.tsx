import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { absolute, breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { bookingHref } from "@/lib/site";
import {
  comparisonHref,
  getComparison,
  getComparisons,
  type Comparison,
} from "@/lib/content/compare";

type Props = PageProps<"/compare/[slug]">;

export function generateStaticParams() {
  return getComparisons().map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getComparison(slug);
  if (!c) return {};
  return pageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: comparisonHref(c.slug),
  });
}

/**
 * One competitor comparison page.
 *
 * Scannable by design: the answer sits above the fold, the two-column "who
 * should pick which" lands next, then the feature matrix carries the detail,
 * then the honest paragraph verdict closes it. FAQ at the foot is both read
 * on-page and mirrored into FAQPage schema for AI Overviews.
 */
export default async function ComparisonPage(props: Props) {
  const { slug } = await props.params;
  const c = getComparison(slug);
  if (!c) notFound();

  return (
    <main className="flex-1">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compare", path: "/compare" },
            { name: `vs ${c.competitor.name}`, path: comparisonHref(c.slug) },
          ]),
          faqSchema(c.faq, absolute(comparisonHref(c.slug))),
        ]}
      />

      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      {/* Header: breadcrumb, H1, short framing, direct answer, booking CTA */}
      <Section as="header" aria-labelledby="compare-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/compare" className="hover:text-fg">
            Compare
          </Link>
          <span aria-hidden>/</span>
          <span className="text-accent">vs {c.competitor.name}</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="compare-h" className="text-display-md lg:col-span-8">
            {c.title}
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            {c.competitor.tagline}.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          {c.answer}
        </Reveal>

        <Reveal as="div" index={3} className="mt-8">
          <Button href={bookingHref(`compare_${c.slug}_hero`)} source={`compare_${c.slug}_hero`}>
            Book a 20-minute call
          </Button>
        </Reveal>
      </Section>

      {/* Two columns: when to pick Volt vs when to pick the other tool. The
          symmetrical layout is the point: this page is not a hit piece. */}
      <Section rule="top" aria-labelledby="pick-h">
        <SectionLabel rule>Who should pick which</SectionLabel>
        <h2 id="pick-h" className="sr-only">
          Who should pick which
        </h2>

        <div className="mt-8 grid gap-x-6 gap-y-10 lg:grid-cols-2">
          <PickColumn
            title="Pick Volt Relay when"
            items={c.pickVolt}
            tone="accent"
            index={0}
          />
          <PickColumn
            title={`Pick ${c.competitor.name} when`}
            items={c.pickOther}
            tone="muted"
            index={1}
          />
        </div>
      </Section>

      {/* The feature matrix. Grouped so a scanner can skip to lead response,
          reviews, website etc without reading every row. */}
      <Section rule="top" aria-labelledby="matrix-h">
        <SectionLabel rule>The honest comparison</SectionLabel>
        <h2 id="matrix-h" className="mt-6 text-h2">
          Volt Relay next to {c.competitor.name}, row by row
        </h2>

        <div className="mt-10 flex flex-col gap-10">
          {c.matrix.map((group, gi) => (
            <Reveal as="div" key={group.group} index={gi}>
              <h3 className="text-h3">{group.group}</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-body-sm">
                  <thead>
                    <tr className="border-b border-line text-left">
                      <th className="label w-1/3 py-3 pr-4 font-medium text-muted">Feature</th>
                      <th className="label w-1/3 py-3 pr-4 font-medium text-fg">Volt Relay</th>
                      <th className="label w-1/3 py-3 font-medium text-muted">{c.competitor.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.feature} className="border-b border-line align-top">
                        <td className="py-4 pr-4 font-medium text-fg">{row.feature}</td>
                        <td className="py-4 pr-4 text-fg">{row.volt}</td>
                        <td className="py-4 text-muted">{row.other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing read, side by side */}
      <Section rule="top" aria-labelledby="price-h">
        <SectionLabel rule>Pricing</SectionLabel>
        <h2 id="price-h" className="mt-6 text-h2">
          What each actually costs
        </h2>

        <div className="mt-8 grid gap-x-6 gap-y-8 lg:grid-cols-2">
          <Reveal as="div">
            <p className="label text-accent">Volt Relay</p>
            <p className="mt-3 text-body text-fg">{c.pricing.volt}</p>
          </Reveal>
          <Reveal as="div" index={1}>
            <p className="label text-muted">{c.competitor.name}</p>
            <p className="mt-3 text-body text-fg">{c.pricing.other}</p>
          </Reveal>
        </div>

        {c.pricing.note ? (
          <Reveal as="p" index={2} className="mt-6 max-w-measure text-body-sm text-muted">
            {c.pricing.note}
          </Reveal>
        ) : null}
      </Section>

      {/* Solar-specific framing: why this comparison matters for a solar operator
          rather than for a generic SMB. */}
      <Section rule="top" aria-labelledby="solar-h">
        <SectionLabel rule>Why this matters for solar</SectionLabel>
        <h2 id="solar-h" className="sr-only">
          Why this matters for solar
        </h2>
        <Reveal as="p" className="mt-6 max-w-measure text-lead text-fg">
          {c.solarFit}
        </Reveal>
      </Section>

      {/* The honest verdict. One paragraph, no false balance. */}
      <Section rule="top" aria-labelledby="verdict-h">
        <SectionLabel rule>Verdict</SectionLabel>
        <h2 id="verdict-h" className="sr-only">
          Verdict
        </h2>
        <Reveal as="p" className="mt-6 max-w-measure text-lead text-fg">
          {c.verdict}
        </Reveal>
      </Section>

      {/* FAQ: rendered and schema-marked. */}
      <Section rule="top" aria-labelledby="faq-h">
        <SectionLabel rule>Questions people ask</SectionLabel>
        <h2 id="faq-h" className="mt-6 text-h2">
          Volt Relay vs {c.competitor.name}: FAQ
        </h2>

        <dl className="mt-8 flex flex-col gap-8">
          {c.faq.map((f, i) => (
            <Reveal as="div" key={f.q} index={i} className="border-t border-line pt-6">
              <dt className="text-h3 text-fg">{f.q}</dt>
              <dd className="mt-3 max-w-measure text-body text-fg">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <FinalCTA source={`compare_${c.slug}_cta`} />
    </main>
  );
}

/**
 * Local column render for the "Pick X when" list. Kept inline because it only
 * has two call sites on this page; a shared component would be premature.
 */
function PickColumn({
  title,
  items,
  tone,
  index,
}: {
  title: string;
  items: readonly string[];
  tone: "accent" | "muted";
  index: number;
}) {
  return (
    <Reveal as="div" index={index} className="border-t-2 border-line pt-6">
      <p
        className={`label ${
          tone === "accent" ? "text-accent" : "text-muted"
        }`}
      >
        {title}
      </p>
      <ul className="mt-5 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-body text-fg">
            <span aria-hidden className="mt-2 inline-block h-px w-3 shrink-0 bg-line" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/* Reference, so an unused export does not slip. */
export type { Comparison };
