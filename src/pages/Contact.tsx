
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Adresse",
      content: "Seestraße 42\n6971 Hard, Österreich"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Telefon",
      content: "+43 5574 123 456"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "E-Mail",
      content: "info@rv-hard.at"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Vereinsheim Öffnungszeiten",
      content: "Di & Do: 18:00-20:00\nSa: 09:00-12:00\nSo: 08:00-11:00"
    }
  ];

  const boardMembers = [
    {
      name: "Michael Huber",
      position: "Vereinspräsident",
      phone: "+43 676 123 4567",
      email: "praesident@rv-hard.at"
    },
    {
      name: "Sarah Weber",
      position: "Sportliche Leiterin",
      phone: "+43 676 234 5678",
      email: "sport@rv-hard.at"
    },
    {
      name: "Thomas Müller",
      position: "Kassier",
      phone: "+43 676 345 6789",
      email: "kassier@rv-hard.at"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie Teil unserer Radsport-Gemeinschaft werden? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Board Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Direkter Kontakt zum Vorstand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            So finden Sie uns
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Seestraße 42, 6971 Hard, Österreich
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  (Interaktive Karte würde hier angezeigt werden)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Unser Vereinsheim befindet sich direkt am Bodensee mit Blick auf die Berge. 
              Parkplätze sind vor dem Gebäude verfügbar.
            </p>
            <a 
              href="https://maps.google.com/?q=Seestraße+42,+6971+Hard,+Austria"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Route planen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
