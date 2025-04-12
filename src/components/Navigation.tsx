import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import businessCard from './Vanessa_Visitenkarte (1).png';
import ScrollProgress from './ScrollProgress';

interface NavigationProps {
  showHero?: boolean;
}

const Navigation = ({ showHero = true }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    if (window.location.hash === '#impressum') {
      window.location.hash = '';
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 800
      });
    }
  };

  useEffect(() => {
    // Options for the Intersection Observer
    const observerOptions = {
      rootMargin: '-20% 0px -35% 0px',
      threshold: [0.2, 0.4, 0.6, 0.8]
    };

    // Create observer for section tracking
    const sectionObserver = new IntersectionObserver((entries) => {
      // Track all visible sections
      const visibleSections = entries.filter(entry => entry.isIntersecting);
      
      if (visibleSections.length > 0) {
        // Find the section with highest visibility ratio
        const mostVisible = visibleSections.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        
        setActiveSection(mostVisible.target.id);
      }
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => sectionObserver.observe(section));

    // Handle scroll for navbar transparency
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
      
      // Set home as active when at top of page
      if (scrollTop < 100) {
        setActiveSection('home');
      }
    };

    // Listen for custom section visibility events
    const handleSectionInView = (event: CustomEvent<{ id: string; ratio: number }>) => {
      const { id, ratio } = event.detail;
      if (ratio > 0.4) { // Threshold for considering section as active
        setActiveSection(id);
      }
    };

    window.addEventListener('sectionInView', handleSectionInView as EventListener);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('sectionInView', handleSectionInView as EventListener);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.hash === '#impressum') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          setIsOpen(false);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      'bg-gradient-to-r from-gray-50/95 via-white/95 to-gray-50/95 backdrop-blur-sm shadow-sm'
    }`}>
      <ScrollProgress />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 md:h-16 items-center relative">
          <div className={`flex items-center space-x-4 transition-all duration-700 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}>
            <div className="relative group">
              <img 
              onClick={scrollToTop}
              src={businessCard}
              alt="TierPhysio Logo"
              className="h-20 md:h-20 w-auto transition-all duration-300 cursor-pointer hover:opacity-90"
              />
            </div>
            <button
              onClick={scrollToTop}
              className={`hidden md:flex items-center nav-link transform hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 hover:text-[rgb(150,203,83)] ${
                activeSection === 'home' ? 'nav-link-active' : ''
              }`}
            >
              <Home className="w-5 h-5" />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'about', label: 'Über mich' },
              { id: 'services', label: 'Leistungen' },
              { id: 'process', label: 'Ablauf', ariaLabel: 'Zum Ablauf scrollen' },
              { id: 'testimonials', label: 'Referenzen' },
              { id: 'pricing', label: 'Preise' },
              { id: 'contact', label: 'Kontakt' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.ariaLabel}
                className={`nav-link transform hover:scale-105 transition-all duration-300 ease-in-out capitalize text-gray-900 hover:text-[rgb(150,203,83)] ${
                  activeSection === item.id ? 'nav-link-active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transform hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 hover:text-[rgb(150,203,83)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={scrollToTop}
              className={`nav-link flex items-center space-x-2 w-full text-left px-3 py-2 text-gray-900 hover:text-[rgb(150,203,83)] hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === 'home' ? 'nav-link-active' : ''
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            {[
              { id: 'about', label: 'Über mich' },
              { id: 'services', label: 'Leistungen' },
              { id: 'process', label: 'Ablauf', ariaLabel: 'Zum Ablauf scrollen' },
              { id: 'testimonials', label: 'Referenzen' },
              { id: 'pricing', label: 'Preise' },
              { id: 'contact', label: 'Kontakt' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.ariaLabel}
                className={`nav-link block w-full text-left px-3 py-2 text-gray-900 hover:text-[rgb(150,203,83)] hover:bg-gray-50 transition-all duration-300 ease-in-out capitalize transform hover:scale-105 ${
                  activeSection === item.id ? 'nav-link-active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;