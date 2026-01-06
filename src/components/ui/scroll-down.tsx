import { useEffect, useState } from "react";

type Props = {
  t: (key: string) => string;
  isAr: boolean
}

const ScrollDown = ({ t, isAr }: Props) => {
      const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ opacity: isVisible ? 1 : 0 }} className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 duration-700">
    <span 
  className={`scroll-down-word text-transparent bg-clip-text bg-linear-to-b from-white/40 via-white to-white/40 ${isAr ? "text-xl" : "text-xs"} tracking-[0.3em] animate-pulse`}
>
  {t("scroll-down")}
</span>
    </div>
  );
};

export default ScrollDown