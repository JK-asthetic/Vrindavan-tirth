import about from '@/Assets/about.jpg';
import { HomeFAQSchema } from './SEOSchema';

const faqs = [
  {
    question: "What is the best tour package for first-time Vrindavan visitors?",
    answer: "For first-time visitors, our 1 Day Vrindavan Tour at ₹2,100 is the best choice. It covers the most sacred temples including Banke Bihari Ji, Prem Mandir, Nidhivan, and more — all with a professional Brijwasi guide explaining the spiritual significance.",
  },
  {
    question: "How do I book a Vrindavan tour with Madhusudan Pandit Ji?",
    answer: "You can book directly by calling or WhatsApp at +91 6395809345. We arrange tours for individuals, families, and groups all year round. Best to book 2-3 days in advance for weekends.",
  },
  {
    question: "What is the Braj 84 Kos Yatra?",
    answer: "The Braj 84 Kos Yatra is the most comprehensive traditional Hindu pilgrimage covering 252 km of sacred Braj Mandal — including Vrindavan, Mathura, Govardhan, Radha Kund, Barsana, Nandgaon, Gokul and 50+ sacred sites. Our 7+ day guided package costs ₹15,000 per person.",
  },
  {
    question: "What temples are covered in the 3 Day Vrindavan-Mathura-Barsana tour?",
    answer: "The 3-day tour covers Krishna Janmabhoomi in Mathura, Gokul sacred sites, Govardhan Parikrama, Radha Kund, Radha Rani Temple and Rangili Mahal in Barsana, and 13+ major temples in Vrindavan including Banke Bihari Ji, Prem Mandir, Nidhivan, Ranganath Ji, and more.",
  },
  {
    question: "Is transportation included in the Vrindavan tour packages?",
    answer: "Transportation arrangements can be discussed based on your requirements. Our packages include expert guide services, temple entry coordination, spiritual commentary, and prasad. Please contact us at +91 6395809345 for custom package configurations.",
  },
  {
    question: "What is the best time to visit Vrindavan?",
    answer: "Vrindavan is beautiful all year round, but the best times are October–March (cool weather) and during festivals like Holi, Janmashtami, Radhashtami, and Diwali for a deeply spiritual experience. Avoid May–June due to intense heat.",
  },
];

export default function About() {
  return (
    <>
      {/* Inject FAQ JSON-LD for rich results */}
      <HomeFAQSchema faqs={faqs} />

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-brown mb-6">
                <span className="text-saffron">Brajwasi Madhusudan Pandit JI</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We are <strong>professional Brijwasi guides of Vrindavan Dham</strong> with deep
                spiritual knowledge and decades of experience leading pilgrims through the sacred
                lands of Vrindavan, Mathura, Barsana, and the complete Braj Mandal.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our expert guidance covers every significant site — from the famous{" "}
                <strong>Banke Bihari Ji Temple</strong> and <strong>Prem Mandir</strong>{" "}
                in Vrindavan to <strong>Krishna Janmabhoomi</strong> in Mathura and{" "}
                <strong>Radha Rani Temple</strong> in Barsana.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We conduct the complete <strong>84 Kos Braj Yatra</strong> from Shri Dham Vrindavan
                — offering professional pilgrimage guidance, Havan ceremonies, Prasad delivery,
                and comprehensive spiritual services.
              </p>

              <div className="bg-gradient-to-r from-saffron/10 to-golden/10 p-6 rounded-xl border-l-4 border-saffron">
                <p className="text-dark-brown font-serif text-lg italic">
                  "वृन्दावन सौं वन नहीं, नंदगाँव सौं गाँव।
                  <br />
                  बंशीवट सौं वट नहीं, कृष्ण नाम सौं नाँव।।"
                </p>
                <p className="text-sm text-gray-500 mt-2">— Ancient Braj Doha</p>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-xs text-gray-600 mt-1">Sacred Sites</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-500">47+</div>
                  <div className="text-xs text-gray-600 mt-1">Pilgrims Guided</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-500">5★</div>
                  <div className="text-xs text-gray-600 mt-1">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <img
                src={about}
                alt="Madhusudan Pandit Ji - Expert Brijwasi spiritual tour guide in Vrindavan"
                className="rounded-2xl shadow-2xl w-3/4 max-w-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-gray-600">Everything you need to know about Vrindavan tours</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-sm border border-orange-100 open:shadow-md transition-all duration-200"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                  <h3 className="font-semibold text-amber-900 text-sm md:text-base pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-orange-500 text-xl shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-orange-50 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}