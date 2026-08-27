import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

const Hero: React.FC = () => {
  const bookingLink = "https://wa.me/213777651022";

  // Direct Cloudinary MP4 video URL
  const videoUrl =
    "https://res.cloudinary.com/dsqon0kae/video/upload/v1769826493/AQNEga-9WI-RaduMnJMMTgJc8smGz4a-mMXk_7gYMNVShnmd_P_M1plQc9xmS5I89npsI0VzyREXFwx-s70e2xcfItBRYc3L3kcfAECN2QM3Ww_lgwqah.mp4";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="bg-[#0a0d1f] text-white pt-12 md:pt-20 pb-16 md:pb-28 px-4 sm:px-10 md:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Right Side: Text (RTL) */}
        <div className="w-full md:w-7/12 text-right order-1">
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
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 md:py-5 px-8 md:px-14 rounded-xl shadow-[0_20px_40px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all hover:-translate-y-1 text-lg md:text-xl active:scale-95"
            >
              احجز مكانك معنا الآن
            </a>
          </div>
        </div>

        {/* Left Side: Advanced Video Player */}
        <div className="w-full md:w-5/12 relative order-2">
          {/* Main Container with extra border and shadow layers */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00c9ff] to-[#3b82f6] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            {/* The Frame */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border-[6px] border-[#1e293b] shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-black">
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover cursor-pointer"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                playsInline
                loop
                muted={!isPlaying}
              >
                Your browser does not support the video tag.
              </video>

              {/* Advanced Custom Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/20"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00c9ff] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,201,255,0.6)]">
                      <Play
                        className="text-white fill-current ml-1"
                        size={32}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Fake UI elements for extra "Advanced" look */}
              <div className="absolute top-4 left-4 flex gap-2 pointer-events-none opacity-60">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>

              {/* Bottom bar pseudo-interface */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden pointer-events-none">
                <div className="h-full bg-[#00c9ff] w-1/3 shadow-[0_0_10px_#00c9ff]"></div>
              </div>
            </div>
          </div>

          {/* Extra Background Glows */}
          <div className="absolute -z-10 -bottom-16 -left-16 w-56 h-56 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute -z-10 -top-16 -right-16 w-56 h-56 bg-cyan-400/10 rounded-full blur-[100px]"></div>

          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#0a0d1f] border border-white/10 p-3 md:p-5 rounded-2xl shadow-2xl z-20 backdrop-blur-xl hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
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
      </div>
    </section>
  );
};

export default Hero;
