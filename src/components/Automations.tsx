
export default function Automations() {
  return (
    /*
      Section height is determined by its content (heading + cards + padding).
      The background image is position:absolute, aspect-ratio:3/2, anchored to
      the top — exactly matching .home-automations_background { position:absolute;
      inset: 0% 0% auto; aspect-ratio: 3/2 } from the actual site CSS.
    */
    <section
      className="automations-section"
      style={{
        position: "relative",
        background: "#000",
        color: "#fff",
        paddingTop: "clamp(320px, 42vw, 604.8px)",
        paddingLeft: "clamp(16px, 2.78vw, 40px)",
        paddingRight: "clamp(16px, 2.78vw, 40px)",
      }}
    >

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
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 60%, #000 100%)",
          }}
        />
      </div>

      {/* ── Content — sits on top, its height drives the section height ── */}
      <div
        className="automations-copy xl:!mt-[230px]"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "768px",
          margin: "0 auto",
          padding: 0,
          textAlign: "center",
        }}
      >
        <h2
          className="automations-heading xl:w-[768px] xl:max-w-[768px]"
          style={{
            fontSize: "64px",
            fontWeight: 500,
            color: "#fff",
            lineHeight: "64px",
            letterSpacing: "-1.92px",
            margin: 0,
            fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
            fontFeatureSettings: '"salt"',
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
          }}
        >
          Employ AI staff to automate<br />work. Even while you sleep.
        </h2>
        <div className="automations-copy-spacer" style={{ height: "32px" }} />
        <p
          className="automations-paragraph xl:w-[768px] xl:max-w-[768px]"
          style={{
            fontSize: "20.8px",
            fontWeight: 400,
            color: "#fff",
            opacity: 0.6,
            letterSpacing: "-0.624px",
            lineHeight: "29.12px",
            margin: 0,
            fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
            fontFeatureSettings: '"salt"',
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
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
        className="automations-grid"
        style={{
          position: "relative",
          zIndex: 2,
          width: "1024px",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "64px 0 100px",
          display: "grid",
          gridAutoColumns: "1fr",
          gridTemplateColumns: "488px 488px",
          gridTemplateRows: "586.242px 737.555px",
          columnGap: "48px",
          rowGap: "48px",
          boxSizing: "border-box",
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

        {/* ── Soshie — spans both columns, text left / image right ── */}
        <div
          className="automations-card automations-card-wide"
          style={{
            gridColumn: "1 / -1",
            width: "100%",
            maxWidth: "1024px",
            justifySelf: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backgroundImage: "linear-gradient(rgb(139, 92, 246), rgb(81, 54, 144))",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            boxShadow: "rgba(130, 58, 255, 0.4) 0px 0px 70px 0px",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "511px 511px",
            gridTemplateRows: "584.242px",
            height: "586.242px",
            columnGap: 0,
            rowGap: 0,
            overflow: "hidden",
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
          {/* Text — left half, vertically centred */}
          <div
            className="automations-card-content"
            style={{
              padding: "56px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                width: "415px",
                margin: 0,
                color: "rgb(255, 255, 255)",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                fontFeatureSettings: '"salt"',
                fontSize: "40px",
                fontWeight: 500,
                lineHeight: "48px",
                letterSpacing: "-1.2px",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Soshie, schedule social media posts for me
            </h3>
            <div style={{ height: "24px" }} />
            <p
              style={{
                width: "415px",
                margin: 0,
                color: "rgb(255, 255, 255)",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                fontFeatureSettings: '"salt"',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "26.6px",
                letterSpacing: "-0.6px",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Automate your social media game with AI for marketing. Write, create, and post
              content effortlessly with AI-powered solutions.
            </p>
          </div>

          {/* Image — right half, fills the column */}
          <div
            className="automations-card-media"
            style={{
              width: "511px",
              height: "584.242px",
              paddingTop: "64px",
              paddingLeft: "32px",
              paddingRight: "32px",
              boxSizing: "border-box",
              overflowX: "clip",
              overflowY: "clip",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e8395c6fe6685369d24_automation-soshie.avif"
              loading="lazy"
              sizes="511px"
              srcSet="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e8395c6fe6685369d24_automation-soshie-p-500.avif 500w, https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e8395c6fe6685369d24_automation-soshie.avif 830w"
              alt=""
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "50% 100%",
                display: "block",
                verticalAlign: "middle",
              }}
            />
          </div>
        </div>

        {/* ── Cassie — left column, text top / image bottom (full width, auto height) ── */}
        <div
          className="automations-card automations-card-blue"
          style={{
            width: "488px",
            height: "737.555px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backgroundImage: "linear-gradient(rgb(59, 130, 246), rgb(35, 76, 144))",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            boxShadow: "rgba(51, 113, 212, 0.4) 0px 2px 70px 0px",
            boxSizing: "border-box",
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "486px",
            gridTemplateRows: "319.562px 415.992px",
            columnGap: 0,
            rowGap: 0,
            overflow: "hidden",
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
          <div className="automations-card-content" style={{ width: "486px", height: "319.562px", boxSizing: "border-box", padding: "64px 48px 0" }}>
            <h3
              style={{
                width: "390px",
                margin: 0,
                color: "rgb(255, 255, 255)",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                fontFeatureSettings: '"salt"',
                fontSize: "40px",
                fontWeight: 500,
                lineHeight: "48px",
                letterSpacing: "-1.2px",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Cassie, check my Facebook comments
            </h3>
            <div style={{ height: "24px" }} />
            <p
              style={{
                display: "inline",
                color: "rgb(255, 255, 255)",
                opacity: 0.6,
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                fontFeatureSettings: '"salt"',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "26.6px",
                letterSpacing: "-0.5px",
                margin: 0,
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Engage your audience with business automation tools. Use AI for customer support
              to analyze comments and craft personalized responses. By automating comment
              analysis, your team can focus on building stronger customer relationships.
            </p>
          </div>
          {/* Full image, no fixed height — shows the complete composite */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div
            className="automations-card-media"
            style={{
              width: "486px",
              height: "415.992px",
              paddingTop: "64px",
              paddingLeft: "32px",
              paddingRight: "32px",
              boxSizing: "border-box",
              overflowX: "clip",
              overflowY: "clip",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e835d7ac382c6ebb990_automation-cassie.avif"
              alt=""
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                display: "block",
                objectFit: "contain",
                objectPosition: "50% 100%",
                verticalAlign: "middle",
              }}
            />
          </div>
        </div>

        {/* ── Vizzy — right column, text top / image bottom (full width, auto height) ── */}
        <div
          className="automations-card automations-card-yellow"
          style={{
            width: "488px",
            height: "737.555px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backgroundImage: "linear-gradient(rgb(245, 158, 11), rgb(143, 92, 6))",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            boxShadow: "rgba(176, 114, 10, 0.4) 0px 0px 70px 0px",
            boxSizing: "border-box",
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "486px",
            gridTemplateRows: "294.922px 424.633px",
            columnGap: "16px",
            rowGap: "16px",
            overflow: "hidden",
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
          <div className="automations-card-content" style={{ width: "486px", height: "294.922px", boxSizing: "border-box", padding: "64px 48px 0" }}>
            <h3
              style={{
                width: "390px",
                margin: 0,
                color: "rgb(255, 255, 255)",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                fontFeatureSettings: '"salt"',
                fontSize: "40px",
                fontWeight: 500,
                lineHeight: "48px",
                letterSpacing: "-1.2px",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Vizzy, help me prepare for today&apos;s meetings
            </h3>
            <div style={{ height: "24px" }} />
            <p
              style={{
                display: "inline",
                color: "rgb(255, 255, 255)",
                opacity: 0.6,
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                fontFeatureSettings: '"salt"',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "26.6px",
                letterSpacing: "-0.5px",
                margin: 0,
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              Boost productivity with AI. Streamline business processes with daily summaries
              based on your email and calendar to keep your schedule on track.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div
            className="automations-card-media"
            style={{
              width: "486px",
              height: "396.078px",
              paddingTop: "64px",
              paddingLeft: "32px",
              paddingRight: "32px",
              boxSizing: "border-box",
              overflowX: "clip",
              overflowY: "clip",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e83b8cd1c76d0434bef_automation-vizzy.avif"
              alt=""
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                display: "block",
                objectFit: "contain",
                objectPosition: "50% 100%",
                verticalAlign: "middle",
              }}
            />
          </div>
        </div>

      </div>

    </section>
  );
}
