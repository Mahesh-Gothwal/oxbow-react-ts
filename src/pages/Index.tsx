import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import JourneyFlow from "@/components/JourneyFlow";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <WhyChooseUs />
      <JourneyFlow />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
