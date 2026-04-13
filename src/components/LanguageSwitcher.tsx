import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
  
  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    
    if (languageCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.documentElement.setAttribute('data-lang', 'ar');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.documentElement.setAttribute('data-lang', 'en');
    }
  }
    return(
<motion.button
  className="fixed bottom-5 sm:bottom-8 left-5 sm:left-8 z-9999999 
             bg-black border border-white/50 
             text-white px-3 py-2 md:px-4 md:py-2 
             hover:bg-white hover:text-black
             transition-all duration-300
             font-light tracking-wider text-sm sm:text-sm"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
    onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
>
  {i18n.language === 'en' ? 'ع' : 'EN'}
</motion.button>
    )
}