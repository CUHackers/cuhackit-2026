const OrganizersSection = () => {
  const organizers = [
    { name: "Malia Fairbanks", role: "Co-Director", linkedin: "https://www.linkedin.com/in/malia-fairbanks/", image: "/src/assets/OrganizersSection/malia.svg" },
    { name: "Hazel Torek", role: "Co-Director", linkedin: "https://www.linkedin.com/in/hazel-torek/", image: "/src/assets/OrganizersSection/hazel.svg" },
    { name: "Uzayr Syed", role: "Finance", linkedin: "https://www.linkedin.com/in/uzayrsyed/", image: "/src/assets/OrganizersSection/uzayr.svg" },
    { name: "Christina Foley", role: "Logistics", linkedin: "https://www.linkedin.com/in/christina-foley/", image: "/src/assets/OrganizersSection/christina.svg" },
    { name: "Varun Sethi", role: "Partnership", linkedin: "https://www.linkedin.com/in/vsethi-in/", image: "/src/assets/OrganizersSection/varun.svg" },
    { name: "Keely Hong", role: "Partnership/PR", linkedin: "https://www.linkedin.com/in/keelyhong/", image: "/src/assets/OrganizersSection/keely.svg" },
    { name: "Mia Yancey", role: "Design", linkedin: "https://www.linkedin.com/in/mia-yancey/", image: "/src/assets/OrganizersSection/mia.svg" },
  ];
  
  return (
    <div className="snap-start w-screen h-screen">
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/src/assets/OrganizersSection/OrganizersBG.svg')",
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
                  src="/src/assets/OrganizersSection/LI-In-Bug.png"
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
