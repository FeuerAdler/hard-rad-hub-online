
import { Bike, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bike className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">RV Hard</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ihr traditionsreicher Radsportverein in Hard, Vorarlberg. 
              Seit Jahren fördern wir den Radsport und bringen die Gemeinschaft zusammen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@rv-hard.at</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+43 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hard, Vorarlberg</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2 text-gray-300">
              <a href="/club" className="block hover:text-blue-400 transition-colors">Über uns</a>
              <a href="/events" className="block hover:text-blue-400 transition-colors">Veranstaltungen</a>
              <a href="/news" className="block hover:text-blue-400 transition-colors">Neuigkeiten</a>
              <a href="/contact" className="block hover:text-blue-400 transition-colors">Kontakt</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RV Hard. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
