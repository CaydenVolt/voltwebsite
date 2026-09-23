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
      "will-the-solar-tax-credit-come-back",
      "how-to-rebuild-your-solar-pitch-without-the-credit",
    ],
  },

  {
    slug: "solar-lease-vs-ppa-for-installers",
    title: "Solar lease vs PPA, for installers",
    metaTitle: "Solar Lease vs PPA: A Guide for Installers",
    metaDescription:
      "How leases and power purchase agreements differ, which one carries the 30% credit, what each does to your margin, and how to explain both at a kitchen table.",
    keyword: "solar lease vs ppa for installers",
    secondary: [
      "solar lease vs ppa",
      "third party ownership solar",
      "solar ppa explained",
      "tpo solar 2026",
    ],
    excerpt:
      "Both are third-party ownership and both carry the credit. The difference is whether the homeowner pays for the equipment or for the electricity.",
    category: "incentives",
    intent: "Informational",
    icon: "tag",
    published: "2026-09-17",
    answer:
      "A solar lease charges a fixed monthly payment for the equipment on the roof. A power purchase agreement charges per kilowatt hour the system actually produces. Both are third-party ownership, so the finance company owns the system and claims the Section 48E credit either way. What differs for the homeowner is whether the bill is predictable or tied to output.",
    takeaways: [
      "Lease: fixed monthly payment, whatever the system produces.",
      "PPA: a rate per kilowatt hour, so the bill moves with production.",
      "Both are third-party ownership, so the finance company claims the credit in both.",
      "A shaded or north-facing roof argues for a lease; a strong roof argues for a PPA.",
    ],
    body: [
      {
        t: "p",
        text: "Most installers used to treat these as two names for the same product, because when a cash sale carried its own thirty per cent credit the financed options were the fallback rather than the plan. That is no longer the case. Third-party ownership is now where the federal money is, which makes the difference between the two worth understanding properly.",
      },
      {
        t: "h2",
        text: "What is the actual difference?",
      },
      {
        t: "p",
        text: "A lease is a rental. The homeowner pays a fixed amount each month for the hardware on their roof, and that amount does not change whether the system has a brilliant July or a dismal one. A power purchase agreement is a supply contract. The homeowner buys the electricity the system produces, at an agreed rate per kilowatt hour, and pays nothing for the kilowatt hours it does not produce.",
      },
      {
        t: "p",
        text: "In both cases a finance company owns the equipment. That is the part that matters federally, because ownership is what decides who can claim Section 48E. See [Section 48E explained for solar installers](/blog/section-48e-explained-for-solar-installers) for the mechanics and the deadline attached to them.",
      },
      {
        t: "table",
        caption: "The same roof, two contracts",
        head: ["", "Lease", "PPA"],
        rows: [
          ["What the homeowner buys", "Use of the equipment", "The electricity it makes"],
          ["What they pay", "A fixed monthly amount", "A rate per kilowatt hour"],
          ["A bad production month", "Same payment", "Lower bill"],
          ["A great production month", "Same payment", "Higher bill"],
          ["Who owns the system", "The finance company", "The finance company"],
          ["Who claims the credit", "The finance company", "The finance company"],
        ],
      },
      {
        t: "h2",
        text: "Which one should you put in front of a homeowner?",
      },
      {
        t: "p",
        text: "The roof decides more of this than the customer's preference does, and a rep who leads with preference ends up with cancellations.",
      },
      {
        t: "steps",
        items: [
          {
            title: "A compromised roof argues for a lease",
            body: "Shading, an awkward orientation, or a production estimate you are not fully confident in. A fixed payment protects the homeowner from a system that underperforms, and protects you from the conversation that follows when it does.",
          },
          {
            title: "A strong roof argues for a PPA",
            body: "Good orientation, no shading, a production estimate you would defend. The homeowner captures the upside of a good year, and the per-kilowatt-hour framing compares cleanly against the utility rate they already know.",
          },
          {
            title: "A nervous buyer argues for a lease",
            body: "Some people want one number they can put in a budget. A PPA bill that moves month to month is the wrong product for them, however good the roof is.",
          },
          {
            title: "An escalator clause changes both",
            body: "Many agreements raise the payment or the rate a set percentage each year. Read it, say it out loud, and compare it against what the utility has actually done in your state. Skipping this is how a happy customer becomes an angry one in year four.",
          },
        ],
      },
      {
        t: "h2",
        text: "What does this do to your margin?",
      },
      {
        t: "p",
        text: "Third-party ownership pays differently from a cash sale, and usually less per job up front. That is the trade being made: the finance company carries the asset and the tax position, and takes a share for doing it. What you gain is a close rate that survived the credit ending.",
      },
      {
        t: "p",
        text: "The mistake is comparing close rates rather than revenue. TPO closes more of the people who were going to say no to a cash quote, so the honest comparison is closed revenue per hundred leads, run over a quarter, not the percentage of appointments that signed something.",
      },
      {
        t: "callout",
        label: "Ask your finance partner this",
        text: "Which construction-start window is their portfolio in, and can they put it in writing. Projects that began construction before 4 July 2026 have until the end of 2030 to be placed in service. Anything after that faces 31 December 2027. The answer changes what you can honestly say about timing.",
      },
      {
        t: "h2",
        text: "How do you explain it without losing the room?",
      },
      {
        t: "p",
        text: "Two sentences, then a question. \"With a lease you pay a set amount each month for the system. With a PPA you pay for the power it makes, so the bill moves a bit with the seasons. Which of those sounds easier to live with?\"",
      },
      {
        t: "p",
        text: "That is the whole explanation. What you must not do is drift into who claims the tax credit unless they ask, because the moment you do you are having a tax conversation instead of a bill conversation, and you are not their accountant. If they do ask, [how to explain the tax credit change to homeowners](/blog/how-to-explain-the-tax-credit-change-to-homeowners) has the wording.",
      },
      {
        t: "h2",
        text: "What to be careful about",
      },
      {
        t: "ul",
        items: [
          "**Say who owns the panels.** A homeowner who discovers at closing that they do not own the hardware will cancel, and they will be right to be annoyed.",
          "**Cover the house sale.** Transfer or buyout terms are the second most common late objection. Know them before the appointment.",
          "**Cover end of term.** What happens in year twenty is a question people ask, and \"I will find out\" is a weak answer in a twenty-year commitment.",
          "**Do not promise the credit to the homeowner.** They are not claiming it. It reaches them as price, and saying otherwise is a complaint waiting to be made.",
        ],
      },
      {
        t: "p",
        text: "None of this is harder than the old pitch, it is just different, and it rewards preparation more than a rebate ever did. The rest of the process matters more now too, because these deals take more touches to close. See [the solar sales follow-up sequence](/blog/solar-sales-follow-up-sequence).",
      },
    ],
    faq: [
      {
        q: "Is a lease or a PPA better for the homeowner?",
        a: "Neither in general. A lease suits a compromised roof or a buyer who wants one predictable number. A PPA suits a strong roof and a buyer comfortable with a bill that moves with production.",
      },
      {
        q: "Does the homeowner get the tax credit on either?",
        a: "Not directly. The finance company owns the system and claims Section 48E in both cases, then prices it into the payment or the rate. See [is there still a solar tax credit in 2026](/blog/is-there-still-a-solar-tax-credit-in-2026).",
      },
      {
        q: "What happens if the customer sells the house?",
        a: "The agreement is either transferred to the buyer or bought out, depending on the contract. Get the specifics from your finance partner before you quote, because it comes up at the kitchen table more often than people expect.",
      },
      {
        q: "Should we stop selling cash systems?",
        a: "No. Plenty of buyers still prefer to own, and some have the tax position to make it work regardless. Offer both and let the homeowner's situation decide rather than your commission.",
      },
    ],
    related: [
      "how-to-sell-solar-after-the-tax-credit",
      "section-48e-explained-for-solar-installers",
      "solar-payback-period-without-the-tax-credit",
    ],
  },

  {
    slug: "will-the-solar-tax-credit-come-back",
    title: "Will the solar tax credit come back?",
    metaTitle: "Will the Solar Tax Credit Come Back?",
    metaDescription:
      "The honest answer for installers facing customers who want to wait, why deferring costs a homeowner money, and what to say instead of guessing at legislation.",
    keyword: "will the solar tax credit come back",
    secondary: [
      "solar tax credit reinstated",
      "25D return",
      "waiting for solar tax credit",
      "solar objection handling 2026",
    ],
    excerpt:
      "The most common objection in solar right now is a customer waiting for something to come back. Here is the honest answer, and what to do with it.",
    category: "incentives",
    intent: "Informational",
    icon: "stopwatch",
    published: "2026-09-17",
    answer:
      "Nobody can say whether the residential solar credit returns. Repeal came through primary legislation in 2025, so restoring it would take the same. A homeowner deferring on that basis is deferring indefinitely, while their utility bill keeps rising and the third-party credit that does still exist runs against a deadline at the end of 2027.",
    takeaways: [
      "The credit was repealed by statute, so only new legislation could restore it.",
      "No sale should be built on a guess about future law, including an optimistic one.",
      "The cost of waiting is real: bills paid in the meantime, and a 48E deadline that does not move.",
      "Never promise a customer the credit is coming back. That is a claim you cannot support.",
    ],
    body: [
      {
        t: "p",
        text: "Every solar rep is now hearing a version of the same sentence: I will wait and see if it comes back. It is a reasonable thing for a homeowner to think and a terrible thing for them to act on, and the way you answer decides whether you are still in the conversation five minutes later.",
      },
      {
        t: "h2",
        text: "What is the honest answer?",
      },
      {
        t: "p",
        text: "That nobody knows, and that you should be suspicious of anyone who says otherwise. Section 25D was repealed by the One Big Beautiful Bill Act, which is primary legislation. Undoing that requires Congress to pass something new, and the fact that a thing is popular does not make it imminent.",
      },
      {
        t: "p",
        text: "Say that plainly. A rep who admits they cannot predict Congress is more credible for the rest of the appointment than one who offers a confident forecast, and homeowners can tell the difference.",
      },
      {
        t: "callout",
        label: "What never to say",
        text: "\"It will probably be back after the next election.\" You do not know, they cannot plan around it, and if you are wrong you have handed them a reason to be angry with you specifically. It is also the kind of claim that follows a company into its reviews.",
      },
      {
        t: "h2",
        text: "What does waiting actually cost?",
      },
      {
        t: "p",
        text: "This is the part of the conversation that is yours to win, because it is arithmetic rather than prediction.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Every month of waiting is a bill paid in full",
            body: "A homeowner deferring for a year pays twelve more utility bills at the full rate. Put their actual number on that: their bill, times twelve. It is usually a larger figure than they expect to see written down.",
          },
          {
            title: "Utility rates are not waiting with them",
            body: "The comparison they will make next year is against a higher rate, not today's. Deferring does not freeze the alternative in place.",
          },
          {
            title: "The credit that does exist has an end date",
            body: "Third-party ownership still carries thirty per cent through Section 48E, and projects starting after 4 July 2026 must be placed in service by 31 December 2027. Waiting for a credit that might return can mean missing the one that is actually here.",
          },
          {
            title: "Install calendars fill",
            body: "If a policy change ever does land, everybody moves at once and lead times stretch. Being early in a queue is worth something, and being late in one is worth nothing.",
          },
        ],
      },
      {
        t: "p",
        text: "None of that is a scare tactic, which matters. Every line of it is either their own bill or a published date, and you can show your working. That is a different thing from manufactured urgency, and homeowners who have sat through a few solar pitches can tell those apart.",
      },
      {
        t: "h2",
        text: "How do you answer it in the room?",
      },
      {
        t: "p",
        text: "Acknowledge, answer, then move to the number that still works.",
      },
      {
        t: "p",
        text: "\"That is fair, and I honestly cannot tell you whether it comes back. What I can tell you is what waiting costs. Your bill is about two hundred a month, so a year of waiting is twenty-four hundred paid to the utility for the chance at something nobody can promise. And the thirty per cent that does still exist, on the lease side, runs out at the end of 2027.\"",
      },
      {
        t: "p",
        text: "Then stop talking about policy and go back to the bill comparison, which is the only argument that never depended on the tax code. [How to rebuild your solar pitch without the credit](/blog/how-to-rebuild-your-solar-pitch-without-the-credit) covers the shape of it.",
      },
      {
        t: "h2",
        text: "What if they still want to wait?",
      },
      {
        t: "p",
        text: "Let them, and keep them. A homeowner who says no this quarter is not the same as a homeowner who is not interested, and the single biggest waste in solar sales is treating the two identically. They go into the follow-up sequence, they hear from you when something genuinely changes, and they are already warm if policy moves.",
      },
      {
        t: "p",
        text: "Most companies stop after two attempts and lose these people entirely. See [how many times should you follow up with a solar lead](/blog/how-many-times-should-you-follow-up-with-a-solar-lead) for why that is the wrong number, and [why solar leads go cold](/blog/why-solar-leads-go-cold) for what actually happens in the gap.",
      },
      {
        t: "quote",
        text: "A customer waiting for the credit is not a lost sale. They are a scheduled one, if anybody remembers to call them.",
      },
    ],
    faq: [
      {
        q: "Is there any sign the residential credit is being reinstated?",
        a: "Nothing anyone should sell against. It was repealed by statute, restoring it would take new legislation, and treating a possibility as a plan is how a homeowner ends up deferring for years.",
      },
      {
        q: "Should we tell customers to wait?",
        a: "No, and not because it costs you a sale. Waiting costs them money in bills paid at the full rate, and risks missing the Section 48E window that does still exist.",
      },
      {
        q: "What if a competitor is promising it will come back?",
        a: "Do not attack them, show the source. Reading the position out of the legislation is more persuasive than calling someone a liar, and it hands the homeowner something they can verify themselves.",
      },
      {
        q: "How long should we keep following up with someone who is waiting?",
        a: "Longer than feels natural. Solar decisions routinely take months, and a policy-driven deferral is explicitly a later yes rather than a no. A monthly check-in costs nothing and keeps you first in line.",
      },
    ],
    related: [
      "is-there-still-a-solar-tax-credit-in-2026",
      "how-to-explain-the-tax-credit-change-to-homeowners",
      "how-to-rebuild-your-solar-pitch-without-the-credit",
    ],
  },

  {
    slug: "state-solar-incentives-that-still-matter",
    title: "State solar incentives that still matter",
    metaTitle: "State Solar Incentives That Still Matter",
    metaDescription:
      "The federal change did not touch state and utility programmes. Which categories still exist, how to check what applies in your territory, and how to use them.",
    keyword: "state solar incentives that still matter",
    secondary: [
      "state solar incentives 2026",
      "utility solar rebates",
      "net metering 2026",
      "solar property tax exemption",
    ],
    excerpt:
      "Federal repeal left state and utility programmes untouched. For many homeowners they are now the only incentive they can claim in their own name.",
    category: "incentives",
    intent: "Informational",
    icon: "pin",
    published: "2026-09-16",
    answer:
      "State and utility solar incentives were untouched by the federal repeal. Five categories still exist across various states: income tax credits, utility rebates, property tax exemptions, sales tax exemptions, and renewable energy certificate markets. For many homeowners these are now the only incentives claimable in their own name, which makes knowing yours precisely worth the afternoon.",
    takeaways: [
      "The 2025 repeal was federal. Nothing at state or utility level changed with it.",
      "Five categories to check: income tax credit, utility rebate, property tax exemption, sales tax exemption, and SREC markets.",
      "Net metering rules are separate again, and often worth more over twenty years than any rebate.",
      "Check the authoritative database rather than a competitor's website, and check it quarterly.",
    ],
    body: [
      {
        t: "p",
        text: "When the federal credit ended, a lot of solar companies stopped talking about incentives entirely. That was an overcorrection. The repeal was federal and it changed nothing at state or utility level, which means in some territories a homeowner can still claim real money in their own name. In those places the companies that know the detail are quietly winning appointments from the ones that assume everything is gone.",
      },
      {
        t: "h2",
        text: "Which categories still exist?",
      },
      {
        t: "p",
        text: "Five, and they behave differently enough that lumping them together confuses customers.",
      },
      {
        t: "steps",
        items: [
          {
            title: "State income tax credits",
            body: "A handful of states run their own credit against state tax liability. These work like the old federal credit did, claimed on a return, and they are the closest thing to a direct replacement where they exist.",
          },
          {
            title: "Utility rebates",
            body: "Paid by the utility rather than the government, often per watt installed, and frequently capped by a budget that runs out partway through the year. These are the ones with real deadlines, and the deadline is usually \"when the money is gone\".",
          },
          {
            title: "Property tax exemptions",
            body: "A system raises a home's value, and in many states that added value is exempt from property tax assessment. It is not cash in hand, which makes it easy to skip, but it answers the objection about the tax bill going up.",
          },
          {
            title: "Sales tax exemptions",
            body: "Some states exempt solar equipment from sales tax, which comes straight off the installed price. Quiet, automatic, and worth naming because the homeowner will not otherwise notice it.",
          },
          {
            title: "SREC markets",
            body: "In a few states the system generates certificates that can be sold, producing income over years rather than a discount up front. Complicated to explain and substantial where it applies.",
          },
        ],
      },
      {
        t: "h2",
        text: "What about net metering?",
      },
      {
        t: "p",
        text: "Net metering is not an incentive in the rebate sense, and it is often worth more than all of the above combined. It is the rule governing what the utility pays for the electricity a system exports, and the terms vary enormously by state and by utility inside a state.",
      },
      {
        t: "p",
        text: "It also changes. Several states have moved from full retail credit to something less generous, usually with a grandfathering window for systems connected before a date. Where that applies it is a legitimate reason to move now, and unlike guessing at federal policy it is a published rule with a published date on it.",
      },
      {
        t: "callout",
        label: "Where to check",
        text: "The Database of State Incentives for Renewables and Efficiency, run by NC State, is the authoritative public source and covers every state. [dsireusa.org](https://www.dsireusa.org). Check it yourself rather than repeating what a competitor's website says, because half of those pages were last updated before the federal change.",
      },
      {
        t: "h2",
        text: "How should you use this in a sale?",
      },
      {
        t: "p",
        text: "Specifically, and only where it is true. A vague \"there are still state incentives available\" is worse than saying nothing, because it sounds like the thing a salesperson says when there is nothing left.",
      },
      {
        t: "ul",
        items: [
          "**Name the programme.** \"Your utility pays a rebate of X per watt, and their budget for this year is not exhausted yet.\" That is a fact somebody can check.",
          "**Say when it ends, if it does.** Utility rebate pools and net metering grandfathering both have real deadlines, which is honest urgency rather than manufactured urgency.",
          "**Put it on the quote, itemised.** A homeowner comparing three quotes should be able to see which of you did the work.",
          "**Say who claims what.** Some of these are claimed by the homeowner and some only apply to owned systems, which interacts with whether you are selling a cash system or third-party ownership. See [solar lease vs PPA for installers](/blog/solar-lease-vs-ppa-for-installers).",
        ],
      },
      {
        t: "h2",
        text: "Why this is worth an afternoon",
      },
      {
        t: "p",
        text: "Because almost nobody has done it. Most solar websites in most territories still lead with a federal credit that no longer exists for the customer reading the page, and their reps are working from the same stale briefing. Being the company that can name the actual programmes in your county is a real advantage, and it costs one afternoon plus a quarterly recheck. For the federal half of that briefing, see [is there still a solar tax credit in 2026](/blog/is-there-still-a-solar-tax-credit-in-2026).",
      },
      {
        t: "p",
        text: "It is also content. A page per territory covering what genuinely applies there is exactly what local search rewards, and it is the sort of thing a homeowner sends to their spouse. See [how to write solar service area pages](/blog/how-to-write-solar-service-area-pages).",
      },
    ],
    faq: [
      {
        q: "Did state incentives change when the federal credit ended?",
        a: "No. The repeal was federal. State credits, utility rebates, property and sales tax exemptions and net metering rules are all set locally and were untouched, though several have their own separate deadlines.",
      },
      {
        q: "Where can I check what applies in my state?",
        a: "DSIRE at dsireusa.org, run by NC State, is the authoritative public database and covers every state and most utilities. Check quarterly, because utility rebate budgets and net metering terms change mid-year.",
      },
      {
        q: "Are state incentives enough to replace the federal credit?",
        a: "In a few states, close to it. In most, no. They are worth knowing precisely rather than being oversold, because a homeowner who checks and finds you exaggerated will not buy from you.",
      },
      {
        q: "Do state incentives apply to leases and PPAs?",
        a: "It varies by programme. Some are claimable only by the system owner, which on third-party ownership is the finance company rather than the homeowner. Check each programme's terms before you put it on a quote.",
      },
    ],
    related: [
      "is-there-still-a-solar-tax-credit-in-2026",
      "how-to-sell-solar-after-the-tax-credit",
      "local-seo-for-solar-contractors",
    ],
  },

  {
    slug: "how-to-rebuild-your-solar-pitch-without-the-credit",
    title: "How to rebuild your solar pitch without the credit",
    metaTitle: "Rebuilding the Solar Pitch Without the Credit",
    metaDescription:
      "What to lead with now the rebate is gone: the bill comparison, the escalator, and the proof that replaces a discount. A practical rewrite of the kitchen table.",
    keyword: "how to rebuild your solar pitch without the credit",
    secondary: [
      "solar sales pitch 2026",
      "selling solar without incentives",
      "solar value proposition",
      "solar kitchen table pitch",
    ],
    excerpt:
      "The credit gave every rep one number to write at the bottom of a page. What replaces it is a comparison, and it has to be built deliberately.",
    category: "incentives",
    intent: "Informational",
    icon: "megaphone",
    published: "2026-09-16",
    answer:
      "Rebuilding the pitch means replacing one number with two. The credit gave a rep a single figure to write at the bottom of a page. What replaces it is a comparison: what the homeowner pays the utility now against what they would pay instead, plus the widening gap between those two lines as rates rise and a fixed payment does not.",
    takeaways: [
      "Lead with their current bill, because it is the only number they already trust.",
      "The escalator is the argument, not the monthly saving in month one.",
      "Proof replaces the discount: reviews, real installs, and a named process.",
      "Expect more touches per close, and build the follow-up before you need it.",
    ],
    body: [
      {
        t: "p",
        text: "For fifteen years the federal credit did the closing. It gave a rep a number to write at the bottom of the page, it made the payback maths work, and it produced a December rush every year without anybody having to be persuasive. Take it away and a lot of solar pitches turn out to have been a discount with a presentation wrapped around it.",
      },
      {
        t: "h2",
        text: "What replaces the rebate?",
      },
      {
        t: "p",
        text: "A comparison, not another number. The rebate was a promise about next April that depended on the customer having the tax appetite to use it. What replaces it is a promise about next month, which is easier to believe and easier to check.",
      },
      {
        t: "p",
        text: "Two lines on a page: what they pay the utility now, and what they would pay instead. Same units, same month, no twenty-year net present value. If the second line is lower, that is the pitch and it needs no decoration.",
      },
      {
        t: "h2",
        text: "Why does the escalator matter more than the saving?",
      },
      {
        t: "p",
        text: "Because in month one the difference is often modest, and a modest difference does not move anybody. The argument is not the gap today, it is that one line rises and the other does not.",
      },
      {
        t: "p",
        text: "Utility rates go up most years. A fixed payment does not, or rises on a known schedule you can show them. Drawing those two lines over ten years, using their own bill as the starting point, is a more powerful piece of paper than any rebate figure ever was, and it never depended on the tax code.",
      },
      {
        t: "callout",
        label: "Use their rate history, not a national average",
        text: "Most utilities publish their rate changes. Pulling the last five years for the specific utility serving that house turns the escalator argument from a claim into a record. It takes ten minutes per territory, once.",
      },
      {
        t: "h2",
        text: "What has to change in the appointment?",
      },
      {
        t: "steps",
        items: [
          {
            title: "Ask for twelve months of bills, not one",
            body: "A single bill from a mild month understates everything. Twelve months shows the summer peak, which is the part that hurts and the part solar answers best.",
          },
          {
            title: "Put the comparison first, the system second",
            body: "Panel brands, inverter choices and production modelling belong after the homeowner has seen the two numbers. Leading with equipment is leading with the part they cannot judge.",
          },
          {
            title: "Handle the tax question in two sentences",
            body: "It will come up. Answer it, say you are not their accountant, and move back to the bill. [How to explain the tax credit change to homeowners](/blog/how-to-explain-the-tax-credit-change-to-homeowners) has the wording.",
          },
          {
            title: "Expect to leave without a signature",
            body: "Deals that used to close in one sitting now take three touches. That is not a failed appointment, it is the new shape of the sale, and treating it as failure is how reps stop following up.",
          },
        ],
      },
      {
        t: "h2",
        text: "What replaces the discount as a reason to trust you?",
      },
      {
        t: "p",
        text: "Proof. When there was a thirty per cent incentive on the table, a homeowner had a reason to move even if they were unsure about the company. Remove it and the trust question becomes the whole sale, because they are now committing to a twenty-year relationship on the strength of you.",
      },
      {
        t: "ul",
        items: [
          "**Reviews, recent and answered.** Volume and recency both count, and a company that replies to its bad ones reads as a company that will answer the phone in year three. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
          "**Your own installs, not stock photography.** Photographs of roofs in the towns you serve do more than any brochure.",
          "**A named process.** What happens after signature, who they will speak to, and when. Uncertainty about the next six weeks kills more deals than price does.",
          "**Speed.** Answering first is now worth more, not less, because every competitor's close rate fell at the same time. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
        ],
      },
      {
        t: "h2",
        text: "What not to do",
      },
      {
        t: "p",
        text: "Do not discount your way back to the old number. It is the obvious move and it is a trap: you fund the entire policy change out of your own margin, on every job, permanently, and you train your market to expect it. The companies handling this well have not cut price. They changed which number leads the page.",
      },
      {
        t: "p",
        text: "And do not leave the old pitch on your website while running the new one in person. A site still advertising a thirty per cent credit sends homeowners into the appointment with the wrong number in their head, and the first thing your rep has to do is disappoint them. See [solar website mistakes](/blog/solar-website-mistakes).",
      },
    ],
    faq: [
      {
        q: "Is solar still worth it for a homeowner without the credit?",
        a: "In most territories yes, but the case is now about the monthly comparison and the rate escalator rather than a rebate. It is a slower argument and it holds up better to scrutiny.",
      },
      {
        q: "Should we cut prices to make the numbers work?",
        a: "No. Discounting funds the policy change out of your margin on every job forever, and it resets what your market expects to pay. Change which number leads the page instead.",
      },
      {
        q: "How much longer do deals take now?",
        a: "Expect roughly three touches where one used to do it. Build the follow-up sequence before you need it, because the deals are still there and they are lost to silence rather than to price.",
      },
      {
        q: "What is the single biggest change to make first?",
        a: "Ask for twelve months of bills at the start of every appointment. Everything else in the new pitch is anchored to that number, and without it you are back to talking about equipment.",
      },
    ],
    related: [
      "how-to-sell-solar-after-the-tax-credit",
      "how-to-explain-the-tax-credit-change-to-homeowners",
      "solar-payback-period-without-the-tax-credit",
    ],
  },

  {
    slug: "solar-payback-period-without-the-tax-credit",
    title: "Solar payback period without the tax credit",
    metaTitle: "Solar Payback Period Without the Tax Credit",
    metaDescription:
      "How the payback maths changed when the 30% credit ended, why quoting a pre-2026 figure is dangerous, and what to put in front of a homeowner instead.",
    keyword: "solar payback period without the tax credit",
    secondary: [
      "solar payback period 2026",
      "solar roi without credit",
      "how long to pay off solar",
      "solar break even",
    ],
    excerpt:
      "Payback lengthened when the credit ended, and the old figures are still on most quotes. Recalculating is not optional.",
    category: "incentives",
    intent: "Informational",
    icon: "chart",
    published: "2026-09-15",
    answer:
      "Payback periods lengthened when the federal credit ended, because the same system now costs a homeowner roughly a third more while producing the same savings. Quoting a pre-2026 payback figure is the most common error in solar sales right now. The honest response is to recalculate for each quote rather than keep using a number that assumed a rebate.",
    takeaways: [
      "A cash purchase lost about thirty per cent of its cost offset, and payback moved accordingly.",
      "Any payback figure calculated before 2026 is wrong for a cash system today.",
      "Payback is a weak frame anyway; the monthly comparison is stronger and easier to verify.",
      "Third-party ownership does not have a payback period, which is worth saying explicitly.",
    ],
    body: [
      {
        t: "p",
        text: "Payback period was always the number homeowners asked for and the number that did the least work. It is a single figure standing on a stack of assumptions about rates, production, degradation and how long somebody stays in a house. The federal change did not just move it, it exposed how fragile it was.",
      },
      {
        t: "h2",
        text: "How much did payback actually change?",
      },
      {
        t: "p",
        text: "For a cash or loan purchase, the arithmetic is unavoidable. The credit removed roughly a third of the net cost. Take it away and the cost side of the calculation rises by about half as much again, while the savings side has not moved at all. Payback periods that used to be quoted in the seven to eight year range now land meaningfully longer.",
      },
      {
        t: "p",
        text: "The exact figure depends on your market, the system, and the utility rate, which is precisely why this article will not give you one. Anybody quoting a national payback number is selling a number rather than a calculation. Run it per quote or do not put it on the page.",
      },
      {
        t: "callout",
        label: "Check your own calculator this week",
        text: "Most solar companies have a payback calculator on their website or in their proposal tool with the credit baked into the formula. If nobody has touched it since 2025 it is producing figures that are wrong by about a third, and a homeowner who checks that against their accountant will not come back.",
      },
      {
        t: "h2",
        text: "Why is payback a weak frame?",
      },
      {
        t: "p",
        text: "Because it asks a homeowner to care about a break-even point ten years out, which is not how people decide anything. It is also enormously sensitive to assumptions they cannot check. Change the assumed rate escalation by one percentage point and the answer moves by years.",
      },
      {
        t: "p",
        text: "And it invites the objection you least want: what if I move. A payback frame makes the whole case depend on staying put, when in most markets a paid-off system contributes to the sale price instead.",
      },
      {
        t: "h2",
        text: "What should you put in front of them instead?",
      },
      {
        t: "p",
        text: "The monthly comparison, which survives every objection payback attracts.",
      },
      {
        t: "steps",
        items: [
          {
            title: "What they pay the utility now",
            body: "Averaged across twelve months, from their actual bills. This is the only number in the conversation they already believe.",
          },
            {
            title: "What they would pay instead",
            body: "One line underneath, same units. On third-party ownership this is the whole comparison and there is no payback period to discuss at all, which is worth saying out loud because homeowners assume there is one.",
          },
          {
            title: "What the gap does over time",
            body: "The utility line rises, the other does not or rises on a known schedule. Draw it. This is the argument, and it does not require anyone to model degradation.",
          },
          {
            title: "Payback only if they ask, and then honestly",
            body: "If they want the figure, calculate it for their quote, state the assumptions out loud, and say which of them you are least sure about. That last part buys more credibility than a confident number ever does.",
          },
        ],
      },
      {
        t: "h2",
        text: "What about third-party ownership?",
      },
      {
        t: "p",
        text: "A lease or a PPA has no payback period, because the homeowner has not laid out capital to recover. That sounds obvious and it confuses people constantly, because they arrive expecting to ask the question and nobody tells them it does not apply.",
      },
      {
        t: "p",
        text: "Saying it plainly is a small, useful moment in an appointment: there is nothing to pay back here, the question is simply whether this monthly number is better than that one. See [solar lease vs PPA for installers](/blog/solar-lease-vs-ppa-for-installers) for which of the two suits a given roof, and [how to sell solar after the tax credit](/blog/how-to-sell-solar-after-the-tax-credit) for where the credit sits now.",
      },
      {
        t: "h2",
        text: "The wider point",
      },
      {
        t: "p",
        text: "The companies struggling most right now are the ones whose entire quantitative case was a rebate and a payback figure. Both were doing the persuading, and neither was really an argument about the product. What is left is the bill, the escalator, and whether the homeowner trusts you, which is a harder sale and a more durable one.",
      },
      {
        t: "p",
        text: "It also rewards the parts of the business that were always undervalued: answering fast, following up properly, and having enough genuine proof that a nervous buyer says yes. See [how to rebuild your solar pitch without the credit](/blog/how-to-rebuild-your-solar-pitch-without-the-credit).",
      },
    ],
    faq: [
      {
        q: "What is the solar payback period in 2026?",
        a: "There is no single answer, and anyone quoting one nationally is guessing. It depends on your utility rate, the system, and local incentives. Run it per quote, and if the figure is uncomfortable, say so rather than adjusting the assumptions until it improves.",
      },
      {
        q: "Do leases and PPAs have a payback period?",
        a: "No. The homeowner has not outlaid capital, so there is nothing to recover. The comparison is simply the monthly payment against the utility bill it replaces, which is easier to verify than any payback model.",
      },
      {
        q: "Should we still show payback on proposals?",
        a: "Only if it is calculated for that quote and the assumptions are stated. A stale figure from a calculator nobody has updated since 2025 is worse than omitting it, because it is checkable and wrong.",
      },
      {
        q: "Does a solar system still add value to a house?",
        a: "Generally yes for an owned system, which is the usual answer to the what-if-I-move objection. On third-party ownership the answer depends on the transfer terms, so know them before the question arrives.",
      },
    ],
    related: [
      "how-to-rebuild-your-solar-pitch-without-the-credit",
      "solar-lease-vs-ppa-for-installers",
      "is-there-still-a-solar-tax-credit-in-2026",
    ],
  },
];
