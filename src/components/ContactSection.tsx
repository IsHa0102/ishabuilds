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
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to send message", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="font-display font-bold text-3xl text-foreground mb-4 text-center">Get in Touch</h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <p className="font-body text-sm text-muted-foreground text-center mb-10">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <a href="mailto:sharmaisha6361@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
          <a href="tel:+918958308879" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={18} /></a>
          <a href="https://www.linkedin.com/in/isha-sharma-7b0a91310/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="https://github.com/IsHa0102" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block font-body text-xs font-medium text-foreground mb-1.5">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
              placeholder="Your name" />
          </div>
          <div>
            <label className="block font-body text-xs font-medium text-foreground mb-1.5">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
              placeholder="you@example.com" />
          </div>
          <div>
            <label className="block font-body text-xs font-medium text-foreground mb-1.5">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition resize-none"
              placeholder="Your message..." />
          </div>
          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
