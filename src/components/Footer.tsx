const Footer = () => (
  <footer className="mt-20 border-t border-border/60 py-10">
    <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center gap-4 text-center">

      {/* Brand */}
      <div className="font-display text-sm text-foreground tracking-tight">
        Isha<span className="text-primary">.</span>
      </div>

      {/* Divider line (subtle) */}
      <div className="w-10 h-[1px] bg-border/60" />

      {/* Text */}
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Isha Sharma. Built with intention.
      </p>

    </div>
  </footer>
);

export default Footer;