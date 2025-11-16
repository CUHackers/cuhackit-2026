import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#a8c2ff' }}>
      {/* Background image (TitleBackground.svg) - center and fill the screen */}
      <div
        className="absolute inset-0 z-0"
        style={{
          // Place the SVG on top and a vertical two-color background beneath it.
          // Top and bottom are solid colors with an abrupt split at 50% (no gradient blending)
          // backgroundImage: "url('/assets/TitleBackground.svg')",
          backgroundImage: "url('/assets/Town.svg')", // Fix this later to have moving skys
          backgroundPosition: 'center center, center center',
          backgroundSize: 'cover, cover',
          backgroundRepeat: 'no-repeat, no-repeat',
          // backgroundColor: '#a8c2ff',
        }}
      />

  

      {/* Logo positioned in the hero section */}
      <div className="absolute z-30 top-40 align-top left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-5xl">
        <img 
          src="/assets/Logo2.svg" 
          alt="CUhackit '26 Logo" 
          className="w-full h-auto"
        />
      </div>

  
    </section>
  );
};

export default HeroSection;
