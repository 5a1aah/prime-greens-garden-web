import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
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

const CTA = () => {
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
    <section className="py-24 hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Agriculture?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the agricultural revolution. Get premium quality produce with zero compromise on taste, 
            nutrition, or sustainability. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              onClick={() => setIsDialogOpen(true)}
            >
              Start Free 30-Day Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              onClick={() => setIsDialogOpen(true)}
            >
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-white/80">
              <Phone className="w-5 h-5 mr-3" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm">+212 620-410-317</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-white/80">
              <Mail className="w-5 h-5 mr-3" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm">salah.eddine.seecs@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-white/60 text-sm">
            No credit card required • Free consultation • 30-day money-back guarantee
          </div>
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

export default CTA;