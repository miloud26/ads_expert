import React from "react";

const Team: React.FC = () => {
  const members = [
    {
      name: "Miloud Boudjellal",
      title: "Founder & CEO",
      img: "https://i.ibb.co/xKGrz74Q/2.webp",
    },
  ];

  const gridCols =
    members.length === 1
      ? "grid-cols-1"
      : members.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-16 md:py-24 bg-gray-50 px-4 sm:px-10 md:px-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#0a0d1f] mb-4">
            فريق الوكالة المتكامل
          </h2>
          <p className="text-[#475569] text-sm sm:text-base md:text-lg leading-relaxed">
            نحن فريق متخصص في التسويق الرقمي والتجارة الإلكترونية، نعمل بعقلية
            الشراكة ونركّز على النتائج الحقيقية.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div
          className={`grid ${gridCols} gap-6 md:gap-10 mb-16 md:mb-28 justify-items-center`}
        >
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white w-full max-w-sm p-6 md:p-10
                         rounded-[30px] md:rounded-[40px]
                         shadow-sm border border-gray-100
                         text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-8 rounded-full overflow-hidden shadow-inner ring-4 ring-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-black text-[#0a0d1f] mb-1">
                {member.name}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        {/* Meet the Team Description */}
        <div className="max-w-4xl mx-auto text-center px-2">
          <h3 className="text-2xl md:text-4xl font-black text-[#0a0d1f] mb-6 md:mb-10 tracking-tight">
            قابل الفريق الأول
          </h3>
          <div className="space-y-4 md:space-y-6 text-[#475569] text-sm sm:text-lg md:text-xl leading-relaxed">
            <p>
              تم تأسيس الوكالة من طرف ميلود بعد خبرة أكثر من 5 سنوات في التجارة
              الإلكترونية، قضى خلالها سنوات في بناء استراتيجيات ناجحة والبحث عن
              أفضل الطرق لتفجير المبيعات عبر كل المنصات.
            </p>
            <p>
              ثقافتنا قائمة على الشراكة لا المعاملات. الفريق الذي تراه أمامك تم
              اختياره بعناية ليقدّم أفضل أداء ممكن.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
