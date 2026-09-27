import React, { useEffect, useState } from "react";

interface CaseStudyItem {
  title: string;
  youtubeUrl: string;
  description: string;
  poster: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    title: "5,000+ مبيعة بـ1.2$ فقط! | كيف حققنا هذه النتائج مع منتج شبه طبي؟",
    youtubeUrl: "https://www.youtube.com/embed/vC1meshGkcg",
    poster: "https://i.ibb.co/g093y0w/1-1-1.webp",
    description:
      "دراسة حالة حقيقية لمنتج شبه طبي: كيف حققنا أكثر من 5,000 مبيعة بتكلفة وصلت إلى 1.2$ للمبيعة عبر 6 حسابات إعلانية؟",
  },
  {
    title:
      "31,000+ مبيعة بتكلفة 0.80$ فقط! | دراسة حالة حقيقية لمنتجات الأدوات في الجزائر",
    youtubeUrl: "https://www.youtube.com/embed/Mf56AKKrdvc",
    poster: "https://i.ibb.co/ch26KZGc/2-1-1.webp",
    description:
      "31,000+ مبيعة بتكلفة وصلت إلى 0.80$ فقط! شاهد دراسة حالة حقيقية لمنتجات الأدوات في الجزائر بالأرقام.",
  },
  {
    title:
      "20,000$ إنفاق إعلاني و1,900+ مبيعة! | دراسة حالة حقيقية لمنتجات الصين في الجزائر",
    youtubeUrl: "https://www.youtube.com/embed/vC1meshGkcg",
    poster: "https://i.ibb.co/Rp3xwzj6/3-1-1.webp",
    description:
      "20,000$+ إنفاق إعلاني وآلاف المبيعات! دراسة حالة حقيقية لشريك في منتجات الصين مع نتائج موثقة من الحسابات الإعلانية.",
  },
];

const CaseStudyPage: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-white px-4 py-16 sm:px-8 md:px-16 md:py-24 lg:px-20"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-24">
          <p className="mb-3 text-sm font-bold text-blue-600 md:text-base">
            CASE STUDIES
          </p>

          <h1 className="text-3xl font-black leading-tight tracking-tight text-[#0a0d1f] sm:text-4xl md:text-6xl">
            مشاريع ونتائج حقيقية
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.8] text-slate-500 md:text-lg">
            مجموعة من المشاريع التي عملنا عليها والنتائج التي ساهمنا في تحقيقها.
          </p>
        </div>

        {/* Case Studies */}
        <div>
          {caseStudies.map((item, index) => (
            <React.Fragment key={index}>
              <article className="mx-auto w-full max-w-6xl">
                {/* Case Number */}
                <div className="text-center">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-50 px-5 py-2 text-sm font-black tracking-wider text-blue-600 md:px-6 md:py-2.5 md:text-base">
                    CASE STUDY {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mx-auto mt-6 max-w-4xl text-center text-2xl font-black leading-tight text-[#0a0d1f] sm:text-3xl md:text-5xl">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-[1.9] text-slate-500 sm:text-lg md:text-xl">
                  {item.description}
                </p>

                {/* Video */}
                <div
                  className="
                    mt-10
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-black
                    shadow-[0_15px_60px_rgba(0,0,0,0.12)]
                    md:mt-12
                  "
                >
                  <div className="relative aspect-video w-full">
                    {/* YouTube Video */}
                    <iframe
                      src={item.youtubeUrl}
                      title={item.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />

                    {/* Poster Overlay */}
                    {playingVideo !== index && (
                      <button
                        type="button"
                        onClick={() => setPlayingVideo(index)}
                        className="absolute inset-0 z-10 h-full w-full cursor-pointer"
                        aria-label={`تشغيل ${item.title}`}
                      >
                        <img
                          src={item.poster}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 hover:bg-black/25" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="
                              flex
                              h-20
                              w-20
                              items-center
                              justify-center
                              rounded-full
                              bg-white
                              shadow-2xl
                              transition-transform
                              duration-300
                              hover:scale-110
                              sm:h-24
                              sm:w-24
                            "
                          >
                            <svg
                              className="mr-[-4px] h-9 w-9 text-[#0a0d1f] sm:h-11 sm:w-11"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </article>

              {/* Separator Between Case Studies */}
              {index < caseStudies.length - 1 && (
                <div className="mx-auto my-16 flex max-w-6xl items-center gap-4 md:my-24 md:gap-6">
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-200" />

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-sm font-black text-blue-600 shadow-sm">
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-200" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;
