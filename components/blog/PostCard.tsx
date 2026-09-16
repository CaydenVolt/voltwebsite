import Link from "next/link";
import { Plate } from "@/components/blog/Plate";
import { BlogIcon } from "@/components/blog/BlogIcon";
import { AUTHOR, formatDate, postHref, readingMinutes, type Post } from "@/lib/content/blog";
import { pad } from "@/lib/format";

/**
 * One block in the three-up index.
 *
 * A block, not a floating card: a hairline border and a 2px corner, no
 * shadow, no gradient. The head of the block is a plate of printer's
 * ornaments with the article's mark set over it, so the grid has colour and
 * variety without a single stock photograph. Under it: the intent tag, the
 * date, the heading, the byline, the subheading, and the way in.
 */
export function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <li className="h-full">
      <Link
        href={postHref(post.slug)}
        data-cursor="grow"
        className="group flex h-full flex-col rounded-control border border-line bg-surface transition-colors duration-100 hover:border-fg"
      >
        {/* The mark, over the ornament plate */}
        <div className="relative aspect-card overflow-hidden border-b border-line">
          {/* The ornaments are texture, not subject: held well back so the mark
              reads first. */}
          <div className="absolute inset-0 opacity-20">
            <Plate slug={post.slug} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <BlogIcon icon={post.icon} className="size-24 text-ink" />
          </div>
          <span className="label absolute left-3 top-3 text-muted">{pad(index)}</span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          {/* Intent tag and date, on one line */}
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <span className="label rounded-control bg-accent px-2.5 py-1.5 text-ink">
              {post.intent}
            </span>
            <time dateTime={post.published} className="label text-muted">
              {formatDate(post.published)}
            </time>
          </div>

          {/* Heading */}
          <h3 className="mt-4 text-h3 text-fg">{post.title}</h3>

          {/* Byline */}
          <p className="label mt-3 flex items-center gap-2 text-muted">
            <span aria-hidden className="h-px w-3 bg-line" />
            By {AUTHOR.name}
          </p>

          {/* Subheading */}
          <p className="mt-3 text-body-sm text-muted">{post.excerpt}</p>

          {/* The way in, pinned to the foot so every block in a row lines up */}
          <p className="label mt-auto flex items-center justify-between gap-3 pt-6 text-accent">
            <span className="flex items-center gap-2">
              Read article
              <svg
                aria-hidden
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                className="shrink-0 transition-transform duration-100 group-hover:translate-x-1"
              >
                <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
              </svg>
            </span>
            <span className="text-muted">{readingMinutes(post)} min</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
