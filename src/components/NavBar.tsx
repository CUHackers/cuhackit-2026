import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

type NavBarProps = {
  isLargeScreen: boolean;
  scrollToSection: (sectionId: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({ isLargeScreen, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* MLH Trust Badge - Moved outside desktop-nav to be visible on all screens */}
          <a
            id="mlh-trust-badge"
            style={{
              display: 'block',
              position: 'fixed',
              top: 0,
              zIndex: 10000,
            }}
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=red"
            target="_blank"
            rel="noopener noreferrer"
            // Adjusted positioning: left-[15px] on mobile, left-[30px] on larger screens
            className="left-[15px] md:left-[30px]"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-yellow.svg"
              alt="Major League Hacking 2026 Hackathon Season"
              className="w-[80px] md:w-[100px]"
            />
          </a>

          {/* Desktop Navigation - hidden on small screens */}
          <div className="desktop-nav">
            <button className="nav-button" onClick={() => scrollToSection('about')}>
              ABOUT
            </button>
            <button className="nav-button" onClick={() => scrollToSection('tracks')}>
              TRACKS
            </button>
            <button className="nav-button" onClick={() => scrollToSection('faq')}>
              FAQ 
            </button>
            <a 
              className="nav-button" 
              href="https://whova.com/portal/registration/GOXMM8ga7xJWgdvLdCHc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER
            </a>

          </div>

          {/* Hamburger Menu Button - shown on small screens */}
          <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="nav-button" onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}>
            ABOUT
          </button>
          <button className="nav-button" onClick={() => { scrollToSection('tracks'); setIsMenuOpen(false); }}>
            TRACKS
          </button>
          <button className="nav-button" onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }}>
            FAQ 
          </button>
          <a 
            className="nav-button" 
            href="https://whova.com/portal/registration/GOXMM8ga7xJWgdvLdCHc/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            REGISTER
          </a>
        </div>
      )}
    </>
  );
};

export default NavBar;
