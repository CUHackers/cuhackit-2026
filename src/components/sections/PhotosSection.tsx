import bg from "@/assets/PhotosSection/PhotosBG.svg";
import photos from "@/assets/PhotosSection/Photos.webp";

const PhotosSection = () => {
  
  return (
    <div className="snap-start w-screen h-screen" >
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        // style={{backgroundColor: '#ffffff'}}

        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Photos image with relative sizing (percentage based) */}
        <img 
          src={photos} 
          alt="Event Photos" 
          className="relative h-[100%] right-[-8%] bottom-[4%]  w-auto object-contain"
        />
      </div>
    </div>
  );


};

export default PhotosSection;
