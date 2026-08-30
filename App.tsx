import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Team from "./components/Team";
import Results from "./components/Results";
import CaseStudyPage from "./components/CaseStudyPage";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkWithUs from "./WorkWithUs";

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Team />
        <Results />
        <CaseStudy />
      </main>

      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900 leading-[38px]">
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

          {/* صفحة دراسة الحالة */}
          <Route
            path="/casestudy"
            element={
              <>
                <Header />
                <main>
                  <CaseStudyPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <main>
                  <WorkWithUs />
                </main>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
