const logos = [
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8ee29c42f15c6707fa7_Facebook%20SVG%20Icons.svg",
    alt: "Facebook",
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8de64d6f4d7f26fd126_Instagram%20SVG%20Icon.svg",
    alt: "Instagram",
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8f48f6442c3908dd984_Gmail%20Logo%20SVG.svg",
    alt: "Gmail",
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8efa606f510309578f2_Google%20Calendar%20Icon.svg",
    alt: "Google Calendar",
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8d567988dc4ab79316a_Outlook%20SVG%20Icon.svg",
    alt: "Outlook",
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8ef1b32e53cf36b4a36_Google%20Drive%20SVG%20Icon.svg",
    alt: "Google Drive",
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8e5d76655df048cc4f9_Strava%20SVG%20Icon.svg",
    alt: "Strava",
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67864f97bae3e849a2171fa7_notion.avif",
    alt: "Notion",
  },
];

export default function Integrations() {
  return (
    <section
      style={{
        background: "#000",
        color: "rgb(255, 255, 255)",
        fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
        fontFeatureSettings: '"salt"',
        fontSize: "17px",
        fontWeight: 400,
        lineHeight: "25.5px",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      {/* padding-global: 72px h-padding, position relative, z-index 1 */}
      <div
        className="int-pad"
        style={{
          paddingLeft: "72px",
          paddingRight: "72px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* container-large: max-width 1280px, margin 0 auto (=0 8px at 1440px),
            padding-section-large: 128px top/bottom */}
        <div
          className="int-wrap"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingTop: "128px",
            paddingBottom: "128px",
          }}
        >
          {/* home-integrations_grid:
              grid-template-columns: 592px 592px
              column-gap: 96px  (592+96+592=1280 ✓)
              grid-template-rows: 784.914px (driven by image div height) */}
          <div
            className="int-grid"
            style={{
              display: "grid",
              gridAutoColumns: "1fr",
              gridTemplateColumns: "592px 592px",
              columnGap: "96px",
              rowGap: "96px",
            }}
          >

            {/* ── Left: home-integrations_content (align-self: end) ──────── */}
            <div
              className="int-left"
              style={{
                alignSelf: "end",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Heading: font-size 64px, font-weight 500, line-height 64px,
                  letter-spacing -1.92px, height 128px (2 lines × 64px) */}
              <h2
                className="int-heading"
                style={{
                  fontSize: "64px",
                  fontWeight: 500,
                  color: "rgb(255, 255, 255)",
                  lineHeight: "64px",
                  letterSpacing: "-1.92px",
                  margin: 0,
                  fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                  fontFeatureSettings: '"salt"',
                  WebkitFontSmoothing: "antialiased",
                  textRendering: "optimizeLegibility",
                }}
              >
                Integrates with your favorite tools.
              </h2>

              {/* Spacer heading → paragraph: 32px */}
              <div className="int-spacer-hd" style={{ height: "32px" }} />

              {/* Paragraph: font-size 20px, line-height 26.6px,
                  letter-spacing -0.6px, full white, height ~186px
                  128 + 32 + 186.156 + 48 + 160 + 64 = 618.156 ✓ */}
              <p
                className="int-para"
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "rgb(255, 255, 255)",
                  lineHeight: "26.6px",
                  letterSpacing: "-0.6px",
                  margin: 0,
                  fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                  fontFeatureSettings: '"salt"',
                  WebkitFontSmoothing: "antialiased",
                  textRendering: "optimizeLegibility",
                }}
              >
                Your AI employees don&apos;t live in a silo. They work directly inside the tools
                your business already relies on - from email and calendars to social platforms,
                CRMs, to personal apps. By connecting your existing stack, Sintra gives your
                digital staff the context they need to follow your workflows, act at the right
                moment, and keep work moving without manual handoffs. No new processes to learn.
                No disruption. Just smarter execution across your tools.
              </p>

              {/* Icons grid — last: margin-top 48px (para→icons gap),
                  margin-bottom 64px (space below within bottom-aligned block) */}
              <div className="int-icons-mb" style={{ marginTop: "48px", marginBottom: "64px" }}>
                <div
                  className="int-icons-flex"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    columnGap: "32px",
                    rowGap: "32px",
                    /* 4 icons/row × 64px + 3 × 32px gap = 352px ≤ 400px
                       2 rows × 64px + 1 × 32px row-gap = 160px height ✓ */
                    maxWidth: "400px",
                  }}
                >
                  {logos.map((logo) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="int-icon"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "contain",
                        display: "block",
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: home-integrations_visual (iPhone mockup) ────────
                align-self: end, justify-self: center
                width: 480px, max-width: 480px
                height: 784.914px (drives the grid row height)
                overflow-x: clip, overflow-y: clip */}
            <div
              className="int-right"
              style={{
                alignSelf: "end",
                justifySelf: "center",
                width: "480px",
                maxWidth: "480px",
                height: "784.914px",
                overflowX: "clip",
                overflowY: "clip",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d29b63a7448ed3346cf2_iphone-integrations-clear.avif"
                alt=""
                loading="lazy"
                className="int-right-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  verticalAlign: "middle",
                }}
              />
            </div>

          </div>
        </div>
      </div>

      <style>{`
        /* ── Tablet (768px – 1439px) ──────────────────────────────────── */
        @media (max-width: 1439px) {
          .int-pad {
            padding-left: clamp(20px, 5vw, 72px) !important;
            padding-right: clamp(20px, 5vw, 72px) !important;
          }
          .int-wrap {
            padding-top: clamp(64px, 8.89vw, 128px) !important;
            padding-bottom: clamp(64px, 8.89vw, 128px) !important;
          }
          .int-grid {
            grid-template-columns: 1fr 1fr !important;
            column-gap: clamp(32px, 6.67vw, 96px) !important;
          }
          .int-right {
            width: 100% !important;
            max-width: 100% !important;
            height: clamp(400px, 54.5vw, 784.914px) !important;
          }
          .int-heading {
            font-size: clamp(36px, 4.44vw, 64px) !important;
            line-height: clamp(36px, 4.44vw, 64px) !important;
            letter-spacing: clamp(-1.08px, -0.133vw, -1.92px) !important;
          }
          .int-para {
            font-size: clamp(16px, 1.39vw, 20px) !important;
            line-height: 1.4 !important;
          }
          .int-spacer-hd {
            height: clamp(16px, 2.22vw, 32px) !important;
          }
          .int-icons-mb {
            margin-top: clamp(24px, 3.33vw, 48px) !important;
            margin-bottom: clamp(32px, 4.44vw, 64px) !important;
          }
          .int-icon {
            width: clamp(44px, 4.44vw, 64px) !important;
            height: clamp(44px, 4.44vw, 64px) !important;
          }
          .int-icons-flex {
            column-gap: clamp(16px, 2.22vw, 32px) !important;
            row-gap: clamp(16px, 2.22vw, 32px) !important;
          }
        }

        /* ── Mobile (≤ 767px) — stack vertically ─────────────────────── */
        @media (max-width: 767px) {
          .int-pad {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .int-wrap {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .int-grid {
            grid-template-columns: 1fr !important;
            column-gap: 0 !important;
            row-gap: 40px !important;
          }
          .int-left { order: 2; }
          .int-right {
            order: 1;
            height: clamp(280px, 80vw, 400px) !important;
            justify-self: center !important;
            width: clamp(200px, 60vw, 300px) !important;
            max-width: 300px !important;
          }
          .int-heading {
            font-size: clamp(32px, 9vw, 44px) !important;
            line-height: 1.05 !important;
            letter-spacing: -0.96px !important;
          }
          .int-para {
            font-size: 16px !important;
            line-height: 1.5 !important;
            letter-spacing: -0.32px !important;
          }
          .int-spacer-hd { height: 16px !important; }
          .int-icons-mb { margin-bottom: 24px !important; }
          .int-icon {
            width: 44px !important;
            height: 44px !important;
          }
          .int-icons-flex {
            column-gap: 16px !important;
            row-gap: 16px !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
