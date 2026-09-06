import React, { useState } from "react";
import { Link } from "react-router-dom";

const Results: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://i.ibb.co/jPdvvyjn/3.webp",
    "https://i.ibb.co/gbmzTVdM/4.webp",
    "https://i.ibb.co/Xfb3sbgg/5.webp",
    "https://i.ibb.co/QFSpQzxG/6.webp",
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-[#f8f8f6] px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-center mb-12 md:mb-20 text-[#0a0d1f] tracking-tight">
            بعض النتائج لشركائنا
          </h2>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group block w-full text-left cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-[#0a0d1f]/20 rounded-2xl"
                aria-label={`تكبير النتيجة ${index + 1}`}
              >
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md md:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <img
                    src={image}
                    alt={`نتيجة ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Case Studies Button */}
          <div className="flex justify-center mt-12 md:mt-16">
            <Link
              to="/casestudy"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#0a0d1f] text-white text-base sm:text-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#11162d] focus:outline-none focus:ring-4 focus:ring-[#0a0d1f]/20"
            >
              شاهد دراسة حالات حية
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* Full Screen Image Viewer */}
      {/* ========================= */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="عرض الصورة بحجم كبير"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0a0d1f] flex items-center justify-center text-2xl font-bold shadow-xl hover:bg-gray-100 hover:scale-105 transition-all"
            aria-label="إغلاق"
          >
            ×
          </button>

          {/* Full Screen Container */}
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="النتيجة بحجم كبير"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Results;
