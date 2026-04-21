import Image from "next/image";

const columns = [
  {
    heading: "Features",
    links: ["Sintra X", "Brain AI", "Power-ups"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Case studies", "Book a Demo"],
  },
  {
    heading: "About Us",
    links: ["Become an Affiliate", "Careers", "How we compare"],
  },
  {
    heading: "Support",
    links: ["Help center", "Contact", "Plans and Payments"],
  },
  {
    heading: "Legal",
    links: [
      "Privacy policy",
      "Terms and conditions",
      "Refund policy",
      "Money-Back Guarantee",
      "Fair use policy",
      "Other policies",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ft-root">
      <div className="ft-shell">
        <div className="ft-inner">
          <div className="ft-content">
            <div className="ft-menu">
              <div className="ft-brand-block">
                <a href="#" className="ft-logo-link" aria-label="Sintra home">
                  <Image src="/logoBlue.svg" alt="Sintra" width={131} height={40} priority />
                </a>
                <p className="ft-copyright">
                  Copyright © 2026
                  <br />
                  PlayOS, Inc.
                  <br />
                  All rights reserved
                </p>
              </div>

              <div className="ft-links-grid">
                {columns.map((col) => (
                  <div key={col.heading} className="ft-col">
                    <h4 className="ft-col-title">{col.heading}</h4>
                    <ul className="ft-col-list">
                      {col.links.map((link) => (
                        <li key={link}>
                          <a href="#" className="ft-link">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="ft-trust">
              <div className="trustpilot-light">
                <div
                  className="trustpilot-widget"
                  data-locale="en-US"
                  data-template-id="53aa8807dec7e10d38f59f32"
                  data-businessunit-id="64d265adc76b8b730c104b17"
                  data-style-height="150px"
                  data-style-width="100%"
                  data-token="a434805a-be13-477a-a809-ef8e80cc186a"
                  style={{ position: "relative", width: "100%", maxWidth: "280px" }}
                >
                  <iframe
                    title="Customer reviews powered by Trustpilot"
                    loading="lazy"
                    style={{
                      position: "relative",
                      height: "150px",
                      width: "100%",
                      borderStyle: "none",
                      display: "block",
                      overflow: "hidden",
                    }}
                    src="https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/index.html?templateId=53aa8807dec7e10d38f59f32&businessunitId=64d265adc76b8b730c104b17#locale=en-US&styleHeight=150px&styleWidth=100%25&token=a434805a-be13-477a-a809-ef8e80cc186a"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ft-root {
          background-color: rgb(255, 255, 255);
          box-sizing: border-box;
          color: rgb(23, 23, 23);
          display: block;
          font-family: "GT Walsheim Pro", Arial, sans-serif;
          font-feature-settings: "salt";
          font-size: 17px;
          font-weight: 400;
          line-height: 25.5px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        .ft-shell {
          box-sizing: border-box;
          color: rgb(23, 23, 23);
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 1280px;
          width: 100%;
        }

        .ft-inner {
          box-sizing: border-box;
          color: rgb(23, 23, 23);
          display: block;
          width: 100%;
          padding-top: 128px;
          padding-bottom: 128px;
        }

        .ft-content {
          box-sizing: border-box;
          color: rgb(23, 23, 23);
          display: block;
          width: 100%;
        }

        .ft-menu {
          align-items: flex-start;
          box-sizing: border-box;
          color: rgb(23, 23, 23);
          column-gap: 96px;
          display: flex;
          justify-content: space-between;
          row-gap: 96px;
          width: 100%;
          min-height: 276px;
        }

        .ft-brand-block {
          width: 210px;
          flex: 0 0 210px;
        }

        .ft-logo-link {
          display: inline-block;
          margin-bottom: 22px;
          line-height: 0;
        }

        .ft-copyright {
          margin: 0;
          color: rgba(23, 23, 23, 0.5);
          font-size: 32px;
          font-weight: 400;
          line-height: 46px;
          letter-spacing: -0.64px;
        }

        .ft-links-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(100px, 1fr));
          column-gap: 48px;
          width: 100%;
        }

        .ft-col-title {
          margin: 0 0 18px;
          color: rgb(23, 23, 23);
          font-size: 32px;
          font-weight: 500;
          line-height: 46px;
          letter-spacing: -0.64px;
        }

        .ft-col-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ft-link {
          color: rgba(23, 23, 23, 0.5);
          text-decoration: none;
          font-size: 32px;
          font-weight: 400;
          line-height: 46px;
          letter-spacing: -0.64px;
          transition: color 0.2s ease;
        }

        .ft-link:hover {
          color: rgba(23, 23, 23, 0.75);
        }

        .ft-trust {
          align-items: center;
          box-sizing: border-box;
          color: rgb(23, 23, 23);
          display: flex;
          justify-content: space-between;
          width: 100%;
          min-height: 150px;
          margin-top: 64px;
        }

        @media (max-width: 1439px) {
          .ft-shell {
            max-width: 1280px;
            padding-left: clamp(20px, 5vw, 72px);
            padding-right: clamp(20px, 5vw, 72px);
          }

          .ft-inner {
            padding-top: clamp(64px, 8.89vw, 128px);
            padding-bottom: clamp(64px, 8.89vw, 128px);
          }

          .ft-menu {
            column-gap: clamp(28px, 4vw, 96px);
            row-gap: clamp(40px, 5vw, 96px);
          }

          .ft-copyright,
          .ft-col-title,
          .ft-link {
            font-size: clamp(16px, 1.18vw, 17px);
            line-height: clamp(24px, 1.77vw, 25.5px);
            letter-spacing: clamp(-0.34px, -0.02vw, -0.25px);
          }
        }

        @media (max-width: 1023px) {
          .ft-menu {
            flex-direction: column;
          }

          .ft-brand-block {
            width: 100%;
            flex: 0 0 auto;
          }

          .ft-links-grid {
            grid-template-columns: repeat(3, minmax(120px, 1fr));
            row-gap: 26px;
          }
        }

        @media (max-width: 767px) {
          .ft-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .ft-inner {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .ft-links-grid {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
          }

          .ft-trust {
            margin-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .ft-links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
