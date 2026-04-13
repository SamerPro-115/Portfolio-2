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
    className="relative bg-black"
    style={{ height: "100vh" }}
    id="about-me"
  >

    {/* Text — above on mobile, absolute on lg+ */}
    <div className={`
      lg:absolute lg:inset-0 lg:z-10 lg:flex lg:items-center
      flex items-center justify-center
      h-[45vh] lg:h-auto
      lg:justify-start
    `}>
      <div className={`flex flex-col gap-2
                      w-10/12 lg:w-[50%] xl:w-[40%]
                      px-4 lg:px-12
                      items-start `}>

        <h1
          style={{ opacity: 0 }}
          className={`text-3xl sm:text-4xl lg:text-6xl ${isAr && "xl:text-7xl"} font-bold leading-tight text-white`}
        >
          {t("About-Me.title")}
        </h1>

        <p
          style={{ opacity: 0 }}
          className={`text-sm sm:text-base lg:text-xl ${isAr && "xl:text-2xl"} text-gray-300 about-text leading-relaxed`}
        >
          {t("About-Me.desc-1")}
          {t("About-Me.desc-2")}

          <Button
            onClick={handleDownloadCV}
            variant="default"
            className={`mt-5 block p-0 ${isAr ? "w-20 xl:text-xl" : "w-24"} lg:w-34 cursor-pointer font-bold text-xs lg:text-lg`}
            style={{ borderRadius: "5px" }}
          >
            {t("About-Me.profile")}
          </Button>
        </p>

      </div>
    </div>

    {/* Image — below on mobile, absolute on lg+ */}
    <div className={`${!isMobile && isAr ? "scale-x-[-1]" : ""}
                    lg:absolute lg:inset-0
                    relative h-[55vh] lg:h-full
                    flex lg:block justify-center items-end`}>
      <img
        ref={(el) => { imageRefs.current[0] = el; }}
        style={{ opacity: 1 }}
        className={`brightness-80
          w-full h-full
          ${!isMobile
            ? "lg:absolute lg:right-0 lg:h-screen object-cover object-center"
            : "object-contain"
          }
        `}
        src={`${isMobile ? "/images/about-2.jpg" : "/images/t.png"}`}
        alt={images[0].alt}
      />
    </div>

  </div>
);
}