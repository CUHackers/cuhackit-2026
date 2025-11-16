
const AboutSection = () => {
  return (
    <div className="snap-start w-screen h-screen" id="about">
      <div 
        className="relative w-full h-full overflow-hidden"
        style={{
          backgroundImage: "url('/assets/TemplateAbout.svg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default AboutSection;
