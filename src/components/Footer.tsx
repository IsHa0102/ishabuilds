const Footer = () => (
  <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-12">
    <div className="mx-auto px-8 max-w-7xl">

      {/* Top row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        {/* Left: logo + tagline */}
        <div>
          <span className="font-display italic text-xl text-[#D4A853]">Isha.</span>
          <p className="font-body text-xs text-[#8A8578] mt-1 tracking-wide">
            Full-Stack Developer · AI/ML · Product Builder
          </p>
        </div>

        {/* Right: social links */}
        <div className="flex gap-8">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/isha-sharma-7b0a91310/" },
            { label: "GitHub",   href: "https://github.com/IsHa0102" },
            { label: "Email",    href: "mailto:sharmaisha6361@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-body text-[0.68rem] uppercase tracking-[0.15em] text-[#8A8578] hover:text-[#D4A853] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#2A2A2A] mb-8" />

      {/* Bottom: copyright */}
      <p className="text-center font-body text-xs text-[#8A8578] tracking-wide">
        Designed &amp; Built by Isha Sharma · 2026
      </p>

    </div>
  </footer>
);

export default Footer;
