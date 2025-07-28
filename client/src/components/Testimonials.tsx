import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Raj Patel",
      location: "Mumbai",
      initial: "R",
      rating: 5,
      text: "Madhusudhan ji provided the most authentic spiritual experience. His knowledge of the sacred sites and their history made our journey truly meaningful."
    },
    {
      name: "Sunita Sharma",
      location: "Delhi",
      initial: "S",
      rating: 5,
      text: "The 84 kos yatra was life-changing. Professional service, comfortable arrangements, and deep spiritual insights throughout the journey."
    },
    {
      name: "Ankit Gupta",
      location: "Pune",
      initial: "A",
      rating: 5,
      text: "Exceptional service and genuine care for pilgrims. Madhusudhan ji's guidance made our Vrindavan visit deeply spiritual and memorable."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-brown mb-6">
            What Pilgrims <span className="text-saffron">Say</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experiences and testimonials from our satisfied spiritual travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-saffron/5 to-deep-orange/5 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-golden text-lg">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-dark-brown">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
