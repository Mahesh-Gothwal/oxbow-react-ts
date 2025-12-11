import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import SuccessStories from "@/components/SuccessStories";
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
      <Portfolio />
      {/* <SuccessStories /> */}
      <Testimonials />
      <WhyChooseUs />
      <JourneyFlow />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
