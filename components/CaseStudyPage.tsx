import React from "react";

interface CaseStudyItem {
  title: string;
  image: string;
  description: string;
  buttonText: string;
  externalUrl: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    title: "دراسة حالة — متجر إلكتروني",
    image: "https://i.ibb.co/example/image1.png",
    description:
      "قمنا بتطوير استراتيجية تسويقية متكاملة ساهمت في تحسين أداء الحملات وزيادة المبيعات بشكل ملحوظ.",
    buttonText: "مشاهدة المشروع",
    externalUrl: "https://example.com",
  },
  {
    title: "دراسة حالة — مشروع آخر",
    image: "https://i.ibb.co/example/image2.png",
    description:
      "تحسين تجربة المستخدم وبناء صفحات مخصصة ساعد المشروع على رفع معدل التحويل وتحقيق نتائج أفضل.",
    buttonText: "مشاهدة المشروع",
    externalUrl: "https://example.com",
  },
  {
    title: "دراسة حالة — E-commerce",
    image: "https://i.ibb.co/example/image3.png",
    description:
      "من خلال تحليل البيانات واختبار عدة زوايا إعلانية، تم الوصول إلى استراتيجية أكثر استقراراً وقابلية للتوسع.",
    buttonText: "مشاهدة المشروع",
    externalUrl: "https://example.com",
  },
];

const CaseStudyPage: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm md:text-base font-bold text-blue-600 mb-3">
            CASE STUDIES
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#0a0d1f] tracking-tight leading-tight">
            مشاريع ونتائج حقيقية
          </h1>

          <p className="mt-5 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-[1.8]">
            مجموعة من المشاريع التي عملنا عليها والنتائج التي ساهمنا في تحقيقها.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {caseStudies.map((item, index) => (
            <article
              key={index}
              className="
                group
                overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
              "
            >
              {/* Image */}
              <div className="w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    block
                    w-full
                    h-auto
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                  "
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0a0d1f] leading-tight">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-500 leading-[1.8] max-w-3xl">
                  {item.description}
                </p>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#0a0d1f]
                      px-6
                      py-3
                      text-sm
                      sm:text-base
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-blue-600
                      hover:-translate-y-0.5
                      shadow-lg
                      hover:shadow-xl
                    "
                  >
                    {item.buttonText}

                    <span
                      className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                      dir="ltr"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;
