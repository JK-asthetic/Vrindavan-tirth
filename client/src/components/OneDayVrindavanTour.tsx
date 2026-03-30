import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, Phone, Users, Camera } from "lucide-react";
import { Link } from "wouter";
import temp10 from "@/Assets/temp10.jpg";
import Navigation from "@/components/Navigation";
import { TourPageSchema } from "@/components/SEOSchema";
import { useSEO } from "@/hooks/useSEO";

const PAGE_URL = "https://vrindavantirth.com/1-day-vrindavan";

const faqs = [
  {
    question: "What is included in the 1 Day Vrindavan Tour?",
    answer: "The 1 Day Vrindavan Tour includes a professional Brijwasi guide, temple entry coordination, spiritual commentary, prasad arrangements, and photography assistance. You'll visit 6+ major temples including Banke Bihari Ji, Prem Mandir, and Nidhivan.",
  },
  {
    question: "How much does the 1 Day Vrindavan Tour cost?",
    answer: "The 1 Day Vrindavan Tour is priced at ₹2,100 per person. This includes professional guide services covering all major temples and sacred sites of Vrindavan Dham.",
  },
  {
    question: "How do I book the 1 Day Vrindavan Tour?",
    answer: "Call or WhatsApp Madhusudan Pandit Ji at +91 6395809345 to book your 1 Day Vrindavan Tour. We recommend booking 2-3 days in advance, especially for weekends and festival seasons.",
  },
  {
    question: "What temples are visited on the 1 Day Vrindavan Tour?",
    answer: "The tour covers Krishna Janmasthan Temple in Mathura, Gokul Temple, Raman Reti Temple, Chaurasi Khamba, Prem Mandir, Nidhivan, and Banke Bihari Ji Temple in Vrindavan — 7 major sacred sites in one day.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://vrindavantirth.com/" },
  { name: "Tour Packages", url: "https://vrindavantirth.com/#packages" },
  { name: "1 Day Vrindavan Tour", url: PAGE_URL },
];

export default function OneDayVrindavanTour() {
  useSEO({
    title: "1 Day Vrindavan Tour Package ₹2,100 | Banke Bihari, Prem Mandir, Nidhivan | Vrindavan Tirth",
    description: "Book the best 1 Day Vrindavan Tour at ₹2,100/person. Visit 7 sacred temples — Banke Bihari Ji, Prem Mandir, Nidhivan, Gokul & more with expert Brijwasi guide. Call +91 6395809345.",
    canonical: PAGE_URL,
    keywords: "1 day Vrindavan tour, Vrindavan darshan, Banke Bihari temple tour, Prem Mandir Vrindavan, Nidhivan tour, one day Vrindavan package",
  });

  const itinerary = [
    {
      activity: "Sri Krishna Janmasthan Temple",
      location: "Mathura",
      description: "The sacred cell where Lord Krishna's parents were imprisoned by Kansa",
    },
    {
      activity: "Gokul Temple",
      location: "Gokul",
      description: "Town of Lord Krishna's early years with divine play locations",
    },
    {
      activity: "Raman Reti Temple",
      location: "Gokul",
      description: "Sacred sands where Krishna played with cowherd friends",
    },
    {
      activity: "Chaurasi Khamba",
      location: "Gokul",
      description: "Historic pillared structure with Krishna legends",
    },
    {
      activity: "Prem Mandir",
      location: "Vrindavan",
      description: "Magnificent temple devoted to Sita Ram and Radha Krishna",
    },
    {
      activity: "Nidhivan",
      location: "Vrindavan",
      description: "Sacred birthplace where Lord Krishna visits nightly",
    },
    {
      activity: "Banke Bihari Ji Temple",
      location: "Vrindavan",
      description: "Holy temple with unique darshan traditions",
    },
  ];

  const inclusions = [
    "Professional Brijwasi Guide",
    "Temple Entry Fees",
    "Photography Assistance",
    "Spiritual Commentary",
  ];

  const highlights = [
    "Visit 7 Sacred Temples",
    "Authentic Spiritual Experience",
    "Professional Photography",
    "Traditional Prasad",
    "Yamuna Aarti Experience",
    "Cultural Insights",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* JSON-LD Tour Schema */}
      <TourPageSchema
        name="1 Day Vrindavan Tour"
        description="Expert Brijwasi guided 1-day spiritual tour of Vrindavan Dham covering 7 major temples including Banke Bihari Ji, Prem Mandir, and Nidhivan."
        price="2100"
        duration="1 Day"
        url={PAGE_URL}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      <Navigation />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-20 pb-0 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500 py-3">
          <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/#packages" className="hover:text-orange-500 transition-colors">Tour Packages</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-orange-600 font-medium" aria-current="page">1 Day Vrindavan Tour</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${temp10})` }}
        aria-label="1 Day Vrindavan Tour Hero"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              1 Day Vrindavan Tour
            </h1>
            <p className="text-xl md:text-2xl">
              Complete Spiritual Journey — 7 Temples in One Day
            </p>
            <p className="text-lg mt-2 opacity-90 font-semibold text-yellow-300">
              ₹2,100 per person · Book: +91 6395809345
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">Tour Overview</h2>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Experience the <strong>divine essence of Vrindavan Dham</strong> in a single
                  day with our expertly crafted tour. Visit the most sacred temples, participate
                  in traditional ceremonies, and immerse yourself in the spiritual atmosphere
                  that has attracted devotees for centuries. Our expert Brijwasi guide,
                  <strong> Madhusudan Pandit Ji</strong>, ensures a deeply authentic and
                  meaningful pilgrimage experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-500 mr-2" />
                    <span>12 Hours Duration</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-orange-500 mr-2" />
                    <span>1–6 People</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    <span>Vrindavan, Mathura, Gokul</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">Detailed Itinerary</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {itinerary.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500"
                    >
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-amber-900">{item.activity}</h3>
                        <p className="text-gray-600 text-sm flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" /> {item.location}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">Tour Highlights</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <Camera className="w-5 h-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">Frequently Asked Questions</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group bg-orange-50 rounded-lg open:shadow-sm">
                      <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                        <h3 className="font-medium text-amber-900 text-sm pr-4">{faq.question}</h3>
                        <span className="text-orange-500 text-xl shrink-0 transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-8 border-2 border-orange-400">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center py-2 text-sm font-semibold">
                BOOK YOUR SPIRITUAL TOUR
              </div>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-1">₹2,100</div>
                <p className="text-gray-500 text-sm">Per Person · All Inclusive</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-amber-900">What's Included:</h3>
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+916395809345"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 hover:shadow-lg transition-all duration-300 py-3 rounded-md font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call: +91 6395809345
                </a>

                <a
                  href={`https://api.whatsapp.com/send/?phone=916395809345&text=${encodeURIComponent("I'm interested in booking the 1 Day Vrindavan Tour (₹2,100). Please provide more details.")}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white hover:bg-green-600 transition-colors py-3 rounded-md font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp to Book
                </a>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-amber-900">Tour Info</h3>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Duration: Full Day (12 hrs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span>Group Size: 1–6 People</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Starting Point: Vrindavan</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://api.whatsapp.com/send/?phone=916395809345&text=${encodeURIComponent("I'm interested in the 1 Day Vrindavan Tour (₹2,100).")}&type=phone_number&app_absent=0`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors z-50"
        aria-label="WhatsApp to book 1 Day Vrindavan Tour"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  );
}
