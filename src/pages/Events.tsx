
import { Calendar, Clock, MapPin, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Frühjahrs-Radtour 2024",
      date: "2024-04-15",
      time: "09:00",
      location: "Vereinsheim Hard",
      description: "Gemeinsame Radtour durch das erwachende Frühjahr. Eine entspannte 50km Tour für alle Vereinsmitglieder.",
      participants: 45,
      difficulty: "Mittel",
      type: "Tour",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Vereinsmeisterschaft 2024",
      date: "2024-05-05",
      time: "10:00",
      location: "Hard - Bregenz Rundkurs",
      description: "Jährliche Vereinsmeisterschaft mit verschiedenen Kategorien. Zeigen Sie Ihr Können!",
      participants: 75,
      difficulty: "Schwer",
      type: "Wettkampf",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Herbst-Klassiker 2023",
      date: "2023-09-15",
      time: "09:30",
      location: "Hard Zentrum",
      description: "Unser traditioneller Herbst-Klassiker war auch 2023 wieder ein voller Erfolg.",
      participants: 82,
      difficulty: "Mittel",
      type: "Tour",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Leicht': return 'bg-green-100 text-green-800';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800';
      case 'Schwer': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Wettkampf': return <Trophy className="h-4 w-4" />;
      case 'Tour': return <MapPin className="h-4 w-4" />;
      case 'Familie': return <Users className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const EventCard = ({ event, isPast = false }: { event: any, isPast?: boolean }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {getTypeIcon(event.type)}
            <span className="text-sm font-medium text-blue-600">{event.type}</span>
            {isPast && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Vergangen
              </span>
            )}
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
            {event.difficulty}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
            <span>{new Date(event.date).toLocaleDateString('de-DE', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-blue-600" />
            <span>{event.time} Uhr</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2 text-blue-600" />
            <span>{event.participants} Teilnehmer{isPast ? '' : ' erwartet'}</span>
          </div>
        </div>

        <Link
          to={`/events/${event.id}`}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold block text-center"
        >
          Details ansehen
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Veranstaltungen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere vielfältigen Radsport-Veranstaltungen. 
            Von entspannten Familientouren bis hin zu anspruchsvollen Wettkämpfen.
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Kommende Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Vergangene Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interesse an einer Teilnahme?
            </h3>
            <p className="text-gray-600 mb-6">
              Kontaktieren Sie uns für weitere Informationen oder um sich für eine Veranstaltung anzumelden.
            </p>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
