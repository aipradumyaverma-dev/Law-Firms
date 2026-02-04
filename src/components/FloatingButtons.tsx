import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="tel:+917470672478"
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform animate-pulse-glow"
        title="Call us"
      >
        <Phone className="w-6 h-6 text-navy" />
      </a>
      <a
        href="https://wa.me/917470672478"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
