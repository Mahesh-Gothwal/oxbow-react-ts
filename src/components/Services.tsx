import { motion } from "framer-motion";
import { Code, Share2, TrendingUp, ArrowRight, Instagram, Facebook, Linkedin, Youtube, Chrome, Twitter, RotateCw, Users, Target, Search, Mail, Star, Globe, BarChart3, FileText, Image, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites and e-commerce solutions built for performance and conversion.",
    subServices: [
      "Custom Design & Development",
      "E-commerce Solutions",
      "SEO Optimization",
      "WordPress & Shopify"
    ],
    platforms: [Chrome, Code, TrendingUp],
    gradient: "from-primary to-accent"
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media campaigns that build communities and drive engagement.",
    subServices: [
      "Content Strategy & Creation",
      "Community Management",
      "Influencer Partnerships",
      "Analytics & Reporting"
    ],
    platforms: [Instagram, Facebook, Linkedin, Youtube, Twitter],
    gradient: "from-accent to-primary"
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven advertising campaigns optimized for maximum ROI and conversions.",
    subServices: [
      "Google Ads & PPC",
      "Facebook & Instagram Ads",
      "Conversion Optimization",
      "Performance Analytics"
    ],
    platforms: [Chrome, Facebook, Instagram, Linkedin],
    gradient: "from-primary via-accent to-primary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your business 
            and drive measurable results across all channels.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub-services */}
                <ul className="space-y-2 mb-6">
                  {service.subServices.map((subService, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3" />
                      {subService}
                    </li>
                  ))}
                </ul>

                {/* Platform Icons */}
                <div className="flex items-center gap-3 mb-8">
                  {service.platforms.map((PlatformIcon, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/20 transition-all duration-300"
                    >
                      <PlatformIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button 
                    variant="gradient-outline" 
                    className="w-full group-hover:bg-white group-hover:text-black"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hub and Spoke Layout */}
        <div className="mt-24 relative">
          {/* Top 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="card-gradient rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3`}>
                      <service.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Sub-services */}
                  <ul className="space-y-1.5 mb-4">
                    {service.subServices.map((subService, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-gradient-primary rounded-full mr-2" />
                        {subService}
                      </li>
                    ))}
                  </ul>

                  {/* Platform Icons */}
                  <div className="flex items-center gap-2 mb-4">
                    {service.platforms.map((PlatformIcon, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 flex items-center justify-center rounded-md bg-muted/50 hover:bg-primary/20 transition-all duration-300"
                      >
                        <PlatformIcon className="h-3 w-3 text-muted-foreground hover:text-primary transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button 
                      variant="gradient-outline" 
                      size="sm"
                      className="w-full group-hover:bg-white group-hover:text-black"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hub Card - 360° Services */}
          <div className="flex justify-center mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => {
                // Navigate to full services overview page
                console.log('Navigate to Full Services Overview');
              }}
            >
              <div className="bg-[#efbf37] text-black px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                360° Services
              </div>
            </motion.div>
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Lines to top row cards */}
            <div className="absolute top-[25%] left-[16.67%] w-16 h-16">
              <div className="absolute top-1/2 left-1/2 w-20 h-px bg-[#efbf37]/60 transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg] origin-center"></div>
            </div>
            <div className="absolute top-[25%] left-1/2 w-16 h-16">
              <div className="absolute top-1/2 left-1/2 w-20 h-px bg-[#efbf37]/60 transform -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center"></div>
            </div>
            <div className="absolute top-[25%] right-[16.67%] w-16 h-16">
              <div className="absolute top-1/2 left-1/2 w-20 h-px bg-[#efbf37]/60 transform -translate-x-1/2 -translate-y-1/2 rotate-45 origin-center"></div>
            </div>
            
            {/* Lines to bottom row cards */}
            <div className="absolute bottom-[25%] left-[16.67%] w-16 h-16">
              <div className="absolute top-1/2 left-1/2 w-20 h-px bg-[#efbf37]/60 transform -translate-x-1/2 -translate-y-1/2 rotate-[-135deg] origin-center"></div>
            </div>
            <div className="absolute bottom-[25%] left-1/2 w-16 h-16">
              <div className="absolute top-1/2 left-1/2 w-20 h-px bg-[#efbf37]/60 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] origin-center"></div>
            </div>
            <div className="absolute bottom-[25%] right-[16.67%] w-16 h-16">
              <div className="absolute top-1/2 left-1/2 w-20 h-px bg-[#efbf37]/60 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] origin-center"></div>
            </div>
          </div>

          {/* Bottom 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Existing 3 cards + 3 new cards */}
            {[
              {
                icon: RotateCw,
                title: "360° Marketing",
                description: "Complete end-to-end marketing solutions covering every aspect of your digital presence.",
                subServices: [
                  "Audience & Strategy",
                  "Website Optimization", 
                  "Reputation & Quick Wins",
                  "Paid Marketing",
                  "Organic Growth & Engagement",
                  "Content & Email Marketing"
                ],
                platforms: [Target, Users, TrendingUp],
                gradient: "from-primary via-accent to-primary"
              },
              {
                icon: Globe,
                title: "E-commerce Marketplace Management", 
                description: "Complete marketplace management to maximize your online store performance and sales.",
                subServices: [
                  "Product Listing & Catalog Management",
                  "Inventory & Order Management",
                  "Pricing & Promotions Strategy", 
                  "Marketplace SEO & Advertising",
                  "Performance Analytics & Reporting",
                  "Customer Support & Feedback Management"
                ],
                platforms: [Chrome, BarChart3, Search],
                gradient: "from-accent to-primary"
              },
              {
                icon: FileText,
                title: "Content Creation",
                description: "Creative content solutions that engage audiences and drive meaningful connections with your brand.",
                subServices: [
                  "Blog & Article Writing",
                  "Social Media Content Development",
                  "Video Production & Editing",
                  "Graphic Design & Infographics", 
                  "Copywriting (Ads, Websites, Campaigns)",
                  "Email & Newsletter Content"
                ],
                platforms: [Image, FileText, Star],
                gradient: "from-primary to-accent"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="card-gradient rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3`}>
                      <service.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Sub-services */}
                  <ul className="space-y-1.5 mb-4">
                    {service.subServices.map((subService, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-gradient-primary rounded-full mr-2" />
                        {subService}
                      </li>
                    ))}
                  </ul>

                  {/* Platform Icons */}
                  <div className="flex items-center gap-2 mb-4">
                    {service.platforms.map((PlatformIcon, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 flex items-center justify-center rounded-md bg-muted/50 hover:bg-primary/20 transition-all duration-300"
                      >
                        <PlatformIcon className="h-3 w-3 text-muted-foreground hover:text-primary transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/°/g, '')}`}>
                    <Button 
                      variant="gradient-outline" 
                      size="sm"
                      className="w-full group-hover:bg-white group-hover:text-black"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your digital presence?
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Custom Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;