import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Timeline", href: "#timeline" },
    { name: "Work", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href, 80); // 80px offset for fixed header
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Initialize orange background position to "Let's Talk"
    const initializeIndicator = () => {
      const letsTalkElement = document.querySelector('[data-lets-talk]') as HTMLElement;
      const parentElement = letsTalkElement?.parentElement;
      if (letsTalkElement && parentElement) {
        const rect = letsTalkElement.getBoundingClientRect();
        const parent = parentElement.getBoundingClientRect();
        const left = rect.left - parent.left;
        parentElement.style.setProperty('--indicator-left', `${left}px`);
        parentElement.style.setProperty('--indicator-width', `${rect.width}px`);
        parentElement.style.setProperty('--indicator-opacity', '1');
      }
    };

    // Initialize immediately and also with a small delay to ensure DOM is ready
    initializeIndicator();
    setTimeout(initializeIndicator, 100);
    
    // Also reinitialize on window resize
    window.addEventListener('resize', initializeIndicator);
    return () => window.removeEventListener('resize', initializeIndicator);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="flex justify-center px-6">
        {/* Centered Rounded Black Bar */}
        <nav className="bg-gray-900 rounded-full px-8 py-3 shadow-lg backdrop-blur-lg border border-gray-700">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative"
               onMouseLeave={(e) => {
                 // Return to "Let's Talk" position
                 const letsTalkElement = e.currentTarget.querySelector('[data-lets-talk]') as HTMLElement;
                 if (letsTalkElement) {
                   const rect = letsTalkElement.getBoundingClientRect();
                   const parent = e.currentTarget.getBoundingClientRect();
                   const left = rect.left - parent.left;
                   e.currentTarget.style.setProperty('--indicator-left', `${left}px`);
                   e.currentTarget.style.setProperty('--indicator-width', `${rect.width}px`);
                 }
               }}>
            {/* Logo */}
            <a href="#" className="text-lg font-bold text-white mr-6">
              <span className="text-gradient">Meher</span>
            </a>
            
            {/* Sliding background - starts at "Let's Talk" position */}
            <div className="absolute bg-hubspot-orange rounded-full h-10 transition-all duration-300 ease-out" 
                 style={{
                   left: 'var(--indicator-left, 0px)',
                   width: 'var(--indicator-width, 0px)',
                   opacity: 'var(--indicator-opacity, 0)',
                 }}></div>
            
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative px-4 py-2 text-white/80 hover:text-white transition-colors duration-300 font-medium rounded-full z-10"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const parent = e.currentTarget.parentElement?.getBoundingClientRect();
                  if (parent) {
                    const left = rect.left - parent.left;
                    e.currentTarget.parentElement?.style.setProperty('--indicator-left', `${left}px`);
                    e.currentTarget.parentElement?.style.setProperty('--indicator-width', `${rect.width}px`);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
            
            
            <motion.a
              href="#strategy"
              data-lets-talk
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#strategy');
              }}
              className="relative px-4 py-2 text-white transition-colors duration-300 font-medium rounded-full z-10"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const parent = e.currentTarget.parentElement?.getBoundingClientRect();
                if (parent) {
                  const left = rect.left - parent.left;
                  e.currentTarget.parentElement?.style.setProperty('--indicator-left', `${left}px`);
                  e.currentTarget.parentElement?.style.setProperty('--indicator-width', `${rect.width}px`);
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Talk</span>
            </motion.a>

          </div>

          {/* Mobile Menu Content */}
          <div className="md:hidden flex items-center">
            {/* Mobile Logo */}
            <a href="#" className="text-lg font-bold text-white mr-4">
              <span className="text-gradient">Meher</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="text-white/80 hover:text-hubspot-orange transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-50 animate-fade-in">
          <div className="mx-6 mt-4">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl backdrop-blur-lg border border-gray-700">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-3 text-white/80 hover:text-white transition-all duration-300 font-medium rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-hubspot-orange rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  </a>
                ))}
                <a
                  href="#strategy"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-hubspot-orange text-hubspot-orange hover:bg-hubspot-orange hover:text-white rounded-xl mt-4 font-bold text-lg py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    Let's Talk
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;