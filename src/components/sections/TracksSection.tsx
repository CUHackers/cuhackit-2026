import tracksBg from "@/assets/TracksSection/TracksBG.webp";
import tracksSvg from "@/assets/TracksSection/Tracks.svg";

const TracksSection = () => {
  
  return (
    <div className="snap-start w-full h-screen">
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${tracksBg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img 
          src={tracksSvg} 
          alt="Tracks" 
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
  
};

export default TracksSection;
