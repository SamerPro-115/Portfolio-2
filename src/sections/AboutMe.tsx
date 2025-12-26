import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function AboutMe() {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [isMid, setIsMid] = useState<boolean>(false);

  const images = [
    { src: "/madrid.png", alt: "madrid", id: 0, desc: "Football" },
    { src: "/manga.jpg", alt: "manga", id: 1, desc: "Animation" },
    { src: "/Rocket.png", alt: "rocket league", id: 2, desc: "Gaming" }
  ];

  const handleImageClick = (imageId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    if (expandedImage === imageId) {
      setExpandedImage(null);
    } else {
      setExpandedImage(imageId);
    }
  };

  const handleContainerClick = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMid(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handlAlert = () => {
    toast.message("Sorry, I'm still working on my profile!")
  }

  return (
    <div 
      className="min-h-screen flex lg:flex-row flex-col justify-center overflow-x-hidden" 
      onClick={handleContainerClick}
      id="about-me"
    >

      <div className="text flex flex-1 bg-black justify-center items-center">
        <div className="flex flex-col w-2/3 lg:mt-0 lg:mb-0 sm:mt-30 sm:mb-30 mt-10 mb-10">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg lg:text-xl text-gray-300"
          >
            I'm a third-year university student in the Faculty of IT. Outside of coding, I have passions that inspire me and keep life exciting{' '}
            {isMid ? (
              <ArrowDown className="inline" />
            ) : (
              <ArrowRight className="inline" />
            )}
            
            <br />
            <br />
            <br />
            You can take a look on my profile (CV) down below for more details <br />
                  <Button onClick={handlAlert} variant={"default"} className="font-bold w-28 text-lg mt-4" style={{borderRadius: "5px"}}>Profile</Button>
          </motion.p>
        </div>
      </div>

      <div className="bg-black flex-1 justify-center items-center flex gap-[1vmin]">
        {images.map((image, index) => (
          <div
            key={image.id} 
            className={`relative transition-all duration-500 hover:grayscale-0 hover:brightness-110 hover:flex-[6] group ${
              expandedImage === image.id
                ? "flex-[6] grayscale-0 brightness-110"
                : expandedImage !== null
                ? "flex-1 grayscale brightness-75"
                : "flex-1 grayscale brightness-75 hover:grayscale-0 hover:brightness-110 hover:flex-[6]"
            }`}
          >
            <motion.img
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              className="lg:h-screen md:h-[70vh] h-[50vh] w-full object-cover "
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.1,
                margin: "0px 0px -100px 0px",
              }}
              src={image.src}
              alt={image.alt}
              onClick={(event) => handleImageClick(image.id, event)}
            />

            <div
              className={`absolute inset-0 bg-black/50 grid items-center justify-center wrapper pointer-events-none
                         transition-opacity duration-500 ease-out
                ${expandedImage === image.id 
                  ? "opacity-100" 
                  : "opacity-0 group-hover:opacity-100"}
              `}
            >
              <div className={`z-50 text-[clamp(1.2rem,4vw,2.5rem)] text-white top text-center
                             transition-all duration-700 ease-out transform
                ${expandedImage === image.id 
                  ? "opacity-100 translate-y-0 scale-100 delay-200" 
                  : "opacity-0 translate-y-6 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:delay-200"}
              `}>
                {image.desc}
              </div>
              <div className={`z-50 text-[clamp(1.2rem,4vw,2.5rem)] text-white bottom text-center
                             transition-all duration-700 ease-out transform
                ${expandedImage === image.id 
                  ? "opacity-100 translate-y-0 scale-100 delay-300" 
                  : "opacity-0 translate-y-6 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:delay-300"}
              `}>
                {image.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}