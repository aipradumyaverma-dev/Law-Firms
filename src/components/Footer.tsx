import { Link } from "react-router-dom";
import { Scale, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                <Scale className="w-7 h-7 text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Law Firms</h3>
                <p className="text-xs text-primary-foreground/70">Legal | Tax | Compliance</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
              India's trusted online platform for all your legal, taxation, and compliance needs. Serving businesses since 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Contact Us", "Blog", "Careers", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Company Registration", href: "/private-limited-company" },
                { label: "GST Registration", href: "/gst-registration" },
                { label: "Trademark Registration", href: "/trademark-registration" },
                { label: "Income Tax Filing", href: "/income-tax-filing" },
                { label: "FSSAI License", href: "/fssai-license" },
                { label: "Accounting Services", href: "/accounting" },
              ].map((service) => (
                <li key={service.label}>
                  <Link to={service.href} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Indore, Madhya Pradesh
                </span>
              </li>
              <li>
                <a href="tel:+917470672478" className="flex gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">+91 7470672478</span>
                </a>
              </li>
              <li>
                <a href="mailto:letworkwithverma@gmail.com" className="flex gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm">letworkwithverma@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Law Firms. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
