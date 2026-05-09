import { useState, useEffect, useRef } from 'react';
import { 
  FaClipboardCheck, FaBalanceScale, FaFileSignature, 
  FaGlobe, FaLightbulb, FaUserTie, FaChevronDown, FaChevronUp, FaArrowRight, FaCheckCircle
} from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    id: 'roc',
    title: 'ROC Compliance',
    icon: <FaClipboardCheck />,
    summary: 'Annual filings, statutory maintenance, and compliance management for companies.',
    includes: [
      'Annual ROC Filing',
      'Statutory Registers',
      'Board Resolutions',
      'MCA Compliance',
      'Event-Based Filings'
    ],
    details: 'Our firm ensures comprehensive adherence to the Companies Act. We meticulously handle annual returns, XBRL filings, and maintain all statutory registers, safeguarding the company and its directors from regulatory penalties while ensuring operational transparency.'
  },
  {
    id: 'governance',
    title: 'Corporate Governance',
    icon: <FaBalanceScale />,
    summary: 'Professional advisory services for governance frameworks and board processes.',
    includes: [
      'Governance Advisory',
      'Board Support',
      'Compliance Frameworks',
      'Risk Monitoring',
      'Corporate Ethics'
    ],
    details: 'We provide specialized advisory to Boards of Directors, establishing robust governance frameworks. Our services include conducting independent board evaluations, managing general meetings, and implementing strict corporate ethics protocols to build stakeholder trust.'
  },
  {
    id: 'documentation',
    title: 'Legal Documentation',
    icon: <FaFileSignature />,
    summary: 'Preparation and review of corporate legal documentation and agreements.',
    includes: [
      'Agreements',
      'Resolutions',
      'Policies',
      'Shareholder Documents',
      'Compliance Documentation'
    ],
    details: 'Precision drafting of commercial agreements, shareholder pacts, joint venture contracts, and internal corporate policies. We ensure that every document is legally watertight and strategically aligned with your corporate objectives.'
  },
  {
    id: 'fema',
    title: 'FEMA & RBI Compliance',
    icon: <FaGlobe />,
    summary: 'Regulatory compliance support for foreign exchange and cross-border transactions.',
    includes: [
      'FEMA Advisory',
      'RBI Filings',
      'FDI Compliance',
      'Overseas Investments',
      'Reporting Requirements'
    ],
    details: 'Navigating complex foreign exchange laws with precision. We handle compliance for inbound (FDI) and outbound investments, compounding of offenses, and facilitate regulatory reporting to the Reserve Bank of India to ensure seamless cross-border operations.'
  },
  {
    id: 'ipr',
    title: 'Trademark / IP Assistance',
    icon: <FaLightbulb />,
    summary: 'Professional support for intellectual property protection and filings.',
    includes: [
      'Trademark Filing',
      'Brand Protection',
      'IP Documentation',
      'Registration Assistance',
      'Compliance Review'
    ],
    details: 'Strategic safeguarding of your corporate brand identity. Our professionals assist with exhaustive trademark searches, precise filing of registration applications, and representing clients before the Trade Mark Registry for intellectual property protection.'
  },
  {
    id: 'advisory',
    title: 'Regulatory Advisory',
    icon: <FaUserTie />,
    summary: 'Strategic advisory and representation support for regulatory matters.',
    includes: [
      'NCLT Matters',
      'SEBI Compliance',
      'Regulatory Representation',
      'Advisory Support',
      'Corporate Restructuring'
    ],
    details: 'Expert legal representation and advisory before key statutory authorities including NCLT and SEBI. We guide corporations through complex restructuring, amalgamations, and provide authoritative legal opinions on intricate corporate matters.'
  }
];

const Services = () => {
  const observerRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});

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

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="services-page">
      {/* 1. Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="animate-on-scroll">Comprehensive Corporate Compliance Solutions</h1>
          <div className="hero-divider animate-on-scroll delay-1"></div>
          <p className="hero-subtitle animate-on-scroll delay-2">
            Delivering strategic legal and secretarial expertise with precision, confidentiality, and regulatory excellence.
          </p>
        </div>
      </section>

      {/* 2. Services Grid Section */}
      <section className="services-catalog section-padding bg-light">
        <div className="container">
          <div className="dense-services-grid">
            {servicesData.map((service, index) => {
              const isExpanded = expandedCards[service.id];
              return (
                <div 
                  key={service.id} 
                  className="dense-service-card animate-on-scroll"
                  style={{ animationDelay: `${(index % 2) * 0.15}s` }}
                >
                  <div className="dsc-header">
                    <div className="dsc-icon-box">
                      {service.icon}
                    </div>
                    <h3 className="dsc-title">{service.title}</h3>
                  </div>
                  
                  <div className="dsc-body">
                    <p className="dsc-summary">{service.summary}</p>
                    
                    <div className="dsc-includes">
                      <h4 className="includes-title">Key Services Included:</h4>
                      <ul className="includes-list">
                        {service.includes.map((item, idx) => (
                          <li key={idx}><FaCheckCircle className="check-icon" /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="dsc-footer">
                    <div className={`dsc-expandable-content ${isExpanded ? 'open' : ''}`}>
                      <div className="dsc-details-inner">
                        <p>{service.details}</p>
                      </div>
                    </div>
                    
                    <div className="dsc-actions">
                      <button 
                        className="dsc-learn-more-btn"
                        onClick={() => toggleExpand(service.id)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? 'View Less' : 'Learn More'} 
                        {isExpanded ? <FaChevronUp className="btn-icon" /> : <FaChevronDown className="btn-icon" />}
                      </button>
                      
                      <a href="/contact-us" className="dsc-cta-btn">
                        Consult Us <FaArrowRight className="btn-icon-right" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Footer CTA */}
      <section className="services-bottom-cta">
        <div className="container">
          <div className="bottom-cta-inner animate-on-scroll">
            <div className="bottom-cta-text">
              <h2>Secure Your Corporate Governance Framework</h2>
              <p>Partner with our firm to ensure uncompromising adherence to corporate laws and statutory regulations.</p>
            </div>
            <a href="/contact-us" className="btn-gold large-cta-btn">Schedule an Advisory Session</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
