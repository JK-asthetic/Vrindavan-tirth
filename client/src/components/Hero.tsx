import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import main from "@/assets/main.jpg";

export default function Hero() {
  const scrollToPackages = () => {
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Grey overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/80 z-10"></div>

      {/* Optimized image with loading and fallback */}
      <img
        src={main}
        alt="Beautiful Hindu temple architecture in Vrindavan"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.style.display = "none";
          if (img.parentElement) {
            img.parentElement.style.backgroundColor = "#1e293b"; // slate-800 fallback
          }
        }}
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Experience Divine
          <span className="text-amber-400 block">Vrindavan</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
          Professional Brijwasi guide for spiritual journeys through sacred
          lands
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToPackages}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <MapPin className="w-5 h-5 mr-2" />
            View Tour Packages
          </Button>
          <Button
            onClick={() => window.open("tel:+918360424383")}
            variant="secondary"
            size="lg"
            className="bg-white/90 text-slate-800 hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 mr-2" />
            +91 8171217653
          </Button>
        </div>
      </div>
    </section>
  );
}
