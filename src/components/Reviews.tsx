import { Star } from "lucide-react";

const reviews = [
  {
    title: "SintraAI has been a Game-Changer for My Business!",
    avatar: "C",
    avatarBg: "#c2410c",
    stars: 5,
    body: "I can't recommend SintraAI enough. It's like having a personal business coach 24/7, mapping out steps to grow my company and clarifying my priorities. I feel a renewed sense of focus and control every day.",
    date: "December 29, 2024",
    author: "Socrate Concepcion",
    country: "US",
  },
  {
    title: "Sintra X Saved Me Time",
    avatar: "OZ",
    avatarBg: "#d4d4aa",
    avatarText: "#333",
    stars: 5,
    body: "Signed up for Sintra X—it felt overwhelming at first, but once it understood how I think, it turned into a creative powerhouse. Support is top-notch, and the daily integrations impress me.",
    date: "Dec 10, 2024",
    author: "Sami Liftoff",
    country: "US",
  },
  {
    title: "Early but satisfied user",
    avatar: "B",
    avatarBg: "#7c3aed",
    stars: 5,
    body: "I've only been using Sintra for a couple of weeks, but the experience has been great—especially with the social media bot reaching out to me with new ideas. The pull model feels super proactive and makes me more confident in my daily tasks.",
    date: "December 30, 2024",
    author: "Bayan Qandil",
    country: "US",
  },
  {
    title: "Perfect for Solopreneurs—New or Seasoned",
    avatar: "JL",
    avatarBg: "#a16207",
    stars: 5,
    body: "Each AI bot tackles my to-do list, from scheduling meetings to drafting emails. They're efficient, professional, and available around the clock. Highly recommend for any solopreneur looking to scale.",
    date: "December 28, 2024",
    author: "Jamie Lee",
    country: "US",
  },
  {
    title: "Some Time They're Too Effective with Ideas",
    avatar: "JA",
    avatarBg: "#0369a1",
    stars: 5,
    body: "I'm not usually one to give top marks, but once I got comfortable with Sintra's 12 helpers, I was blown away by their efficiency. They anticipate what I need and deliver beyond expectations.",
    date: "December 20, 2024",
    author: "Julia Andersen",
    country: "DK",
  },
  {
    title: "1st class service by everyone at Sintra.ai",
    avatar: "👤",
    avatarBg: "#4b5563",
    stars: 5,
    body: "I challenge anyone to compare other platforms to Sintra.ai and their staff—you won't find a better customer experience. Everyone is professional, responsive, and truly invested in your success.",
    date: "January 2, 2025",
    author: "Robert M.",
    country: "UK",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-black py-24 relative">
      <div className="max-w-[1440px] mx-auto px-[7%]">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-[52px] lg:text-[64px] text-white leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontWeight: 700 }}
          >
            AI workers of the month,<br />every month.
          </h2>
          <p className="text-[16px] text-white/50 leading-[1.7] max-w-[680px] mx-auto">
            Trusted by 40,000+ entrepreneurs across 100+ countries. Whether you're a solo founder, a
            growing team, or a global company, Sintra adapts to how you work - and grows with you.
            Join tens of thousands of businesses across the world using AI employees and get ahead
            of your competition. New features are added continuously, so your team keeps getting
            better, month after month.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "#161616" }}
            >
              {/* Title + avatar */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-semibold text-[15px] leading-snug flex-1">
                  {r.title}
                </h3>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: r.avatarBg,
                    color: r.avatarText ?? "#fff",
                  }}
                >
                  {r.avatar}
                </div>
              </div>

              {/* Stars */}
              <StarRating count={r.stars} />

              {/* Body */}
              <p className="text-[14px] text-white/50 leading-[1.7] flex-1">{r.body}</p>

              {/* Meta */}
              <p className="text-[13px] text-white/25">
                {r.date} &nbsp;•&nbsp; {r.author} &nbsp;•&nbsp; {r.country}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom social proof bar */}
        <div className="flex justify-center">
          <div
            className="flex items-center gap-4 px-5 py-3 rounded-full"
            style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Avatars */}
            <div className="flex -space-x-2">
              {["#c2410c", "#7c3aed", "#0369a1"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-white text-[14px] font-medium">
              40,000+ business owners use Sintra
            </span>
            <a
              href="#"
              className="flex items-center gap-1.5 text-[14px] text-white/70 hover:text-white transition-colors font-medium"
            >
              View more
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">+</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
