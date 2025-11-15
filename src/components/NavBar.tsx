import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Desktop Navigation - hidden on small screens */}
          <div className="desktop-nav">
            <button className="nav-button">
              ABOUT
            </button>
            <button className="nav-button">
              SCHEDULE
            </button>
            <button className="nav-button">
              PREVIOUS HACKATHONS
            </button>
            <button className="nav-button">
              REGISTER
            </button>
          </div>

          {/* Hamburger Menu Button - shown on small screens */}
          <button
            className="hamburger-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button 
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </button>
          <button 
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            SCHEDULE
          </button>
          <button 
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            PREVIOUS HACKATHONS
          </button>
          <button 
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            REGISTER
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
