import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 104; // Adjust this to match your navbar height
      const offsetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Desktop Navigation - hidden on small screens */}
          <div className="desktop-nav">
            <button className="nav-button" onClick={() => scrollToSection('about')}>
              ABOUT
            </button>
            <button className="nav-button" onClick={() => scrollToSection('schedule')}>
              SCHEDULE
            </button>
            <button className="nav-button" onClick={() => scrollToSection('previous-hackathons')}>
              PREVIOUS HACKATHONS
            </button>
            <button className="nav-button" onClick={() => scrollToSection('register')}>
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
            onClick={() => scrollToSection('about')}
          >
            ABOUT
          </button>
          <button 
            className="nav-button"
            onClick={() => scrollToSection('schedule')}
          >
            SCHEDULE
          </button>
          <button 
            className="nav-button"
            onClick={() => scrollToSection('previous-hackathons')}
          >
            PREVIOUS HACKATHONS
          </button>
          <button 
            className="nav-button"
            onClick={() => scrollToSection('register')}
          >
            REGISTER
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
