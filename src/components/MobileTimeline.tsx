import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
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

const MobileTimeline = () => {
  const experiences: Experience[] = [
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
      year: "2020",
      role: "Email Marketing Engineer", 
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : experiences.length - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev < experiences.length - 1 ? prev + 1 : 0);
  };

  const currentExperience = experiences[currentIndex];

  return (
    <div className="w-full space-y-4">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-hubspot-orange w-6' 
                : 'bg-light-gray'
            }`}
          />
        ))}
      </div>

      {/* Current Experience Card */}
      <Card className="hubspot-card bg-gradient-to-br from-clean-white to-hubspot-orange/5 border-hubspot-orange border">
        <CardHeader className="pb-3">
          <div className="text-center space-y-2">
            <Badge variant="secondary" className="bg-hubspot-orange/10 text-hubspot-orange text-xs">
              {currentExperience.year}
            </Badge>
            <CardTitle className="text-lg text-hubspot-orange flex items-center justify-center gap-2">
              {currentExperience.company.includes('UNIVERSITY') ? 
                <GraduationCap className="w-4 h-4" /> : 
                <Briefcase className="w-4 h-4" />
              }
              {currentExperience.role}
            </CardTitle>
            <p className="text-sm text-blue-gray font-medium">{currentExperience.company}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-center leading-relaxed">{currentExperience.description}</p>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-professional-navy">Key Achievements:</h4>
            {currentExperience.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-hubspot-orange mt-0.5 flex-shrink-0" />
                <span className="text-xs text-blue-gray leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-2">
        <Button
          onClick={goToPrevious}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-xs"
        >
          <ChevronLeft className="w-3 h-3" />
          Previous
        </Button>
        
        <div className="text-center">
          <span className="text-xs text-blue-gray">
            {currentIndex + 1} of {experiences.length}
          </span>
        </div>
        
        <Button
          onClick={goToNext}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-xs"
        >
          Next
          <ChevronRight className="w-3 h-3" />
        </Button>
      </div>

      {/* Swipe hint */}
      <div className="text-center pt-2">
        <p className="text-xs text-blue-gray/70">
          Use navigation buttons or dots to explore my journey
        </p>
      </div>
    </div>
  );
};

export default MobileTimeline;