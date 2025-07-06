import { useState } from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      id: 1,
      title: "Erfolgreicher Start in die neue Saison 2024",
      excerpt: "Mit über 50 Teilnehmern starteten wir erfolgreich in die Radsportsaison 2024. Die erste Ausfahrt führte uns durch das wunderschöne Rheintal.",
      content: "Der RV Hard eröffnete die Radsportsaison 2024 mit einer beeindruckenden Beteiligung von über 50 Mitgliedern. Die traditionelle Eröffnungsfahrt führte die Teilnehmer auf einer 45 Kilometer langen Route durch das malerische Rheintal. Bei perfekten Wetterbedingungen und bester Stimmung zeigten alle Beteiligten, dass sie bereit für ein spannendes Radsportjahr sind.",
      date: "2024-03-15",
      author: "Michael Huber",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Vereinsleben"
    },
    {
      id: 2,
      title: "Neue Trainingsrouten verfügbar",
      excerpt: "Entdecken Sie unsere neuen Trainingsrouten durch das wunderschöne Vorarlberg. Drei verschiedene Schwierigkeitsgrade für alle Leistungsstufen.",
      content: "Der RV Hard freut sich, drei neue sorgfältig geplante Trainingsrouten vorstellen zu können. Die 'Einsteiger-Route' (25km) führt entlang des Bodensees, die 'Fortgeschrittenen-Route' (45km) durch das Rheintal mit moderaten Steigungen, und die 'Profi-Route' (65km) bietet herausfordernde Bergpassagen. Alle Routen wurden GPS-vermessen und stehen als Download zur Verfügung.",
      date: "2024-03-10",
      author: "Sarah Weber",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Training"
    },
    {
      id: 3,
      title: "Vereinsmeisterschaft 2024 - Anmeldung geöffnet",
      excerpt: "Die Anmeldung für unsere jährliche Vereinsmeisterschaft ist ab sofort geöffnet. Verschiedene Kategorien für alle Altersgruppen.",
      content: "Am 5. Mai 2024 findet unsere traditionelle Vereinsmeisterschaft statt. Dieses Jahr erwarten wir über 75 Teilnehmer in den Kategorien Jugend, Damen, Herren und Senioren. Die Strecke führt von Hard nach Bregenz und zurück (42km). Anmeldeschluss ist der 25. April. Alle Teilnehmer erhalten eine Medaille, die Sieger der jeweiligen Kategorien werden mit Pokalen geehrt.",
      date: "2024-03-05",
      author: "Thomas Müller",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wettkampf"
    },
    {
      id: 4,
      title: "Neue Vereinstrikots eingetroffen",
      excerpt: "Die lang erwarteten neuen Vereinstrikots sind eingetroffen. Modernes Design in den traditionellen Vereinsfarben.",
      content: "Nach monatelanger Planung sind endlich die neuen Vereinstrikots des RV Hard eingetroffen. Das moderne Design in Blau und Weiß repräsentiert unsere Tradition und gleichzeitig unseren Blick in die Zukunft. Die Trikots sind aus hochwertigem, atmungsaktivem Material gefertigt und bieten optimalen Komfort bei allen Wetterbedingungen. Mitglieder können ihre Trikots ab sofort im Vereinsheim abholen.",
      date: "2024-02-28",
      author: "Sarah Weber",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Vereinsleben"
    },
    {
      id: 5,
      title: "Erfolgreiche Wintertrainings-Saison beendet",
      excerpt: "Mit über 200 absolvierten Trainingseinheiten beenden unsere Mitglieder erfolgreich die Wintertrainings-Saison.",
      content: "Trotz der herausfordernden Wintermonate haben unsere Mitglieder über 200 Trainingseinheiten absolviert. Das Indoor-Training im Fitness Studio Hard sowie die Laufeinheiten hielten alle fit für die neue Radsportsaison. Besonders hervorzuheben ist die Disziplin unserer Jugendgruppe, die auch bei schwierigsten Wetterbedingungen nicht auf ihr Training verzichtete.",
      date: "2024-02-15",
      author: "Michael Huber",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Training"
    },
    {
      id: 6,
      title: "50 Jahre RV Hard - Jubiläumsfeier geplant",
      excerpt: "2024 feiert der RV Hard sein 50-jähriges Bestehen. Eine große Jubiläumsfeier ist für den Sommer geplant.",
      content: "2024 ist ein besonderes Jahr für den RV Hard - wir feiern unser 50-jähriges Bestehen! Seit der Gründung 1974 hat sich unser Verein zu einer der wichtigsten Radsport-Institutionen in Vorarlberg entwickelt. Für den Sommer planen wir eine große Jubiläumsfeier mit ehemaligen Mitgliedern, Partnern und der gesamten Radsport-Community. Details werden in Kürze bekannt gegeben.",
      date: "2024-01-20",
      author: "Michael Huber",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Vereinsleben"
    }
  ];

  const categories = ["Alle", "Vereinsleben", "Training", "Wettkampf"];
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const filteredNews = selectedCategory === "Alle" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Neuigkeiten
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, 
            Ereignissen und Entwicklungen aus unserem Radsportverein.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Articles */}
        <div className="space-y-8">
          {filteredNews.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('de-DE')}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {selectedNews === article.id ? article.content : article.excerpt}
                  </p>
                  
                  <button
                    onClick={() => setSelectedNews(selectedNews === article.id ? null : article.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    {selectedNews === article.id ? 'Weniger anzeigen' : 'Mehr lesen'}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Verpassen Sie keine Neuigkeiten!</h3>
          <p className="text-xl mb-6 opacity-90">
            Abonnieren Sie unseren Newsletter und bleiben Sie immer auf dem Laufenden 
            über Vereinsaktivitäten, Events und wichtige Mitteilungen.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Anmelden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
