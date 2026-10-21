/**
 * A standard video player: native HTML5 controls, audio preserved, poster
 * frame shown before play, no autoplay, no loop. For walkthroughs and
 * explainers where the viewer is meant to watch deliberately (pause,
 * scrub, change volume) rather than glance at a silent recording.
 *
 * Compare to Clip, which is the muted-GIF loop for product recordings
 * that run on their own as a visitor scrolls past.
 *
 * `preload="metadata"` loads enough of the file to show duration and the
 * poster, without downloading the full video, so a visitor who never
 * presses play never pays the bytes.
 */
export function Video({
  src,
  poster,
  alt,
  width,
  height,
}: {
  src: string;
  poster: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="border border-line bg-bone-deep p-3 sm:p-4">
      <video
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls
        playsInline
        preload="metadata"
        aria-label={alt}
        className="block h-auto w-full bg-ink"
      />
    </div>
  );
}
