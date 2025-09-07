import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import recommendations from "@/data/linkedin-recommendations";

const LinkedInRecommendations: React.FC = () => {
  const items = recommendations;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 336; // Card width (w-80 = 320px) + gap (16px)
      const scrollAmount = cardWidth * 3; // 3 cards at a time
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const toggleExpanded = (cardIndex: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(cardIndex)) {
      newExpanded.delete(cardIndex);
    } else {
      newExpanded.add(cardIndex);
    }
    setExpandedCards(newExpanded);
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <section aria-labelledby="linkedin-recommendations" className="w-full">
      <header className="text-center mb-hubspot-md">
        <h3 id="linkedin-recommendations" className="text-hubspot-h1 text-xl sm:text-2xl lg:text-3xl text-professional-navy">
          LinkedIn <span className="text-gradient">Recommendations</span>
        </h3>
        <p className="text-hubspot-body max-w-2xl mx-auto text-sm sm:text-base text-blue-gray">
          Highlights from professional peers and leaders.
        </p>
      </header>

      {items.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-hubspot-body">No recommendations added yet. Provide quotes, names, and positions to display them here.</p>
        </Card>
      ) : (
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:bg-white hover:shadow-xl"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4 text-[#0A66C2]" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:bg-white hover:shadow-xl"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4 text-[#0A66C2]" />
          </Button>

          {/* Viewport Container - Shows exactly 3 cards */}
          <div className="mx-auto px-12 py-6" style={{ width: '1200px' }}>
            <div className="overflow-hidden">
              <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none'
                }}
              >
                {items.map((rec, idx) => {
                  const isExpanded = expandedCards.has(idx);
                  const shouldTruncate = rec.quote.length > 150;
                  
                  return (
                    <div 
                      key={idx} 
                      className={`flex-none w-80 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                        isExpanded ? 'h-auto' : 'h-64'
                      }`}
                    >
                      {/* Header */}
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          {rec.profileImage ? (
                            <img 
                              src={rec.profileImage} 
                              alt={`${rec.name} profile`}
                              className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                            />
                          ) : (
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                              {rec.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{rec.name}</h4>
                            <p className="text-xs text-gray-600 leading-tight">{rec.position}</p>
                          </div>
                        </div>
                      </div>

                      {/* Recommendation Content */}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="relative flex-1">
                          <div className="absolute -top-1 -left-1 text-[#0A66C2] opacity-30 text-2xl font-serif">"</div>
                          <p className="text-sm text-gray-700 leading-relaxed pl-3">
                            {isExpanded ? rec.quote : truncateText(rec.quote)}
                          </p>
                          <div className="absolute -bottom-1 -right-1 text-[#0A66C2] opacity-30 text-2xl font-serif rotate-180">"</div>
                        </div>
                        
                        {/* Read More/Less Button */}
                        {shouldTruncate && (
                          <button
                            onClick={() => toggleExpanded(idx)}
                            className="text-[#0A66C2] text-xs font-medium hover:underline mt-2 self-start"
                          >
                            {isExpanded ? 'Show less' : 'Read more'}
                          </button>
                        )}
                      </div>

                      {/* LinkedIn-style footer */}
                      <div className="px-4 pb-4 mt-auto">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-[#0A66C2] rounded-sm flex items-center justify-center">
                              <span className="text-white text-[8px] font-bold">in</span>
                            </div>
                            LinkedIn
                          </span>
                          <span>Recommendation</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LinkedInRecommendations;