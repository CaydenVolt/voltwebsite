import type { Metadata } from "next";
import { BasicPage } from "@/components/site/BasicPage";
import { LEGAL } from "@/lib/content/legal";

/* The email is the same address the legal documents take notices at, read
   from lib/content/legal.ts so there is one place to change it. No phone
   number and no office hours yet: LEGAL.phone is empty, and a number nobody
   answers is worse than no number. */

export const metadata: Metadata = {
  title: "Contact Volt",
  description:
    "Talk to Volt about the sales system for your solar company. Book a 20-minute call, or email us.",
};

export default function Page() {
  return (
    <BasicPage
      label="Contact"
      title="Chat with us."
      source="contact_page"
      lead="Book the call. Twenty minutes, straight into the calendar, and you will know by the end of it whether this fits your company."
      body={[
        "A call beats an email here, and not by a little. We will want your numbers in front of us: leads a month, what you pay for them, and how long it currently takes anyone to call one back. That is a conversation, not a thread.",
        "You will talk to whoever would actually run your account, not a setter booking you in for someone else.",
        "If it does not fit your company we will say so on the call rather than sell you the plan anyway.",
        `If you would rather write first, ${LEGAL.email} reaches us, and it is also the address for anything formal under our terms. Expect a reply inside one business day, and expect it to suggest a call.`,
      ]}
      links={[
        { label: `Email ${LEGAL.email}`, href: `mailto:${LEGAL.email}` },
        { label: "See the price", href: "/pricing" },
      ]}
    />
  );
}
