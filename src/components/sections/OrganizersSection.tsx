import li from "@/assets/OrganizersSection/LI-In-Bug.png";
import bg from "@/assets/OrganizersSection/OrganizersBG.svg";
import { organizers } from "@/data/organizers";

const OrganizersSection = () => {
  return (
    <div className="snap-start w-full h-screen">
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="grid grid-cols-4 gap-[2vw] w-[48%] translate-x-[12vw] translate-y-[-10vh]">
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
                className="absolute bottom-[7%] right-[7%] w-[10%] hover:scale-110 transition-transform duration-200"
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

export default OrganizersSection;
