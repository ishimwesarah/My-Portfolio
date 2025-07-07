import { motion } from 'framer-motion';
import ce1 from '../assets/4P5A5542.jpg'


const certificates = [
  {
    title: "Software Development Certification",
    institution: "kLab Innovation Hub",
    year: "2024",
    imageUrl: ce1 
  },
  
];

const Certificates = () => {
  return (
    <motion.section 
      id="certificates"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="certificates-section"
    >
      <h2 className="section-title">My Certifications</h2>
      
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="certificate-card"
          >
            <div className="certificate-image-container">
              <img 
                src={cert.imageUrl} 
                alt={`${cert.title} certificate`} 
                className="certificate-image"
              />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>{cert.institution}</p>
              <span>{cert.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates;