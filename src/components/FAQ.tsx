"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exactly is Sintra AI?",
    a: "Sintra is a platform of 12 specialized AI assistants (helpers) that automate your business tasks. Each helper is trained for a specific role — copywriting, SEO, customer support, social media, email marketing, and more.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT is a general-purpose chat tool. Sintra's helpers are specialized, proactive, and trained on your business data via Brain AI. They don't wait for instructions — they complete tasks autonomously based on your goals.",
  },
  {
    q: "What is Brain AI?",
    a: "Brain AI is your central knowledge hub. Upload your brand guidelines, SOPs, product info, and tone of voice docs. Every helper reads this so all outputs are tailored to your specific business — not generic AI text.",
  },
  {
    q: "Can I try it before paying?",
    a: "Yes! All plans come with a 7-day free trial. No credit card required. You get full access to your chosen helpers and Brain AI during the trial period.",
  },
  {
    q: "What integrations are available?",
    a: "Sintra integrates with Gmail, Outlook, Google Calendar, Google Drive, Slack, Notion, Shopify, Facebook, Instagram, LinkedIn, and 50+ more tools. New integrations are added regularly.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. Sintra is SOC 2 compliant, GDPR ready, and uses end-to-end encryption. Your documents and data are never used to train AI models or shared with third parties.",
  },
  {
    q: "Can I switch plans or cancel anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel your subscription at any time from your dashboard. No contracts, no cancellation fees, no questions asked.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag mb-5 mx-auto w-fit">❓ FAQ</div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Got Questions?{" "}
            <span className="gradient-text">We Got Answers</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="feature-card rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-white font-medium text-base">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className="text-white/40 flex-shrink-0 ml-4 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
