import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate progress percentage
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrolled, 100));
    };

    // Initial calculation
    calculateScrollProgress();

    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollProgress, { passive: true });

    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div 
      className="fixed top-14 md:top-16 left-0 w-full h-[3px] bg-gray-100 z-50"
      style={{ transition: 'opacity 0.3s ease-out' }}
    >
      <div
        className="h-full bg-[rgb(150,203,83)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;