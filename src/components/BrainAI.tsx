import { Brain, Upload, Zap, RefreshCw } from "lucide-react";

const steps = [
  { icon: Upload, title: "Feed your Brain", desc: "Upload your SOPs, brand guidelines, tone of voice docs, and past content. Brain AI ingests it all.", color: "#7c3aed" },
  { icon: Brain, title: "AI learns your business", desc: "Your helpers understand your brand, your customers, and your goals — not generic outputs anymore.", color: "#a855f7" },
  { icon: Zap, title: "Proactive suggestions", desc: "Brain AI monitors your tasks and nudges your helpers to act before you even ask. True automation.", color: "#ec4899" },
  { icon: RefreshCw, title: "Always improving", desc: "The more you use Sintra, the smarter it gets. Feedback loops mean every output improves over time.", color: "#f97316" },
];

export default function BrainAI() {
  return (
    <section id="brain" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(124,58,237,0.12) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-tag mb-6 w-fit">🧠 Brain AI</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              The Knowledge Hub That{" "}
              <span className="gradient-text">Powers Everything</span>
            </h2>
            <p className="text-white/55 text-lg mb-10 leading-relaxed">
              Brain AI is your central intelligence layer. Feed it your documents, guidelines, and preferences — and every one of your 12 helpers works with full context about your business.
            </p>

            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}18` }}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Central brain node */}
              <div className="relative flex items-center justify-center">
                <div className="w-36 h-36 rounded-full flex items-center justify-center z-10 relative"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 0 60px rgba(124,58,237,0.5), 0 0 120px rgba(124,58,237,0.2)" }}>
                  <Brain size={52} className="text-white" />
                </div>

                {/* Orbiting helper dots */}
                {[
                  { label: "Penn", emoji: "✍️", angle: 0, color: "#a855f7" },
                  { label: "Soshie", emoji: "📱", angle: 60, color: "#ec4899" },
                  { label: "Seomi", emoji: "🔍", angle: 120, color: "#0ea5e9" },
                  { label: "Cassie", emoji: "💬", angle: 180, color: "#10b981" },
                  { label: "Emmie", emoji: "📧", angle: 240, color: "#f97316" },
                  { label: "Vizzy", emoji: "📅", angle: 300, color: "#7c3aed" },
                ].map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const r = 130;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <div key={node.label} className="absolute"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`, top: "50%", left: "50%" }}>
                      {/* Connection line */}
                      <div className="absolute top-1/2 left-1/2 h-px opacity-20 origin-left"
                        style={{
                          width: `${r}px`,
                          background: node.color,
                          transform: `rotate(${node.angle + 180}deg)`,
                        }} />
                      <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-0.5 float-anim"
                        style={{ background: `${node.color}18`, border: `1px solid ${node.color}30`, animationDelay: `${node.angle / 60 * 0.5}s` }}>
                        <span className="text-lg">{node.emoji}</span>
                        <span className="text-xs text-white/50">{node.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* File cards floating around */}
              <div className="mt-10 grid grid-cols-2 gap-3">
                {["Brand Guidelines.pdf", "SOPs.docx", "Tone of Voice.txt", "Product Catalog.csv"].map((f) => (
                  <div key={f} className="helper-card rounded-lg p-2.5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-xs" style={{ background: "#7c3aed22" }}>📄</div>
                    <span className="text-white/50 text-xs truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
