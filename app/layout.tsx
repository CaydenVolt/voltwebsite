import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { Grain } from "@/components/ui/Grain";
import { Cursor } from "@/components/ui/Cursor";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SITE } from "@/lib/site";
import { getLogo } from "@/lib/assets";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

/**
 * Display: Bricolage Grotesque: a grotesque with ink traps and an optical-size
 * axis, so at display sizes it reads like heavy poster type on paper.
 * Body: Instrument Sans: neutral, slightly narrow, sits quietly under it.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  // Every canonical, social card and sitemap URL resolves against this. Set
  // SITE.url to the real domain before launch and they all follow.
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: ${SITE.tagline}`,
    // Inner pages set their own title; this keeps the brand on the end of it.
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: `${SITE.name}: ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}: ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Resolved here, not in the components: the nav is a client component and
  // cannot read `public/` itself.
  const logo = getLogo();

  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-bone font-body text-ink">
        {/* Who the company is and what the site is, once for the whole site */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Providers>
          <Grain />
          <Cursor />
          <Nav mark={logo?.src ?? null} masked={logo?.masked} />
          {children}
          <Footer mark={logo?.src ?? null} masked={logo?.masked} />
        </Providers>
      </body>
    </html>
  );
}
