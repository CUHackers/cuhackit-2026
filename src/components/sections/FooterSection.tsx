import { Mail, Instagram, Linkedin } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const FooterSection = () => {
  return (
    <footer 
      id="register" 
      className="relative py-16 border-t border-border/50"
      style={{
        backgroundImage: "url('/src/assets/FooterSection/Footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Left Side - White Text */}
          <div className="text-white flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <img 
              src="/src/assets/FooterSection/CUhackitLogo.svg" 
              alt="CUhackit Logo" 
              className="h-16 w-auto mb-2"
            />
            <p className="font-body text-lg">© 2026 CUhackit</p>
            <a href="mailto:cuhackers@clemson.edu" className="flex items-center gap-2 hover:underline text-lg">
               <Mail className="w-5 h-5" /> cuhackers@clemson.edu
            </a>
          </div>

          {/* Center Side - Black Text */}
          <div className="text-black flex flex-col gap-4 items-center text-center">
            <a 
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold underline hover:text-white transition-colors text-3xl"
              style={{ fontFamily: 'Rye, serif' }}
            >
              MLH CODE OF CONDUCT
            </a>
            
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@cuhackit" className="w-10 h-10 rounded-full bg-black/10 border border-black/20 flex items-center justify-center hover:bg-black/20 transition-all duration-300 hover:scale-110 text-black">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/cuhackit" className="w-10 h-10 rounded-full bg-black/10 border border-black/20 flex items-center justify-center hover:bg-black/20 transition-all duration-300 hover:scale-110 text-black">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/cuhackit/" className="w-10 h-10 rounded-full bg-black/10 border border-black/20 flex items-center justify-center hover:bg-black/20 transition-all duration-300 hover:scale-110 text-black">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="font-body font-semibold text-lg">Clemson University, Clemson, SC</p>
            <p className="font-body text-lg">Made with good vibes 😎</p>
          </div>

          {/* Right Side - Add Paw Image with Relative Positioning */}
          <div className="hidden md:flex justify-end relative top-[-30%]">
            <img 
              src="/src/assets/FooterSection/Paw_RGB__White.png" 
              alt="Clemson Paw Logo" 
              className="h-32 w-auto"
            />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
