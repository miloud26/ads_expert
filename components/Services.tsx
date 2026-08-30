import React from "react";
import { Layers, Video, Search, Megaphone } from "lucide-react";

const Services: React.FC = () => {
  const bookingLink = "/contact";

  const services = [
    {
      title: "تدقيق المنتجات",
      desc: "نقدم استشارات حول المنتجات الرابحة في السوق و التميز على المنافسين، نحلل ونوجه عملاءنا نحو استراتيجيات ناجحة.",
      icon: <Search className="text-white" size={28} strokeWidth={1.5} />,
    },
    {
      title: "صفحات الهبوط",
      desc: "خبراء في إنشاء صفحات هبوط فعالة، نركز على تجربة المستخدم وتحسين التوجيه لضمان أعلى نسبة تحويل في حملات التسويق الرقمي.",
      icon: <Layers className="text-white" size={28} strokeWidth={1.5} />,
    },
    {
      title: "استراتيجيات الفيديوهات",
      desc: "استشارات حول إنشاء محتوى فيديو إبداعي للإعلانات، حيث نوجهك لتطوير إعلانات فيديو فعالة وجذابة تعزز فعالية حملات منتجاتك.",
      icon: <Video className="text-white" size={28} strokeWidth={1.5} />,
    },
    {
      title: "إدارة الإعلانات",
      desc: "ندير أيضاً حملات الإعلانات بكفاءة، حيث نقوم بالتخطيط والتنفيذ والتحليل لضمان أداء ممتاز وتحقيق أهداف التسويق بفعالية.",
      icon: <Megaphone className="text-white" size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0d1f] text-white px-4 sm:px-10 md:px-20 border-t border-white/5">
      <div className="container mx-auto text-center mb-12 md:mb-20">
        <p className="text-blue-400 font-bold mb-4 md:mb-6 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">
          ماذا نقدم ؟
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-10 leading-tight">
          همنا الوحيد المبيعات ، المبيعات فقط
        </h2>
        <p className="text-gray-400 max-w-4xl mx-auto text-sm sm:text-base md:text-xl leading-relaxed">
          نقوم بكل شيء ، فريق العمل يشتغل بتركيز كبير على كل التفاصيل ، من تدقيق
          منتجاتك و إنشاء صفحات الهبوط ذو تحويل عالي ، إستراتيجيات الفيديوهات ،
          إلى الشيء الذي نتميز به وهو إدارة كل الإعلانات وتفجير مبيعاتك .
        </p>
        <p className="text-gray-500 mt-4 md:mt-8 italic text-xs md:text-base">
          إذا كنت تبحث عن وكالة التي بضغطة واحدة يمكنك معرفة كل التفاصيل ، كم
          صرفت وكم هي أرباحك - فنحن هنا من أجلك.
        </p>

        <div className="mt-8 md:mt-12 space-y-1 md:space-y-3">
          <p className="text-gray-400 text-xs md:text-base">
            الإتقان يتطلب التركيز لذلك...
          </p>
          <p className="text-blue-400 font-bold text-base md:text-xl">
            كل فرد من فريق العمل خبير في مهمته.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#111827]/40 border border-white/5 p-6 md:p-10 rounded-xl hover:bg-[#111827]/60 transition-all group text-center flex flex-col items-center"
          >
            <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-6 tracking-tight">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 md:mt-20">
        <a
          href={bookingLink}
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-[#3b82f6] hover:bg-blue-600 text-white font-black py-4 px-10 md:px-16 rounded-lg flex items-center justify-center shadow-2xl transition-all hover:-translate-y-1 text-lg"
        >
          احجز مكانك معنا الآن
        </a>
      </div>
    </section>
  );
};

export default Services;
