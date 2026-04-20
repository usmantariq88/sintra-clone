import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl p-12 sm:p-16 overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #160d2a, #1c1038)",
            border: "1px solid rgba(168,85,247,0.25)",
            boxShadow: "0 0 80px rgba(124,58,237,0.2)",
          }}>
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124,58,237,0.3), transparent)" }} />

          <div className="relative z-10">
            <div className="section-tag mb-6 mx-auto w-fit">🚀 Get started today</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5">
              Ready to Build Your{" "}
              <span className="gradient-text">AI Dream Team?</span>
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-2xl mx-auto">
              Join 6,000+ businesses already using Sintra to automate tasks, delight customers, and scale without burning out. Start your free 7-day trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base">
                Start free 7-day trial
                <ArrowRight size={18} />
              </a>
              <a href="#pricing" className="btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base">
                View pricing
              </a>
            </div>

            <p className="text-white/25 text-sm mt-6">No credit card required · Cancel anytime · Setup in 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
