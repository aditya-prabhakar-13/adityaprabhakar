import { motion } from "framer-motion";
import { Heart, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">aditya<span className="text-primary">.</span>prabhakar</span>
          </a>

          {/* Center Text */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-primary">{"<"}</span>
              Built with
              <Heart className="inline w-4 h-4 mx-1 text-primary" />
              and lots of coffee
              <span className="text-primary">{" />"}</span>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aditya Prabhakar
          </p>
        </motion.div>

        {/* Terminal-style footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-xs font-mono text-muted-foreground/50">
            <span className="text-terminal-green">$</span> echo "Thanks for visiting!" && exit 0
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
