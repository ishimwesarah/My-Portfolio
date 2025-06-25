import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import '../styles/Contact.css'; // Ensure you have the correct path to your CSS file

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
  
    setTimeout(() => {
      setSubmitStatus('success');
      form.current.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-section"
    >
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together</p>
        <div className="section-divider"></div>
      </div>

      <div className="contact-container">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="contact-info"
        >
          <h3>Contact Information</h3>
          
          <div className="info-item">
            <div className="info-icon">
              <FiMail />
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <a href="mailto:ishimwesarah09@gmail.com">ishimwesarah09@gmail.com</a>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FiPhone />
            </div>
            <div className="info-content">
              <h4>Phone</h4>
              <a href="tel:+250784711354">+250 784 711 354</a>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FiMapPin />
            </div>
            <div className="info-content">
              <h4>Location</h4>
              <p>Kigali, Rwanda</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-form-container"
        >
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="form-input"
              />
              <span className="input-border"></span>
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="form-input"
              />
              <span className="input-border"></span>
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required 
                className="form-input"
              />
              <span className="input-border"></span>
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required 
                className="form-textarea"
              ></textarea>
              <span className="input-border"></span>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message error">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;