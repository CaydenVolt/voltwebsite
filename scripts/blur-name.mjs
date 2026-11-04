import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

/**
 * Blurs the "Nathan web client" name in two places on the WhatsApp screenshot:
 * 1. Chat header title (top of the image)
 * 2. Quoted reply header inside the green bubble
 *
 * Reads the JPEG that was saved with a wrong double extension, renames as it
 * writes out a proper PNG. Uses sharp's composite trick: extract each region,
 * blur it heavily, then paste it back on top of the original.
 *
 * Coordinates were measured in the original 946x2048 coordinate space.
 */
const INPUT = "public/testimonials/nathan-whatsapp.png.jpeg";
const OUTPUT = "public/testimonials/nathan-whatsapp.png";

const regions = [
  // Chat header title "Nathan web client"
  { left: 286, top: 140, width: 370, height: 60 },
  // Quoted reply "Nathan web client" in the green bubble
  { left: 237, top: 670, width: 325, height: 55 },
];

const raw = readFileSync(INPUT);
const base = sharp(raw);
const meta = await base.metadata();
console.log(`Input: ${meta.width}x${meta.height}, format: ${meta.format}`);

// For each region: extract from a fresh sharp instance, blur, then composite back.
const overlays = await Promise.all(
  regions.map(async (r) => {
    const buf = await sharp(raw)
      .extract(r)
      .blur(20) // heavy gaussian so the name is unreadable, not just softened
      .png()
      .toBuffer();
    return { input: buf, left: r.left, top: r.top };
  }),
);

const out = await sharp(raw).composite(overlays).png().toBuffer();
writeFileSync(OUTPUT, out);
console.log(`Wrote ${OUTPUT} (${out.length} bytes), blurred ${regions.length} regions.`);
