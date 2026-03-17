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
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="font-display font-bold text-3xl text-foreground mb-4">
        Featured Work
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-10" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group p-6 rounded-lg border border-border bg-background hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <h3 className="font-display font-bold text-foreground text-lg mb-2">
              {p.title}
            </h3>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-medium bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {/* GitHub */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} />
              </a>

              {/* Live link ONLY if exists */}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;