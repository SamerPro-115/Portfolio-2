import { useEffect, useState } from "react";

const ScrollDown = () => {
      const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ opacity: isVisible ? 1 : 0 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 duration-700">
      <div className="w-0.5 h-16 bg-linear-to-b from-transparent via-white/50 to-transparent animate-pulse" />
      <span 
        className="text-white/60 text-xs tracking-[0.3em]"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        SCROLL
      </span>
    </div>
  );
};

export default ScrollDown