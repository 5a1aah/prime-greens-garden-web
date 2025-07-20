import { Brain, Wifi, Droplets, Shield, BarChart3, Zap } from "lucide-react";
import aiDashboard from "@/assets/ai-dashboard.jpg";
import automationSystem from "@/assets/automation-system.jpg";
import premiumProduce from "@/assets/premium-produce.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Growth Optimization",
      description: "Machine learning algorithms continuously analyze plant health, optimize nutrient delivery, and predict optimal harvest times for maximum quality and yield.",
      image: aiDashboard
    },
    {
      icon: Wifi,
      title: "IoT Sensor Network", 
      description: "Real-time monitoring of temperature, humidity, pH levels, and nutrient concentrations through our advanced IoT sensor ecosystem.",
      image: automationSystem
    },
    {
      icon: Droplets,
      title: "Precision Automated Irrigation",
      description: "Smart water management system delivers exact nutrient solutions to each plant, reducing water usage by 99% compared to traditional farming.",
      image: automationSystem
    },
    {
      icon: Shield,
      title: "Early Disease Detection",
      description: "Computer vision and AI algorithms detect plant diseases and pests before they become visible, enabling preventive treatment.",
      image: premiumProduce
    },
    {
      icon: BarChart3,
      title: "Growth Analytics Dashboard",
      description: "Comprehensive insights into crop performance, yield predictions, and operational efficiency through our intuitive dashboard.",
      image: aiDashboard
    },
    {
      icon: Zap,
      title: "Vertical Tower Technology",
      description: "Space-efficient vertical growing systems that maximize yield per square foot while minimizing environmental impact.",
      image: automationSystem
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge platform combines artificial intelligence, IoT sensors, 
            and vertical farming to create the most efficient agricultural system ever developed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-gradient rounded-xl p-6 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;