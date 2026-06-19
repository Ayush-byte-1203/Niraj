import { useEffect, useRef } from 'react';
import { FaBalanceScale, FaShieldAlt, FaHandshake, FaBullseye, FaAward, FaCertificate, FaBuilding, FaGlobe } from 'react-icons/fa';
import './About.css';

const achievementsData = [
  'Successfully completed a significant number of IPOs (on both the Main Board and SME Platform) during the last three years.',
  'Facilitated proceedings for the merger of an electricity generating company into another similar entity under the Electricity Act (independent of the Companies Act, 2013).',
  'Successfully completed various assignments before the NCLT regarding mergers, corporate restructuring, capital reduction, and oppression/mismanagement cases.'
];

const coreValuesData = [
  {
    icon: <FaBalanceScale className="value-icon gold-text" />,
    title: 'Integrity',
    desc: 'Absolute transparency and adherence to the ICSI code of conduct.'
  },
  {
    icon: <FaShieldAlt className="value-icon gold-text" />,
    title: 'Confidentiality',
    desc: 'Uncompromising protection of client data and strategic information.'
  },
  {
    icon: <FaHandshake className="value-icon gold-text" />,
    title: 'Partnership',
    desc: 'Acting as true stakeholders in the sustainable growth of our clients.'
  },
  {
    icon: <FaAward className="value-icon gold-text" />,
    title: 'Excellence',
    desc: 'Delivering meticulous accuracy in every legal and statutory filing.'
  }
];

const timelineData = [
  {
    year: '1994',
    title: 'Firm Establishment',
    desc: 'Founded by CS Niraj Trivedi with a vision to provide specialized corporate secretarial services in Vadodara.'
  },
  {
    year: '2005',
    title: 'Expansion of Services',
    desc: 'Broadened practice areas to include SEBI regulations, FEMA compliances, and appearances before quasi-judicial bodies.'
  },
  {
    year: '2012',
    title: 'Ahmedabad Branch',
    desc: 'Inaugurated a dedicated branch office in Ahmedabad to better serve the growing corporate sector in Gujarat.'
  },
  {
    year: '2018',
    title: 'NCLT & IBC Practice',
    desc: 'Established a specialized desk for Insolvency and Bankruptcy Code matters and robust representation before the NCLT.'
  },
  {
    year: 'Present',
    title: 'National Presence',
    desc: 'Operating with associate offices in Delhi, serving multinational corporations and listed entities across India.'
  }
];

const certificationPoints = [
  'Fellow Member of The Institute of Company Secretaries of India (ICSI)',
  'Associate Member of ACIS (United Kingdom)',
  'Registered Professional under the Insolvency and Bankruptcy Board of India (IBBI)',
  'Past Chairman, Vadodara Chapter of ICSI'
];

const certificationBadges = [
  { text: 'ICSI Fellow' },
  { text: 'IBBI Registered' },
  { text: 'ACIS (U.K.)' }
];

const About = () => {
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
    <div className="about-page">
      {/* Page Header */}
      <section className="page-banner about-banner">
        <h1 className="animate-on-scroll">Firm Overview</h1>
      </section>

      {/* 1. Firm Introduction */}
      <section className="about-intro bg-white section-padding">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text animate-on-scroll">
              <span className="hero-badge" style={{ marginBottom: '16px' }}>Since 1994</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                A Legacy of <span className="gold-text">Excellence</span> & Integrity
              </h2>
              <div className="section-divider" style={{ margin: '24px 0' }}></div>
              <p>
                We are the firm of Practicing Company Secretaries (PCS) engaged in multi-disciplinary services rendering to various clients Corporates, Banks/FIs, Non Profit Organizations (NGOs), Firms etc. in India.
              </p>
              <p>
                At present our firm comprising of five qualified, dedicated and experienced Company Secretaries including Founder Promoter Niraj Trivedi.
              </p>
            </div>
            <div className="about-intro-image animate-on-scroll delay-2">
              <div className="image-frame glass-panel">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Corporate Office" className="framed-image" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Achievements Section */}
      <section className="achievements-section bg-light section-padding">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{ marginBottom: '50px' }}>
            <h2 className="section-title">Achievements</h2>
            <p className="section-subtitle">Milestones and recognitions demonstrating our legacy of professional excellence.</p>
            <div className="section-divider"></div>
          </div>
          
          <div className="achievements-list-container animate-on-scroll">
            <ul className="achievements-points-list">
              {achievementsData.map((achievement, index) => (
                <li key={index}>
                  <FaAward className="achievement-icon" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission & 4. Core Values */}
      <section className="vision-values bg-navy section-padding">
        <div className="container">
          <div className="vision-mission-wrapper animate-on-scroll">
            <div className="vm-card">
              <div className="vm-header">
                <FaBullseye className="vm-icon" />
                <h3>Our Mission</h3>
              </div>
              <p>To deliver ethical, precise, and business-centric Company Secretary services that empower enterprises to remain compliant, confident, and growth-ready in a dynamic regulatory environment.</p>
            </div>
            <div className="vm-divider"></div>
            <div className="vm-card">
              <div className="vm-header">
                <FaGlobe className="vm-icon" />
                <h3>Our Vision</h3>
              </div>
              <p>To be recognized as the premier institution for corporate secretarial practices in India, distinguished by our unyielding commitment to ethics, legal innovation, and lasting client partnerships.</p>
            </div>
          </div>

          <div className="core-values-section animate-on-scroll delay-2">
            <h3 className="sub-section-title text-center" style={{ color: 'var(--bg-white)', marginTop: '80px', marginBottom: '40px' }}>Our Core Values</h3>
            <div className="values-grid">
              {coreValuesData.map((val, index) => (
                <div className="value-item" key={index}>
                  {val.icon}
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Professional Journey Timeline */}
      <section className="timeline-section bg-white section-padding">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-subtitle">Three decades of milestones, legal excellence, and institutional growth.</p>
            <div className="section-divider"></div>
          </div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-item animate-on-scroll" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year gold-text">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Certifications & Memberships */}
      <section className="certifications-section bg-light section-padding">
        <div className="container">
          <div className="cert-grid animate-on-scroll">
            <div className="cert-text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Certifications & <span className="gold-text">Memberships</span></h2>
              <div className="section-divider" style={{ margin: '24px 0' }}></div>
              <p>Our firm is proudly affiliated with the most esteemed professional bodies in India, reflecting our commitment to continuous professional development and adherence to the highest statutory standards.</p>
              <ul className="premium-list">
                {certificationPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="cert-badges">
              {certificationBadges.map((badge, index) => (
                <div className="badge-item glass-panel" key={index}>
                  <FaCertificate className="badge-icon gold-text" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Corporate Philosophy */}
      <section className="philosophy-section bg-white section-padding">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Our Philosophy</h2>
            <div className="section-divider"></div>
          </div>
          <div className="philosophy-content animate-on-scroll delay-2">
            <p className="philosophy-text text-center">
              We believe that robust corporate governance is not a restrictive compliance burden, but a strategic asset that reduces risk, attracts investment, and builds enduring corporate reputations. We practice the law not just to meet the minimum statutory requirements, but to engineer optimal legal frameworks that facilitate our clients' long-term commercial objectives.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Professional Infrastructure Overview */}
      <section className="infra-overview-section bg-navy section-padding">
        <div className="container">
          <div className="infra-overview-grid animate-on-scroll">
            <div className="infra-overview-text">
              <h2 className="section-title" style={{ color: 'var(--bg-white)', textAlign: 'left' }}>Professional Infrastructure</h2>
              <div className="section-divider" style={{ margin: '24px 0' }}></div>
              <p style={{ color: 'var(--text-light)', marginBottom: '24px' }}>To support our rigorous legal work, we maintain state-of-the-art office infrastructure equipped with secure data management systems and comprehensive legal libraries.</p>
              <div className="infra-highlights">
                <div className="infra-highlight-item">
                  <FaBuilding className="highlight-icon gold-text" />
                  <div>
                    <h4 style={{ color: 'var(--bg-white)' }}>Headquarters</h4>
                    <span style={{ color: 'var(--text-muted)' }}>Premium commercial space in Vadodara</span>
                  </div>
                </div>
                <div className="infra-highlight-item">
                  <FaShieldAlt className="highlight-icon gold-text" />
                  <div>
                    <h4 style={{ color: 'var(--bg-white)' }}>Data Security</h4>
                    <span style={{ color: 'var(--text-muted)' }}>Enterprise-grade client data protection</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="infra-overview-image">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop" alt="Legal Library" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
