import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useTouchDevice from "./hooks/useTouchDevice";
import CursorEffect from "./components/cursour-effect";
import SocialMenu from "./components/SocialMenu";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Separator from "./components/Separator";

// Import critical components directly (NO lazy loading)
import Introduction from "./sections/Introduction";
import { Hero } from "./sections/Hero";
import { AboutMe } from "./sections/AboutMe";

// Lazy load ONLY below-the-fold components
const Works = lazy(() => import("./sections/Works").then(module => ({ default: module.Works })));
const Skills = lazy(() => import("./sections/Skills").then(module => ({ default: module.Skills })));
const CourseSection = lazy(() => import("./sections/CourseSection"));
const TikTokSection = lazy(() => import("./sections/TikTokSection"));
const CurrentProject = lazy(() => import("./sections/CurrentProject"));
const Contact = lazy(() => import("./sections/Contact").then(module => ({ default: module.Contact })));

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin" />
  </div>
);

function App() {
  const isTouchDevice = useTouchDevice();
  const { i18n } = useTranslation();

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    const lang = i18n.language === "ar" ? "ar" : "en";
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
  }, [i18n.language]); // Added dependency

  return (
    <>
      {!isTouchDevice && <CursorEffect />}
     
      <div className="fixed top-6 right-6 z-50">
        <SocialMenu />
      </div>
      <LanguageSwitcher />
      
      {/* NO lazy loading for above-the-fold content */}
      <Introduction />

      <div className="relative z-10 bg-white">
        <Hero />
        <AboutMe />

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex justify-center"
        />
        
        {/* Lazy load below-the-fold content */}
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        {/* Separator should NOT be lazy loaded if it's visible on scroll */}
        <Separator />
         
        <Suspense fallback={<SectionLoader />}>
          <CourseSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TikTokSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CurrentProject />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </div>

      <Toaster position="top-center" />
    </>
  );
}

export default App;