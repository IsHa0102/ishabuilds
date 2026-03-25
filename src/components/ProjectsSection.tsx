import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Auraboard",
    description:
      "Intelligent productivity and workflow management platform designed to streamline daily tasks and boost efficiency.",
    tags: ["React", "Full-Stack", "Productivity"],
    github: "https://github.com/IsHa0102/auraboard",
    live: "https://auraboard-rho.vercel.app/",
  },
  {
    title: "RealityLens",
    description:
      "AI-powered artifact detection application leveraging computer vision to identify and classify real-world objects.",
    tags: ["AI/ML", "Computer Vision", "Python"],
    github: "https://github.com/IsHa0102/RealityLens",
  },
  {
    title: "Music Genre Prediction Model",
    description:
      "Deep learning–based music genre classification system using MFCC features and CNN, achieving ~82% accuracy with real-time predictions via Streamlit UI.",
    tags: ["Deep Learning", "CNN", "Streamlit"],
    github: "https://github.com/IsHa0102/Music_Genre_Prediction-Model",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine learning model that analyzes customer behavior to predict churn probability and improve retention strategies.",
    tags: ["ML", "Pandas", "Analytics"],
    github: "https://github.com/IsHa0102/churn-prediction-system",
  },
  {
    title: "Mini Shopify Platform",
    description:
      "Full-stack e-commerce application with admin dashboard, cart system, order management, and secure checkout.",
    tags: ["Next.js", "Prisma", "Full-Stack"],
    github: "https://github.com/IsHa0102/mini-shopify-platform",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28">
    <div className="container mx-auto px-6 max-w-5xl">

      <h2 className="font-display font-bold text-3xl text-foreground mb-4">
        Featured Work
      </h2>
      <div className="w-12 h-[2px] bg-primary mb-12" />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group p-6 rounded-xl border border-border bg-background 
            hover:bg-primary/5 hover:border-primary/20 
            hover:shadow-sm hover:-translate-y-1 
            transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display font-semibold text-foreground text-lg">
                {p.title}
              </h3>

              <div className="flex gap-3 opacity-70 group-hover:opacity-100 transition">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="hover:text-primary transition" />
                </a>

                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="hover:text-primary transition" />
                  </a>
                )}
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs 
                  bg-primary/10 text-primary font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* subtle divider */}
            <div className="mt-5 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;