const experiences = [
  {
    role: "Developer Intern",
    company: "Nubokind",
    duration: "April 2026 – Present",
    description:
      "Building full-stack systems and AI-powered automation tools — a Smart Inventory System (React, Supabase, Node.js), an Invoice Automation pipeline (Gmail OAuth2, Express, REST APIs), and an AI Content Generator powered by the Claude API for SEO-structured social media content.",
    tags: ["React", "Node.js", "Supabase", "Claude API", "Automation", "Full-Stack"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 bg-[#141414]">
    <div className="mx-auto px-8 max-w-7xl">

      {/* Section header */}
      <div className="mb-16 reveal">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-[#D4A853] mb-4">
          // 02 Experience
        </p>
        <h2 className="font-display italic font-bold text-[clamp(40px,5vw,56px)] leading-none text-[#F5F0E8] mb-6">
          Experience
        </h2>
        <div className="h-[1px] w-full bg-[#2A2A2A] reveal-line" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical gold line */}
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4A853] to-transparent opacity-50" />

        {experiences.map((e, i) => (
          <div key={e.company} className="relative pl-24 mb-8">
            {/* Gold dot */}
            <div className="absolute left-[27px] top-8 w-3 h-3 rounded-full bg-[#D4A853] z-10 shadow-[0_0_8px_rgba(212,168,83,0.6)]" />

            {/* Card */}
            <div
              className="group relative bg-[#1A1A1A] border border-[#2A2A2A] p-8 transition-all duration-300 hover:bg-[#1F1A14] reveal-from-right"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent group-hover:bg-[#D4A853] transition-colors duration-300" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display italic text-xl text-[#F5F0E8] mb-1">
                    {e.company}
                  </h3>
                  <p className="font-body font-semibold text-sm text-[#F5F0E8]">{e.role}</p>
                </div>
                <span className="font-body text-[0.68rem] uppercase tracking-[0.2em] text-[#D4A853] shrink-0">
                  {e.duration}
                </span>
              </div>

              <p className="font-body text-sm text-[#8A8578] leading-relaxed mb-6">
                {e.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-body border border-[#D4A853]/50 text-[#D4A853] uppercase tracking-[0.06em] hover:border-[#D4A853] transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ExperienceSection;
