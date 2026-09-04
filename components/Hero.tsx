import React, { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const Hero: React.FC = () => {
  const bookingLink = "/contact";

  const imageUrl =
    "https://i.ibb.co/kfWGzg6/Chat-GPT-Image-Sep-4-2026-08-44-20-AM.png";

  const [isImageOpen, setIsImageOpen] = useState(false);

  // إغلاق الصورة بزر ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // منع Scroll عند فتح الصورة
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isImageOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isImageOpen]);

  return (
    <>
      <section className="bg-[#0a0d1f] text-white pt-12 md:pt-20 pb-16 md:pb-28 px-4 sm:px-10 md:px-20 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* الصورة - تظهر أولاً في الهاتف */}
          <div className="w-full md:w-5/12 relative order-1">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00c9ff] to-[#3b82f6] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />

              {/* Image Frame */}
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="relative aspect-video w-full rounded-2xl overflow-hidden border-[6px] border-[#1e293b] shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-black cursor-pointer block"
                aria-label="تكبير الصورة"
              >
                <img
                  src={imageUrl}
                  alt="Miloud Boudjellal - Media Buyer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <ZoomIn size={30} className="text-white" />
                  </div>
                </div>

                {/* Fake UI Elements */}
                <div className="absolute top-4 left-4 flex gap-2 pointer-events-none opacity-60">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>

                {/* Bottom Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden pointer-events-none">
                  <div className="h-full bg-[#00c9ff] w-1/3 shadow-[0_0_10px_#00c9ff]" />
                </div>
              </button>
            </div>

            {/* Background Glows */}
            <div className="absolute -z-10 -bottom-16 -left-16 w-56 h-56 bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute -z-10 -top-16 -right-16 w-56 h-56 bg-cyan-400/10 rounded-full blur-[100px]" />

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#0a0d1f] border border-white/10 p-3 md:p-5 rounded-2xl shadow-2xl z-20 backdrop-blur-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                </div>

                <div className="text-right">
                  <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">
                    الحالة المباشرة
                  </p>

                  <p className="text-xs md:text-sm font-black text-white">
                    تحليل استراتيجية 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* النص - يظهر بعد الصورة في الهاتف */}
          <div className="w-full md:w-7/12 text-right order-2">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-black mb-6 md:mb-10 leading-[1.6] md:leading-[1.4] tracking-tight">
              نساعد أصحاب التجارة الإلكترونية على تفجير عدد المبيعات وحل مشاكل
              الحسابات الإعلانية.
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm md:text-lg mb-8 md:mb-12 max-w-2xl ml-auto leading-[2] md:leading-[1.8] opacity-80">
              توقف عن إضاعة الوقت والمال في الحملات الإعلانية الخاطئة والغير
              فعالة. لقد حان الوقت لتجعل ميزانيتك الإعلانية فعالة وتفجر مبيعاتك
              بدون توقف.
            </p>

            <div className="flex justify-start md:block">
              <a
                href={bookingLink}
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 md:py-5 px-8 md:px-14 rounded-xl shadow-[0_20px_40px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all hover:-translate-y-1 text-lg md:text-xl active:scale-95"
              >
                احجز مكانك معنا الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="عرض الصورة بالحجم الكامل"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute top-5 right-5 md:top-8 md:right-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="إغلاق الصورة"
          >
            <X size={26} />
          </button>

          {/* Fullscreen Image */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={imageUrl}
              alt="Miloud Boudjellal - Media Buyer"
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_100px_rgba(0,201,255,0.15)]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
