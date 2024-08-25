import React from 'react';

function Home() {
  return (
    <div id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a passionate developer</p>
      <div className="social-icons">
        <a href="https://x.com/bhat_keert25520"><i className="fab fa-twitter" target='_blank'></i></a>
        <a href="https://www.linkedin.com/in/keerthanabhat" target='_blank'><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/KeerthanaaBhat/Project" target='_blank'><i className="fab fa-github"></i></a>
      </div>
      
      <a href="./KEERTHANA.pdf" className="btn" target="_blank" download >Download Resume</a>
    </div>
  );
}

export default Home;
