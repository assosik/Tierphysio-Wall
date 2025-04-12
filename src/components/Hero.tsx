import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import backgroundImage from '/jamie-street-s9Tf1eBDFqw-unsplash.jpg';
import businessCard from './Vanessa_Visitenkarte (1).png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation sequence
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxBg = document.getElementById('hero-parallax-bg');
      
      if (parallaxBg) {
        // Move background at 40% of scroll speed for subtle effect
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center md:pt-0 w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        id="hero-parallax-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="absolute inset-0 z-0 bg-center bg-cover transition-transform duration-500 ease-out"
      >
        <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-1000"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } w-full max-w-4xl mx-auto`}>
        <div className="mb-8 flex justify-center">
          <img
            src={businessCard}
            alt="TierPhysio Logo"
            className={`w-auto h-32 md:h-48 rounded-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } hover-scale`}
            style={{ transitionDelay: '100ms' }}
          />
        </div>
        <h1 
          className="text-2xl md:text-6xl font-bold text-white mb-3 md:mb-6 transition-all duration-700"
          style={{ 
            transitionDelay: '300ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
          }}
        >
          Professionelle Tierphysiotherapie
        </h1>
        <p 
          className="text-base md:text-2xl text-white mb-5 md:mb-8 max-w-2xl mx-auto transition-all duration-700"
          style={{ 
            transitionDelay: '500ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Spezialisiert auf mobile Physiotherapie und Akupunktur für Ihr Haustier
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[rgb(150,203,83)] text-white px-4 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold 
                   hover:bg-[rgb(130,183,63)] transform hover:scale-105 transition-all duration-500
                   shadow-lg hover:shadow-xl hover-lift"
          style={{ 
            transitionDelay: '700ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.9)'
          }}
        >
          Termin vereinbaren
        </button>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden"
        style={{ 
          animation: isVisible ? 'smoothBounce 2s ease-in-out infinite' : 'none',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          transitionDelay: '900ms'
        }}
      >
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;