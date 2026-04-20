"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is AI employee?",
    a: "An AI employee is a digital worker powered by artificial intelligence that can autonomously handle specific business tasks — like customer support, copywriting, SEO, and more — 24/7 without breaks.",
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
    <section className="bg-black py-24">
      <div className="max-w-[1440px] mx-auto px-[7%]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="max-w-[460px]">
            <h2
              className="text-[48px] lg:text-[56px] text-white leading-[1.1] mb-8"
              style={{ fontWeight: 500 }}
            >
              AI Employee FAQs.Let&apos;s clear things up.
            </h2>
            <p className="text-[15px] text-white/50 leading-[1.7] mb-5">
              Yes, we understand - AI-powered solutions, business automation tools,
              AI workers, digital AI staff... a lot of big words can get confusing.
            </p>
            <p className="text-[15px] text-white/50 leading-[1.7]">
              We&apos;re here to clear the air - and if you still feel the need to ask AI
              questions - Cassie is ready to answer 24/7.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="w-full">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/15">
                <button
                  className="w-full flex items-center justify-between py-6 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[17px] text-white font-medium pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="text-white flex-shrink-0 transition-transform duration-200"
                    style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {open === i && (
                  <div className="pb-6 text-[15px] text-white/50 leading-[1.7]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
            {/* Top border for first item */}
          </div>

        </div>
      </div>
    </section>
  );
}
