import { motion } from "framer-motion";
import { Search, PlaneTakeoff, Rocket, Target } from "lucide-react";

const ProcessSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business, target audience, and competitive landscape to understand your unique challenges and opportunities.",
    features: ["Market Research", "Competitor Analysis", "Audience Insights", "Goal Setting"]
  },
  {
    icon: PlaneTakeoff,
    title: "Planning", 
    description: "Based on our findings, we create a comprehensive strategy tailored to your specific goals with clear timelines and measurable KPIs.",
    features: ["Strategic Planning", "Content Calendar", "Campaign Design", "Resource Allocation"]
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Our expert team executes the strategy with precision, launching campaigns and implementing solutions across all chosen channels.",
    features: ["Campaign Launch", "Content Creation", "Technical Implementation", "Quality Assurance"]
  },
  {
    icon: Target,
    title: "Optimization",
    description: "We continuously monitor performance, analyze data, and optimize campaigns to ensure maximum ROI and sustainable growth.",
    features: ["Performance Monitoring", "A/B Testing", "Data Analysis", "Continuous Improvement"]
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 lg:px-8">
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
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that delivers consistent results through strategic planning, 
            flawless execution, and continuous optimization.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - only connects the circles */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-primary opacity-30 transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 items-stretch">
            {ProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 w-20 h-12 mx-auto mb-4 bg-primary rounded-md flex items-center justify-center text-sm font-bold text-primary-foreground">
                  Step {index + 1}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="card-gradient rounded-xl p-4 border border-border/50 shadow-card transition-all duration-300 text-center h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 mx-auto mb-3 bg-secondary rounded-lg flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-3 leading-relaxed text-xs">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mt-auto max-sm:mt-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center justify-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Arrow for mobile */}
                {index < ProcessSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-0.5 h-8 bg-primary opacity-50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 card-gradient rounded-2xl border border-border/50">
              <div className="text-3xl font-bold gradient-text mb-2">7-14 Days</div>
              <div className="text-sm text-muted-foreground">Customised Strategic Development</div>
            </div>
            <div className="p-6 card-gradient rounded-2xl border border-border/50">
              <div className="text-3xl font-bold gradient-text mb-2">30-60 Days</div>
              <div className="text-sm text-muted-foreground">Full Implementation</div>
            </div>
            <div className="p-6 card-gradient rounded-2xl border border-border/50">
              <div className="text-3xl font-bold gradient-text mb-2">90+ Days</div>
              <div className="text-sm text-muted-foreground">Measurable Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;