import "../assets/hero.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

import {  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutMe } from "./AboutMe";
import { useMediaQuery } from "react-responsive";
import { HumanRegeneration } from "@/components/HumanRegeneration";
import { useFrameScrubber } from "@/hooks/useFrameScrubber";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

type Prop = {
  isLoading: boolean
}

export function ScrollStory({isLoading}: Prop) {

  const { t } = useTranslation();
  const isAr = useLanguage();
  const isMobile = useMediaQuery({maxWidth: "769px"})
  const isMid = useMediaQuery({maxWidth: "1025px"})

      const TOTAL_FRAMES = isMid ? 91 : 152


  


  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const nextSectionRef2 = useRef<HTMLDivElement>(null);
  // const nextSectionRef3 = useRef<HTMLDivElement>(null);
const canvasRef = useRef<HTMLCanvasElement>(null) as React.RefObject<HTMLCanvasElement>;
const framesRef = useRef<HTMLImageElement[]>([]);


const { scrubTo } = useFrameScrubber({
  canvasRef,
  framesRef,
  isMobile,
  isMid,
  totalFrames: TOTAL_FRAMES,
});

useScrollAnimation({
  sectionRef,
  textRef,
  imageRef,
  nextSectionRef,
  nextSectionRef2,
  scrubTo,
  isMobile,
  isMid,
});



  const fadeInFromLeft = {
  initial: { opacity: 0, y: 100 },
  animate: isLoading ? { opacity: 0, y: 100 } :  { opacity: 1, y: 0 } ,
};

const scrollToAboutMe = () => {
  const section = sectionRef.current;
  if (!section) return;

  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const totalScrollDistance = window.innerHeight * 3; // 250% of viewport
  const aboutMePosition = sectionTop + totalScrollDistance * 0.46; // 0.35 = when AboutMe appears

  window.scrollTo({
    top: aboutMePosition,
    behavior: "smooth",
  });
};

  return (
    <section ref={sectionRef} className="min-h-screen overflow-hidden relative" >

      {/* Left black panel */}
      <div className="hero-container overflow-hidden absolute inset-0 z-10">
        <div className="overflow-hidden">
          <img id="splash" src="/splash-2.png" className={`absolute splash-image z-20`} style={{opacity: isMobile ? 0.3 : 0.6}} alt="splash image" />
          <div
          id="overlay"
            className="absolute inset-0 lg:opacity-75 md:opacity-65 opacity-55 bg-black/50"
          />
          <div id="left-side-bg" className="left-side-hero flex overflow-hidden">
            <div ref={textRef} className="text-container max-w-xl absolute overflow-hidden" style={{ zIndex: 1 }}>
              <motion.h1
                 {...fadeInFromLeft}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-6 leading-tight"
              >
                {t("who-am-i")}
              </motion.h1>

              <motion.p
               {...fadeInFromLeft}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-300 md:mb-3 mb-3 leading-relaxed"
              >
                {isAr ? (
                  <>
                    <span className="font-semibold text-white">{t("web-developer")}</span>
                    {t("who-am-i-desc")}
                  </>
                ) : (
                  <>
                    A <span className="font-semibold text-white">{t("web-developer")}</span>
                    {t("who-am-i-desc")}
                  </>
                )}
              </motion.p>
<motion.button
  {...fadeInFromLeft}
  onClick={scrollToAboutMe}
  className={`mt-1 md:mt-2 group relative px-6 py-2.5 
             border border-white/30 text-white/60 
             ${isAr ? "text-sm md:text-[1rem]" : "text-[0.6rem] tracking-[0.3em]"} uppercase font-light
             hover:text-white hover:border-white/60
             transition-all duration-500 overflow-hidden`}
>
  <span className="absolute inset-0 bg-white/5 translate-x-[-100%] 
                   group-hover:translate-x-0 transition-transform duration-500" />
  <span className="relative">{t("scroll-down")}</span>
</motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={imageRef}
          src="/hero.jpg"
          alt="Hero image"
          className="w-full h-full object-cover hero-image"
        />
      </div>

      <div
  id="black-overlay"
  className="absolute inset-0 z-40 bg-black opacity-0 h-screen"
/>

<div 
  ref={nextSectionRef} 
  className="absolute top-0 left-0 w-full opacity-0 h-[150vh]" 
 style={{ zIndex: 9999999, pointerEvents: "none" }}
>
  <AboutMe   />
</div>


<div
  ref={nextSectionRef2}
  className="absolute top-0 left-0 w-full h-screen opacity-0"
  style={{ zIndex: 9999999 }}
>
  <HumanRegeneration canvasRef={canvasRef} />
</div>






               


    </section>
  );
}