import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * These are sent by Next itself, so they travel with the code and apply on any
 * host that runs the app (Vercel, or Cloudflare through the OpenNext adapter).
 * If this site is ever served as a plain folder of static files instead, Next
 * is not in the request path and these stop being sent: set them on the host.
 *
 * Verify after deploying, because a header that is silently not applied is the
 * failure mode here: https://securityheaders.com
 */

/* Third parties the consent system is allowed to load, once an ID is set in
   lib/tracking.ts and the visitor has said yes. Listed here even while the IDs
   are empty, so turning tracking on later is one file rather than two. */
const ANALYTICS = "https://www.googletagmanager.com https://www.google-analytics.com";
const ADS =
  "https://connect.facebook.net https://www.facebook.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com";

/**
 * Content Security Policy.
 *
 * 'unsafe-inline' is in script-src and it is not an oversight: the alternative
 * is per-request nonces, which require middleware and force every page to
 * render dynamically. This site is 171 prerendered pages and that trade is not
 * worth it. The policy still does the thing that matters most, which is
 * refusing scripts from any origin not named here.
 *
 * Only in production: React Refresh needs eval in dev, and a policy that has to
 * be loosened for dev is a policy that drifts.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${ANALYTICS} ${ADS}`,
  // Tailwind and Motion both write inline styles.
  "style-src 'self' 'unsafe-inline'",
  // data: and blob: are for the dithering canvas, which reads and re-emits pixels.
  `img-src 'self' data: blob: ${ANALYTICS} ${ADS}`,
  "media-src 'self'",
  "font-src 'self' data:",
  `connect-src 'self' ${ANALYTICS} ${ADS}`,
  // Nothing is embedded today. The booking page is a link, not an iframe; if it
  // ever becomes one, the booking subdomain goes here.
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  /**
   * One canonical host. voltagencyio.com is the apex, every canonical tag,
   * sitemap entry and schema @id resolves from SITE.url, and www is a
   * permanent redirect to it rather than a second copy of the site.
   *
   * 308 rather than 301, so the method is preserved. This has to exist before
   * anything is indexed: two hosts serving the same pages splits the ranking
   * signals between them, and merging them afterwards is a slow repair.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.voltagencyio.com" }],
        destination: "https://voltagencyio.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Two years, subdomains included. Preload is deliberate: submitting to
          // the HSTS preload list is a one-way door for the whole domain, so do
          // that only once the booking subdomain is live and on HTTPS too.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Send the origin cross-site, the full path same-site. Enough for
          // referral reporting without leaking the page someone came from.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // frame-ancestors below supersedes this everywhere modern; kept for
          // browsers that only honour the older header.
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          ...(process.env.NODE_ENV === "production"
            ? [{ key: "Content-Security-Policy", value: csp }]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
