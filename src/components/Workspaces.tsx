const features = [
  {
    title: "Up to 5 profiles",
    desc: "Create up to 5 business profiles, each customized to your unique business needs and specific goals, powered by AI employees ready to deliver results.",
  },
  {
    title: "Share workspace with the team",
    desc: "Collaborate with your team in real-time. Share your workspace to make business insights accessible to everyone involved.",
  },
];

export default function Workspaces() {
  return (
    // section_home-workspaces background-color-alternate
    <section className="relative bg-black overflow-hidden">

      {/* padding-global z-index-2 — content layer, determines section height */}
      <div className="relative z-[2] max-w-[1440px] mx-auto px-[7%] py-28">

        {/* home-workspaces_spacer */}
        <div className="h-[22vw]" />

        {/* max-width-large breathing-space */}
        <div className="max-w-[960px]">

          {/* margin-bottom margin-large */}
          <div className="mb-10">
            <h2
              className="text-[52px] lg:text-[64px] text-white leading-[1.08] tracking-[-0.02em] max-w-[720px]"
              style={{ fontWeight: 700 }}
            >
              Multiple workspaces. One team with different AI agents as employees.
            </h2>
          </div>

          {/* home-workspaces_grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-[640px]">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="text-white font-semibold text-[17px]">{f.title}</h3>
                <div className="h-2" />
                <p className="text-[15px] text-white/45 leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* home-workspaces_background — absolute inset-0, z-index 1 */}
      <div className="absolute inset-0 z-[1] overflow-hidden">

        {/* home-workspaces_background-image
            width: 70%, right-aligned (inset: 0 0 0 auto),
            height: 100%, object-fit: contain, object-position: 100% 0% */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/workspaces-mockup.avif"
          alt=""
          style={{
            position: "absolute",
            inset: "0 0 0 auto",
            width: "70%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "100% 0%",
          }}
        />

        {/* home-workspace_background-overlay
            Left-to-right: solid black on left (text area) fading to transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #000 0%, #000 22%, rgba(0,0,0,0.85) 36%, rgba(0,0,0,0.2) 55%, transparent 68%)",
          }}
        />

      </div>

    </section>
  );
}
