import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Cloudflare adapter config.
 *
 * The incremental cache is not optional, which is not obvious. This adapter
 * serves prerendered pages *through* the cache rather than as plain files, so
 * leaving it unset does not merely skip caching: every dynamic route (all 63
 * articles, the 7 category hubs, the author page, the paged index and all 10
 * product pages) fails with NoFallbackError and returns 404, because
 * `dynamicParams = false` forbids rendering them on demand. Static routes like
 * /pricing keep working, which makes the breakage easy to miss.
 *
 * The adapter's template reaches for an R2 bucket. This site does not need
 * one: nothing revalidates, so `staticAssetsIncrementalCache` reads the
 * prerendered data straight out of the Workers static assets bundle. Its own
 * documentation says it is for applications that "do NOT want revalidation and
 * ONLY want to serve prerendered data", which is exactly this site. No bucket
 * to create, nothing to pay for, one fewer moving part.
 *
 * If ISR or `revalidate` is ever added, this has to change to R2 or KV:
 * https://opennext.js.org/cloudflare/caching
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
