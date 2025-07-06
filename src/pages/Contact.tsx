import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const documents = [
    {
      name: "Vereinssatzung",
      description: "Die offizielle Satzung des RV Hard",
      url: "#",
      type: "PDF"
    },
    {
      name: "Beitragsordnung", 
      description: "Aktuelle Beiträge und Zahlungsmodalitäten",
      url: "#",
      type: "PDF"
    },
    {
      name: "Datenschutzerklärung",
      description: "Informationen zum Datenschutz im Verein",
      url: "#",
      type: "PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie mit uns in Kontakt treten? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      Radsportverein Hard<br />
                      Musterstraße 123<br />
                      6971 Hard, Österreich
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <p className="text-gray-600">+43 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">E-Mail</h3>
                    <p className="text-gray-600">info@rv-hard.at</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Vereinsabende</h3>
                    <p className="text-gray-600">
                      Jeden ersten Freitag im Monat<br />
                      19:00 - 21:00 Uhr<br />
                      Vereinsheim Hard
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Wichtige Dokumente</h2>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.url}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-yellow-500" />
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-yellow-700">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-gray-600">{doc.description}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {doc.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nachricht senden</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="mitgliedschaft">Mitgliedschaft</option>
                  <option value="training">Training & Kurse</option>
                  <option value="veranstaltungen">Veranstaltungen</option>
                  <option value="sponsoring">Sponsoring</option>
                  <option value="allgemein">Allgemeine Anfrage</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Ihre Nachricht..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
