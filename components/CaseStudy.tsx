import React from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy: React.FC = () => {
  const bookingLink = "/casestudy";

  return (
    <section className="py-12 md:py-24 bg-gray-50 px-4 sm:px-10 md:px-20">
      <div className="container mx-auto max-w-6xl bg-white rounded-[30px] md:rounded-[40px] shadow-xl md:shadow-[0_30px_70px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row-reverse items-stretch">
        {/* Visual Part */}
        <div className="w-full md:w-5/12 bg-[#0a0d1f] p-8 md:p-12 relative flex items-center justify-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-[#00c9ff]/20 rounded-full blur-[80px] md:blur-[100px]"></div>

          <div className="relative z-10 text-center">
            <div className="w-28 h-28 md:w-40 md:h-40 mx-auto rounded-full border-[4px] md:border-[6px] border-[#00c9ff]/30 overflow-hidden mb-6 md:mb-8 shadow-2xl">
              <img
                src="https://i.ibb.co/Q36wYswB/Screenshot-from-2026-08-27-16-55-13.png"
                alt="Specialist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#00c9ff] text-white py-1 px-6 md:py-2 md:px-8 rounded-full font-black text-sm md:text-xl mb-3 md:mb-4 inline-block tracking-tight">
              كيف نحقق أكثر من
            </div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
              30000 دولار
            </div>
            <div className="text-base md:text-2xl font-bold text-gray-400">
              في الشهر لعملائنا في التجارة الإلكترونية
            </div>

            <div className="mt-6 md:mt-8 flex items-center justify-center">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-8 md:w-10 h-[2px] bg-white/20"></div>
                <span className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/40 font-bold uppercase">
                  case study
                </span>
                <div className="w-8 md:w-10 h-[2px] bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Part */}
        <div className="w-full md:w-7/12 p-8 md:p-16 text-right flex flex-col justify-center">
          <h2 className="text-2xl md:text-5xl font-black text-[#0a0d1f] mb-4 md:mb-8 leading-tight tracking-tight">
            دراسة حالات حية
          </h2>
          <p className="text-[#475569] text-sm md:text-xl mb-8 md:mb-12 leading-relaxed">
            اكتشف كيف نجحت وكالة أورانوس في تحقيق أهداف عملائنا في التجارة
            الإلكترونية ومضاعفة أرقامهم ! احصل الآن على دراسة حالة مجانية على
            موقعنا لتتعرف على الأساليب والاستراتيجيات التي اتبعناها لتحقيق هذه
            النجاحات المذهلة . انضم إلى عملائنا واستفد من خبراتنا في تحقيق النمو
            الذي تستحقه أعمالك.
          </p>
          <Link
            to="/casestudy"
            className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white font-black py-3 md:py-5 px-8 md:px-12 rounded-full flex items-center justify-center mr-auto transition-all shadow-lg hover:-translate-y-1 text-center"
          >
            اضغط هنا لمشاهدة حملات حقيقية{" "}
            <Play size={18} className="mr-3 fill-current" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
