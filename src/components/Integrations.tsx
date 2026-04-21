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
    /* section_home-integrations background-color-alternate
       Computed: width 1440px, height 1040.91px */
    <section
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        overflow: "hidden",
      }}
    >
      {/* padding-global: 72px horizontal */}
      <div
        style={{
          paddingLeft: "clamp(20px, 5vw, 72px)",
          paddingRight: "clamp(20px, 5vw, 72px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* container-large  padding-section-large: 128px top/bottom
            Inner width: 1440 - 72*2 = 1296px */}
        <div
          style={{
            paddingTop: "clamp(64px, 8.9vw, 128px)",
            paddingBottom: "clamp(64px, 8.9vw, 128px)",
          }}
        >
          {/* home-integrations_grid
              grid-template-columns: 600px 600px, column-gap: 96px
              grid-template-rows: 784.914px (single row, fixed height)
              Total: 600+96+600 = 1296px matches container */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "clamp(24px, 6.67vw, 96px)",
              /* Fixed row height matching original computed 784.914px */
              gridTemplateRows: "clamp(400px, 54.5vw, 784px)",
              alignItems: "end",
            }}
          >
            {/* ── Left: home-integrations_content (align-self: end) ── */}
            <div
              style={{
                alignSelf: "end",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* margin-bottom margin-medium: 32px */}
              <div style={{ marginBottom: "32px" }}>
                <h2
                  style={{
                    fontSize: "clamp(36px, 4.44vw, 64px)",
                    fontWeight: 500,
                    color: "#fff",
                    lineHeight: 1.0,
                    letterSpacing: "-0.03em",
                    margin: 0,
                    fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Integrates with your favorite tools.
                </h2>
              </div>

              {/* margin-bottom margin-large: 48px */}
              <div style={{ marginBottom: "48px" }}>
                <p
                  style={{
                    fontSize: "clamp(14px, 1.18vw, 17px)",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: "1.5",
                    margin: 0,
                    fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Your AI employees don&apos;t live in a silo. They work directly inside the tools
                  your business already relies on - from email and calendars to social platforms,
                  CRMs, to personal apps. By connecting your existing stack, Sintra gives your
                  digital staff the context they need to follow your workflows, act at the right
                  moment, and keep work moving without manual handoffs. No new processes to learn.
                  No disruption. Just smarter execution across your tools.
                </p>
              </div>

              {/* home-integrations_icons-wrapper
                  flex-wrap, column-gap 32, row-gap 32, max-width 400px */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: "clamp(16px, 2.22vw, 32px)",
                  rowGap: "clamp(16px, 2.22vw, 32px)",
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
                    style={{
                      /* 4 cols × 64px + 3 gaps × 32px = 352px < 400px ✓
                         Row height: (160 - 32) / 2 = 64px */
                      width: "clamp(44px, 4.44vw, 64px)",
                      height: "clamp(44px, 4.44vw, 64px)",
                      objectFit: "contain",
                      display: "block",
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: home-integrations_visual (iPhone mockup) ──
                Grid cell height is fixed via gridTemplateRows.
                Image fills the cell height, width auto.
                align-self: stretch → fills the full row height. */}
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d29b63a7448ed3346cf2_iphone-integrations-clear.avif"
                alt=""
                loading="lazy"
                style={{
                  /* Fill the grid cell height, let width scale proportionally */
                  height: "100%",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
