import { Card } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

// Modular sponsor tiers - easy to customize
const sponsorTiers = [
  {
    tier: 'Platinum',
    color: 'from-primary to-primary-glow',
    sponsors: ['Sponsor Logo 1', 'Sponsor Logo 2']
  },
  {
    tier: 'Gold',
    color: 'from-secondary to-yellow-500',
    sponsors: ['Sponsor Logo 3', 'Sponsor Logo 4', 'Sponsor Logo 5']
  },
  {
    tier: 'Silver',
    color: 'from-muted-foreground to-foreground',
    sponsors: ['Sponsor Logo 6', 'Sponsor Logo 7', 'Sponsor Logo 8', 'Sponsor Logo 9']
  }
];

const SponsorsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-western mb-4" style={{ textShadow: 'var(--shadow-text)' }}>
            Our <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Much obliged to our trail partners makin' this rodeo possible
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="animate-fade-in" style={{ animationDelay: `${tierIndex * 0.2}s` }}>
              <h3 className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                {tier.tier} Sponsors
              </h3>
              
              <div className={`grid gap-6 ${
                tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
                tier.sponsors.length === 3 ? 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto' :
                'grid-cols-2 md:grid-cols-4'
              }`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <Card 
                    key={sponsorIndex}
                    className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                  >
                    <div className="aspect-video flex items-center justify-center p-8">
                      <div className="flex flex-col items-center gap-3 text-muted-foreground">
                        <Building2 className="w-16 h-16" />
                        <p className="text-sm font-body font-medium">{sponsor}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 max-w-2xl mx-auto">
            <div className="p-8">
              <h4 className="text-2xl font-body font-bold mb-4">Want to Ride With Us?</h4>
              <p className="text-muted-foreground font-body mb-6">
                Partner up with us to wrangle talented students and support frontier innovation
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-body font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 border-2 border-primary/30">
                Contact Us
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
