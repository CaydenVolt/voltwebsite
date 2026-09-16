import type { Post } from "../types";

/**
 * Cluster 2: reviews and reputation. Hub is
 * how-to-get-more-reviews-for-solar-installers.
 */
export const REVIEWS_POSTS: readonly Post[] = [
  {
    slug: "how-to-get-more-reviews-for-solar-installers",
    title: "How to get more reviews for solar installers",
    metaTitle: "How to Get More Reviews for Solar Installers",
    metaDescription:
      "A review system for solar installers: when to ask, what to send, which channel converts, and the Google rules that get review counts wiped out.",
    keyword: "how to get more reviews for solar installers",
    secondary: [
      "solar reviews",
      "solar installer reviews",
      "get reviews solar",
      "review generation solar",
      "solar reputation",
    ],
    excerpt:
      "Reviews are the cheapest thing a solar company can build and the most commonly left to chance. The timing, the channel, the wording and the rules.",
    category: "reviews",
    intent: "Informational",
    icon: "star",
    pillar: true,
    published: "2026-09-02",
    answer:
      "Solar installers get more reviews by asking every customer at a fixed point in the job, by text rather than email, with a direct link and one polite follow-up. The strongest moment is two to six weeks after commissioning, once the first lower bill has landed and the customer can see the result rather than just the panels.",
    takeaways: [
      "Ask every customer, at the same point, every time. A remembered ask is not a system.",
      "Text converts far better than email for review requests. Send both, text first.",
      "Time the ask to the first lower bill, not to the day the scaffolding comes down.",
      "Never incentivise, never gate and never bulk-request. All three can wipe the whole profile.",
    ],
    body: [
      {
        t: "p",
        text: "Reviews do two jobs at once in solar, which is why they beat almost everything else on return. They lift where you appear, because review volume and recency are local ranking inputs. And they lift whether you are chosen when you do appear, because a homeowner handing over roof access and twenty years of finance checks what other people said first.",
      },
      {
        t: "figures",
        items: [
          { value: "97%", label: "Read reviews before choosing" },
          { value: "3x", label: "Reported lift past 50 reviews" },
          { value: "20x", label: "Text response over email" },
        ],
        source:
          "Consumer review figures are widely reported in local search research; the text-versus-email gap comes from review platform data published by [Bodhi](https://www.bodhi.solar/blog/best-practices-for-great-solar-reviews).",
      },

      { t: "h2", text: "When to ask" },
      {
        t: "p",
        text: "Most installers ask on the day the job finishes, which is the worst moment that feels like the right one. The customer has scaffolding marks on the lawn, an inverter they do not understand, and no evidence yet that any of it worked.",
      },
      {
        t: "p",
        text: "The strong moment is after the first bill that proves the point. Two to six weeks after commissioning covers most markets, and if your area has a longer meter or interconnection process, anchor to the bill rather than to the date.",
      },
      {
        t: "table",
        head: ["Moment", "Response rate", "Review quality"],
        rows: [
          ["Install day", "Moderate", "Vague, about the crew being tidy"],
            ["Commissioning day", "Moderate", "Better, still no results"],
          ["First lower bill", "Highest", "Specific, with numbers in it"],
          ["Twelve months", "Low", "Excellent when it lands, rarely does"],
        ],
      },
      {
        t: "callout",
        label: "The second ask",
        text: "One follow-up, seven days later, roughly doubles the total. Two follow-ups annoy people. Set the sequence to send twice and stop.",
      },

      { t: "h2", text: "What to send, and on which channel" },
      {
        t: "p",
        text: "Text first, email as backup. A review request is a sixty second task and texts are read in minutes, which is the whole reason the gap between the two is so large.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Text, from a person, not a brand",
            body: "Short, first-person, names the job. Something like: Hi Sarah, it is Dan from Volt Solar. Now your first bill has come through, would you mind leaving us a quick Google review? It takes a minute and it genuinely helps us. Then the link on its own line.",
          },
          {
            title: "One link, straight to the review box",
            body: "Not to your website, not to a choose-a-platform page. Use the Google short link that opens the star selector directly. Every extra click loses a share of people.",
          },
          {
            title: "Email as the second touch",
            body: "Plain text beats a designed template for this one job. A short, text-only email from a real address converts better than a branded HTML one, because it reads like a person asking rather than a campaign running.",
          },
        ],
      },
      {
        t: "p",
        text: "If you want the wording to copy, [solar review request templates](/blog/solar-review-request-templates) has the messages written out.",
      },

      { t: "h2", text: "The rules that get profiles wiped" },
      {
        t: "p",
        text: "Google's review policies are enforced bluntly. When a profile is caught, the penalty is often not the removal of the offending review but the removal of a large part of the review history, including the honest ones. Three things matter.",
      },
      {
        t: "ul",
        items: [
          "**Do not offer anything for a review.** No discount, no entry into a draw, no gift card. Not even for an honest review. This is the one that catches well-meaning companies.",
          "**Do not gate.** Asking how happy they are and only sending the review link to the happy ones is review gating, and it is against policy on every major platform.",
          "**Do not request in bulk.** Policies prohibit soliciting reviews in bulk. A steady trickle from a sequence is both safer and better for ranking than 80 reviews in a fortnight, which looks exactly like what it is.",
        ],
      },

      { t: "h2", text: "Reply to all of them" },
      {
        t: "p",
        text: "Responses are visible to every future reader and recent activity is a ranking input. Reply to the good ones in a sentence and the bad ones carefully. [How to respond to negative solar reviews](/blog/how-to-respond-to-negative-solar-reviews) covers the difficult half.",
      },
      {
        t: "p",
        text: "One detail worth getting right: put the service and the place in the reply, naturally. Thanks Sarah, glad the 6.4kW system in Fairview is already showing on the bill reads better to a human and to a search engine than Thanks for your feedback.",
      },

      { t: "h2", text: "Where to ask beyond Google" },
      {
        t: "p",
        text: "Google is the priority because it feeds the map pack, but solar buyers check industry-specific sites too. Pick two secondary platforms and be consistent rather than spreading across six.",
      },
      {
        t: "ol",
        items: [
          "**Google Business Profile.** First, always, and by a wide margin.",
          "**One solar-specific directory** your market actually uses.",
          "**Facebook**, if you have an active page, because it is where the neighbourhood conversation happens.",
          "**Your own site**, with the reviews displayed honestly and nothing invented. If you have four reviews, show four.",
        ],
      },
      {
        t: "quote",
        text: "The newer company with 350 reviews gets the call. Google trusts review volume more than it trusts how long you have been installing.",
      },

      { t: "h2", text: "Make it a system, not a habit" },
      {
        t: "p",
        text: "Every solar company intends to ask for reviews. The ones with 300 of them have removed the intention from the process: the request fires off the job status, the follow-up fires seven days later, replies are somebody's Monday morning, and nobody has to remember anything.",
      },
      {
        t: "p",
        text: "That is what the [review funnel](/products/five-star-review-funnel) in the Volt system does, and it is also perfectly buildable yourself. What matters is that it runs without a person deciding to run it.",
      },
      {
        t: "link",
        href: "/blog/how-many-google-reviews-do-you-need",
        label: "How many Google reviews do you need?",
        note: "The target worth aiming at",
      },
    ],
    faq: [
      {
        q: "Can I offer a discount for a Google review?",
        a: "No. Offering anything of value in exchange for a review breaks Google's policy, and enforcement often removes a large part of the profile's review history rather than just the incentivised ones. Ask plainly instead, and ask everyone.",
      },
      {
        q: "How many review requests should I send?",
        a: "Two. The initial request and one reminder about a week later. The second touch roughly doubles the total; a third mostly produces irritation and unsubscribes.",
      },
      {
        q: "Should I ask for reviews by text or email?",
        a: "Text first. Review platforms consistently report text converting far better than email for this specific request, because it is a one minute task and texts get read quickly. Use email as a second touch, and keep it plain.",
      },
      {
        q: "What if a customer leaves a bad review?",
        a: "Reply within a day, take it seriously, and move the detail offline. A well-answered bad review reassures readers more than an unbroken run of five stars, which many people quietly distrust. See [how to respond to negative solar reviews](/blog/how-to-respond-to-negative-solar-reviews).",
      },
    ],
    related: [
      "how-to-get-more-google-reviews-for-solar-business",
      "how-to-ask-customers-for-a-review-solar",
      "how-many-google-reviews-do-you-need",
    ],
  },

  {
    slug: "how-to-get-more-google-reviews-for-solar-business",
    title: "How to get more Google reviews for a solar business",
    metaTitle: "How to Get More Google Reviews for a Solar Business",
    metaDescription:
      "The Google-specific part of review generation for solar: the short link, the profile settings, what counts as recency, and how to avoid a filtered review.",
    keyword: "how to get more google reviews for solar business",
    secondary: [
      "google reviews solar",
      "solar business google reviews",
      "google review link",
      "solar google business profile reviews",
    ],
    excerpt:
      "Google reviews are the ones that move the map pack. The short link, the settings, the timing, and why some reviews never appear at all.",
    category: "reviews",
    intent: "Informational",
    icon: "star",
    published: "2026-08-09",
    answer:
      "To get more Google reviews for a solar business, send every customer a direct review short link by text two to six weeks after commissioning, follow up once, and reply to every review within a day. Reviews left through the direct link, by verified accounts, on an active profile are the ones least likely to be filtered out.",
    takeaways: [
      "Use the Google review short link. Anything that adds a click loses reviews.",
      "Steady volume beats bursts. Bursts look automated and can get filtered.",
      "Replying is a ranking signal and a conversion signal at the same time.",
      "Reviews that disappear are usually filtered, not deleted. Know the difference.",
    ],
    body: [
      {
        t: "p",
        text: "Google reviews are worth treating separately from reviews in general, because they are the ones that feed the map pack. A solar company with a strong Google profile and nothing else out-earns one with reviews scattered across five platforms.",
      },

      { t: "h2", text: "Get the link right first" },
      {
        t: "p",
        text: "Google gives every profile a short link that opens the star selector directly. You can find it in the Business Profile dashboard under the ask for reviews option. It looks like a short g.page address.",
      },
      {
        t: "ol",
        items: [
          "**Use the short link itself**, not a search result, not your website, not a page that lists platforms.",
          "**Never use a QR code as the only route.** Print is fine as a supplement, but the text message is the channel that converts.",
          "**Test it on a phone.** If it opens a browser rather than the app for a signed-in user, people drop out at the sign-in screen.",
          "**Keep it in one place** so the office, the crew and the automation all send the same link.",
        ],
      },

      { t: "h2", text: "Settings and profile hygiene that affect reviews" },
      {
        t: "ul",
        items: [
          "The profile has to be **verified** and in good standing. An unverified profile can collect reviews that nobody sees.",
          "Your **service areas** should match where you install. Reviews from far outside them are worth less and can look irregular.",
          "Keep the profile **active**: photos, posts and replies. A dormant profile with a sudden burst of reviews is exactly the pattern filters look for. See [Google Business Profile posts for solar](/blog/google-business-profile-posts-for-solar).",
          "Do not change your business name to stuff keywords into it. It is the fastest route to a suspension, and a suspended profile has no reviews at all.",
        ],
      },

      { t: "h2", text: "Why some reviews never appear" },
      {
        t: "p",
        text: "A review that vanishes has usually been filtered rather than deleted. Google's spam systems act automatically, and the common triggers are mundane rather than sinister.",
      },
      {
        t: "table",
        head: ["Trigger", "What it looks like", "What to do"],
        rows: [
          ["Several reviews from one network", "A crew posting from the office wifi", "Ask people to review on their own data"],
          ["A brand new account", "First and only review ever left", "Nothing. Some will stick, some will not"],
          ["A sudden burst", "Thirty reviews in two days", "Space requests out. Steady is safer"],
          ["Text that reads as promotional", "Contact details or links in the review", "Nothing you can control"],
          ["Incentivised language", "Reviewer mentions the discount", "Stop incentivising. This is the dangerous one"],
        ],
      },
      {
        t: "callout",
        label: "Worth knowing",
        text: "A steady two or three reviews a week looks like a working company. Forty in a week looks like a campaign, and Google's systems treat it accordingly. The slower approach also produces better ranking because recency is continuous rather than a spike.",
      },

      { t: "h2", text: "Reply to every one, in public" },
      {
        t: "p",
        text: "Replies are visible to every future reader, and they are one of the activity signals the profile is judged on. Two rules: reply within a day, and write something only your company could have written.",
      },
      {
        t: "p",
        text: "Naming the system size, the town and the crew turns a generic thank you into proof that the job was real. It also puts relevant local language on the profile without keyword stuffing anything.",
      },

      { t: "h2", text: "Getting past the awkwardness of asking" },
      {
        t: "p",
        text: "Most owners under-ask because it feels like begging. It is worth reframing: you are asking somebody who is genuinely pleased to spend sixty seconds helping a local business they chose. Framed that way, the ask stops being awkward and the response rate goes up.",
      },
      {
        t: "p",
        text: "The other half is simply removing the decision. When the request fires automatically off a job status change, nobody has to feel awkward at all. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers) for the full system, and [how to ask customers for a review](/blog/how-to-ask-customers-for-a-review-solar) for the wording.",
      },
      { t: "h2", text: "Turning reviews into something the rest of the site can use" },
      {
        t: "p",
        text: "Reviews are worth more than the profile they sit on. Once you have a steady flow, they become the most persuasive copy you own, and it was written by somebody else, which is exactly why it works.",
      },
      {
        t: "ul",
        items: [
          "**Pull the specific ones onto service area pages.** A review naming the town does more for that page than three paragraphs you wrote. See [how to write solar service area pages](/blog/how-to-write-solar-service-area-pages).",
          "**Use real quotes in ads.** Not invented testimonials, actual ones, with the first name and the town.",
          "**Read them for objections.** Recurring complaints in three star reviews are your sales objections written down by the people who had them.",
          "**Show the count, not just the stars.** Four hundred and twelve reviews is a claim; five stars on its own is wallpaper.",
        ],
      },
      {
        t: "p",
        text: "One caution: only display what is real. A wall of testimonials with no names, no dates and no way to verify them reads as invented to anybody who has been shopping around, and it undermines the genuine reviews sitting next to it.",
      },
      {
        t: "link",
        href: "/blog/local-seo-for-solar-contractors",
        label: "Local SEO for solar contractors",
        note: "Where reviews fit in the ranking picture",
      },
    ],
    faq: [
      {
        q: "Why did my Google reviews disappear?",
        a: "Almost always a spam filter rather than a deletion. Common causes are several reviews from the same network, brand new reviewer accounts, or a sudden burst after a quiet period. Some return on their own; you can report obvious errors but there is no reliable appeal.",
      },
      {
        q: "Can customers leave a Google review without a Google account?",
        a: "No. A signed-in Google account is required, which is one reason texts work better than print: people are usually already signed in on their phone.",
      },
      {
        q: "How quickly should I reply to a Google review?",
        a: "Within a day for anything negative and within a few days for anything positive. Speed matters most on the bad ones, where an unanswered complaint sitting at the top of the profile costs you more than the complaint itself.",
      },
    ],
    related: [
      "how-to-get-more-reviews-for-solar-installers",
      "how-to-optimize-your-google-business-profile-for-solar",
      "how-to-remove-a-fake-google-review",
    ],
  },

  {
    slug: "how-to-ask-customers-for-a-review-solar",
    title: "How to ask a solar customer for a review",
    metaTitle: "How to Ask a Solar Customer for a Review",
    metaDescription:
      "The wording, the timing and the channel for asking solar customers for reviews, plus what to say to the ones who say yes and then never do it.",
    keyword: "how to ask customers for a review solar",
    secondary: [
      "asking for solar reviews",
      "review request solar",
      "solar review ask script",
      "how to ask for a review",
    ],
    excerpt:
      "Most solar review asks fail because of when they are sent and how they are worded. Both are fixable in an afternoon.",
    category: "reviews",
    intent: "Informational",
    icon: "chat",
    published: "2026-07-04",
    answer:
      "Ask a solar customer for a review by text, from a named person, two to six weeks after commissioning, with one specific reason and a direct link. Keep it under forty words, mention nothing about ratings or stars, and follow up once seven days later if nothing arrives.",
    takeaways: [
      "Name a person. A request from Dan converts better than one from a company.",
      "Under forty words, one link, no attachments and no branding.",
      "Ask for a review, never for a good review or a five star review.",
      "Verbal ask on site, automated ask later. The two together beat either alone.",
    ],
    body: [
      {
        t: "p",
        text: "There is a version of this that works and a version that does not, and the difference is mostly wording and timing rather than effort. Here is the version that works, in order.",
      },

      { t: "h2", text: "Warn them on site, in person" },
      {
        t: "p",
        text: "The single highest-return sentence in review generation is said by the crew lead on the last day: once your first bill comes through, we will send you a text asking for a quick review. It would mean a lot.",
      },
      {
        t: "p",
        text: "That does two things. It sets an expectation, so the text is not a surprise. And it attaches the request to the person who did the work rather than to a marketing system, which is what makes people act on it.",
      },

      { t: "h2", text: "The text itself" },
      {
        t: "p",
        text: "Short, first-person, specific, one link. Longer than forty words and response drops. Anything that looks designed reads as a campaign.",
      },
      {
        t: "callout",
        label: "A request that works",
        text: "Hi Sarah, it is Dan from Volt Solar. Hope the first bill was a nice surprise. Would you mind leaving us a quick Google review? Takes a minute and it really helps a small local company. [link]",
      },
      {
        t: "p",
        text: "Note what is not in it. No stars mentioned. No mention of five. No please consider leaving us a positive review. No logo, no header image, no unsubscribe furniture. More variants in [solar review request templates](/blog/solar-review-request-templates).",
      },

      { t: "h2", text: "What never to say" },
      {
        t: "table",
        head: ["Do not write", "Why", "Write instead"],
        rows: [
          ["Leave us a 5 star review", "Solicits a rating, against policy", "Leave us a review"],
          ["If you were happy, please review us", "Gating by another name", "Would you mind leaving a review"],
          ["Review us and get $50 off", "Incentivising, can wipe the profile", "Nothing. Just ask"],
          ["Your feedback is important to us", "Reads as a form letter", "It really helps a small local company"],
          ["Click here to complete our survey", "Wrong task entirely", "A direct review link"],
        ],
      },

      { t: "h2", text: "The follow-up" },
      {
        t: "p",
        text: "Seven days later, one message, shorter than the first. No guilt, no second explanation, just a nudge and the link again. This single message typically doubles the total, and it is the step most companies skip.",
      },
      {
        t: "p",
        text: "After that, stop. A third ask converts almost nobody and costs goodwill with the people who were always going to say no.",
      },

      { t: "h2", text: "The ones who say yes and never do it" },
      {
        t: "p",
        text: "Most of them are not avoiding you. They read the text while driving, meant to do it later, and later never came. Which is exactly why the second message works, and why sending the link as the last line of the message rather than buried mid-paragraph matters more than it sounds.",
      },
      {
        t: "ul",
        items: [
          "Send at a time people are not working. Early evening beats mid-morning.",
          "Put the link on its own line at the end, where a thumb can reach it.",
          "Never send a review request in the same message as anything else, especially an invoice.",
          "If a customer had a problem that got fixed well, ask them specifically. Recovered customers write the best reviews there are.",
        ],
      },
      { t: "h2", text: "Who to ask, and who to skip" },
      {
        t: "p",
        text: "Ask everyone. That sentence is doing real work, because the instinct is to ask only the customers who seemed delighted, and that instinct is both against platform policy and worse for business.",
      },
      {
        t: "table",
        head: ["Customer", "Ask them?", "Why"],
        rows: [
          ["Delighted, smooth job", "Yes", "The obvious ones, and the easiest"],
          ["Fine, uneventful job", "Yes", "Most of your reviews come from here"],
          ["Had a problem you fixed well", "Yes, specifically", "The most persuasive reviews you will get"],
          ["Had a problem still open", "Not yet", "Fix it first, then ask. Not a filter, a sequence"],
          ["Genuinely unhappy with you", "Yes", "Uncomfortable, and honest. A profile with no criticism reads as fake"],
        ],
      },
      {
        t: "p",
        text: "The fourth row is the only one that looks like gating and is not. Asking after a problem is resolved is ordinary good sense. Deciding never to ask somebody because you suspect the review would be poor is the thing platforms prohibit, and it is also how companies end up with a rating nobody believes. More on that in [why solar reviews matter](/blog/why-solar-reviews-matter).",
      },
      {
        t: "link",
        href: "/blog/how-to-get-more-reviews-for-solar-installers",
        label: "How to get more reviews for solar installers",
        note: "The system this message sits inside",
      },
    ],
    faq: [
      {
        q: "Is it legal to ask customers for reviews?",
        a: "Yes, asking is fine and expected. What is not allowed is offering anything in exchange, asking only your happy customers, or asking in bulk. Ask everyone, plainly, and you are inside the rules on every major platform.",
      },
      {
        q: "Should the crew ask, or should it be automated?",
        a: "Both. The crew sets the expectation verbally on the last day, and the automation sends the actual request weeks later when the result is visible. Either alone works less well than the pair.",
      },
      {
        q: "What if a customer asks what to write?",
        a: "Suggest what would be useful to another homeowner rather than what would be flattering to you: the system size, how the process went, and whether the bill changed. Never send them wording to copy.",
      },
    ],
    related: [
      "solar-review-request-templates",
      "how-to-get-more-reviews-for-solar-installers",
      "why-solar-reviews-matter",
    ],
  },

  {
    slug: "how-to-respond-to-negative-solar-reviews",
    title: "How to respond to negative solar reviews",
    metaTitle: "How to Respond to Negative Solar Reviews",
    metaDescription:
      "A four-part structure for answering bad solar reviews, what never to write, and how to handle the three complaints solar installers actually get.",
    keyword: "how to respond to negative solar reviews",
    secondary: [
      "bad solar reviews",
      "negative review response",
      "solar review reply",
      "handling bad reviews solar",
    ],
    excerpt:
      "A bad review answered well sells more than a perfect run of five stars. The structure, the traps, and the three complaints solar actually gets.",
    category: "reviews",
    intent: "Informational",
    icon: "shield",
    published: "2026-06-06",
    answer:
      "Respond to a negative solar review within 24 hours using four parts: thank them, acknowledge the specific problem without excuses, state what you are doing about it, and move the detail to a phone call. Never argue facts in public, never mention the contract, and never imply the customer misunderstood.",
    takeaways: [
      "Answer within a day. An unanswered complaint at the top of the profile costs more than the complaint.",
      "Four parts: thanks, acknowledgement, action, and an offline route.",
      "Write for the next reader, not for the reviewer. Everyone else is the audience.",
      "A profile with no negative reviews at all reads as suspicious to a lot of buyers.",
    ],
    body: [
      {
        t: "p",
        text: "Every solar company gets bad reviews eventually, because solar has long timelines, third parties, utilities and weather in it. The question is never whether you get one. It is what the next forty people who read it conclude about you.",
      },
      {
        t: "p",
        text: "That reframing is the whole skill. You are not writing to the angry customer. You are writing to the homeowner three months from now who is deciding between you and two others and has just read it.",
      },

      { t: "h2", text: "The four-part reply" },
      {
        t: "steps",
        items: [
          {
            title: "Thank them, briefly",
            body: "One line. Thank you for taking the time to write this, Michael. Not effusive, not defensive. It signals to every future reader that criticism does not rattle you.",
          },
          {
            title: "Acknowledge the specific thing",
            body: "Name the actual problem in their words. You waited three weeks for a call back after the inverter fault and that is not the standard we hold ourselves to. Vague acknowledgement reads as a form letter and fools nobody.",
          },
          {
            title: "State what you are doing",
            body: "Something concrete and already underway. We have changed how fault reports are routed so this does not sit in a queue again. Future readers are looking for evidence you fix things, not evidence you apologise.",
          },
          {
            title: "Move it offline",
            body: "A named person and a direct route. I have asked Dan, our operations lead, to call you today on the number we have; if it is easier, he is on 555 0134. Then actually do it.",
          },
        ],
      },

      { t: "h2", text: "What never to write" },
      {
        t: "ul",
        items: [
          "**Anything that corrects them in public.** Even when you are right, a reply that says actually, our records show reads badly to everybody watching.",
          "**The contract.** Referring a complaining customer to clause 7 is the single most damaging sentence available to you.",
          "**We have no record of you as a customer.** Sometimes true, and it reads as a brush-off. If you genuinely think a review is fake, reply neutrally and report it separately. See [how to remove a fake Google review](/blog/how-to-remove-a-fake-google-review).",
          "**A wall of text.** Long replies look like arguing. Four short paragraphs, maximum.",
          "**Nothing at all.** Silence is read as guilt, and it is the most common response of the three.",
        ],
      },

      { t: "h2", text: "The three complaints solar actually gets" },
      {
        t: "table",
        head: ["Complaint", "What is usually behind it", "What the reply should do"],
        rows: [
          [
            "Savings are lower than promised",
            "An optimistic estimate, or a usage change",
            "Offer to review the actual production data together, in public, in one line",
          ],
          [
            "Nobody called me back",
            "A handoff between sales and operations",
            "Name the routing fix. This is the complaint that most damages future readers",
          ],
          [
            "The install took months",
            "Permitting, interconnection or the utility",
            "Explain the dependency without hiding behind it, and say what you now tell customers up front",
          ],
        ],
      },
      {
        t: "p",
        text: "The middle one is worth attention. Slow or absent follow-up generates more bad reviews in solar than workmanship does, and it is also the easiest to fix systematically. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },

      { t: "h2", text: "When a bad review is actually useful" },
      {
        t: "p",
        text: "A profile of nothing but five stars makes experienced buyers suspicious, and many readers deliberately open the lowest reviews first to see how a company behaves under pressure. A well-answered three star review does real selling.",
      },
      {
        t: "quote",
        text: "Readers do not expect you to be perfect. They are checking what you do when you are not.",
      },
      {
        t: "p",
        text: "What matters far more than the occasional bad one is the total. Ten reviews with one bad review reads as a risk; three hundred reviews with eleven bad ones reads as a busy company. Volume is the real defence, which is why it is worth building steadily. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
      },
      { t: "h2", text: "What to do after the reply" },
      {
        t: "p",
        text: "The public reply is the smaller half of the job. The larger half is the private one, and it is where the occasional review actually gets changed.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Call the same day, from a named person",
            body: "Not an email, not the salesperson who sold the job. Somebody senior enough to fix it. Most people who write an angry review are surprised by a phone call and soften immediately.",
          },
          {
            title: "Fix the thing, then say nothing about the review",
            body: "Never trade a fix for a rating change. It is against policy, it is transparent, and it turns a resolved complaint into a second grievance.",
          },
          {
            title: "Ask once, afterwards, and only if it is genuinely resolved",
            body: "If you are asked directly whether they can update it, say they are welcome to if they feel differently now. A surprising number do. The rest leave it, which is fine.",
          },
          {
            title: "Change the process that caused it",
            body: "Then say so in the public reply. That sentence is the one that sells to the next reader, and it can only be written honestly if you actually changed something.",
          },
        ],
      },
      {
        t: "link",
        href: "/products/five-star-review-funnel",
        label: "How the review funnel works",
        note: "Requests, reminders and replies, handled",
      },
    ],
    faq: [
      {
        q: "Should I respond to every negative review?",
        a: "Yes, every one, within a day. The reply is read by far more people than the review, and an unanswered complaint sitting at the top of your profile does more damage over time than the original comment.",
      },
      {
        q: "Can I get a negative review removed?",
        a: "Only if it breaks platform policy: it is fake, contains abuse, or has no connection to an actual experience. Disagreeing with it is not grounds. Report it and, either way, reply well while you wait.",
      },
      {
        q: "What if the negative review is unfair?",
        a: "Reply as though it were fair, briefly and without correcting the facts in public, then take it offline. A calm reply to an unfair review is unusually persuasive to readers, who can often tell.",
      },
    ],
    related: [
      "how-to-remove-a-fake-google-review",
      "how-to-get-more-reviews-for-solar-installers",
      "why-solar-reviews-matter",
    ],
  },

  {
    slug: "solar-review-request-templates",
    title: "Solar review request templates",
    metaTitle: "Solar Review Request Templates (Text and Email)",
    metaDescription:
      "Copy-and-paste review request templates for solar installers: first text, reminder, email version, post-service request and the reply templates.",
    keyword: "solar review request templates",
    secondary: [
      "review request template",
      "solar review text template",
      "review email template solar",
      "ask for review template",
    ],
    excerpt:
      "The messages, written out, ready to paste. First ask, reminder, email version, and the replies for good and bad reviews.",
    category: "reviews",
    intent: "Informational",
    icon: "chat",
    published: "2026-05-13",
    answer:
      "A solar review request template should be under forty words, sent by text from a named person, reference the specific job, and end with a direct review link on its own line. Below are the four requests and three replies most solar installers need, written to stay inside Google's rules.",
    takeaways: [
      "Use the first text at two to six weeks after commissioning, the reminder seven days later.",
      "Swap the bracketed parts. Sending them unedited is worse than not sending them.",
      "None of these mention stars, ratings or incentives, which is what keeps them compliant.",
      "The reply templates matter as much as the requests. Replies are public.",
    ],
    body: [
      {
        t: "p",
        text: "Templates are a starting point, not a script. Change the names, the system size and the town, and rewrite one sentence in your own voice so it does not sound like everybody else's automation. The structure is what is doing the work.",
      },
      {
        t: "callout",
        label: "Before you use any of these",
        text: "Get your Google review short link from the Business Profile dashboard and keep it somewhere the office, the crew and the automation all read from. Every template below ends with it.",
      },

      { t: "h2", text: "Template 1: the first text" },
      {
        t: "p",
        text: "Sent two to six weeks after commissioning, ideally just after the first lower bill. From a mobile number, signed by a person.",
      },
      {
        t: "quote",
        text: "Hi [first name], it is [name] from [company]. Hope that first bill was a nice surprise. Would you mind leaving us a quick Google review? Takes about a minute and it genuinely helps a small local company. [link]",
        cite: "37 words",
      },

      { t: "h2", text: "Template 2: the reminder, seven days later" },
      {
        t: "p",
        text: "Shorter than the first. No guilt, no repetition of the explanation.",
      },
      {
        t: "quote",
        text: "Hi [first name], [name] again from [company]. Just a nudge on that review if you have a spare minute. No worries at all if not. [link]",
        cite: "27 words",
      },

      { t: "h2", text: "Template 3: the email version" },
      {
        t: "p",
        text: "Plain text, from a real person's address, no header image and no designed template. Subject line first.",
      },
      {
        t: "quote",
        text: "Subject: A quick favour, [first name]? / Hi [first name], [name] here from [company]. We finished your [size] system in [town] last month and I hope the first bill looked better than the last one. If you have a minute, would you leave us a Google review? It is the main way people in [town] find us. [link] Thanks either way, [name].",
      },

      { t: "h2", text: "Template 4: after a service call or a fix" },
      {
        t: "p",
        text: "Customers whose problem you solved well write the most persuasive reviews of all, because the review implicitly says something went wrong and the company handled it. Ask them.",
      },
      {
        t: "quote",
        text: "Hi [first name], [name] from [company]. Glad we got the [issue] sorted. If you would be willing to leave a quick Google review about how it went, it would help other people know what we do when something needs fixing. [link]",
      },

      { t: "h2", text: "Reply templates" },
      {
        t: "p",
        text: "Public replies are read by every future customer, so these get the same care as the requests.",
      },
      {
        t: "table",
        head: ["Situation", "Reply"],
        rows: [
          [
            "Five stars, short review",
            "Thanks [name]. Glad the [size] system in [town] is doing what we said it would. Give us a shout any time.",
          ],
          [
            "Five stars, detailed review",
            "Thank you [name], that is good of you to write. Passing this to [crew member] who ran the install. Enjoy the lower bills.",
          ],
          [
            "Three stars or fewer",
            "Thank you for writing this, [name]. You are right that [specific problem] should not have happened, and we have [specific change] so it does not again. [Person] will call you today, or reach them on [number].",
          ],
        ],
      },

      { t: "h2", text: "How to sequence them" },
      {
        t: "ol",
        items: [
          "Crew lead mentions the upcoming request verbally on the last day on site.",
          "Template 1 fires automatically two to six weeks later, off the job status.",
          "Template 2 fires seven days after that, only if no review has appeared.",
          "The sequence stops. No third ask.",
          "Replies go out within a day, using the table above as a starting point.",
        ],
      },
      {
        t: "p",
        text: "For the reasoning behind the timing and the compliance rules these templates are written around, see [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers) and [how to ask a solar customer for a review](/blog/how-to-ask-customers-for-a-review-solar).",
      },
      { t: "h2", text: "Making them sound like you" },
      {
        t: "p",
        text: "Templates have one failure mode, which is that every solar company within forty miles is sending a version of the same message. Three small changes fix it and take about ten minutes.",
      },
      {
        t: "ul",
        items: [
          "**Rewrite one sentence in your own words.** Read the message out loud. If you would not say it to somebody at their front door, change it.",
          "**Reference something only you would know.** The dog, the awkward hip roof, the fact they were away the week of the install. This is the line people reply to.",
          "**Sign it the way you introduce yourself.** Dan, not Daniel Whitfield, Customer Success.",
        ],
      },
      {
        t: "p",
        text: "And test the whole thing on yourself first. Send the message to your own phone, tap the link, and watch what happens. A surprising number of review sequences have been running for months against a link that opens a sign-in wall on mobile, and nobody noticed because nobody ever tried it.",
      },
      {
        t: "link",
        href: "/blog/how-to-respond-to-negative-solar-reviews",
        label: "How to respond to negative solar reviews",
        note: "The harder replies, in detail",
      },
    ],
    faq: [
      {
        q: "Can I send the same review request to every customer?",
        a: "The structure, yes. The content should change: name, system size, town and the actual date. Identical messages are less effective and, sent all at once, look to platforms like bulk solicitation.",
      },
      {
        q: "Should review requests come from a person or the company?",
        a: "A person, with a first name, on a mobile number people can reply to. Requests from a brand read as marketing and convert noticeably worse than requests from Dan who was on the roof.",
      },
      {
        q: "How long should a review request be?",
        a: "Under forty words for a text. The only jobs it has are saying who you are, why you are asking and where to click. Anything else reduces the response rate.",
      },
    ],
    related: [
      "how-to-ask-customers-for-a-review-solar",
      "how-to-get-more-reviews-for-solar-installers",
      "best-review-management-software-for-solar",
    ],
  },

  {
    slug: "how-many-google-reviews-do-you-need",
    title: "How many Google reviews does a solar company need?",
    metaTitle: "How Many Google Reviews Does a Solar Company Need?",
    metaDescription:
      "The review counts that matter for solar: the credibility floor, the map pack threshold, what your competitors have, and why the rating matters less.",
    keyword: "how many google reviews do you need",
    secondary: [
      "how many reviews solar company",
      "google review count",
      "review benchmark solar",
      "reviews needed to rank",
    ],
    excerpt:
      "There is no magic number, but there are three thresholds that change behaviour. Here they are, and how to work out your own target.",
    category: "reviews",
    intent: "Informational",
    icon: "star",
    published: "2026-04-15",
    answer:
      "A solar company needs at least 25 Google reviews to clear the credibility floor, around 50 before review volume starts producing a measurable lift in enquiries, and roughly as many as the top three competitors in its service area to compete in the map pack. The target is relative, not absolute: count what the local leaders have.",
    takeaways: [
      "Under 25 reviews, most buyers treat you as unproven regardless of how long you have traded.",
      "Around 50 is where reported organic lead lift becomes visible.",
      "The real target is your local map pack leaders, which varies enormously by market.",
      "A 4.6 with 200 reviews outsells a 5.0 with nine, every time.",
    ],
    body: [
      {
        t: "p",
        text: "Owners ask this question hoping for a number and the honest answer is that it depends on your postcode. But there are thresholds that behave consistently, and a simple way to set your own target in ten minutes.",
      },

      { t: "h2", text: "The three thresholds" },
      {
        t: "table",
        head: ["Count", "What changes", "Why"],
        rows: [
          ["Under 10", "You read as brand new", "Buyers cannot tell a new company from a bad one"],
          ["25", "You clear the credibility floor", "Enough for the average to mean something"],
          ["50", "Enquiries measurably lift", "Reported as roughly a 3x organic lead effect"],
          ["Local leaders' count", "You compete in the map pack", "Review volume is a ranking input, relative to rivals"],
        ],
      },
      {
        t: "p",
        text: "The last row is the one that actually matters, and it is why national benchmarks mislead. In a rural county the leaders might have 40. In a competitive metro they might have 600.",
      },

      { t: "h2", text: "How to set your own target in ten minutes" },
      {
        t: "steps",
        items: [
          {
            title: "Search from where your customers are",
            body: "Search solar installers on a phone in the middle of your main service town, not from your office across the county. Proximity changes what you see.",
          },
            {
            title: "Write down the map pack three",
            body: "Their review count and their average rating. Do this for your three biggest towns, not just one, because the leaders change street by street.",
          },
          {
            title: "Take the median of the leaders, and add a quarter",
            body: "That is your twelve month target. It is a moving target, because they are collecting reviews too, which is the point: this is a race with no finish line rather than a box to tick.",
          },
        ],
      },
      {
        t: "callout",
        label: "Do the arithmetic",
        text: "If the leaders average 180 and you have 30, you need roughly 190 more over a year. At a 30% response rate that is about 53 jobs a month asked properly, or fewer jobs asked better. Either way the plan is now a number rather than an aspiration.",
      },

      { t: "h2", text: "Volume beats rating, within reason" },
      {
        t: "p",
        text: "Owners protect a perfect 5.0 far more than buyers value it. A 4.6 with 200 reviews reads as a real company that has done a lot of work. A 5.0 with nine reads as friends and family, and many buyers say so out loud.",
      },
      {
        t: "p",
        text: "There is a floor, of course. Below about 4.2 the rating starts doing damage that volume cannot offset, and below 4.0 it is the first thing a buyer notices. But between 4.4 and 5.0, the count is doing more work than the decimal.",
      },

      { t: "h2", text: "Recency counts too" },
      {
        t: "p",
        text: "Three hundred reviews where the newest is fourteen months old reads worse than eighty that are current. Buyers check dates, and recency is an activity signal on the profile as well. A steady flow is worth more than a historic pile.",
      },
      {
        t: "ul",
        items: [
          "Aim for a constant trickle rather than campaigns. It is safer with platform filters and better for ranking.",
          "If you have gone quiet, restart gently rather than with a burst. See [how to get more Google reviews for a solar business](/blog/how-to-get-more-google-reviews-for-solar-business).",
          "Count reviews across your main service towns, not just the head office pin, if you run multiple locations.",
        ],
      },
      {
        t: "p",
        text: "And whatever the target, the way to hit it is the same: ask everyone, at the same moment, automatically, with one reminder. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
      },
      { t: "h2", text: "Why the count matters most when you are new" },
      {
        t: "p",
        text: "A company in its first two years is in the hardest position in solar: the technical work may be excellent and there is no way for anybody to tell. Reviews are the fastest route out, and they are the only credibility that can be built in months rather than years.",
      },
      {
        t: "p",
        text: "This cuts the other way too. An installer fifteen years in with nineteen reviews is quietly losing work every week to newer companies with four hundred, and usually does not know it, because the lost deals never called. Longevity is invisible in a search result.",
      },
      {
        t: "callout",
        label: "A useful check",
        text: "Search your main service town on a phone, in an incognito window, and look at your profile the way a buyer does. Count, rating, recency and photos, in that order. That five second impression decides most of what happens next, and it is the only part of the purchase you can control before anybody talks to you.",
      },
      {
        t: "link",
        href: "/blog/how-to-rank-in-google-map-pack-solar",
        label: "How to rank in the Google map pack",
        note: "Where the review count is actually spent",
      },
    ],
    faq: [
      {
        q: "Is a 5.0 rating better than a 4.7?",
        a: "Not usually, once volume is involved. Buyers are sceptical of perfect ratings on small counts, and many deliberately read the lowest reviews to see how a company behaves. A 4.7 across 200 reviews is a stronger signal than a 5.0 across twelve.",
      },
      {
        q: "How many reviews do I need to rank in the map pack?",
        a: "Enough to compete with the three profiles currently ranking in your service town, which could be 40 or 600 depending on the market. Check the actual leaders rather than working from a national figure.",
      },
      {
        q: "How fast can I realistically add reviews?",
        a: "At a 25% to 40% response rate with a proper two-message sequence, roughly a third of completed jobs will review. Work out your monthly install count, multiply by a third, and you have your realistic rate.",
      },
    ],
    related: [
      "how-to-get-more-reviews-for-solar-installers",
      "why-solar-reviews-matter",
      "how-to-rank-in-google-map-pack-solar",
    ],
  },

  {
    slug: "best-review-management-software-for-solar",
    title: "Review management software for solar companies",
    metaTitle: "Review Management Software for Solar Companies",
    metaDescription:
      "What review software actually has to do for a solar company, the five features that matter, what it should cost, and when a spreadsheet is enough.",
    keyword: "best review management software for solar",
    secondary: [
      "review management software",
      "solar review software",
      "reputation management solar",
      "review automation",
    ],
    excerpt:
      "Review software is five features and a trigger. Here is what actually matters, what to ignore, and the point at which you need any of it.",
    category: "reviews",
    intent: "Commercial",
    icon: "star",
    published: "2026-03-14",
    answer:
      "Review management software for a solar company needs five things: an automatic trigger off job status, text as the primary channel, a direct review link, one scheduled reminder, and replies from one inbox. Anything beyond that is optional. Below roughly six installs a month, a calendar reminder and a saved message do the same job.",
    takeaways: [
      "The trigger is the feature. Software that needs somebody to press send is a contact list.",
      "Text first, email second, both from the same tool.",
      "Reply from one place, or replies stop happening after month two.",
      "Sentiment dashboards and AI tone analysis are not why review counts grow.",
    ],
    body: [
      {
        t: "p",
        text: "Review software gets sold on dashboards and bought for dashboards, and then review counts do not move. What moves review counts is a message that goes out on its own at the right moment, and there are only five features involved in that.",
      },

      { t: "h2", text: "The five features that matter" },
      {
        t: "steps",
        items: [
          {
            title: "An automatic trigger",
            body: "The request fires when a job reaches a status, not when somebody remembers. This is the whole product. Everything else is convenience.",
          },
          {
            title: "Text as the primary channel",
            body: "With email as a second touch. If the tool is email-only you are leaving most of the response rate on the table.",
          },
          {
            title: "A direct review link",
            body: "Straight to the Google review box. Tools that route through their own landing page lose people at the extra click, and some of those pages edge towards gating.",
          },
          {
            title: "One scheduled reminder",
            body: "Seven days later, cancelled automatically if a review has appeared. Roughly doubles the total and nobody has to track it.",
          },
          {
            title: "Replies from one inbox",
            body: "If replying means logging into Google separately, replies stop happening by the second month. This is the feature that quietly decides whether your profile looks active in a year.",
          },
        ],
      },

      { t: "h2", text: "What to ignore" },
      {
        t: "ul",
        items: [
          "**Sentiment analysis dashboards.** You will read every review anyway. At solar volumes this is a chart of eleven data points.",
          "**Review gating workflows**, however they are described. Filtering unhappy customers out of the request breaks platform policy, and some tools still ship it as a feature.",
          "**Auto-generated replies** posted without review. Readers notice, and a generic reply to a specific complaint is worse than no reply.",
          "**Twenty platform integrations.** You need Google, one industry site and possibly Facebook. The other seventeen are a pricing tier.",
        ],
      },
      {
        t: "callout",
        label: "The gating trap",
        text: "If a tool offers to ask customers how they feel first and only send the review link to the happy ones, that is review gating. It is against policy on every major platform and enforcement can remove a large part of your review history, including the honest reviews.",
      },

      { t: "h2", text: "When you do not need software at all" },
      {
        t: "p",
        text: "Under roughly six installs a month, a recurring calendar task and two saved messages on a phone do the same job for nothing. The threshold is not really volume, it is whether the asking is reliably happening.",
      },
      {
        t: "table",
        head: ["Installs a month", "What is usually enough"],
        rows: [
          ["Under 6", "A calendar reminder and two saved text messages"],
          ["6 to 20", "Automation, because manual asking has already started slipping"],
          ["20+", "Automation plus a single inbox for replies, or replies stop"],
        ],
      },

      { t: "h2", text: "Standalone tool or part of the system" },
      {
        t: "p",
        text: "A standalone review tool is a monthly fee and another login, and it will need your job data to know when to fire. That integration is where these tools usually disappoint, because the trigger is the feature and the trigger depends on data living somewhere else.",
      },
      {
        t: "p",
        text: "Review generation built into the system that already holds the customer record avoids that entirely, which is why the [review funnel](/products/five-star-review-funnel) is part of the Volt plan rather than a separate product. Either approach works; what does not work is a review tool that cannot see when a job finished.",
      },
      {
        t: "p",
        text: "On the wider point about collapsing tools into one place, see [how to consolidate your solar tech stack](/blog/how-to-consolidate-your-solar-tech-stack).",
      },
      { t: "h2", text: "How to test a review tool in one month" },
      {
        t: "p",
        text: "Software demos are all convincing. A month of real use is not, which is why the test is worth running before the annual plan.",
      },
      {
        t: "ol",
        items: [
          "Note your **review count today** and the number of jobs you completed last month. That is your baseline rate.",
          "Connect the trigger and send yourself a live request from a real job. If configuring the trigger takes more than an afternoon, that is a finding.",
          "Run one full month **without anybody sending a request manually**. This is the actual test: does it run on its own?",
          "Compare **reviews per completed job**, not total reviews. Volume moves with your install count and will mislead you.",
          "Check whether **replies actually happened**. If they tailed off in week three, the reply inbox is not usable and the tool will not survive the year.",
        ],
      },
      {
        t: "p",
        text: "One month is enough because the failure modes show up early. Tools do not stop working in month eight; people stop using them in week three, and you can see that happening if you are looking for it.",
      },
      {
        t: "link",
        href: "/blog/how-to-get-more-reviews-for-solar-installers",
        label: "How to get more reviews for solar installers",
        note: "The process the software is meant to run",
      },
    ],
    faq: [
      {
        q: "What should review management software cost?",
        a: "Standalone tools commonly run from a few tens of dollars a month to a few hundred depending on volume and features. Judge it against the number of extra reviews it actually produces, which is a number you can measure within a quarter.",
      },
      {
        q: "Can review software reply to reviews for me?",
        a: "Most can draft replies. Post them after reading, particularly on anything under four stars, where a generic reply to a specific complaint does more harm than silence would.",
      },
      {
        q: "Does review software help with ranking?",
        a: "Indirectly. It helps you collect more reviews more consistently and reply to them, and those are ranking inputs. The software itself is not a ranking factor, and no tool can make Google show your profile more often on its own.",
      },
    ],
    related: [
      "how-to-get-more-reviews-for-solar-installers",
      "solar-review-request-templates",
      "how-to-consolidate-your-solar-tech-stack",
    ],
  },

  {
    slug: "how-to-remove-a-fake-google-review",
    title: "How to remove a fake Google review",
    metaTitle: "How to Remove a Fake Google Review (Solar)",
    metaDescription:
      "What counts as a removable review, the three routes to report one, realistic success rates, and what to do in the weeks while you wait for an answer.",
    keyword: "how to remove a fake google review",
    secondary: [
      "remove fake review",
      "report google review",
      "fake review solar",
      "delete google review",
    ],
    excerpt:
      "Most reviews people call fake are simply unfair, and those do not come down. Here is what actually qualifies, and the three routes that work.",
    category: "reviews",
    intent: "Informational",
    icon: "shield",
    published: "2026-01-17",
    answer:
      "A Google review can only be removed if it breaks a content policy: it is fake or has no basis in a real experience, contains abuse or profanity, is off-topic, includes personal information, or is a conflict of interest such as a competitor posting. A review you simply disagree with will not be removed, however unfair it is.",
    takeaways: [
      "Unfair is not removable. Policy-breaking is. Know which one you have before spending time on it.",
      "Three routes: flag it, chase it through Business Profile support, then the redressal form.",
      "Success rates are modest. Reply well in the meantime, because the reply is what readers see.",
      "Volume is the real defence. Twelve reviews makes one bad one fatal; three hundred makes it noise.",
    ],
    body: [
      {
        t: "p",
        text: "Before spending a week on this, be honest about which of two situations you are in, because only one of them has a route.",
      },

      { t: "h2", text: "What actually qualifies for removal" },
      {
        t: "table",
        head: ["Ground", "Example", "Realistic chance"],
        rows: [
          ["Fake or no real experience", "A reviewer who was never a customer", "Moderate, with evidence"],
          ["Conflict of interest", "A competitor or former employee posting", "Moderate, hard to prove"],
          ["Abuse or profanity", "Personal insults, slurs", "Good"],
          ["Personal information", "Names an employee's home address", "Good"],
          ["Off-topic", "A political rant with no service content", "Moderate"],
          ["Spam or advertising", "A link to another company", "Good"],
          ["You disagree with it", "They blame you for the utility's delay", "None"],
        ],
      },
      {
        t: "p",
        text: "The bottom row covers most of what solar companies call fake reviews. A customer blaming you for a nine week interconnection wait is being unfair, not breaking a policy, and no amount of reporting will move it. That one is answered, not removed. See [how to respond to negative solar reviews](/blog/how-to-respond-to-negative-solar-reviews).",
      },

      { t: "h2", text: "The three routes, in order" },
      {
        t: "steps",
        items: [
          {
            title: "Flag the review in the profile",
            body: "Open the review in your Business Profile, use the report option, and pick the policy it breaks. Pick the narrowest accurate one. Reporting a merely unfair review as spam teaches the system to ignore you.",
          },
          {
            title: "Escalate through Business Profile support",
            body: "If nothing happens in a few days, go through the support contact route in the profile. A human review is possible here, and being specific about which policy, with dates and evidence, matters far more than being upset.",
          },
          {
            title: "Use the redressal form",
            body: "Google publishes a content redressal form for cases that have already been reported and not resolved. It is the last route, and it needs the same specificity.",
          },
        ],
      },
      {
        t: "callout",
        label: "Do not do this",
        text: "Do not ask staff, friends or customers to mass-report a review, and do not post replies accusing the reviewer of being a competitor without proof. Coordinated reporting is itself a pattern the systems look for, and a public accusation reads badly to every future reader.",
      },

      { t: "h2", text: "What to do while you wait" },
      {
        t: "p",
        text: "Most of these take days to weeks and many end in no action. So the practical work is everything that happens around the review.",
      },
      {
        t: "ol",
        items: [
          "**Reply calmly and factually**, without accusing anybody. If you genuinely have no record of them as a customer, say that you cannot find the job and offer a direct contact to sort it out.",
          "**Keep the evidence.** Contract dates, job numbers, messages. If it does escalate to a human, this is what decides it.",
          "**Push the review down with volume.** A steady flow of genuine new reviews moves it off the first screen faster than any report will remove it.",
          "**Check whether it is actually one of yours.** Duplicate or similarly named profiles collect misdirected reviews more often than people expect.",
        ],
      },

      { t: "h2", text: "The defence that actually works" },
      {
        t: "p",
        text: "A company with twelve reviews is one bad review away from a problem. A company with three hundred can absorb a handful of unfair ones without a reader blinking, because the average barely moves and the pattern is obviously the exception.",
      },
      {
        t: "p",
        text: "That is the real answer to fake reviews, and it is the only one entirely under your control. See [how many Google reviews does a solar company need](/blog/how-many-google-reviews-do-you-need) for how to set the target, and [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers) for the system that gets you there.",
      },
      {
        t: "quote",
        text: "You cannot control what one person writes. You can control whether it is one of twelve or one of three hundred.",
      },

      { t: "h2", text: "Writing a report that gets read" },
      {
        t: "p",
        text: "Where a human does look at a report, the ones that succeed read like a case file rather than a complaint. Four things make the difference.",
      },
      {
        t: "ol",
        items: [
          "**Name the exact policy**, in its own words, rather than describing how unfair the review is.",
          "**Give dates and identifiers.** No record of this name in our system across the period; nearest matching job is a different address in a different county.",
          "**Keep it to one screen.** Long submissions are skimmed, and the specific detail gets lost in the grievance.",
          "**Leave the emotion out entirely.** It adds nothing and it makes the factual part harder to find.",
        ],
      },
      {
        t: "p",
        text: "If the report fails, stop. Repeated submissions of the same case rarely change the outcome, and the time is better spent on the reply and on the volume of genuine reviews arriving behind it.",
      },
    ],
    faq: [
      {
        q: "How long does Google take to remove a reported review?",
        a: "Anywhere from a few days to several weeks, and many reports end with no action. Treat removal as a possible bonus rather than the plan, and answer the review properly in the meantime.",
      },
      {
        q: "Can I sue over a fake review?",
        a: "In some jurisdictions defamation action is possible where a review contains provably false statements of fact, but it is slow, expensive and frequently makes the review far more visible. Take advice before going anywhere near it.",
      },
      {
        q: "What if a competitor is leaving fake reviews?",
        a: "Report it as a conflict of interest with whatever evidence you have, and document any pattern across dates and accounts. Do not accuse them in a public reply, which reads badly to future customers regardless of whether you are right.",
      },
    ],
    related: [
      "how-to-respond-to-negative-solar-reviews",
      "how-many-google-reviews-do-you-need",
      "how-to-get-more-google-reviews-for-solar-business",
    ],
  },

  {
    slug: "why-solar-reviews-matter",
    title: "Why solar reviews matter more than in most trades",
    metaTitle: "Why Solar Reviews Matter More Than in Other Trades",
    metaDescription:
      "Solar is a twenty year trust purchase with roof access and finance attached. Why that makes reviews the deciding factor, with the numbers behind it.",
    keyword: "why solar reviews matter",
    secondary: [
      "importance of solar reviews",
      "solar reputation",
      "do reviews matter solar",
      "solar social proof",
    ],
    excerpt:
      "Reviews decide more solar deals than price does, and the reason is structural: you are asking for roof access and a twenty year commitment.",
    category: "reviews",
    intent: "Informational",
    icon: "star",
    published: "2026-02-02",
    answer:
      "Solar reviews matter more than in most trades because the purchase combines roof access, a large sum, a twenty year warranty and a company the buyer has never heard of. With no way to judge the technical work, buyers substitute the one signal they can read, which is what previous customers said and how many of them said it.",
    takeaways: [
      "Buyers cannot evaluate an inverter choice, so they evaluate your reviews instead.",
      "Reviews are both a ranking input and a conversion multiplier, which is unusual.",
      "The warranty length makes company survival part of the purchase, and reviews proxy for it.",
      "Review volume lowers the cost of every other channel you run.",
    ],
    body: [
      {
        t: "p",
        text: "Plenty of trades benefit from reviews. Solar depends on them, and it is worth understanding why, because the reason changes how much time you should spend on it.",
      },

      { t: "h2", text: "The buyer cannot judge the actual work" },
      {
        t: "p",
        text: "A homeowner can tell whether a kitchen looks right. They cannot tell whether your string design is sensible, whether the rail spacing suits their rafters, or whether the inverter you specified will still have parts available in year twelve.",
      },
      {
        t: "p",
        text: "So they substitute. They judge the thing they can read, which is what a hundred other people said about the experience. This is not irrational, it is the only evidence available to them.",
      },

      { t: "h2", text: "The purchase carries unusual exposure" },
      {
        t: "ul",
        items: [
          "**Roof access.** Strangers drilling into the one part of the house that must not leak.",
          "**A large sum**, often financed, sometimes secured.",
          "**A twenty to twenty five year relationship**, in an industry where companies do close.",
          "**A promise about the future**, namely savings, which cannot be verified at the point of sale.",
        ],
      },
      {
        t: "p",
        text: "Each of those raises the perceived risk, and reviews are the only thing on the page that reduces it. That is why the same review count does more work in solar than it does for a plumber.",
      },

      { t: "h2", text: "Reviews do two jobs at once" },
      {
        t: "figures",
        items: [
          { value: "97%", label: "Read reviews before choosing" },
          { value: "3x", label: "Reported lead lift past 50 reviews" },
          { value: "Both", label: "A ranking input and a conversion lever" },
        ],
      },
      {
        t: "p",
        text: "Most marketing assets do one job. Reviews raise how often you appear in the map pack, because volume and recency are local ranking inputs, and they raise how often you are chosen once you appear. The two multiply, which is why the effect looks disproportionate.",
      },
      {
        t: "p",
        text: "There is a third effect that owners rarely price: reviews lower the cost of every paid channel. The same Google Ads spend produces more booked surveys for a company with 200 reviews than for one with eleven, because a higher share of the clicks convert. See [how much do solar leads cost](/blog/how-much-do-solar-leads-cost).",
      },

      { t: "h2", text: "Why the newer company sometimes wins" },
      {
        t: "quote",
        text: "The installer with fifteen years of experience and nineteen reviews loses to the three-year-old company with four hundred. Google cannot see experience. It can count reviews.",
      },
      {
        t: "p",
        text: "This is the part that frustrates established installers, and it is worth accepting rather than arguing with. Longevity is invisible to a search engine and nearly invisible to a homeowner comparing three tabs. Reviews are the format in which experience becomes legible.",
      },

      { t: "h2", text: "What this means practically" },
      {
        t: "ol",
        items: [
          "Treat review generation as a **core operational process**, not a marketing task. It belongs in the job workflow, next to commissioning.",
          "Ask **every** customer, at the same point, automatically. See [how to get more reviews for solar installers](/blog/how-to-get-more-reviews-for-solar-installers).",
          "**Reply to all of them**, because the replies are read by everybody who comes after.",
          "Set your target from **local competitors**, not a national number. See [how many Google reviews does a solar company need](/blog/how-many-google-reviews-do-you-need).",
          "Accept the occasional bad one, answer it well, and keep the flow going. Volume is the defence.",
        ],
      },
      {
        t: "p",
        text: "None of this is clever. It is a fortnightly habit that compounds for years, which is exactly the kind of work that gets postponed indefinitely unless something else runs it.",
      },
      { t: "h2", text: "What reviews will not do" },
      {
        t: "p",
        text: "Worth being clear about the limits, because reviews get sold as a cure for things they do not touch.",
      },
      {
        t: "ul",
        items: [
          "**They will not fix a slow response.** A five star profile does nothing if the enquiry sits unanswered for two days and somebody else calls first. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
          "**They will not rescue a bad price position.** They narrow the gap a buyer will tolerate; they do not close it.",
          "**They will not rank you outside your service area.** Proximity is still the strongest map pack input and no review count overcomes being forty miles away.",
          "**They will not compensate for a profile with no photos and no posts.** Review count is one input among several.",
        ],
      },
      {
        t: "p",
        text: "What they do is make every other thing you do work better. That is a less exciting claim than the one usually made for them, and it is the reason they are still the highest return work available to most solar companies.",
      },
      {
        t: "link",
        href: "/products/five-star-review-funnel",
        label: "The review funnel",
        note: "Asked automatically, reminded once, replied from one place",
      },
    ],
    faq: [
      {
        q: "Do solar reviews affect Google rankings?",
        a: "Yes, for local results. Review volume, rating and recency are among the inputs Google uses for the map pack, alongside proximity and relevance. They do not directly move classic organic rankings for informational pages.",
      },
      {
        q: "Are industry-specific solar review sites worth it?",
        a: "As a secondary channel, yes, particularly in markets where buyers use them. Google first though, by a wide margin, because it is the one feeding the map pack and the one most buyers check.",
      },
      {
        q: "How much do reviews actually affect close rate?",
        a: "Measure it rather than guess: compare your close rate on leads that arrived before and after a significant jump in review count. Most installers who do this find the effect larger than they expected, particularly on price-competitive deals.",
      },
    ],
    related: [
      "how-to-get-more-reviews-for-solar-installers",
      "how-many-google-reviews-do-you-need",
      "how-to-respond-to-negative-solar-reviews",
    ],
  },
] as const;
