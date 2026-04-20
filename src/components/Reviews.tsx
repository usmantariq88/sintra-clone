import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "E-commerce Founder",
    rating: 5,
    text: "Sintra replaced three freelancers for me. Penn writes better copy than anyone I've hired, and Cassie handles all my customer support. I got my evenings back.",
    avatar: "SM",
    color: "#7c3aed",
  },
  {
    name: "James T.",
    role: "Marketing Director",
    rating: 5,
    text: "Soshie manages our entire social media calendar. The content quality is genuinely surprising — on-brand, engaging, and it posts automatically. Incredible.",
    avatar: "JT",
    color: "#ec4899",
  },
  {
    name: "Priya K.",
    role: "SaaS CEO",
    rating: 5,
    text: "Brain AI is the killer feature. I uploaded all our docs and now every helper knows our product inside out. No more generic AI outputs — it actually gets us.",
    avatar: "PK",
    color: "#0ea5e9",
  },
  {
    name: "Marcus R.",
    role: "Agency Owner",
    rating: 5,
    text: "We run the Sintra X plan for our entire agency. 12 helpers for $97/month is insane value. We've 3x'd our output without adding a single headcount.",
    avatar: "MR",
    color: "#10b981",
  },
  {
    name: "Anna L.",
    role: "Solo Consultant",
    rating: 5,
    text: "Seomi doubled our organic traffic in 3 months. It researches keywords, rewrites pages, and even suggests link building opportunities. Set it and forget it.",
    avatar: "AL",
    color: "#f97316",
  },
  {
    name: "David W.",
    role: "Startup Founder",
    rating: 5,
    text: "The 7-day trial converted me in day 2. Vizzy organized my entire inbox and schedule while I slept. I woke up to a perfectly managed week. Mind blown.",
    avatar: "DW",
    color: "#a855f7",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 30% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag mb-5 mx-auto w-fit">⭐ Reviews</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            6,000+ Businesses{" "}
            <span className="gradient-text">Can't Be Wrong</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#fbbf24" className="text-yellow-400" />
            ))}
            <span className="text-white font-bold ml-2">4.9/5</span>
            <span className="text-white/40 ml-1">on Trustpilot</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="feature-card rounded-2xl p-6 flex flex-col gap-4">
              <Quote size={20} className="text-white/10" />
              <p className="text-white/65 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: r.color }}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-white/35 text-xs">{r.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#fbbf24" className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
