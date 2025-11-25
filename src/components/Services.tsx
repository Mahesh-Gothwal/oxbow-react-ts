import { motion } from "framer-motion";
import { Code, Share2, TrendingUp, ArrowRight, Instagram, Facebook, Linkedin, Youtube, Chrome, Twitter, ExternalLink, icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolioImage1 from "@/assets/Web.png";
import portfolioImage2 from "@/assets/Social.png";
import portfolioImage3 from "@/assets/PM.png";
import { FaShopify, FaSquarespace, FaWix, FaCode, FaWordpress } from "react-icons/fa";
import { SiGhost, SiGoogleanalytics, SiGoogleads } from "react-icons/si";
import { FaInstagram, FaFacebookF, FaLinkedin, FaXTwitter, FaYoutube, FaTiktok,FaPinterestP, FaSnapchat, FaMeta} from "react-icons/fa6";
import { RiMiniProgramFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { MdEmail, MdSms } from "react-icons/md";

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

const portfolioItems = [
  {
    id: 1,
    title: "Website Development",
    category: "Website Development",
    description: "We create stunning, functional websites that drive results. Our team specializes in both platform-based and custom solutions, ensuring your digital presence stands out.",
    image: portfolioImage1,
    results: [
      { metric: "WordpressImg", value: "+340%" },
      { metric: "Revenue Growth", value: "$2.1M" },
      { metric: "Page Speed", value: "+85%" }
    ],
    icons: [
      { Icon: FaWordpress, key: "WordPress" },
      { Icon: FaShopify, key: "Shopify" },
      { Icon: SiGhost, key: "Ghost" },
      { Icon: FaSquarespace, key: "Squarespace" },
      { Icon: FaWix, key: "Wix" },
      { Icon: FaCode, key: "Custom Code" },
    ],
    tags: ["Custom Web Applications", "E-commerce Solutions", "Responsive Design", "SEO Optimization"]
  },
  {
    id: 2,
    title: "Social Media Management",
    category: "Social Media Management",
    description: "We help brands build meaningful connections through strategic social media management and engaging content creation that resonates with your audience.",
    image: portfolioImage2,
    results: [
      { metric: "Follower Growth", value: "+450%" },
      { metric: "Engagement Rate", value: "+280%" },
      { metric: "Lead Generation", value: "+190%" }
    ],
   icons: [
      { Icon: FaInstagram, key: "Instagram" },
      { Icon: FaFacebookF , key: "Facebook" },
      { Icon: FaLinkedin, key: "Linkedin" },
      { Icon: FaXTwitter , key: "Twitter" },
      { Icon: FaYoutube , key: "Youtube" },
      { Icon: FaTiktok , key: "Tik-Tok" },
      { Icon: FaPinterestP , key: "Pinterest" },
      { Icon: FaSnapchat  , key: "Snapchat" },
    ],
    tags: ["Content Strategy", "Community Management", "Influencer Marketing", "Analytics & Reporting"]
  },
  {
    id: 3,
    title: "Performance Marketing",
    category: "Performance Marketing",
    description: "We drive measurable results through data-driven marketing strategies and optimized campaigns that deliver real ROI for your business.",
    image: portfolioImage3,
    results: [
      { metric: "CPA Reduction", value: "-65%" },
      { metric: "Qualified Leads", value: "+300%" },
      { metric: "ROAS", value: "8.2x" }
    ],
     icons: [
      { Icon: SiGoogleads, key: "Google Ads" },
      { Icon: FaMeta , key: "Meta" },
      { Icon: FaLinkedin, key: "Linkedin" },
      { Icon: RiMiniProgramFill , key: "Program" },
      { Icon: TbSeo , key: "Seo" },
      { Icon: MdEmail , key: "Email" },
      { Icon: MdSms , key: "Sms" },
      { Icon: SiGoogleanalytics  , key: "Analyics" },
    ],
    tags: ["PPC Campaigns", "Conversion Optimization", "A/B Testing", "ROI Tracking"]
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

<section id="portfolio" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

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

                  <div className="grid grid-cols-3 gap-6 mb-8 place-items-center">
                  {item.icons && item.icons.map(({ Icon, key }) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.2 }}
                      className="text-2xl font-bold gradient-text mb-1 flex flex-col items-center justify-center"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                       <div className="text-sm text-muted-foreground">
                          {key}
                        </div>
                    </motion.div>
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

      </div>
    </section>

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