import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { PRIVACY, PRIVACY_DATES } from "@/lib/content/privacy";
import { contractingParty } from "@/lib/content/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, shares and retains personal information, what happens to your customers' data inside the system, and how to exercise your privacy rights.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  /** Section numbers found rather than typed, so they follow the document. */
  const sharing = PRIVACY.findIndex((s) => s.id === "sale-and-sharing") + 1;
  const customers = PRIVACY.findIndex((s) => s.id === "your-customers-data") + 1;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        dates={PRIVACY_DATES}
        sections={PRIVACY}
        warnings={[
          "Sections 7 and 8 describe analytics and advertising pixels. Neither is installed on the site yet, so the policy currently discloses more than the site does. Install them, or cut those sections, before publishing.",
          "Running advertising pixels also needs a cookie consent banner and a Do Not Sell or Share link in the footer. Neither exists yet.",
        ]}
        intro={
          <p>
            This Privacy Policy explains how {contractingParty()}{" "}
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), collects, uses, shares and
            retains personal information when you visit our website, speak to us, or use our
            Services. It applies to information about you. Information about your own customers,
            held inside the system on your behalf, is covered separately in Section {customers}.
            Read it alongside our{" "}
            <Link
              href="/terms"
              className="link-underline decoration-underline-current hover:decoration-fg"
            >
              Terms of Service
            </Link>
            .
          </p>
        }
        notice={
          <>
            IMPORTANT: We do not sell your personal information for money. We do share website
            activity with advertising platforms, which several state laws treat as sharing. You can
            opt out. See Section {sharing}.
          </>
        }
      />
    </>
  );
}
