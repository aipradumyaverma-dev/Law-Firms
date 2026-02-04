import { Link } from "react-router-dom";
import { Briefcase, FileText, Shield, Calculator, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    title: "Firm Registration",
    price: "Starting from ₹999/-",
    color: "bg-orange-100 text-orange-600",
    items: [
      { label: "Private Limited Company", href: "/private-limited-company" },
      { label: "One Person Company", href: "/opc-registration" },
      { label: "Limited Liability Partnership", href: "/llp-registration" },
      { label: "Sole Proprietorship", href: "/proprietorship" },
    ],
  },
  {
    icon: FileText,
    title: "Goods and Services Tax",
    price: "Starting from ₹399/-",
    color: "bg-blue-100 text-blue-600",
    items: [
      { label: "GST Registration", href: "/gst-registration" },
      { label: "GST Filing", href: "/gst-filing" },
      { label: "GST Advisory", href: "/gst-advisory" },
      { label: "GST For Individuals", href: "/gst-individuals" },
    ],
  },
  {
    icon: Shield,
    title: "Cognitive Safeguard",
    price: "Starting from ₹999/-",
    color: "bg-purple-100 text-purple-600",
    items: [
      { label: "Trademark Registration", href: "/trademark-registration" },
      { label: "Trademark Watch", href: "/trademark-watch" },
      { label: "Trademark Renewal", href: "/trademark-renewal" },
      { label: "Copyright Registration", href: "/copyright-registration" },
    ],
  },
  {
    icon: Calculator,
    title: "Accounting & Compliance",
    price: "Starting from ₹999/-",
    color: "bg-green-100 text-green-600",
    items: [
      { label: "Maintain Your Accounts", href: "/accounting" },
      { label: "Compliance Packages", href: "/compliance-packages" },
      { label: "Prof Tax Registration", href: "/prof-tax" },
      { label: "Income Tax Return Filing", href: "/income-tax-filing" },
    ],
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-cream -mt-24 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 p-6 border border-border group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-gold font-semibold text-sm mb-4">{category.price}</p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gold" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
