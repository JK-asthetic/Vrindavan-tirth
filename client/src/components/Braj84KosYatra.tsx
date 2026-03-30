import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Clock,
  MapPin,
  Phone,
  Users,
  Car,
  Camera,
  Star,
  Bed,
  Utensils,
  Crown,
  Heart,
  Mountain,
  Waves,
} from "lucide-react";
import temp3 from "@/Assets/temp3.jpg";
import Navigation from "@/components/Navigation";
import { TourPageSchema } from "@/components/SEOSchema";
import { useSEO } from "@/hooks/useSEO";

const PAGE_URL = "https://vrindavantirth.com/braj-84-kos-yatra";

const pageFAQs = [
  {
    question: "What is the Braj 84 Kos Yatra?",
    answer: "The Braj 84 Kos Yatra is the most sacred and comprehensive Hindu pilgrimage covering 252 kilometres (84 kos) of the Braj Mandal region, visiting 50+ sacred sites associated with Lord Krishna including Vrindavan, Mathura, Govardhan, Radha Kund, Barsana, Nandgaon, and Gokul over 7-10 days.",
  },
  {
    question: "How much does the Braj 84 Kos Yatra package cost?",
    answer: "Our complete Braj 84 Kos Yatra package costs ₹15,000 per person. This premium all-inclusive package covers expert Brijwasi guide for the entire journey, temple entry coordination, spiritual discourses, traditional yatra kit, prasad at all major sites, and medical support.",
  },
  {
    question: "How many days does the Braj 84 Kos Yatra take?",
    answer: "The Braj 84 Kos Yatra typically takes 7 to 10 days to complete. Our structured 8-day itinerary covers all major phases including Vrindavan darshan, Mathura circuit, Govardhan parikrama, Deeg, Barsana-Nandgaon circuit, sacred forests, Gokul and the yatra completion ceremony.",
  },
  {
    question: "What is included in the Braj 84 Kos Yatra package?",
    answer: "The package includes: Expert Brijwasi Guide for the complete journey, temple entry fees & donations, special prasad at all major sites, traditional yatra kit, photography & videography, spiritual discourses, cultural programs, and medical support.",
  },
];

const pageBreadcrumbs = [
  { name: "Home", url: "https://vrindavantirth.com/" },
  { name: "Tour Packages", url: "https://vrindavantirth.com/#packages" },
  { name: "Braj 84 Kos Yatra", url: PAGE_URL },
];

export default function Braj84KosYatra() {
  useSEO({
    title: "Braj 84 Kos Yatra Package ₹15,000 | Complete Sacred Pilgrimage | Vrindavan Tirth",
    description: "Book the complete Braj 84 Kos Yatra at ₹15,000/person. 7+ day pilgrimage covering 50+ sacred sites — Vrindavan, Mathura, Govardhan, Radha Kund, Barsana & more. Expert Brijwasi guide. Call +91 6395809345.",
    canonical: PAGE_URL,
    keywords: "Braj 84 kos yatra, 84 kos parikrama, Braj Mandal yatra, complete Braj pilgrimage, Govardhan parikrama, Vrindavan pilgrimage package",
  });
  const yatraPhases = [
    {
      day: "Day 1",
      title: "Yatra Commencement",
      description: "Sacred beginning with Yamuna worship and Vrindavan darshan",
      places: [
        "Chiraghat (Shri Yamuna Maharani worship)",
        "Yatra resolutions by travelers",
        "Acharya Puja",
        "Vrindavan Darshan",
      ],
    },
    {
      day: "Day 2",
      title: "Mathura Sacred Circuit",
      description:
        "Complete exploration of Krishna's birthplace and surrounding temples",
      places: [
        "Bhatrod Bihari",
        "Akrurghat",
        "Birla Mandir",
        "Janmabhoomi",
        "Potra Kund",
        "Bhuteshwar Mahadev",
        "Dwarkadhish",
        "Dhruva Tila",
        "Vishram Ghat",
        "Madhuvan",
        "Talavan",
        "Kumudavan",
        "Vrindavan rest",
      ],
    },
    {
      day: "Day 3",
      title: "Govardhan Parikrama",
      description: "Sacred hill circumambulation and surrounding holy sites",
      places: [
        "Shantanukund",
        "Shantanubihari",
        "Shri Surdasji's hymn site",
        "Mansi Ganga",
        "Chakaleshwar Mahadev",
        "Shri Hardevji",
        "Daan Ghati",
        "Chandrasarovar",
        "Govind Kund",
        "Askari's Lotha",
        "Shyamdak",
        "Jatipura",
        "Mukharvind",
        "Bahulavan",
        "Radhakund",
        "Shyamkund",
        "Shrihari Das ji's hymn site",
        "Shri Bihari ji Temple",
        "Giriraj ji",
      ],
    },
    {
      day: "Day 4",
      title: "Deeg and Sacred Kunds",
      description:
        "Royal palaces and sacred water bodies with spiritual significance",
      places: [
        "Deeg Mahal",
        "Laxman Mandir",
        "Badrinath",
        "Tripti Kund",
        "Gangotri",
        "Yamunotri",
        "Laxman Jhula",
        "Har Ki Pauri",
        "Haridwar",
        "Kedarnath",
        "Charan Pahari",
        "Gaurikund",
        "Vimal Kund",
        "Shrimadanmohan ji",
        "Gokulchandra Ji",
        "Shri Govinddev ji",
        "Mankameshwar Mahadev",
        "Shri Vrindadevi",
        "Food plate",
        "Chakratirtha",
        "Shri Baldev ji footprints",
      ],
    },
    {
      day: "Day 5",
      title: "Barsana-Nandgaon Circuit",
      description:
        "Radha's birthplace and Krishna's foster father's village exploration",
      places: [
        "Barsana",
        "Yellow Pond",
        "Morkuti",
        "Jaipur Temple",
        "Radhabagh",
        "Unchagaon",
        "Lalitasakhi Temple",
        "Chitravichitra Shila",
        "Deh Kund",
        "Triveni Ganga",
        "Prem Sarovar",
        "Sanket Vat",
        "Sanket Bihari",
        "Nandgaon",
        "Yashoda Kund",
        "Howilau",
        "Pavan Sarovar",
        "Nand Bhavan",
        "Shriaseshwar Mahadev",
        "Ter Kadamba",
        "Kokilavan",
        "Kosi",
        "Gomtikund",
        "Dwarkapuri",
      ],
    },
    {
      day: "Day 6",
      title: "Forest Vans and Sacred Sites",
      description: "Ancient forests and temples with divine pastimes",
      places: [
        "Phalen",
        "Prahlad Kund and Temple",
        "Khelvan",
        "Shergarh",
        "Ainchadouji",
        "Biharvan",
        "Akshayvat",
        "Chiraghat",
        "Katyayani Devi",
      ],
    },
    {
      day: "Day 7",
      title: "Gokul and Ancient Sites",
      description: "Krishna's childhood places and sacred wedding locations",
      places: [
        "Shri Rawal (birthplace of Shri Priya ji)",
        "Shri Gokul ji (Shri Lalji's birthplace)",
        "Ramanreti",
        "Shri Raman Bihari",
        "Mahavan",
        "Old Gokul",
        "Eighty-four pillars",
        "Brahmandghat",
        "Shri Baldev Dauji",
        "Shri Mansarovar",
        "Shripriya Priyatam's wedding place",
        "Bhandirvan",
      ],
    },
    {
      day: "Day 8",
      title: "Yatra Completion",
      description: "Sacred conclusion with community prasad and blessings",
      places: [
        "Prasad Bhandara by devotees",
        "Yatra completion ceremony",
        "Final blessings",
      ],
    },
  ];

  const inclusions = [
    "Expert Brijwasi Guide (Complete Journey)",
    "Temple Entry Fees & Donations",
    "Special Prasad at All Major Sites",
    "Traditional Yatra Kit",
    "Photography & Videography",
    "Spiritual Discourses",
    "Cultural Programs",
    "Medical Support",
  ];

  const highlights = [
    "Complete 84 Kos Traditional Yatra",
    "50+ Sacred Sites Coverage",
    "Daily Spiritual Discourses",
    "Authentic Braj Experience",
    "Professional Documentation",
    "Cultural Immersion",
    "Personalized Spiritual Guidance",
    "Group Bonding Activities",
    "Traditional Prasad",
    "Sacred Text Readings",
    "Meditation Sessions",
  ];

  const sacredSites = [
    { name: "Vrindavan", icon: Heart, description: "Krishna's playground" },
    { name: "Mathura", icon: Crown, description: "Krishna's birthplace" },
    {
      name: "Govardhan",
      icon: Mountain,
      description: "Sacred hill lifted by Krishna",
    },
    {
      name: "Radha Kund",
      icon: Waves,
      description: "Most sacred kund in Braj",
    },
  ];

  const handleBooking = () => {
    const message = `I'm interested in booking the Braj 84 Kos Yatra (₹15,000). Please provide detailed itinerary and confirm availability.`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=916395809345&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* JSON-LD Tour Schema */}
      <TourPageSchema
        name="Braj 84 Kos Yatra"
        description="Complete traditional 84 Kos Braj pilgrimage covering 252 km and 50+ sacred sites of Krishna's divine pastimes over 7-10 days."
        price="15000"
        duration="7-10 Days"
        url={PAGE_URL}
        faqs={pageFAQs}
        breadcrumbs={pageBreadcrumbs}
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
          <li className="text-orange-600 font-medium" aria-current="page">Braj 84 Kos Yatra</li>
        </ol>
      </nav>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${temp3})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white mb-4 text-lg px-4 py-2">
              <Crown className="w-5 h-5 mr-2" />
              PREMIUM SPIRITUAL JOURNEY
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Braj 84 Kos Yatra
            </h1>
            <p className="text-xl md:text-2xl">
              Complete Traditional Sacred Pilgrimage
            </p>
            <p className="text-lg mt-2 opacity-90">7+ Days · 50+ Sacred Sites · 252 km</p>
            <p className="text-base mt-1 font-semibold text-yellow-300">₹15,000 per person · Call +91 6395809345</p>
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
                <h2 className="text-3xl font-bold text-amber-900">
                  Sacred Yatra Overview
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Braj 84 Kos Yatra is the most comprehensive and
                  traditional pilgrimage covering the entire sacred land of Braj
                  Mandal. This ancient pilgrimage route, spanning 84 kos
                  (approximately 252 kilometers), takes you through every
                  significant site associated with Lord Krishna's divine
                  pastimes.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500 mb-6">
                  <p className="text-amber-900 font-serif text-lg italic">
                    "चौरासी कोस की परिक्रमा, ब्रज की सबसे पावन यात्रा"
                    <br />
                    "84 Kos pilgrimage - The most sacred journey of Braj"
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sacredSites.map((site, index) => {
                    const IconComponent = site.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 bg-white rounded-lg shadow-sm"
                      >
                        <IconComponent className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <h4 className="font-semibold text-amber-900">
                          {site.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {site.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Yatra Phases */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">
                  Yatra Journey Phases
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {yatraPhases.map((phase, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-500 pl-6 pb-6"
                    >
                      <p className="text-gray-700 mb-4">{phase.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {phase.places.map((place, placeIndex) => (
                          <div
                            key={placeIndex}
                            className="bg-orange-50 px-3 py-2 rounded-md text-sm text-amber-900"
                          >
                            <MapPin className="w-3 h-3 inline mr-1" />
                            {place}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Spiritual Significance */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">
                  Spiritual Significance
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The 84 Kos Yatra is not just a pilgrimage but a
                    transformative spiritual journey that connects devotees with
                    the divine essence of Lord Krishna. Each step of this sacred
                    path is imbued with the memories of Krishna's pastimes and
                    offers profound spiritual benefits.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">
                        Traditional Benefits
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Complete purification of soul</li>
                        <li>• Removal of all sins</li>
                        <li>• Attainment of Krishna Prema</li>
                        <li>• Spiritual enlightenment</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">
                        Personal Growth
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Deep inner peace</li>
                        <li>• Enhanced devotion</li>
                        <li>• Cultural understanding</li>
                        <li>• Lifelong memories</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">
                  Yatra Highlights
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="w-5 h-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-8 border-2 border-orange-500">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-2 text-sm font-semibold">
                PREMIUM SPIRITUAL EXPERIENCE
              </div>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  ₹15,000
                </div>
                <p className="text-gray-600">Per Person</p>
                <p className="text-sm text-green-600 font-semibold">
                  Complete 7+ Day Journey
                </p>
                <p className="text-xs text-gray-500">
                  All-inclusive premium package
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-amber-900">
                    Complete Package Includes:
                  </h3>
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 hover:shadow-lg transition-all duration-300 py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Call us: +91 6395809345
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>Limited seats per batch</p>
                </div>
              </CardContent>
            </Card>

            {/* Yatra Information */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-amber-900">
                  Yatra Information
                </h3>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-orange-500 mr-2" />
                  <span>7-10 Days Duration</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Small Groups (5-15 people)</span>
                </div>
                <div className="flex items-center">
                  <Car className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Private AC Transportation</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Comfortable Accommodation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://api.whatsapp.com/send/?phone=916395809345&text=${encodeURIComponent("I'm interested in booking the Braj 84 Kos Yatra (₹15,000). Please provide detailed itinerary and confirm availability.")}&type=phone_number&app_absent=0`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors z-50"
        aria-label="WhatsApp to book Braj 84 Kos Yatra"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  );
}
