import type { Post } from "../types";

/**
 * Cluster 6: website and conversion. Hub is solar-company-website-design.
 */
export const WEBSITE_POSTS: readonly Post[] = [
  {
    slug: "solar-company-website-design",
    title: "Solar company website design",
    metaTitle: "Solar Company Website Design That Books Surveys",
    metaDescription:
      "What a solar website is actually for, the page structure that books surveys, the trust signals that matter, and the design decisions that cost leads.",
    keyword: "solar company website design",
    secondary: [
      "solar website design",
      "solar website",
      "website for solar company",
      "solar installer website",
    ],
    excerpt:
      "A solar website has one job: turn somebody already interested into a booked survey. Almost everything else on it is decoration.",
    category: "website",
    intent: "Informational",
    icon: "browser",
    pillar: true,
    published: "2026-08-21",
    answer:
      "A solar company website should be built around one action: booking a survey or a call. That means a clear offer above the fold, visible local proof, an honest answer about cost, a short enquiry form, and fast loading on a phone. Design that gets in the way of those five things is costing leads regardless of how it looks.",
    takeaways: [
      "One primary action on every page. Two choices is one too many.",
      "Local proof beats national polish. Real installs, real reviews, real town names.",
      "Answer the cost question, in a range, rather than hiding it behind a form.",
      "Most solar sites are judged on a phone in under five seconds.",
    ],
    body: [
      {
        t: "p",
        text: "Solar websites tend to be judged in the wrong currency. They get reviewed for whether they look modern, when the only question that matters is whether somebody who arrived interested ends up booked.",
      },
      {
        t: "p",
        text: "That reframing changes most of the decisions. The hero image matters less than what the first sentence says. The animation budget matters less than the load time. And the thing almost every solar site avoids, the price, is the question most visitors came with.",
      },

      { t: "h2", text: "Who is actually on the page?" },
      {
        t: "p",
        text: "A solar visitor is usually further along than site owners assume. They have had a bill they did not like, seen a neighbour's array or an advert, and are now checking whether you are a real company worth letting onto their roof.",
      },
      {
        t: "ul",
        items: [
          "**They are on a phone**, more often than not, and often in the evening.",
          "**They are comparing.** Yours is one of three tabs, and the other two look broadly similar.",
          "**They are nervous.** Roof access, a large sum, a twenty year commitment, and a company they had not heard of this morning.",
          "**They want the cost.** Not a precise quote, a range that tells them whether this conversation is worth having.",
        ],
      },

      { t: "h2", text: "The structure that works" },
      {
        t: "steps",
        items: [
          {
            title: "Above the fold: what, where, and the action",
            body: "What you do, the area you serve, and one button. Solar installation across [county], surveyed and installed by our own crews, with a Book a survey button. Not a slogan about a brighter future.",
          },
          {
            title: "Immediately below: proof",
            body: "Review count and rating, years trading, licence and insurance, and the number of systems installed locally. Real numbers only. Invented proof is worse than none, because buyers check.",
          },
          {
            title: "Then: the cost question, answered",
            body: "A range, with what moves it. Most homes in this area land between X and Y depending on roof size and whether a battery is included. This is the single biggest differentiator available on a solar website, because almost nobody does it.",
          },
          {
            title: "Then: what happens next",
            body: "Survey, design, permit, install, commissioning, with rough timings. Reduces the fear of an unknown process and pre-answers half of the first call.",
          },
          {
            title: "Then: local evidence",
            body: "Installs by town, with photos of real roofs. See [how to write solar service area pages](/blog/how-to-write-solar-service-area-pages).",
          },
          {
            title: "Throughout: one action",
            body: "The same booking route, repeated. Not a phone number in one place, a form in another and a chat widget in a third.",
          },
        ],
      },

      { t: "h2", text: "Which design decisions cost leads?" },
      {
        t: "table",
        head: ["Decision", "What it costs"],
        rows: [
          ["A full-screen video hero", "Load time, and the first sentence nobody read"],
          ["A carousel of value propositions", "Everything after the first slide is unseen"],
          ["Stock photos of smiling families", "Credibility. Buyers recognise them instantly"],
          ["A twelve-field quote form", "Most of your submissions"],
          ["Cost hidden behind a form", "The visitors who wanted a number and left"],
          ["Two competing calls to action", "Both of them"],
          ["A chat widget nobody answers", "Trust, and the enquiries it intercepted"],
        ],
      },
      {
        t: "callout",
        label: "The five second test",
        text: "Open your homepage on a phone and count to five, then look away. Could you say what the company does, where it works, and what to do next? If not, the design is failing the only test it has to pass, whatever it looks like on a desktop.",
      },

      { t: "h2", text: "Trust, which is the whole sale" },
      {
        t: "p",
        text: "Solar is a trust purchase before it is a price purchase. The site has to carry the things a homeowner would ask a neighbour about.",
      },
      {
        t: "ol",
        items: [
          "**Real reviews with a count**, not five anonymous quote cards. See [why solar reviews matter](/blog/why-solar-reviews-matter).",
          "**Licence and insurance numbers**, visible rather than implied.",
          "**Photographs of your actual crews and actual installs.** The single strongest trust signal on a contractor site.",
          "**A real address and a real phone number**, not just a form.",
          "**Warranty terms in plain language**, including what happens if the manufacturer fails.",
          "**Named people.** Who runs the company. Solar buyers care about this more than most trades, because the warranty outlives the sales conversation by two decades.",
        ],
      },

      { t: "h2", text: "Speed and phones" },
      {
        t: "p",
        text: "A solar site that takes five seconds to load on a mid-range phone on mobile data has already lost a share of its visitors before the design is even visible. Most of the cost is images and scripts rather than anything structural. See [page speed for solar websites](/blog/page-speed-for-solar-websites).",
      },

      { t: "h2", text: "What should you build first?" },
      {
        t: "p",
        text: "If you are starting from nothing, the order is: homepage, one service page per core service, three service area pages, a costs page, and an about page with real people on it. Six to ten pages. That is a complete solar website, and it will outperform a thirty page site with nothing specific on it.",
      },
      {
        t: "p",
        text: "Everything else, the blog, the case studies, the resource library, comes later and only if somebody will maintain it. See [what to put on a solar company website](/blog/what-to-put-on-a-solar-company-website).",
      },
      {
        t: "link",
        href: "/products/functional-website",
        label: "How Volt builds the site",
        note: "Built around the booked survey, not the brochure",
      },
    ],
    faq: [
      {
        q: "Should a solar website show prices?",
        a: "Show a range and what moves it. Hiding cost entirely sends the visitors who came for a number straight to a competitor, and a range filters out people whose budget was never going to work, which saves everybody time.",
      },
      {
        q: "How many pages does a solar website need?",
        a: "Six to ten to start: homepage, core service pages, three service area pages, a costs page and an about page. Depth per page beats page count, and thin pages actively hurt.",
      },
      {
        q: "Do solar websites need a blog?",
        a: "Only if somebody will maintain it. An abandoned blog with three posts from two years ago signals a company that might not still exist. A blog that answers what buyers actually ask is genuinely valuable, but it is a commitment rather than a feature.",
      },
      {
        q: "What is the biggest mistake on solar websites?",
        a: "Writing for the company rather than the buyer. Pages about our commitment to sustainable energy instead of what it costs, how long it takes and who is coming to the house. See [solar website mistakes](/blog/solar-website-mistakes).",
      },
    ],
    related: [
      "what-to-put-on-a-solar-company-website",
      "how-to-increase-solar-website-conversion-rate",
      "solar-website-mistakes",
    ],
  },

  {
    slug: "how-to-increase-solar-website-conversion-rate",
    title: "How to increase your solar website conversion rate",
    metaTitle: "How to Increase Solar Website Conversion Rate",
    metaDescription:
      "Where solar website visitors drop off, the seven changes that raise conversion the most, and how to test each one properly at low traffic volumes.",
    keyword: "how to increase solar website conversion rate",
    secondary: [
      "solar conversion rate",
      "website conversion solar",
      "improve conversion rate",
      "solar cro",
    ],
    excerpt:
      "Doubling conversion halves your cost per lead on every channel at once. Seven changes, ordered by how much they move the number.",
    category: "website",
    intent: "Informational",
    icon: "cursor",
    published: "2026-07-20",
    answer:
      "Raise a solar website's conversion rate by answering the cost question on the page, cutting the enquiry form to four fields, putting real review counts above the fold, adding local proof, making the phone number tappable, loading in under three seconds, and offering one action per page rather than several.",
    takeaways: [
      "Conversion work is cheaper than traffic work and it improves every channel at once.",
      "The form is usually the biggest single leak. Four fields, not twelve.",
      "Answering cost on the page beats every persuasion technique.",
      "At low traffic, sequential testing beats A/B testing you cannot power.",
    ],
    body: [
      {
        t: "p",
        text: "If a site converts at 2% and you take it to 4%, you have halved your cost per lead on every channel simultaneously, without spending another pound on traffic. That is why conversion work comes before more advertising, and almost nobody does it in that order.",
      },

      { t: "h2", text: "Where do solar visitors actually drop off?" },
      {
        t: "table",
        head: ["Point", "Why they leave", "Fix"],
        rows: [
          ["First five seconds", "Cannot tell what you do or where", "One clear sentence, above the fold"],
          ["Cost question unanswered", "They came for a number", "Publish a range and what moves it"],
          ["Trust gap", "No reviews, no faces, no licence", "Real proof, high on the page"],
          ["The form", "Too long, too invasive", "Four fields"],
          ["On a phone", "Slow, or the number is not tappable", "Speed, and tel: links"],
          ["Decision moment", "Two competing actions", "One action per page"],
        ],
      },

      { t: "h2", text: "The seven changes, in order of impact" },
      {
        t: "steps",
        items: [
          {
            title: "Answer the cost question",
            body: "A range with the factors that move it. This is consistently the largest single lift available on a solar site, because it is the question the visitor arrived with and almost every competitor refuses to answer it.",
          },
          {
            title: "Cut the form to four fields",
            body: "Name, phone, address, bill range. Everything else moves to the qualification call. See [solar quote form best practices](/blog/solar-quote-form-best-practices).",
          },
          {
            title: "Put real proof above the fold",
            body: "Review count and rating as a number, not a star graphic. 4.8 from 214 reviews does work that no design element can.",
          },
          {
            title: "Add local evidence",
            body: "Town names, real installs, photos of roofs that look like the visitor's. Local proof outperforms national credibility for a trade purchase.",
          },
          {
            title: "Make the phone number tappable everywhere",
            body: "A tel: link in the header, on every page. A meaningful share of solar visitors would rather call than fill in anything, and a non-tappable number on a phone loses them.",
          },
          {
            title: "Get under three seconds on mobile",
            body: "Usually images and third-party scripts. See [page speed for solar websites](/blog/page-speed-for-solar-websites).",
          },
          {
            title: "One action per page",
            body: "Book a survey. Not book a survey, download a guide, sign up for the newsletter and chat with us. Every additional option lowers the odds of the main one.",
          },
        ],
      },
      {
        t: "callout",
        label: "The one most people resist",
        text: "Publishing a price range. The objection is always that every job is different, which is true and beside the point. The visitor is not asking for a quote, they are asking whether this is a five thousand or a twenty-five thousand decision. Refusing to say sends them to the site that will.",
      },

      { t: "h2", text: "Testing properly at solar traffic volumes" },
      {
        t: "p",
        text: "Most solar sites get too little traffic for a valid A/B test. A page with 400 visits a month cannot detect a modest lift in a reasonable timeframe, and stopping a test the moment one variant leads is how companies convince themselves of things that are not true.",
      },
      {
        t: "ol",
        items: [
          "**Test sequentially instead.** Change one thing, measure for a full month, compare to the previous month, keep or revert.",
          "**Start with the biggest changes.** Small refinements are unmeasurable at this volume; a form going from twelve fields to four is not.",
          "**Watch session recordings and heatmaps.** At low volume, watching twenty real sessions teaches you more than a statistically underpowered test.",
          "**Track enquiries, not clicks.** A button click that does not become a booked survey is not a conversion.",
          "**Account for seasonality.** Comparing December to June in solar will tell you something about the weather, not about your page.",
        ],
      },

      { t: "h2", text: "What conversion rate should you expect?" },
      {
        t: "p",
        text: "It depends heavily on traffic source, which is why a single site-wide number is close to meaningless. Branded and referral traffic converts far better than cold paid traffic, so a site whose mix shifts toward ads will see its overall rate fall while nothing about the site has changed.",
      },
      {
        t: "p",
        text: "Segment by source and compare each against itself over time. Then take the lift through to cost per sat appointment, which is where the value actually shows. See [how much do solar leads cost](/blog/how-much-do-solar-leads-cost).",
      },

      { t: "h2", text: "What happens after the form?" },
      {
        t: "p",
        text: "Conversion does not end at submission. A form that converts brilliantly and then leaves the enquiry unanswered for six hours has produced nothing, because the homeowner filled in two other forms as well.",
      },
      {
        t: "p",
        text: "The instant response is part of conversion, not a separate discipline. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },
      {
        t: "link",
        href: "/blog/solar-landing-page-best-practices",
        label: "Solar landing page best practices",
        note: "The same work, for paid traffic",
      },
    ],
    faq: [
      {
        q: "What is a good conversion rate for a solar website?",
        a: "It varies so much by traffic source that a single benchmark misleads. Branded and referral traffic converts several times better than cold paid traffic. Segment by source and measure your own trend rather than chasing an industry figure.",
      },
      {
        q: "Should I use a chat widget on a solar website?",
        a: "Only if somebody answers it within a minute during working hours. An unanswered chat widget intercepts enquiries that would otherwise have become phone calls and converts them into nothing.",
      },
      {
        q: "Do solar calculators improve conversion?",
        a: "Sometimes, when they give an honest answer without demanding contact details first. A calculator that collects an email before showing anything is a form wearing a costume, and visitors treat it accordingly.",
      },
    ],
    related: [
      "solar-quote-form-best-practices",
      "solar-landing-page-best-practices",
      "solar-company-website-design",
    ],
  },

  {
    slug: "solar-landing-page-best-practices",
    title: "Solar landing page best practices",
    metaTitle: "Solar Landing Page Best Practices for Paid Traffic",
    metaDescription:
      "How a solar landing page should differ from your homepage, the six elements it needs, message match with the ad, and the mistakes that waste ad spend.",
    keyword: "solar landing page best practices",
    secondary: [
      "solar landing page",
      "ppc landing page solar",
      "landing page for solar ads",
      "solar ad landing page",
    ],
    excerpt:
      "Sending paid solar traffic to your homepage wastes a third of it. What a landing page needs, and why message match matters more than design.",
    category: "website",
    intent: "Informational",
    icon: "browser",
    published: "2026-06-18",
    answer:
      "A solar landing page should match the promise of the ad that sent the visitor, carry one action and no navigation, answer the cost question, show local proof, and load in under three seconds. Sending paid traffic to a homepage instead typically wastes a meaningful share of the spend because the visitor has to find their own way.",
    takeaways: [
      "One page per ad group, matching the ad's promise word for word.",
      "Remove the navigation. A landing page has one exit and it is the form.",
      "Local proof and a cost range do more than any persuasion copy.",
      "Landing page quality directly lowers what you pay per click.",
    ],
    body: [
      {
        t: "p",
        text: "Paid traffic is expensive in solar: clicks run from single digits into the tens of pounds and raw leads from eighty upward. Where that traffic lands is therefore one of the highest-value decisions in the account, and most installers send it to the homepage.",
      },

      { t: "h2", text: "Why is the homepage the wrong destination?" },
      {
        t: "p",
        text: "A homepage serves everybody: existing customers, suppliers, job applicants, people who want the phone number, and prospects at every stage. That generality is exactly right for a homepage and exactly wrong for somebody who just clicked an ad about battery storage in a specific town.",
      },
      {
        t: "ul",
        items: [
          "**It offers too many paths.** Navigation, service pages, the about page, the blog. Every one is an exit from the action you paid for.",
          "**It does not match the ad.** Clicking an ad about batteries and landing on a general solar page creates a small doubt, and doubt costs conversion.",
          "**It cannot be specific.** A homepage cannot open with the town name and the exact service the ad promised.",
        ],
      },

      { t: "h2", text: "The six elements" },
      {
        t: "steps",
        items: [
          {
            title: "A headline that repeats the ad",
            body: "If the ad said battery storage in Fairview, the headline says battery storage in Fairview. This is message match and it is the highest-return element on the page, because it confirms the visitor is in the right place in under a second.",
          },
          {
            title: "One action, no navigation",
            body: "No header menu, no footer links, no blog. One form or one call button, repeated down the page. A landing page has exactly one exit.",
          },
          {
            title: "Proof, immediately",
            body: "Review count and rating as numbers, licence and insurance, years trading, local install count. Above the fold or just below it.",
          },
          {
            title: "The cost question, answered",
            body: "A range and what moves it. Paid visitors are the most price-curious of all, because they clicked an advert rather than seeking you out.",
          },
          {
            title: "A short form",
            body: "Four fields. Every additional field costs submissions, and on paid traffic each submission cost you real money to get. See [solar quote form best practices](/blog/solar-quote-form-best-practices).",
          },
          {
            title: "Speed",
            body: "Under three seconds on mobile. Slow landing pages waste ad spend twice: visitors leave, and quality scores fall so you pay more per click.",
          },
        ],
      },
      {
        t: "callout",
        label: "Message match, concretely",
        text: "Ad headline: Solar panel installation in Fairview. Landing page H1: Solar panel installation in Fairview. Not Welcome to Volt Solar, not Powering a brighter tomorrow. The same words. It looks unsophisticated and it consistently outperforms the clever version.",
      },

      { t: "h2", text: "How many landing pages do you need?" },
      {
        t: "p",
        text: "One per ad group, not one per campaign and not one for everything. If you are running battery storage, residential installation and EV chargers, that is three pages, each matching its own ads.",
      },
      {
        t: "table",
        head: ["Ad group", "Landing page", "Headline"],
        rows: [
          ["Residential solar install", "/solar-installation", "Solar panel installation in [area]"],
          ["Battery storage", "/battery-storage", "Home battery storage in [area]"],
          ["EV charger", "/ev-charger-installation", "EV charger installation in [area]"],
          ["Solar repair", "/solar-repair", "Solar system repair in [area]"],
        ],
      },
      {
        t: "p",
        text: "That is four pages covering most solar ad accounts. Beyond that you are creating maintenance work for diminishing returns.",
      },

      { t: "h2", text: "What wastes ad spend?" },
      {
        t: "ol",
        items: [
          "**Sending all traffic to the homepage.** The single most common and most expensive mistake.",
          "**Leaving the navigation on.** Every menu item is a paid visitor leaving without converting.",
          "**A twelve-field form on paid traffic.** You paid for the click; do not then make them work.",
          "**No tracking on the form submission.** Without conversion tracking the ad platform cannot optimise and you cannot measure. See [Google Ads for solar companies](/blog/google-ads-for-solar-companies).",
          "**A page that loads slowly.** It costs conversions and raises your cost per click at the same time.",
          "**Not answering the phone fast.** The best landing page in the industry produces nothing if the enquiry waits four hours.",
        ],
      },

      { t: "h2", text: "Testing a landing page" },
      {
        t: "p",
        text: "Paid traffic is the one place where solar companies sometimes have enough volume to test properly, because you control the flow. Even so, test big changes rather than button colours: headline, form length, and whether the price range is present.",
      },
      {
        t: "p",
        text: "And judge on cost per sat appointment rather than conversion rate. A page that converts at 12% and produces unqualified enquiries is worse than one at 7% that produces booked surveys. See [how to increase solar website conversion rate](/blog/how-to-increase-solar-website-conversion-rate).",
      },
      {
        t: "link",
        href: "/blog/solar-google-ads-cost-per-lead",
        label: "Solar Google Ads cost per lead",
        note: "What the page is protecting",
      },
    ],
    faq: [
      {
        q: "Should a solar landing page have navigation?",
        a: "No. Navigation gives paid visitors somewhere else to go, and you paid for them to do one thing. Keep a logo and a phone number in the header and nothing else.",
      },
      {
        q: "How long should a solar landing page be?",
        a: "Long enough to answer the cost question, prove you are real and explain what happens next. That is usually a medium-length page with the form repeated two or three times down it, not a single screen.",
      },
      {
        q: "Can I use my service pages as landing pages?",
        a: "Sometimes, if they are already specific and conversion-focused. The two differences that matter are removing navigation for paid traffic and matching the ad headline, and both can be handled with paid-specific versions of the same page.",
      },
    ],
    related: [
      "how-to-increase-solar-website-conversion-rate",
      "google-ads-for-solar-companies",
      "solar-quote-form-best-practices",
    ],
  },

  {
    slug: "solar-quote-form-best-practices",
    title: "Solar quote form best practices",
    metaTitle: "Solar Quote Form Best Practices: Four Fields, Not Twelve",
    metaDescription:
      "Which fields belong on a solar quote form, which kill submissions, multi-step versus single, and what to do the moment the form is submitted.",
    keyword: "solar quote form best practices",
    secondary: [
      "solar quote form",
      "solar contact form",
      "lead capture form",
      "solar enquiry form",
    ],
    excerpt:
      "Every field you add costs submissions. Here are the four worth keeping, the ones that belong on the call, and what happens next.",
    category: "website",
    intent: "Informational",
    icon: "checklist",
    published: "2026-05-25",
    answer:
      "A solar quote form should ask for four things: name, phone number, property address and a monthly electricity bill range. Everything else, including roof details, shading, timeline and financing interest, belongs on the qualification call, where you can ask follow-up questions rather than losing the submission to a dropdown.",
    takeaways: [
      "Four fields. Name, phone, address, bill range.",
      "Bill range as buttons, not a number field. Faster and accurate enough.",
      "Email is optional. Phone is the field that matters in solar.",
      "The form is not finished until an automatic reply goes out in under a minute.",
    ],
    body: [
      {
        t: "p",
        text: "The quote form is where most solar websites quietly lose the visitors they worked hardest to get. Every field is a small tax, and most solar forms charge twelve of them before anybody has agreed to anything.",
      },

      { t: "h2", text: "Which fields should a solar quote form ask for?" },
      {
        t: "table",
        head: ["Field", "Why it stays", "Format"],
        rows: [
          ["Name", "You have to address them", "First name only is enough"],
          ["Phone", "The channel that actually converts solar", "One field, forgiving validation"],
          ["Property address", "Qualifies service area and enables remote roof review", "Autocomplete if possible"],
          ["Monthly bill range", "The best single predictor of a viable job", "Buttons, four or five bands"],
        ],
      },
      {
        t: "p",
        text: "Those four qualify hard on the two things that eliminate most waste: are they in your area, and is the bill big enough for solar to make sense. Everything else is better asked by a person. See [how to qualify solar leads](/blog/how-to-qualify-solar-leads).",
      },

      { t: "h2", text: "What should you take off?" },
      {
        t: "ul",
        items: [
          "**Email**, or make it optional. In solar the phone is the channel that converts, and requiring an email costs submissions from people who would happily take a call.",
          "**Roof type, age and pitch.** Half of homeowners do not know, and being asked something they cannot answer makes them abandon rather than guess.",
          "**Shading questions.** You can see this from satellite imagery before you ring them.",
          "**Timeline dropdowns.** Almost everybody selects the vaguest option, so it adds a field and no information.",
          "**Utility provider.** Derivable from the address.",
          "**How did you hear about us.** Ask on the call, and track the source automatically instead.",
          "**Message or comments box.** Optional at most. A required one is a blank page problem at the last step.",
        ],
      },
      {
        t: "callout",
        label: "The test for any field",
        text: "Would you rather have this answer, or would you rather have the submission? For almost every field beyond the four, the honest answer is the submission, because you will get the answer on the call anyway.",
      },

      { t: "h2", text: "Do multi-step forms work?" },
      {
        t: "p",
        text: "Multi-step forms often outperform single-page ones with the same number of fields, because the first step feels trivial and the commitment builds. In solar, the effective pattern is to ask the bill range first, then the address, then the contact details.",
      },
      {
        t: "ol",
        items: [
          "**Step one: the bill range.** Four buttons, no typing. Nearly everybody completes this.",
          "**Step two: the address.** With autocomplete so it is two taps.",
          "**Step three: name and phone.** By now they have invested two steps and completion is high.",
        ],
      },
      {
        t: "p",
        text: "Capture partial submissions if your platform allows it. Somebody who gave a bill range and an address and then stopped is a real lead worth a call, and most forms throw that away entirely.",
      },

      { t: "h2", text: "The details that quietly matter" },
      {
        t: "ul",
        items: [
          "**A specific button label.** Book my free survey beats Submit by a wide margin.",
          "**Forgiving phone validation.** Rejecting a number because of a space is a genuinely common way to lose leads.",
          "**No captcha unless you must.** It costs real submissions. Use a honeypot field instead where you can.",
          "**A real thank-you page**, saying what happens next and by when. Not an inline message that scrolls away.",
          "**Working autofill.** Properly labelled fields let a phone fill most of the form in one tap.",
          "**A tappable phone number beside the form**, for the people who would rather call.",
        ],
      },

      { t: "h2", text: "What happens after submit?" },
      {
        t: "p",
        text: "The form is not finished when it submits. A form that captures beautifully and then leaves the enquiry sitting for four hours has produced nothing, because that homeowner filled in two other forms this evening.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Under 60 seconds: automatic text",
            body: "From a named person, acknowledging the enquiry, promising a call with a time on it, ending in one easy question.",
          },
          {
            title: "Under 60 seconds: automatic email",
            body: "What happens next, roughly how long the survey takes, and something genuinely useful about local payback.",
          },
          {
            title: "Under 5 minutes: a human call",
            body: "The single highest-return process change available. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
          },
          {
            title: "Into the sequence",
            body: "If no contact, the eight-touch follow-up starts automatically rather than depending on somebody remembering.",
          },
        ],
      },
      { t: "h2", text: "Handling the enquiries you did not want" },
      {
        t: "p",
        text: "A short form produces more submissions, and some of them will be people you cannot help: renters, properties outside your area, roofs that will not take a system. That is the trade, and it is a good one, because a fast no costs a phone call and a hidden yes costs a job.",
      },
      {
        t: "ul",
        items: [
          "**Disqualify on the call, kindly and quickly.** Two minutes, an honest explanation, and an offer of something useful.",
          "**Ask for a referral anyway.** A renter knows homeowners, and calls that end in a no produce more referrals than people expect.",
          "**Keep the record.** A renter today is a homeowner in four years, and a roof that needs replacing first is a future job with a date on it.",
          "**Watch the ratio.** If more than about a third of enquiries are unusable, tighten the targeting upstream rather than lengthening the form.",
        ],
      },
      {
        t: "p",
        text: "That last point is the important one. A long form is a way of making the visitor do your qualification for you, and they will not. Fix the targeting instead and keep the form short.",
      },
      {
        t: "link",
        href: "/blog/how-to-increase-solar-website-conversion-rate",
        label: "How to increase solar website conversion rate",
        note: "The form is usually the biggest single leak",
      },
    ],
    faq: [
      {
        q: "How many fields should a solar quote form have?",
        a: "Four: name, phone, address and bill range. Each additional field costs submissions, and almost everything else can be asked on the qualification call where you can ask follow-ups.",
      },
      {
        q: "Should I ask for an email address?",
        a: "Make it optional. In solar the phone is the channel that converts, and requiring an email loses submissions from people who would have happily taken a call within the hour.",
      },
      {
        q: "Are multi-step forms better for solar?",
        a: "Usually, yes, when the easy question comes first. Starting with a bill range as buttons gets people committed before they are asked to type anything, and partial submissions are still callable leads.",
      },
    ],
    related: [
      "how-to-increase-solar-website-conversion-rate",
      "how-to-qualify-solar-leads",
      "solar-landing-page-best-practices",
    ],
  },

  {
    slug: "how-much-does-a-solar-company-website-cost",
    title: "How much does a solar company website cost?",
    metaTitle: "How Much Does a Solar Company Website Cost?",
    metaDescription:
      "Real price bands for a solar company website, what changes the number, the ongoing costs nobody quotes, and how to judge whether it was worth it.",
    keyword: "how much does a solar company website cost",
    secondary: [
      "solar website cost",
      "contractor website cost",
      "website pricing",
      "cost of a website",
    ],
    excerpt:
      "Four price bands, what you actually get in each, and the ongoing costs that never appear on the quote.",
    category: "website",
    intent: "Commercial",
    icon: "tag",
    published: "2026-05-01",
    answer:
      "A solar company website typically costs from a few hundred for a template build to five figures for a custom site with content and SEO included. The number is driven mainly by who writes the content, whether local SEO is part of it, and who maintains it afterwards, rather than by the design itself.",
    takeaways: [
      "Design is rarely the expensive part. Content and SEO are.",
      "Ask what happens in month two. Unmaintained sites decay fast.",
      "Ownership matters. Find out who holds the domain and the files before you pay.",
      "Judge it on booked surveys per month, not on how it looks.",
    ],
    body: [
      {
        t: "p",
        text: "Website pricing is opaque because the phrase covers wildly different products. The same request produces quotes an order of magnitude apart, and the difference is usually not design quality.",
      },

      { t: "h2", text: "What does a solar company website cost?" },
      {
        t: "table",
        head: ["Band", "What you get", "Who it suits"],
        rows: [
          [
            "DIY builder",
            "A template, your own writing, a few days of your time",
            "A brand new installer testing whether the business works",
          ],
          [
            "Freelance build",
            "A customised template, some copy help, basic setup",
            "Established installers who know what they want",
          ],
          [
            "Agency build",
            "Custom design, written content, local SEO, tracking",
            "Companies where the site is a main lead source",
          ],
          [
            "Ongoing system",
            "Site plus the follow-up, review and SEO work, monthly",
            "Companies that want it maintained rather than delivered",
          ],
        ],
      },
      {
        t: "p",
        text: "The gap between band two and band three is almost entirely content and SEO. A beautiful site with copy written by somebody who has never spoken to a homeowner will lose to a plain one that answers the cost question.",
      },

      { t: "h2", text: "What actually moves the price?" },
      {
        t: "ol",
        items: [
          "**Who writes the content.** The single biggest variable. Writing ten pages properly takes real time and it is what most quotes quietly exclude.",
          "**Whether local SEO is included.** Service area pages, Business Profile work, citations and schema. Frequently sold separately and frequently the reason a site produces nothing.",
          "**Page count.** Ten good pages, not thirty thin ones.",
          "**Photography.** Real install photos beat stock, and somebody has to take them.",
          "**Integrations.** Forms into a CRM, tracking, call tracking, booking.",
          "**Who maintains it afterwards.** The cost that never appears on the build quote.",
        ],
      },
      {
        t: "callout",
        label: "The question that reveals the most",
        text: "Ask a prospective builder what happens in month two. If the answer is nothing, you are buying a brochure. Websites that produce leads need content added, reviews displayed, and profile work continuing, and none of that is in a build fee.",
      },

      { t: "h2", text: "What are the ongoing costs nobody quotes?" },
      {
        t: "ul",
        items: [
          "**Hosting and domain.** Small, unavoidable, and occasionally forgotten until the site goes down.",
          "**Maintenance and updates.** Platform and plugin updates, or the site breaks eventually.",
          "**Content.** New pages, refreshed pages, and the blog if you have one.",
          "**Local SEO.** The weekly and monthly work in [the solar company SEO checklist](/blog/solar-company-seo-checklist).",
          "**Changes.** Prices, services, team, service areas. A site nobody can edit becomes wrong within a year.",
        ],
      },
      {
        t: "p",
        text: "A site that is never touched after launch loses ground steadily, because competitors are adding pages and reviews while yours stands still. Budget for the year, not for the build.",
      },

      { t: "h2", text: "What to check before you pay" },
      {
        t: "steps",
        items: [
          {
            title: "Who owns the domain",
            body: "It should be registered to you, in an account you control. Agencies holding client domains is common and it is a problem exactly when the relationship ends.",
          },
          {
            title: "Who owns the site files",
            body: "Can you take the site elsewhere, or is it locked into a proprietary builder? Both are workable, as long as you know which you bought.",
          },
          {
            title: "Can you edit it yourself",
            body: "Prices and service areas change. Needing a support ticket for a phone number is a slow tax forever.",
          },
          {
            title: "Is tracking installed",
            body: "Analytics, Search Console, conversion tracking on the form. A site with no measurement cannot be judged, and that suits the wrong kind of builder.",
          },
          {
            title: "What is the actual page list",
            body: "Get it in writing before work starts. This is where quotes and expectations most often diverge.",
          },
        ],
      },

      { t: "h2", text: "Judging whether it was worth it" },
      {
        t: "p",
        text: "Not on how it looks. On booked surveys per month attributable to organic and direct traffic, and on the conversion rate of the traffic it does receive.",
      },
      {
        t: "p",
        text: "At typical solar job values, a site producing two extra booked surveys a month pays for almost any build within a year. One producing none is expensive at any price, which is why the content and SEO line items matter more than the design fee. See [solar company website design](/blog/solar-company-website-design) and [how to increase solar website conversion rate](/blog/how-to-increase-solar-website-conversion-rate).",
      },
      { t: "h2", text: "Build fee or monthly?" },
      {
        t: "p",
        text: "Two commercial shapes exist and they suit different companies. Neither is a trick, and confusing them is where most disappointment comes from.",
      },
      {
        t: "table",
        head: ["", "One-off build fee", "Monthly system"],
        rows: [
          ["You pay", "Once, up front", "Every month"],
          ["You get", "A site, delivered", "A site, plus the work that keeps it producing"],
          ["Ownership", "Usually yours outright", "Check the terms carefully"],
          ["Month two", "Nothing happens unless you pay again", "Content, reviews, profile work continue"],
          ["Suits", "Companies with someone in-house to maintain it", "Companies with nobody to maintain it"],
        ],
      },
      {
        t: "p",
        text: "The question that decides it is honest and simple: who is going to add the next page, reply to the reviews and post to the profile in March? If the answer is nobody, a build fee buys you a site that is at its best on launch day and declines from there.",
      },
      {
        t: "link",
        href: "/pricing",
        label: "How Volt prices it",
        note: "Site, follow-up, reviews and SEO, one monthly fee",
      },
    ],
    faq: [
      {
        q: "Is an expensive solar website worth it?",
        a: "Only if the extra cost is buying content, local SEO and ongoing maintenance rather than visual polish. Judge it on booked surveys per month, which is a number you can check within a quarter.",
      },
      {
        q: "Should I build my solar website myself?",
        a: "It is a reasonable start for a new installer with more time than money, and the limiting factor is usually the writing rather than the building. Get the Business Profile and reviews right first either way, because those produce leads sooner.",
      },
      {
        q: "How often does a solar website need rebuilding?",
        a: "Rarely, if it is maintained. Most sites that feel like they need rebuilding actually need content, reviews and speed work, which costs far less than a rebuild and produces more.",
      },
    ],
    related: [
      "solar-company-website-design",
      "what-to-put-on-a-solar-company-website",
      "page-speed-for-solar-websites",
    ],
  },

  {
    slug: "what-to-put-on-a-solar-company-website",
    title: "What to put on a solar company website",
    metaTitle: "What to Put on a Solar Company Website",
    metaDescription:
      "The page-by-page contents of a solar website that books surveys, what belongs on each of them, and the four pages that are not worth building at all.",
    keyword: "what to put on a solar company website",
    secondary: [
      "solar website content",
      "website pages solar",
      "solar site structure",
      "contractor website content",
    ],
    excerpt:
      "A page-by-page contents list for a solar site. Ten pages, what goes on each, and the four pages not worth building.",
    category: "website",
    intent: "Informational",
    icon: "browser",
    published: "2026-04-07",
    answer:
      "A solar company website needs ten pages: a homepage, one page per core service, three service area pages, a costs page, an about page with real people, and a contact page. Each should carry proof, a cost indication and one booking action. Pages about industry trends and company news are not worth building.",
    takeaways: [
      "Ten pages is a complete solar website. Thirty thin ones is a liability.",
      "The costs page is the one almost nobody builds and buyers most want.",
      "The about page does more selling than owners expect in a trust purchase.",
      "Every page carries proof and the same single action.",
    ],
    body: [
      {
        t: "p",
        text: "Solar websites usually have either four pages or forty. Four is too thin to rank or to answer anything; forty is unmaintained within a year. Ten, written properly, is a complete website.",
      },

      { t: "h2", text: "What goes on the homepage?" },
      {
        t: "ul",
        items: [
          "**What you do and where**, in one sentence, above the fold.",
          "**One action**, repeated down the page.",
          "**Proof high up**: review count and rating as numbers, licence, insurance, years trading, local install count.",
          "**A cost range**, with what moves it.",
          "**The process**, briefly, with rough timings.",
          "**Links to the service pages and the main service areas.**",
          "**Real photographs** of your crews and your installs, not stock.",
        ],
      },

      { t: "h2", text: "Service pages, one per service" },
      {
        t: "p",
        text: "Residential installation, battery storage, EV charger installation, and repair or maintenance. Four pages, each answering the same questions about that one service.",
      },
      {
        t: "table",
        head: ["Section", "What it covers"],
        rows: [
          ["What it is", "Plainly, for somebody who does not know"],
          ["Who it suits", "And, honestly, who it does not"],
          ["What it costs", "A range and the factors that move it"],
          ["How long it takes", "Survey to commissioning, realistically"],
          ["What is included", "Equipment, labour, warranty, paperwork"],
          ["Proof", "Photos and a review specific to that service"],
          ["The action", "The same booking route as every other page"],
        ],
      },

      { t: "h2", text: "The costs page" },
      {
        t: "p",
        text: "The page most solar companies refuse to build and most visitors are looking for. It does not need to quote your prices exactly. It needs to answer the question honestly enough that somebody can tell whether to keep reading.",
      },
      {
        t: "ol",
        items: [
          "**Typical ranges by system size**, for your area.",
          "**What moves the number**: roof type, access, electrical work, battery, scaffolding.",
          "**What is included and excluded** in a typical quote.",
          "**Financing**, if you offer it, with a monthly figure rather than only a capital cost.",
          "**Payback**, honestly, with the assumptions stated.",
        ],
      },
      {
        t: "callout",
        label: "Why this page wins",
        text: "Buyers searching solar panel cost plus a town name are high intent and poorly served, because almost every installer hides the number. Publishing a range is both the most useful page on your site and one of the easiest to rank.",
      },

      { t: "h2", text: "Service area pages" },
      {
        t: "p",
        text: "Three to start, for the towns you most want work in. Each needs genuine local specifics: a real install, the local utility, the permitting position, a review from that area. See [how to write solar service area pages](/blog/how-to-write-solar-service-area-pages).",
      },

      { t: "h2", text: "The about page" },
      {
        t: "p",
        text: "In most industries the about page is ignored. In a trust purchase involving roof access and a twenty year warranty, it is one of the most visited pages on the site, and it is usually the emptiest.",
      },
      {
        t: "ul",
        items: [
          "**Who runs the company**, with names and photographs of actual people.",
          "**How long you have been installing**, and roughly how many systems.",
          "**Whether crews are employed or subcontracted.** Buyers ask this and answering it up front is a genuine advantage.",
          "**Certifications and memberships**, with numbers where they exist.",
          "**Where you are based**, with a real address.",
        ],
      },

      { t: "h2", text: "What should you not build?" },
      {
        t: "ol",
        items: [
          "**A company news page.** Nobody outside the company reads it and an empty one signals a company that has stopped.",
          "**Generic explainers about how solar works.** Manufacturers and publishers own those terms and the traffic does not convert for an installer. See [solar SEO keywords](/blog/solar-seo-keywords).",
          "**A testimonials page with anonymous quotes.** Link to your real reviews instead. Unverifiable praise reads as invented.",
          "**A gated resources section.** A form standing between a homeowner and a PDF costs you more enquiries than the email addresses are worth.",
        ],
      },
      {
        t: "p",
        text: "Ten pages, each with proof, a cost indication and one action. That is a website that books surveys, and it is achievable in weeks rather than months. See [solar company website design](/blog/solar-company-website-design).",
      },
      { t: "h2", text: "The contact page, which is usually an afterthought" },
      {
        t: "p",
        text: "It is one of the most visited pages on any contractor site and it is almost always the thinnest. Five things belong on it.",
      },
      {
        t: "ol",
        items: [
          "**A phone number, tappable**, at the top, before anything else.",
          "**The four-field form**, not a twelve-field one. See [solar quote form best practices](/blog/solar-quote-form-best-practices).",
          "**Your actual address and hours**, because a homeowner is checking you are real and local.",
          "**What happens after they contact you**, with a time on it. We answer within the hour during working hours.",
          "**The service areas you cover**, so nobody wastes a call and nobody assumes you are too far away.",
        ],
      },
      {
        t: "p",
        text: "What does not belong on it is a map that takes two seconds to load and a form that asks for a roof pitch. The page has one job and it is the easiest job on the site to do well.",
      },
      {
        t: "link",
        href: "/blog/solar-website-mistakes",
        label: "Solar website mistakes",
        note: "What to avoid while building all of it",
      },
    ],
    faq: [
      {
        q: "Does a solar website need a costs page?",
        a: "It is the highest-value page most solar companies do not have. Buyers search for cost constantly and almost nobody answers, so a page with honest ranges tends to rank quickly and convert well.",
      },
      {
        q: "Should I list all the brands I install?",
        a: "Briefly, on the relevant service page. Homeowners rarely choose on brand and a wall of manufacturer logos takes space from proof that would do more work.",
      },
      {
        q: "How much content does each page need?",
        a: "Enough to answer the question completely, which is usually 600 to 1,200 words for a service or area page. Write to the question rather than to a word count, and cut anything that is there to fill space.",
      },
    ],
    related: [
      "solar-company-website-design",
      "solar-website-mistakes",
      "how-to-write-solar-website-copy",
    ],
  },

  {
    slug: "solar-website-mistakes",
    title: "Solar website mistakes that cost leads",
    metaTitle: "Solar Website Mistakes That Quietly Cost You Leads",
    metaDescription:
      "Twelve mistakes common to solar company websites, why each one quietly costs enquiries, and the fix for it, ordered by how much damage each one does.",
    keyword: "solar website mistakes",
    secondary: [
      "website mistakes",
      "solar site problems",
      "common website errors",
      "contractor website mistakes",
    ],
    excerpt:
      "Twelve mistakes, ordered by damage. Most solar sites have at least six of them and none of them are visible in a design review.",
    category: "website",
    intent: "Informational",
    icon: "browser",
    published: "2026-03-10",
    answer:
      "The most costly solar website mistakes are hiding the price, using a long enquiry form, showing no real proof, writing about the company instead of the buyer, loading slowly on mobile, offering several competing actions, and not answering enquiries quickly. Each one loses visitors who had already decided they were interested.",
    takeaways: [
      "Most of these are invisible in a design review and obvious in the analytics.",
      "Hiding price and a long form are the two biggest leaks, consistently.",
      "Stock photography of smiling families is recognised and it costs trust.",
      "A fast site with plain copy beats a beautiful slow one every time.",
    ],
    body: [
      {
        t: "p",
        text: "These are ordered by how much they cost, not by how often they get mentioned. The expensive ones are all quiet: nobody complains, the visitor simply leaves and clicks the next result.",
      },

      { t: "h2", text: "Which solar website mistakes cost the most?" },
      {
        t: "steps",
        items: [
          {
            title: "Hiding the price",
            body: "The visitor came with one question and you refused to answer it. Publish a range and what moves it. This is the largest single leak on most solar sites and the easiest to fix in an afternoon.",
          },
          {
            title: "A twelve-field enquiry form",
            body: "Roof type, age, pitch, shading, timeline, financing interest, how they heard about you. Most of those they cannot answer and none of them need answering before a phone call. Four fields. See [solar quote form best practices](/blog/solar-quote-form-best-practices).",
          },
          {
            title: "No real proof",
            body: "No review count, no licence number, no photographs of actual crews. A homeowner about to let strangers on their roof is looking for exactly these, and their absence reads as a reason to keep looking.",
          },
          {
            title: "Writing about yourself",
            body: "Our commitment to a sustainable future, our passion for renewable energy. The buyer wants cost, timeline, who is coming and what happens if it goes wrong. See [how to write solar website copy](/blog/how-to-write-solar-website-copy).",
          },
        ],
      },

      { t: "h2", text: "The four that cost steadily" },
      {
        t: "table",
        head: ["Mistake", "Why it costs", "Fix"],
        rows: [
          [
            "Slow on mobile",
            "Visitors leave before it renders, and ad costs rise",
            "Compress images, cut scripts. See page speed",
          ],
          [
            "Several competing actions",
            "Call, form, chat, download, newsletter. Choice lowers action",
            "One action per page",
          ],
          [
            "Stock photography",
            "Instantly recognisable, and it undermines real proof beside it",
            "Your own installs and crews, phone photos are fine",
          ],
          [
            "Untappable phone number",
            "On a phone, a number you cannot tap is a number nobody rings",
            "tel: links everywhere",
          ],
        ],
      },

      { t: "h2", text: "The four that are quietly structural" },
      {
        t: "ol",
        items: [
          "**No service area pages.** You cannot rank for towns you never mention, and a list of towns in the footer is not a page. See [how to write solar service area pages](/blog/how-to-write-solar-service-area-pages).",
          "**Thin templated pages.** Fifty town pages with the name swapped is a liability rather than an asset, and it can drag the whole site.",
          "**No tracking.** No analytics, no Search Console, no conversion tracking on the form. You cannot improve what you cannot see, and this is surprisingly common.",
          "**Nothing changed since launch.** An abandoned site loses ground steadily while competitors add pages and reviews. Standing still is moving backwards here.",
        ],
      },
      {
        t: "callout",
        label: "The mistake that undoes all the fixes",
        text: "Not answering quickly. A perfectly built site that generates an enquiry at 7pm which nobody reads until 9am the next day has produced nothing, because the homeowner filled in two other forms that evening. See [speed to lead for solar companies](/blog/speed-to-lead-for-solar-companies).",
      },

      { t: "h2", text: "How do you audit your own site in twenty minutes?" },
      {
        t: "steps",
        items: [
          {
            title: "Open it on a phone, on mobile data",
            body: "Not on the office wifi on a desktop. Time how long until you can read something. Over three seconds is a problem.",
          },
          {
            title: "Find the price in under ten seconds",
            body: "If you cannot, neither can a visitor, and they have less patience and no loyalty.",
          },
          {
            title: "Count the fields on your form",
            body: "Over five is costing submissions. Over eight is costing most of them.",
          },
          {
            title: "Count the actions on the homepage",
            body: "More than one primary action means the primary one is weaker than it should be.",
          },
          {
            title: "Submit your own form and time the response",
            body: "This is the test that most often produces a genuinely uncomfortable result, and it is the cheapest one to fix.",
          },
        ],
      },
      {
        t: "p",
        text: "Five checks, twenty minutes, and it will find more than a design review would. Fix in the order above: they are already sorted by cost.",
      },
      { t: "h2", text: "The mistakes that are not really mistakes" },
      {
        t: "p",
        text: "Some things get flagged in website reviews that do not actually cost a solar company anything, and chasing them uses up the attention the list above needs.",
      },
      {
        t: "ul",
        items: [
          "**An older-looking design.** If it is fast, clear and proves you are real, dated styling costs far less than people assume. Homeowners are checking whether you are trustworthy, not whether you are fashionable.",
          "**Not having a blog.** Only a problem if a competitor is answering buyer questions and you are not. An abandoned blog is worse than none.",
          "**A short homepage.** Length is not the metric. Whether the six questions are answered somewhere on the site is.",
          "**Not being on every social platform.** Links in the footer to three dormant profiles help nobody.",
        ],
      },
      {
        t: "p",
        text: "Spend the effort on price transparency, form length, proof and speed instead. Those four move enquiries; the four above mostly move opinions.",
      },
      {
        t: "link",
        href: "/blog/solar-company-website-design",
        label: "Solar company website design",
        note: "What to build instead",
      },
    ],
    faq: [
      {
        q: "What is the biggest mistake on solar websites?",
        a: "Hiding the price. It is the question most visitors arrived with, and refusing to answer it sends them to whichever competitor will. A range with the factors that move it is enough.",
      },
      {
        q: "Are stock photos really that damaging?",
        a: "Yes, more than owners expect. Buyers recognise them, and a stock family on a lawn sitting next to your real review count makes the real part look less real too. A phone photo of your own crew beats professional stock.",
      },
      {
        q: "How do I know if my site is losing leads?",
        a: "Compare traffic to enquiries. If a few hundred monthly visitors produce almost nothing, the leak is on the page rather than in the traffic. Session recordings will usually show you exactly where people stop.",
      },
    ],
    related: [
      "solar-company-website-design",
      "how-to-increase-solar-website-conversion-rate",
      "page-speed-for-solar-websites",
    ],
  },

  {
    slug: "how-to-write-solar-website-copy",
    title: "How to write solar website copy",
    metaTitle: "How to Write Solar Website Copy That Converts",
    metaDescription:
      "How to write solar copy homeowners actually read: the questions to answer, the words to cut, the structure per page, and how to sound like a person.",
    keyword: "how to write solar website copy",
    secondary: [
      "solar copywriting",
      "solar website content writing",
      "website copy contractors",
      "solar marketing copy",
    ],
    excerpt:
      "Most solar copy is written for the company. Here is how to write it for the homeowner, with the words to cut and the questions to answer.",
    category: "website",
    intent: "Informational",
    icon: "cursor",
    published: "2026-02-10",
    answer:
      "Write solar website copy by answering the six questions every homeowner has: what it costs, how long it takes, who is coming to the house, what happens if something breaks, why you rather than the other three, and what to do next. Write it in the words customers use, not the words the industry uses.",
    takeaways: [
      "Answer the six questions, in that order, on every relevant page.",
      "Use the customer's vocabulary. Nobody searches for photovoltaic solutions.",
      "Specific beats persuasive. A real number outperforms an adjective every time.",
      "Read it out loud. If you would not say it at a front door, cut it.",
    ],
    body: [
      {
        t: "p",
        text: "Solar copy fails in a particular way. It is grammatical, professional, and about the wrong subject. Our commitment to a sustainable future is a sentence about the company, and the homeowner reading it wants to know what this costs and who is going to be on their roof.",
      },

      { t: "h2", text: "What six questions should the copy answer?" },
      {
        t: "p",
        text: "Every page should answer as many of these as apply, in roughly this order. If a paragraph does not serve one of them, it is decoration.",
      },
      {
        t: "table",
        head: ["Question", "What a good answer looks like"],
        rows: [
          ["What does it cost?", "A range with the factors that move it, not from £X"],
          ["How long does it take?", "Survey to commissioning, with the waiting honestly included"],
          ["Who is coming to my house?", "Employed crews or subcontractors, named people, photographs"],
          ["What if something goes wrong?", "Warranty terms in plain words, and who to call"],
          ["Why you?", "Something specific and checkable, not adjectives"],
          ["What do I do next?", "One action, stated plainly"],
        ],
      },

      { t: "h2", text: "Write in their words" },
      {
        t: "p",
        text: "Homeowners do not say photovoltaic array, energy independence, or bespoke renewable solutions. They say solar panels, my electricity bill, and how long until it pays for itself.",
      },
      {
        t: "ul",
        items: [
          "**Read your own enquiry forms and call notes.** The language your customers use is the language they search with.",
          "**Read your Google reviews.** Customers describe what mattered to them in their own words, for free.",
          "**Read the questions your sales team answers daily.** Those are the page sections you are missing.",
          "**Search your main terms** and read what actually ranks. Not to copy it, but to see the vocabulary the market uses.",
        ],
      },
      {
        t: "callout",
        label: "The front door test",
        text: "Read the paragraph out loud and ask whether you would say it, in those words, standing on somebody's doorstep. We deliver bespoke renewable energy solutions tailored to your needs fails. We will tell you what it costs and whether your roof is any good passes.",
      },

      { t: "h2", text: "Specific beats persuasive" },
      {
        t: "p",
        text: "Adjectives are what you write when you do not have a fact. Every competitor claims to be experienced, professional and trusted, so none of those words carry information.",
      },
      {
        t: "ol",
        items: [
          "**Not** experienced installers. **Instead:** 340 systems installed across the county since 2019.",
          "**Not** fast turnaround. **Instead:** survey within five days, install usually four to six weeks after the permit.",
          "**Not** highly rated. **Instead:** 4.8 from 214 Google reviews.",
          "**Not** competitive pricing. **Instead:** most homes here land between £X and £Y depending on roof size.",
          "**Not** fully qualified. **Instead:** the actual certification names and numbers.",
        ],
      },
      {
        t: "p",
        text: "Every one of those is checkable, which is precisely why it works. A claim a buyer could verify is worth more than one they cannot, even when they never check.",
      },

      { t: "h2", text: "Which words should you cut?" },
      {
        t: "p",
        text: "Some of these are industry habit and some are marketing habit. All of them cost you nothing to remove.",
      },
      {
        t: "ul",
        items: [
          "**Solutions.** Nobody buys a solution. They buy panels on a roof.",
          "**State of the art, industry leading, next generation.** Claims without content.",
          "**Passionate, committed, dedicated.** True of everybody, therefore informative about nobody.",
          "**Bespoke and tailored.** Every solar install is designed for the roof. Saying so is not a differentiator.",
          "**Energy independence.** A homeowner wants a lower bill, and saying it plainly is stronger.",
          "**Free consultation**, where the word free is doing all the work. Say what happens in it instead.",
        ],
      },

      { t: "h2", text: "How should each page be structured?" },
      {
        t: "steps",
        items: [
          {
            title: "Headline: what this page is about, plainly",
            body: "Solar panel installation in Fairview. Not Powering Fairview's future. The plain version also happens to be the one that ranks.",
          },
          {
            title: "First paragraph: answer the main question",
            body: "Do not build up to it. The first forty words should contain the actual answer, which is also what a search engine lifts for a snippet.",
          },
          {
            title: "Middle: the six questions, with subheadings",
            body: "One subheading per question, worded the way a customer would ask it. Scannable, because most people scan.",
          },
          {
            title: "Proof, woven through",
            body: "A real install after the process section. A review after the price section. Proof next to the claim it supports, not quarantined on a testimonials page.",
          },
          {
            title: "One action at the end, and one in the middle",
            body: "The same action. Not three different ones.",
          },
        ],
      },
      {
        t: "p",
        text: "Write it once like this and it does double duty: it answers what buyers ask, which is also what search engines are trying to reward. See [solar SEO keywords](/blog/solar-seo-keywords) and [what to put on a solar company website](/blog/what-to-put-on-a-solar-company-website).",
      },
      {
        t: "link",
        href: "/blog/solar-website-mistakes",
        label: "Solar website mistakes",
        note: "What the copy is usually competing with",
      },
    ],
    faq: [
      {
        q: "How long should solar website copy be?",
        a: "Long enough to answer the six questions and no longer. That is usually 600 to 1,200 words for a service or area page. Write to the questions rather than to a word count and cut anything filling space.",
      },
      {
        q: "Should I write my own solar website copy?",
        a: "You are better placed than most writers, because you know the answers and the objections. If writing is genuinely painful, dictate answers to the six questions and have somebody tidy them. The facts matter more than the prose.",
      },
      {
        q: "Does keyword placement still matter in copy?",
        a: "Put the main term in the headline, the first paragraph and one subheading, then write normally. Density targets and repetition are counterproductive, and the more useful discipline is answering the question completely.",
      },
    ],
    related: [
      "what-to-put-on-a-solar-company-website",
      "solar-website-mistakes",
      "solar-company-website-design",
    ],
  },

  {
    slug: "page-speed-for-solar-websites",
    title: "Page speed for solar websites",
    metaTitle: "Page Speed for Solar Websites: What Actually Matters",
    metaDescription:
      "Why solar websites load slowly, which metrics matter, the five fixes that produce most of the gain, and how speed affects both leads and ad costs.",
    keyword: "page speed for solar websites",
    secondary: [
      "website speed",
      "core web vitals",
      "site performance",
      "mobile page speed",
    ],
    excerpt:
      "Slow sites lose visitors before the design loads and raise what you pay per click. Five fixes cover most of the problem.",
    category: "website",
    intent: "Informational",
    icon: "gauge",
    published: "2026-01-25",
    answer:
      "Page speed matters for solar websites because most visitors arrive on a phone on mobile data and leave if the page takes more than about three seconds. The three metrics worth tracking are Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift, and oversized images cause most solar site slowness.",
    takeaways: [
      "Test on a mid-range phone on mobile data, never on office wifi.",
      "Images are the usual culprit, and they are the easiest fix.",
      "Speed affects paid costs as well as organic, through quality scoring.",
      "Chase real-user data, not a lab score out of a hundred.",
    ],
    body: [
      {
        t: "p",
        text: "Speed is the least glamorous item on any website list and one of the few with a direct, measurable effect on enquiries. A visitor who leaves before your page renders has not judged your company at all.",
      },

      { t: "h2", text: "Which speed metrics actually matter?" },
      {
        t: "table",
        head: ["Metric", "Measures", "Target"],
        rows: [
          [
            "Largest Contentful Paint",
            "When the main content appears",
            "Under 2.5 seconds",
          ],
          [
            "Interaction to Next Paint",
            "How quickly the page reacts to a tap",
            "Under 200 milliseconds",
          ],
          [
            "Cumulative Layout Shift",
            "How much the page jumps while loading",
            "Under 0.1",
          ],
        ],
      },
      {
        t: "p",
        text: "The third is the one people underestimate. A page where the content shifts as images load causes mis-taps, and on a form that means a visitor tapping the wrong field and giving up. It is also trivially fixable by setting image dimensions.",
      },

      { t: "h2", text: "Why are solar sites slow?" },
      {
        t: "ol",
        items: [
          "**Uncompressed install photos.** The most common cause by a distance. A phone photo straight from the camera can be several megabytes, and a gallery of them is a page nobody waits for.",
          "**A video hero.** Beautiful on a desktop, and it delays the first meaningful paint on a phone by seconds.",
          "**Too many third-party scripts.** Chat widget, two analytics tools, a heatmap tool, a review widget, three ad pixels. Each one costs.",
          "**Page builder bloat.** Some builders ship enormous stylesheets and scripts for a page with four sections on it.",
          "**Fonts.** Four families in six weights, loaded before anything renders.",
          "**Cheap hosting.** Slow server response delays everything that follows, and no front-end fix compensates for it.",
        ],
      },

      { t: "h2", text: "The five fixes worth doing" },
      {
        t: "steps",
        items: [
          {
            title: "Compress and resize every image",
            body: "Nothing wider than about 2,000 pixels, served in a modern format, with width and height set in the markup. This single change fixes most solar sites, and it also fixes layout shift.",
          },
          {
            title: "Lazy load everything below the fold",
            body: "Images further down the page should not compete with the content somebody is actually looking at.",
          },
          {
            title: "Cut third-party scripts",
            body: "Keep analytics and your conversion tracking. Question everything else, and be particularly suspicious of any widget nobody monitors. See [solar website mistakes](/blog/solar-website-mistakes).",
          },
          {
            title: "Replace the video hero with a still",
            body: "Use a real photograph of one of your own installs. It loads instantly and, for a trade purchase, it is more persuasive than a stock drone shot.",
          },
          {
            title: "Check the hosting",
            body: "If server response time is over about 600 milliseconds, no amount of front-end work will get you where you need to be.",
          },
        ],
      },
      {
        t: "callout",
        label: "Test it honestly",
        text: "Test on a mid-range phone, on mobile data, away from the office. Your desktop on fibre with the page cached is the one environment where the site is guaranteed to feel fast, and it is the one environment no customer is in.",
      },

      { t: "h2", text: "Speed costs you twice" },
      {
        t: "p",
        text: "A slow solar site loses organic visitors before the content appears. It also raises what you pay for paid traffic, because landing page experience feeds quality scoring, and a poor score means a higher cost per click for the same position.",
      },
      {
        t: "p",
        text: "At solar click prices, that second effect alone can justify a day of image compression. See [solar Google Ads cost per lead](/blog/solar-google-ads-cost-per-lead).",
      },

      { t: "h2", text: "How far should you take it?" },
      {
        t: "p",
        text: "Far enough to pass the thresholds on a real phone, and then stop. Chasing a lab score from 92 to 97 is engineering theatre; getting from 34 to 80 is worth a day.",
      },
      {
        t: "p",
        text: "Use real-user data where you have it rather than a synthetic score, because that reflects the devices and connections your visitors actually have. And re-check quarterly: sites get slower on their own as people add widgets, and nobody notices until enquiries dip.",
      },
      { t: "h2", text: "Keeping it fast once it is fast" },
      {
        t: "p",
        text: "Sites do not stay fast on their own. They get slower one reasonable decision at a time: a review widget in March, a chat tool in June, a gallery of uncompressed install photos in September.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Set a rule for images",
            body: "Nothing goes on the site straight from a phone. Resize and compress first, every time. Whoever adds photos needs this to be a habit rather than a policy.",
          },
          {
            title: "Question every new script",
            body: "Before adding a widget, ask what it will do that justifies the load cost, and who will monitor it. Most widgets fail the second question.",
          },
          {
            title: "Re-test quarterly",
            body: "On a real phone, on mobile data. Put it in the same quarterly slot as the rest of the SEO checks. See [the solar company SEO checklist](/blog/solar-company-seo-checklist).",
          },
          {
            title: "Watch enquiries, not just scores",
            body: "A sudden dip in form submissions with no change in traffic is often a speed or layout regression rather than a marketing problem.",
          },
        ],
      },
      {
        t: "link",
        href: "/blog/how-to-increase-solar-website-conversion-rate",
        label: "How to increase solar website conversion rate",
        note: "Speed is the first step, not the whole job",
      },
    ],
    faq: [
      {
        q: "How fast should a solar website load?",
        a: "Main content visible within about 2.5 seconds on a mid-range phone on mobile data. Under three seconds overall is the practical target, and most solar sites sit well above it because of image sizes.",
      },
      {
        q: "Does page speed affect Google rankings?",
        a: "It is a ranking input, though a modest one compared to relevance and, for local results, proximity and reviews. The larger effect is on conversion and on paid costs, which is why it is worth fixing regardless.",
      },
      {
        q: "What is the quickest page speed win?",
        a: "Compressing and correctly sizing images. On most solar sites it is the majority of the problem, it takes an afternoon, and it fixes layout shift at the same time.",
      },
    ],
    related: [
      "solar-website-mistakes",
      "how-to-increase-solar-website-conversion-rate",
      "how-much-does-a-solar-company-website-cost",
    ],
  },
] as const;
