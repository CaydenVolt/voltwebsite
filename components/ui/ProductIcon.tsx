import type { ReactNode } from "react";

/**
 * One monoline mark per product, drawn on a 24 grid in the same hand as the
 * rest of the page: hairline stroke, square caps, mitred joins, no fill, no
 * rounded corners, no container. They sit beside the name in every product
 * list, sized in step with the text they sit next to, and inherit colour from
 * the caller so they stay quiet while the numeral carries the hover.
 *
 * Keyed by slug. A product with no mark simply renders nothing, so adding a
 * product never breaks a list.
 */
const GLYPHS: Record<string, ReactNode> = {
  /* Browser window */
  "functional-website": (
    <>
      <path d="M3 4.5h18v15H3z" />
      <path d="M3 9h18M6 6.75h2M10 6.75h2" />
    </>
  ),
  /* Speech bubble with the reply arrow */
  "missed-call-text-back": (
    <>
      <path d="M4 4.5h16v11H9.5l-5.5 4.5z" />
      <path d="M15 10H9M11.5 7.5 9 10l2.5 2.5" />
    </>
  ),
  /* A scheduled run of messages, arriving */
  "automated-lead-follow-up": (
    <>
      <path d="M3 12h3M8.5 12h3M14 12h3" />
      <path d="M17 8.5 20.5 12 17 15.5" />
    </>
  ),
  /* Inbox tray, everything landing in it */
  "all-in-one-inbox": (
    <>
      <path d="M3 13.5h5l1.5 3h5l1.5-3h5" />
      <path d="M6.5 4.5h11l3.5 9v6H3v-6z" />
    </>
  ),
  /* Star */
  "five-star-review-funnel": <path d="m12 3.5 2.6 5.7 6.2.7-4.6 4.2 1.3 6.1-5.5-3.1-5.5 3.1 1.3-6.1L3.2 9.9l6.2-.7z" />,
  /* Magnifier */
  "on-site-seo": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  /* Bubble with a spark: the reply that is written, not scheduled */
  "ai-lead-nurturing": (
    <>
      <path d="M4 4.5h16v11H9.5l-5.5 4.5z" />
      <path d="m12 6.5 1.2 2.8 2.8 1.2-2.8 1.2L12 14.5l-1.2-2.8L8 10.5l2.8-1.2z" />
    </>
  ),
  /* The list, come back round again */
  "reactivation-campaigns": (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.9-6.4" />
      <path d="M20.5 3v5h-5" />
    </>
  ),
  /* One customer passing you two more */
  "automated-referrals": (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
    </>
  ),
  /* Target: paid placement, aimed */
  "google-ads-management": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  /* Map pin */
  "google-my-business-optimization": (
    <>
      <path d="M12 21c4.7-5.2 7-8.6 7-11a7 7 0 1 0-14 0c0 2.4 2.3 5.8 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  /* Magnifier, looking deeper */
  "advanced-seo": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M8 10.5h5M10.5 8v5M15.5 15.5l5 5" />
    </>
  ),
};

export function ProductIcon({ slug, className = "size-5" }: { slug: string; className?: string }) {
  const glyph = GLYPHS[slug];
  if (!glyph) return null;
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`shrink-0 ${className}`}
    >
      {glyph}
    </svg>
  );
}
