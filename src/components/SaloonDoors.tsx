import { useState, useEffect } from 'react';

interface SaloonDoorsProps {
  onComplete?: () => void;
}

const SaloonDoors = ({ onComplete }: SaloonDoorsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Start opening animation after a brief delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Call onComplete after animation finishes
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200);
    }, 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left Door */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-card border-r-4 border-primary transition-all duration-1000 ease-in-out ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{
          backgroundImage: 'linear-gradient(90deg, hsl(var(--card)) 0%, hsl(var(--card)) 95%, hsl(var(--primary) / 0.3) 100%)',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-80">
          {/* Door panels */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full h-[16.666%] border-y border-border/30"
              style={{
                backgroundImage: 'linear-gradient(to right, hsl(var(--card)), hsl(var(--muted)))',
              }}
            />
          ))}
        </div>
        {/* Door Handle */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-6 h-20 rounded-full bg-primary/80 shadow-lg" />
      </div>

      {/* Right Door */}
      <div
        className={`absolute top-0 right-0 h-full w-1/2 bg-card border-l-4 border-primary transition-all duration-1000 ease-in-out ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{
          backgroundImage: 'linear-gradient(270deg, hsl(var(--card)) 0%, hsl(var(--card)) 95%, hsl(var(--primary) / 0.3) 100%)',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-80">
          {/* Door panels */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full h-[16.666%] border-y border-border/30"
              style={{
                backgroundImage: 'linear-gradient(to left, hsl(var(--card)), hsl(var(--muted)))',
              }}
            />
          ))}
        </div>
        {/* Door Handle */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-6 h-20 rounded-full bg-primary/80 shadow-lg" />
      </div>

      {/* Center Logo/Text */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
        isOpen ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
      }`}>
        <h1 className="text-6xl font-bold text-gradient">
          CUhackit '26
        </h1>
      </div>
    </div>
  );
};

export default SaloonDoors;
