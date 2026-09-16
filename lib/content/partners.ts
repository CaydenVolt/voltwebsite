/**
 * The tools the system runs on, shown as an endless belt under Why Volt.
 *
 * Marks live in `public/partners/` and are referenced by file name, because
 * they come from different places in different formats: an open icon set for
 * the brands that publish there, a vector logo archive for two more, and the
 * site's own favicon at 128px for the four that publish neither. The favicons
 * arrived with their backgrounds baked in, so those four were keyed to
 * transparency and OpenAI's black mark inverted to white, which is what lets
 * them sit on the ink slab with no tile behind them.
 */
export interface Partner {
  name: string;
  /** File name inside public/partners. */
  file: string;
}

export const PARTNERS: readonly Partner[] = [
  { name: "Meta", file: "meta.svg" },
  { name: "Google Ads", file: "googleads.svg" },
  { name: "Google Analytics", file: "googleanalytics.svg" },
  { name: "Google Search Console", file: "googlesearchconsole.svg" },
  { name: "Google Business Profile", file: "googlebusiness.png" },
  { name: "GoDaddy", file: "godaddy.svg" },
  { name: "Mailgun", file: "mailgun.svg" },
  { name: "Twilio", file: "twilio.svg" },
  { name: "OpenAI", file: "openai.png" },
  { name: "Canva", file: "canva.svg" },
  { name: "Semrush", file: "semrush.svg" },
  { name: "Ahrefs", file: "ahrefs.png" },
  { name: "Zapier", file: "zapier.svg" },
  { name: "Stripe", file: "stripe.svg" },
  { name: "Local Falcon", file: "localfalcon.png" },
  { name: "Keywords Everywhere", file: "keywordseverywhere.png" },
];

export const partnerMark = (file: string) => `/partners/${file}`;
