import tracks from "@/assets/TracksSection.svg";

const TracksSection = () => {
  
  
  
  return (
    <div className="snap-start w-screen h-screen">
      <div 
        className="relative w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${tracks})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
  
};

export default TracksSection;
