import { Button } from "@/components/ui/button";
import "../assets/hero.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutMe } from "./AboutMe";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

type Prop = {
  isLoading: boolean
}

export function Hero({isLoading}: Prop) {
  const { t } = useTranslation();
  const isAr = useLanguage();

  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);


  const isMobile = useMediaQuery({maxWidth: "768px"})
  const isMid = useMediaQuery({maxWidth: "992px"})



  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    if (!section  || !text || !image) return;

    gsap.set(image, { transformOrigin: isMobile ? "69% 47%" : isMid ? "62% 45%" : "62% 45%" });

   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    // Text fades out
    tl.to(text, {
      opacity: 0,
      y: -30,
      duration: 0.2,
    }, 0);

    // Splash fades out
    tl.to("#splash", {
      opacity: 0,
      duration: 0.2,
      ease: "power2.inOut",
    }, 0);

   // Fade out the hero gradient overlay early
tl.to("#overlay", {
  opacity: 0,
  duration: 0.3,
}, 0.4);

// Left panel slides out
tl.to("#left-side-bg", {
  x: !isMobile ? "-400%" : 0,
  y: isMobile ? "-400%" : 0,
  opacity: 0,
  duration: 0.4,
  ease: "power2.in",
}, 0);
// Image zooms into monitor
tl.to(image, {
  scale: 15,
  duration: 0.6,
  ease: "power2.inOut",
}, 0.1);

// Black overlay — later and slower
tl.to("#black-overlay", {
  opacity: 1,
  duration: 0.2,
  ease: "power2.inOut",
}, 0.3); // was 0.4, now 0.65

// About Me fades in slowly after black
tl.to(nextSectionRef.current, {
  opacity: 1,
  duration: 0.2,
  ease: "power2.inOut",
  pointerEvents: "auto",
}, 0.4);

// Trigger animate at 50% of timeline
// Heading and paragraph fade in from left
tl.fromTo(
  "#about-me h1",
  { opacity: 0, x: -100 },
  { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" },
  0.4  // same timestamp as when AboutMe fades in
);

tl.fromTo(
  "#about-me p.about-text",
  { opacity: 0, x: -100 },
  { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" },
  0.45
);

// Images flip in staggered
tl.fromTo(
  "#about-me img",
  { rotateY: 90, opacity: 0 },
  {
    rotateY: 0,
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
    stagger: 0.1,
  },
  0.45
);

tl.to("#about-me", {
  opacity: 0
}, 0.85)



// Woman figure

tl.fromTo("#woman-figure", 
  {y: -100},
  {
    y: 100
  }

,0.90)




    return () => tl.scrollTrigger?.kill();
  }, []);

  const fadeInFromLeft = {
  initial: { opacity: 0, y: 100 },
  animate: isLoading ? { opacity: 0, y: 100 } :  { opacity: 1, y: 0 } ,
};

  return (
    <section ref={sectionRef} className="min-h-screen overflow-hidden relative">

      {/* Left black panel */}
      <div className="hero-container overflow-hidden absolute inset-0 z-10">
        <div className="overflow-hidden">
          <img id="splash" src="/splash-2.png" className="absolute splash-image z-20" alt="splash image" />
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

              <div className="flex gap-4">
                <motion.div
                {...fadeInFromLeft}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  onClick={() => {
                    document.getElementById("about-me")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <Button  variant="default" className="font-bold" style={{ borderRadius: "7px" }}>
                    {t("scroll-down")}
                  </Button>
                </motion.div>
              </div>
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

<div ref={nextSectionRef} className="absolute top-0 left-0 w-full opacity-0 h-screen overflow-hidden" style={{ zIndex: 999999999 }}>
  <AboutMe />
</div>

    </section>
  );
}