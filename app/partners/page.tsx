import type { Metadata } from "next";
import { BasicPage } from "@/components/site/BasicPage";
import { PartnerGrid } from "@/components/sections/partners/PartnerGrid";
import { pageMetadata } from "@/lib/seo";
import { PARTNERS } from "@/lib/content/partners";

export const metadata: Metadata = pageMetadata({
  title: "Partners: the platforms the Volt system runs on",
  description: `The ${PARTNERS.length} platforms Volt builds on for solar companies: ads, analytics, messaging, payments and search tools, all run for you behind one login.`,
  path: "/partners",
});

export default function Page() {
  return (
    <BasicPage
      label="Partners"
      title="Who we work with."
      source="partners_page"
      lead="The platforms the system is built on, and the people we send work to."
      body={[
        "Everything below is part of how Volt runs: the ad platforms, the analytics, the messaging and the search tools. They stay in the background, we hold the logins, and you get one place to work from.",
        "If you work with solar companies and need somewhere to send the ones asking for a website and a follow-up system, book a call and we will talk about how that works.",
      ]}
      links={[{ label: "About Volt", href: "/about" }]}
    >
      <PartnerGrid />
    </BasicPage>
  );
}
