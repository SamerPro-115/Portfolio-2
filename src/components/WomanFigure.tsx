import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skills } from "@/sections/Skills";

gsap.registerPlugin(ScrollTrigger);

export function WomanFigure() {
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
   
    <div ref={sectionRef}  id="woman-figure"  className="relative h-screen w-full">
      <div className="absolute inset-0 z-10 flex flex-col justify-center gap-4 md:gap-6 pointer-events-none px-8 sm:px-16 md:px-32 lg:px-48">
        <div ref={text1Ref} className="opacity-0 text-white tracking-widest text-left"
          style={{ transition: "none", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 4rem)", fontWeight: 400, fontStyle: "italic" }}>
          AI can design,
        </div>
        <div ref={text2Ref} className="opacity-0 text-white tracking-widest text-center"
          style={{ transition: "none", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 4rem)", fontWeight: 400, fontStyle: "italic" }}>
          But it can't
        </div>
        <div ref={text3Ref} className="opacity-0 text-white tracking-widest text-right"
          style={{ transition: "none", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 4rem)", fontWeight: 400, fontStyle: "italic" }}>
          Make you feel
        </div>
      </div>   
     

      {/* Video */}
      <video
        ref={videoRef}
        src="/videos/woman-scrub.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />

      {/* Skills fades in on top */}
      <div
        ref={aboutRef}
        className="absolute inset-0 z-10 opacity-0"
        style={{ transition: "none" }}
      >
        <Skills />
      </div>
    </div>
  );
}