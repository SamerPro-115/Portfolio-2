import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { useMediaQuery } from "react-responsive";






export function AboutMe() {
  const { t } = useTranslation();
    const isMobile = useMediaQuery({maxWidth: "568px"})



  const sectionRef = useRef<HTMLDivElement>(null);





  



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

      md:absolute md:inset-0 md:z-10 md:flex md:items-center
      flex items-center justify-center
      h-[45vh] md:h-auto
      md:justify-start
    `}>
      <div className={`flex flex-col gap-2
                      w-10/12 md:w-[55%] lg:w-[50%] xl:w-[40%]
                      px-4 md:px-12
                      items-start `}>

        <h1
          style={{ opacity: 0 }}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${isAr && "xl:text-7xl"} font-bold leading-tight text-white`}
        >
          {t("About-Me.title")}
        </h1>

        <p
          style={{ opacity: 0 }}
          className={` sm:text-base md:text-xl  lg:text-xl ${isAr ?  "xl:text-2xl text-lg" : "text-sm"} text-gray-300 about-text leading-relaxed`}
        >
          {t("About-Me.desc-1")}
          {t("About-Me.desc-2")}

          <Button
            onClick={handleDownloadCV}
            variant="default"
            className={`mt-5 block p-0 ${isAr ? "w-20 xl:text-xl md:w-24" : "w-24 md:w-30"} lg:w-34 cursor-pointer font-bold text-sm md:text-lg lg:text-lg`}
            style={{ borderRadius: "5px" }}
          >
            {t("About-Me.profile")}
          </Button>
        </p>

      </div>
    </div>

   

<div className={`${!isMobile && isAr ? "scale-x-[-1]" : ""}
                  md:absolute md:inset-0
                  relative h-[55vh] md:h-full
                  flex md:block justify-center items-end`}>

  {isMobile && (
    <img
      style={{ opacity: 1 }}
      className="brightness-80 w-full h-full object-contain about-abstract"
      src="/images/about-2.jpg"
      alt="about me image"
    />
  )}

  {!isMobile && (
    <>
      <video
        style={{ opacity: 1 }}
        className="brightness-80 w-full h-full lg:absolute lg:right-0 lg:h-screen object-cover object-center about-abstract"
        src="/videos/Face-3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dragon overlay video */}
      <video
        id="about-video-dragon"
        className="w-full absolute top-0 right-0 md:h-screen object-fill "
        src="/videos/dragon.webm"
        muted
        playsInline
      />
    </>
  )}
</div>

  </div>
);
}

