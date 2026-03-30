import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Users, Camera, Star } from "lucide-react";
import { Link } from "wouter";
import temp9 from "@/Assets/temp9.jpg";
import Navigation from "@/components/Navigation";
import { TourPageSchema } from "@/components/SEOSchema";
import { useSEO } from "@/hooks/useSEO";

const PAGE_URL = "https://vrindavantirth.com/3-day-vrindavan-mathura-barsana";

const faqs = [
  {
    question: "What is covered in the 3 Day Vrindavan-Mathura-Barsana tour?",
    answer: "The 3-day tour covers Day 1: Mathura sacred sites including Krishna Janmabhoomi, Gokul temples, Govardhan and Radha Kund. Day 2: Nandgaon and Barsana including Radha Rani Temple and Rangili Mahal. Day 3: 13+ major Vrindavan temples including Banke Bihari Ji, Prem Mandir, Nidhivan, Ranganath Ji, and more.",
  },
  {
    question: "How much does the 3 Day Mathura-Vrindavan-Barsana tour cost?",
    answer: "The 3 Day Vrindavan-Mathura-Barsana tour is priced at ₹5,100 per person. This is our most popular package covering 15+ sacred sites with an expert Brijwasi guide for all 3 days.",
  },
  {
    question: "Is accommodation included in the 3 day Vrindavan tour?",
    answer: "Accommodation can be arranged separately on request. Please contact Madhusudan Pandit Ji at +91 6395809345 for customized packages that include dharamshala or hotel stays in Vrindavan.",
  },
  {
    question: "Why is Barsana famous and what is visited there?",
    answer: "Barsana is the birthplace of Goddess Radha and is famous for its spectacular Radha Rani Temple atop a hill, the Rangili Mahal, and the world-famous Lathmar Holi. Our 3-day tour covers all major Barsana sites.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://vrindavantirth.com/" },
  { name: "Tour Packages", url: "https://vrindavantirth.com/#packages" },
  { name: "3 Day Vrindavan-Mathura-Barsana Tour", url: PAGE_URL },
];

export default function ThreeDayTour() {
  useSEO({
    title: "3 Day Vrindavan-Mathura-Barsana Tour ₹5,100 | Most Popular Package | Vrindavan Tirth",
    description: "Most popular Vrindavan Mathura Barsana 3-day tour at ₹5,100/person. Visit 15+ sacred sites — Banke Bihari, Radha Rani Temple, Govardhan, Krishna Janmabhoomi & more. Expert guide. Call +91 6395809345.",
    canonical: PAGE_URL,
    keywords: "3 day Vrindavan tour, Mathura Vrindavan Barsana tour, Vrindavan Mathura tour package, Radha Rani temple Barsana tour, 3 day pilgrimage tour",
  });

  const dayWiseItinerary = [
    {
      day: "Day 1",
      title: "Mathura & Gokul Sacred Sites",
      activities: [
        { activity: "Shri Krishna Janam Bhoomi", location: "Mathura", desc: "Krishna's sacred birthplace — the most visited Hindu temple" },
        { activity: "Ramanreti", location: "Gokul", desc: "Sacred sands of Krishna's childhood play" },
        { activity: "Chita Haram Temple", location: "Gokul", desc: "Ancient temple with deep religious significance" },
        { activity: "Brahamand Ghaat", location: "Gokul", desc: "Sacred bathing ghat on the Yamuna river" },
        { activity: "Chaurasi Khamba", location: "Gokul", desc: "84-pillared ancient structure with Krishna legends" },
        { activity: "Old Gokul City", location: "Gokul", desc: "Historic town where baby Krishna was raised" },
        { activity: "Goverdhan Temple & Parikrama", location: "Goverdhan", desc: "Sacred hill lifted by Lord Krishna" },
        { activity: "Radha Kund", location: "Goverdhan", desc: "Most sacred kund in Braj" },
        { activity: "Kusum Sarovar", location: "Goverdhan", desc: "Beautiful historic reservoir" },
      ],
    },
    {
      day: "Day 2",
      title: "Nandgaon & Barsana — Radha's Abode",
      activities: [
        { activity: "Nand Bhawan", location: "Nandgaon", desc: "Home of Nanda Maharaj, Krishna's foster father" },
        { activity: "Radha Rani Temple", location: "Barsana", desc: "Famous hilltop temple — birthplace of Goddess Radha" },
        { activity: "Rangili Mahal", location: "Barsana", desc: "Site of the legendary Lathmar Holi" },
      ],
    },
    {
      day: "Day 3",
      title: "Vrindavan — Sacred Temple Circuit",
      activities: [
        { activity: "Banke Bihari Ji Temple", location: "Vrindavan", desc: "Most famous temple of Vrindavan" },
        { activity: "Ranganath Ji Temple", location: "Vrindavan", desc: "Magnificent South Indian style temple" },
        { activity: "Radharaman Ji", location: "Vrindavan", desc: "Ancient Radharaman temple with beautiful deity" },
        { activity: "Shah Ji Temple", location: "Vrindavan", desc: "Famous for its remarkable marble carvings" },
        { activity: "Nidhivan", location: "Vrindavan", desc: "Mystical forest where Krishna dances nightly" },
        { activity: "Govind Ju", location: "Vrindavan", desc: "One of the oldest temples in Vrindavan" },
        { activity: "Radha Damodar Mandir", location: "Vrindavan", desc: "Ancient temple with deep Vaishnava history" },
        { activity: "Prem Mandir", location: "Vrindavan", desc: "Spectacular white marble temple complex" },
      ],
    },
  ];

  const inclusions = [
    "Expert Brijwasi Guide (3 Days)",
    "Temple Entry Coordination",
    "Cultural Program Entry",
    "Photography Assistance",
    "Spiritual Commentary & Stories",
  ];

  const highlights = [
    "Visit 15+ Sacred Sites Across 3 Days",
    "Cultural Programs & Discourses",
    "Exclusive Temple Access",
    "Professional Photography",
    "Spiritual Discourses",
    "Local Cultural Immersion",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Tour JSON-LD Schema */}
      <TourPageSchema
        name="3 Day Vrindavan-Mathura-Barsana Tour"
        description="Most popular 3-day Braj spiritual tour covering 15+ sacred sites in Vrindavan, Mathura, Govardhan, Barsana and Nandgaon with expert Brijwasi guide."
        price="5100"
        duration="3 Days 2 Nights"
        url={PAGE_URL}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        reviewCount={47}
        ratingValue={5.0}
      />

      <Navigation />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-20 pb-0 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500 py-3">
          <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/#packages" className="hover:text-orange-500 transition-colors">Tour Packages</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-orange-600 font-medium" aria-current="page">3 Day Vrindavan-Mathura-Barsana Tour</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${temp9})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white mb-4 text-sm px-4 py-1">
              <Star className="w-4 h-4 mr-1" /> MOST POPULAR PACKAGE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              3 Day Comprehensive Tour
            </h1>
            <p className="text-xl md:text-2xl">Vrindavan · Mathura · Barsana</p>
            <p className="text-lg mt-2 opacity-90 font-semibold text-yellow-300">
              ₹5,100 per person · Book: +91 6395809345
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
                  Embark on a comprehensive <strong>3-day spiritual journey</strong> through the
                  heart of <strong>Braj Mandal</strong>. This carefully curated tour covers the
                  most sacred sites of <strong>Vrindavan, Mathura, and Barsana</strong>, offering
                  deep insights into Krishna's divine pastimes and the rich cultural heritage
                  of the region — guided by expert Brijwasi guide <strong>Madhusudan Pandit Ji</strong>.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">3 Days 2 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">1–6 People</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">3 Sacred Cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-orange-500 fill-current" />
                    <span className="text-sm">15+ Sacred Sites</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day-wise Itinerary */}
            {dayWiseItinerary.map((day, dayIndex) => (
              <Card key={dayIndex}>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-2xl font-bold text-amber-900">{day.day}</h2>
                    <Badge variant="outline" className="text-orange-500 border-orange-500">
                      {day.title}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.activities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-orange-500"
                      >
                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-amber-900 text-sm">{item.activity}</h3>
                          <p className="text-gray-500 text-xs flex items-center mt-0.5">
                            <MapPin className="w-3 h-3 mr-1" /> {item.location}
                          </p>
                          {item.desc && <p className="text-gray-600 text-xs mt-1">{item.desc}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Highlights */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">Tour Highlights</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <Camera className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
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
            <Card className="sticky top-8 border-2 border-yellow-400">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR PACKAGE
              </div>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-1">₹5,100</div>
                <p className="text-gray-500 text-sm">Per Person · 3 Days 2 Nights</p>
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
                  href={`https://api.whatsapp.com/send/?phone=916395809345&text=${encodeURIComponent("I'm interested in the 3 Day Vrindavan-Mathura-Barsana Tour (₹5,100). Please confirm availability.")}&type=phone_number&app_absent=0`}
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

            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-amber-900">Tour Info</h3>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500" /><span>3 Days 2 Nights</span></div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-orange-500" /><span>Group: 1–6 People</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /><span>Vrindavan, Mathura, Barsana</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send/?phone=916395809345&text=${encodeURIComponent("I'm interested in the 3 Day Vrindavan-Mathura-Barsana Tour (₹5,100).")}&type=phone_number&app_absent=0`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors z-50"
        aria-label="WhatsApp to book 3 Day Tour"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  );
}
