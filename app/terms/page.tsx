import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TERMS } from "@/lib/content/terms";
import { LEGAL, formatLegalDate, missingLegalFacts, nextReviewDue } from "@/lib/content/legal";
import { SITE } from "@/lib/site";
import { routeExists } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms you agree to when you subscribe to ${SITE.name}: what the subscription covers, how billing and cancellation work, who is responsible for message compliance, and how disputes are resolved.`,
  path: "/terms",
});

/** The document's four dates, in the order a reader expects them. */
const DATES = [
  { label: "Effective Date", iso: LEGAL.effective },
  { label: "Last Updated", iso: LEGAL.lastUpdated },
  { label: "Last Reviewed", iso: LEGAL.lastReviewed },
  { label: "Next Review Due", iso: nextReviewDue() },
];

export default function TermsPage() {
  const missing = missingLegalFacts();
  /* Asked of the filesystem rather than tracked by hand, so the clause below
     starts linking the moment /privacy is published and the warning clears
     itself. A manual flag would outlive whichever change it was describing. */
  const privacyPublished = routeExists("/privacy");
  /** The section number the arbitration notice points at, found rather than typed. */
  const arbitration = TERMS.findIndex((s) => s.id === "dispute-resolution") + 1;

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />

      {/* One centred column. No contents rail, no sidebar and nothing
          decorative: a legal page is read under suspicion, and design on one
          reads as an attempt to steer the eye past something.

          Centred rather than left-set, and on a wider measure than the rest of
          the site, because a narrow column hard against the left edge of a
          desktop window reads as a layout that broke rather than a document. */}
      <Section rhythm="sm">
        <div className="mx-auto max-w-measure-legal">
          <h1 className="text-display-md">Terms of Service</h1>

          <dl className="mt-8 text-body-sm text-muted">
            {DATES.map((d) => (
              <div key={d.label} className="flex flex-wrap gap-x-2">
                <dt>{d.label}:</dt>
                <dd>
                  <time dateTime={d.iso}>{formatLegalDate(d.iso)}</time>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-body">
            These Terms of Service constitute an agreement between you and {LEGAL.entity}, doing
            business as {LEGAL.tradingAs}. These Terms of Service (&ldquo;Terms&rdquo;) bind{" "}
            {LEGAL.tradingAs} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and you,
            the individual or entity using our Services (&ldquo;you,&rdquo; &ldquo;Client,&rdquo; or
            &ldquo;your&rdquo;). By purchasing, accessing, or using any of our Services, or by
            checking the agreement box at checkout, you confirm that you have read, understood, and
            agree to be bound by these Terms and our{" "}
            {privacyPublished ? (
              <Link
                href="/privacy"
                className="link-underline decoration-underline-current hover:decoration-fg"
              >
                Privacy Policy
              </Link>
            ) : (
              "Privacy Policy"
            )}
            .
          </p>

          <p className="mt-4 text-body font-semibold text-fg">
            IMPORTANT: These Terms include a binding arbitration agreement and a class action waiver
            in Section {arbitration}. Please read them carefully.
          </p>

          {/* Dev only. A terms page naming a company that does not exist binds
              nobody, and the paragraph above incorporates a Privacy Policy that
              is not published yet. Both disappear once they are resolved. */}
          {process.env.NODE_ENV !== "production" && (missing.length > 0 || !privacyPublished) && (
              <div className="mt-10 border-l-2 border-accent bg-surface-deep px-5 py-4">
                <p className="label text-accent">Not ready to publish</p>
                {missing.length > 0 && (
                  <p className="mt-3 text-body">
                    {missing.length} legal {missing.length === 1 ? "fact is" : "facts are"} still
                    unset in <code className="font-display">lib/content/legal.ts</code>:{" "}
                    {missing.join(", ")}.
                  </p>
                )}
                {!privacyPublished && (
                  <p className="mt-3 text-body">
                    The opening paragraph binds the Client to a Privacy Policy, and{" "}
                    <code className="font-display">/privacy</code> does not exist yet. Publish it, or
                    remove the reference, before this page goes live.
                  </p>
                )}
                <p className="mt-3 text-body">
                  Have an attorney in the governing state read this page before launch.
                </p>
              </div>
            )}

          <div className="mt-4">
            <LegalDoc sections={TERMS} />
          </div>
        </div>
      </Section>
    </main>
  );
}
