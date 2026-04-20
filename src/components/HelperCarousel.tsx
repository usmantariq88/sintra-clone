"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VIDEO_URL =
  "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460cd41f42038374d698aa_commet_idle_short_blink_1-transcode.mp4";

const helpers = [
  { name: "Cassie",  role: "Customer Support Specialist", desc: "As a smart and charming AI for customer support, Cassie crafts expertly tailored responses to customer queries while maintaining your brand's unique voice. Cassie works alongside your human employees, supporting them to deliver exceptional service." },
  { name: "Commet",  role: "eCommerce Manager",            desc: "Your trusted eCommerce guru, here to guide you through online store setup, product launches, and streamline business processes with efficient processing of orders, inventory, and customer data." },
  { name: "Dexter",  role: "Data Analyst",                 desc: "A data genius seamlessly transforming complex data into precise calculations, forecasts, and clear, actionable business insights that drive results. With Dexter, you gain actionable insights that inform your business decisions." },
  { name: "Emmie",   role: "Email Marketer",               desc: "Builds email campaigns, writes compelling sequences, and optimizes open rates to drive conversions. Emmie turns your list into loyal customers through smart, personalized communication." },
  { name: "Penn",    role: "Creative Copywriter",          desc: "Writes blog posts, ads, landing pages, and marketing copy that converts — in your brand's voice. Penn crafts content that speaks directly to your audience and drives action." },
  { name: "Soshie",  role: "Social Media Manager",         desc: "Plans, creates, and schedules social content across all platforms to grow your audience effortlessly. Soshie keeps your brand visible and engaging 24/7." },
  { name: "Seomi",   role: "SEO Strategist",               desc: "Researches keywords, optimizes content, and builds strategies to rank your website on Google's first page. Seomi gives your business the organic visibility it deserves." },
  { name: "Vizzy",   role: "Executive Assistant",          desc: "Manages your calendar, drafts emails, schedules meetings, and keeps you organized like a top-tier EA. Vizzy handles the details so you can focus on the big picture." },
];

const CARD_W = 380;
const GAP    = 20;
// 80 px left offset → at scroll=0: 80px dark peek on left, card0–2 visible, ~160px of card3 on right
const PEEK   = 80;

export default function HelperCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const max = helpers.length - 3; // last valid starting index showing 3 full cards

  const slide = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(idx + dir, max));
    setIdx(next);
    trackRef.current?.scrollTo({ left: next * (CARD_W + GAP), behavior: "smooth" });
  };

  return (
    <section style={{ background: "#000", padding: "60px 0 80px", position: "relative", overflow: "hidden" }}>

      {/* Left & right edge fade — same as actual site's vignette effect */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
        background: "linear-gradient(to right, #000 0%, transparent 10%, transparent 88%, #000 100%)" }} />

      {/* Arrows — sit inside the fade zone, vertically centred on the video */}
      <button onClick={() => slide(-1)} disabled={idx === 0} aria-label="Previous"
        style={{
          position: "absolute", left: "16px", top: "calc(60px + 260px)", transform: "translateY(-50%)",
          zIndex: 4, width: "48px", height: "48px", borderRadius: "50%",
          background: "rgba(255,255,255,0.15)", border: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", cursor: idx === 0 ? "default" : "pointer",
          opacity: idx === 0 ? 0.3 : 1, transition: "opacity .2s",
        }}>
        <ChevronLeft size={24} />
      </button>

      <button onClick={() => slide(1)} disabled={idx >= max} aria-label="Next"
        style={{
          position: "absolute", right: "16px", top: "calc(60px + 260px)", transform: "translateY(-50%)",
          zIndex: 4, width: "48px", height: "48px", borderRadius: "50%",
          background: "rgba(255,255,255,0.15)", border: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", cursor: idx >= max ? "default" : "pointer",
          opacity: idx >= max ? 0.3 : 1, transition: "opacity .2s",
        }}>
        <ChevronRight size={24} />
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: `${GAP}px`,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          /* PEEK left offset + matching right padding */
          paddingLeft: `${PEEK}px`,
          paddingRight: `${PEEK}px`,
          paddingBottom: "0",
        }}
      >
        {helpers.map((h) => (
          <div key={h.name} style={{ flex: `0 0 ${CARD_W}px`, scrollSnapAlign: "start" }}>

            {/* Video card */}
            <div style={{
              width: `${CARD_W}px`, height: "520px",
              borderRadius: "18px", overflow: "hidden",
              position: "relative", background: "#111",
            }}>
              {/* Dark gradient at top of each card (matches actual site) */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "120px", zIndex: 1,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
                pointerEvents: "none",
              }} />
              <video
                src={VIDEO_URL}
                autoPlay muted loop playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Name + description below the card */}
            <div style={{ padding: "20px 6px 0" }}>
              <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", margin: "0 0 10px", lineHeight: 1.2 }}>
                {h.name}
              </h3>
              <p style={{ fontSize: "15px", fontWeight: 400, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: 0 }}>
                {h.role}. {h.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
