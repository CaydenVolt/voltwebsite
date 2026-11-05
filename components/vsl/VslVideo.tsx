"use client";

import { useRef, useState } from "react";

/**
 * The founder-video player used on /video-vsl. Thin wrapper around a native
 * <video> element plus a centred play-button overlay that disappears once
 * playback starts. The overlay is `pointer-events-none`, so a click goes
 * straight through to the video surface and the native controls handle
 * play/pause from there.
 *
 * Why a custom overlay rather than relying on the browser's own: when a
 * <video controls> has a `poster` set, Chrome/Edge show a small chrome-styled
 * play button and Safari shows almost nothing until the user clicks. That is
 * easy to miss on a VSL where the one job of the page is "press play". A
 * thumbnail with no obvious affordance reads as a static image rather than a
 * video the viewer is expected to watch.
 *
 * The overlay is a bone-filled circle with the accent-orange triangle: same
 * visual language as the rest of the site, so it reads as a Volt element
 * rather than a bolted-on widget.
 */
export function VslVideo({
  src,
  poster,
  ariaLabel,
}: {
  src: string;
  poster: string;
  ariaLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden bg-ink">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        onPlay={() => setStarted(true)}
        className="h-full w-full object-contain"
        aria-label={ariaLabel}
      />
      {!started && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* Bone-filled circle, accent triangle. ring-2 ring-ink/10 adds a
              hairline against very light posters so the circle keeps its
              edge on a mostly-white frame. The slight down-shift on the
              triangle (ml-1) centres it optically, not geometrically, which
              reads straighter to the eye than true centering does. */}
          <div className="flex size-20 items-center justify-center rounded-full bg-bone shadow-lg ring-2 ring-ink/10 sm:size-24">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="ml-1 size-10 fill-accent sm:size-12"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
