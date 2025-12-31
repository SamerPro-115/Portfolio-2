import { useEffect, useState } from "react";

const ScrollDown = () => {
      const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ opacity: isVisible ? 1 : 0 }} className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 duration-700">
    <span 
  className="text-transparent bg-clip-text bg-linear-to-b from-white/40 via-white to-white/40 text-xs tracking-[0.3em] animate-pulse"
  style={{ fontFamily: "Playfair Display, serif" }}
>
  SCROLL DOWN
</span>
    </div>
  );
};

export default ScrollDown