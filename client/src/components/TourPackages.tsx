import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Link } from "wouter";
import temp10 from "@/assets/temp10.jpg";
import temp3 from "@/assets/temp3.jpg";
import temp9 from "@/assets/temp9.jpg";



export default function TourPackages() {
  const packages = [
    {
      id: 1,
      title: "1 Day Vrindavan Tour",
      slug: "1-day-vrindavan",
      description: "Complete one-day spiritual journey covering major temples and sacred sites of Vrindavan Dham",
      price: "₹2,100",
      duration: "1 Day",
      image: temp10,
      alt: "One day Vrindavan temple tour package"
    },
    {
      id: 2,
      title: "3 Day Vrindavan-Mathura-Barsana Tour",
      slug: "3-day-vrindavan-mathura-barsana",
      description: "Comprehensive spiritual journey covering Vrindavan, Mathura, and Barsana with detailed guidance",
      price: "₹5,100",
      duration: "3 Days",
      popular: true,
      image: temp9,
      alt: "Three day comprehensive Vrindavan Mathura Barsana tour"
    },
    {
      id: 3,
      title: "Braj 84 Kos Yatra",
      slug: "braj-84-kos-yatra",
      description: "Complete traditional pilgrimage covering all 84 kos of sacred Braj Mandal with experienced guidance",
      price: "₹15,000",
      duration: "7+ Days",
      image: temp3,
      alt: "Braj 84 kos spiritual yatra pilgrimage journey"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Our <span className="text-orange-500">Tour Packages</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose from our carefully curated spiritual journey packages designed to provide you with the most authentic Vrindavan experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                pkg.popular ? 'border-2 border-yellow-400' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-2xl font-bold text-amber-900">{pkg.title}</h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600">{pkg.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-orange-500">{pkg.price}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      Duration
                    </div>
                    <div className="font-semibold text-amber-900">{pkg.duration}</div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Link href={`/${pkg.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 hover:shadow-lg transition-all duration-300">
                    See Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
