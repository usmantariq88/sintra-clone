"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
      }}
    >
      {/* ── Background layers ──────────────────────────────────────────── */}
      <div style={{ position: "absolute", inset: 0 }}>

        {/* Layer 1: Left-to-right gradient */}
        <div
          className="hero-overlay-left"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 25%, rgba(0,0,0,0.62) 38%, rgba(0,0,0,0.32) 58%, transparent 72%)",
          }}
        />

        {/* Layer 2: Bottom vignette */}
        <div
          className="hero-overlay-bottom"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 11,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.78) 20%, transparent 45%)",
          }}
        />

        {/* Layer 3: Top darkening for navbar readability */}
        <div
          className="hero-overlay-top"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 12,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, transparent 22%)",
          }}
        />

        {/*
          Background video.

          transform: scaleX(-1) is intentional — mirrors the video horizontally
          so the character faces into the text, creating a "virtualised" look.
          MUST be inline to guarantee it applies on actual devices regardless
          of CSS class loading order or Tailwind purge behaviour.

          objectPosition is handled by the .hero-video class in globals.css
          to allow responsive breakpoint overrides without JS.
        */}
        <video
          className="hero-video"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scaleX(-1)",
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/helpers/vizzy.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div
        className="hero-content"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingLeft: "clamp(20px, 5vw, 72px)",
          paddingRight: "clamp(20px, 5vw, 72px)",
          paddingBottom: "clamp(48px, 7vw, 100px)",
        }}
      >
        <div style={{ color: "#fff" }} className="xl:translate-y-[-20px]">

          <h1
            className="hero-heading"
            style={{
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-1.92px",
              color: "#fff",
              margin: 0,
              fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
            }}
          >
            AI Employees: Your First Digital Workers Team That Never Sleep
          </h1>

          <div style={{ height: "clamp(14px, 2vw, 20px)" }} />

          <p
            className="hero-para"
            style={{
              fontWeight: 400,
              letterSpacing: "-0.624px",
              color: "#fff",
              margin: 0,
              maxWidth: "768px",
              fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
            }}
          >
            Hire AI employees today - get your first 24/7 digital team that runs your socials,
            inbox, website, content, customer support, and business and sales operations without
            adding extra headcount.
          </p>

          <div style={{ height: "clamp(24px, 3vw, 32px)" }} />

          <div>
            <a
              style={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3b82f6",
                color: "#fff",
                fontWeight: 500,
                letterSpacing: "-0.34px",
                lineHeight: "24px",
                borderRadius: "1600px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                columnGap: "8px",
              }}
              className="hero-btn"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2563eb")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3b82f6")}
            >
              Get Sintra
            </a>
          </div>

        </div>
      </div>

      <style>{`
        /* ── Mobile overlays (<640px) ─────────────────────────────────── */
        @media (max-width: 639px) {
          .hero-overlay-left {
            background: linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.12) 35%, transparent 60%) !important;
          }
          .hero-overlay-bottom {
            background: linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.65) 22%, rgba(0,0,0,0.1) 48%, transparent 60%) !important;
          }
          .hero-overlay-top {
            background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 22%) !important;
          }
        }

        /* ── Mobile base (<640px) ─────────────────────────────────────── */
        .hero-heading {
          font-size: 38px;
          max-width: 100%;
        }
        .hero-para {
          font-size: 16px;
          line-height: 24px;
          opacity: 0.85;
        }
        .hero-btn {
          font-size: 16px;
          padding: 13px 26px;
          height: 50px;
          min-height: 48px;
        }

        /* ── Tablet (640px–1023px) ────────────────────────────────────── */
        @media (min-width: 640px) {
          .hero-heading {
            font-size: clamp(40px, 6vw, 56px);
            max-width: 75%;
          }
          .hero-para {
            font-size: 18px;
            line-height: 27px;
            opacity: 0.75;
          }
          .hero-btn {
            font-size: 17px;
            padding: 14px 28px;
            height: 52px;
            min-height: 50px;
          }
        }

        /* ── Desktop (1024px+) — pixel-perfect 1440px spec ───────────── */
        @media (min-width: 1024px) {
          .hero-heading {
            font-size: clamp(48px, 4.44vw, 64px);
            max-width: 512px;
            letter-spacing: -1.92px;
          }
          .hero-para {
            font-size: clamp(16px, 1.44vw, 20.8px);
            line-height: 29.12px;
            opacity: 0.6;
          }
          .hero-btn {
            font-size: 17px;
            padding: 12px 18px;
            height: 50px;
            min-height: 48px;
          }
        }
      `}</style>
    </section>
  );
}
