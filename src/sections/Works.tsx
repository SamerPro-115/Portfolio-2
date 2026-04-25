import { projects } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";




export default function Works() {

   const { t } = useTranslation()
       const isAr = useLanguage();
   



  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black"
    >


  
<img
id="working-image"
  src="/images/work-bg.webp"
  className="w-full h-full object-cover"
   style={{
           clipPath: "inset(30% 50% round 4px)",
         }}
/>


      {/* Dark overlay for readability */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* ── Section label ─────────────────────────────────────────────── */}
      <div className="absolute top-10 left-12 z-30">
        <p className={`${isAr ? "text-md" : "text-[10px] uppercase tracking-[0.45em]" } text-white/50 `}>
         {t("Works.selected-works")}
        </p>
        <h2
          className="mt-1 text-5xl font-bold leading-none text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          {t("Works.title")}
        </h2>
      </div>

      {/* Project counter */}
      <div className="absolute top-10 right-25 z-30 text-right">
        <p className={`${isAr ? "text-xl" : "uppercase tracking-[0.4em] text-md"}   text-white/80 `}>
       {t("Works.projects")}   {projects.length} 
        </p>
      </div>

     

      {/* ── Horizontal track ──────────────────────────────────────────── */}
      <div
      id="track"
        className="absolute inset-0 z-20 flex items-center"
      
      >
        {projects.map((project, i) => (
          <div
            key={project.key}
            className="panel  relative flex h-screen w-screen flex-shrink-0 items-center justify-center md:p-10 xl:px-16"
          >
            <div className="panel-content flex w-full max-w-5xl items-center gap-14 ">

              {/* Left — project info */}
              <div className="flex-shrink-0 w-80">
                <p
                  className="mb-6 text-[5rem] font-bold leading-none text-white/8"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {project.num}
                </p>

                <h3
                  className={`${isAr ? "md:text-3xl lg:text-4xl xl:text-5xl text-2xl" : "md:text-2xl lg:text-4xl"} font-bold tracking-tighter mb-4 transform transition-transform duration-300 text-white group-hover:translate-x-2 `}
                >
                  {t(`Works.Projects.${project.key}.title`)}
                </h3>

                <p className={`${isAr ? "md:text-md lg:text-lg" : "md:text-xs lg:text-[1rem]"}  leading-relaxed mb-4 text-white/60`}>
                  {t(`Works.Projects.${project.key}.desc`)}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`${isAr ? "md:text-xs lg:text-sm xl:text-md" : "text-xs"} rounded-full border border-white/10 px-3 py-1 tracking-widest text-white/60 uppercase`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className={`${isAr ? "text-md xl:text-lg" : "text-sm"} tabular-nums text-white/60`}>{project.year}</span>
                  <a
                  href={project.link}
                  target="_blank"
                    className={`${isAr ? "md:text-lg xl:text-xl" : "md:text-sm lg:text-md xl:text-lg"} flex items-center gap-2 text-xs tracking-widest text-white/50 uppercase transition-colors hover:text-white ${project.key === "Wedding Invitation" ? "pointer-events-none" : "" }`}
                  >
                  {project.key === "Wedding Invitation" ? t("Works.soon") :  t("Works.visit-site")} ↗
                  </a>
                </div>
              </div>

             {/* Right — screenshot */}
<div
  className="relative h-full flex-1  xl:h-[60vh] overflow-hidden"
  style={{
    maxHeight: "50vh",
    transform: "perspective(1000px) rotateY(-3deg)",
    boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
    borderRadius: "6px",
  }}
>
  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-2 border-b border-white/10 flex-shrink-0">
    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
    {/* Fake URL bar */}
    <div className="ml-2 flex-1 rounded-sm bg-black/5 px-2 py-0.5 text-[10px] text-white/70 tracking-wider truncate">
      {project.link}
    </div>
  </div>

  <img
    src={project.img}
    alt={t(`Works.Projects.${project.key}.title`)} 
    className={`saturate-80 h-full w-full ${project.key === "Wedding Invitation" ? "object-fill" : "object-cover"} object-top transition-transform duration-700 hover:scale-105 `}
  />

  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%)",
    }}
  />

  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
    }}
  />
</div>
            </div>

            {i < projects.length - 1 && (
              <div
                className="absolute right-0 top-1/2 h-32 w-px -translate-y-1/2 bg-white/8"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}