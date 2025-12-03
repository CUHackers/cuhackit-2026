const AboutSection = () => {
  return (
    <section>
      <div className="snap-start w-screen h-screen">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background as an <img> so overlays keep consistent relative positioning */}
          <img
            src="/assets/TemplateAbout.svg"
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
          >
            <div className="relative">
              <img
                src="/assets/propts/AboutPoster.svg"
                alt="About poster frame"
                className="w-full h-auto block"
              />

            
                {/* Text placed inside the poster frame. Increased padding so text doesn't touch edges. */}
                <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-20 px-6 md:px-12 pointer-events-none">
                  <div className="max-w-full text-wrap">
                    <p className="text-left text-black font-bold text-sm md:text-base leading-tight">
                      Join us for a day of building, learning, and fun at South Carolina’s premiere hackathon! Spend 24 hours coding and collaborating in the beautiful Watt Family Innovation Center at Clemson University while we handle the food, coffee, and snacks. No matter your major or level of experience, we want to see you create your next hack with us at CUhackit!                     CUhackit is dedicated to fostering an inclusive and respectful environment for all participants.

                    
                    </p>
                    <br />
                    <p className="text-left text-black font-bold text-sm md:text-base leading-tight">
                      We're an official MLH Hackathon Event! This code of conduct ensures that all hackers can have the best experience possible!
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
