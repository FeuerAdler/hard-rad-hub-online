
import { Trophy, Users, Calendar, Star } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      year: "1974",
      title: "Gründung des RV Hard",
      description: "Eine Gruppe passionierter Radsportler gründet den Radsportverein Hard mit dem Ziel, den Radsport in der Region zu fördern."
    },
    {
      year: "1982",
      title: "Erstes Vereinsheim",
      description: "Eröffnung des ersten eigenen Vereinsheims, das bis heute als Treffpunkt für alle Mitglieder dient."
    },
    {
      year: "1995",
      title: "100 Mitglieder erreicht",
      description: "Der Verein wächst stetig und erreicht die Marke von 100 aktiven Mitgliedern."
    },
    {
      year: "2001",
      title: "Erste Vereinsmeisterschaft",
      description: "Organisation der ersten offiziellen Vereinsmeisterschaft, die seitdem jährlich stattfindet."
    },
    {
      year: "2010",
      title: "Jugendförderung",
      description: "Start des Jugendprogramms zur Nachwuchsförderung im Radsport."
    },
    {
      year: "2015",
      title: "40 Jahre RV Hard",
      description: "Großes Jubiläumsfest mit über 300 Gästen und Alumni des Vereins."
    },
    {
      year: "2020",
      title: "Digitale Transformation",
      description: "Einführung digitaler Trainingstools und Online-Veranstaltungen während der Pandemie."
    },
    {
      year: "2024",
      title: "50 Jahre Tradition",
      description: "Der RV Hard feiert sein 50-jähriges Bestehen mit über 150 aktiven Mitgliedern."
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Regionale Meistertitel",
      count: "25+"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Vereinsmitglieder",
      count: "150+"
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      title: "Veranstaltungen pro Jahr",
      count: "25+"
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      title: "Jahre Vereinsgeschichte",
      count: "50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Geschichte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            50 Jahre Leidenschaft für den Radsport. Entdecken Sie die bewegte Geschichte 
            des RV Hard von der Gründung bis heute.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="RV Hard Geschichte"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Unsere Erfolge
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.count}</h3>
                <p className="text-gray-600">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meilensteine unserer Geschichte
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Die Gründerväter
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Der RV Hard wurde 1974 von einer Gruppe enthusiastischer Radsportler gegründet, 
            die ihre Leidenschaft für den Sport teilen und eine Gemeinschaft aufbauen wollten. 
            Ihre Vision war es, den Radsport in Hard und der gesamten Region Vorarlberg zu fördern 
            und Menschen aller Altersgruppen für das Radfahren zu begeistern.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Heute, 50 Jahre später, sind wir stolz darauf, dass aus dieser kleinen Gruppe 
            ein Verein mit über 150 aktiven Mitgliedern geworden ist, der weiterhin die 
            Werte und den Geist der Gründerväter verkörpert: Gemeinschaft, Leidenschaft 
            und die Liebe zum Radsport.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
