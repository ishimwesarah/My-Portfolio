import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor of Science in Business, Information, and Technology",
    institution: "University of Rwanda",
    year: "Graduated Oct 2024",
    description: "Combined business and technology curriculum with focus on IT applications in business"
  },
  {
    degree: "Software Development Training Program",
    institution: "kLab Innovation Hub",
    year: "Dec 2024 - Present",
    description: "Practical training in modern web and mobile development technologies including React, Node.js, and React Native"
  }
];

const Education = () => {
  return (
    <motion.section 
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="education-section"
    >
      <h2 className="section-title">Education & Training</h2>
      
      <div className="education-container">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="education-card"
          >
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span>{edu.year}</span>
            </div>
            <h4>{edu.institution}</h4>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;