import { motion } from "framer-motion";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Works } from "./sections/Works";
import { Contact } from "./sections/Contact";
import { Toaster } from "sonner";
import CurrentProject from "./sections/CurrentProject";
import CursorEffect from "./components/cursour-effect";
import TikTokSection from "./sections/TikTokSection";
import CourseSection from "./sections/CourseSection";
import Introduction from "./sections/Introduction";
import useTouchDevice from "./hooks/useTouchDevice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SocialMenu from "./components/SocialMenu";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {

  const isTouchDevice = useTouchDevice();
 const { i18n } = useTranslation();

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
     const lang = i18n.language === "ar" ? "ar" : "en";
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
  }, []); 


  return (
    < >
    <Introduction />
    {!isTouchDevice &&  <CursorEffect />}
     
          <div className="fixed top-6 right-6 z-50">
      <SocialMenu />
    </div>
    <LanguageSwitcher />

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
    
    
    <Works />
    <Skills />
    <CourseSection />
    <TikTokSection />
    <CurrentProject />
    <Contact />
  </div>

      <Toaster position="top-center" />
    </>
  );
}

export default App;
