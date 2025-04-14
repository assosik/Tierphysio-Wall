import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Verantwortliche Stelle</h2>
            <div className="space-y-4">
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
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
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Art und Zweck der Datenerhebung</h3>
              <p>
                Bei der Nutzung dieser Website werden folgende Daten erhoben:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kontaktdaten (bei Nutzung des Kontaktformulars)</li>
                <li>Technische Zugriffsdaten (automatisch beim Websitebesuch)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6">Kontaktformular</h3>
              <p>
                Wenn Sie das Kontaktformular nutzen, werden folgende Daten verarbeitet:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Nachrichteninhalt</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Speicherdauer</h2>
            <p>
              Ihre Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist. 
              Kontaktanfragen werden nach vollständiger Bearbeitung und Ablauf eventueller gesetzlicher 
              Aufbewahrungsfristen gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies und Tracking</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige 
              Cookies verwendet, die für die Funktionalität der Website erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Widerspruchsrecht</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Datensicherheit</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
              eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
              Adresszeile des Browsers von "http://" auf "https://" wechselt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Änderungen der Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
              rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
              Datenschutzerklärung umzusetzen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Kontakt</h2>
            <p>
              Bei Fragen zur Datenschutzerklärung oder zur Verarbeitung Ihrer personenbezogenen Daten 
              können Sie sich jederzeit an uns wenden:
            </p>
            <p className="mt-4">
              E-Mail: info@tierphysio-wall.de<br />
              Telefon: +49 160 94602026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;