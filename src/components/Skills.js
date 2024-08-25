import React from 'react';

function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <center><div className="separator"></div></center>
      <br></br>
      <div className="skills-container">
        <div className="skill-item">
          <i className="fab fa-cuttlefish"></i>
          <span>C</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-python"></i>
          <span>Python</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-html5"></i>
          <span>HTML</span>
        </div>
        <div className="skill-item">
            <i className="fab fa-css3-alt"></i>
            <span>CSS</span>
        </div>
        <div className="skill-item">
            <i className="fab fa-bootstrap"></i>
            <span>Bootstrap</span>
        </div>
        <div className="skill-item">
            <i className="fab fa-js-square"></i>
            <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-react"></i>
          <span>React</span>
        </div>

        <div className="skill-item">
            <i className="fab fa-ubuntu"></i>
            <span>MySQL</span>
        </div>
        <div className="skill-item">
            <i className="fab fa-github"></i>
            <span>Git/Github</span>
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
