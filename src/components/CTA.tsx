import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
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
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              Start Free 30-Day Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-white/80">
              <Phone className="w-5 h-5 mr-3" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm">+1 (555) 123-GROW</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-white/80">
              <Mail className="w-5 h-5 mr-3" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm">hello@primegreens.co</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-white/60 text-sm">
            No credit card required • Free installation • 30-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;