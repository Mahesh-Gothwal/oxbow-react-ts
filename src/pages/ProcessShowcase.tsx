import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioImage1 from "@/assets/Portfolio1.jpeg";
import portfolioImage2 from "@/assets/Portfolio2.jpeg";
import portfolioImage3 from "@/assets/Portfolio1.jpeg";

const ProcessShowcase = () => {
  const workItems = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "Website Development",
      image: portfolioImage1,
      description: "Complete redesign and optimization of e-commerce platform",
      tags: ["Website", "Performance", "Social Media", "SEO"]

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
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 mt-6">
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-black mb-3 inline-block">
                      {item.category}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags && item.tags.map((tag) => (
                        <span 
                          key={tag} className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-black mb-3">
                          {tag}
                          </span>
                      ))}
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