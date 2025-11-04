import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">CUhackit '26</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-8 font-light">
            Where Innovation Meets Creativity
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
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
