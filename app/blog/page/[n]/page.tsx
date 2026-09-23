import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata, postListSchema } from "@/lib/seo";
import { PER_PAGE, getPage, pageHref, totalPages } from "@/lib/content/blog";

/**
 * Pages two and up. Page one is `/blog` and only `/blog`: `/blog/page/1` is
 * generated so a hand-typed URL does not 404, and it redirects, so there is
 * never a second URL holding the same nine articles.
 *
 * Each page carries its own canonical pointing at itself. Google dropped
 * rel=prev/next as an indexing signal years ago and treats a paginated set as
 * ordinary pages, so self-canonicalising is what keeps pages two to seven
 * crawlable instead of consolidating them all onto page one and orphaning
 * fifty-four articles.
 */
type Props = PageProps<"/blog/page/[n]">;

export function generateStaticParams() {
  return Array.from({ length: totalPages() }, (_, i) => ({ n: String(i + 1) }));
}
export const dynamicParams = false;

function parsePage(raw: string): number | null {
  if (!/^[1-9][0-9]*$/.test(raw)) return null;
  const n = Number(raw);
  return n >= 1 && n <= totalPages() ? n : null;
}

const title = (n: number) => `Solar marketing blog, page ${n} of ${totalPages()}`;
const description = (n: number) =>
  `More answers for solar company owners on leads, reviews, local SEO, follow-up and software. Page ${n} of ${totalPages()} on the Volt blog.`;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { n } = await props.params;
  const page = parsePage(n);
  if (!page || page === 1) return {};
  return pageMetadata({
    title: title(page),
    description: description(page),
    path: pageHref(page),
  });
}

export default async function BlogPagedPage(props: Props) {
  const { n } = await props.params;
  const page = parsePage(n);
  if (!page) notFound();
  // 308 rather than 307: page one lives at /blog permanently, and a
  // temporary redirect asks a crawler to keep checking back forever.
  if (page === 1) permanentRedirect("/blog");

  const posts = getPage(page);
  const total = totalPages();
  const startIndex = (page - 1) * PER_PAGE + 1;

  return (
    <>
      <JsonLd
        data={[
          postListSchema({
            path: pageHref(page),
            name: title(page),
            description: description(page),
            posts,
            startIndex,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: `Page ${page}`, path: pageHref(page) },
          ]),
        ]}
      />
      <BlogIndex
        label="Resources"
        heading={`The solar marketing blog.`}
        intro={
          <>
            Page {page} of {total}. Lead generation, reviews, local SEO, follow-up, software and
            websites, written for the people who run solar companies.
          </>
        }
        posts={posts}
        startIndex={startIndex}
        total={total}
        page={page}
        pageHref={pageHref}
        ctaSource={`blog_index_p${page}`}
      />
    </>
  );
}
