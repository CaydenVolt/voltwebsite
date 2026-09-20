import type { Post } from "../types";

/**
 * Cluster 8: Incentives and financing, written after the federal residential
 * credit ended.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  THIS CLUSTER HAS A SHELF LIFE. Every other cluster on this blog ages
 *  gracefully. This one does not: it describes tax law that changed once in
 *  2025 and carries deadlines that expire in 2027. A stale page here is worse
 *  than no page, because a reader acts on it.
 *
 *  Re-check against the primary sources every quarter, and set `updated` when
 *  you do:
 *    IRS OBBBA FAQ   irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-...
 *    CRS IN12611     congress.gov/crs-product/IN12611
 * ──────────────────────────────────────────────────────────────────────────
 *
 * Written for installers, not homeowners. "Is there still a solar tax credit"
 * is a homeowner query, and answering it in a homeowner's voice would pull the
 * wrong traffic onto a site that sells to solar companies. Every piece here
 * answers it the way an owner needs it answered: what do I now say on a
 * kitchen table, and what do I stop saying.
 *
 * Volt is not a tax advisor and the copy never pretends otherwise. Facts are
 * attributed to the IRS or to Congress, and every article tells the reader to
 * confirm their own position with a tax professional. The expertise being sold
 * here is the sales conversation, which is a thing we can actually claim.
 */
export const INCENTIVES_POSTS: readonly Post[] = [
  {
    slug: "how-to-sell-solar-after-the-tax-credit",
    title: "How to sell solar after the federal tax credit",
    metaTitle: "Selling Solar After the Federal Tax Credit Ended",
    metaDescription:
      "The 30% residential credit ended for systems installed after 2025. What still carries it, what to stop saying, and how to rebuild the pitch around monthly cost.",
    keyword: "how to sell solar after the tax credit",
    secondary: [
      "selling solar without the tax credit",
      "solar sales after 25D",
      "solar pitch 2026",
      "solar sales objections 2026",
    ],
    excerpt:
      "The residential credit is gone for cash buyers, and still reachable through third-party ownership. The pitch has to move from a rebate to a bill comparison.",
    category: "incentives",
    intent: "Informational",
    icon: "handshake",
    pillar: true,
    published: "2026-09-20",
    answer:
      "Solar companies sell without the federal residential credit by moving the conversation from tax savings to monthly cost. Section 25D ended for systems installed after 31 December 2025, but third-party ownership still carries a 30% credit that the finance company claims and prices into the payment. The pitch changes from a rebate to a bill comparison.",
    takeaways: [
      "Section 25D is gone for any system whose installation finished after 31 December 2025.",
      "Leases and power purchase agreements still reach 30% through Section 48E, claimed by the system owner rather than the homeowner.",
      "The strongest remaining pitch is a monthly comparison: the payment against the utility bill it replaces.",
      "Anything still advertising a 30% homeowner credit is now a compliance problem, not just a stale page.",
    ],
    body: [
      {
        t: "p",
        text: "For fifteen years the federal residential credit did a large part of solar's selling. It gave a rep a number to write at the bottom of a page, it created urgency every December, and it made a payback calculation work that otherwise would not have. That tool is gone, and the companies still reaching for it are the ones whose close rate fell off a cliff in January.",
      },
      {
        t: "h2",
        text: "What actually changed on 1 January 2026?",
      },
      {
        t: "p",
        text: "The One Big Beautiful Bill Act, signed 4 July 2025, repealed Section 25D, the Residential Clean Energy Credit. The credit is not allowed for any expenditure made after 31 December 2025, and the IRS treats an expenditure as made when the original installation is completed, not when the contract was signed or the deposit taken. A job sold in November 2025 and commissioned in February 2026 does not qualify. [See the IRS guidance on the change](https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb).",
      },
      {
        t: "diagram",
        src: "/blog/fig-01-who-claims-the-credit.svg",
        caption:
          "The credit did not disappear. It changed hands, and it only reaches a homeowner through a structure where somebody else owns the system.",
      },
      {
        t: "callout",
        label: "Not tax advice",
        text: "This is a sales article written for installers, not tax guidance. The rules here are summarised from the IRS and the Congressional Research Service, and any individual homeowner's position should be confirmed with their own tax professional before it appears in a proposal.",
      },
      {
        t: "h2",
        text: "Why did the cash pitch stop working?",
      },
      {
        t: "p",
        text: "A cash or loan purchase used to carry an implicit discount of nearly a third, claimed back the following April. Take that away and the same system costs the same homeowner meaningfully more, while the monthly saving it produces has not moved. Payback periods that read as seven or eight years now read as ten or eleven, and eleven years is past the point where most homeowners stop listening.",
      },
      {
        t: "p",
        text: "The instinct is to discount your way back to the old number. Do that and you fund the whole change out of your own margin, on every job, forever. The companies handling this well have not cut price. They have changed which number is on the page.",
      },
      {
        t: "h2",
        text: "Where does the 30% still live?",
      },
      {
        t: "p",
        text: "Section 48E, the commercial investment credit, was not repealed alongside 25D. When a finance company owns the system on a homeowner's roof under a lease or a power purchase agreement, that company is the owner for tax purposes and claims the credit itself, then prices it into the monthly payment it offers. The homeowner never touches a tax form and still sees the benefit, arriving as a lower number every month instead of a refund once.",
      },
      {
        t: "p",
        text: "This is the single most important thing for a sales team to understand right now, and it is routinely explained badly. The credit did not vanish from residential solar. It moved, from the homeowner to the asset owner, and it only reaches the homeowner if you are selling a product where somebody else owns the asset.",
      },
      {
        t: "link",
        href: "/blog/section-48e-explained-for-solar-installers",
        label: "Section 48E explained for solar installers",
        note: "What the credit covers, who claims it, and the deadline attached to it.",
      },
      {
        t: "h2",
        text: "The clock you are now selling against",
      },
      {
        t: "p",
        text: "48E is not permanent either, and the dates are unforgiving. Projects that began construction before 4 July 2026 have until the end of 2030 to be placed in service. Anything beginning construction after that date has to be placed in service by 31 December 2027. That first date has already passed, which means most work being sold today sits in the accelerated lane with a hard 2027 deadline on it.",
      },
      {
        t: "p",
        text: "The five per cent cost safe harbor that developers used to rely on was largely eliminated, leaving the physical work test as the practical route to establishing that construction began. If your finance partner is claiming safe-harbored equipment, ask them to put the basis in writing.",
      },
      {
        t: "table",
        caption: "Where the 30% sits, by how the system is owned",
        head: ["Route", "Who claims the credit", "Status for a job sold today"],
        rows: [
          ["Cash purchase", "The homeowner, under 25D", "Gone. Installation had to finish by 31 Dec 2025"],
          ["Loan purchase", "The homeowner, under 25D", "Gone, on the same test"],
          ["Lease", "The finance company, under 48E", "Available, priced into the monthly payment"],
          ["Power purchase agreement", "The finance company, under 48E", "Available, priced into the rate"],
        ],
      },
      {
        t: "h2",
        text: "How do you rebuild the pitch around monthly cost?",
      },
      {
        t: "p",
        text: "A tax credit is a promise about next April. A monthly payment against a utility bill is a promise about next month, and it is the easier of the two to believe. The pitch that is working is a straight comparison of two numbers the homeowner already recognises: what they pay the utility now, and what they would pay instead.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Lead with the current bill",
            body: "Ask for twelve months of it before you quote anything. The bill is the only number in the conversation the homeowner already trusts, and every argument you make should be anchored to it.",
          },
          {
            title: "Show the replacement payment beside it",
            body: "One line against another, same units, same month. Not a twenty-year net present value. If the replacement payment is lower, that is the whole pitch and it needs no decoration.",
          },
          {
            title: "Name the escalator",
            body: "Utility rates rise and a fixed payment does not. The gap between the two lines widening over time is the real argument, and it survives the credit's absence entirely.",
          },
          {
            title: "Handle ownership honestly",
            body: "A lease is not a purchase and the homeowner should know it. Say who owns the equipment, what happens at end of term, and what happens if they sell the house. Getting this wrong creates a cancellation three weeks later.",
          },
        ],
      },
      {
        t: "h2",
        text: "What to stop saying immediately",
      },
      {
        t: "ul",
        items: [
          "**\"You will get 30% back from the government.\"** Not for a cash or loan purchase installed this year. Said to a homeowner who then files and does not receive it, this is the kind of claim that produces a complaint rather than a referral.",
          "**\"The credit might come back.\"** Nobody knows, and building a close on a guess about future legislation is not a close, it is a deferral.",
          "**\"Buy before the deadline.\"** The 25D deadline has passed. Manufactured urgency pointing at a date that already went by is transparent, and homeowners check.",
          "**Anything still on your website about the 30% credit.** A page that has not been updated is telling every visitor you have not noticed the largest change in your industry in a decade.",
        ],
      },
      {
        t: "p",
        text: "That last one is worth an afternoon this week. Most solar sites still carry a tax credit banner, a calculator with the credit baked in, or a blog post from 2024 that ranks. See [what to put on a solar company website](/blog/what-to-put-on-a-solar-company-website) for the pages that actually need to exist, and [how to write solar website copy](/blog/how-to-write-solar-website-copy) for the tone that works once the discount is gone.",
      },
      {
        t: "h2",
        text: "What has not changed",
      },
      {
        t: "p",
        text: "Speed to lead still decides who wins. The company that calls back first still closes the majority of shared enquiries, and that advantage got larger, not smaller, when the sale got harder. A market where everyone's close rate dropped is a market where the cheapest remaining improvement is answering faster. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },
      {
        t: "p",
        text: "Reviews still carry more weight than any incentive, because the objection you are now facing is about trust in a bigger monthly commitment rather than trust in a rebate. And the follow-up sequence matters more than it did, because deals that used to close in one visit now take three.",
      },
      {
        t: "quote",
        text: "The credit was never the reason people went solar. It was the reason they went this year instead of next.",
      },
      {
        t: "p",
        text: "That distinction is the whole of it. Demand did not disappear on 1 January, urgency did. Urgency is something a sales process can manufacture honestly, through a rate escalator, a finance window that genuinely closes, or an install calendar that genuinely fills. A tax credit was simply the laziest available version of it.",
      },
    ],
    faq: [
      {
        q: "Is the 30% solar tax credit really gone?",
        a: "For homeowners buying with cash or a loan, yes. Section 25D does not apply to any system whose installation completed after 31 December 2025. The 30% is still reachable on leases and power purchase agreements, where the finance company owns the system and claims Section 48E instead. See [is there still a solar tax credit in 2026](/blog/is-there-still-a-solar-tax-credit-in-2026).",
      },
      {
        q: "Should we switch our whole book to leases and PPAs?",
        a: "Not automatically. Third-party ownership carries the credit but changes your margin, your install volume commitments and what you can promise about end of term. Run both for a quarter and compare closed revenue rather than close rate, because the two move in opposite directions here.",
      },
      {
        q: "What do we tell a customer who signed in 2025 but was installed in 2026?",
        a: "Tell them early, in writing, and before they file. The IRS treats the expenditure as made when installation completes, so a February 2026 commissioning does not qualify even on a November 2025 contract. Finding this out from their accountant instead of from you is how a finished job becomes a complaint.",
      },
      {
        q: "Will the residential credit come back?",
        a: "Nobody can say, and no sale should depend on it. Repeal came through primary legislation, so restoring it would take the same, and a homeowner deferring on that basis is a homeowner who does not buy this year or next.",
      },
    ],
    related: [
      "is-there-still-a-solar-tax-credit-in-2026",
      "how-to-explain-the-tax-credit-change-to-homeowners",
      "how-to-rebuild-your-solar-pitch-without-the-credit",
    ],
  },

  {
    slug: "is-there-still-a-solar-tax-credit-in-2026",
    title: "Is there still a solar tax credit in 2026?",
    metaTitle: "Is There Still a Solar Tax Credit in 2026?",
    metaDescription:
      "The homeowner credit ended for systems installed after 2025. A straight answer for installers, what still qualifies, and what to tell a customer who asks.",
    keyword: "is there still a solar tax credit in 2026",
    secondary: [
      "solar tax credit 2026",
      "did the solar tax credit end",
      "25D expired",
      "federal solar incentive 2026",
    ],
    excerpt:
      "The short answer is no for cash buyers and yes through third-party ownership. Here is the version to give a homeowner who asks on a first call.",
    category: "incentives",
    intent: "Informational",
    icon: "scales",
    published: "2026-09-19",
    answer:
      "No federal tax credit is available to a homeowner buying solar outright in 2026. Section 25D ended for systems whose installation completed after 31 December 2025. A 30% credit still applies to leases and power purchase agreements under Section 48E, but the finance company claims it, not the homeowner, and passes it on as a lower payment.",
    takeaways: [
      "Cash and loan purchases: no federal credit, on any system finished after 31 December 2025.",
      "Leases and PPAs: 30% still applies, claimed by the system owner and priced into the monthly figure.",
      "The test is when installation finished, not when the contract was signed.",
      "State and utility programmes were untouched by the federal change and are now the only incentive many homeowners can claim directly.",
    ],
    body: [
      {
        t: "p",
        text: "This is the question your phone is now ringing with, and the honest answer takes about thirty seconds to give. Give it badly and you lose the call. Give it well and you have separated yourself from every competitor still hedging.",
      },
      {
        t: "h2",
        text: "What is the short answer?",
      },
      {
        t: "p",
        text: "A homeowner buying a system outright, with cash or with a loan, gets nothing from the federal government in 2026. Section 25D, the Residential Clean Energy Credit, was repealed by the One Big Beautiful Bill Act and does not apply to expenditures made after 31 December 2025. The Congressional Research Service sets out the expiration and the carryforward position [in its summary of the change](https://www.congress.gov/crs-product/IN12611).",
      },
      {
        t: "p",
        text: "A homeowner going onto a lease or a power purchase agreement is in a different position, because they are not the owner. The finance company that owns the equipment claims the Section 48E investment credit, and competitive pressure means most of that value shows up in the monthly number the homeowner is quoted.",
      },
      {
        t: "h2",
        text: "When exactly does a system count as finished?",
      },
      {
        t: "p",
        text: "This is the detail that catches people, and it is worth being precise about because it decides real money. The IRS treats an expenditure as made when the original installation of the item is completed. Not the deposit, not the signature, not the permit. If installation finished on 4 January 2026, the credit does not apply, however long ago the contract was signed.",
      },
      {
        t: "callout",
        label: "The conversation nobody wants",
        text: "Any job sold in late 2025 and commissioned in 2026 is a call you should already have made. A homeowner who discovers this from their accountant in April, having budgeted for a refund you implied, will not accept that the law changed. Put it in writing, early, and keep the copy.",
      },
      {
        t: "h2",
        text: "What is still available?",
      },
      {
        t: "table",
        caption: "Federal position by purchase route, for a job sold today",
        head: ["How the homeowner buys", "Federal credit", "Who claims it"],
        rows: [
          ["Cash", "None", "Not applicable"],
          ["Loan or finance, homeowner owns", "None", "Not applicable"],
          ["Lease", "30% under 48E", "The finance company that owns the system"],
          ["Power purchase agreement", "30% under 48E", "The finance company that owns the system"],
        ],
      },
      {
        t: "p",
        text: "Outside the federal picture, nothing changed. State income tax credits, utility rebates, property tax exemptions, sales tax exemptions and net metering rules all sit where they did, and in several states they are now the only incentive a homeowner can claim in their own name. See [state solar incentives that still matter](/blog/state-solar-incentives-that-still-matter).",
      },
      {
        t: "h2",
        text: "How long does 48E last?",
      },
      {
        t: "p",
        text: "Not indefinitely, and the timing is already narrower than most sales teams realise. Projects that began construction before 4 July 2026 have until the end of 2030 to be placed in service. Anything that began construction after that date must be placed in service by 31 December 2027. The five per cent cost safe harbor was largely removed, leaving the physical work test as the practical way to establish a construction start.",
      },
      {
        t: "p",
        text: "For a homeowner conversation this reduces to one sentence: the arrangement that still carries the credit has an end date, and it is closer than people think. That is a legitimate reason to move this year, which is more than can be said for most urgency in this industry. The mechanics are in [Section 48E explained for solar installers](/blog/section-48e-explained-for-solar-installers).",
      },
      {
        t: "h2",
        text: "How should you answer it on the phone?",
      },
      {
        t: "p",
        text: "Short, specific, and without hedging. Hedging reads as either ignorance or evasion, and both cost you the appointment.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Answer the question that was asked",
            body: "\"The homeowner credit ended at the start of this year. If you buy the system outright there is no federal credit now.\" Say it first. Do not open with a caveat.",
          },
          {
            title: "Then give them the part they do not know",
            body: "\"There is still a thirty per cent credit on the lease and PPA side. The difference is the finance company claims it instead of you, and it comes back as a lower monthly payment rather than a refund.\"",
          },
          {
            title: "Move to their bill",
            body: "\"The number that actually matters for you is what you pay the utility now against what you would pay instead. Can you tell me roughly what your last bill was?\" That question is the appointment.",
          },
          {
            title: "Point them at their own advisor for anything specific",
            body: "You are not their accountant and should not sound like one. Confirming their own position with a tax professional is the right advice and it costs you nothing to give.",
          },
        ],
      },
      {
        t: "p",
        text: "Whoever gives that answer first tends to win the job, which makes this a speed problem as much as a knowledge one. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies) for why the first callback takes most of the market.",
      },
      {
        t: "h2",
        text: "What about your website?",
      },
      {
        t: "p",
        text: "Most solar sites are still advertising a credit that no longer exists for the customer reading the page. A banner, a savings calculator with thirty per cent baked into it, or an old post that ranks well and now misinforms. Every one of those is a homeowner arriving at your quote with the wrong number in their head, and an argument waiting at the kitchen table.",
      },
      {
        t: "p",
        text: "Audit it this week. Search your own domain for the phrase, fix the calculator, and update or retire the posts. [Solar website mistakes](/blog/solar-website-mistakes) covers the rest of what tends to be wrong on the same pages.",
      },
    ],
    faq: [
      {
        q: "Did the solar tax credit really end, or was it just reduced?",
        a: "It ended. Section 25D was repealed rather than stepped down, and it does not apply to any expenditure made after 31 December 2025. There is no reduced residential rate to fall back on.",
      },
      {
        q: "My system was installed in 2025 but I am filing in 2026. Do I still get it?",
        a: "The test is when installation completed, not when the return is filed. A system finished in 2025 is a 2025 expenditure and is claimed on the 2025 return in the normal way. Confirm the detail with a tax professional.",
      },
      {
        q: "Can a homeowner claim the credit on a lease?",
        a: "No, because they do not own the system. The finance company owns it and claims Section 48E. The homeowner sees the benefit indirectly, through the payment they are quoted, which is why lease pricing has held up better than cash pricing this year.",
      },
      {
        q: "Are state incentives affected?",
        a: "No. The change was federal. State credits, utility rebates, property and sales tax exemptions and net metering arrangements are all set locally and were untouched, though several have their own separate deadlines worth checking.",
      },
    ],
    related: [
      "how-to-sell-solar-after-the-tax-credit",
      "section-48e-explained-for-solar-installers",
      "state-solar-incentives-that-still-matter",
    ],
  },

  {
    slug: "section-48e-explained-for-solar-installers",
    title: "Section 48E explained for solar installers",
    metaTitle: "Section 48E Explained for Solar Installers",
    metaDescription:
      "The credit that survived, who claims it, and the 2027 deadline attached to it. What Section 48E means for a residential installer selling leases and PPAs.",
    keyword: "section 48e explained for solar installers",
    secondary: [
      "48E tax credit",
      "investment tax credit solar 2026",
      "third party ownership solar credit",
      "solar safe harbor 2026",
    ],
    excerpt:
      "The commercial investment credit is what keeps 30% in residential solar. Here is who claims it, how it reaches the homeowner, and when it runs out.",
    category: "incentives",
    intent: "Informational",
    icon: "shield",
    published: "2026-09-18",
    answer:
      "Section 48E is the clean electricity investment credit claimed by whoever owns a solar system, worth 30% of eligible cost. In residential solar it applies when a finance company owns the equipment under a lease or power purchase agreement. Projects beginning construction after 4 July 2026 must be placed in service by 31 December 2027.",
    takeaways: [
      "48E belongs to the system owner, so in residential it reaches the homeowner only through third-party ownership.",
      "Construction started before 4 July 2026 buys until the end of 2030 to be placed in service.",
      "Anything starting after that date faces a hard 31 December 2027 deadline.",
      "The 5% cost safe harbor was largely eliminated, leaving the physical work test as the practical route.",
    ],
    body: [
      {
        t: "p",
        text: "Most residential installers never had to think about 48E. It was the commercial credit, the thing the utility-scale developers argued about. Now it is the only federal money left in a residential deal, and not understanding it means quoting third-party ownership without understanding where the price comes from.",
      },
      {
        t: "h2",
        text: "What is Section 48E?",
      },
      {
        t: "p",
        text: "Section 48E is the clean electricity investment credit. It is worth 30% of the eligible cost of a qualifying facility and it is claimed by the entity that owns that facility and places it in service. Ownership is the whole hinge. A homeowner who buys a system owns it and would have claimed 25D, which no longer exists. A finance company that owns a system on a homeowner's roof claims 48E, which does.",
      },
      {
        t: "p",
        text: "That is why lease and PPA pricing held up this year while cash pricing did not. The credit did not leave residential solar. It attached itself to a different party, and only deals structured around that party can reach it.",
      },
      {
        t: "callout",
        label: "Not tax advice",
        text: "This is a working summary for a sales team, not a tax opinion. 48E carries domestic content rules, prevailing wage and apprenticeship conditions and foreign entity restrictions that are well beyond the scope of a blog post. Your finance partner's tax counsel is the authority on any specific deal.",
      },
      {
        t: "h2",
        text: "How does it reach the homeowner?",
      },
      {
        t: "p",
        text: "Indirectly, through price. The finance company models the credit as part of its return on the asset, and competition between finance providers pushes most of that value into the monthly payment or the per-kilowatt-hour rate the homeowner is offered. The homeowner never files anything and never waits for a refund.",
      },
      {
        t: "p",
        text: "For a sales conversation that is an easier product to explain than 25D ever was, and worth saying plainly. A tax credit is a promise about April that depends on the customer having enough liability to absorb it. A lower monthly payment is a number on a page. Plenty of homeowners who never had the tax appetite to use 25D properly are better served by this structure than they were by the old one.",
      },
      {
        t: "h2",
        text: "What are the deadlines?",
      },
      {
        t: "table",
        caption: "Placed-in-service deadlines by construction start",
        head: ["Construction began", "Must be placed in service by", "Practical effect"],
        rows: [
          ["Before 4 July 2026", "31 December 2030", "A long runway, if your partner can evidence the start"],
          ["On or after 4 July 2026", "31 December 2027", "The lane almost everything sold today sits in"],
        ],
      },
      {
        t: "p",
        text: "That first date has passed. Unless your finance partner began construction on a portfolio before it, and can show the basis, every deal you sell now runs against 31 December 2027. For residential that is less alarming than it sounds, because the gap between sale and commissioning is months rather than years, but it does mean the credit has a visible end and the end is inside most homeowners' decision horizon.",
      },
      {
        t: "h2",
        text: "What happened to the safe harbor?",
      },
      {
        t: "p",
        text: "The five per cent cost safe harbor, where spending five per cent of expected project cost established that construction had begun, was generally eliminated for wind and solar. That leaves the physical work test: work of a significant nature, actually started, documented. The standard is about the nature of the work rather than its cost, and the burden of proving it sits with the taxpayer claiming the credit.",
      },
      {
        t: "p",
        text: "For an installer this matters in one practical way. If a finance partner tells you their portfolio is safe-harbored into the 2030 window, that claim is worth real money on your pipeline and you should ask them to put the basis in writing rather than accepting it on a sales call.",
      },
      {
        t: "h2",
        text: "What should an installer actually do about it?",
      },
      {
        t: "steps",
        items: [
          {
            title: "Ask your finance partners which window they are in",
            body: "Get it in writing, per product. The answer changes what you can honestly say about timing, and it is the single question most sales teams have not asked.",
          },
          {
            title: "Stop describing TPO as the cheap option",
            body: "It is the option that still carries the credit. Those are different claims, and the second one is defensible while the first depends on a comparison you may lose.",
          },
          {
            title: "Build the deadline into the pipeline, not the pitch",
            body: "A genuine end date is worth more as an internal planning fact than as a closing line. Know what your install calendar looks like against 2027 before you start quoting against it.",
          },
          {
            title: "Keep the ownership conversation honest",
            body: "Third-party ownership means somebody else owns the panels on the roof. Say so, explain end of term, explain what happens on a house sale. See [how to explain the tax credit change to homeowners](/blog/how-to-explain-the-tax-credit-change-to-homeowners).",
          },
        ],
      },
      {
        t: "p",
        text: "None of this makes the sale itself easier. It makes the sale honest, which is the part that survives a homeowner going away and reading for a weekend. The rest of the job is the same as it was: answer first, follow up properly, and have enough proof that a nervous buyer believes you. See [why solar leads go cold](/blog/why-solar-leads-go-cold) and [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
      },
    ],
    faq: [
      {
        q: "Can a homeowner claim 48E themselves?",
        a: "Only if they own a qualifying facility in a business capacity, which is not the ordinary residential case. For a normal homeowner on a lease or PPA the credit belongs to the finance company that owns the system.",
      },
      {
        q: "Is 48E worth 30% in every case?",
        a: "The base rate is 30% where the relevant conditions are met, but adders and restrictions apply and some projects qualify for more or less. Treat 30% as the headline and your finance partner's actual pricing as the truth.",
      },
      {
        q: "What happens after 31 December 2027?",
        a: "For projects that began construction after 4 July 2026 and are not placed in service by then, the credit is not available. Projects that began construction before that date have until the end of 2030.",
      },
      {
        q: "Does this affect commercial solar sales?",
        a: "Commercial was always on 48E rather than 25D, so the structure is unchanged, but the same construction-start and placed-in-service deadlines apply. See [how to get commercial solar leads](/blog/how-to-get-commercial-solar-leads) for the pipeline side.",
      },
    ],
    related: [
      "how-to-sell-solar-after-the-tax-credit",
      "is-there-still-a-solar-tax-credit-in-2026",
      "solar-lease-vs-ppa-for-installers",
    ],
  },

  {
    slug: "how-to-explain-the-tax-credit-change-to-homeowners",
    title: "How to explain the tax credit change to homeowners",
    metaTitle: "Explaining the Solar Tax Credit Change to Homeowners",
    metaDescription:
      "Scripts for the kitchen table conversation now the homeowner credit is gone: what to say first, what not to promise, and how to keep the appointment moving.",
    keyword: "how to explain the tax credit change to homeowners",
    secondary: [
      "solar tax credit script",
      "explaining solar incentives to customers",
      "solar sales conversation 2026",
      "kitchen table solar pitch",
    ],
    excerpt:
      "The words that keep an appointment alive when a homeowner asks about the credit, and the ones that create a cancellation three weeks later.",
    category: "incentives",
    intent: "Informational",
    icon: "chat",
    published: "2026-09-18",
    answer:
      "Explaining the change works best in three moves: state plainly that the homeowner credit ended, say where the 30% still applies and who claims it, then move the conversation to the monthly bill comparison. Homeowners forgive bad news delivered early. They do not forgive discovering it from their accountant in April.",
    takeaways: [
      "Lead with the bad news. Burying it costs you the deal later rather than saving it now.",
      "Never say the homeowner will receive 30% back unless they are on a structure where that is true.",
      "Move to the utility bill as fast as possible, because it is the number they already believe.",
      "Put the position in writing on anything sold in 2025 and installed in 2026.",
    ],
    body: [
      {
        t: "p",
        text: "Every solar rep is now having a version of the same conversation, and it is going badly in predictable ways. The homeowner has read something. They are not sure whether the credit exists. The rep is not sure how much to volunteer. Both of them talk around it for ten minutes and the appointment never recovers.",
      },
      {
        t: "h2",
        text: "Why does leading with the bad news work?",
      },
      {
        t: "p",
        text: "Because the alternative is that they find out later, and later is always worse. A homeowner who hears about the change from you, in the first five minutes, files it as information. The same homeowner hearing it from a competitor, or from an accountant after the job is done, files it as something you concealed. One costs you a slightly harder conversation. The other costs you the job, the review and the referrals behind it.",
      },
      {
        t: "p",
        text: "There is also a competitive argument. Most of your competitors are still hedging on this because it makes their pitch harder. Being the first person to give a homeowner a straight answer is a credibility advantage that lasts the rest of the appointment.",
      },
      {
        t: "h2",
        text: "What do you actually say?",
      },
      {
        t: "steps",
        items: [
          {
            title: "State it plainly, in one sentence",
            body: "\"Before we go any further: the thirty per cent federal credit for homeowners ended at the start of this year. If you buy a system outright, you will not get that money back.\" No preamble, no softening. The plainness is the point.",
          },
          {
            title: "Give them the part they have not read",
            body: "\"It does still exist on the lease and power purchase side. The difference is that the finance company owns the system and claims it, and it reaches you as a lower monthly payment instead of a refund.\"",
          },
          {
            title: "Say what you are not",
            body: "\"I am not your accountant, so anything specific to your tax position is worth checking with them.\" This costs nothing and it buys you the right to be believed about everything else.",
          },
          {
            title: "Move to the bill",
            body: "\"What actually decides this for most people now is simpler than the tax question. What are you paying the utility a month?\" You have moved from a topic you cannot win to one where you have the only useful numbers in the room.",
          },
        ],
      },
      {
        t: "h2",
        text: "What should you never say?",
      },
      {
        t: "ul",
        items: [
          "**\"You will still get thirty per cent back.\"** Not on a purchase. Said to a homeowner who then files and does not receive it, this is a complaint and possibly worse.",
          "**\"It will probably come back after the next election.\"** You do not know, they cannot plan on it, and it hands them a reason to wait.",
          "**\"Everybody is still doing it, do not worry about it.\"** This tells a nervous buyer that you are relaxed about accuracy, which is exactly the wrong signal before they sign a twenty year commitment.",
          "**Nothing at all.** Silence on the biggest change in the industry is the worst option of the four, and it is the most common one.",
        ],
      },
      {
        t: "h2",
        text: "How do you handle the 2025 signings?",
      },
      {
        t: "p",
        text: "Separately, in writing, and before they file. Anyone who signed last year and was installed this year does not qualify, because the test is when installation completed. They may have budgeted around a refund that is not coming.",
      },
      {
        t: "callout",
        label: "Do this today if you have not",
        text: "Pull every job signed in 2025 and commissioned after 31 December. Send each of them a short written note explaining the position and suggesting they confirm with their tax professional. It is an unpleasant afternoon. It is considerably less unpleasant than the alternative in April.",
      },
      {
        t: "h2",
        text: "What replaces the credit in the pitch?",
      },
      {
        t: "p",
        text: "The bill comparison, and the escalator behind it. A utility bill rises most years. A fixed payment does not. Over the length of the agreement the gap between those two lines is the argument, and it never depended on the tax code in the first place.",
      },
      {
        t: "p",
        text: "That pitch is slower than a rebate and it closes fewer people on a first visit, which is why the follow-up sequence matters more this year than it did last. A deal that used to close in one sitting now takes three touches. See [the solar sales follow-up sequence](/blog/solar-sales-follow-up-sequence) and [how many times should you follow up with a solar lead](/blog/how-many-times-should-you-follow-up-with-a-solar-lead).",
      },
      {
        t: "quote",
        text: "Homeowners forgive bad news. They do not forgive finding it out on their own.",
      },
    ],
    faq: [
      {
        q: "Should we bring the tax credit up if the homeowner does not?",
        a: "Yes. Almost every homeowner has a number in their head from something they read, and if you do not correct it during the appointment you will be correcting it during the cancellation call instead.",
      },
      {
        q: "What if a competitor is still promising the credit?",
        a: "Do not attack them, show the source. Reading the position out of IRS guidance is more persuasive than calling someone a liar, and it puts the homeowner in a position to check for themselves.",
      },
      {
        q: "How do we stop the conversation stalling on tax?",
        a: "Answer in two sentences, say you are not their accountant, then ask for the utility bill. The question you ask next decides the topic, so ask about the bill rather than waiting to see whether they have more tax questions.",
      },
      {
        q: "Does this change how we quote?",
        a: "It changes what leads the quote. Put the monthly comparison at the top and the system specification below it. See [how to rebuild your solar pitch without the credit](/blog/how-to-rebuild-your-solar-pitch-without-the-credit).",
      },
    ],
    related: [
      "how-to-sell-solar-after-the-tax-credit",
      "how-to-handle-the-ill-wait-objection-solar",
      "how-to-rebuild-your-solar-pitch-without-the-credit",
    ],
  },
];
