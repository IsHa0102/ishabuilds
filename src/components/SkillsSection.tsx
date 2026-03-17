const coreExpertise = [
  "Full-Stack Development",
  "Applied AI/ML",
  "Product-Oriented Development",
];

const technicalSkills = [
  { category: "Frontend", items: ["React", "Next.js", "Responsive UI"] },
  { category: "Backend", items: ["APIs", "Authentication", "Server Logic"] },
  { category: "Machine Learning", items: ["Scikit-learn", "Model Building"] },
  { category: "Data", items: ["Pandas", "NumPy", "Feature Engineering"] },
  { category: "Database", items: ["Prisma", "Structured Databases"] },
  { category: "Tools", items: ["GitHub", "Vercel", "Jupyter"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-muted/30">
    <div className="container mx-auto px-6 max-w-5xl">
      
      {/* Heading */}
      <h2 className="font-display font-bold text-3xl text-foreground mb-4">
        Skills
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-12" />

      {/* Core Expertise */}
      <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary mb-5">
        Core Expertise
      </h3>

      <div className="flex flex-wrap gap-3 mb-14">
        {coreExpertise.map((s) => (
          <span
            key={s}
            className="px-4 py-2 rounded-full text-sm font-body font-medium 
            border border-primary/30 
            text-foreground bg-primary/5 
            hover:bg-primary/10 hover:border-primary/50 
            transition-all duration-300 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Technical Skills */}
      <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-6">
        Technical Skills
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((g) => (
          <div
            key={g.category}
            className="p-5 rounded-xl border border-border bg-background 
            hover:bg-primary/5 hover:border-primary/20 
            hover:shadow-sm hover:-translate-y-1 
            transition-all duration-300"
          >
            <h4 className="font-display font-semibold text-foreground text-sm mb-3">
              {g.category}
            </h4>

            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-body 
                  text-muted-foreground border border-border 
                  hover:text-foreground hover:border-primary/30 
                  transition-all duration-300"
                >
                  {i}
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