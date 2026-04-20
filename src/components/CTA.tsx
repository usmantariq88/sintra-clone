import Image from "next/image";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: "radial-gradient(ellipse 80% 80% at 60% 50%, #0d1a3a 0%, #050a14 60%, #000 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-[7%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="max-w-[520px]">
            <h2
              className="text-[52px] lg:text-[60px] text-white leading-[1.08] tracking-[-0.02em] mb-6"
              style={{ fontWeight: 700 }}
            >
              Your new AI digital workers team with infinite knowledge.
            </h2>
            <p className="text-[16px] text-white/50 leading-[1.7] mb-8 max-w-[400px]">
              AI for business has never been this personal. Hire your new team -
              work less, but do more.
            </p>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-[15px] font-semibold transition-all duration-150 hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]"
            >
              Get Sintra
            </a>
          </div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/cta-mockup.avif"
              alt="Sintra App"
              width={600}
              height={600}
              className="w-full max-w-[560px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
