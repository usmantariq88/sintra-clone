import { ArrowRight } from "lucide-react";

const helpers = [
  { name: "Cassie", role: "Customer Support", desc: "Handles customer inquiries, resolves tickets, and delivers 5-star support 24/7 — without the wait times.", emoji: "💬", color: "#10b981", tasks: ["Reply to tickets", "Live chat support", "FAQ automation"] },
  { name: "Vizzy", role: "Executive Assistant", desc: "Manages your calendar, drafts emails, schedules meetings, and keeps you organized like a top-tier EA.", emoji: "📅", color: "#7c3aed", tasks: ["Calendar management", "Email drafting", "Meeting prep"] },
  { name: "Penn", role: "Creative Copywriter", desc: "Writes blog posts, ads, landing pages, and marketing copy that converts — in your brand's voice.", emoji: "✍️", color: "#a855f7", tasks: ["Blog articles", "Ad copy", "Landing pages"] },
  { name: "Soshie", role: "Social Media Manager", desc: "Plans, creates, and schedules social content across all platforms to grow your audience effortlessly.", emoji: "📱", color: "#ec4899", tasks: ["Content calendar", "Captions & hashtags", "Post scheduling"] },
  { name: "Emmie", role: "Email Marketer", desc: "Builds email campaigns, writes compelling sequences, and optimizes open rates to drive conversions.", emoji: "📧", color: "#f97316", tasks: ["Email sequences", "Newsletter copy", "A/B testing"] },
  { name: "Seomi", role: "SEO Strategist", desc: "Researches keywords, optimizes content, and builds strategies to rank your website on Google's first page.", emoji: "🔍", color: "#0ea5e9", tasks: ["Keyword research", "On-page SEO", "Content strategy"] },
  { name: "Buddy", role: "Sales Assistant", desc: "Crafts personalized outreach, follows up with leads, and helps you close deals faster than ever before.", emoji: "🤝", color: "#eab308", tasks: ["Lead outreach", "Follow-up emails", "Proposal writing"] },
  { name: "Cleo", role: "Data Analyst", desc: "Analyzes reports, interprets data, and turns complex numbers into clear, actionable business insights.", emoji: "📊", color: "#6366f1", tasks: ["Report analysis", "Data summaries", "Market research"] },
  { name: "Rex", role: "Recruiter", desc: "Writes job descriptions, screens candidates, and manages your hiring pipeline with precision.", emoji: "👥", color: "#14b8a6", tasks: ["Job descriptions", "Candidate screening", "Interview prep"] },
  { name: "Ace", role: "Ads Manager", desc: "Creates and optimizes paid advertising campaigns on Google, Facebook, and more for maximum ROI.", emoji: "🎯", color: "#ef4444", tasks: ["Ad campaigns", "Copy & creatives", "Performance reports"] },
  { name: "Drew", role: "Graphic Designer", desc: "Creates stunning visuals, social media graphics, and brand assets that make your business stand out.", emoji: "🎨", color: "#8b5cf6", tasks: ["Social graphics", "Brand assets", "Presentations"] },
  { name: "Herbie", role: "PR & Outreach", desc: "Manages press releases, media outreach, and brand reputation to keep your name in the spotlight.", emoji: "📣", color: "#f59e0b", tasks: ["Press releases", "Media pitches", "Brand monitoring"] },
];

export default function Helpers() {
  return (
    <section id="helpers" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-tag mb-5 mx-auto w-fit">👥 Meet the team</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            12 AI Helpers,{" "}
            <span className="gradient-text">Infinite Possibilities</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Each helper is trained for a specific role and integrates seamlessly with your workflow. Think of them as your always-on department heads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {helpers.map((h) => (
            <div key={h.name} className="helper-card rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${h.color}18` }}>
                  {h.emoji}
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: `${h.color}15`, color: h.color }}>
                  Active
                </span>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">{h.name}</h3>
                <p className="text-sm font-medium mb-2" style={{ color: h.color }}>{h.role}</p>
                <p className="text-white/45 text-sm leading-relaxed">{h.desc}</p>
              </div>

              <div className="flex flex-col gap-1.5 mt-auto">
                {h.tasks.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-white/40">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: h.color }} />
                    {t}
                  </div>
                ))}
              </div>

              <a href="#" className="flex items-center gap-1.5 text-sm font-medium mt-1 hover:gap-2.5 transition-all"
                style={{ color: h.color }}>
                Meet {h.name} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
