import { Button } from "@/components/ui/button";
import "../assets/hero.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
 
  const {t} = useTranslation();
  const isAr = useLanguage();

  return (
    <section  className="min-h-screen overflow-hidden relative">
      <div className="relative hero-container overflow-hidden">
        <div className="relative z-10 overflow-hidden">

          <img src="/splash-2.png" className="absolute splash-image z-1" alt="splash image" />
          <div className="left-side-hero flex overflow-hidden relative" >

           
            <div 
    className="absolute inset-0 lg:opacity-75 md:opacity-65 opacity-55"
    style={{
      background: `
        radial-gradient(ellipse 120% 100% at 30% 40%, rgba(80, 80, 80, 0.45) 0%, rgba(50, 50, 50, 0.25) 40%, transparent 70%),
        linear-gradient(110deg, transparent 0%, transparent 45%, rgba(70, 70, 70, 0.2) 52%, transparent 60%),
        radial-gradient(ellipse at 25% 35%, transparent 30%, rgba(30, 30, 30, 0.5) 80%)
      `
    }}
  />

            <div className="text-container max-w-xl absolute overflow-hidden md:overflow-hidden" style={{ zIndex: 1 }}>

              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-6 leading-tight" 
              >
                {t("who-am-i")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-lg lg:text-xl text-gray-300 md:mb-3 mb-3 leading-relaxed" 
              >
                {isAr ?  
                  (
                    <>
                      <span className="font-semibold text-white">{t("web-developer")}</span>
                      {t("who-am-i-desc")}
                    </>
                  )
                  :
                  (
                    <>
                      A <span className="font-semibold text-white">{t("web-developer")}</span>
                      {t("who-am-i-desc")}
                    </>
                  )
                }
              </motion.p>
              
              <div className="flex gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    document.getElementById("about-me")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <Button variant={"default"} className="font-bold" style={{borderRadius: "7px"}}>
                    {t("scroll-down")}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative w-full h-screen overflow-hidden z-20">
        <motion.img
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ 
            duration: 13, 
            repeat: Infinity, 
            ease: "easeInOut",
          }}
          src="/Gojo.jpg"
          alt="Hero image"
          className="w-full h-full object-cover hero-image z-20"
        />
      </div>
    </section>
  );
}