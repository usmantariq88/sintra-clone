"use client";

import { useEffect, useRef, useState } from "react";

const CDN = "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F";

const HELPERS = [
  {
    id: "buddy", name: "Buddy", href: "/buddy",
    desc: "Business Development Manager. Your go-to AI for business development, crafting growth strategies, delivering business insights, and excelling in AI for marketing to ensure success in product launches, audience analysis, and more. Buddy has helped companies of all sizes achieve their business development goals.",
    poster: CDN + "67460c4c525b5d57a4e8bb02_buddy_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460c4c525b5d57a4e8bb02_buddy_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460c4c525b5d57a4e8bb02_buddy_idle_short_blink_1-transcode.webm",
  },
  {
    id: "cassie", name: "Cassie", href: "/cassie",
    desc: "Customer Support Specialist. As a smart and charming AI for customer support, Cassie crafts expertly tailored responses to customer queries while maintaining your brand's unique voice. Cassie works alongside your human employees, supporting them to deliver exceptional customer support.",
    poster: CDN + "67460ccdf6e4fa275a7c75a9_cassie_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460ccdf6e4fa275a7c75a9_cassie_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460ccdf6e4fa275a7c75a9_cassie_idle_short_blink_1-transcode.webm",
  },
  {
    id: "commet", name: "Commet", href: "/commet",
    desc: "eCommerce Manager. Your trusted eCommerce guru, here to guide you through online store setup, product launches, and streamline business processes with efficient processing of orders, inventory, and customer data.",
    poster: CDN + "67460cd41f42038374d698aa_commet_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460cd41f42038374d698aa_commet_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460cd41f42038374d698aa_commet_idle_short_blink_1-transcode.webm",
  },
  {
    id: "dexter", name: "Dexter", href: "/dexter",
    desc: "Data Analyst. A data genius seamlessly transforming complex data into precise calculations, forecasts, and clear, actionable business insights that drive results. With Dexter, you gain actionable insights that inform your business decisions.",
    poster: CDN + "67460cdad71380b27d8ea973_dexter_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460cdad71380b27d8ea973_dexter_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460cdad71380b27d8ea973_dexter_idle_short_blink_1-transcode.webm",
  },
  {
    id: "emmie", name: "Emmie", href: "/emmie",
    desc: "Email Marketing Specialist. From crafting engaging emails to generating effective win-back flows, Emmie uses her AI-powered solutions to turn your subscriber list into revenue. Emmie also helps reduce the cost of email marketing campaigns while increasing ROI.",
    poster: CDN + "67460cdf842bd7f9ed3683d5_emmie_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460cdf842bd7f9ed3683d5_emmie_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460cdf842bd7f9ed3683d5_emmie_idle_short_blink_1-transcode.webm",
  },
  {
    id: "gigi", name: "Gigi", href: "/gigi",
    desc: "Personal Growth Coach. Boost productivity with AI — whether you need help planning meals, organizing study sessions, or building workout routines, Gigi is here to support your journey to a better self and bring balance and improvement to your daily life.",
    poster: CDN + "67460ce788887965a3f51d76_gigi_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460ce788887965a3f51d76_gigi_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460ce788887965a3f51d76_gigi_idle_short_blink_1-transcode.webm",
  },
  {
    id: "penn", name: "Penn", href: "/penn",
    desc: "Copywriter. Dedicated to writing compelling copy for your ads, blog posts, websites, advertorials and other marketing campaigns that convert readers into customers. Penn can generate engaging ad copy for a new product launch or craft a persuasive email marketing campaign to boost conversions.",
    poster: CDN + "67460ced1ae3bb4bd972d59e_penn_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460ced1ae3bb4bd972d59e_penn_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460ced1ae3bb4bd972d59e_penn_idle_short_blink_1-transcode.webm",
  },
  {
    id: "scouty", name: "Scouty", href: "/scouty",
    desc: "Recruiter. Turning hiring challenges into opportunities, crafting magnetic job posts, and guiding smooth team onboarding. Scouty can support recruitment needs across all departments, from HR to finance to customer service.",
    poster: CDN + "67460cf23297a144839f1512_scouty_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460cf23297a144839f1512_scouty_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460cf23297a144839f1512_scouty_idle_short_blink_1-transcode.webm",
  },
  {
    id: "seomi", name: "Seomi", href: "/seomi",
    desc: "SEO Specialist. Streamline business processes with Seomi's proven SEO strategies, SEO-optimized blog posts, and AI-powered solutions to boost your website rankings. Seomi brings advanced SEO skills to your team, helping you stay ahead in search rankings.",
    poster: CDN + "67460cf8218f6fb4b7f708b2_seomi_idle_short_blilnk_1-poster-00001.jpg",
    mp4:    CDN + "67460cf8218f6fb4b7f708b2_seomi_idle_short_blilnk_1-transcode.mp4",
    webm:   CDN + "67460cf8218f6fb4b7f708b2_seomi_idle_short_blilnk_1-transcode.webm",
  },
  {
    id: "soshie", name: "Soshie", href: "/soshie",
    desc: "Social Media Manager. Boost productivity with AI social media manager by using business automation tools — generate content, plan strategies, schedule posts, find trends, and more. Soshie can collaborate with your marketing and content teams to ensure a unified social media strategy.",
    poster: CDN + "67460cfe78dd86c42545bad8_soshie_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460cfe78dd86c42545bad8_soshie_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460cfe78dd86c42545bad8_soshie_idle_short_blink_1-transcode.webm",
  },
  {
    id: "vizzy", name: "Vizzy", href: "/vizzy",
    desc: "Virtual Assistant. A trustworthy AI for business owners and busy entrepreneurs to handle calendars, schedule meetings, plan trips, or simply ask AI questions about daily challenges.",
    poster: CDN + "67460d0381cab44875de2583_vizzy_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460d0381cab44875de2583_vizzy_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460d0381cab44875de2583_vizzy_idle_short_blink_1-transcode.webm",
  },
  {
    id: "milli", name: "Milli", href: "/milli",
    desc: "Sales Manager. Milli uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that help you close deals with confidence. Milli is also capable of adapting sales strategies to different audiences and markets.",
    poster: CDN + "67460d0a566f3616a558637a_milli_idle_short_blink_1-poster-00001.jpg",
    mp4:    CDN + "67460d0a566f3616a558637a_milli_idle_short_blink_1-transcode.mp4",
    webm:   CDN + "67460d0a566f3616a558637a_milli_idle_short_blink_1-transcode.webm",
  },
] as const;

interface Dims {
  cardW: number;
  videoH: number;
  gap: number;
  leftPad: number;
  arrowInset: number;
  arrowSize: number;
  overlayW: number;
  overlayGradL: string;
  overlayGradR: string;
  containerW: string;
  visibleCount: number;
  nameFontSize: string;
  descFontSize: string;
}

function calcDims(vw: number): Dims {
  if (vw < 900) {
    const isPhone = vw < 640;
    const containerFraction = isPhone ? 0.95 : 0.90;
    const containerPx = Math.round(vw * containerFraction);
    const cardW = isPhone ? Math.min(560, containerPx - 32) : Math.min(560, vw - 56);
    const gap = isPhone ? 16 : 20;
    const sideGutter = Math.round((containerPx - cardW) / 2);
    return {
      cardW,
      videoH: Math.round(cardW * 1.765),
      gap,
      leftPad: sideGutter,
      arrowInset: isPhone ? 6 : 16,
      arrowSize: isPhone ? 2.1 : 3.25,
      overlayW: isPhone ? Math.max(20, sideGutter + 4) : 76,
      overlayGradL: isPhone
        ? "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, transparent 100%)"
        : "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 36%, rgba(0,0,0,0.6) 66%, transparent 100%)",
      overlayGradR: isPhone
        ? "linear-gradient(to left, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, transparent 100%)"
        : "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 36%, rgba(0,0,0,0.6) 66%, transparent 100%)",
      containerW: isPhone ? "95%" : "90%",
      visibleCount: 1,
      nameFontSize: isPhone ? "1.25rem" : "1.875rem",
      descFontSize: isPhone ? "0.9375rem" : "1.0625rem",
    };
  }
  if (vw < 1280) {
    const cardW = 320;
    const gap = 24;
    return {
      cardW,
      videoH: Math.round(cardW * 1.765),
      gap,
      leftPad: Math.round((vw - 2 * cardW - gap) / 2),
      arrowInset: 16,
      arrowSize: 3.25,
      overlayW: 120,
      overlayGradL: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 36%, rgba(0,0,0,0.6) 66%, transparent 100%)",
      overlayGradR: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 36%, rgba(0,0,0,0.6) 66%, transparent 100%)",
      containerW: "90%",
      visibleCount: 2,
      nameFontSize: "1.5rem",
      descFontSize: "1rem",
    };
  }
  const cardW = 340;
  const gap = 32;
  return {
    cardW,
    videoH: 600,
    gap,
    leftPad: Math.round((vw - 3 * cardW - 2 * gap) / 2),
    arrowInset: 24,
    arrowSize: 3.5,
    overlayW: 160,
    overlayGradL: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 36%, rgba(0,0,0,0.6) 66%, transparent 100%)",
    overlayGradR: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 36%, rgba(0,0,0,0.6) 66%, transparent 100%)",
    containerW: "90%",
    visibleCount: 3,
    nameFontSize: "1.875rem",
    descFontSize: "1.0625rem",
  };
}

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ width: "70%", height: "70%" }}>
    <path d="M8.33203 19.9987H31.6654M31.6654 19.9987L19.9987 8.33203M31.6654 19.9987L19.9987 31.6654"
      stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ width: "70%", height: "70%" }}>
    <path d="M31.668 19.9987H8.33464M8.33464 19.9987L20.0013 8.33203M8.33464 19.9987L20.0013 31.6654"
      stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CLONE_COUNT = 3;
const extendedHelpers = [
  ...HELPERS.slice(-CLONE_COUNT),
  ...HELPERS,
  ...HELPERS.slice(0, CLONE_COUNT),
];

export default function HelperCarousel() {
  // idx is position in extendedHelpers; real items start at CLONE_COUNT
  const [idx, setIdx] = useState(CLONE_COUNT);
  const [isAnimated, setIsAnimated] = useState(true);
  const [dims, setDims] = useState<Dims>(() =>
    calcDims(typeof window !== "undefined" ? window.innerWidth : 1280)
  );

  const touchX = useRef(0);
  const touchY = useRef(0);

  // Preload poster images for leading clones so first backward swipe has no black flash
  useEffect(() => {
    HELPERS.slice(-CLONE_COUNT).forEach(h => {
      const img = new window.Image();
      img.src = h.poster;
    });
  }, []);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setDims(calcDims(vw));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goNext = () => setIdx(prev => prev + 1);
  const goPrev = () => setIdx(prev => prev - 1);

  const handleTransitionEnd = () => {
    const N = HELPERS.length;
    if (idx < CLONE_COUNT) {
      setIsAnimated(false);
      setIdx(idx + N);
    } else if (idx >= CLONE_COUNT + N) {
      setIsAnimated(false);
      setIdx(idx - N);
    }
  };

  useEffect(() => {
    if (!isAnimated) {
      requestAnimationFrame(() => requestAnimationFrame(() => setIsAnimated(true)));
    }
  }, [isAnimated]);

  // active is 0-based position in real HELPERS array
  const active = idx - CLONE_COUNT;
  const tx = dims.leftPad - active * (dims.cardW + dims.gap);

  const arrowBase: React.CSSProperties = {
    position: "absolute",
    top: `${dims.videoH / 2}px`,
    transform: "translateY(-50%)",
    zIndex: 20,
    width: `${dims.arrowSize}rem`,
    height: `${dims.arrowSize}rem`,
    borderRadius: "100%",
    border: "none",
    background: "#353033",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 52px #000",
    flexShrink: 0,
    cursor: "pointer",
    transition: "opacity 0.2s ease",
  };

  return (
    <section style={{ background: "#000", padding: "8rem 0" }}>
      {/* Full-width carousel track with overflow clip */}
      <div className="mx-auto"
        style={{ position: "relative", overflow: "hidden", width: dims.containerW }}
        onTouchStart={e => {
          touchX.current = e.touches[0].clientX;
          touchY.current = e.touches[0].clientY;
        }}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - touchX.current;
          const dy = e.changedTouches[0].clientY - touchY.current;
          if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
            dx < 0 ? goNext() : goPrev();
          }
        }}
      >
        
        {/* Left dark fade overlay covering the full card area (video + text). */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${dims.overlayW}px`,
            background: dims.overlayGradL,
            zIndex: 15,
            pointerEvents: "none",
          }}
        />

        {/* Right dark fade overlay covering the full card area (video + text). */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: `${dims.overlayW}px`,
            background: dims.overlayGradR,
            zIndex: 15,
            pointerEvents: "none",
          }}
        />


        {/* Prev arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous helper"
          style={{ ...arrowBase, left: `${dims.arrowInset}px` }}
        >
          <PrevIcon />
        </button>

        {/* Next arrow */}
        <button
          onClick={goNext}
          aria-label="Next helper"
          style={{ ...arrowBase, right: `${dims.arrowInset}px` }}
        >
          <NextIcon />
        </button>

        {/* Sleeve */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            transform: `translate3d(${tx}px, 0px, 0px)`,
            transition: isAnimated ? "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            willChange: "transform",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedHelpers.map((h, i) => {
            return (
              <div
                key={`${h.id}-${i}`}
                style={{ flexShrink: 0, width: `${dims.cardW}px`, marginRight: `${dims.gap}px` }}
              >
                <a
                  href={h.href}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    width: `${dims.cardW}px`,
                    height: `${dims.videoH}px`,
                    position: "relative",
                  }}
                >
                  <video
                    poster={h.poster}
                    autoPlay muted loop playsInline
                    preload="metadata"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  >
                    <source src={h.mp4}  type="video/mp4" />
                    <source src={h.webm} type="video/webm" />
                  </video>
                </a>

                <div
                  style={{
                    paddingTop: "1.5rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  <a href={h.href} style={{ textDecoration: "none", display: "inline-block", marginBottom: "0.5rem" }}>
                    <h2
                      style={{
                        fontSize: dims.nameFontSize,
                        fontWeight: 500,
                        lineHeight: 1.2,
                        letterSpacing: "-0.03em",
                        color: "#fff",
                        margin: 0,
                        fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                        WebkitFontSmoothing: "antialiased",
                        textRendering: "optimizeLegibility",
                      }}
                      className="xl:mb-4"
                    >
                      {h.name}
                    </h2>
                  </a>

                  <p
                    style={{
                      fontSize: dims.descFontSize,
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: "#a3a3a3",
                      margin: 0,
                      fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                      WebkitFontSmoothing: "antialiased",
                      textRendering: "optimizeLegibility",
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Centered "Get helpers" button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2.5rem",
        }}
      >
        <a
          href="/ai-team"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "8px",
            backgroundColor: "#3b82f6",
            color: "#fff",
            borderRadius: "1600px",
            padding: "12px 18px",
            fontSize: "17px",
            fontWeight: 500,
            lineHeight: "24px",
            height: "50px",
            minHeight: "48px",
            textDecoration: "none",
            fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
            fontFeatureSettings: '"salt"',
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2563eb"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3b82f6"; }}
        >
          Get helpers
        </a>
      </div>
    </section>
  );
}
