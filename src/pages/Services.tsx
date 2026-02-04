import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const allServices = [
  {
    category: "Business Formation",
    services: [
      { title: "Private Limited Company", href: "/private-limited-company", price: "₹3,999", description: "Register your private limited company with expert assistance" },
      { title: "One Person Company", href: "/opc-registration", price: "₹2,999", description: "Single member company registration for solo entrepreneurs" },
      { title: "LLP Registration", href: "/llp-registration", price: "₹2,999", description: "Limited Liability Partnership registration services" },
      { title: "Sole Proprietorship", href: "/proprietorship", price: "₹999", description: "Simple and quick proprietorship registration" },
      { title: "Section 8 Company", href: "/section-8-company", price: "₹9,999", description: "Non-profit company registration services" },
    ],
  },
  {
    category: "Registrations & Licenses",
    services: [
      { title: "GST Registration", href: "/gst-registration", price: "₹1,999", description: "Mandatory tax registration for businesses" },
      { title: "FSSAI License", href: "/fssai-license", price: "₹5,999", description: "Food license for food businesses" },
      { title: "MSME Registration", href: "/msme-registration", price: "₹999", description: "Udyam registration for MSMEs" },
      { title: "Import Export Code", href: "/iec-registration", price: "₹2,999", description: "IEC registration for international trade" },
      { title: "Shop Establishment", href: "/shop-establishment", price: "₹1,999", description: "Shop and establishment license" },
    ],
  },
  {
    category: "Tax Services",
    services: [
      { title: "Income Tax Filing", href: "/income-tax-filing", price: "₹999", description: "Expert ITR filing assistance" },
      { title: "GST Filing", href: "/gst-filing", price: "₹499", description: "Monthly/Quarterly GST return filing" },
      { title: "TDS Returns", href: "/tds-returns", price: "₹999", description: "TDS return filing services" },
      { title: "Tax Planning", href: "/tax-planning", price: "₹2,999", description: "Strategic tax planning consultation" },
    ],
  },
  {
    category: "Trademark & IP",
    services: [
      { title: "Trademark Registration", href: "/trademark-registration", price: "₹1,499", description: "Protect your brand identity" },
      { title: "Trademark Renewal", href: "/trademark-renewal", price: "₹2,999", description: "Renew your trademark registration" },
      { title: "Copyright Registration", href: "/copyright-registration", price: "₹4,999", description: "Protect your creative works" },
      { title: "Patent Registration", href: "/patent-registration", price: "₹14,999", description: "Patent your inventions" },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive legal, tax, and compliance services for businesses of all sizes
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {allServices.map((category, categoryIndex) => (
              <div key={category.category} className="mb-16 last:mb-0">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 pb-4 border-b border-border">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.href}
                      className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gold font-semibold text-sm mb-3">
                        Starting at {service.price}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Why Choose Law Firms?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Expert Legal Professionals",
                "Affordable Pricing",
                "Quick Turnaround Time",
                "100% Online Process",
                "Dedicated Support",
                "Government Approved",
                "Secure & Confidential",
                "Pan India Service",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-card">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
