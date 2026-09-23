# Blog image specifications

Diagrams for the blog, written so they can be handed to a designer, a
diagramming tool, or an image model.

**Read this first.** Almost everything here is label-dense. Image models still
cannot render reliable text, and a diagram whose labels disagree with the prose
beside it is a bug rather than a decoration. Build these in Figma, Excalidraw,
or as hand-written SVG.

**Inline SVG, not a raster file.** The labels inside an inlined SVG are real
text in the served HTML, so the diagram counts as a visual element *and* every
word in it stays readable by crawlers that do not run JavaScript. A PNG of the
same diagram is opaque to them. Figure 1 is already live and proves it: "Section
48E" and "Lower monthly payment" both appear in the article's page text.

**Labels come from the article.** Every spec below is drawn from that article's
own tables, steps and lists. Where a spec quotes a row, it is quoting the
published page. If the article changes, the diagram changes.

**The blog has 72 articles and this list has 20 diagrams.** That is the right
ratio. A forced diagram is filler, and filler dilutes the ones doing work.

---

## Order of work

Pillars first. Each cluster's hub carries the most internal links and has the
most ranking potential, so a picture there is worth more than the same picture
on a spoke. One a week is the right cadence: adding a diagram touches the
article, which bumps its `updated` date, and recency is a real citation factor
in AI answers. Shipping twenty at once wastes that.

| | Diagram | Article | Status |
|---|---|---|---|
| **F1** | Who claims the solar tax credit | Incentives pillar | **done, live** |
| **P1** | Target response time against reality | Speed & follow-up pillar | next |
| **P2** | Five categories and the seams between them | Software pillar | |
| **P3** | What the map pack is ranked on | Local SEO pillar | |
| **P4** | When to ask for a review | Reviews pillar | |
| **P5** | The 90-day order of operations | Lead generation pillar | |
| **P6** | The page, top to bottom | Website pillar | |
| **P7** | Google Ads account structure | Paid ads pillar | |

After those eight, the spokes in the appendix, roughly one a week.

---

## The style preamble

Paste this above any prompt, or set it up once as a Figma style. The values are
the real tokens from `app/globals.css`.

> Flat two-dimensional technical diagram. No perspective, no drop shadows, no
> gradients, no 3D, no glow, no photographic texture. Background #f2ede3 (warm
> off-white). All strokes and body text #171410 (near-black). Secondary and
> supporting text #5e574d (warm grey). Exactly one accent colour, #e4572e
> (burnt orange), used only on the single most important element and nowhere
> else. Plate and panel fills #e6dfd0. Hairline strokes, 1 to 1.5px, uniform
> weight throughout. Square or minimally rounded corners, 2px radius maximum.
> Sans-serif type only: Bricolage Grotesque for headings and figures,
> Instrument Sans for labels. Generous whitespace. Editorial and restrained,
> closer to a technical manual or a financial newspaper than to a marketing
> graphic. No icons unless the spec asks for one, no illustrations of people,
> no clip art.

**Canvas.** Export at 2x. Wide flow diagrams 1200 x 675 (16:9). Dense or
stacked 1200 x 900 (4:3). Vertical sequences 900 x 1200 (3:4).

**Accent discipline.** One orange element per diagram. If two things are
orange, neither reads as important.

**Ship it as SVG** with a `<title>` and a `<desc>`, a `viewBox`, and
`role="img"`. The content gate checks all three and fails the build without
them.

---

# The pillar diagrams

## F1. Who claims the solar tax credit — DONE

Live in `how-to-sell-solar-after-the-tax-credit`. Kept here as the reference
for what a finished one looks like: two columns, a struck-through dead route on
the left, the live route on the right in accent, a footer strip carrying the
deadline.

---

## P1. Target response time against reality

- **Article:** `speed-to-lead-for-solar-companies` (Speed & follow-up pillar)
- **Canvas:** 1200 x 675
- **Why this one:** the article's whole argument is a gap between what should
  happen and what does. A table states it. A picture makes it embarrassing.

Five rows, one per channel. Each row is a horizontal track with two markers on
a shared logarithmic time axis running left to right: seconds, minutes, hours,
next day.

Pull both values from the article's own table:

| Channel | Target | What usually happens |
|---|---|---|
| Web form | Under 5 minutes | Hours, or the next morning |
| Phone call | Answered, or text back in 60 seconds | Voicemail nobody checks |
| Live chat | Under 30 seconds | Nobody is watching it |
| Business Profile message | Under 5 minutes | Discovered a week later |
| Facebook or Instagram | Under 15 minutes | Whenever somebody opens the app |

Draw the target as a small solid mark in accent, and reality as a hollow mark
in #5e574d, with a thin connecting rule between them. The length of that rule
is the argument, so let the longest one be visibly the longest.

Caption beneath, #5e574d: `Every one of these is the same lead.`

---

## P2. Five categories and the seams between them

- **Article:** `best-solar-contractor-software` (Software pillar)
- **Canvas:** 1200 x 675
- **Why this one:** the article says the software decision is mostly about the
  seams, not the tools. Five boxes with the gaps marked is that sentence as a
  picture, and prose cannot point at a gap.

Five boxes left to right, in the order a job moves through them, taken from the
article's category table:

`Design & proposal` → `CRM & sales` → `Project & install` → `Accounting` →
`Marketing & automation`

Between each pair, draw the join as a visible break rather than a clean arrow:
a short gap with a jagged or dashed connector. Label the four seams underneath
in #5e574d with what falls through each one. Accent the seam the article calls
out as the most expensive.

Annotation on the right, in accent: `Software failures in solar are almost
never about features. They are about handoffs.`

---

## P3. What the map pack is ranked on

- **Article:** `local-seo-for-solar-contractors` (Local SEO pillar)
- **Canvas:** 1200 x 900
- **Why this one:** it answers "why can't I rank everywhere", which is the most
  common misunderstanding in local SEO, and the answer is structural.

Three vertical panels, headed with the article's own three factors:

| Factor | What it means | Can you change it? |
|---|---|---|
| Proximity | How close the searcher is to your listed location | Barely |
| Relevance | How well your profile matches what was searched | Yes |
| Prominence | How well known and well reviewed you are | Yes |

Under each, a short stack of the inputs that feed it, from the article. Under
Proximity only, one line in accent: `You cannot change this one.`

Below the three panels, a full-width strip showing a 5 x 5 lattice of small
squares with three or four filled in accent, and the caption
`The same business ranks differently street by street.`

**Supersedes** the separate map-pack diagram in the appendix. Do not draw both.

---

## P4. When to ask for a review

- **Article:** `how-to-get-more-reviews-for-solar-installers` (Reviews pillar)
- **Canvas:** 1200 x 675
- **Why this one:** the article's table has a clear peak in it, and a peak is
  a shape. A reader scanning the page will take it in a second.

A timeline left to right with four labelled moments, taken from the article:

`Install day` → `Commissioning day` → `First lower bill` → `Twelve months`

Above each, a bar whose height is response rate: moderate, moderate, **highest**
(accent), low. Below each, the quality note in #5e574d:

- Install day: `Vague, about the crew being tidy`
- Commissioning day: `Better, still no results`
- First lower bill: `Specific, with numbers in it`
- Twelve months: `Excellent when it lands, rarely does`

**Leave the vertical axis unnumbered.** The article gives these as relative
descriptions, not percentages, and putting figures on the bars would invent
data the page does not claim.

---

## P5. The 90-day order of operations

- **Article:** `how-to-get-more-solar-leads` (Lead generation pillar)
- **Canvas:** 1200 x 675
- **Why this one:** the article's thesis is that the lead count is rarely the
  problem and the order of work matters more than the work. A sequence diagram
  is that argument.

Three phases along a horizontal band, sized to their real durations, from the
article's own steps:

| Days | Phase |
|---|---|
| 1 to 14 | Stop the leak |
| 15 to 45 | Fix the free channels |
| 46 to 90 | Add one paid channel |

Accent the first phase only. Under it, in accent, the reason:
`The leads you are already losing cost nothing to recover.`

Under phases two and three, the work in short items pulled from the article.
Across the bottom, a thin note in #5e574d:
`Most companies start at day 46.`

---

## P6. The page, top to bottom

- **Article:** `solar-company-website-design` (Website pillar)
- **Canvas:** 900 x 1200 (vertical)
- **Why this one:** it is a page layout, and a layout drawn is worth six
  paragraphs describing one.

A schematic of a scrolling page as stacked blocks, using the article's six
zones in order:

1. `Above the fold: what, where, and the action`
2. `Immediately below: proof`
3. `Then: the cost question, answered`
4. `Then: what happens next`
5. `Then: local evidence`
6. `Throughout: one action`

Draw zones 1 to 5 as stacked plates in #e6dfd0 with their labels to the left.
Zone 6 is not a block: draw it as a narrow accent rule running the full height
down the right edge, with small ticks where the call to action repeats. That
distinction is the point, and it is why this is a diagram and not a list.

---

## P7. Google Ads account structure

- **Article:** `google-ads-for-solar-companies` (Paid ads pillar)
- **Canvas:** 1200 x 675
- **Why this one:** hierarchy is spatial. Where the budget sits is the thing
  people get wrong, and a nesting diagram shows it without a sentence.

Boxes inside boxes rather than a tree. Outermost: `Account`. Inside it, the
four campaigns from the article's table, each with a small tag reading
`Budget lives here` (accent on the first only):

| Campaign | Ad groups | Sends to |
|---|---|---|
| Search: residential install | solar installers, solar panel installation, solar company | /solar-installation |
| Search: battery | home battery, battery storage, solar battery | /battery-storage |
| Search: EV charger | ev charger installation, home charger | /ev-charger |
| Search: brand | your company name and misspellings | Homepage |

Inside the first campaign only, expand one ad group to show the level below:
`Keywords`, `Ads`, `Negatives`.

Annotation right, #5e574d: `One theme per ad group. If you cannot write one ad
that suits every keyword in it, it is two ad groups.`

---

# Appendix: spoke diagrams

Draw these after the pillars, one a week, in roughly this order.

| # | Diagram | Article |
|---|---|---|
| S1 | The 8 touches across 90 days, on a timeline | `solar-sales-follow-up-sequence` |
| S2 | Call missed → text out → reply → lead in inbox | `missed-call-text-back-for-solar` |
| S3 | The 11 pipeline stages, set and sat split out | `solar-sales-pipeline-stages` |
| S4 | How a negative keyword list filters traffic | Google Ads cluster, when written |
| S5 | Click → landing page → form → CRM, with the usual break marked | Google Ads cluster, when written |
| S6 | Lease vs PPA vs cash: who owns what | `solar-lease-vs-ppa-for-installers` |
| S7 | LSA vs search ad vs map pack on one SERP | `local-services-ads-for-solar` |
| S8 | Cost per lead against cost per sale | `solar-google-ads-cost-per-lead` |
| S9 | Where solar visitors drop off, as a funnel | `how-to-increase-solar-website-conversion-rate` |

Two of these are deliberately unnumbered when drawn. **S8** and **S9** are
shape arguments: putting figures on either would turn an illustration into a
claim the site cannot support. S8 compares two bars with no axis. S9 is a
funnel with no percentages.

---

# Not diagrams

**Product screenshots you already own.** Six recordings in `public/services`.
Take a still at the moment the interface is most legible, crop to 16:9 or 4:3,
export 2x as WebP. Keep native pixels, do not upscale: the sources are 648px
wide, so any slot wider than about 400px is already being stretched. Use each
one only in the article about that product; a screenshot reused across six
articles stops reading as evidence.

**Annotated interface captures.** Screen captures of public interfaces,
annotated afterwards. They date whenever the vendor changes their UI, so note
the capture date in the filename and re-shoot annually.

| Capture | Annotate |
|---|---|
| Business Profile category picker, open | Circle the primary category field in accent. Callout: `This one field moves rankings more than anything else on the profile.` |
| A map pack result for a solar query | Bracket the three results. Label the review count and distance indicator on each. |
| Google Ads search terms report, a real week | Highlight three rows that should be negatives, in accent. Leave the rest plain. |
| Business Profile review link generator | Circle the short link. Callout: `This is the link that goes in the text.` |

**Redact before publishing.** Blur or replace any real business name, phone
number, address or account ID that is not yours. On the search terms report,
redact anything identifying the account.

Annotation style: 2px accent strokes in #e4572e, callout text in Instrument
Sans at a size that survives a phone screen. No shadowed arrows, no highlighter
effects, no red circles.

---

# Do not make

- **Stock photography.** Roofs, installers on ladders, families pointing at
  panels, anyone in a hard hat holding a tablet. Decoration that fights a
  type-led design and adds page weight for nothing. The website pillar
  explicitly tells readers that stock photos of smiling families cost
  credibility, so using them here would contradict our own advice.
- **Any chart of results you do not have.** No client data exists yet. A
  "typical results" graph is the invented speed-to-lead stat in a new costume.
- **AI-generated photographs of people or places.** Wrong for the brand, and
  the commodity signal is exactly what this content exists to avoid.
- **Screenshots of the platform underneath the system.** It is never named on
  this site and should not be pictured either.
- **A diagram on every article.** Twenty across seventy-two is right.

---

# Accessibility and file rules

Alt text states what the diagram shows, not what it is. `Two routes to the
solar tax credit, one closed to homeowners since 2025` beats `Tax credit
diagram`. For an inlined SVG this lives in its `<title>` and `<desc>` rather
than an `alt` attribute, which is why the gate checks for both.

SVG goes in `public/blog/` and is referenced by a `diagram` block in the
article. The renderer inlines it. Raster exports, where unavoidable: WebP, 2x,
with explicit width and height so the page does not shift while they load.
