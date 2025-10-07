import { motion } from "framer-motion";
import { BarChart3, Users, Lightbulb, Clock, Award, Shield } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "Every decision is backed by comprehensive analytics and performance data to ensure maximum ROI and measurable growth.",
    color: "from-primary to-accent"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our certified specialists bring years of experience across all digital marketing channels and industries.",
    color: "from-accent to-primary"
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We stay ahead of industry trends and leverage cutting-edge tools and strategies to give you a competitive edge.",
    color: "from-primary via-accent to-primary"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support ensure your campaigns are always optimized and performing at their best.",
    color: "from-accent to-primary"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 500 successful projects with an average ROI increase of 5x across various industries and business sizes.",
    color: "from-primary to-accent"
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Detailed monthly reports and real-time dashboards keep you informed of every metric and campaign performance.",
    color: "from-accent via-primary to-accent"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 px-6 lg:px-8">
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
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine strategic thinking, creative execution, and data-driven optimization 
            to deliver exceptional results that drive real business growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card transition-all duration-300 h-full text-center relative overflow-hidden">
                {/* Background Effect */}
                <div className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-2 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mb-6"
                >
                  <div className={`w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold mb-4 ${feature.title === '24/7 Support' ? 'text-white' : 'text-foreground'}`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`leading-relaxed ${feature.title === '24/7 Support' ? 'text-white' : 'text-muted-foreground'}`}>
                    {feature.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-card text-center relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-primary/2" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Trusted by Industry Leaders
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5X</div>
                  <div className="text-sm text-muted-foreground">Average ROI</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Industries</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;