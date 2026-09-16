import type { Post } from "../types";

/**
 * Cluster 7: paid ads, referrals and the database. Hub is
 * google-ads-for-solar-companies.
 */
export const ADS_POSTS: readonly Post[] = [
  {
    slug: "google-ads-for-solar-companies",
    title: "Google Ads for solar companies",
    metaTitle: "Google Ads for Solar Companies: Structure and Costs",
    metaDescription:
      "How to run Google Ads for a solar company: account structure, keywords worth bidding on, negatives, budgets, tracking, and the mistakes that burn spend.",
    keyword: "google ads for solar companies",
    secondary: [
      "solar google ads",
      "solar ppc",
      "ppc for solar",
      "google ads solar installers",
    ],
    excerpt:
      "Solar clicks run from single digits into the tens of pounds. Here is the account structure, the negatives, and what to fix before you spend anything.",
    category: "ads",
    intent: "Informational",
    icon: "megaphone",
    pillar: true,
    published: "2026-08-25",
    answer:
      "Google Ads works for solar companies when the account is built on high-intent local search terms, sends traffic to a matched landing page, tracks conversions properly, and has a negative keyword list that filters out DIY, jobs and research traffic. Clicks commonly run $8 to $45 and raw leads $80 to $300 depending on the market.",
    takeaways: [
      "Fix speed to lead and review count before spending, or you are paying to lose.",
      "Search first. Performance Max without conversion data spends into nothing.",
      "The negative keyword list is as important as the keyword list.",
      "Judge on cost per sat appointment, never on cost per click.",
    ],
    body: [
      {
        t: "p",
        text: "Google Ads is the fastest way for a solar company to generate enquiries and the fastest way to waste money. Solar clicks are expensive because a single close is worth tens of thousands, which means well-run competitors can rationally bid a great deal and the auction settles where only good operators profit.",
      },

      { t: "h2", text: "Before you spend anything" },
      {
        t: "p",
        text: "Three things decide whether paid traffic converts, and none of them are in the ad account. Skipping them is how installers conclude that Google Ads does not work for solar.",
      },
      {
        t: "ol",
        items: [
          "**Response time under five minutes.** You are paying up to $300 for an enquiry; answering it tomorrow is burning it. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
          "**A review count that stands comparison.** Paid visitors compare you against the map pack results on the same screen. Arriving with eleven reviews against competitors with two hundred means paying for clicks that were never going to convert.",
          "**A landing page that matches the ad.** Not the homepage. See [solar landing page best practices](/blog/solar-landing-page-best-practices).",
        ],
      },
      {
        t: "callout",
        label: "The order matters",
        text: "Every one of those three raises the return on the same ad spend. Fixing them first is not a delay; it is the difference between an account that pays for itself and one that funds an education.",
      },

      { t: "h2", text: "Account structure" },
      {
        t: "p",
        text: "Keep it simple. Solar accounts fail from over-complication far more often than from under-optimisation.",
      },
      {
        t: "table",
        head: ["Campaign", "Ad groups", "Sends to"],
        rows: [
          [
            "Search: residential install",
            "solar installers, solar panel installation, solar company",
            "/solar-installation landing page",
          ],
          [
            "Search: battery",
            "home battery, battery storage, solar battery",
            "/battery-storage landing page",
          ],
          [
            "Search: EV charger",
            "ev charger installation, home charger",
            "/ev-charger landing page",
          ],
          [
            "Search: brand",
            "your company name and misspellings",
            "Homepage. Cheap, and it defends against competitors",
          ],
        ],
      },
      {
        t: "p",
        text: "That is four campaigns. Start with the first and the fourth, add the others when the first is stable and profitable. Brand is often the cheapest converting campaign in the account and is worth running from day one.",
      },

      { t: "h2", text: "Keywords and, more importantly, negatives" },
      {
        t: "p",
        text: "The keyword list is obvious: local commercial terms, in phrase and exact match, with your towns. See [solar SEO keywords](/blog/solar-seo-keywords), which applies here too.",
      },
      {
        t: "p",
        text: "The negative list is where the money is saved, and most solar accounts have a thin one. Add these before you turn anything on.",
      },
      {
        t: "ul",
        items: [
          "**DIY and research:** diy, how to install, how do, what is, wikipedia, diagram, kit, second hand.",
          "**Jobs:** jobs, careers, salary, apprenticeship, training, course, hiring.",
          "**Wrong product:** solar lights, solar watch, garden, camping, caravan, pool heater, calculator.",
          "**Wrong buyer:** free solar panels, grants, government scheme, no cost, renters.",
          "**Competitors**, unless you are deliberately bidding on them, which is expensive and rarely profitable in solar.",
          "**Manufacturers**, unless you install that brand and the page says so.",
        ],
      },
      {
        t: "p",
        text: "Then review the search terms report weekly for the first month and fortnightly after that. This is the single highest-return recurring task in a solar ad account.",
      },

      { t: "h2", text: "Tracking, without which none of this works" },
      {
        t: "steps",
        items: [
          {
            title: "Conversion tracking on the form",
            body: "Not a page view. The actual submission, imported as a conversion. Without this the platform optimises toward clicks rather than enquiries.",
          },
          {
            title: "Call tracking",
            body: "A significant share of solar enquiries are calls. Untracked calls mean the account is optimising on half the data.",
          },
          {
            title: "Offline conversion import, if you can",
            body: "Feeding back which enquiries actually sat and which closed is what lets the platform optimise toward jobs rather than forms. It is the single biggest improvement available to a mature solar account.",
          },
          {
            title: "Source recorded through to the job",
            body: "So you can compute cost per sat appointment and cost per closed job by campaign. See [solar company KPIs to track](/blog/solar-company-kpis-to-track).",
          },
        ],
      },

      { t: "h2", text: "Budget and bidding" },
      {
        t: "p",
        text: "Start on manual or maximise clicks with a cap while you gather conversion data, then move to a conversion-based strategy once there are enough conversions for it to learn from. Smart bidding on three conversions a month has nothing to learn from.",
      },
      {
        t: "p",
        text: "On budget, work backwards. If a raw lead costs $150, a third of them sit, and a third of those close, a job costs about $1,350 in ad spend. Decide what a job is worth to you, then set the monthly budget to buy a sensible number of them and leave it alone for six weeks.",
      },
      {
        t: "p",
        text: "And be cautious with Performance Max early. It can work well once the account has strong conversion data, and without that it tends to find the cheapest possible traffic, which in solar means clicks that never become appointments. Start with search.",
      },
      {
        t: "link",
        href: "/blog/solar-google-ads-cost-per-lead",
        label: "Solar Google Ads cost per lead",
        note: "The numbers to budget against",
      },
    ],
    faq: [
      {
        q: "How much should a solar company spend on Google Ads?",
        a: "Enough to buy a meaningful number of appointments at your cost per sat appointment, which usually means a few thousand a month at minimum in a competitive market. Too small a budget produces too little data to optimise and looks like failure.",
      },
      {
        q: "Should I run Performance Max for solar?",
        a: "Not first. Start with search, gather real conversion data, then test Performance Max alongside it. Without good conversion signals it tends to buy cheap, low-intent traffic that never becomes appointments.",
      },
      {
        q: "Do I need a separate landing page for Google Ads?",
        a: "Yes. Sending paid traffic to a homepage wastes a meaningful share of expensive clicks, because the visitor has to find their own way to what the ad promised.",
      },
      {
        q: "Why are my solar ads getting clicks but no leads?",
        a: "Usually the landing page, the form length, or a missing negative keyword list letting research and DIY traffic through. Check the search terms report first; it is normally obvious within ten minutes.",
      },
    ],
    related: [
      "solar-google-ads-cost-per-lead",
      "google-ads-vs-seo-for-solar",
      "solar-landing-page-best-practices",
    ],
  },

  {
    slug: "solar-google-ads-cost-per-lead",
    title: "Solar Google Ads cost per lead",
    metaTitle: "Solar Google Ads Cost Per Lead: 2026 Benchmarks",
    metaDescription:
      "What solar Google Ads actually cost per click, per lead, per appointment and per job in 2026, what moves each number, and how to lower them.",
    keyword: "solar google ads cost per lead",
    secondary: [
      "solar ppc cost",
      "google ads cost solar",
      "solar cost per click",
      "solar advertising cost",
    ],
    excerpt:
      "Clicks from $8 to $45, leads from $80 to $300, and a sat appointment several times that. The full cost chain, and where to attack it.",
    category: "ads",
    intent: "Commercial",
    icon: "tag",
    published: "2026-07-24",
    answer:
      "Solar Google Ads clicks typically cost $8 to $45 and raw leads $80 to $300, with non-branded search at the expensive end. A sat appointment commonly costs $300 to $800 once no-shows and unqualified enquiries are filtered out, and a closed job runs into the low thousands on a blended basis.",
    takeaways: [
      "Four numbers matter: per click, per lead, per sat appointment, per closed job.",
      "Only the last two are comparable across channels.",
      "Conversion rate is the cheapest lever. It affects every number downstream.",
      "Local Services Ads often deliver a lower cost per lead than search in the same market.",
    ],
    body: [
      {
        t: "p",
        text: "Cost per lead is the number everybody quotes and the least useful of the four. Here is the whole chain, with the figures reported across the industry in 2026, and then the part that actually matters.",
      },

      { t: "h2", text: "The four numbers" },
      {
        t: "table",
        caption:
          "Blended national bands. Competitive metros sit at the top of every range; rural markets can sit well below.",
        head: ["Stage", "Typical range", "What moves it"],
        rows: [
          ["Cost per click", "$8 to $45", "Market density, keyword intent, quality score"],
          ["Cost per lead", "$80 to $300", "Landing page conversion rate, form length"],
          ["Cost per sat appointment", "$300 to $800", "Qualification, reminders, response speed"],
          ["Cost per closed job", "Low thousands, blended", "Sales process, proof, pricing position"],
        ],
      },
      {
        t: "p",
        text: "For context, the broader home improvement category averages roughly $8 a click and about $91 a lead in published benchmarks. Solar sits above that on both, because the job value is high and the auction is crowded.",
      },
      {
        t: "figures",
        items: [
          { value: "$8–45", label: "Cost per click, solar search" },
          { value: "$80–300", label: "Cost per raw lead" },
          { value: "$300–800", label: "Cost per appointment that sits" },
        ],
        source:
          "Compiled from 2026 Google Ads benchmarking published by [WordStream](https://www.wordstream.com/blog/2026-google-ads-benchmarks) and solar-specific reporting from agencies working in the category. Treat as direction; your market will differ.",
      },

      { t: "h2", text: "Why the middle two numbers diverge so much" },
      {
        t: "p",
        text: "The gap between cost per lead and cost per sat appointment is where most of the variance in solar advertising lives, and it is almost entirely within your control.",
      },
      {
        t: "p",
        text: "If 45% of your leads sit, a $200 lead costs $444 per appointment. If 15% sit, the same $200 lead costs $1,333. Same traffic, same spend, three times the cost, and the difference is response speed, qualification and reminders rather than anything in the ad account. See [cutting the solar appointment no-show rate](/blog/solar-appointment-no-show-rate).",
      },
      {
        t: "callout",
        label: "Where to attack first",
        text: "Not the bids. Conversion rate on the landing page, then sat rate. A page going from 5% to 9% halves cost per lead across the entire account overnight, and it is a one-off piece of work rather than a permanent negotiation.",
      },

      { t: "h2", text: "What makes your number higher than the benchmark" },
      {
        t: "ol",
        items: [
          "**A dense metro.** Twenty installers bidding on the same terms pushes clicks to the top of the range and nothing you do changes that.",
          "**Broad match with a thin negative list.** DIY, jobs and research traffic clicking at $20 each. See [Google Ads for solar companies](/blog/google-ads-for-solar-companies).",
          "**Sending traffic to the homepage.** A meaningful share of expensive clicks wasted on navigation.",
          "**A long form.** Every field beyond four costs submissions you already paid for. See [solar quote form best practices](/blog/solar-quote-form-best-practices).",
          "**A slow landing page.** It costs conversions and raises cost per click through quality scoring at the same time.",
          "**A low review count.** Paid visitors compare you against the map pack on the same screen, and lose confidence.",
        ],
      },

      { t: "h2", text: "How the channels compare" },
      {
        t: "table",
        head: ["Channel", "Cost per lead", "Notes"],
        rows: [
          ["Google search, non-branded", "$150 to $300", "Highest intent, highest price"],
          ["Google search, branded", "Low", "Cheap, limited volume, defends your name"],
          ["Local Services Ads", "Around $53 to $110", "Pay per lead, needs licence and insurance verification"],
          ["Paid social", "$25 to $90", "Cheaper and colder, needs a longer follow-up sequence"],
          ["Bought leads", "$30 to $150", "Shared, and you are racing three other installers"],
        ],
      },
      {
        t: "p",
        text: "Local Services Ads frequently produce a lower cost per lead than search in the same market, and they sit above search in the results. For most installers they are worth running first. See [Local Services Ads for solar](/blog/local-services-ads-for-solar).",
      },

      { t: "h2", text: "Setting a target you can defend" },
      {
        t: "p",
        text: "Work backwards from the job rather than forwards from the click. Take your average job value and your gross margin, decide what share of that margin you are willing to spend acquiring the job, and that gives you a maximum cost per closed job.",
      },
      {
        t: "p",
        text: "Divide by your close rate on sat appointments to get a maximum cost per sat appointment, and by your sat rate again for a maximum cost per lead. Now you have a number to judge campaigns against that is derived from your own economics rather than from an industry average that may not resemble your market at all.",
      },
      {
        t: "link",
        href: "/blog/how-much-do-solar-leads-cost",
        label: "How much do solar leads cost?",
        note: "The same arithmetic, across every channel",
      },
    ],
    faq: [
      {
        q: "Why is solar cost per click so high?",
        a: "Job value. When a single close is worth tens of thousands, competitors can profitably bid $20 or more a click, and the auction settles where only efficient operators make money. Your defence is conversion rate, not bidding harder.",
      },
      {
        q: "How do I lower my solar cost per lead?",
        a: "Raise landing page conversion rate first, then tighten negative keywords, then improve quality score through page speed and message match. Bid reductions usually just reduce volume rather than cost per lead.",
      },
      {
        q: "Are Local Services Ads cheaper than Google Ads for solar?",
        a: "Often, yes, on a per-lead basis, because you pay per lead rather than per click and the placement sits above search results. They require licence and insurance verification, which takes a few weeks to complete.",
      },
    ],
    related: [
      "google-ads-for-solar-companies",
      "local-services-ads-for-solar",
      "how-much-do-solar-leads-cost",
    ],
  },

  {
    slug: "facebook-ads-for-solar-companies",
    title: "Facebook ads for solar companies",
    metaTitle: "Facebook Ads for Solar Companies: When They Work",
    metaDescription:
      "How paid social differs from search for solar, the offers that work, why lead forms produce cheap leads that need more follow-up, and how to judge it.",
    keyword: "facebook ads for solar companies",
    secondary: [
      "solar facebook ads",
      "paid social solar",
      "meta ads solar",
      "social media ads contractors",
    ],
    excerpt:
      "Paid social creates demand rather than catching it. Cheaper leads, colder leads, and a follow-up requirement most installers underestimate.",
    category: "ads",
    intent: "Informational",
    icon: "megaphone",
    published: "2026-06-22",
    answer:
      "Facebook ads work for solar companies as a demand creation channel rather than a demand capture one. Leads cost less than Google search, commonly $25 to $90, and convert at a lower rate because the person was not searching. They need a longer, more persistent follow-up sequence to produce booked appointments.",
    takeaways: [
      "Search catches demand. Social creates it. They are not interchangeable.",
      "Cheaper leads, lower intent, and a longer path to an appointment.",
      "Instant lead forms are cheap and produce the coldest leads of all.",
      "Do not run social until your follow-up sequence actually runs to eight touches.",
    ],
    body: [
      {
        t: "p",
        text: "The most common mistake in solar paid social is judging it by search standards. Somebody who searched solar installers near me has decided they want solar. Somebody scrolling past your ad on a Tuesday evening has decided nothing at all.",
      },
      {
        t: "p",
        text: "Both can become customers. They arrive at completely different stages and need completely different handling.",
      },

      { t: "h2", text: "Search versus social, honestly" },
      {
        t: "table",
        head: ["", "Google search", "Paid social"],
        rows: [
          ["Intent", "High. They searched", "Low. You interrupted"],
          ["Cost per lead", "$80 to $300", "$25 to $90"],
          ["Lead to appointment", "Higher", "Lower, often much lower"],
          ["Follow-up needed", "Standard sequence", "Longer, more persistent"],
          ["Volume ceiling", "Limited by search volume", "Effectively unlimited"],
          ["Best used for", "Capturing existing demand", "Creating demand, and remarketing"],
        ],
      },
      {
        t: "p",
        text: "The volume row is why social matters. In a small market, search volume for solar terms is finite; once you own it you cannot buy more. Social has no such ceiling, which makes it the growth channel once search is saturated.",
      },

      { t: "h2", text: "What actually works as an offer" },
      {
        t: "steps",
        items: [
          {
            title: "A local install, shown plainly",
            body: "A photo of a real array on a recognisable local roof, with the town named and roughly what it produces. This consistently outperforms polished creative, because it is both proof and an advert at once.",
          },
          {
            title: "A specific saving on a specific bill",
            body: "The Fairview house that went from a $240 monthly bill to $60. Specificity is what stops a scroll; generic savings claims do not.",
          },
          {
            title: "A real deadline",
            body: "An incentive or scheme ending, when it genuinely is. Invented urgency works once and costs trust permanently.",
          },
          {
            title: "A short, honest quiz or check",
            body: "Is your roof suitable, three questions, an honest answer at the end. Works well when the answer is genuinely given rather than gated behind contact details.",
          },
        ],
      },
      {
        t: "callout",
        label: "What does not work",
        text: "Stock imagery of panels against a blue sky, and copy about a sustainable future. It looks like every other solar ad, it gets scrolled past, and the impressions are billed either way.",
      },

      { t: "h2", text: "Lead forms versus landing pages" },
      {
        t: "p",
        text: "Instant lead forms fill in themselves from the profile, so they produce the cheapest leads available and the coldest. Somebody who tapped twice has committed almost nothing.",
      },
      {
        t: "ul",
        items: [
          "**Use lead forms** when you have genuinely fast follow-up and a long sequence. Within five minutes, or the lead does not remember filling anything in.",
          "**Use a landing page** when you would rather have fewer, better leads. The extra friction filters, and the page can answer the cost question properly.",
          "**Add a qualifying question** to the form, such as the bill range, even though it lowers volume. It is the difference between a list and a pipeline.",
          "**Never use lead forms without instant response.** This is the single most common way solar companies waste money on social.",
        ],
      },

      { t: "h2", text: "Follow-up is the whole game here" },
      {
        t: "p",
        text: "A social lead needs more touches than a search lead, and the first one has to be almost immediate, because they were not looking for you and will forget within the hour.",
      },
      {
        t: "ol",
        items: [
          "**Instant text**, within sixty seconds, naming what they responded to so it makes sense to them.",
          "**A call within five minutes**, during hours. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
          "**The full eight-touch sequence**, not a shortened one. See [the solar sales follow-up sequence](/blog/solar-sales-follow-up-sequence).",
          "**A longer nurture afterwards**, because social leads are earlier in their thinking by definition. See [solar lead nurturing](/blog/solar-lead-nurturing).",
        ],
      },
      {
        t: "p",
        text: "If your follow-up currently stops at two attempts, paid social will lose money and you will conclude the channel does not work. It is the channel least tolerant of weak follow-up.",
      },

      { t: "h2", text: "Remarketing, which is the best use of all" },
      {
        t: "p",
        text: "The strongest use of paid social in solar is not cold acquisition. It is staying in front of people who already visited your site, requested a quote, or watched most of a video, over the weeks their decision actually takes.",
      },
      {
        t: "p",
        text: "Those audiences are small, cheap to reach and far warmer than anything cold. For a solar company with a long decision window, remarketing is closer to nurture than to advertising, and it is where most installers should start with social.",
      },
      {
        t: "link",
        href: "/blog/google-ads-vs-seo-for-solar",
        label: "Google Ads vs SEO for solar",
        note: "Where paid social fits against the other two",
      },
    ],
    faq: [
      {
        q: "Are Facebook ads worth it for solar companies?",
        a: "As a second channel after search and local, and mainly for remarketing and demand creation. As a first channel with weak follow-up, they usually lose money, because the leads are colder and need more work.",
      },
      {
        q: "Why are my Facebook solar leads such poor quality?",
        a: "Because they were not searching. That is the nature of the channel rather than a fault. Add a qualifying question to the form, respond within minutes, and run a longer sequence, or the quality gap will not close.",
      },
      {
        q: "Should I use Facebook lead forms or send traffic to my site?",
        a: "Lead forms if your response is genuinely instant, a landing page if you would rather have fewer and better leads. Lead forms without instant follow-up are the most common way to waste money on this channel.",
      },
    ],
    related: [
      "google-ads-for-solar-companies",
      "google-ads-vs-seo-for-solar",
      "solar-lead-nurturing",
    ],
  },

  {
    slug: "google-ads-vs-seo-for-solar",
    title: "Google Ads vs SEO for solar",
    metaTitle: "Google Ads vs SEO for Solar: Which and When",
    metaDescription:
      "How paid and organic compare for solar over one, three and twelve months, what each costs, and why the real answer is a sequence rather than a choice.",
    keyword: "google ads vs seo for solar",
    secondary: [
      "ppc vs seo",
      "paid vs organic solar",
      "solar marketing channels",
      "seo or ads",
    ],
    excerpt:
      "One buys leads today and stops when you stop paying. The other costs nothing per lead and takes months. The answer is a sequence, not a choice.",
    category: "ads",
    intent: "Informational",
    icon: "scales",
    published: "2026-05-29",
    answer:
      "Google Ads produces solar leads within days at $80 to $300 each and stops the moment you stop paying. SEO produces leads at effectively no cost per lead but takes three to nine months to arrive. Most solar companies should run ads to carry the pipeline while the organic and local work builds underneath it.",
    takeaways: [
      "Ads rent demand. SEO owns it. Both are legitimate; they behave differently.",
      "Ads are the right answer in month one. SEO is the right answer in year two.",
      "The local profile and reviews sit between them: fast and free.",
      "Running both is cheaper than running either alone, because each improves the other.",
    ],
    body: [
      {
        t: "p",
        text: "This gets argued as a choice by people who sell one of the two. In practice they operate on different timescales and different cost structures, and the useful question is not which one but in what order and in what proportion.",
      },

      { t: "h2", text: "How they actually differ" },
      {
        t: "table",
        head: ["", "Google Ads", "SEO and local"],
        rows: [
          ["First leads", "Days", "4 to 12 weeks for local, 3 to 9 months for pages"],
          ["Cost per lead", "$80 to $300, ongoing", "Effectively $0 once established"],
          ["Stops when", "You stop paying, immediately", "Slowly, over months of neglect"],
          ["Scales by", "Spending more", "Publishing more and earning more reviews"],
          ["Ceiling", "Your budget", "Search volume in your area"],
          ["Control", "High. Change it this afternoon", "Low. You are a guest of the algorithm"],
          ["Compounds", "No", "Yes"],
        ],
      },
      {
        t: "p",
        text: "The last row is the whole argument for SEO and the reason it survives being slow. Ad costs only go up as competitors bid; organic positions and review counts get harder for competitors to take the longer you hold them.",
      },

      { t: "h2", text: "The sequence that works" },
      {
        t: "steps",
        items: [
          {
            title: "Month one: both, but weighted to ads",
            body: "Ads on, because you need leads this month. At the same time, the Business Profile corrected and review requests automated, which costs nothing and starts the slow clock. See [local SEO for solar contractors](/blog/local-seo-for-solar-contractors).",
          },
          {
            title: "Months two to four: ads carry, organic builds",
            body: "Ads at full budget. Service area pages and core service pages written. Reviews accumulating. Nothing visible happening on the organic side, which is normal and is where most companies quit.",
          },
          {
            title: "Months four to nine: the crossover",
            body: "Map pack positions improve, service area pages start ranking, organic enquiries appear in the CRM. Ad spend can start being judged against a rising organic baseline rather than as the only source.",
          },
          {
            title: "Month twelve onward: choose deliberately",
            body: "With organic carrying a meaningful share, ad spend becomes a decision about growth rate rather than a survival requirement. Most companies keep both, at a different ratio.",
          },
        ],
      },
      {
        t: "callout",
        label: "The trap in the middle",
        text: "Month four is when SEO has cost money and produced nothing visible, and it is when most solar companies stop. It is also roughly one month before the first pages would have ranked. Front-load the profile and review work specifically so there is visible progress to point at during that month.",
      },

      { t: "h2", text: "The thing sitting between them" },
      {
        t: "p",
        text: "The Google Business Profile and reviews get discussed as SEO, and on the timescale they behave much more like ads: profile corrections often show within four to twelve weeks, and they cost nothing per lead.",
      },
      {
        t: "p",
        text: "For a solar company with a limited budget, that is the highest-return work available, ahead of both. It is free, it is fast by SEO standards, and it makes paid traffic convert better at the same time. See [how to rank in the Google map pack](/blog/how-to-rank-in-google-map-pack-solar).",
      },

      { t: "h2", text: "Why running both is cheaper than either" },
      {
        t: "ul",
        items: [
          "**Reviews lower ad costs.** More reviews means a higher conversion rate on the same clicks, which lowers cost per lead and improves quality score.",
          "**Ads inform SEO.** The search terms report is real keyword data from your actual market, better than any tool. See [solar SEO keywords](/blog/solar-seo-keywords).",
          "**Brand familiarity compounds.** Somebody who has seen your ads is more likely to click your organic result, and vice versa.",
          "**Ads cover seasonal gaps.** Organic is steady; ads can be turned up when the diary is thin and down when it is full.",
        ],
      },

      { t: "h2", text: "When one genuinely beats the other" },
      {
        t: "p",
        text: "Ads alone make sense if you need leads within weeks, are testing a new territory before committing, or have crews idle now. SEO alone makes sense if you have no budget at all, or if your market has so little search volume that the ad auction is thin and organic is easy to dominate.",
      },
      {
        t: "p",
        text: "For everybody else, the honest answer is a ratio that changes over a year, starting heavily paid and ending more balanced. For what to expect from the slow side, see [how long does SEO take for solar companies](/blog/how-long-does-seo-take-for-solar-companies).",
      },
      {
        t: "quote",
        text: "Ads are rent. SEO is a mortgage. Most businesses need somewhere to live while they are paying it off.",
      },
    ],
    faq: [
      {
        q: "Should a new solar company do ads or SEO first?",
        a: "Both, in the same week, weighted to ads. Ads produce the leads you need this month; the Business Profile and review work cost nothing and start the slow clock immediately, which is the part you cannot buy later.",
      },
      {
        q: "Is SEO cheaper than Google Ads for solar?",
        a: "Per lead, dramatically, once established. In the first six months it is more expensive, because you are paying for work that has not produced anything yet. The crossover is usually somewhere between month six and month twelve.",
      },
      {
        q: "Can I stop ads once SEO works?",
        a: "You can, and most companies reduce rather than stop. Ads remain useful for filling seasonal gaps, testing new territories and defending your brand name, which is usually the cheapest campaign in the account.",
      },
    ],
    related: [
      "google-ads-for-solar-companies",
      "local-seo-for-solar-contractors",
      "how-long-does-seo-take-for-solar-companies",
    ],
  },

  {
    slug: "solar-referral-program-ideas",
    title: "Solar referral programme ideas",
    metaTitle: "Solar Referral Programme Ideas That Actually Run",
    metaDescription:
      "How to build a solar referral programme that keeps producing: the reward structures, the timing, the legal points, and why most programmes quietly stop.",
    keyword: "solar referral program ideas",
    secondary: [
      "solar referral program",
      "referral scheme solar",
      "customer referrals",
      "referral marketing solar",
    ],
    excerpt:
      "Referral prospects arrive further along than any paid lead. Here is how to build a programme that does not quietly stop after two months.",
    category: "ads",
    intent: "Informational",
    icon: "magnet",
    published: "2026-04-27",
    answer:
      "A solar referral programme works when the ask is built into the job at a fixed point, the reward is meaningful and paid promptly, and the customer is given something concrete to pass on. Most programmes fail because the ask depends on somebody remembering rather than being part of the process.",
    takeaways: [
      "Referral leads close at far higher rates than any paid channel.",
      "Build the ask into the job, at a fixed point, or it stops within two months.",
      "Pay promptly and visibly. Slow payment kills a programme faster than a small reward.",
      "Give them something to pass on. Tell your neighbours is not an instruction.",
    ],
    body: [
      {
        t: "p",
        text: "Referral leads arrive pre-trusted. Somebody the buyer knows has already answered the questions your website spends a thousand words on: are they real, did they turn up, did the bill actually fall. That is why they close at rates no paid channel gets near.",
      },
      {
        t: "p",
        text: "And almost every solar company has an intention to ask for referrals rather than a system that does.",
      },

      { t: "h2", text: "Why most programmes stop" },
      {
        t: "ul",
        items: [
          "**Nobody owns the ask.** It is everybody's job, therefore nobody's, and it stops the first busy fortnight.",
          "**The timing is wrong.** Asked on install day, before the customer has any evidence it worked.",
          "**The reward is vague.** We will look after you is not a reward anybody acts on.",
          "**Payment is slow.** A referral reward paid six weeks later produces no second referral, and word gets around.",
          "**There is nothing to pass on.** Tell your friends is an instruction with no object attached to it.",
        ],
      },

      { t: "h2", text: "The structures that work" },
      {
        t: "table",
        head: ["Structure", "How it works", "Suits"],
        rows: [
          [
            "Flat cash per install",
            "A fixed amount when a referred job completes",
            "Most installers. Simple and understood",
          ],
          [
            "Two-sided",
            "Both referrer and new customer get something",
            "Makes the introduction easier to make",
          ],
          [
            "Tiered",
            "Rising rewards for the second and third referral",
            "Customers with large networks or community roles",
          ],
          [
            "Charitable option",
            "The reward goes to a local cause of their choosing",
            "Customers uncomfortable taking cash",
          ],
          [
            "Service credit",
            "Free maintenance visits or a monitoring upgrade",
            "Lower cash cost, less motivating than cash",
          ],
        ],
      },
      {
        t: "p",
        text: "Two-sided is usually the strongest. It converts an awkward favour into something the referrer is giving their neighbour rather than something they are being paid for, which is a much easier conversation to have over a fence.",
      },
      {
        t: "callout",
        label: "Set the reward against a lead cost",
        text: "If a paid lead costs $150 and a sat appointment $500, a referral reward worth a few hundred that closes at a far higher rate is straightforwardly good value. Most solar referral rewards are set too low because they are priced as a thank-you rather than as a lead acquisition cost.",
      },

      { t: "h2", text: "Building the ask into the job" },
      {
        t: "steps",
        items: [
          {
            title: "Mention it at contract signing",
            body: "Not as a pitch. A sentence: most of our work comes from people recommending us, and we pay for that. Plant it early so the later ask is not a surprise.",
          },
          {
            title: "Ask at commissioning, verbally",
            body: "The crew lead, on the last day, in person. If anyone asks how it went, we would be glad if you mentioned us. This is the highest-converting moment there is.",
          },
          {
            title: "Ask again after the first lower bill",
            body: "Automatically, alongside the review request. This is when the customer actually has evidence and is most likely to be talking about it.",
          },
          {
            title: "Ask at twelve months, with their numbers",
            body: "Send their actual annual savings, then ask. A customer holding a real figure is a customer with something to say.",
          },
        ],
      },
      {
        t: "p",
        text: "Three of those four fire automatically off a job status. That is what makes it a programme rather than a good intention. See [how to ask for solar referrals](/blog/how-to-ask-for-solar-referrals) for the wording.",
      },

      { t: "h2", text: "Give them something to pass on" },
      {
        t: "p",
        text: "The single most common failure is asking for referrals without providing anything referable. A customer who wants to help has to construct the introduction themselves, and most will not.",
      },
      {
        t: "ol",
        items: [
          "**A short link with their name in it**, so the referral is tracked automatically and the reward is not a dispute.",
          "**A forwardable message**, already written, that they can send to a neighbour without composing anything.",
          "**A physical card or two**, which still works well over a fence or at a barbecue.",
          "**Their own numbers**, so they can say what it actually did rather than being vague about it.",
        ],
      },

      { t: "h2", text: "The practical points" },
      {
        t: "ul",
        items: [
          "**Pay promptly.** Within a week of the referred job completing. Slow payment ends a programme faster than a small reward does.",
          "**Track it properly**, so there is never an argument about who referred whom.",
          "**Tell them it worked.** A message saying their referral went ahead and the reward is on its way is what produces the second referral.",
          "**Check the rules.** Referral rewards can have tax or disclosure implications depending on your jurisdiction, and incentives must never be attached to reviews. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
        ],
      },
      {
        t: "link",
        href: "/products/automated-referrals",
        label: "Automatic referrals",
        note: "The asks, fired off the job rather than remembered",
      },
    ],
    faq: [
      {
        q: "How much should a solar referral reward be?",
        a: "Price it against your cost per closed job from paid channels rather than as a gesture. Referral leads close at far higher rates, so a reward that looks generous next to a thank-you is usually still cheaper than the equivalent paid acquisition.",
      },
      {
        q: "When is the best time to ask for a referral?",
        a: "After the first lower bill, when the customer has evidence. A verbal mention at commissioning sets it up, and the automated ask a few weeks later is what actually produces referrals.",
      },
      {
        q: "Can I offer a reward for a review as well?",
        a: "No. Incentivising reviews breaks platform policy and can remove a large part of your review history. Referral rewards are fine; review rewards are not, and the two must be kept entirely separate.",
      },
    ],
    related: [
      "how-to-ask-for-solar-referrals",
      "how-to-get-more-reviews-for-solar-installers",
      "solar-lead-generation-ideas",
    ],
  },

  {
    slug: "how-to-reactivate-old-solar-leads",
    title: "How to reactivate old solar leads",
    metaTitle: "How to Reactivate Old Solar Leads (Free Pipeline)",
    metaDescription:
      "The cheapest campaign in solar: how to message old unconverted leads, what to say, which to exclude, and what to expect from a database reactivation.",
    keyword: "how to reactivate old solar leads",
    secondary: [
      "reactivate old leads",
      "database reactivation",
      "old solar leads",
      "dead leads campaign",
    ],
    excerpt:
      "Every quote you did not win is a person who wanted solar. Messaging them is the cheapest campaign in this blog and almost nobody runs it.",
    category: "ads",
    intent: "Informational",
    icon: "database",
    published: "2026-04-23",
    answer:
      "Reactivate old solar leads by messaging everyone who enquired or was quoted and never bought, with a short, direct, non-promotional message that gives them an easy way to say no. The cost is the messages, the leads are already yours, and most solar companies have never once done it.",
    takeaways: [
      "A three-year-old solar company is sitting on hundreds of unconverted enquiries.",
      "Short and direct beats a campaign. The best message reads like a person remembered them.",
      "Exclude anyone who opted out, anyone who installed, and anyone who complained.",
      "Run it once properly, then let ongoing nurture handle it from then on.",
    ],
    body: [
      {
        t: "p",
        text: "This is the highest return-per-hour thing in this entire blog and most solar companies have never done it. Every person who asked for a quote and did not buy wanted solar. Many of them never bought from anybody, because solar gets postponed rather than rejected.",
      },
      {
        t: "p",
        text: "They are already in your system. They cost nothing to reach. And the average solar company has hundreds of them sitting in a status called Lost.",
      },

      { t: "h2", text: "Who to include" },
      {
        t: "table",
        head: ["Group", "Include?", "Why"],
        rows: [
          ["Quoted, never proceeded", "Yes, first priority", "Highest intent. They got as far as numbers"],
          ["Enquired, never reached", "Yes", "Real intent, contact failed rather than interest"],
          ["Booked, never sat", "Yes", "They committed time once"],
          ["Said not yet", "Yes, especially", "They told you to come back. This is you coming back"],
          ["Chose a competitor", "Yes, carefully", "A share never proceeded at all"],
          ["Installed with a competitor", "No", "Offer battery or EV instead, as a separate campaign"],
          ["Opted out or complained", "No, ever", "Exclude permanently and check the list twice"],
        ],
      },
      {
        t: "callout",
        label: "Check your suppression list first",
        text: "Before sending anything, remove everyone who asked not to be contacted, anyone with an open complaint, and anyone deceased. It takes twenty minutes and it prevents the one outcome that makes this campaign a disaster rather than a windfall.",
      },

      { t: "h2", text: "What to send" },
      {
        t: "p",
        text: "Short, direct, from a person, and with an easy exit. The best-performing reactivation messages do not look like campaigns at all, which is precisely why they work.",
      },
      {
        t: "quote",
        text: "Hi Sarah, it is Dan from Volt Solar. You asked us about panels back in 2024 and it never went ahead. No pitch: I am just going through old enquiries and wondered whether solar is still on your list or whether I should take you off ours.",
        cite: "The question at the end is the whole message",
      },
      {
        t: "p",
        text: "Two things make this work. It admits it is an old enquiry rather than pretending to be a fresh thought, which is disarming and honest. And it offers to remove them, which is easy to reply to and makes replying feel low-stakes.",
      },

      { t: "h2", text: "Running the campaign" },
      {
        t: "steps",
        items: [
          {
            title: "Clean and segment the list",
            body: "Remove opt-outs and duplicates. Split by how they left: quoted, never reached, said not yet. Each gets a slightly different first line.",
          },
          {
            title: "Send in batches",
            body: "Fifty to a hundred a day, not the whole list at once. Replies arrive quickly and you need to be able to answer them properly. A batch nobody can handle is worse than no batch.",
          },
          {
            title: "Text first, email second",
            body: "Where you have consent and a mobile number, text wins by a wide margin. Email for the rest, plain text, from a person. See [SMS marketing for solar companies](/blog/sms-marketing-for-solar-companies).",
          },
          {
            title: "Answer every reply within minutes",
            body: "Including the no thanks ones, politely, and remove them immediately. The replies come fast and the goodwill is in the handling.",
          },
          {
            title: "Move the rest into nurture",
            body: "Anyone who did not reply goes into the monthly sequence rather than back into the Lost pile. See [solar lead nurturing](/blog/solar-lead-nurturing).",
          },
        ],
      },

      { t: "h2", text: "What to expect" },
      {
        t: "p",
        text: "Replies within hours rather than days, because the message reads like a person. A meaningful share will be no thanks, which is a genuine result: it cleans your database and it is the honest answer to a direct question.",
      },
      {
        t: "p",
        text: "The value is concentrated in a small number of people who were always going to buy eventually and had simply not been asked since. At solar job values, a handful of those pays for a year of most marketing.",
      },
      {
        t: "p",
        text: "One thing to be clear about: this works once per database. After it, the pipeline comes from ongoing nurture rather than from another reactivation blast, which is why the fifth step above matters more than it looks. See [solar database reactivation campaign](/blog/solar-database-reactivation-campaign) for the fuller version.",
      },

      { t: "h2", text: "Doing it lawfully" },
      {
        t: "ul",
        items: [
          "**Check you have a basis to contact them.** They enquired, which usually gives you one, but rules differ by jurisdiction and by how long ago it was.",
          "**Honour every opt-out immediately**, including informal ones, and record it.",
          "**Identify yourself** in every message.",
          "**Do not text purchased or scraped lists.** This campaign is for your own enquiries only.",
          "**Keep the records**: when they enquired, what you sent, and when.",
        ],
      },
      {
        t: "link",
        href: "/products/reactivation-campaigns",
        label: "Automatic customer returns",
        note: "The ongoing version, once the one-off campaign is done",
      },
    ],
    faq: [
      {
        q: "How old can a solar lead be and still be worth contacting?",
        a: "Three or four years is still worth a message, because solar decisions get postponed rather than abandoned. Beyond that the contact details decay and the response rate falls sharply, though it never reaches zero.",
      },
      {
        q: "Will old leads be annoyed to hear from me?",
        a: "Very few, when the message is honest about being an old enquiry and offers an easy way out. The ones who are annoyed will tell you, you remove them, and your list is cleaner than it was.",
      },
      {
        q: "How many leads do I need for this to be worth doing?",
        a: "Around a hundred makes it worth an afternoon. At solar job values a single closed job from the exercise pays for it many times over, and the list cleaning is worth something on its own.",
      },
    ],
    related: [
      "solar-database-reactivation-campaign",
      "solar-lead-nurturing",
      "why-solar-leads-go-cold",
    ],
  },

  {
    slug: "local-services-ads-for-solar",
    title: "Local Services Ads for solar companies",
    metaTitle: "Local Services Ads for Solar: Setup and Costs",
    metaDescription:
      "How Local Services Ads work for solar, what verification requires, what leads cost compared to search, how ranking works, and how to dispute bad leads.",
    keyword: "local services ads for solar",
    secondary: [
      "google local services ads",
      "lsa for contractors",
      "google guaranteed",
      "local services ads cost",
    ],
    excerpt:
      "Pay per lead rather than per click, placed above search results, at roughly half the cost. The verification takes weeks and it is worth it.",
    category: "ads",
    intent: "Informational",
    icon: "megaphone",
    published: "2026-03-26",
    answer:
      "Local Services Ads place a solar company above the search results and charge per lead rather than per click, commonly around $53 to $110 compared to $80 to $300 on search. They require licence, insurance and background verification that takes several weeks, and ranking depends heavily on review score, responsiveness and proximity.",
    takeaways: [
      "Charged per lead, not per click, and placed above everything else.",
      "Verification takes weeks. Start it before you need the leads.",
      "Responsiveness is a ranking factor here, unusually and explicitly.",
      "Dispute bad leads. Most installers never do and it is a standing discount.",
    ],
    body: [
      {
        t: "p",
        text: "Local Services Ads sit at the very top of the results, above both the paid search ads and the map pack, with a verification badge. For a local trade they are usually the best-value paid placement available, and plenty of solar companies never set them up because the verification looks like paperwork.",
      },

      { t: "h2", text: "How they differ from ordinary search ads" },
      {
        t: "table",
        head: ["", "Local Services Ads", "Search ads"],
        rows: [
          ["You pay for", "Each lead, a call or a message", "Each click"],
          ["Typical cost", "Around $53 to $110 a lead", "$80 to $300 a lead"],
          ["Placement", "Above everything, with a badge", "Below LSAs, above organic"],
          ["Setup", "Licence, insurance and background checks", "An account and a card"],
          ["Ranking by", "Proximity, reviews, responsiveness, job type", "Bid and quality score"],
          ["Landing page", "None. The lead comes to you directly", "Required, and it matters"],
          ["Bad leads", "Disputable for a credit", "You paid for the click regardless"],
        ],
      },
      {
        t: "p",
        text: "The row that changes the economics is the first. You are not paying for research traffic, misclicks or people who bounce. You pay when somebody contacts you, which removes most of the waste that makes search expensive.",
      },

      { t: "h2", text: "Verification, which is the actual barrier" },
      {
        t: "steps",
        items: [
          {
            title: "Business and licence checks",
            body: "Your trade licence, in the right categories, current. Most solar companies have this in order and it is worth checking the exact categories before applying.",
          },
          {
            title: "Insurance",
            body: "Liability cover at or above the required level, with a certificate. The most common delay is a certificate not naming the entity exactly as registered.",
          },
          {
            title: "Background checks",
            body: "On the business and, in some markets, on owners or field staff. Handled by a third party and the part that takes the longest.",
          },
          {
            title: "Reviews connected",
            body: "Your Google reviews feed the ranking directly, so profile work done earlier pays off here immediately. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
          },
        ],
      },
      {
        t: "callout",
        label: "Start early",
        text: "The whole process commonly takes several weeks and occasionally longer if a document needs re-issuing. Begin it now rather than when the diary looks thin, because it cannot be rushed at the point you need it.",
      },

      { t: "h2", text: "How ranking works, and the unusual factor" },
      {
        t: "p",
        text: "Proximity, review score and review count behave much as they do in the map pack. The factor that surprises people is responsiveness: how quickly and how consistently you answer the leads the platform sends you is explicitly part of how often it sends more.",
      },
      {
        t: "ul",
        items: [
          "**Answer the phone.** Missed LSA calls are counted against you, directly.",
          "**Reply to messages quickly**, within minutes rather than hours.",
          "**Keep your hours accurate.** Showing open and not answering is the worst combination available.",
          "**Do not decline jobs repeatedly**, or the platform sends fewer of them.",
          "**Keep review flow steady**, because it feeds ranking here as well as in the map pack.",
        ],
      },
      {
        t: "p",
        text: "In other words, the same speed-to-lead discipline that raises conversion everywhere else also lowers your cost here by raising how often you appear. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },

      { t: "h2", text: "Disputing bad leads" },
      {
        t: "p",
        text: "You can request credit for leads that are outside your service area, for a job type you do not offer, spam, or a customer who never engaged at all. Most installers never bother, which is a standing discount left unclaimed.",
      },
      {
        t: "ol",
        items: [
          "**Make it somebody's weekly task**, not something done when remembered.",
          "**Dispute promptly.** There are time limits and they are not generous.",
          "**Be accurate.** Disputing genuine leads that simply did not convert is both wrong and counterproductive.",
          "**Track the credit rate.** If a large share of leads are disputable, your job types or service area are set wrongly.",
        ],
      },

      { t: "h2", text: "Running them alongside search" },
      {
        t: "p",
        text: "They are complements rather than alternatives. LSAs capture the people who want to call somebody verified right now; search captures the people researching, comparing and looking for specifics like battery storage or a particular brand.",
      },
      {
        t: "p",
        text: "For most solar companies the sensible order is LSAs first, because the cost per lead is lower and the setup is a one-off, then search on top for the terms LSAs cannot reach. See [Google Ads for solar companies](/blog/google-ads-for-solar-companies) and [solar Google Ads cost per lead](/blog/solar-google-ads-cost-per-lead).",
      },
      {
        t: "p",
        text: "One last point about the badge itself. The verification mark beside your name is doing work that your website cannot: it is a third party saying you are licensed and insured, shown at the exact moment somebody is deciding who to let onto their roof. For a trust purchase like solar, that placement is worth more than the position alone suggests.",
      },
      {
        t: "link",
        href: "/blog/local-seo-for-solar-contractors",
        label: "Local SEO for solar contractors",
        note: "The free placement directly underneath",
      },
    ],
    faq: [
      {
        q: "Are Local Services Ads worth it for solar?",
        a: "Usually yes, because you pay per lead rather than per click and the placement sits above everything else. The barrier is verification, which takes weeks, and the ongoing requirement is answering quickly.",
      },
      {
        q: "How long does Local Services Ads verification take?",
        a: "Commonly several weeks, longer if licence or insurance documents need re-issuing or the business name does not match exactly. Start the process well before you need the leads.",
      },
      {
        q: "Can I get refunds for bad Local Services Ads leads?",
        a: "You can request credit for leads outside your service area, for services you do not offer, or that were spam. Do it weekly and promptly, because there are time limits and most installers leave the credits unclaimed.",
      },
    ],
    related: [
      "google-ads-for-solar-companies",
      "solar-google-ads-cost-per-lead",
      "local-seo-for-solar-contractors",
    ],
  },

  {
    slug: "how-to-ask-for-solar-referrals",
    title: "How to ask for solar referrals",
    metaTitle: "How to Ask for Solar Referrals Without It Being Awkward",
    metaDescription:
      "The wording and the timing for asking solar customers for referrals, why the usual ask fails, and what to give them so the introduction actually happens.",
    keyword: "how to ask for solar referrals",
    secondary: [
      "asking for referrals",
      "referral request",
      "how to get referrals",
      "customer referral ask",
    ],
    excerpt:
      "Tell your friends about us is not an instruction. Here is the ask that works, when to make it, and what to hand them.",
    category: "ads",
    intent: "Informational",
    icon: "handshake",
    published: "2026-03-02",
    answer:
      "Ask for solar referrals at two moments: verbally at commissioning, and in writing a few weeks later once the first lower bill has arrived. Ask for something specific rather than for referrals in general, name the kind of person you help, and give the customer a ready-made message and a tracked link to pass on.",
    takeaways: [
      "Ask twice: verbally on the last day, in writing after the first bill.",
      "Be specific about who you want. Anyone is harder to think of than a neighbour with a south-facing roof.",
      "Give them the message already written. Composing one is the step where it dies.",
      "Say thank you visibly and pay promptly. That is what produces the second referral.",
    ],
    body: [
      {
        t: "p",
        text: "Most referral asks fail for the same reason most review asks fail: the timing is wrong and the request is too vague to act on. Both are fixable in an afternoon.",
      },

      { t: "h2", text: "Why the usual ask does not work" },
      {
        t: "p",
        text: "If you know anyone who needs solar, send them our way. Said warmly, on the last day, and it produces almost nothing. Three reasons.",
      },
      {
        t: "ul",
        items: [
          "**Anyone is too broad.** Asked to think of anyone, people think of nobody. It is a memory problem rather than a willingness problem.",
          "**The timing is early.** The customer has panels and no evidence yet. They cannot recommend an outcome they have not seen.",
          "**There is nothing to pass on.** The customer has to remember your name, find your number, and compose an introduction themselves.",
        ],
      },

      { t: "h2", text: "The two moments" },
      {
        t: "steps",
        items: [
          {
            title: "At commissioning, verbally, from the crew",
            body: "Not a pitch, a plant. Most of our work comes from people mentioning us to a neighbour. If anyone asks about the panels over the next few weeks, we would be glad if you pointed them at us. Ten seconds, from the person who did the work.",
          },
          {
            title: "After the first lower bill, in writing",
            body: "This is the real ask, and it fires automatically a few weeks later alongside the review request. The customer now has a number, which is what makes them able to recommend rather than just willing.",
          },
        ],
      },
      {
        t: "callout",
        label: "Why the second ask works",
        text: "A customer who has seen their bill drop is already telling people. The message does not create the conversation, it makes sure your name is attached to a conversation that is happening anyway. That is a much easier thing to ask for.",
      },

      { t: "h2", text: "Be specific about who" },
      {
        t: "p",
        text: "Replace anyone with a description the customer can picture. The difference in response is larger than it sounds.",
      },
      {
        t: "table",
        head: ["Instead of", "Ask"],
        rows: [
          ["Anyone who needs solar", "Anyone on your street who has asked about your panels"],
          ["Friends and family", "Someone at work who has complained about their bill"],
          ["People you know", "A neighbour with a roof like yours"],
          ["Spread the word", "Whoever asked you about it when the scaffolding was up"],
        ],
      },
      {
        t: "p",
        text: "The right-hand column works because it names a specific person the customer can actually picture. The left-hand column asks them to search an entire mental address book, and nobody does.",
      },

      { t: "h2", text: "The message to send" },
      {
        t: "quote",
        text: "Hi Sarah, hope the first bill was a pleasant surprise. Quick ask: if anyone on your street asked about the panels while we were there, would you mind passing this on? [link] We pay $X when a referral goes ahead, and I will tell you if it does. No pressure either way.",
      },
      {
        t: "p",
        text: "Then, on its own, the thing they can forward. This is the part almost everybody omits and it is the part that decides whether anything happens.",
      },
      {
        t: "quote",
        text: "Hi, we had solar fitted by Volt Solar a few weeks ago and it has gone well. If you were thinking about it, they will tell you straight whether your roof is worth doing. [link]",
        cite: "The forwardable version, written for them",
      },

      { t: "h2", text: "After the referral" },
      {
        t: "ol",
        items: [
          "**Tell the referrer you have been in touch.** Within a day, so they know the introduction landed.",
          "**Tell them the outcome**, either way. A referral that went nowhere still deserves an answer, and it keeps the next one coming.",
          "**Pay within a week** of the job completing. Slow payment ends referral programmes faster than a small reward does.",
          "**Thank them visibly.** A short handwritten note is unusual enough now to be memorable, and it costs almost nothing.",
          "**Ask again at twelve months**, with their annual savings figure attached.",
        ],
      },
      {
        t: "p",
        text: "All of that sits inside a wider structure covered in [solar referral programme ideas](/blog/solar-referral-program-ideas), and it works best when the asks fire off the job rather than depending on anybody remembering. See also [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers), which uses the same moments for a different purpose.",
      },
      {
        t: "p",
        text: "One final thought on why this is worth the small awkwardness. A referred prospect arrives having already had the trust conversation with somebody they know, which is the conversation your website, your reviews and your first phone call all exist to have. They arrive past it. That is why referral leads close at rates no paid channel gets near, and why an ask that takes ten seconds is worth building into the job properly.",
      },
      {
        t: "link",
        href: "/products/automated-referrals",
        label: "Automatic referrals",
        note: "Both asks, fired on the job status",
      },
    ],
    faq: [
      {
        q: "Is it pushy to ask customers for referrals?",
        a: "Not when the job went well and the ask is specific and easy to decline. What feels pushy is asking repeatedly, asking before there is any evidence the system works, or making the customer feel they owe you something.",
      },
      {
        q: "Should I offer a reward for referrals?",
        a: "Yes, and price it against what a lead costs you elsewhere rather than as a gesture. Referral leads close at far higher rates, so a meaningful reward is usually still cheaper than the equivalent paid acquisition.",
      },
      {
        q: "What if a customer says no?",
        a: "Thank them and never raise it again with that customer. A graceful no costs nothing, and pressing it turns a satisfied customer into somebody who feels used.",
      },
    ],
    related: [
      "solar-referral-program-ideas",
      "how-to-get-more-reviews-for-solar-installers",
      "solar-lead-generation-ideas",
    ],
  },

  {
    slug: "solar-database-reactivation-campaign",
    title: "Running a solar database reactivation campaign",
    metaTitle: "Solar Database Reactivation Campaign: Step by Step",
    metaDescription:
      "A complete walkthrough of a solar database reactivation campaign: preparing the list, segmenting it, the messages, the batching, and handling the replies.",
    keyword: "solar database reactivation campaign",
    secondary: [
      "database reactivation",
      "reactivation campaign",
      "old lead campaign",
      "reengagement campaign solar",
    ],
    excerpt:
      "The full walkthrough: preparing the list, the three segments, the messages, the batching, and what to do when the replies arrive faster than expected.",
    category: "ads",
    intent: "Informational",
    icon: "database",
    published: "2026-02-06",
    answer:
      "A solar database reactivation campaign works in five steps: export and clean the list, segment by how the lead left, write a short honest message per segment, send in daily batches small enough to handle the replies, and move everyone who does not respond into ongoing monthly nurture rather than back into a Lost pile.",
    takeaways: [
      "Clean the list first. One message to somebody who opted out undoes the whole campaign.",
      "Three segments, three first lines. Everything else is identical.",
      "Batch it. Fifty to a hundred a day, because the replies come fast.",
      "The campaign ends by starting a nurture sequence, not by archiving the list.",
    ],
    body: [
      {
        t: "p",
        text: "This is the operational version of [how to reactivate old solar leads](/blog/how-to-reactivate-old-solar-leads). The argument is made there; here is how to actually run it, in five steps, over about a fortnight.",
      },

      { t: "h2", text: "Step one: export and clean" },
      {
        t: "p",
        text: "Export everybody who enquired and never became a customer. Then remove, carefully, in this order.",
      },
      {
        t: "ol",
        items: [
          "**Anyone who opted out**, on any channel, ever. Check both your CRM flags and your email platform's suppression list; they are frequently out of step.",
          "**Anyone with an unresolved complaint.** A reactivation message to somebody mid-dispute is the worst possible timing.",
          "**Anyone who installed with somebody else**, where you know. They get a battery or EV charger campaign instead, which is a different message.",
          "**Duplicates**, matched on phone number rather than name. Two messages to one person reads as spam.",
          "**Anyone deceased**, which does appear in old contractor databases and is worth the check.",
        ],
      },
      {
        t: "callout",
        label: "Do not skip this",
        text: "One message to somebody who asked never to be contacted can turn a profitable campaign into a complaint and, in some jurisdictions, a penalty. Twenty minutes of list hygiene is the cheapest insurance available.",
      },

      { t: "h2", text: "Step two: segment into three" },
      {
        t: "table",
        head: ["Segment", "Who", "First line"],
        rows: [
          [
            "Quoted",
            "Received a quote, never proceeded",
            "We quoted you for panels back in [year] and it never went ahead",
          ],
          [
            "Never reached",
            "Enquired, never made contact",
            "You asked us about solar in [year] and I do not think we ever managed to speak",
          ],
          [
            "Not yet",
            "Explicitly said the timing was wrong",
            "You told us a while back that the timing was not right for solar",
          ],
        ],
      },
      {
        t: "p",
        text: "Three first lines, then the same body and the same closing question. Segmenting further gets you diminishing returns and a much longer afternoon.",
      },

      { t: "h2", text: "Step three: write the message" },
      {
        t: "p",
        text: "Short. From a person. Honest about being an old enquiry. Ending in a question that is easy to answer either way.",
      },
      {
        t: "quote",
        text: "Hi Sarah, it is Dan from Volt Solar. We quoted you for panels back in 2024 and it never went ahead. No pitch: I am working through old enquiries and wondered whether solar is still something you are considering, or whether I should take you off our list. Either answer is genuinely fine.",
      },
      {
        t: "ul",
        items: [
          "**No links in the first text.** They read as promotional and can trip carrier filtering. See [SMS marketing for solar companies](/blog/sms-marketing-for-solar-companies).",
          "**No offer in the first message.** A discount makes it a campaign, and the reason this works is that it does not read like one.",
          "**No mention of a deadline.** There is not one, and inventing one costs the honesty the message depends on.",
          "**One question, at the end**, with the easy exit inside it.",
        ],
      },

      { t: "h2", text: "Step four: batch the sending" },
      {
        t: "steps",
        items: [
          {
            title: "Fifty to a hundred a day",
            body: "Replies arrive within minutes and in volume. A batch larger than you can answer within the hour turns an advantage into a backlog, and a slow reply to somebody who just answered you is worse than not asking.",
          },
          {
            title: "Send mid-morning or early evening",
            body: "Avoid Monday morning and Friday afternoon. Early evening tends to produce the most considered replies.",
          },
          {
            title: "Text where you have a mobile and a basis, email otherwise",
            body: "Text response rates are far higher. Email versions should be plain text from a real person, not a designed template.",
          },
          {
            title: "Have somebody on the replies",
            body: "One named person for the duration of the campaign, not whoever is free. This is a two-week job with a defined start and end.",
          },
        ],
      },

      { t: "h2", text: "Step five: handle the replies, then keep going" },
      {
        t: "p",
        text: "Expect three kinds of reply, and have an answer ready for each before you send the first batch.",
      },
      {
        t: "table",
        head: ["Reply", "What to do"],
        rows: [
          [
            "Still interested",
            "Treat exactly like a new lead. Call within minutes, qualify properly, book if it fits",
          ],
          [
            "Not now, but maybe",
            "Ask when, record the date, and actually come back then. Most companies never do",
          ],
          [
            "Take me off",
            "Remove immediately, confirm politely, and thank them. Your list is now more accurate",
          ],
        ],
      },
      {
        t: "p",
        text: "Everybody who did not reply at all moves into the monthly nurture sequence rather than back into a Lost status. That is the step that turns a one-off campaign into an ongoing channel, and it is the one most companies skip. See [solar lead nurturing](/blog/solar-lead-nurturing).",
      },
      {
        t: "p",
        text: "Then do not run this again in six months. It works because it is unusual and honest, and repeating it turns it into exactly the campaign it was pretending not to be.",
      },
      {
        t: "link",
        href: "/products/reactivation-campaigns",
        label: "Automatic customer returns",
        note: "The ongoing version of this, running quietly",
      },
    ],
    faq: [
      {
        q: "How long does a reactivation campaign take to run?",
        a: "About two weeks for a database of several hundred, sending fifty to a hundred a day. The preparation is an afternoon and the replies are the real workload, which is why the batching matters.",
      },
      {
        q: "Should I offer a discount in a reactivation campaign?",
        a: "No, not in the first message. The reason these work is that they do not read like campaigns. A discount changes the register entirely, and it prices your service down for people who never asked for a discount.",
      },
      {
        q: "How often can I run a reactivation campaign?",
        a: "Once properly, then let ongoing nurture take over. Repeating it every six months turns an honest message into an obvious campaign and the response rate collapses.",
      },
    ],
    related: [
      "how-to-reactivate-old-solar-leads",
      "solar-lead-nurturing",
      "sms-marketing-for-solar-companies",
    ],
  },
] as const;
