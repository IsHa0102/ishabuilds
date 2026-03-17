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
  <section id="services" className="py-24 bg-muted/30">
    <div className="container mx-auto px-6 max-w-5xl">
      
      {/* Heading */}
      <h2 className="font-display font-bold text-3xl text-foreground mb-4">
        Services
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-12" />

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 rounded-xl border border-border bg-background 
            hover:bg-primary/5 hover:border-primary/20 
            hover:shadow-sm hover:-translate-y-1 
            transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-4">
              <s.icon
                size={26}
                className="text-primary transition-all duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="font-display font-semibold text-foreground text-sm mb-2">
              {s.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {s.description}
            </p>

            {/* Subtle bottom accent line */}
            <div className="mt-4 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;