import mobileBg from "@/assets/PhotosSection/WoodBG.svg";
import sign from "@/assets/OrganizersSection/OrganizersSign.svg";
import li from "@/assets/OrganizersSection/LI-In-Bug.png";
import { organizers } from "@/data/organizers";

const MobileOrganizers = () => {
  return (
    <div className="snap-start w-screen min-h-screen">
      <div 
        className="relative w-full min-h-screen flex flex-col items-center pb-10"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Sign at the top */}
        <img 
          src={sign} 
          alt="Organizers" 
          className="w-[75%] mt-[10vh] mb-[2vh] z-10"
        />

        {/* Grid of organizers */}
        <div className="w-[80%] mt-[2vh] grid grid-cols-2 gap-4 z-10">
          {organizers.map((organizer, index) => (
            <div key={index} className="relative">
              <img 
                src={organizer.image} 
                alt={`${organizer.name} - ${organizer.role}`}
                className="w-full h-auto"
              />
              <a
                href={organizer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[7%] right-[7%] w-[15%] hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={li}
                  alt="LinkedIn"
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default MobileOrganizers;