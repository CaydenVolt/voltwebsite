/**
 * Video testimonials from real Volt clients. Nothing fabricated: a card only
 * exists in this array once the client has filmed and okayed it.
 *
 * Each video lives in `public/testimonials/<slug>.mp4` (and optionally a
 * poster image at `public/testimonials/<slug>.jpg`). Export the video as
 * H.264 MP4 at 720p or 1080p; a vertical phone clip is fine and will
 * letterbox cleanly inside the landscape frame on the card.
 *
 * Attribution is first name only by default, which is enough for the
 * card and avoids over-identifying a client whose consent was for a quote
 * and a face, not a surname and a company name.
 */
export interface Testimonial {
  /** Short identifier, used as the key and as the file prefix in public/testimonials. */
  slug: string;
  /** First name only unless the client specifically consented to the full name. */
  name: string;
  /** Optional role or company detail, when the client has okayed it. */
  attribution?: string;
  /** Path to the MP4 under /public. */
  videoSrc: string;
  /** Optional path to a poster image (a still from the video) under /public. */
  poster?: string;
  /** The quote as spoken, trimmed to one or two sentences. */
  quote: string;
  /** Rating out of 5. Only ever as high as what the client actually gave. */
  rating: 1 | 2 | 3 | 4 | 5;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  // The first testimonial is filmed and in edit. It drops in here as soon as
  // the MP4 is exported from DaVinci Resolve and the quote text is confirmed
  // against what the client actually said in the clip.
];
