import type { Metadata } from "next";
import { BasicPage } from "@/components/site/BasicPage";

/* PLACEHOLDER: coverage, logos and a press contact go here. */

export const metadata: Metadata = {
  title: "Volt in the news",
  description:
    "Press coverage and enquiries for Volt, the sales system for solar companies.",
};

export default function Page() {
  return (
    <BasicPage
      label="Press"
      title="Volt in the news."
      source="press_page"
      lead="Coverage and press enquiries are listed here."
      body={[
        "For an enquiry, book a call and say it is press.",
      ]}
      links={[
        { label: "About Volt", href: "/about" },
      ]}
    />
  );
}
