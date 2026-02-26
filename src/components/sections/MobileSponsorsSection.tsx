import './MobilePhotos.css';
import mSponsors from "@/assets/SponsorsSection/MobileSponsors.webp";
import mobileBg from "@/assets/PhotosSection/WoodBG.svg";


const MobileSponsors = () => {
  
   return (
    <div className="w-full snap-start">
      <div 
        className="relative w-full h-full flex flex-col items-center py-8"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img 
        src={mSponsors}
        alt="Sponsors"
        className="w-full h-auto block"
      />
      </div>
    </div>
  );

};

export default MobileSponsors;
