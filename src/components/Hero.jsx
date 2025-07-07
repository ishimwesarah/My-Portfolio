import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import '../styles/Hero.css'; // Ensure you have the correct path to your CSS file
import her from '../assets/IMG_0834.jpg'; // Adjust the path as necessary
// eslint-disable-next-line react/prop-types
const Hero = ({ setActiveSection }) => {
  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h4 variants={itemVariants}>Hello, I'm</motion.h4>
          <motion.h1 variants={itemVariants}>Sarah Ishimwe</motion.h1>
          <motion.h2 variants={itemVariants}>
            <span className="text-gradient">Full Stack Developer</span>
          </motion.h2>
          <motion.p variants={itemVariants}>
            I build exceptional digital experiences with modern web technologies.
            Currently focused on React, Node.js, and React Native development.
          </motion.p>

          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="primary-btn"
              onClick={() => setActiveSection('contact')}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/Sarah.pdf"
              download
              className="secondary-btn"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            variants={itemVariants}
          >
            <motion.a 
              href="https://www.linkedin.com/in/sarah-ishimwe/" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -3 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/ishimwesarah" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -3 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              href="mailto:ishimwesarah09@gmail.com"
              whileHover={{ y: -3 }}
            >
              <FiMail />
            </motion.a>
            <motion.a 
              href="tel:+250784711354"
              whileHover={{ y: -3 }}
            >
              <FiPhone />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <img 
              src={her}
              alt="Sarah Ishimwe" 
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;