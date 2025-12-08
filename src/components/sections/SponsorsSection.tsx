import '../../styles/global.css';
import sponsorsBg from '@/assets/Sponsors.svg';

const TemplateSection = () => {
  return (
    <div className="snap-start w-screen h-screen">
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${sponsorsBg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          fontFamily: '"brim-narrow-combined-2", sans-serif',
          fontWeight: 400,
          color: '#9e8564',
          // WebkitTextStroke: '1.0px #000000',
          textShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
          letterSpacing: '0.02em'
        }}
      >
        <h1 className="text-center mb-12 text-5xl md:text-6xl lg:text-6xl">
          ANNOUNCING SPONSORS SOON!
        </h1>
      </div>
    </div>
  );
};

export default TemplateSection;
