import React, { useEffect, useRef } from 'react';
import Section from './Section';
import ImageGallery from './ImageGallery';

const Ablauf2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Options for the Intersection Observer
    const options = {
      rootMargin: '-20% 0px -35% 0px',
      threshold: [0.2, 0.4, 0.6, 0.8]
    };

    // Create observer for section tracking
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add data attribute for scroll position
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-in-view', 'true');
          
          // Dispatch custom event for navigation
          const event = new CustomEvent('sectionInView', {
            detail: { id: 'process', ratio: entry.intersectionRatio }
          });
          window.dispatchEvent(event);
        } else {
          entry.target.setAttribute('data-in-view', 'false');
        }
      });
    }, options);

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="process" title="Ablauf" className="bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div ref={sectionRef} className="space-y-16" data-section="process">
          {[
            {
              step: 1,
              title: 'Erstgespräch',
              description: 'Nach einem informativen Telefonat, durch welches ich erste Eindrücke Ihres Vierbeiners sammeln möchte, komme ich sehr gerne zu Ihnen nach Hause. Erfahrungsgemäß sind sowohl Hunde als auch Katzen in Ihren vertrauten vier Wänden entspannter und können sich dort deutlich besser auf die Behandlung einlassen. Das ist aber ganz individuell zu entscheiden, denn jeder Hund hat physiotherapeutische Behandlungen verdient.'
            },
            {
              step: 2,
              title: 'Untersuchung',
              description: 'Die Erstbehandlung beläuft sich ca. auf 60-90 Minuten. Ich erfrage hier u.a. die Beschwerden, halte diese schriftlich fest und verschaffe mir mittels Abtastens des Tieres einen ersten eigenen Eindruck.'
            },
            {
              step: 3,
              title: 'Behandlungsplan',
              description: 'Auf Basis einer gründlichen Diagnostik erstellen wir einen individuellen Therapieplan mit 45-minütigen Behandlungseinheiten. Gezielte Übungen und schonende Techniken lindern Schmerzen, fördern Mobilität und unterstützen die Genesung. Regelmäßige Überprüfung und Anpassung sichern optimale Fortschritte. Im partnerschaftlichen Austausch arbeiten wir Schritt für Schritt daran, die Lebensqualität Ihres Tieres zu steigern – für mehr Wohlbefinden und Aktivität im Alltag.'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative pl-16 animate-trigger"
              data-delay={index * 300}
            >
              {/* Step number */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-[rgb(150,203,83)] rounded-xl flex items-center justify-center text-white font-bold text-xl transform transition-transform duration-500 hover:rotate-12">
                {item.step}
              </div>

              {/* Content */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              {/* Connector line for all but last item */}
              {index < 2 && (
                <div className="absolute left-6 top-12 w-[2px] h-[calc(100%+4rem)] bg-gradient-to-b from-[rgb(150,203,83)] to-transparent" />
              )}
            </div>
          ))}
          <div className="animate-trigger-fade mt-16" data-delay="400">
            <ImageGallery />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Ablauf2;