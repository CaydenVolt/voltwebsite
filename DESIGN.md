# Volt — design decisions

Reference for every value on the site. If a number isn't here, it should be derivable from one that is.

## Where tokens live

- **`app/globals.css`, the `@theme` block**: every colour, type size (with its leading, tracking and weight), spacing step, radius and aspect. Tailwind utilities read from it, so `text-item`, `pt-stack`, `border-rule`, `rounded-control` and friends are the only way values reach components. Derived colours (hairline rules at 15%, resting underlines at 40%) are `color-mix` of the base tokens.
- **`lib/tokens.ts`**: JS-only values: springs, eases, durations, hero timeline, cursor sizes, marquee speed, press scale, plate cover skew, breakpoints, media-query strings, and `readToken()` for reading a CSS token at runtime (canvas work) without duplicating hex values.
- **Utilities in globals.css** for geometry that is intrinsic to a technique rather than a scale value: `headline-space` (0.15em / 0.3em display margins), `word-mask` (0.2em descender allowance), `link-underline`, `plate-slant`, `plate-zoom` / `plate-zoom-strip`, `plate-cover`.

Design language, named so it can be checked against: **warm editorial print, with ink slabs as structural anchors.**

## Direction

Printed matter. Bone paper, heavy warm-black ink, one flat second colour. Depth from contrast, scale and texture — never blur, glow or gradient. Dark sections are full-bleed hard cuts in the same ink.

## Palette (`app/globals.css`)

| Role | Value | Why |
| --- | --- | --- |
| Bone (paper) | `#f2ede3` | Warm hue (~40°), L≈93%. Never `#fff`. |
| Ink | `#171410` | Same hue as bone, L≈8%. Reads as black ink on warm stock. |
| Ink muted | `#5e574d` | Secondary text on bone. 5.9:1 — passes AA at body size. |
| Bone muted | `#a9a296` | Secondary text on ink. 7.3:1. |
| Bone deep / Ink soft | `#e6dfd0` / `#2a2620` | Pressed/hover fills on each surface. |
| Accent (vermilion) | `#e4572e` | The classic second ink in two-colour print. Flat. CTA fills, focus rings, the headline full stop. Ink on accent is 5.0:1; accent on bone is 3.2:1, so accent is never used for small text. |
| Accent deep | `#c7451f` | Pressed state of the CTA. |

Hairlines are `ink/15` on bone and `bone/15` on ink — visible without competing with type.

## Typography

**Bricolage Grotesque** (display) + **Instrument Sans** (body), both Google Fonts via `next/font` (self-hosted).

- Bricolage has ink traps and an optical-size axis (12–96). At display size the traps open up and it reads like heavy poster type — the literal "heavy black ink" of the brief. Weight 800 for the hero; 700 for section heads; 600 for small display labels.
- Instrument Sans is neutral and slightly narrow, so dense benefit lists stay compact and it never fights the display face.

Scale: base 1rem, ratio 1.25 for UI sizes; display sizes are fluid. Tracking and leading are tied to size:

| Token | Size | Leading | Tracking | Weight |
| --- | --- | --- | --- | --- |
| `display-xl` | `clamp(2.5rem, 1rem + 4.2vw, 6rem)` | 0.96 | −0.035em | 800 |
| `display-md` | `clamp(2rem, 1.25rem + 2.5vw, 3.5rem)` | 1.05 | −0.025em | 700 |
| `h3` | 1.625rem | 1.2 | −0.01em | 600 |
| `lead` | 1.375rem | 1.4 | −0.005em | 400 |
| `item` | 1.125rem | 1.25 | −0.01em | 600 |
| `body` | 1.125rem | 1.5 | 0 | 400 |
| `body-sm` | 0.9375rem | 1.5 | 0 | 400 |
| `ticker` | 0.9375rem | 1.5 | +0.06em | 600, uppercase |
| `label` | 0.8125rem | 1 | +0.08em | 500, uppercase |

Every reading size was raised one step on 2026-09-14, after the user found the small text hard to read against a reference site: body 16 → 18px, body-sm 14 → 15, label 12 → 13, lead 20 → 22, item 16 → 18, h3 24 → 26, ticker 14 → 15. Display sizes did not move, since they were never the problem, and `lead` lost a little leading (1.45 → 1.4) because leading comes down as size goes up. Nothing else changed: every surface reads these tokens, so the whole site lifted at once.

## Spacing

Everything in `rem`/`em`. Base unit 0.25rem (Tailwind default).

- Gutter: `clamp(1.25rem, 0.5rem + 2.4vw, 3rem)` — 20px on a phone, 48px on desktop.
- Hero headline margins are in `em` of the display size (`0.25em` above, `0.3em` below) so they scale with the type.
- Word masks: `overflow: hidden` with `0.2em` bottom padding (pulled back with a matching negative margin) so descenders survive the 0.96 leading; words start at `y: 125%` so nothing peeks through that padding before the reveal.
- Hero frame on desktop (after the 21st.dev reference): 12 columns, three rows (`auto auto 1fr`). Headline in row 1, columns 1–7. Ink CTA block directly beneath it in row 2, columns 1–6, bleeding off the left edge. Service rail (two columns of three, plus the add-ons line) in row 3, end-aligned. Media plate in columns 8–12 spanning rows 1–2 only and bleeding off the right edge, so its top meets the headline and its bottom meets the CTA block; the bone beneath it, beside the rail, stays open so the first screen always ends in paper rather than in the plate. The hero body also keeps `clamp(2.5rem, 2rem + 3vw, 5rem)` of bone before the ticker band. Column 7 is deliberate breathing room between the ink block and the media. The hero is allowed to run taller than the fold; the CTA block always lands above it.
- Media panel: the 21st.dev "adan y dios" ASCII loop (`components/ui/adan-y-dios.tsx`) on a plate of deeper bone, clipped on desktop with `polygon(5rem 0, 100% 0, 100% 100%, 0 100%)`. The video is blended `multiply` so its light ground disappears into the paper and only the halftone ink remains. The loop is a 774px square whose artwork sits inside a dotted frame region (roughly the middle 84% × 66%), so it is scaled 1.6× on desktop and 1.25× on the phone strip to keep that frame outside the crop and show only the hands. On load a bone cover, skewed to match the slant, slides off to the left over 1.2s so the art is exposed right to left. Under reduced motion the cover fades and the video shows its poster without autoplaying.
- On phones the frame stacks: short eyebrow on one line, headline, media as a rectangular 5:2 full-bleed letterbox (no slant) sitting flush on top of the ink CTA block so the two read as one object, then the service rail (2 columns) and the ticker. The lead drops to body size on phones so the CTA stays above an 812px fold.
- Nav: 4rem tall on phones, 4.5rem on desktop.
- Buttons: 2.5rem (sm) / 3rem (md) tall — both above the 44px tap target. Corner radius 2px: a softened sticker corner, not a pill.

## Motion (`lib/motion.ts`)

Springs are defined as **response + damping ratio** (Apple's model) and converted to stiffness/damping:

| Name | Response | Damping | Use |
| --- | --- | --- | --- |
| `touch` | 0.30s | 1.0 | press, hover, toggles |
| `move` | 0.40s | 1.0 | repositioning |
| `flick` | 0.35s | 0.8 | only after a drag/flick release |
| `cursor` | 0.22s | 1.0 | cursor follower — shorter because it trails a moving input |

Entrances the user didn't trigger use a decelerating ease `[0.22, 1, 0.36, 1]`:

- Word reveal 0.9s, stagger 0.05s (8 words → 0.35s spread).
- Ink panel wipe 1.0s, starting at 0.65s so it overlaps the headline's tail.
- Everything settles under 1.8s so it never delays reading.

Press feedback is on pointer-down (`whileTap` + `:active`). Marquee runs at a constant 80px/s regardless of content width (duration is measured, not guessed).

Reduced motion: every stage becomes a 0.3s opacity fade with delays halved; marquee stops; Lenis falls back to native scroll; Motion drops transform animations globally (`MotionConfig reducedMotion="user"`).

## Texture

One fixed layer of greyscale SVG turbulence at 55% opacity, `soft-light` blend, so grain shows on both bone and ink. No gradients anywhere.

## Shared primitives (`components/ui/`)

- `Section`: full-width, `variant` bone | ink | bleed, `rhythm` default | sm | none, `rule` top | bottom | both. The ink variant sets `data-surface="ink"`, which flips the tone tokens (`text-fg`, `text-muted`, `border-line`, `decoration-underline-current`, `bg-surface-deep`) for everything inside.
- `SectionLabel`: the small-caps eyebrow, optional leading hairline, left or right aligned.
- `Button`: primary (accent fill, arrow), outline, link (underlined, arrow). Outline and link are tone-aware. Press = 0.97 scale on pointer-down on the touch spring; arrow nudges 0.25em on hover.
- `IndexedRow`: `01 —— Label —— detail` with a hairline underneath. `accent` for header numerals, `interactive` for hover (numeral turns accent, label shifts 4px on the touch spring), `size` md | lg.
- `Reveal`: scroll entrance. Rise 20px + fade on the move spring, 70ms stagger via `index`, triggers at 20% visible, plays once. Reduced motion: 200ms opacity only, stagger halved.
- `DitheredImage`: canvas ordered dither (4×4 Bayer), ink dots on a bone-deep plate, drawn at the rendered size and redrawn on resize. Tone curve: contrast 1.15, lift 0.08, so photos read light like the hero halftone. Lazy by default, `priority` for above the fold, optional `slant`. The plain image underneath is the no-JS fallback (greyscale, multiplied); a failed load leaves the flat plate.

## Sections below the hero

- **Social proof strip**: bone, 1.5rem vertical padding, hairline top and bottom. Label left, three review sources right (source in label style, rating numeral in the display face in accent, five ink SVG marks). No client-name marquee: the hero ticker already occupies that slot and two marquees back to back would be noise.
- **Services**: intro band, then six blocks in the hero rail's order and numbering. Odd blocks text in columns 1–5 and media in 7–12 bleeding right; even blocks mirror, with column 7 left empty as in the hero. Both children carry `row-start-1`, otherwise grid auto-placement pushes the mirrored media to a new row. Block 03 (missed-call text-back) is the ink slab: the most commercially direct promise, and the midpoint of the six. Hairlines separate bone blocks; no rule on the slab or on the block directly after it. Media alternates dithered photo plates (01, 05, slanted toward the text) with type-only interface fragments on a deeper plate (02 follow-up timeline, 03 text-back transcript, 04 review log, 06 search result). Phones: media first, then text, every block.
- **Industries**: bleed section. Eight cells in a 4-column grid (2 on phones). Every cell has a top and left hairline and the grid a right and bottom one, so each divider is a single line. Cell = numeral, name in h3, one short line. Hover turns the numeral accent and shifts the name 4px on the touch spring.

- **Process**: three steps in three columns. A hairline across the top draws in with GSAP ScrollTrigger, scrubbed from `top 85%` to `top 35%` of the viewport; phones stack the steps behind a vertical rule down the left that draws the same way. Step numerals are display-md in accent (the section's only accent). Times sit under the titles as muted labels. Reduced motion: the rule is simply present.
- **Why Volt**: six items, three columns (two at sm, one on phones), hairline above each, muted numeral, h3, two-line body. Top rule separates it from Process since both are bone.
- **Testimonials** (`#results`): ink slab. Drag carousel built on Motion's drag for 1:1 tracking with pointer capture and rubber-banding (`DRAG.elastic` 0.15). On release the flick is projected with Apple's deceleration formula (`project()`, rate 0.998), the nearest slide wins, and the flick spring (damping 0.8, response 0.35) takes the release velocity so there is no seam. Prev/next buttons and arrow keys use the same spring. No auto-advance at all: quotes are long enough that any timer would fight reading. Slides are 10/12 wide on phones, 7/12 on desktop, and the track bleeds off the right edge so the next slide always peeks. Portraits are 64px dithered at a 1px cell (a 2px cell turned faces into noise). Attribution is "Name, Company, Place" with no dash, per the no-em-dash rule.
- **Surface rhythm after the services**: Industries on `deep` (a darker sheet of the same paper), Process as an ink slab, Why Volt on `deep`, Testimonials ink, FAQ bone, final CTA ink, footer bone. No two adjacent sections share a tone, and ink never touches ink.
- **FAQ**: eight questions, list in columns 6–12 beside the heading in 1–4. Answer height animates on the move spring from its live pixel value, so rapid toggling never jumps; multiple answers may be open. Plus/minus is two 2px ink bars, the vertical one rotating away. Reduced motion: height snaps, opacity fades 200ms.
- **Final CTA** (`#book`): ink slab bookending the hero: dithered plate bleeding off the left edge, slanted toward the text, display-xl headline, one line, primary CTA, and the hero's reassurance label.
- **Footer**: bone, because the CTA slab needs a hard edge beneath it and the page closes on paper as it opened. Wordmark and tagline in columns 1–4; Services, Company, Legal in 6–12 with small-caps headers; copyright and text-only social links on a final ruled row. Legal routes are placeholders.
- **Navigation**: fixed bar rendered from the root layout over a spacer in the hero, so the hero's layout and hairline are untouched. Transparent over the hero; once the hero scrolls out, a solid bone layer with a hairline fades in and the bar condenses from 4.5rem (4rem on phones) to 3.5rem, both on the move spring from their live values. No blur. Lenis anchors stop 3.5rem short of a target; `scroll-margin-top` covers native jumps. Below lg the Menu button opens a full-screen ink dialog: numbered links in display-md stagger in at 70ms, close reverses the stagger, focus moves in and is trapped between the bar and the dialog, body scroll and Lenis are stopped, Esc closes, focus returns to the button.
- **Smooth scroll**: Lenis is driven by the GSAP ticker from a child component that reads the live instance via `useLenis`. Capturing the ref in the provider's own effect ran before the instance existed and left wheel input captured but never applied.

## Copy rules

- The CRM vendor is never named on the site. Volt's follow-up system is called **Volt Relay** (`SITE.system`) — use that name and only that name.
- Volt sells the **system**, modelled exactly on Stone Systems' plan. Core (one monthly fee): Website, Automated follow-up (Volt Relay), Missed-call text-back, 5-star review funnel, One-click campaigns, On-site SEO. Add-ons: Google Business Profile, Advanced SEO, Google Ads. Google Ads is always secondary, never the lead offer. Everything draws from `SITE.services` (`CORE_SERVICES` / `ADDON_SERVICES`).
- No em dashes in prose (code comments excluded). Use a colon, a comma, or a new sentence. Numeric ranges take an en dash: 7–10 days, 5–15 kW, 3–6 months.
- Blunt, short sentences, benefit first. Banned words: elevate, unlock, seamless, supercharge, empower, game-changing.

## Products

- `lib/content/products.ts` is the only list of products. Six `public` entries in funnel order (capture, respond, organise, reputation, get found): Functional Website, Missed-Call Text-Back, Automated Lead Follow-Up, All-In-One Inbox, 5-Star Review Funnel, On-Site SEO. Six `addon` entries are sold outside the plan; four of them (AI Lead Nurturing, Automatic Customer Returns, Automatic Referrals, Google Ads Management) carry a `page` block of content and so get a product page and a homepage block, while Google My Business Optimization and Advanced SEO stay a row on `/pricing`.
- One shape serves both: `PageContent` (navLabel, headline, benefits, steps, stats, media, related, boundary, slab) is inlined on public products and nested under `page` on the four. `getProductPages()` and `getAddonPages()` flatten either into a `ProductPage` carrying `addon: boolean` and `index: number | null`. Every "not in the monthly fee" marker is driven by `addon`; `index` is null for the four because the numerals mean "in the plan".
- The separation is stated, never implied: the block eyebrow reads "Separate product" where the six read `01`, a line under each benefit list says "Not part of the system or the monthly fee", the product page repeats it under the intro, the mega-menu splits into "In the monthly fee" and "Sold separately", and `/products` and `/pricing` each carry their own section saying it again. The user asked for this to be unmissable.
- Every surface reads a selector, never a filter: `getPublicProducts()` for the hero rail, the ticker, the footer Products column and the plan; `getFeaturedAddons()` for the "Sold separately" groups; `getAllPages()` for `generateStaticParams` on `/products/[slug]` (with `dynamicParams = false`, so add-ons without a page, hidden entries and unknown slugs 404) and for the sitemap. `getRelated()` resolves `related` slugs through the public filter, so nothing sold separately can appear as a related product.
- Product marks (`components/ui/ProductIcon.tsx`): one monoline glyph per product, keyed by slug, drawn on a 24 grid with a 1.5 hairline stroke, square caps and mitred joins, no fill and no container, so they read as drawn in the same hand as the rules and the arrow in `ProductRow`. Sized in step with the text they sit beside: `size-4` next to label and menu text, `size-5` next to `text-h3` names, `size-8` above the product page h1. Colour is passed in and stays muted; the numeral keeps the hover, so a row has one moving part, not two. They appear wherever a product is named in a list (mega-menu, mobile menu, `/products`, `/pricing` in both lists, related products) and in the homepage block eyebrow. Not in the footer, where the links are body-small and a column of marks would be noise, and not in the hero rail, which is frozen. An unknown slug renders nothing.
- This reverses an earlier decision recorded here that the site would carry no icons because the numerals already mark sequence. The user asked for icons on 2026-09-14; the set is built to be a second reading of the same language rather than a second visual system, which is what that decision was guarding against.
- Product media (2026-09-15): five of the six show the user's own recordings and the sixth their inbox screenshot, in `public/services/` named by slug. The recordings are silent looping H.264 at 1152px landscape / 648px portrait, 24fps, with a first-frame JPEG poster beside each. They started as GIFs at the user's request; GIF could not be made both larger and sharper without passing 25MB, so they became video at the same total weight, 1.7x the resolution and full colour instead of 128 dithered ones.
- `Clip` (client) plays them: muted, looping, `playsInline`, `preload="none"`. Nothing downloads until an IntersectionObserver says the block is within half a screen, playback pauses when it scrolls away, and under prefers-reduced-motion it never plays and the poster stands in.
- Shown bare: no frame, no padding, no ground and no bleed off the page edge. A real interface has its own borders and a plate around it only competes with them; the cropped-off part of a bleeding interface is content. Phone-shaped clips are held to `max-w-md` and centred rather than blown up to the column.
- The media column runs seven of twelve on the homepage (text five, no breathing column), because the recordings have to be legible. The figures sit under the media: that band is what the space below a landscape clip is for, and the two columns are centred against each other (`lg:items-center`) so a tall phone clip or a short screenshot reads as composition rather than as a column that ran out.
- Clips are cropped to their content before encoding, not framed in CSS. The follow-up recording carried about a third of its width as empty margin, which is why its text was unreadable at any column size: `crop=1260:900:330:100` on the 1920x1080 source cuts it to the mockup, and everything inside is then 1.5x larger at the same display width.
- `Media.tsx` reads a screenshot's intrinsic size out of the file (PNG IHDR, JPEG SOF) so a lazily-loaded shot reserves its height instead of collapsing to nothing before it loads.
- `Media.tsx` reads `public/` to decide whether a file has been saved yet, matching by name and ignoring extension, and renders the old type-only fragment until it is. That is why the fragments stay in the codebase: they are the standing fallback, not dead code. The module is server-only as a result.
- Stats: three figures per product, shown as a ruled band under the media (`ProductStats`). They are how the product is built, not results claimed for it: timings, counts and coverage that hold for every client (`5 sec`, `12`, `24/7`, `1 tap`). Values are capped at nine characters by contract in `Stat`, because longer ones break the three-up band. Phones stack them as rows, figure left and label right.
- `ProductBlock` renders one homepage block: text five columns, media six with the plate bleeding off the page edge and the figure band held inside the gutter, column 7 breathing room, mirrored on even blocks, media first on phones. Inside the text column the ladder is name, promise, intro: the product's **name** is the display-md heading (and the block's accessible name, with its mark beside it), the headline sits under it at `text-h3`, dropping to `lead` on phones where display-md bottoms out at 32px, and the intro is body. The name was the small label until 2026-09-15; the user wanted it larger than the line under it.
- The homepage no longer runs full blocks for the four sold separately (2026-09-15, user's call: the homepage sells the system). `SeparateProducts` is now a short section, four cells in a hairline grid (`gap-px` on the line colour, each cell on paper) showing mark, name, one line and an arrow, each linking to that product's own page, with "See all products" beneath. `ProductCard` is the cell: hard edges, no radius, no shadow, the same hover gesture as every other product row.
- Missed-Call Text-Back and Automated Lead Follow-Up each carry a `boundary` sentence naming where one stops and the other starts, shown on the product page under "Where it stops" with a link to the sibling. Follow-up copy says "rule-based, same messages every time" rather than implying intelligence.
- Mega-menu (desktop): hard-edged bone panel with a hairline border spanning gutter to gutter under the bar, `IN THE MONTHLY FEE` label with a rule beneath, a 3 × 2 grid filled left to right in product order, then a second ruled group headed "Sold separately" with the four products that sit outside the plan (same grid, no numerals, the numeral column left empty so both groups line up), a ruled footer with "See all products". Numerals in the label style, muted, turning accent on hover: the same language as `IndexedRow`. Each name also carries its product mark (see below), at the size of the text beside it. Opens on hover after 100ms, on click, and on focus; closes after a 200ms grace when the pointer leaves the bar and panel, when focus leaves, on Esc (focus returns to the trigger), and on route change. Arrow keys move across the grid (left/right by one, up/down by a column), Home and End jump. Panel animates opacity and an 8px rise on the touch spring from its live value; it stays mounted and is `inert` while closed. The bone bar layer also shows while the panel is open so the panel never floats over transparent hero.
- Mobile: Products expands in place inside the ink overlay as a stacked numbered list (height on the move spring), no nested overlay.
- Product page: header with text left, the media plate and its figure band right, one line saying whether it is in the monthly fee or sold separately, a deep "What you get" section with the benefits and the boundary note, an ink "How it works" slab with three steps, "Pairs with" listing the two related products (always products in the plan), then the final CTA. The layout is a house-style default: no product page spec was received.

## Navigation and company pages

- The bar carries two mega-menus, Products and About. One piece of state holds which is open (`mega: MenuKey | null`), triggers and panels live in maps keyed by menu, and `MegaPanel` is the shared shell, so a third menu is data plus a panel body, not another set of handlers. Both panels stay mounted and `inert` while closed. Opening one closes the other; hover intent, the 200ms grace on leave, Esc returning focus to its own trigger, arrow-key roving and the route-change reset all work per menu.
- About menu (`ABOUT_MENU` in `lib/site.ts`): About Us, Our Process, Trades We Serve, Careers, Partners, Contact, Press, each with the one-line description from the user's reference. Marks from `components/ui/MenuIcon.tsx` sit in the column the products menu gives its numeral, so the panels share a rhythm; here the mark is the row's marker, so it takes the accent on hover where the product marks stay muted. The panel closes on "Book a 20-minute call" rather than a second index link, because there is no list to see all of.
- Our Process and Trades We Serve point at `/#process` and `/#industries`, the homepage sections that already hold that content, rather than at new pages repeating it. Top-level Process left the bar when it moved into this menu, so nothing is listed twice.
- `/about` is its own page, written to the user's copy: mission on bone with the team photo as a landscape plate off the right edge, culture on an ink slab with the four values numbered like the product-page steps, then the team on bone with circular portraits, then the closing slab. Copy lives in `lib/content/about.ts` so it can be edited without touching layout. The voice there keeps its contractions and its joke, against the house style elsewhere, because it is the one page written in the founders' own voice.
- Photos go in `public/about/` as `team.jpg`, `cayden.jpg` and `jay.jpg`. All three run through `DitheredImage` like every other photo on the site: the group shot at cell 2, the portraits at cell 1 (a coarser dot turns a face into noise), each with its own focal point. The portrait photos are cropped to landscape and to circles in CSS, not in the files, so replacing a photo never means re-cropping. A missing file leaves a flat bone-deep plate, which is the component's documented failure state.
- `/our-process` carries the timeline the user asked for, modelled on stonesystems.io/our-process: steps zigzag down the page, text on one side and a numbered disc on the other, sides swapping, with a dashed curve running disc to disc. Translated into this site's language rather than copied pixel for pixel: vermilion discs with padded numerals in the display face (the page's one use of accent), text left-aligned instead of centred, and Volt's own step copy from `PROCESS`. None of Stone's wording is used.
- The curve is one SVG per gap, `viewBox="0 0 100 100"` with `preserveAspectRatio="none"` so it stretches to the gap, and `vectorEffect="non-scaling-stroke"` on the path so the dashes stay even under that stretch. Its ends sit at 20% and 79%, the centres of the disc columns. Phones drop the curve for a short dashed segment in the gap between steps, on the discs' centre line: a full spine would run straight through the body text at that width.
- The homepage `#process` section stays as the summary and now links to the page; the About menu and the footer point at `/our-process` so there is one destination named Process.
- `/careers`, `/partners`, `/contact` and `/press` share `BasicPage`: eyebrow, display headline, a lead and body on the measure in the right-hand column, the booking button, then the site's closing slab. They are deliberately short. Every line on them is either something the rest of the site already says or a statement of what will be listed there; no invented team, partners, coverage or contact details. Each file opens with a PLACEHOLDER comment naming what the user still has to supply, and none of them is in the sitemap until it holds real content.
- Footer Company column gained About and Contact; the nav's own links are unchanged otherwise.

## Brand mark

- The lockup is `components/site/Wordmark.tsx`: the V mark, then the name in the display face, used in the nav bar and the footer. `getLogo()` resolves `public/volt-mark.svg` or `.png` server-side (the nav is a client component and cannot read `public/` itself), and the site renders type-only until the file is saved, so there is never a broken image.
- A file with transparency is painted through a CSS mask on `bg-current`, so the mark takes the surface's own foreground: ink on paper, bone on an ink slab, with one file. A file with a solid white background falls back to an `<img>` with `mix-blend-multiply`, which hides the white on paper but leaves the mark invisible on ink. The supplied `volt-mark.png` is RGBA with a genuinely transparent ground, so it takes the mask path.
- The favicon is `app/icon.png`, generated from the same file: the mark at 188px centred on a 256px bone square, because on a transparent ground it would vanish against a dark tab strip. Next's default `favicon.ico` was deleted so only this one is served.
- `resolvePublicAsset` returns root-level files as `/name.png`, not `//name.png`: `dirname` of a root path is `/`, and a doubled slash reads as a protocol-relative host, which silently broke the mask URL.

## Proof, and what was taken out

- 2026-09-15, on the user's instruction: the "41 solar companies on Volt" hero figure, the Google/Facebook/Trustpilot ratings strip, and the whole testimonials section are gone. None of it was real. `SocialProof.tsx`, `Testimonials.tsx`, `SITE.reviews` and `TESTIMONIALS` stay in the codebase unmounted, because the user intends to show them once the numbers are: re-adding each is one line in `app/page.tsx`. The nav and footer lost their "Results" entries, which pointed at the testimonials anchor, and `/our-process` now links to the products index instead.
- Still a claim with nothing behind it: "48 sec average speed-to-lead" in the hero eyebrow, flagged in the file.

## Section transitions (homepage only)

- Some sections meet on a diagonal instead of a straight line. `Section` takes `tilt="left" | "right"`, which cuts its top edge with a clip-path and slides it up over the section above by the same amount, so the cut reveals that section's own colour rather than the page behind it. The height it borrows is given straight back as padding, so the page keeps its length: 169.6px of top padding where the rhythm alone would give 105.6.
- The padding has to be written as `calc(rhythm + tilt)`, one value. A bare `pt-tilt` replaces the rhythm's top padding instead of adding to it, and the first line of the section ends up inside the cut.
- The rhythm across the page is left, straight, right, left, straight, right: Trades tilts left, Process is straight, Why Volt tilts right, Partners tilts left, the FAQ is straight, the final CTA tilts right. Tilts only sit where two surfaces differ, because on matching colours there is nothing for the cut to reveal, and the straight edges are what keep the tilted ones from reading as a gimmick.
- The tilts are passed from `app/page.tsx`, not baked into the sections, so the whole rhythm is readable in one place and the shared FAQ and final CTA stay straight-edged on every other page.
- `--spacing-tilt` is 4rem, halved to 2rem under 40rem: the cut is a fixed height, so the narrower the screen the steeper the angle, and 4rem across a phone reads as a wedge rather than a tilt.

## Belts (partners, trades)

- `useBelt` is the shared mechanic. The caller renders its set once per `copies` and hands back a ref to the first; the raw offset is folded into one set's width before it is painted, so the seam lands on identical content and neither belt has an end in either direction. `walk: true` moves continuously at the marquee speed (partners), `walk: false` steps one item along every few seconds (trades), which is what you want when each item carries a name to read.
- Drag is raw pointer events, not Motion's `drag`, because that writes to the same value the wrap has to own. Release runs the site's own `project()` momentum on the flick spring. `touch-pan-y` keeps a vertical swipe scrolling the page. Both stop while a hand is on them or focus is inside, idle when scrolled off screen, hold still under reduced motion, and move a item at a time on the arrow keys.
- The trades belt keeps its arrows and lost its counter: "01 to 03 of 10" means nothing on a loop. `CarouselArrows` no longer disables at the ends for the same reason.

## Partner marks

- Ink slab between Why Volt and the FAQ. Heading centred over the belt, no subheading, no tiles: the marks sit on the slab itself.
- That last part is why every mark had to be prepared. Nine come from an open icon set already carrying each brand's own hex, Twilio and Canva from a vector logo archive, and five from the company's own site icon at 128px. The favicons arrived with backgrounds baked in, so those were keyed to transparency with ffmpeg, and OpenAI's black mark was inverted to white so it reads on ink. Keywords Everywhere's mark is a dark disc by design; keyed clean, it sits quietly on the slab with its red letterform carrying it.
- Several of these brands are deliberately absent from open icon sets at their own request, which is worth remembering before treating any of this as an endorsement. The heading is the user's line with one word changed: "we partner with" became "we work with".

## Trades carousel (homepage)

- Replaces the old Industries grid (2026-09-15). Ten trades from the user, each a landscape photo with the name in a solid bar under it, three cards at a time, advancing one card every four seconds and on the arrows. `TRADES` in `lib/content/trades.ts` is the list; photos are `public/trades/01…10` in any format, resolved server-side by `resolvePublicAsset` so a missing photo renders as a named plate instead of a broken image.
- Cards are paper (`bg-bone`) with a hairline edge on the deeper ground: on a `deep` surface `surface-deep` is the section's own colour, so a card painted with it vanished into the background and took the name with it. The name is ink at 18px in the display face, 15.7:1 against the card, and never sits over a photo.
- Photos are cropped to one 3:2 frame with `object-cover`, so ten sources of different shapes still line up.
- The track measures one card plus one gap rather than assuming a width, so the same component handles three across, two, and one. The timer stops while a pointer is over the carousel or focus is inside it, and never runs under reduced motion, where the arrows cross-fade instead of sliding. Arrows advance through a functional state update: two quick taps move two cards rather than collapsing into one.
- `deep`, not `bleed-deep`: the carousel is contained, so the section keeps its gutters and the heading lines up with every other heading on the page.

## Pricing (`/pricing`)

- `lib/content/pricing.ts` holds the one plan. The price exists nowhere else; components call `formatPrice()`, `priceDigits()` and `currencySymbol()`. PLACEHOLDER 297 USD a month, no setup fee. `includes` is derived from `getPublicProducts()`. Also holds the "what this replaces" placeholder ranges and the pricing FAQ; the setup-fee answer is composed from `PLAN.setupFee`.
- `visibility: "addon"` marks the six sold outside the plan. `getAddonServices()` is the only way to list all six and only "Separate products" on `/pricing` calls it. None of them has a footer entry or appears in a `related` array; the two without `page` content have no page and no sitemap entry either.
- Surface rhythm: hero bone, plan ink, included bone, separate products bone with a top rule, replaces ink, FAQ bone, final CTA ink, footer bone. Ink never touches ink.
- The plan slab pulls up by `section-sm` over the hero (`-mt-section-sm`), and the hero's dithered plate extends down by `section` (`-mb-section`), so the slab overlaps the plate: the site's signature move, repeated.
- Price numeral: `text-price` token, `clamp(5rem, 2rem + 14vw, 14rem)`, leading 0.9, tracking −0.05em (tighter than display-xl because three digits at that scale drift apart), weight 800. Symbol at display-md and `/month` as a label, all on one baseline via `items-baseline`. Terms from `plan.terms` as labels separated by hairlines.
- Included: `ProductRow` with `accent` and `compact`, in two unequal columns (7 and 4, column 8 empty), three rows each, each linking to its page. Renders from `getPublicProducts()`.
- Separate products (label "Separate products", h2 "Sold separately from the system."): name in the display face, one-line description as a label, intro in the body face, "Separate product. Quoted per business on the call." No numerals: numerals are the signature of the six in the fee, and withholding them is what separates the two lists without a badge or a background change. The four with pages carry a "See how it works" link; the two without carry none. Renders from `getAddonServices()`.
- What this replaces: `IndexedRow` items with figure details on the left, the single Volt figure on the right, a note that the ranges are typical and will differ. No competitor names.
- Pricing FAQ reuses the homepage `FAQ` component with `items`, `id`, `label`, `heading` props. Final CTA is the homepage component unchanged.

## SEO

- `app/robots.ts` allows everything except Next's internals and the three company pages that are still placeholders. A thin page that gets indexed is worse than no page, so those are out of the sitemap too.
- The root layout sets `metadataBase` from `SITE.url`, a title template that keeps the brand on every inner page, default social cards, and `max-image-preview: large`. Every canonical, card URL and sitemap entry resolves from that one constant.
- `pageMetadata()` in `lib/seo.ts` returns title, description, canonical and both social cards from one call, so a page cannot ship with a canonical and no card, or a card carrying the wrong title. Every page above the placeholders uses it.
- Structured data is built from the same content the pages render, in `lib/seo.ts`: Organization and WebSite site-wide, Service and BreadcrumbList per product, Offer with a monthly `UnitPriceSpecification` on pricing, FAQPage on the homepage and pricing, and the blog types listed under Blog below. `JsonLd` escapes `<` as the Next guide requires. Two blocks per page, all valid JSON.
- `app/opengraph-image.tsx` generates the share card at build: ink ground, the vermilion rule, the wordmark and three proof points. It is set in a system font on purpose. ImageResponse cannot reach the site's webfonts without shipping the font binaries, and satori rejects any `div` with more than one child that is not explicitly `display: flex`, which is what broke the first attempt.
- The sitemap carries 93 URLs: the marketing pages, ten product pages, the blog index and its six numbered pages, seven cluster hubs, the author page and all sixty-three articles, each with its own revision date rather than today's. `/blog/page/1` is excluded, because it redirects.
- Not done, and waiting on the user: `SITE.url` is still `https://volt.example`, so every canonical, sitemap URL and schema `@id` points at a placeholder domain. One line, and it has to be right before launch.

## Blog (`/blog`)

Sixty-three articles across seven topic clusters, nine to a page, seven pages. Built as a hub-and-spoke architecture: every cluster has one pillar and eight spokes, every spoke links back to its pillar and sideways to siblings, and every article is reachable in two clicks from the front of the blog.

- **Content model** (`lib/content/blog/`). Articles are typed data, not MDX, which is the decision the rest of the site already makes. A `Block` union (`p`, `h2`, `h3`, `ul`, `ol`, `steps`, `table`, `callout`, `figures`, `quote`, `link`) keeps every article renderable through the design system's own primitives, so a post cannot introduce a rounded card, a gradient, or a type size outside the scale. Inline markup is two forms only: `[label](/path)` and `**bold**`, parsed in one pass by `components/blog/Prose.tsx`.
- **Routes.** `/blog` is page one and the only page one: `/blog/page/1` is generated so a hand-typed URL does not 404, and redirects. Pages two to seven self-canonicalise, because Google treats a paginated set as ordinary pages and consolidating them onto page one would orphan fifty-four articles. `/blog/[slug]`, `/blog/category/[slug]` (the seven cluster hubs) and `/blog/author/cayden-chern` complete the set. All `dynamicParams = false`.
- **The blocks** (`components/blog/PostCard.tsx`). Three to a row, so a page of nine is a 3 × 3 grid. A hairline border and a 2px corner, never a shadow. The head of each block is the article's mark over an ornament plate; under it the intent tag in vermilion, the date, the heading, the byline, the subheading, and `Read article`. Rows stretch so every block in a row is the same height and the closing line sits on one baseline.
- **Plates and marks.** `Plate.tsx` draws a deterministic block of printer's ornaments from a hash of the slug, held at 20% so it reads as texture. `BlogIcon.tsx` carries twenty-four monoline glyphs on a 24 grid, each ink hairlines plus exactly one element in vermilion. No stock photography anywhere: sixty-three stock images would be sixty-three broken links waiting to happen, and the site has already had fabricated proof taken out of it once.
- **Article page.** The answer block first (`Takeaways.tsx`): forty to sixty words that answer the headline without a pronoun pointing back at it, because that is the passage a featured snippet or an AI Overview lifts. Then a contents rail built from the article's own H2s, sticky on desktop beside the body. The booking CTA sits inside the article at roughly the point the reader has decided whether any of it applies, so a phone does not meet a pitch before the first paragraph. `FinalCTA` closes every page.
- **Type.** `--text-h2` was added to the scale for this: `display-md` is a poster size that shouts inside a 34rem column, and `h3` does not break long-form up enough. Long-form only.
- **Structured data.** `BlogPosting` with `wordCount` computed from the rendered blocks, a `Person` with a stable `@id` that every article's `author` points at, `BreadcrumbList`, and `CollectionPage` with an `ItemList` on each index so a paginated set is crawlable rather than a pile of near-identical URLs. `FAQPage` is deliberately **not** used: Google retired FAQ rich results for every site in May 2026, so it buys no SERP feature, and the answers still do their work as text. Each article generates its own OG card at build from the headline and byline.
- **The content gate** (`scripts/lint-blog.mjs`, `node scripts/lint-blog.mjs`). Sixty-three articles is more prose than anyone re-reads, so the house rules are enforced rather than remembered: no em dashes, no banned marketing vocabulary, the vendor never named, metaTitle under 60 and metaDescription 140 to 165, a 900-word floor, at least four H2s and three internal links, `related` slugs that exist, unique heading anchors, and nine different marks on each page of nine. It compiles the content with the project's own TypeScript and reads the real data rather than guessing with regexes. Product routes are parsed out of `lib/content/products.ts` rather than mirrored: a hardcoded copy of that list is exactly how four broken `/products/` links once passed this gate.

## Booking links

The booking destination will be a GoHighLevel funnel page. `BOOKING_URL` in `lib/site.ts` is the single place to set it. Every booking CTA renders `bookingHref(source)`, which appends `utm_source=website`, `utm_medium=cta` and `utm_content=<source>` (hero_primary, nav_book, menu_book, final_cta, footer_book) so the funnel's contact record shows which button sent the lead. Links open in a new tab. Existing query parameters on the funnel URL are preserved.

## Data flow

- `lib/fields.ts` — every CRM field name, defined once.
- `lib/crm.ts` — `submitToCRM(payload)`; the only door to the CRM. Stubbed with `console.log`. `trackCTA(source)` reports booking clicks through it.
- `lib/site.ts` — brand strings, nav, placeholder booking URL. Booking CTAs are plain `<a>` links to it.
