import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Raj Patel",
    location: "Mumbai",
    initial: "R",
    rating: 5,
    date: "2025-12-10",
    text: "Madhusudhan ji provided the most authentic spiritual experience. His knowledge of the sacred sites and their history made our journey truly meaningful. Best Vrindavan tour guide!",
  },
  {
    name: "Sunita Sharma",
    location: "Delhi",
    initial: "S",
    rating: 5,
    date: "2026-01-15",
    text: "The 84 kos yatra was life-changing. Professional service, comfortable arrangements, and deep spiritual insights throughout the journey. Highly recommend for Braj pilgrimage.",
  },
  {
    name: "Ankit Gupta",
    location: "Pune",
    initial: "A",
    rating: 5,
    date: "2026-02-20",
    text: "Exceptional service and genuine care for pilgrims. Madhusudhan ji's guidance made our Vrindavan visit deeply spiritual and memorable. 5 stars without hesitation!",
  },
];

// JSON-LD Review aggregate schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vrindavantirth.com/#localbusiness",
  name: "Vrindavan Tirth",
  url: "https://vrindavantirth.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.date,
    reviewBody: t.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Vrindavan Tirth",
      "@id": "https://vrindavantirth.com/#localbusiness",
    },
  })),
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials" aria-label="Pilgrim Testimonials">
      {/* JSON-LD Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema, null, 2) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-brown mb-6">
            What Pilgrims <span className="text-saffron">Say</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experiences and testimonials from our satisfied spiritual travelers
          </p>
          {/* Aggregate rating display */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-semibold">5.0</span>
            <span className="text-gray-400">· Based on 47+ pilgrim reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-saffron/5 to-deep-orange/5 hover:shadow-lg transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Review"
            >
              <CardContent className="p-8">
                {/* itemReviewed — required by Google for valid Review rich results */}
                <div
                  itemProp="itemReviewed"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                  className="hidden"
                >
                  <meta itemProp="name" content="Vrindavan Tirth" />
                  <meta itemProp="url" content="https://vrindavantirth.com" />
                </div>
                <meta itemProp="datePublished" content={testimonial.date} />
                <div
                  itemScope
                  itemType="https://schema.org/Rating"
                  itemProp="reviewRating"
                >
                  <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                  <meta itemProp="bestRating" content="5" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-golden text-lg">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed" itemProp="reviewBody">
                  "{testimonial.text}"
                </p>
                <div
                  className="flex items-center"
                  itemScope
                  itemType="https://schema.org/Person"
                  itemProp="author"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-dark-brown" itemProp="name">
                      {testimonial.name}
                    </div>
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
