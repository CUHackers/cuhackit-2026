import template from "@/assets/TemplateTemplate.svg";

const TemplateSection = () => {
  
  
  
  return (
    <div className="snap-start w-screen h-screen">
      <div 
        className="relative w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${template})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
  
};

export default TemplateSection;
