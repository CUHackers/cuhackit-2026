import { Code, Lightbulb, Trophy, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Code,
    title: '36 Hours',
    description: 'Non-stop hacking to bring your ideas to life',
    color: 'text-primary'
  },
  {
    icon: Lightbulb,
    title: 'Workshops',
    description: 'Learn from industry experts and mentors',
    color: 'text-accent'
  },
  {
    icon: Trophy,
    title: 'Prizes',
    description: '$10K+ in prizes and swag for winners',
    color: 'text-secondary'
  },
  {
    icon: Zap,
    title: 'Networking',
    description: 'Connect with students and sponsors',
    color: 'text-primary-glow'
  }
];

const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            What is <span className="text-gradient">CUhackit</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clemson University's premier hackathon bringing together the brightest minds to innovate, 
            collaborate, and create solutions for tomorrow's challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg leading-relaxed">
              Whether you're a seasoned developer or writing your first line of code, CUhackit '26 is your 
              opportunity to learn, build, and showcase your skills. Join us for an unforgettable weekend of 
              innovation, free food, and amazing experiences!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
