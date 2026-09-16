import { SITE, realSocial } from "@/lib/site";
import { getPublicProducts, type ProductPage } from "@/lib/content/products";
import { PLAN, formatPrice } from "@/lib/content/pricing";
import { AUTHOR, authorHref, getCategory, postHref, type Post } from "@/lib/content/blog";

/**
 * Structured data, built from the same content the pages render so the two can
 * never drift. Everything hangs off `SITE.url`: set that to the real domain and
 * every canonical, sitemap entry and @id follows.
 *
 * Kept deliberately small. Only types a search engine or an answer engine can
 * actually use for this site: who the company is, what the site is, what each
 * product is, what the plan costs, and the questions people ask.
 */
const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export const absolute = (path: string) => `${SITE.url}${path}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    slogan: SITE.tagline,
    // Omitted rather than wrong while the profiles are placeholders. A sameAs
    // pointing at a platform homepage is a false claim about the entity.
    ...(realSocial().length > 0 ? { sameAs: realSocial().map((s) => s.href) } : {}),
    areaServed: SITE.region,
    knowsAbout: getPublicProducts().map((p) => p.name),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** One product, as a service the company provides. */
export function productSchema(product: ProductPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absolute(`/products/${product.slug}`)}#service`,
    name: product.name,
    description: product.intro,
    serviceType: product.name,
    provider: { "@id": ORG_ID },
    areaServed: SITE.region,
    audience: { "@type": "Audience", audienceType: "Solar companies" },
    url: absolute(`/products/${product.slug}`),
    ...(product.addon
      ? {}
      : {
          isRelatedTo: {
            "@type": "Offer",
            name: `${SITE.name} monthly plan`,
            url: absolute("/pricing"),
          },
        }),
  };
}

/** The plan, with its price. Placeholder price until PLAN.price is real. */
export function planOfferSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${absolute("/pricing")}#offer`,
    name: `${SITE.name}: ${formatPrice()} a month`,
    description: `Every product in the system on one monthly subscription${
      PLAN.setupFee === null ? ", with no setup fee" : ""
    }.`,
    price: String(PLAN.price),
    priceCurrency: PLAN.currency,
    url: absolute("/pricing"),
    availability: "https://schema.org/InStock",
    seller: { "@id": ORG_ID },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(PLAN.price),
      priceCurrency: PLAN.currency,
      unitCode: "MON",
      billingIncrement: 1,
    },
  };
}

export function faqSchema(items: readonly { q: string; a: string }[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Home > section > page, so a search engine can render the path. */
export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: absolute(step.path),
    })),
  };
}

/**
 * Title, description, canonical and both social cards from one call, so a page
 * cannot ship with a canonical and no card, or a card with the wrong title.
 * `path` is root-relative; `metadataBase` in the root layout makes it absolute.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absolute(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      siteName: SITE.name,
      locale: "en_US",
      url,
      title,
      description,
    },
    twitter: { card: "summary_large_image" as const, title, description },
  };
}

/* ---------------------------------------------------------------- the blog */

const BLOG_ID = `${SITE.url}/blog#blog`;
const AUTHOR_ID = `${SITE.url}${authorHref}#person`;

/**
 * The author, once, with a stable @id. Every article points at this rather
 * than repeating the bio, so there is one entity for the person across the
 * site and a search engine can join the articles to him.
 */
export function authorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": AUTHOR_ID,
    name: AUTHOR.name,
    url: absolute(authorHref),
    jobTitle: AUTHOR.role,
    description: AUTHOR.short,
    knowsAbout: [...AUTHOR.knowsAbout],
    worksFor: { "@id": ORG_ID },
  };
}

/** The blog itself: the thing every article is a part of. */
export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": BLOG_ID,
    url: absolute("/blog"),
    name: `The ${SITE.name} blog`,
    description:
      "Lead generation, reviews, local SEO, follow-up, software and websites, written for the people who run solar companies.",
    publisher: { "@id": ORG_ID },
    author: { "@id": AUTHOR_ID },
    inLanguage: "en",
  };
}

/**
 * One article. `headline` is capped at 110 characters because Google's
 * article guidance says anything longer may be ignored; every title on this
 * blog is shorter than that, and the cap is here so a future one cannot
 * quietly break it.
 */
export function articleSchema(post: Post, words: number) {
  const url = absolute(postHref(post.slug));
  const category = getCategory(post.category);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title.slice(0, 110),
    description: post.metaDescription,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    author: { "@id": AUTHOR_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": BLOG_ID },
    articleSection: category.name,
    keywords: [post.keyword, ...post.secondary],
    wordCount: words,
    image: [`${url}/opengraph-image`],
    inLanguage: "en",
    audience: { "@type": "Audience", audienceType: "Solar companies" },
  };
}

/**
 * An index page: /blog, a paged slice of it, or a category archive. The
 * ItemList spells out what is on this page and in what order, which is what
 * makes a paginated set crawlable rather than a pile of near-identical URLs.
 */
export function postListSchema({
  path,
  name,
  description,
  posts,
  startIndex = 1,
}: {
  path: string;
  name: string;
  description: string;
  posts: readonly Post[];
  startIndex?: number;
}) {
  const url = absolute(path);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name,
    description,
    isPartOf: { "@id": BLOG_ID },
    inLanguage: "en",
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: startIndex + i,
        url: absolute(postHref(p.slug)),
        name: p.title,
      })),
    },
  };
}

/** The author page. ProfilePage is the type Google documents for an author bio. */
export function authorPageSchema(posts: readonly Post[]) {
  const url = absolute(authorHref);
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    name: `${AUTHOR.name}, ${AUTHOR.role}`,
    dateModified: posts[0]?.updated ?? posts[0]?.published,
    mainEntity: { "@id": AUTHOR_ID },
    isPartOf: { "@id": SITE_ID },
    inLanguage: "en",
  };
}
