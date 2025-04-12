import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  pet: string;
  text: string;
  index: number;
  onVisible?: () => void;
}

const AnimatedTestimonial: React.FC<TestimonialProps> = ({ name, pet, text, index, onVisible }) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      if (testimonialRef.current) {
        testimonialRef.current.style.opacity = '1';
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.backgroundColor = '#ffffff';
            
            // Notify parent when animation is complete
            if (onVisible) {
              setTimeout(onVisible, 300);
            }
          }, index * 800);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-10px'
      }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [index, onVisible]);

  return (
    <div
      ref={testimonialRef}
      className="bg-white p-6 rounded-lg shadow-lg opacity-0 transform translate-y-4 transition-all duration-800"
      style={{
        transitionProperty: 'opacity, transform, background-color',
        transitionDuration: '800ms',
        transitionTimingFunction: 'ease-out'
      }}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="font-semibold text-gray-800">
        {name} mit {pet}
      </div>
    </div>
  );
}

export default AnimatedTestimonial;