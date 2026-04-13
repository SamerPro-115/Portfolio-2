import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimation {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  textRef: React.RefObject<HTMLDivElement | null>;
  imageRef: React.RefObject<HTMLImageElement | null>;
  nextSectionRef: React.RefObject<HTMLDivElement | null>;
  nextSectionRef2: React.RefObject<HTMLDivElement | null>;
  scrubTo: (progress: number) => void;
  isMobile: boolean;
  isAr: boolean
}

export function useScrollAnimation({
  sectionRef,
  textRef,
  imageRef,
  nextSectionRef,
  nextSectionRef2,
  scrubTo,
  isMobile,
  isAr
}: UseScrollAnimation) {
  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!section || !text || !image) return;

    const videoStart = 0.6;
    const videoDuration = 0.4;
    const videoEnd = videoStart + videoDuration;

    gsap.set(image, { transformOrigin: isMobile ? "69% 47%" : "62% 45%" });

  

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= videoStart && progress <= videoEnd) {
            const frameProgress = (progress - videoStart) / videoDuration;
            scrubTo(frameProgress);
          }
        },
      },
    });

    tl.to(text, { opacity: 0, y: -30, duration: 0.2 }, 0);
    tl.to("#splash", { opacity: 0, duration: 0.2, ease: "power2.inOut" }, 0);
    tl.to("#left-side-bg", {
      x: !isMobile ? "-400%" : 0,
      y: isMobile ? "-400%" : 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }, 0);
    tl.to(image, { scale: 15, duration: 0.4, ease: "power2.inOut" }, 0.1);
    tl.to("#overlay", { opacity: 0, duration: 0.3 }, 0.2);
    tl.to("#black-overlay", { opacity: 1, duration: 0.15, ease: "power2.inOut" }, 0.28);

    tl.to(nextSectionRef.current, {
      opacity: 1, duration: 0.1, ease: "none", pointerEvents: "auto",
    }, 0.35);
    tl.to("#black-overlay", { opacity: 0, duration: 0.12 }, 0.46);

    tl.fromTo("#about-me h1",
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.15, ease: "power3.out" }, 0.38);
    tl.fromTo("#about-me p.about-text",
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.15, ease: "power3.out" }, 0.38);
    tl.fromTo("#about-me img",
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.15, ease: "power3.out" }, 0.38);

    tl.to("#about-me h1",
      { opacity: 0, x: -100, duration: 0.1, ease: "power2.in" }, 0.51);
    tl.to("#about-me p.about-text",
      { opacity: 0, x: -100, duration: 0.1, ease: "power2.in" }, 0.51);
    tl.to("#about-me img",
      { opacity: 0, scale: 1.08, duration: 0.1, ease: "power2.in" }, 0.51);

    tl.to(nextSectionRef2.current, {
      opacity: 1,
      duration: 0.15,
      ease: "expo.out",
      pointerEvents: "auto",
    }, 0.62);

const line1Words = gsap.utils.toArray<HTMLElement>(".line-1 .word");
const line2Words = gsap.utils.toArray<HTMLElement>(".line-2 .word");
const line3Words = gsap.utils.toArray<HTMLElement>(".line-3 .word");

tl.fromTo(line1Words,
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.008, ease: "power2.out", duration: 0.04 },
  0.65
);
tl.fromTo(line1Words,
  { color: "rgba(255,255,255,0.25)" },
  { color: "rgba(255,255,255,1)", stagger: 0.008, ease: "none", duration: 0.04 },
  0.71  
);

tl.fromTo(line2Words,
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.008, ease: "power2.out", duration: 0.04 },
  0.72
);

tl.fromTo(line2Words,
  { color: "rgba(255,255,255,0.25)" },
  { color: "rgba(255,255,255,1)", stagger: 0.008, ease: "none", duration: 0.04 },
  0.78
);

tl.fromTo(line3Words,
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.008, ease: "power2.out", duration: 0.04 },
  0.79
);
tl.fromTo(line3Words,
  { color: "rgba(255,255,255,0.25)" },
  { color: "rgba(255,255,255,1)", stagger: 0.008, ease: "none", duration: 0.04 },
  0.85
);
tl.to({}, { duration: 0.02 }, 0.98);
    return () => tl.scrollTrigger?.kill();
  }, []);
}