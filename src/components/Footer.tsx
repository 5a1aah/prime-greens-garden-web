import { Leaf, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-primary mr-3" />
              <span className="text-2xl font-bold">PRIME GREENS</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Revolutionizing agriculture through AI-powered vertical farming. 
              Delivering premium quality produce with sustainable growing practices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">For Restaurants</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">For Hotels</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">For Homes</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Technology</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Training</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 PRIME GREENS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;