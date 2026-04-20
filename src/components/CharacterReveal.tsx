"use client";

import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

export default function CharacterReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [totalFrames, setTotalFrames] = useState(0);

  useEffect(() => {
    if (!dotLottie) return;
    const onLoad = () => {
      setTotalFrames(dotLottie.totalFrames);
      dotLottie.pause();
      dotLottie.setFrame(0);
    };
    dotLottie.addEventListener("load", onLoad);
    return () => dotLottie.removeEventListener("load", onLoad);
  }, [dotLottie]);

  useEffect(() => {
    if (!dotLottie || totalFrames === 0) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      /*
        Start counting from when the section first enters the viewport (rect.top = innerHeight).
        Complete when the section has scrolled fully through (rect.top = -(sectionHeight - innerHeight)).
        Total travel = innerHeight + (sectionHeight - innerHeight) = sectionHeight.
      */
      const scrolled = window.innerHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / section.offsetHeight, 0), 1);
      dotLottie.pause();
      dotLottie.setFrame(progress * totalFrames);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dotLottie, totalFrames]);

  return (
    <>
      {/*
        Tall section = scroll space for the animation.
        Sticky child locks to viewport while parent scrolls.
        At end of this 300vh, the text section below enters from the bottom
        exactly as the sticky releases — both visible simultaneously.
      */}
      <section ref={sectionRef} style={{ height: "150vh", background: "#000" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            background: "#000",
          }}
        >
          {/* Top vignette */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "200px",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
              zIndex: 20,
              pointerEvents: "none",
            }}
          />

          {/* Lottie — 100vw wide, anchored top-center */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100vw",
            }}
          >
            <DotLottieReact
              src="/lottie/67990b231ddfaa0ed9024665_data.lottie"
              dotLottieRefCallback={setDotLottie}
              autoplay={false}
              loop={false}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Bottom vignette — solid black at bottom so it merges flush with text section */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "300px",
              background:
                "linear-gradient(to top, #000 0%, #000 20%, rgba(0,0,0,0.85) 50%, transparent 100%)",
              zIndex: 20,
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      {/* Text section — no top padding so it butts directly against the sticky section's black bottom */}
      <section
        style={{
          background: "#000",
          textAlign: "center",
          padding: "0 20px 100px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Find The Right AI Employee
          <br />
          for Any Business
        </h2>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.65,
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          Every business is different. Your team should be too. That&apos;s why we built AI
          employees for real business roles. Each worker is designed to take ownership of a
          specific function — so you can stop juggling, start delegating, and build a team
          that actually scales with you.
        </p>
      </section>
    </>
  );
}
