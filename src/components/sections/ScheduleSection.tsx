import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const schedule = [
  {
    day: 'Friday, Feb 14',
    events: [
      { time: '6:00 PM', title: 'Check-in Opens', type: 'logistics' },
      { time: '7:00 PM', title: 'Opening Ceremony', type: 'main' },
      { time: '8:00 PM', title: 'Hacking Begins!', type: 'main' },
      { time: '9:00 PM', title: 'Team Formation & Dinner', type: 'food' },
    ]
  },
  {
    day: 'Saturday, Feb 15',
    events: [
      { time: '8:00 AM', title: 'Breakfast', type: 'food' },
      { time: '10:00 AM', title: 'Workshop: Intro to ML', type: 'workshop' },
      { time: '12:00 PM', title: 'Lunch', type: 'food' },
      { time: '2:00 PM', title: 'Workshop: Web Development', type: 'workshop' },
      { time: '6:00 PM', title: 'Dinner', type: 'food' },
      { time: '11:59 PM', title: 'Midnight Snacks', type: 'food' },
    ]
  },
  {
    day: 'Sunday, Feb 16',
    events: [
      { time: '8:00 AM', title: 'Breakfast', type: 'food' },
      { time: '10:00 AM', title: 'Hacking Ends', type: 'main' },
      { time: '11:00 AM', title: 'Project Submissions Due', type: 'main' },
      { time: '12:00 PM', title: 'Judging & Lunch', type: 'main' },
      { time: '3:00 PM', title: 'Closing Ceremony', type: 'main' },
      { time: '4:00 PM', title: 'See you next year!', type: 'logistics' },
    ]
  }
];

const typeColors = {
  main: 'bg-primary/20 border-primary/50 text-primary',
  workshop: 'bg-accent/20 border-accent/50 text-accent',
  food: 'bg-secondary/20 border-secondary/50 text-secondary',
  logistics: 'bg-muted border-border text-foreground'
};

const ScheduleSection = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Your guide to an amazing weekend of hacking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <Card 
              key={dayIndex}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${typeColors[event.type as keyof typeof typeColors]}`}
                    >
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">{event.time}</p>
                          <p className="font-medium">{event.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            * Schedule is subject to change. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
