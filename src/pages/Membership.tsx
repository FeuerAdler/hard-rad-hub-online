
import { Users, User, Baby, Check, Mail, Phone } from 'lucide-react';

const Membership = () => {
  const membershipOptions = [
    {
      title: "Einzelmitgliedschaft",
      icon: <User className="h-12 w-12 text-yellow-500" />,
      price: "€120",
      period: "pro Jahr",
      description: "Ideal für erwachsene Einzelpersonen ab 18 Jahren",
      features: [
        "Teilnahme an allen Vereinsaktivitäten",
        "Vereinsversicherung inklusive",
        "Rabatte bei Partnern",
        "Kostenlose Trainingsberatung",
        "Vereinstrikot inklusive",
        "Zugang zu exklusiven Events"
      ],
      popular: true
    },
    {
      title: "Kindermitgliedschaft",
      icon: <Baby className="h-12 w-12 text-blue-500" />,
      price: "€60",
      period: "pro Jahr",
      description: "Für Kinder und Jugendliche bis 17 Jahre",
      features: [
        "Altersgerechte Trainingsgruppen",
        "Vereinsversicherung inklusive",
        "Spezielle Jugendveranstaltungen",
        "Kostenlose Trainingsberatung",
        "Vereinstrikot inklusive",
        "Vergünstigte Teilnahme an Camps"
      ],
      popular: false
    },
    {
      title: "Familienmitgliedschaft",
      icon: <Users className="h-12 w-12 text-green-500" />,
      price: "€250",
      period: "pro Jahr",
      description: "Für Familien mit 2 Erwachsenen und beliebig vielen Kindern",
      features: [
        "Alle Vorteile der Einzelmitgliedschaft",
        "Für die ganze Familie",
        "Zusätzliche Familienrabatte",
        "Priorität bei Familienevents",
        "Vereinstrikots für alle inklusive",
        "Exklusive Familienausflüge"
      ],
      popular: false
    }
  ];

  const membershipProcess = [
    {
      step: 1,
      title: "Mitgliedsantrag ausfüllen",
      description: "Laden Sie das Formular herunter und füllen Sie es vollständig aus."
    },
    {
      step: 2,
      title: "Antrag einreichen",
      description: "Senden Sie den Antrag per E-Mail oder bringen Sie ihn persönlich vorbei."
    },
    {
      step: 3,
      title: "Bestätigung erhalten",
      description: "Wir bestätigen Ihre Mitgliedschaft und senden Ihnen alle wichtigen Informationen."
    },
    {
      step: 4,
      title: "Willkommen im Verein!",
      description: "Sie können sofort an allen Aktivitäten teilnehmen und Ihr Vereinstrikot abholen."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mitglied werden
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Werden Sie Teil der RV Hard Familie! Wählen Sie die passende Mitgliedschaft 
            für sich oder Ihre Familie und genießen Sie alle Vorteile unseres Vereins.
          </p>
        </div>

        {/* Membership Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {membershipOptions.map((option, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg shadow-lg p-8 text-center ${
                option.popular ? 'ring-2 ring-yellow-400 scale-105' : ''
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </span>
                </div>
              )}
              
              <div className="flex justify-center mb-4">
                {option.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">{option.price}</span>
                <span className="text-gray-600 ml-2">{option.period}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{option.description}</p>
              
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                Jetzt beitreten
              </button>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            So werden Sie Mitglied
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {membershipProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Ihre Vorteile als Mitglied
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gemeinschaft</h3>
              <p className="text-gray-600 text-sm">Teil einer aktiven Radsport-Community werden</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-gray-600 text-sm">Professionelle Trainingsbetreuung und -beratung</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Versicherung</h3>
              <p className="text-gray-600 text-sm">Umfassender Versicherungsschutz bei allen Aktivitäten</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-yellow-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Haben Sie Fragen?</h3>
          <p className="text-xl mb-6 opacity-90">
            Unser Team beantwortet gerne alle Fragen zur Mitgliedschaft im RV Hard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@rv-hard.at</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+43 123 456 789</span>
            </div>
          </div>
          
          <div className="mt-6">
            <a 
              href="/contact" 
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
