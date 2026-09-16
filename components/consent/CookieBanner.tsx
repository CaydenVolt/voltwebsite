"use client";

import Link from "next/link";
import { useConsent } from "@/components/consent/ConsentProvider";

/**
 * The first-visit bar. An ink slab across the foot of the page with a hairline
 * above it, in the site's own language: no rounded card, no shadow, no overlay
 * dimming the page behind it.
 *
 * It does not block the page. Nothing is loaded until a choice is made, so
 * there is no reason to trap someone in a dialog to get one, and a modal that
 * has to be dismissed before reading is the pattern everyone resents.
 *
 * Reject is given the same weight as Accept. A banner where refusing is a
 * greyed-out link in the corner is a banner designed to produce a yes, and
 * regulators have started saying so.
 */
export function CookieBanner() {
  const { decided, acceptAll, rejectAll, setOpen } = useConsent();

  // `decided` is false both before storage is read and when no choice exists.
  // The banner renders only in the browser, after that read, so it never
  // flashes on a page that has already been answered.
  if (decided) return null;

  return (
    <div
      role="region"
      aria-label="Cookie choices"
      data-surface="ink"
      className="fixed inset-x-0 bottom-0 z-consent border-t border-line bg-ink px-gutter py-5 text-bone"
    >
      <div className="mx-auto flex max-w-measure-legal flex-col gap-5 lg:max-w-none lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <p className="max-w-measure text-body-sm">
          We use cookies to run this site, to measure how it is used, and to show our ads to the
          right people. Nothing beyond the essentials runs until you say yes.{" "}
          <Link
            href="/privacy#cookies-and-tracking"
            className="link-underline decoration-underline-current hover:decoration-bone"
          >
            How we use them
          </Link>
          .
        </p>

        {/* Equal weight, and Reject first: the order a refusal should be easiest in. */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={rejectAll}
            data-cursor="grow"
            className="h-11 whitespace-nowrap rounded-control border border-bone px-5 text-body-sm font-medium text-bone transition-colors duration-100 active:bg-ink-soft"
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={acceptAll}
            data-cursor="grow"
            className="h-11 whitespace-nowrap rounded-control bg-accent px-5 text-body-sm font-medium text-ink transition-colors duration-100 active:bg-accent-deep"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            data-cursor="grow"
            className="label -my-2.5 whitespace-nowrap px-1 py-2.5 text-bone-muted underline decoration-underline-inverse underline-offset-4 transition-colors duration-100 hover:text-bone"
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}
