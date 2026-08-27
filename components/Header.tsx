import React from "react";

const Header: React.FC = () => {
  const bookingLink = "https://wa.me/213777651022";

  return (
    <header className="bg-[#0a0d1f] py-4 px-4 sm:px-10 md:px-20 flex justify-between items-center sticky top-0 z-50">
      {/* Booking Button on the Left */}
      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00c9ff] hover:bg-[#00b0e0] text-white font-bold py-3 px-6 sm:px-8 rounded-full flex items-center transition-all duration-300 shadow-lg whitespace-nowrap text-sm sm:text-base"
      >
        <span>احجز مكانك معنا الآن</span>
      </a>

      {/* Logo on the Right */}
      <div className="flex items-center">
        <div className="flex flex-col items-end mr-2 sm:mr-3 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter leading-none uppercase">
            Miloud Boudjellal
          </h1>
          <p className="text-[12px] sm:text-[12px] text-gray-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold">
            Media Buyer
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
