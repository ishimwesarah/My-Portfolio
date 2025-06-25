import { motion } from 'framer-motion';
import './SkillsRing.css';

const skills = [
  { name: 'React', level: 85, color: '#61DAFB' },
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'Node.js', level: 80, color: '#68A063' },
  { name: 'CSS', level: 85, color: '#2965F1' },
  { name: 'React Native', level: 75, color: '#61DAFB' },
  { name: 'MongoDB', level: 70, color: '#47A248' }
];

const SkillsRing = () => {
  return (
    <div className="skills-ring-container">
      {skills.map((skill, index) => {
        const circumference = 2 * Math.PI * 40;
        const strokeDashoffset = circumference - (skill.level / 100) * circumference;
        
        return (
          <motion.div 
            key={index}
            className="skill-ring"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <svg className="progress-ring" width="100" height="100">
              <circle
                className="progress-ring-circle"
                stroke={skill.color}
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="skill-info">
              <span className="skill-percent">{skill.level}%</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillsRing;