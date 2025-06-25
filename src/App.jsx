import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <AnimatePresence>
          {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
          {activeSection === 'about' && <About />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'certificates' && <Certificates />}
          {activeSection === 'contact' && <Contact />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;