import profileImg from "../../assets/atharva_profile_picture.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#12101e" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Purple glow behind image */}
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(160,80,255,0.18) 0%, rgba(100,40,200,0.10) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-30 w-full flex flex-col md:flex-row items-center justify-between gap-0 py-16">
        {/* ── Left: Text ── */}
        <div className="flex flex-col items-start gap-5 max-w-[520px]">
          {/* Open to work badge */}
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
            <span className="text-white/90 text-sm tracking-wide">
              Open to work
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <p className="text-[#a1a1aa] text-xl md:text-2xl">
              Hey there! 👋
            </p>
            <h1
              className="text-white text-5xl md:text-[64px] leading-tight"
              style={{ fontWeight: 800 }}
            >
              I'm Atharva
            </h1>
            <h1
              className="text-5xl md:text-[64px] leading-tight bg-clip-text text-transparent"
              style={{
                fontWeight: 800,
                backgroundImage:
                  "linear-gradient(90deg, #c084fc 0%, #e879f9 50%, #f472b6 100%)",
              }}
            >
              UI/UX Designer
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-[420px]">
            I craft intuitive digital experiences that balance
            beauty with function. From wireframes to polished
            interfaces — every pixel is intentional.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-0 mt-2">
            {[
              { value: "15+", label: "Projects" },
              { value: "2 yrs", label: "Experience" },
              { value: "10+", label: "Clients" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-stretch"
              >
                <div className="flex flex-col items-center px-6 py-1 gap-0.5">
                  <span
                    className="text-white text-2xl md:text-3xl"
                    style={{ fontWeight: 800 }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[#71717a] text-sm">
                    {stat.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className="w-px self-stretch bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Profile image with glowing ring ── */}
        <div className="relative shrink-0 flex items-center justify-center md:-ml-8">
          {/* Outer soft glow halo */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "360px",
              height: "360px",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.28) 0%, rgba(124,58,237,0.10) 45%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          {/* Glowing purple ring border */}
          <div
            className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full relative overflow-hidden"
            style={{
              border: "6px solid #7C3AED",
              boxShadow:
                "0 0 24px rgba(124,58,237,0.75), 0 0 56px rgba(124,58,237,0.35), 0 0 96px rgba(124,58,237,0.15)",
              background: "#0D0D1A",
            }}
          >
            {/* Photo: bottom stacking layer so tint/vignette sit on top */}
            <div className="absolute inset-0 z-[1] rounded-full overflow-hidden">
              <img
                src={profileImg}
                alt="Atharva — UI/UX Designer"
                className="absolute inset-x-0 bottom-0 mx-auto h-[102%] w-auto min-w-[85%] max-w-none object-cover object-bottom"
                style={{
                  filter:
                    "saturate(0.7) contrast(1.2) brightness(1.05) drop-shadow(0 -6px 32px rgba(124,58,237,0.6)) drop-shadow(0 8px 24px rgba(10,8,40,0.9))",
                }}
              />
            </div>

            {/* Cool-blue shadow sweep at bottom */}
            <div
              className="absolute inset-0 z-[2] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 110%, rgba(30,20,80,0.72) 0%, transparent 60%)",
              }}
            />

            {/* Cool-blue shadow tint overlay */}
            <div
              className="absolute inset-0 z-[3] pointer-events-none rounded-full"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,8,40,0.5) 0%, rgba(20,10,60,0.2) 35%, transparent 65%)",
                mixBlendMode: "multiply",
              }}
            />

            {/* Cinematic vignette */}
            <div
              className="absolute inset-0 z-[4] pointer-events-none rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(8,5,20,0.55) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}