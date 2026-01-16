import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-accent font-medium mb-4">Hello, I'm</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Levis Yator
              <span className="text-accent">.</span>
            </h1>
            <p className="text-lg text-accent font-medium mb-4">
              Digital Creator & Constant Learner
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I am a passionate creator who thrives on learning new things and building digital experiences.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:levis7099@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">levis7099@gmail.com</span>
              </a>
              <a
                href="tel:+254759097795"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">+254759097795</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleScrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent px-6"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                className="border-border hover:border-accent hover:text-accent"
              >
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full" />
              
              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-secondary border-4 border-accent/30 overflow-hidden shadow-xl">
                <img 
                  src="/profile.jpg" 
                  alt="Levis Yator" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center bg-secondary">
                        <div class="text-center">
                          <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                            <span class="text-4xl">👤</span>
                          </div>
                          <p class="text-sm text-muted-foreground">Profile Image</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
