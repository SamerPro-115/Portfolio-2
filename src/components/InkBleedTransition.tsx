import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutMe } from "@/sections/AboutMe";

gsap.registerPlugin(ScrollTrigger);

export function InkBleedTransition() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
const text2Ref = useRef<HTMLDivElement>(null);
const text3Ref = useRef<HTMLDivElement>(null);

useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const about = aboutRef.current;
    if (!video || !section || !about) return;

    video.pause();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
      }
    });

    // Video scrub
    tl.to(video, {
      currentTime: () => video.duration || 0,
      ease: "none",
      duration: 1,
    }, 0);

    

    // Texts — staggered, each fades in then out
    tl.fromTo(text1Ref.current, { opacity: 1 }, { opacity: 0, duration: 0.1 }, 0.4)
      .to(text1Ref.current, { opacity: 0, duration: 0.1 }, 0.4);
    tl.fromTo(text2Ref.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.1 }, 0.4)
      .to(text2Ref.current, { opacity: 0, duration: 0.1 }, 0.6);

    tl.fromTo(text3Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.6)
      .to(text3Ref.current, { opacity: 0, duration: 0.1 }, 0.8);


    // About Me fades in at 80%
    tl.fromTo(about, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.2 }, 
    0.8);



    return () => tl.scrollTrigger?.kill();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen w-full">
<div className="absolute inset-0 z-10 flex flex-col justify-center gap-6 pointer-events-none px-32 md:px-48">
  <div ref={text1Ref} className="opacity-0 text-white tracking-widest text-left"
    style={{ transition: "none", fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700 }}>
    I build
  </div>
  <div ref={text2Ref} className="opacity-0 text-white tracking-widest text-center"
    style={{ transition: "none", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400 }}>
    unique experiences
  </div>
  <div ref={text3Ref} className="opacity-0 text-white tracking-widest text-right"
    style={{ transition: "none", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.2rem, 3vw, 2.5rem)", fontWeight: 400, fontStyle: "italic" }}>
    for the web
  </div>
</div>
      {/* Ink video */}
      <video
        ref={videoRef}
        src="/videos/t-scrub.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />

      {/* About Me fades in on top */}
      <div
        ref={aboutRef}
        className="absolute inset-0 z-10 opacity-0"
        style={{ transition: "none" }} 
      >
        <AboutMe />
      </div>
    </div>
  );
}