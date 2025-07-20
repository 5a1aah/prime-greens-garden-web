import { ChefHat, Building2, Home } from "lucide-react";

const TargetMarkets = () => {
  const markets = [
    {
      icon: ChefHat,
      title: "Luxury Restaurants",
      description: "Deliver farm-fresh, premium quality ingredients directly to Michelin-starred restaurants and high-end culinary establishments.",
      benefits: ["Same-day harvest delivery", "Consistent quality year-round", "Exotic varieties on demand", "Zero pesticide guarantee"]
    },
    {
      icon: Building2,
      title: "Hotels & Resorts",
      description: "Provide sustainable, locally-grown produce for hotel restaurants, banquet services, and farm-to-table dining experiences.",
      benefits: ["Reduced supply chain costs", "Sustainability credentials", "Custom growing programs", "Reliable supply"]
    },
    {
      icon: Home,
      title: "Premium Homeowners",
      description: "Bring vertical farming technology directly to luxury homes with automated growing systems for the freshest ingredients.",
      benefits: ["Home installation service", "App-controlled growing", "Educational programs", "Maintenance included"]
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PRIME GREENS partners with discerning clients who demand the highest quality produce 
            and sustainable growing practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-8 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <market.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{market.title}</h3>
                <p className="text-muted-foreground">{market.description}</p>
              </div>

              <div className="space-y-3">
                {market.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetMarkets;