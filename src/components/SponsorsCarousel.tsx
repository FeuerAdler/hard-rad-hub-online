
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const SponsorsCarousel = () => {
  const sponsors = [
    {
      name: "Bike Shop Vorarlberg",
      logo: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      website: "https://bikeshop-vorarlberg.at"
    },
    {
      name: "Hotel Seeblick Hard",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      website: "https://hotel-seeblick-hard.at"
    },
    {
      name: "Café Rad & Tat",
      logo: "https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      website: "https://cafe-rad-tat.at"
    },
    {
      name: "Sport Medical Center",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      website: "https://sportmedical-center.at"
    },
    {
      name: "Fitness Studio Hard",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      website: "https://fitness-hard.at"
    },
    {
      name: "Elektro Müller GmbH",
      logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      website: "https://elektro-mueller.at"
    }
  ];

  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const handleSponsorClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Sponsoren
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Danke an unsere Partner, die den RV Hard unterstützen
          </p>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {sponsors.map((sponsor, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div 
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => handleSponsorClick(sponsor.website)}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-8">
          <a 
            href="/sponsors" 
            className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
          >
            Alle Sponsoren ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;
