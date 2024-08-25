import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import Internships from './components/Internships';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="line-divider"></div>
      <div className="content">
        <Home />
        <About />
        <Skills />
        <Internships/>
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}

export default App;
