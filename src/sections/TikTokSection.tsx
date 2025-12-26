
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Code, Users } from 'lucide-react';

export default function TikTokSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEnglish, setIsEnglish] = useState(false);
const toggleLanguage = () => {
  setIsEnglish(!isEnglish);
  // Wait for state update, then reload video
  setTimeout(() => {
    if (videoRef.current) {
      videoRef.current.load(); // This forces the video to reload with new source
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, 0);
};
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Auto-pause video when out of view
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: "Followers", value: "69k+" },
    { icon: <Code className="w-5 h-5" />, label: "IT Facts", value: "100+" },
    { icon: <Zap className="w-5 h-5" />, label: "How It Works", value: "30+" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Background decorative elements */}
           
 <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white transform rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-white transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-white transform rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-16 bg-white transform -rotate-45"></div>
      </div>


      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-100" />
      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  font-extralight md:text-6xl mb-6 tracking-[0.15em] font-serif" style={{letterSpacing: "0.15em"}}>
            CONTENT CREATION
          </h2>
          <div className="w-32 h-1 bg-white mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Shared IT knowledge, tech facts, and code insights on TikTok
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video/Image Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Phone mockup */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-4 shadow-2xl border border-white/20">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/16]">
                  {/* Video Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Replace this src with your actual video path */}
                  <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      poster="/video-poster.png" // Optional: Add a thumbnail image
                      onClick={togglePlay}
                    >
                      <source src={isEnglish ? "/videos/video-english.mp4" : "/videos/Video.mp4"} type="video/mp4" />
                      {/* Fallback for browsers that don't support video */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4 p-8">
                          <Code className="w-20 h-20 mx-auto text-white/50" />
                          <p className="text-sm text-white/70 font-mono">
                            {'<IT_Content />'}
                          </p>
                        </div>
                      </div>
                    </video>
                  

                    {/* Play/Pause Overlay */}
                    {!isPlaying && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                        onClick={togglePlay}
                      >
                        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                          <Play className="w-10 h-10 text-black ml-1" />
                        </div>
                      </motion.div>
                    )}
                    
                    {/* TikTok-style UI overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-3 mb-2">
                        {/* <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" /> */}
                        <div className='w-10 h-10 rounded-full border-2 border-white'>
                          <img src="/tiktok-logo.jpg" className='rounded-full' alt="Tiktok logo" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">@samerpro_</p>
                          <p className="text-xs text-gray-300">IT Content Creator</p>
                        </div>
                      </div>
                      <p className="text-sm mb-2">
                        🔥 Did you know? #coding #tech #programmer
                      </p>
                    </div>

                    {/* Right side actions */}
                    <div className="absolute right-2 bottom-20 flex flex-col gap-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ">
                          <Play className="w-6 h-6 fill-white" />
                        </div>
                        <span className="text-xs">56K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<button 
  className='bg-black text-white border border-white rounded-xl p-1 cursor-pointer text-sm translation-video-button' 
  onClick={toggleLanguage}
>
  {isEnglish ? 'Arabic' : 'English'} Audio
</button>

              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-16 h-16 border-2 border-white/20 rounded-lg"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -right-8 w-20 h-20 border-2 border-white/20"
              />
            </div>
          </motion.div>

          {/* Right Side - Content Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 "
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Taught Tech,<br />
                One Video at a Time
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I created engaging content that broke down complex IT concepts into 
                bite-sized, entertaining videos. From coding tips and tech facts to 
                explaining how things worked under the hood.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="border border-white/20 p-4 rounded-lg hover:border-white/40 transition-colors"
                >
                  <div className="mb-2 text-white/70">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Content Topics */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-4">What I Shared:</h4>
              {[
                "Strange & fascinating IT facts",
                "Programming tips & tricks",
                "How things work in tech",
                "Top 5",
                "And more..",
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>{topic}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://tiktok.com/@samerpro_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <Play className="w-5 h-5" />
              View Past Content
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}