import { useLanguage } from '@/hooks/useLanguage';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

const RoomExperince = lazy(() => import('@/components/HeroModels/RoomExperince'));


const MyRoom = () => {
  const {t} = useTranslation();
  const isAr = useLanguage();


  const text = t("introduction-word")

  return (
    <div className='lg:pb-0 pb-20 bg-black relative'>

        
     
    {/* 3D Model */}
    <figure className=''>
      <div className="hero-3d-layout grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 items-center lg:justify-center w-full lg:h-screen h-[70vh] ">
        <RoomExperince />

    <div 
        className="w-full flex z-20 items-center justify-center relative lg:h-screen"
      >

        
        
       
        {/* Content Layer */}
        <div className="flex justify-center">
          <h1 
           className="text-white text-2xl md:text-4xl lg:text-5xl  bottom-32 flex  
              introduction-title"
            style={{
              filter: "brightness(0.85)",
            }}
          >
           {isAr ?  <span className="letter-reveal">{text}</span> : 
           (
              <span
                className="letter-reveal"
                style={{
                  animationDelay: `${1 * 0.1}s`,
                  opacity: 0,
                }}
              >
                {text}
              </span>
            
           )
           }
          </h1>
        </div>
      </div>
      </div>
    </figure>

          
    

      {/* <div className="h-screen" /> */}

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
    </div>
  );
};


export default MyRoom;