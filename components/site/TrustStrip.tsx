/**
 * The band that sits under the navigation bar, on every page.
 *
 * Three claims, all real and each one testable:
 *   - "30-Day Money Back", covered by section [[refunds]] of the Terms of
 *     Service. That section replaced the flat no-refund clause on
 *     2026-09-29, so if this line appears on a page whose Terms still say
 *     payments are non-refundable, something has regressed.
 *   - "No Setup Fee", true while PLAN.setupFee is null in lib/content/pricing.ts.
 *     If a setup fee is ever added, remove this line: an unenforced trust
 *     claim is worse than none.
 *   - "Google Search Ads Certified", verifiable via the badge in the hero,
 *     and expires yearly. Renew before its expiry or drop the line.
 *
 * Rendered inline in the flow (not fixed). It sits above the fold on the
 * first view and scrolls away with the page, which is the shape most trust
 * strips take. Making it sticky under a fixed nav is possible but noisier,
 * and the strip's job is to reassure a first arrival, not remind you.
 *
 * Mobile carries "Google Ads Certified" rather than "Google Search Ads
 * Certified": the full label added an extra 40 pixels that pushed the row
 * off a 390px viewport. "Ads" alone is unambiguous here (the badge in the
 * hero is a Search Ads one) and the shorter phrasing is what most people
 * would say aloud.
 */
export function TrustStrip() {
  const items = [
    { desktop: "30-Day Money Back", mobile: "30-Day Money Back" },
    { desktop: "No Setup Fee", mobile: "No Setup Fee" },
    { desktop: "Google Search Ads Certified", mobile: "Google Ads Certified" },
  ];
  return (
    <div
      role="region"
      aria-label="Guarantees"
      className="border-b border-line bg-bone-deep"
    >
      <div className="mx-auto flex items-center justify-center gap-3 px-3 py-2 sm:gap-6 sm:px-gutter sm:py-2.5">
        {items.map((item, i) => (
          <div key={item.desktop} className="flex items-center gap-3 sm:gap-6">
            {i > 0 && (
              <span aria-hidden className="size-1 rounded-full bg-muted" />
            )}
            <span className="label whitespace-nowrap text-[0.6rem] text-fg sm:text-label">
              <span className="sm:hidden">{item.mobile}</span>
              <span className="hidden sm:inline">{item.desktop}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
