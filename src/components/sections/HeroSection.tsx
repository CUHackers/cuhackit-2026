import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown
import './hero.css';

import tornado1 from "@/assets/HeroSection/tornado1.svg";
import tornado2 from "@/assets/HeroSection/tornado2.svg";
import tornado3 from "@/assets/HeroSection/tornado3.svg";
import tornado4 from "@/assets/HeroSection/tornado4.svg";

import townSkyNoCloud from "@/assets/TownSkyNoCloud.svg";
import clouds from "@/assets/Clouds.svg";
import logoNew from "@/assets/LogoNew.svg"

const HeroSection = () => {
  // State for tornado animation frame
  const [tornadoFrame, setTornadoFrame] = useState(0);
  
  // Assuming 3 frames for the tornado animation based on "multiple tornado assets"
  // Adjust the array below with actual filenames found in assets/herosection
  const tornadoImages = [
    // '/src/assets/HeroSection/tornado0.svg',
    tornado1,
    tornado2,
    tornado3,
    tornado4
    // '/src/assets/HeroSection/tornado5.svg',

  ];
  
  const tornadoSpeed = 150;

  useEffect(() => {
    const interval = setInterval(() => {
      setTornadoFrame((prev) => (prev + 1) % tornadoImages.length);
    }, tornadoSpeed); // Change frame every 200ms

    return () => clearInterval(interval);
  }, [tornadoImages.length]);

  // Calculate days until CUhackit (Example date: Jan 25, 2025 - adjust as needed)
  const targetDate = new Date('2026-02-27T00:00:00');
  const today = new Date();
  const timeDiff = targetDate.getTime() - today.getTime();
  const daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#a8c2ff' }}>
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(-15%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
      {/* Background image (TitleBackground.svg) - center and fill the screen */}
      <div
        className="absolute inset-0 z-0"
        style={{
          // Place the SVG on top and a vertical two-color background beneath it.
          // Top and bottom are solid colors with an abrupt split at 50% (no gradient blending)
          // backgroundImage: "url('/src/assets/TitleBackground.svg')",
          backgroundImage: `url(${townSkyNoCloud})`, // Fix this later to have moving skys
          backgroundPosition: 'center center, center center',
          backgroundSize: 'cover, cover',
          backgroundRepeat: 'no-repeat, no-repeat',
          // backgroundColor: '#a8c2ff',
        }}
      />

      {/* Animated clouds layers (three parallax layers) */}
      {/* <div className="hero-clouds h-40 md:h-56 lg:h-72 portrait:top-[30%] z-20"> */}
      <div className="hero-clouds h-80 portrait:top-[10%] md:h-56 lg:h-72 z-20">
        <div
          className="hero-clouds__layer hero-clouds__layer--slow"
          style={{ backgroundImage: "url()" }}
        />
        <div
          className="hero-clouds__layer hero-clouds__layer--mid "
          style={{ backgroundImage: `url(${clouds})`, top: '10%' }}
        />
        <div
          className="hero-clouds__layer hero-clouds__layer--fast"
          style={{ backgroundImage: `url(${clouds})`, top: '20%' }}
        />
      </div>


      {/* Tornado with Countdown - Bottom Right */}
      <div 
        // Use vmin for width so it scales with the smaller of height or width (responsive to both)
        className="absolute bottom-[10%] right-[5%] z-20 w-[45vmin] sm:w-[40vmin] md:w-[35vmin] lg:w-[30vmin] h-auto"
        style={{ containerType: 'inline-size' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Invisible placeholder to lock dimensions to the first frame so text doesn't jump */}
          <img 
            src={tornadoImages[0]} 
            alt="" 
            className="w-full h-auto opacity-0 pointer-events-none"
          />

          {/* Animated Tornado Image */}
          <img 
            src={tornadoImages[tornadoFrame]}
            // src="/src/assets/HeroSection/SVG/tornado1.svg" 
            alt="Tornado" 
            className="absolute inset-0 w-full h-full object-contain"
          />
          
          {/* Text Overlay */}
          {/* ADJUST POSITION HERE: Change translate-y-[15%] (vertical) or add translate-x-[...] (horizontal) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-[-5%] text-[#F5F5DC] font-serif" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {/* Using cqw (Container Query Width) units locks text size to the container size */}
            <span className="font-bold leading-none" style={{ fontFamily: 'Rye, serif', fontSize: '20cqw' }}>
              {daysUntil > 0 ? daysUntil : 0}
            </span>
            {/* Adjust mt-[2%] to change spacing between the number and "DAYS UNTIL" */}
            <span className="font-bold tracking-widest mt-[2%]" style={{ fontFamily: 'Rye, serif', fontSize: '4.8cqw' }}>
              DAYS UNTIL
            </span>
            <span className="font-bold tracking-widest" style={{ fontFamily: 'Rye, serif', fontSize: '7cqw' }}>
              CUHACKIT
            </span>
          </div>
        </div>
      </div>

      {/* Logo positioned in the hero section */}
      <div className="absolute z-30 top-40 align-top left-1/2 -translate-x-1/2 w-[90%] portrait:top-[20%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-5xl">
      {/* <div className="absolute z-30 top-40 align-top left-1/2 -translate-x-1/2 w-[90%] portrait:top-[37%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-5xl"> */}
        <img 
        // A/B test Logo2 and LogoNew
          src={logoNew}
          alt="CUhackit '26 Logo" 
          className="w-full h-auto"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-[4vh] left-1/2 -translate-x-1/2 z-30 text-[#F5F5DC] opacity-80">
        <div className="animate-bounce-subtle flex flex-col items-center">
          <span 
            className="font-bold tracking-widest mb-[0.5vh]" 
            style={{ 
              fontFamily: 'Rye, serif', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)'
            }}
          >
            SCROLL
          </span>
          <ChevronDown 
            strokeWidth={3} 
            className="w-[6vw] h-[6vw] min-w-[24px] min-h-[24px] max-w-[40px] max-h-[40px]"
            style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))' }} 
          />
        </div>
      </div>
  
    </section>
  );
};

export default HeroSection;
