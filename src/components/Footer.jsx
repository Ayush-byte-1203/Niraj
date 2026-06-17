import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            
            {/* 1. Firm Overview */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <div className="logo-emblem-small">
                  <span>NT</span>
                </div>
                <div className="logo-text-group">
                  <span className="logo-title-small">Niraj Trivedi</span>
                  <span className="logo-subtitle-small">Company Secretaries</span>
                </div>
              </div>
              <p className="footer-desc">
                A distinguished firm of Practising Company Secretaries delivering uncompromising corporate compliance, legal advisory, and governance solutions since 1994.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn Corporate Page"><FaLinkedin /></a>
              </div>
            </div>
            
            {/* 2. Quick Links */}
            <div className="footer-col links-col">
              <h4 className="footer-heading">Firm</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">Firm Profile</Link></li>
                <li><Link to="/our-teams">Our Professionals</Link></li>
                <li><Link to="/infrastructure">Infrastructure</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            {/* 3. Services Links */}
            <div className="footer-col services-col">
              <h4 className="footer-heading">Practice Areas</h4>
              <ul className="footer-links">
                <li><Link to="/services#llp">LIMITED LIABILITY PARTNERSHIP ACT</Link></li>
                <li><Link to="/services#sebi">SECURITIES AND EXCHANGE BOARD OF INDIA ACT AND ITS REGULATION</Link></li>
                <li><Link to="/services#fema">FOREIGN EXCHANGE MANAGEMENT ACT</Link></li>
                <li><Link to="/services#ibc">INSOLVENCY AND BANKRUPTCY CODE</Link></li>
                <li><Link to="/services#audit">AUDIT</Link></li>
              </ul>
            </div>
            
            {/* 4. Contact Information */}
            <div className="footer-col contact-col">
              <h4 className="footer-heading">Headquarters</h4>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <div className="contact-text">
                    <span>Prominent Commercial Area</span>
                    <span>Vadodara, Gujarat 390001, India</span>
                  </div>
                </li>
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <a href="tel:+919824248079" className="contact-text hover-gold">+91 982 424 8079</a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:info@nirajtrivedi-cs.com" className="contact-text hover-gold">info@nirajtrivedi-cs.com</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>

      {/* 5. Compliance Disclaimer */}
      <div className="footer-disclaimer">
        <div className="container">
          <p>
            <strong>Statutory Disclaimer:</strong> As per the rules of the Institute of Company Secretaries of India (ICSI), we are not permitted to solicit work or advertise. By accessing this website, the user acknowledges that the information provided is for informational purposes only and does not constitute legal advice. We are not liable for any action taken by the user based on the material or information provided on this website.
          </p>
        </div>
      </div>
      
      {/* 6 & 7. Legal & Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; {new Date().getFullYear()} Niraj Trivedi CS. All rights reserved.</p>
            <div className="legal-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
