import { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaEnvelope, FaAward } from 'react-icons/fa';
import './Teams.css';

const teamMembers = [
  {
    name: 'CS NIRAJ TRIVEDI',
    desc: `Fellow member of ICSI and founder of this firm, having extensive knowledge and experience of more than 30 years in the field of Corporate Laws such as the Companies Act, 2013, Foreign Exchange Management Act, 1999 (“FEMA”), Securities and Exchange Board of India Act, 1992 (along with its Rules and Regulations), Foreign Contribution (Regulation) Act, 2010 (“FCRA”), and the Insolvency and Bankruptcy Code, 2016 (“IBC”), among others.\n\nHe was the past Chairman of the Vadodara Chapter of ICSI and is in charge of the overall functioning of the firm. He holds a B.Com. (Honours), is an Associate Member of ACIS (U.K.), and also holds an LL.B. (Special), a Post Graduate Diploma in Cyber Law (PGDCL), and a Post Graduate Diploma in Labour Laws and Practice (PGDLP).\n\nAt present, he represents clients before various statutory authorities such as the National Company Law Tribunals (“NCLT”), National Company Law Appellate Tribunal (“NCLAT”), Regional Directors (“RD”), Registrars of Companies (“ROC”), Reserve Bank of India (“RBI”), and SEBI.\n\nHe is also actively involved in providing professional opinions on complex matters of corporate law, and frequently delivers lectures at various platforms and Study Circle meetings organized by ICSI and ICAI.`,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop',
    featured: true
  },
  {
    name: 'ADV. MONA TRIVEDI',
    desc: 'She is an LL.M. (Gold Medalist) by qualification with around 25 years of experience in the fields of Corporate Laws, Banking Regulation, Revenue Matters, Debt Recovery, and Title Clearance. She has been associated with the firm since its inception and handles the drafting of various applications, petitions, appeals, schemes, and other legal documents to be submitted to statutory authorities such as NCLT, NCLAT, SEBI, ROC, RD, and RBI.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS ASHISH TRIPATHI',
    desc: 'He is an Associate Company Secretary and a senior partner of the firm with around 15 years of experience in Corporate Laws. He heads the Ahmedabad office and manages liaising with various statutory authorities at Ahmedabad and Gandhinagar, including the ROC, RD, NCLT, and the Stamp Office.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS SAMIR RAVAL',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS VRUND BHRAMBHATT',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'RIYA SHAH',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS ISMAIL SHAIKHJIWALA',
    desc: 'He is an Associate Company Secretary with around two years of experience in the field of Corporate Laws and FEMA. He handles company formation, company/LLP conversion, and legal compliances for all unlisted and private limited companies under the Companies Act, 2013, and the LLP Act.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop',
  },
];

const Teams = () => {
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

  const featuredMember = teamMembers.find(m => m.featured);
  const coreTeam = teamMembers.filter(m => !m.featured);

  return (
    <div className="teams-page">
      <section className="page-banner teams-banner">
        <h1 className="animate-on-scroll">Professional Leadership</h1>
      </section>

      <section className="teams-content bg-light section-padding">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{marginBottom: '60px'}}>
             <h2 className="section-title">Our Expert Partners & Associates</h2>
             <p className="section-subtitle">A distinguished assembly of highly qualified Company Secretaries and legal advocates dedicated to uncompromising corporate governance.</p>
             <div className="section-divider"></div>
          </div>

          {/* Featured Member (Founder) - Executive Profile Layout */}
          {featuredMember && (
            <div className="executive-profile-card animate-on-scroll glass-panel">
               <div className="exec-image-column">
                 <div className="exec-img-wrapper">
                   <img src={featuredMember.image} alt={featuredMember.name} loading="lazy" />
                   <div className="exec-badge">
                     <FaAward className="exec-badge-icon" />
                     <span>30+ Years Experience</span>
                   </div>
                 </div>
                 <div className="exec-social">
                    <a href="#" className="exec-social-link"><FaLinkedin /> Connect on LinkedIn</a>
                    <a href="#" className="exec-social-link"><FaEnvelope /> Email Founder</a>
                 </div>
               </div>

               <div className="exec-info-column">
                 <div className="exec-header">
                   <h3>{featuredMember.name}</h3>
                 </div>

                  <div className="exec-bio">
                    {featuredMember.desc.split('\n\n').map((para, idx) => (
                      <p key={idx} style={{ marginBottom: '16px' }}>{para}</p>
                    ))}
                  </div>
               </div>
            </div>
          )}

          {/* Core Team Grid - Professional LinkedIn Style Cards */}
          <div className="professional-team-grid">
            {coreTeam.map((member, i) => (
              <div key={i} className="pro-team-card animate-on-scroll" style={{ animationDelay: `${(i % 3) * 0.1}s` }}>
                <div className="pro-card-header">
                  <div className="pro-avatar">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="pro-header-text">
                    <h4>{member.name}</h4>
                  </div>
                </div>
                
                <div className="pro-card-body">
                   {member.desc ? (
                     <p className="pro-desc">{member.desc}</p>
                   ) : (
                     <div style={{ flexGrow: 1 }} />
                   )}
                 </div>

                <div className="pro-card-footer">
                  <a href="#" className="pro-social-icon" aria-label="LinkedIn Profile"><FaLinkedin /></a>
                  <a href="#" className="pro-social-icon" aria-label="Send Email"><FaEnvelope /></a>
                </div>
              </div>
            ))}
          </div>

          <div className="team-note animate-on-scroll">
            <div className="note-content">
               <p>The firm operates a <strong>Branch office at Ahmedabad</strong> and an <strong>Associate office at Delhi</strong> to provide seamless national coverage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
