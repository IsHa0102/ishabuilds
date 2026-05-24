import { Code, Brain, Rocket } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with modern frameworks, responsive design, and scalable architecture.",
  },
  {
    icon: Brain,
    title: "AI/ML Application Development",
    description:
      "Intelligent solutions powered by machine learning — from data pipelines to deployed prediction models.",
  },
  {
    icon: Rocket,
    title: "MVP / Product Development",
    description:
      "Rapid prototyping and product builds for startups — from idea validation to a deployable first version.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-28 bg-[#0C0C0C]">
    <div className="mx-auto px-8 max-w-7xl">

      {/* Section header */}
      <div className="mb-16 reveal">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-[#D4A853] mb-4">
          // 05 Services
        </p>
        <h2 className="font-display italic font-bold text-[clamp(40px,5vw,56px)] leading-none text-[#F5F0E8] mb-6">
          Services
        </h2>
        <div className="h-[1px] w-full bg-[#2A2A2A] reveal-line" />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative bg-[#1A1A1A] border border-[#2A2A2A] p-8 transition-all duration-300 hover:bg-[#1F1A14] reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Gold top border on hover */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#D4A853] transition-colors duration-300" />

            <s.icon size={26} className="text-[#D4A853] mb-6 transition-transform duration-300 group-hover:scale-110" />

            <h3 className="font-display italic text-lg text-[#F5F0E8] mb-3">
              {s.title}
            </h3>

            <p className="font-body text-sm text-[#8A8578] leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;
