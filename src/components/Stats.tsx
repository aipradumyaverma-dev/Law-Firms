import { Users, Award, FileCheck, Building2 } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: FileCheck, value: "1,00,000+", label: "Cases Completed" },
  { icon: Building2, value: "25+", label: "Cities Covered" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
