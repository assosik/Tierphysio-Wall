import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface ScrollAnimationContextType {
  observeElement: (element: HTMLElement, animationType?: string, threshold?: number, delay?: number) => void;
}

const ScrollAnimationContext = createContext<ScrollAnimationContextType | null>(null);

export const useScrollAnimation = () => {
  const context = useContext(ScrollAnimationContext);
  if (!context) {
    throw new Error('useScrollAnimation must be used within a ScrollAnimationProvider');
  }
  return context;
};

interface ScrollAnimationProviderProps {
  children: ReactNode;
}

export const ScrollAnimationProvider: React.FC<ScrollAnimationProviderProps> = ({ children }) => {
  useEffect(() => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // If user prefers reduced motion, don't set up the observers
      return;
    }

    // Set up Intersection Observer for trigger animations
    const triggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const delay = parseInt(element.dataset.delay || '0', 10);
            
            setTimeout(() => {
              element.classList.add('animated');
            }, delay);
            
            // Once animated, no need to observe anymore
            triggerObserver.unobserve(element);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-20px'
      }
    );

    // Set up Intersection Observer for parallax effects
    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('parallax-active');
            
            // For parallax, keep observing as we scroll
            const handleScroll = () => {
              const scrollPosition = window.scrollY;
              const elementPosition = element.getBoundingClientRect().top + scrollPosition;
              const distance = scrollPosition - elementPosition;
              const speed = parseFloat(element.dataset.parallaxSpeed || '0.15');
              
              // Apply parallax effect
              element.style.transform = `translateY(${distance * speed}px)`;
            };
            
            window.addEventListener('scroll', handleScroll);
            
            // Clean up when no longer in view
            const handleIntersection = (entries: IntersectionObserverEntry[]) => {
              if (!entries[0].isIntersecting) {
                window.removeEventListener('scroll', handleScroll);
                element.classList.remove('parallax-active');
              } else {
                window.addEventListener('scroll', handleScroll);
                element.classList.add('parallax-active');
              }
            };
            
            const singleElementObserver = new IntersectionObserver(handleIntersection);
            singleElementObserver.observe(element);
          }
        });
      }
    );

    // Find all elements with animation triggers and observe them
    const animateTriggerElements = document.querySelectorAll('.animate-trigger, .animate-trigger-fade, .animate-trigger-scale, .animate-trigger-left, .animate-trigger-right, .stagger-children');
    animateTriggerElements.forEach((element) => {
      triggerObserver.observe(element);
    });

    // Find all parallax elements
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((element) => {
      parallaxObserver.observe(element);
    });

    // Cleanup function
    return () => {
      triggerObserver.disconnect();
      parallaxObserver.disconnect();
    };
  }, []);

  const observeElement = (
    element: HTMLElement, 
    animationType: string = 'animate-trigger', 
    threshold: number = 0.15,
    delay: number = 0
  ) => {
    if (!element) return;
    
    // Add appropriate animation class
    element.classList.add(animationType);
    
    // Add data-delay attribute if delay is specified
    if (delay > 0) {
      element.dataset.delay = delay.toString();
    }
    
    // Set up a custom observer for this element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('animated');
            }, delay);
            
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin: '-20px' }
    );
    
    observer.observe(element);
  };

  return (
    <ScrollAnimationContext.Provider value={{ observeElement }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
};

export default ScrollAnimationProvider;