import mAboutBg from "@/assets/AboutSection/mAboutBG.svg";
import mAboutPoster from "@/assets/AboutSection/mAboutPoster.svg";

const AboutSection = () => {
  return (
    <section>
      <div className="snap-start w-screen h-screen">
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          {/* Background as an <img> so overlays keep consistent relative positioning */}
          <img
            src={mAboutBg}
            alt="About background"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden
          />

          {/* Poster Container */}
          <div className="relative flex items-center justify-center">
            <img
              src={mAboutPoster}
              alt="About poster frame"
              className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain"
            />

            {/* Text placed inside the poster frame. */}
            <div className="absolute inset-0 flex items-start justify-center pt-[25%] px-[14%] pb-[10%] pointer-events-none">
              <div className="max-w-full text-wrap">
                <p className="text-left text-black font-bold leading-tight" style={{ fontSize: '3.5vmin' }}>
                  Join us for a day of building, learning, and fun at South Carolina’s premiere hackathon! Spend 24 hours coding and collaborating in the beautiful Watt Family Innovation Center at Clemson University while we handle the food, coffee, and snacks. No matter your major or level of experience, we want to see you create your next hack with us at CUhackit! CUhackit is dedicated to fostering an inclusive and respectful environment for all participants.
                </p>
                <br />
                <p className="text-left text-black font-bold leading-tight" style={{ fontSize: '3.5vmin' }}>
                  We're an official MLH Hackathon Event! This <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer" className="underline pointer-events-auto hover:text-gray-700">code of conduct</a> ensures that all hackers can have the best experience possible!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default AboutSection;
