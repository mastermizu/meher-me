import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Activity {
  id: string;
  title: string;
  description: string | null;
  metric: string | null;
}

interface StarActivity {
  id: string;
  activity: Activity;
  position: { x: number; y: number };
  rotation: number;
  opacity: number;
  scale: number;
  animationPhase: 'appearing' | 'visible' | 'fading';
}

const fallbackActivities: Activity[] = [
  { id: 'f1', title: 'Campaign Launched', description: null, metric: 'Live' },
  { id: 'f2', title: 'Website Sessions', description: null, metric: '5k+' },
  { id: 'f3', title: 'MQLs This Month', description: null, metric: '100+' },
  { id: 'f4', title: 'Email CTR', description: null, metric: '~3%' },
  { id: 'f5', title: 'Content Published', description: null, metric: 'New' },
  { id: 'f6', title: 'Demo Requests', description: null, metric: 'Up' },
  { id: 'f7', title: 'NPS', description: null, metric: 'High' },
  { id: 'f8', title: 'Engagement Rate', description: null, metric: '↑' }
];

const RandomActivities = () => {
  const [allActivities, setAllActivities] = useState<Activity[]>([]);
  const [stars, setStars] = useState<StarActivity[]>([]);

  // Fetch activities from database
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const { data, error } = await supabase
          .from('activities')
          .select('*');
        
        if (error) {
          console.error('Error fetching activities:', error);
          setAllActivities(fallbackActivities);
          return;
        }
        
        if (data && data.length > 0) {
          setAllActivities(data);
        } else {
          setAllActivities(fallbackActivities);
        }
      } catch (e) {
        console.error('Unexpected error fetching activities:', e);
        setAllActivities(fallbackActivities);
      }
    };

    fetchActivities();
  }, []);

  // Create scattered positions around the headshot card (word cloud style)
  const generatePosition = () => {
    const positions = [
      // Left side - closer to headshot card
      { minX: 0, maxX: 15, minY: 0, maxY: 100 },
      
      // Right side - closer to headshot card (balanced with left)
      { minX: 75, maxX: 100, minY: 0, maxY: 100 },
      
      // Top left corner - avoid center
      { minX: 0, maxX: 20, minY: 0, maxY: 15 },
      
      // Top right corner - avoid center (balanced with left)
      { minX: 70, maxX: 100, minY: 0, maxY: 15 },
      
      // Bottom left corner - avoid center
      { minX: 0, maxX: 20, minY: 85, maxY: 100 },
      
      // Bottom right corner - avoid center (balanced with left)
      { minX: 70, maxX: 100, minY: 85, maxY: 100 },

      // Mid-left zone - closer to headshot
      { minX: 0, maxX: 18, minY: 15, maxY: 85 },

      // Mid-right zone - closer to headshot (balanced with left)
      { minX: 72, maxX: 100, minY: 15, maxY: 85 },
    ];
    
    const zone = positions[Math.floor(Math.random() * positions.length)];
    return {
      x: Math.random() * (zone.maxX - zone.minX) + zone.minX,
      y: Math.random() * (zone.maxY - zone.minY) + zone.minY
    };
  };

  // Create a new star
  const createStar = () => {
    if (allActivities.length === 0) return null;
    
    const activity = allActivities[Math.floor(Math.random() * allActivities.length)];
    const position = generatePosition();
    
    return {
      id: `star-${Date.now()}-${Math.random()}`,
      activity,
      position,
      rotation: Math.random() * 30 - 15,
      opacity: 0,
      scale: 0.8,
      animationPhase: 'appearing' as const
    };
  };

  // Animation lifecycle management
  useEffect(() => {
    if (allActivities.length === 0) return;

    const animationLoop = () => {
      setStars(currentStars => {
        const updated = [...currentStars];
        
        // Update existing stars
        updated.forEach(star => {
          switch (star.animationPhase) {
            case 'appearing':
              star.opacity = Math.min(1, star.opacity + 0.03);
              star.scale = Math.min(1, star.scale + 0.01);
              if (star.opacity >= 1) {
                star.animationPhase = 'visible';
              }
              break;
            case 'visible':
              // Add subtle twinkle effect
              star.opacity = 0.85 + Math.sin(Date.now() * 0.003 + Math.random() * 10) * 0.15;
              break;
            case 'fading':
              star.opacity = Math.max(0, star.opacity - 0.02);
              star.scale = Math.max(0.6, star.scale - 0.01);
              break;
          }
        });
        
        // Remove completely faded stars
        const filtered = updated.filter(star => star.opacity > 0);
        
        // Add new stars more frequently (maintain 12-20 stars)
        if (filtered.length < 20 && Math.random() < 0.7) {
          const newStar = createStar();
          if (newStar) {
            filtered.push(newStar);
          }
        }
        
        // Randomly start fading some visible stars (less frequently to keep more on screen)
        filtered.forEach(star => {
          if (star.animationPhase === 'visible' && Math.random() < 0.004) {
            star.animationPhase = 'fading';
          }
        });
        
        return filtered;
      });
    };

    const interval = setInterval(animationLoop, 40); // Faster animation loop for more responsive activities
    
    // Initial burst of more stars
    setTimeout(() => {
      const initialStars = [];
      for (let i = 0; i < 12; i++) {
        const star = createStar();
        if (star) {
          star.opacity = Math.random() * 0.5;
          initialStars.push(star);
        }
      }
      setStars(initialStars);
    }, 800);

    return () => clearInterval(interval);
  }, [allActivities]);

  return (
    <div className="absolute inset-0 block pointer-events-none z-40">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute transition-all duration-300 ease-out"
          style={{
            left: `${star.position.x}%`,
            top: `${star.position.y}%`,
            transform: `rotate(${star.rotation}deg) scale(${star.scale})`,
            opacity: star.opacity,
          }}
        >
          <div className="bg-gradient-to-r from-hubspot-orange/40 to-growth-teal/40 backdrop-blur-lg border border-white/50 px-4 py-2 rounded-full text-xs font-medium shadow-2xl whitespace-nowrap">
            <span className="text-hubspot-orange font-bold">{star.activity.metric}</span>
            <span className="ml-1 text-professional-navy font-bold" style={{ color: '#1a365d' }}>{star.activity.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomActivities;