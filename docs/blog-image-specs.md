# Blog image specifications

Twenty-two images for the blog, written so they can be handed to a designer, a
diagramming tool, or an image model.

**Read this first.** Items 1 to 12 are label-dense diagrams. Image models still
cannot render reliable text, and a diagram with garbled labels is worse than no
diagram, so build those in Figma, Excalidraw, or as hand-written SVG. Items 13
to 18 are crops of recordings you already own. Items 19 to 22 are screen
captures, not generated images.

**Inline SVG beats a raster file** for anything on this list. The labels inside
an SVG are real text in the served HTML, so the diagram counts as a visual
element and every word in it stays readable by crawlers that do not run
JavaScript. A PNG of the same diagram is opaque to them.

**Labels must match the article.** Where a spec says "pull the labels from the
article", do that rather than inventing wording. A diagram that disagrees with
the prose beside it is a bug.

---

## The style preamble

Paste this above any prompt, or set it up once as a Figma style.

> Flat two-dimensional technical diagram. No perspective, no drop shadows, no
> gradients, no 3D, no glow, no photographic texture. Background #f2ede3 (warm
> off-white). All strokes and body text #171410 (near-black). Secondary and
> supporting text #5e574d (warm grey). Exactly one accent colour, #e4572e
> (burnt orange), used only on the single most important element and nowhere
> else. Plate and panel fills #e6dfd0 (slightly darker than the background).
> Hairline strokes, 1 to 1.5px, uniform weight throughout. Square or minimally
> rounded corners, 2px radius maximum. Sans-serif type only: Bricolage
> Grotesque for headings and figures, Instrument Sans for labels. Generous
> whitespace. Editorial and restrained, closer to a technical manual or a
> financial newspaper than to a marketing graphic. No icons unless the spec
> asks for one, no illustrations of people, no clip art.

**Canvas.** Export at 2x. Wide flow diagrams: 1200 x 675 (16:9). Dense or
stacked diagrams: 1200 x 900 (4:3). Vertical sequences: 900 x 1200 (3:4).

**Accent discipline.** One orange element per diagram. If two things are
orange, neither reads as important.

---

## 1. Who claims the solar tax credit

**Highest priority.** The clearest thing on the whole blog, because the entire
market confusion is about who holds the credit and it is a picture, not a
sentence.

- **Article:** how-to-sell-solar-after-the-tax-credit
- **Canvas:** 1200 x 675
- **Purpose:** the reader should see in two seconds that the credit did not
  disappear, it changed hands.

Two columns, divided by a single vertical hairline down the centre.

**Left column, headed "Homeowner owns the system":** a box labelled `Cash or
loan purchase`. An arrow pointing down to a box labelled `Section 25D`. That
box is struck through with a single diagonal line and greyed to #5e574d. Below
it, in small type: `Ended 31 December 2025`.

**Right column, headed "Finance company owns the system":** a box labelled
`Lease or PPA`. An arrow down to a box labelled `Section 48E`, drawn in accent
#e4572e, the only orange on the diagram. Below it: `30% still applies`. A
second arrow continues down from that box to a final box labelled `Lower
monthly payment`, with the caption `Reaches the homeowner as price, not as a
refund`.

**Footer strip across both columns, small, #5e574d:** `Placed in service by
31 December 2027 if construction began after 4 July 2026`.

---

## 2. The eight-touch follow-up sequence

- **Article:** solar-sales-follow-up-sequence
- **Canvas:** 1200 x 675
- **Purpose:** show that most of the value sits after the point where most
  companies stop.

A horizontal timeline, left to right, with a single hairline baseline. Eight
tick marks, unevenly spaced to reflect real time rather than even intervals:
clustered tightly at the left, spreading out to the right. Label the axis at
`Minute 5`, `Hour 1`, `Day 1`, `Day 3`, `Day 7`, `Day 14`, `Day 30`, `Day 90`.

Each tick carries a short label above it for the channel: pull the exact
wording from the article's own step list rather than inventing it.

Draw a vertical dashed line after the fourth tick, labelled below in #5e574d:
`Where most companies stop`. Everything to the right of that line sits on a
#e6dfd0 tinted band, and the band carries one line of accent text: `Most of the
pipeline is here`.

---

## 3. Missed call to booked lead

- **Article:** missed-call-text-back-for-solar
- **Canvas:** 1200 x 675
- **Purpose:** show the loop closing without anyone picking up.

Five nodes in a horizontal chain, joined by arrows:

`Call comes in` → `Nobody answers` → `Text sends automatically` → `Homeowner
replies` → `Lead in the inbox`

The second node, `Nobody answers`, is drawn in outline only with a dashed
stroke, because it is the failure the rest of the chain recovers from. The
third node is the accent. Under the arrow between nodes two and three, in small
type: `Within five seconds`.

Below the chain, a thin grey line showing the alternative, unlabelled boxes
fading out: `Call comes in` → `Nobody answers` → `Lead gone`. Label that lower
path `Without it` in #5e574d.

---

## 4. The eleven pipeline stages

- **Article:** solar-sales-pipeline-stages
- **Canvas:** 900 x 1200 (vertical)
- **Purpose:** show that half the timeline is waiting on other people.

A vertical ladder of eleven stages, each a full-width bar with the stage name
left-aligned and a stage number in small type at the left edge. **Pull all
eleven names verbatim from the article.**

Two of them, `Set` and `Sat`, are drawn as adjacent bars with a bracket joining
them and a note in accent: `Separate stages. Collapsing them hides your
no-show rate.`

Shade the bars where the company is waiting on a third party (utility,
permitting, interconnection) in #e6dfd0, and leave the bars the company
controls unshaded. A key at the bottom explains the two fills.

---

## 5. What the map pack ranks on

- **Article:** how-to-rank-in-google-map-pack-solar
- **Canvas:** 1200 x 900
- **Purpose:** show that one of the three inputs cannot be bought or written.

Three columns as vertical panels, headed `Relevance`, `Distance`, `Prominence`.

Under each, a short stacked list of the inputs that feed it, taken from the
article. Under `Distance`, one line in accent: `You cannot change this one`.

Below the three panels, a full-width strip showing a simplified map grid: a
5 x 5 lattice of small squares, with three or four squares filled in accent to
show ranking in some squares and not others. Caption beneath, #5e574d: `The
same business ranks differently street by street`.

---

## 6. Google Ads account structure

- **Article:** google-ads-for-solar-companies
- **Canvas:** 1200 x 675
- **Purpose:** show the containment hierarchy and where budget actually sits.

A left-to-right nesting diagram, boxes inside boxes rather than a tree:

Outermost box `Account`. Inside it, two boxes labelled `Campaign, residential`
and `Campaign, commercial`, with a small tag on each reading `Budget lives
here` (the tag on the first is the accent element). Inside the first campaign,
three boxes: `Ad group, solar installation`, `Ad group, battery storage`, `Ad
group, brand`. Inside one ad group, a short stack: `Keywords`, `Ads`,
`Negatives`.

Annotation on the right edge in #5e574d: `One theme per ad group. If you cannot
write one ad that suits every keyword in it, it is two ad groups.`

---

## 7. How negatives filter traffic

- **Article:** the new negative keywords article
- **Canvas:** 1200 x 675
- **Purpose:** show waste being removed rather than traffic being added.

A horizontal funnel, wide at the left, narrow at the right, drawn as an outline
with hairline strokes.

At the wide end, label `All searches that could match`. Inside the funnel body,
three inward-pointing arrows from above, each labelled with a category of waste
in #5e574d: `Jobs and careers`, `DIY and how-to`, `Other trades`. Each arrow
has a small pile of discarded blocks beside it outside the funnel.

At the narrow end, an accent box labelled `Searches worth paying for`.

Caption below: `Negatives do not get you more clicks. They stop you paying for
the wrong ones.`

---

## 8. The conversion tracking path

- **Article:** the new conversion tracking article
- **Canvas:** 1200 x 675
- **Purpose:** show the chain, and where it usually breaks.

Five nodes, left to right:

`Click` → `Landing page` → `Form submit` → `CRM record` → `Booked job`

Each join is an arrow. Put a small break symbol (a jagged gap) on the arrow
between `Form submit` and `CRM record`, drawn in accent, with a label beneath:
`This is where it usually breaks`.

Above the chain, a second row of small tags showing what each step reports to:
under `Click`, `Google Ads`; under `Form submit`, `Conversion tag`; under
`Booked job`, `Nothing, unless you send it back`. That last tag is dashed.

---

## 9. One SERP, three placements

- **Article:** local-services-ads-for-solar
- **Canvas:** 900 x 1200 (vertical)
- **Purpose:** show the stacking order on a real result page.

A stylised phone-shaped search result page, drawn as a plain rectangle with a
search bar at the top containing the greyed query `solar installers near me`.

Below it, three stacked bands, each a #e6dfd0 plate with a label to the right
in small caps:

1. `Local Services Ads` with a small `Google Guaranteed` badge shape. Bracket
   label: `Pay per lead, verification required`.
2. `Search ads` with a small `Sponsored` tag. Bracket label: `Pay per click`.
3. `Map pack`, three result rows with star shapes. Bracket label: `Free, earned`.

Below those, a partially cut-off band labelled `Organic results`, fading at the
bottom edge of the canvas. Accent the first band only.

---

## 10. Cost per lead against cost per sale

- **Article:** solar-google-ads-cost-per-lead
- **Canvas:** 1200 x 675
- **Purpose:** show that the cheap channel is not always the cheap channel.

Two horizontal bars, stacked, sharing a left baseline.

Top bar, `Channel A`: a short segment labelled `Cost per lead`, then a much
longer continuation to `Cost per sale`, with the gap between them hatched and
labelled `Leads that did not close`.

Bottom bar, `Channel B`: a longer `Cost per lead` segment, but a much shorter
continuation, so the `Cost per sale` end point lands to the left of Channel A's.
Accent Channel B's end point.

Caption: `The cheaper lead was the more expensive customer.`

**Leave the axis unnumbered.** This is a shape argument, not a data chart, and
putting invented figures on it would make it a claim.

---

## 11. Lease, PPA and cash side by side

- **Article:** solar-lease-vs-ppa-for-installers
- **Canvas:** 1200 x 900
- **Purpose:** show what the homeowner is actually buying in each case.

A three-column comparison grid. Columns: `Cash`, `Lease`, `PPA`. Rows, each a
hairline-separated band: `Who owns the equipment`, `What the homeowner pays
for`, `Who claims the credit`, `What happens at end of term`, `What happens if
they sell the house`.

Fill the cells with short phrases from the article, three or four words each.
Accent the single cell at the intersection of `Who claims the credit` and
`Lease` and `PPA`, joining the two with a light bracket.

---

## 12. Where solar visitors drop off

- **Article:** how-to-increase-solar-website-conversion-rate
- **Canvas:** 900 x 1200 (vertical)
- **Purpose:** show the drop-off shape without claiming specific rates.

A vertical funnel of five decreasing bands: `Landed`, `Scrolled`, `Reached the
form`, `Started the form`, `Submitted`.

Each band narrower than the one above. To the right of each junction, a small
outward arrow in #5e574d with the reason for the drop, pulled from the article.
Accent the junction with the biggest narrowing.

**No percentages.** You do not have the data, and a funnel with invented
conversion rates on it is a fabricated claim.

---

## 13 to 18. Product screenshots you already own

Not generated. These are crops of files already in `public/services/`:
`functional-website`, `missed-call-text-back`, `automated-lead-follow-up`,
`all-in-one-inbox`, `five-star-review-funnel`, `on-site-seo`.

For each, take a still from the recording at the moment the interface is most
legible, crop to 16:9 or 4:3, and export at 2x as WebP. Keep the native pixels,
do not upscale: the sources are 648px wide, so any display slot wider than
about 400px is already being stretched.

Use each one in the article about that product, and nowhere else. A screenshot
reused across six articles stops reading as evidence.

---

## 19 to 22. Annotated interface captures

Screen captures of public interfaces, annotated afterwards. Not generated, and
they date whenever the vendor changes their UI, so note the capture date in the
filename and re-shoot annually.

| # | Capture | Annotate |
|---|---|---|
| 19 | Business Profile category picker, open, with a category typed | Circle the primary category field in accent. Callout: `This one field moves rankings more than anything else on the profile.` |
| 20 | A map pack result for a solar query in a real town | Bracket the three results. Label the review count and the distance indicator on each. |
| 21 | Google Ads search terms report, a week of real terms | Highlight three rows that should be negatives, in accent. Leave the rest plain. |
| 22 | The Business Profile review link generator | Circle the short link. Callout: `This is the link that goes in the text.` |

**Redact before publishing.** Blur or replace any real business name, phone
number, address or account ID that is not yours. On the search terms report,
redact anything that identifies the account.

Annotation style: 2px accent strokes, the same #e4572e, with callout text in
Instrument Sans at a size that survives a phone screen. No arrows with
shadows, no highlighter effects, no red circles.

---

## Do not make

- **Stock photography.** Roofs, installers on ladders, families pointing at
  panels, anyone in a hard hat holding a tablet. It is decoration, it fights a
  type-led design, and it adds page weight for nothing.
- **Any chart of results you do not have.** No client data exists yet. A
  "typical results" graph is the invented speed-to-lead stat in a new costume.
  This is also why items 10 and 12 are deliberately unnumbered.
- **AI-generated photographs of people or places.** Wrong for the brand, and
  the commodity signal is exactly what this content is trying to avoid.
- **Screenshots of the platform underneath the system.** It is never named on
  this site and it should not be pictured either.
- **An image on every article.** Roughly twenty diagrams across sixty-three
  articles is right. A forced diagram is filler, and filler dilutes the ones
  that are doing work.

---

## Accessibility and file rules

Every image needs alt text that states what the diagram shows, not what it is.
`Two routes to the solar tax credit, one closed to homeowners since 2025` beats
`Tax credit diagram`.

Raster exports: WebP, 2x, with explicit width and height so the page does not
shift while they load. SVG: inline in the markup rather than referenced as a
file, with a `<title>` element, so the labels stay in the HTML.
