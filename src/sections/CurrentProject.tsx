import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


type TProject = {
    id: number,
    url: string,
    title: string,
    description: string
}



const currentProject = {
  title: "Connect system",
  description: "Developing a human resource management system that streamlines employee, manager, and team operations. The platform focuses on simplifying organizational workflows through intuitive design and reliable data handling.",
  fullDescription: "Connect HRMS is designed to help organizations efficiently manage their workforce. It provides tools for creating and managing teams, assigning managers, and tracking employees with real-time data updates. The system is built with scalability in mind, featuring a robust backend, responsive frontend with modern React architecture, and optimized data synchronization to ensure accuracy across all modules. The goal is to reduce administrative overhead while improving clarity and efficiency in HR operations.",
  tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Node.js", "GCP", "Socket.io", "MongoDB", "Git/Github", ],
  status: "On a break from work",
  progress: 30,
  images: [
    {
      id: 1,
      url: "/currentWork/1.png",
      title: "Login page Design",
      description: "Clean, modern login page"
    },
    {
      id: 2,
      url: "/currentWork/2.png",
      title: "Employees Ar",
      description: "Responsive grid layout with advanced filtering and search."
    },
    {
      id: 3,
      url: "/currentWork/3.png",
      title: "Managers",
      description: "Responsive grid layout with advanced filtering and search."
    },
    {
      id: 4,
      url: "/currentWork/4.png",
      title: "Admin Logs",
      description: "Monitoring users actions during the day."
    },
    {
      id: 5,
      url: "/currentWork/5.png",
      title: "Manage Teams",
      description: "Create, update, delete, manage teams"
    },
    {
      id: 6,
      url: "/currentWork/6.png",
      title: "Create Team Ar",
      description: "Creating team options"
    }
  ]
};

export default function CurrentProject() {
  const [selectedImage, setSelectedImage] = useState<TProject | null>(null);
  const [, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
       
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

        {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
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
        
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
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

      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>


      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Title section with speed lines */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`left-${i}`}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="absolute bg-white h-px origin-right"
                style={{
                  width: "100px",
                  top: `${48 + i * 2}%`,
                  right: `58%`,
                  transform: `translateY(-50%) rotate(-12deg)`,
                }}
              />
            ))}
            
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`right-${i}`}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.2 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }}
                className="absolute bg-white h-px origin-left"
                style={{
                  width: "100px",
                  top: `${48 + i * 2}%`,
                  left: `58%`,
                  transform: `translateY(-50%) rotate(12deg)`,
                }}
              />
            ))}
          </div>

          <motion.h2 
            className="text-4xl md:text-6xl font-extralight text-white mb-8 tracking-[0.15em] font-serif
                     drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] relative z-10"
            initial={{ letterSpacing: "0.1em" }}
            whileInView={{ letterSpacing: "0.15em" }}
            transition={{ duration: 2 }}
          >
            CURRENT WORK
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-6 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="w-6 h-px bg-white/40"></div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="w-10 h-px bg-white/40"></div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="w-6 h-px bg-white/40"></div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-light text-white mb-6 font-serif tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {currentProject.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 text-lg leading-relaxed mb-8 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {currentProject.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex flex-wrap justify-center gap-2">
              {currentProject.tech.map((tech) => (
                <span 
                  key={tech}
                  className="text-sm bg-white/5 border border-white/20 px-3 py-1 
                           text-gray-300 font-light tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            
          </motion.div>
          
          <motion.div 
            className="max-w-md mx-auto mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Development Progress</span>
              <span className="text-sm text-gray-300">{currentProject.progress}%</span>
            </div>
            <div className="bg-gray-800 h-1 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: `${currentProject.progress}%` }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
            <div className="flex space-x-1 mt-2">
              <span className="text-muted-foreground text-xs">Status:</span>
              <span className="text-muted-foreground text-xs">{currentProject.status}</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-2xl font-light text-white mb-12 text-center font-serif tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Project Gallery
          </motion.h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProject.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onHoverStart={() => setHoveredImage(image.id)}
                onHoverEnd={() => setHoveredImage(null)}
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-black border border-white/20 h-full  hover:border-white/30 
                              transition-all duration-500 overflow-hidden relative">
                  
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                               transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                               flex items-center justify-center"
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white text-sm font-light tracking-wide">
                        View Details
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="p-4">
                    <h5 className="text-white font-light text-lg mb-2 font-serif">
                      {image.title}
                    </h5>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/20 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/20 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-6"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-black border border-white/30 max-w-4xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white/40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-white/40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-white/40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white/40"></div>
                
                <motion.button
                  className="absolute top-4 right-4 z-10 text-white/60 hover:text-white text-3xl font-light"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </motion.button>
                
                {/* Large image */}
                <div className="h-full relative overflow-hidden">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-white text-2xl font-light font-serif mb-4 tracking-wide">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}