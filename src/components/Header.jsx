import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Change to solid background after 50px of scrolling
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileOpen(false);
      setIsDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <header className={`premium-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Professional Logo */}
        <Link to="/" className="premium-logo">
          <div className="logo-emblem">
            <span className="emblem-text">NT</span>
          </div>
          <div className="logo-typography">
            <span className="logo-title">Niraj Trivedi</span>
            <span className="logo-subtitle">Company Secretaries</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={`premium-nav ${isMobileOpen ? 'nav-open' : ''}`}>
          <div className="nav-links-wrapper">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink 
                to="/about-us" 
                className={({ isActive }) => 
                  isActive || location.pathname === '/our-teams' ? 'nav-link active' : 'nav-link'
                }
              >
                Firm <FaChevronDown className="dropdown-caret" />
              </NavLink>
              <div className={`premium-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                <NavLink to="/about-us" className="dropdown-item">Firm Profile</NavLink>
                <NavLink to="/our-teams" className="dropdown-item">Our Professionals</NavLink>
              </div>
            </div>

            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Practice Areas
            </NavLink>
            <NavLink to="/infrastructure" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Infrastructure
            </NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact
            </NavLink>
          </div>

          {/* Elegant CTA Button */}
          <div className="header-cta-wrapper">
             <Link to="/contact-us" className="header-cta-btn">
               Consult Us
             </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`mobile-toggle-btn ${isMobileOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
