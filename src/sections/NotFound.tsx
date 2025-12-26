import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

const Particles = lazy(() => import('@/components/Animations/Particles'));


const NotFound = () => {
  const navigate = useNavigate();
  

  const handleGoHome = () => {
    navigate('/');
  };

  const number404 = "404";
  const messageText = "PAGE NOT FOUND";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Pure Black Base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Atmospheric Effects */}
      <div 
        className="absolute inset-0 md:opacity-100 opacity-70"
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 25% 30%, rgba(45, 45, 45, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 700px 500px at 75% 70%, rgba(40, 40, 40, 0.35) 0%, transparent 50%),
            linear-gradient(135deg, transparent 0%, rgba(50, 50, 50, 0.25) 25%, rgba(42, 42, 42, 0.18) 35%, transparent 50%),
            radial-gradient(ellipse at center, transparent 30%, rgba(30, 30, 30, 0.5) 70%, rgba(15, 15, 15, 0.8) 100%)
          `
        }}
      />
      
      {/* Spotlight */}
      <div 
        className="absolute inset-0 md:opacity-100 opacity-70"
        style={{
          background: `
            radial-gradient(circle 600px at 50% 40%, rgba(120, 120, 120, 0.3) 0%, transparent 70%)
          `
        }}
      />
      
      {/* Particles */}
      <div className="absolute inset-0">
                            <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <Particles
          particleColors={['#ffffff', '#f5f5f5', '#e8e8e8']}
          particleCount={100}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={40}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* 404 Number - Large and dramatic */}
        <div className="mb-8 flex">
          {number404.split('').map((digit, index) => (
            <span
              key={index}
              className="number-reveal text-white font-bold opacity-0"
              style={{
                fontSize: 'clamp(80px, 20vw, 200px)',
                fontFamily: "Playfair Display, serif",
                letterSpacing: 'clamp(5px, 2vw, 20px)',
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {digit}
            </span>
          ))}
        </div>

        {/* Divider Line - Anime style */}
        <div 
          className="w-0 h-[2px] bg-white mb-8 line-expand"
          style={{
            animationDelay: '0.6s',
          }}
        />

        {/* Message Text */}
        <div className="flex mb-12">
          {messageText.split('').map((letter, index) => (
            <span
              key={index}
              className="letter-reveal text-white opacity-0"
              style={{
                fontSize: 'clamp(16px, 3vw, 24px)',
                fontFamily: "Playfair Display, serif",
                letterSpacing: 'clamp(3px, 1vw, 12px)',
                animationDelay: `${0.8 + index * 0.05}s`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p 
          className="text-white/60 text-sm md:text-base mb-10 text-center max-w-md fade-in-up opacity-0"
          style={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: '2px',
            animationDelay: '1.5s',
          }}
        >
          The page you're looking for has drifted into the void
        </p>

        {/* Button */}
        <button
          onClick={handleGoHome}
          className="group relative px-8 py-3 bg-transparent border-2 border-white text-white font-semibold 
                     transition-all duration-300 hover:bg-white hover:text-black fade-in-up opacity-0"
          style={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: '3px',
            animationDelay: '1.8s',
          }}
        >
          RETURN HOME
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </button>
      </div>

      {/* Animations */}
    
    </div>
  );
};

export default NotFound;