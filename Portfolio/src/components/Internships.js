import React from 'react';


// Import images
import BootstrapImage from './images/Bootstrap KS.png';
import CertificateImage1 from './images/Certificate KEERTHANA 4SO21CS073.jpg';
import CertificatePDF1 from './images/Certificate KEERTHANA 4SO21CS073.pdf';
import MotionCutImage from './images/MotionCut image.png';
import CertificateImage2 from './images/KEERTHANA Certificate.png';
import CertificatePDF2 from './images/KEERTHANA Certificate.pdf';

const Internships = () => {
  return (
    <section id="internships">
        
      <h2>Internships</h2>
      <center><div className="separator"></div></center>
      <br></br><br></br>
      <div className="internship-container">
        <div className="internship-details">
          <h3><strong>Kakunje Software Private Limited, Mangalore</strong></h3>
          <p style={{ color: '#909195' }}>Front-End Web Development Intern</p>
          <div className="skills">
            <button>HTML</button>
            <button>CSS</button>
            <button>JS</button>
            <button>BOOTSTRAP</button>
          </div>
        </div>

        <div className="github">
          <a href="https://keerthanaabhat.github.io/Project/BootStrap%20-%20Mental%20Health/KS%20-%20Bootstrap/" target="_blank" rel="noopener noreferrer">
            <img src={BootstrapImage} alt="GitHub Repository" />
          </a>
        </div>

        <div className="certificate">
          <a href={CertificatePDF1} target="_blank" className="certificate-link" rel="noopener noreferrer">
            <img src={CertificateImage1} alt="Certificate" style={{ width: '280px' }} />
          </a>
        </div>
      </div>

      <br />

      <div className="internship-container">
        <div className="internship-details">
          <h3><strong>MotionCut, Online</strong></h3>
          <p style={{ color: '#909195' }}>Web Development Intern</p>
          <div className="skills">
            <button>HTML</button>
            <button>CSS</button>
            <button>JS</button>
          </div>
        </div>

        <div className="github">
          <a href="https://keerthanaabhat.github.io/Project/E%20Commerce%20-%20Talking%20Tees/Motioncut%20Project/" target="_blank" rel="noopener noreferrer">
            <img src={MotionCutImage} alt="GitHub Repository" />
          </a>
        </div>

        <div className="certificate">
          <a href={CertificatePDF2} target="_blank" className="certificate-link" rel="noopener noreferrer">
            <img src={CertificateImage2} alt="Certificate" />
          </a>
        </div>
      </div>

      
    </section>
  );
};

export default Internships;
