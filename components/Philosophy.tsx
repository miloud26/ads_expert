import React from "react";

const Philosophy: React.FC = () => {
  const bookingLink = "https://wa.me/213777651022";

  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-10 md:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Right side: Metrics Dashboard */}
        <div className="w-full lg:w-1/2 flex flex-col order-1">
          <div className="text-center mb-6">
            <p className="text-[#94a3b8] font-bold text-[26px] md:text-base tracking-widest uppercase mb-4">
              إجمالي انفاق الاعلانات
            </p>
            <div className="flex justify-center items-baseline gap-2 md:gap-4 text-3xl sm:text-5xl md:text-7xl font-black text-[#00c9ff] tracking-tighter">
              <span>ألف دولار</span>
              <span className="order-first">633</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { label: "عميل تمت مساعدته", value: "56" },
              { label: "إجمالي الإنفاق الإعلاني", value: "$633K" },
              { label: "مكاتبنا", value: "0" },
              { label: "الخدمات المقدمة", value: "1" },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card p-4 md:p-8 rounded-lg text-center"
              >
                <p className="text-xs md:text-sm font-bold text-gray-400 uppercase mb-2 md:mb-4 tracking-widest">
                  {stat.label}
                </p>
                <p className="text-2xl md:text-4xl font-black text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Left side: Philosophy Text */}
        <div className="w-full lg:w-1/2 text-right order-2">
          <h2 className="text-4xl md:text-6xl font-black mb-8 md:mb-10 text-[#0a0d1f]">
            فلسفتنا
          </h2>

          <div className="space-y-4 md:space-y-6 text-[#475569] text-sm sm:text-base md:text-lg leading-[1.8]">
            <p>
              عملنا مع مشاريع في التجارة الإلكترونية وساهمنا في تحقيق مئات
              الآلاف من المبيعات. لا نتعامل معك كمجرد عميل، بل كشريك نعمل معه
              بشفافية ونركز على ما يحقق نمواً حقيقياً لمشروعه.
            </p>

            <p>
              النتائج التي نشاركها يومياً هي جزء من العمل الذي نقوم به على أرض
              الواقع. ومع تزايد المشاريع التي ترغب في العمل معنا، أصبحنا أكثر
              انتقائية في اختيار المشاريع التي نؤمن بقدرتها على النمو ونستطيع
              فعلاً أن نضيف لها قيمة.
            </p>

            <p className="font-bold text-[#0a0d1f] text-lg md:text-xl">
              ربما يكون مشروعك واحداً منها؟ سيكون من الرائع أن نتعرف عليك أكثر.
              احجز مكالمة معنا لنراجع مشروعك ونكتشف معاً أين توجد أكبر فرص
              النمو.
            </p>
          </div>

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto mt-8 md:mt-12 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-lg flex items-center justify-center mr-auto md:mr-0 transition-transform hover:scale-105 shadow-xl text-lg"
          >
            احجز مكانك معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
