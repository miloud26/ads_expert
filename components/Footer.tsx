import React from "react";

const Footer: React.FC = () => {
  const bookingLink = "contact";

  return (
    <footer className="bg-[#0a0d1f] text-white pt-20 md:pt-32 pb-10 md:pb-16 px-4 sm:px-10 md:px-20">
      <div className="container mx-auto text-center">
        <div className="mb-12 md:mb-20">
          <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-14 max-w-3xl mx-auto font-bold">
            يمكنك الان حجز موعد معنا للتحدث و تبادل المعلومات و معرفة اذا كنا
            نستطيع التعامل معك و تنفيذ الشراكة بيننا{" "}
          </p>
        </div>

        <a
          href={bookingLink}
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-[#3b82f6] hover:bg-blue-600 text-white font-black py-4 md:py-6 px-10 md:px-20 rounded-xl flex items-center justify-center mx-auto mb-16 md:mb-28 text-xl md:text-3xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all hover:scale-105"
        >
          احجز مكانك معنا الآن
        </a>

        <div className="flex flex-col items-center mb-16 md:mb-24">
          <div className="flex items-center">
            <div className="mr-3 md:mr-4 text-right">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none ">
                Miloud Boudjellal
              </h1>
              <p className="text-[10px] md:text-sm text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold mt-[15px]">
                Media Buyer{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center border-t border-white/5 pt-8 md:pt-12">
          <p className="text-[12px] md:text-[19px] text-white-100 font-bold opacity-60">
            © {new Date().getFullYear()} Miloud Boudjellal | Media Buyer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
