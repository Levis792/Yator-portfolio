import { motion } from "framer-motion";
import { Code, Video, Layout } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive websites and web applications using the latest technologies.",
  },
  {
    icon: Video,
    title: "Video & Content Editing",
    description: "Creating engaging video content and editing services for various platforms and purposes.",
  },
  {
    icon: Layout,
    title: "WordPress Design",
    description: "Designing and developing custom WordPress websites tailored to your specific needs.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">What I Do</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Services<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of digital services to help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card p-8 rounded-xl border border-border shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
