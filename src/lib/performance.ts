// Performance monitoring utilities
export const measurePerformance = () => {
  // Web Vitals measurement
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => {
        console.log('CLS:', metric);
        // Send to analytics service
      });
      
      getFID((metric) => {
        console.log('FID:', metric);
        // Send to analytics service
      });
      
      getFCP((metric) => {
        console.log('FCP:', metric);
        // Send to analytics service
      });
      
      getLCP((metric) => {
        console.log('LCP:', metric);
        // Send to analytics service
      });
      
      getTTFB((metric) => {
        console.log('TTFB:', metric);
        // Send to analytics service
      });
    });
  }
};

// Image lazy loading utility
export const lazyLoadImage = (img: HTMLImageElement, src: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  observer.observe(img);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/src/assets/meher-hero.jpg',
    '/src/assets/hero-background.jpg'
  ];
  
  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Bundle size monitoring
export const logBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Bundle size monitoring enabled');
    // Add bundle size tracking logic here
  }
};
