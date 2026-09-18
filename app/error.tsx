"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * The runtime error boundary, in the same voice as the 404.
 *
 * A client component by contract: Next passes the error and a `reset` that
 * re-renders the segment, and `reset` is a function, so this cannot be a
 * server component. Retrying is the first thing offered because most of what
 * lands here is transient.
 *
 * The error's own message is never shown. It is written to the console for
 * anyone with devtools open, and the reader gets a sentence they can act on.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[volt] unhandled error", error);
  }, [error]);

  return (
    <main className="flex-1">
      <div aria-hidden className="h-nav-condensed" />

      <Section as="header" aria-labelledby="err-h">
        <SectionLabel rule>Error</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <h1 id="err-h" className="text-display-xl lg:col-span-7">
            Something went wrong.
          </h1>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="mt-6 max-w-measure text-lead lg:mt-0">
              This page failed to load. It is usually temporary, so try it again first.
            </p>
            {error.digest && (
              <p className="label mt-5 text-muted">Reference: {error.digest}</p>
            )}

            <div className="mt-8 flex flex-col items-start gap-5">
              <button
                type="button"
                onClick={reset}
                data-cursor="grow"
                className="h-12 rounded-control bg-accent px-6 text-body font-medium text-ink transition-colors duration-100 active:bg-accent-deep"
              >
                Try again
              </button>
              <Link
                href="/"
                data-cursor="grow"
                className="link-underline decoration-underline-current text-body font-medium text-fg hover:decoration-fg"
              >
                Back to the homepage
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
