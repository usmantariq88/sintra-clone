export default function Present() {
  return (
    <section
      style={{
        position: "relative",
        background: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Purple radial glow — left-center, behind the phone */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 22% 55%, rgba(90,20,180,0.45) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Two-column layout: image left, text right */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          maxWidth: "1440px",
          margin: "0 auto",
          minHeight: "680px",
        }}
      >
        {/* ── Visual — left ~55 % ── */}
        <div style={{ flex: "0 0 55%", display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/672384f30ff5f820be7412d1_present-mockup.avif"
            alt=""
            sizes="55vw"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* ── Text — right ~45 % ── */}
        <div
          style={{
            flex: 1,
            padding: "80px 80px 80px 24px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px, 5.2vw, 76px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 36px",
            }}
          >
            Work globally with no extra effort.
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 1.3vw, 19px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "500px",
            }}
          >
            <strong style={{ color: "#fff", fontWeight: 700 }}>
              Speaks in 100+ languages.{" "}
            </strong>
            Sintra&apos;s digital AI employees are built to work across different markets — write
            social media content in Italian, answer German emails, support your Spanish
            e-commerce store, or build websites in French. Forget hiring local teams or buying
            multiple tools. Enter foreign markets with confidence using one platform.
          </p>
        </div>
      </div>
    </section>
  );
}
