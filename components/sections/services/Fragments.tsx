import type { ReactNode } from "react";
import { Stars } from "@/components/ui/Stars";
import { SITE } from "@/lib/site";

/* Small, purposeful interface fragments for the Services media column. Type,
   hairlines and numerals only, set on a plate of the surface's deeper tone.
   No device frames, no rounded bubbles. */

function Plate({ children }: { children: ReactNode }) {
  return <div className="bg-surface-deep p-6 sm:p-8 lg:p-10">{children}</div>;
}

function FragmentHeader({ label, meta }: { label: string; meta: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
      <span className="label text-muted">{label}</span>
      <span className="label text-muted">{meta}</span>
    </div>
  );
}

function Row({
  lead,
  children,
  strong = false,
  last = false,
}: {
  lead: string;
  children: ReactNode;
  strong?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`grid gap-x-4 gap-y-1 py-3 sm:grid-cols-[7rem_1fr] ${last ? "" : "border-b border-line"}`}
    >
      <span className="label pt-1 text-muted">{lead}</span>
      <span className={strong ? "font-display text-item text-fg" : "text-body-sm text-fg"}>{children}</span>
    </div>
  );
}

/** 03 Automated Lead Follow-Up: one lead's first four days. */
export function FollowUpTimeline() {
  return (
    <Plate>
      <FragmentHeader label={`${SITE.system} · Lead 4811`} meta="Tuesday" />
      <Row lead="0:00">New lead from the website quote form.</Row>
      <Row lead="0:41">Call placed to the homeowner. No answer.</Row>
      <Row lead="0:52">Text sent: &ldquo;Hi Dana, this is Sam at Volt Solar. Saw your quote request, when is a good time to talk?&rdquo;</Row>
      <Row lead="Day 2">Follow-up text. Homeowner replies: &ldquo;Thursday after 5 works.&rdquo;</Row>
      <Row lead="Day 4" strong last>
        Appointment booked. Thursday 5:30 PM, on your calendar.
      </Row>
    </Plate>
  );
}

/** 02 Missed-Call Text-Back: one missed call, start to finish. */
export function TextBackTranscript() {
  return (
    <Plate>
      <FragmentHeader label="Missed call" meta="2:14 PM" />
      <Row lead="Missed">Incoming call from (512) 555-0148. Nobody free to answer.</Row>
      <Row lead="2:14 PM · Sent">
        &ldquo;Hi, this is Sam at Volt Solar. Sorry we missed your call. What can we help with?&rdquo;
      </Row>
      <Row lead="2:16 PM · Reply">
        &ldquo;Hi Sam. Looking for a quote on an 8 kW system, house in Round Rock.&rdquo;
      </Row>
      <Row lead="Status" strong last>
        Written lead in your inbox. Answer when you are off the roof.
      </Row>
    </Plate>
  );
}

/** 04 All-In-One Inbox: this morning's threads. */
export function InboxList() {
  const threads = [
    { who: "Dana W.", channel: "Text", when: "2m", line: "Thursday after 5 works for us." },
    { who: "(512) 555-0148", channel: "Missed call", when: "14m", line: "Text-back sent. Waiting on reply." },
    { who: "Marcus D.", channel: "Email", when: "1h", line: "Signed proposal attached, when can you start?" },
    { who: "Priya N.", channel: "Web chat", when: "3h", line: "Do you do battery-only installs?" },
  ];
  return (
    <Plate>
      <FragmentHeader label="Inbox · All channels" meta="4 open" />
      {threads.map((t, i) => (
        <div
          key={t.who}
          className={`grid gap-x-4 gap-y-1 py-3 sm:grid-cols-[7rem_1fr_auto] ${
            i === threads.length - 1 ? "" : "border-b border-line"
          }`}
        >
          <span className="label pt-1 text-muted">{t.channel}</span>
          <span className="text-body-sm text-fg">
            <span className="font-display text-item">{t.who}</span>
            <span className="block text-muted">{t.line}</span>
          </span>
          <span className="label pt-1 text-muted sm:text-right">{t.when}</span>
        </div>
      ))}
    </Plate>
  );
}

/** 05 Review funnel: what came back last month, and the replies that went out. */
export function ReviewLog() {
  const reviews = [
    {
      when: "2 days after install",
      quote: "Crew was on time both days and the roof looks clean. Bill is already down.",
      reply: "Replied automatically, 6 min later: “Thanks Dana. We will pass that on to the crew.”",
    },
    {
      when: "5 days after install",
      quote: "They explained the app and did not oversell the battery. Would use again.",
      reply: "Replied automatically, 11 min later.",
    },
    {
      when: "9 days after install",
      quote: "Only wish we had done it sooner.",
      reply: "Replied automatically, 4 min later.",
    },
  ];
  return (
    <Plate>
      <FragmentHeader label="Review funnel · Google" meta="Last 30 days" />
      {reviews.map((r, i) => (
        <div key={r.when} className={`py-3 ${i === reviews.length - 1 ? "" : "border-b border-line"}`}>
          <div className="flex items-baseline gap-3">
            <Stars className="text-body-sm" />
            <span className="label text-muted">{r.when}</span>
          </div>
          <p className="mt-2 text-body-sm text-fg">&ldquo;{r.quote}&rdquo;</p>
          <p className="mt-2 text-body-sm text-muted">{r.reply}</p>
        </div>
      ))}
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-line pt-3">
        <span className="label text-muted">Requests sent 41</span>
        <span className="label text-muted">Reviews left 27</span>
        <span className="label text-muted">Replied 27</span>
      </div>
    </Plate>
  );
}

/** 06 On-site SEO: the result page a homeowner sees. */
export function SearchResult() {
  return (
    <Plate>
      <FragmentHeader label="Google search" meta="Austin, TX" />
      <p className="border-b border-line py-3 font-display text-item text-fg">solar installer near me</p>
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-3">
        <span className="label pt-1 text-muted">01</span>
        <div>
          <p className="font-display text-item text-fg">Volt Solar Co.</p>
          <p className="mt-1 text-body-sm text-muted">voltsolar.example · Residential and commercial · Austin and Round Rock</p>
          <div className="mt-2 flex items-baseline gap-2">
            <Stars className="text-body-sm" />
            <span className="label text-muted">4.9 · 212 reviews</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-3 text-muted">
        <span className="label pt-1">02</span>
        <p className="text-body-sm">A national lead marketplace</p>
      </div>
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-3 py-3 text-muted">
        <span className="label pt-1">03</span>
        <p className="text-body-sm">The installer across town</p>
      </div>
    </Plate>
  );
}

/* Separate products. Same fragment language, so the difference between the
   plan and what is sold beside it is carried by the copy and the labels, not
   by a different visual treatment. */

/** AI Lead Nurturing: a reply read and answered at midnight. */
export function NurtureThread() {
  return (
    <Plate>
      <FragmentHeader label="AI Lead Nurturing · Lead 5120" meta="Saturday, 10:41 PM" />
      <Row lead="10:41 PM · Lead">
        &ldquo;Do you do battery only? And roughly what does a 10 kW system run?&rdquo;
      </Row>
      <Row lead="10:41 PM · Sent">
        &ldquo;Yes, battery-only retrofits are about a third of what we do. Price depends on your
        roof and your usage, so we quote it properly rather than guess. Is Saturday morning any
        good for a 20-minute call?&rdquo;
      </Row>
      <Row lead="10:44 PM · Lead">&ldquo;Saturday works. 9 is fine.&rdquo;</Row>
      <Row lead="Booked" strong last>
        Saturday 9:00 AM on your calendar. Thread handed to you, already qualified.
      </Row>
    </Plate>
  );
}

/** Automatic Customer Returns: an old list, worked again. */
export function ReactivationLog() {
  return (
    <Plate>
      <FragmentHeader label="Customer returns · Campaign 01" meta="Day 3 of 14" />
      <Row lead="The list">812 old quotes, dead leads and past customers, cleaned and split.</Row>
      <Row lead="Day 1 · Sent">
        &ldquo;Hi Dana, Sam at Volt Solar. You looked at panels with us a while back. Rates and the
        credit have moved since. Want the current number?&rdquo;
      </Row>
      <Row lead="Day 3 · Reply">
        &ldquo;Actually yes. The roof got done last spring so we are looking again.&rdquo;
      </Row>
      <Row lead="So far" strong last>
        46 replies in your inbox. No new ad spend, same list you already own.
      </Row>
    </Plate>
  );
}

/** Automatic Referrals: the ask nobody remembers to make. */
export function ReferralLog() {
  return (
    <Plate>
      <FragmentHeader label="Referrals · Job 2214" meta="Install closed" />
      <Row lead="Day 1">Five-star review left by Marcus D. Referral ask queued.</Row>
      <Row lead="Day 2 · Sent">
        &ldquo;Glad it went well, Marcus. If a neighbour is weighing up solar, this link forwards
        our details in one tap.&rdquo;
      </Row>
      <Row lead="Day 9 · Reminder">One reminder, then the asking stops.</Row>
      <Row lead="New lead" strong last>
        Priya N., referred by Marcus D. In the inbox, in the follow-up sequence.
      </Row>
    </Plate>
  );
}

/** Google Ads Management: the result, and what it cost. */
export function AdsResult() {
  return (
    <Plate>
      <FragmentHeader label="Google Ads · Austin" meta="Last 30 days" />
      <p className="border-b border-line py-3 font-display text-item text-fg">solar installers austin</p>
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-3">
        <span className="label pt-1 text-accent">Ad</span>
        <div>
          <p className="font-display text-item text-fg">Solar Install in Austin. Firm quote in one call.</p>
          <p className="mt-1 text-body-sm text-muted">
            voltsolar.example/austin · Book a 20-minute call, get a real number, no door knock.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-line pt-3">
        <div className="pr-4">
          <p className="font-display text-item text-fg">$2,400</p>
          <p className="label mt-1 text-muted">Spend, your account</p>
        </div>
        <div className="px-4">
          <p className="font-display text-item text-fg">39</p>
          <p className="label mt-1 text-muted">Leads</p>
        </div>
        <div className="pl-4">
          <p className="font-display text-item text-fg">$61</p>
          <p className="label mt-1 text-muted">Cost per lead</p>
        </div>
      </div>
    </Plate>
  );
}
