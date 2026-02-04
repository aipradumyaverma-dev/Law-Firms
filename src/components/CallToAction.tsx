import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
              Call Us For Quote
            </h2>
            <p className="text-primary-foreground/80">
              We can serve our clients more efficiently thanks to cutting-edge practice technology.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70">Connect with us</span>
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+917470672478" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91 7470672478
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
