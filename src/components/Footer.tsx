import { motion } from "framer-motion";
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Digital Marketing Agency
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  We help businesses transform their digital presence through strategic 
                  marketing solutions that drive real results and sustainable growth.
                </p>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Youtube, href: "#", label: "YouTube" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "Website Development",
                  "Social Media Management", 
                  "Performance Marketing",
                  "SEO Optimization",
                  "Content Marketing",
                  "Brand Strategy"
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-muted-foreground hover:text-primary hover:gradient-text transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">Contact</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Phone</p>
                  <a 
                    href="tel:+91-9571366877" 
                    className="text-foreground hover:gradient-text transition-colors duration-300"
                  >
                    +91-9571366877
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Email</p>
                  <a 
                    href="mailto:support@oxbowcreatives.com" 
                    className="text-foreground hover:gradient-text transition-colors duration-300"
                  >
                    support@oxbowcreatives.com
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Office</p>
                  <p className="text-foreground">Jaipur, Rajasthan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm mb-4 sm:mb-0"
          >
            © {currentYear} Oxbow Creatives | All rights reserved.
          </motion.p>

          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            
            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground shadow-glow transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;