import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building, User, CheckCircle, Award, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const containerWidth = rect.width;
    const scrollWidth = scrollContainerRef.current.scrollWidth;
    const maxScroll = scrollWidth - containerWidth;

    // Calculate scroll position based on mouse position
    const scrollPosition = mouseX / containerWidth * maxScroll;
    scrollContainerRef.current.scrollLeft = scrollPosition;
  }, []);

  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const scrollLeft = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320; // w-80 = 320px
    const gap = 24; // gap-6 = 24px
    const scrollAmount = cardWidth + gap;
    scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }, []);

  const scrollRight = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320; // w-80 = 320px
    const gap = 24; // gap-6 = 24px
    const scrollAmount = cardWidth + gap;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }, []);

  // Initialize scroll position on mount
  useEffect(() => {
    checkScrollPosition();
  }, [checkScrollPosition]);
  const testimonials = [{
    id: 1,
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechCorp Solutions",
    companyLogo: "TC",
    rating: 5,
    review: "Meher transformed our lead generation completely. We went from 50 leads per month to over 500 qualified prospects. The ROI on our marketing spend increased by 340%.",
    metrics: {
      leadIncrease: "+900%",
      roiImprovement: "+340%",
      campaignDuration: "6 months"
    },
    verified: true
  }, {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "StartupXYZ",
    companyLogo: "SXZ",
    rating: 5,
    review: "The email automation sequences Meher built generated $280K in additional revenue in just 4 months. Her understanding of customer psychology is remarkable.",
    metrics: {
      revenueGenerated: "$280K",
      emailOpenRate: "45.8%",
      conversionRate: "12.4%"
    },
    verified: true
  }, {
    id: 3,
    name: "Lisa Wong",
    role: "Marketing Director",
    company: "Enterprise Co",
    companyLogo: "EC",
    rating: 5,
    review: "Working with Meher was a game-changer for our B2B campaigns. She reduced our cost per acquisition by 60% while doubling our lead quality score.",
    metrics: {
      cpaReduction: "-60%",
      leadQuality: "+100%",
      pipelineValue: "$1.2M"
    },
    verified: true
  }, {
    id: 4,
    name: "David Kim",
    role: "Growth Manager",
    company: "SaaS Platform Inc",
    companyLogo: "SPI",
    rating: 5,
    review: "Meher's data-driven approach to growth marketing helped us achieve product-market fit faster. Our monthly recurring revenue grew by 250% in 8 months.",
    metrics: {
      mrrGrowth: "+250%",
      churnReduction: "-45%",
      ltv: "+180%"
    },
    verified: true
  }];
  const clientLogos = [{
    name: "Telus",
    logo: "/lovable-uploads/e48a23e9-2412-41fa-89ec-9e28c5f58ffb.png",
    industry: "Telecommunications"
  }, {
    name: "Mailchimp",
    logo: "/lovable-uploads/c6e3a91c-d6db-4978-90fa-f8f08c530bf2.png",
    industry: "Email Marketing"
  }, {
    name: "City Cannabis",
    logo: "/lovable-uploads/f860482d-718b-4e4e-83cb-c4b7cea047ce.png",
    industry: "Cannabis"
  }, {
    name: "iON United",
    logo: "/lovable-uploads/c27468ea-3601-4803-8f1a-cdf78be57c0b.png",
    industry: "Technology"
  }, {
    name: "BC Corrections",
    logo: "/lovable-uploads/7758b1f6-bd7f-4377-822e-b3cffc7f4d16.png",
    industry: "Government"
  }, {
    name: "Crystal Waters",
    logo: "/lovable-uploads/c817cf31-8b86-4981-90ad-4a016dac7ccb.png",
    industry: "Plumbing"
  }, {
    name: "Switchboard",
    logo: "/lovable-uploads/80badf62-4252-4a51-9757-bb36830fb213.png",
    industry: "SaaS"
  }, {
    name: "National Press Foundation",
    logo: "/lovable-uploads/1f18ce77-d3fe-43c0-a68d-81b07f16db70.png",
    industry: "Non-profit"
  }, {
    name: "Vibrant Emotional Health",
    logo: "/lovable-uploads/cebac4ed-ba08-4456-959a-e519862ffac0.png",
    industry: "Social Services"
  }];
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }).map((_, index) => <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />);
  };
  return <section id="testimonials" className="section-spacing bg-pattern-dark text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Social Proof Header */}
        <div className="text-center mb-hubspot-lg">
          <div className="flex items-center justify-center gap-4 mb-hubspot-md">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-hubspot-orange" />
              <span className="text-white font-semibold">98% Client Satisfaction</span>
            </div>
            
          </div>
        </div>

        <div className="text-center mb-hubspot-xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-hubspot-md text-white">
            Client <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/90 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 font-light text-lg">
              Real results from real clients. See how data-driven marketing strategies 
              have transformed businesses across industries since 2013.
            </p>
          </div>
        </div>

        {/* Client Testimonials Single Row with Navigation */}
        <motion.div 
          className="flex items-center gap-4 md:gap-6 mb-hubspot-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Arrow - Outside Left */}
          <motion.button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`group transition-all duration-300 flex-shrink-0 ${
              canScrollLeft 
                ? 'opacity-100 hover:scale-110' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="relative">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:bg-white/20 transition-all duration-300"></div>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              {/* Icon */}
              <div className="relative p-3 md:p-4">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-hubspot-orange transition-colors duration-300" />
              </div>
            </div>
          </motion.button>

          {/* Testimonials Container - Center */}
          <motion.div 
            className="flex-1 overflow-x-auto overflow-y-visible scrollbar-hide" 
            onMouseMove={handleMouseMove} 
            onScroll={checkScrollPosition}
            ref={scrollContainerRef} 
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex gap-4 md:gap-6 w-max py-4 md:py-8">
            <AnimatePresence>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: index % 4 * 2 - 3,
                  scale: 1
                }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 group flex-shrink-0 w-72 sm:w-80 shadow-2xl hover:shadow-lg" style={{
            marginTop: `${index % 3 * 4}px`
          }}>
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="w-12 h-12 bg-hubspot-orange rounded-full flex items-center justify-center font-bold text-white">
                    {testimonial.companyLogo}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold flex items-center gap-2">
                      {testimonial.name}
                      {testimonial.verified && <CheckCircle className="w-4 h-4 text-green-600" />}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-hubspot-orange text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-hubspot-sm">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative mb-hubspot-md">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-hubspot-orange/30" />
                  <p className="text-gray-700 leading-relaxed pl-4">
                    {testimonial.review}
                  </p>
                </div>
                
                {/* Performance Metrics */}
                <div className="flex gap-2 flex-wrap justify-center">
                  {Object.entries(testimonial.metrics).map(([key, value], idx) => <div key={idx} className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl px-4 py-3 text-center min-w-[80px] hover:shadow-md transition-all duration-300">
                      <div className="text-primary font-bold text-lg">{value}</div>
                      <div className="text-gray-600 text-xs font-medium">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>)}
                </div>
              </CardContent>
              </Card>
              </motion.div>
            ))}
            </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Arrow - Outside Right */}
          <motion.button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`group transition-all duration-300 flex-shrink-0 ${
              canScrollRight 
                ? 'opacity-100 hover:scale-110' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="relative">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:bg-white/20 transition-all duration-300"></div>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              {/* Icon */}
              <div className="relative p-3 md:p-4">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-hubspot-orange transition-colors duration-300" />
              </div>
            </div>
          </motion.button>
        </motion.div>

        {/* Trusted By Section */}
        <div className="text-center">
          <h3 className="mb-hubspot-lg font-normal text-xl text-clean-white">Trusted By Industry Leaders</h3>
          <div className="relative overflow-hidden">
            <div className="flex items-stretch gap-hubspot-md animate-client-logos-right w-max py-1">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <Card key={index} className="min-w-[180px] bg-clean-white/5 border-clean-white/10 hover:bg-clean-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <CardContent className="p-hubspot-md text-center">
                    <div className="w-16 h-16 bg-clean-white rounded-lg flex items-center justify-center mx-auto mb-hubspot-xs group-hover:shadow-lg transition-all duration-300 p-2">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-white text-sm font-medium">{client.name}</h4>
                    <p className="text-white/60 text-xs">{client.industry}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
              .animate-client-logos-right {
                animation: client-logos-right 50s linear infinite;
                width: max-content;
              }
              @keyframes client-logos-right {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `
          }} />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-hubspot-xl">
          <p className="text-white/80 mb-hubspot-md">
            Ready to join these successful companies?
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-hubspot-orange to-growth-teal rounded-full"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;