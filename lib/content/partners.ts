/**
 * The tools the system runs on, shown as an endless belt under Why Volt.
 *
 * Marks live in `public/partners/` and are referenced by file name. The set
 * is kept white-mono on transparency so the belt reads as one system on the
 * ink slab rather than a colour wheel of competing brand palettes. Most of
 * them are fetched from the Simple Icons CDN in white; Twilio's own mark
 * was recoloured white from brand red; OpenAI arrived with its background
 * baked in and was keyed to transparency with the glyph inverted; Slack is
 * delisted from the icon source and ships without a mark, so the belt
 * renders its name on its own until a licensed asset is dropped in.
 *
 * Order below is the order they appear in the belt.
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
  { name: "Google", file: "google.svg" },
  { name: "Twilio", file: "twilio.svg" },
  { name: "OpenAI", file: "openai.png" },
  { name: "Stripe", file: "stripe.svg" },
  { name: "Zapier", file: "zapier.svg" },
  { name: "Zoom", file: "zoom.svg" },
  { name: "Calendly", file: "calendly.svg" },
  { name: "ElevenLabs", file: "elevenlabs.svg" },
  { name: "Slack", file: "slack.svg" },
  { name: "Shopify", file: "shopify.svg" },
];

export const partnerMark = (file: string) => `/partners/${file}`;
