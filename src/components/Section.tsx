import React, { useEffect, useRef, ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', style }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleElement = titleRef.current;
    const contentElement = contentRef.current;
    
    if (!section || !titleElement || !contentElement) return;

    // Intersection Observer for section
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('opacity-100');
          section.classList.remove('opacity-0', 'translate-y-10');
          
          // Trigger title animation with slight delay
          setTimeout(() => {
            titleElement.classList.add('opacity-100', 'translate-y-0');
            titleElement.classList.remove('opacity-0', 'translate-y-10');
          }, 200);
          
          // Trigger content container animation with delay
          setTimeout(() => {
            contentElement.classList.add('animated');
          }, 400);
          
          sectionObserver.unobserve(section);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );
    
    sectionObserver.observe(section);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      style={style}
      className={`md:min-h-fit ${
        id === 'testimonials' 
          ? 'pt-20 pb-12 md:pb-16 min-h-[auto]' 
          : 'py-16 md:py-24'
      } ${
        id === 'testimonials' 
          ? 'px-0' 
          : 'px-3'
      } sm:px-4 transition-all duration-1000 opacity-0 translate-y-10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className="flex items-center justify-center gap-4 mb-12 transition-all duration-800 opacity-0 translate-y-10"
        >
          <div className="hidden md:block w-[40px] h-[1px] bg-gradient-to-l from-[rgb(150,203,83)] to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            {title}
          </h2>
          <div className="hidden md:block w-[40px] h-[1px] bg-gradient-to-r from-[rgb(150,203,83)] to-transparent" />
        </div>
        <div 
          ref={contentRef}
          className="stagger-children"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;