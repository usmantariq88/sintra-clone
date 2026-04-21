"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is AI employee?",
    a: "An AI employee is a digital worker powered by artificial intelligence that can autonomously handle specific business tasks - like customer support, copywriting, SEO, and more - 24/7 without breaks.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes. Sintra offers a money-back guarantee. If you're not satisfied, contact our support team and we'll make it right.",
  },
  {
    q: "Can I invite my team to use Sintra?",
    a: "Absolutely. Sintra supports team collaboration so you can invite teammates and work together with your AI employees.",
  },
  {
    q: "What can I use Sintra's AI employees for?",
    a: "You can use them for social media management, email marketing, SEO, customer support, sales outreach, copywriting, data analysis, and much more.",
  },
  {
    q: "How to use Sintra's AI employees?",
    a: "Simply sign up, pick your AI employee, give them context about your business via Brain AI, and start delegating tasks. It's as simple as having a conversation.",
  },
  {
    q: "Can AI employees replace human employees?",
    a: "AI employees handle repetitive, time-consuming tasks so your human team can focus on higher-value work. They augment your team rather than replace the human element.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <div className="faq-pad">
        <div className="faq-wrap">
          <div className="faq-layout">
            <div className="faq-copy">
              <h2 className="faq-title">AI Employee FAQs.Let&apos;s clear things up.</h2>
              <p className="faq-copy-text">
                Yes, we understand - AI-powered solutions, business automation tools, AI workers, digital AI staff...
                a lot of big words can get confusing.
              </p>
              <p className="faq-copy-text faq-copy-text-second">
                We&apos;re here to clear the air - and if you still feel the need to ask AI questions - Cassie is ready
                to answer 24/7.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="faq-item">
                    <button
                      className="faq-trigger"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                    >
                      <h3 className="faq-question">{faq.q}</h3>
                      <ChevronDown size={20} className={isOpen ? "faq-icon faq-icon-open" : "faq-icon"} />
                    </button>

                    <div id={`faq-panel-${i}`} className={isOpen ? "faq-answer-wrap faq-answer-open" : "faq-answer-wrap"}>
                      <div className="faq-answer-inner">
                        <p className="faq-answer">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background: rgb(0, 0, 0);
          color: rgb(255, 255, 255);
          box-sizing: border-box;
          font-family: "GT Walsheim Pro", Arial, sans-serif;
          font-feature-settings: "salt";
          font-size: 17px;
          font-weight: 400;
          line-height: 25.5px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        .faq-pad {
          box-sizing: border-box;
          padding-left: 72px;
          padding-right: 72px;
          position: relative;
          z-index: 1;
        }

        .faq-wrap {
          box-sizing: border-box;
          margin-left: auto;
          margin-right: auto;
          max-width: 1280px;
          width: 100%;
          padding-top: 128px;
          padding-bottom: 128px;
        }

        .faq-layout {
          display: grid;
          align-items: start;
          grid-template-columns: 514.281px 685.719px;
          column-gap: 80px;
          row-gap: 64px;
          width: 100%;
        }

        .faq-copy,
        .faq-title,
        .faq-copy-text,
        .faq-list {
          max-width: 100%;
        }

        .faq-copy {
          width: 514.281px;
        }

        .faq-title {
          margin: 0;
          width: 514.281px;
          font-size: 48px;
          font-weight: 500;
          line-height: 52.8px;
          letter-spacing: -1.44px;
        }

        .faq-copy-text {
          margin: 24px 0 0;
          width: 514.281px;
          color: rgb(255, 255, 255);
          opacity: 0.6;
          font-size: 17px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.34px;
        }

        .faq-copy-text-second {
          margin-top: 12px;
        }

        .faq-list {
          width: 685.719px;
          border-bottom: 1px solid rgb(0, 0, 0);
        }

        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          width: 100%;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 21.9453px 0;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgb(255, 255, 255);
        }

        .faq-question {
          margin: 0;
          padding-right: 16px;
          font-size: 20.8px;
          font-weight: 500;
          line-height: 29.12px;
          letter-spacing: -0.624px;
        }

        .faq-icon {
          flex-shrink: 0;
          transform: rotate(0deg);
          transition: transform 0.3s ease;
        }

        .faq-icon-open {
          transform: rotate(180deg);
        }

        .faq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.35s ease, opacity 0.35s ease;
        }

        .faq-answer-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer {
          margin: 0;
          padding-bottom: 20px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 17px;
          font-weight: 400;
          line-height: 25.5px;
          letter-spacing: -0.34px;
        }

        @media (max-width: 1439px) {
          .faq-pad {
            padding-left: clamp(20px, 5vw, 72px);
            padding-right: clamp(20px, 5vw, 72px);
          }

          .faq-wrap {
            padding-top: clamp(72px, 8vw, 128px);
            padding-bottom: clamp(72px, 8vw, 128px);
          }

          .faq-layout {
            grid-template-columns: minmax(0, 0.75fr) minmax(0, 1fr);
            column-gap: clamp(32px, 5vw, 80px);
          }

          .faq-copy,
          .faq-title,
          .faq-copy-text,
          .faq-list {
            width: 100%;
          }

          .faq-title {
            font-size: clamp(36px, 4vw, 48px);
            line-height: 1.1;
            letter-spacing: clamp(-1.44px, -0.1vw, -1px);
          }
        }

        @media (max-width: 1023px) {
          .faq-layout {
            grid-template-columns: 1fr;
            row-gap: 40px;
          }

          .faq-copy-text {
            max-width: 90%;
          }
        }

        @media (max-width: 767px) {
          .faq-wrap {
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .faq-title {
            font-size: clamp(30px, 9vw, 38px);
            line-height: 1.08;
            letter-spacing: -0.9px;
          }

          .faq-copy-text {
            max-width: 100%;
            margin-top: 16px;
            font-size: 16px;
            line-height: 1.45;
          }

          .faq-copy-text-second {
            margin-top: 10px;
          }

          .faq-trigger {
            padding-top: 18px;
            padding-bottom: 18px;
          }

          .faq-question {
            font-size: 18px;
            line-height: 1.35;
            letter-spacing: -0.4px;
          }

          .faq-answer {
            font-size: 16px;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .faq-pad {
            padding-left: 16px;
            padding-right: 16px;
          }

          .faq-wrap {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .faq-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
