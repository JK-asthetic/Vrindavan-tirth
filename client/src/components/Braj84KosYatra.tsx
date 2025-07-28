import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import temp3 from "@/assets/temp3.jpg";

export default function Braj84KosYatra() {
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
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918360424383&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
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
              Complete Traditional Pilgrimage
            </p>
            <p className="text-lg mt-2 opacity-90">7+ Days Sacred Journey</p>
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
                  Call us: +91 81712176533
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
    </div>
  );
}
