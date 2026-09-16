import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, routeExists } from "@/components/legal/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TERMS, TERMS_DATES } from "@/lib/content/terms";
import { LEGAL } from "@/lib/content/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms you agree to when you subscribe to ${SITE.name}: what the subscription covers, how billing and cancellation work, who is responsible for message compliance, and how disputes are resolved.`,
  path: "/terms",
});

export default function TermsPage() {
  /* Asked of the filesystem rather than tracked by hand, so the clause below
     starts linking the moment /privacy is published and the warning clears
     itself. A manual flag would outlive whichever change it was describing. */
  const privacyPublished = routeExists("/privacy");
  /** The section the arbitration notice points at, found rather than typed. */
  const arbitration = TERMS.findIndex((s) => s.id === "dispute-resolution") + 1;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalPage
        title="Terms of Service"
        dates={TERMS_DATES}
        sections={TERMS}
        warnings={
          privacyPublished
            ? []
            : [
                "The opening paragraph binds the Client to a Privacy Policy, and /privacy does not exist yet. Publish it, or remove the reference.",
              ]
        }
        intro={
          <p>
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
        }
        notice={
          <>
            IMPORTANT: These Terms include a binding arbitration agreement and a class action waiver
            in Section {arbitration}. Please read them carefully.
          </>
        }
      />
    </>
  );
}
