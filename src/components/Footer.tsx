import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Vanessa Wall mobile Tierphysiotherapie</h3>
            <p className="text-sm leading-relaxed mb-4">
              Professionelle mobile Tierphysiotherapie und Akupunktur für Ihr Haustier. 
              Wir bringen Gesundheit und Wohlbefinden direkt zu Ihrem Vierbeiner.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-[rgb(150,203,83)] transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              {[
                { label: 'Über mich', id: 'about' },
                { label: 'Leistungen', id: 'services' },
                { label: 'Preise', id: 'pricing' },
                { label: 'Kontakt', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-[rgb(150,203,83)] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#impressum" 
                  onClick={async (e) => {
                    e.preventDefault();
                    window.location.hash = 'impressum';
                    // Ensure smooth scrolling on mobile
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }}
                  className="hover:text-[rgb(150,203,83)] transition-colors duration-300"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a href="/Impressum.tsx" className="hover:text-[rgb(150,203,83)] transition-colors duration-300">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[rgb(150,203,83)] mr-2" />
                <a href="tel:+4916094602026" className="hover:text-[rgb(150,203,83)] transition-colors duration-300">+49 160 94602026</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[rgb(150,203,83)] mr-2" />
                <a href="mailto:vanessawall@web.de" className="hover:text-[rgb(150,203,83)] transition-colors duration-300">vanessawall@web.de</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {currentYear} Vanessa Wall mobile Tierphysiotherapie. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;