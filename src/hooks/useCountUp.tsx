import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  trigger?: boolean;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  decimals = 0,
  trigger = true 
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>();
  const startTime = useRef<number>();

  useEffect(() => {
    if (!trigger) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;
      
      setCount(parseFloat(currentCount.toFixed(decimals)));
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start, decimals, trigger]);

  return count;
};