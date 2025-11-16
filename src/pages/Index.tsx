import { useState, useEffect, useRef } from 'react';

import SaloonDoors from '@/components/SaloonDoors';
import NavBar from '@/components/NavBar';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import SponsorsSection from '@/components/sections/archive/SponsorsSection';
import FAQSection from '@/components/sections/archive/FAQSection';
import FooterSection from '@/components/sections/FooterSection';

// Messing with some stuff
// import { AboutPage } from '@/components/REFERENCE_about/AboutPage';
// import { TracksPage } from '@/components/REFERENCE_tracks/TracksPage';
import TemplateSection from '@/components/sections/TemplateSection';

const HORIZ_SCROLL_SPEED_MULTIPLIER = .5;

// when to play the hinge animation on the about page
const ABOUT_PAGE_HINGE_ANIMATION_THRESHOLD = window.innerHeight * 0.5;

function Index() {

  // Using code from hackgt12-website for horizontal scrolling logic
  const [showDoors, setShowDoors] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollToExploreRef = useRef<HTMLDivElement>(null);

  // the hinge animation should only play once when the user FIRST scrolls there.
  // set to true once they pass the threshold and the animation has played once
  const [aboutPageHingeAnimationDone, setAboutPageHingeAnimationDone] = useState(false);
 
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  

  // Door animations
  useEffect(() => {
    // Remove doors from DOM after animation completes
    const timer = setTimeout(() => {
      setShowDoors(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {

      // only run once
      if (!aboutPageHingeAnimationDone) {
        if (window.scrollY > ABOUT_PAGE_HINGE_ANIMATION_THRESHOLD) {
          setAboutPageHingeAnimationDone(true);
        }
        // setAboutPageHingeAnimationDone(true);
      }

    

      // ignore everything else if on mobile since we dont have horiz. scroll there
      if (!isLargeScreen) return;

      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const rect = container.getBoundingClientRect();

      // i did the math trust me bro
      const scrollProgress = -rect.top / (window.innerHeight * (3 / HORIZ_SCROLL_SPEED_MULTIPLIER - 1));
      const clampedScrollProgress = Math.max(Math.min(scrollProgress, 1), 0);
      content.style.transform = `translateX(-${clampedScrollProgress * 200}vw)`;
      console.log('please');
    };

    window.addEventListener("scroll", handleScroll);

    if (!isLargeScreen) {
    // If not a large screen, ensure any previous transform is reset
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(0)`;
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutPageHingeAnimationDone, isLargeScreen]); // Re-run effect when isLargeScreen changes

  
  // Navbar scrolling logic, i dont think we need it here
  const scrollToSection = (sectionId: string) => {
    if (!isLargeScreen) {
      // For mobile/tablet, use normal scroll behavior
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // For large screens with horizontal scroll
    const container = containerRef.current;
    if (!container) return;

    let targetPercent = 0;
    switch (sectionId) {
      case "about":
        targetPercent = 0; // First section (0%)
        break;
      case "tracks":
        targetPercent = 0.5; // Middle section (50%)
        break;
      case "schedule":
        targetPercent = 1; // Last section (100%)
        break;
      default: {
        // For FAQ and Sponsors, scroll to the vertical section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
    }

    // Calculate the scroll position needed
    const rect = container.getBoundingClientRect();
    const startY = window.scrollY + rect.top;
    const maxScroll = container.offsetHeight - window.innerHeight;
    const targetScrollY = startY + targetPercent * maxScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showDoors && <SaloonDoors />}
      <NavBar />
      
      <div className="min-h-screen bg-background">
        <HeroSection />

        {/* Horizontal scrolling sectiion */}
        <section
          ref={containerRef}
          style={{height: isLargeScreen? `${300 / HORIZ_SCROLL_SPEED_MULTIPLIER}vh` : "auto"}}
          className='relative'
        >
          <div className="sticky top-0 overflow-hidden lg:h-screen h-fit">
            <div 
              ref={contentRef}
              className={`relative snap-x bg-green-400 transition-transform ease-out scroll-smooth ${
                isLargeScreen ? "flex w-[300vw]" : "block w-full"
              }`}
            >
              
              <AboutSection />
              <ScheduleSection />
              <TemplateSection />
              
              {/* <img
                className="pillar1 hidden lg:block z-50"
                src="/about/about_pillar.webp"
              ></img> */}

              {/* <div id="schedule"> */}
                {/* Go back in an add in mobile pages */}
                {/* {isLargeScreen? <TemplateScheduleSection /> : <TemplateScheduleSection />} */}
              {/* </div> */}

              {/* <img
                className="pillar2 hidden lg:block"
                src="/about/about_pillar.webp"
              ></img> */}

              {/* <div id="room"> */}
                {/* {isLargeScreen? <TemplateScheduleSection /> : <TemplateScheduleSection />} */}
              {/* </div> */}
             </div>

            {/* <img
              // src="/about/about_floor.webp"
              // alt="________"
              className="horiz-scroll-floor hidden lg:block"
            /> */}
          </div>
        </section>
      <SponsorsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
