import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";



type Prop = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export function HumanRegeneration({ canvasRef }: Prop) {
  const isAr = useLanguage();
  const { t } = useTranslation();

return (
  <div
    id="woman-figure"
    className="relative h-screen w-full overflow-hidden bg-black"
  >
    {/* ── Canvas (base layer) ── */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full"
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



    {/* ── Text phrases ── */}
    <div className="absolute inset-0 z-20 pointer-events-none">

      {/* Text 1 — upper left */}
      <div
        id="text-1"
        className="absolute opacity-0"
        style={{
          top: "40%",
          transform: "translateY(-50%)",
          left: "clamp(16px, 5vw, 96px)",
          fontFamily: isAr
            ? "'Cairo', 'Noto Sans Arabic', Arial, sans-serif"
            : "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 5vw, 6rem)",
          fontWeight: 100,
          fontStyle: "italic",
          letterSpacing: "0.04em",
        color: "#ffffff",
textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)",

        }}
      >
        {t("Human.text-1")}
      </div>

      {/* Text 2 — center */}
      <div
        id="text-2"
        className="absolute inset-x-0 text-center opacity-0"
        style={{
          top: "75%",
          transform: "translateY(-50%)",
          fontFamily: isAr
            ? "'Cairo', 'Noto Sans Arabic', Arial, sans-serif"
            : "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "0.06em",
          lineHeight: 1.1,
          padding: "0 clamp(12px, 3vw, 48px)",
        color: "#f0ece4",
textShadow: "0 2px 10px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.5)",
        }}
      >
        {t("Human.text-2")}
      </div>

      {/* Text 3 — lower right */}
      <div
        id="text-3"
        className="absolute opacity-0"
        style={{
          bottom: "calc(33% + 6vh)",
          right: "clamp(16px, 5vw, 96px)",
          fontFamily: isAr
            ? "'Cairo', 'Noto Sans Arabic', Arial, sans-serif"
            : "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "0.05em",
          lineHeight: 1.4,
          textAlign: isAr ? "left" : "right",
          color: "#c8c4bc",
textShadow: "0 2px 8px rgba(0,0,0,0.8)",
        }}
      >
        {t("Human.text-3")}
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