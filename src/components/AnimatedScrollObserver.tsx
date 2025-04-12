import { useEffect } from 'react';

const AnimatedScrollObserver = () => {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Apply immediate visibility to all animated elements
      document.querySelectorAll('.animate-trigger, .animate-trigger-fade, .animate-trigger-scale, .animate-trigger-left, .animate-trigger-right, .stagger-children')
        .forEach(el => {
          el.classList.add('animated');
        });
      return;
    }

    // Base animation observer
    const createObserver = (selector: string, threshold = 0.15, rootMargin = '-50px', classToAdd = 'animated') => {
      const elements = document.querySelectorAll(selector);

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              const delay = element.getAttribute('data-delay') || '0';
              const isDesktop = window.innerWidth >= 768;

              setTimeout(() => {
                element.classList.add(classToAdd);
                // Add specific desktop animations
                if (isDesktop) {
                  element.style.setProperty('--animation-scale', '1.1');
                  element.style.setProperty('--animation-distance', '50px');
                }
              }, parseInt(delay, 10));

              observer.unobserve(element);
            }
          });
        },
        { 
          threshold: window.innerWidth >= 768 ? 0.2 : threshold, 
          rootMargin 
        }
      );

      elements.forEach(element => {
        observer.observe(element);
      });

      return observer;
    };
    
    // Create separate observers for different animation types
    const observers = [
      createObserver('.animate-trigger', 0.15),
      createObserver('.animate-trigger-fade', window.innerWidth >= 768 ? 0.2 : 0.15),
      createObserver('.animate-trigger-scale', window.innerWidth >= 768 ? 0.2 : 0.15),
      createObserver('.animate-trigger-left', window.innerWidth >= 768 ? 0.2 : 0.15),
      createObserver('.animate-trigger-right', window.innerWidth >= 768 ? 0.2 : 0.15),
      createObserver('.stagger-children', 0.1),
      
      // Special observer for images with a higher threshold
      createObserver('img.scroll-animate', 0.2),
      
      // Special observer for service cards with a different root margin
      createObserver('.service-card', window.innerWidth >= 768 ? 0.2 : 0.15, '-30px'),
    ];
    
    // Handle parallax effects separately
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
      const parallaxObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              const speed = parseFloat(element.getAttribute('data-speed') || '0.15');
              
              const handleScroll = () => {
                const scrollY = window.scrollY;
                const elementTop = element.getBoundingClientRect().top + scrollY;
                const offset = (scrollY - elementTop) * speed;
                
                element.style.transform = `translateY(${offset}px)`;
              };
              
              window.addEventListener('scroll', handleScroll);
              
              // Clean up when element leaves viewport
              const cleanup = new IntersectionObserver(
                ([cleanupEntry]) => {
                  if (!cleanupEntry.isIntersecting) {
                    window.removeEventListener('scroll', handleScroll);
                    cleanup.disconnect();
                  }
                },
                { threshold: 0 }
              );
              
              cleanup.observe(element);
            }
          });
        },
        { threshold: 0 }
      );
      
      parallaxElements.forEach(element => {
        parallaxObserver.observe(element);
      });
      
      observers.push(parallaxObserver);
    }
    
    // Cleanup function
    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnimatedScrollObserver;