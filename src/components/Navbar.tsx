import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(12,12,12,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #2A2A2A" : "none",
        }}
      >
        <div className="mx-auto flex items-center justify-between h-16 px-8 max-w-7xl">
          {/* Logo */}
          <a
            href="#"
            className="font-display italic text-xl text-[#D4A853] tracking-tight select-none"
          >
            Isha.
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[0.72rem] font-body text-[#8A8578] hover:text-[#F5F0E8] uppercase tracking-[0.15em] transition-colors duration-300 group"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#D4A853] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Available for work indicator */}
          <div className="hidden md:flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[0.65rem] font-body uppercase tracking-[0.15em] text-[#8A8578]">
              Available for work
            </span>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#F5F0E8] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0C0C0C] flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-8 text-[#8A8578] hover:text-[#F5F0E8] transition-colors"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>

          <ul className="flex flex-col items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display italic text-4xl text-[#F5F0E8] hover:text-[#D4A853] transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-10 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[0.65rem] font-body uppercase tracking-[0.15em] text-[#8A8578]">
              Available for work
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
