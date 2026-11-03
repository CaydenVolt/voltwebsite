"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Hides its children on routes that should render as a bare page: nav at the
 * top, their own content, nothing after.
 *
 * The one route this covers right now is `/video-vsl`, an unlisted VSL
 * landing page handed to a specific prospect. The owner's intent for that
 * page is "watch the videos, click the booking link in one of them, close
 * the tab" — a sitewide footer with product columns, blog links, legal and
 * social under the videos would compete for attention with the one action
 * the page is for.
 *
 * Any future unlisted sales page can join the list by adding its path to
 * `BARE_PATHS` below. The matcher is prefix-based so a nested URL under one
 * of those paths (`/video-vsl/thanks`, say) inherits the same treatment
 * without a second entry.
 *
 * Needs to be a client component because the pathname is only knowable at
 * render time per request, and the root layout is otherwise server-rendered.
 * The children are passed as props so this file is a presentation wrapper
 * only: it does not re-import the actual Footer and so stays decoupled from
 * what sits inside it.
 */
const BARE_PATHS = ["/video-vsl"] as const;

export function FooterGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  if (isBare) return null;
  return <>{children}</>;
}
