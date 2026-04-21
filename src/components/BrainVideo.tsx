"use client";

import { useEffect, useRef } from "react";

// Video: 404×720 portrait (≈9:16). Character fills ~85% of frame.
// At container width clamp(280px, 36vw, 548px), natural video height
// slightly exceeds the section height → top black area clips cleanly.
// Floaters image (z-index 5) sits on top, cards overlay the character head.

export default function BrainVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    // Observe the section — fires once on first viewport entry.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed.current) {
            hasPlayed.current = true;
            video.play().catch(() => {/* autoplay blocked */});
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#000",
        position: "relative",
        /* Fixed-height so absolute children can be anchored */
        height: "clamp(600px, 59.5vw, 953px)",
        overflow: "hidden",
      }}
    >
      {/* ── Outer max-width wrapper ─────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          maxWidth: "1600px",
          height: "100%",
          margin: "0 auto",
        }}
      >

        {/* ── home-brain_floaters ─────────────────────────────────────
            Absolutely positioned at the top of the section.
            z-index 5 → sits on top of the character video.
            Wide image (cards network) covers the top ~60 % of section.
        ─────────────────────────────────────────────────────────────── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters.avif"
          srcSet="
            https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters-p-500.png   500w,
            https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters-p-800.png   800w,
            https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters-p-1080.png 1080w,
            https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters-p-1600.png 1600w,
            https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters-p-2000.png 2000w,
            https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters.avif         2950w
          "
          sizes="100vw"
          alt=""
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            maxWidth: "1280px",
            height: "auto",
            zIndex: 5,
            pointerEvents: "none",
            display: "block",
          }}
        />

        {/* ── home-brain_soshie ───────────────────────────────────────
            Absolutely positioned, anchored to the BOTTOM-CENTER.
            Narrow width → video renders at natural portrait aspect,
            not zoomed. Section overflow:hidden clips the excess top
            (black area above the character antenna).
            z-index 2 → cards float on top of character.
        ─────────────────────────────────────────────────────────────── */}
        <div
          /* home-brain_soshie */
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            /* 384px = native video width (404px) slightly inset — pixel-perfect match */
            width: "clamp(220px, 26.7vw, 338px)",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          {/* home-brain_video wrapper */}
          <div style={{ position: "relative" }}>
            <video
              ref={videoRef}
              id="brain-soshie-video"
              muted
              playsInline
              loop={false}
              style={{
                /* Natural aspect ratio — no forced fill/crop */
                width: "100%",
                height: "auto",
                display: "block",
              }}
            >
              <source
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c%2F673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-transcode.mp4"
                type="video/mp4"
              />
              <source
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c%2F673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-transcode.webm"
                type="video/webm"
              />
            </video>

            {/* home-brain_soshie-overlay: fade top & bottom into black */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  /* Top: fade in from black (hides black frame top).
                     Bottom: aggressive fade starting at 55% → mimics the
                     original's dark ground shadow that swallows the feet. */
                  "linear-gradient(to bottom, #000 0%, transparent 10%, transparent 45%, rgba(0,0,0,0.6) 72%, rgba(0,0,0,0.88) 85%, #000 100%)",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
