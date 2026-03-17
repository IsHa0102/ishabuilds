import { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="font-display font-bold text-3xl text-foreground mb-4 text-center">Get in Touch</h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <p className="font-body text-sm text-muted-foreground text-center mb-10">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-10">
          <a href="mailto:sharmaisha6361@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
          <a href="tel:+918958308879" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={18} /></a>
          <a href="https://www.linkedin.com/in/isha-sharma-7b0a91310/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="https://github.com/IsHa0102" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block font-body text-xs font-medium text-foreground mb-1.5">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block font-body text-xs font-medium text-foreground mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block font-body text-xs font-medium text-foreground mb-1.5">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
