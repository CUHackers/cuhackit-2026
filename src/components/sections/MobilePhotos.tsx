import './MobilePhotos.css';
import mPhotos from "@/assets/PhotosSection/mPhotos.webp";

const MobilePhotos = () => {
  
  
  
  return (
    <div className="snap-start w-screen h-screen">
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center mobile-photos-container">
        {/* Header Text - Placed slightly off-center to the right at the top */}
        <h2 className="absolute top-[5%] left-[68%] -translate-x-1/2 text-5xl text-center leading-none z-10 mobile-photos-header">
          PAST<br/>EVENTS
        </h2>

        {/* Mobile Photos image with relative sizing */}
        <img 
          src={mPhotos}
          alt="Event Photos" 
          className="relative w-[85%] h-auto object-contain"
        />
      </div>
    </div>
  );
  
};

export default MobilePhotos;
