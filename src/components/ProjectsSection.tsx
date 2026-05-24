import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FlowDesk",
    description:
      "Full-stack productivity and wellness app with AI-powered mood-aware planning, task management, mood journaling, wellness tracking, a canvas-based vision board (Konva.js), and a weekly planner — packaged as an iOS/Android app via Capacitor.",
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Claude AI", "Konva.js", "Capacitor"],
    github: "https://github.com/IsHa0102/Flowdesk",
    live: "https://myflowdesk-rho.vercel.app/",
  },
  {
    title: "AI Salary Predictor",
    description:
      "Full-stack ML application that predicts annual salaries based on job role, experience level, and company details. Built with XGBoost, served via FastAPI backend, and deployed with a Streamlit frontend.",
    tags: ["ML", "XGBoost", "FastAPI", "Streamlit"],
    github: "https://github.com/IsHa0102/salary-predictor",
    live: "https://salary-predictor-gfxfy4qj9kkssnvx235puk.streamlit.app/",
  },
  {
    title: "RealityLens",
    description:
      "Real-time object detection Android app using CameraX and ML Kit with confidence scoring, speech synthesis (TTS), tap-to-capture, and persistent object tracking with history storage.",
    tags: ["Kotlin", "ML Kit", "CameraX", "TTS", "Node.js"],
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
    title: "Mini Shopify – Multi-Store Platform",
    description:
      "Full-stack multi-store e-commerce platform where merchants can create independent storefronts with isolated product and order management, session-based cart, and persistent checkout.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/IsHa0102/mini-shopify-platform",
    live: "https://mini-shopify-platform.vercel.app/",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 bg-[#141414]">
    <div className="mx-auto px-8 max-w-7xl">

      {/* Section header */}
      <div className="mb-16 reveal">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-[#D4A853] mb-4">
          // 04 Projects
        </p>
        <h2 className="font-display italic font-bold text-[clamp(40px,5vw,56px)] leading-none text-[#F5F0E8] mb-6">
          Featured Work
        </h2>
        <div className="h-[1px] w-full bg-[#2A2A2A] reveal-line" />
      </div>

      {/* Project list */}
      <div className="divide-y divide-[#2A2A2A]">
        {projects.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          const watermark = p.tags[0].toUpperCase();
          const revealClass = i % 2 === 0 ? "reveal-from-left" : "reveal-from-right";

          return (
            <div
              key={p.title}
              className={`group relative flex flex-col md:flex-row items-start gap-6 md:gap-8 py-10 px-4 overflow-hidden transition-colors duration-400 hover:bg-[#1F1A14] ${revealClass}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#D4A853] group-hover:w-full transition-all duration-500" />

              {/* Background watermark */}
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none leading-none hidden md:block"
                style={{
                  fontSize: "clamp(60px,8vw,110px)",
                  WebkitTextStroke: "1px rgba(212,168,83,0.07)",
                  color: "transparent",
                  opacity: 1,
                }}
              >
                {watermark}
              </span>

              {/* Project number */}
              <span
                className="font-display font-black text-[#D4A853] leading-none shrink-0 select-none"
                style={{ fontSize: "clamp(48px,6vw,80px)", opacity: 0.28 }}
              >
                {num}
              </span>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-display italic text-[clamp(20px,2.5vw,28px)] text-[#F5F0E8] mb-3 group-hover:text-[#D4A853] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-[#8A8578] leading-relaxed mb-5 max-w-2xl">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-body border border-[#2A2A2A] text-[#8A8578] group-hover:border-[#2A2A2A] hover:!border-[#D4A853] hover:!text-[#D4A853] transition-all duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex md:flex-col gap-4 shrink-0 relative z-10">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#D4A853] text-[0.7rem] font-body uppercase tracking-[0.1em] group/lnk"
                >
                  <Github size={13} />
                  <span className="relative">
                    Code
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#D4A853] group-hover/lnk:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover/lnk:opacity-100 transition-opacity" />
                </a>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#D4A853] text-[0.7rem] font-body uppercase tracking-[0.1em] group/lnk"
                  >
                    <ExternalLink size={13} />
                    <span className="relative">
                      Live
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#D4A853] group-hover/lnk:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover/lnk:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);

export default ProjectsSection;
