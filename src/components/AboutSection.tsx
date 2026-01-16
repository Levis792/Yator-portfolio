import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "5+ Years", desc: "Development Experience" },
  { icon: Palette, label: "50+", desc: "Projects Completed" },
  { icon: Users, label: "30+", desc: "Happy Clients" },
  { icon: Rocket, label: "100%", desc: "Project Success" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Who I Am<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              I'm John Doe, a developer passionate about creating exceptional digital experiences.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 5 years of experience in web development and UI/UX design, I specialize in building modern, responsive, and user-friendly applications. My approach combines clean code with intuitive design to deliver solutions that not only look great but also perform flawlessly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest technologies and design trends. When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border shadow-md hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <p className="font-display text-2xl font-bold text-foreground">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
