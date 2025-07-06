
import { FileText, Download, Calendar, Shield, Users, Info } from 'lucide-react';

const Documents = () => {
  const documentCategories = [
    {
      title: "Vereinsdokumente",
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      documents: [
        { name: "Vereinssatzung", description: "Aktuelle Satzung des RV Hard", file: "satzung.pdf", date: "2024" },
        { name: "Beitragsordnung", description: "Übersicht der Mitgliedsbeiträge", file: "beitraege.pdf", date: "2024" },
        { name: "Geschäftsordnung", description: "Geschäftsordnung des Vereins", file: "geschaeftsordnung.pdf", date: "2024" }
      ]
    },
    {
      title: "Formulare",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      documents: [
        { name: "Mitgliedsantrag", description: "Antrag für neue Mitglieder", file: "mitgliedsantrag.pdf", date: "2024" },
        { name: "Austrittsformular", description: "Formular für Vereinsaustritt", file: "austritt.pdf", date: "2024" },
        { name: "Änderung Mitgliedsdaten", description: "Formular zur Datenänderung", file: "datenaenderung.pdf", date: "2024" }
      ]
    },
    {
      title: "Versicherung & Rechtliches",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      documents: [
        { name: "Versicherungsbestimmungen", description: "Informationen zur Vereinsversicherung", file: "versicherung.pdf", date: "2024" },
        { name: "Datenschutzerklärung", description: "DSGVO-konforme Datenschutzerklärung", file: "datenschutz.pdf", date: "2024" },
        { name: "Haftungsausschluss", description: "Haftungsausschluss für Vereinsaktivitäten", file: "haftung.pdf", date: "2024" }
      ]
    },
    {
      title: "Trainingsunterlagen",
      icon: <Info className="h-8 w-8 text-purple-500" />,
      documents: [
        { name: "Trainingsplan 2024", description: "Jahrestrainingsplan", file: "trainingsplan.pdf", date: "2024" },
        { name: "Sicherheitsrichtlinien", description: "Sicherheitshinweise für Trainingsfahrten", file: "sicherheit.pdf", date: "2024" },
        { name: "Routen & Strecken", description: "Übersicht der Trainingsrouten", file: "routen.pdf", date: "2024" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wichtige Dokumente
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie alle wichtigen Dokumente, Formulare und Unterlagen des RV Hard.
            Alle Dokumente stehen zum Download zur Verfügung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {documentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-gray-900 ml-3">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.documents.map((doc, docIndex) => (
                  <div key={docIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Aktualisiert: {doc.date}</span>
                        </div>
                      </div>
                      <button className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <Info className="h-6 w-6 text-yellow-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Wichtige Hinweise</h3>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>• Alle Dokumente sind im PDF-Format verfügbar und können kostenfrei heruntergeladen werden.</p>
            <p>• Bei Fragen zu den Dokumenten wenden Sie sich gerne an den Vorstand.</p>
            <p>• Ausgefüllte Formulare können per E-Mail an info@rv-hard.at gesendet werden.</p>
            <p>• Die Dokumente werden regelmäßig aktualisiert. Achten Sie auf das Datum der letzten Aktualisierung.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Fragen zu den Dokumenten?</h3>
          <p className="text-gray-600 mb-6">
            Unser Vorstand hilft Ihnen gerne bei allen Fragen rund um die Vereinsdokumente weiter.
          </p>
          <a 
            href="/contact" 
            className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold inline-block"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Documents;
