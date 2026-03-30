import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white py-12" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Vrindavan Tirth" />
      <meta itemProp="telephone" content="+91-6395809345" />
      <meta itemProp="url" content="https://vrindavantirth.com" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-2xl font-bold" itemProp="name">Vrindavan Tirth</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4" itemProp="description">
              Professional Brijwasi guide services for authentic spiritual pilgrimages through 
              Vrindavan Dham, Mathura, Barsana and the sacred Braj Mandal.
            </p>
            {/* Rating badge */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
              <span className="text-white/70 text-sm ml-1">5.0 · 47+ pilgrims guided</span>
            </div>
          </div>

          {/* Tour Packages — Internal Links */}
          <div>
            <h3 className="text-lg font-bold text-orange-300 mb-4">Tour Packages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-orange-400 transition-colors">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link href="/1-day-vrindavan" className="text-white/70 hover:text-orange-400 transition-colors">
                  📍 1 Day Vrindavan Tour — ₹2,100
                </Link>
              </li>
              <li>
                <Link href="/3-day-vrindavan-mathura-barsana" className="text-white/70 hover:text-orange-400 transition-colors">
                  📍 3 Day Mathura-Barsana Tour — ₹5,100
                </Link>
              </li>
              <li>
                <Link href="/braj-84-kos-yatra" className="text-white/70 hover:text-orange-400 transition-colors">
                  📍 Braj 84 Kos Yatra — ₹15,000
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address (NAP) */}
          <div itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="text-lg font-bold text-orange-300 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                <address className="not-italic" itemProp="address">
                  <span itemProp="streetAddress">Vrindavan Dham</span>,{" "}
                  <span itemProp="addressLocality">Vrindavan</span>,{" "}
                  <span itemProp="addressRegion">Uttar Pradesh</span>{" "}
                  <span itemProp="postalCode">281121</span>,{" "}
                  <span itemProp="addressCountry">India</span>
                </address>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+916395809345" className="hover:text-orange-400 transition-colors" itemProp="telephone">
                  +91 6395809345
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* WhatsApp */}
                <svg className="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <a
                  href="https://api.whatsapp.com/send/?phone=916395809345&text=I'm%20interested%20in%20booking%20a%20Vrindavan%20tour&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/50">
                <svg className="w-4 h-4 text-orange-400/60 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                Open Daily: 6:00 AM – 9:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm text-center">
            © {currentYear} Vrindavan Tirth. All rights reserved. | Professional Vrindavan Tour Guide — Braj Mandal
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <span>Vrindavan · Mathura · Barsana · Govardhan · Nandgaon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
