
import React from 'react';
import InteractiveTimeline from './InteractiveTimeline';
import CertificationsCarousel from './CertificationsCarousel';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileTimeline from './MobileTimeline';
import LinkedInRecommendations from './LinkedInRecommendations';

const About = () => {
  const isMobile = useIsMobile();

  return (
    <section id="timeline" className="py-hubspot-xl bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-br from-hubspot-blue/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-growth-teal/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-hubspot-orange/15 to-transparent rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-hubspot-xl">
          <h2 className="text-hubspot-h1 mb-hubspot-md text-2xl sm:text-3xl lg:text-4xl text-professional-navy">
            My Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-hubspot-body max-w-3xl mx-auto text-sm sm:text-base text-blue-gray">
            Complete marketing professional profile with interactive timeline, certifications, and performance metrics
          </p>
        </div>

        {/* Timeline - Mobile vs Desktop */}
        <div className="mb-hubspot-xl">
          {isMobile ? <MobileTimeline /> : <InteractiveTimeline />}
        </div>

        {/* LinkedIn Recommendations Section */}
        <div className="mb-hubspot-xl">
          <LinkedInRecommendations />
        </div>

        {/* Professional Certifications */}
        <div className="w-full">
          <CertificationsCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
