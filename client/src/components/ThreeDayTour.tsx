import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import temp9 from "@/assets/temp9.jpg";
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
} from "lucide-react";

export default function ThreeDayTour() {
  const dayWiseItinerary = [
    {
      day: "Day 1",
      title: "Mathura & Gokul Exploration",
      activities: [
        { activity: "Shri Krishna Janam Bhoomi", location: "Mathura" },
        { activity: "Ramanreti", location: "Gokul" },
        { activity: "Chita Haram Temple", location: "Gokul" },
        { activity: "Brahamand Ghaat", location: "Gokul" },
        { activity: "Chaurasi Khmaba", location: "Gokul" },
        { activity: "Old Gokul City", location: "Gokul" },
        { activity: "Goverdhan Temple", location: "Goverdhan" },
        { activity: "Radha Kund", location: "Goverdhan" },
        { activity: "Kusum Sarovar", location: "Goverdhan" },
      ],
    },
    {
      day: "Day 2",
      title: "Nandgaon & Barsana Journey",
      activities: [
        { activity: "Nand Bhawan", location: "Nandgaon" },
        { activity: "Radha Rani Temple", location: "Barsana" },
        { activity: "Rangili Mahal", location: "Barsana" },
      ],
    },
    {
      day: "Day 3",
      title: "Vrindavan Sacred Sites",
      activities: [
        { activity: "Banke Bihari Ji", location: "Vrindavan" },
        { activity: "Ranganath Ji Temple", location: "Vrindavan" },
        { activity: "Radharaman Ji", location: "Vrindavan" },
        { activity: "Shah Ji Temple", location: "Vrindavan" },
        { activity: "Nidhivan", location: "Vrindavan" },
        { activity: "Govind Ju", location: "Vrindavan" },
        { activity: "Radhasyam-Sundar Mandir", location: "Vrindavan" },
        { activity: "Radha Damodar Mandir", location: "Vrindavan" },
        { activity: "Mirabal Temple", location: "Vrindavan" },
        { activity: "Kaach Ka Mandir", location: "Vrindavan" },
        { activity: "Gokul Nanda Temple", location: "Vrindavan" },
        { activity: "Prem Mandir", location: "Vrindavan" },
        { activity: "Mata Vaishno Devi", location: "Vrindavan" },
      ],
    },
  ];

  const inclusions = [
    "Expert Brijwasi Guide (3 Days)",
    "Temple Entry Fees",
    "Cultural Program Entry",
    "Photography Assistance",
    "Spiritual Commentary & Stories",
  ];

  const highlights = [
    "Visit 15+ Sacred Sites",
    "Cultural Programs",
    "Exclusive Temple Access",
    "Professional Photography",
    "Spiritual Discourses",
    "Local Cultural Immersion",
  ];

  const handleBooking = () => {
    const message = `I'm interested in booking the 3 Day Vrindavan-Mathura-Barsana Tour (₹5,100). Please provide more details and confirm availability.`;
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
          backgroundImage: `url(${temp9})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white mb-4">
              <Star className="w-4 h-4 mr-1" />
              MOST POPULAR
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              3 Day Comprehensive Tour
            </h1>
            <p className="text-xl md:text-2xl">Vrindavan • Mathura • Barsana</p>
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
                  Tour Overview
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Embark on a comprehensive 3-day spiritual journey through the
                  heart of Braj Mandal. This carefully curated tour covers the
                  most sacred sites of Vrindavan, Mathura, and Barsana, offering
                  deep insights into Krishna's divine pastimes and the rich
                  cultural heritage of the region.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-500 mr-2" />
                    <span>3 Days 2 Nights</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-orange-500 mr-2" />
                    <span>1-6 People</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day-wise Itinerary */}
            {dayWiseItinerary.map((day, dayIndex) => (
              <Card key={dayIndex}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-amber-900">
                      {day.day}
                    </h2>
                    <Badge
                      variant="outline"
                      className="text-orange-500 border-orange-500"
                    >
                      {day.title}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.activities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-3 bg-white rounded-lg shadow-sm border-l-4 border-orange-500"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-amber-900">
                            {item.activity}
                          </h4>
                          <p className="text-gray-600 text-sm flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Tour Highlights */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">
                  Tour Highlights
                </h2>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-8 border-2 border-yellow-400">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR PACKAGE
              </div>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  ₹5,100
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-amber-900">
                    What's Included:
                  </h3>
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 hover:shadow-lg transition-all duration-300 py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Call us: +91 81712176533
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
