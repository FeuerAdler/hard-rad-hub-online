
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, ExternalLink, FileText } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  
  // Mock data - in reality this would come from a database or API
  const events = {
    '1': {
      id: 1,
      title: "Frühjahrs-Radtour 2024",
      date: "2024-04-15",
      time: "09:00",
      location: "Vereinsheim Hard",
      description: "Gemeinsame Radtour durch das erwachende Frühjahr. Eine entspannte 50km Tour für alle Vereinsmitglieder. Die Route führt uns durch die schönsten Gegenden rund um Hard und den Bodensee.",
      participants: 45,
      difficulty: "Mittel",
      type: "Tour",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      registrationUrl: "https://my.raceresult.com/123456/registration",
      documents: [
        { name: "Streckenplan", url: "#" },
        { name: "Sicherheitshinweise", url: "#" }
      ],
      isPast: false
    },
    '2': {
      id: 2,
      title: "Vereinsmeisterschaft 2024",
      date: "2024-05-05",
      time: "10:00",
      location: "Hard - Bregenz Rundkurs",
      description: "Jährliche Vereinsmeisterschaft mit verschiedenen Kategorien. Zeigen Sie Ihr Können! Gefahren wird auf unserem traditionellen Rundkurs zwischen Hard und Bregenz.",
      participants: 75,
      difficulty: "Schwer",
      type: "Wettkampf",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      registrationUrl: "https://my.raceresult.com/789012/registration",
      documents: [
        { name: "Ausschreibung", url: "#" },
        { name: "Startliste", url: "#" },
        { name: "Regelwerk", url: "#" }
      ],
      isPast: false
    },
    '3': {
      id: 3,
      title: "Herbst-Klassiker 2023",
      date: "2023-09-15",
      time: "09:30",
      location: "Hard Zentrum",
      description: "Unser traditioneller Herbst-Klassiker war auch 2023 wieder ein voller Erfolg. Bei perfektem Wetter starteten über 80 Teilnehmer zu dieser beliebten Veranstaltung.",
      participants: 82,
      difficulty: "Mittel",
      type: "Tour",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      registrationUrl: null,
      documents: [
        { name: "Ergebnisse", url: "#" },
        { name: "Bildergalerie", url: "#" }
      ],
      isPast: true
    }
  };

  const event = events[id as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event nicht gefunden</h1>
          <Link to="/events" className="text-yellow-600 hover:text-yellow-800">
            Zurück zu den Events
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Leicht': return 'bg-green-100 text-green-800';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800';
      case 'Schwer': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/events" 
          className="flex items-center text-yellow-600 hover:text-yellow-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück zu den Events
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(event.difficulty)}`}>
                {event.difficulty}
              </span>
              {event.isPast && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Vergangenes Event
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-yellow-600" />
                  <span>{new Date(event.date).toLocaleDateString('de-DE', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-yellow-600" />
                  <span>{event.time} Uhr</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-yellow-600" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3 text-yellow-600" />
                  <span>{event.participants} Teilnehmer{event.isPast ? '' : ' erwartet'}</span>
                </div>
              </div>

              <div className="space-y-4">
                {event.registrationUrl && !event.isPast && (
                  <a 
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 transition-colors font-semibold text-center"
                  >
                    <ExternalLink className="h-4 w-4 inline mr-2" />
                    Jetzt anmelden
                  </a>
                )}
                
                {event.documents.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Dokumente</h3>
                    <div className="space-y-2">
                      {event.documents.map((doc, index) => (
                        <a
                          key={index}
                          href={doc.url}
                          className="flex items-center text-yellow-600 hover:text-yellow-800 p-2 rounded hover:bg-yellow-50 transition-colors"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          {doc.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Beschreibung</h2>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>

            {event.registrationUrl && !event.isPast && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Anmeldung</h3>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <iframe 
                    src={event.registrationUrl}
                    width="100%" 
                    height="400"
                    style={{ border: 'none' }}
                    title="Anmeldung"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
