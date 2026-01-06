import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Award, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';

export default function CourseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
    const {t} = useTranslation();
    const isAr = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative  min-h-screen bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-40 h-40 rounded-full border-2 border-white/20"
      />

      <div className="relative  max-w-7xl mx-auto">
        {/* Main Title with split layout */}
        <div className="grid  lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 border border-white/30 rounded-full">
              <span className="text-sm tracking-wider">{t("Course.subtitle")}</span>
            </div>
            <h2 className={` ${isAr ? "md:text-8xl" : "md:text-6xl"} text-4xl font-bold mb-8 leading-none  font-serif`}>
              {t("Course.title-1")} {isAr ? null : <br />}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 ">
                 {t("Course.title-2")} 
              </span>
            </h2>
            <div className="w-24 h-1 bg-white mb-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              {t("Course.desc")}
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{t("Course.tags.beginner")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>{t("Course.tags.language")}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Course showcase with bento-style grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large thumbnail area */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10" style={{ paddingBottom: '56.25%' }}>
              {/* Course thumbnail */}
              <img 
                src="/course-thumbnail.png" 
                alt="Web Development Course"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">HTML + CSS + JavaScript</h3>
                    <p className="text-sm sm:text-base text-gray-300">{t("Course.fundation")}</p>
                  </div>
                
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 border-l-2 border-t-2 border-white/30 rounded-tl-3xl" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 border-r-2 border-b-2 border-white/30 rounded-br-3xl" />
          </motion.div>

          {/* Side cards */}
          <div className="space-y-6">
            {/* Tech stack card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all"
            >
              <h4 className="text-lg font-bold mb-6">{t("Course.technologies.title")}</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-600/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-orange-600">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>
                  </div>
                  <span className="font-semibold">{t("Course.technologies.HTML")}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-blue-600">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                    </svg>
                  </div>
                  <span className="font-semibold">{t("Course.technologies.CSS")}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-yellow-500">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>
                  </div>
                  <span className="font-semibold">{t("Course.technologies.JavaScript")}</span>
                </div>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all"
            >
              <BookOpen className="w-8 h-8 mb-4 text-white/70" />
              <h4 className="text-2xl font-bold mb-2">{t("Course.complete-guide")}</h4>
              <p className="text-gray-400 text-sm">
                {t("Course.guide-desc")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white/5  rounded-3xl border border-white/10"
        >
          <div>
            <h4 className="text-2xl font-bold mb-2">{t("Course.learn")}</h4>
            <p className="text-gray-400">{t("Course.learn-desc")}</p>
          </div>
          <motion.a
            href="https://retm.net/course/679df2560f5f53dde9ba2436"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            {t("Course.view-course")}
            <Play className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}