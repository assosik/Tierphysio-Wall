import React from 'react';
import businessCard from './Vanessa_Visitenkarte (1).png';

const Impressum = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto md:bg-white md:rounded-lg md:shadow-sm md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Impressum</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Angaben gemäß § 5 TMG:</h2>
            <div className="text-gray-600">
              <p>Tierphysio Vanessa Wall</p>
              <p>Obernkamp 12</p>
              <p>32791 Lage</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Kontakt:</h2>
            <p className="text-gray-600">Mobil: +49 160 94602026</p>
          </section>

          <div className="flex justify-center my-8">
            <img 
              src={businessCard} 
              alt="Visitenkarte Vanessa Wall"
              className="w-auto h-48 md:rounded-lg"
            />
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h2>
            <div className="text-gray-600">
              <p>Vanessa Wall</p>
              <p>Obernkamp 12</p>
              <p>32791 Lage</p>
            </div>
          </section>

          <section className="pt-6 md:border-t md:border-gray-200">
            <p className="text-gray-600 text-sm">
              Diese Angaben dienen der Erfüllung gesetzlicher Informationspflichten. 
              Alle Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;