import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gold font-medium text-lg md:text-xl mb-4 animate-fade-in-up opacity-0 animation-delay-100">
            Welcome to Law Firms
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in-up opacity-0 animation-delay-200">
            Protecting Your Rights,
            <br />
            <span className="text-gold">Providing Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0 animation-delay-300">
            India's trusted legal services platform for business registration, taxation, compliance, and intellectual property protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
