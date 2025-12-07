const AboutSection = () => {
  return (
    <section>
      <div className="snap-start w-screen h-screen">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background as an <img> so overlays keep consistent relative positioning */}
          <img
            src="/assets/AboutSection/mAboutBG.svg"
            alt="About background"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden
          />
        </div>
      </div>
    </section>
  
  );
};

export default AboutSection;
