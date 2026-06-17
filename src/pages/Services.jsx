import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaClipboardCheck, FaBalanceScale, FaFileSignature, 
  FaGlobe, FaLightbulb, FaUserTie, FaArrowRight, FaCheckCircle,
  FaChevronDown, FaChevronUp, FaBriefcase, FaChartLine,
  FaShieldAlt, FaLandmark, FaHandshake
} from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    id: 'llp',
    title: 'LIMITED LIABILITY PARTNERSHIP ACT',
    icon: <FaBriefcase />,
    includes: [
      'Formation of LLP, conversion of Company into LLP or otherwise.',
      'Reconstitution of Partnership Deed including change in the capital, partners etc.',
      'Change of Name, place of business, partners, capital of the partners etc',
      'Winding and striking off of LLP',
      'Guidance on timely submission of forms with the office of Registrar of Companies including Statutory and Event Based submission.'
    ]
  },
  {
    id: 'sebi',
    title: 'SECURITIES AND EXCHANGE BOARD OF INDIA ACT AND ITS REGULATION',
    icon: <FaChartLine />,
    includes: [
      'Providing guidance for Listing / Revocation of securities with stock exchanges.',
      'Providing guidance as required under the Listing Regulationsand action to be taken by the company there under such as periodically compliance including compliances under Corporate Governance and Listing Regulation etc.',
      'Issue of shares/ securities as Bonus / Right Issue /Public Issue (IPO/FPO), Private Placement, ESOP, QIBs, FIIs etc. including drafting of related documents and papers.',
      'Providing guidance in drafting of Prospectus/ Letter of Offer or other related documents and obtaining various approvals and getting the security listed with the stock exchanges etc. in association with Merchant Bankers.',
      'This includes providing guidance in respect of compliance under Listing Regulation and communication with SEBI/ Stock Exchanges for SME / Main Board.',
      'Providing proper guidance to the companies under SEBI Takeover code, Buy Back of securities, Insider Trading Regulation and drafting of various communication with the SEBI / Stock Exchanges / Shareholders in this connection. This includes drafting of application to be submitted to SEBI for seeking exemption under SAST, ICDR etc.',
      'Delisting of securities in compliance with the SEBI regulation.'
    ]
  },
  {
    id: 'ipr',
    title: 'INTELLECTUAL PROPERTY RIGHTS',
    icon: <FaLightbulb />,
    includes: [
      'Advising on intellectual Property Licensing.',
      'Getting Trade Mark Registered.',
      'Advising on passing off/ infringement matter and to represent the case before Trade Mark Registry for getting the mark registered.'
    ]
  },
  {
    id: 'fema',
    title: 'FOREIGN EXCHANGE MANAGEMENT ACT',
    icon: <FaGlobe />,
    includes: [
      'Formation of Joint Venture (JV), Wholly Owned Subsidiary companiesin and outside India in compliance with the requirements under Reserve Bank of India (RBI) / Department of Industrial Policy and Promotion (DIPP) and guideline framed thereunder.',
      'Providing guidance on inbound & outbound investments.',
      'Issue, transfer of shares to Foreigners and other Non-Resident Indians (NRI’s) under Automatic / Approval Route and providing guidance in deciding issue price.',
      'Drafting of documentation to be submitted with concerned authorities thereunder.',
      'Opening of Branch office in India and abroad and getting permission from Reserve Bank of India.',
      'Consent / Approval of Secretariat of Industrial Approval (SIA) / Foreign Investment Promotion Board (FIPB) under Approval Route.',
      'Compounding Application before Reserve Bank of India in case of violation under FEMA such as FDI and ECB guideline etc.'
    ]
  },
  {
    id: 'fcra',
    title: 'FOREIGN CONTRIBUTION (REGULATION) ACT',
    icon: <FaShieldAlt />,
    includes: [
      'Providing guidance on eligibility criteria for Registration& Prior Permission.',
      'Advising on and documentation required for Prior Permission, Registration, Condonation, Restoration, Shifting of Designated Bank, Renewal, change of constitution etc. of NGOs.',
      'Facilitate to obtain such Registration, Prior Permission, Condonation, Renewaletc. from the office of Ministry of Home Affairs – Delhi.'
    ]
  },
  {
    id: 'ibc',
    title: 'INSOLVENCY AND BANKRUPTCY CODE',
    icon: <FaBalanceScale />,
    includes: [
      'Drafting of Notice and application including Voluntary Liquidation under Insolvency Code.',
      'Appearing before NCLT and NCLAT for the matter under IBC.',
      'Facilitating Committee of Creditors, Resolution Professional, Liquidator in completion of process under Corporate Insolvency Resolution Process (CIRP), Liquidation Process etc.'
    ]
  },
  {
    id: 'banking',
    title: 'BANKS AND FINANCIAL INSTITUTIONS',
    icon: <FaLandmark />,
    includes: [
      'Providing Search Report based on documents available on MCA.',
      'Examine covenants contained in the loan agreement thoroughly and to check whether all notices required to be sent to the FI and Banks have been complied and necessary approvals were obtained from the FI and Banks wherever required.',
      'Information about Memorandum and Articles of Association, Borrowing powers and resolutions there under has been passed in proper manner or not by the company before availing loan.',
      'Providing Due Diligence Report as per RBI guideline'
    ]
  },
  {
    id: 'audit',
    title: 'AUDIT',
    icon: <FaClipboardCheck />,
    includes: [
      'Due Diligence under Corporate Laws in case of Take Over, Change in Management, Joint Venture, IPO, QIB etc.',
      'Reconciliation of Share Capital Audit as per SEBI Guidelines',
      'Corporate Governance',
      'Annual Compliance of Corporate Laws as per SEBI guideline',
      'Secretarial Audit'
    ]
  },
  {
    id: 'representation',
    title: 'APPEARANCE BEFORE',
    icon: <FaUserTie />,
    includes: [
      'Securities Exchange Board of India (SEBI)',
      'Securities Appellate Tribunal (SAT)',
      'Stock Exchanges',
      'Regional Director (RD)',
      'Registrar of Companies (ROC)',
      'Ministry of Corporate Affairs – Delhi (HQ)',
      'Reserve Bank of India',
      'Secretarial for Industrial Approval (SIA)',
      'National Company Law Tribunal / Appellate Tribunal (NCLT and NCLAT)'
    ]
  },
  {
    id: 'clientele',
    title: 'CLIENTAL',
    icon: <FaHandshake />,
    includes: [
      'Public /Private Limited Companies',
      'NPOs/NGOs',
      'Government / Public Sector Companies',
      'Joint Venture Companies',
      'Multinational Companies',
      'Limited Liability Partnerships (LLPs)',
      'Non Banking Financial Companies (NBFCs)',
      'Partnership Firms',
      'Banks'
    ]
  }
];

const corporateLawPoints = [
  'Promotion, formation, and incorporation of companies including Section 8 (Not for Profit Organization/NGO), Producer Companies, Chapter XXI Companies (Conversion into a Company) and matter relating therewith including choice of and type of companies, drafting of Memorandum and Articles of Associations and other documents. This includes conversion of partnership firm into company/ LLP and vice - vice.',
  'Advising on maintenance of Secretarial Records and Statutory Books and Registers.',
  'Annual filing including XBRL.',
  'Advising on timely compliance of statutory requirements under Corporate Laws by the companies (Private and Public) to avoid penal action and prosecution to the Companies and its Directors.',
  'Issuing status report on statutory/ legal compliance and Issuing Secretarial Compliance Report/ Due Diligence Report wherever it is necessary.',
  'Pre-certification of documents, returns etc. to be submitted with the office of Registrar of Companies, Regional Director, Ministry of Corporate Affairs etc.',
  'Appearing as an authorized representative before Central Government, Regional Director, Registrar of Companies, SEBI, SAT, NCLT and NCLAT on various matters on Corporate Law Related issues.',
  'Providing necessary guidance for transfer, transmission, transposition, dematerialization, re-materializationof shares and other securities etc. including action to be taken, correspondence with member’s and drafting affidavit, indemnity bond including necessary communication with Depositories and Depository Participants (DP).',
  'Advising and attending on conducting meeting of Board, Shareholdersand Court convened meeting and preparation of documents such as notice, explanatory statements, minutes, Directors’ Report, Corporate Governance Report, Business Responsibility Report, etc.',
  'Shifting of Registered Office of the Company from one State to another, Change of name of the company, Conversion of status of the company from private to public and vis-vis and to LLP. Drafting of various documents, petitions, affidavits, advertisements, letters, resolution, forms etc. for the same.',
  'Helping company in finalization of financial statements including Balance Sheets, Notes thereon.',
  'Providing guidance for Striking off or winding off the company and drafting of necessary resolutions, documents, forms etc.',
  'Advising and drafting documents on Buy Back of Securities for Listed and Unlisted Companies.',
  'To act as scrutinizer in case of Postal Ballot, Court Conveyed Meeting, Voting through Ballot / E Votingetc.',
  'Providing guidance on restructuring of company, which includes reduction of capital, merger, amalgamation, demerger and also to carry due diligence, etc.and to draft Scheme of Compromise and to provide incidental services to the company.',
  'Carrying Due Diligence of the company to make sure that the company has complied with the requirements of corporate laws and regulations made thereunder.',
  'Providing opinion on various corporate laws.',
  'Providing guidance on various issues relating to Corporate Social Responsibility (CSR) including drafting of Policy implement and monitor a cohesive CSR policy that is not only compliant with section 135 of the Act but also need-based, strategic, integrated with the value chains, iterative and geared towards business responsibility reporting. Based on our experience and research, we can offer significant value to our clients (at different stages of the CSR lifecycle). We have worked with good number of companies and have offered comprehensive and customizable services such as guidance notes along with enlightment of the concept of CSR, its applicability, framing of CSR Policy, annual Action Plan and its implementation for the financial year to help you comply with the provisions of CSR under the Companies Act, 2013'
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
          <div className="text-center animate-on-scroll" style={{ marginBottom: '50px' }}>
            <h2 className="section-title">Areas of Expertise</h2>
            <p className="section-subtitle">A comprehensive breakdown of our professional corporate services and legal specializations.</p>
            <div className="section-divider"></div>
          </div>

          {/* Full Screen Corporate Law Overview List */}
          <div className="corporate-overview-section animate-on-scroll" style={{ marginBottom: '60px' }}>
            <div className="corporate-overview-card">
              <ul className="overview-points-grid">
                {corporateLawPoints.map((point, index) => (
                  <li key={index} className="overview-point-item">
                    <FaCheckCircle className="check-icon" style={{ marginTop: '4px', color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dense-services-grid">
            {servicesData.map((service, index) => {
              const isExpanded = expandedCards[service.id];
              const visibleIncludes = isExpanded ? service.includes : service.includes.slice(0, 3);
              
              return (
                <div 
                  key={service.id}
                  id={service.id}
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
                    <div className="dsc-includes">
                      <ul className="includes-list">
                        {visibleIncludes.map((item, idx) => (
                          <li key={idx}>
                            <FaCheckCircle className="check-icon" /> 
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="dsc-footer">
                    <div className="dsc-actions">
                      {service.includes.length > 3 ? (
                        <button 
                          className="dsc-learn-more-btn"
                          onClick={() => toggleExpand(service.id)}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? 'View Less' : 'View More'} 
                          {isExpanded ? <FaChevronUp className="btn-icon" /> : <FaChevronDown className="btn-icon" />}
                        </button>
                      ) : (
                        <div />
                      )}
                      
                      <Link to="/contact-us" className="dsc-cta-btn">
                        Consult Us <FaArrowRight className="btn-icon-right" />
                      </Link>
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
            <Link to="/contact-us" className="btn-gold large-cta-btn">Schedule an Advisory Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
