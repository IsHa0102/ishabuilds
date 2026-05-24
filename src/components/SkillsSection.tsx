const coreExpertise = [
  "Full-Stack Development",
  "Generative AI & LLMs",
  "Product-Oriented Development",
];

const technicalSkills = [
  { category: "Frontend",        items: ["React", "Next.js 16", "TypeScript", "TailwindCSS", "Konva.js"] },
  { category: "Backend",         items: ["Node.js", "Express", "REST APIs", "FastAPI", "Gmail API (OAuth2)"] },
  { category: "AI & LLMs",       items: ["Claude API", "LangChain", "LlamaIndex", "Prompt Engineering", "RAG", "CrewAI"] },
  { category: "Database",        items: ["PostgreSQL", "Supabase", "MongoDB", "Prisma", "FAISS"] },
  { category: "Mobile & DevOps", items: ["Capacitor", "Git", "Vercel", "Docker (basics)", "CI/CD"] },
  { category: "Data & ML",       items: ["Pandas", "NumPy", "Scikit-Learn", "Keras", "Matplotlib"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 bg-[#0C0C0C]">
    <div className="mx-auto px-8 max-w-7xl">

      {/* Section header */}
      <div className="mb-16 reveal">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-[#D4A853] mb-4">
          // 03 Skills
        </p>
        <h2 className="font-display italic font-bold text-[clamp(40px,5vw,56px)] leading-none text-[#F5F0E8] mb-6">
          Skills
        </h2>
        <div className="h-[1px] w-full bg-[#2A2A2A] reveal-line" />
      </div>

      {/* Core Expertise */}
      <div className="mb-16">
        <p className="font-body text-[0.68rem] uppercase tracking-[0.25em] text-[#8A8578] mb-6 reveal">
          Core Expertise
        </p>
        <div className="flex flex-wrap gap-3">
          {coreExpertise.map((s, i) => (
            <span
              key={s}
              className="reveal px-5 py-2.5 bg-[#D4A853] text-[#0C0C0C] text-sm font-body font-semibold uppercase tracking-[0.08em] hover:bg-[#C4622D] transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Technical Skills — editorial layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {technicalSkills.map((g, gi) => (
          <div
            key={g.category}
            className="reveal"
            style={{ transitionDelay: `${gi * 0.07}s` }}
          >
            {/* Huge background category name */}
            <h3
              className="font-display font-black text-[#F5F0E8] leading-none mb-2 select-none pointer-events-none"
              style={{ fontSize: "clamp(28px,4vw,48px)", opacity: 0.12 }}
            >
              {g.category}
            </h3>

            {/* Tags overlaid */}
            <div className="flex flex-wrap gap-2">
              {g.items.map((item, ii) => (
                <span
                  key={item}
                  className="reveal px-3 py-1 text-xs font-body border border-[#2A2A2A] text-[#8A8578] hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
                  style={{ transitionDelay: `${(gi * 5 + ii) * 0.04}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default SkillsSection;
