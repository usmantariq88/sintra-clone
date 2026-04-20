export default function TrustBar() {
  const brands = ["Forbes", "TechCrunch", "Product Hunt", "G2", "Capterra", "Trustpilot"];

  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/30 text-sm mb-8 uppercase tracking-widest font-medium">
          Trusted by 6,000+ businesses worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {brands.map((b) => (
            <span key={b} className="text-white/20 font-bold text-lg tracking-wide hover:text-white/40 transition-colors cursor-default">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
