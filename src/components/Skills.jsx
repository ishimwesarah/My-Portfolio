import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'React Native', level: 75 },
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 70 },
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'Git/GitHub', level: 80 },
  { name: 'API Integration', level: 75 },
  { name: 'Responsive Design', level: 85 },
];

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="skills-section"
    >
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="skill-item"
          >
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                className="skill-progress"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;