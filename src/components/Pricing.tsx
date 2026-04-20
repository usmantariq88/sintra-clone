"use client";
import { useState } from "react";
import { Check, Zap } from "lucide-react";

const individual = {
  name: "Individual Helper",
  price: { monthly: 39, yearly: 29 },
  desc: "Perfect for solopreneurs who need one specialized AI assistant.",
  features: [
    "1 AI helper of your choice",
    "Brain AI knowledge hub",
    "Unlimited tasks",
    "Gmail & Calendar integration",
    "24/7 availability",
    "Email support",
  ],
};

const bundle = {
  name: "Sintra X",
  price: { monthly: 97, yearly: 69 },
  desc: "The complete AI team for growing businesses. All 12 helpers included.",
  badge: "Most Popular",
  features: [
    "All 12 AI helpers",
    "Brain AI knowledge hub",
    "Unlimited tasks",
    "100+ integrations",
    "Priority processing",
    "Advanced analytics",
    "Team collaboration",
    "Dedicated onboarding",
    "Priority support",
    "Custom workflows",
  ],
};

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag mb-5 mx-auto w-fit">💸 Pricing</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Simple,{" "}
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            No hidden fees. Cancel anytime. Start with a free 7-day trial.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? "bg-white/10 text-white" : "text-white/40"}`}>
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${yearly ? "bg-white/10 text-white" : "text-white/40"}`}>
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(16,185,129,0.15)", color: "#10b981" }}>Save 25%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Individual */}
          <div className="pricing-card rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-white font-bold text-xl mb-1">{individual.name}</h3>
              <p className="text-white/40 text-sm">{individual.desc}</p>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">${yearly ? individual.price.yearly : individual.price.monthly}</span>
              <span className="text-white/40 ml-1">/mo</span>
              {yearly && <p className="text-white/30 text-sm mt-1">billed annually</p>}
            </div>
            <a href="#" className="btn-outline text-center py-3 rounded-full text-white font-semibold mb-6 block">
              Start free trial
            </a>
            <ul className="space-y-3 flex-1">
              {individual.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                  <Check size={15} className="text-purple-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Bundle */}
          <div className="pricing-card featured rounded-2xl p-8 flex flex-col relative overflow-hidden">
            {/* Shimmer border */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ padding: "1px", background: "linear-gradient(135deg, rgba(168,85,247,0.6), rgba(244,114,182,0.4), rgba(168,85,247,0.6))" }}>
              <div className="w-full h-full rounded-2xl" style={{ background: "linear-gradient(145deg, #160d2a, #1c1038)" }} />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{bundle.name}</h3>
                  <p className="text-white/40 text-sm">{bundle.desc}</p>
                </div>
                <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0 ml-2"
                  style={{ background: "rgba(124,58,237,0.25)", color: "#c084fc" }}>
                  <Zap size={10} /> {bundle.badge}
                </span>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">${yearly ? bundle.price.yearly : bundle.price.monthly}</span>
                <span className="text-white/40 ml-1">/mo</span>
                {yearly && <p className="text-white/30 text-sm mt-1">billed annually</p>}
              </div>
              <a href="#" className="btn-primary text-center py-3 rounded-full text-white font-semibold mb-6 block">
                Start free trial
              </a>
              <ul className="space-y-3 flex-1">
                {bundle.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <Check size={15} className="text-purple-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          All plans include a 7-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
