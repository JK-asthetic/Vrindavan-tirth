import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import local images (update file names/paths as needed)
import temp1 from "@/assets/temp1.jpg";
import temp2 from "@/assets/temp2.jpg";
import temp3 from "@/assets/temp3.jpg";
import temp4 from "@/assets/temp4.jpg";
import temp5 from "@/assets/temp5.jpg";
import temp6 from "@/assets/temp6.jpg";
import temp7 from "@/assets/temp7.jpg";
import temp8 from "@/assets/temp8.jpg";
import temp9 from "@/assets/temp9.jpg";
import temp10 from "@/assets/temp10.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: temp1,
      alt: "Beautiful Hindu temple with intricate architecture",
      place: "Madan Mohan ji Temple",
    },
    {
      src: temp4,
      alt: "Traditional Indian auto-rickshaw for local temple transportation",
      place: "Vaisno Devi Temple",
    },
    {
      src: temp2,
      alt: "Sacred pilgrimage site with devotees offering prayers",
      place: "Radha Raman Temple",
    },
    {
      src: temp3,
      alt: "Ornate Hindu temple with golden domes and spiritual architecture",
      place: "Prem Mandir",
    },
    {
      src: temp5,
      alt: "Traditional decorated Indian bus for pilgrimage transportation",
      place: "Rang Ji temple",
    },
    {
      src: temp8,
      alt: "Detailed view of intricate Hindu temple carvings and sacred symbols",
      place: "Banke Bihari Temple",
    },
    {
      src: temp10,
      alt: "Temple lighting during festive celebration",
      place: "Govind dev Ji",
    },
    { src: temp9, alt: "Sunset at serene temple garden", place: "Nidhivan" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-slate-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Sacred <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Glimpses of our spiritual journeys and the divine beauty of
            Vrindavan Dham
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm font-semibold text-white">
                  {image.place}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
