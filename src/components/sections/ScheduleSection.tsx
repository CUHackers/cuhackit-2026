
const ScheduleSection = () => {
  
  return (
    <div className="snap-start w-screen h-screen" >
      <div 
        className="relative w-full h-full overflow-hidden"
        // style={{backgroundColor: '#ffffff'}}

        style={{
          backgroundImage: "url('/assets/Photos.svg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );


};

export default ScheduleSection;
