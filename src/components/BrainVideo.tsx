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
      className="brain-section"
      style={{
        background: "#000",
        position: "relative",
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
          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 92vw, 80vw"
          alt=""
          loading="lazy"
          className="brain-floaters"
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

        <div
          className="brain-video-wrapper"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(220px, 26.7vw, 338px)",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <div style={{ position: "relative" }}>
            <video
              ref={videoRef}
              id="brain-soshie-video"
              muted
              playsInline
              loop={false}
              style={{
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

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, #000 0%, transparent 10%, transparent 45%, rgba(0,0,0,0.6) 72%, rgba(0,0,0,0.88) 85%, #000 100%)",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />
          </div>
        </div>

      </div>

      <style>{`
        /* ── Tablet (641px – 1023px) ──────────────────────────────── */
        @media (min-width: 641px) and (max-width: 1023px) {
          .brain-floaters {
            width: 92% !important;
          }
          .brain-video-wrapper {
            width: clamp(240px, 35vw, 338px) !important;
          }
        }

        /* ── Mobile (≤ 640px) ─────────────────────────────────────── */
        @media (max-width: 640px) {
          .brain-section {
            height: clamp(420px, 110vw, 600px) !important;
          }
          .brain-floaters {
            width: 100% !important;
            max-width: 100% !important;
          }
          .brain-video-wrapper {
            width: clamp(160px, 55vw, 240px) !important;
            bottom: 0px !important;
          }
        }
      `}</style>
    </section>
  );
}
