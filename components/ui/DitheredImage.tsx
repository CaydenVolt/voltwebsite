"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DITHER, readToken } from "@/lib/tokens";

interface DitheredImageProps {
  src: string;
  /** Meaningful description; exposed on the wrapper as the image's label. */
  alt: string;
  /** CSS aspect ratio, e.g. "4 / 5". Omit to fill the parent's height. */
  aspect?: string;
  /** Dot size in CSS px. */
  cell?: number;
  contrast?: number;
  lift?: number;
  /** Focal point, as CSS object-position percentages. */
  position?: { x: number; y: number };
  /**
   * Desktop slanted edge, as on the hero plate. "left" (or true) slants the
   * left edge for plates on the right; "right" mirrors it for plates on the left.
   */
  slant?: boolean | "left" | "right";
  /** Above the fold: eager load. Everything else is lazy. */
  priority?: boolean;
  className?: string;
}

/* 4×4 Bayer matrix: 17 tone levels with a visible ordered texture, the same
   family of pattern as the hero's halftone. */
const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

function hexToRgb(hex: string, fallback: [number, number, number]): [number, number, number] {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return fallback;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * The house image treatment. Draws the source photo as an ordered dither in
 * ink on a bone-deep plate, on a canvas, at the element's rendered size. The
 * plain <img> stays underneath (greyscale, multiplied) as the no-JS and
 * pre-draw fallback, and is hidden once the dither is on screen. If the image
 * fails to load, the flat plate remains.
 */
export function DitheredImage({
  src,
  alt,
  aspect,
  cell = DITHER.cell,
  contrast = DITHER.contrast,
  lift = DITHER.lift,
  position = { x: 50, y: 50 },
  slant = false,
  priority = false,
  className = "",
}: DitheredImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<"loading" | "drawn" | "failed">("loading");
  const slantClass =
    slant === "right" ? "lg:plate-slant-right" : slant ? "lg:plate-slant" : "";

  const draw = useCallback(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !img || !canvas || !img.complete || !img.naturalWidth) return;

    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (!w || !h) return;

    const dpr = Math.min(window.devicePixelRatio || 1, DITHER.maxDpr);
    const cols = Math.ceil(w / cell);
    const rows = Math.ceil(h / cell);

    // 1. Sample the photo at one pixel per dither cell, object-fit: cover.
    const sample = document.createElement("canvas");
    sample.width = cols;
    sample.height = rows;
    const sctx = sample.getContext("2d", { willReadFrequently: true });
    if (!sctx) return;
    const scale = Math.max(cols / img.naturalWidth, rows / img.naturalHeight);
    const sw = img.naturalWidth * scale;
    const sh = img.naturalHeight * scale;
    sctx.drawImage(img, (cols - sw) * (position.x / 100), (rows - sh) * (position.y / 100), sw, sh);

    let data: Uint8ClampedArray;
    try {
      data = sctx.getImageData(0, 0, cols, rows).data;
    } catch {
      // Cross-origin image without CORS headers: keep the CSS fallback.
      return;
    }

    // 2. Threshold each cell against the Bayer matrix. Ink where dark,
    //    transparent where light so the plate shows through.
    const [r, g, b] = hexToRgb(readToken("--color-ink"), [23, 20, 16]);
    const out = new ImageData(cols, rows);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        let lum = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
        lum = (lum - 0.5) * contrast + 0.5 + lift;
        const threshold = (BAYER[y & 3][x & 3] + 0.5) / 16;
        if (lum < threshold) {
          out.data[i] = r;
          out.data[i + 1] = g;
          out.data[i + 2] = b;
          out.data[i + 3] = 255;
        }
      }
    }
    sctx.putImageData(out, 0, 0);

    // 3. Scale up with nearest-neighbour so every dot is a crisp square.
    canvas.width = cols * cell * dpr;
    canvas.height = rows * cell * dpr;
    canvas.style.width = `${cols * cell}px`;
    canvas.style.height = `${rows * cell}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sample, 0, 0, canvas.width, canvas.height);
    setState("drawn");
  }, [cell, contrast, lift, position.x, position.y]);

  // Redraw when the element is resized (fluid layout, orientation change).
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let frame = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    });
    ro.observe(wrap);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [draw]);

  // Cached images may already be complete before onLoad can attach.
  useEffect(() => {
    if (imgRef.current?.complete) draw();
  }, [draw, src]);

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label={alt}
      style={aspect ? { aspectRatio: aspect } : undefined}
      className={`relative overflow-hidden bg-bone-deep ${slantClass} ${className}`}
    >
      {/* Raw <img> on purpose: the canvas needs the decoded pixels, and the
          element doubles as the no-JS fallback. next/image adds nothing here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt=""
        aria-hidden
        crossOrigin="anonymous"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={draw}
        onError={() => setState("failed")}
        style={{ objectPosition: `${position.x}% ${position.y}%` }}
        className={`absolute inset-0 h-full w-full object-cover grayscale contrast-125 mix-blend-multiply ${
          state === "loading" ? "opacity-100" : "opacity-0"
        }`}
      />
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`absolute left-0 top-0 ${state === "drawn" ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
