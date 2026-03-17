import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Auraboard",
    description: "Intelligent productivity and workflow management platform designed to streamline daily tasks and boost efficiency.",
    tags: ["React", "Full-Stack", "Productivity"],
  },
  {
    title: "RealityLens",
    description: "AI-powered artifact detection application that leverages computer vision to identify and classify real-world objects.",
    tags: ["AI/ML", "Computer Vision", "Python"],
  },
  {
    title: "AI Career Guidance System",
    description: "Personalized career recommendation engine using machine learning to match skills and interests to career paths.",
    tags: ["ML", "Scikit-learn", "Data"],
  },
  {
    title: "Customer Churn Prediction",
    description: "Predictive ML model for customer retention that analyzes behavioural patterns to forecast churn probability.",
    tags: ["ML", "Pandas", "Analytics"],
  },
  {
    title: "Mini Shopify Platform",
    description: "Full-stack e-commerce application with admin panel, shopping cart, order management, and secure checkout.",
    tags: ["Next.js", "Prisma", "Full-Stack"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="font-display font-bold text-3xl text-foreground mb-4">Featured Work</h2>
      <div className="w-12 h-0.5 bg-primary mb-10" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group p-6 rounded-lg border border-border bg-background hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-medium bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/IsHa0102" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
