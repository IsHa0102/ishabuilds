import profileImage from "@/assets/isha-profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 md:order-1 opacity-0 animate-fade-in-up">
            <p className="text-sm font-body text-primary font-medium tracking-wide uppercase mb-4">
              Full-Stack Developer · AI/ML Enthusiast · Product Builder
            </p>
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-6">
              Isha Sharma
            </h1>
            <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-lg mb-8">
              Builder at heart, crafting intelligent modern solutions where code meets curiosity. Passionate about turning complex problems into impactful digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm font-medium hover:bg-muted transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center opacity-0 animate-fade-in-up animation-delay-200">
            <div className="relative w-72 h-80 lg:w-80 lg:h-[22rem]">
              <img
                src={profileImage}
                alt="Isha Sharma — Full-Stack Developer"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
