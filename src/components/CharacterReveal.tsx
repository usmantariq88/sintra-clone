"use client";

import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

// Lottie canvas native dimensions — 3840×2650 landscape (aspect = 1.4491…)
const ASPECT = 3840 / 2650;
const MOBILE_BP = 768;
const MOBILE_SECTION_OFFSET = 220;

export default function CharacterReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastViewportWidthRef = useRef<number | null>(null);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [totalFrames, setTotalFrames] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  /*
    JS-driven lottie sizing — the ONLY reliable way to fill the sticky
    container on actual mobile devices. CSS classes can fail due to:
      • Tailwind v4 purging non-utility classes
      • `height: 100%` not resolving through absolute-positioned parents
      • iOS Safari's 100vh including browser chrome (window.innerHeight is accurate)

    Desktop (>768px): wrapper = 100vw wide, height = undefined (auto)
    Mobile (≤768px):  wrapper height = window.innerHeight (exact visual viewport)
                      wrapper width  = height × ASPECT (fills viewport, no distortion)
  */
  const [wrapW, setWrapW] = useState<string>("100vw");
  const [wrapH, setWrapH] = useState<string | undefined>(undefined);
  const [sectionH, setSectionH] = useState<string>("150vh");

  useEffect(() => {
    const calc = () => {
      const viewportH = window.innerHeight;
      const viewportW = window.innerWidth;
      const lastViewportW = lastViewportWidthRef.current;

      if (viewportW <= MOBILE_BP) {
        // Mobile browsers can fire resize while scrolling (URL bar collapse/expand).
        // Ignore those height-only resizes to keep below-text position stable.
        if (lastViewportW !== null && Math.abs(viewportW - lastViewportW) < 2) {
          return;
        }
        lastViewportWidthRef.current = viewportW;
        setIsMobile(true);
        // Keep the character readable on phones without overfilling the viewport.
        const mobileTargetH = Math.round(viewportH * 0.78);
        const maxMobileW = Math.round(viewportW * 1.08);
        const aspectW = Math.ceil(mobileTargetH * ASPECT);
        const finalW = Math.min(aspectW, maxMobileW);
        const finalH = Math.round(finalW / ASPECT);

        setWrapW(`${finalW}px`);
        setWrapH(`${finalH}px`);
        // Keep parent section height fixed to match the intended mobile reveal block.
        setSectionH("855px");
      } else {
        lastViewportWidthRef.current = viewportW;
        setIsMobile(false);
        setWrapW("100vw");
        setWrapH(undefined);
        setSectionH("150vh");
      }
    };

    calc();
    window.addEventListener("resize", calc);
    window.addEventListener("orientationchange", calc);
    return () => {
      window.removeEventListener("resize", calc);
      window.removeEventListener("orientationchange", calc);
    };
  }, []);

  // ── Lottie load ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!dotLottie) return;
    const onLoad = () => {
      setTotalFrames(dotLottie.totalFrames);
      dotLottie.pause();
      // Frame 0 can be visually empty in this asset on some devices.
      dotLottie.setFrame(1);
    };
    dotLottie.addEventListener("load", onLoad);
    return () => dotLottie.removeEventListener("load", onLoad);
  }, [dotLottie]);

  // ── Scroll-driven lerp animation ───────────────────────────────────────────
  useEffect(() => {
    if (!dotLottie || totalFrames === 0) return;
    const lerpFactor = isMobile ? 0.24 : 0.14;
    const desktopScrollCompletionFactor = 0.82;

    // rAF loop continuously eases currentFrame → targetFrame.
    const tick = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * lerpFactor;
        dotLottie.setFrame(currentFrameRef.current);
      } else if (Math.abs(diff) > 0.001) {
        currentFrameRef.current = targetFrameRef.current;
        dotLottie.setFrame(currentFrameRef.current);
      }
      rafIdRef.current = requestAnimationFrame(tick);
    };
    rafIdRef.current = requestAnimationFrame(tick);

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Mobile timeline is offset-aware: starts when the shifted section enters
      // and reaches final frame once the reveal is fully settled in view.
      // Desktop keeps the original viewport-entry based progression.
      const rawProgress = isMobile
        ? (window.innerHeight - (rect.top + MOBILE_SECTION_OFFSET)) / window.innerHeight
        : (window.innerHeight - rect.top) / (section.offsetHeight * desktopScrollCompletionFactor);
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      // Start slightly into the timeline so the character is visible immediately.
      const startFrame = Math.floor(totalFrames * 0.06);
      targetFrameRef.current = startFrame + progress * Math.max(totalFrames - 1 - startFrame, 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [dotLottie, totalFrames, isMobile]);

  return (
    <>
      {/* 150vh = scroll runway; sticky child locks to viewport while parent scrolls */}
      <section
        ref={sectionRef}
        style={{ height: sectionH, background: "#000", marginTop: isMobile ? "-220px" : 0 }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: isMobile ? "855px" : "100dvh",
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

          {/*
            Lottie wrapper — inline styles set via JS so they always take effect
            (no CSS class specificity/purge issues, no vh unit iOS bugs).
            Desktop: 100vw × auto     → landscape canvas fills viewport width
            Mobile:  Wpx × Hpx       → canvas fills exact visual viewport height
          */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "50%" : 0,
              left: "50%",
              transform: isMobile ? "translate(-50%, -50%)" : "translateX(-50%)",
              width: wrapW,
              height: wrapH,
            }}
          >
            <DotLottieReact
              src="/lottie/67990b231ddfaa0ed9024665_data.lottie"
              dotLottieRefCallback={setDotLottie}
              autoplay={false}
              loop={false}
              style={{
                width: "100%",
                // Explicit pixel height on mobile so the canvas doesn't collapse.
                // `height: auto` works for <img> but NOT for <canvas> — canvas
                // has no intrinsic auto height and will render at 0 without it.
                height: wrapH ?? "auto",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Bottom vignette — solid black flush with text section below */}
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

      {/*
        Text section — pixel-perfect at 1440px:
          outer container: max-width 1280px, centered → 80px auto each side
          h2 / p:          max-width 768px,  centered → 256px auto each side (matches spec)
      */}
      <section
        style={{
          background: "#000",
          marginTop: isMobile ? "-260px" : 0,
          position: "relative",
          zIndex: isMobile ? 30 : 1,
          padding: "0 clamp(16px, 2.78vw, 40px) clamp(64px, 6.94vw, 100px)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              boxSizing: "border-box",
              color: "rgb(255, 255, 255)",
              display: "block",
              fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              fontFeatureSettings: '"salt"',
              fontSize: "clamp(26px, 3.33vw, 48px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBlockEnd: 0,
              marginBlockStart: 0,
              marginBottom: "clamp(16px, 1.67vw, 24px)",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 0,
              maxWidth: "768px",
              textAlign: "center",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Find The Right AI Employee
            <br />
            for Any Business
          </h2>

          <p
            style={{
              boxSizing: "border-box",
              color: "rgb(255, 255, 255)",
              display: "block",
              fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              fontFeatureSettings: '"salt"',
              fontSize: "clamp(15px, 1.39vw, 20px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.33,
              marginBlockEnd: 0,
              marginBlockStart: 0,
              marginBottom: 0,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 0,
              maxWidth: "768px",
              opacity: 0.8,
              textAlign: "center",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Every business is different. Your team should be too. That&apos;s why we built AI
            employees for real business roles. Each worker is designed to take ownership of a
            specific function — so you can stop juggling, start delegating, and build a team
            that actually scales with you.
          </p>
        </div>
      </section>
    </>
  );
}
