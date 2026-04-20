const spotlights = [
  {
    name: "Vizzy",
    role: "Executive Assistant",
    desc: "Vizzy organizes your inbox, manages your calendar, preps your meetings, and keeps you running like a CEO — even when you're offline.",
    video: "/helpers/vizzy.mp4",
    color: "#7c3aed",
    emoji: "📅",
    tasks: ["Calendar scheduling", "Email management", "Meeting summaries", "Task prioritization"],
  },
  {
    name: "Soshie",
    role: "Social Media Manager",
    desc: "Soshie plans your content calendar, writes platform-specific captions, designs post concepts, and schedules everything automatically.",
    video: "/helpers/soshie.mp4",
    color: "#ec4899",
    emoji: "📱",
    tasks: ["Content calendar", "Caption writing", "Hashtag strategy", "Auto-scheduling"],
  },
  {
    name: "Buddy",
    role: "Sales Assistant",
    desc: "Buddy researches leads, crafts personalized outreach messages, handles follow-ups, and keeps your pipeline full without the grind.",
    video: "/helpers/buddy.mp4",
    color: "#eab308",
    emoji: "🤝",
    tasks: ["Lead research", "Cold outreach", "Follow-up sequences", "Proposal writing"],
  },
];

export default function HelperSpotlight() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-tag mb-5 mx-auto w-fit">🎬 Meet them live</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            See Your Helpers{" "}
            <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            These aren't bots reading scripts. Each helper has a personality, a purpose, and a work ethic that never quits.
          </p>
        </div>

        <div className="space-y-20">
          {spotlights.map((h, i) => (
            <div key={h.name}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              {/* Video card */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #0f0f1a, #12121f)",
                    border: `1px solid ${h.color}30`,
                    boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${h.color}15`,
                  }}>
                  <video
                    src={h.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                    style={{ maxHeight: "420px" }}
                  />
                  {/* Overlay badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 glass rounded-full px-3 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
                    <span className="text-white text-xs font-medium">{h.name} is active</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${h.color}18` }}>
                    {h.emoji}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl">{h.name}</h3>
                    <p className="text-sm font-medium" style={{ color: h.color }}>{h.role}</p>
                  </div>
                </div>

                <p className="text-white/55 text-lg leading-relaxed mb-8">{h.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {h.tasks.map((t) => (
                    <div key={t} className="feature-card rounded-xl px-4 py-3 flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: h.color }} />
                      <span className="text-white/60 text-sm">{t}</span>
                    </div>
                  ))}
                </div>

                <a href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:gap-3"
                  style={{ background: `${h.color}20`, border: `1px solid ${h.color}30`, color: h.color }}>
                  Meet {h.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
