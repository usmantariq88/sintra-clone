"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    title: "SintraAI has been a Game-Changer for My Business!",
    avatar: "C", avatarBg: "#c2410c",
    body: "I can't recommend SintraAI enough. It's like having a personal business coach 24/7, mapping out steps to grow my company and clarifying my priorities. I feel a renewed sense of focus and control every day.",
    date: "December 29, 2024", author: "Socrate Concepcion", country: "US",
  },
  {
    title: "Sintra X Saved Me Time",
    avatar: "OZ", avatarBg: "#d4d4aa", avatarText: "#333",
    body: "Signed up for Sintra X—it felt overwhelming at first, but once it understood how I think, it turned into a creative powerhouse. Support is top-notch, and the daily integrations impress me.",
    date: "Dec 10, 2024", author: "Sami Liftoff", country: "US",
  },
  {
    title: "Early but satisfied user",
    avatar: "B", avatarBg: "#7c3aed",
    body: "I've only been using Sintra for a couple of weeks, but the experience has been great—especially with the social media bot reaching out to me with new ideas. The pull model feels super proactive and makes me more confident in my daily tasks.",
    date: "December 30, 2024", author: "Bayan Qandil", country: "US",
  },
  {
    title: "Perfect for Solopreneurs—New or Seasoned",
    avatar: "JL", avatarBg: "#a16207",
    body: "Each AI bot tackles my to-do list, from scheduling meetings to drafting emails. They're efficient, professional, and available around the clock. Highly recommend for any solopreneur looking to scale.",
    date: "December 28, 2024", author: "Jamie Lee", country: "US",
  },
  {
    title: "Some Time They're Too Effective with Ideas",
    avatar: "JA", avatarBg: "#0369a1",
    body: "I'm not usually one to give top marks, but once I got comfortable with Sintra's 12 helpers, I was blown away by their efficiency. They anticipate what I need and deliver beyond expectations.",
    date: "December 20, 2024", author: "Julia Andersen", country: "DK",
  },
  {
    title: "1st class service by everyone at Sintra.ai",
    avatar: "RM", avatarBg: "#4b5563",
    body: "I challenge anyone to compare other platforms to Sintra.ai and their staff—you won't find a better customer experience. Everyone is professional, responsive, and truly invested in your success.",
    date: "January 2, 2025", author: "Robert M.", country: "UK",
  },
];

const FF = '"GT Walsheim Pro", Arial, sans-serif';

const floaterAvatars = [
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/670b5d3882af649433af33f3_mister-4.avif",
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/670b5ccb5c11f13918a3ddb5_mister-3.webp",
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/670b5cccafc8dc06f64c24bb_mister-2.webp",
];

function Stars() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "24px" }}>
      <img
        src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68da2d687c59ae461c3428a3_testimonial-stars.png"
        alt="5 star rating"
        width={148}
        height={24}
        style={{ width: "148px", height: "24px", display: "block" }}
      />
    </div>
  );
}

export default function Reviews() {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(500);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (!gridRef.current) return;
      setContentHeight(gridRef.current.scrollHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <section
      style={{
        background: "#000",
        color: "rgb(255,255,255)",
        fontFamily: FF,
        fontFeatureSettings: '"salt"',
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      {/* padding-global: 72px h-pad, position relative, z-index 1 */}
      <div
        className="rv-pad"
        style={{ paddingLeft: "72px", paddingRight: "72px", position: "relative", zIndex: 1 }}
      >
        {/* container-large: max-width 1280px, margin 0 auto, padding 128px top/bottom */}
        <div
          className="rv-wrap"
          style={{ maxWidth: "1280px", margin: "0 auto", paddingTop: "128px", paddingBottom: "128px" }}
        >

          {/* ── Data div: flex col, center, row-gap 16px, margin-bottom 80px ── */}
          <div
            className="rv-header"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "16px",
              marginBottom: "80px",
              textAlign: "center",
            }}
          >
            {/* h2: 64px / 500 / 64px line-height / -1.92px / width 768px / height 128px */}
            <h2
              className="rv-heading"
              style={{
                fontSize: "64px",
                fontWeight: 500,
                lineHeight: "64px",
                letterSpacing: "-1.92px",
                color: "rgb(255,255,255)",
                margin: 0,
                width: "768px",
                fontFamily: FF,
                fontFeatureSettings: '"salt"',
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
                textAlign: "center",
              }}
            >
              AI workers of the month,<br />every month.
            </h2>

            {/* para: 20.8px / 29.12px / -0.624px / opacity 0.6 / width 768px */}
            <p
              className="rv-para"
              style={{
                fontSize: "20.8px",
                fontWeight: 400,
                lineHeight: "29.12px",
                letterSpacing: "-0.624px",
                color: "rgb(255,255,255)",
                opacity: 0.6,
                margin: 0,
                width: "768px",
                textAlign: "center",
                fontFamily: FF,
                fontFeatureSettings: '"salt"',
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Trusted by 40,000+ entrepreneurs across 100+ countries.Whether you&apos;re a solo founder, a
              growing team, or a global company, Sintra adapts to how you work - and grows with you.
              Join tens of thousands of businesses across the world using AI employees and get ahead
              of your competition. New features are added continuously, so your team keeps getting
              better, month after month.
            </p>
          </div>

          {/* ── Reviews parent: height 500px clipped, expands on "View more" ── */}
          <div
            className="rv-reviews-parent"
            style={{
              position: "relative",
              maxHeight: expanded ? `${contentHeight}px` : "500px",
              overflow: "hidden",
              transition: "max-height 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* Grid: 3 cols × 410.664px, gap 24px, padding-bottom 80px */}
            <div
              ref={gridRef}
              className="rv-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "410.664px 410.664px 410.664px",
                columnGap: "24px",
                rowGap: "24px",
                paddingBottom: "80px",
              }}
            >
              {reviews.map((r, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "16px",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Card header: title (font-weight 500) + avatar 32×32 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      columnGap: "32px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        lineHeight: "25.5px",
                        color: "rgb(255,255,255)",
                        flex: 1,
                        fontFamily: FF,
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      {r.title}
                    </span>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: r.avatarBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: (r as { avatarText?: string }).avatarText ?? "#fff",
                        flexShrink: 0,
                        fontFamily: FF,
                      }}
                    >
                      {r.avatar}
                    </div>
                  </div>

                  {/* Stars: height 20px, width ~122.914px */}
                  <Stars />

                  {/* Body: 17px / 24px line-height / -0.34px / opacity 0.6 */}
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "-0.34px",
                      color: "rgb(255,255,255)",
                      opacity: 0.6,
                      margin: 0,
                      flexGrow: 1,
                      fontFamily: FF,
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {r.body}
                  </p>

                  {/* Meta: 14px / 20px / -0.42px / color rgb(115,115,115) */}
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "-0.42px",
                      color: "rgb(115,115,115)",
                      margin: 0,
                      fontFamily: FF,
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {r.date}&nbsp;&bull;&nbsp;{r.author}&nbsp;&bull;&nbsp;{r.country}
                  </p>
                </div>
              ))}
            </div>

            {/* ── View more pill: absolute bottom, centered, visible when collapsed ── */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                paddingBottom: "24px",
                /* gradient fade above the button */
                background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 40%, #000 100%)",
                paddingTop: "80px",
                opacity: expanded ? 0 : 1,
                transform: expanded ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                pointerEvents: expanded ? "none" : "auto",
              }}
            >
              <button
                onClick={() => setExpanded(true)}
                className="rv-toggle-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "16px",
                  height: "48px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "8px",
                  paddingRight: "16px",
                  borderRadius: "1600px",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "none",
                  cursor: "pointer",
                  color: "rgb(255,255,255)",
                  fontFamily: FF,
                  fontFeatureSettings: '"salt"',
                  fontSize: "17px",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {/* Overlapping avatar circles */}
                <div className="rv-toggle-avatars" style={{ display: "flex", alignItems: "center" }}>
                  {floaterAvatars.map((src, i) => (
                    <div
                      key={i}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "2px solid #000",
                        marginLeft: i === 0 ? 0 : "-8px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 3 - i,
                        position: "relative",
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        width={32}
                        height={32}
                        style={{ width: "32px", height: "32px", objectFit: "cover", display: "block" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Label */}
                <span
                  className="rv-toggle-label"
                  style={{ fontSize: "17px", fontWeight: 400, lineHeight: "25.5px", whiteSpace: "nowrap" }}
                >
                  40,000+ business owners use Sintra
                </span>

                {/* View more text + plus button */}
                <div className="rv-toggle-action" style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
                  <div
                    className="rv-toggle-sep"
                    style={{
                      width: "1px",
                      height: "32px",
                      background: "rgba(255,255,255,0.18)",
                      marginRight: "8px",
                    }}
                  />
                  <span className="rv-toggle-action-text" style={{ fontSize: "17px", fontWeight: 400 }}>
                    View more
                  </span>
                  <div
                    className="rv-toggle-icon"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.92)",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: expanded ? "24px" : "0",
              maxHeight: expanded ? "100px" : "0",
              opacity: expanded ? 1 : 0,
              transform: expanded ? "translateY(0)" : "translateY(-8px)",
              transition: "max-height 0.35s ease, opacity 0.35s ease, transform 0.35s ease, padding-bottom 0.35s ease",
              overflow: "hidden",
              pointerEvents: expanded ? "auto" : "none",
            }}
          >
              <button
                onClick={() => setExpanded(false)}
                className="rv-toggle-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "16px",
                  height: "48px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "8px",
                  paddingRight: "16px",
                  borderRadius: "1600px",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "none",
                  cursor: "pointer",
                  color: "rgb(255,255,255)",
                  fontFamily: FF,
                  fontFeatureSettings: '"salt"',
                  fontSize: "17px",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <div className="rv-toggle-avatars" style={{ display: "flex", alignItems: "center" }}>
                  {floaterAvatars.map((src, i) => (
                    <div
                      key={i}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "2px solid #000",
                        marginLeft: i === 0 ? 0 : "-8px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 3 - i,
                        position: "relative",
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        width={32}
                        height={32}
                        style={{ width: "32px", height: "32px", objectFit: "cover", display: "block" }}
                      />
                    </div>
                  ))}
                </div>

                <span
                  className="rv-toggle-label"
                  style={{ fontSize: "17px", fontWeight: 400, lineHeight: "25.5px", whiteSpace: "nowrap" }}
                >
                  40,000+ business owners use Sintra
                </span>

                <div className="rv-toggle-action" style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
                  <div
                    className="rv-toggle-sep"
                    style={{
                      width: "1px",
                      height: "32px",
                      background: "rgba(255,255,255,0.18)",
                      marginRight: "8px",
                    }}
                  />
                  <span className="rv-toggle-action-text" style={{ fontSize: "17px", fontWeight: 400, opacity: 0.7 }}>
                    View less
                  </span>
                  <div
                    className="rv-toggle-icon"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="none" width="100%" height="100%" aria-hidden="true" role="img">
                      <path d="M11.051 16.6852H21.5773M29.472 16.6852C29.472 23.9521 23.581 29.8431 16.3141 29.8431C9.04724 29.8431 3.15625 23.9521 3.15625 16.6852C3.15625 9.41833 9.04724 3.52734 16.3141 3.52734C23.581 3.52734 29.472 9.41833 29.472 16.6852Z" stroke="#171717" fill="#ffffff" strokeWidth="2.63158" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </button>
          </div>

        </div>
      </div>

      <style>{`
        /* ── Tablet (768px – 1439px) ──────────────────────────────────── */
        @media (max-width: 1439px) {
          .rv-pad {
            padding-left: clamp(20px, 5vw, 72px) !important;
            padding-right: clamp(20px, 5vw, 72px) !important;
          }
          .rv-wrap {
            padding-top: clamp(64px, 8.89vw, 128px) !important;
            padding-bottom: clamp(64px, 8.89vw, 128px) !important;
          }
          .rv-header { margin-bottom: clamp(40px, 5.56vw, 80px) !important; }
          .rv-heading {
            font-size: clamp(36px, 4.44vw, 64px) !important;
            line-height: clamp(36px, 4.44vw, 64px) !important;
            width: min(768px, 100%) !important;
          }
          .rv-para {
            font-size: clamp(16px, 1.44vw, 20.8px) !important;
            line-height: 1.5 !important;
            width: min(768px, 100%) !important;
          }
          .rv-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        /* ── Tablet 2-col (641px – 1023px) ───────────────────────────── */
        @media (max-width: 1023px) {
          .rv-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* ── Mobile (≤ 640px) ─────────────────────────────────────────── */
        @media (max-width: 640px) {
          .rv-pad {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .rv-wrap {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .rv-header { margin-bottom: 40px !important; }
          .rv-heading {
            font-size: clamp(32px, 9vw, 44px) !important;
            line-height: 1.05 !important;
            width: 100% !important;
          }
          .rv-para {
            font-size: 16px !important;
            line-height: 1.5 !important;
            width: 100% !important;
          }
          .rv-grid { grid-template-columns: 1fr !important; }

          .rv-toggle-btn {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            column-gap: 10px !important;
            padding-right: 12px !important;
          }
          .rv-toggle-avatars { flex-shrink: 0 !important; }
          .rv-toggle-label {
            flex: 1 !important;
            min-width: 0 !important;
            white-space: normal !important;
            line-height: 1.2 !important;
          }
          .rv-toggle-action {
            flex-shrink: 0 !important;
            column-gap: 6px !important;
          }
          .rv-toggle-sep { margin-right: 6px !important; }
          .rv-toggle-action-text {
            font-size: 15px !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
          }
        }

        /* ── Narrow iPhone width tuning (~375px only) ─────────────────── */
        @media (min-width: 370px) and (max-width: 380px) {
          .rv-toggle-btn {
            height: auto !important;
            min-height: 48px !important;
            column-gap: 8px !important;
            padding-top: 6px !important;
            padding-bottom: 6px !important;
            padding-right: 10px !important;
          }
          .rv-toggle-label {
            font-size: 14px !important;
            line-height: 1.15 !important;
          }
          .rv-toggle-action-text {
            font-size: 14px !important;
          }
          .rv-toggle-sep {
            margin-right: 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
