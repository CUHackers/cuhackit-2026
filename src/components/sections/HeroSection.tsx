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

      {/* Animated background elements */}
  {/* <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div> */}

      {/* Logo positioned in the hero section */}
      <div className="absolute z-30 top-40 align-top left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-5xl">
        <img 
          src="/assets/Logo2.svg" 
          alt="CUhackit '26 Logo" 
          className="w-full h-auto"
        />
      </div>

  {/* <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-western mb-6" style={{ textShadow: 'var(--shadow-text)', }}>
            <span style={{ color: '#153012' }}>CUhackit '26</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-8 font-body font-bold" style={{ textShadow: 'var(--shadow-text)' }}>
            Saddle Up for Innovation
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <Calendar className="w-5 h-5 text-primary" />
              <span>February 14-16, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Clemson University</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <Users className="w-5 h-5 text-secondary" />
              <span>500+ Hackers</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-body font-bold bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 border-2 border-primary/30"
            >
              Join the Posse
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 font-body font-bold border-2 border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105"
            >
              Scout the Territory
            </Button>
          </div>
        </div>

      </div> */}
    </section>
  );
};

export default HeroSection;
