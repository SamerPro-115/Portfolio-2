import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

gsap.registerPlugin(ScrollTrigger);



export function AboutMe() {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [isMid, setIsMid] = useState<boolean>(false);
  const { t } = useTranslation();
  const isAr = useLanguage();

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const images = [
    { src: "/images/madrid.webp", alt: "madrid", id: 0, desc: t("About-Me.football") },
    { src: "/images/manga.jpg", alt: "manga", id: 1, desc: t("About-Me.animation") },
    { src: "/images/Rocket.jpg", alt: "rocket league", id: 2, desc: t("About-Me.gaming") },
  ];

  const handleImageClick = (imageId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedImage(expandedImage === imageId ? null : imageId);
  };

  const handleContainerClick = () => setExpandedImage(null);

  

  // Screen size check
  useEffect(() => {
    const checkScreenSize = () => setIsMid(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Samer_AlAshqar_Web_Developer.pdf";
    link.download = "Samer_AlAshqar_Web_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getDirectionArrow = (isMid: boolean, isAr: boolean) => {
    if (isMid) return null;
    return isAr ? <ArrowLeft className="inline" /> : <ArrowRight className="inline" />;
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen relative  flex lg:flex-row flex-col justify-center overflow-x-hidden"
      onClick={handleContainerClick}
      id="about-me"
    >
      {/* Left: Text */}
      <div className="flex flex-1 items-center justify-center bg-black">
        <div className="flex lg:w-2/3 w-10/12 flex-col mt-10 mb-10 sm:mt-30 sm:mb-30 lg:mt-0 lg:mb-0">
          <h1
            style={{ opacity: 0 }}
            className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl"
          >
            {t("About-Me.title")}
          </h1>

          <p
             style={{ opacity: 0 }}
            className="text-lg text-gray-300 lg:text-xl about-text"
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
          </p>

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

      {/* Right: Images */}
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
            <img
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
 style={{ opacity: 0 }}
               className="lg:h-screen md:h-[70vh] h-[50vh] w-full object-cover"
              src={image.src}
              alt={image.alt}
              onClick={(event) => handleImageClick(image.id, event)}
              loading="lazy"
            />

            <div
              className={`absolute inset-0 bg-black/50 grid items-center justify-center wrapper pointer-events-none
                transition-opacity duration-500 ease-out
                ${expandedImage === image.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
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