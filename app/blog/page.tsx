import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, blogSchema, authorSchema, pageMetadata, postListSchema } from "@/lib/seo";
import { getPage, getPosts, pageHref, totalPages } from "@/lib/content/blog";

const TITLE = "Solar marketing blog: leads, reviews, SEO and follow-up";
const DESCRIPTION =
  "Plain answers for solar company owners on getting more leads, more reviews, better local rankings, faster follow-up and software that earns its fee.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPage(1);
  const total = totalPages();

  return (
    <>
      <JsonLd
        data={[
          blogSchema(),
          authorSchema(),
          postListSchema({
            path: "/blog",
            name: TITLE,
            description: DESCRIPTION,
            posts,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <BlogIndex
        label="Resources"
        heading="The solar marketing blog."
        intro={
          <>
            Lead generation, reviews, local SEO, follow-up, software and websites. Written for the
            people who run solar companies, not for the people who sell to them. {getPosts().length}{" "}
            articles, no gated PDFs.
          </>
        }
        posts={posts}
        total={total}
        page={1}
        pageHref={pageHref}
        ctaSource="blog_index"
      />
    </>
  );
}
