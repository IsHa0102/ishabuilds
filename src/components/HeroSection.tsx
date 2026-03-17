import profileImage from "@/assets/isha-profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="order-2 md:order-1 opacity-0 animate-fade-in-up">

            <p className="text-xs font-body text-primary font-medium tracking-[0.2em] uppercase mb-6">
              Full-Stack Developer · AI/ML · Product Builder
            </p>

            <h1 className="font-display font-extrabold text-6xl lg:text-7xl xl:text-[84px] text-foreground leading-[1.05] mb-6">
              Isha Sharma
            </h1>

            <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed max-w-md mb-10">
              Builder at heart, crafting intelligent modern solutions where code meets curiosity. 
              Turning complex problems into impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 md:order-2 flex justify-center opacity-0 animate-fade-in-up animation-delay-200">

            <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px]">

              {/* Soft background circle */}
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-110 blur-2xl" />

              {/* Image */}
              <img
                src={profileImage}
                alt="Isha Sharma — Full-Stack Developer"
                className="relative w-full h-full object-cover rounded-full shadow-xl"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;