import { useState, useEffect } from 'react';
import SaloonDoors from '@/components/SaloonDoors';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';

function Index() {
  const [showDoors, setShowDoors] = useState(true);

  useEffect(() => {
    // Remove doors from DOM after animation completes
    const timer = setTimeout(() => {
      setShowDoors(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showDoors && <SaloonDoors />}
      <NavBar />
      
      <div className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <SponsorsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
