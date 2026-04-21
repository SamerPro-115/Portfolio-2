import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimation {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  textRef: React.RefObject<HTMLDivElement | null>;
  imageRef: React.RefObject<HTMLImageElement | null>;
  nextSectionRef: React.RefObject<HTMLDivElement | null>;
  nextSectionRef2: React.RefObject<HTMLDivElement | null>;
  nextSectionRef3: React.RefObject<HTMLDivElement | null>;
  scrubTo: (progress: number) => void;
  isMobile: boolean;
  isMid: boolean,
  isAr: boolean
}
export function useScrollAnimation({
  sectionRef,
  textRef,
  imageRef,
  nextSectionRef,
  nextSectionRef2,
  nextSectionRef3,
  scrubTo,
  isMobile,
  isMid,
  isAr
}: UseScrollAnimation) {
  const hasPlayed = useRef<boolean>(false)  

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!section || !text || !image) return;

    const videoStart = 0.20;
    const videoDuration = 0.2;
    const videoEnd = videoStart + videoDuration;

    gsap.set(image, { transformOrigin: isMobile ? "69% 47%" : "62% 45%" });


 const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: `${isMobile ? "+=400%" : isMid ? "+=600%" : "+=1500%"}`,
    pin: true,
    scrub: 1,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      // Adjust videoStart/videoEnd to new range
      if (progress >= videoStart && progress <= videoEnd) {
        const frameProgress = (progress - videoStart) / videoDuration;
        scrubTo(frameProgress);
      }

      // Dragon video — play once only
      const dragonVideo = document.getElementById("about-video-dragon") as HTMLVideoElement;
      if (dragonVideo) {
        if (progress >= 0.13 && !hasPlayed.current) {
          hasPlayed.current = true;
          dragonVideo.currentTime = 0;
          dragonVideo.play();
        }
      }
    },
  },
});

// ── Phase 1: Hero exit (0.00 → 0.10) ─────────────────────────────────────
tl.to(text,             { opacity: 0, y: -30, duration: 0.06 }, 0.00);
tl.to("#splash",        { opacity: 0, duration: 0.06, ease: "power2.inOut" }, 0.00);
tl.to("#left-side-bg",  {
  x: !isMobile ? "-400%" : 0,
  y: isMobile ? "-400%" : 0,
  opacity: 0,
  duration: 0.08,
  ease: "power2.in",
}, 0.04);
tl.to(image,            { scale: 15, duration: 0.08, ease: "power2.inOut" }, 0.06);
tl.to("#overlay",       { opacity: 0, duration: 0.06 }, 0.08);
tl.to("#black-overlay", { opacity: 1, duration: 0.04, ease: "power2.inOut" }, 0.09);

// ── Phase 2: About Me (0.10 → 0.25) ──────────────────────────────────────
tl.to(nextSectionRef.current, {
  opacity: 1, duration: 0.03, ease: "none", pointerEvents: "auto",
}, 0.10);
tl.to("#black-overlay", { opacity: 0, duration: 0.02 }, 0.12);

tl.fromTo("#about-me h1",
  { opacity: 0, x: isAr ? 80 : -80 },
  { opacity: 1, x: 0, duration: 0.05, ease: "power3.out" }, 0.12);
tl.fromTo("#about-me p.about-text",
  { opacity: 0, x: isAr ? 80 : -80 },
  { opacity: 1, x: 0, duration: 0.05, ease: "power3.out" }, 0.12);
tl.fromTo(".about-abstract",
  { opacity: 0, x: isMobile ? 0 : 80, y: isMobile ? 80 : 0 },
  { opacity: 0.7, x: 0, y: 0, duration: 0.05, ease: "power3.out" }, 0.12);
tl.fromTo("#about-video-dragon",
  { opacity: 0 },
  { opacity: 0.6, duration: 0.05, ease: "power3.out" }, 0.13);

tl.to(".about-abstract",        { opacity: 0, scale: 1.08, duration: 0.04, ease: "power2.in" }, 0.17);
tl.to("#about-me h1",           { opacity: 0, x: isAr ? 100 : -100, duration: 0.04, ease: "power2.in" }, 0.17);
tl.to("#about-me p.about-text", { opacity: 0, x: isAr ? 100 : -100, duration: 0.04, ease: "power2.in" }, 0.17);
tl.to("#about-video-dragon",    { opacity: 0, scale: 1.08, duration: 0.04, ease: "power2.in" }, 0.17);

// ── Phase 3: Quote + Walking frames (0.25 → 0.42) ─────────────────────────
tl.to(nextSectionRef2.current, {
  opacity: 1,
  duration: 0.03,
  ease: "expo.out",
  pointerEvents: "auto",
}, 0.20);

const line1Words = gsap.utils.toArray<HTMLElement>(".line-1 .word");
const line2Words = gsap.utils.toArray<HTMLElement>(".line-2 .word");
const line3Words = gsap.utils.toArray<HTMLElement>(".line-3 .word");

tl.fromTo(line1Words,
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.004, ease: "power2.out", duration: 0.03 }, 0.20);

  tl.to(".walking-frames",  { opacity: 0.7, duration: 0.03, ease: "power2.out" }, 0.20);

tl.fromTo(line1Words,
  { color: "rgba(255,255,255,0.25)" },
  { color: "rgba(255,255,255,1)", stagger: 0.004, ease: "none", duration: 0.03 }, 0.22);

tl.fromTo(line2Words,
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.004, ease: "power2.out", duration: 0.03 }, 0.24);
tl.fromTo(line2Words,
  { color: "rgba(255,255,255,0.25)" },
  { color: "rgba(255,255,255,1)", stagger: 0.004, ease: "none", duration: 0.03 }, 0.26);

tl.fromTo(line3Words,
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.004, ease: "power2.out", duration: 0.03 }, 0.28);
tl.fromTo(line3Words,
  { color: "rgba(255,255,255,0.25)" },
  { color: "rgba(255,255,255,1)", stagger: 0.004, ease: "none", duration: 0.03 }, 0.30);

// ── Phase 4: Exit quote + Tiger reveal (0.42 → 0.50) ─────────────────────
tl.to(".words-container", { opacity: 0, duration: 0.07 }, 0.36);
tl.to(".walking-frames",  { opacity: 0, duration: 0.07 }, 0.36);

tl.to(nextSectionRef3.current, {
  opacity: 1,
  duration: 0.03,
  pointerEvents: "auto",
}, 0.37);

// Tiger reveal
tl.to("#working-image", {
  clipPath: "inset(0% 0% round 0px)",
  scale: 0.7,
  filter: "saturate(1)",
  duration: 0.1,
  ease: "power3.inOut",
}, 0.38)



 tl.fromTo("#track", 
   {opacity: 0, y: 80},
   {opacity: 1, duration:0.04, y: 0}, 0.45
 )

tl.to("#track", {
  xPercent: -600,
  ease: "none",
  duration: 0.45, // duration
}, 0.48) // start later, more room

    return () => tl.scrollTrigger?.kill();
  }, [isAr]);
}