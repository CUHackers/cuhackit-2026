import '../../styles/global.css';

const TemplateSection = () => {
  return (
    <div className="snap-start w-screen h-screen">
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/Sponsors.svg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="brim-narrow-text">
          ANNOUNCING SPONSORS SOON!
        </h1>
      </div>
    </div>
  );
};

export default TemplateSection;
