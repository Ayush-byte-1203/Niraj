import { useEffect, useRef } from 'react';
import { FaLinkedin, FaEnvelope, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import './Teams.css';

const teamMembers = [
  {
    name: 'CS NIRAJ TRIVEDI',
    role: 'Founder & Principal Corporate Advisor',
    qualifications: 'B. Com (Hon.), FCS, ACIS (U.K.), LL.B. (Spl.), PGDCL, PGDLP',
    expertise: ['Corporate Governance', 'SEBI Regulations', 'FEMA', 'Insolvency Code'],
    desc: 'Fellow member of ICSI with over 30 years of extensive experience in Corporate Laws. Past Chairman of the Vadodara Chapter of ICSI. He has successfully represented numerous corporations before NCLT, SEBI, and RBI, establishing a benchmark for corporate compliance in Gujarat.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop',
    featured: true,
    timeline: [
      { year: '1994', event: 'Founded Niraj Trivedi CS' },
      { year: '2005', event: 'Elected Chairman of Vadodara ICSI' },
      { year: '2015', event: 'Achieved ACIS (U.K.) Certification' }
    ]
  },
  {
    name: 'ADV. MONA TRIVEDI',
    role: 'Senior Advocate',
    qualifications: 'B.A., LL.B.',
    expertise: ['Corporate Litigation', 'Legal Drafting', 'Contract Law'],
    desc: 'Providing robust legal strategy and court representation. She ensures that all corporate secretarial actions are fortified with unassailable legal validity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS ASHISH TRIPATHI',
    role: 'Company Secretary & Branch Head (Ahmedabad)',
    qualifications: 'ACS, B.Com, LL.B.',
    expertise: ['ROC Liaising', 'NCLT Matters', 'Stamp Office Clearances'],
    desc: 'Heads the Ahmedabad operations, specializing in seamless liaising with statutory authorities including the Registrar of Companies and Regional Directors.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS KAMAL LALANI',
    role: 'Senior Compliance Officer',
    qualifications: 'ACS, M.Com',
    expertise: ['Secretarial Audit', 'Annual Filings', 'Due Diligence'],
    desc: 'A meticulous compliance professional dedicated to executing comprehensive secretarial audits and safeguarding client governance frameworks.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS NIKITA PATEL',
    role: 'Company Secretary',
    qualifications: 'ACS, B.B.A',
    expertise: ['XBRL Filing', 'Private Company Compliance', 'Event-based Filings'],
    desc: 'Specializes in the execution of complex regulatory filings, ensuring absolute accuracy in time-sensitive corporate submissions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS NIKKI SHAH',
    role: 'Company Secretary',
    qualifications: 'ACS, LL.B.',
    expertise: ['FEMA Compliance', 'LLP Structuring', 'Statutory Drafting'],
    desc: 'Expert in unlisted entity compliance, managing complex LLP conversions and managing RBI/FEMA documentation with precision.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'CS ISMAIL SHAIKHJIWALA',
    role: 'Company Secretary',
    qualifications: 'ACS, B.Com',
    expertise: ['Company Incorporation', 'Restructuring', 'MCA Approvals'],
    desc: 'Drives end-to-end entity formation and corporate restructuring operations, guiding startups and established firms through complex incorporations.',
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
                   <span className="exec-role">{featuredMember.role}</span>
                 </div>
                 
                 <div className="exec-quals">
                   <FaGraduationCap className="gold-text" />
                   <span>{featuredMember.qualifications}</span>
                 </div>

                 <p className="exec-bio">{featuredMember.desc}</p>

                 <div className="exec-expertise">
                   <h4>Areas of Expertise</h4>
                   <div className="expertise-tags">
                     {featuredMember.expertise.map((tag, idx) => (
                       <span key={idx} className="expertise-tag">{tag}</span>
                     ))}
                   </div>
                 </div>

                 <div className="exec-timeline">
                   <h4>Career Milestones</h4>
                   <div className="milestone-track">
                     {featuredMember.timeline.map((item, idx) => (
                       <div key={idx} className="milestone-item">
                         <span className="milestone-year">{item.year}</span>
                         <span className="milestone-event">{item.event}</span>
                       </div>
                     ))}
                   </div>
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
                    <span className="pro-role">{member.role}</span>
                  </div>
                </div>
                
                <div className="pro-card-body">
                  <div className="pro-quals">
                     <FaGraduationCap className="pro-icon" />
                     <span>{member.qualifications}</span>
                  </div>
                  <p className="pro-desc">{member.desc}</p>
                  
                  <div className="pro-expertise">
                    <FaBriefcase className="pro-icon" />
                    <div className="expertise-tag-group">
                      {member.expertise.map((tag, idx) => (
                        <span key={idx} className="small-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
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
