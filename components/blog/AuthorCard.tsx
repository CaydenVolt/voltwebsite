import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { AUTHOR, authorHref } from "@/lib/content/blog";
import { TEAM } from "@/lib/content/about";

/** The founder's photograph, already on /about. Resolved once, here. */
const PORTRAIT = TEAM.find((m) => m.name === "Cayden");

/**
 * Who wrote this. Sits at the foot of every article and answers the first of
 * Google's three questions about a page: who made it. The same person is
 * named in the article's schema and has a page of his own, so the byline is
 * checkable rather than decorative.
 */
export function AuthorCard() {
  return (
    <aside aria-labelledby="author-h" className="mt-16 border-t border-line pt-8">
      <p className="label text-muted">Written by</p>
      <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start">
        {PORTRAIT && (
          <Photo
            src={PORTRAIT.src}
            alt={`${AUTHOR.name}, ${AUTHOR.role}`}
            aspect="1 / 1"
            position={PORTRAIT.position}
            sizes="96px"
            className="size-24 shrink-0 rounded-full"
          />
        )}
        <div>
          <h2 id="author-h" className="text-h3">
            <Link
              href={authorHref}
              data-cursor="grow"
              className="link-underline decoration-underline-current hover:decoration-fg"
            >
              {AUTHOR.name}
            </Link>
          </h2>
          <p className="label mt-2 text-muted">{AUTHOR.role}</p>
          <p className="mt-4 max-w-measure text-body text-muted">{AUTHOR.bio[0]}</p>
        </div>
      </div>
    </aside>
  );
}
