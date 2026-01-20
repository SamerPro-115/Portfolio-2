import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';

export function AboutMe() {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [isMid, setIsMid] = useState<boolean>(false);
    const {t} = useTranslation();
    const isAr = useLanguage();

  const images = [
    { src: "/images/madrid.webp", alt: "madrid", id: 0, desc: t("About-Me.football") },
    { src: "/images/manga.jpg", alt: "manga", id: 1, desc: t("About-Me.animation") },
    { src: "/images/Rocket.jpg", alt: "rocket league", id: 2, desc: t("About-Me.gaming") }
  ];

  const handleImageClick = (imageId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    if (expandedImage === imageId) {
      setExpandedImage(null);
    } else {
      setExpandedImage(imageId);
    }
  };

  const handleContainerClick = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMid(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

     const handleDownloadCV = () => {
     // Create a temporary link element
     const link = document.createElement('a');
     link.href = '/cv/Samer_AlAshqar_Web_Developer.pdf'; 
     link.download = 'Samer_AlAshqar_Web_Developer.pdf'; 
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   };


  // Handle Toast alert if file not exist
  //  const handleDownloadCV = () => {
  //    toast.message(t("About-Me.toast-alert"))
  //  }

  // Extract animation config
const fadeInFromLeft = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 }
};

// Extract arrow logic into a component or function
const getDirectionArrow = (isMid: boolean, isAr: boolean) => {
  if (isMid) return null;
  return isAr ? <ArrowLeft className="inline" /> : <ArrowRight className="inline" />;
};
  

  return (
    <div
      className="min-h-screen relative overflow-y-hidden flex lg:flex-row flex-col justify-center overflow-x-hidden"
      onClick={handleContainerClick}
      id="about-me"
    >
      <div className="flex flex-1 items-center justify-center bg-black">
  <div className="flex lg:w-2/3 w-10/12 flex-col mt-10 mb-10 sm:mt-30 sm:mb-30 lg:mt-0 lg:mb-0">
    <motion.h1
      {...fadeInFromLeft}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl"
    >
      {t("About-Me.title")}
    </motion.h1>

    <motion.p
      {...fadeInFromLeft}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-lg text-gray-300 lg:text-xl"
    >
      {t("About-Me.desc-1")}

      {t("About-Me.desc-2")}
          <Button
            onClick={handleDownloadCV}
            variant="default"
            className="mt-4 block p-0 w-28 cursor-pointer font-bold text-sm md:text-lg"
            style={{ borderRadius: "5px" }}
          >
            {t("About-Me.profile")}
          </Button>
          <br />
          <br />
          {t("About-Me.desc-3")}
      
      {isMid ? (
        <>
          
          <ArrowDown className="inline" />
        </>
      ) : (
        getDirectionArrow(isMid, isAr)
      )}
    </motion.p>

    <p
      className={`
        absolute bottom-0 z-50 block 
        w-full px-1 pb-0.5 pt-0.5
        bg-black/40 text-white opacity-70
        italic text-[0.50rem] sm:text-xs
        text-center
        md:bottom-0.5 md:w-auto
        ${isAr ? "md:left-2.5 left-0" : "md:right-2.5 right-0"}
      `}
    >
      "{t("About-Me.saying")}"
    </p>
  </div>
</div>

      <div className="bg-black flex-1 justify-center items-center flex gap-[1vmin]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative transition-all duration-500 hover:grayscale-0 hover:brightness-110 hover:flex-[6] group ${
              expandedImage === image.id
                ? "flex-[6] grayscale-0 brightness-110"
                : expandedImage !== null
                ? "flex-1 grayscale brightness-75"
                : "flex-1 grayscale brightness-75 hover:grayscale-0 hover:brightness-110 hover:flex-[6]"
            }`}
          >
            <motion.img
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              className="lg:h-screen md:h-[70vh] h-[50vh] w-full object-cover "
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.1,
                margin: "0px 0px -100px 0px",
              }}
              src={image.src}
              alt={image.alt}
              onClick={(event) => handleImageClick(image.id, event)}
              loading="lazy"
            />

            <div
              className={`absolute inset-0 bg-black/50 grid items-center justify-center wrapper pointer-events-none
                         transition-opacity duration-500 ease-out
                ${
                  expandedImage === image.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }
              `}
            >
              <div
                className={`z-50 text-[clamp(1.2rem,4vw,2.5rem)] text-white top text-center
                             transition-all duration-700 ease-out transform
                ${
                  expandedImage === image.id
                    ? "opacity-100 translate-y-0 scale-100 delay-200"
                    : "opacity-0 translate-y-6 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:delay-200"
                }
              `}
              >
                {image.desc}
              </div>
              <div
                className={`z-50 text-[clamp(1.2rem,4vw,2.5rem)] text-white bottom text-center
                             transition-all duration-700 ease-out transform
                ${
                  expandedImage === image.id
                    ? "opacity-100 translate-y-0 scale-100 delay-300"
                    : "opacity-0 translate-y-6 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:delay-300"
                }
              `}
              >
                {image.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}