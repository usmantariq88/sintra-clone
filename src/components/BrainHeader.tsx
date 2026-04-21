export default function BrainHeader() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
      }}
    >
      {/* padding-global */}
      <div
        style={{
          paddingLeft: "clamp(20px, 7%, 120px)",
          paddingRight: "clamp(20px, 7%, 120px)",
          paddingTop: "clamp(64px, 8vw, 128px)",
          paddingBottom: "clamp(64px, 8vw, 128px)",
        }}
      >
        {/* container-large */}
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* text-align-center */}
          <div style={{ textAlign: "center" }}>
            {/* max-width-large align-center */}
            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {/* Heading — text-size-7xl */}
              <h2
                style={{
                  fontSize: "clamp(40px, 5.5vw, 64px)",
                  fontWeight: 500,
                  color: "#fff",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  margin: 0,
                  textAlign: "center",
                  fontFamily:
                    '"GT Walsheim Pro", Arial, sans-serif',
                  WebkitFontSmoothing: "antialiased",
                  textRendering: "optimizeLegibility",
                }}
              >
                They learn your business. Just like real workers.
              </h2>

              {/* spacer-small */}
              <div style={{ height: "clamp(16px, 2vw, 24px)" }} />

              {/* Paragraph — text-size-2xl text-style-muted */}
              <p
                style={{
                  fontSize: "clamp(16px, 1.4vw, 20.8px)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: "1.4",
                  letterSpacing: "-0.03em",
                  margin: 0,
                  textAlign: "center",
                  fontFamily:
                    '"GT Walsheim Pro", Arial, sans-serif',
                  WebkitFontSmoothing: "antialiased",
                  textRendering: "optimizeLegibility",
                }}
              >
                Onboard your AI employees by sharing your brand context. Add documents, provide tone
                of voice, branded guidelines, and explain your business values. Every interaction
                adds to their understanding, so outputs stay consistent, on-brand, and aligned with
                how your business actually operates.
                <br />
                &zwj;
                <br />
                As your business grows, your AI workers grow with it - they learn from new work,
                adapt to requested changes, and improve over time without retraining or setup. Work
                with digital employee team that evolves alongside you, not tools you constantly have
                to reconfigure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
