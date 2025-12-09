import aboutBg from "@/assets/AboutSection/AboutBG.svg";
import aboutPoster from "@/assets/AboutSection/AboutPoster.svg";

const AboutSection = () => {
  return (
    <section>
      <div className="snap-start w-screen h-screen">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background as an <img> so overlays keep consistent relative positioning */}
          <img
            src={aboutBg}
            alt="About background"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden
          />

          {/* Poster frame positioned relative to the background.
              - left/top/width are percentages so the poster keeps the same relative spot as the background scales.
              - Tweak `left`, `top`, and `w-[]` values to match the poster location on your background image.
          */}
          <div
            className="absolute left-[25%] top-[47%] w-[48%] transform -translate-x-1/2 -translate-y-1/2"
            style={{ containerType: 'inline-size' }}
          >
            <div className="relative">
              <img
                src={aboutPoster}
                alt="About poster frame"
                className="w-full h-auto block"
              />

            
                {/* Text placed inside the poster frame. Increased padding so text doesn't touch edges. */}
                <div className="absolute inset-0 flex items-start justify-center pt-[12%] px-[12%] pb-[10%] pointer-events-none">
                  <div className="max-w-full text-wrap">
                    <p className="text-left text-black font-bold leading-tight" style={{ fontSize: '2.8cqw' }}>
                      Join us for a day of building, learning, and fun at South Carolina’s largest annual hackathon! Spend 24 hours coding and collaborating in the beautiful Wilbur O. and Ann Powers College of Business at Clemson University while we handle the food, coffee, and snacks. No matter your major or level of experience, we want to see you create your next hack with us at CUhackit! 
                    
                    </p>
                    <br />
                    <p className="text-left text-black font-bold leading-tight" style={{ fontSize: '2.8cqw' }}>
                      We're an official MLH Hackathon Event! This <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer" className="underline pointer-events-auto hover:text-gray-700">code of conduct</a> ensures that all hackers can have the best experience possible!
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default AboutSection;
