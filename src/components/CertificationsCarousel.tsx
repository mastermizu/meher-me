import React, { useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, ChevronLeft, ChevronRight, Shield } from "lucide-react";

const CertificationsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const originalCertifications = [
    { 
      name: "Certified ScrumMaster®", 
      level: "Certified", 
      verified: true, 
      issuer: "Scrum Alliance",
      logo: "/lovable-uploads/4fb5cf16-4892-4600-a7df-10eb1e39a680.png",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Landing Page Optimization", 
      level: "Professional", 
      verified: true, 
      issuer: "CXL",
      logo: "/lovable-uploads/3f8d0d24-6693-49f3-994e-0c3d43e89ade.png",
      color: "from-cyan-500 to-teal-500"
    },
    { 
      name: "Hootsuite Platform Certification", 
      level: "Certified", 
      verified: true, 
      issuer: "Hootsuite",
      logo: "/lovable-uploads/dfba8b3a-cb94-4d3f-93d3-0a7fbd6bfae3.png",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Advance Social Marketing", 
      level: "Advanced", 
      verified: true, 
      issuer: "eMarketing Association",
      logo: "/lovable-uploads/abefbd4a-37f5-415b-81c9-d3047df7831d.png",
      color: "from-purple-500 to-purple-600"
    },
    { 
      name: "Inbound Marketing Certification", 
      level: "Certified", 
      verified: true, 
      issuer: "HubSpot",
      logo: "/lovable-uploads/7a966671-c0b7-446a-b362-dd60af6fc7d0.png",
      color: "from-orange-500 to-orange-600"
    },
    { 
      name: "Email Marketing Certification", 
      level: "Certified", 
      verified: true, 
      issuer: "HubSpot",
      logo: "/lovable-uploads/7a966671-c0b7-446a-b362-dd60af6fc7d0.png",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Amazon Ads Certification", 
      level: "Certified", 
      verified: true, 
      issuer: "Amazon",
      logo: "/lovable-uploads/65a87a2b-d7f5-42d5-8d32-806a73119d7c.png",
      color: "from-yellow-600 to-orange-600"
    },
    { 
      name: "Google Ads", 
      level: "Certified", 
      verified: true, 
      issuer: "Google",
      logo: "/lovable-uploads/4202b7f6-0371-4020-af0a-cdc1a02331b7.png",
      color: "from-blue-500 to-green-500"
    }
  ];

  // Duplicate items for infinite scroll
  const certifications = [...originalCertifications, ...originalCertifications];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 304; // Card width (w-72 = 288px) + gap (16px)
      const scrollAmount = cardWidth * 1; // One card at a time for smooth infinite scroll
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth / 2; // Half because we duplicated items
      
      let newScrollLeft;
      if (direction === 'left') {
        newScrollLeft = container.scrollLeft - scrollAmount;
        // If we've scrolled past the beginning, jump to the end of the first set
        if (newScrollLeft < 0) {
          newScrollLeft = maxScroll + newScrollLeft;
        }
      } else {
        newScrollLeft = container.scrollLeft + scrollAmount;
        // If we've scrolled past the first set, jump back to the beginning
        if (newScrollLeft >= maxScroll) {
          newScrollLeft = newScrollLeft - maxScroll;
        }
      }
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-h2 mb-2 flex items-center justify-center gap-2 text-professional-navy">
          <Award className="w-7 h-7 text-hubspot-orange" />
          Professional Certifications
        </h3>
        <p className="text-body-small text-blue-gray">
          Industry-recognized credentials and expertise validation
        </p>
      </div>
      
      {/* Certification Carousel with Arrow Navigation */}
      <div className="relative">
        {/* Left Arrow - Hidden on mobile */}
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:bg-white hover:shadow-xl"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4 text-[#0A66C2]" />
        </Button>
        
        {/* Right Arrow - Hidden on mobile */}
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:bg-white hover:shadow-xl"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4 text-[#0A66C2]" />
        </Button>

        {/* Viewport Container - Responsive width for modern cards */}
        <div className="mx-auto px-4 md:px-12 py-4" style={{ width: '100%', maxWidth: '1200px' }}>
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
              {certifications.map((cert, index) => (
                <div 
                  key={`${cert.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer w-64 sm:w-72"
                >
                  {/* Clean, professional certification card with proper sizing */}
                  <div className="hubspot-card hubspot-card-hover h-40 sm:h-44 p-3 sm:p-4 bg-clean-white border-l-4 border-l-hubspot-orange group-hover:border-l-growth-teal transition-all duration-300 relative overflow-hidden">
                    
                    {/* Header with issuer logo only */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hubspot-orange/10 to-hubspot-orange/20 flex items-center justify-center border border-hubspot-orange/20 flex-shrink-0">
                          <img 
                            src={cert.logo} 
                            alt={`${cert.issuer} logo`}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-blue-gray uppercase tracking-wide truncate">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Certification name - properly sized */}
                    <div className="mb-3 flex-1">
                      <h3 className="text-base font-semibold text-professional-navy leading-tight line-clamp-2">
                        {cert.name}
                      </h3>
                    </div>
                    
                    {/* Bottom section with level and verified badge */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="inline-flex items-center gap-1.5 bg-hubspot-orange/10 border border-hubspot-orange/20 rounded-md px-2.5 py-1.5">
                        <Award className="w-3.5 h-3.5 text-hubspot-orange flex-shrink-0" />
                        <span className="text-xs font-semibold text-hubspot-orange">{cert.level}</span>
                      </div>
                      
                      {/* Verified badge moved here */}
                      {cert.verified && (
                        <div className="flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 flex-shrink-0">
                          <CheckCircle className="w-2.5 h-2.5 text-green-600" />
                          <span className="text-xs text-green-700 font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Subtle hover accent - positioned properly */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-hubspot-orange to-growth-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <span className="text-xs text-blue-gray">
          Industry-recognized professional certifications
        </span>
      </div>
    </div>
  );
};

export default CertificationsCarousel;