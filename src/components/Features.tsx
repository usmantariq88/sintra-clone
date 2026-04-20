import { Shield, Globe, Plug, Clock, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Works 24/7, No Breaks",
    desc: "Your AI team never sleeps, takes vacations, or calls in sick. Tasks get done around the clock, every single day.",
    color: "#7c3aed",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    desc: "Communicate with customers in 50+ languages. Break language barriers and serve a global audience instantly.",
    color: "#0ea5e9",
  },
  {
    icon: Plug,
    title: "Seamless Integrations",
    desc: "Connect with Gmail, Google Calendar, Slack, Notion, Shopify, and 100+ tools your team already uses.",
    color: "#10b981",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "SOC 2 compliant, end-to-end encrypted, and GDPR ready. Your data never leaves secure infrastructure.",
    color: "#ec4899",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    desc: "All conversations from email, chat, and social media funnel into one smart inbox your helpers can manage.",
    color: "#f97316",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    desc: "Track what your helpers are doing, how much time they save, and the ROI they generate for your business.",
    color: "#a855f7",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 80% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-tag mb-5 mx-auto w-fit">⚡ Features</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Built for{" "}
            <span className="gradient-text">Serious Business Owners</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Everything you need to automate your business operations, delight your customers, and scale without hiring more staff.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="feature-card rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${f.color}15` }}>
                <f.icon size={20} style={{ color: f.color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "12", label: "AI Specialists" },
            { value: "6K+", label: "Businesses" },
            { value: "50+", label: "Integrations" },
            { value: "24/7", label: "Always On" },
          ].map((s) => (
            <div key={s.label} className="feature-card rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text-purple mb-1">{s.value}</div>
              <div className="text-white/45 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
