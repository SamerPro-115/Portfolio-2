import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";



type Prop = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function Walking({ canvasRef }: Prop) {
  const isAr = useLanguage();
  const { t } = useTranslation();



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
      className={`absolute inset-0 z-0 w-full h-full brightness-70 ${isAr ? "scale-x-[-1]" : ""} `}
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
  {/* <div
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
/> */}



    {/* ── Text phrases ── */}
<div className="absolute inset-0 z-20 pointer-events-none">
 <div style={{ fontFamily: isAr ? "Harmattan" : "Shadows Into Light, serif" }}
  className={`absolute top-[40%] ${isAr ? "right-[5%]" : "left-[5%]"} w-[90%] sm:w-[70%] xl:w-[50%] italic
             text-lg sm:text-xl md:text-2xl xl:text-3xl `}>

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

    {/* ── Letterbox bars ── */}
    <div
      className="pointer-events-none absolute top-0 left-0 right-0 z-30 bg-black"
      style={{ height: "6vh" }}
    />
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 bg-black"
      style={{ height: "6vh" }}
    />
  </div>
);
}