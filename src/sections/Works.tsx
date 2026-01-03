import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const works = [
   {
    name: "Jusoor events",
    link: "https://jusoorevent.com",
    img: "/works/Jusoor.webp",
    desc: "Jusoor is a full service exhibitions, conferences, and events project, delivering end-to-end solutions including event production, execution, and marketing.",
    tech: ["HTML", "Jquery", "Tailwind CSS", "i18next"],
    year: "2025"
  },
   {
    name: "SAAK TEAM Training Center",
    link: "https://saakteam.com.sa",
    img: "/works/SAAK.webp",
    desc: "SAAK TEAM a platform for IPC-certified electronics training. I built the website to showcase courses, activities, and media in a simple, modern way.",
    tech: ["React", "TypeScript", "Tailwind CSS", "i18next"],
    year: "2025"
  },
   {
    name: "Wakan",
    link: "https://wa-kan.com",
    img: "/works/Wakan.webp",
    desc: "Marketing company portfolio site, vibrant colors reflecting brand identity and fully responsive with smooth scrolling.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2025"
  },
   {
    name: "Mohtaway",
    link: "https://mohtaway.app",
    img: "/works/Mohtaway.webp",
    desc: "Content sharing platform with subscription features. You can upload your video/book/podcast and sell it at Mohtaway marketplace.",
    tech: ["JavaScript", "Node.js", "MongoDB", "GCP"],
    year: "2024 - 2025"
  },

  {
    name: "FastFlow",
    link: "https://fastflow.sa",
    img: "/works/fastflow.webp",
    desc: "A unique portfolio website for exceptional events. Creatively crafted to showcase innovation, highlighting a one-of-a-kind company.",
    tech: ["JavaScript", "Bootstrap", "Animate.css"],
    year: "2024"
  },
  
    {
    name: "Trader's Tools",
    link: "https://chromewebstore.google.com/detail/ljdomcoabaomadeckhgmdlbjdpmcgdhj?utm_source=item-share-cb",
    img: "/works/ex.webp",
    desc: "A React based Chrome extension for traders with simple tools like a calculator and to-do-list, etc.",
    tech: ["React", "Chrome API", "JavaScript"],
    year: "2025"
  },
 
  {
    name: "Learning Corner",
    link: "https://www.learningcorner.net",
    img: "/works/learncorner.webp",
    desc: "A learning platform for students to connect with their own private tutor. With customizing Msaaq platform pages using embedded CSS and HTML to provide a better UI.",
    tech: ["HTML", "CSS", "Custom Integration"],
    year: "2023"
  },
];

export function Works() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = selectedWork !== null ? 'hidden' : 'auto';
  }, [selectedWork])


  return (
    <section
      data-section="works"
      className="min-h-screen bg-black text-white relative overflow-hidden py-20 z-9999"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 50px, white 50px, white 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, white 50px, white 51px)
          `,
          }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10 ">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-white"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 10}%`,
              animation: `float ${4 + i}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-white transform -rotate-2 opacity-10"></div>
            <motion.h2
              className="relative text-6xl md:text-8xl font-bold tracking-tighter mb-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true}}
            >
              WORKS
            </motion.h2>
          </div>
          <motion.div className="w-32 h-1 bg-white mx-auto mb-6"
           initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}></motion.div>
          <motion.p  initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true}}
             className="text-xl text-gray-400 max-w-3xl mx-auto font-light pt-5">
            Take a look on what I've built for different customers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {works.map((work, index) => (
            <motion.div
              key={work.name}
              className="group relative cursor-pointer "
              onClick={() => setSelectedWork(index)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true}}
            >
              <div className="relative h-96 bg-black border-4 border-white overflow-hidden group-hover:border-gray-300 transition-all duration-500">
                
               

                <div className="relative z-10 h-full flex">
                  <div className="w-2/3 md:w-1/2 p-4 md:p-8 flex flex-col justify-between text-black relative z-999999999">
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-xl font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold tracking-widest">
                          {work.year}
                        </div>
                        <div className="w-8 h-px bg-black mt-2"></div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-3xl font-bold tracking-tighter mb-4 transform transition-transform duration-300 text-white group-hover:translate-x-2 ">
                        {work.name}
                      </h3>

                      <div className="space-y-1">
                        {work.tech.slice(0, 3).map((tech) => (
                          <div
                            key={tech}
                            className="text-xs font-bold tracking-widest opacity-70 text-white"
                          >
                            {tech.toUpperCase()}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-px bg-black text-white"></div>
                      <div className="text-xs tracking-widest font-bold">
                        PROJECT
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={work.img}
                      alt={work.name}
                      className="w-full h-full object-cover filter filter-[grayscale(0.3)] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-sm tracking-widest mb-2">
                          VIEW PROJECT
                        </div>
                        <div className="w-16 h-px bg-white mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                  <p className="text-sm leading-relaxed mb-4">{work.desc}</p>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest hover:gap-4 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    VISIT SITE
                    <div className="w-4 h-4 border-r-2 border-t-2 border-black transform rotate-45"></div>
                  </a>
                </div>

                <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white border-4 border-black transform rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black border-2 border-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedWork !== null && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedWork(null)}
          >
            <div
              className="bg-zinc-950 border border-zinc-800 max-w-5xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-zinc-800 p-8 flex justify-between items-start bg-gradient-to-r from-zinc-950 to-zinc-900">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-3">
                    {works[selectedWork].name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-white text-black text-sm font-bold">
                      {works[selectedWork].year}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="w-8 h-8 md:w-12 md:h-12 border border-zinc-700 hover:border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <span className="font-bold text-lg group-hover:rotate-90 transition-transform duration-300">
                    ×
                  </span>
                </button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3">
                    <div className="relative">
                      <img
                        src={works[selectedWork].img}
                        alt={works[selectedWork].name}
                        className="w-full border border-zinc-700 shadow-2xl"
                      />
                      <div className="absolute -bottom-4 -right-4 w-full h-full border border-zinc-800 -z-10"></div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4 tracking-wide text-white/90">
                        OVERVIEW
                      </h4>
                      <p className="text-zinc-300 leading-relaxed">
                        {works[selectedWork].desc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-4 tracking-wide text-white/90">
                        MAIN TECH STACK
                      </h4>
                      <div className="space-y-2">
                        {works[selectedWork].tech.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800"
                          >
                            <div className="w-2 h-2 bg-white"></div>
                            <span className="font-medium text-sm tracking-wider">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={works[selectedWork].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-white text-sm md:text-md text-black md:px-8 py-4 font-bold tracking-widest hover:bg-zinc-200 transition-all duration-300 group"
                    >
                      <span>LAUNCH PROJECT</span>
                      <div className="ml-3 w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-black transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}