import { Linkedin, Twitter, Mail, Heart, Bot, MapPin, Phone, Globe } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Meher</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Digital Marketing Strategist helping brands unlock their growth potential 
              through data-driven strategies and creative campaigns.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <p>hello@meher.me</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <p>+1 (403) 614-8865</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <p>Calgary | AB | Canada</p>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <p>Available worldwide</p>
              </div>
            </div>
          </div>

          {/* Vetted Badges */}
          <div className="flex items-center justify-start gap-1 md:gap-2">
            <img 
              src="/lovable-uploads/8e18db3a-dc36-4acd-8194-0f36bbcead8c.png" 
              alt="Vetted by Mayple" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <img 
              src="/lovable-uploads/8fc0744b-fccd-4618-a12f-357b9ad9cd23.png" 
              alt="Certified Scrum Master" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <img 
              src="/lovable-uploads/76003e36-9525-4b09-84d0-842bb7aa8f2d.png" 
              alt="CXL Certified Optimizer" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <img 
              src="/lovable-uploads/549fada6-0136-463b-82fe-a1d59d77ec5f.png" 
              alt="HubSpot Solutions Partner" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Bot size={16} className="mx-1 text-primary" /> AI
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;