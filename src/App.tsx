import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Ablauf2 from './components/Ablauf2';
import Section from './components/Section';
import AnimatedReferences from './components/AnimatedReferences';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ImageGallery from './components/ImageGallery';
import AnimatedScrollObserver from './components/AnimatedScrollObserver';
import { Phone, Mail, MapPin, Star, Activity, Heart, Hand as Hands, Sparkles, Check, ArrowRight, Quote } from 'lucide-react';

const lucideIcons = { Activity, Heart, Hands, Sparkles };

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#impressum') {
        setCurrentPage('impressum');
      } else if (window.location.hash === '#datenschutz') {
        setCurrentPage('datenschutz');
      } else {
        setCurrentPage('main');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'VeterinaryCare',
      'name': 'TierPhysio',
      'description': 'Mobile Tierphysiotherapie und Akupunktur',
      'url': window.location.href,
      'telephone': '016094602026',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Lage',
        'addressRegion': 'NW',
        'addressCountry': 'DE'
      }
    });
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Navigation showHero={currentPage === 'main'} />
      <WhatsAppButton />
      <AnimatedScrollObserver />
      {currentPage === 'main' ? (
        <>
          <Hero />
          <Section id="about" title="Über mich" className="bg-white py-12 md:py-16">
            <div className="relative w-full">
              <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative group animate-trigger-left">
                    <div className="relative rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]" style={{ width: '20rem' }}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(150,203,83)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src="https://webseitendetmold.blob.core.windows.net/vanessatier/2222.PNG"
                        alt="Veterinary physiotherapist"
                        className="w-full h-[200px] md:h-[500px] object-cover shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="animate-trigger-right space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                      Ihre Expertin für Tierphysiotherapie
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 leading-relaxed">
                        Wie schon Charles Darwin sagte: „Die Tiere empfinden wie der Mensch Freude und Schmerz, Glück und Unglück" habe ich es mir zur Aufgabe gemacht, den körperlichen Schmerz Ihrer Fellnase zu minimieren und im besten Fall zu eliminieren und das Unglück in Glück und Wohlbefinden umzuwandeln.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Ich begleite Ihren Vierbeiner daher sehr gerne auf der Reise der körperlichen Genesung mittels manueller Physiotherapie sowie dem Einsatz verschiedener Geräte und Methoden, wie z.B. der Akupunktur, Blutegeltherapie, Magnetfeldtherapie u.v.m.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Ich möchte, dass jeder Vierbeiner nach Möglichkeit die Chance hat, weitestgehend schmerzfrei die Welt zu erkunden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="services" title="Leistungen" className="bg-gray-50">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-3xl mx-auto animate-trigger-fade">
                <p className="text-xl font-inter text-gray-700 leading-relaxed tracking-wide">
                  Die Tierphysiotherapie ist eine ganzheitliche Behandlungsmethode, die darauf abzielt, 
                  die Beweglichkeit, Kraft und das allgemeine Wohlbefinden Ihres Tieres zu verbessern. 
                  Durch verschiedene Techniken und Therapieformen unterstütze ich den Heilungsprozess 
                  und fördere die natürliche Regeneration des Körpers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Manuelle Therapie',
                    description: 'Gezielte Handgriffe und Techniken zur Mobilisation von Gelenken und Entspannung der Muskulatur',
                    icon: 'Hands'
                  },
                  {
                    title: 'Bewegungstherapie',
                    description: 'Individuell angepasste Übungen zur Stärkung der Muskulatur und Verbesserung der Koordination',
                    icon: 'Activity'
                  },
                  {
                    title: 'Schmerztherapie',
                    description: 'Effektive Methoden zur Linderung akuter und chronischer Schmerzen',
                    icon: 'Heart'
                  },
                  {
                    title: 'Rehabilitation',
                    description: 'Unterstützung bei der Genesung nach Operationen oder Verletzungen',
                    icon: 'Sparkles'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-trigger-scale group hover:-translate-y-1"
                    data-delay={index * 150}
                  >
                    <div className="h-12 w-12 rounded-lg bg-[rgb(150,203,83)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(lucideIcons[feature.icon], {
                        className: "w-6 h-6 text-[rgb(150,203,83)]"
                      })}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white rounded-xl p-8 shadow-lg animate-trigger-left">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Behandlungsmethoden</h3>
                  <ul className="space-y-4">
                    {[
                      'Klassische Massage',
                      'Akupunktur',
                      'Magnetfeldtherapie',
                      'Elektrotherapie',
                      'Blutegeltherapie'
                    ].map((method, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-[rgb(150,203,83)] mr-3 flex-shrink-0" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg animate-trigger-right">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Anwendungsgebiete</h3>
                  <ul className="space-y-4">
                    {[
                      'Arthrose und Gelenkprobleme',
                      'Muskel- und Sehnenverletzungen',
                      'Postoperative Rehabilitation',
                      'Wirbelsäulenprobleme',
                      'Altersbedingter Bewegungseinschränkungen',
                      'Präventive Behandlungen'
                    ].map((area, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <ArrowRight className="w-5 h-5 text-[rgb(150,203,83)] mr-3 flex-shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <blockquote className="relative mt-12 bg-white rounded-xl p-8 shadow-lg animate-trigger-fade">
                <div className="absolute -top-4 left-8">
                  <Quote className="w-8 h-8 text-[rgb(150,203,83)]" />
                </div>
                <p className="text-lg text-gray-600 italic mb-4 pt-4">
                  "Physiotherapie ist mehr als nur Behandlung - es ist der Weg zu mehr Lebensqualität 
                  und Wohlbefinden für Ihr Tier. Durch die individuelle Betreuung und angepasste 
                  Therapieformen können wir gemeinsam sichtbare Fortschritte erzielen."
                </p>
                <footer className="text-gray-800 font-semibold">
                  - Vanessa Wall, Tierphysiotherapeutin
                </footer>
              </blockquote>
            </div>
          </Section>
          
          <Ablauf2 />

          <Section id="testimonials" title="Referenzen" className="bg-gray-50">
            <div className="animate-trigger-fade">
              <AnimatedReferences />
            </div>
          </Section>

          <Section id="pricing" title="Preise" className="bg-white">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Erstbehandlung',
                  price: '75',
                  duration: '60-90 Minuten',
                  features: ['Ausführliche Anamnese', 'Körperliche Untersuchung', 'Erste Behandlung', 'Behandlungsplan', 'Pauschalpreis']
                },
                {
                  title: 'Folgebehandlung',
                  price: '40',
                  duration: '45 Minuten',
                  features: [
                    'Physiotherapie',
                    'Verwendete Materialien:',
                    {
                      text: 'Akupunkturnadeln',
                      indent: true
                    },
                    {
                      text: 'Elektrodenpads',
                      indent: true
                    },
                    'Pauschalpreis'
                  ]
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg border-2 border-[rgb(150,203,83)] hover:shadow-xl transition-shadow duration-300 animate-trigger-scale hover-lift"
                  data-delay={index * 200}
                >
                  <h3 className="text-xl font-semibold mb-4 text-center">{plan.title}</h3>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold">{plan.price}€</span>
                    <p className="text-gray-600 mt-2">{plan.duration}</p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className={`flex items-center text-gray-600 ${
                          typeof feature === 'object' && feature.indent ? 'ml-6' : ''
                        }`}
                      >
                        <span className="w-2 h-2 bg-[rgb(150,203,83)] rounded-full mr-2"></span>
                        {typeof feature === 'object' ? feature.text : feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Kontakt" className="bg-gray-50">
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6 animate-trigger-left">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Kontaktieren Sie mich</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-[rgb(150,203,83)] mr-3" />
                      <a href="tel:+4916094602026" className="hover:text-[rgb(150,203,83)] transition-colors duration-300">
                        +49 160 94602026
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-[rgb(150,203,83)] mr-3" />
                      <a href="mailto:info@tierphysio-wall.de" className="hover:text-[rgb(150,203,83)] transition-colors duration-300">
                        info@tierphysio-wall.de
                      </a>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-[rgb(150,203,83)] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600">Mobil in Lage und Umgebung</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 animate-trigger-left" style={{ animationDelay: '200ms' }}>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Einsatzgebiet</h4>
                  <p className="text-gray-600 mb-4">Ich bin mobil in Lage und den umliegenden Gemeinden für Sie im Einsatz.</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78645.49377160982!2d8.710726906556568!3d51.97641019255925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba416c590a3501%3A0x427f28131548580!2s32791%20Lage!5e0!3m2!1sde!2sde!4v1742586884907!5m2!1sde!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Standort Karte"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 animate-trigger-right">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Schreiben Sie mir</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(150,203,83)] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(150,203,83)] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(150,203,83)] focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[rgb(150,203,83)] text-white px-6 py-3 rounded-lg font-semibold
                             hover:bg-[rgb(130,183,63)] transform hover:scale-105 transition-all duration-300
                             shadow-lg hover:shadow-xl hover-lift"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </Section>
        </>
      ) : currentPage === 'impressum' ? (
        <Impressum />
      ) : (
        <Datenschutz />
      )}
      <Footer />
    </>
  );
}

export default App;