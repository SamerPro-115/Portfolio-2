import ScrollDown from '@/components/ui/scroll-down';
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';

const Particles = lazy(() => import('@/components/Animations/Particles'));


const Introduction = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const opacity = Math.max(1 - scrollY / 500, 0);
  const text = "WELCOME";

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
        style={{ opacity }}
      >
        {/* Pure Black Base */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Combined Atmospheric Effects */}
        <div 
          className="absolute inset-0 lg:opacity-50 opacity-25"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 25% 30%, rgba(45, 45, 45, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 700px 500px at 75% 70%, rgba(40, 40, 40, 0.35) 0%, transparent 50%),
              linear-gradient(135deg, transparent 0%, rgba(50, 50, 50, 0.25) 25%, rgba(42, 42, 42, 0.18) 35%, transparent 50%),
              radial-gradient(ellipse at center, transparent 30%, rgba(30, 30, 30, 0.5) 70%, rgba(15, 15, 15, 0.8) 100%)
            `
          }}
        />
        
        {/* Spotlight + Light Rays */}
        <div 
          className="absolute inset-0 lg:opacity-70 opacity-40"
          style={{
            background: `
              radial-gradient(circle 500px at 30% 40%, rgba(120, 120, 120, 0.25) 0%, transparent 70%),
              radial-gradient(circle 400px at 70% 60%, rgba(110, 110, 110, 0.2) 0%, transparent 65%),
              linear-gradient(110deg, transparent 0%, transparent 42%, rgba(65, 65, 65, 0.18) 46%, rgba(55, 55, 55, 0.12) 50%, rgba(65, 65, 65, 0.18) 54%, transparent 58%)
            `
          }}
        />
        
        {/* Particles Layer */}
        <div className="absolute inset-0">
                    <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <Particles
            particleColors={['#ffffff', '#f5f5f5', '#e8e8e8']}
            particleCount={150}
            particleSpread={10}
            speed={0.08}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
                    </Suspense>

        </div>
        
        {/* Content Layer */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 
           className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex 
             tracking-[17px] md:tracking-[30px] lg:tracking-[40px] xl:tracking-[50.8px]"
            style={{
              filter: "brightness(0.85)",
              fontFamily: "Playfair Display, serif",
            }}
          >
            {text.split('').map((letter, index) => (
              <span
                key={index}
                className="letter-reveal"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <ScrollDown />
        </div>
      </div>

      <div className="h-screen" />

      {/* Letter Reveal Animation */}
      <style>{`
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .letter-reveal {
          display: inline-block;
          animation: letterReveal 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};


export default Introduction;