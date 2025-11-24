import { motion } from "framer-motion";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Works } from "./sections/Works";
import { Contact } from "./sections/Contact";
import Social from "./components/social";
import { Toaster } from "sonner";
import Journy from "./sections/Journy";
import CurrentProject from "./sections/CurrentProject";
import CursorEffect from "./components/cursour-effect";

function App() {
  return (
    <div className="bg-black">
      <CursorEffect />
      <Social />
      <Hero />
      <AboutMe />

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex justify-center mt-32"
      ></motion.div>
      <Journy />

      <Skills />

      <Works />
      <CurrentProject />
      <Contact />

      <Toaster position="top-center" />
    </div>
  );
}

export default App;
