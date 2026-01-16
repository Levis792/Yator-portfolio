import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, scalable web applications using React, TypeScript, and cutting-edge technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that enhance user experience and engagement.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring your website looks and works perfectly on all devices, from mobile to desktop.",
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description: "Improving your website's visibility and ranking on search engines for better organic reach.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Developing robust server-side solutions with secure APIs and efficient database management.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing load times and overall performance to deliver fast, smooth user experiences.",
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
            I offer a comprehensive range of services to help bring your digital vision to life.
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
