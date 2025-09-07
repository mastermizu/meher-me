import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Target } from "lucide-react";

const NewsletterSignup = () => {
  useEffect(() => {
    // Load BeHive embed script
    const beehiveScript = document.createElement('script');
    beehiveScript.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    beehiveScript.async = true;
    document.head.appendChild(beehiveScript);

    // Load Calendly booking embed script
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.head.appendChild(calendlyScript);

    return () => {
      // Cleanup scripts on unmount
      if (document.head.contains(beehiveScript)) {
        document.head.removeChild(beehiveScript);
      }
      if (document.head.contains(calendlyScript)) {
        document.head.removeChild(calendlyScript);
      }
    };
  }, []);

  return (
    <Card className="hubspot-card bg-clean-white max-w-lg mx-auto">
      <CardContent className="p-hubspot-lg pt-hubspot-xl">
        <h3 className="text-hubspot-h2 text-xl mb-hubspot-md text-center">Get Started</h3>
        
        <div className="space-hubspot-sm">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="hubspot-button-primary w-full justify-center text-lg py-3">
                <Mail className="mr-2 h-5 w-5" />
                Send Me Growth Hacks
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle>Subscribe to Newsletter</DialogTitle>
                <DialogDescription>
                  Get the latest growth hacks and marketing insights delivered to your inbox.
                </DialogDescription>
              </DialogHeader>
              <div className="w-full">
                <iframe 
                  src="https://subscribe-forms.beehiiv.com/94d058f2-265f-40ca-8663-bf1e1fbfaf1d" 
                  className="beehiiv-embed w-full h-[524px] border-0" 
                  data-test-id="beehiiv-embed" 
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    width: '100%',
                    height: '524px',
                    margin: 0,
                    borderRadius: '0px 0px 0px 0px !important',
                    backgroundColor: 'transparent',
                    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    maxWidth: '100%'
                  }}
                />
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-center text-lg py-3 border-growth-teal text-growth-teal hover:bg-growth-teal hover:text-white">
                <Target className="mr-2 h-5 w-5 animate-pulse" />
                Book A Growth Strategy Call
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
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;