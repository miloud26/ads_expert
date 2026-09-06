import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Target,
  TrendingUp,
  Video,
  XCircle,
  Zap,
} from "lucide-react";

import Results from "./components/Results";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  hint,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-[17px] font-black leading-6 text-slate-900 md:text-lg"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required
        className="h-[58px] w-full rounded-2xl border-2 border-slate-200 bg-white px-5 text-[17px] font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 md:text-lg"
      />

      {hint && (
        <p className="mt-1 text-sm font-semibold leading-5 text-slate-400">
          {hint}
        </p>
      )}
    </div>
  );
};

const MP4_VIDEO_URL = "YOUR_DIRECT_MP4_URL_HERE";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

async function sendToTelegram(form) {
  const message = `🚀 طلب شراكة إعلانية جديد

👤 الاسم: ${form.fullName}
📱 WhatsApp: ${form.whatsapp}
🏪 المشروع: ${form.projectName}
🎯 Niche: ${form.niche}
📊 طلبات Delivery يوميًا: ${form.dailyOrders}
📣 المنصة: ${form.adPlatform}
🌐 الموقع: ${form.website}
❗ المشكلة الحالية: ${form.threeMonthGoal}
📝 وصف المشروع: ${form.projectDescription}`;

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    },
  );

  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.description || "فشل إرسال الطلب إلى Telegram.");
  }
}

const initialForm = {
  fullName: "",
  whatsapp: "",
  projectName: "",
  niche: "",
  dailyOrders: "",
  adPlatform: "",
  website: "",
  threeMonthGoal: "",
  projectDescription: "",
};

const requirements = [
  {
    number: "01",
    icon: TrendingUp,
    title: "30–40 طلب Delivery يوميًا",
    text: "نركز على المشاريع التي لديها حجم طلبات حقيقي يسمح باختبار الحملات وبناء استراتيجية نمو قابلة للتوسع.",
  },
  {
    number: "02",
    icon: Target,
    title: "حساب إعلاني جاهز",
    text: "يجب توفير حساب إعلاني على Meta أو TikTok حتى نتمكن من إدارة الحملات والعمل على البيانات.",
  },
  {
    number: "03",
    icon: Video,
    title: "Creatives كافية",
    text: "يجب توفير كمية مناسبة من المحتوى الإعلاني حتى نستطيع اختبار الزوايا والرسائل والكرياتيفات المختلفة.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Website جاهز",
    text: "يجب أن يكون لديك متجر أو Landing Page مجهزة لاستقبال الزيارات وتحويلها إلى طلبات.",
  },
];

const services = [
  {
    icon: Target,
    title: "إدارة الحملات",
    text: "إطلاق وإدارة وتحسين الحملات الإعلانية بناءً على البيانات والأداء الحقيقي.",
  },
  {
    icon: TrendingUp,
    title: "Testing & Scaling",
    text: "اختبار الكرياتيفات والزوايا والجماهير وتوسيع الحملات عندما تظهر فرصة حقيقية للنمو.",
  },
  {
    icon: MessageCircle,
    title: "Ad Copy & Headlines",
    text: "كتابة الـ Hooks والـ Ad Copy والـ Headlines والزوايا التسويقية المناسبة.",
  },
  {
    icon: FileCheck2,
    title: "تحليل الأداء",
    text: "تحليل النتائج واكتشاف نقاط الضعف والفرص واتخاذ قرارات التحسين بناءً على البيانات.",
  },
];

function SectionIntro({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={`inline-block text-base font-black tracking-wide md:text-lg ${
          dark ? "text-blue-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-4 text-4xl font-black leading-[1.25] tracking-tight sm:text-[42px] md:text-5xl lg:text-[56px] ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-6 max-w-2xl text-lg font-medium leading-9 md:text-xl ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function SelectField({ label, name, value, onChange, children }) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={name}
        className="block text-[17px] font-black leading-7 text-slate-900 md:text-lg"
      >
        {label}
        <span className="mr-1 text-blue-600">*</span>
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="h-16 w-full appearance-none rounded-2xl border-2 border-slate-200 bg-white px-5 pl-12 text-[17px] font-semibold text-slate-800 outline-none transition-all hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 md:h-[68px] md:px-6 md:text-lg"
        >
          {children}
        </select>

        <ChevronDown
          size={24}
          strokeWidth={2.5}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 md:left-5"
        />
      </div>
    </div>
  );
}

export default function WorkWithUs() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [showMobileFormButton, setShowMobileFormButton] = useState(true);
  const formSectionRef = useRef(null);

  const [showMobileCTA, setShowMobileCTA] = useState(true);

  useEffect(() => {
    const element = formSectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMobileCTA(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const [hasSubmitted, setHasSubmitted] = useState(
    () => localStorage.getItem("work_with_us_submitted") === "true",
  );

  const descriptionLength = form.projectDescription.trim().length;
  const descriptionValid = descriptionLength >= 100;

  const whatsappRegex = /^\+[1-9]\d{7,14}$/;
  const whatsappValid = whatsappRegex.test(form.whatsapp.trim());

  const websiteValid = (() => {
    try {
      const url = new URL(form.website.trim());
      return ["http:", "https:"].includes(url.protocol);
    } catch {
      return false;
    }
  })();

  const allFieldsFilled = Object.values(form).every(
    (value) => value.trim() !== "",
  );

  const formValid =
    allFieldsFilled && whatsappValid && websiteValid && descriptionValid;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const formSection = formSectionRef.current;

    if (!formSection) return;

    const updateMobileButtonVisibility = () => {
      if (window.innerWidth >= 768) {
        setShowMobileFormButton(false);
        return;
      }

      const rect = formSection.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const formIsVisible = rect.top < viewportHeight && rect.bottom > 0;

      setShowMobileFormButton(!formIsVisible);
    };

    updateMobileButtonVisibility();

    const handleResize = () => updateMobileButtonVisibility();

    window.addEventListener("scroll", updateMobileButtonVisibility, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", updateMobileButtonVisibility);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!descriptionValid) {
      setError("وصف المشروع يجب أن يحتوي على 100 حرف على الأقل.");
      setStatus("error");
      return;
    }

    const whatsappRegex = /^\+[1-9]\d{7,14}$/;

    if (!whatsappRegex.test(form.whatsapp.trim())) {
      setError(
        "أدخل رقم WhatsApp بصيغة دولية مع رمز الدولة، مثال: +213555123456",
      );
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await sendToTelegram(form);

      setStatus("success");
      setForm(initialForm);

      // التحويل إلى صفحة دراسة الحالات بعد نجاح الإرسال
      navigate("/casestudy");
    } catch (submitError) {
      console.error(submitError);

      setError(
        submitError.message || "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.",
      );

      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-[#05091a] px-4 py-10 font-[Tajawal]"
      >
        <div className="mx-auto flex min-h-[90vh] max-w-3xl items-center">
          <div className="w-full rounded-[32px] border border-white/10 bg-white p-7 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-12 md:p-16">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
              <CheckCircle2
                size={56}
                strokeWidth={2}
                className="text-emerald-500"
              />
            </div>

            <h1 className="mt-9 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              تم استلام طلبك بنجاح
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-9 text-slate-600 md:text-xl">
              شكرًا لك. استلمنا معلومات مشروعك وسيتم مراجعة الطلب والتواصل معك
              خلال{" "}
              <strong className="font-black text-slate-950">ساعة واحدة</strong>{" "}
              لاستكمال التفاصيل والإجراءات اللازمة لبدء العمل.
            </p>

            <div className="mt-9 flex items-center justify-center gap-3 rounded-2xl bg-slate-50 px-5 py-5 text-base font-bold leading-8 text-slate-700">
              <Clock3 size={24} className="shrink-0 text-blue-600" />
              يرجى إبقاء WhatsApp متاحًا خلال هذه الفترة.
            </div>

            <button
              type="button"
              onClick={() => {
                setStatus("idle");

                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 50);
              }}
              className="mt-9 rounded-2xl bg-blue-600 px-10 py-5 text-base font-black text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-700"
            >
              إرسال طلب آخر
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-white font-[Tajawal] text-slate-900"
    >
      <section className="relative overflow-hidden bg-[#05091a] px-4 pb-16 pt-6 text-white sm:px-6 md:pb-28 md:pt-9 lg:px-8">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-blue-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-72 -left-56 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 max-w-5xl text-center sm:mt-16 md:mt-20">
            <h1 className="mt-7 text-[38px] font-black leading-[1.16] tracking-tight text-white sm:text-5xl md:text-[66px] lg:text-[76px]">
              مشروعك جاهز للنمو؟
              <span className="mt-4 block bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                دعنا نتولى الجانب الإعلاني.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-[15px] font-semibold leading-8 text-slate-200 sm:text-xl md:text-[22px] md:leading-10">
              أخبرنا عن مشروعك ومنتجاتك وحجم عملياتك. إذا كان مشروعك مناسبًا
              لطريقة عملنا، سنتواصل معك خلال ساعة واحدة لاستكمال التفاصيل.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-6xl sm:mt-12 md:mt-16">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.5)] sm:rounded-[26px] md:rounded-[30px]">
              <div className="relative aspect-video">
                <img
                  src="https://i.ibb.co/1NjF2C3/1.webp"
                  alt="Miloud Boudjellal - Media Buyer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Results />

      <section className="bg-white px-4 py-16 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="text-[20px] text-base font-black text-blue-600 md:text-lg">
                قبل أن تبدأ
              </span>

              <h2 className="mt-4 text-[38px] font-black leading-[1.18] tracking-tight text-slate-950 sm:text-5xl md:text-[58px]">
                لسنا مناسبين
                <span className="block text-blue-600"> لكل مشروع.</span>
              </h2>

              <p className="mt-6 text-[18px] font-semibold leading-8 text-slate-600 md:text-xl">
                نعمل مع المشاريع التي لديها أساس حقيقي يسمح للإعلانات بتحقيق
                نتائج قابلة للتوسع. لذلك نتأكد من جاهزية المشروع قبل بدء
                التعاون.
              </p>

              <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-5 shadow-sm md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <ShieldCheck size={28} />
                  </div>

                  <div>
                    <div className="text-base font-black text-blue-700">
                      حد الجاهزية المفضل
                    </div>

                    <p className="mt-2 text-lg font-bold leading-8 text-slate-800 md:text-xl">
                      أكثر من{" "}
                      <strong className="text-slate-950">
                        30–40 طلب Delivery يوميًا.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {requirements.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group rounded-[24px] border-2 border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)] md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={27} />
                      </div>

                      <span className="text-sm font-black tracking-[0.2em] text-slate-300">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-[21px] font-black leading-8 text-slate-900 md:text-[22px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[16px] font-semibold leading-8 text-slate-600 md:text-[17px]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05091a] px-4 py-16 text-white sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            dark
            eyebrow="ماذا نفعل؟"
            title={
              <>
                أنت تملك المشروع،
                <span className="block text-blue-400">ونحن ندير الإعلان.</span>
              </>
            }
            description="لا نهدف إلى مجرد إطلاق Campaign. نعمل على إدارة الجانب الإعلاني وتحسينه باستمرار اعتمادًا على البيانات والأداء الحقيقي."
          />

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-black md:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base font-medium leading-8 text-slate-400 md:text-[17px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="وضوح من البداية"
            title="مسؤوليات الطرفين"
            description="أفضل النتائج تأتي عندما يكون كل طرف مسؤولًا عن الجزء الذي يملكه."
          />

          <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2">
            <div className="rounded-[28px] border-2 border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                  <CheckCircle2 size={28} className="text-slate-700" />
                </div>

                <div>
                  <h3 className="text-xl font-black md:text-2xl">
                    ما يجب أن توفره
                  </h3>

                  <p className="mt-1 text-sm font-bold text-slate-400 md:text-base">
                    مسؤوليات المشروع
                  </p>
                </div>
              </div>

              <div className="mt-9 space-y-5">
                {[
                  "حسابات Meta أو TikTok الإعلانية",
                  "Creatives بكمية مناسبة للمشروع",
                  "Website / Landing Page جاهزة",
                  "منتجات وOffer واضحان",
                  "فريق لمعالجة الطلبات وخدمة العملاء",
                  "قدرة لوجستية مناسبة لحجم الطلبات",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-emerald-500"
                    />

                    <span className="text-base font-bold leading-7 text-slate-700 md:text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#080c20] p-7 text-white shadow-[0_25px_70px_rgba(5,9,26,0.22)] md:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Zap size={28} className="text-blue-400" />
                </div>

                <div>
                  <h3 className="text-xl font-black md:text-2xl">
                    ما نتولاه نحن
                  </h3>

                  <p className="mt-1 text-sm font-bold text-slate-500 md:text-base">
                    الجانب الإعلاني
                  </p>
                </div>
              </div>

              <div className="mt-9 space-y-5">
                {[
                  "إدارة الحملات الإعلانية",
                  "Testing وتحليل النتائج",
                  "Scaling عند وجود فرصة حقيقية",
                  "Ad Copy وHeadlines",
                  "Hooks وزوايا إعلانية",
                  "تحليل الأداء واتخاذ قرارات التحسين",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-400"
                    />

                    <span className="text-base font-bold leading-7 text-slate-200 md:text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="application"
        ref={formSectionRef}
        className="bg-white px-4 py-16 sm:px-6 md:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            eyebrow="الخطوة التالية"
            title="أخبرنا عن مشروعك"
            description="املأ المعلومات التالية بدقة لمساعدتنا على فهم مشروعك وتقييم التعاون"
          />

          <form
            onSubmit={handleSubmit}
            className="mt-3 rounded-[26px] border-2 border-slate-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:mt-10 sm:rounded-[30px] sm:p-7 md:p-10"
          >
            <div className="grid gap-7 md:grid-cols-2 md:gap-x-4 md:gap-y-2.5">
              <InputField
                label="الاسم الكامل"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="مثال: محمد بن علي"
              />

              <InputField
                label="رقم WhatsApp"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="+213555123456"
                type="tel"
                hint="يجب إدخال الرقم مع رمز الدولة."
              />

              <InputField
                label="اسم المشروع / المتجر"
                name="projectName"
                value={form.projectName}
                onChange={handleChange}
                placeholder="اسم المشروع"
              />

              <InputField
                label="الـ Niche"
                name="niche"
                value={form.niche}
                onChange={handleChange}
                placeholder="مثال: Beauty / Fashion / E-commerce"
              />

              <SelectField
                label="متوسط طلبات Delivery يوميًا"
                name="dailyOrders"
                value={form.dailyOrders}
                onChange={handleChange}
              >
                <option value="">اختر المتوسط</option>
                <option value="أقل من 20">أقل من 20</option>
                <option value="20 - 30">20 - 30</option>
                <option value="30 - 50">30 - 50</option>
                <option value="50 - 100">50 - 100</option>
                <option value="100 - 200">100 - 200</option>
                <option value="أكثر من 200">أكثر من 200</option>
              </SelectField>

              <SelectField
                label="المنصة الإعلانية"
                name="adPlatform"
                value={form.adPlatform}
                onChange={handleChange}
              >
                <option value="">اختر المنصة</option>
                <option value="Meta Ads">Meta Ads</option>
                <option value="TikTok Ads">TikTok Ads</option>
                <option value="Meta + TikTok">Meta + TikTok</option>
                <option value="لا أملك حسابًا حاليًا">
                  لا أملك حسابًا حاليًا
                </option>
              </SelectField>

              <InputField
                label="رابط الموقع"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://example.com"
                type="url"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="threeMonthGoal"
                className="mb-1.5 block text-[17px] font-black leading-7 text-slate-900 md:text-lg"
              >
                ما أهم مشكلة تواجهها حاليًا في الإعلانات؟
                <span className="mr-1 text-blue-600">*</span>
              </label>

              <textarea
                id="threeMonthGoal"
                name="threeMonthGoal"
                value={form.threeMonthGoal}
                onChange={handleChange}
                required
                rows={5}
                placeholder="مثال: تكلفة الطلب مرتفعة، الحملات لا تتوسع، الكرياتيفات لا تحقق نتائج، لا أعرف أين أضع الميزانية..."
                className="w-full resize-none rounded-2xl border-2 border-slate-200 bg-white px-5 py-4 text-[17px] font-semibold leading-8 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 md:px-6 md:text-lg"
              />
            </div>

            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between gap-4">
                <label
                  htmlFor="projectDescription"
                  className="block text-[17px] font-black leading-7 text-slate-900 md:text-lg"
                >
                  اشرح لنا مشروعك بالتفصيل
                  <span className="mr-1 text-blue-600">*</span>
                </label>

                <span
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-black ${
                    descriptionValid
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {descriptionLength} / 100
                </span>
              </div>

              <textarea
                id="projectDescription"
                name="projectDescription"
                value={form.projectDescription}
                onChange={handleChange}
                required
                minLength={100}
                rows={8}
                placeholder="اشرح لنا طبيعة مشروعك، منذ متى تعمل، المنتجات التي تبيعها، السوق المستهدف، النتائج الحالية، المشاكل التي تواجهها، وما الذي تريد تحسينه في الإعلانات..."
                className={`w-full resize-none rounded-2xl border-2 bg-white px-5 py-4 text-[17px] font-semibold leading-8 text-slate-900 outline-none transition placeholder:text-slate-400 md:px-6 md:text-lg ${
                  descriptionValid
                    ? "border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                }`}
              />

              {!descriptionValid && descriptionLength > 0 && (
                <div className="mt-1.5 flex items-center gap-2 text-sm font-bold leading-7 text-amber-600 md:text-base">
                  <Clock3 size={18} />
                  أضف {100 - descriptionLength} حرف على الأقل.
                </div>
              )}

              {descriptionValid && (
                <div className="mt-1.5 flex items-center gap-2 text-sm font-bold text-emerald-600 md:text-base">
                  <Check size={18} />
                  الوصف مستوفي الحد الأدنى.
                </div>
              )}
            </div>

            {status === "error" && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border-2 border-red-100 bg-red-50 p-5 text-base font-bold leading-8 text-red-700">
                <XCircle size={23} className="mt-1 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={!formValid || status === "loading" || hasSubmitted}
              className="mt-6 flex h-[68px] w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-5 text-[18px] font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-40 md:h-[74px] md:px-6 md:text-xl"
            >
              {status === "loading" ? (
                <>
                  <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  جاري إرسال الطلب...
                </>
              ) : hasSubmitted ? (
                <>
                  تم إرسال الطلب
                  <Check size={23} />
                </>
              ) : (
                <>
                  إرسال طلب الشراكة
                  <ArrowLeft size={23} />
                </>
              )}
            </button>

            <p className="mt-4 text-center text-sm font-semibold leading-7 text-slate-400 md:text-base">
              جميع الحقول مطلوبة. بعد إرسال الطلب، سيتم مراجعته والتواصل معك
              خلال ساعة واحدة لاستكمال التفاصيل.
            </p>
          </form>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#05091a] px-4 py-16 text-center text-white sm:px-6 md:py-28 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <TrendingUp size={30} />
          </div>

          <h2 className="mt-8 text-[40px] font-black leading-[1.18] sm:text-5xl md:text-[58px]">
            هل مشروعك جاهز
            <span className="block text-blue-400">للمرحلة القادمة؟</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[18px] font-semibold leading-8 text-slate-300 md:text-xl md:leading-10">
            أرسل معلومات مشروعك وسنراجعها ونتواصل معك خلال ساعة واحدة لاستكمال
            التفاصيل.
          </p>

          <button
            type="button"
            onClick={() => {
              const element = document.getElementById("application");

              if (!element) return;

              const startY = window.scrollY;
              const targetY =
                element.getBoundingClientRect().top + window.scrollY;

              const distance = targetY - startY;
              const duration = 1700;

              let startTime = null;

              const easeInOutCubic = (t) =>
                t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

              const animateScroll = (currentTime) => {
                if (!startTime) startTime = currentTime;

                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easedProgress = easeInOutCubic(progress);

                window.scrollTo(0, startY + distance * easedProgress);

                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                }
              };

              requestAnimationFrame(animateScroll);
            }}
            className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-2 text-[18px] font-black text-white shadow-[0_16px_40px_rgba(37,99,235,0.35)] transition hover:bg-blue-500 sm:px-9 md:text-lg"
          >
            احجز مكانك الآن
            <ArrowLeft size={23} />
          </button>
        </div>
      </section>

      {showMobileCTA && (
        <button
          type="button"
          onClick={() => {
            const element = formSectionRef.current;

            if (!element) return;

            const startY = window.scrollY;
            const targetY =
              element.getBoundingClientRect().top + window.scrollY;

            const distance = targetY - startY;
            const duration = 1700;

            let startTime = null;

            const easeInOutCubic = (t) =>
              t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

            const animateScroll = (currentTime) => {
              if (!startTime) startTime = currentTime;

              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              const easedProgress = easeInOutCubic(progress);

              window.scrollTo(0, startY + distance * easedProgress);

              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              }
            };

            requestAnimationFrame(animateScroll);
          }}
          className="fixed bottom-2 left-7 right-7 z-50 flex h-12 items-center justify-center gap-3 rounded-xl border border-blue-400/25 bg-blue-600 px-5 text-[15px] font-black text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] [animation:mobileCtaFloat_3s_ease-in-out_infinite] md:hidden"
          aria-label="الانتقال مباشرة إلى نموذج الشراكة"
        >
          <span>ابدأ طلب الشراكة</span>
          <ArrowLeft size={19} strokeWidth={2.6} />
        </button>
      )}
    </main>
  );
}
