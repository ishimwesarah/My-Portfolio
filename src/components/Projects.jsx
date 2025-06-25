import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Project.css'; 
import p1 from '../assets/mob.jpg';
import p2 from '../assets/she.png';
import p3 from '../assets/ecc.png';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with product listings, cart functionality, and secure checkout process.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
    github: "https://github.com/ishimwesarah/Ecommerce",
    live: "https://ecommerce-nxuv.vercel.app/",
    image: p3
  },
  {
    title: "SheLeads Finance",
    description: "Financial dashboard for women entrepreneurs with analytics, budgeting, and investment tracking.",
    technologies: ["React", "Firebase", "Chart.js", "Material UI"],
    github: "https://github.com/ishimwesarah/sheleads",
    live: "https://sheleads-rust.vercel.app/",
    image: p2
  },
  {
    title: "Recipe Book Mobile App",
    description: "Cross-platform mobile application with recipe search, favorites, and meal planning features.",
    technologies: ["React Native", "Firebase", "Expo"],
    github: "#",
    live: "#",
    image: p1
  }
];

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-section"
    >
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        <div className="section-divider"></div>
      </div>

      <div className="projects-container">
        {/* Desktop View - Swiper Carousel */}
        <div className="desktop-view">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="project-card"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay"></div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FiGithub /> Code
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="mobile-view">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;