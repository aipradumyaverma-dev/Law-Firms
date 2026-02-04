import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Scale } from "lucide-react";

const navItems = [
  {
    label: "Form a Business",
    href: "/business-formation",
    submenu: [
      { label: "Private Limited Company", href: "/private-limited-company" },
      { label: "One Person Company", href: "/opc-registration" },
      { label: "Limited Liability Partnership", href: "/llp-registration" },
      { label: "Sole Proprietorship", href: "/proprietorship" },
      { label: "Section 8 Company", href: "/section-8-company" },
    ],
  },
  {
    label: "Registration",
    href: "/registration",
    submenu: [
      { label: "GST Registration", href: "/gst-registration" },
      { label: "MSME Registration", href: "/msme-registration" },
      { label: "FSSAI License", href: "/fssai-license" },
      { label: "Import Export Code", href: "/iec-registration" },
      { label: "Shop & Establishment", href: "/shop-establishment" },
    ],
  },
  {
    label: "Tax",
    href: "/tax-services",
    submenu: [
      { label: "Income Tax Filing", href: "/income-tax-filing" },
      { label: "GST Filing", href: "/gst-filing" },
      { label: "TDS Returns", href: "/tds-returns" },
      { label: "Tax Planning", href: "/tax-planning" },
    ],
  },
  {
    label: "Trademark/Patent",
    href: "/trademark",
    submenu: [
      { label: "Trademark Registration", href: "/trademark-registration" },
      { label: "Trademark Renewal", href: "/trademark-renewal" },
      { label: "Copyright Registration", href: "/copyright-registration" },
      { label: "Patent Registration", href: "/patent-registration" },
    ],
  },
  {
    label: "Compliances",
    href: "/compliances",
    submenu: [
      { label: "Annual Compliance", href: "/annual-compliance" },
      { label: "ROC Filing", href: "/roc-filing" },
      { label: "Director KYC", href: "/director-kyc" },
      { label: "Accounting & Bookkeeping", href: "/accounting" },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
              <Scale className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-navy">Law Firms</h1>
              <p className="text-xs text-muted-foreground">Legal | Tax | Compliance</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {activeDropdown === item.label && item.submenu && (
                  <div className="absolute top-full left-0 w-64 bg-card shadow-elevated rounded-lg py-2 border border-border animate-fade-in-up">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  to={item.href}
                  className="block font-medium text-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block text-sm text-muted-foreground py-1.5 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button variant="gold" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
