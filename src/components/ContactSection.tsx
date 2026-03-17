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

  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-6 max-w-lg text-center">

        <h2 className="font-display font-bold text-3xl text-foreground mb-4">
          Get in Touch
        </h2>
        <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />

        <p className="text-sm text-muted-foreground mb-10">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mb-12">
          <a href="mailto:sharmaisha6361@gmail.com" className="p-2 rounded-full hover:bg-primary/10 transition">
            <Mail size={18} />
          </a>
          <a href="tel:+918958308879" className="p-2 rounded-full hover:bg-primary/10 transition">
            <Phone size={18} />
          </a>
          <a href="https://www.linkedin.com/in/isha-sharma-7b0a91310/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/IsHa0102" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition">
            <Github size={18} />
          </a>
        </div>

        {/* Form */}
        <form className="space-y-5 text-left" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm 
            placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm 
            placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm 
            placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium 
            hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
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
    </section>
  );
};

export default ContactSection;