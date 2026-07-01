import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaBuilding, FaRegCalendarCheck, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

const serviceOptions = [
  '--- Select Area of Expertise ---',
  'Limited Liability Partnership (LLP) Act',
  'SEBI Act and its Regulations',
  'Intellectual Property Rights (IPR)',
  'Foreign Exchange Management Act (FEMA)',
  'Foreign Contribution (Regulation) Act (FCRA)',
  'Insolvency and Bankruptcy Code (IBC)',
  'Banks and Financial Institutions',
  'Secretarial & Compliance Audit',
  'Appearance Before Authorities',
  'Clientele Advisory'
];

const Contact = () => {
  const observerRef = useRef(null);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    countryCode: '+91',
    contactNo: '',
    service: '',
    message: '',
  });

  // Validation State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid professional email.';
    }
    
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required.';
    } else if (!/^\d{7,15}$/.test(formData.contactNo.replace(/[\s-]/g, ''))) {
      newErrors.contactNo = 'Please enter a valid contact number.';
    }
    
    if (!formData.service || formData.service.startsWith('---')) {
      newErrors.service = 'Please select an area of expertise.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          countryCode: '+91',
          contactNo: '',
          service: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-banner contact-banner">
        <h1 className="animate-on-scroll">Contact Our Firm</h1>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section section-padding bg-light">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{marginBottom: '60px'}}>
             <h2 className="section-title">Schedule a Strategic Consultation</h2>
             <p className="section-subtitle">Engage with our corporate law experts to secure your enterprise compliance framework.</p>
             <div className="section-divider"></div>
          </div>

          <div className="contact-premium-grid">
             {/* Corporate Office Details */}
             <div className="contact-details-container animate-on-scroll">
                
                {/* HQ Card */}
                <div className="office-location-card">
                  <div className="location-card-header">
                     <FaBuilding className="location-badge" />
                     <h3>Headquarters - Vadodara</h3>
                  </div>
                  <div className="location-details">
                    <div className="detail-row">
                      <FaMapMarkerAlt className="detail-icon" aria-hidden="true" />
                      <div className="detail-content">
                        <strong>Registered Office</strong>
                        <address>Prominent Commercial Area,<br/>Vadodara, Gujarat 390001, India</address>
                      </div>
                    </div>
                    <div className="detail-row">
                      <FaPhoneAlt className="detail-icon" aria-hidden="true" />
                      <div className="detail-content">
                        <strong>Direct Boardline</strong>
                        <a href="tel:+919824248079" className="contact-link">+91 982 424 8079</a>
                      </div>
                    </div>
                    <div className="detail-row">
                      <FaEnvelope className="detail-icon" aria-hidden="true" />
                      <div className="detail-content">
                        <strong>Official Email</strong>
                        <a href="mailto:info@nirajtrivedi-cs.com" className="contact-link">info@nirajtrivedi-cs.com</a>
                      </div>
                    </div>
                    <div className="detail-row">
                      <FaClock className="detail-icon" aria-hidden="true" />
                      <div className="detail-content">
                        <strong>Business Hours</strong>
                        <p>Monday - Friday: 10:00 AM to 07:00 PM<br/>Saturday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Network */}
                <div className="office-location-card secondary-office">
                  <div className="location-card-header">
                     <FaBuilding className="location-badge" />
                     <h3>Branch & Associate Offices</h3>
                  </div>
                  <div className="location-details">
                    <div className="detail-row">
                      <FaMapMarkerAlt className="detail-icon" aria-hidden="true" />
                      <div className="detail-content">
                        <strong>Ahmedabad Branch</strong>
                        <address>Navrangpura, Ahmedabad, Gujarat</address>
                      </div>
                    </div>
                    <div className="detail-row">
                      <FaMapMarkerAlt className="detail-icon" aria-hidden="true" />
                      <div className="detail-content">
                        <strong>Delhi Associate Office</strong>
                        <address>Connaught Place, New Delhi</address>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="urgent-contact-note">
                   <p>For urgent regulatory notices or NCLT matters, please mark your email subject as <strong>[URGENT]</strong> or call the boardline directly.</p>
                </div>
              </div>

             {/* Inquiry Form */}
             <div className="contact-form-container animate-on-scroll delay-2">
               <div className="form-header">
                 <FaRegCalendarCheck className="form-header-icon gold-text" />
                 <h3>Formal Inquiry</h3>
               </div>
               <p className="form-desc">Provide your corporate details below. A senior associate will review your requirements and contact you promptly.</p>
               
               {submitSuccess && (
                 <div className="success-banner" role="alert">
                   <strong>Inquiry Submitted Successfully.</strong> Our team will be in touch with you shortly.
                 </div>
               )}

               <form className="premium-contact-form" onSubmit={handleSubmit} noValidate>
                 <div className="form-row">
                   <div className="form-group">
                     <label htmlFor="fullName">Full Name <span className="required" aria-hidden="true">*</span></label>
                     <input
                       type="text"
                       id="fullName"
                       name="fullName"
                       value={formData.fullName}
                       onChange={handleChange}
                       className={errors.fullName ? 'input-error' : ''}
                       placeholder="Enter your full name"
                       aria-invalid={errors.fullName ? 'true' : 'false'}
                       aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                     />
                     {errors.fullName && <span id="fullName-error" className="error-text"><FaExclamationCircle /> {errors.fullName}</span>}
                   </div>
                   <div className="form-group">
                     <label htmlFor="companyName">Company / Organization</label>
                     <input
                       type="text"
                       id="companyName"
                       name="companyName"
                       value={formData.companyName}
                       onChange={handleChange}
                       placeholder="e.g. Acme Corp Ltd."
                     />
                   </div>
                 </div>

                 <div className="form-row">
                   <div className="form-group">
                     <label htmlFor="email">Professional Email <span className="required" aria-hidden="true">*</span></label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       className={errors.email ? 'input-error' : ''}
                       placeholder="Enter professional email"
                       aria-invalid={errors.email ? 'true' : 'false'}
                       aria-describedby={errors.email ? 'email-error' : undefined}
                     />
                     {errors.email && <span id="email-error" className="error-text"><FaExclamationCircle /> {errors.email}</span>}
                   </div>
                   <div className="form-group">
                     <label htmlFor="contactNo">Contact Number <span className="required" aria-hidden="true">*</span></label>
                     <div className={`phone-input-group ${errors.contactNo ? 'input-error-group' : ''}`}>
                       <select
                         name="countryCode"
                         value={formData.countryCode}
                         onChange={handleChange}
                         className="country-code-select"
                         aria-label="Country Code"
                       >
                         <option value="+91">IN (+91)</option>
                         <option value="+1">US (+1)</option>
                         <option value="+44">UK (+44)</option>
                         <option value="+971">AE (+971)</option>
                         <option value="+65">SG (+65)</option>
                       </select>
                       <input
                         type="tel"
                         id="contactNo"
                         name="contactNo"
                         value={formData.contactNo}
                         onChange={handleChange}
                         placeholder="Enter number"
                         aria-invalid={errors.contactNo ? 'true' : 'false'}
                         aria-describedby={errors.contactNo ? 'contactNo-error' : undefined}
                       />
                     </div>
                     {errors.contactNo && <span id="contactNo-error" className="error-text"><FaExclamationCircle /> {errors.contactNo}</span>}
                   </div>
                 </div>

                 <div className="form-group">
                   <label htmlFor="service">Primary Area of Interest <span className="required" aria-hidden="true">*</span></label>
                   <select
                     id="service"
                     name="service"
                     value={formData.service}
                     onChange={handleChange}
                     className={`${errors.service ? 'input-error' : ''} ${formData.service === '' ? 'placeholder-active' : ''}`}
                     aria-invalid={errors.service ? 'true' : 'false'}
                     aria-describedby={errors.service ? 'service-error' : undefined}
                   >
                     {serviceOptions.map((opt, i) => (
                       <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>
                         {opt}
                       </option>
                     ))}
                   </select>
                   {errors.service && <span id="service-error" className="error-text"><FaExclamationCircle /> {errors.service}</span>}
                 </div>

                 <div className="form-group">
                   <label htmlFor="message">Brief Description of Requirement</label>
                   <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     rows="5"
                     placeholder="Briefly describe your compliance, governance, legal, or advisory requirement."
                   ></textarea>
                 </div>

                 <button 
                   type="submit" 
                   className={`btn-primary submit-btn-full ${isSubmitting ? 'submitting' : ''}`}
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? 'Processing Request...' : 'Submit Inquiry'}
                 </button>
               </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
