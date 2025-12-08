import malia from "@/assets/OrganizersSection/malia.svg";
import hazel from "@/assets/OrganizersSection/hazel.svg";
import uzayr from "@/assets/OrganizersSection/uzayr.svg";
import chris from "@/assets/OrganizersSection/christina.svg";
import varun from "@/assets/OrganizersSection/varun.svg";
import keely from "@/assets/OrganizersSection/keely.svg";
import mia from "@/assets/OrganizersSection/mia.svg";
import li from "@/assets/OrganizersSection/LI-In-Bug.png";
import bg from "@/assets/OrganizersSection/OrganizersBG.svg";

const OrganizersSection = () => {
  const organizers = [
    { name: "Malia Fairbanks", role: "Co-Director", linkedin: "https://www.linkedin.com/in/malia-fairbanks/", image: malia },
    { name: "Hazel Torek", role: "Co-Director", linkedin: "https://www.linkedin.com/in/hazel-torek/", image: hazel },
    { name: "Uzayr Syed", role: "Finance", linkedin: "https://www.linkedin.com/in/uzayrsyed/", image: uzayr },
    { name: "Christina Foley", role: "Logistics", linkedin: "https://www.linkedin.com/in/christina-foley/", image: chris },
    { name: "Varun Sethi", role: "Partnership", linkedin: "https://www.linkedin.com/in/vsethi-in/", image: varun },
    { name: "Keely Hong", role: "Partnership/PR", linkedin: "https://www.linkedin.com/in/keelyhong/", image: keely },
    { name: "Mia Yancey", role: "Design", linkedin: "https://www.linkedin.com/in/mia-yancey/", image: mia },
  ];
  
  return (
    <div className="snap-start w-screen h-screen">
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
