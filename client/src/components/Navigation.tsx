import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = () => (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className="text-amber-900 hover:text-orange-500 transition-colors"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-amber-900 hover:text-orange-500 transition-colors"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("packages")}
        className="text-amber-900 hover:text-orange-500 transition-colors"
      >
        Tour Packages
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className="text-amber-900 hover:text-orange-500 transition-colors"
      >
        Services
      </button>
      <button
        onClick={() => scrollToSection("gallery")}
        className="text-amber-900 hover:text-orange-500 transition-colors"
      >
        Gallery
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-amber-900 hover:text-orange-500 transition-colors"
      >
        Contact
      </button>
    </>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-xl font-bold text-amber-900">
              Vrindavan tirth
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => window.open("tel:+9181712176533")}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-amber-900"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white"
              >
                <div className="flex flex-col space-y-6 mt-6">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
