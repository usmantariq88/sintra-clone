
export default function Automations() {
  return (
    /*
      Section height is determined by its content (heading + cards + padding).
      The background image is position:absolute, aspect-ratio:3/2, anchored to
      the top — exactly matching .home-automations_background { position:absolute;
      inset: 0% 0% auto; aspect-ratio: 3/2 } from the actual site CSS.
    */
    <section style={{ position: "relative", background: "#000", color: "#fff" }}>

      {/* ── Background image — absolute, 3:2 aspect ratio, top-anchored ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          /* height = width * (2/3) via aspect-ratio */
          aspectRatio: "3 / 2",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673f7efdd574ab7ce78808c6_automations-helpers-cover.avif"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 50%",
            display: "block",
          }}
        />
        {/* Gradient: subtle at top, opaque black at bottom so heading text is legible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.82) 78%, #000 100%)",
          }}
        />
      </div>

      {/* ── Content — sits on top, its height drives the section height ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "860px",
          margin: "0 auto",
          /*
            padding-top pushes the heading to ~70 % of the background height.
            Background height = 66.67 vw, so 70 % ≈ 46.7 vw.
            clamp() keeps it sane on very small / very large screens.
          */
          padding: "clamp(260px, 46vw, 700px) 24px 0",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            margin: "0 0 20px",
          }}
        >
          Employ AI staff to automate<br />work. Even while you sleep.
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.4vw, 20px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.65,
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          You don&apos;t need hundreds of employees to run a modern business. Sintra AI gives
          you the best AI employees to automate day-to-day work — so your business keeps
          moving. Work gets done continuously, efficiently, around the clock and without
          burnout.
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "960px",
          margin: "0 auto",
          padding: "64px 24px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >

        {/* ── Soshie — spans both columns, text left / image right ── */}
        <div
          style={{
            gridColumn: "1 / -1",
            background: "#7840EB",
            borderRadius: "20px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "380px",
          }}
        >
          {/* Text — left half, vertically centred */}
          <div
            style={{
              padding: "56px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(24px, 2.4vw, 34px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              Soshie, schedule social media posts for me
            </h3>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Automate your social media game with AI for marketing. Write, create, and post
              content effortlessly with AI-powered solutions.
            </p>
          </div>

          {/* Image — right half, fills the column */}
          <div style={{ position: "relative", overflow: "hidden" }} className="pt-16 px-4 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e8395c6fe6685369d24_automation-soshie.avif" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e8395c6fe6685369d24_automation-soshie-p-500.avif 500w, https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e8395c6fe6685369d24_automation-soshie.avif 830w" alt="" class="home-automations_card-image" />
          </div>
        </div>

        {/* ── Cassie — left column, text top / image bottom (full width, auto height) ── */}
        <div
          style={{
            background: "#3D7EF0",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "40px 36px 20px" }}>
            <h3
              style={{
                fontSize: "clamp(22px, 2vw, 30px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                margin: "0 0 14px",
              }}
            >
              Cassie, check my Facebook comments
            </h3>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Engage your audience with business automation tools. Use AI for customer support
              to analyze comments and craft personalized responses. By automating comment
              analysis, your team can focus on building stronger customer relationships.
            </p>
          </div>
          {/* Full image, no fixed height — shows the complete composite */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e835d7ac382c6ebb990_automation-cassie.avif"
            alt=""
            style={{ width: "100%", height: "auto", display: "block", marginTop: "auto" }}
          />
        </div>

        {/* ── Vizzy — right column, text top / image bottom (full width, auto height) ── */}
        <div
          style={{
            background: "#D4930A",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "40px 36px 20px" }}>
            <h3
              style={{
                fontSize: "clamp(22px, 2vw, 30px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                margin: "0 0 14px",
              }}
            >
              Vizzy, help me prepare for today&apos;s meetings
            </h3>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Boost productivity with AI. Streamline business processes with daily summaries
              based on your email and calendar to keep your schedule on track.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e83b8cd1c76d0434bef_automation-vizzy.avif"
            alt=""
            style={{ width: "100%", height: "auto", display: "block", marginTop: "auto" }}
          />
        </div>

      </div>

    </section>
  );
}
