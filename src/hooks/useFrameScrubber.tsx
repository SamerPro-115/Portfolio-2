// hooks/useFrameScrubber.ts
import { useEffect } from "react";

interface UseFrameScrubberProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  framesRef: React.MutableRefObject<HTMLImageElement[]>;
  isMobile: boolean;
  isMid: boolean;
  totalFrames: number;
}

export function useFrameScrubber({
  canvasRef,
  framesRef,
  isMobile,
  isMid,
  totalFrames,
}: UseFrameScrubberProps) {

  // ── Load frames ────────────────────────────────────────────────────────────
  useEffect(() => {
    framesRef.current = [];

   const basePath = isMid ? "/videos/human-frames-mobile" :  "/videos/human-frames"


    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${basePath}/frame_${String(i).padStart(4, "0")}.webp`;
      framesRef.current.push(img);
    }
  }, [isMobile, isMid, totalFrames]);

  // ── Scrub function (returned for use in ScrollTrigger onUpdate) ────────────
  const scrubTo = (progress: number) => {
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    if (!canvas || frames.length === 0) return;

    const index = Math.min(
      Math.floor(progress * frames.length),
      frames.length - 1
    );
    const img = frames[index];
    if (!img?.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;
    const targetWidth = Math.round(cssWidth * dpr);
    const targetHeight = Math.round(cssHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cssWidth / cssHeight;
    let dw: number, dh: number;

   if (imgRatio > canvasRatio) {
  dh = cssHeight;
  dw = dh * imgRatio;
} else {
  dw = cssWidth;
  dh = dw / imgRatio;
}

    const dx = (cssWidth - dw) / 2;
    const dy = (cssHeight - dh) / 2;

    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  return { scrubTo };
}