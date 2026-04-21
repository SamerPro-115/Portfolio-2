import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";



type Prop = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function Walking({ canvasRef }: Prop) {
  const isAr = useLanguage();
  const { t } = useTranslation();
  const isMobile = useMediaQuery({maxWidth: "768px"})



  const splitWords = (text: string) =>
  text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block mr-[0.25em]">
      {word}
    </span>
  ));

return (
  <div
    id="walk"
    className={`relative h-screen w-full overflow-hidden bg-black `}
  >
    {/* ── Canvas (base layer) ── */}
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 w-full h-full ${isAr ? "scale-x-[-1]" : ""} walking-frames`}
      style={{ display: "block" }}
    />

    {/* ── Warm edge glow (left) ── */}
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 40%)",
      }}
    />

    {/* ── Radial vignette ── */}
    {isMobile && (
      <>
        <div
  className="pointer-events-none absolute inset-0 z-10"
  style={{
    background:
      "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 10%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.88) 100%)",
  }}
/>
<div
  className="pointer-events-none absolute inset-0 z-10"
  style={{
    background:
      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
  }}
/>
      </>
    )}



    {/* ── Text phrases ── */}
<div className="absolute inset-0 z-20 pointer-events-none words-container">
 <div style={{ fontFamily: isAr ? "Harmattan" : "Shadows Into Light, serif" }}
  className={`absolute top-[40%] ${isAr ? "right-[5%] text-2xl" : "left-[5%] text-xl"} w-[90%] sm:w-[70%] xl:w-[50%] opacity-90
              sm:text-xl md:text-2xl xl:text-4xl `}>

  {/* First set */}
  <div className="line-1 overflow-hidden">
    {splitWords(t("Walking.text-1"))}
  </div>
  <div className="line-2 overflow-hidden">
    {splitWords(t("Walking.text-2"))}
  </div>
  <div className="line-3 overflow-hidden">
    {splitWords(t("Walking.text-3"))}
  </div>


</div>
</div>


  </div>
);
}