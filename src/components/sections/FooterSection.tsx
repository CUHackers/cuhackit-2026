import { Mail, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-3xl font-bold text-gradient mb-4">CUhackit '26</h3>
            <p className="text-muted-foreground">
              Clemson University's premier hackathon bringing together innovators, creators, and dreamers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">About</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Schedule</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Sponsors</li>
              <li className="hover:text-primary transition-colors cursor-pointer">FAQ</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Code of Conduct</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex items-center gap-2 mb-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>hello@cuhackit.com</span>
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
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© 2026 CUhackit. Made with ❤️ by the CUhackit team.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
