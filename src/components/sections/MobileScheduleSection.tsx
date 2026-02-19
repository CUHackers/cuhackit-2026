import schedule from "@/assets/ScheduleSection/MobileSchedule.svg";

const MobileScheduleSection = () => {
  
  
  
  return (
    <div className="snap-start w-screen min-h-screen">
      <img 
        src={schedule}
        alt="Schedule"
        className="w-full h-auto block"
      />
    </div>
  );
  
};

export default MobileScheduleSection;
