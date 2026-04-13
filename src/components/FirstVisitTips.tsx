import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

export default function FirstVisitTips() {
  const {t} = useTranslation();
  const isAr = useLanguage()

 const [showLangTip, setShowLangTip] = useState(false);
const [showMenuTip, setShowMenuTip] = useState(false);

// Show both on first visit
useEffect(() => {
  const seen = localStorage.getItem("tips-seen");
  if (!seen) {
    const timer = setTimeout(() => {
      setShowLangTip(true);
      setShowMenuTip(true);
    }, 1800);
    return () => clearTimeout(timer);
  }
}, []);
// Only mark as seen when BOTH are dismissed
const dismissLang = () => {
  setShowLangTip(false);
  if (!showMenuTip) localStorage.setItem("tips-seen", "true");
};

const dismissMenu = () => {
  setShowMenuTip(false);
  if (!showLangTip) localStorage.setItem("tips-seen", "true");
};

  return (
    <AnimatePresence>
          {/* ── Language Switcher Tip ── fixed bottom-left, to the right on desktop, above on mobile */}
       {showLangTip && (
           <motion.div
                   key="lang-tip"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`
              fixed z-[99999]
              bottom-16 left-5
              sm:bottom-8 
              ${isAr ? "sm:left-23" : "sm:left-20"}
            `}
          >
            <div className={`relative bg-white/90 border border-white/30 text-white text-xs tracking-wider px-3 py-2 max-w-[500px]`}>
              {/* Arrow — points left on desktop, down on mobile */}
              <span className="
                absolute
                /* mobile: arrow at bottom center pointing down */
                bottom-[-6px] left-4 
                border-l-[6px] border-l-transparent
                border-r-[6px] border-r-transparent
                border-t-[6px] border-t-white/90
                sm:hidden
              " />
              <span className="
                hidden sm:block
                absolute
                /* desktop: arrow on left side pointing left */
                left-[-6px] top-1/2 -translate-y-1/2
                border-t-[6px] border-t-transparent
                border-b-[6px] border-b-transparent
                border-r-[6px] border-r-white/90
              " />
              <div className="flex items-start justify-between gap-2">
                <p className={`lg:text-lg md:text-lg text-md leading-relaxed text-black/80`}>
                  {t("switch-language-tip")}
                </p>
                <button onClick={dismissLang} className="text-black/70 hover:text-black transition-colors mt-[1px] shrink-0">
                  <X size={12} />
                </button>
              </div>
            </div>
          </motion.div>
       )}

          {/* ── Social Menu Tip ── always beside (below the button, top-right) */}
          {showMenuTip && (
            <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="fixed z-[99999] top-20 right-6"
            key="menu-tip"
          >
            <div className="relative bg-white/90 border border-white/30 text-white text-xs tracking-wider px-3 py-2 max-w-[500px]">
              {/* Arrow pointing up */}
              <span className="
                absolute top-[-6px] right-3
                border-l-[6px] border-l-transparent
                border-r-[6px] border-r-transparent
                border-b-[6px] border-b-white/90
              " />
              <div className="flex items-start justify-between gap-2">
                <p className="lg:text-lg md:text-lg text-md leading-relaxed text-black/80">
                 {t("social-links-tip")}
                </p>
                <button onClick={dismissMenu} className="text-black/70 hover:text-black transition-colors mt-[1px] shrink-0">
                  <X size={12} />
                </button>
              </div>
            </div>
          </motion.div>
          )}
    </AnimatePresence>
  );
}