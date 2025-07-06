
import Hero from '../components/Hero';
import SponsorsCarousel from '../components/SponsorsCarousel';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Frühjahrs-Radtour 2024",
      date: "2024-04-15",
      time: "09:00",
      location: "Vereinsheim Hard",
      description: "Gemeinsame Radtour durch das erwachende Frühjahr.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Vereinsmeisterschaft 2024",
      date: "2024-05-05",
      time: "10:00",
      location: "Hard - Bregenz Rundkurs",
      description: "Jährliche Vereinsmeisterschaft mit verschiedenen Kategorien.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Bodensee-Rundfahrt",
      date: "2024-06-12",
      time: "08:00",
      location: "Hard Hafen",
      description: "Die klassische Bodensee-Rundfahrt für alle Radsportler.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: "Erfolgreicher Start in die neue Saison",
      excerpt: "Mit über 50 Teilnehmern starteten wir erfolgreich in die Radsportsaison 2024.",
      date: "15. März 2024",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Neue Trainingsrouten verfügbar",
      excerpt: "Entdecken Sie unsere neuen Trainingsrouten durch das wunderschöne Vorarlberg.",
      date: "10. März 2024",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nächste Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Verpassen Sie keine unserer kommenden Veranstaltungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                      <span>{new Date(event.date).toLocaleDateString('de-DE')}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-yellow-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/events/${event.id}`}
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors font-semibold block text-center"
                  >
                    Mehr Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/events" 
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              Alle Events ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aktuelle Neuigkeiten
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten aus unserem Verein
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {recentNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-yellow-600 mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link to="/news" className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center">
                    Weiterlesen <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/news" 
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              Alle Neuigkeiten ansehen
            </Link>
          </div>
        </div>
      </section>

      <SponsorsCarousel />
    </div>
  );
};

export default Index;
