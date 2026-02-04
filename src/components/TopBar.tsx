import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-navy text-primary-foreground py-2.5 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <MapPin className="w-4 h-4 text-gold" />
            <span className="hidden sm:inline">Indore, Madhya Pradesh</span>
            <span className="sm:hidden">Indore</span>
          </a>
          <a
            href="tel:+917470672478"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>+91 7470672478</span>
          </a>
          <a
            href="mailto:letworkwithverma@gmail.com"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span className="hidden md:inline">letworkwithverma@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="p-1.5 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy transition-all">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
