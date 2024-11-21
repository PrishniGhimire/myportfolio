import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Make the main container a flexbox */}
        <Navbar />
        <main className="flex-grow"> {/* This makes the main content area take up the available space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer /> {/* Footer remains at the bottom */}
      </div>
    </Router>
  );
};

export default App;
