import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The inline layer. Two forms only, matched in one pass so a link label can
 * contain bold and nothing can nest wrongly:
 *
 *   [label](/path)   internal links render as <Link>, http(s) as a new tab
 *   **emphasis**     bold, in the body face
 *
 * A server component on purpose: article bodies never hydrate, so the prose
 * costs nothing on the client.
 */
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function Prose({ text }: { text: string }) {
  return <>{parse(text)}</>;
}

export function parse(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const m of text.matchAll(TOKEN)) {
    const at = m.index;
    if (at > last) out.push(text.slice(last, at));

    if (m[3] !== undefined) {
      out.push(
        <strong key={key++} className="font-semibold text-fg">
          {m[3]}
        </strong>,
      );
    } else {
      const label = m[1];
      const href = m[2];
      const external = /^https?:/.test(href);
      const className =
        "link-underline decoration-underline-current hover:decoration-fg text-fg";
      out.push(
        external ? (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {label}
          </a>
        ) : (
          <Link key={key++} href={href} className={className}>
            {label}
          </Link>
        ),
      );
    }
    last = at + m[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}
