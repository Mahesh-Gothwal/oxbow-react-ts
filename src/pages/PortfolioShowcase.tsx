import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Geroo from "@/assets/geroo.jpeg";
import Malverra from "@/assets/malverra.jpeg";
import Tangerine from "@/assets/tangerine.jpg";
import BareWare from "@/assets/bareware.jpg";
import BijouBox from "@/assets/bijoubox.jpg";

const PortfolioShowcase = () => {
  const workItems = [
    {
      id: 1,
      title: "Geroo Jaipur",
      category: "Website Development",
      image: Geroo,
      description: "Complete redesign and optimization of e-commerce platform",
      tags: ["Website", "Performance", "Social Media", "SEO"]

    },
    {
      id: 2,
      title: "Malverra",
      category: "Social Media Marketing",
      image: Malverra,
      description: "Multi-platform social media strategy and content creation",
       tags: ["Website", "Performance", "Social Media", "SEO"]
    },
    {
      id: 3,
      title: "Bare Ware",
      category: "Performance Marketing",
      image: BareWare,
      description: "Strategic PPC campaign management and optimization",
       tags: ["Website", "Performance", "Social Media", "SEO"]
    },
    {
      id: 4,
      title: "The Bijou Box",
      category: "Content Creation",
      image: BijouBox,
      description: "Complete brand identity and visual design system",
       tags: ["Website", "Performance", "Social Media", "SEO"]
    },
    {
      id: 5,
      title: "Tangerine Jewellry",
      category: "E-commerce",
      image: Tangerine,
      description: "Full marketplace management and optimization",
       tags: ["Website", "Performance", "Social Media", "SEO"]
    },
    {
      id: 6,
      title: "The Bijou Box",
      category: "360° Marketing",
      image: BijouBox,
      description: "Comprehensive digital marketing strategy and execution",
       tags: ["Website", "Performance", "Social Media", "SEO"]
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
                  {/* Title */}
                   <h3 className="text-2xl font-bold text-foreground mt-2 group-hover:gradient-text transition-all duration-300 p-2">
                      {item.title}
                    </h3>
                  
                  {/* Content */}
                  <div className="p-2">
                    {/* <div className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-black mb-3 inline-block">
                      {item.category}
                    </div> */}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags && item.tags.map((tag) => (
                        <span 
                          key={tag} className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-black mb-3">
                          {tag}
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