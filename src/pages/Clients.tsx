import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Placeholder client logos - in a real app, these would be actual client logos
const clientLogos = [
  { name: "TechCorp", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=TechCorp", colorLogo: "https://via.placeholder.com/150x80/4285F4/FFFFFF?text=TechCorp" },
  { name: "InnovateLab", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=InnovateLab", colorLogo: "https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=InnovateLab" },
  { name: "DataFlow", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=DataFlow", colorLogo: "https://via.placeholder.com/150x80/4ECDC4/FFFFFF?text=DataFlow" },
  { name: "CloudSync", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=CloudSync", colorLogo: "https://via.placeholder.com/150x80/45B7D1/FFFFFF?text=CloudSync" },
  { name: "StartupHub", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=StartupHub", colorLogo: "https://via.placeholder.com/150x80/96CEB4/FFFFFF?text=StartupHub" },
  { name: "FinanceMax", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=FinanceMax", colorLogo: "https://via.placeholder.com/150x80/FFEAA7/333333?text=FinanceMax" },
  { name: "HealthTech", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=HealthTech", colorLogo: "https://via.placeholder.com/150x80/FD79A8/FFFFFF?text=HealthTech" },
  { name: "EduLearn", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=EduLearn", colorLogo: "https://via.placeholder.com/150x80/A29BFE/FFFFFF?text=EduLearn" },
  { name: "RetailPro", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=RetailPro", colorLogo: "https://via.placeholder.com/150x80/FD7E14/FFFFFF?text=RetailPro" },
  { name: "GreenEnergy", logo: "https://via.placeholder.com/150x80/333333/FFFFFF?text=GreenEnergy", colorLogo: "https://via.placeholder.com/150x80/00B894/FFFFFF?text=GreenEnergy" }
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold gradient-text">Our Clients</h1>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Leading{" "}
            <span className="gradient-text">Companies</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We've had the privilege of working with amazing companies across various industries, 
            helping them transform their digital presence and achieve remarkable growth.
          </motion.p>
        </div>
      </section>

      {/* Animated Client Logos */}
      <section className="py-16 overflow-hidden">
        <div className="relative">
          {/* First Row - Moving Right */}
          <motion.div
            className="flex space-x-8 mb-8"
            animate={{
              x: [0, -1200]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative w-40 h-20 flex items-center justify-center bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={client.colorLogo}
                    alt={client.name}
                    className="absolute inset-0 max-w-full max-h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 m-auto"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Moving Left */}
          <motion.div
            className="flex space-x-8 mb-8"
            animate={{
              x: [-1200, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative w-40 h-20 flex items-center justify-center bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={client.colorLogo}
                    alt={client.name}
                    className="absolute inset-0 max-w-full max-h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 m-auto"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Third Row - Moving Right */}
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1200]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...clientLogos.slice(3), ...clientLogos.slice(3)].map((client, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative w-40 h-20 flex items-center justify-center bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={client.colorLogo}
                    alt={client.name}
                    className="absolute inset-0 max-w-full max-h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 m-auto"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;