import { GraduationCap, School } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-28">
    <div className="container mx-auto px-6 max-w-4xl">

      {/* Heading */}
      <h2 className="font-display font-bold text-3xl text-foreground mb-4">
        About
      </h2>
      <div className="w-12 h-[2px] bg-primary mb-12" />

      {/* Intro */}
      <p className="font-body text-muted-foreground leading-relaxed text-base max-w-2xl mb-14">
        I'm a product-focused developer who enjoys building end-to-end applications — from intuitive
        interfaces to robust backend systems. I'm drawn to the intersection of full-stack engineering
        and applied AI, where I can create solutions that are not only functional but genuinely useful.
      </p>

      {/* Education */}
      <div className="space-y-6">

        <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background 
        hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
          
          <GraduationCap size={20} className="text-primary mt-1 shrink-0" />

          <div>
            <h3 className="font-display font-semibold text-foreground text-sm mb-1">
              B.Tech — Computer & Communication Engineering
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              Manipal University Jaipur · Graduating 2026
            </p>
          </div>

        </div>

        <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background 
        hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
          
          <School size={20} className="text-primary mt-1 shrink-0" />

          <div>
            <h3 className="font-display font-semibold text-foreground text-sm mb-1">
              High School
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              RCS Memorial SR Secondary School, Agra · 2021
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;