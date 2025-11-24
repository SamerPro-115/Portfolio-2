import { Button } from "@/components/ui/button";
import "../assets/hero.css";
import { motion } from "framer-motion";

export function Hero() {

  
  return (
    <section className="min-h-screen  overflow-hidden">
      <div className="relative hero-container  overflow-hidden">
        <div className="relative z-10  overflow-hidden">
          <img src="/splash-2.png" className="absolute splash-image" alt="splash image" />
          <div className="left-side-hero flex  overflow-hidden">
            <div className="text-container max-w-xl  overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Hi, I'm Samer
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-300 md:mb-8 mb-3 leading-relaxed "
              >
                A{" "}
                <span className="font-semibold text-white">
                  web developer{" "}
                </span>
                that loves coding and animation
              </motion.p>
              <div className="flex gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                   onClick={() => {
      document.getElementById("about-me")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
                >
                  <Button variant={"default"} className="font-bold" style={{borderRadius: "7px"}}>Scroll down</Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="flex-1 relative w-full h-screen overflow-hidden">

                 <motion.img
    animate={{ scale: [1, 1.07, 1] }}
    transition={{ 
      duration: 13, 
      repeat: Infinity, 
      ease: "easeInOut",
    }}
    src="/Gojo.jpg"
    alt="Hero image"
    className="w-full h-full object-cover hero-image z-20"
  />
      </div>
    </section>
  );
}
