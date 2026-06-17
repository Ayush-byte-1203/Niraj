import { useEffect, useRef } from 'react';
import { FaBookOpen, FaUsers, FaClock, FaAward } from 'react-icons/fa';
import './Infrastructure.css';

const infrastructureFeatures = [
  {
    icon: <FaBookOpen />,
    title: 'Thorough Knowledge',
    desc: 'The promoter and its associates have complete and thorough knowledge on the subject matter. As a result, the clients get proper and accurate guidance to protect from the legal action like penalty and prosecution.',
    bgImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: <FaUsers />,
    title: 'Experience with Teamwork',
    desc: 'The promoter of this firm has experience of around plus 30 years and its associates are equally holding experience in the field of Corporate Laws. Once the work is assigned to the firm, the same gets completed with full dedication and teamwork that to in reasonable time.',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: <FaClock />,
    title: 'Time Punctuality',
    desc: 'Time punctuality is very essence in compliances. Any delay under Corporate Laws may leads to penalty and prosecution. Timely compliance will surely protect the company and its directors from such penalties. We strictly ensure compliances are done timely and accurately.',
    bgImage: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: <FaAward />,
    title: 'Best Quality with Price',
    desc: 'Due to having experienced, qualified and dedicated team, the services beings provided to the customers are utmost with the best quality and at a reasonable fee. It means, our services is considered as value for money.',
    bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
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
        <h1 className="animate-on-scroll">Operational Infrastructure & Strengths</h1>
      </section>

      {/* Office Infrastructure */}
      <section className="office-infra bg-white section-padding">
        <div className="container">
          <div className="office-grid">
            <div className="office-text animate-on-scroll">
              <span className="hero-badge" style={{marginBottom: '16px'}}>Headquarters & Facilities</span>
              <h2 className="section-title" style={{textAlign: 'left'}}>
                Our <span className="gold-text">Infrastructure</span>
              </h2>
              <div className="section-divider" style={{margin: '24px 0'}}></div>
              
              <p>
                Our firm operates from own office premises located in a prominent business area of Vadodara in the State of Gujarat. The offices are equipped with all requisite facilities such as a comprehensive Library, Computers, high-speed Internet, and advanced digital secretarial management systems.
              </p>
              <p>
                Our operational capabilities are strongly supported by a qualified and dedicated team of assistances. The firm has a good number of employees including semi-qualified Company Secretaries, graduates, and article trainees.
              </p>
              <p>
                To provide broad geographic support, we also operate a Branch Office at Ahmedabad and maintain an Associate Office at Delhi, ensuring seamless nationwide service delivery.
              </p>
            </div>
            
            <div className="office-image-wrapper animate-on-scroll delay-2">
              <div className="office-image-stack">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Premium Corporate Office" className="main-office-img" loading="lazy" />
                <div className="office-stat-card glass-panel">
                  <h4>National Network</h4>
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
             <h2 className="section-title">Core Strengths & Pillars</h2>
             <p className="section-subtitle">How our experience, knowledge base, and team commitment ensure absolute compliance protection.</p>
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

    </div>
  );
};

export default Infrastructure;
