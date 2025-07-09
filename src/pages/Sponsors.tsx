
import { ExternalLink } from 'lucide-react';

const Sponsors = () => {
  const mainSponsors = [
    {
      name: "Bike Shop Vorarlberg",
      logo: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Unser Hauptsponsor für Fahrräder und Equipment. Spezielle Konditionen für Vereinsmitglieder.",
      website: "https://bikeshop-vorarlberg.at",
      category: "Hauptsponsor"
    },
    {
      name: "Hotel Seeblick Hard",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Gastgeber für unsere Vereinsveranstaltungen und Unterbringung für auswärtige Gäste.",
      website: "https://hotel-seeblick-hard.at",
      category: "Hauptsponsor"
    }
  ];

  const supportingSponsors = [
    {
      name: "Café Rad & Tat",
      logo: "https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Beliebter Treffpunkt nach den Trainingsfahrten.",
      website: "https://cafe-rad-tat.at",
      category: "Partner"
    },
    {
      name: "Sport Medical Center",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Medizinische Betreuung und Sportverletzungen.",
      website: "https://sportmedical-center.at",
      category: "Partner"
    },
    {
      name: "Fitness Studio Hard",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Krafttraining und Rehabilitation für unsere Athleten.",
      website: "https://fitness-hard.at",
      category: "Partner"
    },
    {
      name: "Elektro Müller GmbH",
      logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "E-Bike Service und Elektroinstallationen.",
      website: "https://elektro-mueller.at",
      category: "Partner"
    }
  ];

  const handleSponsorClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Sponsoren
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gemeinsam stark! Unsere Partner unterstützen den RV Hard und ermöglichen 
            es uns, den Radsport in der Region zu fördern und großartige Veranstaltungen zu organisieren.
          </p>
        </div>

        {/* Main Sponsors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Hauptsponsoren
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleSponsorClick(sponsor.website)}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{sponsor.name}</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {sponsor.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{sponsor.description}</p>
                  <div className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium">
                    Website besuchen <ExternalLink className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Sponsors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Partner & Unterstützer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleSponsorClick(sponsor.website)}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{sponsor.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{sponsor.description}</p>
                  <div className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium text-sm">
                    Website <ExternalLink className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thank You Section - now placed higher */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Herzlichen Dank!
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir danken allen unseren Sponsoren und Partnern für ihre Unterstützung. 
            Durch ihre Hilfe können wir den Radsport in unserer Region fördern und 
            großartige Veranstaltungen für unsere Mitglieder und die Gemeinschaft organisieren.
          </p>
        </div>

        {/* CTA Section - smaller */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Werden Sie unser Partner!</h3>
          <p className="text-lg mb-4 opacity-90">
            Unterstützen Sie den Radsport in Hard und profitieren Sie von einer 
            starken Partnerschaft mit unserem traditionsreichen Verein.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-yellow-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
