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

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-27T18:00:00-05:00'); // 6:00 PM EST
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = timeLeft 
    ? `${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`
    : "00:00:00";

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
            <span className="font-bold leading-none text-center" style={{ fontFamily: 'Rye, serif', fontSize: '14cqw' }}>
              {formattedTime}
            </span>
            {/* Adjust mt-[2%] to change spacing between the number and "DAYS UNTIL" */}
            <span className="font-bold tracking-widest mt-[2%]" style={{ fontFamily: 'Rye, serif', fontSize: '4.8cqw' }}>
              TIME UNTIL
            </span>
            <span className="font-bold tracking-widest" style={{ fontFamily: 'Rye, serif', fontSize: '7cqw' }}>
              CUHACKIT
            </span>
          </div>
        </div>
      </div>

      {/* Logo positioned in the hero section */}
      <div className="absolute z-30 top-40 align-top left-1/2 -translate-x-1/2 w-[90%] portrait:top-[20%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-5xl flex flex-col items-center">
      {/* <div className="absolute z-30 top-40 align-top left-1/2 -translate-x-1/2 w-[90%] portrait:top-[37%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-5xl"> */}
        <img 
        // A/B test Logo2 and LogoNew
          src={logoNew}
          alt="CUhackit '26 Logo" 
          className="w-full h-auto mb-8"
        />
        <a 
          href="https://whova.com/portal/QqWr2JuyrJTkv4YVVe2hKJ26TuRiyMejtO4%405fU8wyM%3D/?source=btn_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-lg md:text-2xl shadow-lg hover:scale-105 transition-transform duration-100 text-center"
          style={{ 
            backgroundColor: '#f8ba2a', 
            color: '#ffffff',
            fontFamily: 'Rye, serif',
            border: '4px solid #dda628'
          }}
        >
          CUHACKIT EVENT APP
        </a>
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
