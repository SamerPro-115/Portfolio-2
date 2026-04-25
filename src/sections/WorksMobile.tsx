import {  useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { projects } from '@/data/projects';



export function WorksMobile() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
    const {t} = useTranslation();
    const isAr = useLanguage();

    const works = projects;

    


  
  const handleClick = (index: number) => {
    setSelectedWork(index)
    document.documentElement.style.overflow = 'hidden'
  }

  const handleModuleClose = () => {
    setSelectedWork(null);
    document.documentElement.style.overflow = 'auto'

  }


  return (
    <section
      data-section="works"
      className="min-h-screen bg-black text-white relative overflow-hidden py-20"
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

      <div className="container mx-auto px-6 relative">
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
              {t("Works.title")}
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
             className={`${isAr ? "text-2xl md:text-3xl" : "text-xl"} text-gray-400 max-w-3xl mx-auto font-light pt-5`}>
            {t("Works.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {works.map((work, index) => (
            <motion.div
              key={work.key}
              className="group relative cursor-pointer "
              onClick={() => handleClick(index)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true}}
            >
              <div className="relative h-96 bg-black border-4 border-white overflow-hidden group-hover:border-gray-300 transition-all duration-500">
                
               

                <div className="relative  h-full flex">
                  <div className="w-2/3 md:w-1/2 p-4 md:p-8 flex flex-col justify-between text-black relative ">
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold tracking-widest">
                          {work.year}
                        </div>
                        <div className="w-8 h-px bg-black mt-2"></div>
                      </div>
                    </div>

                    <div className='h-full  justify-center flex flex-col'>
                      <h3 className={`${isAr ? "md:text-3xl lg:text-4xl xl:text-5xl text-2xl" : "text-2xl md:text-3xl lg:text-4xl  "} font-bold tracking-tighter mb-4 transform transition-transform duration-300 text-white group-hover:translate-x-2 `}>
                         {t(`Works.Projects.${work.key}.title`)}
                      </h3>

                      <div className="space-y-1">
                        {work.tech.slice(0, 3).map((tech) => (
                          <div
                            key={tech}
                            className={`${isAr ? "xl:text-2xl md:text-lg text-lg" : "xl:text-xl md:text-md text-sm"} font-bold tracking-widest opacity-70 text-white`}
                          >
                            {tech.toUpperCase()}
                          </div>
                        ))}
                      </div>
                    </div>

                    
                  </div>

                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={work.img}
                      loading='lazy'
                      alt={work.key}
                      className="w-full h-full object-cover filter filter-[grayscale(0.3)] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    />

                    
                  </div>
                </div>

               

                <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

             
            </motion.div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedWork !== null && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-9999 p-4"
            onClick={handleModuleClose}
          >
            <div
              className="bg-zinc-950 border border-zinc-800 max-w-5xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-zinc-800 p-8 flex justify-between items-start bg-gradient-to-r from-zinc-950 to-zinc-900">
                <div>
                  <h3 className={`text-3xl font-bold tracking-tight mb-3`}>
                    {t(`Works.Projects.${works[selectedWork].key}.title`)}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-white text-black text-md font-bold">
                      {works[selectedWork].year}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleModuleClose}
                  className="w-8 h-8 md:w-12 md:h-12 border border-zinc-700 hover:border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <span className={`font-bold ${isAr ? "text-4xl" : "text-2xl"} group-hover:rotate-90 transition-transform duration-300`}>
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
                        alt={works[selectedWork].key}
                        loading='lazy'
                        className="w-full border border-zinc-700 shadow-2xl"
                      />
                      <div className="absolute -bottom-4 -right-4 w-full h-full border border-zinc-800 -z-10"></div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className={`${isAr ? "text-4xl" : "text-2xl"}  font-bold mb-4 tracking-wide text-white/90`}>
                       {t("Works.overview")}
                      </h4>
                      <p className={`text-zinc-300 leading-relaxed ${isAr ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                        {t(`Works.Projects.${works[selectedWork].key}.desc`)}
                      </p>
                    </div>

                    <div>
                      <h4 className={`${isAr ? "text-2xl" : "text-xl"} font-bold mb-4 tracking-wide text-white/90`} >
                        {t("Works.main-stack")}
                      </h4>
                      <div className="space-y-2">
                        {works[selectedWork].tech.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800"
                          >
                            <div className="w-2 h-2 bg-white"></div>
                            <span className={`font-medium ${isAr ? "text-xl" : "text-md"} tracking-wider`} style={{fontFamily: "Iosevka Charon', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>
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
                      className={`${works[selectedWork].key === "Wedding Invitation" && "pointer-events-none bg-white/40"} inline-flex items-center justify-center w-full bg-white ${isAr ? "text-lg" : "text-sm md:text-md" } text-black md:px-8 py-4 font-bold tracking-widest hover:bg-zinc-200 transition-all duration-300 group`}
                    >
                      <span>{works[selectedWork].key === "Wedding Invitation" ? t("Works.soon") : t("Works.visit-site")}</span>
                      <div className={`ml-3 w-3 h-3 border-r-2 border-t-2 border-black transform ${isAr ? 'rotate-[222deg]' : 'rotate-45'} group-hover:translate-x-1 transition-transform duration-300`}></div>
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