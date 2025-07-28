import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, Phone, Users, Car, Camera } from "lucide-react";
import temp10 from "@/assets/temp10.jpg";
export default function OneDayVrindavanTour() {
  const itinerary = [
    {
      activity: "Sri Krishna Janmasthan Temple",
      location: "Mathura",
      description:
        "The sacred cell where Lord Krishna's parents were imprisoned by Kansa",
    },
    {
      activity: "Gokul Temple",
      location: "Gokul",
      description:
        "Town of Lord Krishna's early years with divine play locations",
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
    "Visit 6+ Sacred Temples",
    "Authentic Spiritual Experience",
    "Professional Photography",
    "Traditional Prasad",
    "Yamuna Aarti Experience",
    "Cultural Insights",
  ];

  const handleBooking = () => {
    const message = `I'm interested in booking the 1 Day Vrindavan Tour (₹2,100). Please provide more details and confirm availability.`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${temp10})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              1 Day Vrindavan Tour
            </h1>
            <p className="text-xl md:text-2xl">
              Complete Spiritual Journey in One Day
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
                <h2 className="text-3xl font-bold text-amber-900">
                  Tour Overview
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Experience the divine essence of Vrindavan Dham in a single
                  day with our expertly crafted tour. Visit the most sacred
                  temples, participate in traditional ceremonies, and immerse
                  yourself in the spiritual atmosphere that has attracted
                  devotees for centuries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-500 mr-2" />
                    <span>12 Hours Duration</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-orange-500 mr-2" />
                    <span>1-6 People</span>
                  </div>
               
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-bold text-amber-900">
                  Detailed Itinerary
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {itinerary.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500"
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
            <Card className="sticky top-8">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  ₹2,100
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

            {/* Important Notes */}
          </div>
        </div>
      </div>
    </div>
  );
}
