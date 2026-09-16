/**
 * Tracking IDs. One file, and the only place any of them appear.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  NOT YET SET. Paste your IDs below and each one starts working. Until an ID
 *  is set, that script is never loaded, no matter what the visitor consents
 *  to: consent alone is not enough, the ID has to exist too.
 *
 *    GA4_ID          Google Analytics 4 Measurement ID, "G-XXXXXXXXXX".
 *                    Admin > Data streams > your web stream.
 *    META_PIXEL_ID   Meta Pixel ID, a long number.
 *                    Events Manager > Data sources > your pixel.
 *    GOOGLE_ADS_ID   Google Ads conversion ID, "AW-XXXXXXXXX".
 *                    Tools > Conversions > your conversion action > tag setup.
 * ──────────────────────────────────────────────────────────────────────────
 *
 * Public IDs by design. These are meant to be visible in page source, so they
 * are not secrets and do not belong in environment variables.
 */
export const TRACKING = {
  GA4_ID: "",
  META_PIXEL_ID: "",
  GOOGLE_ADS_ID: "",
} as const;

/** Which consent category each script belongs to. */
export const analyticsConfigured = (): boolean => TRACKING.GA4_ID !== "";
export const advertisingConfigured = (): boolean =>
  TRACKING.META_PIXEL_ID !== "" || TRACKING.GOOGLE_ADS_ID !== "";

/** Everything still to paste in, for the dev-only notice. */
export const missingTrackingIds = (): string[] =>
  Object.entries(TRACKING)
    .filter(([, v]) => v === "")
    .map(([k]) => k);
