import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { DPA, DPA_DATES, unnamedSubProcessors } from "@/lib/content/dpa";
import { contractingParty } from "@/lib/content/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Data Processing Addendum",
  description: `The terms on which ${SITE.name} processes your customers' personal information on your behalf: roles, restrictions, named sub-processors, security, breach notification and deletion.`,
  path: "/dpa",
});

export default function DpaPage() {
  /** Section numbers found rather than typed, so they follow the document. */
  const subProcessors = DPA.findIndex((s) => s.id === "sub-processors") + 1;
  const unnamed = unnamedSubProcessors();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Data Processing Addendum", path: "/dpa" },
        ])}
      />
      <LegalPage
        title="Data Processing Addendum"
        dates={DPA_DATES}
        sections={DPA}
        warnings={
          unnamed > 0
            ? [
                `${unnamed} sub-processor ${unnamed === 1 ? "is" : "are"} still unnamed in the table in section ${subProcessors}. A DPA that hides a processor is worse than one that has none, so name it in lib/content/dpa.ts before publishing.`,
              ]
            : []
        }
        intro={
          <p>
            This Data Processing Addendum (&ldquo;Addendum&rdquo;) forms part of the{" "}
            <Link
              href="/terms"
              className="link-underline decoration-underline-current hover:decoration-fg"
            >
              Terms of Service
            </Link>{" "}
            between you and {contractingParty()}. It governs how we process personal information
            about <em>your</em> customers when we do so on your behalf.
            Information about you is covered by our{" "}
            <Link
              href="/privacy"
              className="link-underline decoration-underline-current hover:decoration-fg"
            >
              Privacy Policy
            </Link>{" "}
            instead. It takes effect automatically when you accept the Terms of Service, with no
            separate signature needed.
          </p>
        }
        notice={
          <>
            IMPORTANT: You are the Controller of your customers&rsquo; data and we are the Processor.
            You decide what is collected and why; we process it only to deliver the Services. Our
            sub-processors are named in Section {subProcessors}.
          </>
        }
      />
    </>
  );
}
