import type { Post } from "../types";

/**
 * Cluster 5: software and systems. Hub is best-solar-contractor-software.
 */
export const SOFTWARE_POSTS: readonly Post[] = [
  {
    slug: "best-solar-contractor-software",
    title: "The best solar contractor software",
    metaTitle: "The Best Solar Contractor Software: How to Choose",
    metaDescription:
      "The categories of solar contractor software, what each actually does, where they overlap, and how to choose without ending up with nine logins.",
    keyword: "best solar contractor software",
    secondary: [
      "solar contractor software",
      "solar installer software",
      "solar business software",
      "software for solar companies",
    ],
    excerpt:
      "There is no single best solar software, there are five categories that overlap badly. Here is what each one does and which you actually need.",
    category: "software",
    intent: "Commercial",
    icon: "grid",
    pillar: true,
    published: "2026-09-10",
    answer:
      "Solar contractor software falls into five categories: design and proposal tools, CRM and sales, project and install management, accounting, and marketing automation. Most companies need three of the five, and the expensive mistake is buying one from each category without checking where they overlap, which is how a company ends up with nine logins and no single source of truth.",
    takeaways: [
      "Five categories, and most installers genuinely need three.",
      "The question is not which is best, it is which combination has the fewest seams.",
      "Every handoff between two tools is where a lead or a job goes missing.",
      "Buy for the workflow you have, not the one a demo showed you.",
    ],
    body: [
      {
        t: "p",
        text: "Search for solar contractor software and you get twenty listicles ranking twelve products that do different jobs. It is not a like-for-like market. A design tool and a CRM are not competitors, and the comparison table that puts them side by side is the reason most solar companies end up over-bought and under-integrated.",
      },
      {
        t: "p",
        text: "So start by separating the categories.",
      },

      { t: "h2", text: "The five categories" },
      {
        t: "table",
        head: ["Category", "What it does", "Do you need it?"],
        rows: [
          [
            "Design and proposal",
            "Roof layout, shading, production modelling, the customer-facing proposal",
            "Yes, if you design in-house",
          ],
          [
            "CRM and sales",
            "Leads, follow-up, pipeline, appointments, communication history",
            "Yes, always",
          ],
          [
            "Project and install management",
            "Permitting, scheduling, crews, materials, commissioning",
            "Yes, past roughly ten installs a month",
          ],
          [
            "Accounting and finance",
            "Invoicing, payroll, job costing",
            "Yes, and you almost certainly already have it",
          ],
          [
            "Marketing and automation",
            "Website, forms, review requests, nurture, missed-call handling",
            "Yes, and it is the one most often left manual",
          ],
        ],
      },
      {
        t: "p",
        text: "Note what happens at the edges. Design tools add a lightweight CRM. CRMs add project management. Project tools add invoicing. Each one is trying to become the whole stack, and each one is good at its own category and mediocre at the ones it annexed.",
      },

      { t: "h2", text: "The real question: where are the seams?" },
      {
        t: "p",
        text: "Software failures in solar are almost never about features. They are about handoffs. A lead exists in the CRM, the proposal lives in the design tool, the job lives in the project tool, and the invoice lives in accounting. Four systems, three seams, and a lead or a job falls through one of them every week.",
      },
      {
        t: "callout",
        label: "The diagnostic",
        text: "Draw your workflow from enquiry to paid invoice and mark every point where a human retypes something from one screen into another. Each of those is a seam. Count them. That number predicts your problems far better than any feature comparison.",
      },

      { t: "h2", text: "What each category should actually do" },
      {
        t: "steps",
        items: [
          {
            title: "Design and proposal",
            body: "Accurate production modelling, remote shading analysis, a proposal a homeowner can understand without you in the room, and integrated financing options. This is the category where the specialist tools are genuinely better than any all-in-one. See [how to choose solar proposal software](/blog/how-to-choose-solar-proposal-software).",
          },
          {
            title: "CRM and sales",
            body: "Every lead from every channel in one place, automated follow-up that fires on its own, pipeline stages that match how you actually sell, and full communication history on the contact. See [the best CRM for solar companies](/blog/best-crm-for-solar-companies).",
          },
          {
            title: "Project and install management",
            body: "Permit tracking, crew scheduling, materials, inspections, commissioning and the customer updates that come out of each. Below about ten installs a month a shared calendar and a spreadsheet genuinely cope.",
          },
          {
            title: "Accounting",
            body: "You have this already. The only question is whether job costing flows into it or is reconstructed monthly from memory.",
          },
          {
            title: "Marketing and automation",
            body: "Website, forms, missed-call text-back, review requests, nurture sequences. The category most often run by hand, which is why it is the one that silently stops. See [solar marketing automation](/blog/solar-marketing-automation).",
          },
        ],
      },

      { t: "h2", text: "Specialist stack or all-in-one?" },
      {
        t: "p",
        text: "Both work. What does not work is the accidental middle: three all-in-ones each doing 60% of the job.",
      },
      {
        t: "table",
        head: ["", "Specialist tools", "All-in-one"],
        rows: [
          ["Best at", "Each individual job", "The handoffs between jobs"],
          ["Worst at", "The seams between them", "The deepest individual features"],
          ["Suits", "Larger teams with someone owning integration", "Small and mid-size installers"],
          ["Real cost", "Licences plus integration time plus lost leads at seams", "Licence plus accepting some feature gaps"],
          ["Failure mode", "Data in four places, none authoritative", "Outgrowing one module and bolting on a fifth tool"],
        ],
      },
      {
        t: "p",
        text: "For most installers under about thirty installs a month, the honest answer is a specialist design tool plus one system covering sales, marketing and communication, with accounting where it already lives. Three logins, one seam that matters.",
      },

      { t: "h2", text: "How to actually choose" },
      {
        t: "ol",
        items: [
          "**Write your workflow down first**, from enquiry to paid. One page. Most companies have never done this and discover two arguments in the process.",
          "**Mark the seams**, as above. Your software decision is mostly about which seams you are willing to keep.",
          "**Shortlist on workflow fit, not feature count.** A feature you will not use is not an advantage, it is a training cost.",
          "**Demo with your own data.** Ask them to build your actual pipeline stages, not a generic one. See [solar sales pipeline stages](/blog/solar-sales-pipeline-stages).",
          "**Ask what happens when you leave.** Export format, who owns the data, notice period. Ask before signing, not during a dispute.",
          "**Check the mobile experience properly.** Crews and reps use phones. A tool that is excellent on desktop and unusable in a van does not get used.",
        ],
      },
      {
        t: "p",
        text: "And be honest about the migration cost. Moving a CRM is two to six weeks of disruption in a business that cannot stop taking calls. That cost is real and it should be weighed against how much the current seams are actually costing you. [How to consolidate your solar tech stack](/blog/how-to-consolidate-your-solar-tech-stack) covers doing it without losing a quarter.",
      },
      {
        t: "link",
        href: "/products",
        label: "What Volt covers",
        note: "The sales, marketing and communication layer, in one place",
      },
    ],
    faq: [
      {
        q: "What software do most solar installers use?",
        a: "Most use a specialist design and proposal tool, some form of CRM, and accounting software, with project management added as they grow. The combination varies enormously and the common factor is that it grew by accretion rather than by decision.",
      },
      {
        q: "Do I need solar-specific software?",
        a: "For design and proposals, yes, because production modelling and shading analysis are genuinely specialist. For CRM and marketing, not necessarily: what matters is whether it fits your workflow, and generic tools often fit better than badly-built industry ones.",
      },
      {
        q: "How much should solar software cost?",
        a: "Judge it against what the seams cost you. A tool that prevents two lost leads a month pays for itself many times over at solar job values, and one that adds a seam costs far more than its licence fee.",
      },
      {
        q: "Can one system really do everything?",
        a: "For sales, marketing and communication, yes, and that is where consolidation pays most. Design and accounting are usually better served by specialists, so the realistic target is three systems rather than one.",
      },
    ],
    related: [
      "best-crm-for-solar-companies",
      "how-to-consolidate-your-solar-tech-stack",
      "how-to-choose-solar-proposal-software",
    ],
  },

  {
    slug: "best-crm-for-solar-companies",
    title: "Choosing a CRM for a solar company",
    metaTitle: "Choosing a CRM for a Solar Company: What Matters",
    metaDescription:
      "What a solar CRM actually has to do, the seven features that matter, industry-specific versus generic, and the questions to ask before you migrate.",
    keyword: "best crm for solar companies",
    secondary: [
      "solar crm",
      "crm for solar installers",
      "solar sales crm",
      "crm software solar",
    ],
    excerpt:
      "Every CRM demo looks the same. Seven features separate the ones that work for solar from the ones that become an expensive contact list.",
    category: "software",
    intent: "Commercial",
    icon: "database",
    published: "2026-08-05",
    answer:
      "The best CRM for a solar company is the one that captures every lead channel automatically, fires follow-up without anybody remembering, works properly on a phone, and holds the full communication history on the contact record. Industry-specific features matter far less than whether the daily workflow actually happens inside it.",
    takeaways: [
      "A CRM nobody updates is a contact list with a monthly fee.",
      "Automatic lead capture from every channel is the feature that decides everything else.",
      "Mobile usability is not a nice-to-have when your sales team is in vans.",
      "Solar-specific is worth less than workflow fit, most of the time.",
    ],
    body: [
      {
        t: "p",
        text: "Most solar companies have bought a CRM. Rather fewer are using one. The gap between those two states is where the money is, and it is almost never closed by switching to a different product.",
      },

      { t: "h2", text: "The seven features that matter" },
      {
        t: "steps",
        items: [
          {
            title: "Automatic capture from every channel",
            body: "Web form, phone, Business Profile message, Facebook, and any lead vendor, landing in the CRM without anybody typing. If a lead source requires manual entry, that source will be under-recorded within a month and invisible within three.",
          },
          {
            title: "Automation that fires on its own",
            body: "The instant text, the follow-up sequence, the review request, the appointment reminders. A CRM where a human has to press send is not automating anything. See [the solar sales follow-up sequence](/blog/solar-sales-follow-up-sequence).",
          },
          {
            title: "A genuinely usable phone app",
            body: "Your reps are in vans and your crews are on roofs. If updating a record on a phone takes more than twenty seconds, records stop being updated, and every report you run afterwards is fiction.",
          },
          {
            title: "Complete communication history",
            body: "Calls, texts, emails and notes on one timeline against the contact. Without this, whoever picks the lead up next starts from nothing and the customer notices immediately.",
          },
          {
            title: "Pipeline stages you can define",
            body: "Solar has stages a generic CRM has never heard of: site survey, design, permit, interconnection, install, commissioning. See [solar sales pipeline stages](/blog/solar-sales-pipeline-stages).",
          },
          {
            title: "Reporting on the numbers that matter",
            body: "Speed to lead, contact rate, set rate, sat rate, close rate, and cost per sat appointment by source. If you cannot get those out, you cannot manage the channel spend.",
          },
          {
            title: "Integration with the rest of the stack",
            body: "Whatever you use for design and accounting has to connect, or somebody retypes a proposal into an invoice every week.",
          },
        ],
      },

      { t: "h2", text: "Solar-specific or generic?" },
      {
        t: "p",
        text: "Industry-specific CRMs arrive with solar pipeline stages and sometimes financing integrations already built. Generic platforms are usually more mature, cheaper and more flexible, and need configuring.",
      },
      {
        t: "table",
        head: ["", "Solar-specific", "Generic, configured"],
        rows: [
          ["Setup time", "Faster, opinions already made", "Slower, but shaped to you"],
          ["Fit", "Good if your process matches theirs", "As good as the configuration"],
          ["Maturity", "Varies, some are young products", "Usually more stable"],
          ["Cost", "Often higher per seat", "Usually lower"],
          ["Risk", "Smaller vendor, narrower market", "Generic support, less industry knowledge"],
        ],
      },
      {
        t: "p",
        text: "The honest answer is that this matters less than people expect. Pipeline stages take an afternoon to configure. The thing that decides whether a CRM works is whether the daily workflow genuinely happens inside it, and that is about usability and automation rather than about industry labels.",
      },
      {
        t: "callout",
        label: "The real test",
        text: "In the demo, ask to see a rep's phone screen at 4pm after a survey. If updating the record and triggering the next step takes more than twenty seconds on a phone, the CRM will be out of date within a month no matter what it does on a desktop.",
      },

      { t: "h2", text: "Questions to ask before you sign" },
      {
        t: "ol",
        items: [
          "**How do leads get in from each of my channels?** Get it demonstrated per channel, not described in general.",
          "**Show me an automation firing**, end to end, with the timings. Not a workflow builder screenshot.",
          "**What does the phone app actually do?** Full record access or read-only, which is far more common than vendors volunteer.",
          "**How do I get my data out?** Format, completeness, whether communication history comes too, and how long it takes.",
          "**What is the real cost at my headcount** including onboarding, add-on modules and the tier you will need in a year.",
          "**Who configures it?** Included, paid, or your problem. This is where quoted prices most often move.",
        ],
      },

      { t: "h2", text: "Before you migrate" },
      {
        t: "p",
        text: "Changing CRM is two to six weeks of disruption in a business that cannot pause its phone. Make sure the problem you have is actually the software.",
      },
      {
        t: "ul",
        items: [
          "If leads are not being captured, that is usually **integration**, not the product.",
          "If follow-up is not happening, that is usually **automation not configured**, not the product.",
          "If reports are wrong, that is usually **nobody updating records**, which a new CRM will not change.",
          "If the team refuses to use it, that is **usability or training**, and it is the one reason that genuinely does justify switching.",
        ],
      },
      {
        t: "p",
        text: "Three of those four are fixable in a fortnight without changing anything. If you do decide to move, [how to consolidate your solar tech stack](/blog/how-to-consolidate-your-solar-tech-stack) covers doing it without losing leads mid-migration, and [do solar companies need a CRM](/blog/do-solar-companies-need-a-crm) covers whether you need one at all yet.",
      },
      {
        t: "link",
        href: "/products/all-in-one-inbox",
        label: "One inbox for every channel",
        note: "The capture problem, solved first",
      },
    ],
    faq: [
      {
        q: "What is the best CRM for a small solar company?",
        a: "The one your team will actually update from a phone, with automatic lead capture and follow-up that fires without anybody remembering. For most small installers that means something simple and well-configured rather than something powerful and half-implemented.",
      },
      {
        q: "Do I need a solar-specific CRM?",
        a: "Rarely. Solar pipeline stages are configurable in almost any CRM in an afternoon. Specialist value is real in design and proposal tools, where the modelling is genuinely specialised, and much thinner in CRM.",
      },
      {
        q: "How long does a CRM migration take?",
        a: "Two to six weeks for a small installer, longer with a lot of historical data. The safest approach is to run the new system for new leads first and migrate history afterwards, so nothing arriving today falls into the gap.",
      },
    ],
    related: [
      "do-solar-companies-need-a-crm",
      "solar-crm-vs-spreadsheet",
      "best-solar-contractor-software",
    ],
  },

  {
    slug: "do-solar-companies-need-a-crm",
    title: "Do solar companies need a CRM?",
    metaTitle: "Do Solar Companies Need a CRM? An Honest Answer",
    metaDescription:
      "When a solar company genuinely needs a CRM, when a spreadsheet is still fine, the four symptoms that mean you have waited too long, and what it costs.",
    keyword: "do solar companies need a crm",
    secondary: [
      "solar crm necessary",
      "when to get a crm",
      "crm for small solar company",
      "do I need a crm",
    ],
    excerpt:
      "Not every solar company needs a CRM yet. Here are the four symptoms that mean you do, and what to do first if you do not.",
    category: "software",
    intent: "Commercial",
    icon: "database",
    published: "2026-06-14",
    answer:
      "A solar company needs a CRM once it is handling more than about twenty leads a month, has more than one person touching a lead, or cannot say from memory which enquiries are outstanding. Below that a spreadsheet and a disciplined follow-up habit genuinely work, and a CRM nobody updates is worse than the spreadsheet it replaced.",
    takeaways: [
      "Under twenty leads a month with one person selling, a spreadsheet is defensible.",
      "Two people touching one lead is the real threshold, not volume.",
      "Four symptoms mean you are already past it, and most companies have three of them.",
      "The follow-up habit has to exist first. Software does not create discipline.",
    ],
    body: [
      {
        t: "p",
        text: "The software industry's answer to this question is always yes, immediately, at the highest tier. The honest answer is that it depends on two things: how many leads you handle, and how many people touch one.",
      },

      { t: "h2", text: "When you genuinely do not need one yet" },
      {
        t: "p",
        text: "A one-person operation doing eight installs a month, where the owner sells every job and remembers every conversation, does not need a CRM. It needs a reliable follow-up habit and somewhere to write things down. A spreadsheet plus calendar reminders does that, and it does it without a migration, a subscription or a training problem.",
      },
      {
        t: "p",
        text: "What it does need, and this is not optional at any size, is automated first response. That is a separate thing from a CRM and it can be added on its own. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },

      { t: "h2", text: "The four symptoms" },
      {
        t: "table",
        head: ["Symptom", "What it means"],
        rows: [
          [
            "You cannot say which leads are outstanding",
            "The list exists in somebody's head and it is already wrong",
          ],
          [
            "Two people have called the same customer",
            "There is no shared record. The customer noticed, even if nobody told you",
          ],
          [
            "You cannot say where last month's jobs came from",
            "Channel spend is being set by feel, which is expensive at solar job values",
          ],
          [
            "Follow-up stops when somebody is busy",
            "The process depends on attention, and attention is the thing you have least of",
          ],
        ],
      },
      {
        t: "p",
        text: "Most owners asking this question have three of the four. The third one is the expensive one: without source attribution you cannot compute cost per sat appointment, and without that your marketing budget is allocated on anecdote. See [how much do solar leads cost](/blog/how-much-do-solar-leads-cost).",
      },

      { t: "h2", text: "What a CRM changes, and what it does not" },
      {
        t: "steps",
        items: [
          {
            title: "It changes: nothing gets forgotten",
            body: "Every lead has a state and a next action. Nothing depends on somebody remembering on a Friday.",
          },
          {
            title: "It changes: follow-up happens whether anyone is free or not",
            body: "The texts and emails fire on a timer. This alone usually justifies the cost at solar job values.",
          },
          {
            title: "It changes: you can see the numbers",
            body: "Source, speed to lead, set rate, sat rate, close rate. You cannot manage what you cannot count.",
          },
          {
            title: "It does not change: discipline",
            body: "If nobody updates records, the CRM produces confident, wrong reports, which is worse than a spreadsheet everybody knows is incomplete.",
          },
          {
            title: "It does not change: your sales process",
            body: "A CRM makes an existing process reliable. It does not invent one, and the demo that implies otherwise is selling something else.",
          },
        ],
      },
      {
        t: "callout",
        label: "Do this first",
        text: "Before buying anything, write down your follow-up process on one page: what happens at minute five, day two, day seven, day fourteen. If you cannot write it, a CRM will not fix it, it will simply automate the absence of one.",
      },

      { t: "h2", text: "The cost, honestly" },
      {
        t: "ul",
        items: [
          "**The subscription**, which is usually the smallest part.",
          "**Setup and configuration**, often quoted as included and rarely actually included.",
          "**Two to six weeks of disruption** while the team learns it and things slip.",
          "**Somebody owning it.** A CRM with no owner drifts out of date within a quarter, and this is the cost nobody budgets.",
        ],
      },
      {
        t: "p",
        text: "Against that, weigh the realistic value: at typical solar job values, recovering two leads a month that would otherwise have been forgotten covers the entire cost several times over. That is a low bar, and a properly configured system clears it easily. The version that fails is the one bought and then not configured.",
      },

      { t: "h2", text: "The middle path" },
      {
        t: "p",
        text: "There is an option between a spreadsheet and a full CRM migration, and it is the right one for a lot of installers: automate the capture and the first response, keep the rest manual for now.",
      },
      {
        t: "p",
        text: "Every lead lands in one inbox. An automatic text goes out in seconds. Missed calls get a text back. Review requests fire after each install. None of that requires a sales team to change how they work, and it addresses the leaks that actually cost money. The pipeline management can follow when the volume genuinely demands it. See [solar CRM vs spreadsheet](/blog/solar-crm-vs-spreadsheet) for where the line sits.",
      },
      {
        t: "link",
        href: "/blog/best-crm-for-solar-companies",
        label: "Choosing a CRM for a solar company",
        note: "When you decide the answer is yes",
      },
    ],
    faq: [
      {
        q: "At what point does a solar company need a CRM?",
        a: "Around twenty leads a month, or as soon as more than one person touches a lead. The second threshold matters more than the first: shared records are the real problem a CRM solves.",
      },
      {
        q: "Can I run a solar company on spreadsheets?",
        a: "Up to a point, and plenty do. What spreadsheets cannot do is fire follow-up automatically or capture leads from five channels, so the practical answer is a spreadsheet plus automated first response rather than a spreadsheet alone.",
      },
      {
        q: "What happens if I get a CRM too early?",
        a: "You pay for something nobody updates, reports become confidently wrong, and the team concludes that CRMs do not work. That belief is expensive later, which is why the middle path is often the better first move.",
      },
    ],
    related: [
      "solar-crm-vs-spreadsheet",
      "best-crm-for-solar-companies",
      "solar-company-kpis-to-track",
    ],
  },

  {
    slug: "solar-marketing-automation",
    title: "Solar marketing automation that earns its keep",
    metaTitle: "Solar Marketing Automation That Earns Its Keep",
    metaDescription:
      "The seven automations a solar company should build first, in order of return, plus the ones that waste money and how to tell when they break.",
    keyword: "solar marketing automation",
    secondary: [
      "marketing automation solar",
      "solar automation",
      "automated marketing contractors",
      "solar workflow automation",
    ],
    excerpt:
      "Seven automations in order of return. The first three pay for the whole system, and the last two are where most companies start.",
    category: "software",
    intent: "Informational",
    icon: "grid",
    published: "2026-05-09",
    answer:
      "The solar marketing automations worth building, in order of return, are: instant response to new enquiries, missed-call text-back, the multi-touch follow-up sequence, review requests after commissioning, appointment reminders, long-term nurture, and database reactivation. The first three typically pay for an entire system on their own.",
    takeaways: [
      "Build in order of return. Most companies start with a newsletter, which is sixth at best.",
      "Instant response and missed-call text-back are the two with the fastest payback.",
      "Every automation needs a monitor. Silent failure is the default failure mode.",
      "Automate the sending, never the judgement.",
    ],
    body: [
      {
        t: "p",
        text: "Marketing automation in solar is usually sold as sophistication and bought as a newsletter. The version that makes money is duller than that: a handful of messages that go out on time, every time, whether or not the office is busy.",
      },

      { t: "h2", text: "The seven, in order of return" },
      {
        t: "table",
        head: ["#", "Automation", "Typical payback"],
        rows: [
          ["1", "Instant response to a new enquiry", "Immediate"],
          ["2", "Missed-call text-back", "Immediate"],
          ["3", "Multi-touch follow-up sequence", "Weeks"],
          ["4", "Review request after commissioning", "Weeks, compounding"],
          ["5", "Appointment confirmation and reminders", "Immediate, on sat rate"],
          ["6", "Long-term nurture", "Months"],
          ["7", "Database reactivation campaign", "Days, but one-off"],
        ],
      },
      {
        t: "p",
        text: "Number seven is out of order deliberately: it pays back fastest of all but it is a campaign rather than an automation, and it only works once per database. Run it early, then let the ongoing nurture do the work. See [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads).",
      },

      { t: "h2", text: "Building the first three" },
      {
        t: "steps",
        items: [
          {
            title: "Instant response",
            body: "Text and email out within sixty seconds of a form submission, from a named person, ending in one easy question. This is the highest-return automation available to a solar company. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
          },
          {
            title: "Missed-call text-back",
            body: "Fires on missed, busy and no-answer, from the number they dialled, within seconds. Recovers enquiries you currently never know about. See [missed call text-back for solar](/blog/missed-call-text-back-for-solar).",
          },
          {
            title: "The follow-up sequence",
            body: "Eight touches over three weeks, texts and emails automated, calls queued for a person. The automation exists to make sure the human attempts actually happen rather than to replace them.",
          },
        ],
      },
      {
        t: "callout",
        label: "Automate the sending, not the judgement",
        text: "An automated message that says the right thing at minute one is service. An automated message that pretends to be a personal reply to something the customer actually wrote is a trap: sooner or later it answers a bereavement or a complaint as though it were a new enquiry.",
      },

      { t: "h2", text: "What not to automate" },
      {
        t: "ul",
        items: [
          "**Replies to negative reviews.** Read every one, write every one. See [how to respond to negative solar reviews](/blog/how-to-respond-to-negative-solar-reviews).",
          "**Quotes and pricing.** Solar pricing depends on roof specifics that a form cannot capture, and an automated number you cannot honour is worse than no number.",
          "**Anything sounding like a person when it is not.** Acknowledgement is fine. Impersonation is not, and customers spot it.",
          "**Disqualification.** A rules engine that closes leads automatically will close good ones, and you will never know which.",
        ],
      },

      { t: "h2", text: "Monitoring, because automations fail silently" },
      {
        t: "p",
        text: "This is the part everyone skips and it is the reason automation gets a bad name. A broken workflow does not raise an alarm. It simply stops sending, and nobody notices for six weeks because nothing visibly changed.",
      },
      {
        t: "ol",
        items: [
          "**Put yourself in every sequence.** Submit a test enquiry monthly and confirm you receive every message, in order, at the right times.",
          "**Watch the volume.** If review requests dropped from forty a month to four, something broke rather than the customers changing.",
          "**Check delivery, not just sending.** Messages that send successfully and never arrive are the most common failure. See [SMS marketing for solar companies](/blog/sms-marketing-for-solar-companies).",
          "**Review the wording quarterly.** Automations outlive the offers and the people named in them. A text signed by somebody who left in March is a bad look.",
        ],
      },

      { t: "h2", text: "A realistic build order" },
      {
        t: "p",
        text: "Week one: instant response and missed-call text-back. Week two: the follow-up sequence and appointment reminders. Week three: review requests. Month two: the reactivation campaign, once, to the whole database. Month three onwards: the monthly nurture.",
      },
      {
        t: "p",
        text: "That is five weeks of setup for a system that runs for years, and the first fortnight of it carries most of the value. Everything after that is refinement.",
      },
      { t: "h2", text: "Who owns it once it is built" },
      {
        t: "p",
        text: "Automation has a quiet governance problem. It is built by whoever set it up, and then that person leaves, or moves on, and nobody else knows it exists until it breaks or embarrasses you.",
      },
      {
        t: "ul",
        items: [
          "**Write down every automation** in one place: what triggers it, what it sends, and who it comes from. One page.",
          "**Name an owner.** Somebody whose job includes the monthly test, not somebody who set it up once.",
          "**Keep the sender generic where the person might leave.** A sequence signed by an ex-employee runs for years before anyone notices.",
          "**Review after any process change.** A new pipeline stage or a new phone number silently breaks triggers built against the old ones.",
        ],
      },
      {
        t: "p",
        text: "This sounds like bureaucracy for four workflows. It is the difference between automation that quietly compounds for three years and automation that quietly stopped in March, and you will not be able to tell which you have without it.",
      },
      {
        t: "link",
        href: "/products/automated-lead-follow-up",
        label: "Automated lead follow-up",
        note: "Numbers one to three, built in",
      },
    ],
    faq: [
      {
        q: "Does marketing automation feel impersonal to customers?",
        a: "Not when it is fast, short and honest about what it is. An instant text saying a real person will call within the hour reads as responsiveness. What reads as impersonal is a designed template that arrives three days later.",
      },
      {
        q: "What is the first automation a solar company should build?",
        a: "Instant response to new enquiries, then missed-call text-back. Both are quick to build, both work outside office hours, and both address the leak that costs the most: being second to reply.",
      },
      {
        q: "How do I know if my automations are still working?",
        a: "Test them yourself monthly by submitting a real enquiry, and watch the monthly volume of each message type. Automations fail silently, so absence of complaints is not evidence that anything is sending.",
      },
    ],
    related: [
      "speed-to-lead-for-solar-companies",
      "solar-sales-follow-up-sequence",
      "best-solar-contractor-software",
    ],
  },

  {
    slug: "solar-crm-vs-spreadsheet",
    title: "Solar CRM vs spreadsheet",
    metaTitle: "Solar CRM vs Spreadsheet: Where the Line Actually Is",
    metaDescription:
      "What a spreadsheet does well for a solar company, exactly where it breaks, the four things it can never do, and a middle option between the two.",
    keyword: "solar crm vs spreadsheet",
    secondary: [
      "crm vs spreadsheet",
      "spreadsheet lead tracking",
      "excel crm contractors",
      "solar lead tracking",
    ],
    excerpt:
      "Spreadsheets are underrated and they have four hard limits. Here is exactly where the line is and what to do when you reach it.",
    category: "software",
    intent: "Commercial",
    icon: "scales",
    published: "2026-04-03",
    answer:
      "A spreadsheet works for a solar company until leads arrive from more than two channels, more than one person touches a lead, or follow-up needs to happen without somebody remembering. Those are the three hard limits. Below them a spreadsheet is faster, cheaper and more reliable than a badly implemented CRM.",
    takeaways: [
      "A spreadsheet everybody updates beats a CRM nobody updates.",
      "Three hard limits: multi-channel capture, shared access, and automated sending.",
      "The middle option is automating capture and first response while keeping the sheet.",
      "Switch when the limits bite, not when a salesperson tells you to.",
    ],
    body: [
      {
        t: "p",
        text: "Spreadsheets get sneered at in software marketing, which is unfair. A well-kept sheet is instant, free, flexible and understood by everybody. Plenty of solar companies run profitably on one for years.",
      },
      {
        t: "p",
        text: "What is worth being precise about is where it stops working, because the failure is gradual and by the time it is obvious you have usually lost a quarter of leads to it.",
      },

      { t: "h2", text: "What a spreadsheet genuinely does well" },
      {
        t: "ul",
        items: [
          "**It is immediate.** No configuration, no onboarding, no vendor.",
          "**Everyone can use it.** Nobody needs training to read a table.",
          "**It changes in seconds.** A new column is a decision, not a support ticket.",
          "**It is honest.** Nobody believes a spreadsheet is complete, so nobody trusts a report built on one more than it deserves.",
        ],
      },
      {
        t: "p",
        text: "That last point is underrated. A CRM produces confident reports from incomplete data. A spreadsheet produces obviously incomplete reports from incomplete data, and the second is safer to make decisions with.",
      },

      { t: "h2", text: "The three hard limits" },
      {
        t: "steps",
        items: [
          {
            title: "Multi-channel capture",
            body: "Once leads arrive from a web form, the phone, a Business Profile message, Facebook and a vendor portal, somebody has to type them all in. That person will miss some, always. Whichever channel is most annoying to enter will look like it produces the fewest leads.",
          },
          {
            title: "Shared access and ownership",
            body: "Two people in one sheet produces overwritten rows, two calls to the same customer, and an argument. There is no record of who did what, and customers notice long before you do.",
          },
          {
            title: "Automated sending",
            body: "A spreadsheet cannot text somebody at minute one or email them on day seven. It can remind a human to, which works until the week the crew is behind. This is the limit that costs the most.",
          },
        ],
      },
      {
        t: "callout",
        label: "The fourth limit, less obvious",
        text: "Communication history. A spreadsheet row cannot hold the thread of texts, calls and emails, so whoever picks a lead up next starts from nothing. In a long solar decision window this is how a warm conversation gets restarted from scratch, in front of the customer.",
      },

      { t: "h2", text: "A comparison that is actually fair" },
      {
        t: "table",
        head: ["", "Spreadsheet", "CRM"],
        rows: [
          ["Cost", "Free", "Subscription plus setup plus an owner"],
          ["Time to start", "Ten minutes", "Two to six weeks"],
          ["Multi-channel capture", "Manual, and it will slip", "Automatic, if configured"],
          ["Automated follow-up", "None", "The main reason to have one"],
          ["Shared use", "Poor past two people", "Designed for it"],
          ["Communication history", "None", "Complete, on the record"],
          ["Reporting", "As good as the data entry", "Also as good as the data entry"],
          ["Failure mode", "Visibly incomplete", "Invisibly incomplete"],
        ],
      },

      { t: "h2", text: "The middle option" },
      {
        t: "p",
        text: "You do not have to choose between a manual sheet and a full CRM migration. The two limits that cost real money, capture and automated sending, can be fixed on their own.",
      },
      {
        t: "ol",
        items: [
          "**One inbox for every channel**, so nothing depends on somebody retyping. See the [all-in-one inbox](/products/all-in-one-inbox).",
          "**Instant response and missed-call text-back**, running automatically.",
          "**The follow-up sequence automated**, with calls queued for a person.",
          "**The spreadsheet kept**, for pipeline, until volume genuinely demands more.",
        ],
      },
      {
        t: "p",
        text: "That takes days rather than weeks, changes nothing about how the sales team works, and removes the two leaks that are actually costing you jobs. Pipeline management can follow later. See [do solar companies need a CRM](/blog/do-solar-companies-need-a-crm).",
      },

      { t: "h2", text: "When to actually switch" },
      {
        t: "p",
        text: "Switch when two or more of the three limits are biting weekly, not when a demo is persuasive. In practice that is usually around twenty leads a month with two or more people selling.",
      },
      {
        t: "p",
        text: "And when you do, migrate carefully: run the new system for new leads first and bring history over afterwards, so nothing arriving today falls into the gap between the two. See [choosing a CRM for a solar company](/blog/best-crm-for-solar-companies).",
      },
      { t: "h2", text: "Making the spreadsheet as good as it can be" },
      {
        t: "p",
        text: "If you are staying on a sheet for now, three changes make it dramatically more useful and take about twenty minutes.",
      },
      {
        t: "ol",
        items: [
          "**Add a next action date column**, and sort by it every morning. This single column is most of what a CRM does for a one-person sales operation.",
          "**Add a source column with a dropdown**, not free text. Free text produces Google, google, GOOGLE and Google Ads as four separate sources and destroys the reporting you were trying to build.",
          "**Add a loss reason column**, also a dropdown. Six months of these is the most useful sales data a small installer can collect, and it costs nothing.",
        ],
      },
      {
        t: "p",
        text: "Do those three and the sheet will carry you considerably further than most people expect, which is the point: the decision to move should be forced by the hard limits above, not by the sheet being untidy.",
      },
      {
        t: "quote",
        text: "A spreadsheet everybody updates beats a CRM nobody updates, every single time.",
      },
    ],
    faq: [
      {
        q: "Is a spreadsheet good enough for a small solar company?",
        a: "For pipeline tracking with one person selling and under about twenty leads a month, yes. What it cannot do is capture leads from five channels or send follow-up on time, and those two gaps can be filled without abandoning the sheet.",
      },
      {
        q: "What should be in a solar lead spreadsheet?",
        a: "Date, source, name, address, phone, bill range, stage, last contact date, next action date and a notes column. The two date columns are what make it a working tool rather than a list.",
      },
      {
        q: "How do I move from a spreadsheet to a CRM?",
        a: "Clean the sheet first, since bad data imported is bad data forever. Then run the CRM for new leads only for two weeks, and import history once the new process is stable. Never cut over both at once.",
      },
    ],
    related: [
      "do-solar-companies-need-a-crm",
      "best-crm-for-solar-companies",
      "solar-sales-pipeline-stages",
    ],
  },

  {
    slug: "solar-sales-pipeline-stages",
    title: "Solar sales pipeline stages",
    metaTitle: "Solar Sales Pipeline Stages That Reflect Reality",
    metaDescription:
      "A pipeline built for how solar actually sells: eleven stages from enquiry to commissioned, what each means, and the exit criteria that keep it honest.",
    keyword: "solar sales pipeline stages",
    secondary: [
      "solar pipeline",
      "sales stages solar",
      "solar sales process",
      "pipeline management solar",
    ],
    excerpt:
      "Generic CRM stages do not fit solar, because half the timeline is waiting on a utility. Eleven stages that match what actually happens.",
    category: "software",
    intent: "Informational",
    icon: "funnel",
    published: "2026-03-06",
    answer:
      "A solar sales pipeline needs eleven stages: new enquiry, contacted, qualified, appointment set, appointment sat, proposal sent, verbal agreement, contract signed, permitting, installed and commissioned. The stages after signature matter because solar revenue is not recognised at signature and a third of problems happen in the waiting.",
    takeaways: [
      "Solar pipelines must continue past the signature, unlike most sales pipelines.",
      "Every stage needs an exit criterion, or the pipeline becomes a wish list.",
      "Separate appointment set from appointment sat. They are different numbers.",
      "Permitting and interconnection deserve their own stages because they are where deals die.",
    ],
    body: [
      {
        t: "p",
        text: "A generic CRM ships with stages like Lead, Qualified, Proposal, Negotiation, Closed. That works for software. It does not describe a business where the customer signs in March and the system is switched on in June, and where most of the anxiety lives in between.",
      },

      { t: "h2", text: "The eleven stages" },
      {
        t: "table",
        head: ["Stage", "Means", "Exits when"],
        rows: [
          ["New enquiry", "Arrived, nobody has spoken to them", "First outbound attempt made"],
          ["Contacted", "Two-way contact established", "Qualification questions answered"],
          ["Qualified", "Owns the property, viable roof, viable bill", "Appointment booked"],
          ["Appointment set", "Booked, in both calendars", "The appointment happens"],
          ["Appointment sat", "Survey or consultation completed", "Proposal issued"],
          ["Proposal sent", "Numbers with the customer", "A yes, a no, or a stall"],
          ["Verbal agreement", "They said yes, nothing signed", "Contract signed"],
          ["Contract signed", "Paperwork done, deposit taken", "Permit submitted"],
          ["Permitting", "Waiting on authority or utility", "Approved"],
          ["Installed", "Panels on the roof", "Inspection and interconnection done"],
          ["Commissioned", "Producing, customer handed over", "Review requested, job closed"],
        ],
      },
      {
        t: "p",
        text: "Eleven looks like a lot until you notice that the last four are where every customer complaint about communication comes from. Tracking them is what lets you send updates nobody had to be asked for.",
      },

      { t: "h2", text: "Why set and sat must be separate" },
      {
        t: "p",
        text: "If they are one stage, a booker with a high set rate and a terrible sat rate looks like your best performer. Separating them exposes the difference, and the difference is usually somebody booking appointments where the co-owner was never going to attend.",
      },
      {
        t: "p",
        text: "It also gives you cost per sat appointment by source, which is the only fair way to compare lead channels. See [cutting the solar appointment no-show rate](/blog/solar-appointment-no-show-rate) and [how much do solar leads cost](/blog/how-much-do-solar-leads-cost).",
      },
      {
        t: "callout",
        label: "Exit criteria, not feelings",
        text: "Every stage needs an objective exit test. Proposal sent means a document reached them, not that you talked about numbers. Without exit criteria, deals sit in Verbal Agreement for four months because nobody wants to move them backwards.",
      },

      { t: "h2", text: "Handling the stall" },
      {
        t: "p",
        text: "The most common pipeline distortion in solar is a deal parked in Proposal Sent indefinitely. It flatters the forecast and hides the fact that nothing is happening.",
      },
      {
        t: "ol",
        items: [
          "**Set a maximum age per stage.** Proposal Sent for more than thirty days is not a live deal.",
          "**Move it out, do not delete it.** It goes to nurture, on a monthly touch. See [solar lead nurturing](/blog/solar-lead-nurturing).",
          "**Record the reason.** Price, timing, spouse, competitor, roof. Six months of these tell you what to fix.",
          "**Report on stage age**, not just stage counts. A pipeline full of ninety-day-old proposals is not a pipeline.",
        ],
      },

      { t: "h2", text: "The stages after signature" },
      {
        t: "p",
        text: "Most sales pipelines end at the signature. In solar that is roughly halfway, and the second half is where the reviews get decided.",
      },
      {
        t: "ul",
        items: [
          "**Permitting** is where the timeline becomes unpredictable and the customer starts wondering whether anything is happening.",
          "**Interconnection** is outside your control and inside your reputation. Customers do not distinguish.",
          "**Installed but not commissioned** is the single most common source of a bad review, because it looks finished and is not producing.",
          "**Commissioned** is the trigger for the review request, two to six weeks later. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
        ],
      },
      {
        t: "p",
        text: "Each of those stages should fire a customer update automatically. A homeowner who hears nothing for five weeks assumes they have been forgotten, and they are usually right.",
      },

      { t: "h2", text: "Keeping it usable" },
      {
        t: "p",
        text: "Eleven stages is the maximum a sales team will maintain. Anything more and records stop being updated, which makes every report downstream wrong.",
      },
      {
        t: "p",
        text: "If you are tempted to add a twelfth, ask what decision it changes. A stage that does not change anyone's next action is a label, and labels are what turn a pipeline into a spreadsheet with worse ergonomics. See [solar company KPIs to track](/blog/solar-company-kpis-to-track) for what to measure across these stages.",
      },
      { t: "h2", text: "Reading a pipeline properly" },
      {
        t: "p",
        text: "Once the stages are right, three views tell you almost everything about the health of the business, and none of them is the total pipeline value that most dashboards lead with.",
      },
      {
        t: "table",
        head: ["View", "What it exposes"],
        rows: [
          [
            "Conversion rate between adjacent stages",
            "Exactly where deals are being lost, rather than that they are",
          ],
          [
            "Average days in each stage",
            "Where the process is slow. Usually proposal to signature",
          ],
          [
            "Deals older than the stage maximum",
            "The forecast inflation nobody wants to look at",
          ],
        ],
      },
      {
        t: "p",
        text: "Total pipeline value is the number most likely to be quoted and least likely to be true, because it counts every stalled proposal at full value. The three above are harder to look at and considerably more useful.",
      },
      {
        t: "link",
        href: "/blog/best-crm-for-solar-companies",
        label: "Choosing a CRM for a solar company",
        note: "Where these stages have to live",
      },
    ],
    faq: [
      {
        q: "How many pipeline stages should a solar company have?",
        a: "Around eleven, covering enquiry through to commissioning. Fewer loses the post-signature visibility that solar needs; more than that and the team stops updating records, which makes everything downstream unreliable.",
      },
      {
        q: "Should lost deals be deleted from the pipeline?",
        a: "Never deleted. Moved to a nurture status with the loss reason recorded. Solar deals lost on timing frequently return, and the loss reasons are the most useful sales data you will collect.",
      },
      {
        q: "What is the difference between appointment set and appointment sat?",
        a: "Set means booked, sat means it actually happened. Keeping them separate exposes bookers who fill diaries with appointments that never hold, and it is required to calculate cost per sat appointment.",
      },
    ],
    related: [
      "solar-company-kpis-to-track",
      "best-crm-for-solar-companies",
      "solar-appointment-no-show-rate",
    ],
  },

  {
    slug: "how-to-choose-solar-proposal-software",
    title: "How to choose solar proposal software",
    metaTitle: "How to Choose Solar Proposal Software",
    metaDescription:
      "What actually matters in solar proposal software: modelling accuracy, remote shading, financing integration, speed to produce, and what customers see.",
    keyword: "how to choose solar proposal software",
    secondary: [
      "solar proposal software",
      "solar design software",
      "solar quoting software",
      "proposal tool solar",
    ],
    excerpt:
      "Proposal software is judged on the wrong things in demos. Six criteria that predict whether it will still be in use in a year.",
    category: "software",
    intent: "Commercial",
    icon: "grid",
    published: "2026-02-18",
    answer:
      "Choose solar proposal software on six criteria: production modelling accuracy, remote shading analysis quality, how long a proposal takes to produce, whether financing options are built in, what the customer actually receives, and whether it connects to your CRM. Visual polish in a demo predicts very little about any of them.",
    takeaways: [
      "Accuracy first. A proposal that over-promises savings becomes a bad review in year two.",
      "Time-to-proposal matters more than feature count when speed to lead decides the deal.",
      "Test it on your three most awkward roofs, not on the demo house.",
      "The customer-facing output is the actual product. Judge that, not the admin screen.",
    ],
    body: [
      {
        t: "p",
        text: "This is the one software category where solar-specific tools genuinely beat anything general purpose, because production modelling and shading analysis are real engineering rather than configuration. Which makes choosing well worth the effort.",
      },

      { t: "h2", text: "The six criteria" },
      {
        t: "steps",
        items: [
          {
            title: "Production modelling accuracy",
            body: "The most important and the least demonstrable in a sales call. Ask for modelled versus actual production data on systems in your region, and compare against your own commissioned systems if you have the monitoring data. Over-modelling is the root of most savings complaints.",
          },
          {
            title: "Remote shading analysis",
            body: "How good is it without a site visit, and how often does the site visit contradict it. This decides whether you can quote before driving, which changes your whole sales economics.",
          },
          {
            title: "Time to produce a proposal",
            body: "Measured properly: an average roof, by a normal person, from address to a document ready to send. Under fifteen minutes changes what is possible in a first call. An hour does not.",
          },
          {
            title: "Financing integration",
            body: "If most of your jobs are financed, having lenders built in matters more than almost any design feature. A proposal that cannot show a monthly payment is only half a proposal.",
          },
          {
            title: "What the customer receives",
            body: "Open the actual output on a phone. Is it comprehensible to somebody with no solar knowledge? Does it survive being forwarded to a spouse who was not at the meeting? This is the product.",
          },
          {
            title: "Integration with your CRM",
            body: "Proposal sent should update the pipeline without anybody retyping. See [solar sales pipeline stages](/blog/solar-sales-pipeline-stages).",
          },
        ],
      },

      { t: "h2", text: "How to test it properly" },
      {
        t: "p",
        text: "Demos use a clean south-facing roof with no obstructions, because that is what the software is best at. That tells you nothing about your Tuesday.",
      },
      {
        t: "table",
        head: ["Test", "What it reveals"],
        rows: [
          ["Your three most awkward recent roofs", "How it handles dormers, hips, chimneys and odd pitches"],
          ["A heavily shaded property", "Whether the shading model is usable or decorative"],
          ["A system you installed last year", "Modelled versus actual. The single most useful test"],
          ["A proposal built by your slowest user", "Real time-to-proposal, not the demo operator's"],
          ["The output on an old phone", "What most customers actually see"],
        ],
      },
      {
        t: "callout",
        label: "The one test that matters most",
        text: "Model a system you installed a year ago and compare against its real production. If the software over-predicts by a wide margin, every proposal you send with it is a future complaint about savings, and those complaints become reviews.",
      },

      { t: "h2", text: "Where demos mislead" },
      {
        t: "ul",
        items: [
          "**Visual polish.** A beautiful 3D render does not improve modelling accuracy and customers care about the monthly number.",
          "**Feature count.** Features you will not use are training cost, not value.",
          "**The demo operator's speed.** They have built ten thousand proposals. Time your own team instead.",
          "**Integration marketing.** Integrates with is not the same as syncs the fields you need. Ask which fields, in which direction.",
          "**Per-proposal pricing sounding cheap.** Multiply by your real monthly volume including the proposals that go nowhere.",
        ],
      },

      { t: "h2", text: "Pricing models" },
      {
        t: "p",
        text: "Three common shapes, and the right one depends entirely on your volume and your close rate.",
      },
      {
        t: "ol",
        items: [
          "**Per seat.** Predictable, favours high volume per user, punishes occasional users.",
          "**Per proposal.** Feels fair and gets expensive if your close rate is low, because you pay for every proposal that goes nowhere.",
          "**Flat platform fee.** Usually suits larger teams, and usually comes with a longer commitment.",
        ],
      },
      {
        t: "p",
        text: "Work out your cost per closed job under each model at your actual volumes, including the proposals that do not convert. The ranking often reverses once you include those.",
      },
      {
        t: "p",
        text: "And remember this tool sits alongside the rest of your stack rather than replacing it. See [the best solar contractor software](/blog/best-solar-contractor-software) for how the categories fit together.",
      },
      { t: "h2", text: "The proposal itself matters more than the software" },
      {
        t: "p",
        text: "Whatever tool you choose, the document it produces is doing the selling in a room you are not in, because the person who has to agree is often not the person you met. Four things decide whether it survives that.",
      },
      {
        t: "ul",
        items: [
          "**One page at the front** with system size, cost, annual saving, payback and the monthly payment if financed. Everything else is an appendix.",
          "**Plain language.** A homeowner should not need to know what a string inverter is to understand the decision.",
          "**Honest production figures.** Under-promising costs you a small number of deals; over-promising costs you reviews for a decade.",
          "**Something that shows you saw their roof**, not a generic render. A photo of their actual property is worth more than any modelling diagram.",
        ],
      },
      {
        t: "p",
        text: "If your current proposal fails those four, changing software will not fix it. Fix the document first, then judge whether the tool is the constraint.",
      },
      {
        t: "link",
        href: "/blog/how-to-consolidate-your-solar-tech-stack",
        label: "How to consolidate your solar tech stack",
        note: "Where the proposal tool should and should not stop",
      },
    ],
    faq: [
      {
        q: "Do I need solar design software if I subcontract design?",
        a: "You still need something that produces a customer-facing proposal quickly, because speed in the first conversation matters. That can be a lighter tool than a full design platform if the engineering happens elsewhere.",
      },
      {
        q: "How accurate is remote shading analysis?",
        a: "Good tools are close enough to quote from on straightforward roofs, and all of them struggle with heavy tree cover and complex geometry. Test with your own difficult properties before relying on it to skip site visits.",
      },
      {
        q: "Should the proposal show financing?",
        a: "If most of your jobs are financed, yes, because the monthly payment is the number the customer is actually deciding on. A proposal showing only the capital cost makes the decision harder than it needs to be.",
      },
    ],
    related: [
      "best-solar-contractor-software",
      "how-to-consolidate-your-solar-tech-stack",
      "solar-sales-pipeline-stages",
    ],
  },

  {
    slug: "how-to-consolidate-your-solar-tech-stack",
    title: "How to consolidate your solar tech stack",
    metaTitle: "How to Consolidate Your Solar Tech Stack Safely",
    metaDescription:
      "How to go from nine logins to three without losing leads mid-migration: the audit, the order of operations, and what to keep separate on purpose.",
    keyword: "how to consolidate your solar tech stack",
    secondary: [
      "solar tech stack",
      "consolidate software",
      "reduce software tools",
      "solar software integration",
    ],
    excerpt:
      "Nine tools, each doing 60% of a job, with a person retyping between them. Here is how to get to three without losing a quarter.",
    category: "software",
    intent: "Informational",
    icon: "grid",
    published: "2026-01-21",
    answer:
      "Consolidate a solar tech stack by auditing every tool against the workflow it serves, identifying the seams where humans retype data, and collapsing the sales, marketing and communication tools first. Keep design and accounting separate. Migrate new leads before historical data so nothing arriving today falls into the gap.",
    takeaways: [
      "Audit by workflow, not by tool. The question is which seams you are removing.",
      "Sales, marketing and communication is the cluster worth collapsing first.",
      "Design and accounting should usually stay specialist.",
      "Never cut over everything at once. New leads first, history second.",
    ],
    body: [
      {
        t: "p",
        text: "Nobody chooses nine tools. They accumulate: a form builder because the site needed one, a texting app because the crew needed one, a review tool after a bad month, a CRM after a lost lead. Each was reasonable, and together they produce a business where somebody retypes a customer's details four times.",
      },

      { t: "h2", text: "The audit" },
      {
        t: "p",
        text: "List every tool with a monthly fee, then add the free ones, which are usually where the worst seams live. For each, write down four things.",
      },
      {
        t: "table",
        head: ["Column", "Why it matters"],
        rows: [
          ["What it does", "In one sentence. If it takes three, that is a finding"],
          ["Who uses it", "Tools used by one person who left are common"],
          ["What data it holds", "This is what has to move, or be lost"],
          ["What it connects to", "Nothing, usually. That is the seam"],
        ],
      },
      {
        t: "p",
        text: "Then draw the workflow from enquiry to paid invoice across the top and mark every point where a human moves data between two tools. Those marks are the actual problem. The number of logins is a symptom.",
      },

      { t: "h2", text: "What to collapse and what to keep" },
      {
        t: "ul",
        items: [
          "**Collapse: sales, marketing and communication.** Forms, texting, email, calls, review requests, follow-up, pipeline. These share one dataset, the customer, and separating them is what creates most of the seams.",
          "**Keep: design and proposal.** Genuinely specialist. See [how to choose solar proposal software](/blog/how-to-choose-solar-proposal-software).",
          "**Keep: accounting.** It already works and your accountant knows it.",
          "**Decide case by case: project management.** Worth collapsing in if your volume is modest, worth keeping separate if install operations are complex.",
        ],
      },
      {
        t: "callout",
        label: "The target",
        text: "Three systems for most installers: one for design, one for sales and marketing and communication, one for accounting. Two seams, both of which can be automated. That is a realistic destination, unlike one system for everything.",
      },

      { t: "h2", text: "Migrating without losing a quarter" },
      {
        t: "steps",
        items: [
          {
            title: "Clean the data first",
            body: "Deduplicate, fix phone formats, remove test records. Bad data migrated is bad data permanently, and it is much harder to clean afterwards.",
          },
          {
            title: "Point new leads at the new system",
            body: "Before touching history. From day one, every new enquiry lands in the new place. The old system keeps running for existing deals.",
          },
          {
            title: "Run both for a fortnight",
            body: "Uncomfortable and necessary. This is when you find the automation nobody documented and the report somebody in accounts depends on.",
          },
          {
            title: "Migrate history in batches",
            body: "Active deals first, then the last twelve months, then the archive. Verify each batch before the next. Communication history often does not come across, so check.",
          },
          {
            title: "Keep read access to the old system",
            body: "For at least three months after cutover, and export a full backup before the contract ends. Access disappears the day billing stops.",
          },
        ],
      },

      { t: "h2", text: "The mistakes that cost the most" },
      {
        t: "ol",
        items: [
          "**Cutting over everything on the same day.** Something breaks, and it breaks while leads are arriving.",
          "**Migrating during your busy season.** Do it in your quietest month, deliberately.",
          "**Forgetting the integrations nobody documented.** The Zap somebody built in 2023 that emails the scheduler is load-bearing and invisible.",
          "**Not exporting before cancelling.** The day the subscription ends, the data is gone. Export first, cancel second.",
          "**Assuming communication history transfers.** Contacts usually migrate; the text and call threads against them frequently do not.",
        ],
      },

      { t: "h2", text: "What consolidation is actually worth" },
      {
        t: "p",
        text: "The subscription saving is the smallest part and the one people quote. The real returns are elsewhere: leads that stop falling between systems, follow-up that fires because it lives with the data, and reports that are true because there is one source of truth rather than four.",
      },
      {
        t: "p",
        text: "At solar job values, one recovered lead a month pays for most stacks several times over. That is the number to put against the migration cost, not the difference between two subscription totals.",
      },
      { t: "h2", text: "What to do if you cannot migrate yet" },
      {
        t: "p",
        text: "Sometimes the migration is genuinely the wrong move this year: peak season, a contract with eight months left, or nobody with the time to run it. The seams can still be narrowed without replacing anything.",
      },
      {
        t: "ol",
        items: [
          "**Automate the worst seam first.** Usually form to CRM, or CRM to texting. One connection removes most of the retyping.",
          "**Pick one source of truth** and say so out loud. When two systems disagree, everybody knows which one wins.",
          "**Stop the bleeding at capture.** Get every channel landing in one inbox even if the rest stays where it is. See [choosing a CRM for a solar company](/blog/best-crm-for-solar-companies).",
          "**Document the undocumented integrations** now, while the person who built them still works here.",
          "**Diarise the migration** for your quietest month, with a date. A consolidation with no date does not happen.",
        ],
      },
      {
        t: "link",
        href: "/pricing",
        label: "What the Volt system covers",
        note: "The sales, marketing and communication cluster, in one place",
      },
    ],
    faq: [
      {
        q: "How many software tools should a solar company have?",
        a: "Around three for most installers: design and proposal, sales and marketing and communication, and accounting. The number matters less than how many places a human has to retype the same customer.",
      },
      {
        q: "When is the best time to migrate systems?",
        a: "Your quietest month, deliberately chosen, never during peak install season. Allow a fortnight of running both systems in parallel, and expect the first week to be worse than planned.",
      },
      {
        q: "What usually goes wrong in a migration?",
        a: "Undocumented integrations breaking, communication history not transferring, and cutting over everything at once. All three are avoided by moving new leads first and keeping the old system readable for three months.",
      },
    ],
    related: [
      "best-solar-contractor-software",
      "best-crm-for-solar-companies",
      "solar-marketing-automation",
    ],
  },

  {
    slug: "solar-company-kpis-to-track",
    title: "Solar company KPIs worth tracking",
    metaTitle: "Solar Company KPIs Worth Tracking (and Which to Ignore)",
    metaDescription:
      "The twelve numbers that actually run a solar company, how often to look at each of them, and the vanity metrics that make a bad month look fine.",
    keyword: "solar company kpis to track",
    secondary: [
      "solar kpis",
      "solar metrics",
      "solar business metrics",
      "sales kpis solar",
    ],
    excerpt:
      "Twelve numbers, sorted by how often you should look at them. Most solar dashboards track thirty and act on none.",
    category: "software",
    intent: "Informational",
    icon: "chart",
    published: "2026-01-13",
    answer:
      "The KPIs that run a solar company are speed to lead, contact rate, appointment set rate, sat rate, close rate, cost per sat appointment by source, average job value, gross margin per install, review count and rating, install-to-commission time, referral rate and pipeline stage age. Twelve numbers, most of them weekly.",
    takeaways: [
      "Cost per sat appointment by source is the single most decision-changing number.",
      "Track rates between stages, not just totals. Totals move with volume and hide everything.",
      "Weekly for the sales funnel, monthly for cost and margin, quarterly for the rest.",
      "A metric nobody acts on is a cost, not an asset.",
    ],
    body: [
      {
        t: "p",
        text: "Most solar dashboards show thirty numbers and change nobody's behaviour. The useful set is smaller, and the test for inclusion is whether a bad reading would make somebody do something different this week.",
      },

      { t: "h2", text: "Weekly: the funnel" },
      {
        t: "table",
        head: ["Metric", "What it tells you", "When to act"],
        rows: [
          ["Speed to lead (median)", "Whether you are first", "Anything over 15 minutes"],
          ["Contact rate", "Whether follow-up is working", "Under 40%"],
          ["Appointment set rate", "Whether qualification is working", "Falling two weeks running"],
          ["Appointment sat rate", "Whether bookings are real", "Under 70% of set"],
          ["Close rate on sat", "Whether the sales process works", "Below your own baseline"],
        ],
      },
      {
        t: "p",
        text: "Track these as rates between stages, not as totals. Totals move with lead volume and will tell you that a terrible month was fine because you bought more leads. See [solar sales pipeline stages](/blog/solar-sales-pipeline-stages).",
      },

      { t: "h2", text: "Monthly: the money" },
      {
        t: "steps",
        items: [
          {
            title: "Cost per sat appointment, by source",
            body: "Channel spend divided by appointments that actually happened. The single most decision-changing number in a solar company, and almost nobody calculates it. See [how much do solar leads cost](/blog/how-much-do-solar-leads-cost).",
          },
          {
            title: "Cost per closed job, by source",
            body: "The same again, one stage further. This is where cheap lead sources are exposed as expensive.",
          },
          {
            title: "Average job value",
            body: "Moving up means your mix is improving or your pricing is holding. Moving down quietly is worth catching early.",
          },
          {
            title: "Gross margin per install",
            body: "Revenue minus equipment, labour and subcontract. Revenue growth on falling margin is the classic way a solar company grows itself into trouble.",
          },
        ],
      },
      {
        t: "callout",
        label: "If you add one number this quarter",
        text: "Cost per sat appointment by source. It reorders marketing budgets the first time it is calculated, because the cheapest lead source is almost never the cheapest appointment source.",
      },

      { t: "h2", text: "Monthly: reputation and delivery" },
      {
        t: "ul",
        items: [
          "**Net new reviews.** Should roughly track your install count. If it does not, the request automation has broken. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
          "**Average rating**, watched for drift rather than for a decimal point.",
          "**Install to commission days.** The gap that generates most customer complaints.",
          "**Referral rate.** Jobs originating from a past customer, as a share of all jobs. The best single proxy for whether customers are actually happy.",
          "**Pipeline stage age.** How long deals sit. A pipeline full of ninety-day-old proposals is not a pipeline.",
        ],
      },

      { t: "h2", text: "What to stop tracking" },
      {
        t: "ol",
        items: [
          "**Total leads.** Meaningless without the rates underneath it, and it is the number most often used to declare a good month.",
          "**Website visits.** Sessions do not pay wages. Track enquiries and the enquiry rate instead.",
          "**Social media followers.** No demonstrated relationship to solar revenue at installer scale.",
          "**Email open rates.** Increasingly unreliable to measure and not worth a decision.",
          "**Quotes issued.** High quote volume with a low close rate is a cost, not an achievement.",
        ],
      },

      { t: "h2", text: "Making the numbers exist at all" },
      {
        t: "p",
        text: "Most of these require one thing: every lead has a source, recorded automatically, and it survives into the appointment and job record. If source is typed by hand, it will be blank or wrong for a third of your leads and every per-source number above becomes a guess.",
      },
      {
        t: "p",
        text: "That is a systems requirement rather than a reporting one, which is why it belongs in the software conversation. See [choosing a CRM for a solar company](/blog/best-crm-for-solar-companies) and [do solar companies need a CRM](/blog/do-solar-companies-need-a-crm).",
      },
      { t: "h2", text: "Turning numbers into a weekly meeting that is short" },
      {
        t: "p",
        text: "The reason most KPI work dies is that it becomes a reporting exercise rather than a decision one. A format that survives looks like this, and it takes twenty minutes.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Five numbers on a screen, not a deck",
            body: "The weekly funnel rates, this week against the four-week average. Nothing else. A deck takes an hour to build and nobody reads it twice.",
          },
          {
            title: "One question per number",
            body: "Is this better or worse than the four-week average, and why. If nobody knows why, that is the action: find out before next week.",
          },
          {
            title: "One thing to change",
            body: "Per week, not per number. Five simultaneous changes mean you learn nothing about which one worked.",
          },
          {
            title: "Write down what you expect to happen",
            body: "Before the change. Then next week you find out whether you understood the business or got lucky, and that distinction compounds.",
          },
        ],
      },
      {
        t: "quote",
        text: "A metric nobody acts on is a cost. Twelve numbers somebody looks at beats thirty on a dashboard nobody opens.",
      },
    ],
    faq: [
      {
        q: "What is the most important KPI for a solar company?",
        a: "Cost per sat appointment by source, because it is the only number that fairly compares lead channels and it usually contradicts what cost per lead suggests. Speed to lead is the close second, because it is the cheapest to improve.",
      },
      {
        q: "How often should I review solar KPIs?",
        a: "Funnel rates weekly, cost and margin monthly, reputation and delivery monthly, and a full review quarterly. Weekly reviews of monthly metrics produce noise and bad decisions.",
      },
      {
        q: "What is a good close rate for solar?",
        a: "Industry benchmarking commonly puts lead-to-sale between 8% and 12%, with stronger operators above 15%. Your own trend matters more than the benchmark, because close rate depends heavily on lead source mix.",
      },
    ],
    related: [
      "solar-sales-pipeline-stages",
      "how-much-do-solar-leads-cost",
      "do-solar-companies-need-a-crm",
    ],
  },
] as const;
