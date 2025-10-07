import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioImage1 from "@/assets/portfolio-1.jpg";
import portfolioImage2 from "@/assets/portfolio-2.jpg";
import portfolioImage3 from "@/assets/portfolio-3.jpg";
import heroImage from "@/assets/hero-bg.jpg";

const ProcessShowcase = () => {
  const workItems = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "Website Development",
      image: portfolioImage1,
      description: "Complete redesign and optimization of e-commerce platform"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "Social Media Marketing",
      image: portfolioImage2,
      description: "Multi-platform social media strategy and content creation"
    },
    {
      id: 3,
      title: "PPC Campaign Optimization",
      category: "Performance Marketing",
      image: portfolioImage3,
      description: "Strategic PPC campaign management and optimization"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "Content Creation",
      image: portfolioImage1,
      description: "Complete brand identity and visual design system"
    },
    {
      id: 5,
      title: "Marketplace Management",
      category: "E-commerce",
      image: portfolioImage2,
      description: "Full marketplace management and optimization"
    },
    {
      id: 6,
      title: "360° Marketing Strategy",
      category: "360° Marketing",
      image: portfolioImage3,
      description: "Comprehensive digital marketing strategy and execution"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Video Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Process Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Our Creative{" "}
              <span className="gradient-text">Process</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Watch how we transform businesses through strategic digital marketing, 
              creative design, and data-driven results.
            </p>
            
            {/* Video Player Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-card rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 mb-8 overflow-hidden"
            >
              <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Play className="mr-2 h-6 w-6" />
                  Play Process Video
                </Button>
              </div>
            </motion.div>

            <Link to="/">
              <Button variant="gradient-outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of our latest projects and the results we've delivered 
              for clients across various industries.
            </p>
          </motion.div>

          {/* Work Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="card-gradient rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-black mb-3">
                      {item.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessShowcase;