


export function ScrollIndecator() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999999] flex flex-col items-center gap-2 pointer-events-none">
      
      <span
        className="text-white text-[0.6rem] tracking-[0.3em] uppercase"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        scroll
      </span>

      {/* Mouse body */}
      <div
        className="relative flex justify-center"
        style={{
          width: "22px",
          height: "34px",
          border: "1.5px solid rgba(255,255,255,255)",
          borderRadius: "11px",
          filter: "drop-shadow(0 0 6px rgba(0,0,0,0.9))",
        }}
      >
        {/* Scroll wheel dot */}
        <div
          style={{
            width: "3px",
            height: "6px",
            background: "white",
            borderRadius: "2px",
            marginTop: "5px",
            animation: "mouseWheel 1.5s ease-in-out infinite",
            boxShadow: "0 0 4px rgba(255,255,255,0.8)",
          }}
        />
      </div>

    </div>
  );
}