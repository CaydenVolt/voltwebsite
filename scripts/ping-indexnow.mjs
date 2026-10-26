/**
 * Pings IndexNow with every URL in the production sitemap, so Bing, Yandex,
 * Seznam and the other IndexNow-participating engines pick up new or changed
 * pages the same day rather than whenever their crawl schedule next arrives.
 * Google does NOT participate in IndexNow, so this does not replace Google
 * Search Console; it covers the Microsoft Copilot citation path (fed by the
 * Bing index) and the few search markets Yandex and Seznam serve.
 *
 *   node scripts/ping-indexnow.mjs
 *
 * Reads the live sitemap at SITE.url/sitemap.xml (so the script covers
 * whatever is deployed, not what the local tree happens to think), extracts
 * every <loc>, and POSTs the batch to api.indexnow.org. One API call for
 * every URL on the site; IndexNow does not penalise re-submitting a URL that
 * has not changed, so running this after every deploy is safe.
 *
 * The key `5f6eb29b3a5f4f39b9aa0776c7721bed` is served at
 *   public/5f6eb29b3a5f4f39b9aa0776c7721bed.txt
 * which proves to IndexNow that this origin controls the key. Rotating the
 * key means deleting the old .txt, generating a new one, updating KEY below
 * and republishing. Leaving it stable is cheaper, so there is no reason to
 * rotate it.
 */

const SITE_URL = "https://voltagencyio.com";
const KEY = "5f6eb29b3a5f4f39b9aa0776c7721bed";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`, {
    headers: { "User-Agent": "volt-indexnow-ping/1.0" },
  });
  if (!res.ok) {
    throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  // The sitemap is simple enough that a dependency-free regex over <loc>
  // elements is more reliable than loading an XML parser that would need to
  // be installed before the script can run on a fresh clone.
  const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);
  if (urls.length === 0) {
    throw new Error("Sitemap returned 0 URLs");
  }
  return urls;
}

async function pingIndexNow(urls) {
  const body = {
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "volt-indexnow-ping/1.0",
    },
    body: JSON.stringify(body),
  });
  return { status: res.status, statusText: res.statusText, text: await res.text() };
}

try {
  const urls = await fetchSitemapUrls();
  console.log(`Submitting ${urls.length} URLs from ${SITE_URL}/sitemap.xml`);
  const result = await pingIndexNow(urls);
  console.log(`IndexNow: ${result.status} ${result.statusText}`);
  if (result.text) console.log(result.text);
  // 200 OK or 202 Accepted both mean the batch was received. 422 commonly means
  // the key file was not reachable, so surface that specifically.
  if (result.status === 200 || result.status === 202) {
    console.log("Submitted. Bing and Yandex will crawl shortly.");
  } else if (result.status === 422) {
    console.error(`Key verification failed. Confirm ${KEY_LOCATION} returns "${KEY}" as plain text.`);
    process.exit(1);
  } else {
    console.error("Unexpected status.");
    process.exit(1);
  }
} catch (err) {
  console.error(`IndexNow ping failed: ${err instanceof Error ? err.message : err}`);
  process.exit(1);
}
