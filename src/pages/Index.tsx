import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import OurServices from "@/components/OurServices";
import CallToAction from "@/components/CallToAction";
import AboutSection from "@/components/AboutSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <ServiceCategories />
        <OurServices />
        <CallToAction />
        <AboutSection />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
