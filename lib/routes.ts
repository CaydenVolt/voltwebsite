import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Server-only. Whether a route exists in the app directory yet.
 *
 * This exists for one reason: the terms page binds the Client to a Privacy
 * Policy, and a manual "have we written it yet" boolean is exactly the kind of
 * flag that stays false for a year after the page ships, or stays true after
 * someone deletes it. Asking the filesystem cannot drift.
 *
 * Only static routes. A dynamic segment would need the params to answer, and
 * nothing here needs that.
 */
export function routeExists(route: string): boolean {
  const segments = route.replace(/^\/+|\/+$/g, "");
  // A dynamic segment needs params to answer, so it is out of scope.
  if (segments.includes("[")) return false;
  // "/" strips to nothing, and its page is app/page.tsx rather than a subfolder.
  const dir = segments
    ? path.join(process.cwd(), "app", ...segments.split("/"))
    : path.join(process.cwd(), "app");
  return ["tsx", "ts", "jsx", "js"].some((ext) => existsSync(path.join(dir, `page.${ext}`)));
}
