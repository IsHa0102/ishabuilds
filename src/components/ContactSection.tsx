import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;

      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send message", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: Mail,     href: "mailto:sharmaisha6361@gmail.com",                            label: "Email" },
    { icon: Phone,    href: "tel:+918958308879",                                          label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/isha-sharma-7b0a91310/",         label: "LinkedIn" },
    { icon: Github,   href: "https://github.com/IsHa0102",                                label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-28 bg-[#141414]">
      <div className="mx-auto px-8 max-w-7xl">
        <div className="grid md:grid-cols-[45%_55%] gap-16 items-start">

          {/* ── LEFT: editorial heading ── */}
          <div className="reveal">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-[#D4A853] mb-6">
              // 06 Contact
            </p>

            <h2 className="font-display italic font-black leading-none mb-8"
              style={{ fontSize: "clamp(56px,8vw,96px)" }}>
              <span className="block text-[#F5F0E8]">LET'S</span>
              <span className="block text-[#D4A853]">WORK.</span>
            </h2>

            <p className="font-body text-sm text-[#8A8578] leading-relaxed mb-10 max-w-xs">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="p-3 border border-[#2A2A2A] text-[#8A8578] hover:bg-[#D4A853] hover:border-[#D4A853] hover:text-[#0C0C0C] transition-all duration-300"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <form className="space-y-8" onSubmit={handleSubmit}>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#F5F0E8] py-4 text-sm font-body placeholder:text-[#4A4A4A] focus:outline-none focus:border-b-[#D4A853] transition-colors duration-300"
                  style={{ borderBottomWidth: "1px" }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#F5F0E8] py-4 text-sm font-body placeholder:text-[#4A4A4A] focus:outline-none focus:border-b-[#D4A853] transition-colors duration-300"
                  style={{ borderBottomWidth: "1px" }}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#F5F0E8] py-4 text-sm font-body placeholder:text-[#4A4A4A] focus:outline-none focus:border-b-[#D4A853] transition-colors duration-300 resize-none"
                  style={{ borderBottomWidth: "1px" }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#D4A853] text-[#0C0C0C] text-sm font-body font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-transparent hover:text-[#D4A853] border border-[#D4A853] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
