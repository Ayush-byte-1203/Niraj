import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLandmark, FaShieldAlt, FaHandshake, FaChartLine, 
  FaCheckCircle, FaFileSignature, FaBuilding, FaArrowRight,
  FaBalanceScale, FaUserTie, FaGlobe, FaClipboardCheck
} from 'react-icons/fa';
import './Home.css';

const Counter = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId = null;
    let started = false;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          animationFrameId = requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, [target, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const previewServices = [
  {
    id: 'sebi',
    title: 'SECURITIES AND EXCHANGE BOARD OF INDIA ACT AND ITS REGULATION',
    icon: <FaChartLine />,
    summary: 'Strategic guidance for listing and revocation of securities, SEBI LODR compliance, corporate governance norms, and issue of capital including IPOs, rights issues, and private placements.'
  },
  {
    id: 'fema',
    title: 'FOREIGN EXCHANGE MANAGEMENT ACT',
    icon: <FaGlobe />,
    summary: 'Advisory on foreign direct investment, joint ventures, wholly-owned subsidiaries, compounding applications, and regulatory filings under RBI and FEMA guidelines.'
  },
  {
    id: 'audit',
    title: 'AUDIT',
    icon: <FaClipboardCheck />,
    summary: 'Secretarial audit under Section 204, reconciliation of share capital audit under SEBI guidelines, corporate law due diligence, and assessment of corporate governance practices.'
  }
];

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content animate-on-scroll">
            <div className="hero-badge">Corporate Governance & Compliance</div>
            <h1 className="hero-title">
              Excellence in Corporate <span className="gold-text">Compliance</span>
            </h1>
            <p className="hero-subtitle">
              Navigating complex legal landscapes with uncompromised integrity. We provide strategic Company Secretary services to ensure your business remains compliant and secure.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/contact-us" className="btn-gold">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust & Professional Identity */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-text animate-on-scroll">
              <h2 className="section-title" style={{textAlign: 'left'}}>
                Upholding the Highest Standards of <span className="gold-text">Corporate Ethics</span>
              </h2>
              <div className="section-divider" style={{margin: '24px 0'}}></div>
              <p>
                We are the firm of Practicing Company Secretaries (PCS) engaged in multi-disciplinary services rendering to various clients Corporates, Banks/FIs, Non Profit Organizations (NGOs), Firms etc. in India.
              </p>
              <p>
                At present our firm comprising of five qualified, dedicated and experienced Company Secretaries including Founder Promoter Niraj Trivedi.
              </p>
            </div>
            <div className="trust-stats animate-on-scroll delay-2">
              <div className="stat-card glass-panel">
                <div className="stat-number">
                  <Counter target={30} />+
                </div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-card glass-panel">
                <div className="stat-number stat-text">Dedicated</div>
                <div className="stat-label">Compliance Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="services-preview bg-light">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Professional Services</h2>
            <p className="section-subtitle">Comprehensive corporate legal and secretarial solutions tailored for modern enterprises.</p>
            <div className="section-divider"></div>
          </div>

          <div className="home-services-grid">
            {previewServices.map((service, index) => (
              <div 
                key={service.id} 
                className="dense-service-card animate-on-scroll"
                style={{ animationDelay: `${(index % 3) * 0.15}s` }}
              >
                <div className="dsc-header">
                  <div className="dsc-icon-box">
                    {service.icon}
                  </div>
                  <h3 className="dsc-title">{service.title}</h3>
                </div>
                
                <div className="dsc-body">
                  <p className="dsc-summary">{service.summary}</p>
                </div>

                <div className="dsc-footer">
                  <div className="dsc-actions">
                    <Link to="/services" className="dsc-learn-more-btn">
                      View Details <FaArrowRight className="btn-icon-right" />
                    </Link>
                    
                    <Link to="/contact-us" className="dsc-cta-btn">
                      Consult Us <FaArrowRight className="btn-icon-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{marginTop: '40px'}}>
             <Link to="/services" className="btn-primary animate-on-scroll">View All Services</Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">The Pillars of Our Practice</h2>
            <div className="section-divider"></div>
          </div>

          <div className="features-grid">
            <div className="feature-item animate-on-scroll delay-1">
              <FaShieldAlt className="feature-icon" />
              <h4>Professional Ethics</h4>
              <p>Unwavering commitment to ICSI code of conduct and professional integrity.</p>
            </div>
            <div className="feature-item animate-on-scroll delay-2">
              <FaHandshake className="feature-icon" />
              <h4>Strict Confidentiality</h4>
              <p>Absolute discretion and security regarding all corporate data and strategies.</p>
            </div>
            <div className="feature-item animate-on-scroll delay-3">
              <FaCheckCircle className="feature-icon" />
              <h4>Meticulous Accuracy</h4>
              <p>Precision in drafting, filing, and representing clients before regulatory bodies.</p>
            </div>
            <div className="feature-item animate-on-scroll delay-4">
              <FaChartLine className="feature-icon" />
              <h4>Timely Execution</h4>
              <p>Proactive compliance management to avoid penalties and ensure smooth operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="process-section bg-navy">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title" style={{color: 'var(--bg-white)'}}>Our Engagement Process</h2>
            <div className="section-divider"></div>
          </div>

          <div className="process-timeline">
            <div className="process-step animate-on-scroll delay-1">
              <div className="step-number">01</div>
              <h4>Consultation</h4>
              <p>Understanding your specific corporate structure and compliance needs.</p>
            </div>
            <div className="process-step animate-on-scroll delay-2">
              <div className="step-number">02</div>
              <h4>Documentation</h4>
              <p>Rigorous preparation and legal vetting of all necessary secretarial records.</p>
            </div>
            <div className="process-step animate-on-scroll delay-3">
              <div className="step-number">03</div>
              <h4>Execution</h4>
              <p>Timely filing with MCA, SEBI, or RBI and execution of compliance protocols.</p>
            </div>
            <div className="process-step animate-on-scroll delay-4">
              <div className="step-number">04</div>
              <h4>Ongoing Support</h4>
              <p>Continuous monitoring of regulatory changes affecting your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Experience Section */}
      <section className="testimonial-section bg-light">
        <div className="container">
           <div className="text-center animate-on-scroll">
            <h2 className="section-title">Client Experience</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="testimonial-card animate-on-scroll glass-panel-dark">
             <div className="quote-mark">"</div>
             <p className="testimonial-text">
               "The firm demonstrates a profound understanding of corporate law. Their meticulous approach to secretarial audits and governance frameworks has been instrumental in maintaining our compliance health."
             </p>
             <div className="testimonial-author">
               <div className="author-details">
                 <strong>Board of Directors</strong>
                 <span>Client Enterprise</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Secure Your Corporate Compliance Today</h2>
            <p>Schedule a professional consultation to discuss your specific statutory requirements.</p>
            <Link to="/contact-us" className="btn-gold">Request Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
