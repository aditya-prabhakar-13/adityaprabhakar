import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, Github, Linkedin, Instagram, CheckCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get current time
    const currentTime = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const serviceID = 'service_bhcpdim';
    const templateID = 'template_w37laov';
    const publicKey = 'pbWU6i7StSEo8KhBc';

    // FIX: Changed keys to match your HTML template variables exactly
    const templateParams = {
      name: formState.name,       // Matches {{name}}
      email: formState.email,     // Matches {{email}}
      message: formState.message, // Matches {{message}}
      time: currentTime,          // Matches {{time}}
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        alert("Failed to send message.");
      });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/aditya-prabhakar-13", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:prabhakar130405@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-primary text-sm md:text-base">05. What's Next?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">Get In Touch</h2>
          <p className="max-w-lg mx-auto text-muted-foreground mt-4">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-glass p-6">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-terminal-green/70" />
                </div>
                <span className="ml-2 text-sm font-mono text-muted-foreground">contact.sh</span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-terminal-green/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-terminal-green" />
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-terminal-green">$ message --send</p>
                    <p className="text-muted-foreground">&gt; Message sent successfully!</p>
                    <p className="text-muted-foreground">&gt; I'll get back to you soon.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      <span className="text-primary">const</span> name = 
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-muted/50 border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all ${
                        focusedField === "name" 
                          ? "border-primary ring-2 ring-primary/20" 
                          : "border-border hover:border-muted-foreground/50"
                      }`}
                      placeholder='"Your Name"'
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      <span className="text-primary">const</span> email = 
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-muted/50 border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all ${
                        focusedField === "email" 
                          ? "border-primary ring-2 ring-primary/20" 
                          : "border-border hover:border-muted-foreground/50"
                      }`}
                      placeholder='"you@example.com"'
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      <span className="text-primary">const</span> message = 
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 bg-muted/50 border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all resize-none ${
                        focusedField === "message" 
                          ? "border-primary ring-2 ring-primary/20" 
                          : "border-border hover:border-muted-foreground/50"
                      }`}
                      placeholder='"Your message here..."'
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-medium rounded-lg btn-glow transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="card-glass p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Email</p>
                  <a href="mailto:prabhakar130405@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    prabhakar130405@gmail.com
                  </a>
                </div>
              </div>

              <div className="card-glass p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Location</p>
                  <p className="text-foreground">Guwahati, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-glass p-6">
              <p className="text-sm font-mono text-muted-foreground mb-4">
                {"// Connect with me"}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Terminal Message */}
            <div className="card-glass p-4 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-terminal-green">$</span> cat availability.txt
              </p>
              <p className="text-muted-foreground mt-2">
                &gt; <span className="text-terminal-green">✓</span> Open for internships
              </p>
              <p className="text-muted-foreground">
                &gt; <span className="text-terminal-green">✓</span> Available for freelance
              </p>
              <p className="text-muted-foreground">
                &gt; <span className="text-terminal-green">✓</span> Interested in collaborations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 