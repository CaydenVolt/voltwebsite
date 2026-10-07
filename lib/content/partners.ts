/**
 * The tools the system runs on, shown as an endless belt under Why Volt.
 *
 * Marks live in `public/partners/` and are referenced by file name. The set
 * uses each brand's own primary colour where it reads cleanly on the ink
 * slab; brands whose mark is inherently black (X, TikTok, OpenAI, ElevenLabs)
 * are shown in white, which is their own dark-background treatment. Most
 * were fetched from the Simple Icons CDN with the brand's default colour;
 * Twilio's long-standing SVG was kept at brand red; LinkedIn and Slack came
 * from the public brand-asset mirror because the icon source has delisted
 * both; OpenAI's inverted-white PNG was kept because its brand is a black
 * monochrome glyph that lives in white on dark.
 *
 * Order below is the order they appear in the belt. Social and messaging
 * sit together, Google and Gmail sit together, the infra block runs
 * through the middle, scheduling and voice close out, then Slack and
 * Shopify at the back.
 */
export interface Partner {
  name: string;
  /** File name inside public/partners. */
  file: string;
}

export const PARTNERS: readonly Partner[] = [
  { name: "Meta", file: "meta.svg" },
  { name: "WhatsApp", file: "whatsapp.svg" },
  { name: "LINE", file: "line.svg" },
  { name: "X", file: "x.svg" },
  { name: "TikTok", file: "tiktok.svg" },
  { name: "LinkedIn", file: "linkedin.svg" },
  { name: "Google", file: "google.svg" },
  { name: "Gmail", file: "gmail.svg" },
  { name: "Twilio", file: "twilio.svg" },
  { name: "OpenAI", file: "openai.png" },
  { name: "Stripe", file: "stripe.svg" },
  { name: "Zapier", file: "zapier.svg" },
  { name: "Zoom", file: "zoom.svg" },
  { name: "Calendly", file: "calendly.svg" },
  { name: "ElevenLabs", file: "elevenlabs.svg" },
  { name: "Slack", file: "slack.svg" },
  { name: "Shopify", file: "shopify.svg" },
  { name: "Inflowave", file: "inflowave.svg" },
];

export const partnerMark = (file: string) => `/partners/${file}`;
