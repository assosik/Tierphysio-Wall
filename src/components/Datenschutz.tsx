import React, { useEffect } from 'react';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="text-gray-600 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="text-gray-600 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
              <p className="text-gray-600 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-gray-600 mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Datenschutz</h3>
              <p className="text-gray-600 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-gray-600 mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  Vanessa Wall<br />
                  Obernkamp 12<br />
                  32791 Lage<br />
                  Telefon: +49 160 94602026<br />
                  E-Mail: info@tierphysio-wall.de
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kontaktformular</h3>
              <p className="text-gray-600 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">WhatsApp Business</h3>
              <p className="text-gray-600 mb-4">
                Wir bieten Besuchern unserer Webseite die Möglichkeit, über WhatsApp mit uns in Kontakt zu treten. Hierfür verwenden wir den Dienst „WhatsApp Business". Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Ihre Rechte</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Sie haben das Recht:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                  <li>Die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                  <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;