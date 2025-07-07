import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-section"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="about-content"
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          <p>
            Detail-oriented and results-driven Full Stack Developer with experience in building 
            web and mobile applications. Adept at creating responsive, user-friendly interfaces 
            and robust backend systems.
          </p>
          <p>
            Currently expanding my expertise in full-stack software development with hands-on 
            experience in JavaScript, React, Node.js, and mobile development with React Native.
          </p>
          <p>
            Passionate about combining technology and business to support community development, 
            youth empowerment, and digital transformation initiatives.
          </p>
        </div>

        <div className="about-details">
          <div className="details-column">
            <div className="detail-item">
              <span>Name:</span>
              <span>Sarah Ishimwe</span>
            </div>
            <div className="detail-item">
              <span>Email:</span>
              <span>ishimwesarah09@gmail.com</span>
            </div>
            <div className="detail-item">
              <span>Location:</span>
              <span>Kigali, Rwanda</span>
            </div>
          </div>
          <div className="details-column">
            <div className="detail-item">
              <span>Phone:</span>
              <span>+250 784 711 354</span>
            </div>
            <div className="detail-item">
              <span>Languages:</span>
              <span>English (Fluent), Kinyarwanda (Fluent)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;