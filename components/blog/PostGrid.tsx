import { PostCard } from "@/components/blog/PostCard";
import type { Post } from "@/lib/content/blog";

/**
 * Three across on desktop, which makes a page of nine a 3 x 3 block. Two from
 * sm, one on a phone. Rows stretch so every block in a row is the same height
 * whatever the heading does, and the "Read article" line sits on the same
 * baseline across the row.
 *
 * `startIndex` keeps the numerals running across pages: page two opens at 10,
 * not at 01.
 */
export function PostGrid({ posts, startIndex = 1 }: { posts: readonly Post[]; startIndex?: number }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} index={startIndex + i} />
      ))}
    </ul>
  );
}
