import type { Metadata } from "next";
import { BasicPage } from "@/components/site/BasicPage";

/* PLACEHOLDER: phone number, email address and office hours go here once the user provides them. */

export const metadata: Metadata = {
  title: "Contact Volt",
  description:
    "Talk to Volt about the sales system for your solar company. Book a 20-minute call.",
};

export default function Page() {
  return (
    <BasicPage
      label="Contact"
      title="Chat with us."
      source="contact_page"
      lead="The fastest way to reach us is a 20-minute call, booked straight into the calendar."
      body={[
        "You will talk to whoever would actually run your account. Bring your numbers if you have them: leads a month, what you pay for them, and how fast anyone gets back to them today.",
        "If it does not fit your company we will say so on the call rather than sell you the plan anyway.",
      ]}
      links={[
        { label: "See the price", href: "/pricing" },
      ]}
    />
  );
}
