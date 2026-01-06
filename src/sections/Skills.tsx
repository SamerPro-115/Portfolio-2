import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';




export function Skills() {
  const [, setHoveredSkill] = useState<string | null>(null);
    const {t} = useTranslation();
    const isAr = useLanguage();
  
  const skillCategories  = [
    {
      skills: [
        { name: "React", icon: "/icons/React.png" },
        { name: "TypeScript", icon: "/icons/TS.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind-css.png" },
        { name: "HTML", icon: "/icons/html.png" },
        { name: "CSS", icon: "/icons/css.png" },
        { name: "JavaScript", icon: "/icons/JS.png"},
        { name: "Bootstrap", icon: "/icons/Bootstrap.png"},
        { name: "Jquery", icon: "/icons/jquery.png" },
        { name: "Shadcn/Ui", icon: "/icons/shadcn.png"},
        { name: "Node.js", icon: "/icons/Node.js.png"},
        { name: "MongoDB", icon: "/icons/mongoDB.png"},
        { name: "Express.js", icon: "/icons/express.png" },
          { name: "Git", icon: "/icons/Git.png"},
        { name: "GCP", icon: "/icons/GCP.png"},
        { name: "Github", icon: "/icons/github.png"},
      ]
    }
  ];

 return (
    <section className="min-h-screen bg-black py-20 relative overflow-hidden">
       <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none ">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute border-2 border-white rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-6 h-6 border-2 border-white"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>


      <div className="container mx-auto px-6 relative z-50 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 
            className={`${isAr ? "text-6xl md:text-8xl" : "text-4xl md:text-7xl"}  font-extralight text-white mb-8 tracking-[0.2em] font-serif`}
            initial={{ letterSpacing: "0.1em" }}
            whileInView={{ letterSpacing: "0.2em" }}
            transition={{ duration: 2 }}
          >
           {t("Skills.title")}
                 <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>

          </motion.h2>

           <div className="absolute inset-0 overflow-hidden sm:block hidden pointer-events-none">
     {[...Array(10)].map((_, i) => (
       <motion.div
         key={i}
         initial={{ scaleX: 0, opacity: 0 }}
         whileInView={{ scaleX: 1, opacity: 0.4 }}
         transition={{ delay: i * 0.1, duration: 0.8 }}
         className="absolute bg-white/60 h-1 origin-left transform -rotate-12"
         style={{
           width: "300px",
           top: `${30 + i * 8}%`,
           left: `${-20 + i * 10}%`,
         }}
       />
     ))}
   </div>

          
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="w-8 h-px bg-white/60"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-12 h-px bg-white/60"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-8 h-px bg-white/60"></div>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            {t("Skills.desc")}
          </motion.p>
        </motion.div>



        

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 justify-items-center">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.7,
                    y: 40
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                    <motion.div
                      className="w-full h-full bg-black border border-gray-800 
                               hover:border-white/30 transition-all duration-500
                               flex flex-col items-center justify-center p-4
                               relative overflow-hidden"
                      whileHover={{
                        boxShadow: "0 8px 32px rgba(255,255,255,0.1)"
                      }}
                    >
                      <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <motion.div
                        className="relative mb-2"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -2, 2, 0]
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10" 
                        />
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      
                      <h4 className="text-white font-light text-xs md:text-sm text-center 
                                   leading-tight font-sans tracking-wide opacity-90
                                   group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                      </h4>
                      
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                                 w-0 h-px bg-white group-hover:w-3/4 transition-all duration-500"
                      />
                    </motion.div>
                    
                    <motion.div
                      className="absolute inset-0 -z-10 bg-white/5 opacity-0
                               group-hover:opacity-100 transition-opacity duration-500"
                      style={{ transform: 'scale(1.2)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

     
      </div>
    </section>
  );
}


