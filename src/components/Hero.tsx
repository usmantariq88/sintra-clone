export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* home-hero_background */}
      <div className="absolute inset-0 w-full h-full">
        {/* home-hero_background-overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 20%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.15) 60%, transparent 75%)",
          }}
        />
        {/* home-hero_background-video */}
        <video
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/helpers/vizzy.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top gradient for navbar */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10" />

      {/* padding-global z-index-2 */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-[7%] pb-[7%]">

        {/* container-large > margin-bottom > text-color-alternate */}
        <div className="text-white">

          {/* max-width-large */}
          <div className="max-w-[960px]">

            {/* home-hero_title */}
            <div>
              {/* h1: text-size-7xl text-weight-medium text-size-8xl--tablet max-width-medium */}
              <h1 className="text-[72px] md:text-[80px] font-medium leading-[1.05] tracking-[-0.02em] text-white max-w-[720px]">
                AI Employees: Your First Digital Workers Team That Never Sleep
              </h1>
            </div>

            {/* spacer-small */}
            <div className="h-5" />

            {/* p: text-size-2xl text-style-muted text-weight-normal */}
            <p className="text-2xl text-white/60 font-normal leading-[1.6]">
              Hire AI employees today - get your first 24/7 digital team that runs your socials, inbox,
              website, content, customer support, and business and sales operations without adding
              extra headcount.
            </p>

            {/* spacer-medium */}
            <div className="h-8" />

            {/* button-group */}
            <div>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-[15px] font-semibold transition-all duration-150 hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]"
              >
                Get Sintra
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
