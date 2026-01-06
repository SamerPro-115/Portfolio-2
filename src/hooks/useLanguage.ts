import i18n from "@/i18n";
import { useEffect, useState } from "react";


export function useLanguage() {
    const [isAr, setIsAr] = useState<boolean>(false);


     useEffect(() => {
    if (i18n.language === "ar") setIsAr(true);
    else {
      setIsAr(false);
    }
  }, [i18n.language]);
    


  return isAr;
}