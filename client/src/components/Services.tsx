import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Car, Hotel, Flame, Gift, Heart, Book } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: UserCheck,
      title: "Professional Guide Service",
      description: "Expert spiritual guidance with deep knowledge of Vrindavan's history, culture, and religious significance. Personal attention to ensure authentic spiritual experience."
    },
    {
      icon: Car,
      title: "Travel & Transportation",
      description: "Comfortable and reliable transportation services with traditional and modern vehicles. Safe travel arrangements for all pilgrimage destinations."
    },
    {
      icon: Hotel,
      title: "Accommodation Services",
      description: "Comfortable lodging arrangements from budget-friendly to luxury accommodations. Clean, peaceful stays near temples and sacred sites."
    }
  ];

  const additionalServices = [
    { icon: Flame, title: "Havan Ceremonies" },
    { icon: Gift, title: "Prasad Delivery" },
    { icon: Heart, title: "Puja Arrangements" },
    { icon: Book, title: "Spiritual Consultation" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-brown mb-6">
            Our <span className="text-saffron">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive services to make your spiritual journey comfortable and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <Card className="bg-gradient-to-br from-saffron/10 to-deep-orange/10 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-gradient-saffron w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-brown mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-saffron/5 to-deep-orange/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-dark-brown text-center mb-8">Additional Spiritual Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {additionalServices.map((service, index) => (
                <div key={index} className="group">
                  <service.icon className="w-12 h-12 text-saffron mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-dark-brown font-semibold">{service.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
