import type { Post } from "../types";

/**
 * Cluster 4: speed and follow-up. Hub is speed-to-lead-for-solar-companies.
 */
export const FOLLOW_UP_POSTS: readonly Post[] = [
  {
    slug: "speed-to-lead-for-solar-companies",
    title: "Speed to lead for solar companies",
    metaTitle: "Speed to Lead for Solar Companies: The Real Numbers",
    metaDescription:
      "Why the first solar company to respond usually wins the job, what the benchmarks actually are, and how to get a reply out in five minutes without hiring.",
    keyword: "speed to lead for solar companies",
    secondary: [
      "speed to lead",
      "solar lead response time",
      "respond to solar leads fast",
      "lead response time",
    ],
    excerpt:
      "The company that answers first usually wins, and the average solar company answers in days. This is the cheapest fix available to most installers.",
    category: "follow-up",
    intent: "Informational",
    icon: "stopwatch",
    pillar: true,
    published: "2026-08-29",
    answer:
      "Speed to lead is the time between an enquiry arriving and your first response, and in solar it is the strongest predictor of whether the lead converts. Around 78% of buyers go with whoever replies first, and leads contacted within five minutes are roughly 21 times more likely to qualify than those contacted after thirty.",
    takeaways: [
      "Target: an automated text inside 60 seconds, a human call inside five minutes.",
      "The average lead response time across industries is measured in hours, not minutes.",
      "Speed beats almost every other improvement you can make to a lead channel.",
      "This is an automation problem, not a staffing problem.",
    ],
    body: [
      {
        t: "p",
        text: "Of everything in this blog, this is the one with the best return on the least effort. It requires no new spend, no new channel and no new hire, and it routinely produces a bigger lift than any of those would.",
      },

      { t: "h2", text: "How fast should a solar company respond to a lead?" },
      {
        t: "figures",
        items: [
          { value: "78%", label: "Buy from whoever responds first" },
          { value: "21x", label: "More likely to qualify inside 5 min" },
          { value: "~47 hr", label: "Average response time reported" },
        ],
        source:
          "Response-time research is reported consistently across sales studies; the solar-specific figures come from installer benchmarking published by [SurgePV](https://www.surgepv.com/blog/solar-lead-response-time) and [Kixie](https://www.kixie.com/sales-blog/speed-to-lead-response-time-statistics-that-drive-conversions/).",
      },
      {
        t: "p",
        text: "The reason the effect is so large is psychological rather than technical. A homeowner filling in a solar form is in a short window of intent, usually triggered by a bill, a neighbour's array or an advert. That window closes fast. The company that reaches them inside it is talking to someone paying attention; the company that reaches them on Thursday is interrupting someone who has moved on.",
      },
      {
        t: "p",
        text: "There is a second effect on top. Whoever gets there first frames the whole purchase: they set the vocabulary, the questions to ask, and often the specification everyone else gets compared against.",
      },

      { t: "h2", text: "What good actually looks like" },
      {
        t: "table",
        head: ["Channel", "Target first response", "What usually happens"],
        rows: [
          ["Web form", "Under 5 minutes", "Hours, or the next morning"],
          ["Phone call", "Answered, or text back in 60 seconds", "Voicemail nobody checks"],
          ["Live chat", "Under 30 seconds", "Nobody is watching it"],
          ["Business Profile message", "Under 5 minutes", "Discovered a week later"],
          ["Facebook or Instagram", "Under 15 minutes", "Whenever somebody opens the app"],
        ],
      },
      {
        t: "callout",
        label: "Measure yours first",
        text: "Pull your last fifty enquiries and calculate the median minutes to first outbound contact. Median, not average: one lead answered at 3am skews an average and hides the real picture. Most owners are surprised, and the surprise is the point.",
      },

      { t: "h2", text: "Why is your team slow to respond?" },
      {
        t: "p",
        text: "In almost every solar company we look at, the people are trying. The system is what is slow.",
      },
      {
        t: "ul",
        items: [
          "**The enquiry lands in an inbox nobody owns.** Shared inboxes are where leads go to wait.",
          "**The person who answers is on a roof.** Small installers route sales to whoever is closest to a phone, which is nobody between eight and four.",
          "**There is no alert.** An email notification among sixty others is not an alert.",
          "**Leads arrive across five places.** Web form, Business Profile, Facebook, the phone and a lead vendor portal. Nobody is watching all five.",
          "**Evenings and weekends are dead.** A meaningful share of solar enquiries arrive outside working hours, which is exactly when a homeowner looks at a bill.",
        ],
      },

      { t: "h2", text: "The fix, in three layers" },
      {
        t: "steps",
        items: [
          {
            title: "Layer one: an automatic reply in under a minute",
            body: "A text, not an email, sent the moment a form is submitted or a call is missed. It buys you time by telling the homeowner a real person is coming, and it stops the countdown while they are still on your page. This alone closes most of the gap.",
          },
          {
            title: "Layer two: a human attempt inside five minutes",
            body: "One person owns the first call during working hours, with a genuine alert on their phone rather than an email. If they cannot take it, it escalates to the next person after three minutes rather than sitting.",
          },
          {
            title: "Layer three: one place where every lead lands",
            body: "Web form, missed call, Business Profile message, social message and vendor lead, all into one inbox with one queue. Five channels watched by nobody becomes one channel watched by somebody.",
          },
        ],
      },
      {
        t: "p",
        text: "Layer one is the one to build this week. It is the cheapest, it works outside hours, and it is the difference between being first and being third. See [missed-call text-back for solar](/blog/missed-call-text-back-for-solar) and the [all-in-one inbox](/products/all-in-one-inbox).",
      },

      { t: "h2", text: "What should the automatic reply say?" },
      {
        t: "p",
        text: "Short, human, and it must do one job beyond acknowledgement: start a conversation the homeowner can continue with their thumb.",
      },
      {
        t: "quote",
        text: "Hi Sarah, it is Dan at Volt Solar. Got your enquiry about the roof on Elm Street. I will call you within the hour, but if it is easier just reply here. Roughly what is your monthly electricity bill?",
        cite: "One question, answerable in four characters",
      },
      {
        t: "p",
        text: "The question at the end matters. A reply that only says we will be in touch ends the exchange. A reply ending in one easy question starts one, and a homeowner texting you back is no longer shopping.",
      },

      { t: "h2", text: "What does speed not fix?" },
      {
        t: "p",
        text: "Being first is worth a great deal and it is not everything. If your review count is thin, your price is out of line, or the follow-up stops after two attempts, speed gets you a conversation you then lose. It is the first fix, not the only one.",
      },
      {
        t: "p",
        text: "In particular, speed and persistence are a pair. Getting there first and then giving up on attempt two wastes the advantage entirely. See [how many times to follow up with a solar lead](/blog/how-many-times-should-you-follow-up-with-a-solar-lead) and [why solar leads go cold](/blog/why-solar-leads-go-cold).",
      },
      {
        t: "link",
        href: "/blog/solar-sales-follow-up-sequence",
        label: "The solar sales follow-up sequence",
        note: "What happens after the first five minutes",
      },
    ],
    faq: [
      {
        q: "What is a good speed to lead for solar?",
        a: "An automated response inside 60 seconds and a human attempt inside five minutes during working hours. The strongest teams answer inbound calls in under a minute and live chat in under thirty seconds.",
      },
      {
        q: "Does an automated text count as responding?",
        a: "It counts for holding the lead's attention, which is most of the value, but it does not replace the human call. The pattern that works is instant automation followed quickly by a person.",
      },
      {
        q: "Should I respond to solar leads at night?",
        a: "Automatically, yes, always. With a person, only if you can do it consistently. An automated acknowledgement at 11pm that says someone will call at eight is far better than either silence or a groggy call.",
      },
      {
        q: "How do I measure speed to lead?",
        a: "Median minutes from enquiry timestamp to your first outbound contact, segmented by channel. Track the median rather than the average, and review it weekly. It is the one sales metric that improves purely through systems.",
      },
    ],
    related: [
      "missed-call-text-back-for-solar",
      "solar-sales-follow-up-sequence",
      "why-solar-leads-go-cold",
    ],
  },

  {
    slug: "missed-call-text-back-for-solar",
    title: "Missed call text-back for solar companies",
    metaTitle: "Missed Call Text-Back for Solar Companies",
    metaDescription:
      "What missed-call text-back does for a solar company, what the message should say, the compliance points, and how to set it up without a new phone system.",
    keyword: "missed call text back for solar",
    secondary: [
      "missed call text back",
      "missed call automation",
      "solar phone leads",
      "text back missed calls",
    ],
    excerpt:
      "A missed call from a solar enquiry is a homeowner already dialling the next installer. An automatic text turns it back into a conversation.",
    category: "follow-up",
    intent: "Informational",
    icon: "phone",
    published: "2026-08-01",
    answer:
      "Missed call text-back sends an automatic text message within seconds of an unanswered call, acknowledging the caller and inviting a reply. For solar companies it recovers enquiries that would otherwise go to the next installer, and it works outside office hours, on roofs and during every other moment nobody can reach a phone.",
    takeaways: [
      "Most missed calls do not leave a voicemail. They call somebody else.",
      "The text must go out in seconds, not minutes, and must come from the number they dialled.",
      "End with a question. An acknowledgement ends the exchange; a question starts one.",
      "Install crews are the reason this exists: nobody answers a phone from a roof.",
    ],
    body: [
      {
        t: "p",
        text: "A solar company's phone rings while two people are on a roof, one is driving and the office is on another call. The homeowner hears voicemail, hangs up, and taps the next result. Nothing was recorded, nobody knows it happened, and the lead is simply gone.",
      },
      {
        t: "p",
        text: "Missed-call text-back is the smallest possible fix for the largest invisible leak in a trades business.",
      },

      { t: "h2", text: "What does missed-call text-back actually do?" },
      {
        t: "p",
        text: "When a call to your business number goes unanswered, an automatic SMS goes out within seconds from that same number. The homeowner gets a message before they have finished dialling the next company, and because it is a text, they can answer it while doing something else.",
      },
      {
        t: "ul",
        items: [
          "**It works on a roof.** The single most common reason a solar company misses calls.",
          "**It works after hours**, when a large share of solar enquiries actually arrive.",
          "**It converts a phone call into a text thread**, which is a channel people answer far more readily.",
          "**It creates a record.** The missed call now exists in your system rather than in nobody's memory.",
        ],
      },

      { t: "h2", text: "What should the message say?" },
      {
        t: "p",
        text: "Four elements and nothing else: who you are, an acknowledgement, a promise with a time on it, and a question.",
      },
      {
        t: "quote",
        text: "Hi, this is Dan at Volt Solar. Sorry we missed you, the crew is on a roof. I will call back within the hour, or just reply here if that is easier. Are you after a quote for panels or an existing system issue?",
      },
      {
        t: "table",
        head: ["Element", "Why"],
        rows: [
          ["A first name", "A text from a person gets replies; a text from a brand does not"],
          ["A reason", "Sorry we missed you, the crew is on a roof reads as true, because it is"],
          ["A time-bound promise", "Within the hour, then keep it"],
          ["One question", "The whole point. It converts a notification into a conversation"],
          ["No links", "Links in a first automated text can trip carrier filtering"],
        ],
      },
      {
        t: "callout",
        label: "The question is the feature",
        text: "Thanks for calling, we will get back to you ends the exchange. Are you after a quote or an existing system issue gets a two word reply, and a homeowner who has replied to you is no longer comparing three tabs.",
      },

      { t: "h2", text: "Setting it up" },
      {
        t: "steps",
        items: [
          {
            title: "Make sure your number can text",
            body: "It has to be a number capable of SMS, and the text has to appear to come from the number they dialled. A message from an unfamiliar number reads as spam and gets ignored.",
          },
          {
            title: "Set the trigger to seconds, not minutes",
            body: "Fire on missed, busy and no-answer. If the text arrives five minutes later the homeowner is already on the phone to somebody else and the value has evaporated.",
          },
          {
            title: "Route the replies somewhere a human watches",
            body: "This is where most implementations fail. The text goes out, the homeowner replies, and the reply lands in a system nobody has open. Route it into whatever inbox your team actually uses. See the [all-in-one inbox](/products/all-in-one-inbox).",
          },
          {
            title: "Exclude the numbers that should not get it",
            body: "Suppliers, staff, your accountant. A supplier receiving a sales text every time they call gets old fast.",
          },
        ],
      },

      { t: "h2", text: "The compliance points" },
      {
        t: "p",
        text: "An automated reply to somebody who just called you is about as defensible as business texting gets: they initiated contact, on that number, seconds earlier. A few rules still apply and they are worth respecting.",
      },
      {
        t: "ol",
        items: [
          "**Identify the business** in the message. Anonymous texts are both against the rules and ineffective.",
          "**Honour opt-outs immediately**, including informal ones. If somebody replies STOP or asks you not to text, that is the end of it.",
          "**Keep it conversational, not promotional.** A reply to a call is a response. A text blast about a spring offer is marketing and carries different obligations.",
          "**Keep the record.** Timestamp, number, message, and the fact they called first.",
        ],
      },
      {
        t: "p",
        text: "Rules vary by jurisdiction and change; take local advice if you are operating at scale. The general principle is stable: reply to people who contacted you, stop when asked.",
      },

      { t: "h2", text: "What should you expect?" },
      {
        t: "p",
        text: "The effect is largest for companies with crews on site and no dedicated phone cover, which is most small and mid-size installers. The leads recovered are ones you never knew you had, so the honest measure is not a percentage lift on something you were tracking but a set of conversations that previously did not exist.",
      },
      {
        t: "p",
        text: "Track three things: missed calls per week, the reply rate to the text, and how many of those threads become booked surveys. The first number is usually the shock.",
      },
      {
        t: "p",
        text: "It is also only the first layer. What happens after the reply matters just as much, which is [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies) and [the solar sales follow-up sequence](/blog/solar-sales-follow-up-sequence).",
      },
      {
        t: "link",
        href: "/products/missed-call-text-back",
        label: "Missed-call text-back in the Volt system",
        note: "Set up once, runs on every missed call",
      },
    ],
    faq: [
      {
        q: "Do people find automatic texts annoying?",
        a: "Not when they have just called you. It reads as responsiveness rather than marketing, because it is. What does annoy people is a promise to call back within the hour that nobody keeps.",
      },
      {
        q: "What if the caller was not a customer?",
        a: "Exclude known numbers such as suppliers and staff, and keep the message useful enough that a wrong number simply ignores it. In practice the misfire rate is low and the recovered enquiries are worth far more.",
      },
      {
        q: "Can I use missed call text-back without changing phone systems?",
        a: "Usually yes. Most implementations either forward your existing number or sit on top of it, so the number on your van does not change. Confirm the text appears to come from the number they dialled, which is the part that matters.",
      },
    ],
    related: [
      "speed-to-lead-for-solar-companies",
      "sms-marketing-for-solar-companies",
      "why-solar-leads-go-cold",
    ],
  },

  {
    slug: "solar-sales-follow-up-sequence",
    title: "The solar sales follow-up sequence",
    metaTitle: "The Solar Sales Follow-Up Sequence That Works",
    metaDescription:
      "A complete follow-up sequence for solar leads: the first hour, the first week, the first month, and the long tail, with what to send at each step.",
    keyword: "solar sales follow up sequence",
    secondary: [
      "solar follow up",
      "lead follow up sequence",
      "solar sales cadence",
      "follow up process solar",
    ],
    excerpt:
      "Most solar companies stop after two attempts. The sequence below runs for months and it is where the quiet half of the pipeline lives.",
    category: "follow-up",
    intent: "Informational",
    icon: "envelope",
    published: "2026-07-16",
    answer:
      "A solar sales follow-up sequence should run at least eight touches over three weeks, then continue monthly for a year. The first hour carries an instant text and a call attempt, the first week carries four more attempts across text, call and email, and the long tail keeps a light monthly touch going until the lead buys or asks you to stop.",
    takeaways: [
      "Eight touches in three weeks, then monthly. Most companies stop at two.",
      "Vary the channel. Four identical voicemails is one attempt repeated.",
      "Every touch should carry something, not just check in.",
      "The long tail is where a third of eventual sales come from, and nobody works it.",
    ],
    body: [
      {
        t: "p",
        text: "Solar has a long decision window. A homeowner requesting a quote today may sign in nine weeks, after a bill, a conversation with a spouse, a financing decision and two competing quotes. The company still present at week nine wins, and presence is a sequence rather than an act of will.",
      },

      { t: "h2", text: "What happens in the first hour?" },
      {
        t: "steps",
        items: [
          {
            title: "Minute 0: automatic text",
            body: "Fired by the form submission or the missed call. Names a person, acknowledges the enquiry, promises a call with a time on it, and asks one easy question. See [missed-call text-back for solar](/blog/missed-call-text-back-for-solar).",
          },
          {
            title: "Minute 0: automatic email",
            body: "Slightly longer. What happens next, roughly how long a survey takes, and one piece of genuinely useful information such as what affects payback locally. No brochure.",
          },
          {
            title: "Minute 5: first call attempt",
            body: "A person. If no answer, no voicemail on the first attempt: a missed call from a local number gets returned more often than a voicemail gets listened to.",
          },
          {
            title: "Minute 30: second call attempt, with a voicemail",
            body: "Short, names the enquiry, gives a direct number, and says you will text as well. Then text.",
          },
        ],
      },

      { t: "h2", text: "The first week" },
      {
        t: "table",
        head: ["Day", "Touch", "Content"],
        rows: [
          ["Day 1", "Call, then text", "The two attempts above, plus an evening text if nothing"],
          ["Day 2", "Call at a different time", "If you tried mornings, try after five"],
          ["Day 3", "Email with something useful", "A relevant install nearby, or the local incentive position"],
          ["Day 5", "Text", "One line, one question, no pitch"],
          ["Day 7", "Call and voicemail", "Reference the original enquiry date"],
        ],
      },
      {
        t: "p",
        text: "That is eight touches across four channels inside a week. It sounds aggressive written down and does not feel aggressive to the recipient, because each one is short, each one is different, and the whole thing is about the request they made.",
      },
      {
        t: "callout",
        label: "Change the time, not just the day",
        text: "Four attempts all at 10am is one attempt repeated four times. Rotate through morning, lunchtime, late afternoon and early evening. The evening slot is the one that reaches people who work.",
      },

      { t: "h2", text: "Weeks two to four" },
      {
        t: "p",
        text: "Slow down, keep going, and change what you are asking for. After a week of unanswered attempts, stop asking for a survey and start asking for a decision about whether they are still interested.",
      },
      {
        t: "ul",
        items: [
          "**Day 10.** Email: a short case study of a similar roof in a nearby town.",
          "**Day 14.** Call, then text. Ask directly whether now is the wrong time, and say you will stop chasing if so. A surprising number of replies come from this one.",
          "**Day 21.** Email: the practical stuff people actually worry about, such as what happens to the roof warranty or what a power cut does.",
          "**Day 28.** Final active touch. Say plainly that you will stop here and leave the door open.",
        ],
      },
      {
        t: "p",
        text: "The day fourteen message is the highest-performing in most sequences, which is counter-intuitive until you send it. Permission to say no is the easiest thing in the world to respond to.",
      },

      { t: "h2", text: "The long tail, which is where the money is" },
      {
        t: "p",
        text: "After a month, the lead moves from active follow-up to a monthly touch. Not a chase, a broadcast: one genuinely useful message a month to everyone in the not-yet bucket.",
      },
      {
        t: "ol",
        items: [
          "**A utility rate change.** The single strongest reactivation trigger in solar.",
          "**An incentive or scheme deadline**, only when real.",
          "**A completed install in their area**, with the system size and what it cost roughly.",
          "**A seasonal note**, such as what winter output actually looks like locally.",
          "**A straight check-in**, twice a year, asking whether anything has changed.",
        ],
      },
      {
        t: "p",
        text: "Keep this running for twelve months. It is the cheapest pipeline a solar company has and almost nobody works it, which is also the subject of [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads) and [solar lead nurturing](/blog/solar-lead-nurturing).",
      },

      { t: "h2", text: "How do you make it survive a busy week?" },
      {
        t: "p",
        text: "Every part of this sequence is easy in week one and impossible by week six, because the crews are behind and somebody is on holiday. Three rules keep it alive.",
      },
      {
        t: "ul",
        items: [
          "**Automate every text and email.** They should fire on a timer without anybody choosing to send them.",
          "**Put only the calls on a person**, in a queue that shows who to ring today and nothing else.",
          "**Never let the sequence depend on remembering.** If a human has to decide to start it, it stops the first busy week.",
        ],
      },
      {
        t: "link",
        href: "/products/automated-lead-follow-up",
        label: "Automated lead follow-up",
        note: "The sequence, running whether anyone remembers or not",
      },
    ],
    faq: [
      {
        q: "How many follow-up attempts is too many?",
        a: "Aggression comes from repetition and tone, not from count. Eight varied, short, useful touches in three weeks reads as attentive. Four identical voicemails reads as harassment. Stop immediately when asked.",
      },
      {
        q: "Should follow-up be automated or personal?",
        a: "Both. Texts and emails automated so they never get skipped, calls personal because that is where the sale happens. The automation exists to make sure the human attempts actually occur.",
      },
      {
        q: "What do I say after the fourth attempt?",
        a: "Change the ask. Stop requesting a survey and ask whether the timing is wrong, offering to stop. It is the highest-response message in most sequences because it is easy to answer honestly.",
      },
    ],
    related: [
      "how-many-times-should-you-follow-up-with-a-solar-lead",
      "speed-to-lead-for-solar-companies",
      "email-follow-up-templates-for-solar",
    ],
  },

  {
    slug: "solar-lead-nurturing",
    title: "Solar lead nurturing for long decision windows",
    metaTitle: "Solar Lead Nurturing for Long Decision Windows",
    metaDescription:
      "How to stay present with solar leads who will buy in six months: what to send, how often, the triggers that wake them up, and what to stop sending.",
    keyword: "solar lead nurturing",
    secondary: [
      "lead nurturing solar",
      "nurture sequence",
      "long term follow up solar",
      "solar drip campaign",
    ],
    excerpt:
      "Most solar leads are not slow, they are early. Nurturing is what keeps you present until the moment they are actually ready.",
    category: "follow-up",
    intent: "Informational",
    icon: "envelope",
    published: "2026-06-26",
    answer:
      "Solar lead nurturing is the long, low-frequency follow-up that keeps you present with buyers whose decision is months away. It works on a monthly cadence of genuinely useful messages, triggered by real events such as utility rate changes and incentive deadlines rather than by arbitrary drip schedules.",
    takeaways: [
      "Most unconverted solar leads are early, not uninterested.",
      "Monthly is the right cadence. Weekly gets unsubscribes, quarterly gets forgotten.",
      "Event triggers beat drip schedules. A rate rise outperforms any newsletter.",
      "Every message must be useful on its own, or it is just a reminder that you want money.",
    ],
    body: [
      {
        t: "p",
        text: "There is a distinction worth making sharply, because it changes how you treat half your database. A lead who says no is not interested. A lead who goes quiet is usually not ready, and those are entirely different people.",
      },
      {
        t: "p",
        text: "In solar the second group is large, because the purchase gets postponed rather than rejected. The roof needs doing first. The bonus lands in March. A spouse wants to wait. Nurturing is how you stay present through that without becoming a nuisance, and it starts where [the solar sales follow-up sequence](/blog/solar-sales-follow-up-sequence) stops.",
      },

      { t: "h2", text: "Who belongs in a nurture sequence?" },
      {
        t: "table",
        head: ["Lead", "Nurture?", "Why"],
        rows: [
          ["Quoted, did not proceed", "Yes, highest value", "They wanted solar enough to get a quote"],
          ["Enquired, never reached", "Yes", "Intent was real, contact failed"],
          ["Timeline further out", "Yes, and mark the date", "They told you when. Be there then"],
          ["Chose a competitor", "Yes, lightly", "A share of them never proceeded at all"],
          ["Roof not suitable yet", "Yes, with a trigger", "Re-roof is a future solar job"],
          ["Renting, no landlord interest", "No", "Nothing to nurture toward"],
          ["Asked you to stop", "No, ever", "Remove them properly and permanently"],
        ],
      },

      { t: "h2", text: "The cadence" },
      {
        t: "p",
        text: "Monthly. Weekly produces unsubscribes and teaches people to ignore you; quarterly is too sparse to be present when the moment arrives. Twelve touches a year is enough to be familiar and not enough to be irritating.",
      },
      {
        t: "p",
        text: "One channel, usually email, with text reserved for events that genuinely justify the interruption. A text about a utility rate change is welcome; a monthly text newsletter is not.",
      },

      { t: "h2", text: "What should you actually send?" },
      {
        t: "steps",
        items: [
          {
            title: "Local install stories",
            body: "A real system in a nearby town, with the roof type, the size and roughly what it produces. Concrete, local and impossible for a national competitor to match.",
          },
          {
            title: "Answers to the questions that stall people",
            body: "The roof warranty. What happens in a power cut. Whether panels survive hail. What happens if the installer goes out of business. These are the actual blockers, and nobody addresses them.",
          },
          {
            title: "Money news, when it is real",
            body: "Utility rate changes, incentive deadlines, financing changes. This is the category that converts, because it changes the arithmetic they already ran.",
          },
          {
            title: "Seasonal reality",
            body: "What winter output looks like where they live, why summer bills spike, when to think about batteries. Useful, and it demonstrates you know the area.",
          },
          {
            title: "A direct check-in, twice a year",
            body: "Two lines. Has anything changed. Are you still thinking about it. These get replies precisely because they are not campaigns.",
          },
        ],
      },
      {
        t: "callout",
        label: "The test for every message",
        text: "Would a homeowner be glad they opened it if they never buy from you? If not, it is not nurturing, it is a reminder that you want money, and it trains people to delete you unread.",
      },

      { t: "h2", text: "Triggers beat schedules" },
      {
        t: "p",
        text: "A monthly drip is the baseline. What actually produces bookings is a message tied to an event in the world.",
      },
      {
        t: "ul",
        items: [
          "**A utility rate rise.** Have this message written before the announcement. The window of attention is about two days.",
          "**An incentive deadline**, when genuine. Never invent one.",
          "**A large install in their postcode.** Proximity is the strongest social proof in solar.",
          "**The date they told you.** If somebody said come back in the spring, put it in the system and come back in the spring. Almost nobody does, and it is the easiest win in the list.",
          "**A re-roof completed.** If you know their roof was the blocker, that is a specific, welcome reason to make contact.",
        ],
      },

      { t: "h2", text: "What should you stop sending?" },
      {
        t: "ol",
        items: [
          "**Company news.** Nobody outside your company cares that you attended a trade show.",
          "**Generic industry articles.** They can read those anywhere, from somebody with better writers.",
          "**Manufactured urgency.** Fake deadlines are noticed, and they cost the trust the whole sequence is built on.",
          "**Anything longer than a screen.** A nurture email that needs scrolling does not get scrolled.",
          "**The same message on three channels.** Once, on one channel, is present. Three times is pursuit.",
        ],
      },
      {
        t: "p",
        text: "Nurturing is also where the [AI lead nurturing](/products/ai-lead-nurturing) product sits in the Volt system, sold separately from the plan, because for companies with a large enough database the handling volume stops being realistic manually. The principle is the same either way: be useful, monthly, and be there when the trigger fires.",
      },
      {
        t: "link",
        href: "/blog/how-to-reactivate-old-solar-leads",
        label: "How to reactivate old solar leads",
        note: "What to do with the ones who went quiet a year ago",
      },
    ],
    faq: [
      {
        q: "How long should I nurture a solar lead?",
        a: "Twelve months of monthly contact is a reasonable default, longer for high-value or commercial prospects. Stop immediately when asked, and remove anyone who has clearly bought elsewhere and installed.",
      },
      {
        q: "Email or text for nurturing?",
        a: "Email for the monthly rhythm, text for genuine events like a rate change. Text is an interruption and it should be spent on things that justify interrupting somebody.",
      },
      {
        q: "How do I know nurturing is working?",
        a: "Track how many booked surveys come from leads older than sixty days. If that number is near zero, nurturing is not running, whatever is scheduled in the system.",
      },
    ],
    related: [
      "how-to-reactivate-old-solar-leads",
      "solar-sales-follow-up-sequence",
      "why-solar-leads-go-cold",
    ],
  },

  {
    slug: "how-many-times-should-you-follow-up-with-a-solar-lead",
    title: "How many times should you follow up with a solar lead?",
    metaTitle: "How Many Times to Follow Up With a Solar Lead",
    metaDescription:
      "How many follow-up attempts a solar lead actually needs, where most companies stop, what changes after attempt four, and when to stop for good.",
    keyword: "how many times should you follow up with a solar lead",
    secondary: [
      "how many follow ups",
      "follow up attempts",
      "solar lead persistence",
      "when to stop following up",
    ],
    excerpt:
      "Most solar companies stop at two attempts. Most conversions happen after the fourth. The gap between those two facts is the pipeline.",
    category: "follow-up",
    intent: "Informational",
    icon: "stopwatch",
    published: "2026-05-21",
    answer:
      "Follow up with a solar lead at least eight times across three weeks, then move to a monthly touch for up to a year. Most companies stop after two attempts, while a large share of contacts happen on the fourth attempt or later, which means the leads they already paid for are being abandoned just before they would have answered.",
    takeaways: [
      "Eight active attempts, then monthly. Two is the industry norm and it is far too few.",
      "Vary channel and time of day, or eight attempts is really two.",
      "After attempt four, change what you are asking for.",
      "Stop immediately on request. Otherwise there is no fixed end, only a slower cadence.",
    ],
    body: [
      {
        t: "p",
        text: "This is one of the few questions in sales with a straightforwardly evidenced answer, and the answer is more than you are currently doing.",
      },

      { t: "h2", text: "Where do most solar companies stop?" },
      {
        t: "p",
        text: "Two attempts. A call on the day, a call the next day, then the lead moves to a status nobody looks at again. What makes this expensive is that you already paid for the lead, whether in ad spend, vendor fees or the years of reputation that produced the referral.",
      },
      {
        t: "figures",
        items: [
          { value: "2", label: "Typical attempts before giving up" },
          { value: "8+", label: "Attempts a reached lead often needs" },
          { value: "21x", label: "Qualification lift from a fast first attempt" },
        ],
      },
      {
        t: "p",
        text: "Note that the first and last figures are in tension. Speed matters enormously and persistence matters enormously, and they are usually discussed separately. Getting there first and then quitting on attempt two wastes the advantage you just paid for.",
      },

      { t: "h2", text: "Why are so many attempts needed?" },
      {
        t: "ul",
        items: [
          "**People are working.** Your leads have jobs and are not sitting by the phone waiting for installers.",
          "**Unknown numbers get ignored.** A large share of calls are screened by default, and the second and third attempts are where recognition starts.",
          "**Solar is postponed, not rejected.** Attempt one catches them mid-thought; attempt six catches them after the bill arrived.",
          "**They contacted several installers.** Yours may be the fourth call and they have stopped answering all of them.",
        ],
      },

      { t: "h2", text: "What should eight attempts look like?" },
      {
        t: "table",
        head: ["Attempt", "When", "Channel"],
        rows: [
          ["1", "Within 5 minutes", "Call, no voicemail"],
          ["2", "30 minutes", "Call with voicemail, then text"],
          ["3", "Day 2, different time", "Call"],
          ["4", "Day 3", "Email with something useful"],
          ["5", "Day 5", "Text, one question"],
          ["6", "Day 7", "Call with voicemail"],
          ["7", "Day 14", "Text asking if the timing is wrong"],
          ["8", "Day 28", "Email closing the active sequence"],
        ],
      },
      {
        t: "callout",
        label: "Varied, not repeated",
        text: "Eight calls at 10am is one attempt made eight times. Eight attempts across call, text and email at four different times of day is genuinely eight chances of catching somebody. The variety is what makes the number mean anything.",
      },

      { t: "h2", text: "What changes after attempt four" },
      {
        t: "p",
        text: "The early attempts assume they missed you. The later ones should assume something has changed, and the ask changes with it.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Attempts 1 to 3: assume a missed connection",
            body: "Straightforward, warm, referencing their enquiry. You are simply trying to catch them.",
          },
          {
            title: "Attempts 4 to 6: bring something with you",
            body: "A relevant install nearby, an answer to a common worry, a local incentive note. Each touch justifies itself even if they never reply.",
          },
          {
            title: "Attempt 7: offer the exit",
            body: "Ask whether the timing is wrong and say you will stop chasing if so. The highest-response message in most sequences, because it is easy to answer honestly.",
          },
          {
            title: "Attempt 8: close the active loop, open the slow one",
            body: "Say plainly you will stop the calls, leave a direct number, and move them to the monthly nurture. See [solar lead nurturing](/blog/solar-lead-nurturing).",
          },
        ],
      },

      { t: "h2", text: "When should you actually stop?" },
      {
        t: "ol",
        items: [
          "**They ask you to.** Immediately, permanently, across every channel.",
          "**They disqualify.** Renting with no landlord interest, a roof that cannot take a system, outside your service area.",
          "**They bought elsewhere and installed.** Move them to a review-and-referral path instead, not to nothing.",
          "**Twelve months of no engagement at all.** Not on attempt eight, on month twelve.",
        ],
      },
      {
        t: "p",
        text: "Everything else stays in the system on a monthly rhythm. The database of people who wanted solar and did not buy from you is one of the most valuable assets a solar company owns, and most owners have never once messaged it. See [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads).",
      },
      { t: "h2", text: "What persistence is worth, in money" },
      {
        t: "p",
        text: "It is worth putting a number on this, because the case for eight attempts is usually made as a moral point about effort when it is really an arithmetic one.",
      },
      {
        t: "table",
        caption: "Illustrative, on 100 leads at a $150 blended acquisition cost.",
        head: ["", "Stops at 2 attempts", "Runs to 8 attempts"],
        rows: [
          ["Leads", "100", "100"],
          ["Contact rate", "31%", "58%"],
          ["Appointments sat", "9", "17"],
          ["Jobs closed at 28%", "2.5", "4.8"],
          ["Cost per closed job", "$6,000", "$3,125"],
        ],
      },
      {
        t: "p",
        text: "Same leads, same spend, same sales team. The only difference is that the second column did not stop on Tuesday. Nothing else available to a solar company halves cost per job for free.",
      },
      {
        t: "link",
        href: "/blog/solar-sales-follow-up-sequence",
        label: "The solar sales follow-up sequence",
        note: "The full cadence, written out",
      },
    ],
    faq: [
      {
        q: "Is eight follow-ups too aggressive?",
        a: "Not when they are short, varied and about the enquiry the person made. Aggression comes from tone and repetition, not from count. One-line texts and a genuinely useful email do not read as pressure.",
      },
      {
        q: "Should I leave a voicemail every time?",
        a: "No. Skip it on the first attempt, because a missed call from a local number is returned more often than a voicemail is played. Use voicemails on attempts two and six, and keep them under twenty seconds.",
      },
      {
        q: "What is the best time to call a solar lead?",
        a: "Vary it deliberately: morning, lunchtime, late afternoon and early evening. Early evening reaches people who work and is the slot most installers never try.",
      },
    ],
    related: [
      "solar-sales-follow-up-sequence",
      "speed-to-lead-for-solar-companies",
      "solar-lead-nurturing",
    ],
  },

  {
    slug: "solar-appointment-no-show-rate",
    title: "Cutting the solar appointment no-show rate",
    metaTitle: "Solar Appointment No-Show Rate: How to Cut It",
    metaDescription:
      "Why solar appointments do not sit, the booking and reminder sequence that fixes most of it, and how to recover a no-show instead of writing it off.",
    keyword: "solar appointment no show rate",
    secondary: [
      "solar no shows",
      "appointment sat rate",
      "reduce no shows",
      "solar appointment confirmation",
    ],
    excerpt:
      "A no-show costs the lead, the slot and the drive. Most of them are preventable with a confirmation sequence and one awkward question at booking.",
    category: "follow-up",
    intent: "Informational",
    icon: "calendar",
    published: "2026-04-11",
    answer:
      "Solar appointment no-shows are reduced most by three things: confirming that every decision maker will be present at the time of booking, sending a reminder sequence at 24 hours and 1 hour, and keeping the gap between booking and appointment under five days. Long gaps are the single biggest predictor of a no-show.",
    takeaways: [
      "The shorter the gap between booking and appointment, the higher the sat rate.",
      "Ask at booking whether everyone who has to sign will be there.",
      "Reminders at 24 hours and 1 hour, by text, with a reply option.",
      "A no-show is not a loss. It is a lead with a rebooking problem.",
    ],
    body: [
      {
        t: "p",
        text: "A no-show is more expensive than a bad lead. You paid for the lead, spent the time booking it, lost a slot that could have held a real appointment, and in many cases sent someone driving. Cost per sat appointment is the number that matters in solar, and no-shows are the term in that equation nobody works on.",
      },

      { t: "h2", text: "Why do solar appointments not sit?" },
      {
        t: "table",
        head: ["Cause", "How common", "Fixable?"],
        rows: [
          ["The gap was too long", "Very", "Yes, book closer"],
          ["Only one decision maker booked", "Very", "Yes, ask at booking"],
          ["They booked three installers", "Common", "Partly, through speed and proof"],
          ["No reminders", "Common", "Yes, entirely"],
          ["Cold feet about a sales visit", "Common", "Yes, by setting expectations"],
          ["Genuine emergency", "Occasional", "No, but recoverable"],
        ],
      },
      {
        t: "p",
        text: "The first two account for most of it, and both are decided in the ninety seconds when the appointment is booked rather than on the day.",
      },

      { t: "h2", text: "The booking conversation" },
      {
        t: "steps",
        items: [
          {
            title: "Book it close",
            body: "Inside five days wherever possible, and inside two if you can. Every additional day between booking and appointment lowers the odds it happens. If your diary is genuinely full a week out, that is a capacity problem wearing a no-show costume.",
          },
          {
            title: "Ask the awkward question",
            body: "Is there anyone else who would be part of this decision? Then book a time they can both attend. This single question is the difference between an appointment and a meeting that produces we will talk about it.",
          },
          {
            title: "Say what will happen",
            body: "How long it takes, what you will look at, whether you will quote on the day, and explicitly that nobody is expected to sign anything. Most cold feet come from expecting a high-pressure pitch.",
          },
          {
            title: "Get the appointment into their calendar",
            body: "A calendar invitation, not just a verbal agreement. An appointment that exists only in your system is one the homeowner has genuinely forgotten by Thursday.",
          },
        ],
      },
      {
        t: "callout",
        label: "The decision-maker question",
        text: "Sales teams skip it because it risks delaying the booking. It does, sometimes, by three days. It also converts an appointment that would have produced nothing into one that can produce a signature, which is worth far more than a full diary.",
      },

      { t: "h2", text: "The reminder sequence" },
      {
        t: "ol",
        items: [
          "**On booking.** Confirmation text and calendar invitation, with the name of who is coming.",
          "**24 hours before.** Text with the time, the name, and a reply option: reply C to confirm or R to reschedule. The reschedule option is what converts a silent no-show into a moved appointment.",
          "**1 hour before.** Short text. On my way shortly, see you at two.",
          "**On the way.** Optional, and it works well: leaving now, with me in about twenty minutes.",
        ],
      },
      {
        t: "p",
        text: "Offering a reschedule feels like inviting cancellation. It is not: those people were not going to be there anyway, and now the slot is recoverable and the lead is still alive.",
      },

      { t: "h2", text: "How do you recover a no-show?" },
      {
        t: "p",
        text: "Most companies mark a no-show as dead. That is a lead you paid for, who wanted solar enough to book time, being written off over one missed afternoon.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Within 15 minutes: call, then text",
            body: "No blame at all. Just checking we had the right time, happy to rebook. A meaningful share of no-shows are genuinely mixed-up times.",
          },
          {
            title: "Same day: offer two specific slots",
            body: "Two options rather than an open question. Open questions require effort, which is what produced the no-show.",
          },
          {
            title: "Day 3: one more attempt, different channel",
            body: "Email, short, with the two slots again and no mention of the missed appointment.",
          },
          {
            title: "Then: back to nurture",
            body: "Not to the bin. Into the monthly sequence with everybody else. See [solar lead nurturing](/blog/solar-lead-nurturing).",
          },
        ],
      },

      { t: "h2", text: "How do you measure it properly?" },
      {
        t: "p",
        text: "Track set rate and sat rate separately, per channel and per person booking. The two numbers tell different stories: a booker with a high set rate and a poor sat rate is booking appointments that were never real, which looks like performance on a leaderboard and costs money everywhere else.",
      },
      {
        t: "p",
        text: "Then compute cost per sat appointment per channel. It reorders most solar marketing budgets the first time anyone looks at it, and it is the correct way to compare channels. See [how much do solar leads cost](/blog/how-much-do-solar-leads-cost).",
      },
      {
        t: "link",
        href: "/blog/how-to-qualify-solar-leads",
        label: "How to qualify solar leads",
        note: "Most no-shows were qualification failures first",
      },
    ],
    faq: [
      {
        q: "What is a good solar appointment sat rate?",
        a: "It varies by channel: referrals and inbound calls sit far more reliably than paid or bought leads. The number worth watching is your own trend over time and the difference between channels, rather than a national benchmark.",
      },
      {
        q: "Should I take a deposit to hold an appointment?",
        a: "Almost never for residential solar. It suppresses bookings far more than it improves attendance, and it signals distrust at exactly the moment you are asking someone to trust you with their roof.",
      },
      {
        q: "How far in advance should I book solar appointments?",
        a: "As close as your diary allows, ideally within five days. If you are consistently booking two weeks out, the no-show rate is telling you about capacity rather than about the homeowners.",
      },
    ],
    related: [
      "how-to-qualify-solar-leads",
      "solar-sales-follow-up-sequence",
      "why-solar-leads-go-cold",
    ],
  },

  {
    slug: "sms-marketing-for-solar-companies",
    title: "SMS marketing for solar companies",
    metaTitle: "SMS Marketing for Solar Companies: What Works",
    metaDescription:
      "Where text works for solar and where it backfires, consent and compliance basics, message structure, timing, and the campaigns worth running.",
    keyword: "sms marketing for solar companies",
    secondary: [
      "solar sms marketing",
      "text message marketing",
      "sms for contractors",
      "solar text campaigns",
    ],
    excerpt:
      "Text is the highest-response channel a solar company has and the easiest one to ruin. Where it works, where it does not, and the rules.",
    category: "follow-up",
    intent: "Informational",
    icon: "chat",
    published: "2026-03-18",
    answer:
      "SMS works for solar companies in conversational use: replying to enquiries, confirming appointments, recovering missed calls and asking for reviews. It works poorly as a broadcast channel. Response rates are far higher than email, which makes it valuable and also makes misuse expensive in opt-outs and complaints.",
    takeaways: [
      "Text is for conversation and logistics, not for newsletters.",
      "Consent and opt-out handling are not optional, and rules vary by jurisdiction.",
      "Under 160 characters, from a person, with one clear question or action.",
      "The best solar text campaigns are triggered by events, not by a calendar.",
    ],
    body: [
      {
        t: "p",
        text: "Text messages get opened and read within minutes, which is exactly why they are valuable and exactly why they are easy to abuse. The distinction that keeps a solar company on the right side of it is simple: text is a conversation channel and an operational one. It is not a broadcast channel.",
      },

      { t: "h2", text: "Where does text actually work for solar?" },
      {
        t: "table",
        head: ["Use", "Works?", "Why"],
        rows: [
          ["Replying to a new enquiry", "Very well", "They just contacted you. Expected and welcome"],
          ["Missed call text-back", "Very well", "They dialled seconds ago. See the dedicated article"],
          ["Appointment confirmations", "Very well", "Logistics, genuinely useful"],
          ["Review requests", "Very well", "Far higher response than email"],
          ["Install day updates", "Very well", "Reduces inbound calls to the office"],
          ["Reactivating an old quote", "Works with care", "Needs consent and a real reason"],
          ["Monthly newsletters", "Badly", "Reads as intrusion, produces opt-outs"],
          ["Cold outreach", "Badly, and often unlawful", "Do not"],
        ],
      },

      { t: "h2", text: "Consent and compliance" },
      {
        t: "p",
        text: "Rules differ by country and state and they do change, so take local advice if you are operating at any scale. The principles that hold up everywhere are these.",
      },
      {
        t: "ol",
        items: [
          "**Have a basis for contacting them.** They enquired, they called, they are a customer, or they explicitly opted in.",
          "**Identify yourself** in the message. Every time, not just the first.",
          "**Honour opt-outs immediately**, including informal ones. Stop means stop, and so does please do not text me.",
          "**Keep records.** When consent was given, how, and what was sent.",
          "**Respect quiet hours.** Nothing before eight or after nine, whatever the local rule technically allows.",
          "**Never buy a list.** Texting purchased numbers is the fastest route to complaints and penalties.",
        ],
      },
      {
        t: "callout",
        label: "The line",
        text: "Responding to someone who contacted you is a reply. Messaging a list who did not is marketing. The first is nearly always fine; the second is regulated, and in solar it is heavily scrutinised because of the industry's history with cold outreach.",
      },

      { t: "h2", text: "How do you write one?" },
      {
        t: "ul",
        items: [
          "**Under 160 characters** where possible. One message, not three fragments.",
          "**From a named person.** Hi Sarah, it is Dan at Volt Solar beats a brand name every time.",
          "**One question or one action.** Two questions in a text gets one answered.",
          "**No links in a first message.** They can trip carrier filtering and they read as promotional.",
          "**Plain words.** No capitals, no exclamation marks, nothing that looks like a blast.",
        ],
      },
      {
        t: "quote",
        text: "Hi Sarah, it is Dan at Volt Solar. Your survey is booked for Thursday at 2pm, I will be the one coming. Reply C to confirm or R if you need a different time.",
        cite: "151 characters, one action, no link",
      },

      { t: "h2", text: "The campaigns worth running" },
      {
        t: "steps",
        items: [
          {
            title: "Utility rate change",
            body: "To customers and consenting past enquirers, on the day of an announcement. The highest-response text a solar company can send, because it changes the arithmetic they already ran.",
          },
          {
            title: "Appointment sequence",
            body: "Confirmation, 24 hour reminder, one hour reminder. Pure logistics, pure benefit. See [cutting the solar appointment no-show rate](/blog/solar-appointment-no-show-rate).",
          },
          {
            title: "Review request and one reminder",
            body: "Two to six weeks after commissioning. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
          },
          {
            title: "Install week updates",
            body: "Scaffolding tomorrow, crew arriving at eight, commissioning done. Reduces inbound calls and produces better reviews.",
          },
          {
            title: "Quote follow-up",
            body: "Two or three touches inside the active follow-up window, as part of the wider sequence rather than on their own.",
          },
        ],
      },

      { t: "h2", text: "The mistakes that cost you the channel" },
      {
        t: "p",
        text: "Text is easy to lose. Once somebody has opted out you have lost the highest-response route you had to them, permanently, and usually for a message that was never going to convert anyway.",
      },
      {
        t: "ul",
        items: [
          "**Texting too often.** More than a few times a month outside an active conversation is too much.",
          "**Sending at bad times.** Evenings and weekends feel different on text than on email.",
          "**Broadcasting.** A message that is obviously going to hundreds of people gets treated as spam because it is.",
          "**Not watching the replies.** Sending texts from a system nobody monitors is worse than not sending them. See the [all-in-one inbox](/products/all-in-one-inbox).",
        ],
      },
      { t: "h2", text: "Which number should you send from?" },
      {
        t: "p",
        text: "One detail decides whether any of this works: which number the message appears to come from.",
      },
      {
        t: "ul",
        items: [
          "**Use one number, consistently.** The number on your van, your website and your texts should be the same one. Three different numbers means nobody recognises any of them.",
          "**Local beats toll-free** for this. A local area code reads as a neighbour; a toll-free prefix reads as a call centre.",
          "**Make sure replies reach a person.** A send-only number is the most common and most damaging setup, because a homeowner who replies and hears nothing concludes you are automated and stops.",
          "**Register properly for business messaging** where your carrier requires it. Unregistered business traffic increasingly gets filtered before it arrives, and you will never know.",
        ],
      },
      {
        t: "p",
        text: "That last point catches a lot of companies. Messages appear to send successfully and never arrive, so the channel looks ineffective when it is actually being blocked. If your text reply rate is near zero, check delivery before rewriting the message.",
      },
      {
        t: "link",
        href: "/blog/missed-call-text-back-for-solar",
        label: "Missed call text-back for solar",
        note: "The single highest-return use of SMS in solar",
      },
    ],
    faq: [
      {
        q: "Do I need consent to text a solar lead?",
        a: "You need a lawful basis, which an enquiry or a phone call to you usually provides for a direct response. Marketing broadcasts to a list generally require explicit consent, and the rules vary by jurisdiction, so take local advice before running campaigns.",
      },
      {
        q: "How often can I text solar customers?",
        a: "During an active job or conversation, as often as the conversation needs. Outside that, a few times a year at most, and only when there is something genuinely worth interrupting someone for.",
      },
      {
        q: "What response rate should I expect from SMS?",
        a: "Far higher than email, particularly for conversational messages and review requests. Response drops sharply the more a message looks like a broadcast, which is the whole argument for keeping text conversational.",
      },
    ],
    related: [
      "missed-call-text-back-for-solar",
      "speed-to-lead-for-solar-companies",
      "email-follow-up-templates-for-solar",
    ],
  },

  {
    slug: "why-solar-leads-go-cold",
    title: "Why solar leads go cold",
    metaTitle: "Why Solar Leads Go Cold (and How to Warm Them Up)",
    metaDescription:
      "The seven reasons solar leads stop responding, which are your fault and which are not, and what to do about each one rather than writing them off.",
    keyword: "why solar leads go cold",
    secondary: [
      "cold solar leads",
      "leads stopped responding",
      "solar lead drop off",
      "unresponsive leads",
    ],
    excerpt:
      "Seven reasons a solar lead stops replying. Five of them are yours to fix, and most companies never diagnose which one they have.",
    category: "follow-up",
    intent: "Informational",
    icon: "stopwatch",
    published: "2026-02-22",
    answer:
      "Solar leads go cold for seven main reasons: a slow first response, follow-up that stopped too early, a competitor getting there first, a missing decision maker, an unresolved objection nobody surfaced, a timeline that was always further out, or a genuine disqualification. Only the last is final, and most companies treat all seven the same way.",
    takeaways: [
      "Cold usually means unanswered, not uninterested.",
      "Diagnose which of the seven you have before deciding what to do.",
      "A lead who stops replying after a quote has an objection you never heard.",
      "Six of the seven are recoverable. Only disqualification is final.",
    ],
    body: [
      {
        t: "p",
        text: "Cold is a label applied to a lead that stopped replying, and it flattens seven quite different situations into one. Telling them apart is what turns a dead list into a pipeline.",
      },

      { t: "h2", text: "Why do solar leads go cold?" },
      {
        t: "table",
        head: ["Reason", "The signal", "Recoverable?"],
        rows: [
          ["You were slow", "They never replied to anything at all", "Yes, but only via a different angle"],
          ["You stopped too early", "Two attempts, then nothing on your side", "Yes, easily"],
          ["A competitor got there first", "Engaged, then went quiet abruptly", "Sometimes. Many never proceed"],
          ["A decision maker was missing", "Good conversation, then stalled", "Yes, get the other person in"],
          ["An objection went unsaid", "Quote sent, then silence", "Yes, and this is the common one"],
          ["The timeline was longer", "They told you, you did not record it", "Yes, nurture until then"],
          ["They genuinely do not qualify", "Renting, unsuitable roof, no bill", "No. Close it properly"],
        ],
      },

      { t: "h2", text: "The silence after a quote" },
      {
        t: "p",
        text: "This is the most common and the most misread. A homeowner who talked to you, let you survey the roof and then vanished after the quote has an objection, and the reason you do not know what it is is that nobody asked.",
      },
      {
        t: "p",
        text: "Usually it is one of four: the price against an expectation they never stated, financing they did not understand, a spouse who was not in the room, or a competing quote that looked cheaper for reasons they cannot evaluate.",
      },
      {
        t: "callout",
        label: "The message that gets a reply",
        text: "Hi Sarah, no chase and no pitch. Most people who go quiet after a quote have one specific worry they did not want to raise. If you tell me what yours is, I will give you a straight answer even if it means telling you not to go ahead. Sent as a text, this recovers more stalled quotes than any discount.",
      },

      { t: "h2", text: "When you were simply too slow" },
      {
        t: "p",
        text: "If a lead never engaged at all, the likeliest explanation is that somebody else replied first and the conversation happened over there. That one is not recoverable through persistence, because there is no relationship to persist with.",
      },
      {
        t: "p",
        text: "What it is, is a systems diagnosis. If a material share of your leads never reply to anything, the problem is not the leads. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },

      { t: "h2", text: "When you stopped too early" },
      {
        t: "p",
        text: "The easiest of the seven to fix, because the lead is intact and the only thing that failed was your side of the conversation. Run a proper sequence: eight touches, varied channels, varied times.",
      },
      {
        t: "p",
        text: "And note what this means for your existing database: every lead you abandoned at attempt two is still sitting there, unworked, having cost you money. See [how many times to follow up with a solar lead](/blog/how-many-times-should-you-follow-up-with-a-solar-lead).",
      },

      { t: "h2", text: "How do you diagnose yours?" },
      {
        t: "steps",
        items: [
          {
            title: "Pull thirty cold leads from the last quarter",
            body: "Not all of them. Thirty is enough for the pattern to show and few enough that you will actually do it.",
          },
          {
            title: "Read the whole thread for each",
            body: "How fast was the first response. How many attempts were made. Where did the conversation stop. Was a quote sent.",
          },
          {
            title: "Tag each with one of the seven",
            body: "One reason each, the most likely. This takes about an hour and it is the most useful hour available to a solar owner this quarter.",
          },
          {
            title: "Fix the biggest column first",
            body: "If it is slow response, that is an automation job. If it is stopping early, that is a sequence job. If it is silence after quotes, that is a sales conversation job. Three different problems, three different fixes.",
          },
        ],
      },

      { t: "h2", text: "What do you do with the ones already cold?" },
      {
        t: "p",
        text: "Do not delete them. Six of the seven categories are recoverable, and the people in them wanted solar enough to contact you once. They go into a monthly nurture and get woken up by real events rather than by chasing.",
      },
      {
        t: "p",
        text: "That is exactly what [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads) covers, and it is the cheapest campaign in this entire blog to run.",
      },
      { t: "h2", text: "Stopping leads going cold in the first place" },
      {
        t: "p",
        text: "Diagnosis is for the leads you already lost. Four changes stop the next hundred going the same way, and they are the same four regardless of which of the seven reasons dominates your list.",
      },
      {
        t: "ol",
        items: [
          "**Answer inside five minutes**, automatically outside hours. This removes reason one entirely.",
          "**Run eight attempts, not two.** This removes reason two entirely.",
          "**Ask about decision makers at booking**, which removes reason four before it happens. See [cutting the solar appointment no-show rate](/blog/solar-appointment-no-show-rate).",
          "**Record the timeline when they give it to you**, and act on it. Reason six is the only one where the customer told you exactly what to do and nobody wrote it down.",
        ],
      },
      {
        t: "quote",
        text: "A cold lead is usually a warm lead with an unanswered message in between.",
      },
    ],
    faq: [
      {
        q: "How long before a solar lead is considered cold?",
        a: "Most companies say two weeks, which is far too early given a decision window measured in months. Treat a lead as inactive after about four weeks of no engagement, and even then move it to nurture rather than closing it.",
      },
      {
        q: "Can cold solar leads be revived?",
        a: "Frequently, yes. Leads who never got a proper sequence are the easiest, and leads who went quiet after a quote often have one unresolved objection that a direct, low-pressure message will surface.",
      },
      {
        q: "Should I offer a discount to a cold lead?",
        a: "Not first. Discounting a lead whose actual blocker was a missing spouse or an unanswered question about the roof warranty solves nothing and damages your margin. Find the objection before reaching for price.",
      },
    ],
    related: [
      "how-to-reactivate-old-solar-leads",
      "speed-to-lead-for-solar-companies",
      "solar-lead-nurturing",
    ],
  },

  {
    slug: "email-follow-up-templates-for-solar",
    title: "Email follow-up templates for solar",
    metaTitle: "Email Follow-Up Templates for Solar Companies",
    metaDescription:
      "Nine email templates for solar follow-up: the instant reply, the quote follow-up, the stalled deal, the re-engagement and the polite close, all short.",
    keyword: "email follow up templates for solar",
    secondary: [
      "solar email templates",
      "follow up email template",
      "solar sales emails",
      "quote follow up email",
    ],
    excerpt:
      "Nine emails covering the whole follow-up sequence, written to be short enough that somebody actually reads them on a phone.",
    category: "follow-up",
    intent: "Informational",
    icon: "envelope",
    published: "2026-01-29",
    answer:
      "Solar follow-up emails should be under 120 words, written in plain text from a named person, and carry one specific thing rather than a check-in. The nine below cover the sequence from the instant acknowledgement through the quote follow-up, the stalled deal, re-engagement and the polite close.",
    takeaways: [
      "Under 120 words. Anything longer gets skimmed to nothing on a phone.",
      "Plain text from a person beats a designed template for follow-up.",
      "Never send an email whose only content is checking in.",
      "Subject lines should be four words and lower case, like a colleague wrote them.",
    ],
    body: [
      {
        t: "p",
        text: "Email does the parts of solar follow-up that text cannot: the explanation, the attachment, the thing worth keeping. It fails when it is treated as a newsletter or when it is sent for its own sake.",
      },
      {
        t: "p",
        text: "Every template below follows three rules. Under 120 words. Plain text from a person. One specific thing, never a check-in.",
      },

      { t: "h2", text: "The instant acknowledgement" },
      {
        t: "p",
        text: "Fires on form submission, alongside the automatic text. Its job is to set expectations and reduce the anxiety of having given a stranger your address.",
      },
      {
        t: "quote",
        text: "Subject: your solar enquiry / Hi [name], thanks for getting in touch. I will call you within the hour. When we speak I will ask about your roof, your typical bill and what is prompting you to look now, and that is about ten minutes. No survey booked until you want one, and no obligation at any point. [name], [company], [direct number].",
      },

      { t: "h2", text: "The day three useful email" },
      {
        t: "p",
        text: "Sent when calls have not connected. Carries something rather than asking for something.",
      },
      {
        t: "quote",
        text: "Subject: a system near you / Hi [name], we have not managed to catch each other, so here is something useful in the meantime. We fitted a [size] array on [street or area] in [month]. Similar roof to yours from what I could see, and it is covering most of their daytime use. Happy to talk through what yours would look like whenever suits. [name], [number].",
      },

      { t: "h2", text: "The quote follow-up" },
      {
        t: "p",
        text: "Sent two days after the quote. Not a chase. An invitation to raise the thing they did not want to raise.",
      },
      {
        t: "quote",
        text: "Subject: anything unclear? / Hi [name], sent the quote on Tuesday. Most people have one question they do not want to ask in case it sounds obvious. Mine would be why the inverter costs what it does. Whatever yours is, ask it and I will answer straight, including if the answer is that this is not the right time. [name].",
      },

      { t: "h2", text: "The stalled deal" },
      {
        t: "p",
        text: "Sent around day fourteen of silence. The highest-response email in most solar sequences, because it offers an exit.",
      },
      {
        t: "quote",
        text: "Subject: should I stop? / Hi [name], I do not want to keep landing in your inbox if the timing is wrong. Three options: you are still interested but busy, the timing has changed, or you have gone with someone else. Any of the three is a fine answer and one word is enough. [name].",
      },

      { t: "h2", text: "The rest of the set" },
      {
        t: "table",
        head: ["Email", "When", "The one thing it carries"],
        rows: [
          [
            "Appointment confirmation",
            "On booking",
            "What will happen, how long, and that nobody signs anything",
          ],
          [
            "Post-survey summary",
            "Same day as the survey",
            "What you saw on the roof, in plain language, before the quote",
          ],
          [
            "The objection answer",
            "When one is raised",
            "One objection, answered fully, nothing else in the email",
          ],
          [
            "Re-engagement",
            "Monthly, in nurture",
            "A rate change, a local install, or a seasonal fact",
          ],
          [
            "The polite close",
            "End of active sequence",
            "You are stopping, the door is open, here is a direct number",
          ],
        ],
      },
      {
        t: "callout",
        label: "Subject lines",
        text: "Four words, lower case, no company name and no capitals. anything unclear? beats Following Up On Your Solar Quote From Volt Solar, because the first looks like a colleague and the second looks like a campaign.",
      },

      { t: "h2", text: "What should you strip out?" },
      {
        t: "ul",
        items: [
          "**HTML templates and header images.** They lower deliverability and raise the chance it reads as marketing.",
          "**Attachments in early emails.** Link to the quote instead; attachments get filtered.",
          "**Long signatures.** Name, company, one number. Social icons add nothing here.",
          "**Just checking in.** If there is nothing to say, do not send an email. Send nothing and keep the next one for when there is.",
          "**Multiple calls to action.** One per email. Two gets neither.",
        ],
      },
      {
        t: "p",
        text: "These sit inside the wider cadence in [the solar sales follow-up sequence](/blog/solar-sales-follow-up-sequence), and they work best when the texts and calls around them are also happening. Email on its own is the weakest of the three channels; email as part of a sequence is doing a job the other two cannot. For the long tail, see [solar lead nurturing](/blog/solar-lead-nurturing).",
      },
      { t: "h2", text: "How do you make sure they arrive?" },
      {
        t: "p",
        text: "A perfectly written email in a spam folder is a worse investment than no email at all, because you will conclude the messaging failed when the delivery did.",
      },
      {
        t: "ul",
        items: [
          "**Send from your domain**, properly authenticated. An unauthenticated domain increasingly lands in spam by default.",
          "**Send from a person**, not from noreply or info. It improves both deliverability and replies.",
          "**Keep images out of follow-up emails.** Text-only mail from a real address is treated more like correspondence and less like a campaign.",
          "**Watch the reply-to.** Follow-up emails people cannot reply to are a common and expensive misconfiguration.",
          "**Check your own inbox placement** quarterly by sending to a couple of the common providers and seeing where it lands.",
        ],
      },
      {
        t: "link",
        href: "/products/automated-lead-follow-up",
        label: "Automated lead follow-up",
        note: "These, sent on time, without anybody remembering",
      },
    ],
    faq: [
      {
        q: "How long should a follow-up email be?",
        a: "Under 120 words. Most are read on a phone between other tasks, and anything requiring a scroll gets skimmed to nothing. If it needs more room, it is a phone call.",
      },
      {
        q: "Should follow-up emails be plain text or designed?",
        a: "Plain text from a real person's address. Designed templates read as marketing, are more likely to be filtered, and convert worse for one-to-one follow-up. Save design for genuine newsletters.",
      },
      {
        q: "How often should I email a solar lead?",
        a: "During active follow-up, roughly every two to three days alongside calls and texts. After that, monthly in nurture. The frequency matters less than whether each email carries something worth opening.",
      },
    ],
    related: [
      "solar-sales-follow-up-sequence",
      "solar-lead-nurturing",
      "sms-marketing-for-solar-companies",
    ],
  },
] as const;
