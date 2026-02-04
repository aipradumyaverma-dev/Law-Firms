import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Monitor, Users, Lightbulb, Phone } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  { icon: Clock, label: "Timely and accurate reporting" },
  { icon: Monitor, label: "Advanced Technology in our offices" },
  { icon: Users, label: "Access to professionals" },
  { icon: Lightbulb, label: "Innovative problem solver" },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              About Us
            </h2>
            <p className="text-gold font-medium mb-6">
              We are changing the way people think about getting online Legal & Taxation Services
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Law Firms is an online platform that can answer all of your legal and tax-related questions. Many experienced experts who live there do their utmost to satisfy their clientele. We enable millions of customers all over India to launch and expand their businesses with the help of professionals.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Established in 2015, with its headquarters in Delhi and additional offices across India. As a business, we make it a priority to assist our customers and lead by example. Each member of Law Firms brings a level of expertise and experience invaluable to the longevity and growth of business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Phone className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call to ask any question</p>
                  <a href="tel:+917470672478" className="text-lg font-bold text-navy hover:text-primary transition-colors">
                    +91 7470672478
                  </a>
                </div>
              </div>
              <Button variant="navy" size="lg" asChild>
                <Link to="/contact">Request A Quote</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Law Firms - Professional Legal Services"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-navy/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
