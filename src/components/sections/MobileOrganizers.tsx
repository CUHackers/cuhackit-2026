import mobileBg from "@/assets/OrganizersSection/MobileBG.svg";

const MobileOrganizers = () => {
  return (
    <div className="snap-start w-screen h-screen">
      <div 
        className="relative w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
  
};

export default MobileOrganizers;