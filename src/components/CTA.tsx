import Image from "next/image";

export default function CTA() {
  return (
    <section
      className="cta-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        color: "rgb(255,255,255)",
        fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
        fontFeatureSettings: '"salt"',
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      <div className="home-cta_background" />

      <div
        className="cta-main"
        style={{
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1280px",
          width: "100%",
          paddingTop: "128px",
          paddingBottom: "0px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "640px 640px",
            gridTemplateRows: "604.219px",
            width: "1280px",
            height: "604.219px",
          }}
        >
          <div
            className="cta-data"
            style={{
              alignItems: "center",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "flex-start",
              position: "relative",
              width: "640px",
              height: "604.219px",
              zIndex: 2,
            }}
          >
            <div
              className="cta-copy-wrap"
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "600px",
                maxWidth: "600px",
                height: "604.219px",
                paddingTop: "128px",
                paddingBottom: "128px",
              }}
            >
              <h2
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255,255,255)",
                  display: "block",
                  fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                  fontFeatureSettings: '"salt"',
                  fontSize: "64px",
                  fontWeight: 500,
                  lineHeight: "64px",
                  letterSpacing: "-1.92px",
                  margin: 0,
                  width: "512px",
                  maxWidth: "512px",
                }}
              >
              Your new AI digital workers team with infinite knowledge.
              </h2>

              <p
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255,255,255)",
                  display: "block",
                  fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                  fontFeatureSettings: '"salt"',
                  fontSize: "20.8px",
                  fontWeight: 400,
                  lineHeight: "29.12px",
                  letterSpacing: "-0.624px",
                  opacity: 0.6,
                  margin: 0,
                  marginTop: "24px",
                  width: "600px",
                }}
              >
                AI for business has never been this personal. Hire your new team - work less, but do more.
              </p>

              <div
                style={{
                  alignItems: "center",
                  boxSizing: "border-box",
                  columnGap: "16px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                  fontFeatureSettings: '"salt"',
                  fontSize: "17px",
                  fontWeight: 400,
                  height: "50px",
                  justifyContent: "flex-start",
                  lineHeight: "25.5px",
                  rowGap: "16px",
                  width: "600px",
                  marginTop: "40px",
                }}
              >
                <a
                  href="/pricing"
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgb(59,130,246)",
                    border: "1px solid rgb(59,130,246)",
                    borderRadius: "1600px",
                    boxSizing: "border-box",
                    columnGap: "8px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "100%",
                    minHeight: "48px",
                    height: "50px",
                    paddingTop: "12px",
                    paddingRight: "18px",
                    paddingBottom: "12px",
                    paddingLeft: "18px",
                    rowGap: "8px",
                    color: "rgb(255,255,255)",
                    fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                    fontFeatureSettings: '"salt"',
                    fontSize: "17px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    textRendering: "optimizeLegibility",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255,255,255)",
                      cursor: "pointer",
                      display: "block",
                      fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                      fontFeatureSettings: '"salt"',
                      fontSize: "17px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      textRendering: "optimizeLegibility",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    Get Sintra
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="cta-image-wrap"
            style={{
              alignItems: "flex-end",
              alignSelf: "stretch",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "flex-end",
              justifySelf: "stretch",
              position: "relative",
              width: "640px",
              height: "604.219px",
              zIndex: 2,
            }}
          >
            <Image
              src="/cta-mockup.avif"
              alt="Sintra App"
              width={576}
              height={553}
              className="cta-image"
              style={{
                display: "block",
                width: "576px",
                height: "553.438px",
                maxWidth: "640.834px",
                maxHeight: "615.834px",
                objectFit: "contain",
                objectPosition: "0% 100%",
                verticalAlign: "middle",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .home-cta_background {
          z-index: 1;
          background-image: linear-gradient(#3b82f600, #3b82f64d);
          position: absolute;
          inset: 0%;
        }

        @media (max-width: 1439px) {
          .cta-main {
            max-width: 1280px !important;
            padding-top: clamp(64px, 8.89vw, 128px) !important;
            padding-left: clamp(20px, 5vw, 72px) !important;
            padding-right: clamp(20px, 5vw, 72px) !important;
          }
          .cta-grid {
            width: 100% !important;
            height: auto !important;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
            grid-template-rows: auto !important;
            column-gap: clamp(16px, 2.2vw, 32px) !important;
            align-items: end !important;
          }
          .cta-data,
          .cta-image-wrap {
            width: 100% !important;
            height: auto !important;
          }
          .cta-copy-wrap {
            width: 100% !important;
            max-width: 600px !important;
            height: auto !important;
            padding-top: clamp(40px, 6vw, 96px) !important;
            padding-bottom: clamp(40px, 6vw, 96px) !important;
          }
          .cta-copy-wrap h2 {
            width: min(512px, 100%) !important;
            max-width: 100% !important;
            font-size: clamp(50px, 4.45vw, 64px) !important;
            line-height: clamp(50px, 4.45vw, 64px) !important;
            letter-spacing: clamp(-1.92px, -0.12vw, -1.2px) !important;
          }
          .cta-copy-wrap p {
            width: 100% !important;
            font-size: clamp(17px, 1.45vw, 20.8px) !important;
            line-height: 1.4 !important;
          }
          .cta-copy-wrap > div {
            width: 100% !important;
            margin-top: clamp(28px, 3vw, 40px) !important;
          }
          .cta-image {
            width: min(576px, 100%) !important;
            height: auto !important;
          }
        }

        @media (max-width: 1279px) {
          .cta-main {
            padding-left: clamp(20px, 4vw, 48px) !important;
            padding-right: clamp(20px, 4vw, 48px) !important;
          }
          .cta-copy-wrap {
            padding-top: clamp(28px, 4vw, 72px) !important;
            padding-bottom: clamp(28px, 4vw, 72px) !important;
          }
          .cta-image-wrap {
            justify-content: center !important;
          }
        }

        @media (max-width: 1023px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            row-gap: 28px !important;
          }
          .cta-data {
            order: 1 !important;
            justify-content: center !important;
          }
          .cta-image-wrap {
            order: 2 !important;
            justify-content: center !important;
            align-items: flex-end !important;
          }
          .cta-copy-wrap h2 {
            width: min(512px, 100%) !important;
            font-size: clamp(40px, 7.4vw, 54px) !important;
            line-height: 1.02 !important;
            letter-spacing: clamp(-1.4px, -0.2vw, -0.8px) !important;
          }
          .cta-copy-wrap p,
          .cta-copy-wrap > div {
            width: 100% !important;
          }
          .cta-copy-wrap p {
            margin-top: 18px !important;
            font-size: 18px !important;
            line-height: 1.45 !important;
          }
          .cta-copy-wrap > div {
            margin-top: 28px !important;
          }
          .cta-copy-wrap a {
            width: fit-content !important;
          }
        }

        @media (max-width: 767px) {
          .cta-main {
            padding-top: 56px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .cta-copy-wrap {
            max-width: 100% !important;
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
          .cta-copy-wrap h2 {
            font-size: clamp(34px, 11vw, 44px) !important;
            line-height: 1.04 !important;
            letter-spacing: -1px !important;
          }
          .cta-copy-wrap p {
            font-size: 16px !important;
            line-height: 1.45 !important;
            margin-top: 14px !important;
          }
          .cta-copy-wrap > div {
            margin-top: 22px !important;
            height: auto !important;
          }
          .cta-copy-wrap a {
            min-height: 48px !important;
          }
          .cta-image-wrap {
            margin-top: 8px !important;
          }
          .cta-image {
            width: min(420px, 100%) !important;
          }
        }

        @media (max-width: 480px) {
          .cta-main {
            padding-top: 48px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .cta-grid {
            row-gap: 22px !important;
          }
          .cta-copy-wrap h2 {
            font-size: 32px !important;
            line-height: 1.05 !important;
            letter-spacing: -0.8px !important;
          }
          .cta-copy-wrap p {
            font-size: 15px !important;
            line-height: 1.42 !important;
          }
          .cta-copy-wrap > div {
            margin-top: 20px !important;
          }
          .cta-copy-wrap a {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
