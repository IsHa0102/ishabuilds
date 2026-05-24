import profileImage from "@/assets/portfolio_photo.jpeg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-[#0C0C0C]">
    <div className="mx-auto px-8 max-w-7xl w-full">
      <div className="grid md:grid-cols-[55%_45%] gap-12 items-center min-h-[calc(100vh-4rem)] py-20">

        {/* ── LEFT ── */}
        <div className="order-2 md:order-1">
          <p className="animate-fade-in-up animation-delay-100 font-body text-[0.7rem] uppercase tracking-[0.25em] text-[#D4A853] mb-8">
            Full-Stack Developer · AI/ML · Product Builder
          </p>

          <h1 className="mb-8">
            <span className="animate-fade-in-up animation-delay-200 block font-display italic font-black text-[clamp(72px,10vw,120px)] leading-[0.92] text-[#F5F0E8]">
              Isha
            </span>
            <span className="animate-fade-in-up animation-delay-300 block font-display italic font-black text-[clamp(72px,10vw,120px)] leading-[0.92] text-[#F5F0E8] ml-8">
              Sharma
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-500 font-body text-[1.05rem] text-[#8A8578] leading-relaxed max-w-md mb-10">
            I build fast using AI — shipping full-stack apps, automation pipelines, and LLM-powered tools. From idea to deployed product, end to end.
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3.5 bg-[#D4A853] text-[#0C0C0C] text-sm font-body font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#C4622D]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 border border-[#D4A853] text-[#D4A853] text-sm font-body font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#D4A853] hover:text-[#0C0C0C]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* "BUILDER" watermark */}
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none whitespace-nowrap leading-none z-0"
            style={{
              fontSize: "clamp(80px, 14vw, 190px)",
              WebkitTextStroke: "1px rgba(245,240,232,0.06)",
              color: "transparent",
            }}
          >
            BUILDER
          </span>

          {/* Photo */}
          <div
            className="animate-fade-in-right animation-delay-400 relative z-10"
            style={{ transform: "rotate(-2deg)" }}
          >
            <img
              src={profileImage}
              alt="Isha Sharma"
              className="object-cover w-[260px] md:w-[320px] lg:w-[370px]"
              style={{
                aspectRatio: "3/4",
                border: "3px solid #D4A853",
                boxShadow: "0 0 60px rgba(212,168,83,0.12), 0 24px 64px rgba(0,0,0,0.6)",
              }}
            />
          </div>

          {/* Vertical "PORTFOLIO 2026" text */}
          <span
            className="hidden lg:block absolute right-[-1rem] top-1/2 font-body text-[0.6rem] uppercase tracking-[0.35em] text-[#D4A853] select-none opacity-70"
            style={{
              transform: "translateY(-50%) rotate(90deg)",
              transformOrigin: "center center",
              whiteSpace: "nowrap",
            }}
          >
            Portfolio 2026
          </span>
        </div>

      </div>
    </div>
  </section>
);

export default HeroSection;
