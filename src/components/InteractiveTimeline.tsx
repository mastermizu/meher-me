
import React, { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase,
  CheckCircle,
  ChevronUp,
  ChevronDown,
  Send,
  GraduationCap
} from "lucide-react";

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  startYear: number;
  endYear: number;
}

const InteractiveTimeline = () => {
  const experiences: Experience[] = [
    {
      year: "2025-Present",
      role: "Automation Lead",
      company: "SYNTAXLAB",
      description: "Business automation expert helping companies eliminate operational bottlenecks through AI-powered workflows. Transform manual processes into efficient systems using Make.com and N8N, enabling teams to focus on strategic growth while automation handles the rest.",
      achievements: ["Specialized in creating custom tools that connect platforms and centralize data", "Delivered measurable ROI through practical, no-code automation solutions", "Eliminated operational bottlenecks for clients across diverse industries"],
      startYear: 2025,
      endYear: 2025
    },
    {
      year: "2024-Present",
      role: "Marketing Automation Lead",
      company: "INFRONT MARKETING",
      description: "Developed and executed multi-channel marketing campaigns aligned with client growth objectives, improving retention and upsell rates for 15+ B2B clients.",
      achievements: ["Collaborated with sales and creative teams to optimize campaign effectiveness and identify new revenue opportunities", "Managed campaign budgets, project timelines, and reporting frameworks to ensure operational excellence and timely delivery", "Mentored and coached junior marketers, fostering a collaborative and high-performing team environment"],
      startYear: 2024,
      endYear: 2024
    },
    {
      year: "2023-2025",
      role: "Growth Marketing Strategist",
      company: "MAYPLE",
      description: "MailChimp Official Account Auditor, helping SMBs optimize their email marketing with actionable insights that improve results within 24 hours. Provided strategic consulting for email marketing optimization and automation.",
      achievements: ["Optimized email deliverability and list hygiene for improved campaign performance", "Designed automated flows and lead capture funnels that increased conversion rates", "Implemented A/B testing frameworks and CRM integrations for data-driven decision making"],
      startYear: 2023,
      endYear: 2025
    },
    {
      year: "2023-Present",
      role: "Digital Marketing Strategist",
      company: "ADVANCED ORTHOMOLECULAR RESEARCH",
      description: "Led customer marketing initiatives, reporting directly to the CMO and collaborating with executive leadership.",
      achievements: ["Designed lifecycle programs that boosted customer lifetime value by 20% and reduced churn", "Built measurement systems that connected marketing efforts to $1.2M in annual revenue growth", "Developed cross-channel strategies and customer segmentation models based on data insights"],
      startYear: 2023,
      endYear: 2024
    },
    {
      year: "2021-2022",
      role: "Digital Marketing Manager",
      company: "BLACK PRESS MEDIA GROUP",
      description: "Managed and executed digital marketing projects for numerous crown corporations and public sector clients, including the Canadian Armed Forces, BC Corrections, City of Surrey, City of Langley, City of Prince Rupert, BCLC, as well as non-profits, NGOs, and First Nations organizations.",
      achievements: ["Oversaw campaign budgets up to $2 million, delivering sponsored digital ads, newspaper publications, and media buying to raise public awareness, recruit new employees, and foster community building", "Designed and led targeted, culturally responsive campaigns for government-funded projects, increasing engagement and driving measurable results for diverse communities", "Built strong relationships with internal teams and external partners, ensuring campaign alignment, compliance, and success"],
      startYear: 2021,
      endYear: 2022
    },
    {
      year: "2021",
      role: "Digital Marketing Specialist",
      company: "SWITCHBOARD",
      description: "Drove digital marketing strategy for a fully integrated fleet management solution serving 2000+ North American long-haul companies to streamline operations and maximize revenues.",
      achievements: ["Developed comprehensive content marketing strategy focused on SEO optimization", "Managed multi-channel social and search ad campaigns with landing page optimization", "Built attribution models to calculate CPL and CAC across all marketing channels"],
      startYear: 2021,
      endYear: 2021
    },
    {
      year: "2020",
      role: "Go-To-Market Email Marketing", 
      company: "Roomvu Inc",
      description: "Optimize and maintain custom email servers to handle 5 million/month of email outreach while maintaining multiple sender accounts using AWS SES",
      achievements: ["Handled 5M+ emails monthly", "Managed multiple sender accounts", "Optimized AWS SES infrastructure"],
      startYear: 2020,
      endYear: 2020
    },
    {
      year: "2018-2020",
      role: "Post-Baccalaureate in Marketing",
      company: "THOMPSON RIVERS UNIVERSITY",
      description: "Advanced marketing education program focused on strategic marketing, digital marketing, and data analytics with direct application to demand generation.",
      achievements: ["Dean's Award Recipient - demonstrated excellence in marketing automation and lead nurturing strategies", "Specialized in digital marketing analytics, conversion optimization, and customer acquisition funnels", "Mastered data-driven marketing approaches essential for growth specialist roles"],
      startYear: 2018,
      endYear: 2020
    },
    {
      year: "2017-2018",
      role: "Founding Partner",
      company: "BEZEL MEDIA LLC",
      description: "Co-founded result-oriented affiliate network connecting high-performing affiliates with premium advertisers. Built sustainable revenue models focused on long-term partnerships and quality over quick profits.",
      achievements: ["Established strategic partnerships between top-tier affiliates and advertisers", "Developed performance-based marketing frameworks with focus on sustainable growth", "Created quality assurance protocols that enhanced partner relationships and network reputation"],
      startYear: 2017,
      endYear: 2018
    },
    {
      year: "2015-2016",
      role: "Chief Operating Officer",
      company: "ZELLION INTERACTIVE",
      description: "Led operations for boutique digital advertising agency focused on 'Smartness in Innovation and Action.' Delivered comprehensive digital solutions while building long-term client relationships and spectacular buying experiences.",
      achievements: ["Managed end-to-end PPC advertising campaigns with measurable ROI improvements", "Oversaw web development, graphics, and social media management for diverse client portfolio", "Implemented email marketing strategies that enhanced customer engagement and retention"],
      startYear: 2015,
      endYear: 2016
    },
    {
      year: "2012-2014",
      role: "Affiliate Manager",
      company: "ERA NETWORK CORP",
      description: "Managed affiliate marketing operations for CPAera, an industry-transforming network focused on performance marketing and lead generation. Coordinated relationships between hundreds of advertisers and thousands of publishers.",
      achievements: ["Built and maintained relationships with high-volume affiliate partners", "Optimized performance marketing campaigns for maximum lead generation efficiency", "Developed publisher recruitment and retention strategies that expanded network reach"],
      startYear: 2012,
      endYear: 2014
    },
    {
      year: "2009-2013",
      role: "BBA – Marketing",
      company: "UNIVERSITY OF ASIA PACIFIC",
      description: "Comprehensive business foundation with marketing specialization, building core competencies in consumer psychology and strategic business development.",
      achievements: ["Developed analytical frameworks for market segmentation and customer lifecycle management", "Built expertise in marketing research and data analysis critical for demand generation success", "Established foundation in business strategy and growth marketing principles"],
      startYear: 2009,
      endYear: 2013
    },
    {
      year: "2010",
      role: "The Journey Begins",
      company: "Freelance",
      description: "My first income from a digital marketing gig was $50. I helped my first client, Danielle from the UK, build a niche email list by scraping data from an online directory. At that time, there was no standalone tool or scraper for marketers.",
      achievements: ["Made first $50 in digital marketing", "Manual data scraping", "Started digital marketing journey"],
      startYear: 2010,
      endYear: 2010
    }
  ];

  // Generate years from 2010 to current year (2025)
  const currentYear = 2025;
  const allYears = Array.from({length: currentYear - 2010 + 1}, (_, i) => 2010 + i);

  const minYear = 2010;
  const maxYear = currentYear;
  const [selectedYear, setSelectedYear] = useState(maxYear);
  const [isDragging, setIsDragging] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  function handleYearUp() {
    const currentIndex = allYears.indexOf(selectedYear);
    if (currentIndex > 0) {
      setSelectedYear(allYears[currentIndex - 1]);
    }
  }

  function handleYearDown() {
    const currentIndex = allYears.indexOf(selectedYear);
    if (currentIndex < allYears.length - 1) {
      setSelectedYear(allYears[currentIndex + 1]);
    }
  }

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentage = Math.max(0, Math.min(1, y / rect.height));
    const yearIndex = Math.round(percentage * (allYears.length - 1));
    const newYear = allYears[yearIndex];
    
    if (newYear && newYear !== selectedYear) {
      setSelectedYear(newYear);
    }
  }, [isDragging, allYears, selectedYear]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const getExperienceForYear = (year: number) => {
    return experiences.find(exp => year >= exp.startYear && year <= exp.endYear);
  };

  const activeExperience = getExperienceForYear(selectedYear);

  // Always show exactly 3 cards - active in center with chronologically adjacent ones
  const getVisibleExperiences = React.useMemo(() => {
    // If we have an active experience for the selected year, show it with adjacent ones
    if (activeExperience) {
      const activeIndex = experiences.findIndex(exp => exp === activeExperience);
      const visibleExps = [];
      
      // Add previous experience (chronologically earlier)
      const prevIndex = activeIndex + 1; // Next in array is chronologically earlier
      if (prevIndex < experiences.length) {
        visibleExps.push(experiences[prevIndex]);
      }
      
      // Add active experience
      visibleExps.push(activeExperience);
      
      // Add next experience (chronologically later)
      const nextIndex = activeIndex - 1; // Previous in array is chronologically later
      if (nextIndex >= 0) {
        visibleExps.push(experiences[nextIndex]);
      }
      
      return visibleExps;
    }
    
    // If no active experience, find the closest ones chronologically
    // Find the experience that would be "next" after the selected year
    const futureExperiences = experiences.filter(exp => exp.startYear > selectedYear);
    const pastExperiences = experiences.filter(exp => exp.endYear < selectedYear);
    
    const visibleExps = [];
    
    // Add the most recent past experience
    if (pastExperiences.length > 0) {
      visibleExps.push(pastExperiences[0]); // Most recent past (first in array)
    }
    
    // Add the earliest future experience
    if (futureExperiences.length > 0) {
      visibleExps.push(futureExperiences[futureExperiences.length - 1]); // Earliest future (last in array)
    }
    
    // If we need more experiences, add the second most recent past or second earliest future
    if (visibleExps.length < 3) {
      if (pastExperiences.length > 1) {
        visibleExps.push(pastExperiences[1]);
      } else if (futureExperiences.length > 1) {
        visibleExps.push(futureExperiences[futureExperiences.length - 2]);
      }
    }
    
    // Sort chronologically (latest first)
    return visibleExps.sort((a, b) => b.startYear - a.startYear);
  }, [activeExperience, experiences, selectedYear]);

  // Calculate progress percentage for handle position - plane moves from top (2010) to bottom (2024)
  const progressPercentage = ((selectedYear - minYear) / (maxYear - minYear)) * 100;

  return (
    <div className="w-full">
      {/* Main Timeline Layout */}
      <div className="max-w-6xl mx-auto flex gap-hubspot-lg">
        {/* Vertical Timeline Controls - Left Side */}
        <div className="w-48 flex-shrink-0">
          <div className="bg-gradient-to-b from-light-gray via-clean-white to-light-gray p-4 rounded-lg border shadow-hubspot h-full">
            {/* Volume-style controls */}
            <div className="flex flex-col items-center mb-4">
              <Button
                onClick={handleYearUp}
                variant="ghost"
                size="sm"
                className="mb-2 hover:bg-hubspot-orange/10"
                disabled={selectedYear === minYear}
              >
                <ChevronUp className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={handleYearDown}
                variant="ghost"
                size="sm"
                className="hover:bg-hubspot-orange/10"
                disabled={selectedYear === maxYear}
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Vertical timeline track */}
              <div 
                ref={timelineRef}
                className="relative h-full w-8 flex items-center cursor-pointer"
              >
                {/* Background line - full height, gray */}
                <div className="absolute left-1 w-1 h-full bg-light-gray rounded-full" />
                
                {/* Active line - from top to handle position */}
                <div 
                  className="absolute left-1 w-1 bg-hubspot-orange rounded-full transition-all duration-300"
                  style={{
                    height: `${progressPercentage}%`,
                    top: 0
                  }}
                />
                
                {/* Draggable handle with downward-flying paper plane icon */}
                <div 
                  className="absolute left-0 w-8 h-8 bg-growth-teal rounded-full cursor-grab active:cursor-grabbing transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-md"
                  style={{
                    top: `${progressPercentage}%`,
                    transform: 'translateY(-50%)'
                  }}
                  onMouseDown={handleMouseDown}
                >
                  <Send className="w-4 h-4 text-white transform rotate-45" />
                </div>
              </div>
              
              {/* Year markers - Right side */}
              <div className="ml-4 relative h-full flex flex-col justify-between py-2">
                {allYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`text-sm transition-all duration-300 cursor-pointer px-2 py-1 rounded whitespace-nowrap ${
                      year === selectedYear
                        ? 'text-hubspot-orange font-bold bg-hubspot-orange/20 scale-110 shadow-md'
                        : 'text-blue-gray hover:text-professional-navy hover:bg-hubspot-orange/5'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards - Right Side */}
        <div className="flex-1 space-y-hubspot-md">
          {getVisibleExperiences.map((exp, index) => {
            const isSelected = selectedYear >= exp.startYear && selectedYear <= exp.endYear;
            const isCenter = index === 1; // Middle card should be the active one
            
            return (
              <Card
                key={`${exp.company}-${exp.startYear}-${index}`}
                className={`hubspot-card transition-all duration-500 ${
                  isSelected
                    ? 'transform scale-105 shadow-2xl border-hubspot-orange border-2 bg-gradient-to-br from-clean-white to-hubspot-orange/5 z-10'
                    : 'opacity-60 hover:opacity-80 scale-95'
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className={`text-hubspot-h2 flex items-center gap-2 ${
                        isSelected ? 'text-hubspot-orange' : 'text-professional-navy'
                      }`}>
                        {exp.company.includes('UNIVERSITY') ? 
                          <GraduationCap className="w-5 h-5" /> : 
                          <Briefcase className="w-5 h-5" />
                        }
                        {exp.role}
                      </CardTitle>
                      <p className="text-hubspot-small text-blue-gray">{exp.company}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        isSelected ? 'bg-hubspot-orange/10 text-hubspot-orange' : ''
                      }`}
                    >
                      {exp.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-hubspot-small mb-hubspot-sm">{exp.description}</p>
                  <div className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className={`w-3 h-3 ${
                          isSelected ? 'text-hubspot-orange' : 'text-green-600'
                        }`} />
                        <span className="text-xs text-blue-gray">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
