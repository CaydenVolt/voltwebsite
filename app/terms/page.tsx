import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TERMS } from "@/lib/content/terms";
import { LEGAL, formatLegalDate, missingLegalFacts } from "@/lib/content/legal";
import { SITE } from "@/lib/site";
import { pad } from "@/lib/format";

export const metadata: Metadata = pageMetadata({
  title: "Terms and conditions",
  description: `The terms you agree to when you subscribe to ${SITE.name}: what the fee covers, how billing and cancellation work, who is responsible for message compliance, and how disputes are resolved.`,
  path: "/terms",
});

export default function TermsPage() {
  const missing = missingLegalFacts();

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />

      <Section as="header" rhythm="sm" aria-labelledby="terms-h">
        <SectionLabel rule>Legal</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="terms-h" className="text-display-xl lg:col-span-7">
            Terms and conditions.
          </Reveal>
          <Reveal as="div" index={1} className="mt-6 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end">
            <p className="max-w-measure text-lead">
              What you are agreeing to when you subscribe. Written to be read, not to be got past.
            </p>
            <p className="label mt-6 border-t border-line pt-4 text-muted">
              Effective <time dateTime={LEGAL.effective}>{formatLegalDate(LEGAL.effective)}</time>
              {" · "}
              {pad(TERMS.length)} sections
            </p>
          </Reveal>
        </div>

        {/* Dev-only. Never shipped to a reader, and impossible to miss while it
            is true: a terms page naming a company that does not exist binds
            nobody. Removed automatically once lib/content/legal.ts is filled. */}
        {process.env.NODE_ENV !== "production" && missing.length > 0 && (
          <div className="mt-10 border-l-2 border-accent bg-surface-deep px-5 py-4">
            <p className="label text-accent">Not ready to publish</p>
            <p className="mt-3 max-w-measure text-body">
              {missing.length} legal {missing.length === 1 ? "fact is" : "facts are"} still unset in{" "}
              <code className="font-display">lib/content/legal.ts</code>: {missing.join(", ")}. Fill
              them and have an attorney in the governing state read this page before it goes live.
            </p>
          </div>
        )}
      </Section>

      <Section rhythm="sm">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6">
          {/* Thirty sections is too many to scroll blind, so the contents
              travel with the reader and every section is linkable. */}
          <aside className="lg:sticky lg:top-nav-condensed lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <nav aria-labelledby="terms-contents-h" className="border-t border-line pt-6">
              <h2 id="terms-contents-h" className="label text-muted">
                Contents
              </h2>
              <ol className="mt-4">
                {TERMS.map((section, i) => (
                  <li key={section.id} className="py-1.5">
                    <a
                      href={`#${section.id}`}
                      data-cursor="grow"
                      className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3"
                    >
                      <span className="label text-muted">{pad(i + 1)}</span>
                      <span className="text-body-sm text-fg group-hover:text-accent">
                        {section.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <p className="max-w-measure text-body text-muted">
              These terms are between you and {LEGAL.entity}, trading as {LEGAL.tradingAs}. They
              apply from the moment you subscribe. Section 22 requires most disputes to go to
              arbitration rather than a court, and you can opt out of that within 30 days.
            </p>
            <LegalDoc sections={TERMS} />

            <div className="mt-16 border-t border-line pt-6">
              <p className="label text-muted">Also on this site</p>
              <p className="mt-3 max-w-measure text-body">
                <Link
                  href="/pricing"
                  className="link-underline decoration-underline-current hover:decoration-fg"
                >
                  What the subscription costs
                </Link>
                {", and "}
                <Link
                  href="/contact"
                  className="link-underline decoration-underline-current hover:decoration-fg"
                >
                  how to reach us
                </Link>
                {" if anything here needs explaining."}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
