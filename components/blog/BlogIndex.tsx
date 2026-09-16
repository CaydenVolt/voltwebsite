import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PostGrid } from "@/components/blog/PostGrid";
import { Pagination } from "@/components/blog/Pagination";
import { ClusterRail } from "@/components/blog/ClusterRail";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { CategoryId, Post } from "@/lib/content/blog";
import { pad } from "@/lib/format";

/**
 * The shape every index shares: /blog, each of its numbered pages, and each
 * category archive. One component so the three can never drift apart, and so
 * the paging, the cluster rail and the booking CTA appear on all of them.
 */
export function BlogIndex({
  label,
  heading,
  intro,
  posts,
  startIndex = 1,
  total,
  page,
  pageHref,
  current,
  ctaSource,
  children,
}: {
  label: string;
  heading: string;
  intro: ReactNode;
  posts: readonly Post[];
  /** Keeps the numerals running across pages: page two opens at 10. */
  startIndex?: number;
  /** Total number of index pages; 1 hides the pager. */
  total: number;
  page: number;
  pageHref: (n: number) => string;
  /** Marks the open cluster in the rail. */
  current?: CategoryId;
  ctaSource: string;
  /** Anything that belongs under the intro, such as the category's own note. */
  children?: ReactNode;
}) {
  return (
    <main className="flex-1">
      {/* Clear the fixed bar, which is condensed and solid on every page without a hero */}
      <div aria-hidden className="h-nav-condensed" />

      <Section as="header" rhythm="sm" aria-labelledby="blog-h">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-7">
            <SectionLabel rule>{label}</SectionLabel>
            <Reveal as="h1" id="blog-h" className="mt-6 text-display-xl">
              {heading}
            </Reveal>
          </div>
          <Reveal as="div" index={1} className="mt-6 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end">
            <p className="max-w-measure text-lead">{intro}</p>
            {children}
          </Reveal>
        </div>
      </Section>

      <Section rhythm="sm" aria-label={`${label}, page ${page} of ${total}`}>
        {total > 1 && (
          <p className="label mb-8 border-b border-line pb-4 text-muted">
            Page {pad(page)} of {pad(total)}
          </p>
        )}
        <PostGrid posts={posts} startIndex={startIndex} />
        <Pagination current={page} total={total} href={pageHref} label={`${label} pages`} />
      </Section>

      <ClusterRail current={current} />

      <FinalCTA source={ctaSource} />
    </main>
  );
}
