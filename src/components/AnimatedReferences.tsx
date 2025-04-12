import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, PawPrint, Cat, Users as Horse } from 'lucide-react';
import ExpandableText from './ExpandableText';
import { useCallback } from 'react';

interface Reference {
  name: string;
  pet: string;
  text: string;
  rating: number;
}

const references: Reference[] = [
  {
    name: 'Sabine D.',
    pet: 'Holly (Terrier-Mix)',
    text: 'Holly ist 5 Jahre alt, kommt aus Rumänien und hat ein gebrochenes Knie und eine gebrochene Hüfte mitgebracht. Die regelmäßige Physiotherapie bei Vanessa Wall hat Holly eine deutlich Schmerzlinderung gebracht. Die kompetente und ruhige Behandlung durch Vanessa gibt Holly viel Selbstvertrauen, sodass sie heute freudig mitarbeitet und die Therapie genießt sowie die dadurch deutlich bessere Lebensqualität.',
    rating: 5
  },
  {
    name: 'Silke K.',
    pet: 'Lina (Labrador-Mix)',
    text: 'Liebe Vanessa, vielen Dank, dass du Linas Kreuzbandriss so schnell in den Griff bekommen hast! Du hast echt Zauberhände! Jetzt kann sie wieder toben wie früher. Danke das die Behandlung inkl. Terminvereinbarung so reibungslos funktioniert hat. Wir haben dich schon an Freunde und Bekannte weiterempfohlen - Service und Leistung sind echt top!!!',
    rating: 5
  },
  {
    name: 'Angela A.',
    pet: 'Blacky (Perserkatze)',
    text: 'Unser Blacky konnte aufgrund einer nervlichen Erkrankung leider seine Gliedmaßen nicht mehr bewegen und hat das Laufen eingestellt. Dank der unkomplizierten Terminvereinbarung mit Vanessa konnte Blacky schnell geholfen werden. Man merkt, wie gut ihm die Therapie tut. Er ist aufgeweckter und kann seit kurzem seine Beine wieder bewegen. Das macht uns sehr glücklich. Vielen lieben Dank, Vanessa!',
    rating: 5
  },
  {
    name: 'Gaby B.',
    pet: '(Mischling)',
    text: 'Unglaublich nett und kompetent! Sie ist sehr einfühlsam und geht total auf den Hund ein. Sie erklärt alles genau, der Ablauf ist strukturiert und sie hat immer neue Ansätze. Meine Hunde freuen sich sehr über sie und genießen die Behandlungen. Nach einer üblen Verletzung und zwei Kreuzbandrissen konnte sie meinen Hund wieder stabilisieren. Die Terminvereinbarungen sind problemlos und sie ist sehr zuverlässig und ehrlich. Wir können Vanessa uneingeschränkt weiterempfehlen.',
    rating: 5
  },
  {
    name: 'Doris M.',
    pet: 'Mary (Labrador-Mix)',
    text: 'Vanessa konnte Mary da weiterhelfen, wo andere nicht mehr weiterwussten. Mary konnte aufgrund eines zweifachen Bandschebenvorfalls die Hintergliesmaßen kaum noch belasten. Dank Vanessa steht sie immerhin vor ihrem Napf ohne umzufallen und möchte wieder aktiv am Leben mit unseren anderen Hunden teilhaben. Für Mary hat sich die wöchentliche Physio zu einer Routine entwickelt,- sie erwartet Vanessa schon immer am Ende der Zufahrt. Vielen Dank Vanessa, dass du Mary so viel Gutes getan hast.',
    rating: 5
  }
];

const AnimatedReferences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState<number | null>(null);
  const touchStartX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout>();
  const testimonialRef = useRef<HTMLDivElement>(null);

  const resetAllStates = useCallback(() => {
    if (containerRef.current) {
      // Only reset auto-scrolling state, not expanded states
      setIsPaused(false);
    }
  }, []);

  const goToNext = useCallback(() => {
    resetAllStates();
    setCurrentIndex((prev) => (prev + 1) % references.length);
  }, [resetAllStates]);

  const goToPrevious = useCallback(() => {
    resetAllStates();
    setCurrentIndex((prev) => (prev - 1 + references.length) % references.length);
  }, [resetAllStates]);

  const goToIndex = useCallback((index: number) => {
    resetAllStates();
    setCurrentIndex(index);
  }, [resetAllStates]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsAutoScrolling(false);
      return;
    }

    if (isAutoScrolling && !isPaused) {
      autoScrollIntervalRef.current = setInterval(goToNext, 5000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    resetAllStates();

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    // Resume auto-scrolling after a short delay
    setTimeout(() => setIsPaused(false), 500);
  };

  const handleExpand = (height: number) => {
    setExpandedHeight(height);
  };

  const handleCollapse = () => {
    setExpandedHeight(null);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-0 md:px-8 mb-8">
      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
        <button
          onClick={goToPrevious}
          className="hidden md:flex transform -translate-x-6 md:-translate-x-12 bg-white/90 backdrop-blur-sm w-14 h-14 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[rgb(150,203,83)] z-10 pointer-events-auto items-center justify-center"
          aria-label="Vorherige Referenz"
        >
          <ChevronLeft className="w-8 h-8 text-gray-700" />
        </button>
        <button
          onClick={goToNext}
          className="hidden md:flex transform translate-x-6 md:translate-x-12 bg-white/90 backdrop-blur-sm w-14 h-14 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[rgb(150,203,83)] z-10 pointer-events-auto items-center justify-center"
          aria-label="Nächste Referenz"
        >
          <ChevronRight className="w-8 h-8 text-gray-700" />
        </button>
      </div>

      {/* Testimonial Container */}
      <div
        ref={containerRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="Kundenreferenzen"
      >
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex">
            {references.map((reference, index) => (
              <div key={index} className="w-full flex-shrink-0 md:px-4">
                <div 
                  ref={testimonialRef}
                  className="bg-white p-6 md:p-10 rounded-none md:rounded-2xl shadow-lg border-y md:border border-gray-100"
                  style={{
                    minHeight: expandedHeight ? `${expandedHeight}px` : 'auto',
                    transition: 'min-height 0.3s ease-in-out'
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(reference.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {reference.name === 'Sarah L.' ? (
                      <Cat className="w-8 h-8 text-[rgb(150,203,83)] opacity-50" />
                    ) : reference.name === 'Thomas B.' ? (
                      <Horse className="w-8 h-8 text-[rgb(150,203,83)] opacity-50" />
                    ) : reference.name === 'Angela A.' ? (
                      <Cat className="w-8 h-8 text-[rgb(150,203,83)] opacity-50" />
                    ) : (
                      <PawPrint className="w-8 h-8 text-[rgb(150,203,83)] opacity-50" />
                    )}
                  </div>
                  <blockquote className="mb-6">
                    <ExpandableText 
                      text={reference.text} 
                      maxLines={3}
                      onExpand={() => {
                        if (testimonialRef.current) {
                          handleExpand(testimonialRef.current.scrollHeight);
                        }
                      }}
                      onCollapse={handleCollapse}
                    />
                    <footer className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                      <span>{reference.name}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-[rgb(150,203,83)]">{reference.pet}</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 md:mt-8 flex flex-col items-center gap-4 px-4">
        <div className="flex justify-center gap-3" role="tablist">
          {references.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[rgb(150,203,83)] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Gehe zu Referenz ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>

        <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
          <span className="text-sm text-gray-600 font-medium">Auto-Scroll:</span>
          <button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className={`min-w-[60px] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoScrolling 
                ? 'bg-[rgb(150,203,83)] text-white hover:bg-[rgb(130,183,63)]'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-pressed={isAutoScrolling}
          >
            {isAutoScrolling ? 'An' : 'Aus'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedReferences;