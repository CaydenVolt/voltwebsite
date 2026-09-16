import type { Post } from "../types";

/**
 * Cluster 1: lead generation. Hub is how-to-get-more-solar-leads; the other
 * eight answer a narrower question and link back up to it.
 */
export const LEADS_POSTS: readonly Post[] = [
  {
    slug: "how-to-get-more-solar-leads",
    title: "How to get more solar leads",
    metaTitle: "How to Get More Solar Leads: 9 Channels, Ranked",
    metaDescription:
      "Nine ways solar companies get leads, what each one costs, and the order to fix them in. Written for owners, with real benchmark numbers and no filler.",
    keyword: "how to get more solar leads",
    secondary: [
      "solar lead generation",
      "solar leads",
      "get solar leads",
      "solar lead channels",
      "solar marketing",
    ],
    excerpt:
      "Most solar companies do not have a lead problem. They have a response problem, a ranking problem, and one paid channel run badly. Here is the order to fix them in.",
    category: "leads",
    intent: "Informational",
    icon: "magnet",
    pillar: true,
    published: "2026-09-14",
    answer:
      "Solar companies get more leads by fixing three things in this order: response time on the enquiries they already receive, a Google Business Profile that ranks in the local map pack, and one paid channel run properly. Most owners add a fourth channel before the first three work, which is why the pipeline stays flat while the ad spend climbs.",
    takeaways: [
      "Answer inside five minutes. Around 78% of buyers go with whoever replies first, and the average lead waits far longer than that.",
      "Fix the channels that cost nothing per lead first: the Business Profile, reviews, past customers and referrals.",
      "One paid channel run properly beats three run badly. Budget $80 to $300 per raw lead on Google search.",
      "Measure cost per sat appointment, not cost per lead. A cheap lead that never sits is the expensive one.",
    ],
    body: [
      {
        t: "p",
        text: "Every solar owner who calls us opens with the same sentence: we need more leads. Almost none of them do. What they have is a pile of enquiries from the last six months that nobody called back twice, a Business Profile with eleven reviews sitting below three competitors, and a Google Ads account that has been running on the same three keywords since 2023.",
      },
      {
        t: "p",
        text: "Adding a tenth channel to that does not fix it. It just spreads a bad conversion rate across more traffic. So this piece is ordered the way the work should actually happen, cheapest and fastest first, and every section says plainly what it costs.",
      },

      { t: "h2", text: "Why the lead count is usually not the problem" },
      {
        t: "p",
        text: "Solar is a high-consideration purchase with a long decision window. A homeowner requesting a quote is not buying today. They are going to check financing, ask a spouse, read reviews, and get two more quotes. The gap between enquiry and signature is measured in weeks, and most of what happens in that gap is not marketing at all. It is whether anyone from your company was present.",
      },
      {
        t: "figures",
        items: [
          { value: "78%", label: "Buy from whoever responds first" },
          { value: "21x", label: "More likely to qualify inside 5 min" },
          { value: "8–12%", label: "Typical solar lead to sale rate" },
        ],
        source:
          "Response-time figures are widely reported across sales research; the solar close-rate band comes from installer benchmarking published by [SurgePV](https://www.surgepv.com/blog/solar-lead-response-time) and similar operators. Treat them as direction, not gospel, and measure your own.",
      },
      {
        t: "p",
        text: "Read those three numbers together and the conclusion is uncomfortable. If you close 8% and your competitor closes 15% on the same traffic, they are not buying better leads. They are answering faster and following up longer. Doubling your lead count would get you to where they already are while doubling your cost.",
      },
      {
        t: "callout",
        label: "Do this first",
        text: "Before you read the rest, pull your last 50 web enquiries and write down the minutes between the form submission and your first outbound attempt. If the median is over an hour, that is the single most profitable number on this page. [Speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies) covers how to fix it.",
      },

      { t: "h2", text: "The nine channels, and what each one really costs" },
      {
        t: "p",
        text: "Here is every channel worth running for a residential solar company, with the honest cost shape of each. Cost per lead is a national blend and will move with your market. What matters more is the column on the right: how long the channel takes to produce anything.",
      },
      {
        t: "table",
        caption:
          "Cost bands blended from published 2026 benchmarks. Your market, your landing page and your close rate all move these.",
        head: ["Channel", "Typical cost per lead", "Time to first lead"],
        rows: [
          ["Speed to lead on existing enquiries", "$0 (you already paid for these)", "Same day"],
          ["Google Business Profile and map pack", "$0 per lead, time to maintain", "4 to 12 weeks"],
          ["Reviews and word of mouth", "$0 per lead", "Ongoing, compounds"],
          ["Referrals from past customers", "$0 to a few hundred per closed job", "2 to 6 weeks"],
          ["Database reactivation", "$0 per lead, one campaign", "Days"],
          ["Local organic search", "Time or an SEO fee", "3 to 9 months"],
          ["Google Ads search", "$80 to $300", "Days"],
          ["Local Services Ads", "Around $53 to $110", "1 to 3 weeks to verify"],
          ["Bought or shared leads", "$30 to $150", "Immediately"],
        ],
      },
      {
        t: "p",
        text: "Notice that the five free rows sit at the top and the paid rows sit at the bottom. That is not ideology. It is that the free channels also improve the paid ones: a company with 180 reviews pays less per booked job on the same Google Ads spend than a company with 11, because more of the clicks convert.",
      },

      { t: "h2", text: "Start with the leads you are already losing" },
      {
        t: "p",
        text: "This is the only section that pays for itself in a week. Three fixes, in order of how much they return.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Answer missed calls with a text, automatically",
            body: "A missed call from a solar enquiry is not a message left on voicemail. It is a homeowner who has already dialled the next installer. An automatic text back inside a few seconds keeps that conversation alive without anybody being free to pick up. See [missed-call text-back for solar](/blog/missed-call-text-back-for-solar).",
          },
          {
            title: "Reply to web forms in minutes, not hours",
            body: "Whatever your form does now, the target is an outbound text and email inside five minutes and a call attempt inside fifteen. That is a routing problem, not a staffing one, and it is the single change with the highest return in this article.",
          },
          {
            title: "Follow up more than twice",
            body: "Most solar companies stop after two attempts. The decision window is weeks long, so attempts three through eight are where the quiet half of the pipeline lives. [How many times to follow up with a solar lead](/blog/how-many-times-should-you-follow-up-with-a-solar-lead) has the cadence.",
          },
        ],
      },

      { t: "h2", text: "Rank where solar buyers actually search" },
      {
        t: "p",
        text: "Most solar searches carry local intent, and most local searches end in the map pack: the three business listings above the blue links. Ranking there is not a website job. It is a Google Business Profile job, and the ingredients are proximity, relevance, review volume and recent activity.",
      },
      {
        t: "ul",
        items: [
          "Pick the right primary category. **Solar energy contractor** is the one most installers should hold; getting this wrong quietly caps everything else.",
          "Set service areas to the towns you actually install in, not the whole state. A profile claiming a 200 mile radius ranks for none of it.",
          "Post to the profile regularly. Recent activity is a ranking input and almost nobody does it. See [Google Business Profile posts for solar](/blog/google-business-profile-posts-for-solar).",
          "Build review volume steadily rather than in bursts, which is also what keeps you inside Google's rules.",
        ],
      },
      {
        t: "link",
        href: "/blog/local-seo-for-solar-contractors",
        label: "Local SEO for solar contractors",
        note: "The full version of this section",
      },

      { t: "h2", text: "Turn past customers into the cheapest channel you have" },
      {
        t: "p",
        text: "Every installed system is a roof with a neighbour, an annual bill comparison, and a homeowner who made a decision they want validated. Two channels come out of that, and both cost nothing per lead.",
      },
      {
        t: "p",
        text: "The first is reviews. Referral prospects and review-led prospects arrive further along than any paid lead, because somebody else has already done the trust work. The second is asking directly. A structured referral ask, sent at the right moment, is closer to a sales process than a marketing one, which is why most companies never build it. [Solar referral programme ideas](/blog/solar-referral-program-ideas) covers the mechanics.",
      },
      {
        t: "p",
        text: "There is a third, and it is the one owners forget entirely: the leads already in the database who never bought. A company three years old is sitting on hundreds of them. [How to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads) is a campaign you can run this week for the cost of the messages.",
      },

      { t: "h2", text: "Then, and only then, buy traffic" },
      {
        t: "p",
        text: "Paid is the fastest lever and the easiest one to waste. Run it once the free channels work, because every improvement upstream makes the paid spend cheaper per job.",
      },
      {
        t: "ol",
        items: [
          "**Google search** catches people who are already looking. Expect $8 to $45 a click and $80 to $300 a raw lead, with non-branded terms at the top of that range. [Google Ads for solar companies](/blog/google-ads-for-solar-companies) has the account structure.",
          "**Local Services Ads** sit above search, are charged per lead rather than per click, and need a licence and insurance check. Reported costs per lead run roughly half of search. See [Local Services Ads for solar](/blog/local-services-ads-for-solar).",
          "**Paid social** creates demand rather than catching it, so leads are cheaper and colder. It needs a longer follow-up sequence to work. See [Facebook ads for solar companies](/blog/facebook-ads-for-solar-companies).",
          "**Bought leads** are the fastest and the least defensible, because you are usually one of four installers who bought the same person. [Are solar leads worth buying](/blog/are-solar-leads-worth-buying) is the honest version.",
        ],
      },

      { t: "h2", text: "How to tell whether a channel is working" },
      {
        t: "p",
        text: "Cost per lead is the metric that hides the most. A $40 lead that never answers the phone is more expensive than a $250 lead that sits for a survey. Track the chain instead, and track it per channel.",
      },
      {
        t: "table",
        head: ["Metric", "What it tells you", "Where it usually breaks"],
        rows: [
          ["Cost per lead", "Whether the channel is priced sanely", "Looks fine while quality is terrible"],
          ["Contact rate", "Whether anyone is answering you", "Speed to lead, wrong phone number"],
          ["Appointment set rate", "Whether the lead was ever real", "Bad targeting, renters, no roof"],
          ["Sat rate", "Whether the appointment holds", "No reminders, no confirmation"],
          ["Close rate", "Whether the sale process works", "Pricing, financing, follow-up"],
          ["Cost per sat appointment", "The only number worth comparing channels on", "Nobody calculates it"],
        ],
      },
      {
        t: "p",
        text: "If you compute one new number this quarter, make it cost per sat appointment by channel. It reorders most solar marketing budgets the first time anyone looks at it.",
      },

      { t: "h2", text: "A 90-day order of operations" },
      {
        t: "steps",
        items: [
          {
            title: "Days 1 to 14: stop the leak",
            body: "Missed-call text-back live, web forms routed to an instant text and email, and a follow-up sequence that runs to at least eight touches over three weeks. Nothing new is being bought yet.",
          },
          {
            title: "Days 15 to 45: fix the free channels",
            body: "Business Profile categories, service areas and photos corrected. A review request going out automatically after every install. One database reactivation campaign sent to everyone who never bought.",
          },
          {
            title: "Days 46 to 90: add one paid channel",
            body: "One channel, one landing page, one tracking setup, enough budget to leave it alone for six weeks. Judge it on cost per sat appointment, not on cost per lead, and do not add a second channel until the first one is boring.",
          },
        ],
      },
      {
        t: "quote",
        text: "The companies that grow in a tight solar market are rarely the ones with the most leads. They are the ones whose leads do not go unanswered.",
      },
    ],
    faq: [
      {
        q: "What is the cheapest way to get solar leads?",
        a: "The leads you already have. Reactivating an old database, answering missed calls automatically and asking past customers for referrals all cost close to nothing per lead and produce results in days. Paid channels are faster to start but never get cheaper than free.",
      },
      {
        q: "How many leads does a solar company need a month?",
        a: "Work backwards from jobs. At an 8% to 12% close rate, ten installs a month needs roughly 85 to 125 qualified leads. If your close rate is 20% because your follow-up is good, the same ten installs needs half that, which is why conversion work is cheaper than lead buying.",
      },
      {
        q: "Should I buy solar leads or generate my own?",
        a: "Both, in that order of urgency but the opposite order of priority. Bought leads fill a gap this month; owned channels like your Business Profile, reviews and referrals are what stop you needing to buy them next year. Running only bought leads means renting your pipeline forever.",
      },
      {
        q: "How long before SEO produces solar leads?",
        a: "Local map pack improvements often show in four to twelve weeks because they depend on profile quality and reviews. Organic rankings for competitive service terms usually take three to nine months. See [how long SEO takes for solar companies](/blog/how-long-does-seo-take-for-solar-companies).",
      },
    ],
    related: [
      "how-much-do-solar-leads-cost",
      "speed-to-lead-for-solar-companies",
      "local-seo-for-solar-contractors",
    ],
  },

  {
    slug: "how-much-do-solar-leads-cost",
    title: "How much do solar leads cost?",
    metaTitle: "How Much Do Solar Leads Cost? 2026 Prices by Channel",
    metaDescription:
      "Real 2026 costs for solar leads: Google Ads, Local Services Ads, shared lists and exclusive appointments, plus what a booked survey actually costs you.",
    keyword: "how much do solar leads cost",
    secondary: ["solar lead cost", "solar cost per lead", "price of solar leads", "solar lead prices"],
    excerpt:
      "A solar lead costs between $30 and $300 depending on who is selling it and how many other installers got the same one. Here is the price of each type, and the number that matters more.",
    category: "leads",
    intent: "Commercial",
    icon: "tag",
    published: "2026-08-13",
    answer:
      "Solar leads cost roughly $30 to $150 when bought from a lead vendor, $80 to $300 when generated through Google Ads, and around $53 to $110 through Local Services Ads. A booked appointment that actually sits costs far more, commonly $300 to $800, because no-shows and unqualified enquiries are filtered out at your expense.",
    takeaways: [
      "Bought and shared leads are the cheapest per lead and the most expensive per job.",
      "Google Ads clicks for solar run $8 to $45, which is why a raw lead lands between $80 and $300.",
      "The only comparable number across channels is cost per sat appointment, not cost per lead.",
      "Improving close rate by four points cuts your effective lead cost more than any negotiation with a vendor.",
    ],
    body: [
      {
        t: "p",
        text: "Lead pricing in solar is quoted in a way that makes channels look comparable when they are not. A $40 shared lead and a $240 search lead are different products with different probabilities attached, and until you price them per booked survey you are comparing a lottery ticket to a contract.",
      },

      { t: "h2", text: "What each type of solar lead costs in 2026" },
      {
        t: "table",
        caption: "Blended national bands. Competitive metros sit at the top of each range.",
        head: ["Lead type", "Cost per lead", "What you are actually buying"],
        rows: [
          ["Shared marketplace lead", "$30 to $110", "A form fill sold to three or four installers"],
          ["Exclusive lead", "$90 to $200", "A form fill sold once, quality still unverified"],
          ["Google Ads search", "$80 to $300", "Someone actively searching, on your landing page"],
          ["Local Services Ads", "$53 to $110", "A call or message, charged per lead not per click"],
          ["Paid social", "$25 to $90", "Interest you created, colder and slower to close"],
          ["Sat appointment (bought)", "$300 to $800", "A held appointment after no-shows are filtered"],
          ["Organic and map pack", "Effectively $0 per lead", "A ranking you own, paid for in time"],
        ],
      },
      {
        t: "p",
        text: "For context, the wider home improvement category averages roughly $8 a click and about $91 a lead in published Google Ads benchmarks. Solar sits above that because the job value is high and the auction is crowded.",
      },

      { t: "h2", text: "Why cost per lead is the wrong number" },
      {
        t: "p",
        text: "Take two channels. Channel A sells leads at $50 and 12% of them sit for a survey. Channel B costs $220 a lead and 45% sit. Channel A looks four times cheaper and is not.",
      },
      {
        t: "table",
        head: ["", "Channel A", "Channel B"],
        rows: [
          ["Cost per lead", "$50", "$220"],
          ["Sat rate", "12%", "45%"],
          ["Cost per sat appointment", "$417", "$489"],
          ["Close rate on sat appointments", "20%", "35%"],
          ["Cost per closed job", "$2,083", "$1,397"],
        ],
      },
      {
        t: "p",
        text: "The cheap lead is 49% more expensive per job. This is the calculation almost no solar company runs, and it is the reason budgets sit in the wrong channel for years.",
      },
      {
        t: "callout",
        label: "Rule of thumb",
        text: "Divide your channel spend by the number of appointments that actually sat, not by the number of forms you received. If a vendor will not give you the data to do that, the number they are quoting is a marketing figure, not a cost.",
      },

      { t: "h2", text: "What moves your cost per lead" },
      {
        t: "ul",
        items: [
          "**Market density.** Metros with twenty installers bidding cost multiples of a rural county with three.",
          "**Landing page quality.** The same click on a page that converts at 12% instead of 5% cuts cost per lead by more than half. See [how to increase solar website conversion rate](/blog/how-to-increase-solar-website-conversion-rate).",
          "**Keyword intent.** Branded and long-tail terms are cheap; non-branded head terms like solar installers near me are the expensive end.",
          "**Review count.** More reviews means a higher click-through and a higher conversion rate on the same spend.",
          "**Speed to lead.** It does not change what you paid, but it changes how many of the leads you paid for turn into anything.",
        ],
      },

      { t: "h2", text: "The lever nobody prices" },
      {
        t: "p",
        text: "Effective lead cost is spend divided by jobs. You can attack the numerator by negotiating with vendors, which moves it a little, or the denominator by closing more of what you already buy, which moves it a lot.",
      },
      {
        t: "figures",
        items: [
          { value: "8–12%", label: "Typical solar close rate" },
          { value: "15%+", label: "What strong operators reach" },
          { value: "~33%", label: "Effective lead cost cut from that gap" },
        ],
      },
      {
        t: "p",
        text: "Going from 9% to 13% on identical traffic cuts your cost per job by roughly a third, without renegotiating anything. That work is follow-up, appointment confirmation and proof, and it is covered in [why solar leads go cold](/blog/why-solar-leads-go-cold).",
      },

      { t: "h2", text: "What you should be paying" },
      {
        t: "p",
        text: "A reasonable target for a residential installer with an average job value in the $18,000 to $30,000 range is a cost per closed job under 10% of revenue, and comfortably under that once organic and referral volume carries part of the load. If a channel cannot get there after a fair test, it is not a pricing problem, it is the wrong channel for your market.",
      },
      {
        t: "link",
        href: "/pricing",
        label: "What the whole system costs",
        note: "One monthly subscription, no per-lead pricing",
      },
    ],
    faq: [
      {
        q: "Are cheap solar leads worth it?",
        a: "Only if you measure them properly. A $35 shared lead sold to four installers can still work if your response time is under five minutes, because the first caller usually wins. If you are answering in hours, cheap shared leads are the worst possible purchase.",
      },
      {
        q: "How much should a solar company spend on marketing?",
        a: "Most healthy installers land between 6% and 12% of revenue across all channels. What matters more than the percentage is that you can attribute it: spend without a cost per sat appointment attached is a guess with an invoice.",
      },
      {
        q: "Why are solar Google Ads clicks so expensive?",
        a: "Job value. When a single close is worth tens of thousands, competitors can rationally bid $20 or more a click, and the auction settles where the strongest operators can still profit. Your defence is conversion rate, not bidding harder.",
      },
    ],
    related: [
      "how-to-get-more-solar-leads",
      "are-solar-leads-worth-buying",
      "solar-google-ads-cost-per-lead",
    ],
  },

  {
    slug: "are-solar-leads-worth-buying",
    title: "Are solar leads worth buying?",
    metaTitle: "Are Solar Leads Worth Buying? An Honest Answer",
    metaDescription:
      "When bought solar leads pay off and when they burn cash, how to test a vendor without risking the quarter, and the conditions you need in place first.",
    keyword: "are solar leads worth buying",
    secondary: ["buying solar leads", "should I buy solar leads", "solar lead vendors", "purchased solar leads"],
    excerpt:
      "Bought leads are worth it under three conditions and a waste of money without them. Here are the conditions, and how to run a test that tells you the truth in 30 days.",
    category: "leads",
    intent: "Commercial",
    icon: "scales",
    published: "2026-07-12",
    answer:
      "Buying solar leads is worth it when you answer within five minutes, follow up at least eight times, and can measure cost per sat appointment. Without all three, bought leads lose money reliably, because you are usually one of several installers who purchased the same homeowner and the slowest one gets nothing.",
    takeaways: [
      "A bought lead is a race. If you are not the first call, you are subsidising whoever is.",
      "Test with a fixed budget, a fixed window and one channel, never as a rolling top-up.",
      "Exclusive costs more per lead and is usually cheaper per job. Verify exclusivity in writing.",
      "Bought leads are a bridge, not a business. Build owned channels underneath them.",
    ],
    body: [
      {
        t: "p",
        text: "The case against buying leads is usually made by people selling something else, and the case for is made by people selling leads. Neither is much use when you have twelve crews idle in February.",
      },
      {
        t: "p",
        text: "So here is the neutral version. Bought leads are a legitimate instrument with a narrow set of conditions. Meet them and the channel works. Miss one and it does not, no matter how good the vendor is.",
      },

      { t: "h2", text: "The three conditions" },
      {
        t: "steps",
        items: [
          {
            title: "You answer in minutes",
            body: "A shared lead is sold to three or four installers at once. The one who calls first has an enormous advantage, and the research is blunt about it: roughly 78% of buyers go with whoever responds first. If your median response is an hour, you are buying the right to be second.",
          },
          {
            title: "You follow up eight times or more",
            body: "Most bought leads do not answer the first attempt. Companies that stop at two attempts write off leads they already paid for. See [how many times to follow up with a solar lead](/blog/how-many-times-should-you-follow-up-with-a-solar-lead).",
          },
          {
            title: "You can measure cost per sat appointment",
            body: "Not cost per lead. If you cannot tell which vendor produced the appointments that actually held, you cannot tell which vendor to keep, and you will end up keeping the cheapest one.",
          },
        ],
      },
      {
        t: "callout",
        label: "The honest test",
        text: "If you cannot say, from memory, what percentage of last month's bought leads were contacted within fifteen minutes, fix that before spending another dollar with a vendor. It is the difference between the channel working and not.",
      },

      { t: "h2", text: "What you are actually buying" },
      {
        t: "table",
        head: ["What the vendor says", "What it usually means"],
        rows: [
          ["Qualified lead", "Somebody filled in a form. Nothing has been verified."],
          ["Exclusive lead", "Sold to you once. Confirm in the contract, not the sales call."],
          ["Homeowner verified", "An address matched a record. It does not mean they own the roof."],
          ["Live transfer", "A call routed to you. Quality varies wildly by vendor."],
          ["Appointment", "A slot in a calendar. Ask for the sat rate, not the set rate."],
        ],
      },
      {
        t: "p",
        text: "The single most useful question to ask a vendor is what percentage of their appointments sit. Anyone who does not track it is not the partner you want, and anyone quoting above 80% should be asked how it is measured.",
      },

      { t: "h2", text: "How to run a 30-day test that tells the truth" },
      {
        t: "ol",
        items: [
          "Pick **one** vendor and **one** lead type. Testing three at once produces noise, not data.",
          "Set a fixed budget you are willing to lose, sized at roughly 40 to 60 leads. Fewer than 40 and a run of bad luck looks like a verdict.",
          "Route every lead into the same follow-up sequence your own leads get. Different treatment invalidates the comparison.",
          "Tag the source so it survives into the appointment record. If it does not reach your calendar, you cannot measure it.",
          "Judge on **cost per sat appointment** and **close rate**, side by side with your own channels.",
          "Only then decide whether to scale, renegotiate or stop.",
        ],
      },

      { t: "h2", text: "When buying leads is the wrong answer" },
      {
        t: "ul",
        items: [
          "You have under 25 Google reviews. Bought leads will compare you to installers with hundreds and you will lose on the same call.",
          "Nobody owns follow-up. Bought leads need more follow-up than inbound, not less.",
          "You are buying to cover a sales problem. A channel cannot fix a close rate.",
          "You have never run a reactivation campaign on your own database. That is free and you are skipping it. See [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads).",
        ],
      },

      { t: "h2", text: "The strategic problem with buying leads forever" },
      {
        t: "p",
        text: "A bought lead is rented demand. The month you stop paying, it stops arriving, and the price only ever moves in one direction because the vendor sells to your competitors too. Owned channels behave the opposite way: a Business Profile that ranks, a review count that compounds and a database that grows all get cheaper per lead over time.",
      },
      {
        t: "p",
        text: "Use bought leads to bridge a gap or to test a new territory. Build the owned side underneath so the bridge is not load-bearing.",
      },
      {
        t: "link",
        href: "/blog/exclusive-vs-shared-solar-leads",
        label: "Exclusive vs shared solar leads",
        note: "If you decide to buy, read this before you sign",
      },
    ],
    faq: [
      {
        q: "What is a good close rate on bought solar leads?",
        a: "Meaningfully lower than inbound. Installers with fast response and real follow-up commonly report 5% to 10% on shared leads and better on exclusive. If you are under 3%, the problem is usually response time rather than the vendor.",
      },
      {
        q: "How do I know if a solar lead vendor is reselling my leads?",
        a: "Ask for exclusivity in the contract with a stated resale window, then test it. Submit a controlled enquiry and see how many installers contact that number. Vendors who are honest about sharing are safer than vendors who claim exclusivity vaguely.",
      },
      {
        q: "Can I get a refund for bad solar leads?",
        a: "Most vendors offer credits for provably invalid leads such as disconnected numbers or wrong service areas. Read the window, it is often 24 to 72 hours, and build the disputing into someone's job rather than leaving it to whoever remembers.",
      },
    ],
    related: [
      "exclusive-vs-shared-solar-leads",
      "how-much-do-solar-leads-cost",
      "solar-lead-generation-companies",
    ],
  },

  {
    slug: "exclusive-vs-shared-solar-leads",
    title: "Exclusive vs shared solar leads",
    metaTitle: "Exclusive vs Shared Solar Leads: Which Is Cheaper?",
    metaDescription:
      "Exclusive solar leads cost two to three times more and usually close cheaper per job. The maths, the exceptions, and how to verify exclusivity is real.",
    keyword: "exclusive vs shared solar leads",
    secondary: ["exclusive solar leads", "shared solar leads", "solar lead exclusivity", "solar lead types"],
    excerpt:
      "Exclusive leads cost two to three times more per lead. Whether they are more expensive per job depends entirely on one number in your own business.",
    category: "leads",
    intent: "Commercial",
    icon: "scales",
    published: "2026-06-30",
    answer:
      "Exclusive solar leads are sold to one installer and typically cost $90 to $200. Shared leads go to three or four installers at $30 to $110. Exclusive usually wins on cost per closed job, but only for companies whose response time is slower than five minutes. Fast responders can make shared leads work profitably.",
    takeaways: [
      "Shared leads reward speed. If you answer first, the discount is real.",
      "Exclusive leads reward process. They forgive a slower response but not weak follow-up.",
      "Compare on cost per closed job, which flips the ranking roughly half the time.",
      "Exclusivity is only worth paying for if it is written down with a defined window.",
    ],
    body: [
      {
        t: "p",
        text: "This choice gets argued as a matter of principle when it is really a matter of arithmetic, and the arithmetic turns on one number you already have: how fast your team responds.",
      },

      { t: "h2", text: "What each one actually is" },
      {
        t: "table",
        head: ["", "Shared", "Exclusive"],
        rows: [
          ["Sold to", "3 to 4 installers, usually at once", "One installer"],
          ["Typical price", "$30 to $110", "$90 to $200"],
          ["Contact rate", "Lower, the homeowner is fielding calls", "Higher"],
          ["What wins it", "Speed", "Process"],
          ["Biggest risk", "You are the third caller", "Paying a premium for a bad lead"],
        ],
      },

      { t: "h2", text: "The maths that decides it" },
      {
        t: "p",
        text: "Two installers buy the same volume. One responds in three minutes, the other in ninety.",
      },
      {
        t: "table",
        caption: "Illustrative, using a shared lead at $55 and an exclusive at $150.",
        head: ["", "Fast responder, shared", "Slow responder, shared", "Slow responder, exclusive"],
        rows: [
          ["Cost per lead", "$55", "$55", "$150"],
          ["Contact rate", "62%", "28%", "48%"],
          ["Appointment sat rate", "22%", "9%", "19%"],
          ["Cost per sat appointment", "$250", "$611", "$789"],
          ["Close rate", "28%", "22%", "30%"],
          ["Cost per closed job", "$893", "$2,778", "$2,632"],
        ],
      },
      {
        t: "p",
        text: "The fast responder on cheap shared leads beats both of the slow responder's options by a wide margin. The slow responder is better off on exclusive, but is still paying nearly three times what the fast responder pays. Speed is worth more than exclusivity, and it is free.",
      },
      {
        t: "callout",
        label: "The real takeaway",
        text: "Before you upgrade to exclusive leads to escape the competition, check whether you are actually losing to competitors or to your own response time. Fixing the second is cheaper and it makes the exclusive leads work better too. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },

      { t: "h2", text: "How to verify exclusivity is real" },
      {
        t: "ol",
        items: [
          "Get the exclusivity clause **in the contract**, not on the call. Vague language on a sales call is not a commitment.",
          "Ask for the **resale window**. Some vendors resell after 30, 60 or 90 days. That may be fine, but you should know.",
          "Ask whether the lead is exclusive to you or **exclusive per campaign**. The second means a sister brand can buy it.",
          "Run a controlled submission through a number you control and count how many installers ring it.",
          "Check whether the same lead appears under a second vendor's feed. Duplicates across vendors are common.",
        ],
      },

      { t: "h2", text: "When shared is the right call" },
      {
        t: "ul",
        items: [
          "You have automated instant response, so being first is the default rather than luck.",
          "You are testing a new territory and want volume cheaply before committing.",
          "Your sales process is strong enough that being one of four quotes does not scare you.",
        ],
      },

      { t: "h2", text: "When exclusive is the right call" },
      {
        t: "ul",
        items: [
          "Your team responds in hours and you cannot change that quickly.",
          "Your close rate is high but your contact rate is low, which means the leads you reach convert well.",
          "You sell a premium product where being compared on price against three others actively hurts you.",
          "Your market is small enough that three installers calling the same homeowner damages your local reputation.",
        ],
      },
      { t: "h2", text: "Running both at once" },
      {
        t: "p",
        text: "Most installers who buy leads at any scale end up running both, and that is a reasonable place to land. The mistake is running them through the same process and then comparing the results, because the two lead types need different handling from the first minute.",
      },
      {
        t: "ol",
        items: [
          "**Route shared leads to whoever can dial immediately.** They are a race, and a queue is the enemy. If nobody is free, an automated text goes first and the call follows.",
          "**Route exclusive leads to your better closers.** You paid a premium for the right to a longer, calmer conversation, so use it.",
          "**Score them separately.** Blending the two into one cost per lead hides which is working. Keep two lines on the report, always.",
          "**Set different follow-up lengths.** Shared leads decay fast because three other installers are working them. Exclusive leads justify a longer sequence.",
          "**Review monthly, not weekly.** Solar volumes are small enough that a bad fortnight looks like a trend and is not.",
        ],
      },
      {
        t: "p",
        text: "One more thing worth saying plainly: neither type fixes a pipeline on its own. Bought leads of either kind are rented demand, and the month you stop paying they stop arriving. Build the owned channels underneath them, which is what [how to get more solar leads](/blog/how-to-get-more-solar-leads) is about.",
      },
      {
        t: "link",
        href: "/blog/how-to-qualify-solar-leads",
        label: "How to qualify solar leads",
        note: "Either way, this is what stops you paying for bad ones twice",
      },
    ],
    faq: [
      {
        q: "Are exclusive solar leads worth the extra cost?",
        a: "For companies with slow response times, yes, usually. For companies that respond within minutes, often not: the speed advantage on shared leads is worth more than the exclusivity premium. Run the cost per closed job on both before committing.",
      },
      {
        q: "How many installers get a shared solar lead?",
        a: "Typically three or four, sometimes more. Ask the vendor for the exact cap and get it in writing. A vendor unwilling to state a cap is selling to as many buyers as it can find.",
      },
      {
        q: "Can I negotiate solar lead prices?",
        a: "Yes, particularly on volume and on commitment length. The more useful negotiation is on terms: return windows, exclusivity, and access to the data you need to calculate cost per sat appointment.",
      },
    ],
    related: [
      "are-solar-leads-worth-buying",
      "how-much-do-solar-leads-cost",
      "speed-to-lead-for-solar-companies",
    ],
  },

  {
    slug: "how-to-qualify-solar-leads",
    title: "How to qualify solar leads",
    metaTitle: "How to Qualify Solar Leads Before You Send a Rep",
    metaDescription:
      "A qualification framework for solar: ownership, roof, bill, shading, timeline and decision maker, plus where to ask each one without killing the lead.",
    keyword: "how to qualify solar leads",
    secondary: ["solar lead qualification", "qualify solar prospects", "solar lead scoring", "solar prospect screening"],
    excerpt:
      "Sending a rep to a renter with a shaded north-facing roof costs more than the lead did. Six questions, in the right order, in the right place.",
    category: "leads",
    intent: "Informational",
    icon: "funnel",
    published: "2026-06-02",
    answer:
      "Qualify solar leads on six things: property ownership, roof condition and orientation, monthly electricity bill, shading, decision timeline, and whether everyone who has to sign is involved. Ask ownership and bill on the form, the rest on a short call, and never send a truck before all six are answered.",
    takeaways: [
      "Two questions on the form, four on the call. Long forms kill volume, short calls do not.",
      "The bill amount is the strongest single predictor of whether the job is worth a survey.",
      "A missing decision maker is the most common reason a good appointment produces nothing.",
      "Disqualify early and politely. A fast no is cheaper than a slow maybe.",
    ],
    body: [
      {
        t: "p",
        text: "An unqualified solar appointment costs more than the lead. There is a rep, a vehicle, a two hour round trip, a design, and the opportunity cost of the appointment slot. Getting six facts before that happens is the highest-return hour of process work in a solar company.",
      },

      { t: "h2", text: "The six qualifiers" },
      {
        t: "table",
        head: ["Qualifier", "Ask it", "Disqualifies when"],
        rows: [
          ["Property ownership", "On the form", "Renting, or a landlord is not involved"],
          ["Monthly electricity bill", "On the form", "Too low to produce a sensible payback"],
          ["Roof age and material", "On the call", "Roof needs replacing first, or is unsuitable"],
          ["Shading and orientation", "On the call, verify remotely", "Heavy shade with no workaround"],
          ["Timeline", "On the call", "No intent inside 6 months, move to nurture"],
          ["Decision makers", "On the call", "Co-owner or spouse will not attend"],
        ],
      },

      { t: "h2", text: "What goes on the form, and what does not" },
      {
        t: "p",
        text: "Every field you add reduces submissions. So the form carries only the two qualifiers that are quick to answer, unambiguous, and eliminate the largest share of waste: do you own the property, and roughly what is your monthly electricity bill. A bill range as buttons rather than a number field converts better and is accurate enough.",
      },
      {
        t: "p",
        text: "Everything else belongs on the call, where you can ask follow-ups and where a soft answer can be explored rather than rejected by a dropdown. More on form design in [solar quote form best practices](/blog/solar-quote-form-best-practices).",
      },
      {
        t: "callout",
        label: "Do not do this",
        text: "Do not put shading, roof age, financing interest and utility provider on the form. You will filter out qualified buyers who could not be bothered and keep only the unusually patient ones, who are not the same group.",
      },

      { t: "h2", text: "The qualification call" },
      {
        t: "p",
        text: "Five to seven minutes, and it happens within minutes of the enquiry, not the next day. The order matters, because the early questions are easy and build momentum while the awkward one about the co-owner comes after rapport exists.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Confirm what you already know",
            body: "Restate the address and the bill range from the form. This is fast, it feels attentive, and it catches typos before they become a wasted visit.",
          },
          {
            title: "Roof, then shade",
            body: "How old is the roof, what is it made of, and is there anything large casting shade on it. If the roof needs replacing in two years, that is a conversation, not a rejection.",
          },
          {
            title: "Motivation and timeline",
            body: "Why now, and what would need to be true to go ahead this quarter. Someone who says they are just curious is not a disqualification, they are a nurture sequence.",
          },
          {
            title: "The decision-maker question",
            body: "Ask it plainly: is there anyone else who would need to be part of this decision. Then book the appointment at a time they can both attend. This single question removes most of the meetings that go nowhere.",
          },
        ],
      },

      { t: "h2", text: "Scoring without overcomplicating it" },
      {
        t: "p",
        text: "Resist building a 40 point scoring model. Three tiers is enough and it survives contact with a busy office.",
      },
      {
        t: "ol",
        items: [
          "**Book now.** Owns the property, bill above your threshold, usable roof, timeline inside three months, decision makers available.",
          "**Nurture.** Qualified on property and roof but the timeline is further out, or the co-owner is unavailable this month. These go into a long sequence, not the bin. See [solar lead nurturing](/blog/solar-lead-nurturing).",
          "**Decline politely.** Renting with no landlord interest, unsuitable roof, or a bill that cannot produce a sensible payback. Say so kindly and quickly, and offer something useful.",
        ],
      },

      { t: "h2", text: "Verify what you can without asking" },
      {
        t: "ul",
        items: [
          "Satellite imagery gives you roof orientation, approximate area and obvious shading before anyone drives anywhere.",
          "Public property records can confirm ownership in most markets.",
          "The utility provider is usually derivable from the address, so do not ask for it.",
          "Previous enquiries from the same address tell you whether this is a repeat shopper.",
        ],
      },
      {
        t: "p",
        text: "Every fact you can verify is a question you do not have to ask, and every question you do not have to ask is a lead that stays warm.",
      },

      { t: "h2", text: "Disqualify like you want the referral" },
      {
        t: "p",
        text: "A renter today is a homeowner in four years, and the neighbour of every renter is a homeowner now. Declining well costs nothing: explain why solar does not fit yet, give them the one thing that would change it, and ask if they know anyone with a suitable roof. A surprising number of referrals come out of calls that ended in a no.",
      },
      {
        t: "link",
        href: "/blog/how-to-get-more-solar-leads",
        label: "How to get more solar leads",
        note: "Qualification is worthless without volume to filter",
      },
    ],
    faq: [
      {
        q: "What monthly bill makes solar worth it?",
        a: "It depends on your market's rates, incentives and install cost, so set the threshold from your own closed jobs rather than a rule of thumb. Look at the lowest bill among your last fifty profitable installs and use that as the floor.",
      },
      {
        q: "Should I qualify leads before or after booking the appointment?",
        a: "Before, always, but qualify on a call that happens within minutes rather than a form that happens instead of contact. Speed and qualification are not in conflict: the fast call is the qualification.",
      },
      {
        q: "How do I qualify a lead without annoying them?",
        a: "Frame every question as something that saves them time. Asking about roof age because you do not want to design a system that has to come off in two years is a service, and it sounds like one.",
      },
    ],
    related: [
      "how-to-get-more-solar-leads",
      "solar-appointment-no-show-rate",
      "solar-quote-form-best-practices",
    ],
  },

  {
    slug: "solar-lead-generation-companies",
    title: "Solar lead generation companies: what to check first",
    metaTitle: "Solar Lead Generation Companies: How to Pick One",
    metaDescription:
      "How solar lead generation companies actually make money, the eight questions that reveal a bad one, and when to build your own pipeline instead.",
    keyword: "solar lead generation companies",
    secondary: [
      "solar lead generation company",
      "solar lead providers",
      "best solar lead companies",
      "solar lead vendors",
    ],
    excerpt:
      "Every lead company sounds the same on the sales call. Eight questions separate the ones worth a trial from the ones worth avoiding.",
    category: "leads",
    intent: "Commercial",
    icon: "handshake",
    published: "2026-05-05",
    answer:
      "Solar lead generation companies sell either marketplace leads, exclusive leads, or appointments, and the business models pay them differently from you. Judge them on eight things: exclusivity in writing, lead source transparency, return policy, contact data quality, sat rate, contract length, attribution support and how they handle disputes.",
    takeaways: [
      "A lead company is paid on volume. You are paid on installs. Align that with terms, not trust.",
      "Ask where the leads come from. If the answer is vague, the traffic is usually incentivised.",
      "Short contracts and clear return windows tell you more than any case study.",
      "The best vendors will hand you data. The worst ones will hand you a dashboard you cannot export.",
    ],
    body: [
      {
        t: "p",
        text: "Lead generation companies are not villains and they are not partners. They are suppliers with a different incentive from yours, and the whole job is writing terms that line those incentives up.",
      },

      { t: "h2", text: "The three business models" },
      {
        t: "table",
        head: ["Model", "How they get paid", "What it means for you"],
        rows: [
          [
            "Marketplace",
            "Sells the same lead to several installers",
            "Cheap per lead, a race to respond, quality varies by source",
          ],
          [
            "Exclusive generator",
            "Runs ads and sells each lead once",
            "Higher price, better contact rate, watch the resale window",
          ],
          [
            "Appointment setter",
            "Paid per booked appointment",
            "Highest price, and the sat rate is the only number that matters",
          ],
        ],
      },
      {
        t: "p",
        text: "The appointment model is where the incentive gap is widest. A setter paid per booking is rewarded for booking, not for booking well, which is why you ask for sat rate and not set rate.",
      },

      { t: "h2", text: "Eight questions before you sign" },
      {
        t: "ol",
        items: [
          "**Where do the leads come from?** Search, paid social, native ads, comparison sites, or incentivised surveys. An installer buying incentivised survey traffic without knowing it will conclude that bought leads do not work.",
          "**Is exclusivity in the contract, and what is the resale window?** Not the sales call. The contract.",
          "**What is your return or credit policy, and what is the window?** 24 hours is tight, 72 is workable, none is a red flag.",
          "**What contact data comes with the lead?** Phone, email, address and consent record. Missing consent records are a liability, not a bargain.",
          "**What is your average sat rate, and how do you measure it?** For appointment sellers this is the whole deal.",
          "**How long is the minimum term?** Anything over three months before you have data is asking you to bet blind.",
          "**Can I export raw lead data?** If it only lives in their dashboard, you cannot calculate cost per sat appointment, which is the point.",
          "**Who handles disputes and how fast?** A named person and a stated turnaround, or expect to be arguing by email in week three.",
        ],
      },
      {
        t: "callout",
        label: "A useful tell",
        text: "Ask what percentage of their installers renew after six months. Vendors with a strong number volunteer it. Vendors who deflect to case studies are telling you something.",
      },

      { t: "h2", text: "The trial that protects you" },
      {
        t: "steps",
        items: [
          {
            title: "Cap the exposure",
            body: "Fixed budget, 40 to 60 leads, one lead type, one territory. Enough volume for the average to mean something, small enough that a bad vendor costs you a fortnight rather than a quarter.",
          },
          {
            title: "Treat them exactly like your own leads",
            body: "Same response time, same sequence, same rep. Any special handling makes the comparison worthless.",
          },
          {
            title: "Measure four numbers",
            body: "Contact rate, appointment set rate, sat rate and close rate. Then compute cost per sat appointment and put it next to your other channels.",
          },
        ],
      },

      { t: "h2", text: "When you should not hire one at all" },
      {
        t: "p",
        text: "If your Business Profile is unoptimised, your review count is under 25 and nobody has ever messaged your old database, a lead vendor is an expensive way to avoid work that is free. Those three things also make every bought lead convert better, so doing them first is not a delay, it is preparation.",
      },
      {
        t: "ul",
        items: [
          "Start with [local SEO for solar contractors](/blog/local-seo-for-solar-contractors), which is the channel you keep.",
          "Then [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers), which raises conversion everywhere at once.",
          "Then [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads), which is free and usually surprising.",
        ],
      },
      {
        t: "quote",
        text: "Buying leads to avoid building a pipeline is like hiring a taxi every day because you have not bought a van.",
      },

      { t: "h2", text: "Reading a vendor's numbers without being fooled" },
      {
        t: "p",
        text: "Every vendor arrives with a deck. Three habits keep you out of trouble when you read it.",
      },
      {
        t: "ul",
        items: [
          "**Ask for the median, not the average.** One installer closing a huge commercial job drags an average close rate somewhere it has never been for anybody else.",
          "**Ask for the date range and the territory.** Performance from a different state in a different incentive regime tells you nothing about yours.",
          "**Ask what happened to the installers who stopped.** Churn is the number vendors present least and it explains the most.",
        ],
      },
      {
        t: "p",
        text: "None of this is adversarial. A good vendor has these numbers, is comfortable sharing them, and would rather you buy with clear expectations than churn out in month four. The ones who bristle are the ones telling you something.",
      },
      {
        t: "p",
        text: "Write down before you start what result would make you continue and what result would make you stop. Deciding that in advance is the only reliable defence against the sunk-cost conversation you will otherwise have in week six, and it takes ten minutes.",
      },
    ],
    faq: [
      {
        q: "Which solar lead generation company is best?",
        a: "There is no single best, because quality varies by territory and month even within one vendor. The reliable approach is a capped trial with defined metrics, run the same way against two vendors in sequence rather than in parallel.",
      },
      {
        q: "Do lead generation companies work for commercial solar?",
        a: "Far less well. Commercial solar has a longer cycle, a committee of decision makers and far lower search volume, so bought leads are thin and expensive. Outbound and relationships do more. See [how to get commercial solar leads](/blog/how-to-get-commercial-solar-leads).",
      },
      {
        q: "What is a fair contract length for a solar lead vendor?",
        a: "Month to month, or a defined trial with an exit. Anything longer should come with pricing or exclusivity concessions that justify the commitment, in writing.",
      },
    ],
    related: [
      "are-solar-leads-worth-buying",
      "exclusive-vs-shared-solar-leads",
      "how-to-get-more-solar-leads",
    ],
  },

  {
    slug: "solar-lead-generation-ideas",
    title: "Solar lead generation ideas that are not ads",
    metaTitle: "17 Solar Lead Generation Ideas That Are Not Ads",
    metaDescription:
      "Seventeen ways solar companies find work without buying clicks: neighbour campaigns, roofer partnerships, utility rate changes, events and database work.",
    keyword: "solar lead generation ideas",
    secondary: [
      "solar marketing ideas",
      "solar lead ideas",
      "creative solar lead generation",
      "solar prospecting ideas",
    ],
    excerpt:
      "Seventeen things that produce solar enquiries without an ad account, ordered by how quickly they pay. Most of them are operational, not creative.",
    category: "leads",
    intent: "Informational",
    icon: "bulb",
    published: "2026-03-30",
    answer:
      "The solar lead ideas that reliably work without paid ads are neighbour campaigns around completed installs, trade partnerships with roofers and electricians, database reactivation, review-led local ranking, utility rate change campaigns, and a structured referral ask. Most cost nothing per lead and produce results within weeks rather than months.",
    takeaways: [
      "The best non-paid ideas exploit something you already own: installs, customers, or a database.",
      "Neighbour campaigns work because proximity is the strongest social proof in solar.",
      "Trade partnerships take longest to build and last longest once built.",
      "Pick three and run them properly. Seventeen half-run ideas produce nothing.",
    ],
    body: [
      {
        t: "p",
        text: "Paid ads are the default answer because they are the easiest to start, not because they are the best. Everything below either costs nothing per lead or costs less than a click, and most of it is operational work rather than creative work, which is why it goes undone.",
      },
      {
        t: "p",
        text: "Pick three. Run them for a quarter. Seventeen ideas half-run is how a marketing plan produces nothing.",
      },

      { t: "h2", text: "Ideas that use an install you already did" },
      {
        t: "steps",
        items: [
          {
            title: "The neighbour campaign",
            body: "Every completed install is a reference point on a specific street. A letter or door-knock to the forty nearest homes, naming the street and the system, converts far better than a generic ad, because proximity is the most persuasive proof in solar.",
          },
          {
            title: "The install-day sign",
            body: "A tasteful yard sign for the fortnight after commissioning, with a QR code to a page about that exact install. Cheap, and it works on the people who watched the van for two days.",
          },
          {
            title: "The one-year bill review",
            body: "Contact every customer at twelve months with their actual savings. It generates reviews, referrals and battery upsells in one message, and it is the most welcome email a solar company sends.",
          },
        ],
      },

      { t: "h2", text: "Ideas that use people you already know" },
      {
        t: "ul",
        items: [
          "**A structured referral ask** at the right moment, which is after commissioning and again after the first good bill. See [how to ask for solar referrals](/blog/how-to-ask-for-solar-referrals).",
          "**Database reactivation.** Every quote that never closed is a person who wanted solar and did not buy from you. See [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads).",
          "**Past-customer battery and EV charger campaigns.** Existing customers with existing arrays are the warmest list you will ever message.",
          "**Lost-quote follow-up at six months.** People who chose a competitor sometimes did not proceed at all. Almost nobody checks.",
        ],
      },

      { t: "h2", text: "Ideas that use other trades" },
      {
        t: "p",
        text: "Roofers, electricians, HVAC firms, estate agents and property managers all meet homeowners at the exact moment solar becomes relevant. These partnerships take months to build and then produce steadily for years.",
      },
      {
        t: "table",
        head: ["Partner", "The moment they meet your buyer", "What to offer"],
        rows: [
          ["Roofer", "A roof replacement, the ideal time to add solar", "Reciprocal referrals and a fee"],
          ["Electrician", "Panel upgrades and EV charger installs", "Subcontract work in return"],
          ["HVAC", "Heat pump installs, where load rises", "Joint quotes"],
          ["Estate agent", "Sale of a property with high bills", "A valuation note on solar"],
          ["Property manager", "Multi-unit portfolios", "Portfolio assessment"],
        ],
      },

      { t: "h2", text: "Ideas that use timing" },
      {
        t: "ul",
        items: [
          "**Utility rate change campaigns.** When your utility announces an increase, that is the most motivated week of the year. Have the email written in advance.",
          "**Incentive deadline campaigns.** Real deadlines only. Invented urgency costs more trust than it earns leads.",
          "**Seasonal bill shock.** The month after the highest bills of the year is when curiosity turns into enquiries.",
        ],
      },
      {
        t: "callout",
        label: "Worth the effort",
        text: "Write the utility rate change campaign now and keep it in a drawer. When the announcement lands you will have two days of attention, and the companies that send within those two days take the enquiries.",
      },

      { t: "h2", text: "Ideas that compound" },
      {
        t: "ol",
        items: [
          "**Reviews.** Not a campaign, a machine. It raises the conversion rate of every other item on this list.",
          "**A ranked Google Business Profile.** Free, local, and the highest intent traffic in solar.",
          "**Service area pages** for the towns you actually install in. See [how to write solar service area pages](/blog/how-to-write-solar-service-area-pages).",
          "**A blog that answers what buyers ask**, which is why this one exists.",
          "**Local community presence.** Sponsorship of something real, attended by the people you install for. Slow, and unusually durable.",
        ],
      },

      { t: "h2", text: "How to choose between them" },
      {
        t: "p",
        text: "Score each idea on two axes: how fast it could produce a lead, and whether you already own the raw material. Anything that is fast and uses material you own goes first. That is almost always database reactivation, the referral ask and the neighbour campaign, in that order.",
      },
      {
        t: "p",
        text: "One caution. Everything on this list needs an owner and a date. An idea with neither is a conversation, and a quarter of conversations is why most solar marketing plans produce a folder rather than a pipeline. Put three of these on somebody's job description and drop the rest until next quarter.",
      },
      {
        t: "p",
        text: "Measure them the same way you measure paid: contacts, appointments set, appointments sat, jobs closed. Free channels get graded generously because nobody invoiced for them, which is exactly how a neighbour campaign that produces nothing survives for two years.",
      },
      {
        t: "link",
        href: "/blog/how-to-get-more-solar-leads",
        label: "How to get more solar leads",
        note: "The ordered version of all of this",
      },
    ],
    faq: [
      {
        q: "What is the fastest way to get solar leads without ads?",
        a: "Reactivating your own database. Every quote that never closed is a person who wanted solar, and a well-written campaign to a few hundred of them produces enquiries within days for the cost of the messages.",
      },
      {
        q: "Do door-to-door solar sales still work?",
        a: "In some markets, yes, particularly targeted around recent installs where you can name the street. Cold canvassing across a whole town is far weaker than forty doors around a system you just commissioned.",
      },
      {
        q: "How do I get solar leads in a saturated market?",
        a: "Stop competing on the same channel. In a saturated market the paid auction is where everyone is, and trade partnerships, neighbour campaigns and review-led local ranking are where they are not.",
      },
    ],
    related: [
      "how-to-get-more-solar-leads",
      "free-solar-leads",
      "how-to-reactivate-old-solar-leads",
    ],
  },

  {
    slug: "free-solar-leads",
    title: "How to get free solar leads",
    metaTitle: "Free Solar Leads: 6 Sources That Actually Produce",
    metaDescription:
      "Six ways to get solar leads with no media spend, what each one realistically produces, and the hidden cost that makes free leads not quite free.",
    keyword: "free solar leads",
    secondary: ["free solar leads for installers", "get solar leads free", "no cost solar leads", "organic solar leads"],
    excerpt:
      "Free leads are real, but they are paid for in time and patience instead of money. Six sources, with an honest estimate of what each produces.",
    category: "leads",
    intent: "Informational",
    icon: "magnet",
    published: "2026-02-14",
    answer:
      "Free solar leads come from six places: your Google Business Profile, customer reviews, referrals from past customers, your existing database, trade partnerships, and organic search. None cost money per lead, all cost time, and together they usually produce more work than a small ad budget does once they have been running for a quarter.",
    takeaways: [
      "Free means no media spend, not no cost. The cost is time and consistency.",
      "The Business Profile is the highest intent free channel in solar.",
      "Your database is the fastest free channel: results in days, not months.",
      "Free channels get cheaper over time. Paid channels never do.",
    ],
    body: [
      {
        t: "p",
        text: "Free lead sources have a reputation problem because the phrase is usually attached to something that is not free or not a lead. These six are neither. What they are is slow to start and difficult to stop, which is the opposite shape from buying clicks.",
      },

      { t: "h2", text: "The six sources, and what each really produces" },
      {
        t: "table",
        head: ["Source", "Time to first lead", "What it costs instead of money"],
        rows: [
          ["Your existing database", "Days", "One afternoon writing a campaign"],
          ["Referral asks to past customers", "2 to 6 weeks", "A process somebody owns"],
          ["Google Business Profile", "4 to 12 weeks", "Weekly maintenance, photos, posts"],
          ["Reviews", "Ongoing, compounds", "Asking every customer, every time"],
          ["Trade partnerships", "2 to 6 months", "Relationship building, reciprocity"],
          ["Organic search", "3 to 9 months", "Content, or an SEO fee"],
        ],
      },

      { t: "h2", text: "Start with the database, because it pays this week" },
      {
        t: "p",
        text: "A solar company three years old has hundreds of people who asked for a quote and did not buy. Some chose a competitor. Many simply never decided, because solar is a purchase people postpone rather than reject.",
      },
      {
        t: "p",
        text: "A reactivation campaign to that list is the closest thing to free money in this industry: the leads are already yours, they already raised their hand, and the cost is the messages. [How to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads) has the sequence.",
      },

      { t: "h2", text: "The Business Profile is the highest intent free traffic there is" },
      {
        t: "p",
        text: "Somebody searching solar installers near me on a phone is further down the funnel than almost any paid impression you can buy, and the map pack is free to appear in. The work is category selection, service areas, photos, posts and reviews, none of which costs media spend.",
      },
      {
        t: "ul",
        items: [
          "Correct the primary category, which is usually **solar energy contractor**.",
          "Set service areas to towns you install in, not a radius covering half the state.",
          "Add real install photos monthly. Generic stock hurts.",
          "Post regularly. See [Google Business Profile posts for solar](/blog/google-business-profile-posts-for-solar).",
          "Reply to every review. See [how to respond to negative solar reviews](/blog/how-to-respond-to-negative-solar-reviews).",
        ],
      },

      { t: "h2", text: "Reviews are the free channel that improves the others" },
      {
        t: "p",
        text: "Review volume is a local ranking input and a conversion multiplier at the same time. More reviews means you appear more often and get chosen more often when you do. That double effect is why it outranks almost everything else on a cost-per-outcome basis.",
      },
      {
        t: "figures",
        items: [
          { value: "97%", label: "Of buyers read reviews before choosing" },
          { value: "3x", label: "Reported organic lead lift past 50 reviews" },
          { value: "$0", label: "Cost per review request" },
        ],
      },

      { t: "h2", text: "The hidden cost, stated plainly" },
      {
        t: "p",
        text: "Free channels fail for one reason: nobody owns them. A review request that goes out when someone remembers is not a channel, it is a hobby. The cost of free leads is that somebody has to do the same small thing every week for a year, which is exactly what an automated system is for.",
      },
      {
        t: "callout",
        label: "The honest trade",
        text: "Paid channels cost money and no discipline. Free channels cost discipline and no money. Most solar companies have more money than discipline, which is why they end up paying for leads they could have earned.",
      },

      { t: "h2", text: "What a full year of free channels looks like" },
      {
        t: "steps",
        items: [
          {
            title: "Quarter one",
            body: "Database campaign sent. Business Profile corrected. Review requests automated after every install. Expect the database to produce immediately and the profile to start moving by the end of the quarter.",
          },
          {
            title: "Quarter two",
            body: "Review count climbing steadily, map pack positions improving, referral asks now a standing process. First trade partnership conversations started.",
          },
          {
            title: "Quarters three and four",
            body: "Organic pages beginning to rank, partnerships producing their first jobs, and the map pack holding positions. This is the point at which paid spend becomes optional rather than load-bearing.",
          },
        ],
      },
      {
        t: "p",
        text: "The other thing worth understanding about free channels is that they are not independent. Reviews lift the map pack, the map pack feeds the website, the website converts the referral who was going to call anyway, and every install adds another neighbour campaign and another review. Run three of them and you get more than three channels worth of effect.",
      },
      {
        t: "p",
        text: "That is also why the first quarter feels slow and the fourth feels easy. Nothing compounds on day one. If you judge free channels at week six you will conclude they do not work, stop, and go back to paying per click, which is the most common and most expensive mistake in solar marketing.",
      },
      {
        t: "link",
        href: "/products/on-site-seo",
        label: "How Volt handles the free channels",
        note: "The parts that need doing every week, done every week",
      },
    ],
    faq: [
      {
        q: "Are free solar leads lower quality?",
        a: "Usually higher. A referral or a map pack call comes from someone who chose you, rather than someone who filled in a form and was sold to four installers. The trade-off is volume and predictability, not quality.",
      },
      {
        q: "Can I run a solar company on free leads alone?",
        a: "Established installers with a long referral history and strong local rankings do. A company in its first two years usually cannot, because the compounding channels have not compounded yet, which is what paid spend is for.",
      },
      {
        q: "What is the single fastest free solar lead source?",
        a: "Your own database of unconverted quotes. It requires no ranking, no relationship building and no waiting, and the people on it have already told you they want solar.",
      },
    ],
    related: [
      "solar-lead-generation-ideas",
      "how-to-reactivate-old-solar-leads",
      "local-seo-for-solar-contractors",
    ],
  },

  {
    slug: "how-to-get-commercial-solar-leads",
    title: "How to get commercial solar leads",
    metaTitle: "How to Get Commercial Solar Leads: A Realistic Guide",
    metaDescription:
      "Commercial solar leads come from outbound, not forms. Target lists, the decision committee, the proposal that gets circulated, and a realistic sales cycle.",
    keyword: "how to get commercial solar leads",
    secondary: [
      "commercial solar leads",
      "C&I solar leads",
      "commercial solar sales",
      "commercial solar prospecting",
    ],
    excerpt:
      "Commercial solar does not have a lead problem in the residential sense. It has a targeting problem, a committee problem and a patience problem.",
    category: "leads",
    intent: "Informational",
    icon: "building",
    published: "2026-01-09",
    answer:
      "Commercial solar leads come mainly from outbound prospecting against a built target list, not from inbound forms. Build the list from roof area, energy spend and ownership, reach the finance decision maker rather than the facilities manager, and expect a sales cycle of six to eighteen months with a committee involved.",
    takeaways: [
      "Search volume for commercial solar is a fraction of residential. Inbound alone will not fill a pipeline.",
      "Target on three facts: large roof or land, high energy spend, and they own the building.",
      "The person who cares is in finance. The person who answers is in facilities.",
      "Build for a cycle measured in quarters, and resource follow-up accordingly.",
    ],
    body: [
      {
        t: "p",
        text: "Residential and commercial solar are sold to different people, on different timescales, through different channels, by different skill sets. Companies that try to run commercial through their residential lead machine conclude that commercial does not work. What does not work is the machine.",
      },

      { t: "h2", text: "Why inbound does not fill a commercial pipeline" },
      {
        t: "p",
        text: "Nobody in a facilities role wakes up and searches for commercial solar installers. The purchase starts with a budget conversation, an energy audit, a lease renewal or a sustainability commitment, and none of those produce a search. The few who do search are valuable and rare, which means inbound is a supplement, not a strategy.",
      },
      {
        t: "ul",
        items: [
          "Keep a strong commercial page so the rare searcher finds you and so your proposals have somewhere credible to point.",
          "Do not judge your commercial programme on form fills. Judge it on qualified conversations started.",
          "Expect the majority of pipeline to come from outbound, partnerships and existing relationships.",
        ],
      },

      { t: "h2", text: "Building the target list" },
      {
        t: "p",
        text: "Commercial targeting is a filtering exercise before it is a selling exercise. Three facts decide whether a building is worth approaching at all.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Roof area or land",
            body: "Satellite imagery gives you usable area at zero cost. Warehouses, distribution, cold storage, manufacturing, agriculture, schools and car parks are where the area is. Filter for it before anything else.",
          },
          {
            title: "Energy spend",
            body: "Solar only matters where the bill is large. Use industry benchmarks by square footage and type, then confirm during the conversation. Cold storage and manufacturing punch far above their floor area.",
          },
          {
            title: "Ownership",
            body: "An owner-occupier can decide. A tenant on a short lease cannot, and a landlord with no exposure to the bill has no reason to. Check ownership before investing any time.",
          },
        ],
      },
      {
        t: "callout",
        label: "Where most lists fail",
        text: "Lists built on industry code alone are mostly tenants in buildings nobody owns. Filtering on ownership first cuts the list by more than half and raises the hit rate by more than double.",
      },

      { t: "h2", text: "Who you are actually selling to" },
      {
        t: "table",
        head: ["Role", "What they care about", "How they behave"],
        rows: [
          ["CFO or owner", "Payback, tax treatment, cash impact", "Decides, rarely takes the first call"],
          ["Facilities manager", "Disruption, roof warranty, maintenance", "Answers the phone, cannot approve"],
          ["Sustainability lead", "Reporting, commitments, procurement", "Champions internally, no budget"],
          ["Operations", "Downtime during installation", "Can veto on practical grounds"],
        ],
      },
      {
        t: "p",
        text: "The common mistake is selling the whole project to the facilities manager, who cannot approve it and will not present it. Give them what they need to circulate, and get to finance on the economics.",
      },

      { t: "h2", text: "The proposal that gets circulated" },
      {
        t: "p",
        text: "A commercial proposal is not read by the person you sent it to. It is forwarded. So it has to survive being read by a finance director who was not on any of the calls.",
      },
      {
        t: "ol",
        items: [
          "One page at the front with system size, capital cost, annual saving, payback and any incentive treatment. Everything else is an appendix.",
          "Cash flow by year, not just payback in years. Finance people think in cash flow.",
          "The roof and structural position stated plainly, including whether a roof replacement is implicated.",
          "Installation disruption and timeline, because operations will ask.",
          "A named reference of similar building type and size. Not a logo wall, a contact.",
        ],
      },

      { t: "h2", text: "Channels that actually produce" },
      {
        t: "ul",
        items: [
          "**Direct outbound** to the built list, by phone and email, with a specific observation about their building rather than a generic pitch.",
          "**Energy consultants and brokers** who already hold the billing relationship and are asked about solar constantly.",
          "**Commercial roofers and general contractors** working on the buildings you want.",
          "**Existing residential customers who own businesses.** The single most overlooked source in the industry, and it is sitting in your own database.",
          "**Local business associations and chambers**, where the same forty owners see each other monthly.",
        ],
      },

      { t: "h2", text: "Resourcing a cycle measured in quarters" },
      {
        t: "p",
        text: "A six to eighteen month cycle breaks any follow-up system built for residential. Conversations go quiet for a quarter because a budget cycle has not opened yet, and the company that reappears at the right moment wins work that was effectively decided months earlier.",
      },
      {
        t: "p",
        text: "That is a systems problem, not a discipline problem. Long-horizon sequences, scheduled check-ins tied to budget cycles, and a pipeline view that does not treat a quiet quarter as a dead deal. See [solar sales pipeline stages](/blog/solar-sales-pipeline-stages).",
      },
      {
        t: "p",
        text: "Qualification matters more here than in residential, because the cost of a wasted commercial pursuit is measured in weeks of somebody's time rather than one wasted survey. The same six-question discipline applies, adapted: ownership, roof, spend, timeline, decision makers and budget cycle. See [how to qualify solar leads](/blog/how-to-qualify-solar-leads).",
      },
      {
        t: "link",
        href: "/blog/solar-lead-nurturing",
        label: "Solar lead nurturing",
        note: "The long-horizon follow-up commercial needs",
      },
    ],
    faq: [
      {
        q: "How long is the commercial solar sales cycle?",
        a: "Commonly six to eighteen months from first contact to signature, longer where a board, a landlord or a grant application is involved. Plan cash flow and follow-up around quarters rather than weeks.",
      },
      {
        q: "Can I buy commercial solar leads?",
        a: "You can, and the quality is usually poor. Volume is thin, exclusivity is rare and the definition of a lead stretches further than it does in residential. Building your own target list is slower and far more reliable.",
      },
      {
        q: "What size commercial roof is worth quoting?",
        a: "Set the floor from your own economics, but as a starting point, look for buildings where usable roof area supports at least a 50kW system and the occupier owns the building. Below that, the cost to sell rarely justifies the margin.",
      },
    ],
    related: [
      "how-to-get-more-solar-leads",
      "solar-lead-nurturing",
      "solar-sales-pipeline-stages",
    ],
  },
] as const;
