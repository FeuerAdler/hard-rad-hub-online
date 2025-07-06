
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const Termine = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const events = [
    {
      id: 1,
      title: "Frühjahrs-Radtour",
      date: "2024-04-15",
      time: "09:00",
      location: "Vereinsheim Hard",
      category: "Tour",
      participants: 45,
      description: "Gemeinsame Radtour durch das erwachende Frühjahr."
    },
    {
      id: 2,
      title: "Wochenend-Training",
      date: "2024-04-20",
      time: "08:30",
      location: "Bodensee-Rundweg",
      category: "Training",
      participants: 25,
      description: "Intensives Wochenendtraining für alle Leistungsklassen."
    },
    {
      id: 3,
      title: "Vereinsmeisterschaft",
      date: "2024-05-05",
      time: "10:00",
      location: "Hard - Bregenz",
      category: "Wettkampf",
      participants: 75,
      description: "Jährliche Vereinsmeisterschaft mit verschiedenen Kategorien."
    },
    {
      id: 4,
      title: "Jugendtraining",
      date: "2024-05-12",
      time: "14:00",
      location: "Vereinsheim Hard",
      category: "Jugend",
      participants: 15,
      description: "Spezielles Training für unsere Nachwuchsfahrer."
    },
    {
      id: 5,
      title: "Bodensee-Rundfahrt",
      date: "2024-06-12",
      time: "08:00",
      location: "Hard Hafen",
      category: "Tour",
      participants: 120,
      description: "Die klassische Bodensee-Rundfahrt."
    },
    {
      id: 6,
      title: "Vereinsversammlung",
      date: "2024-06-20",
      time: "19:00",
      location: "Vereinsheim Hard",
      category: "Versammlung",
      participants: 60,
      description: "Ordentliche Mitgliederversammlung 2024."
    },
    {
      id: 7,
      title: "Familien-Radtag",
      date: "2024-07-20",
      time: "14:00",
      location: "Vereinsheim Hard",
      category: "Familie",
      participants: 85,
      description: "Ein entspannter Nachmittag für die ganze Familie."
    },
    {
      id: 8,
      title: "Bergtour Silvretta",
      date: "2024-08-10",
      time: "07:00",
      location: "Partenen",
      category: "Tour",
      participants: 30,
      description: "Anspruchsvolle Bergtour durch die Silvretta."
    },
    {
      id: 9,
      title: "Herbst-Challenge",
      date: "2024-09-15",
      time: "09:00",
      location: "Vereinsheim Hard",
      category: "Wettkampf",
      participants: 50,
      description: "Herbstlicher Wettkampf mit verschiedenen Disziplinen."
    },
    {
      id: 10,
      title: "Saisonabschluss-Feier",
      date: "2024-10-05",
      time: "18:00",
      location: "Hotel Seeblick",
      category: "Feier",
      participants: 100,
      description: "Gemeinsamer Ausklang der Radsportsaison 2024."
    }
  ];

  const categories = ["Alle", "Tour", "Training", "Wettkampf", "Jugend", "Familie", "Versammlung", "Feier"];

  const filteredEvents = selectedCategory === "Alle" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Tour": "bg-blue-100 text-blue-800",
      "Training": "bg-green-100 text-green-800",
      "Wettkampf": "bg-red-100 text-red-800",
      "Jugend": "bg-purple-100 text-purple-800",
      "Familie": "bg-pink-100 text-pink-800",
      "Versammlung": "bg-gray-100 text-gray-800",
      "Feier": "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const currentMonth = selectedMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });

  const changeMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedMonth);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setSelectedMonth(newDate);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Termine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planen Sie Ihre Teilnahme an unseren Veranstaltungen. 
            Von entspannten Touren bis hin zu spannenden Wettkämpfen ist für jeden etwas dabei.
          </p>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-lg shadow">
          <button 
            onClick={() => changeMonth('prev')}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Vorheriger Monat
          </button>
          <h2 className="text-2xl font-bold text-gray-900 capitalize">{currentMonth}</h2>
          <button 
            onClick={() => changeMonth('next')}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            Nächster Monat
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Kategorien:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                  {event.category}
                </span>
                <div className="text-right text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString('de-DE', { 
                    day: 'numeric', 
                    month: 'short' 
                  })}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  <span>{new Date(event.date).toLocaleDateString('de-DE', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
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
                  <span>{event.participants} Teilnehmer erwartet</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Anmelden
              </button>
            </div>
          ))}
        </div>

        {/* Calendar Integration */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Termine in Ihren Kalender importieren
          </h3>
          <p className="text-gray-600 mb-6">
            Laden Sie unseren Vereinskalender herunter und verpassen Sie keine Veranstaltung mehr.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Google Calendar
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
              Outlook Calendar
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              iCal Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termine;
