import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
// import heroImage from "@/assets/hero-bg.jpg";
// import heroAnalyticsBg from "@/assets/hero-analytics-bg.png";
// import heroStatsBg from "@/assets/hero-stats-bg.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="@/assets/hero-bg.jpg" 
          alt="Digital Marketing Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform Your{" "}
              <span className="gradient-text">
                Digital Presence
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We help businesses grow through strategic digital marketing solutions 
              tailored to your unique needs. Drive results, increase ROI, and dominate your market.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/clients">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Our Clients
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              {/* <Link to="/process">
                <Button variant="gradient-outline" size="lg" className="text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Process
                </Button>
              </Link> */}
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5X</div>
                <div className="text-sm text-muted-foreground">Average ROI Increase</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Analytics Background */}
              <div className="absolute inset-0 opacity-30">
                <img 
                  src="/assets/hero-analytics-bg.png"
                  alt="Analytics Growth Background" 
                  className="w-full h-full object-contain mix-blend-overlay"
                />
              </div>
              
              {/* Stats Background - Centered behind floating cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-60 opacity-20 blur-sm">
                <img 
                  src="@/assets/hero-bg.jpg"
                  alt="Statistics Background" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 bg-gradient-card p-6 rounded-2xl shadow-card border border-border/50"
              >
                <div className="text-2xl font-bold gradient-text">+250%</div>
                <div className="text-sm text-muted-foreground">Traffic Growth</div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-20 left-10 bg-gradient-card p-6 rounded-2xl shadow-card border border-border/50"
              >
                <div className="text-2xl font-bold gradient-text">$2M+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </motion.div>
              
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;