
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="relative min-h-[600px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80')`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            RV Hard
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ihr traditioneller Radsportverein in Hard, Vorarlberg. 
            Gemeinsam fahren wir seit Jahren für Leidenschaft, Sport und Gemeinschaft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/club" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Über uns <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/events" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              Veranstaltungen
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">150+</h3>
              <p className="text-gray-600">Aktive Mitglieder</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">25+</h3>
              <p className="text-gray-600">Veranstaltungen pro Jahr</p>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Jahre Vereinsgeschichte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
