import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';

export default function Separator() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const isAr = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!backgroundRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height + window.innerHeight);
      const translateY = scrollProgress * 100;
      
      backgroundRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] overflow-hidden"
    >
      {/* Parallax Background - Transform-based for iOS compatibility */}
      <div 
        ref={backgroundRef}
        className="parallax-img absolute inset-0 -top-[10%] -bottom-[10%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/OyasumiPunpun.jpg')`,
          filter: 'brightness(0.7)',
        }}
      />

      {/* Content with Framer Motion */}
      <motion.div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4 -mt-20">
          <motion.h2 
            className={`text-3xl md:text-6xl font-bold mb-4 ${!isAr && "font-serif"} tracking-[0.2em]`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <span className="text-white/85">{t("Separator.title")}</span>
          </motion.h2>
          
          <motion.p 
            className={`text-sm md:text-2xl ${!isAr && "italic"} mt-2 text-gray-200/80 `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.8 }}
          >
            "{t("Separator.subtitle")}"
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}