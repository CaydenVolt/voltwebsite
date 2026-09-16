import type { Metadata } from "next";
import { BasicPage } from "@/components/site/BasicPage";

/* PLACEHOLDER: role listings go here. */

export const metadata: Metadata = {
  title: "Careers at Volt",
  description:
    "Open roles at Volt, the sales system for solar companies.",
};

export default function Page() {
  return (
    <BasicPage
      label="Careers"
      title="Join the team."
      source="careers_page"
      lead="Open roles are listed here when we have them."
      body={[
        "If you build systems for solar companies, or you want to, book a call and say what you would work on.",
      ]}
      links={[
        { label: "About Volt", href: "/about" },
      ]}
    />
  );
}
