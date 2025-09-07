import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, FileText } from "lucide-react";
const StrategyCallCTA = () => {
  useEffect(() => {
    // Load Calendly booking embed script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const responseItems = [{
    icon: Clock,
    title: "Initial Response",
    time: "24 hours",
    description: "I'll acknowledge your inquiry and provide initial guidance"
  }, {
    icon: Calendar,
    title: "Strategy Call",
    time: "48 hours",
    description: "Comprehensive consultation to understand your goals"
  }, {
    icon: FileText,
    title: "Proposal Delivery",
    time: "72 hours",
    description: "Detailed strategy and implementation roadmap"
  }];
  return <section id="strategy" className="py-hubspot-lg bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-hubspot-lg">
          <h2 className="text-hubspot-h2 font-bold text-professional-navy mb-hubspot-md">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-hubspot-base text-professional-navy mb-hubspot-lg max-w-xl mx-auto">
            Let's discuss your marketing challenges and create a customized strategy 
            that delivers measurable results for your business.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="default" className="bg-hubspot-orange hover:bg-hubspot-orange/90 text-white text-lg">
                Book a Strategy Call
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle>Book Your Strategy Call</DialogTitle>
                <DialogDescription>
                  Schedule a consultation to discuss your marketing goals and strategy.
                </DialogDescription>
              </DialogHeader>
              <div className="w-full">
                <iframe 
                  src="https://calendly.com/meherul/growth-discovery-call"
                  className="w-full border-0"
                  style={{
                    minWidth: '320px',
                    height: '700px'
                  }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Response Times */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-hubspot-h3 font-medium text-professional-navy text-center mb-hubspot-md">
            Response Times
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {responseItems.map((item, index) => <Card key={index} className="border border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-hubspot-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-hubspot-orange" />
                  </div>
                  <h4 className="text-sm font-medium text-professional-navy mb-1">
                    {item.title}
                  </h4>
                  <div className="text-lg font-semibold text-hubspot-orange mb-2">
                    {item.time}
                  </div>
                  <p className="text-professional-navy text-xs">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default StrategyCallCTA;