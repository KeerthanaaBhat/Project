import React, { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('personal-info');

  const handleNavClick = (event, sectionId) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    setActiveSection(sectionId);
  };

  return (
    <section id="about">
      <nav className="sub-navbar">
        <ul>
          <li>
            <a
              href="#personal-info"
              className={`sub-nav-link ${activeSection === 'personal-info' ? 'active-link' : ''}`}
              onClick={(event) => handleNavClick(event, 'personal-info')}
            >
              Objective
            </a>
          </li>
          <li className="partition"></li>
          <li>
            <a
              href="#education"
              className={`sub-nav-link ${activeSection === 'education' ? 'active-link' : ''}`}
              onClick={(event) => handleNavClick(event, 'education')}
            >
              Education
            </a>
          </li>
        </ul>
      </nav>
      <center>
        <div className="separator" style={{ width: '25%' }}></div>
      </center>

      <div id="personal-info" className={`about-content ${activeSection === 'personal-info' ? 'active' : ''}`}>
        <div className="objective-content">
          <h2>Objective</h2>
          <p>
            A passionate Computer Science undergraduate skilled in software and web development, eager to contribute to an organization's growth and enhance technological efficiency. Seeking an entry-level developer position that offers opportunities to apply problem-solving skills and advance in Computer Science.
          </p>
          <div className="social-icons">
            <a href="https://github.com/KeerthanaaBhat" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/keerthanabhat/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="contact-info">
            <p>
              Email: <a href="mailto:keerthanabhat03@gmail.com">keerthanabhat03@gmail.com</a><br />
              Mobile: <a href="tel:+919611731406">9611731406</a>
            </p>
          </div>
        </div>
      </div>

      <div id="education" className={`about-content ${activeSection === 'education' ? 'active' : ''}`}>
        <div className="education-content">
          <div className="education-details">
            <div className="institution">
              <h3><strong>St Joseph Engineering College</strong></h3>
              <span>Mangalore, India</span>
            </div>
            <div className="course">
              <p style={{ color: 'white' }}>B.E – Computer Science Engineering; CGPA: 8.6 (V Sem)</p>
              <p>December 2021 - Present</p>
            </div>
          </div><br />
          <div className="institution">
            <h3><strong>Sharada PU College</strong></h3>
            <span>Mangalore, India</span>
          </div>
          <div className="course">
            <p style={{ color: 'white' }}>PCMC; Percentage: 93%</p>
            <p>June 2020 – July 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
