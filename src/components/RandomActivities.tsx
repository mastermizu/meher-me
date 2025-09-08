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
  zone: number;
}

const fallbackActivities: Activity[] = [
  { id: 'f1', title: 'MQLs This Month', description: null, metric: '100+' },
  { id: 'f2', title: 'Website Sessions', description: null, metric: '5k+' },
  { id: 'f3', title: 'Pipeline Value', description: null, metric: '$2.4M' },
  { id: 'f4', title: 'Conversion Rate', description: null, metric: '2.88%' }
];

const RandomActivities = () => {
  const [allActivities, setAllActivities] = useState<Activity[]>([]);
  const [stars, setStars] = useState<StarActivity[]>([]);
  const [usedZones, setUsedZones] = useState<number[]>([]);

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
  const generatePosition = (preferredZone?: number) => {
    const positions = [
      // Left side - very minimal area
      { minX: 0, maxX: 3, minY: 0, maxY: 100 },
      
      // Right side - expanded area for more right positioning
      { minX: 85, maxX: 100, minY: 0, maxY: 100 },
      
      // Top left corner - very minimal area
      { minX: 0, maxX: 8, minY: 0, maxY: 20 },
      
      // Top right corner - expanded area
      { minX: 80, maxX: 100, minY: 0, maxY: 20 },
      
      // Bottom left corner - very minimal area
      { minX: 0, maxX: 8, minY: 80, maxY: 100 },
      
      // Bottom right corner - expanded area
      { minX: 80, maxX: 100, minY: 80, maxY: 100 },

      // Mid-left zone - very minimal area
      { minX: 0, maxX: 3, minY: 20, maxY: 80 },

      // Mid-right zone - expanded area
      { minX: 85, maxX: 100, minY: 20, maxY: 80 },
    ];
    
    // Choose zone intelligently to prevent clustering
    let selectedZone: number;
    if (preferredZone !== undefined) {
      selectedZone = preferredZone;
    } else {
      // Find least used zones first
      const zoneCounts = new Array(positions.length).fill(0);
      stars.forEach(star => {
        if (star.zone < positions.length) {
          zoneCounts[star.zone]++;
        }
      });
      
      const minCount = Math.min(...zoneCounts);
      const availableZones = zoneCounts.map((count, index) => ({ index, count }))
        .filter(zone => zone.count === minCount)
        .map(zone => zone.index);
      
      selectedZone = availableZones[Math.floor(Math.random() * availableZones.length)];
    }
    
    const zone = positions[selectedZone];
    return {
      position: {
        x: Math.random() * (zone.maxX - zone.minX) + zone.minX,
        y: Math.random() * (zone.maxY - zone.minY) + zone.minY
      },
      zoneIndex: selectedZone
    };
  };

  // Create a new star
  const createStar = () => {
    if (allActivities.length === 0) return null;
    
    const activity = allActivities[Math.floor(Math.random() * allActivities.length)];
    const { position, zoneIndex } = generatePosition();
    
    return {
      id: `star-${Date.now()}-${Math.random()}`,
      activity,
      position,
      rotation: Math.random() * 30 - 15,
      opacity: 0,
      scale: 0.8,
      animationPhase: 'appearing' as const,
      zone: zoneIndex
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
        
        // Add new stars less frequently (maintain 4-8 stars for cleaner look)
        if (filtered.length < 8 && Math.random() < 0.3) {
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
    
    // Initial burst of fewer stars for cleaner look
    setTimeout(() => {
      const initialStars = [];
      for (let i = 0; i < 4; i++) {
        const star = createStar();
        if (star) {
          star.opacity = Math.random() * 0.3 + 0.2;
          initialStars.push(star);
        }
      }
      setStars(initialStars);
    }, 800);

    return () => clearInterval(interval);
  }, [allActivities]);

  return (
    <div className="absolute inset-0 hidden md:block pointer-events-none z-40">
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
          <div className="bg-gradient-to-r from-hubspot-orange/20 to-growth-teal/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg whitespace-nowrap">
            <span className="text-hubspot-orange font-semibold">{star.activity.metric}</span>
            <span className="ml-1 text-professional-navy font-medium" style={{ color: '#1a365d' }}>{star.activity.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomActivities;