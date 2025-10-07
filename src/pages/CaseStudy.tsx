import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioImage1 from "@/assets/portfolio-1.jpg";
import portfolioImage2 from "@/assets/portfolio-2.jpg";
import portfolioImage3 from "@/assets/portfolio-3.jpg";

const caseStudyData = {
  "ecommerce-revolution": {
    id: 1,
    title: "E-commerce Revolution",
    category: "Website Development",
    client: "TechGear Pro",
    duration: "4 months",
    image: portfolioImage1,
    challenge: "TechGear Pro was struggling with an outdated e-commerce platform that had poor user experience, slow loading times, and low conversion rates. Their online sales were declining despite increased traffic, and customers were abandoning their carts at an alarming rate of 78%.",
    solution: "We completely redesigned their e-commerce platform with a focus on user experience, performance optimization, and conversion rate improvement. Our approach included mobile-first design, streamlined checkout process, improved product discovery, and advanced analytics integration.",
    results: [
      { metric: "Conversion Rate", value: "+340%", description: "Increased from 1.2% to 5.3%" },
      { metric: "Revenue Growth", value: "$2.1M", description: "Annual revenue increase" },
      { metric: "Page Speed", value: "+85%", description: "Faster loading times" },
      { metric: "Cart Abandonment", value: "-45%", description: "Reduced from 78% to 43%" }
    ],
    testimonial: "The new website exceeded all our expectations. Not only does it look amazing, but our sales have skyrocketed. The team's attention to detail and understanding of our business needs was exceptional.",
    clientName: "Sarah Johnson",
    clientRole: "CEO, TechGear Pro",
    tags: ["Shopify", "Custom Design", "Performance", "UX/UI"],
    keyFeatures: [
      "Mobile-optimized responsive design",
      "Advanced product filtering and search",
      "One-click checkout process",
      "Integrated inventory management",
      "Customer review system",
      "Email marketing automation"
    ]
  },
  "social-media-expertise": {
    id: 2,
    title: "Social Media Expertise",
    category: "Social Media Marketing",
    client: "FitLife Studios",
    duration: "6 months",
    image: portfolioImage2,
    challenge: "FitLife Studios had minimal social media presence with only 500 followers across all platforms. Their content lacked engagement, and they struggled to attract new members to their fitness studios. Brand awareness was low, and they needed a comprehensive social strategy.",
    solution: "We developed a comprehensive social media strategy focusing on community building, engaging content creation, and strategic partnerships with fitness influencers. Our approach included daily content posting, community management, targeted advertising, and user-generated content campaigns.",
    results: [
      { metric: "Follower Growth", value: "+450%", description: "From 500 to 2,750 followers" },
      { metric: "Engagement Rate", value: "+280%", description: "Average post engagement" },
      { metric: "Lead Generation", value: "+190%", description: "New member sign-ups" },
      { metric: "Brand Mentions", value: "+320%", description: "User-generated content" }
    ],
    testimonial: "Our social media presence has completely transformed. We're now seen as the go-to fitness studio in our area, and our community has grown tremendously. The content strategy they developed really resonates with our audience.",
    clientName: "Mike Rodriguez",
    clientRole: "Owner, FitLife Studios",
    tags: ["Instagram", "Facebook", "LinkedIn", "Community Building"],
    keyFeatures: [
      "Daily content creation and posting",
      "Influencer partnership campaigns",
      "Community challenges and contests",
      "Live workout streaming",
      "Member success story features",
      "Targeted local advertising"
    ]
  },
  "ppc-performance-boost": {
    id: 3,
    title: "PPC Performance Boost",
    category: "Performance Marketing",
    client: "Legal Eagles Law Firm",
    duration: "3 months",
    image: portfolioImage3,
    challenge: "Legal Eagles was spending $15,000 monthly on Google Ads with poor results. Their cost-per-acquisition was extremely high at $850, and they were getting mostly unqualified leads. The campaigns lacked proper targeting and optimization, resulting in wasted ad spend.",
    solution: "We completely restructured their PPC campaigns with advanced targeting, improved ad copy, landing page optimization, and strategic bid management. Our approach included keyword research, negative keyword implementation, audience segmentation, and continuous A/B testing.",
    results: [
      { metric: "CPA Reduction", value: "-65%", description: "From $850 to $295" },
      { metric: "Qualified Leads", value: "+300%", description: "Monthly qualified leads" },
      { metric: "ROAS", value: "8.2x", description: "Return on ad spend" },
      { metric: "Click-through Rate", value: "+180%", description: "Improved ad performance" }
    ],
    testimonial: "The results speak for themselves. Our advertising costs dropped significantly while our qualified leads tripled. The team's expertise in legal marketing and PPC optimization was exactly what we needed.",
    clientName: "Attorney David Chen",
    clientRole: "Managing Partner, Legal Eagles Law Firm",
    tags: ["Google Ads", "Meta Ads", "Analytics", "Legal Marketing"],
    keyFeatures: [
      "Advanced keyword targeting",
      "Location-based campaign optimization",
      "Landing page A/B testing",
      "Conversion tracking setup",
      "Audience remarketing campaigns",
      "Competitor analysis and positioning"
    ]
  }
};

const CaseStudy = () => {
  const { caseId } = useParams();
  const caseStudy = caseStudyData[caseId as keyof typeof caseStudyData];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-gradient-secondary rounded-full text-sm font-medium text-black mb-6">
              {caseStudy.category}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="gradient-text">{caseStudy.title}</span>
            </h1>
            
            <div className="flex items-center justify-center gap-8 text-muted-foreground mb-8">
              <span>Client: {caseStudy.client}</span>
              <span>•</span>
              <span>Duration: {caseStudy.duration}</span>
            </div>

            <Link to="/">
              <Button variant="gradient-outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Results Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {caseStudy.results.map((result, index) => (
              <div key={result.metric} className="bg-gradient-card p-6 rounded-xl border border-border/50 shadow-card text-center">
                <div className="text-2xl font-bold gradient-text mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.metric}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              The Challenge
            </h2>
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Solution
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {caseStudy.solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Key Features Implemented</h3>
                <div className="space-y-3">
                  {caseStudy.keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              The Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-card rounded-2xl p-6 border border-border/50 shadow-card text-center"
                >
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {result.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-card text-center">
              <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed italic">
                "{caseStudy.testimonial}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="font-bold text-foreground">{caseStudy.clientName}</div>
                  <div className="text-sm text-muted-foreground">{caseStudy.clientRole}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Technologies & Strategies Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {caseStudy.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground border border-border/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-card">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready for Similar Results?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with proven strategies 
                and innovative solutions tailored to your unique needs.
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

export default CaseStudy;