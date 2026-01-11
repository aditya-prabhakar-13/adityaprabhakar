import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const codeLines = [
    { type: "comment", content: "// About me - a passionate developer" },
    { type: "empty", content: "" },
    { type: "keyword", content: "const", variable: " developer", equals: " = {" },
    { type: "property", key: "  name:", value: ' "Aditya Prabhakar",' },
    { type: "property", key: "  location:", value: ' "Ghaziabad(NCR), UP",' },
    { type: "property", key: "  focus:", value: ' "Full Stack Development",' },
    { type: "array-start", content: "  skills: [" },
    { type: "array-item", content: '    "Problem Solving",' },
    { type: "array-item", content: '    "Web Development",' },
    // { type: "array-item", content: '    "Clean Architecture",' },
    { type: "array-item", content: '    "Competitive Programming"' },
    { type: "array-end", content: "  ]," },
    { type: "property", key: "  passions:", value: ' ["Frontend Development", "Teaching", "Innovation", "Badminton"],' },
    { type: "property", key: "  coffeePerDay:", value: " 2," },
    { type: "property", key: "  greenTeaPerDay:", value: " 2," },
    { type: "property", key: "  available:", value: " true" },
    { type: "close", content: "};" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/5 rounded-r-full blur-3xl" />
      
      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm md:text-base">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Code Block */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="card-glass overflow-hidden">
                {/* Code Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-destructive/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-terminal-green/70" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-muted-foreground">about.js</span>
                </div>
                
                {/* Code Content */}
                <div className="p-4 font-mono text-sm overflow-x-auto">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex"
                    >
                      <span className="w-8 text-right pr-4 text-muted-foreground/50 select-none">
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        {line.type === "comment" && (
                          <span className="syntax-comment">{line.content}</span>
                        )}
                        {line.type === "empty" && <span>&nbsp;</span>}
                        {line.type === "keyword" && (
                          <>
                            <span className="syntax-keyword">{line.content}</span>
                            <span className="syntax-variable">{line.variable}</span>
                            <span className="syntax-bracket">{line.equals}</span>
                          </>
                        )}
                        {line.type === "property" && (
                          <>
                            <span className="syntax-function">{line.key}</span>
                            <span className="syntax-string">{line.value}</span>
                          </>
                        )}
                        {line.type === "array-start" && (
                          <>
                            <span className="syntax-function">{line.content.split("[")[0]}</span>
                            <span className="syntax-bracket">[</span>
                          </>
                        )}
                        {line.type === "array-item" && (
                          <span className="syntax-string">{line.content}</span>
                        )}
                        {line.type === "array-end" && (
                          <span className="syntax-bracket">{line.content}</span>
                        )}
                        {line.type === "close" && (
                          <span className="syntax-bracket">{line.content}</span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with 
                a passion for building elegant, performant, and scalable applications. Currently a Sophomore at <span className="text-foreground font-medium">Indian Institute of Technology, Guwahati</span>  pursing Major in Chemical Engineering and Minor in <span className="text-foreground font-medium">Computer Science</span> 
              </p>
              <p className="text-muted-foreground leading-relaxed">  
                My journey 
                started with competitive programming, which honed my problem-solving skills and 
                attention to algorithmic efficiency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I specialize in crafting end-to-end solutions using modern technologies. 
                I love the challenge of turning complex requirements into clean, maintainable code 
                that makes a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me working out in gym, playing badminton or exploring new technologies. I believe in 
                continuous learning and improving.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "1", label: "Intern(s)" },
                  { value: "10+", label: "Projects" },
                  { value: "1000+", label: "CF Rating" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground font-mono">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
