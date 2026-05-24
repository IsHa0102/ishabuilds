import { GraduationCap, School } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-28 bg-[#0C0C0C]">
    <div className="mx-auto px-8 max-w-7xl">
      <div className="grid md:grid-cols-[45%_55%] gap-16 items-start">

        {/* ── LEFT: header + decorative quote ── */}
        <div className="reveal">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-[#D4A853] mb-4">
            // 01 About
          </p>
          <h2 className="font-display italic font-bold text-[clamp(40px,5vw,56px)] leading-none text-[#F5F0E8] mb-6">
            About
          </h2>
          <div className="h-[1px] w-full bg-[#2A2A2A] mb-10 reveal-line" />

          <span
            className="font-display font-black text-[#D4A853] leading-none select-none block"
            style={{ fontSize: "clamp(100px,14vw,200px)", opacity: 0.12, lineHeight: 1 }}
          >
            "
          </span>
        </div>

        {/* ── RIGHT: bio + education ── */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <p className="font-body text-[1.05rem] text-[#8A8578] leading-[1.9] mb-12">
            I'm a developer who uses AI as a force-multiplier — to learn fast, move across stacks, and ship real products. I work at the intersection of full-stack engineering, LLM integrations, and automation, building things that are not just functional but genuinely useful. Currently interning at Nubokind, where I've independently shipped production systems across backend, AI, and data workflows.
          </p>

          <div className="space-y-4">
            <div className="group flex items-start gap-4 p-6 bg-[#1A1A1A] border border-[#2A2A2A] relative transition-all duration-300 hover:bg-[#1F1A14]">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4A853] transition-colors duration-300 group-hover:bg-[#C4622D]" />
              <GraduationCap size={18} className="text-[#D4A853] mt-0.5 shrink-0" />
              <div>
                <h3 className="font-body font-semibold text-[#F5F0E8] text-sm mb-1">
                  B.Tech — Computer & Communication Engineering
                </h3>
                <p className="text-sm font-body text-[#8A8578]">
                  Manipal University Jaipur · Graduating 2026
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-6 bg-[#1A1A1A] border border-[#2A2A2A] relative transition-all duration-300 hover:bg-[#1F1A14]">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4A853] transition-colors duration-300 group-hover:bg-[#C4622D]" />
              <School size={18} className="text-[#D4A853] mt-0.5 shrink-0" />
              <div>
                <h3 className="font-body font-semibold text-[#F5F0E8] text-sm mb-1">
                  High School
                </h3>
                <p className="text-sm font-body text-[#8A8578]">
                  RCS Memorial SR Secondary School, Agra · 2021
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
