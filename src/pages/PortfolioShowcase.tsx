import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {workItems} from "@/data/portfolio";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PortfolioShowcase = () => {
  return (
      <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium block max-sm:hidden">Back to Home</span>
            </Link>
            <div className="flex items-center">
            <img
                src="/logo.png"
                alt="Oxbow Creatives Logo"
                className="h-20 w-20 object-contain"
              />
            <span className="text-xl font-bold gradient-text">Oxbow Creatives</span>
            </div>
          </div>
        </div>
      </nav>
      

      {/* Work Gallery Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
                  {/* Title */}
                   <h3 className="text-2xl font-bold text-foreground mt-2 group-hover:gradient-text transition-all duration-300 px-2">
                      {item.title}
                    </h3>
                  
                  {/* Niche */}
                  <div className="p-2 pt-0">
                    <div className="text-xs uppercase tracking-widest text-yellow-400 py-2 pb-2.5">
                      {item.niche}
                    </div> 

                    {/* Services */}
                    <div className="flex flex-wrap gap-2">
                      {item.services && item.services.map((service) => (
                        <span 
                          key={service} className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-black mb-3">
                          {service}
                          </span>
                      ))}
                    </div>
                                      
                    {/* Description */}
                    {/* <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p> */}

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

export default PortfolioShowcase;