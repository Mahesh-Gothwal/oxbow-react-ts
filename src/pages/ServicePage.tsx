import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const serviceData = {
  "website-development": {
    title: "Website Development",
    description: "Custom websites and e-commerce solutions built for performance and conversion.",
    longDescription: "We create stunning, high-performance websites that not only look great but drive real business results. Our development process focuses on user experience, search engine optimization, and conversion optimization to ensure your website works as hard as you do.",
    features: [
      "Custom responsive design for all devices",
      "SEO-optimized structure and content",
      "Fast loading speeds (< 3 seconds)",
      "E-commerce integration and payment processing",
      "Content Management System (CMS)",
      "Analytics and tracking setup",
      "Security optimization and SSL certificates",
      "Ongoing maintenance and support"
    ],
    benefits: [
      "Increase online visibility and organic traffic",
      "Improve user engagement and conversion rates",
      "Reduce bounce rates with optimized UX",
      "Scale your business with e-commerce capabilities"
    ],
    gradient: "from-primary to-accent"
  },
  "social-media-management": {
    title: "Social Media Management",
    description: "Strategic social media campaigns that build communities and drive engagement.",
    longDescription: "Our social media experts create compelling content and manage your online presence across all major platforms. We build authentic relationships with your audience while driving measurable business results through strategic social media marketing.",
    features: [
      "Content strategy and planning",
      "Daily posting and community management",
      "Influencer collaboration and partnerships",
      "Social media advertising campaigns",
      "Performance analytics and reporting",
      "Brand voice and messaging development",
      "Crisis management and reputation protection",
      "Cross-platform integration"
    ],
    benefits: [
      "Build a loyal community of engaged followers",
      "Increase brand awareness and recognition",
      "Drive qualified traffic to your website",
      "Generate leads through social commerce"
    ],
    gradient: "from-accent to-primary"
  },
  "performance-marketing": {
    title: "Performance Marketing",
    description: "Data-driven advertising campaigns optimized for maximum ROI and conversions.",
    longDescription: "We maximize your advertising spend through strategic performance marketing campaigns. Our data-driven approach ensures every dollar spent contributes to your bottom line while continuously optimizing for better results.",
    features: [
      "Google Ads and PPC campaign management",
      "Facebook and Instagram advertising",
      "LinkedIn B2B advertising campaigns",
      "Conversion rate optimization (CRO)",
      "A/B testing and performance analysis",
      "Audience research and targeting",
      "Retargeting and remarketing campaigns",
      "ROI tracking and attribution modeling"
    ],
    benefits: [
      "Maximize return on advertising spend (ROAS)",
      "Generate qualified leads and conversions",
      "Reduce customer acquisition costs",
      "Scale successful campaigns efficiently"
    ],
    gradient: "from-primary via-accent to-primary"
  },
  "360-marketing": {
    title: "360° Marketing",
    description: "Complete end-to-end marketing solutions covering every aspect of your digital presence.",
    longDescription: "Our comprehensive 360° marketing approach ensures all aspects of your digital marketing work together seamlessly. From strategy development to execution and optimization, we handle every element of your marketing ecosystem.",
    features: [
      "Comprehensive marketing strategy development",
      "Audience research and persona development",
      "Website optimization and conversion improvements",
      "Reputation management and brand protection",
      "Paid advertising across all channels",
      "Organic growth and SEO optimization",
      "Content marketing and email campaigns",
      "Performance tracking and analytics"
    ],
    benefits: [
      "Unified brand message across all channels",
      "Improved marketing efficiency and ROI",
      "Comprehensive market coverage",
      "Scalable growth strategies"
    ],
    gradient: "from-primary via-accent to-primary"
  },
  "ecommerce-management": {
    title: "E-commerce Marketplace Management",
    description: "Complete marketplace management to maximize your online store performance and sales.",
    longDescription: "We help businesses succeed on major e-commerce platforms through comprehensive marketplace management. Our expertise covers everything from product optimization to customer service, ensuring your online store performs at its peak.",
    features: [
      "Product listing optimization and catalog management",
      "Inventory tracking and order management",
      "Dynamic pricing and promotions strategy",
      "Marketplace SEO and keyword optimization",
      "Advertising campaign management",
      "Performance analytics and reporting",
      "Customer support and review management",
      "Multi-platform integration and scaling"
    ],
    benefits: [
      "Increase product visibility and rankings",
      "Maximize sales and revenue growth",
      "Improve customer satisfaction and reviews",
      "Streamline operations and reduce costs"
    ],
    gradient: "from-accent to-primary"
  },
  "content-creation": {
    title: "Content Creation",
    description: "Creative content solutions that engage audiences and drive meaningful connections with your brand.",
    longDescription: "Our creative team produces high-quality content that resonates with your audience and supports your business objectives. From blog posts to video content, we create materials that inform, engage, and convert.",
    features: [
      "Blog and article writing with SEO optimization",
      "Social media content development",
      "Video production and editing services",
      "Graphic design and infographic creation",
      "Copywriting for ads, websites, and campaigns",
      "Email marketing and newsletter content",
      "Brand storytelling and messaging",
      "Content calendar and strategy planning"
    ],
    benefits: [
      "Establish thought leadership in your industry",
      "Improve search engine rankings",
      "Increase audience engagement and shares",
      "Support all marketing channels with quality content"
    ],
    gradient: "from-primary to-accent"
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button variant="gradient">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Service Background" 
            className="w-full h-full object-cover opacity-30"
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
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="gradient-text">{service.title}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>

            <Link to="/">
              <Button variant="gradient-outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              <div className="card-gradient rounded-2xl p-8 border border-border/50 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Service Features
              </h2>
              
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20 border border-border/30"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-card">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our {service.title.toLowerCase()} services can help 
                transform your business and achieve your goals.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;