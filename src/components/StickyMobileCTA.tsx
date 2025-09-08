import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Target, X } from "lucide-react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past hero section (approximately 100vh)
      setIsVisible(scrollTop > windowHeight * 0.8);
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-hubspot-orange/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-sm font-bold text-professional-navy">
                  Ready to grow?
                </h3>
                <p className="text-xs text-blue-gray">
                  Book your strategy call
                </p>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-hubspot-orange to-hubspot-orange/90 hover:from-hubspot-orange/90 hover:to-hubspot-orange text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Target className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Book Your Growth Strategy Call</DialogTitle>
                    <DialogDescription>
                      Schedule a consultation to discuss your marketing goals and growth strategy.
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
