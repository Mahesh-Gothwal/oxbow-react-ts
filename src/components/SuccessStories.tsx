import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolioImage1 from "@/assets/portfolio-1.jpg";
import portfolioImage2 from "@/assets/portfolio-2.jpg";
import portfolioImage3 from "@/assets/portfolio-3.jpg";

const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Revolution",
    category: "Website Development",
    description: "Complete e-commerce platform redesign that increased conversions by 340% and revenue by $2.1M annually.",
    image: portfolioImage1,
    results: [
      { metric: "Conversion Rate", value: "+340%" },
      { metric: "Revenue Growth", value: "$2.1M" },
      { metric: "Page Speed", value: "+85%" }
    ],
    tags: ["Shopify", "Custom Design", "Performance"]
  },
  {
    id: 2,
    title: "Social Media Expertise",
    category: "Social Media Expertise",
    description: "Multi-platform social strategy that grew followers by 450% and engagement rates by 280% in 6 months.",
    image: portfolioImage2,
    results: [
      { metric: "Follower Growth", value: "+450%" },
      { metric: "Engagement Rate", value: "+280%" },
      { metric: "Lead Generation", value: "+190%" }
    ],
    tags: ["Instagram", "Facebook", "LinkedIn"]
  },
  {
    id: 3,
    title: "PPC Performance Boost",
    category: "Performance Marketing",
    description: "Strategic PPC campaign optimization that reduced cost-per-acquisition by 65% while tripling qualified leads.",
    image: portfolioImage3,
    results: [
      { metric: "CPA Reduction", value: "-65%" },
      { metric: "Qualified Leads", value: "+300%" },
      { metric: "ROAS", value: "8.2x" }
    ],
    tags: ["Google Ads", "Meta Ads", "Analytics"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8">
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
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses 
            across industries with strategic digital marketing solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="space-y-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Link to={`/case-study/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button variant="hero-black" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Floating Results Cards */}
                <div className="absolute -top-4 -right-4 space-y-3">
                  {item.results.slice(0, 2).map((result, idx) => (
                    <motion.div
                      key={result.metric}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ 
                        duration: 4 + idx,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5
                      }}
                      className="bg-gradient-card p-3 rounded-xl border border-border/50 shadow-card backdrop-blur-sm"
                    >
                      <div className="text-lg font-bold gradient-text">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.metric}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-2 bg-gradient-secondary rounded-full text-sm font-medium text-black mb-4">
                    {item.category}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {item.results.map((result, idx) => (
                      <div key={result.metric} className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/case-study/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="gradient-outline" size="lg">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-card">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their digital presence 
              and achieved remarkable growth with our proven strategies.
            </p>
            <Button onClick={() => scrollToSection('#contact')} variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;