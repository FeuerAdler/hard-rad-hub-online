
import { Users, Target, Award, Heart, MapPin, Clock } from 'lucide-react';

const Club = () => {
  const boardMembers = [
    {
      name: "Michael Huber",
      position: "Vereinspräsident",
      description: "Leitet den Verein seit 2018 mit großer Leidenschaft und Engagement.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sarah Weber",
      position: "Sportliche Leiterin",
      description: "Organisiert Trainings und Veranstaltungen für alle Leistungsklassen.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Thomas Müller",
      position: "Kassier",
      description: "Verantwortlich für die Finanzen und Mitgliederverwaltung.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Gemeinschaft",
      description: "Wir fördern den Zusammenhalt und die Kameradschaft unter allen Mitgliedern."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Sportliche Exzellenz",
      description: "Wir streben nach kontinuierlicher Verbesserung und sportlichen Erfolgen."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Fair Play",
      description: "Respekt, Fairness und Ehrlichkeit stehen im Mittelpunkt unseres Sports."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Leidenschaft",
      description: "Die Liebe zum Radsport verbindet uns alle und treibt uns jeden Tag an."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Über den RV Hard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lernen Sie unseren Verein kennen - unsere Mission, unsere Werte 
            und die Menschen, die den RV Hard zu dem machen, was er heute ist.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Unsere Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                Der RV Hard ist mehr als nur ein Radsportverein. Wir sind eine 
                Gemeinschaft von Menschen, die ihre Leidenschaft für das Radfahren teilen 
                und gemeinsam unvergessliche Erlebnisse schaffen.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Seit 1974 fördern wir den Radsport in Hard und Umgebung, bieten 
                Training für alle Leistungsstufen und organisieren Veranstaltungen, 
                die Spaß machen und die Gemeinschaft stärken.
              </p>
              <p className="text-lg text-gray-600">
                Ob Anfänger oder erfahrener Racer, bei uns findet jeder seinen Platz 
                und die Unterstützung, die er braucht, um seine Ziele zu erreichen.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="RV Hard Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unser Vorstand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Club Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trainingszeiten</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Dienstag & Donnerstag</p>
                  <p className="text-gray-600">18:00 - 20:00 Uhr (Gruppentraining)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Samstag</p>
                  <p className="text-gray-600">09:00 - 12:00 Uhr (Lange Ausfahrt)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Sonntag</p>
                  <p className="text-gray-600">08:00 - 11:00 Uhr (Wettkampftraining)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vereinsheim</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-600">Seestraße 42<br />6971 Hard, Österreich</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-600">
                  Unser Vereinsheim steht allen Mitgliedern offen und bietet 
                  Umkleideräume, Duschen sowie einen gemütlichen Aufenthaltsbereich 
                  für das gesellige Beisammensein nach dem Training.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Membership CTA */}
        <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Werden Sie Teil unserer Gemeinschaft!</h3>
          <p className="text-xl mb-6 opacity-90">
            Entdecken Sie die Freude am Radsport in einer starken Gemeinschaft. 
            Wir heißen neue Mitglieder jeden Alters und jeder Leistungsstufe willkommen.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
          >
            Mitglied werden
          </a>
        </div>
      </div>
    </div>
  );
};

export default Club;
