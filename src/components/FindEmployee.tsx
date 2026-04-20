import { ChevronLeft, ChevronRight } from "lucide-react";

const employees = [
  {
    name: "Mille",
    role: "Data Analyst",
    desc: "Mille helps you turn raw data into clear insights, run reports, and make confident decisions backed by numbers.",
    color: "from-violet-950 to-indigo-950",
    accentColor: "text-violet-400",
    borderColor: "border-violet-800/40",
    emoji: "🔮",
  },
  {
    name: "Buddy",
    role: "Business Development Manager",
    desc: "Business Development Manager: Your go-to for sales insights, answers, correspondences, and tracking prospects.",
    color: "from-blue-950 to-slate-950",
    accentColor: "text-blue-400",
    borderColor: "border-blue-800/40",
    video: "/helpers/buddy.mp4",
    featured: true,
  },
  {
    name: "Cassie",
    role: "Customer Support Specialist",
    desc: "Customer Support Specialist: Always ready to help answer inquiries, process orders, and resolve customer issues, supporting them to better understand your services.",
    color: "from-cyan-950 to-teal-950",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-800/40",
    emoji: "💬",
  },
  {
    name: "Penn",
    role: "Creative Copywriter",
    desc: "Penn crafts compelling copy for blogs, ads, emails, and landing pages that converts readers into customers.",
    color: "from-purple-950 to-fuchsia-950",
    accentColor: "text-purple-400",
    borderColor: "border-purple-800/40",
    emoji: "✍️",
  },
  {
    name: "Seomi",
    role: "SEO Strategist",
    desc: "Seomi researches keywords, optimizes your content, and builds strategies to get your website ranking on Google.",
    color: "from-emerald-950 to-green-950",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-800/40",
    emoji: "🔍",
  },
];

export default function FindEmployee() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Find The Right AI Employee<br />for Any Business
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Every business is different. Your team should be too. That&apos;s why we built AI employees for real
            business roles. Each worker is designed to take ownership of a specific function — so you can
            stop juggling, start delegating, and build a team that actually scales with you.
          </p>
        </div>

        {/* Carousel row */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {employees.map((emp) => (
              <div key={emp.name}
                className={`flex-shrink-0 snap-center w-72 rounded-3xl border ${emp.borderColor} bg-gradient-to-b ${emp.color} overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${emp.featured ? "ring-2 ring-blue-600/50 scale-105" : ""}`}>
                {/* Character visual */}
                <div className="h-56 flex items-end justify-center relative overflow-hidden px-4 pt-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  {emp.video ? (
                    <video src={emp.video} autoPlay loop muted playsInline
                      className="h-52 w-full object-contain relative z-10 drop-shadow-2xl" />
                  ) : (
                    <div className="h-52 w-full flex items-center justify-center relative z-10">
                      <span className="text-8xl drop-shadow-2xl float">{emp.emoji}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-xl mb-0.5">{emp.name}</h3>
                  <p className={`text-sm font-semibold mb-3 ${emp.accentColor}`}>{emp.role}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{emp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next buttons */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all hidden sm:flex">
            <ChevronLeft size={18} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all hidden sm:flex">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
            See all AI employees →
          </a>
        </div>
      </div>
    </section>
  );
}
