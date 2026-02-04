import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "FSSAI License",
    price: "Starting At Rs. 5,999 Onwards",
    description: "Ideal for entrepreneur who want to Start Food Business with Fssai License",
    href: "/fssai-license",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "OPC Registration",
    price: "Starting At Rs. 2,999 Onwards",
    description: "Ideal for entrepreneur who have alone started a venture",
    href: "/opc-registration",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Private Firm Reg.",
    price: "Starting At Rs. 3,999 Onwards",
    description: "Ideal for entrepreneur For start Private Company",
    href: "/private-limited-company",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "GST Registration",
    price: "Starting At Rs. 1,999 Onwards",
    description: "GST is a tax registration mandatory for all businesses in India",
    href: "/gst-registration",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Trademark Registration",
    price: "Starting At Rs. 1,499 + Govt. Fees",
    description: "File trademark to protect your brand name/logo",
    href: "/trademark-registration",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Income Tax Filing",
    price: "Starting At Rs. 999 Onwards",
    description: "Expert assistance for hassle-free income tax return filing",
    href: "/income-tax-filing",
    gradient: "from-teal-500 to-green-500",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            India's largest Legal service platform for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className={`h-3 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gold font-semibold text-sm mb-3">
                  {service.price}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="navy" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
