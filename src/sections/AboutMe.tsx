import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);





export function AboutMe() {
  const { t } = useTranslation();
    const isMobile = useMediaQuery({maxWidth: "568px"})


  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const images = [
    { src: "/images/about.jpg", alt: "image", id: 0},
  ];




  



  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Samer_AlAshqar_Web_Developer.pdf";
    link.download = "Samer_AlAshqar_Web_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isAr = useLanguage()



return (
  <div
    ref={sectionRef}
    className="relative flex flex-col lg:flex-row bg-black"
    style={{ height: "100vh" }}
    id="about-me"
  >


    {/* Text Panel */}
    <div className="flex items-center justify-center bg-black
                    h-[45vh] lg:h-full
                    flex-none lg:flex-1">
      <div className="flex flex-col w-10/12 lg:w-2/3 gap-3 lg:gap-6">

        <h1
          style={{ opacity: 0 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white"
        >
          {t("About-Me.title")}
        </h1>

        <p
          style={{ opacity: 0 }}
          className="text-sm sm:text-base lg:text-xl text-gray-300 about-text leading-relaxed"
        >
          {t("About-Me.desc-1")}
          {t("About-Me.desc-2")}

          <Button
            onClick={handleDownloadCV}
            variant="default"
            className={`mt-3 block p-0  ${isAr ? "w-20" : "w-24"} lg:w-34 cursor-pointer font-bold text-xs lg:text-lg`}
            style={{ borderRadius: "5px" }}
          >
            {t("About-Me.profile")}
          </Button>
        </p>

     
      </div>
    </div>

    {/* Images Panel */}
    <div className="bg-black flex-1 flex gap-[1vmin]
                    h-[55vh] lg:h-full">
    {/* Images Panel */}
<div className="bg-black flex-1 relative h-[55vh] lg:h-full overflow-hidden">
  <img
    ref={(el) => { imageRefs.current[0] = el; }}
    style={{ opacity: 1}}
    className={` h-full 
               brightness-90
               ${!isMobile ? "object-cover w-[80%] m-auto" : "w-full object-contain"}
              `}
    src={`${isMobile ? "/images/about-2.jpg" : "/images/about.jpg" }`}
    alt={images[0].alt}
  />

  
</div>
    </div>


  </div>
);;
}