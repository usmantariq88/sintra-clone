const links = {
  Product: ["Features", "AI Helpers", "Brain AI", "Integrations", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "Webinars", "Case Studies", "Affiliate Program"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="text-white font-bold text-xl tracking-tight">sintra</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-5 max-w-xs">
              Your 24/7 AI dream team. 12 specialized helpers that automate your business, around the clock.
            </p>
            <div className="flex items-center gap-3">
              {["𝕏", "in", "f", "📷"].map((s, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white/70 text-sm transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/35 text-sm hover:text-white/65 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">© 2024 Sintra AI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
            <span className="text-white/25 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
