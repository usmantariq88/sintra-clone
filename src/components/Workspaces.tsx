import type { CSSProperties } from "react";

const features = [
  {
    title: "Up to 5 profiles",
    desc: "Create up to 5 business profiles, each customized to your unique business needs and specific goals, powered by AI employees ready to deliver results.",
  },
  {
    title: "Share workspace with the team",
    desc: "Collaborate with your team in real-time. Share your workspace to make business insights accessible to everyone involved.",
  },
];

const BASE: CSSProperties = {
  fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
  fontFeatureSettings: '"salt"',
  WebkitFontSmoothing: "antialiased",
  textRendering: "optimizeLegibility",
  color: "rgb(255, 255, 255)",
};

export default function Workspaces() {
  return (
    <section
      style={{
        ...BASE,
        position: "relative",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* ── Content layer (z-index 2) ─────────────────────────────────── */}
      <div
        className="ws-pad"
        style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: "72px",
          paddingRight: "72px",
        }}
      >
        {/* container-large: max-width 1280px, margin 0 auto (= 0 8px at 1440px),
            padding-section-large: 128px top/bottom */}
        <div
          className="ws-wrap"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingTop: "128px",
            paddingBottom: "128px",
          }}
        >
          {/* home-workspaces_spacer: height 682px, max-height 800px */}
          <div
            className="ws-spacer"
            style={{
              height: "682px",
              maxHeight: "800px",
            }}
          />

          {/* home-workspaces_content: max-width 768px */}
          <div
            className="ws-content"
            style={{ maxWidth: "768px" }}
          >
            {/* Heading: 64px / 500 / 64px line-height / -1.92px tracking
                max-width 512px → 5 lines × 64px = 320px height */}
            <h2
              className="ws-heading"
              style={{
                ...BASE,
                fontSize: "64px",
                fontWeight: 500,
                lineHeight: "64px",
                letterSpacing: "-1.92px",
                margin: 0,
                maxWidth: "512px",
                width: "512px",
              }}
            >
              Multiple workspaces. One team with different AI agents as employees.
            </h2>

            {/* Gap heading → features: 48px (margin-bottom margin-large) */}
            <div className="ws-gap-hf" style={{ height: "48px" }} />

            {/* home-workspaces_grid: 2 equal columns */}
            <div
              className="ws-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
              }}
            >
              {features.map((f) => (
                <div key={f.title}>
                  {/* Sub-heading: 20px / 500 / 26.6px / -0.6px tracking */}
                  <p
                    className="ws-feat-title"
                    style={{
                      ...BASE,
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "26.6px",
                      letterSpacing: "-0.6px",
                      margin: 0,
                    }}
                  >
                    {f.title}
                  </p>

                  {/* Gap sub-heading → para: 16px */}
                  <div style={{ height: "16px" }} />

                  {/* Description: 19px / 400 / 26.6px / -0.475px / opacity 0.6 */}
                  <p
                    className="ws-feat-desc"
                    style={{
                      ...BASE,
                      fontSize: "19px",
                      fontWeight: 400,
                      lineHeight: "26.6px",
                      letterSpacing: "-0.475px",
                      margin: 0,
                      opacity: 0.6,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Background layer (z-index 1) ──────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* home-workspaces_background-image:
            left: 432px (30% of 1440px), right: 0, width: 1008px (70%),
            object-fit: contain, object-position: 100% 0% */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/workspaces-mockup.avif"
          alt=""
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 70vw"
          style={{
            position: "absolute",
            top: 0,
            left: "432px",
            right: 0,
            bottom: 0,
            width: "1008px",
            height: "100%",
            objectFit: "contain",
            objectPosition: "100% 0%",
            zIndex: 1,
            display: "block",
            verticalAlign: "middle",
          }}
        />

        {/* Gradient: solid black left (text area) → transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #000 0%, #000 22%, rgba(0,0,0,0.85) 36%, rgba(0,0,0,0.2) 55%, transparent 68%)",
          }}
        />
      </div>

      <style>{`
        /* ── Tablet (768px – 1439px) ──────────────────────────────────── */
        @media (max-width: 1439px) {
          .ws-pad {
            padding-left: clamp(20px, 5vw, 72px) !important;
            padding-right: clamp(20px, 5vw, 72px) !important;
          }
          .ws-wrap {
            padding-top: clamp(64px, 8.89vw, 128px) !important;
            padding-bottom: clamp(64px, 8.89vw, 128px) !important;
          }
          .ws-spacer {
            height: clamp(300px, 47.4vw, 682px) !important;
          }
          .ws-heading {
            font-size: clamp(36px, 4.44vw, 64px) !important;
            line-height: clamp(36px, 4.44vw, 64px) !important;
            letter-spacing: clamp(-1.08px, -0.133vw, -1.92px) !important;
            width: auto !important;
            max-width: min(512px, 80%) !important;
          }
          .ws-gap-hf { height: clamp(24px, 3.33vw, 48px) !important; }
          .ws-feat-title { font-size: clamp(16px, 1.39vw, 20px) !important; }
          .ws-feat-desc { font-size: clamp(15px, 1.32vw, 19px) !important; }
        }

        /* ── Mobile (≤ 767px) ─────────────────────────────────────────── */
        @media (max-width: 767px) {
          .ws-pad {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .ws-wrap {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .ws-spacer { height: clamp(200px, 60vw, 320px) !important; }
          .ws-content { max-width: 100% !important; }
          .ws-heading {
            font-size: clamp(32px, 9vw, 44px) !important;
            line-height: 1.06 !important;
            letter-spacing: -0.96px !important;
            width: auto !important;
            max-width: 100% !important;
          }
          .ws-gap-hf { height: 24px !important; }
          .ws-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .ws-feat-title { font-size: 17px !important; }
          .ws-feat-desc { font-size: 15px !important; line-height: 1.5 !important; }
        }
      `}</style>
    </section>
  );
}
