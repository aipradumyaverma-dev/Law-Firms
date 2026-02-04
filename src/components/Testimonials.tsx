import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStart India",
    content: "Law Firms helped us register our Private Limited Company in just 7 days. Their team is extremely professional and knowledgeable.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, FoodHub",
    content: "Got my FSSAI license without any hassle. The team guided me through every step. Highly recommended for food business owners!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Director, BuildRight Construction",
    content: "Their GST compliance services are top-notch. They handle all our filings and ensure we never miss a deadline.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of businesses across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
