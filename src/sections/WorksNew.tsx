import { useRef } from "react"

const projects = [
  {
    name: "Jusoor Events",
    link: "https://jusoorevent.com",
    img: "/works/Jusoor.webp",
    desc: "A bilingual event management platform for conferences across Saudi Arabia.",
    tech: ["HTML", "jQuery", "Tailwind CSS", "i18next"],
    year: "2025",
    num: "01",
  },
  {
    name: "SAAK Training",
    link: "https://saakteam.com",
    img: "/works/SAAK.webp",
    desc: "Full-featured LMS and training portal for a Saudi tech education company.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    year: "2024",
    num: "02",
  },
  {
    name: "Noon Dashboard",
    link: "https://noon-dash.vercel.app",
    img: "/works/fastflow.webp",
    desc: "Internal analytics dashboard for tracking sales and inventory metrics.",
    tech: ["React", "Recharts", "Zustand"],
    year: "2024",
    num: "03",
  },
  {
    name: "Rafiq App",
    link: "https://rafiq.app",
    img: "/works/ex.webp",
    desc: "A social companion app connecting students across Saudi universities.",
    tech: ["React Native", "Expo", "Supabase"],
    year: "2024",
    num: "04",
  },
  {
    name: "Maktaba",
    link: "https://maktaba.io",
    img: "/works/learncorner.webp",
    desc: "Arabic digital library with reading progress and recommendations.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2023",
    num: "05",
  },
  {
    name: "Wujood Studio",
    link: "https://wujood.studio",
    img: "/works/Wakan.webp",
    desc: "Creative agency portfolio with immersive scroll animations.",
    tech: ["React", "GSAP", "Framer Motion"],
    year: "2023",
    num: "06",
  },
  {
    name: "Atheer Weather",
    link: "https://atheer.vercel.app",
    img: "/works/Mohtaway.webp",
    desc: "Minimal weather app with animated sky backgrounds.",
    tech: ["React", "OpenWeather API", "Canvas API"],
    year: "2022",
    num: "07",
  },
]



export default function WorksNew() {


  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ fontFamily: "'Iosevka Charon', monospace" }}
    >


  
<img
id="working-image"
  src="https://images.pexels.com/photos/34317747/pexels-photo-34317747.jpeg"
  className="w-full h-full object-cover"
   style={{
           clipPath: "inset(30% 50% round 4px)", // starts as tiny rect in center
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
        <p className="text-[10px] tracking-[0.45em] text-white/25 uppercase">
          Selected works
        </p>
        <h2
          className="mt-1 text-5xl font-bold leading-none text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          Works
        </h2>
      </div>

      {/* Project counter */}
      <div className="absolute top-10 right-12 z-30 text-right">
        <p className="text-[10px] tracking-[0.4em] text-white/25 uppercase">
          {projects.length} projects
        </p>
      </div>

     

      {/* ── Horizontal track ──────────────────────────────────────────── */}
      <div
      id="track"
        className="absolute inset-0 z-20 flex items-center"
      
      >
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="panel relative flex h-screen w-screen flex-shrink-0 items-center justify-center px-16"
          >
            <div className="panel-content flex w-full max-w-5xl items-center gap-16 ">

              {/* Left — project info */}
              <div className="flex-shrink-0 w-80">
                {/* Number */}
                <p
                  className="mb-6 text-[5rem] font-bold leading-none text-white/8"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {project.num}
                </p>

                {/* Name */}
                <h3
                  className="mb-4 text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-none text-white"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {project.name}
                </h3>

                {/* Desc */}
                <p className="mb-6 text-sm leading-relaxed text-white/40">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-widest text-white/30 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Year + link */}
                <div className="flex items-center gap-4">
                  <span className="text-xs tabular-nums text-white/20">{project.year}</span>
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="flex items-center gap-2 text-xs tracking-widest text-white/50 uppercase transition-colors hover:text-white"
                  >
                    Visit ↗
                  </button>
                </div>
              </div>

              {/* Right — screenshot */}
              <div
                className="relative h-full flex-1 overflow-hidden "
                style={{
                   height: "50vh",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle top fade */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%)",
                  }}
                />
              </div>
            </div>

            {/* Vertical divider between panels */}
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