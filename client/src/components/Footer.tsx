export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <svg
              className="w-8 h-8 text-orange-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-2xl font-bold">Vrindavan tirth</span>
          </div>
          <p className="text-white/70 mb-6">
            Professional Vrindavan Tour Guide Services
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="tel:+9181712176533"
              className="text-white/70 hover:text-orange-400 transition-colors"
              aria-label="Call us"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm">
              © 2024 Vrindavan tirth. All rights reserved. | Professional
              Vrindavan Tour Guide Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
