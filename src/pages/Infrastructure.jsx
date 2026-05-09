import { useEffect, useRef } from 'react';
import { FaServer, FaShieldAlt, FaFolderOpen, FaDesktop, FaHandshake, FaLock } from 'react-icons/fa';
import './Infrastructure.css';

const infrastructureFeatures = [
  {
    icon: <FaDesktop />,
    title: 'Digital Compliance Systems',
    desc: 'Equipped with dedicated software for XBRL filing, corporate legal management, and seamless interaction with the MCA21 portal.',
    bgImage: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: <FaFolderOpen />,
    title: 'Document Management Systems',
    desc: 'Robust electronic document archiving ensuring that decades of statutory registers and corporate filings are instantly retrievable yet fully secured.',
    bgImage: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop'
  },
  {
    icon: <FaServer />,
    title: 'Technology & Security',
    desc: 'State-of-the-art secure servers, encrypted communication channels, and strict firewall protocols protect all sensitive corporate information.',
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: <FaLock />,
    title: 'Client Confidentiality Standards',
    desc: 'Physical access controls, comprehensive NDAs, and secure disposal protocols ensure absolute discretion in all advisory matters.',
    bgImage: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop'
  }
];

const Infrastructure = () => {
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
    <div className="infrastructure-page">
      <section className="page-banner infra-banner">
        <h1 className="animate-on-scroll">Operational Infrastructure</h1>
      </section>

      {/* Office Infrastructure */}
      <section className="office-infra bg-white section-padding">
        <div className="container">
          <div className="office-grid">
            <div className="office-text animate-on-scroll">
              <span className="hero-badge" style={{marginBottom: '16px'}}>Headquarters</span>
              <h2 className="section-title" style={{textAlign: 'left'}}>
                Designed for <span className="gold-text">Excellence</span>
              </h2>
              <div className="section-divider" style={{margin: '24px 0'}}></div>
              <p className="lead-text">
                Located in a prominent commercial district of Vadodara, our headquarters represents the structural foundation of our professional secretarial practice.
              </p>
              <p>
                Our infrastructure is purposefully designed to foster a focused, confidential, and highly efficient working environment. It features dedicated zones for intense legal research, expansive administrative workstations for high-volume filings, and a comprehensive physical legal library housing decades of corporate jurisprudence, ICSI manuals, and statutory bare acts.
              </p>
            </div>
            <div className="office-image-wrapper animate-on-scroll delay-2">
              <div className="office-image-stack">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Premium Corporate Office" className="main-office-img" loading="lazy" />
                <div className="office-stat-card glass-panel">
                  <h4>National Presence</h4>
                  <p>Operating from <strong>Vadodara</strong> with branches in <strong>Ahmedabad</strong> and <strong>Delhi</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems & Security (Grid with Backgrounds) */}
      <section className="systems-infra bg-light section-padding">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{marginBottom: '60px'}}>
             <h2 className="section-title">Technological Backbone</h2>
             <p className="section-subtitle">Leveraging advanced systems and uncompromising security protocols to safeguard your corporate data.</p>
             <div className="section-divider"></div>
          </div>

          <div className="systems-grid">
            {infrastructureFeatures.map((feature, i) => (
              <div key={i} className="system-card animate-on-scroll" style={{ animationDelay: `${(i % 4) * 0.1}s` }}>
                <div className="system-bg" style={{ backgroundImage: `url(${feature.bgImage})` }}></div>
                <div className="system-overlay"></div>
                <div className="system-content">
                  <div className="system-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting & Consultation Areas */}
      <section className="consultation-infra bg-navy section-padding">
        <div className="container">
          <div className="consultation-grid">
            <div className="consultation-image animate-on-scroll">
               <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop" alt="Executive Boardroom" loading="lazy" />
            </div>
            <div className="consultation-text animate-on-scroll delay-2">
              <FaHandshake className="consultation-icon gold-text" />
              <h2 className="section-title" style={{color: 'var(--bg-white)', textAlign: 'left'}}>Meeting & Consultation Areas</h2>
              <div className="section-divider" style={{margin: '24px 0'}}></div>
              <p style={{color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8'}}>
                Strategic corporate decisions require an environment of absolute discretion and professionalism. 
              </p>
              <p style={{color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8'}}>
                Our firm features sophisticated, sound-proofed executive boardrooms equipped with modern teleconferencing capabilities. These spaces are specifically designed to host secure consultations with Boards of Directors, execute confidential M&A negotiations, and facilitate strategic governance planning without the risk of information leakage.
              </p>
              <ul className="infra-features-list">
                <li>Sound-proofed executive environments</li>
                <li>Secure high-definition teleconferencing</li>
                <li>Restricted access zones for visiting delegates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
