import type { Post } from "../types";

/**
 * Cluster 9: Google Ads for solar contractors. Hub is
 * google-ads-for-solar-contractors. The pieces here cover the account build a
 * new solar operator should ship with, from campaign structure through the
 * negative list, matched landing pages, conversion tracking that reaches sat
 * appointments, and the bid-strategy sequence that trains the auction rather
 * than guessing at it.
 */
export const GOOGLE_ADS_POSTS: readonly Post[] = [
  {
    slug: "google-ads-for-solar-contractors",
    title: "Google Ads for solar contractors",
    metaTitle: "Google Ads for Solar Contractors: Account Build Guide",
    metaDescription:
      "The account build for a solar contractor's Google Ads: campaign structure, keyword themes, negatives, landing pages, and tracking that catches installs.",
    keyword: "google ads for solar contractors",
    secondary: [
      "solar google ads",
      "solar ppc",
      "ppc for solar contractors",
      "google ads solar installers",
    ],
    excerpt:
      "Clicks run $8 to $45 and leads $80 to $300. The account build, the keyword themes, the negative list, matched landing pages, and tracking that reaches sat appointments.",
    category: "google-ads",
    intent: "Informational",
    icon: "megaphone",
    pillar: true,
    published: "2026-10-15",
    answer:
      "Google Ads for a solar contractor works when the account is built on high-intent local search terms, each campaign has one theme, every ad group has a matched landing page, negatives filter out DIY, jobs and research traffic, and conversion tracking captures sat appointments and not just form fills. Clicks commonly run $8 to $45; raw leads $80 to $300.",
    takeaways: [
      "Fix speed-to-lead and review count before spending, or you are paying to lose.",
      "Separate campaigns by product. Shared budgets starve the ones that convert.",
      "The negative keyword list is as important as the keyword list. Build it before the account goes live.",
      "Judge the account on cost per sat appointment, never on cost per click.",
    ],
    body: [
      {
        t: "p",
        text: "Google Ads is the fastest way for a solar contractor to generate enquiries, and the fastest way to waste money. A single solar close is worth tens of thousands, which means a well-run competitor can rationally bid a great deal, and the auction settles where only good operators profit. The difference between a profitable account and an expensive education is the build. Not the budget.",
      },
      {
        t: "p",
        text: "This is the page we would hand to a new ads manager taking over a solar account on their first day.",
      },

      { t: "h2", text: "Before you spend a dollar" },
      {
        t: "p",
        text: "Three things decide whether paid traffic converts, and none of them live in the ad account. Skipping them is how most contractors conclude that Google Ads does not work for solar.",
      },
      {
        t: "ol",
        items: [
          "**Response time under five minutes.** You are paying up to $300 for an enquiry. Answering it tomorrow is burning it. The full argument is in [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
          "**A review count that stands comparison.** Paid visitors compare you against the map pack results on the same screen. Arriving with eleven reviews against competitors with two hundred means paying for clicks that were never going to convert.",
          "**A landing page that matches the ad.** Not the homepage. One form, one offer, proof above the fold, and the headline of the ad repeated at the top of the page.",
        ],
      },
      {
        t: "p",
        text: "Every one of those three raises the return on the same ad spend. Fixing them first is not a delay. It is the difference between an account that pays for itself and one that funds an education.",
      },

      { t: "h2", text: "How should the account actually be structured?" },
      {
        t: "p",
        text: "Shallow and specific. Solar accounts fail from over-complication far more often than from under-optimisation.",
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
            "Homepage",
          ],
        ],
      },
      {
        t: "p",
        text: "Four campaigns, each with its own budget. Shared budgets starve the campaigns that convert and feed the ones that don't.",
      },
      {
        t: "p",
        text: "Each campaign holds two to five ad groups. Each ad group holds one theme and three to five keywords in that theme. If you cannot write one ad that suits every keyword in an ad group, it is two ad groups.",
      },
      {
        t: "p",
        text: "The brand campaign always runs. Competitors bid on your name; without a brand campaign you pay for the click anyway, in lost traffic.",
      },

      { t: "h2", text: "Which keywords actually generate installs?" },
      {
        t: "p",
        text: "High-intent: terms with a buying verb or a local qualifier. 'install solar panels', 'solar installer near me', 'solar quote [city]', 'cost of solar panels for home'. These convert.",
      },
      {
        t: "p",
        text: "Low-intent: terms a reader is using to learn, not to buy. 'how do solar panels work', 'diy solar', 'solar panels for sale'. These do not convert for a contractor and should either sit outside the keyword list or be bid at a tenth of the install-intent keywords.",
      },
      {
        t: "p",
        text: "Match types: start with exact and phrase match. Broad match hands Google permission to spend your budget on close-but-wrong searches, and in solar the close-but-wrong searches are expensive. Move to broad match only once you have at least a month of conversion data and a mature negative list.",
      },

      { t: "h2", text: "The negative keyword list every solar account starts with" },
      {
        t: "p",
        text: "Six categories almost every solar account should exclude at the account level before the first click:",
      },
      {
        t: "ul",
        items: [
          "**DIY and research.** diy, how to, how do, build your own, kit, kits",
          "**Jobs and education.** jobs, careers, salary, apprenticeship, course, courses, training, certification",
          "**Free and cheap.** free, cheap, bargain, lowest price, discount, used, second hand",
          "**Downloadable and digital.** download, pdf, software, calculator (unless you own the calculator)",
          "**Research and comparison intent that will not convert.** reddit, forum, youtube, wikipedia",
          "**Unrelated solar terms.** solar eclipse, solar system (astronomy), solar lights (garden)",
        ],
      },
      {
        t: "p",
        text: "Then mine the search terms report weekly for the first three months. Every search term that triggered an ad and did not convert, that you can see was never going to, becomes a new negative. The list grows into a filter that spends the budget only on traffic worth spending it on. The full starter list is in [negative keywords for solar Google Ads](/blog/negative-keywords-for-solar-google-ads).",
      },

      { t: "h2", text: "How do you know if it is working?" },
      {
        t: "p",
        text: "Not cost per click. Not even cost per lead. Cost per sat appointment.",
      },
      {
        t: "p",
        text: "The right tracking stack:",
      },
      {
        t: "ul",
        items: [
          "**GA4** with enhanced conversions on, so first-party data closes the loop when cookies are blocked.",
          "**Call tracking** on the number in the ads. Dynamic number insertion if you are serious; a dedicated number per campaign at minimum.",
          "**Offline conversion imports** from your CRM, so Google learns which clicks became sat appointments and closed deals, not just which clicks became form fills.",
        ],
      },
      {
        t: "p",
        text: "Most accounts optimise on form submission and ignore the step after. The problem is that half of form submissions never pick up the phone, and the half that do include tyre-kickers that will never book a survey. Importing the sat-appointment event back into Google is what tells its bidding model which clicks are actually worth something. Without it, Google is optimising for the wrong outcome. The [best solar contractor software](/blog/best-solar-contractor-software) piece covers which CRMs make this import easy and which make it painful.",
      },

      { t: "h2", text: "What budget and bidding should you start with?" },
      {
        t: "p",
        text: "The industry floor for a single-product, single-metro solar campaign is around $1,500 a month in ad spend. Below that, Google's bidding does not have enough signal to optimise and the account looks worse than it is. Above about $5,000 a month in a single metro, you are usually running into competitor floors and the next dollar earns less.",
      },
      {
        t: "p",
        text: "Start narrow. One campaign, one metro, one landing page, 30 days. Judge on cost per sat appointment, not on activity. Scale only when the single campaign is paying for itself.",
      },

      { t: "h2", text: "The bid-strategy progression" },
      {
        t: "p",
        text: "Four stages, in order. Skipping stages is how accounts stall.",
      },
      {
        t: "ol",
        items: [
          "**Manual CPC for the first 30 days.** You need the control to see what is happening at the keyword level. Automated strategies hide the detail that matters when the account is new.",
          "**Maximise clicks for a short window** only if conversion volume is too thin for the automated strategies to learn, and only on campaigns with clean negatives.",
          "**Maximise conversions** once you have 15 or more conversions in a rolling 30 days per campaign.",
          "**Target CPA or target ROAS** once you have 30 or more conversions and offline imports are flowing, so Google can bid against the sat-appointment event instead of the form fill.",
        ],
      },
      {
        t: "p",
        text: "Jumping to target CPA on week two is the single most common reason a new solar account burns $5,000 learning nothing.",
      },
      {
        t: "p",
        text: "Everything above is what Volt builds when a client turns on the paid-ads add-on. The full list of what Volt covers on the monthly system is on the [products page](/products), and what the paid-ads channels cost on top of the plan is on [pricing](/pricing).",
      },
      {
        t: "link",
        href: "/products",
        label: "Volt products",
        note: "The monthly system that sits under the ad spend",
      },
    ],
    faq: [
      {
        q: "Do I need a dedicated landing page, or will the homepage do?",
        a: "A dedicated page converts two to four times better than the homepage for most solar contractors. The homepage carries five messages competing for attention; a landing page carries one. If budget is tight, start with the homepage and ship a landing page as the first upgrade.",
      },
      {
        q: "How much should a solar lead cost on Google Ads?",
        a: "Raw leads commonly run $80 to $300 depending on the metro and the product. Residential installs are the most expensive; battery-only and EV charger leads are cheaper. The number that matters is cost per sat appointment, which is usually two to four times the raw lead cost once the half of leads that never book are filtered out.",
      },
      {
        q: "Is Performance Max worth running for a solar contractor?",
        a: "Not for an account that is still proving search works. Performance Max without strong conversion data spends into whichever placement looks cheapest, which for solar is usually brand traffic you already own. Prove search, then add Performance Max as a controlled extension once you have 30 or more monthly conversions.",
      },
      {
        q: "Can one person manage this in-house?",
        a: "Yes, if they can commit four to six hours a week to it and they have the account access to make changes without approvals. If they have other jobs and get to the account monthly, the account will quietly drift and the budget will quietly waste. The honest cost of in-house is a part-time salary; agency management is $1,000 to $3,000 a month plus the ad spend.",
      },
    ],
    related: [
      "speed-to-lead-for-solar-companies",
      "how-to-get-more-solar-leads",
      "best-solar-contractor-software",
    ],
  },

  {
    slug: "what-solar-leads-cost-on-google-ads",
    title: "What solar leads actually cost on Google Ads",
    metaTitle: "What Solar Leads Cost on Google Ads: 2026 Ranges",
    metaDescription:
      "What solar leads cost on Google Ads in 2026: ranges by product, why cost per click is the wrong metric, and what cost per sat appointment should be.",
    keyword: "what do solar leads cost on google ads",
    secondary: [
      "solar cpc",
      "solar ppc cost",
      "solar google ads budget",
      "cost per lead solar",
    ],
    excerpt:
      "Leads at $80 to $300 across most markets, sat appointments at roughly double that, and the three levers that lower the number without raising the budget.",
    category: "google-ads",
    intent: "Commercial",
    icon: "chart",
    published: "2026-10-15",
    answer:
      "On a well-structured Google Ads account, solar leads typically run $80 to $300 depending on market and product. Residential installs are the most expensive, battery storage is middle, EV chargers are usually cheaper, brand traffic is almost free. The number that actually matters is cost per sat appointment, which runs two to four times the raw lead cost once no-shows and tyre-kickers are filtered out.",
    takeaways: [
      "Cost per click is a vanity metric. Cost per sat appointment is the one that pays the bills.",
      "Raw lead cost varies three times between markets for the same product and setup.",
      "Roughly half of raw leads never book a survey, so sat-appointment cost is usually double the lead cost.",
      "You lower the number by filtering demand, not by raising the budget.",
    ],
    body: [
      {
        t: "p",
        text: "The honest answer to 'what does a solar lead cost on Google Ads' is a range, not a number. The range is wide because the inputs are wide: your product, your market, your account build, your landing page, and whether you count a form fill as a lead or hold out for a sat appointment.",
      },
      {
        t: "p",
        text: "What follows is the reference ranges we use at Volt before we have account data for a specific client, broken down by the thing that actually drives cost: what the lead is for.",
      },

      { t: "h2", text: "What a solar lead typically costs, by product" },
      {
        t: "p",
        text: "These are typical ranges on a well-structured account, in a mid-sized US metro, after the first 90 days when the account has learned.",
      },
      {
        t: "table",
        head: ["Product", "Typical cost per raw lead"],
        rows: [
          ["Residential install", "$100 to $300"],
          ["Battery storage", "$60 to $180"],
          ["EV charger installation", "$40 to $120"],
          ["Brand (your own company name)", "$1 to $10"],
        ],
      },
      {
        t: "p",
        text: "Residential install is the most expensive because every solar contractor in the postcode is bidding on the same terms, the close is worth tens of thousands, and the auction settles at the price where only disciplined operators profit. Battery and EV charger leads are cheaper because the demand is thinner and the competing bidders are fewer. Brand traffic is almost free because the only other bidder is usually a competitor trying to steal your name, and defending it with your own ad is far cheaper than letting them have the click.",
      },
      {
        t: "p",
        text: "A 'lead' here means a form submission or a tracked phone call. Not a booked survey. The gap between those two numbers is where most of the money is actually decided.",
      },

      { t: "h2", text: "Why is my cost per click so high?" },
      {
        t: "p",
        text: "Because the auction is doing exactly what it is supposed to do.",
      },
      {
        t: "p",
        text: "Google Ads is a second-price auction. The winning bidder pays one cent more than the next-highest bid, not their own bid. In solar, the next-highest bid is almost always another contractor who knows the install is worth $20,000 to $40,000 and is willing to pay $20 or $30 for a click that gets them one in forty closes. The auction floor sits where that economics breaks for the weakest operator in the market, and that is a long way above the floor for most other home services.",
      },
      {
        t: "p",
        text: "You cannot bid lower than that floor and expect clicks. You can only decide whether the clicks you buy at the floor are worth it, which depends on everything downstream of the click.",
      },

      { t: "h2", text: "Why cost per click is the wrong metric" },
      {
        t: "p",
        text: "A $20 click that converts to a $400 sat appointment that closes a $25,000 job is not expensive. A $5 click that converts to nothing is not cheap. It is pure cost.",
      },
      {
        t: "p",
        text: "The question is not what you pay per click. It is what you pay per unit of the outcome you actually want:",
      },
      {
        t: "ul",
        items: [
          "**Cost per form fill**: better than cost per click, but still not the right one.",
          "**Cost per answered call**: better again, because it filters out spam and bots.",
          "**Cost per sat appointment**: the right one. This is the number the business actually pays its bills with.",
          "**Cost per closed install**: the best, when you have enough volume to measure it reliably.",
        ],
      },
      {
        t: "p",
        text: "Most Google Ads reports stop at the form fill. The gap between a form fill and a sat appointment is the single biggest reason solar operators think Google Ads does not work, and it is a tracking problem rather than an account problem. See [solar Google Ads conversion tracking](/blog/solar-google-ads-conversion-tracking).",
      },

      { t: "h2", text: "What should cost per sat appointment be?" },
      {
        t: "p",
        text: "Take your raw lead cost and multiply it by roughly two.",
      },
      {
        t: "p",
        text: "That is the first-approximation rule because, across the solar accounts we have audited, roughly half of raw leads never book a survey. They do not answer the phone, they turn out to be renters, their roof faces the wrong way, or they were kicking tyres. Once those are filtered out, the people who become sat appointments cost you two of the raw leads.",
      },
      {
        t: "p",
        text: "So for a residential install campaign with raw leads at $200 each, your sat appointment cost is typically $400. For an account where leads cost $300, sat appointments cost $600. For battery leads at $120, sat appointments are around $240.",
      },
      {
        t: "p",
        text: "Whether those numbers work for your business depends on the next two steps:",
      },
      {
        t: "ul",
        items: [
          "**Your close rate from sat appointment to install.** 20 to 40 percent is the honest range we see for well-run teams.",
          "**Your average install revenue.** $18,000 to $35,000 for residential systems in most US markets.",
        ],
      },
      {
        t: "p",
        text: "A $400 sat appointment at a 30 percent close rate and $25,000 revenue is $1,333 per install on $25,000 of top line. That is well inside the margin a good installer runs. A $900 sat appointment at a 15 percent close rate and $18,000 revenue is $6,000 per install, which is not. Same ad spend, different business, totally different verdict.",
      },

      { t: "h2", text: "Why cost varies so much between markets" },
      {
        t: "p",
        text: "The same keywords in the same campaign setup cost three times as much in Phoenix as they do in Omaha. Four reasons:",
      },
      {
        t: "ol",
        items: [
          "**Competitor density.** How many solar companies are bidding on 'solar installer near me' in your postcode?",
          "**Average install size.** Markets with larger average systems can rationally bid more per lead because each closed job is worth more.",
          "**Incentive climate.** States with strong net metering and local rebates get more consumer interest and more competing bidders.",
          "**Seasonality.** Bidders stack up in spring; auctions soften in late autumn.",
        ],
      },
      {
        t: "p",
        text: "None of those are things you can change. What they mean is that the right benchmark is not the national average. It is what two or three competitors in your postcode are paying, which is approximately what you will pay once you are running the account properly.",
      },

      { t: "h2", text: "How do you lower cost per lead without lowering lead quality?" },
      {
        t: "p",
        text: "The ways that work:",
      },
      {
        t: "ul",
        items: [
          "**Negatives.** The biggest single lever. Every DIY, jobs, education and research term you keep out of the auction is budget that stays in high-intent clicks. The full account-level starter list is in [google ads for solar contractors](/blog/google-ads-for-solar-contractors).",
          "**Landing page conversion rate.** Doubling the conversion rate from 4 to 8 percent halves your cost per lead. It also halves your cost per sat appointment. [Landing-page work](/blog/solar-google-ads-landing-pages) is almost always a better next dollar than keyword work.",
          "**Match type discipline.** Exact and phrase match for the first 90 days keep the budget on the terms you chose. Broad match without a mature negative list burns cash on anything close.",
          "**Day-parting.** Most solar enquiries convert during business hours. Pausing ads from 11pm to 6am saves 10 to 15 percent of the budget on clicks that were never going to sit on the sofa.",
          "**Geo-targeting.** Exclude the postcodes you do not install in. The impressions were already costing you money even when the clicks were not converting.",
        ],
      },
      {
        t: "p",
        text: "The ways that just reduce volume without improving the economics:",
      },
      {
        t: "ul",
        items: [
          "Dropping the daily budget. All this does is miss impressions. It does not change the cost of the ones you do serve.",
          "Lowering the bid cap below the market. The ads stop showing in the auctions worth winning.",
          "Pausing high-cost keywords. If those are the keywords that drive sat appointments, you have just removed the thing that works.",
        ],
      },
      {
        t: "link",
        href: "/pricing",
        label: "What Volt costs on top of your ad spend",
        note: "The monthly plan plus the paid-ads add-on",
      },
    ],
    faq: [
      {
        q: "Why are solar Google Ads clicks so expensive compared to other home services?",
        a: "Because each closed install is worth tens of thousands of dollars, so the ceiling bid is proportionally higher. A plumber making $400 on a call out cannot rationally bid $20 for a click; a solar installer making $8,000 of margin on an install can. The auction floor settles accordingly.",
      },
      {
        q: "Should I run both branded and unbranded campaigns?",
        a: "Yes. Brand clicks are usually $1 to $10 and convert at the highest rate in the account, because the person searching your name has already seen you somewhere else. Not running it means paying full price to acquire the lead a second time when a competitor's ad shows above your organic listing.",
      },
      {
        q: "How much should I budget per month to see results?",
        a: "About $1,500 is the lower end for one product in one metro. Below that, Google's bidding does not have enough signal to optimise and the account looks worse than it is. Give it 90 days to prove out before scaling.",
      },
      {
        q: "Is Facebook or Meta cheaper per lead than Google?",
        a: "Meta leads often come in cheaper per form fill, sometimes by half. The gap narrows or disappears when you measure cost per sat appointment, because Meta leads tend to be lower intent and the no-show rate is higher. For most solar contractors starting with paid, Google Search is the first channel.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "speed-to-lead-for-solar-companies",
      "google-ads-for-solar-companies",
    ],
  },

  {
    slug: "negative-keywords-for-solar-google-ads",
    title: "Negative keywords for solar Google Ads",
    metaTitle: "Negative Keywords for Solar Google Ads: Full List",
    metaDescription:
      "The account-level negative keyword list every solar Google Ads account should ship with, how to mine the search terms report, and where each negative belongs.",
    keyword: "negative keywords for solar google ads",
    secondary: [
      "solar negative keywords",
      "google ads negative keyword list",
      "solar ppc negatives",
      "search terms report solar",
    ],
    excerpt:
      "The starter list of about one hundred terms every solar account should ship with, and how to mine the search terms report for the ones specific to your market.",
    category: "google-ads",
    intent: "Informational",
    icon: "shield",
    published: "2026-10-21",
    answer:
      "A solar Google Ads account should launch with an account-level negative keyword list of about one hundred terms, grouped into six categories: DIY and research, jobs and education, free and cheap, downloadable and digital, forum and comparison, and unrelated solar words. Add campaign and ad group negatives from the search terms report weekly for the first ninety days, then monthly. Done properly, negatives raise the quality of the leads your budget buys without raising the budget.",
    takeaways: [
      "Negatives are the account's filter. They decide what the budget actually buys, not what it theoretically bids on.",
      "Ship with roughly one hundred starter negatives in six categories before the account's first click.",
      "Mine the search terms report weekly for the first ninety days. That is where the market-specific additions come from.",
      "Negatives belong at the lowest level that works. Account level for absolute no, campaign level for wrong product, ad group level for fine-tuning.",
    ],
    body: [
      {
        t: "p",
        text: "The keyword list is what your ads can show against. The negative keyword list is what they will never show against. Both are the same decision, from opposite ends. For solar contractors the second one usually matters more, because solar auction floors are high enough that one wasted click costs what three or four wasted clicks cost in most other home services.",
      },
      {
        t: "p",
        text: "An account that bids properly but filters badly loses money. An account that filters properly even at a modest budget starts paying for itself in month two. The broader account build sits in [google ads for solar contractors](/blog/google-ads-for-solar-contractors).",
      },
      {
        t: "p",
        text: "This is the practical version: what to add before the first click, how to find the terms the starter list misses, and where each negative belongs.",
      },

      { t: "h2", text: "Why negatives decide what the budget actually buys" },
      {
        t: "p",
        text: "Google Ads shows your ad on more terms than you added, because every match type except exact-match allows some looseness. On broad match, a lot. That looseness is why a residential install campaign can serve against 'solar panel diy kit uk' if nothing stops it. The auction wins the click, the click costs twelve dollars, the visitor was never a buyer, and the budget is a little smaller for the next real enquiry.",
      },
      {
        t: "p",
        text: "The job of a negative is to tell Google: never. Not with a lower bid, not with a worse ad, never. The budget is reserved for terms that can convert.",
      },

      { t: "h2", text: "The six categories every solar account should exclude from day one" },
      {
        t: "p",
        text: "These are the categories almost every solar account should block at the account level before any ad serves:",
      },
      {
        t: "ol",
        items: [
          "**DIY and research.** Searchers teaching themselves. Not customers.",
          "**Jobs and education.** People looking for work, salary information, or training. Not customers.",
          "**Free and cheap.** Price-anchored to the wrong number. These leads call once and quote-chase forever.",
          "**Downloadable and digital.** Downloadable solar calculators, PDFs, software. Different intent entirely.",
          "**Forum and comparison intent.** Reddit, YouTube, Wikipedia, forums. Still researching, and your landing page is not the one they want.",
          "**Unrelated solar words.** Solar system (planets), solar eclipse, solar lights (garden), solar oven. The word is overloaded.",
        ],
      },
      {
        t: "p",
        text: "Blocking these six categories at the account level removes the most obvious waste in one afternoon.",
      },

      { t: "h2", text: "The starter list to paste into a new account" },
      {
        t: "p",
        text: "Add every term below as a phrase-match negative at the account level. Phrase match catches the close variants that exact match would miss.",
      },
      {
        t: "ul",
        items: [
          "**DIY and research.** diy, do it yourself, build your own, build a, how to build, how to install, how to make, kit, kits, assembly, blueprint, blueprints, plan, plans, project, projects, instructable, tutorial, guide to, step by step",
          "**Jobs and education.** job, jobs, career, careers, salary, pay, wage, wages, apprentice, apprenticeship, hiring, hire me, resume, cv, course, courses, certification, nabcep, training, class, classes, degree, diploma, school, university, student",
          "**Free and cheap.** free, free install, free solar, no cost, no money, cheap, cheapest, bargain, discount, discounted, used, second hand, refurbished, surplus, auction, ebay, amazon, alibaba",
          "**Downloadable and digital.** download, downloads, pdf, pdfs, software, app, apps, template, templates, calculator, calc, spreadsheet, excel, estimator app",
          "**Forum, comparison, research platforms.** reddit, forum, forums, youtube, wikipedia, wiki, quora, review site, best of, top 10, top ten, versus, vs",
          "**Unrelated solar words.** solar system, solar eclipse, solar flare, solar wind, solar oven, solar cooker, solar lights, solar lamp, solar fountain, solar fence, solar watch, solar nails, solar battery charger, solar panel for rv, solar panel for boat, solar panel for camping",
        ],
      },
      {
        t: "p",
        text: "The last category is the longest in practice because solar is a surprisingly overloaded word. A single pass through the search terms report in month one usually adds twenty more.",
      },

      { t: "h2", text: "How do you mine the search terms report for the ones you missed?" },
      {
        t: "p",
        text: "The starter list catches the obvious. The search terms report catches the ones specific to your market, your category, and the auction you are actually running in.",
      },
      {
        t: "p",
        text: "The process, in five steps:",
      },
      {
        t: "ol",
        items: [
          "**Google Ads interface, Campaigns, Insights and reports, Search terms.** Set the date range to the last 30 days.",
          "**Sort by cost, descending.** The expensive wrong terms are the ones to kill first.",
          "**For each term in the top fifty, ask: would this searcher ever buy from me?** If no, add as a negative at the right level. If yes but underperforming, that is a different problem, usually a landing page one.",
          "**Then sort by conversions equal to zero and impressions high.** This finds the terms spending budget without producing results.",
          "**Repeat weekly for the first ninety days.** The list grows fast at first, then slower, then settles into a monthly rhythm after about month four.",
        ],
      },
      {
        t: "p",
        text: "Most new solar accounts find thirty to sixty market-specific negatives in month one that the starter list did not catch. That is not a problem with the starter list; it is the point of the search terms report. The downstream signal that tells you which keywords are converting lives in [solar Google Ads conversion tracking](/blog/solar-google-ads-conversion-tracking).",
      },

      { t: "h2", text: "Should the negative sit at account, campaign or ad group level?" },
      {
        t: "p",
        text: "Three levels, three different jobs.",
      },
      {
        t: "p",
        text: "**Account-level negatives** are the absolute no. Terms that no part of the account should ever show for: diy, jobs, free, pdf, reddit, solar eclipse. The starter list above is almost all account level.",
      },
      {
        t: "p",
        text: "**Campaign-level negatives** block one campaign from stealing another's traffic. On a residential install campaign, add 'battery' and 'ev charger' as negatives so install clicks go to the install campaign and battery clicks go to the battery campaign. Without this, campaigns cannibalise each other, which looks like one performing well and the others badly when really all four are tangled.",
      },
      {
        t: "p",
        text: "**Ad group-level negatives** are fine-tuning inside a campaign. If an ad group targets 'solar panel installation' and a sibling ad group targets 'solar panel installation cost', add 'cost' as a negative in the first ad group so the cost query goes to the cost ad group, where the ad and landing page are built for it.",
      },
      {
        t: "p",
        text: "The rule: put the negative at the lowest level that works. Account-level blocks everything; campaign-level blocks within a campaign; ad group-level blocks within one ad group. Lower is more surgical.",
      },

      { t: "h2", text: "What match type should negatives use?" },
      {
        t: "p",
        text: "Negative match types work differently from positive match types, which is where most installers get caught.",
      },
      {
        t: "ul",
        items: [
          "**Negative broad match** blocks any search that contains all the words, in any order, with other words allowed. Narrow in practice. Rarely the right default.",
          "**Negative phrase match** blocks any search that contains the words in that order, with other words before or after. This is the right default for almost all negatives.",
          "**Negative exact match** blocks only that exact query. Use sparingly, usually to block one specific wrong term when a close variant should still be allowed.",
        ],
      },
      {
        t: "p",
        text: "The practical rule: add negatives as phrase match. The ones above are written to be pasted as phrase match without modification.",
      },
      {
        t: "link",
        href: "/blog/google-ads-for-solar-contractors",
        label: "Google Ads for solar contractors",
        note: "Where the negatives sit inside the full account build",
      },
    ],
    faq: [
      {
        q: "Can I just use Google's AI recommendations for negatives?",
        a: "Google's auto-recommendations include some good ones and some that would remove profitable traffic. Review them before applying. The recommendations tab is useful for finding terms worth considering, not for one-click adding. Treat it as a candidate list.",
      },
      {
        q: "Will adding a lot of negatives hurt my reach?",
        a: "Yes, on purpose. The ads will show on fewer searches. The ones they do show on will be the ones worth paying for. Cost per sat appointment usually improves even as impressions fall, which is the trade you want. The number to watch is sat appointments per month, not impressions.",
      },
      {
        q: "Do negatives count against my daily budget?",
        a: "No. Negatives prevent impressions and clicks from happening in the first place. Budget stays untouched by them, which is why adding negatives is almost always risk-free: the worst case is fewer impressions, not wasted spend.",
      },
      {
        q: "What is the single first negative I should add if I only have time for one?",
        a: "'free'. It filters out the single largest category of non-buyers at once (free solar, free install, free quote-chasers who will never close) and is almost never added by accident to a legitimate query a buyer would use.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "speed-to-lead-for-solar-companies",
      "google-ads-for-solar-companies",
    ],
  },

  {
    slug: "solar-google-ads-landing-pages",
    title: "Why the homepage is the wrong landing page for solar Google Ads",
    metaTitle: "Solar Google Ads Landing Pages: What Actually Converts",
    metaDescription:
      "Why solar homepages leak the ad click. What a matched landing page carries: the exact headline, one form, proof above the fold, and a single action.",
    keyword: "solar google ads landing pages",
    secondary: [
      "solar ppc landing pages",
      "solar landing page conversion rate",
      "solar quote page",
      "solar landing page examples",
    ],
    excerpt:
      "The homepage was built for everyone. The paid click is one visitor who already asked a specific question. Four things a matched page carries, and three solar pages taken apart.",
    category: "google-ads",
    intent: "Informational",
    icon: "browser",
    published: "2026-10-28",
    answer:
      "The homepage is the wrong destination for solar Google Ads because it was built for a cold visitor who could be anyone, and the ad click is the opposite: a warm visitor who already said what they want. A matched landing page carries the ad's exact headline, one form, proof above the fold, and a single action. The lift is roughly double on form conversion, which halves cost per lead.",
    takeaways: [
      "A $20 click deserves a page that was built for it, not the one every visitor sees.",
      "One ad, one promise, one form, one button. More options make the page worse.",
      "Proof above the fold does more than a hero image does. Reviews, badges, named towns.",
      "Doubling conversion rate halves cost per lead. It is almost always a better next dollar than keyword work.",
    ],
    body: [
      {
        t: "p",
        text: "The audit finding we see most often on solar Google Ads accounts is the same two words: homepage destination. The paid search campaign is pointing at the company's homepage, the homepage was built for everyone, and the ad click, which specifically asked for 'solar installer in [town]', lands on a page that talks to no one in particular.",
      },
      {
        t: "p",
        text: "The result is a two to four percent form conversion rate on paid traffic, when it should be six to ten percent. On a $200 cost per raw lead that is the difference between $200 leads and $100 leads. On $5,000 a month of ad spend, that is 25 extra leads a month, every month, for the cost of a few landing pages. See [what solar leads actually cost on Google Ads](/blog/what-solar-leads-cost-on-google-ads) for the full cost chain.",
      },
      {
        t: "p",
        text: "This piece lays out why the mismatch happens, what a matched landing page actually carries, and three solar landing pages taken apart.",
      },

      { t: "h2", text: "Why does the homepage underperform on paid traffic?" },
      {
        t: "p",
        text: "The homepage has a different job. It needs to serve three audiences in roughly equal weight: the organic visitor who typed your company name, the referral visitor who was handed your card, and the researcher who has not decided to buy anything from anyone. The homepage is a honest introduction to the company, which is the right thing for those three audiences.",
      },
      {
        t: "p",
        text: "A paid search click is none of those. It is a visitor who typed 'solar quote near me' or 'cost of solar panels for my house' into Google at 10 pm on a Tuesday. They have intent, they have a question, and they clicked an ad because it promised to answer the question. If the page they land on instead introduces the company and asks them to scroll through four services and read about the owner's accreditations, the window closes. The visitor is one tab away from a competitor's page that answers the question in the first screen.",
      },
      {
        t: "p",
        text: "The gap between 'introduce me to a company' and 'answer my question and show me the next step' is the whole landing page problem.",
      },

      { t: "h2", text: "What does a matched landing page actually carry?" },
      {
        t: "p",
        text: "Four things, in roughly this order from top of page to bottom:",
      },
      {
        t: "p",
        text: "**The ad's exact headline.** If the ad said 'Residential Solar in Austin from $89/month', the page's H1 should say 'Residential Solar in Austin from $89/month' or a near-identical variation. The visitor's brain is scanning for continuity. If the headline on the page says 'Welcome to Acme Solar' instead, the visitor has to translate, and the translation is a one-second window where they decide if they are in the right place.",
      },
      {
        t: "p",
        text: "**One form.** Not three. Not a sidebar form plus a hero form plus a footer form. One form, the one that collects just enough information for your rep to call back: address, name, phone, email. Four fields, maybe five if you need utility bill or roof type for routing. Every extra field drops conversion rate by roughly 2 to 5 percent, so a seven-field form converts at perhaps 60 percent of a four-field form on the same traffic.",
      },
      {
        t: "p",
        text: "**Proof above the fold.** The visitor scrolled to the price, saw the form, and now needs a reason to trust that filling it in is worth their phone number. Proof that works, in order of weight:",
      },
      {
        t: "ul",
        items: [
          "Named local projects. 'Over 80 installs in Pflugerville and Round Rock' beats '100+ installs in Texas' by a margin, because the first names a town the visitor recognises.",
          "Review count and star rating with the Google logo. 4.9/5 across 60+ Google reviews is a stronger proof than a logo wall.",
          "Badges that mean something: NABCEP accreditation, state licence number, insurance details. Not generic trust seals.",
          "One short specific testimonial, preferably with the customer's first name and town. Not a glowing paragraph; one sentence that mentions a specific outcome.",
        ],
      },
      {
        t: "p",
        text: "**A single call to action.** The whole page's job is to drive the one action: submit the form. Not 'learn more', not 'download our guide', not 'take our solar calculator quiz'. One form, one button, repeated at natural breakpoints down the page.",
      },
      {
        t: "p",
        text: "What a matched landing page should not carry:",
      },
      {
        t: "ul",
        items: [
          "Site-wide navigation that lets the visitor click away to the About page, the Services page, the Blog, the gallery. If they click, they are gone.",
          "A hero image of panels on a roof unrelated to the visitor's town or house. Stock photos of solar panels no longer carry weight.",
          "A general 'contact us' option that competes with the main form. Pick one path and defend it.",
          "Three different lead magnets. Each one is a choice; choice is friction; friction is dropoff.",
          "A long form the visitor fills before they understand what they are getting.",
        ],
      },
      {
        t: "p",
        text: "A homepage carries all of the above because the homepage serves many audiences. A landing page sheds all of it because it serves one. The broader account build these pages sit inside is in [google ads for solar contractors](/blog/google-ads-for-solar-contractors).",
      },

      { t: "h2", text: "Three solar landing pages taken apart" },
      {
        t: "p",
        text: "**The $89/month residential page.** This is the archetype that works for a company running a lease or long-term loan product. The ad promises a monthly payment, the H1 repeats it, the form sits in the top-right of the hero, and the proof is a line directly under the headline that reads something like 'Join 240 Austin homeowners already saving on their bill'. No navigation. Below the fold, three short sections: 'How it works' in three steps, 'What our customers say' with two sentence-length quotes, 'Frequently asked' with four questions that would otherwise be form-abandonment reasons. The second CTA repeats at the bottom. The page's whole job is to turn an interested visitor into a form fill in under 90 seconds.",
      },
      {
        t: "p",
        text: "Where it goes wrong when operators build their own: they add a fourth proof section, a chat widget, a 'see our installations' gallery link in the hero, and the form grows a utility-provider dropdown with 60 options.",
      },
      {
        t: "p",
        text: "**The battery-only page.** Battery storage is a different sale. The ad promises resilience or backup during outages, which is a different motivation from monthly savings. The hero carries the exact ad promise, the form asks for home address and current solar status (because a visitor who already has solar is a strong battery lead), and the proof is grid-outage-focused: '40+ battery installs in Harris County survived Hurricane Beryl' or similar. Below the fold, a short diagram showing how the battery sits in the home electrical system, a two-sentence FAQ about the time to install, and the second CTA.",
      },
      {
        t: "p",
        text: "Where it goes wrong: the page tries to also sell solar. A battery visitor who already has solar closes the tab when the first scroll shows solar panels.",
      },
      {
        t: "p",
        text: "**The EV charger page.** The cheapest lead-cost product and often the one where the matched landing page matters least, because the visitor's intent is narrow and the sale is simple. The hero carries the ad promise ('EV charger installed from $699'), the form asks for home address and vehicle make, the proof is a quick-install promise ('most installs completed in a single afternoon'), and the second CTA sits right below the proof. The page is often half the length of the residential solar page.",
      },
      {
        t: "p",
        text: "Where it goes wrong: operators try to upsell solar from the EV charger page. The EV charger visitor is not thinking about panels yet. Save the solar conversation for the follow-up email, not the first page.",
      },

      { t: "h2", text: "What is the right conversion rate benchmark?" },
      {
        t: "p",
        text: "For a matched landing page carrying everything above, these ranges hold up in audited solar accounts:",
      },
      {
        t: "ul",
        items: [
          "Residential install: 6 to 10 percent form conversion on paid traffic",
          "Battery storage: 5 to 9 percent",
          "EV charger: 8 to 14 percent (narrower intent, simpler sale)",
          "Brand traffic: 15 to 30 percent (visitor already knows the company)",
        ],
      },
      {
        t: "p",
        text: "If your rate is well below these ranges, the landing page is the issue. If it is at the low end of the range, the ad copy or targeting is partly to blame. If it is well above, verify your tracking is counting the right event; sometimes the number is inflated by double-counting.",
      },

      { t: "h2", text: "How many landing pages should a solar account have?" },
      {
        t: "p",
        text: "The pattern that works for most US residential installers:",
      },
      {
        t: "ul",
        items: [
          "One landing page per product (residential, battery, EV charger). Three pages.",
          "One per core service area or metro region. Not one per town. One per metro.",
          "One brand-defence page for the 'your company name' campaign.",
        ],
      },
      {
        t: "p",
        text: "For a company covering one metro and three products, that is four pages total. For a company covering three metros and three products, nine pages. More than that and the maintenance becomes its own job.",
      },
      {
        t: "p",
        text: "Templating the pages so the hero text and local proof are variables rather than hard-coded content keeps the maintenance cost down. The structure stays the same; the town names, project counts and local proof change.",
      },
      {
        t: "link",
        href: "/blog/solar-google-ads-conversion-tracking",
        label: "Solar Google Ads conversion tracking",
        note: "What to measure once the landing page is doing its job",
      },
    ],
    faq: [
      {
        q: "Can I use my service page as the landing page?",
        a: "It depends on what your service page actually is. If it has the H1, the form, the proof and the single CTA, yes. Most service pages do not; they live inside the main site navigation and were built to inform rather than convert. Audit the specific page against the four requirements above and build a dedicated landing page if any fail.",
      },
      {
        q: "Should the landing page have a header and footer?",
        a: "A minimal header with the logo (not clickable) and a phone number, yes. A full site footer, no. The footer is where the visitor's eye goes when they have decided not to convert, and a footer with sitemap links hands them an exit. A thin footer with the privacy policy, terms, and nothing else keeps the exit paths closed.",
      },
      {
        q: "How long should the landing page be?",
        a: "Long enough to earn trust, short enough to keep the visitor's attention. For residential solar, 800 to 1,500 words plus visuals is a working range. Battery and EV pages tend to run shorter. The page should load in under two seconds on mobile; if a visual budget is pushing load time past that, something is being overdone.",
      },
      {
        q: "Should I run a different landing page for mobile?",
        a: "Not a separate page, a responsive one that was designed mobile-first. 60 to 75 percent of solar Google Ads traffic in the US is on mobile. If the form sits below three screens of hero image on a phone, the form may as well not exist.",
      },
      {
        q: "Do I need a video on the landing page?",
        a: "Only if the video is doing one of two jobs: showing a real customer in a named town saying one specific thing, or showing a 30-second explainer of how the install happens. A hero video of panels being installed with background music is decorative and often slows the page without lifting conversion.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "what-solar-leads-cost-on-google-ads",
      "solar-google-ads-conversion-tracking",
    ],
  },

  {
    slug: "solar-google-ads-conversion-tracking",
    title: "Solar Google Ads conversion tracking from click to CRM",
    metaTitle: "Solar Google Ads Conversion Tracking: Click to CRM",
    metaDescription:
      "How to track solar Google Ads from click to CRM: GA4 events, call tracking, enhanced conversions, offline imports for the sat appointment. The usual leak.",
    keyword: "solar google ads conversion tracking",
    secondary: [
      "solar ppc tracking",
      "google ads enhanced conversions solar",
      "solar call tracking",
      "offline conversion import solar",
    ],
    excerpt:
      "Form fills, answered calls, sat appointments, and enhanced conversions. The four-stage pipeline that sends the real downstream signal back to Google, and where it usually leaks.",
    category: "google-ads",
    intent: "Informational",
    icon: "funnel",
    published: "2026-10-30",
    answer:
      "Solar Google Ads conversion tracking fails in the same place in almost every account: the signal stops at the form submission. Google optimises toward what you measure, so an account tracking only form fills pulls in form fills, including the half that never book a survey. The fix is a four-stage pipeline: form fill in GA4, answered call via call tracking, sat appointment via offline conversion import from the CRM, and enhanced conversions sending hashed data to survive privacy signals.",
    takeaways: [
      "Google optimises what you measure. Measuring form fills means buying form fills.",
      "Enhanced conversions are a 15-minute setup that recovers roughly 15 to 25 percent of attribution lost to privacy.",
      "Call tracking matters because 40 to 60 percent of solar paid-ads leads come by phone.",
      "The sat appointment is the signal worth sending back. Offline conversion imports do the sending.",
    ],
    body: [
      {
        t: "p",
        text: "The audit finding that surprises most solar operators is simple: Google Ads is doing exactly what you asked it to. The question is whether what you asked for is what you actually want.",
      },
      {
        t: "p",
        text: "A Google Ads account optimised against form submissions, which is the default for most solar landing pages, will pull in the cheapest form submissions in the auction. Those are not the same thing as the cheapest sat appointments. In the typical solar funnel, roughly half of the form fills never book a survey, so by optimising on form fills the account is spending budget to maximise a mix that includes a lot of noise.",
      },
      {
        t: "p",
        text: "The fix is to measure the thing that actually matters, which is the sat appointment, and feed that signal back to Google so the auction optimises for it. That is a four-stage tracking job, not a one-click toggle, and most solar accounts do only the first stage. The broader account build sits in [google ads for solar contractors](/blog/google-ads-for-solar-contractors); this piece lays out the measurement layer.",
      },

      { t: "h2", text: "What are the four stages of solar Google Ads tracking?" },
      {
        t: "p",
        text: "In order from least to most useful:",
      },
      {
        t: "p",
        text: "**Stage 1: Click to form fill, in GA4.** The basic install. A thank-you page fires a GA4 event, the event is imported into Google Ads as a conversion, the account optimises toward form fills. This is where most solar accounts stop. It is better than nothing, but it hides the real work.",
      },
      {
        t: "p",
        text: "**Stage 2: Click to answered call, via a call tracking number.** A dynamic phone number on the landing page swaps to a tracked number when the visitor arrived from a Google Ads click. Calls to that number ring through to your main line but are logged with the originating click. The call is marked as a conversion once it is answered for a defined duration (usually 30 seconds). For most solar accounts this doubles the number of conversions Google sees, because 40 to 60 percent of paid solar leads come by phone rather than form.",
      },
      {
        t: "p",
        text: "**Stage 3: Click to sat appointment, via offline conversion import.** The CRM flags a lead as a sat appointment at the moment the sales rep confirms the appointment was attended. That event, with the original gclid from the ad click, is uploaded back to Google Ads as an offline conversion. Google now has the real downstream signal and can optimise toward the ad clicks that actually produce sat appointments, not just form fills.",
      },
      {
        t: "p",
        text: "**Stage 4: Enhanced conversions with first-party data.** For every conversion, hashed first-party data (email, phone, name) is sent to Google alongside the gclid. When the browser's gclid cookie is missing or stale (Safari, incognito, iOS privacy), Google can still match the conversion to a click via the hashed data. Enhanced conversions typically recover 15 to 25 percent of attribution lost to privacy signals and are a 15-minute setup on most modern tag managers.",
      },
      {
        t: "p",
        text: "A solar account running all four stages has a materially different conversation with the ad platform than one running only the first. For the cost ranges each stage changes, see [what solar leads actually cost on Google Ads](/blog/what-solar-leads-cost-on-google-ads).",
      },

      { t: "h2", text: "How does call tracking work mechanically?" },
      {
        t: "p",
        text: "The visitor lands on the page. A piece of JavaScript on the page detects whether the visitor arrived from a Google Ads click (either via the gclid URL parameter or a session cookie). If so, the phone number displayed on the page swaps from your main business number to a tracked number from the call tracking provider.",
      },
      {
        t: "p",
        text: "When the visitor calls that number, the call tracking provider routes the call through to your business line, records the start time and duration, and attaches the original gclid as metadata. If the call lasts longer than the duration you defined (30 seconds, 60 seconds, whatever threshold you set), the call tracking provider sends a conversion event back to Google Ads with the gclid attached.",
      },
      {
        t: "p",
        text: "Common providers include CallRail, CallTrackingMetrics, and ServiceCore. All of them integrate with Google Ads via a native connector; setup time is usually under 30 minutes once the account is created.",
      },
      {
        t: "p",
        text: "The watch-out: swap the phone number on every surface the visitor might convert from, not just the hero. A footer phone number that stays static is where 20 to 30 percent of your calls will come from on a long page, and those calls are untracked. The dynamic number insertion script needs to find every phone number on the page.",
      },

      { t: "h2", text: "Why does enhanced conversions matter for solar?" },
      {
        t: "p",
        text: "Enhanced conversions matter because Safari and iOS privacy signals break the gclid cookie for roughly a third of US web traffic. When a visitor clicks an ad on an iPhone, lands on your landing page, and fills a form two days later from a different browser session, the gclid cookie may already be expired or missing. Google cannot attribute the conversion to the original click, and the ad that drove the eventual lead gets no credit.",
      },
      {
        t: "p",
        text: "Enhanced conversions fix the attribution gap by sending Google a hashed version of the visitor's email and phone when they convert. Google compares the hash against hashed data from signed-in Google users and matches the conversion to the originating ad click even when the cookie is gone. The visitor's identity is never exposed to Google; the match happens on the hash.",
      },
      {
        t: "p",
        text: "The setup is in Google Tag Manager or whatever tag manager the site uses. You add fields to the conversion event for email, phone, first name, last name, and address, all hashed before transmission. In Google Ads, under conversion settings, you enable enhanced conversions and link the event. The whole setup takes 15 to 30 minutes.",
      },
      {
        t: "p",
        text: "Recovery varies by account but typically runs 15 to 25 percent more attributed conversions on the same ad spend after enhanced conversions are enabled. That is 15 to 25 percent more signal for Google's bidding algorithms to use, which means better optimisation on the same budget.",
      },

      { t: "h2", text: "How do offline conversion imports work for the sat appointment?" },
      {
        t: "p",
        text: "Offline conversion imports are where most solar accounts have the biggest open opportunity. The mechanics:",
      },
      {
        t: "ol",
        items: [
          "The ad click fires a gclid. The landing page captures the gclid in a hidden form field and stores it on the lead in the CRM.",
          "The lead progresses through the CRM: form fill, qualified, appointment set, appointment confirmed, appointment attended (sat).",
          "At the moment the lead becomes a sat appointment, the CRM fires an event that includes the gclid and the conversion value (if you choose to pass one).",
          "The event is pushed to Google Ads via the Offline Conversion Import API (or via a CSV upload, which also works). The import can run daily or on each event.",
          "Google Ads logs the sat appointment as a conversion attributed to the original ad click.",
        ],
      },
      {
        t: "p",
        text: "A CRM with native Google Ads integration (HubSpot, Pipedrive with the right add-on, Volt Relay) sets this up through a native connector in 30 to 60 minutes. A CRM without native integration needs a Zapier flow or a cron job that pushes the CSV, which takes 2 to 4 hours.",
      },
      {
        t: "p",
        text: "The gain, once the import is running: Google Ads can now optimise toward the ad clicks that produce sat appointments, which is the downstream signal that actually matches your business economics. In accounts we have moved from form-fill optimisation to sat-appointment optimisation, cost per sat appointment typically falls 20 to 35 percent inside 60 to 90 days as the algorithm reallocates spend.",
      },

      { t: "h2", text: "What should the setup order be?" },
      {
        t: "p",
        text: "The sequence that works, from fastest return to slowest:",
      },
      {
        t: "p",
        text: "**Week 1: Call tracking.** Easiest single win. 30 minutes of setup, immediately doubles the number of conversions Google sees, and reveals which campaigns actually drive phone leads versus just form leads. Many solar operators discover that a campaign they thought was underperforming was actually their best campaign because 70 percent of its conversions came by phone and were invisible.",
      },
      {
        t: "p",
        text: "**Week 2: Enhanced conversions.** 15 to 30 minutes of setup. Immediate 15 to 25 percent lift in attributed conversions. Zero additional cost.",
      },
      {
        t: "p",
        text: "**Weeks 3 to 4: Offline conversion imports for sat appointments.** The biggest-impact fix and the one that takes the longest to set up and tune. Allow 30 to 60 days after turning it on for Google's bidding to learn against the new signal. Expect cost per lead to look worse in the first 2 to 3 weeks as the algorithm reallocates, then noticeably better by day 60.",
      },
      {
        t: "p",
        text: "**Week 5 onward: Install conversions tracking.** For accounts with enough volume to attribute reliably at the install level (usually 50 or more installs per quarter), import the closed-install event as a secondary conversion. This gives Google the fullest downstream signal possible, though it is only worth setting up once the earlier stages are solid.",
      },
      {
        t: "p",
        text: "Doing the stages out of order is one of the biggest wastes we see. Operators who set up offline conversion imports before enhanced conversions find that the gclid is missing on a third of their imports because the cookie was lost; the sat appointment imports therefore cover only two thirds of real sat appointments and the signal is weakened.",
      },

      { t: "h2", text: "Where does the pipeline usually leak?" },
      {
        t: "p",
        text: "Three common failure points:",
      },
      {
        t: "p",
        text: "**The gclid never reaches the CRM.** The landing page form has a gclid field, but it is not set up to capture the URL parameter, or the parameter is stripped by a tracking pixel before the form sees it. The field is empty on 90 percent of leads. Fix: validate on five test clicks that the gclid lands in the CRM record.",
      },
      {
        t: "p",
        text: "**The sat appointment event does not fire reliably.** The CRM has a stage called 'sat appointment' but the sales rep forgets to mark the lead as sat half the time. The imports run against incomplete data. Fix: make the stage move happen automatically from the appointment calendar when the rep marks 'attended' or from an SMS confirmation to the rep after the appointment time passes.",
      },
      {
        t: "p",
        text: "**The call tracking numbers are dynamic in the hero but static elsewhere.** The main phone number on the 'contact' section or the footer is the business's real number, not a tracked one. Calls there do not attribute. Fix: audit every phone number on the landing page and make sure the swap script finds all of them.",
      },
      {
        t: "p",
        text: "Each of these is a 1 to 2 hour fix, and each one recovers signal that was already there and being lost.",
      },
      {
        t: "link",
        href: "/blog/solar-google-ads-landing-pages",
        label: "Solar Google Ads landing pages",
        note: "The page the tracking actually fires from",
      },
    ],
    faq: [
      {
        q: "Do I need all four stages running to see results?",
        a: "No. Call tracking plus enhanced conversions alone is already a materially better setup than form-fills-only. Those two stages cost under an hour of setup and typically lift usable conversion signal by 60 to 100 percent. The offline conversion import is the bigger lift but also the bigger project.",
      },
      {
        q: "What is the right conversion value to send with the sat appointment?",
        a: "Use your average revenue per installed deal multiplied by your sat-to-install close rate. For a $25,000 average deal at a 30 percent close rate, that is $7,500 per sat appointment. Google Ads will use the value to optimise target ROAS bidding if you choose to run it later.",
      },
      {
        q: "Can I use Zapier to push offline conversions?",
        a: "Yes, Zapier works. It costs $20 to $70 per month depending on volume. For accounts with native CRM-to-Google-Ads integration (available in several solar CRMs including Volt Relay), the native integration is cleaner and does not depend on a third-party automation tool.",
      },
      {
        q: "Should I run both the Google Ads conversion pixel and GA4?",
        a: "Yes, both. Google Ads needs the Google Ads conversion tracking pixel to optimise bidding; GA4 gives you the richer attribution path reporting. They are not substitutes.",
      },
      {
        q: "How long until my ad performance improves after setting all four up?",
        a: "Call tracking and enhanced conversions start showing lift inside 2 to 7 days. Offline conversion imports need 30 to 60 days for Google's bidding to retrain, during which cost per lead often looks worse before it gets better. Plan the budget for a 60-day retraining window, not a 7-day one.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "what-solar-leads-cost-on-google-ads",
      "solar-google-ads-landing-pages",
    ],
  },

  {
    slug: "solar-google-ads-bidding-strategies",
    title: "Solar Google Ads bidding strategies and the order to try them",
    metaTitle: "Solar Google Ads Bidding Strategies: What to Use When",
    metaDescription:
      "Manual CPC, max clicks, max conversions, target CPA, target ROAS for solar. How much data each one needs and the sequence a new account should move through.",
    keyword: "solar google ads bidding strategies",
    secondary: [
      "google ads target cpa solar",
      "manual cpc solar",
      "smart bidding solar",
      "google ads max conversions solar",
    ],
    excerpt:
      "Manual CPC first, then maximise conversions once the account has 30 a month, then target CPA. The order matters more than the strategy does.",
    category: "google-ads",
    intent: "Informational",
    icon: "gauge",
    published: "2026-11-01",
    answer:
      "A new solar Google Ads account starts on manual CPC for the first 60 to 90 days to control which keywords win auctions while the account builds conversion history. Once there are at least 30 conversions in rolling 30 days, maximise conversions or target CPA becomes the better default. Target ROAS needs 50 to 100 conversions per month. The failure mode is switching to smart bidding before volume supports it.",
    takeaways: [
      "Smart bidding needs volume to work. Below 30 conversions a month, it is guessing.",
      "Manual CPC is the right first bid strategy, not the fallback.",
      "Target CPA tells Google what a lead is worth. Running it without a defensible number is theatre.",
      "Change bidding strategy at most once every 30 days. Each change restarts the learning.",
    ],
    body: [
      {
        t: "p",
        text: "Bidding strategy is where most solar Google Ads accounts over-engineer. The sequence is simple: start with manual control, build conversion data, move to smart bidding once there is enough signal, and refine. Where accounts go wrong is skipping the first step because smart bidding sounds like the newer option, which means the algorithm trains on noisy data and the account spends six months at worse economics than it should.",
      },
      {
        t: "p",
        text: "This piece lays out the five bidding strategies solar operators realistically use, how much conversion data each one needs, when each is the right call, and the order a new account should move through. The broader account build sits in [google ads for solar contractors](/blog/google-ads-for-solar-contractors).",
      },

      { t: "h2", text: "What are the main Google Ads bidding strategies?" },
      {
        t: "p",
        text: "Five strategies cover almost everything a solar account needs:",
      },
      {
        t: "p",
        text: "**Manual CPC.** You set the maximum you will pay per click, keyword by keyword. Google serves the ad into auctions where your bid is competitive. No automation; what you set is what you bid.",
      },
      {
        t: "p",
        text: "**Maximise clicks.** Google automatically sets click bids to drive as many clicks as possible within your daily budget. Fast to set up, but it will spend the budget on cheap clicks regardless of conversion signal.",
      },
      {
        t: "p",
        text: "**Maximise conversions.** Google sets bids to drive as many conversions as possible within your daily budget. Needs conversion tracking set up correctly. Does not care about cost per conversion; it just maximises count.",
      },
      {
        t: "p",
        text: "**Target CPA (cost per acquisition).** Google sets bids to hit a target cost per conversion. You name the number; Google tries to hit it. Needs conversion history to train.",
      },
      {
        t: "p",
        text: "**Target ROAS (return on ad spend).** Google sets bids to hit a target revenue divided by ad spend. Needs conversion tracking that passes revenue values. Rare in solar outside large accounts.",
      },
      {
        t: "p",
        text: "There are two others, target impression share and maximise conversion value, that have narrow uses in solar accounts and come up later.",
      },

      { t: "h2", text: "How much conversion data does each strategy need?" },
      {
        t: "p",
        text: "The conservative numbers that let the strategy actually work, not just technically run:",
      },
      {
        t: "table",
        head: ["Strategy", "Minimum conversions per 30 days", "What happens below the minimum"],
        rows: [
          ["Manual CPC", "None", "Works at any volume"],
          ["Maximise clicks", "None", "Works at any volume"],
          ["Maximise conversions", "15 to 30", "Google buys expensive conversions and burns budget"],
          ["Target CPA", "30 to 50", "Target is missed widely; cost per conversion drifts high"],
          ["Target ROAS", "50 to 100 (with value)", "Noise overwhelms the signal; results are random"],
        ],
      },
      {
        t: "p",
        text: "A solar account doing 10 to 15 conversions a month has no business running target CPA. The algorithm needs enough events to find a pattern; below that threshold it is making decisions on a dozen data points and the variance between what it learns and what the market actually looks like is huge.",
      },
      {
        t: "p",
        text: "The other number that matters is time. Smart bidding needs at least 7 to 14 days of learning before its decisions are reliable. Switching strategies every two weeks resets the clock on every change.",
      },

      { t: "h2", text: "When should a new solar account use manual CPC?" },
      {
        t: "p",
        text: "The first 60 to 90 days, almost always.",
      },
      {
        t: "p",
        text: "The reasoning: a new account has no conversion history. Smart bidding uses conversion history to decide which auctions to bid into. With no history, smart bidding guesses, and the guesses are often bad: the algorithm pulls in cheap clicks from loose match types, buys traffic that converts poorly, and the account looks like it does not work.",
      },
      {
        t: "p",
        text: "Manual CPC in the first 60 to 90 days lets you:",
      },
      {
        t: "ul",
        items: [
          "Enforce the keyword list you chose, not the one Google infers you meant",
          "Watch which keywords actually produce conversions and which drain budget",
          "Build 50 to 100 conversion events before the smart bidding has to make decisions",
          "See the search terms report before trusting the algorithm to interpret it",
        ],
      },
      {
        t: "p",
        text: "The right manual CPC bid for a solar keyword in a mid-sized US metro usually sits in the $8 to $25 range depending on the term. Set it, run for 7 to 14 days, then adjust based on what the data shows. The adjustments should be modest, in the range of 20 percent either way per change, not jumps from $10 to $25.",
      },
      {
        t: "p",
        text: "A new account on manual CPC for the first quarter and then shifted to smart bidding typically outperforms one on smart bidding from day one by 20 to 40 percent on cost per sat appointment over the first six months. The gain comes from the controlled training period, not from manual CPC being inherently better.",
      },

      { t: "h2", text: "When should you move from manual CPC to maximise conversions?" },
      {
        t: "p",
        text: "The usual trigger: at least 30 conversions in the trailing 30 days, consistently, for two or three months in a row. 'Conversions' meaning the right conversion event, which for solar is usually the sat appointment or at minimum the answered phone call plus form fill combined, not just form fills.",
      },
      {
        t: "p",
        text: "Switching to maximise conversions typically does three things:",
      },
      {
        t: "ul",
        items: [
          "Bids rise on keywords that convert well. The algorithm has learned to pay more for the winners.",
          "Bids fall on keywords that convert poorly. Those stop winning auctions and the budget shifts.",
          "Cost per click rises in nominal terms, but cost per conversion stays flat or falls, which is what you actually care about.",
        ],
      },
      {
        t: "p",
        text: "Where it goes wrong: operators switch from manual CPC to maximise conversions and watch the CPC jump 40 percent in week one. They panic, switch back, and lose the chance to let it train. The fix is to budget for the first 2 to 3 weeks of smart bidding to look worse before it looks better, and judge after 30 days, not 7.",
      },

      { t: "h2", text: "When should you add a target CPA?" },
      {
        t: "p",
        text: "After maximise conversions has run for 30 to 60 days and the cost per conversion has stabilised in a knowable range. If your average cost per conversion on maximise conversions is $120 with a range of $90 to $160, a reasonable target CPA sits at $110 to $130: slightly below the current average, which pushes Google to find efficiency, but not so far below that the algorithm restricts delivery to a narrow set of auctions.",
      },
      {
        t: "p",
        text: "The common failure: naming a target CPA that is below what the market will support. If sat appointments actually cost $300 in your market and you set a target of $180, Google will try, miss, and either underspend badly (ads do not serve) or hit the target by sacrificing conversion volume to the point where the account is starving.",
      },
      {
        t: "p",
        text: "Target CPA should be a slight optimisation on maximise conversions, not an aspirational goal. If the current cost per sat appointment is $400 and you want to be at $250, the fix is to improve the landing page, improve the lead quality, or improve the sat rate, not to type $250 into the target CPA field and hope.",
      },

      { t: "h2", text: "What about target ROAS?" },
      {
        t: "p",
        text: "For most solar accounts, target ROAS is premature. It needs conversion values flowing from the CRM (which requires offline conversion imports with revenue attached), it needs 50 to 100 conversions per month to train against, and it changes the account's economics from 'cheapest leads' to 'highest value leads', which is only useful if your sales process can tell the difference.",
      },
      {
        t: "p",
        text: "Target ROAS matters when you are large enough that different lead types produce different revenue outcomes and you want Google to optimise toward the mix. A multi-metro solar operator doing 300 installs per quarter where residential, battery and EV each have different average revenue will benefit from target ROAS. A single-metro operator doing 15 installs per quarter will not.",
      },

      { t: "h2", text: "What about maximise clicks?" },
      {
        t: "p",
        text: "Rarely the right choice for solar. The strategy maximises clicks regardless of conversion signal, which means you will spend your budget on the cheapest clicks in the auction, and the cheapest clicks are usually the loosest-intent clicks. For a product with $100 to $300 cost per lead, maximising clicks is maximising the wrong number.",
      },
      {
        t: "p",
        text: "The one exception: brand defence. For your own-brand campaign (someone typing your company name), maximise clicks works because every click is already a warm lead. You want to serve every brand auction regardless; the strategy supports that cleanly.",
      },

      { t: "h2", text: "What is the usual sequence a new solar account should move through?" },
      {
        t: "p",
        text: "The pattern that works in audited solar accounts:",
      },
      {
        t: "p",
        text: "**Days 1 to 90: Manual CPC.** Build conversion history. Enforce the keyword list. Watch which terms work. Adjust bids once per 7 to 14 days.",
      },
      {
        t: "p",
        text: "**Days 60 to 120: Introduce enhanced conversions, call tracking, offline conversion imports.** All the measurement work needs to be in place before smart bidding has usable signal. See the [conversion tracking piece](/blog/solar-google-ads-conversion-tracking) for the sequence.",
      },
      {
        t: "p",
        text: "**Days 90 to 180: Switch to maximise conversions.** Expect the first 3 weeks to look worse than manual CPC. Judge the result after 30 days.",
      },
      {
        t: "p",
        text: "**Days 180 to 270: Add target CPA at a modest discount to the current average.** Monitor delivery; if impressions drop sharply, raise the target.",
      },
      {
        t: "p",
        text: "**Days 270 onward: Review the mix.** For accounts with enough volume and revenue signal, consider target ROAS. For most accounts, target CPA with careful management is enough.",
      },
      {
        t: "p",
        text: "Changing bidding strategy more often than once per 30 days almost always costs money. Each change resets the learning phase; the account spends two to three weeks training rather than earning.",
      },
      {
        t: "link",
        href: "/blog/solar-google-ads-conversion-tracking",
        label: "Solar Google Ads conversion tracking",
        note: "What the bidding strategy needs underneath it",
      },
    ],
    faq: [
      {
        q: "Can I use a portfolio bidding strategy across multiple campaigns?",
        a: "Yes, but only when the campaigns share conversion economics. Residential install and battery storage have different average revenue and different close rates, so pooling them under one target CPA will push the budget toward whichever product has the cheaper conversions. Separate portfolio strategies per product is usually cleaner.",
      },
      {
        q: "Should I set bid adjustments for mobile versus desktop?",
        a: "Mostly no, outside of brand campaigns. Smart bidding considers device signal natively. Manual CPC accounts can benefit from a 10 to 20 percent mobile adjustment if the data clearly shows one device converting better, but set it based on data, not intuition.",
      },
      {
        q: "What is the right daily budget for solar Google Ads?",
        a: "About $50 to $150 per campaign per day for a mid-sized metro to generate enough conversion signal to run smart bidding usefully. Below $30 per day the account struggles to generate the daily conversion events smart bidding needs to train against.",
      },
      {
        q: "Does changing the bidding strategy reset my ad history?",
        a: "No, the ad history stays. The learning phase on the new strategy is fresh, so for 1 to 2 weeks after a change, performance is noisier than it will be once learning stabilises.",
      },
      {
        q: "Should I run different bidding strategies in different markets or metros?",
        a: "Only if the markets have meaningfully different conversion economics or volumes. If one metro produces 25 conversions a month and another produces 5, running smart bidding in both means the second metro's spend is being allocated on 5 data points, which is not enough. Run manual CPC in the smaller metro until it builds volume.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "what-solar-leads-cost-on-google-ads",
      "solar-google-ads-conversion-tracking",
    ],
  },

  {
    slug: "solar-google-ads-vs-local-services-ads",
    title: "Solar Google Ads vs Local Services Ads compared",
    metaTitle: "Solar Google Ads vs Local Services Ads: What to Run",
    metaDescription:
      "Google Search Ads vs Local Services Ads for solar companies. What LSA buys, what it costs, which to run first, and when to run both together.",
    keyword: "solar google ads vs local services ads",
    secondary: [
      "solar lsa",
      "google guaranteed solar",
      "solar local services ads",
      "lsa vs search ads",
    ],
    excerpt:
      "LSA pays per lead, sits above search ads, and carries the Google Guaranteed badge. The economics, the verification, and which to run first in a new metro.",
    category: "google-ads",
    intent: "Commercial",
    icon: "scales",
    published: "2026-11-03",
    answer:
      "Local Services Ads sit above search ads on the Google results page, carry the Google Guaranteed badge, and bill per lead rather than per click. Search ads give full control of message, landing page and tracking; LSA trades that for the top placement and a pricing model that often works out cheaper per sat appointment in competitive solar markets. Most solar operators should run LSA first in a new metro, then layer search ads on top.",
    takeaways: [
      "LSA sits above search ads and carries the Google Guaranteed badge. Both matter.",
      "Pay per lead, not per click. The economics are different, not necessarily better.",
      "Reviews on your Google Business Profile determine LSA ranking. Thin review profiles mean little LSA volume.",
      "The two channels compound. Running both usually beats running either alone once budget supports it.",
    ],
    body: [
      {
        t: "p",
        text: "The question 'should I run Google Ads or Local Services Ads for solar' has become the first paid-channel decision most US residential installers face. Both are Google products, both appear on the Google search results page, and both can produce residential solar leads. They work differently enough that treating them as substitutes is a common and expensive mistake.",
      },
      {
        t: "p",
        text: "Search ads (what most people mean by 'Google Ads') buy you a click to your landing page in exchange for a bid. You control the ad copy, the keyword, the landing page, the tracking, and roughly the cost per click. The lead comes to you by filling out your form or calling your tracked number. The full search build sits in [google ads for solar contractors](/blog/google-ads-for-solar-contractors).",
      },
      {
        t: "p",
        text: "Local Services Ads buy you a lead directly, with Google filtering the lead for intent and location before you pay. The ad is a card with your business name, review score, Google Guaranteed badge and phone number, served above the search ads at the top of the page. You pay per qualified lead that comes through, not per click.",
      },
      {
        t: "p",
        text: "This piece lays out what each channel actually buys you, where the economics diverge, and which to run when.",
      },

      { t: "h2", text: "What does Local Services Ads buy that search ads do not?" },
      {
        t: "p",
        text: "Three structural things that search ads cannot match:",
      },
      {
        t: "p",
        text: "**The top-of-page placement.** LSA sits above the search ads block on mobile and desktop. For high-intent queries like 'solar installer near me', LSA cards are the first three results the visitor sees, with search ads below them. The visibility is a quantitative advantage, not just an aesthetic one.",
      },
      {
        t: "p",
        text: "**The Google Guaranteed badge.** The green checkmark badge that appears on LSA cards tells the visitor Google has verified your licensing, insurance and background checks. Click-through rates on LSA cards average 15 to 25 percent higher than equivalent search ads in competitive solar markets, and conversion rates on the resulting leads also run higher because visitors have already seen a trust signal before they called.",
      },
      {
        t: "p",
        text: "**Pay per lead, not per click.** You pay Google only when a lead reaches you (a phone call long enough to count, or a message), not for every click. The gross cost per lead in LSA tends to run $75 to $200 for solar in US markets, compared with $100 to $300 cost per lead through search ads. On raw lead cost, LSA often wins.",
      },
      {
        t: "p",
        text: "What search ads buy that LSA does not:",
      },
      {
        t: "ul",
        items: [
          "**Full control of the message.** Your ad copy, your headlines, your descriptions, your extensions. LSA shows your business name, review score, and location; you cannot write custom copy for LSA.",
          "**Full control of the landing destination.** The visitor goes to your matched landing page, where you can continue the conversation. LSA conversations happen on the phone or in Google's chat interface; the visitor never reaches your site.",
          "**Full tracking.** Google Ads integrates with GA4, your CRM, offline conversion imports, enhanced conversions. LSA tracks within its own dashboard; the attribution path to your downstream sales data is thinner.",
          "**Keyword control.** You pick the search terms. LSA shows for queries Google decides are relevant to your service and location.",
        ],
      },

      { t: "h2", text: "How does Local Services Ads ranking work?" },
      {
        t: "p",
        text: "LSA ranks across three main inputs:",
      },
      {
        t: "p",
        text: "**Review score and review count on your Google Business Profile.** The single biggest factor. An LSA account with a 4.9 rating across 60+ reviews outranks a 4.6 across 20 reviews in almost every market. The reviews are the Google Business Profile reviews, not separate LSA reviews, which is why GBP work and LSA work compound.",
      },
      {
        t: "p",
        text: "**Response rate and speed.** Google penalises LSA accounts that fail to answer the inbound leads. If you miss 30 percent of your LSA calls because the office is closed when they come in, your ranking slips and the volume drops. Running LSA means owning the inbound answer rate.",
      },
      {
        t: "p",
        text: "**Proximity.** Standard local-pack geometry. The visitor's location (or named town in the query) relative to the business's registered location influences which LSA cards show.",
      },
      {
        t: "p",
        text: "**Spend commitment.** Higher weekly budget tells Google you can take more leads. LSA accounts with budgets of $500 per week often serve lower in rankings than ones at $2,000 per week with the same review profile.",
      },
      {
        t: "p",
        text: "The weighting of these inputs is proprietary and shifts, but reviews are consistently the heaviest factor. A solar operator with a weak GBP profile cannot run effective LSA; the account will technically function but see almost no volume.",
      },

      { t: "h2", text: "What are the common Google Guaranteed verification requirements?" },
      {
        t: "p",
        text: "Google verifies a solar contractor for the Guaranteed badge against a defined set of credentials. For most US states the verification includes:",
      },
      {
        t: "ul",
        items: [
          "Business licence in the state and metro where you operate",
          "Solar-specific contractor licence where the state requires one (CSLB-C46 in California, EC13 in Florida, electrical contractor licence in most other states)",
          "Workers compensation insurance proof",
          "General liability insurance at $1 million minimum",
          "Background checks on the business owner and typically on managers above a threshold",
        ],
      },
      {
        t: "p",
        text: "The verification is handled by Google's partner Pinkerton or similar, usually takes 2 to 4 weeks, and costs the solar contractor nothing beyond their time to gather the documents. Once verified, the Guaranteed badge is maintained with annual renewal of the verification documents.",
      },
      {
        t: "p",
        text: "The badge is also an insurance product for the homeowner: if a Google Guaranteed service fails and does not resolve, Google will pay the homeowner up to $2,000 to cover remediation. This almost never actually fires in practice for solar (installs are too large for the $2,000 cap to be meaningful remediation), but it is the stated backing that lets Google promote the badge.",
      },

      { t: "h2", text: "How do the economics compare?" },
      {
        t: "p",
        text: "A real solar operator we audited in a mid-sized US metro, 12 months of data:",
      },
      {
        t: "table",
        head: ["Metric", "Search ads", "LSA"],
        rows: [
          ["Monthly spend", "$4,200", "$3,100"],
          ["Monthly leads", "32", "24"],
          ["Cost per raw lead", "$131", "$129"],
          ["Sat appointment rate", "48%", "62%"],
          ["Cost per sat appointment", "$273", "$208"],
          ["Closed deals per month", "4.1", "3.8"],
          ["Cost per closed deal", "$1,024", "$815"],
        ],
      },
      {
        t: "p",
        text: "Two things to notice:",
      },
      {
        t: "p",
        text: "**Raw cost per lead was similar.** Search ads and LSA landed at roughly the same per-lead number. The headline comparison most operators focus on is the one that matters least.",
      },
      {
        t: "p",
        text: "**Cost per sat appointment and cost per closed deal both favoured LSA.** The sat rate on LSA was materially higher, which came from two things: the Google Guaranteed badge pre-qualifying intent, and the phone-first format filtering out the lowest-intent form fills.",
      },
      {
        t: "p",
        text: "This is one account in one market. The pattern we see across audited solar accounts holds: in markets with mature LSA competition, cost per sat appointment on LSA runs 20 to 35 percent lower than on search ads. In less competitive LSA markets, the gap can be larger. In saturated LSA markets where many competitors have strong review profiles, the gap closes.",
      },

      { t: "h2", text: "When should you run LSA, when should you run search, when both?" },
      {
        t: "p",
        text: "**Run LSA first in a new metro.** Three reasons: it demands less setup (no landing pages, no ad copy, no complex bidding strategy), the economics are usually better per sat appointment, and the Google Guaranteed badge is working for your brand on every impression even for people who do not click.",
      },
      {
        t: "p",
        text: "**Run search ads in parallel once LSA volume is steady.** The two channels do not cannibalise each other at a strategic level; they stack. A visitor who sees your LSA card above the search results and then your search ad below it reads two credentials rather than one. Combined click-through on brand-tagged impressions goes up when both are running.",
      },
      {
        t: "p",
        text: "**Lean into LSA when your GBP is strong.** Operators with 4.8 or higher ratings across 50 or more reviews see outsized returns from LSA. The reviews that would be sitting unused on your GBP are now driving ad rank.",
      },
      {
        t: "p",
        text: "**Lean into search ads when you need control.** New product launches, specific landing-page experiments, keyword-specific sales positioning. LSA cannot do any of this; search ads can do all of it. See [solar Google Ads landing pages](/blog/solar-google-ads-landing-pages).",
      },
      {
        t: "p",
        text: "The best-performing solar accounts we see run both at roughly 60/40 LSA/search budget split, with the LSA budget allocated to the primary metro and search budget covering secondary metros plus brand defence and specific-product campaigns.",
      },

      { t: "h2", text: "What are the common mistakes?" },
      {
        t: "p",
        text: "**Running LSA with a weak GBP.** If your business has fewer than 20 reviews and under 4.7 average, LSA will serve rarely and the few leads it does send will be the low-quality ones. Fix the GBP first; [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers) covers the mechanics.",
      },
      {
        t: "p",
        text: "**Not answering LSA leads fast enough.** LSA leads call you. If you take 30 minutes to answer, Google notes the slow response, and your ranking slips in the next refresh. Treat LSA calls like a hot inbound: answered inside 60 seconds or an auto-text and call-back inside 2 minutes.",
      },
      {
        t: "p",
        text: "**Running both channels with the same tracking.** LSA and search ads report into different systems. Treat them as separate accounts, with separate attribution, until you build a unified downstream view in your CRM. Mixing them in reporting hides which one is actually working.",
      },
      {
        t: "p",
        text: "**Treating LSA as set and forget.** LSA ranking shifts with your GBP score and your lead-response behaviour. Review the dashboard weekly; one bad review or one missed-call pattern can halve LSA volume inside a month.",
      },
      {
        t: "p",
        text: "**Pausing LSA for a weak month.** The pause resets your ranking position. Reactivating puts you behind competitors who ran continuously. Lower the budget rather than pausing.",
      },
      {
        t: "link",
        href: "/blog/google-ads-for-solar-contractors",
        label: "Google Ads for solar contractors",
        note: "The search build that runs alongside LSA",
      },
    ],
    faq: [
      {
        q: "Can I run LSA without being Google Guaranteed?",
        a: "LSA requires Google Guaranteed verification for most service categories, including solar. There is no non-verified version of the ad; the badge is the ad.",
      },
      {
        q: "How long does Google Guaranteed verification take?",
        a: "2 to 4 weeks on average for a solar contractor with licensing and insurance documentation in order. Longer if background checks need to run on multiple managers or if licensing documentation is incomplete.",
      },
      {
        q: "Can I dispute an LSA lead charge?",
        a: "Yes. If the lead was out of your service area, out of your category, or clearly spam, Google refunds the charge inside 30 days. Disputes should run through the LSA dashboard, with notes. Successful dispute rates in solar typically run 10 to 15 percent of charged leads.",
      },
      {
        q: "Does Google Ads account suspension affect LSA?",
        a: "Not directly in most cases; LSA is a separate billing account. But a Google policy violation (unverified claims in ad copy, misleading pricing, etc.) can affect both products if the underlying business is flagged.",
      },
      {
        q: "Does LSA show on mobile and desktop both?",
        a: "Yes, on both. The LSA block is often more prominent on mobile because of the taller card format, which can push search ads below the fold on smaller screens.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "what-solar-leads-cost-on-google-ads",
      "solar-google-ads-landing-pages",
    ],
  },

  {
    slug: "solar-google-ads-performance-max-for-installers",
    title: "Performance Max for solar installers, honestly",
    metaTitle: "Solar Performance Max: When It Works, When It Burns Budget",
    metaDescription:
      "Why Performance Max without conversion data spends into nothing for solar. When to add it, how to build asset groups, and the audience signals that matter.",
    keyword: "solar google ads performance max",
    secondary: [
      "solar pmax",
      "performance max for installers",
      "solar google ads asset groups",
      "pmax audience signals solar",
    ],
    excerpt:
      "Performance Max without conversion data buys the cheapest impressions on the cheapest surfaces. When to add it, how to build asset groups, and the exclusions that matter.",
    category: "google-ads",
    intent: "Informational",
    icon: "grid",
    published: "2026-11-05",
    answer:
      "Performance Max for solar should be the second or third campaign type a solar account runs, not the first. It needs 50 to 100 conversions per month to train against, which a new account does not have. Run it after search has worked for 90 days and tracking is complete. Build asset groups by product, feed it customer match lists and website visitors, and exclude your brand terms so it does not eat the brand search ads already running cheaper.",
    takeaways: [
      "PMax needs conversion data to work. New accounts should start with search, not PMax.",
      "Asset groups replace keywords. Build one per product, not one per campaign.",
      "Audience signals are hints, not targeting. The algorithm uses them as training data.",
      "Exclude your brand terms. PMax will otherwise cannibalise your own cheapest traffic.",
    ],
    body: [
      {
        t: "p",
        text: "Performance Max is the Google Ads product that promises the most and demands the most. For a solar account with mature conversion tracking, enough history for the algorithm to train against, and a sales process that handles mixed-intent leads cleanly, PMax usually earns its place in the account inside 90 days.",
      },
      {
        t: "p",
        text: "For a solar account without those three conditions, PMax typically spends 20 to 40 percent of the budget on near-random impressions across display and YouTube before producing anything useful. The failure mode is the campaign running too long on insufficient signal; the fix is almost always to wait, not to tune.",
      },
      {
        t: "p",
        text: "This piece lays out when PMax is the right call, how to set up asset groups, which audience signals matter, and the common ways solar accounts lose money with it. The full search-first account build sits in [google ads for solar contractors](/blog/google-ads-for-solar-contractors).",
      },

      { t: "h2", text: "What is Performance Max actually doing?" },
      {
        t: "p",
        text: "Performance Max is one campaign that bids across every Google surface at once: search, display, YouTube, Gmail, Shopping (where relevant) and Discover. You feed it text assets (headlines, descriptions), image assets, video assets, logos, and goals. The algorithm decides what combination of assets to serve, on which surface, to which audience, at what bid.",
      },
      {
        t: "p",
        text: "What you give up versus a classic search campaign:",
      },
      {
        t: "p",
        text: "**Keyword control.** PMax chooses the search terms it serves against. You can see them in the search terms report but cannot bid on them individually.",
      },
      {
        t: "p",
        text: "**Placement control.** PMax picks display and YouTube placements. You can exclude specific placements but cannot pick them positively.",
      },
      {
        t: "p",
        text: "**Creative control at the moment of serving.** The algorithm assembles the headline-description-image combination at auction time.",
      },
      {
        t: "p",
        text: "What you gain:",
      },
      {
        t: "p",
        text: "**Reach across surfaces in one campaign.** No need to run separate display and YouTube campaigns.",
      },
      {
        t: "p",
        text: "**Automated creative testing.** The algorithm tests combinations in production rather than requiring you to A/B test.",
      },
      {
        t: "p",
        text: "**Potentially cheaper conversions once trained.** A well-fed PMax campaign in a mature account typically runs 15 to 25 percent cheaper per conversion than the equivalent search-only setup.",
      },
      {
        t: "p",
        text: "The gain is real but conditional on the conditions above. The automation that is PMax's advantage is also what hurts a new account without data to train on.",
      },

      { t: "h2", text: "When should a solar account add PMax?" },
      {
        t: "p",
        text: "Three conditions all need to be true:",
      },
      {
        t: "p",
        text: "**Conversion tracking is complete.** You have the sat appointment flowing back to Google as an offline conversion with the right value attached. If you are still tracking only form fills, do not run PMax. The algorithm will optimise against form fills regardless of their quality.",
      },
      {
        t: "p",
        text: "**You have 50 to 100 conversions per month, trailing 30 days, consistent.** PMax needs training data. Below 50 conversions, the algorithm cannot distinguish signal from noise and spends the exploration budget on random experiments.",
      },
      {
        t: "p",
        text: "**Your search campaigns have been running for at least 90 days.** This matters because PMax learns against the account's history, not just the campaign's history. An account with 90 days of structured search behaviour has a mature baseline for the algorithm to build on. An account with 10 days has nothing.",
      },
      {
        t: "p",
        text: "For most new solar accounts, these conditions are met somewhere between day 90 and day 180. Before that, PMax is premature.",
      },

      { t: "h2", text: "How should solar PMax asset groups be built?" },
      {
        t: "p",
        text: "PMax uses asset groups the way search campaigns use ad groups. The main difference: there is no keyword inside an asset group, only a theme defined by the assets and audience signals you provide.",
      },
      {
        t: "p",
        text: "For a solar account, the asset group structure that works:",
      },
      {
        t: "p",
        text: "**One asset group per product.** Residential install, battery storage, EV charger each get their own asset group. Each group's assets are built specifically for that product.",
      },
      {
        t: "p",
        text: "Within each asset group:",
      },
      {
        t: "ul",
        items: [
          "Headlines: 11 to 15, specific to the product. 'Residential Solar in Austin from $89/month' is a strong headline; 'Save money on your energy bill' is a weak one.",
          "Long headlines: 5 of them. The algorithm uses these on display placements.",
          "Descriptions: 5, 90 characters each, specific.",
          "Images: 20 if you have them. Mix of product shots, installation photos, happy customers (with permission), and lifestyle shots relevant to the product.",
          "Logos: Square and landscape, high resolution.",
          "Video: at least one 15 to 30 second ad per asset group. Lack of video is the single most common solar PMax weakness; without it the campaign cannot serve on YouTube effectively.",
        ],
      },
      {
        t: "p",
        text: "The assets should feel like the ad campaign for that product, not a generic brand asset library. A battery asset group with images of panels on a roof is wasting the storage positioning; the images should be of the battery unit on a wall during an outage.",
      },

      { t: "h2", text: "What audience signals work for solar PMax?" },
      {
        t: "p",
        text: "Audience signals in PMax are hints, not targeting. The algorithm reads them as 'people like these converted; find more like them'. The signals that work for solar, in rough order of value:",
      },
      {
        t: "p",
        text: "**Customer match lists.** Upload a hashed list of your closed customers. The algorithm uses them as a seed to find lookalikes. For solar, the list should include customers who closed in the last 12 months, with email and phone where available. 500 customers is enough to seed; 2,000 is plenty.",
      },
      {
        t: "p",
        text: "**Website visitors who converted.** First-party audience based on your pixel data. People who filled out a form, called, or hit the thank-you page. Use the longest window your pixel supports (usually 90 to 540 days).",
      },
      {
        t: "p",
        text: "**Website visitors by page.** People who visited specific pages (quote request, battery product page, EV charger page) but did not convert. These are warmer than cold.",
      },
      {
        t: "p",
        text: "**In-market segments.** Google's own classification of 'people in the market for X'. For solar, use 'home improvement > solar panels' and related. These are weaker signals than first-party data but still useful.",
      },
      {
        t: "p",
        text: "**Demographic signals.** Age, household income, home ownership status. Weaker still; use as cross-filters, not primary signals.",
      },
      {
        t: "p",
        text: "The signals compound. A PMax campaign with customer match plus website visitors plus in-market segments trains faster and better than one with any single signal alone.",
      },

      { t: "h2", text: "What should the exclusions be?" },
      {
        t: "p",
        text: "Three exclusions almost every solar PMax account needs:",
      },
      {
        t: "p",
        text: "**Brand terms.** PMax will serve on your own brand searches if you let it, which cannibalises your brand search ads at a higher cost. The brand search ad is already running at $2 to $5 per click; PMax running on the same term can serve at $10 to $20. Exclude your brand terms at the account level.",
      },
      {
        t: "p",
        text: "**Negative keyword list.** The same account-level negative list the search campaigns use. Jobs, DIY, education, research, free, cheap. See the [negatives piece](/blog/negative-keywords-for-solar-google-ads) for the full starter list.",
      },
      {
        t: "p",
        text: "**Placement exclusions on display.** Mobile app placements almost never convert for solar; exclude them. Low-quality content networks (certain content aggregators, specific display partners that attract accidental clicks) should also be excluded. Review the placement report at 30 days and exclude the clear waste.",
      },

      { t: "h2", text: "What should the budget be?" },
      {
        t: "p",
        text: "PMax needs enough daily budget to generate meaningful learning. For solar, that is usually at least $100 to $200 per day per asset group, with a minimum campaign budget of $300 to $500 per day for an account running three products. Below that, the algorithm does not get enough events per day to train quickly.",
      },
      {
        t: "p",
        text: "The first 30 days are learning time. Cost per conversion often looks worse than the search campaigns during this period, sometimes materially worse. Judge the campaign at 60 days, not 14.",
      },
      {
        t: "p",
        text: "A reasonable allocation for a mature solar account running both search and PMax:",
      },
      {
        t: "ul",
        items: [
          "Search campaigns: 50 to 60 percent of budget",
          "PMax: 25 to 35 percent of budget",
          "Brand defence: 5 to 10 percent of budget",
          "LSA: paid separately if running",
        ],
      },
      {
        t: "p",
        text: "PMax should rarely be more than 40 percent of the total account budget. Beyond that, the account's visibility into which specific terms and placements are producing conversions drops too low to manage effectively.",
      },

      { t: "h2", text: "How do you tell if PMax is actually working?" },
      {
        t: "p",
        text: "Three metrics, reviewed at 30, 60 and 90 days:",
      },
      {
        t: "p",
        text: "**Cost per sat appointment versus search campaigns.** The number you care about. If PMax is running 20 percent higher than search at day 60, something is off (asset quality, audience signals, or exclusions). If PMax is running 10 to 25 percent below search by day 90, the campaign is doing its job.",
      },
      {
        t: "p",
        text: "**Share of total conversions.** PMax should grow as a share of account conversions over the first 60 days. If it is still at 10 percent of conversions at day 60 on 30 percent of budget, it is not pulling its weight.",
      },
      {
        t: "p",
        text: "**Search terms report content.** The search terms PMax is serving against. If they look like the terms your search campaigns already cover, you are cannibalising; tighten the exclusions. If they look like adjacent terms you were not reaching before, that is the campaign working.",
      },

      { t: "h2", text: "What are the common mistakes?" },
      {
        t: "p",
        text: "**Running PMax too early.** The headline mistake. Six out of ten solar PMax accounts we audit were started before the account had 50 conversions per month. The algorithm had nothing to train against and the campaign burned budget while learning.",
      },
      {
        t: "p",
        text: "**One generic asset group for everything.** Residential, battery and EV charger pooled into one group with mixed assets. The algorithm cannot distinguish which asset belongs with which intent and serves random combinations. Separate asset groups per product.",
      },
      {
        t: "p",
        text: "**Weak video.** No video at all, or a video that is a logo with text pan. The algorithm has nothing to serve on YouTube and the campaign loses that surface. One decent 15 to 30 second video per asset group is table stakes.",
      },
      {
        t: "p",
        text: "**Not excluding brand terms.** The campaign eats your brand traffic, which was already converting at $2 to $5 per click, at $10 to $20. Account-level exclusion is a 2-minute fix with large ongoing savings.",
      },
      {
        t: "p",
        text: "**Comparing day-14 performance to search.** PMax looks worse than search in the first 2 to 3 weeks because the algorithm is still exploring. Operators who switch it off at day 14 never see the gain the mature campaign would have produced.",
      },
      {
        t: "p",
        text: "**Not reviewing the placement and search terms reports.** Reviewing at 30 days, excluding the obvious waste, is where PMax goes from average to good. Operators who treat it as fully hands-off typically give up 15 to 25 percent of its potential.",
      },
      {
        t: "link",
        href: "/blog/solar-google-ads-remarketing",
        label: "Solar Google Ads remarketing",
        note: "The audiences PMax uses as its signal",
      },
    ],
    faq: [
      {
        q: "Can I run PMax without a search campaign?",
        a: "Possible but not recommended for solar. Without a search campaign providing structured search behaviour and conversion data, PMax is making decisions on noisier signal. The search campaign gives the algorithm a baseline to compare against.",
      },
      {
        q: "How long is the PMax learning phase?",
        a: "Officially Google says 7 to 14 days. In practice, for solar accounts with 50 to 100 conversions per month, 30 to 45 days is where the campaign starts to find its efficient cost per conversion. Below 50 conversions a month, learning never really completes.",
      },
      {
        q: "Does PMax replace display and YouTube campaigns?",
        a: "In most solar accounts, yes. The standalone display and YouTube campaigns run less efficiently than PMax inside a mature account. Exceptions: specific remarketing use cases, discussed in the [remarketing piece](/blog/solar-google-ads-remarketing).",
      },
      {
        q: "Can I A/B test ad copy in PMax?",
        a: "Not in the classic ad-group-A versus ad-group-B sense. You can test asset-level performance by looking at the 'ad strength' and asset-level metrics inside each asset group, and by swapping low-performing assets out. The structured A/B test does not exist within PMax.",
      },
      {
        q: "Should PMax use target CPA or target ROAS?",
        a: "If the account has conversion values flowing from the CRM via offline conversion imports, target ROAS. If not, maximise conversions with a target CPA set slightly below the current average. Target CPA alone without the ROAS data is the default most accounts land on.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "solar-google-ads-bidding-strategies",
      "solar-google-ads-conversion-tracking",
    ],
  },

  {
    slug: "solar-google-ads-remarketing",
    title: "Solar Google Ads remarketing: the audience lists that pay back",
    metaTitle: "Solar Google Ads Remarketing: Lists Worth Running",
    metaDescription:
      "Which remarketing audiences a solar Google Ads account should build, which exclusions matter, and the one or two display placements worth running against them.",
    keyword: "solar google ads remarketing",
    secondary: [
      "solar retargeting",
      "solar display ads",
      "remarketing audiences solar",
      "solar customer match",
    ],
    excerpt:
      "Three audiences, 90-day windows, four creatives rotating. The modest-budget channel that finishes deals the first click started, and how to measure it fairly.",
    category: "google-ads",
    intent: "Informational",
    icon: "cursor",
    published: "2026-11-07",
    answer:
      "Solar Google Ads remarketing matters because the sales cycle is long and most visitors need three to seven touches before they book a survey. Build three audiences first: quote-form visitors who did not submit, submitted leads who have not booked, and product-page viewers who stayed longer than two minutes. Exclude existing customers and anyone past 90 days. Run display and YouTube at 10 to 15 percent of total ad spend.",
    takeaways: [
      "Remarketing exists to close sales the first touch did not. Measured against first-click, it looks expensive.",
      "Three audiences first: cart-abandoners, booked-not-sat, and product-page viewers.",
      "Exclude existing customers and anyone over 90 days. The audience must be live, not stale.",
      "One or two display placements, not a sprawling network. Simpler usually works better.",
    ],
    body: [
      {
        t: "p",
        text: "Remarketing is the paid-ads work most solar operators do poorly if they do it at all. The homeowner who visited the quote page, closed the tab and planned to come back later needs a reminder; the lead who filled a form but has not booked a survey needs a different nudge; the visitor who read the EV charger page for four minutes is a different warm lead again. All three can be reached with a remarketing budget that is a small share of total ad spend.",
      },
      {
        t: "p",
        text: "Where it goes wrong is operators treat remarketing as a single display campaign that follows every past visitor with the same ad for 180 days. The ads become background noise, the visitor develops ad blindness, and the operator concludes remarketing does not work. The real failure is undifferentiated audiences, undifferentiated creative, and no exit logic.",
      },
      {
        t: "p",
        text: "This piece lays out the three audiences every solar remarketing account should run, which exclusions matter, which display placements are worth the budget, and what to measure. The broader account build sits in [google ads for solar contractors](/blog/google-ads-for-solar-contractors).",
      },

      { t: "h2", text: "Why does remarketing matter for solar specifically?" },
      {
        t: "p",
        text: "Solar is a long-consideration purchase. The typical US residential sale takes 2 to 6 weeks from first interest to signed contract, and the homeowner usually visits three to five vendor websites during that window. A homeowner who hit your quote page on day one and did not fill the form has not disappeared. They are still comparing, still thinking, and the next 30 to 45 days are when remarketing can show up as the quiet reminder that pulls them back to your page.",
      },
      {
        t: "p",
        text: "The specific numbers from audited solar accounts: of visitors who hit a quote or product page and did not submit a form on the first visit, 15 to 25 percent will return within 90 days if any remarketing is running at all. Of those returners, roughly a third convert on the return visit. That is a 5 to 8 percent conversion lift on cold-visitor traffic, available for the cost of a modest display budget.",
      },
      {
        t: "p",
        text: "The other reason: the brand defence benefit. A homeowner who saw your ad once on search, then saw your display ad while reading an unrelated article the next day, then saw your YouTube pre-roll on a cooking video a week later, is a homeowner who is now more likely to type your company name into Google when they are ready. The brand search ad then closes at a $2 to $5 cost per click. Remarketing is partly a loss-leader for brand search conversion.",
      },

      { t: "h2", text: "What are the three audiences every solar remarketing account needs?" },
      {
        t: "p",
        text: "In rough order of value:",
      },
      {
        t: "p",
        text: "**Quote-form visitors who did not submit.** The hottest cold audience. The visitor was on the form, which means they came close to a decision. The exit was for a reason: distracted, interrupted, researching further, waiting to talk to a spouse. The remarketing ad's job is to be visible when the window reopens. Use the website visitor pixel with the condition 'visited quote page' AND 'did not visit thank-you page'. Audience size for a solar account doing 1,000 to 3,000 monthly site visitors: usually 100 to 400 people on a 90-day window.",
      },
      {
        t: "p",
        text: "**Submitted leads who have not booked a survey.** The booked-not-sat audience. These are people who filled your form and had their first conversation with your rep but have not yet scheduled a formal site survey. In solar, this group is 30 to 50 percent of form fills, and some of them will book if nudged. Build this audience from a CRM-fed customer match list; refresh it weekly. Audience size for a mid-sized account: usually 50 to 200 at any given time.",
      },
      {
        t: "p",
        text: "**Product-page viewers who stayed longer than two minutes.** The research audience. People reading your residential, battery, or EV charger product page for two or more minutes have intent but have not acted on it. They may not have been ready to submit the form on that visit. Build with 'visited product page' AND 'time on page > 120 seconds'. Audience size: usually 150 to 500 on 90-day window.",
      },
      {
        t: "p",
        text: "These three audiences cover roughly 80 percent of the remarketing opportunity in a solar account. Additional audiences (visited the pricing page but did not get to the quote form, abandoned a solar calculator, downloaded a guide) can layer on if volume supports it.",
      },

      { t: "h2", text: "What exclusions matter?" },
      {
        t: "p",
        text: "Three exclusions prevent the remarketing budget from leaking:",
      },
      {
        t: "p",
        text: "**Existing customers.** Upload a customer match list and set it as an exclusion. There is no point in paying for ad impressions to the person who signed last month. For solar, this list should include anyone with an active installed system (lifetime) and anyone in-flight (quoted, signed, awaiting install). Refresh monthly.",
      },
      {
        t: "p",
        text: "**Past 90 days without a visit.** A visitor who last touched your site 150 days ago is cold for solar purposes. The purchase window has closed; they bought elsewhere or decided not to buy at all. Set your audience windows at 90 days maximum. Google will offer 540 days as an option; it is rarely useful for solar.",
      },
      {
        t: "p",
        text: "**Converted leads who have booked a survey.** Once they are in the pipeline, further remarketing is wasted budget and sometimes an irritant. Build a dynamic exclusion using the CRM's 'survey booked' status, hashed and uploaded to Google as a customer match exclusion.",
      },

      { t: "h2", text: "Which display placements and campaign types work" },
      {
        t: "p",
        text: "Three recommendations here, from most to least important:",
      },
      {
        t: "p",
        text: "**Run display primarily through PMax's remarketing surface, not a standalone display campaign.** This is a shift from the older advice. Google has steadily deprecated standalone display remarketing in favour of surfacing it inside PMax. For an account running PMax (see the [PMax piece](/blog/solar-google-ads-performance-max-for-installers)), feed your remarketing audiences into PMax as audience signals and let the algorithm handle placement. For an account not yet on PMax, a classic display remarketing campaign still works but will likely be the next piece to migrate.",
      },
      {
        t: "p",
        text: "**Run YouTube remarketing as a parallel channel.** YouTube remarketing (served to past visitors on YouTube in-stream and bumper placements) often shows up as the second-strongest remarketing surface for solar. 15 to 30 second video creative on YouTube reinforces the brand recognition work your other channels are doing. Budget: $20 to $50 per day on a small account; higher if the videos are strong.",
      },
      {
        t: "p",
        text: "**Avoid the display network's generic placements.** Mobile app ad placements rarely convert for solar, and much of the raw display inventory on random content sites is low-quality. Exclude mobile app traffic specifically; apply the standard 'sensitive content' filter plus the 'social casino' and 'non-family-safe' exclusions.",
      },
      {
        t: "p",
        text: "A sprawling display campaign serving across hundreds of placements almost always wastes budget. Simpler, with 3 to 10 placements that actually convert, consistently beats set-and-forget on this channel.",
      },

      { t: "h2", text: "What creative does remarketing need?" },
      {
        t: "p",
        text: "The creative mistake most solar accounts make is reusing the search ad copy as the display ad copy. The two channels have different jobs. Search ads answer a direct question; remarketing ads remind a visitor who already asked that question that you are still here.",
      },
      {
        t: "p",
        text: "Creative that works for solar remarketing:",
      },
      {
        t: "p",
        text: "**Image ads: specific proof, not product shots.** A photo of an installer on a roof in a named town, with a one-line proof point ('40+ installs in Pflugerville in 2026'). An image ad showing a happy customer with first name and town. These outperform generic solar panel photos by 50 to 100 percent in audited accounts.",
      },
      {
        t: "p",
        text: "**Video ads: 15 to 30 seconds, one message, one action.** The video should answer one specific question (how long does install take, what does the first visit look like, what the finance options are) and end with a call to action to book or learn more. Avoid long, polished brand videos; they look like a different company's budget and attract clicks that do not convert.",
      },
      {
        t: "p",
        text: "**Headline language: continuation, not acquisition.** 'Still thinking about solar?' works. 'Save money on your energy bill' does not; the visitor already knows that, which is why they visited the first time. Address the fact that they are a returning visitor; the ad acknowledging the relationship outperforms the generic one.",
      },
      {
        t: "p",
        text: "**Rotate at least four creative variants.** The same ad for 90 days develops ad blindness; the viewer stops seeing it. Rotate four or more creative options and refresh them quarterly.",
      },

      { t: "h2", text: "What should the budget be?" },
      {
        t: "p",
        text: "Modest. For most solar accounts, remarketing (across display and YouTube) should run at 10 to 15 percent of total paid-ads budget, no more. Beyond that, the remarketing budget is competing for impressions against a limited audience and the frequency per visitor climbs into the stalker range, which hurts brand perception without improving conversion.",
      },
      {
        t: "p",
        text: "For a solar account spending $5,000 per month on search plus LSA, that is $500 to $750 per month on remarketing. Enough to run display and YouTube remarketing against two or three audiences with meaningful frequency, not so much that the audience is saturated.",
      },
      {
        t: "p",
        text: "Frequency cap targets:",
      },
      {
        t: "ul",
        items: [
          "Display: 5 to 8 impressions per visitor per month",
          "YouTube: 3 to 5 impressions per visitor per month",
        ],
      },
      {
        t: "p",
        text: "Above these, the ad becomes background noise and clickthrough rate drops.",
      },

      { t: "h2", text: "How do you measure remarketing success?" },
      {
        t: "p",
        text: "Different metrics than search. Remarketing finishes deals the first click started, so attributing it fairly requires looking at assisted conversions, not just last-click.",
      },
      {
        t: "p",
        text: "**Primary metric: assisted conversion rate.** How often does a visitor touched by a remarketing impression ultimately convert, versus a comparable visitor not touched by remarketing? GA4 or your attribution tool should let you cut this. If the lift is in the range of 20 to 40 percent, remarketing is doing its job.",
      },
      {
        t: "p",
        text: "**Secondary metric: brand search volume.** When remarketing is running, brand search impressions and clicks typically rise by 10 to 25 percent within 60 to 90 days. The visitor saw the display ad, remembered the brand, and typed it later. Track brand search growth as a lagging indicator.",
      },
      {
        t: "p",
        text: "**Tertiary metric: cost per conversion on last-click.** This will look worse than search, as expected. If last-click cost per conversion is more than 3 times the search cost per conversion, the audience targeting or creative is probably off; investigate.",
      },
      {
        t: "p",
        text: "Judging remarketing by last-click cost per conversion alone will almost always understate its value. The assisted-conversion lens is where the real work shows up.",
      },

      { t: "h2", text: "What are the common mistakes?" },
      {
        t: "p",
        text: "**One audience, 180-day window, same ad.** The pattern we see most. The audience is too big, too stale, and too undifferentiated to serve usefully, and the one ad burns out after 30 days. Fix: three audiences, 90-day windows, four creative variants rotating.",
      },
      {
        t: "p",
        text: "**Not excluding existing customers.** Running remarketing against people who already bought is paying twice for the same relationship. Add the customer match exclusion.",
      },
      {
        t: "p",
        text: "**Judging by last-click metrics.** Remarketing's job is to assist search and brand clicks that close the deal. Last-click will always look expensive. Judge by assisted conversion lift.",
      },
      {
        t: "p",
        text: "**Over-saturating with frequency.** Six to eight display impressions a day on the same visitor is not reinforcement; it is harassment. Set a frequency cap.",
      },
      {
        t: "p",
        text: "**Running remarketing without conversion tracking in place.** Same rule as every other paid channel. Without the sat appointment flowing back as an offline conversion, you cannot judge any of this. See the [conversion tracking piece](/blog/solar-google-ads-conversion-tracking).",
      },
      {
        t: "link",
        href: "/blog/solar-google-ads-performance-max-for-installers",
        label: "Performance Max for solar installers",
        note: "Where the remarketing audience feeds into",
      },
    ],
    faq: [
      {
        q: "Can I run remarketing without a display campaign budget?",
        a: "Yes, via YouTube remarketing alone. YouTube bumper and short in-stream placements at $10 to $25 per day can carry a solar brand's remarketing on their own if display budget is tight.",
      },
      {
        q: "How quickly does a remarketing audience refresh?",
        a: "Website visitor audiences update near-real-time (minutes to hours). Customer match uploads refresh at your upload cadence. Weekly uploads are a good baseline for most solar accounts; daily if volume is high.",
      },
      {
        q: "Can I remarket to visitors who did not fill a form but called a tracked number?",
        a: "Yes, if the call tracking integration pushes the 'called' event into GA4 or the pixel. Treat those visitors as a conversion for audience purposes rather than putting them back in the cart-abandoner audience.",
      },
      {
        q: "Does remarketing work better on mobile or desktop?",
        a: "For solar, impressions skew mobile (60 to 75 percent of inventory) but conversions are more mixed. Display remarketing on mobile converts well for brand recall; the actual form fill often happens on desktop later. Measure assisted conversions across devices rather than last-click per device.",
      },
      {
        q: "How long until remarketing starts producing lift?",
        a: "Measurable brand search lift usually appears 60 to 90 days after remarketing starts, as the audience builds and the frequency reaches useful levels. Assisted conversion lift shows earlier, usually inside 30 days, if the audiences are built correctly.",
      },
    ],
    related: [
      "google-ads-for-solar-contractors",
      "solar-google-ads-performance-max-for-installers",
      "solar-google-ads-conversion-tracking",
    ],
  },
] as const;
