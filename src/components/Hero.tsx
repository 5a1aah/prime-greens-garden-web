import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-hydroponic-tower.jpg";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent("Prime Greens - Interest Form");
    const body = encodeURIComponent(
      `New interest form submission:\n\nName: ${formData.name}\nOrganization: ${formData.organization || "Not provided"}\nEmail: ${formData.email}`
    );
    const mailtoLink = `mailto:salah.eddine.seecs@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Thank you for your interest!",
      description: "Your email client has been opened. Please send the email to complete your submission.",
    });
    
    // Reset form and close dialog
    setFormData({ name: "", organization: "", email: "" });
    setIsDialogOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern vertical hydroponic farming tower" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
              Agriculture is Here
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            AI-powered vertical hydroponic farming that delivers premium quality vegetables, 
            fruits, herbs, and mushrooms directly to your restaurant, hotel, or home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setIsDialogOpen(true)}
            >
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              onClick={() => setIsDialogOpen(true)}
            >
              <Play className="mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-sm">Water Efficiency</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-white">365</div>
              <div className="text-sm">Days Growing Season</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-white">10x</div>
              <div className="text-sm">Higher Yield</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Coming Soon!</DialogTitle>
            <DialogDescription>
              We're putting the finishing touches on our platform. Leave your details and we'll notify you when we launch.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="organization">Organization (Optional)</Label>
              <Input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Restaurant, Hotel, or Company name"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Interest
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;