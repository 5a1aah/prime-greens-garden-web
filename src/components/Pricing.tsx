import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      target: "Small Restaurants",
      price: "$2,999",
      period: "/month",
      description: "Perfect for boutique restaurants and cafes looking to enhance their fresh produce supply.",
      features: [
        "2 vertical growing towers",
        "50+ varieties available",
        "Weekly harvest delivery",
        "Basic analytics dashboard",
        "Email support",
        "Installation included"
      ],
      popular: false
    },
    {
      name: "Professional",
      target: "Hotels & Large Restaurants",
      price: "$7,999",
      period: "/month",
      description: "Comprehensive solution for luxury hotels and high-volume restaurants.",
      features: [
        "6 vertical growing towers",
        "100+ varieties available",
        "3x weekly harvest delivery",
        "Advanced AI analytics",
        "Priority phone support",
        "Custom growing programs",
        "Sustainability reporting",
        "Chef training included"
      ],
      popular: true
    },
    {
      name: "Home Elite",
      target: "Luxury Homes",
      price: "$12,999",
      period: "one-time",
      description: "Complete home vertical farming system with ongoing maintenance and support.",
      features: [
        "Custom home installation",
        "Mobile app control",
        "Unlimited varieties",
        "24/7 monitoring",
        "Monthly maintenance",
        "Family growing workshops",
        "Nutrition optimization",
        "5-year warranty"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing options designed to meet the unique needs of our diverse clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-background rounded-xl p-8 shadow-card transition-all duration-300 transform hover:-translate-y-2 animate-scale-in ${
                plan.popular ? 'ring-2 ring-primary shadow-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.target}</p>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.name === "Home Elite" ? "Schedule Consultation" : "Start Free Trial"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include free installation and 30-day money-back guarantee. 
            <br />
            Contact us for custom enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;