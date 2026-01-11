import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';


export default function Separator() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const isAr = useLanguage();
  // Track scroll for text animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] overflow-hidden"
    >
      {/* Parallax Background - FIXED attachment */}
      <div 
        className="parallax-img absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/OyasumiPunpun.jpg')`,
          filter: 'brightness(0.7)',
        }}
      />

      {/* Content with Framer Motion */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="text-center px-4 -mt-20">
          <motion.h2 
            className={`text-3xl md:text-6xl font-bold mb-4 ${!isAr && "font-serif" } tracking-[0.2em]`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <span className="text-white">{t("Separator.title")}</span>
          </motion.h2>
          
          <motion.p 
            className={`text-sm md:text-2xl ${!isAr && "italic" } mt-2 text-gray-200`}
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