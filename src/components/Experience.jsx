import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Software Development Trainee",
    company: "kLab Innovation Hub",
    period: "Dec 2024 - Present",
    location: "Kigali, Rwanda",
    responsibilities: [
      "Practical training in modern web and mobile development technologies",
      "Building responsive applications using React.js and React Native",
      "Developing backend services with Node.js and Express.js",
      "Contributing to team-based software projects with Git version control",
      "Implementing API integrations and database solutions"
    ]
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    location: "Remote",
    responsibilities: [
      "Developed and maintained web applications for clients using React and Node.js",
      "Created responsive UI components with modern CSS techniques",
      "Implemented RESTful APIs and integrated third-party services",
      "Collaborated with clients to understand requirements and deliver solutions"
    ]
  }
];

const Experience = () => {
  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="experience-section"
    >
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <div className="timeline-meta">
                <span>{exp.company}</span>
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
              <ul className="timeline-desc">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;