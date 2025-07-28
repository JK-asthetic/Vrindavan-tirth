import about from '@/Assets/about.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-brown mb-6">
              <span className="text-saffron">Brajwasi Madhusudan Pandit JI</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are professional Brijwasi guides of Vrindavan Dham with deep
              spiritual knowledge and years of experience. Our mission is to
              provide authentic spiritual experiences through the sacred lands
              of Vrindavan and Braj.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We conduct the complete 84 kos journey from Shri Dham Vrindavan to
              Braj, offering professional guidance, Havan ceremonies, Prasad
              delivery, and comprehensive spiritual services.
            </p>

            <div className="bg-gradient-to-r from-saffron/10 to-golden/10 p-6 rounded-xl border-l-4 border-saffron">
              <p className="text-dark-brown font-serif text-lg italic">
                "वृन्दावन सौं वन नहीं, नंदगाँव सौं गाँव।
                <br />
                बंशीवट सौं वट नहीं, कृष्ण नाम सौं नाँव।।"
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src={about}
              alt="Madhusudhan Sharam - Professional spiritual tour guide"
              className="rounded-2xl shadow-2xl w-3/4 max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}