import { Mail, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer 
      id="register" 
      className="relative py-16 border-t border-border/50"
      style={{
        backgroundImage: "url('/assets/FooterSection/FooterBG.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-3xl font-western text-gradient mb-4" style={{ textShadow: 'var(--shadow-text)' }}>CUhackit '26</h3>
            <p className="text-muted-foreground font-body">
              Clemson's wildest hackathon rodeo bringing together innovators, trail blazers, and frontier dreamers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-body font-bold mb-4 text-primary">Trail Map</h4>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="hover:text-primary transition-colors cursor-pointer">About</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Schedule</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Partners</li>
              <li className="hover:text-primary transition-colors cursor-pointer">FAQ</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Code of the West</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-body font-bold mb-4 text-primary">Join the Posse</h4>
            <div className="flex items-center gap-2 mb-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span className="font-body">hello@cuhackit.com</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-primary/30 text-center text-muted-foreground">
          <p className="font-body">© 2026 CUhackit. Happy Trails, Partner. 🤠</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
