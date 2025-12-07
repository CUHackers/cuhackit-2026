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
        }}
      >
        <h1 className="faq-header-text">
          ANNOUNCING SPONSORS SOON!
        </h1>
      </div>
    </div>
  );
};

export default TemplateSection;
