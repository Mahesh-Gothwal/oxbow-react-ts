import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import journeyStep1 from "@/assets/journey-step-1-new.jpg";
import journeyStep2 from "@/assets/journey-step-2-new.jpg";
import journeyStep3 from "@/assets/journey-step-3-new.jpg";
import journeyStep4 from "@/assets/journey-step-4-new.jpg";

const JourneyFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      id: 1,
      title: "Offline Store",
      description: "Your brick-and-mortar foundation where customer relationships begin.",
      image: journeyStep1,
      delay: 0.2
    },
    {
      id: 2,
      title: "Going Digital",
      description: "Building your online presence with websites and social media.",
      image: journeyStep2,
      delay: 0.4
    },
    {
      id: 3,
      title: "Growth in Numbers",
      description: "Tracking performance and scaling your digital reach.",
      image: journeyStep3,
      delay: 0.6
    },
    {
      id: 4,
      title: "Client Success",
      description: "Achieving measurable results and lasting business growth.",
      image: journeyStep4,
      delay: 0.8
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <section className="py-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Your Journey: Offline to Online
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See how we transform your business from offline store to online success.
          </p>
        </motion.div>

        {/* Journey Flowchart */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Desktop Layout: Horizontal Flow */}
          <div className="hidden lg:flex justify-center items-start space-x-16 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: step.delay }}
                className="text-center flex flex-col items-center flex-1 max-w-64"
              >
                {/* Step Number */}
                <div className="w-12 h-12 bg-[#efbf37] rounded-full flex items-center justify-center text-black font-bold text-lg mb-6 relative z-10">
                  {step.id}
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl shadow-2xl group mb-6 w-56 h-40">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Caption */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tablet Layout: 2x2 Grid */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 bg-[#efbf37] rounded-full flex items-center justify-center text-black font-bold mb-4 relative z-10">
                    {step.id}
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg group mb-4 w-48 h-32">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout: Vertical Flow */}
          <div className="md:hidden space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: step.delay }}
                className="text-center flex flex-col items-center"
              >
                {/* Step Number */}
                <div className="w-10 h-10 bg-[#efbf37] rounded-full flex items-center justify-center text-black font-bold mb-4 relative z-10">
                  {step.id}
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl shadow-lg group mb-6 w-full max-w-80 h-48">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Caption */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 max-w-72 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JourneyFlow;