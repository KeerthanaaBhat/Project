import React from 'react';

// Import images
import Cert1Img from './images/Certificate 1.jpg';
import Cert2Img from './images/Certificate 2.jpg';
import Cert3Img from './images/Certificate 3.jpg';
import Cert4Img from './images/Certificate 4.jpg';
import Cert5Img from './images/Certificate 5.jpg';
import Cert6Img from './images/Certificate 6.jpg';
import Cert7Img from './images/Certificate 7.jpg';

// Import PDF links
import Cert1Pdf from './images/Certificate 1.pdf';
import Cert2Pdf from './images/Certificate 2.pdf';
import Cert3Pdf from './images/Certificate 3.pdf';
import Cert4Pdf from './images/Certificate 4.pdf';
import Cert5Pdf from './images/Certificate 5.pdf';
import Cert6Pdf from './images/Certificate 6.pdf';
import Cert7Pdf from './images/Certificate 7.pdf';

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 style={{ textAlign: 'center' }}>Certificates</h2>

      <center><div class="separator"></div></center> 
      <br></br><br></br>
      <div className="image">
        <div className="certificate">
          <a href={Cert1Pdf} target="_blank" rel="noopener noreferrer">
            <img src={Cert1Img} alt="Certificate 1" />
          </a>
        </div>
        <div className="certificate">
          <a href={Cert2Pdf} target="_blank" rel="noopener noreferrer">
            <img src={Cert2Img} alt="Certificate 2" />
          </a>
        </div>
        <div className="certificate">
          <a href={Cert3Pdf} target="_blank" rel="noopener noreferrer">
            <img src={Cert3Img} alt="Certificate 3" />
          </a>
        </div>
        <div className="certificate">
          <a href={Cert4Pdf} target="_blank" rel="noopener noreferrer">
            <img src={Cert4Img} alt="Certificate 4" />
          </a>
        </div>
        <div className="certificate">
          <a href={Cert5Pdf} target="_blank" rel="noopener noreferrer">
            <img src={Cert5Img} alt="Certificate 5" />
          </a>
        </div>
        <div className="certificate">
          <a href={Cert6Pdf} target="_blank" rel="noopener noreferrer">
            <img src={Cert6Img} alt="Certificate 6" />
          </a>
        </div>
        <div className="certificate">
          <a href={Cert7Pdf} target="_blank" rel="noopener noreferrer">
            <img src={Cert7Img} alt="Certificate 7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
